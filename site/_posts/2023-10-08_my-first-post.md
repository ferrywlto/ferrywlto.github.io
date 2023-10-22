---
title: My first post on using Razor SSG
summary: Testing out Razor SSG and write down what need to caution when deploying to GitHub Pages
author: Ferry To
tags: [blog, dev]
image: https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000
---

# Changes required to host our personal / organization site on GitHub Pages successfully

Razor SSG is a new free, powerful .NET project template provided by [ServiceStack](https://servicestack.net/) from their blog post [here](https://servicestack.net/posts/razor-ssg). From the past, static site rendering (SSG) has limited free options available, some may heard of [Statiq Framework](https://www.statiq.dev/framework) but it has learning curve. I was using Nuxt.js, it was awesome and easy to learn to be honest. However my ultimate goal, is to do as much as I can using the few stack as possible. Luckily I found this fantastic, work out of box template from ServiceStack.

## 1. Fix the GitHub Action

In `build.yml`:
```yml 
echo "ssg_base_href=$(echo https://$org_name.github.io/$repo_name/)" 
echo "ssg_base_href=$(echo https://$org_name.github.io/$repo_name/)" >> $GITHUB_ENV
```

These lines need replace as
```yml
echo "ssg_base_href=$(echo https://$org_name.github.io/)" 
echo "ssg_base_href=$(echo https://$org_name.github.io/)" >> $GITHUB_ENV
```

This is because organization and personal website has special url pattern `https://$org_name.github.io/`, instead of project page url pattern `https://$org_name.github.io/$repo_name/`

## 2. Fix runtime Chrome error caused by loading CreatorKit

### 2.1 Remove code from `Footer.cshtml`
When page load, it will attempt to load CreatorKit, since we are not using CreatorKit thus have to remove / comment out this code at the bottom of `Footer.cshtml` as the TODO comment suggest, otherwise browser will throwing errors in console log

```html
@* <script type="module">
//TODO: Replace with local and production URLs of CreatorKit .NET App or Remove if not using CreatorKit
@{ var components = HostContext.DebugMode ? "https://localhost:5001/mjs/components" : "https://creatorkit.netcore.io/mjs/components"; }
import { mail } from '@components/mail.mjs'
import { post } from '@components/post.mjs'

mail('[data-mail]', { 
    mailingLists: ['MonthlyNewsletter'] 
})

post('[data-post]', {
    commentLink: { 
        href: '/community-rules',
        label: 'read the community rules'
    } 
})
</script> *@
```

Browser Errors
```
:5002/:331 GET https://localhost:5001/mjs/components/mail.mjs net::ERR_CONNECTION_REFUSED
:5002/:332 GET https://localhost:5001/mjs/components/post.mjs net::ERR_CONNECTION_REFUSED
```

### 2.2. Remove code from `app.mjs`
Have to remove the following code at the bottom of `app.mjs` as we are not using CreatorKit. Browser will throw error otherwise. 

```js
export function init(exports) {
    // if (AppData.init) return
    // client = JsonApiClient.create('https://blazor-gallery-api.jamstacks.net')
    // const { loadMetadata } = useMetadata()
    // loadMetadata({
    //     olderThan: 24 * 60 * 60 * 1000, //1day
    //     resolvePath: `https://blazor-gallery-api.jamstacks.net/metadata/app.json`
    // })
    // AppData = reactive(AppData)
    // AppData.init = true
    // mountAll()

    // if (exports) {
    //     exports.client = client
    //     exports.Apps = Apps
    // }
}
```

Browser Errors
```
app.mjs:59 Uncaught TypeError: Cannot read properties of null (reading '__vue_app__')
    at alreadyMounted (app.mjs:59:33)
    at mount (app.mjs:70:9)
    at (index):201:1
```

## 3. Fix the `/posts` endpoint
