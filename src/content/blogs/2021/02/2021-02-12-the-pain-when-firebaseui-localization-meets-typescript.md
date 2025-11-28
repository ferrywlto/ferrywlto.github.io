---
title: 'The Pain — When firebaseui localization meets TypeScript'
description: 'My struggle on how to build localized firebaseui package for TypeScript project'
pubDate: '2021-02-12'
heroImage: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*wuGzppvSr7CmpAL5'
tags: ['typescript', 'firebaseui', 'localization', 'vuejs', 'web-development']
---

The existence of BaaS (Backend as a Service) makes development for web/mobile app much easier. It saves you much time from concerning backend architecture, scaling and availability issues. Some of them also do the heavy lifting tasks like authentication for you. Firebase is one of the most famous BaaS provider.

[[firebaseui]](https://github.com/firebase/firebaseui-web) There is a free and open-sourced UI library under [[firebase]](https://firebase.google.com/). It is used by developers for user sign-up/sign-in authentication flow. With **firebaseui**, integrate sign-in with social IdP (Identity Provider) like Facebook, Google & Apple no longer a pain in the ***.

Everything is good until your app needs to support language other than English.

When you search the term "localize" in **firebaseui** repository, you can see that this is a topic which developers keep asking since 2016.

![Issues related to localization of firebaseui](https://miro.medium.com/v2/resize:fit:1400/1*O01G_uFaDa_DpvjDfCmWug.png)

The mechanism of multi language support of **firebaseui** is to load the localized version binary from CDN per language. That means for static web site or most SPA nowadays, when the page loads the language of **firebaseui** is fixed. There are workarounds to make it more dynamic. For example, some may create `<script>` tag at runtime to load different localized build via CDN. However, once **firebaseui** has been loaded, a whole page reload is required for language change in most cases.

**This approach applies to JavaScript only.**

Why?

This is because you need to install the **firebaseui** default **npm** package for typings. Otherwise code like “new firebaseui.auth.AuthUI()” will not able to compile. And by using the default npm package, the localized CDN version loaded by dynamically created `<script>` tag will have no effects. When rendered the “lang” attribute are still “en”.

![Rendered UI of default firebaseui npm package](https://miro.medium.com/v2/resize:fit:606/1*wMtQpL5ceF--yIjKtt6kCg.png)

![Language is still set to `en`](https://miro.medium.com/v2/resize:fit:738/1*2br34aKg5LrzGNrw8khhzA.png)


Although it was written in Angular and have types defined. It seems **firebaseui** is not too **TypeScript** user friendly, at least not in localization. According to the “README.md” from **firebaseui** repository, the only options left for us become pull and build the localized **firebaseui** package by our own.

The original “README.md” on GitHub provides steps on building localized JavaScript library and npm module. However we are using **TypeScript** and ES module import and I find that the building localized ES module section is missing. Therefore I created this [[issue]](https://github.com/firebase/firebaseui-web/issues/815).

The following instructions on how did I successfully build and use the Traditional Chinese version (using “zh-TW” as “LANGUAGE_CODE”) of **firebaseui** in my **TypeScript** Vue project was originally in my README.md patch. Since the repository owner requested to remove the section in my pull request [[comment]](https://github.com/firebase/firebaseui-web/pull/816#discussion_r574926010), saying that is a very unique use case so I put it down here and hope this helps other developers in future:

1. Follow the instructions on **firebaseui** repository README to build localized version on your machine.

2. Ensure all of the following commands were executed:

```bash
npm run build build-npm-zh-TW  
npm run build build-esm-zh-TW  
npm run build build-js-zh-TW
```

3. Now you have all files ready in `dist` folder. Create a folder named “firebaseui” in your project source folder (e.g. “src”). Your folder structure should look like this:
```bash
    +-_src  
    | +-_firebaseui  
    |   +-_dist
```

4. Copy “package.json” from “firebaseui” repo to “src/firebaseui” of your project.

5. In “src/firebaseui/dist” folder,  
   delete “npm.js”, “npm__en.js”, “firebaseui.js”, “firebaseui__en.js”, “esm.js”, “esm__en.js”.

   Then rename “npm__zh_tw.js” to “npm.js”,  
   “firebaseui__zh_tw.js” to “firebaseui.js” and  
   “esm__zh_tw.js” to “esm.js”.

6. Now you have a local localized firebaseui package in your project. You can now import it this way:

```typescript
import * as firebaseui from "./firebaseui";
```

You will see the rendered firebaseui is now in Traditional Chinese.

![UI in Traditional Chinese](https://miro.medium.com/v2/resize:fit:712/1*9cG8EN5zSBz-lpYjh0BFCg.png)

![Lang attribute changed to “zh-TW”](https://miro.medium.com/v2/resize:fit:800/1*hddGxHv5GicLnb5rEjKObQ.png)

**How to change language then?**

> Unfortunately, true dynamic language change from SPA without reload is not possible for firebaesui at the moment.

In JavaScript project one may try: (Not tested)  
1. Dynamically remove the firebaseui `<script>` tag  
2. Create new `<script>` tag with `src` point to new language version. 
3. Attach the new `<script>` tag back to DOM.  
4. Call AuthUI.reset() then AuthUI.start().

In TypeScript project this will be a bit tricky, and verbose:  
- Duplicate app per language with the only differences in the `src/firebaseui/dist` folder.  
- Use MPA setup instead of SPA to share as much code as possible  
- Separate the authentication flow from main application logic to trim the impact area to minimal.  
- Backend support for inter-page state management may required for complex use case.

🎉 If you have other solutions please feel free to share in comments. 😀

This post was originally published on [[Medium]](https://ferrywlto.medium.com/the-pain-when-firebaseui-localization-meets-typescript-a85ffcf614fc).
