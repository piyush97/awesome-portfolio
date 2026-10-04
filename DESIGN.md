---
name: Awesome Portfolio
description: Demo-theatre portfolio template with featured work first.
colors:
  mulberry-900: "#43104f"
  mulberry-800: "#54225f"
  plum-700: "#70417b"
  ink-plum: "#34103d"
  lavender-white: "#fbf4ff"
  theatre-gold: "#ffd45c"
  lilac: "#dba8f1"
  apricot: "#ffb57c"
  sky: "#38bdf8"
  sky-content: "#0f172a"
  green: "#34d399"
  green-content: "#0f172a"
  amber: "#fbbf24"
  amber-content: "#0f172a"
  coral: "#f87171"
  coral-content: "#0f172a"
  paper-lavender: "#f6eeff"
  lavender-200: "#e7d9f1"
  lavender-300: "#cfbadd"
  plum-text: "#38113f"
  plum-primary: "#572460"
  white: "#ffffff"
  orchid: "#96457f"
  plum-neutral: "#43104f"
  slate-900: "#0f172a"
typography:
  body:
    fontFamily: "Gabarito, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  display:
    fontFamily: "Gabarito, sans-serif"
    fontSize: "clamp(2.1rem, 4.5vw, 4.8rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
rounded:
  control: "4px"
  selector: "8px"
  panel: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  project-selector:
    backgroundColor: "{colors.theatre-gold}"
    textColor: "{colors.ink-plum}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
  theme-select:
    rounded: "{rounded.control}"
    padding: "0 8px"
---

# Design System: Awesome Portfolio

## Overview

**Creative North Star: "Demo Theatre"**

A work-first interface stages software demonstrations as the main event. A mulberry programme rail frames the large projection; vivid caption floors and pale-lavender pauses create a flat, graphic theatre rather than a generic portfolio grid. The system is a reusable template: project and biography content remains editable sample material.

**Key Characteristics:**
- Featured project owns the first view; supporting story follows.
- Full mulberry, lavender, gold, lilac, and apricot palette; dark and light themes.
- Flat projection/programme language with restrained 4px controls.

## Colors

Mulberry anchors the frame; gold and apricot mark featured content, with lavender carrying quieter surfaces.

### Primary
- **Theatre Gold** (#ffd45c): featured project selection and caption surface in dark mode; secondary surface in light mode.
- **Plum Primary** (#572460): primary action surface in light mode.
- **Apricot** (#ffb57c): warm accent in dark mode.

### Secondary
- **Lilac** (#dba8f1): secondary accent in dark mode.
- **Orchid** (#96457f): light-theme accent.

### Neutral
- **Stage Mulberry** (#43104f): dark canvas and light-theme neutral.
- **Rail Plum** (#34103d): dark rail and control text.
- **Lavender White** (#fbf4ff): dark-theme foreground.
- **Paper Lavender** (#f6eeff), **Lavender 200** (#e7d9f1), **Lavender 300** (#cfbadd): light canvas, sections, and dividers.
- **Plum Text** (#38113f): light-theme foreground.
- **Sky** (#38bdf8), **Green** (#34d399), **Amber** (#fbbf24), **Coral** (#f87171), **Slate** (#0f172a), **White** (#ffffff): semantic/status pairs as defined by the active theme.

## Typography

**Display Font:** Gabarito (sans-serif; self-hosted variable TTF, weights 400–900)
**Body Font:** Gabarito (sans-serif)

**Character:** Rounded, weighty headlines pair with straightforward body copy. The same locally served variable family carries the entire interface.

### Hierarchy
- **Display** (700, clamp(2.1rem, 4.5vw, 4.8rem), 1.02): featured project title.
- **Headline** (700, clamp(2.6rem, 5vw, 5rem), 1.04): section and contact headings.
- **Title** (700, 1.7rem, normal): experience and work item titles.
- **Body** (400, 1rem, 1.5): general copy; longer prose uses local 1.6–1.65 leading and is capped near 70ch.
- **Label** (400, 0.9rem, normal): demo notes and compact controls.

## Layout

The desktop frame uses a fixed 236px programme rail and a fluid content stage. At 1099px and below, the rail becomes a compact top header; at 640px and below, project controls and content spacing tighten and work grids stack. Sections use generous 48–80px desktop padding, reduced to 24–56px on mobile. The stage order is project selector, projection, caption, then portfolio sections.

## Elevation & Depth

Flat by default: depth comes from solid-color planes, borders, and contrast, not shadows. Keep projected media prominent and avoid card-like elevation.

## Shapes

Use mostly square stage and section geometry. Controls use 4px corners; theme defaults define larger 8px selector and 16px box radii where applicable. Thin dividers separate programme controls. The projection transition uses a top-down clip reveal, not decorative layering.

## Components

### Buttons
- **Shape:** 4px radius, minimum 44px target.
- **Primary:** project selector uses gold with plum text; selected state is solid, unselected is transparent.
- **Hover / Focus:** hover adds a border; keyboard focus uses a 2px primary outline with 4px offset.

### Inputs / Fields
- **Style:** theme select is transparent, current-color 1px border, 4px radius, minimum 44px high.
- **Focus:** shared visible outline.

### Navigation
- **Style:** fixed mulberry rail, vertical links, underline on hover and current section; mobile becomes a compact header and expandable menu. Use native anchors, button toggles, and select controls.

### Featured Projection
A large contained project image sits above its colored caption floor. Project changes use a 420ms cubic-bezier(0.16, 1, 0.3, 1) reveal. Reduced-motion preference disables animations, transitions, and smooth scrolling.

## Do's and Don'ts

### Do:
- **Do** lead with the selected project and keep the programme rail at 236px on wide screens.
- **Do** preserve native button, select, and anchor interactions with visible keyboard focus.
- **Do** keep the stage flat and apply the reduced-motion override.

### Don't:
- **Don't** promote demo employers, projects, metrics, or links as verified personal claims.
- **Don't** replace the projection-led opening with a name-first gradient hero or interchangeable card grid.
- **Don't** add shadows as a default depth treatment.
