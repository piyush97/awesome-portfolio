# Awesome Portfolio

A modern, customizable developer portfolio template. Edit one file, deploy in minutes.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
![GitHub followers](https://img.shields.io/github/followers/piyush97)
![GitHub last commit](https://img.shields.io/github/last-commit/piyush97/awesome-portfolio)
![GitHub issues](https://img.shields.io/github/issues/piyush97/awesome-portfolio)

## Demo

![Hero](/demo-hero.png)

![Full page](/demo-full.png)

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

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpiyush97%2Fawesome-portfolio)

Set build command to `npm run build`, output directory to `build`.

## Contributing

Contributions welcome. See `contributing.md` to get started.

## License

[MIT](/LICENSE)
