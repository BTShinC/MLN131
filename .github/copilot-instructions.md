# Copilot Instructions for AI Agents

## Project Overview
- This is a React single-page application bootstrapped with Vite.
- Styling uses SCSS (`src/App.scss`, `src/index.scss`).
- Ant Design (`antd`) is used for UI components; icons are imported from `@ant-design/icons`.
- Main entry: `src/main.jsx` renders `App` into the DOM.
- App structure is defined in `src/App.jsx` using Ant Design's `Layout` components.

## Key Files & Structure
- `src/App.jsx`: Main app logic, imports SCSS, uses Ant Design Layout, Menu, Typography, Card, Button, and icons.
- `src/App.scss`: Main style file, customizes Ant Design components and global styles.
- `src/main.jsx`: Entry point, imports Ant Design reset styles and renders `App`.
- `public/`: Static assets (e.g., `vite.svg`).
- `src/assets/`: App-specific assets (e.g., `react.svg`).

## Build & Development
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- SCSS is compiled via Vite; ensure `sass` is installed as a dev dependency.

## Conventions & Patterns
- Use SCSS for all custom styles; do not use CSS files (remove unused imports like `./App.css`).
- Import Ant Design components and icons directly in component files as needed.
- Use React functional components and hooks (`useState`, etc.).
- Place all React components in `src/`.
- Static assets should be placed in `public/` (for root-level access) or `src/assets/` (for imports).

## Integration & Dependencies
- Ant Design (`antd`) and icons (`@ant-design/icons`) are core dependencies.
- Vite is used for fast development and HMR.
- No backend or API integration is present in this template.

## Example Patterns
- To add a new page or component, create a new file in `src/` and import it in `App.jsx`.
- To customize Ant Design styles, override classes in `src/App.scss` using SCSS nesting and variables.

## Troubleshooting
- If you see errors about missing CSS files (e.g., `./App.css`), update imports to use SCSS files instead.
- Ensure `sass` is installed for SCSS support: `npm install --save-dev sass`

---
For more details, see `README.md` or the Vite/Ant Design documentation.
