---
title: 'Bootstrap'
description: 'Add bootstrap and blog post tags'
pubDate: '2025-01-08'
heroImage: 'https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDI1fHxib290JTIwc3RyYXB8ZW58MHx8fHwxNzM2Mzc1Njk3fDA&ixlib=rb-4.0.3&q=80&w=200'
tags: ['dev', 'css', 'this-site', 'astro']
---

Today I added some features into the site:
1. Added tag pills at the bottom of blog post layout.
2. Added Bootstrap CSS for styling. 

### Tag Pills
1. First I update the blog schema in `src/content.config.ts`, adding the `tags` field.

```typescript
tags: z.array(z.string()).optional(),
```

2. Then in `BlogPost.astro`, add `tags` new props:

```javascript
const { ..., heroImage, tags } = Astro.props;
```

3. Finally adding the markup:
```html
<div style="display: flex;">
{tags && tags.map((tag: string) => 
    <div><span class="badge text-bg-secondary">#{tag}</span>&nbsp;</div>
)}
</div>
```

### Adding Bootstrap CSS

1. Install Bootstrap:
```shell
yarn add bootstrap
```

2. Import the bootstrap CSS into `BaseHead.astro`:
```typescript
import 'bootstrap/dist/css/bootstrap.min.css';
```

That's it. I can use the color classes now! :rocket: