# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Primary users: developers adapting a reusable template into their own portfolio.
- Portfolio visitors browse the developer's work, experience, skills, and contact links.
- A narrower developer audience or visitor segment has not been specified.

## Product Purpose

Awesome Portfolio helps developers publish a personal portfolio without building its structure from scratch.
Success means replacing demo content with personal facts while retaining a working, navigable portfolio.

## Operating Context

- A single-page website assembled from reusable sections.
- Developers edit exported content in `src/data/data.tsx`.
- Local development uses `yarn start`; production builds use `yarn build`.
- Visitors navigate between sections, inspect work, and follow contact or social links.

## Capabilities and Constraints

- Existing sections cover introduction, experience, projects, skills, and contact.
- Includes theme selection, scroll navigation, reveal animations, and SEO metadata.
- Shared content and prop shapes live in `src/types/types.d.ts`.
- Preserve centralized content customization rather than scattering personal details across view components.
- Current identity, experience, projects, and links are editable demo content, not verified personal facts.
- Deployment target and product-specific accessibility requirements remain unspecified.

## Evidence on Hand

- `src/data/data.tsx` contains sample portfolio content, including experience and projects.
- `src/assets/` contains illustrations and a social preview image.
- Repository demo captures illustrate the template; their freshness has not been verified.
- Sample employers and projects must not become verified endorsements, client relationships, or case-study evidence.
- No user-confirmed testimonials, performance benchmarks, or personal achievements were supplied.

## Product Principles

- Keep portfolio customization concentrated in the existing data module.
- Make reusable structure serve the developer's own content.
- Distinguish demonstration content from factual proof.
- Preserve section navigation and contact paths when changing presentation.
