# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn start       # dev server (Vite, port 3000)
yarn build       # production build (tsc && vite build)
yarn preview     # preview production build locally
yarn lint        # Oxlint; warnings fail the check
```

## Stack

- **React 19 + TypeScript 7** via Vite 8
- **Tailwind CSS v4** + **daisyUI v5**; themes live in `src/index.css`
- Native CSS motion; project switching respects reduced-motion preferences
- Native fragment anchors for in-page navigation; CSS smooth scrolling is disabled for reduced motion
- **react-helmet-async** for SEO meta tags (`Seo` component; `HelmetProvider` is in `src/main.tsx`)

## Architecture

Single-page app with one route. Layout: `App` → `Navbar` + `HomeContainer` → section containers stacked vertically.

**Data layer**: All content lives in `src/data/data.tsx` — exported constants (`EXPERIENCE`, `projects`, `skills`, `NAME`, etc.). To personalize the portfolio, edit only this file.

**Theme system**: daisyUI themes applied via `data-theme` attribute. `ThemeContext` (in `src/context/ThemeProvider.tsx`) holds the active theme string; `ThemeList` in `src/utils/themeList.tsx` lists available themes. Theme selector lives in the Navbar.

**Animation pattern**: `projection-change` in `src/index.css` animates only an intentional project change. Content is visible by default; reduced motion disables animation and smooth scrolling.

**Section structure**: Each section = a container in `src/containers/` (data-fetching/layout) + a presentational component in `src/components/` (rendering). Containers pull constants from `data.tsx` and pass them as props.

**Types**: All shared TypeScript types live in `src/types/types.d.ts` — `TimelineProps`, `ProjectCardProps`, `SkillsProps`, `SEOProps`, etc.

## Entry Point

`src/main.tsx` uses `createRoot` and wraps the app in `HelmetProvider` from `react-helmet-async`.
