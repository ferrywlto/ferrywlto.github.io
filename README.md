# ferrywl.to - My Personal Website

A modern, responsive hand-crafted website as my digital garden. Focused on clarity, performance, accessibility, and sustainable content structure.

```
├── public/                     # Static assets
│   ├── blog-placeholder-*.jpg  # Hero image placeholders
│   └── favicon.svg
├── src/
│   ├── assets/                 # Optimized assets (logos, photography, reserved media licenses)
│   ├── components/             # Reusable UI primitives and page sections
│   │   ├── layout/             # Header, footer, base head, etc.
│   │   ├── menu/               # Alpine-powered navigation components
│   │   ├── home-page/          # Landing page building blocks
│   │   ├── about-page/         # Structured about-page sections
│   │   └── whisper-page/       # Whisper presentation helpers
│   ├── content/                # Markdown collections (blogs/diaries/projects/whispers)
│   ├── layouts/                # Page layouts (`BaseLayout`, `ContentPost`, `TagCloud`)
│   ├── pages/                  # Route definitions (index, privacy, dynamic `[collection]` routes, tag pages)
│   ├── styles/                 # Design system CSS modules
│   ├── consts.ts               # Shared constants (paths, metadata)
│   ├── content.config.ts       # Content collections schema definitions
│   └── types.ts                # Shared TypeScript types
├── doc/
│   └── CHANGELOG.md          # Version history
├── new-blog.sh              # Blog creation helper
├── new-diary.sh             # Diary entry helper
├── new-whisper.sh           # Whisper creation helper
└── astro.config.mjs         # Astro configuration
```

## 🎨 Design System

The design system is token-driven (pure CSS custom properties) and mobile-first:

- **Color Tokens**: `--color-bg`, `--color-surface`, `--color-body`, semantic blends (`--color-text-title`, `--color-text-meta`, `--color-thread`), dual light/dark palettes
- **Typography Scale**: Fibonacci-derived modular scale (`--type-hero` through `--type-tag`) with adaptive `--base` for desktop
- **Font Weights & Line Heights**: Dedicated tokens (`--font-weight-hero`, `--line-height-body`, etc.) enabling predictable rhythm
- **Spacing & Radius**: Responsive gaps (`--gap-xs` … `--gap-xl`) and corner radii (`--corner-xs` … `--corner-pill`) shrink for mobile
- **Layout Primitives**: Utility classes (`.column-container`, `.row-to-column-on-mobile`, `.width-constrained-container`) keep markup minimal
- **Effects & Elevation**: Shadow + surface + hover utilities (`--photo-box-shadow`, `.surface-background-hover`) only apply when `@media (hover: hover)` matches
- **Transitions**: Motion tokens (`--transition-normal`, `--transition-slow`) used for subtle interactive feedback
- **Accessibility Utilities**: `.sr-only` helper and reduced complexity semantics for headings, links, lists

## ✨ Features

 -� **Privacy-First Analytics** - Simple Analytics with a transparent privacy policy page
 - **Multiple Content Types** - Blogs, diaries, projects, and whispers
- 🔍 **SEO & Discovery** - Canonical URLs, OpenGraph, sitemap & RSS curation
- 📡 **RSS Feed** - Unified feed for all content types
- 🚀 **Performance Focused** - 100/100 Lighthouse scores

- **Projects** - Portfolio and project showcases
All content uses Markdown with frontmatter validated via Astro Content Collections & Zod (strict types, date parsing, required fields).

## 📐 Design Guidelines

### Breakpoints
- **Mobile**: 375px - 1023px (hamburger menu)
- **Desktop**: ≥ 1024px (full navigation)

### Layout Constraints
- **Content Width**: Responsive with max-width constraints
- **Navigation**: Slide-out drawer on mobile, horizontal on desktop
- **Typography**: Fluid scaling based on screen size 

## 🚀 Getting Started

### Development Commands

| Command | Action |
|---------|--------|
| `yarn dev` | Start development server at `localhost:4321` |
| `yarn build` | Build production site to `./dist/` |
| `yarn preview` | Preview build locally |

### Content Creation

| Script | Purpose |
|--------|---------|
| `./new-blog.sh` | Create new blog post |
| `./new-diary.sh` | Create new diary entry |
| `./new-whisper.sh` | Create new whisper/quote |


## 🛠️ Tech Stack

- **[Astro.js](https://astro.build)** - Static site generator with component islands
- **[Alpine.js](https://alpinejs.dev)** - Lightweight JavaScript framework for interactivity
- **TypeScript** - Type-safe development
- **CSS Custom Properties** - Modern, maintainable styling
- **Content Collections** - Type-safe content management

## 🚀 Performance

- ✅ **100/100 Lighthouse Performance** - Optimized for Core Web Vitals
- ✅ **SEO Optimized** - Canonical URLs, OpenGraph, and structured data
- ✅ **RSS Feed** - Unified feed for all content types
- ✅ **Responsive Images** - Optimized loading with proper fallbacks
- ✅ **FOUC Prevention** - Instant theme application

## 📚 Content Management

Content is organized in collections under `src/content/`:

- **Blogs**: Technical articles with hero images and tags
- **Diaries**: Personal reflections and daily notes  
- **Projects**: Portfolio showcases with descriptions
- **Whispers**: Quick quotes and funny moments

All content uses Markdown with frontmatter (validated by Astro Content Collections + Zod schemas for type safety).

## 🎯 Deployment

The site is deployed to GitHub Pages with automatic builds on push to `master`.

## 📄 License

This project (except `/src/content` and `/src/assets/photos`) is open source and available under the [MIT License](LICENSE). Content & photos are all-rights-reserved.

---

**Built with ❤️ using Astro.js**

## 🎨 Design System Reference

### Color & Theme Tokens
```css
/* Primary Colors */
--color-primary: /* Brand color */
--color-bg: /* Background */
--color-surface: /* Cards/containers */
--color-border: /* Dividers/borders */

/* Typography Colors */
--color-text: /* Body text */
--color-text-meta: /* Secondary text */
--color-text-muted: /* Tertiary text */

/* Theme Support */
[data-theme='light'] { /* Light theme values */ }
[data-theme='dark'] { /* Dark theme values */ }
```

### Typography Scale (Fibonacci)
```css
/* Font Sizes */
--text-hero: /* Large hero text */
--text-section-title: /* Section headings */
--text-item-title: /* Card titles */
--text-body: /* Body text */
--text-meta: /* Small meta text */

/* Spacing */
--gap-xs, --gap-sm, --gap-md, --gap-lg, --gap-xl

/* Corner Radius */
--corner-sm, --corner-md, --corner-lg
```

### Component Architecture
- **Layouts**: `BaseLayout`, `ContentPost`, `TagCloud` unify page scaffolding
- **Navigation**: `menu/` (drawer, hamburger, theme toggle, menu link) with Alpine.js state
- **Content Primitives**: `HeroImage`, `PostPreview`, `FormattedDate`, `TagPill`, `TagRow`
- **Section Modules**: `home-page/` (lists, cards) & `about-page/` (section & subsection wrappers)
- **Feedback & Interaction**: Hover classes (`.surface-background-hover`, `.hover-text-primary`) gated by hover media query for performance on touch devices
