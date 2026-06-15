# Nihilo — Marketing Site UI Kit

A high-fidelity recreation of the Nihilo Solutions marketing site using the tokens in `../../colors_and_type.css`. Built to match the production site at nihilosolutions.com (source: `blackpwnguin/nihilo`).

## What's here

- `index.html` — a single-page demo: nav pill → hero → stats strip → services grid → platform coverage → CTA band → footer. Fonts loaded from Google Fonts. All icons from `assets/icons/`.

## Components represented

- **Nav pill** — fixed, blur-backed, rounded-full. Mono all-caps links at 0.36em tracking. Azure-bordered CTA.
- **Hero** — radial halos, faint grid, mono eyebrow chip, Space Grotesk display at ~96px, border-left sub.
- **Stats strip** — 4-up, display numerals, en-dash ranges.
- **Service cards** — 14px radius, hairline border, icon-well, italic caps titles, dash-prefixed bullets.
- **Capabilities grid** — 4×2, single-pixel gap (border collapse), mono labels.
- **CTA band** — centered, one halo, dual button row.
- **Footer** — hairline top, brand + attribution.

## Conscious omissions

- The solutions mega-dropdown from `Navbar.tsx` is represented only as a `Solutions ›` link — a full 50-item menu is beyond UI-kit scope.
- About / Founders, Security whitepaper, and Assessment form aren't included in this first pass. Flag any you want recreated next and they slot cleanly into the same tokens.
