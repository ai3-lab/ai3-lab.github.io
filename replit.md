# Joe Yeong Lab Website

## Overview
A VitePress-powered static documentation website for the AI in Immunology Laboratory of Prof. Joe Poh Sheng YEONG. The site covers research, team, news, platforms, and contact information.

## Tech Stack
- **Framework**: VitePress (v1.6.4)
- **Runtime**: Node.js 20
- **Package Manager**: npm

## Project Structure
- `docs/` - Main content directory (markdown files + VitePress config)
  - `.vitepress/config.mjs` - VitePress configuration (nav, sidebar, head/SEO, favicon)
  - `.vitepress/theme/` - Custom theme (components, CSS, index.js)
    - `custom.css` - All custom styles (team grid, news items, platforms, social buttons, dark mode)
    - `components/LinkedInPosts.vue` - Embedded LinkedIn posts component
  - `public/` - All static assets (single source of truth)
    - `images/team/` - Team member photos
    - `images/social/` - Social media icons (SVG)
    - `images/news/` - News article images
    - `data/` - JSON data files and team TSV
    - `downloads/` - Downloadable files (.doc)
  - `*.md` - Content pages with YAML frontmatter (title, description)
- `package.json` - Project dependencies and scripts

## Key Pages
- `index.md` - Home page using VitePress Hero/Features layout
- `about-joe.md` - PI profile with social links
- `joe-editorial.md` - Editorial/journal submission profile
- `team.md` - Team members grid
- `research.md` - Research focus and publications
- `innovation.md` - IPs and professional memberships
- `news.md` - News with LinkedIn embeds
- `platforms.md` - Research platform descriptions
- `contact.md` - Contact info and map
- `join-our-team.md` - Recruitment information

## Scripts
- `npm run docs:dev` - Start dev server (default port 5173)
- `npm run docs:build` - Build for production
- `npm run docs:preview` - Preview production build

## Deployment
- Static site deployment
- Build command: `npm run docs:build`
- Output directory: `docs/.vitepress/dist`

## Notes
- All images are in `docs/public/` and referenced with absolute paths (e.g., `/images/team/joe-yeong.jpg`)
- CSS uses VitePress CSS variables (e.g., `var(--vp-c-bg-soft)`, `var(--vp-c-text-1)`) for dark mode support
- Sidebar is grouped into About, Research, and People sections
- No inline `<style>` blocks in markdown files; all styles are in `custom.css`
