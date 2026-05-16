# Nihilo site architecture and conventions

Repo conventions, stack details, and architectural decisions for the Nihilo Solutions marketing site. This file lives at `nihilo-main/docs/site-architecture.md` and is the source of truth for "what the repo looks like, how we build, where it deploys."

> Last verified against the repo: 2026-05-15.

## Stack

- **Framework**: Next.js 16.1.1 (App Router). Server components by default.
- **Language**: TypeScript 5.8 (strict mode).
- **Runtime / package manager**: Node 20+, npm.
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`), plus a single global `src/styles.css` defining CSS custom properties (e.g., `--brand-void`, `--brand-azure`, `--fg`, `--font-space-grotesk`), plus inline `style={{}}` props on many components. Hybrid model; see ADR-004.
- **UI / motion / data**: `lucide-react` icons, `framer-motion`, `recharts`, `@mui/material` + `@emotion/react`/`@emotion/styled`.
- **Hosting**: Vercel. `vercel.json` at `nihilo-main/`, `@vercel/analytics` mounted in the root layout.
- **Analytics**: `@vercel/analytics` only. The legacy `nihilo-main/index.html` references a GA4 tag (`G-HTNV61D4K4`) but is not served by Next.js. GA4 wiring on the App Router is a pending decision.
- **Forms**: Intake form on `intake.nihilosolutions.com` (subdomain). `@emailjs/browser` installed for any future in-site form needs. ADR-005 proposes moving intake on-site.
- **Image optimization**: Next.js `<Image>` component. Source images in `nihilo-main/public/`.
- **Fonts**: Inter, Space Grotesk, JetBrains Mono via `next/font/google`, wired through CSS variables in `layout.tsx`.
- **Markdown content layer**: not implemented. Long-form copy is currently inlined in TSX. See ADR-003.

## Repository layout

The Next.js app lives under `nihilo-main/`. The git repo root contains `.git/`, `.gitignore`, `.vscode/`, `design/`, and the `nihilo-main/` subdirectory.

```
nihilo-main/
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── layout.tsx                 # Root layout: fonts, Navbar, Vercel Analytics
│   │   ├── not-found.tsx
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── (marketing)/               # Marketing route group (see ADR-007)
│   │   │   ├── page.tsx               # Homepage
│   │   │   ├── assessment/page.tsx
│   │   │   ├── privacy/page.tsx
│   │   │   ├── security/page.tsx
│   │   │   └── use-cases/page.tsx
│   │   └── solutions/
│   │       ├── page.tsx
│   │       ├── SolutionsContent.tsx
│   │       └── [slug]/
│   │           ├── page.tsx
│   │           └── SolutionContent.tsx
│   │
│   ├── components/
│   │   ├── features/                  # Homepage sections (Hero, About, Services, ...)
│   │   │   ├── About.tsx
│   │   │   ├── Booking.tsx
│   │   │   ├── CaseStudy.tsx
│   │   │   ├── ChatAssistant.tsx
│   │   │   ├── Diagnostic.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Security.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Stats.tsx
│   │   │   └── index.ts
│   │   └── shared/                    # Layout chrome
│   │       ├── Footer.tsx
│   │       ├── Navbar.tsx
│   │       ├── TableOfContents.tsx
│   │       └── index.ts
│   │
│   ├── lib/
│   │   ├── data/
│   │   │   ├── pages.ts               # Solution-page data
│   │   │   └── types.ts
│   │   ├── seo.ts
│   │   └── utils.ts
│   │
│   ├── types/index.ts
│   ├── constants.tsx                  # Shared constants (e.g., PERFORMANCE_DATA)
│   ├── metadata.json
│   └── styles.css                     # Global CSS + design-token custom properties
│
├── public/                            # Static assets
│   ├── diagrams/
│   ├── headshots/
│   ├── llms.txt
│   ├── logo.png
│   ├── manifest.json
│   ├── nihilo_whitepaper.pdf
│   ├── robots.txt
│   ├── sitemap.xml
│   └── sitemap.xsl
│
├── docs/                              # Project docs (this file lives here)
│   ├── conversion-playbook.md
│   ├── positioning.md
│   ├── seo-strategy.md
│   └── site-architecture.md
│
├── scripts/
│   ├── start-dev.sh
│   └── stop-dev.sh
│
├── CLAUDE.md                          # Project-level Claude Code instructions
├── README.md
├── index.html                         # LEGACY (Vite-era). Not served. See "Gotchas".
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
└── vercel.json
```

Path alias: `@/*` → `./src/*` (configured in `tsconfig.json`).

No `content/` directory exists. Long-form copy currently lives inside TSX components. See ADR-003.

## Conventions

### File naming
- React components: `PascalCase.tsx` (e.g., `Hero.tsx`).
- Utility modules: `kebab-case.ts` (e.g., `seo.ts`).
- Route files follow Next.js conventions: `page.tsx`, `layout.tsx`, `not-found.tsx`, `robots.ts`, `sitemap.ts`.
- Page routes: lowercase URL segments.

### Component conventions
- One component per file. The filename matches the component name.
- Server components by default. Add `"use client"` only when client interactivity is genuinely needed (currently used in `About.tsx`, `Stats.tsx`, and the solutions content components).
- Props typed inline (interface or type at the top of the file).
- Page components and the root layout use `default export` (Next.js requires it). Other components: current code mixes default and named exports; prefer named for new components.
- Section components for the homepage live in `src/components/features/`. Layout chrome (Navbar, Footer, TableOfContents) lives in `src/components/shared/`. Both folders re-export through `index.ts` for short import paths.

### Content conventions
- **Current reality**: long-form copy is inlined in component files. There is no markdown content layer.
- **Aspirational**: per `docs/positioning.md` and `CLAUDE.md`, copy should eventually live in `/content/` as markdown with frontmatter, rendered into the site. See ADR-003.
- The positioning copy bank in `docs/positioning.md` is authoritative for what the copy should say, regardless of where it currently lives.

### Styling conventions
- **Current reality**: hybrid. Tailwind utility classes for layout primitives; inline `style={{}}` props with CSS custom properties (`var(--brand-azure)`, `var(--font-space-grotesk)`, etc.) for visual treatment; a single global `src/styles.css` defines the design tokens.
- Reuse existing tokens. Don't introduce new ones without reason.
- Dark theme only. No light theme switching.
- Mobile-first. Use Tailwind responsive prefixes for desktop overrides.
- See ADR-004 for the convergence plan.

### SEO conventions
- Root layout exports site-wide `metadata` (`title.template`, default OG, etc.). Per-page metadata exports are required for non-homepage routes; current coverage is spotty and is an active improvement area.
- Required per-page metadata fields:
  - `title` (override via the layout template `%s | Nihilo Solutions`)
  - `description`
  - `openGraph` with `title`, `description`, `images`, `url`
  - `twitter` (`card` minimum)
  - `alternates.canonical`
- JSON-LD structured data: currently not emitted by any Next.js page. A `<StructuredData>` component is planned but not yet built. The legacy `index.html` has a ProfessionalService JSON-LD block, but `index.html` is not served.
- Per-page OG images preferred over the site-wide default. Current default is `/logo.png` — replace with a real OG card.

### Accessibility conventions
- Semantic HTML. Real `<button>`, `<a href>`, `<nav>`, `<main>`, `<footer>`. No `<div onClick>`.
- One `<h1>` per page. Don't skip heading levels.
- All interactive elements keyboard-accessible.
- Form fields have associated `<label>` elements.
- Images use `next/image` with meaningful `alt` text. Decorative images: `alt=""`.
- Color contrast meets WCAG AA minimum.
- Visible focus indicators on all interactive elements.

### Performance conventions
- `next/image` for all images. Never plain `<img>`.
- `next/link` for internal navigation.
- Lazy-load below-the-fold heavy components with `dynamic()` where it pays off.
- Avoid `"use client"` on routes that don't need client interactivity.
- `experimental.optimizePackageImports` is enabled for `lucide-react` and `@mui/material` (see `next.config.ts`).

## Architectural decisions (ADRs)

Each significant decision gets a short entry so we don't relitigate them. Decisions are marked **Decided** (in production), **Proposed** (recommended, not yet implemented), or **Aspirational** (stated direction, no current implementation).

### ADR-001: Next.js App Router

- **Status**: Decided (in production).
- **Decision**: Use Next.js 16 with the App Router.
- **Rationale**: Server components reduce client-side JS, improving page-load and SEO. The data-fetching model is cleaner for content-heavy sites.

### ADR-002: Vercel hosting

- **Status**: Decided (in production).
- **Decision**: Host on Vercel.
- **Rationale**: First-party Next.js platform. `@vercel/analytics`, automatic preview deploys on PRs, image optimization, and edge functions are turn-key. `vercel.json` lives at `nihilo-main/vercel.json`.
- **Note**: An earlier draft of this doc proposed Cloudflare Pages. That direction was not pursued.

### ADR-003: Markdown as content source

- **Status**: Aspirational (not implemented).
- **Decision (proposed)**: Long-form content (service copy, case studies, articles) lives in markdown files in `/content/`, rendered into the site via MDX or a content layer.
- **Current reality**: copy is inlined in TSX components. Editing copy currently requires a dev session.
- **Rationale (if pursued)**: editable without engineering work, reviewable in PRs, versionable in git, no vendor lock-in, easy to feed to AI tools for editing.
- **Open questions**: which content layer (`next-mdx-remote`, `contentlayer`, `velite`, or a `gray-matter` + `remark` pipeline). Decide before any migration starts.

### ADR-004: Styling — hybrid Tailwind + CSS variables + inline styles

- **Status**: Decided (descriptive of current reality). Convergence plan: TBD.
- **Decision**: The site uses Tailwind utility classes for layout primitives, CSS custom properties defined in `src/styles.css` for design tokens, and inline `style={{}}` props for component-specific visual treatment.
- **Rationale (historical)**: the inline-styles + CSS-variables approach came from the original design system and survived the Next.js port. Tailwind was layered in for utility classes.
- **Convergence plan (TBD)**: a future ADR should decide whether to (a) consolidate on Tailwind utilities + a small `@layer` of token classes, (b) keep the hybrid model and document it as the intended pattern, or (c) move to a CSS-variables-first approach with Tailwind only for spacing/responsive helpers. Not deciding now.

### ADR-005: Direct-edit forms on the main domain, not subdomain

- **Status**: Proposed (not implemented).
- **Decision (proposed)**: Migrate the readiness assessment form from `intake.nihilosolutions.com` to `nihilosolutions.com/assessment`.
- **Rationale**: Subdomain hops cost trust signals and break analytics attribution. The form can be embedded via iframe or rebuilt natively.

### ADR-006: Real HTML for the security whitepaper

- **Status**: Proposed (not implemented).
- **Decision (proposed)**: Publish the whitepaper as a real HTML page at `/security/whitepaper` in addition to the PDF.
- **Rationale**: PDFs don't pass SEO authority well. HTML is crawlable, shareable, and indexable while the PDF stays available as a downloadable artifact.

### ADR-007: `(marketing)` route group

- **Status**: Decided (in production).
- **Decision**: Use a Next.js route group `(marketing)` under `src/app/` to colocate the homepage, assessment, privacy, security, and use-cases pages without affecting URL structure.
- **Rationale**: Lets these marketing routes share a future `(marketing)/layout.tsx` (currently the root `layout.tsx` carries the chrome) while keeping URLs flat (`/`, `/security`, `/assessment`, etc.). Keeps `solutions/` and its dynamic `[slug]` routes separate, since those have different needs (TOC, longer-form content, distinct layout potential).

## Gotchas and known issues

Active list. Update as discovered.

- **Vercel auto-deploys on push to `main`.** A `git push` to main is a production deploy. Preview deploys land on PR branches automatically.
- **Legacy `nihilo-main/index.html`** is a Vite-era artifact. Not served by Next.js. Slated for removal pending decisions on (a) whether to port GA4 to the App Router layout, and (b) emitting JSON-LD via Next.js. The file references `/src/index.tsx`, which does not exist.
- **GA4 not wired.** The legacy `index.html` references a GA4 tag (`G-HTNV61D4K4`); the Next.js layout currently mounts only `@vercel/analytics`. If GA4 is wanted on the live site, add it to `layout.tsx` (or per-page) before removing `index.html`.
- **JSON-LD not emitted.** No structured data is rendered by App Router pages. P0 fix.
- **OG image is the logo.** Replace with a real social card.
- **Per-page meta is incomplete.** Many routes inherit the layout default. Per-page meta is a P0 fix.
- **Intake form on a subdomain.** Adds friction. See ADR-005.
- **No `lint`/`test`/`format` npm scripts** in `package.json`. Only `dev`, `build`, `start` exist. Adding these is a small task.
- **Stray `.dev_pid` / `.dev3001_pid` / `.dev3006_pid` files** in `nihilo-main/` are leftovers from the Replit dev manager (`scripts/start-dev.sh` / `stop-dev.sh`). Harmless but worth cleaning up if those scripts are no longer used.

## Performance budgets

Target Lighthouse scores on every page:

| Metric | Target |
|---|---|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |

Core Web Vitals targets:

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| INP (Interaction to Next Paint) | < 200ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| TBT (Total Blocking Time) | < 200ms |
| TTFB (Time to First Byte) | < 600ms |

Bundle size budget:

| Resource | Budget |
|---|---|
| Initial JS bundle (homepage) | < 100KB gzipped |
| Initial CSS | < 30KB gzipped |
| Hero image | < 200KB |
| Per-page total weight | < 800KB |

## Local development

```bash
cd nihilo-main
npm install
npm run dev      # next dev -p 5000 -H 0.0.0.0
```

Available scripts (from `nihilo-main/package.json`):

| Script | Command |
|---|---|
| `npm run dev` | `next dev -p 5000 -H 0.0.0.0` |
| `npm run build` | `next build` |
| `npm run start` | `next start` |

No `lint`, `test`, or `format` scripts exist yet. Adding them is on the to-do list.

Local URL: `http://localhost:5000`.

## Deployment

- **Production**: push to `main` → Vercel builds and deploys to production.
- **Preview**: push to any other branch (or open a PR) → Vercel creates a preview URL.
- **Configuration**: `nihilo-main/vercel.json` plus Vercel project settings (managed in the Vercel dashboard).

## Environment variables

> Enumerate as discovered. The repo currently has a single `.env` at the repo root (gitignored).

Likely candidates as the site grows:
- `NEXT_PUBLIC_SITE_URL` — canonical site URL (used by `metadataBase` in `layout.tsx`).
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — only if GA4 is added to the layout.
- `EMAILJS_*` — if `@emailjs/browser` is used for any in-site forms.

## What this file is not

This is not the positioning, the SEO strategy, or the conversion playbook. Those are in their own files in `docs/`. This file is purely the technical architecture and conventions for the repo.

## When to update this file

- After every architecture decision (add an ADR).
- When stack components change (framework upgrade, hosting move).
- When new conventions emerge (a new file type, a new pattern).
- When a known gotcha is discovered or fixed.
- When the repo layout changes meaningfully.
