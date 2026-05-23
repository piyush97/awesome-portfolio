# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn start       # dev server (Vite, port 3000)
yarn build       # production build (tsc && vite build)
yarn preview     # preview production build locally
```

## Stack

- **React 18 + TypeScript 5** via Vite 5
- **TailwindCSS v3** + **daisyUI v4** for theming and components
- **framer-motion v11** for scroll-triggered animations (`AnimateVisible` wrapper uses `whileInView`)
- **react-scroll** for smooth in-page navigation between sections
- **react-helmet-async** for SEO meta tags (`Seo` component; `HelmetProvider` is in `src/main.tsx`)

## Architecture

Single-page app with one route. Layout: `App` → `Navbar` + `HomeContainer` → section containers stacked vertically.

**Data layer**: All content lives in `src/data/data.tsx` — exported constants (`EXPERIENCE`, `projects`, `skills`, `NAME`, etc.). To personalize the portfolio, edit only this file.

**Theme system**: daisyUI themes applied via `data-theme` attribute. `ThemeContext` (in `src/context/ThemeProvider.tsx`) holds the active theme string; `ThemeList` in `src/utils/themeList.tsx` lists available themes. Theme selector lives in the Navbar.

**Animation pattern**: Wrap any section content in `<AnimateVisible>` (from `src/utils/AnimateVisible.tsx`) for fade-in-on-scroll using framer-motion v11's built-in `whileInView` prop. No `react-intersection-observer` needed.

**Section structure**: Each section = a container in `src/containers/` (data-fetching/layout) + a presentational component in `src/components/` (rendering). Containers pull constants from `data.tsx` and pass them as props.

**Types**: All shared TypeScript types live in `src/types/types.d.ts` — `TimelineProps`, `ProjectCardProps`, `SkillsProps`, `SEOProps`, etc.

## Entry Point

`src/main.tsx` uses React 18's `createRoot` and wraps the app in `HelmetProvider` from `react-helmet-async`.
