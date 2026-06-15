# Nihilo Solutions — Design System

Visual identity, tokens, and UI kit for **Nihilo Solutions** — the Azure-native enterprise AI consulting firm. "Nihilo" is drawn from the Latin *ex nihilo*: creation from nothing, emergence from the void.

## The company at a glance

Nihilo Solutions builds AI automations that cut operational cost 30–60% for enterprise customers. The core offering is **Zero to One Enterprise AI**: secure, tenant-local RAG pipelines, agentic automation, and cloud-native deployments on Azure and AWS. Data, embeddings, and retrieval stay inside the customer's cloud tenancy — never ours.

- **Core products.** Marketing website (nihilosolutions.com), AI Readiness Assessment intake, 50 programmatic SEO solution pages across Azure / AWS / Industry / Security.
- **Positioning.** Production-grade AI in 4–6 weeks. Secure by construction. Executive-level trust signal.
- **Tone.** Precise, confident, quietly technical. Modern minimalist, premium tech, never playful.

## Sources consulted

Everything here was built from real inputs:

- **GitHub repo — `blackpwnguin/nihilo`** (imported). Next.js 16 App Router marketing site. Tailwind 4, `zinc-950` + blue accent palette, Inter + JetBrains Mono. Key files consulted: `src/app/layout.tsx`, `src/styles.css`, `src/components/features/Hero.tsx`, `src/components/features/Services.tsx`, `src/components/shared/Navbar.tsx`, `src/constants.tsx`, `public/logo.png`, `public/llms.txt`, `replit.md`.
- **Existing logo.** `assets/nihilo-logo-current.png` — globe wireframe behind a filled azure disc with a white slanted "N". Preserved as reference; six new concepts explore cleaner, more scalable directions.
- **Business context.** Brief provided by the user (Azure-native AI consulting, BlackPenguin, *ex nihilo* naming, trust-first tone).

## Index — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file. Brand overview + content / visual / iconography fundamentals. |
| `colors_and_type.css` | The single source of truth for tokens. Imports fonts via the HTML `<head>`. |
| `SKILL.md` | Agent skill manifest — makes this system cross-compatible with Claude Code. |
| `assets/` | Logos (new + current), service icons, marks, favicon. |
| `preview/` | One HTML card per concept, rendered in the Design System tab. |
| `ui_kits/website/` | React-based recreation of the marketing site using new tokens. |

## Fonts — substitution notice

Nihilo's production site uses **Inter** (body) and **JetBrains Mono** (mono). I've kept both. For display headings I've introduced **Space Grotesk** — a geometric sans that reads premium and slightly more distinctive than Inter alone. All three load from Google Fonts.

> **Ask for the user:** confirm Space Grotesk as display, or swap to a licensed alternative (e.g. *Söhne*, *Neue Haas Grotesk*, *GT America*) and I'll replace.

---

## Content fundamentals

**Voice.** First-person plural ("We build…", "Nihilo solves this with…"). Never "I". When speaking to the reader, "you" / "your cloud". Confident, never breathless.

**Casing.** Three modes used deliberately:
- **Sentence case** for long copy, descriptions, body.
- **Title Case** for service names: "Enterprise RAG Implementation", "Agentic Process Automation".
- **ALL-CAPS, letter-spaced, monospace** for eyebrows, CTAs, section numbers, and system labels: `01 // CAPABILITIES`, `START READINESS PROTOCOL`, `PRODUCTION-READY`. This is the signature rhythm of the brand — never skip the tracking.

**Tone specifics.**
- Lead with the business problem, then the solution. Never with a feature.
- Quantify. "30–60% ops cost reduction", "&gt;95% reduction in external data egress", "Median retrieval latency <200ms".
- Ranges are hedged honestly ("typically", "median"), never padded with superlatives.
- Technical vocabulary is welcome and expected: *tenant-local*, *BYOK KMS*, *VPC/VNet*, *reranking*, *idempotency*. Don't soften it.
- No exclamation marks. No "!". No marketing adjectives ("amazing", "revolutionary", "game-changing"). No emoji — anywhere, ever.

**Examples from the site (use as a calibration set).**
- Eyebrow: `01 // CAPABILITIES` · `SYSTEM ARCHITECTURE & AI ENGINEERING`
- Headline: *AI Automations That Cut Ops Costs 30–60%*
- Subhead: *We build AI automations deployed inside your cloud, not ours. Azure-native. Production in 4–6 weeks.*
- CTA: `START READINESS PROTOCOL` · `VIEW SERVICES`
- Section title: *Foundational Expertise*

**Numbers.** En-dash for ranges ("30–60%", "4–6 weeks"). Never "30-60%".

**Punctuation.** Em-dashes, not parentheses, for asides. Serial comma. Periods at the end of bullet items if they're sentences.

---

## Visual foundations

### The core metaphor
*Ex nihilo* — emergence from nothing. Every brand move is a variation on a point becoming form: a single dot expanding, a circle drawn around void, an aperture opening, a glyph emerging from grid. **The negative space is the subject.** Designs breathe; whitespace (or darkspace) is load-bearing.

### Surface & background
- Canonical mode is **dark**. `--bg = #0B0D14` (ink); `--bg-sunk = #05060A` (void). Light mode exists and is fully supported for white-background media.
- Backgrounds are typically flat. When atmosphere is needed, use **soft radial halos** of `--brand-azure` at 15–25% opacity, heavily blurred (`blur(100–150px)`), anchored off-center. Never full-bleed gradients across the whole surface.
- A fine **grid texture** (1px lines at 4–8% opacity on 24–48px spacing) may appear behind hero sections. Subtle — you should have to look for it.
- No photographic full-bleeds, no stock imagery, no hand-drawn illustration, no textures beyond the grid, no noise/grain.

### Color vibe
Cool, restrained, intentional. The palette is 90% monochrome (ink / bone / neutrals) with **azure as the single accent** — used sparingly, always meaningfully. Azure marks action, focus, emergence, and flow. Never decorative. Avoid bluish-purple gradients; they read generic. Avoid secondary accent colors unless the design calls for data categorization (Azure = blue, AWS = amber, Security = violet, Industry = emerald — these appear on the production site for the Solutions dropdown and are carried through here as *data* colors only, never brand colors).

### Typography
- **Space Grotesk 600** for display (H1 / H2 / hero). Geometric, warm, premium.
- **Inter 400/500/600** for UI and body.
- **JetBrains Mono 500** for eyebrows, labels, CTAs, counters, code.
- Heavy letterspacing on mono eyebrows (`0.28em–0.4em`). Tight tracking on display headings (`-0.02em` to `-0.035em`). Body tracks at default.
- Hero headings can run to 96–112px at desktop. Be brave with scale.

### Layout
- **12-column grid** at desktop. Max content width: 1440px (`max-w-screen-2xl` equivalent).
- Gutters: 48–96px at desktop.
- Sections separated by `1px` hairline borders (`--line`) and ~128px vertical rhythm. No heavy dividers.
- Numbered sections (`01`, `02`, `03`) in mono eyebrow — a system signature.

### Radii
Minimal. `--r-1` (2px) for buttons, inputs, small chips — the crisp square-edge is intentional. `--r-4` (12px) for cards. `--r-full` only for the brand "dot", the nav pill, and icon wells. No lozenges, no pills-as-containers.

### Borders & hairlines
Everywhere. `1px solid var(--line)` at 8% opacity in dark mode is the default card edge. Borders carry as much visual weight as fills. On hover, borders intensify rather than fills shifting.

### Shadows & glow
- Drop shadows are soft and long (`--shadow-3 = 0 12px 40px rgba(0,0,0,0.55)`) — not stacked / Material-y.
- The **azure glow** (`--glow-azure`) is the brand's one bit of drama: used on primary CTA hover, on active nav underlines, and on the brand dot. Never on static elements.
- No inner shadows. No neomorphic surfaces.

### Transparency & blur
- Navbar uses `backdrop-filter: blur(12px)` over `rgba(11,13,20,0.8)`.
- Dropdowns and menus: same treatment.
- Modal scrims: `rgba(5,6,10,0.72)`.
- Don't use frosted glass for content cards — it's a chrome-only device.

### Motion
- All transitions: `240ms cubic-bezier(0.2,0.8,0.2,1)` by default. Fast but not snappy.
- **Entrance.** Short fade-up (8–12px, 400ms, ease-out). Stagger children by 40–60ms.
- **Hover.** Borders brighten (`--line` → `--line-azure`); optional `scale(1.02)` on interactive tiles; CTA primary adds `--glow-azure`.
- **Press.** `scale(0.98)` + darken, no color shift.
- **No bounces.** No springs. No parallax. No scroll-jacking.
- **The signature motion** is a single dot expanding into an outlined circle — the *ex nihilo* moment. Used on page load, on logo mark, as a reveal primitive. ~800ms, ease-out.

### Imagery
- No photography in the core system. Diagrams only (see `assets/tenant-local-rag.svg` for the reference style — monochrome + one azure accent, Roboto Mono labels).
- If photography is ever required (leadership headshots), treat as **desaturated, cool-tinted, high-contrast black-and-white** with a 1px `--line` frame. Never full color.

### Don'ts
- No emoji. No hand-drawn illustration. No AI-generated imagery.
- No purple-to-pink gradients. No "vibrant" color washes.
- No rounded-corner cards with a colored left border only.
- No pill-shaped containers for body content.
- No stacked drop shadows for depth (use borders instead).

---

## Iconography

Nihilo's production site uses **[Lucide](https://lucide.dev)** (via `lucide-react`) — 1.5px stroke, 24px default size, rounded line-caps and joins. This design system continues that choice.

**Usage rules.**
- Stroke weight: **1.5px**. Never heavier than 2px.
- Default size: **20px** inline, **24px** for feature contexts, **40–56px** inside icon wells.
- Color inherits from `currentColor`. Accent icons use `var(--accent)`.
- When used for service features, icons sit inside a **14px icon well**: 48–56px square, `--r-3` (8px) radius, `--line` border, `--bg-raised` fill. On hover the well's border shifts to `--line-azure` and the icon gets an azure drop-shadow glow.

**Load from CDN:**
```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

Or inline as SVGs from lucide.dev — both are fine.

**Brand-level icons** (the 6–8 service icons in `assets/icons/`) are hand-drawn in the same 1.5px-stroke, 24px-grid style so they compose with Lucide. Each riffs on the dot-into-form metaphor:
- **Emergence / Zero to One** — dot expanding into an outlined ring
- **Tenant-local RAG** — enclosed bracket containing vector dots
- **Agentic automation** — linked nodes with an arrow cycle
- **Secure cloud** — shield with a keyhole aperture
- **Azure-native** — stacked planes / layered cloud
- **AWS-compatible** — cube isometric
- **Data pipeline** — connected rails with a flow dot
- **Audit / compliance** — nested concentric rings (ledger)

SVGs live in `assets/icons/`.

**Emoji, unicode-as-icon.** Never. The only exception is arrow glyphs (`→`, `↗`) in mono CTA contexts, used sparingly.

---

## What to hand me next (to iterate)

1. **Pick the primary logo direction** from the 6 concepts in `preview/`.
2. **Confirm Space Grotesk** as display font, or name a replacement.
3. **Any assets you want preserved** (tagline wordmark, existing favicon, brand photography) — upload to `assets/` and I'll fold them in.
4. **Additional product surfaces** beyond the marketing site (app dashboards, PDF whitepaper template, pitch-deck master, LinkedIn banner kit).
