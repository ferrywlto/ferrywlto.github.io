---
title: "Restart"
description: "My personal blogging finally"
pubDate: "2025/01/07"
heroImage: "/blog-placeholder-3.jpg"
---

This is my first post created after setting up the site with Astro. The goal is to break the project into bite sizes, doing bit by bit per day. The project was just initialized with Astro basic blog template. Using the GitHub Actions workflow file provide in Astro official site.

It suprise me that there are official auto actions that can be used to build and deploy the site. We no longer need to have a `gh-page` branch for deployment. Saving much storage spaces from GitHub Page site size and repository size limit.

The other thing worth to note is the official `actions/deploy-pages@v4` action will handle the `CNAME` file creation automatically. In the past I have to do:

```shell
echo ferrywl.to >> CNAME
```

and then copy it to the build artifacts.

[Astro](https://astro.build/) is good because it is progressive, work out of the box. With [AlpineJs](alpinejs.dev) I finally find a stack that is not painful to use and learn. Therefore this blog will add interactivity and asthesic stuff with AlpineJS in additional with my blog posts.
