# Nihilo site architecture and conventions

The repo conventions, stack details, and architectural decisions for the Nihilo Solutions marketing site. This file lives in `docs/site-architecture.md` in the repo.

> Note: some sections are placeholders to be filled in by Sam after looking at the actual repo. Mark them with `# TODO:` for now and tighten in the first session.

## Stack

> # TODO: confirm exact versions by looking at package.json

- **Framework**: Next.js (App Router). Server components by default.
- **Language**: TypeScript. Strict mode.
- **Styling**: Tailwind CSS.
- **Hosting**: Cloudflare Pages.
- **Analytics**: GA4 + Cloudflare Web Analytics.
- **Forms**: Intake form on `intake.nihilosolutions.com` (separate concern).
- **Image optimization**: Next.js `<Image>` component. Source images in `/public/`.
- **Fonts**: webfonts (TBD which). Subset and preload.
- **Markdown rendering**: TBD. Either `next-mdx-remote`, `contentlayer`, `velite`, or a custom `gray-matter` + `remark` pipeline. Decide before building the article system.

## Repository layout

> # TODO: confirm by looking at the actual repo. This is the proposed shape if we end up reorganizing.

```
/
├── app/                       # Next.js App Router
│   ├── (marketing)/           # Marketing routes group
│   │   ├── page.tsx           # Homepage
│   │   ├── security/
│   │   │   └── page.tsx
│   │   ├── assessment/
│   │   │   └── page.tsx
│   │   └── privacy/
│   │       └── page.tsx
│   ├── articles/
│   │   ├── page.tsx           # Articles index
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── case-studies/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── layout.tsx             # Root layout with global meta
│   ├── sitemap.ts             # Auto-generated sitemap
│   └── robots.ts              # robots.txt
│
├── components/                # React components
│   ├── ui/                    # Low-level primitives (Button, Card, etc.)
│   ├── sections/              # Homepage sections (Hero, Services, etc.)
│   ├── layout/                # Header, Footer
│   └── seo/                   # SEO components (StructuredData, etc.)
│
├── content/                   # Markdown source content
│   ├── articles/              # Blog/article markdown
│   ├── case-studies/          # Case study markdown
│   ├── services/              # Service line copy
│   └── site/                  # Site-wide copy (hero, footer, etc.)
│
├── docs/                      # Project docs (this file lives here)
│   ├── positioning.md
│   ├── seo-strategy.md
│   ├── conversion-playbook.md
│   └── site-architecture.md
│
├── lib/                       # Utility code
│   ├── content/               # Content loader / parser
│   ├── seo/                   # SEO helpers
│   └── analytics/             # GA4 event helpers
│
├── public/                    # Static assets
│   ├── headshots/
│   ├── logos/
│   ├── og-images/
│   └── ...
│
├── styles/                    # Global CSS, Tailwind config
├── CLAUDE.md                  # Claude Code instructions (root level)
├── README.md
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Conventions

### File naming
- React components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Markdown content: `kebab-case.md` (e.g., `tenant-local-rag-azure.md`)
- Utility code: `kebab-case.ts` (e.g., `content-loader.ts`)
- Page routes: lowercase (Next.js convention)

### Component conventions
- One component per file. The filename matches the component name.
- Server components by default. Add `"use client"` only when client interactivity is genuinely needed.
- Props always typed via an interface or type at the top of the file.
- No `default export` for most components; named exports preferred. Exceptions: page components and layouts (Next.js requires default exports).
- Co-locate component-specific helpers in the same file unless they're reused elsewhere.

### Content conventions
- All long-form copy lives in `/content/` as markdown with frontmatter, not in JSX.
- Frontmatter requirements vary by content type:
  - Articles: `title`, `description`, `slug`, `publishedAt`, `author`, `tags`, `ogImage`, `keywords`.
  - Case studies: `title`, `client`, `industry`, `publishedAt`, `slug`, `summary`, `kpis`, `ogImage`.
  - Service pages: `title`, `slug`, `summary`, `kpis`.
- Markdown body uses MDX or vanilla markdown depending on the content layer chosen.
- One article per file. No multi-article files.

### Styling conventions
- Use Tailwind utility classes. Don't write custom CSS unless absolutely necessary.
- Use the existing design tokens (colors, spacing, typography scales). Don't introduce new tokens without reason.
- Mobile-first. Use Tailwind's responsive prefixes (`md:`, `lg:`) for desktop overrides.
- Dark theme by default — the site is dark-themed. Don't introduce a light theme without explicit discussion.

### SEO conventions
- Every page component must export `metadata` (Next.js App Router pattern) with:
  - `title`
  - `description`
  - `openGraph` with `title`, `description`, `images`, `url`
  - `twitter` with `card`, `title`, `description`, `images`
  - `alternates.canonical`
- Use the `<StructuredData>` component (in `components/seo/`) to inject JSON-LD per page.
- Add `Article`, `BreadcrumbList`, `FAQPage`, etc. schemas where appropriate.
- Per-page OG images preferred over a single global one. Use dynamic OG image generation via `@vercel/og` if possible.

### Accessibility conventions
- Semantic HTML. Real `<button>`, `<a href>`, `<nav>`, `<main>`, `<footer>`. No `<div onClick>`.
- One `<h1>` per page. Don't skip heading levels.
- All interactive elements keyboard-accessible.
- Form fields have associated `<label>` elements.
- Images have meaningful `alt` text. Decorative images use `alt=""`.
- Color contrast meets WCAG AA at minimum. AAA where reasonable.
- Visible focus indicators on all interactive elements.

### Performance conventions
- Use Next.js `<Image>` for all images. Never plain `<img>`.
- Lazy-load images below the fold.
- Use `<Link>` from `next/link` for internal navigation. Prefetch by default; opt out for very long routes.
- Code-split heavy components with `dynamic()` if needed.
- Avoid client-side JavaScript on routes that don't need it (server components, no `"use client"`).

## Architectural decisions (ADRs)

> The "Architecture Decision Record" pattern. Each significant decision gets a short entry here so we don't relitigate them.

### ADR-001: Next.js App Router over Pages Router
- **Date**: TBD
- **Decision**: Use Next.js 14+ App Router.
- **Rationale**: Server components reduce client-side JS, improving page-load and SEO. The data-fetching model is cleaner for content-heavy sites.

### ADR-002: Cloudflare Pages over Vercel
- **Date**: TBD
- **Decision**: Host on Cloudflare Pages.
- **Rationale**: Already on Cloudflare for DNS and Web Analytics. Cheaper at scale. Edge runtime aligns with the security-and-cloud-native brand.

### ADR-003: Markdown as content source
- **Date**: TBD (recommended)
- **Decision**: Long-form content lives in markdown files in `/content/`, not in a CMS or in JSX.
- **Rationale**: Editable without a dev session. Reviewable in pull requests. Versionable in git. No vendor lock-in. Easy to feed to AI tools for editing.

### ADR-004: Tailwind over CSS Modules or styled-components
- **Date**: TBD
- **Decision**: Tailwind utility classes for all styling.
- **Rationale**: Faster iteration. Smaller production CSS. Better DX in AI-assisted coding (the class names are visible in the markup).

### ADR-005: Direct-edit forms on the main domain, not subdomain
- **Date**: TBD (recommended change)
- **Decision**: Migrate the readiness assessment form from `intake.nihilosolutions.com` to `nihilosolutions.com/assessment`.
- **Rationale**: Subdomain hops cost trust signals and break analytics attribution. The form can be embedded via iframe or rebuilt natively.

### ADR-006: Real HTML for the security whitepaper
- **Date**: TBD (recommended change)
- **Decision**: Publish the whitepaper as a real HTML page at `/security/whitepaper` in addition to the PDF.
- **Rationale**: PDFs don't pass SEO authority well. HTML version is crawlable, shareable, and indexable while the PDF stays available as a downloadable artifact.

## Gotchas and known issues

> Active list. Update as discovered.

- **Cloudflare auto-deploys on push to main.** A `git push` to main is a production deploy. No staging environment exists yet. Worth setting up a preview branch deploy.
- **OG image is just the logo.** Needs replacement with a real social card.
- **Meta tags are not per-page.** Every page currently shares the homepage's OG/Twitter meta. Per-page meta is a P0 fix.
- **No schema markup anywhere.** P0 fix.
- **Intake form on a subdomain.** Adds friction; migrate.

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

> # TODO: fill in once the repo is cloned

```bash
git clone git@github.com:nihilosolutions/site.git nihilo-site
cd nihilo-site
pnpm install
cp .env.example .env.local
# fill in any required env vars
pnpm dev
```

The site runs at `http://localhost:3000`.

## Deployment

- **Automatic**: push to `main` → Cloudflare Pages builds and deploys to production.
- **Preview**: push to any other branch → Cloudflare Pages creates a preview URL.
- **Manual**: not currently configured.

## Environment variables

> # TODO: enumerate all env vars when first seen

Likely candidates:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 ID
- `NEXT_PUBLIC_SITE_URL` — canonical site URL
- `INTAKE_FORM_URL` — link to the intake form (current subdomain)

## What this file is not

This is not the positioning, the SEO strategy, or the conversion playbook. Those are in their own files. This is purely the technical architecture and conventions for the repo.

## When to update this file

- After every architecture decision (add an ADR).
- When stack components change (framework upgrade, hosting move).
- When new conventions emerge (a new file type, a new pattern).
- When a known gotcha is discovered or fixed.
