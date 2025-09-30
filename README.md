# ferrywl.to - My Personal Website

A modern, responsive personal website hand-crafted without vibe coding.

```
├── public/                     # Static assets
│   ├── blog-placeholder-*.jpg  # Hero image placeholders
│   └── favicon.svg
├── src/
│   ├── assets/                 # Optimized assets
│   │   ├── logos/             # Brand and social icons
│   │   └── photos/            # Personal photos
│   ├── components/            # Reusable UI components
│   │   ├── BaseButton.astro   # CTA button component
│   │   ├── HeroImage.astro    # Hero image with fallback
│   │   ├── PostPageItem.astro # Post preview component
│   │   ├── DrawerMenu.astro   # Mobile navigation
│   │   └── ThemeToggle.astro  # Dark/light theme switch
│   ├── content/               # Content collections
│   │   ├── blogs/            # Blog posts (YYYY/MM structure)
│   │   ├── diaries/          # Personal diary entries
│   │   ├── projects/         # Portfolio projects
│   │   └── whispers/         # Quick quotes/thoughts
│   ├── layouts/              # Page layouts
│   │   ├── BaseLayout.astro  # Main layout template
│   │   └── BlogPost.astro    # Blog post layout
│   ├── pages/                # Route pages
│   │   ├── blogs/           # Blog listing and individual posts
│   │   ├── diaries/         # Diary listings and posts
│   │   └── *.astro          # Main pages (index, about, etc.)
│   ├── scripts/             # Client-side JavaScript
│   └── styles/              # Design system CSS
│       ├── global.css       # Global styles and resets
│       ├── theme.css        # Color system and themes
│       ├── typography.css   # Font and text styles
│       ├── spacing.css      # Spacing utilities
│       └── layout.css       # Layout utilities
├── doc/
│   └── CHANGELOG.md          # Version history
├── new-post.sh              # Blog creation script
├── new-tweet.sh             # Whisper creation script
└── astro.config.mjs         # Astro configuration
```

## 🎨 Design System

The site uses a comprehensive design system with:

- **Typography Scale**: Fluid typography that scales with screen size
- **Color System**: CSS custom properties supporting light/dark themes
- **Spacing Scale**: Consistent spacing using CSS custom properties
- **Component Architecture**: Modular, reusable Astro components
- **Responsive Layout**: Mobile-first design with breakpoint-based layout ensuring blogs, diaries, projects, and quotes.

## ✨ Features

- 🎨 **Modern Design System** - Custom design with typography, spacing, and color variables
- 📱 **Mobile-First Responsive** - Optimized for all screen sizes with hamburger navigation
- 🌙 **Dark/Light Theme** - Theme toggle with FOUC prevention
- ⚡ **Alpine.js Integration** - Lightweight client-side interactivity
- 📝 **Multiple Content Types** - Blogs, diaries, projects, and whispers
- 🔍 **SEO Optimized** - Canonical URLs, OpenGraph data, and sitemap
- 📡 **RSS Feed** - Unified feed for all content types
- 🚀 **Performance Focused** - 100/100 Lighthouse scores

## 🏗️ Content Collections

- **Blogs** - Technical articles and thoughts
- **Diaries** - Personal reflections and daily notes  
- **Projects** - Portfolio and project showcases
- **Whispers** - Quick quotes and funny moments

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
| `./new-post.sh` | Create new blog post |
| `./new-tweet.sh` | Create new whisper/quote |


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

All content uses Markdown with YAML frontmatter for metadata.

## 🎯 Deployment

The site is deployed to GitHub Pages with automatic builds on push to `master`.

## 📄 License

This project (except `/src/content` folder) is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Astro.js**


## 🎨 Design System Reference

### Color System
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

### Typography Scale
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
- **Base Components**: Layout primitives (BaseLayout, BaseCard, BaseButton)
- **Content Components**: Content-specific (HeroImage, PostPageItem, TagPill)
- **Navigation Components**: Site navigation (Header, DrawerMenu, ThemeToggle)
- **Utility Components**: Helpers (FormattedDate, SocialLinkIcon)
