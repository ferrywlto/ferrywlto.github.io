# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2025-10-18

### ✨ Features
- Added privacy-first Simple Analytics tracking plus a dedicated `privacy` page explaining data practices (#51)
- Unified all blog, diary, and project entries under a single `[collection]/[...slug]` route powered by the new `ContentPost` layout with built-in back navigation (#56)
- Introduced a reusable `TagCloud` layout and refreshed tag index pages across collections (#53, #54)

### 🔧 Improvements
- Restored rich post content styling (code blocks, quotes, imagery) and standardized typography spacing (#50)
- Ensured landing page highlights the newest content by sorting lists in reverse chronological order
- Sorted tags by frequency (with name tiebreakers) for more meaningful tag clouds (#54)

### 🐛 Bug Fixes
- Corrected tag pill links for blogs, diaries, and projects (#46)
- Improved dark-theme text contrast on post pages
- Allowed tweets to be deep-linked (useful for RSS) and trimmed the feed to the 20 latest entries (#52)
- Patched individual tag pages to use the right slugs and casing across every collection (#54)
- Fixed hero button text color hover state
- Corrected hero button arrow rendering regression

### 📝 Documentation
- Added explicit rights-reserved notices for site content and photography alongside the root license update

### 🧹 Housekeeping
- Removed unused logo assets to keep the bundle lean

### 🏎️ Performance
- Parallelized `getStaticPaths` content fetching to reduce build-time I/O waits


## [1.3.0] - 2025-10-09

### ✨ Features
- Redesigned About page with structured sections (Activities, Career, Tools, Family, Hobbies, Connect)

### 🔧 Improvements
- Improved accessibility and semantics (ul/li structure, anchor separation)
- Added photo shadow styling and consistent photo container classes


### ✨ Features
- **Real Content Integration**: Replaced all dummy content with real data from content collections
- **Dynamic Landing Page**: Landing page now displays actual blog posts, diary entries, and projects
- **Content Collections**: Integrated whispers collection with real quotes and thoughts
- **Schema Optimization**: Refactored content schema to reduce code duplication using shared components

### 🔧 Improvements
- **Content Management**: Streamlined content configuration with reusable schema patterns
- **Path Management**: Extracted content base path as configurable constant
- **Date Formatting**: Standardized date display format (YYYY-MM-DD) across all content types
- **Type Safety**: Enhanced TypeScript integration with composable schema definitions

### 📝 Documentation
- **License Clarification**: Updated license to exclude personal blog content from open source license
- **Code Formatting**: Improved code consistency and documentation

### 🏗️ Technical Changes
- **Schema Composition**: Created modular schema components (`baseContentSchema`, `mediaSchema`, `tagsSchema`)
- **Configuration DRY**: Eliminated duplicate schema definitions using Zod schema merging
- **Content Path Abstraction**: Centralized content directory path management

## [1.1.0] - 2025-09-30

### ✨ Features
- **Diary Pages**: Implemented diary page functionality to match blog page behavior ([#27](https://github.com/ferrywlto/ferrywlto.github.io/issues/27))
- **Content Consistency**: Unified diary and blog page layouts and components
- **Component Reusability**: Enhanced PostPreview component to work with both blogs and diaries

### 🔧 Improvements  
- **Page Layout**: Updated diary index page with improved content organization
- **Navigation**: Added proper slug handling for diary entries
- **Content Structure**: Improved diary content metadata and formatting

### 🐛 Bug Fixes
- Fixed diary page routing and content rendering
- Resolved component compatibility issues between blogs and diaries
- Improved content preview consistency across different content types

## [1.0.0] - 2025-09-29

### 🎨 Major Design Overhaul
- **BREAKING**: Complete website redesign with modern layout and design system
- **BREAKING**: Migrated from legacy layout to new responsive design system
- **BREAKING**: Restructured content collections and URL patterns

### ✨ New Features
- **Design System**: Implemented comprehensive design system with typography, spacing, and color variables
- **Responsive Navigation**: Added hamburger menu with slide-out drawer for mobile devices
- **Dark/Light Theme**: Implemented theme toggle with FOUC prevention
- **Component Architecture**: Extracted reusable components (HeroImage, PostPageItem, TagPill, etc.)
- **New Content Types**: Added support for diaries, projects, and whispers collections
- **RSS Integration**: Updated RSS feed to include all content types (blogs, diaries)

### 📱 Mobile Improvements  
- **Mobile-First**: Redesigned all pages with mobile-first responsive approach
- **Touch Interface**: Optimized touch targets and interaction patterns
- **Performance**: Improved mobile loading performance and reduced bundle size

### 🔧 Technical Improvements
- **Alpine.js Integration**: Implemented client-side interactivity with Alpine.js
- **Component Extraction**: Modularized UI components for better maintainability
- **CSS Optimization**: Streamlined CSS architecture with custom properties and utility classes
- **Bundle Optimization**: Removed unused fonts and optimized asset loading

### 🏗️ Content Structure Changes
- **BREAKING**: Moved blog posts to organized folder structure (YYYY/MM/)
- **BREAKING**: Renamed collection from 'blog' to 'blogs' for consistency
- **BREAKING**: Updated tag system and moved tags under blogs folder
- **Content Migration**: Migrated all existing content to new structure

### 🐛 Bug Fixes
- Fixed tag hover display issues
- Resolved mobile breakpoint problems
- Fixed drawer menu toggling and animation issues
- Corrected clickable area problems with buttons
- Fixed hero card text wrapping on mobile
- Resolved FOUC (Flash of Unstyled Content) issues
- Fixed active link hover colors

### 🚀 Performance Enhancements
- Removed unused font files to reduce bundle size
- Optimized image loading with proper lazy loading
- Improved CSS delivery and reduced render blocking
- Enhanced Core Web Vitals scores

### 📄 Page Updates
- **Landing Page**: Complete redesign with hero section and improved content organization  
- **Blog Pages**: New layout with featured post and grid view for remaining posts
- **Individual Posts**: Improved readability and typography
- **About Page**: Updated to use new BaseLayout
- **Whispers Page**: Migrated to new design system
- **Projects Page**: Enhanced with new component architecture

### 🔄 Breaking Changes
- Old theme system replaced with new CSS custom properties
- URL structure changes for organized content
- Component names and interfaces updated
- Legacy CSS classes removed in favor of new design system

### 🛠️ Developer Experience
- Added EditorConfig for consistent code formatting
- Improved component reusability and maintainability  
- Better TypeScript integration with Alpine.js
- Streamlined development workflow

