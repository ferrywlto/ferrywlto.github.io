---
title: 'v1.0.0 Launch and what I learned'
description: 'Documentation of the site development process leading up to the v1.0.0 launch.'
pubDate: '2025-09-30'
tags: ['development', 'website', 'log']
---

It took me another 3 months to finally launch the v1.0.0 of my personal website. 

In July I created a little tool to help me pick colors for the new system. It will be listed in the projects page soon.

Decided to learn about the basics of CSS, in August I revamped the design of my [company website](https://verdantsparks.io). It was something that I delayed for a year or two. I worked for backend most of the time, therefore I learned just the frameworks like Vue/React/Angular in the past but never really dived into the core of CSS. This makes me lacks the fundamental knowledge to build websites correctly. With the use of my theme color picker tool, I managed to create a color scheme that I like. Transitioned the website from Vue2 which is a web app and not SEO friendly to Astro, which is a static site generator. 

I will say `Astro` is the best frontend tech I learned this year. It brings me back the joy of building websites, without painful configurations and build systems for just a single hello world page. In addition, the HTML+CSS+JS fundamentals is important Blazor development. Now I feel comfortable to build stuff with full stack .NET.

After the company website revamp is done, I revert back to my personal website as I feel my previous design is too complex. I am a fan of minimalist. With the knowledge I learned from the company website, I tried to define the design system and build my personal website from scratch. Finally, after a month of work, I launched the v1.0.0 version of this site.

Now the site looks better, has minimal dependencies (just `astro` and `alpinejs`), is SEO optimized, mobile friendly, and fast.

Next time when I create a new website, I will start with the design system first. 
1. Color
2. Typography
3. Spacing
4. Layout
5. Effect

This will make the development process much easier.

Of course we can speed up the process much faster with Figma and then generate the design system from there. But I want to learn the fundamentals first. Anyway, I still believe that modern web development is over-engineered. It should always be simple and just **HTML + CSS + JS**. Using `Alpine.js` already keeps the JavaScript part minimal. The less dependencies the less supply chain security risks as well. Isn't it? 😀

Both of my personal and company websites still have many improvements to be done, but excellence is better than perfection. I have created issues in the repo and will work on them from time to time. Thank you for reading this far.
