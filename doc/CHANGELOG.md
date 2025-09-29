# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-09-29

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

