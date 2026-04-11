# Joe Yeong Lab Website

## Overview
A VitePress-powered static documentation website for the AI in Immunology Laboratory of Prof. Joe Poh Sheng YEONG. The site covers research, team, news, platforms, and contact information.

## Tech Stack
- **Framework**: VitePress (v1.6.4)
- **Runtime**: Node.js 20
- **Package Manager**: npm

## Project Structure
- `docs/` - Main content directory (markdown files + VitePress config)
  - `.vitepress/config.mjs` - VitePress configuration
  - `.vitepress/theme/` - Custom theme (components, CSS, index.js)
  - `images/` - Image assets
  - `public/` - Static public assets
  - `*.md` - Content pages (index, about-joe, research, team, etc.)
- `package.json` - Project dependencies and scripts

## Scripts
- `npm run docs:dev` - Start dev server (default port 5173)
- `npm run docs:build` - Build for production
- `npm run docs:preview` - Preview production build

## Deployment
- Static site deployment
- Build command: `npm run docs:build`
- Output directory: `docs/.vitepress/dist`
