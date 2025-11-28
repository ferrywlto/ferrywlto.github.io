---
title: "Step-by-step guide on creating and publishing a Vue.js plugin"
description: "A journey of learning how to share Vue.js code by bundling and publishing as a package."
pubDate: "2020-11-16"
heroImage: "https://miro.medium.com/v2/resize:fit:1400/0*ziRdBfK_xoRlH3s2"
tags: ["vuejs", "npm", "vue-plugin", "javascript", "web-development"]
---

This is a journey of learning how to share the Vue.js code to my colleagues some times ago. There are cases that you don’t want to copy & paste your elegantly crafted component from project to project or sharing to your friends. The solution is to bundle it as a package and publish it so other developers can keep their hands DRY. This post will provide step-by-step instructions on how to create your first component, publish to NPM (Node Package Manager) registry and GPR (GitHub Package Registry).

The files we need in this demo:

![Folder structure](https://miro.medium.com/v2/resize:fit:398/1*vFwF8kNWeoEp8-_Xv1zZLw.png)

This project will create a most basic Vue plugin, it consist a Vuex store, and two SFC (Single File Component) that read the vuex store. Build, pack and publish them as NPM package and finally consume it back from NPM registry.

## Create the plugin

Let’s take a look into the source files of our most simple plugin.

```js
// myPlugin/myComponentA.vue
<template>
    <div>Foo: {{getSharedStoreState}}</div>
</template>
<script>
    export default {
        name: 'component-a',
        computed: {
            getSharedStoreState() {
                return this.$store.state.my_store.foo - 1;
            }
        }
    };
</script>

// myPlugin/myComponentB.vue
<template>
    <div>Bar: {{getSharedStoreState}}</div>
</template>
<script>
    export default {
        name: 'component-b',
        computed: {
            getSharedStoreState() {
                return this.$store.state.my_store.foo + 1;
            }
        }
    };
</script>

// myPlugin/store.js
const store = {
    namespaced: true,
    state: {
        foo: 123,
    }
};
export default store;

// myPlugin/index.js
import componentA from './myComponentA';
import componentB from './myComponentB';
import myStore from './store.js'

const MyPlugin = {
    install(Vue, rootStore) {
        // Vue is a Vue Constructor, not an Vue instance. This plugin requires passing the main app Vue instance as options parameter.
        // Vue.component need to be called BEFORE new Vue() in main.js...
        Vue.component(componentA.name, componentA);
        Vue.component(componentB.name, componentB);

        const storeName = 'my_store';

        // While app only available AFTER new Vue() in main.js...
        // Add store only once.
        if(!rootStore.hasModule(storeName)) {
            rootStore.registerModule(storeName, ProximityStore);
        }
    }
}
export default MyPlugin;
export {componentA, componentB}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(MyPlugin)
}
```

Every plugin is an object with a `install` function. The function takes a Vue constructor and a vuex store as parameter. Inside the `install` function, we register the components this plugin used and dynamically register the vuex store at runtime. It is always an good idea to check if the vuex store already exists so we won’t have the same store register multiple times.

The first line of `export` statement enable other developers to call `Vue.use()` to install your plugin. The second one enable other developers to use the components of your plugin in their code (e.g. SFC).

The last line of code is for developers that install Vue from `script` tag, so that the plugin can install automatically after Vue is ready at run time.

---

## Installing the plugin

So you have the plugin defined. Let’s use it in your project to test whether it works.

```js
// main.js
import Vue from "vue";
import App from "./App.vue";
import myPlugin from "./myPlugin/index.js";
import Vuex from "vuex";
import rootStore from "./store.js";
Vue.use(Vuex);

Vue.use(myPlugin, rootStore);

new Vue({
  render: (h) => h(App),
  store: rootStore,
}).$mount("#app");
```

Let’s focus on this line:

```js
Vue.use(myPlugin, rootStore);
```

**Why do we need to pass `rootStore` as parameter?**  
This is because you are not able to access Vuex store **BEFORE** `new Vue()` instance created in the `install()` method inside plugin.  
In-addition, global component registration **MUST** perform ahead of calling `new Vue()`.

```js
// store.js
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    bar: 456,
  },
  modules: {
    a: {
      namespaced: true,
      state: {
        hello: "world",
      },
    },
  },
});
export default store;
```

The root vuex store defined as above. This is used to demonstrate how plugin’s vuex store interact with the app’s one.

---

## Validate the plugin

Now we write the code to actually use the plugin.

The App.vue is the default version generated from `vue-cli`.

```js
// App.vue, styles omitted.
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
}
</script>

// components/HelloWorld.vue
<template>
  <div class="hello">
    {{msg}}
    <component-a/>
    <component-b/>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
```

As you can see, you can use the components in your App’s SFC now.

![Vue dev tool](https://miro.medium.com/v2/resize:fit:1138/1*1Iv-ZWmWs3xHjjSoEael6Q.png)

Now the plugin has installed, the components from plugin can be used and can access the plugin’s vuex store. The plugin’s vuex store has been successfully registered as a module of the root store.

---

## Pack and publish the plugin

You have a worked plugin, it’s time to share your work to the world. :)

Here are the steps:

1. Build your plugin as library and use the plugin definition file as input by: `vue-cli-service` `build --target lib --name myPlugin . /src/myPlugin/index.js`.

You should see something similar to this image:

![Build output](https://miro.medium.com/v2/resize:fit:1150/1*3uyPpXHyR-F5glgzkktBlg.png)

Your `dist` folder should now have these files created:

![The dist folder](https://miro.medium.com/v2/resize:fit:444/1*1MUmcpnRFStedG8fZHeOEw.png)

2. Update `package.json`:

To save time so we don’t have to type the whole build command everytime, I added this in `script` section:

```json
`”build-plugin”: “vue-cli-service build — target lib — name myPlugin ./src/myPlugin/index.js”`
```

the whole `script` section now looks like:

```json
    "scripts": {
        "serve": "vue-cli-service serve",
        "build": "vue-cli-service build",
        "lint": "vue-cli-service lint",
        "build-plugin": "vue-cli-service build --target lib --name myPlugin ./src/myPlugin/index.js"
      },
```

There are some important fields we need to add in order to publish our package successfully:

**_- name_**

You package name that will discover by other developers.

**_- version_**

Specify your package version in semver format. Note that you cannot pushing package with the same or older version number to NPM. Thus you need to update it whenever before you attempt to update the package.

**_- license_**

Specify your package license, e.g. this repo is MIT license.

**_- repository_**

Specify your package repository url, e.g. this GitHub repository url.

**_- private_**

Specify does this package can discover by public

- **files\***

Specify what files you want to include in the published package, some will include the source of their package as well for easier debugging. For this demo we just keep the built files.

- **main\***

Highly important, specify the file to load when someone import your plugin.  
For example, if I set: `"main": "./dist/myPlugin.common.js",` instead of `"main": "./dist/myPlugin.common.js",`. The developer who consume your package will encounter this when they execute `yarn serve`:

![Build error](https://miro.medium.com/v2/resize:fit:1154/1*VRNPpnQlHQOMcpE9YMP4bA.png)

**_Really make sure the `main` field has correctly set._**

Our resulting `package.json` should look like this:

```json
{
  "name": "vue-plugin-demo-pkg",
  "version": "0.1.5",
  "private": false,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "build-plugin": "vue-cli-service build --target lib --name myPlugin ./src/myPlugin/index.js"
  },
  "main": "./dist/myPlugin.common.js",
  "files": [
    "dist/*"
  ],
  "license": "MIT",
  "repository": "https://github.com/VerdantSparks/Vue-Plugin-Demo",
  ... omitted
}
```

3. run `yarn publish` :

If you did not login before, you should do that via `yarn login`.

**NOTE: You need to have an NPM account and have your email verified before you can push any package to NPM. Otherwise you will see this error during publish (and receive an email from NPM):**

![Error of could not publish package](https://miro.medium.com/v2/resize:fit:1400/1*XAHO3ZTPZ_Oa7BKxv7K5Pg.png)

You should see something similar if you pushed your package successfully.

![Publish success messages](https://miro.medium.com/v2/resize:fit:944/1*dmxXWVcWErPgk2OIHP7h-A.png)

Let’s see your package information via `yarn info <your_package_name>`

![Yarn package information](https://miro.medium.com/v2/resize:fit:546/1*m5SpXTTC08SHBOqUJXY-8Q.png)

---

## Installing your own plugin from NPM

Great. Your package is now available to developers all around the world. Let’s pull your own package back and use it instead of the plugin source code.

1. Run `yarn add vue-plugin-demo-pkg`

2. Update `main.js`:

change `import myPlugin from "./myPlugin/index`

to `import myPlugin from "vue-plugin-demo-pkg"`

3. Run `yarn serve`

4. You should find that the plugin is now load from `node_module` and works exactly the same as you reference it locally.

## 🎉 Congratulations 🎉

You have learned how to create your great Vue plugin and publish it to NPM‼ 🍺

---

## One more thing. 👀

You know how to push your plugin package to npm, how about if you want to host your package on GitHub?

## Publish the plugin to GPR (GitHub Package Registry)

1. Update `package.json`, add:

```json
"publishConfig": {
    "registry": "https://npm.pkg.github.com/@<YOUR_USERNAME_OR_ORG_NAME>"
  },
```

![Github Package Registry](https://miro.medium.com/v2/resize:fit:1400/1*i5j6-nSgh3ZrRViwvAsNCA.png)

2. Login npm of GPR:

```bash
npm login --registry=https://npm.pkg.github.com --scope=@<YOUR_USERNAME_OR_ORG_NAME>
```

NOTE: if you omitted the `-—scope` switch, you will encounter a 404 not found error when you execute `npm publish`.

![Unauthorized error](https://miro.medium.com/v2/resize:fit:1400/1*x6g1su7ns1jHq41IW-HI-A.png)

3. Push your plugin to GPR: execute `npm publish`

![Publish to GPR](https://miro.medium.com/v2/resize:fit:1342/1*2IrO_ZCinp-s_WcMHQG_Vw.png)

4. Consume the plugin from GPR:

4.1 Create a new Vue project from Vue CLI: `vue create <app_name>`

4.2 Login GPR npm registry:

    npm login — registry=https://npm.pkg.github.com/ — scope=@<YOU_OR_ORG_GITHUB_NAME>

4.3 Install the plugin from GPR:

    npm i @<YOU_OR_ORG_GITHUB_NAME>/vue-plugin-demo-pkg

4.4 Update code to use the plugin:

```js
    // in main.js
    import Vue from 'vue'
    import App from './App.vue'
    import Vuex from 'vuex';
    Vue.use(Vuex);
    const rootStore = new Vuex.Store();

    import MyPlugin from '@VerdantSparks/vue-plugin-demo-pkg'
    Vue.use(MyPlugin, rootStore);
    Vue.config.productionTip = false

    new Vue({
      store: rootStore,
      render: h => h(App),
    }).$mount('#app')

    // in HelloWorld.vue
    <template>
        ...omitted
            <component-a/>
            <component-b/>
        </div>
    </template>

    // in package.json
        ...omitted
        "dependencies": {
        "@VerdantSparks/vue-plugin-demo-pkg": "^0.1.5",
        "core-js": "^3.6.5",
        "vue": "^2.6.11"
        },
        ...omitted
```

5. Run the Vue app: `npm serve`

You should see the plugin works as expected. 😀

Using `yarn` should work the same.

The complete source code could be found in [here](https://github.com/VerdantSparks/Vue-Plugin-Demo). Hope you enjoy this article and we can’t wait to see your gorgeous Vue.js plugin. 😉

---

## References

- https://www.digitalocean.com/community/tutorials/vuejs-creating-custom-plugins
- https://www.xiegerts.com/post/creating-vue-component-library-npm/
- https://www.xiegerts.com/post/creating-vue-component-librarystructure
- https://sebastiandedeyne.com/exposing-multiple-vue-components-as-a-plugin
- https://stackoverflow.com/questions/53089441/how-to-access-vuex-from-vue-plugin
- https://www.digitalocean.com/community/tutorials/vuejs-vuex-dynamic-modules
- https://www.5balloons.info/create-publish-you-first-vue-plugin-on-npm-the-right-way
- https://stackoverflow.com/questions/47540846/dependency-not-found-even-defined-in-package-json-and-node-modules
- https://stackoverflow.com/questions/57938784/not-found-put-https-npm-pkg-github-com-package-name

This post was originally published on [[Medium]](https://medium.com/@ferrywlto/step-by-step-guide-on-creating-and-publishing-a-vue-js-plugin-622c5748a631).
