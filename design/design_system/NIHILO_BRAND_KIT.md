# Nihilo Solutions — Brand Kit v1.0 (LOCKED · April 2026)

> Paste this file into your Claude Desktop project as a knowledge source.
> It contains everything needed to produce on-brand output for Nihilo Solutions:
> tokens, typography, voice, logos (inline SVG), and usage rules.

---

## 1. COMPANY

**Nihilo Solutions** is an Azure-native enterprise AI consulting firm operated by BlackPenguin. The brand metaphor is *ex nihilo* — emergence from nothing. Every deliverable should feel precise, technical, quiet, and confident.

**Core offering:** Tenant-local RAG pipelines and agentic automation on Azure & AWS. Production in 4–6 weeks. 30–60% ops cost reduction. Data never leaves the customer tenancy.

**Tagline:** *Enterprise AI, from nothing.*
**Signoff:** *Ex nihilo.*

---

## 2. VOICE & COPY

- **Precise, not salesy.** Say "tenant-local vector stores," not "revolutionary AI platform."
- **Numbers over adjectives.** `30–60% ops cost reduction` · `<200ms retrieval latency` · `4–6 wk to production`.
- **Lowercase wordmark** (`nihilo`) + all-caps tagline (`SOLUTIONS`). Mixing-case is part of the identity.
- **Eyebrows are mono caps** at 0.28–0.36em tracking: `01 // CAPABILITIES`, `EX · NIHILO · MMXXVI`.
- **Roman numerals for year** on formal surfaces (cards, decks): `MMXXVI`.
- Avoid emoji, exclamation marks, and marketing hyperbole.

---

## 3. COLOR TOKENS

```css
/* BRAND CORE */
--brand-void:      #05060A;   /* deepest canvas */
--brand-ink:       #0B0D14;   /* dark-mode surface */
--brand-azure:     #2D6BFF;   /* SIGNATURE — Azure-native */
--brand-azure-lit: #5B8BFF;   /* hover / glow */
--brand-azure-dim: #1E3A8A;   /* pressed */
--brand-bone:      #F4F5F7;   /* light-mode surface */
--brand-chalk:     #FFFFFF;

/* NEUTRAL SCALE (cool, tuned to azure) */
--n-0:   #FFFFFF;   --n-50:  #F4F5F7;   --n-100: #E4E6EB;
--n-200: #C7CBD4;   --n-300: #9AA0AE;   --n-400: #6B7280;
--n-500: #4B5360;   --n-600: #303643;   --n-700: #1E222D;
--n-800: #14171F;   --n-900: #0B0D14;   --n-950: #05060A;

/* SEMANTIC (muted — never candy-colored) */
--ok:   #3FB984;   --warn: #E5A23C;
--err:  #E5544A;   --info: #2D6BFF;
```

**Rules**
- Dark is canonical. Light mode exists but is secondary.
- Azure `#2D6BFF` is the ONLY accent. No secondary brand colors.
- Spot PMS match: **PMS 2728 C**.
- Glow: `0 0 24px rgba(45,107,255,0.35)` — sparingly, on hero elements only.

---

## 4. TYPOGRAPHY

Three families — all Google Fonts, free to embed:

| Role | Family | Weights | Use |
|---|---|---|---|
| Display | **Space Grotesk** | 500, 600, 700 | H1–H3, hero, pitch deck titles |
| Body / UI | **Inter** | 400, 500, 600, 700 | paragraphs, buttons, UI chrome |
| Mono | **JetBrains Mono** | 400, 500, 600 | eyebrows, labels, code, tickers |

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

**Type scale**
- Hero: `clamp(56px, 8vw, 112px)` · weight 600 · letter-spacing `-0.035em` · line-height 1.05
- H1: 64 · H2: 44 (often italicized, UPPERCASE) · H3: 24 · H4: 18
- Body: 16 · Small: 14 · Eyebrow: 11 mono caps, tracking 0.28em

**Signature treatment:** italicize the emotional word inside a headline in azure-lit.
Example: `Enterprise AI, *from nothing.*` where *from nothing* is italic + `#5B8BFF`.

---

## 5. LOGO (Concept 03 · N-Aperture Lockup — LOCKED)

Square frame + bold `N` with a precise square aperture at the crossing, with an azure dot emerging from the void. Pair with the `nihilo` wordmark (Space Grotesk 600, `-0.04em`) and `SOLUTIONS` tagline (JetBrains Mono, 0.4em tracking, 55% opacity).

### 5.1 Primary Lockup (horizontal) — use `currentColor` to recolor

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <g transform="translate(8 8)">
    <rect x="0" y="0" width="64" height="64" rx="3" stroke="currentColor" stroke-width="1.25" fill="none" opacity="0.4"/>
    <rect x="14" y="10" width="6" height="44" fill="currentColor"/>
    <rect x="44" y="10" width="6" height="44" fill="currentColor"/>
    <path d="M20 10 L50 54 L50 46 L20 10 Z" fill="currentColor"/>
    <rect x="28" y="28" width="8" height="8" fill="#0B0D14"/>
    <rect x="30" y="30" width="4" height="4" fill="#2D6BFF"/>
  </g>
  <text x="92" y="46" font-family="Space Grotesk, sans-serif" font-size="34" font-weight="600" letter-spacing="-0.04em" fill="currentColor">nihilo</text>
  <text x="93" y="63" font-family="JetBrains Mono, monospace" font-size="9" font-weight="500" letter-spacing="0.4em" fill="currentColor" opacity="0.55">SOLUTIONS</text>
</svg>
```

### 5.2 Icon Mark (square)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <rect x="8" y="8" width="64" height="64" rx="3" stroke="currentColor" stroke-width="1.25" fill="none" opacity="0.4"/>
  <rect x="22" y="18" width="6" height="44" fill="currentColor"/>
  <rect x="52" y="18" width="6" height="44" fill="currentColor"/>
  <path d="M28 18 L58 62 L58 54 L28 18 Z" fill="currentColor"/>
  <rect x="36" y="36" width="8" height="8" fill="#0B0D14"/>
  <rect x="38" y="38" width="4" height="4" fill="#2D6BFF"/>
</svg>
```

### 5.3 Favicon (32px optimized)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="4" fill="#0B0D14"/>
  <rect x="9" y="7" width="3" height="18" fill="white"/>
  <rect x="20" y="7" width="3" height="18" fill="white"/>
  <path d="M12 7 L23 25 L23 22 L12 7 Z" fill="white"/>
  <rect x="14" y="14" width="4" height="4" fill="#0B0D14"/>
  <rect x="15" y="15" width="2" height="2" fill="#2D6BFF"/>
</svg>
```

### 5.4 Social Avatar (512, dark-bg)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <rect width="512" height="512" fill="#0B0D14"/>
  <rect x="80" y="80" width="352" height="352" rx="16" stroke="#9AA0AE" stroke-width="5" fill="none" opacity="0.55"/>
  <rect x="152" y="132" width="32" height="248" fill="#FFFFFF"/>
  <rect x="328" y="132" width="32" height="248" fill="#FFFFFF"/>
  <path d="M184 132 L360 380 L360 336 L184 132 Z" fill="#FFFFFF"/>
  <rect x="232" y="232" width="48" height="48" fill="#0B0D14"/>
  <rect x="244" y="244" width="24" height="24" fill="#2D6BFF"/>
</svg>
```

**Logo rules**
- Minimum clear space = height of the `N` on all sides.
- Minimum size: 88px for lockup, 24px for icon mark.
- Never recolor the azure dot. Never stretch. Never apply gradient fills.
- On light backgrounds use `currentColor: #0B0D14`; on dark use `#FFFFFF`.

---

## 6. LAYOUT PRIMITIVES

- **Spacing**: 4px baseline. Common steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Radii**: 0, 2 (buttons/inputs — crisp), 4, 8, 12 (cards), 16 (hero panels). Never pill-shaped except nav.
- **Borders**: hairline `rgba(255,255,255,0.08)` on dark, `rgba(11,13,20,0.08)` on light.
- **Grid backdrop**: 48–72px grid at 3.5% opacity, masked with radial-gradient ellipse to fade at edges.
- **Signature halo**: `rgba(45,107,255,0.15–0.22)` · `filter: blur(120–160px)` · 400–700px circle, behind hero.

---

## 7. VOICE IN LAYOUTS

- Section headers are **two-tier**: mono eyebrow `01 // CAPABILITIES` above an italic UPPERCASE display title.
- Numbered phases: `PHASE 01`, `PHASE 02` — never "Step 1".
- Footer meta: `© MMXXVI · BLACKPENGUIN · AZURE-NATIVE AI` · mono caps · 0.28em tracking.

---

## 8. ICON STYLE

- 24×24 grid · 1.5px stroke · `currentColor` · `stroke-linecap: round` · `stroke-linejoin: round`.
- Geometric, not illustrative. Circles, right-angles, 45° diagonals only.
- Subject matter: infrastructure, data flow, security, retrieval, agents.

---

## 9. USAGE FOR AI TOOLS

When asked to create Nihilo material in Claude Desktop, Claude should:

1. Load Google Fonts in the `<head>` (Inter + Space Grotesk + JetBrains Mono).
2. Use the color tokens verbatim. Never invent new brand colors.
3. Dark by default. Only switch to light if explicitly asked.
4. Use the inline SVGs above for logos — do not generate new mark shapes.
5. Italicize the emotional word of the headline in `#5B8BFF`.
6. Add mono-caps eyebrows above every major section.
7. Use at least one grid backdrop + one azure halo on hero sections.
8. Signature copy patterns: `Enterprise AI, from nothing.` · `From nothing, a system.` · `Ex nihilo.`

---

## 10. LOCK

- **Logo direction:** Concept 03 · N-Aperture
- **Display type:** Space Grotesk 600
- **Signature color:** `#2D6BFF`
- **Version:** v1.0 · Sealed · MMXXVI
- **Governed by:** BlackPenguin / Nihilo Solutions

*Ex nihilo.*
