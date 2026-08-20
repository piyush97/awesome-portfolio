# Awesome Portfolio

> A modern, customizable developer portfolio template. Edit one file, deploy in minutes.

[![Live Demo](https://img.shields.io/badge/Try%20Live%20Demo-4A6CF7?style=for-the-badge&logo=vercel&logoColor=white)](https://awesome-portfolio-beta.vercel.app/)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/piyush97/awesome-portfolio/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/piyush97/awesome-portfolio?style=for-the-badge)](https://github.com/piyush97/awesome-portfolio)
[![GitHub forks](https://img.shields.io/github/forks/piyush97/awesome-portfolio?style=for-the-badge)](https://github.com/piyush97/awesome-portfolio)
[![GitHub last commit](https://img.shields.io/github/last-commit/piyush97/awesome-portfolio?style=for-the-badge)](https://github.com/piyush97/awesome-portfolio)
[![GitHub issues](https://img.shields.io/github/issues/piyush97/awesome-portfolio?style=for-the-badge)](https://github.com/piyush97/awesome-portfolio)

[Try the live demo](https://awesome-portfolio-beta.vercel.app/) — no code needed.

![Hero](/demo-hero.png)

![Full page](/demo-full.png)

## Features

- 🎨 Fully customizable theme switching (light & dark)
- ⚡ Scroll-triggered animations with framer-motion
- 📱 Responsive, mobile-first layout
- 🔍 SEO meta tags via react-helmet-async
- 📝 All content lives in **one file** — edit it and you're done

## Tech Stack

- **React 18** + **TypeScript 5** via **Vite 5**
- **Tailwind CSS v3** + **daisyUI v4** — theme switching built in
- **framer-motion v11** — scroll-triggered animations
- **react-helmet-async** — SEO meta tags

## Quickstart

```bash
# Clone or use as template on GitHub
git clone https://github.com/piyush97/awesome-portfolio
cd awesome-portfolio

# Install
npm install   # or yarn / pnpm

# Customize — edit only this file
# src/data/data.tsx

# Dev server
npm start

# Production build
npm run build
```

## Customization

All content lives in **`src/data/data.tsx`**. Change:

| Export | What it controls |
|---|---|
| `NAME`, `URL` | Your name and portfolio URL |
| `TAGLINE`, `ABOUT` | Hero tagline and about text |
| `GREETING_TEXT` | Hero badge text |
| `SOCIAL_LINKS` | GitHub, LinkedIn, Twitter, email |
| `EXPERIENCE` | Timeline cards |
| `projects` | Project cards |
| `SKILLS_GROUPED` | Skill badge categories |

## Deploy

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpiyush97%2Fawesome-portfolio)

Set build command to `npm run build`, output directory to `build`.

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/piyush97/awesome-portfolio)

- Build command: `npm run build`
- Publish directory: `build`

### GitHub Pages

The build output directory is `build/` (see `vite.config.ts`). To host on GitHub Pages:

1. Add a `.nojekyll` file to the `build/` output and configure a deployment action, or
2. Use a tool like [gh-pages](https://github.com/tschaub/gh-pages) to push the `build/` folder to the `gh-pages` branch:

```bash
npm run build
npx gh-pages -d build
```

Then enable GitHub Pages from the `gh-pages` branch in **Settings → Pages**.

## Contributing

Contributions welcome! Please read [contributing.md](./contributing.md) to get started.

## License

[MIT](/LICENSE)
