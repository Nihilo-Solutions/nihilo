# Nihilo SEO strategy

The strategy: rank for low-volume, high-intent, buyer-defining queries. Win on specificity, not volume. We don't compete for "AI consulting." We compete for "tenant-local RAG Azure," "BYOK RAG enterprise," "agentic automation SOC 2," and similar.

This file is the single source of truth for: keyword targets, content roadmap, technical SEO checklist, and what we're tracking.

## Strategy in one paragraph

Most AI consultancies chase broad terms ("AI consulting," "enterprise AI") that are saturated by McKinsey, Accenture, Deloitte, and well-funded competitors who outrank us on domain authority alone. We can't win that fight. We can win the long-tail: very specific terms a real technical buyer types into a search bar when they have a defined problem. Volume per term is low (maybe 50-500 searches/month per phrase). Intent is extreme. Buyers searching "tenant-local RAG implementation Azure" are not browsing; they have a problem and a budget. We need a handful of pages ranking for these terms.

## Target keywords (priority order)

### Tier 1: must rank within 90 days

Highest buyer intent. Lowest competition. Direct match to what we sell.

| Keyword | Intent | Difficulty (rough) | Target page |
|---|---|---|---|
| tenant-local RAG Azure | buying | low | new article: /content/articles/tenant-local-rag-azure.md |
| BYOK RAG enterprise | buying | low | new article: /content/articles/byok-rag-implementation.md |
| AI consulting CT / Connecticut | buying (local) | low | new section on homepage + local landing page |
| agentic automation governance | buying | low | new article: /content/articles/agentic-automation-governance.md |
| RAG SOC 2 compliance | buying | low | new article: /content/articles/rag-soc2-compliance.md |
| Azure OpenAI vs self-hosted | research-buying | medium | new article: /content/articles/azure-openai-vs-self-hosted.md |
| tenant-local AI deployment | buying | low | new pillar page: /tenant-local-ai |
| AI implementation 4 weeks | buying | low | service page: /services/rapid-deployment |

### Tier 2: 3-6 months

Higher difficulty, still high intent. Need to build content authority first via Tier 1.

| Keyword | Intent | Difficulty |
|---|---|---|
| production RAG architecture | research | medium |
| agentic workflow automation enterprise | buying | medium |
| LLM application security | research | medium |
| AI compliance SOC 2 ISO 27001 | research-buying | medium |
| Bedrock vs Azure OpenAI enterprise | research | medium |
| RAG hallucination reduction | research | medium |
| MTTR reduction AI automation | buying | low-medium |

### Tier 3: 6-12 months

Aspirational. Higher volume, broader intent. Only worth pursuing after Tier 1 is locked.

| Keyword | Intent | Difficulty |
|---|---|---|
| enterprise AI consulting | buying | high |
| AI automation consulting | buying | high |
| LLM ops consulting | buying | high |
| cloud AI consulting | buying | high |

### Brand and adjacent terms (defend, don't chase)

- Nihilo Solutions
- Nihilo AI
- Sam Oakes AI engineer
- Jake Ice consulting

These should obviously rank #1 for our own brand. Defend by keeping the homepage on-brand.

## Content roadmap

The minimum to win Tier 1 in 90 days. One article per week, every Sunday, published Monday.

### Months 1-3 (the foundation)

| Week | Article | Target keyword | Priority |
|---|---|---|---|
| 1 | Tenant-local RAG on Azure: architecture, gotchas, reference implementation | tenant-local RAG Azure | P0 |
| 2 | BYOK KMS for enterprise RAG: implementation guide | BYOK RAG enterprise | P0 |
| 3 | Agentic automation governance: the framework we use in production | agentic automation governance | P0 |
| 4 | Azure OpenAI vs self-hosted Llama for enterprise: when each makes sense | Azure OpenAI vs self-hosted | P0 |
| 5 | RAG SOC 2 evidence collection: what auditors actually want | RAG SOC 2 compliance | P0 |
| 6 | Production-ready AI in 4-6 weeks: the deployment checklist | AI implementation 4 weeks | P1 |
| 7 | Why your RAG is hallucinating: diagnostic checklist | RAG hallucination reduction | P1 |
| 8 | MTTR reduction with agentic triage: the architecture | MTTR reduction AI | P1 |
| 9 | Bedrock vs Azure OpenAI for regulated industries | Bedrock vs Azure OpenAI | P1 |
| 10 | Lettini Brothers case study (expanded with technical depth) | proof | P0 |
| 11 | Tenant-local AI: the cost model nobody publishes | tenant-local economics | P1 |
| 12 | Cloud-native AI infrastructure: the IaC patterns we use | cloud-native AI infrastructure | P1 |

### Why this works

- Each article is ~1500-3000 words. Long enough to rank, short enough to actually ship.
- Each article includes a real architecture diagram (not stock), a real code snippet or config, and a real decision framework.
- Each article ends with a CTA to the readiness assessment.
- Each article links to two other articles (internal linking builds topic authority).
- Each article has a unique angle the existing internet doesn't cover, drawn from real engagements.

### What we don't do

- Listicles ("Top 10 AI tools").
- News commentary ("ChatGPT just released X").
- Generic explainers ("What is RAG?") — every AI vendor has this; we can't outrank them.
- Anything we can't back up with a deployment we've actually done.

## Pillar pages and clusters

The content roadmap above is the cluster strategy. The pillars are:

### Pillar 1: Tenant-local AI
- `/tenant-local-ai` (main pillar page, long-form)
  - `/articles/tenant-local-rag-azure`
  - `/articles/byok-rag-implementation`
  - `/articles/rag-soc2-compliance`
  - `/articles/tenant-local-economics`

### Pillar 2: Agentic automation
- `/agentic-automation` (main pillar page)
  - `/articles/agentic-automation-governance`
  - `/articles/mttr-reduction-agentic-triage`
  - `/articles/agent-action-audit-trails`

### Pillar 3: Production AI deployment
- `/production-ai` (main pillar page)
  - `/articles/azure-openai-vs-self-hosted`
  - `/articles/bedrock-vs-azure-openai`
  - `/articles/ai-implementation-4-weeks-checklist`
  - `/articles/cloud-native-ai-infrastructure`

Each pillar page is the hub. Cluster articles link up to the pillar; the pillar links down to each article. This is the standard SEO content architecture and it works.

## Technical SEO checklist

Status as of last audit, and what needs doing.

### Critical (do this first)

- [ ] **Structured data (JSON-LD).** Currently zero schema markup. Add:
  - `Organization` schema on every page (in `<head>` via root layout).
  - `LocalBusiness` schema on homepage (for CT location).
  - `Person` schema for Sam and Jake (on the about/team section).
  - `Service` schema for each service line.
  - `Article` schema on each blog article (auto-generated from frontmatter).
  - `FAQPage` schema for the FAQ section once it exists.
  - `BreadcrumbList` schema on every non-homepage URL.

- [ ] **Per-page meta tags.** Currently every page uses the same OG/Twitter meta. Each page should have unique:
  - `<title>` (pattern: `[Page Topic] | Nihilo Solutions`)
  - `<meta name="description">` (per page, ~150 chars)
  - `og:title`, `og:description`, `og:url`, `og:image` (per page)
  - `twitter:title`, `twitter:description`, `twitter:image` (per page)
  - canonical `<link rel="canonical">` (per page)

- [ ] **OG image.** Currently `og:image` points to `/logo.png`. This is wrong. Build a real OG image (1200x630, includes the title and a tagline) and dynamically generate per-article OG images via `@vercel/og` or similar.

- [ ] **Verify `robots.txt`.** Should allow all major bots, point to sitemap, disallow only `/admin/` or similar if it exists.

- [ ] **Verify `sitemap.xml`.** Should be auto-generated from the site routes. Next.js makes this easy via `next-sitemap` or App Router's built-in sitemap generation.

- [ ] **Image alt text everywhere.** Currently the headshots have alt text. Verify all illustrative images do too.

- [ ] **Heading hierarchy.** One `<h1>` per page. `<h2>` for major sections. `<h3>` for subsections. No skipping levels. No multiple `<h1>`s.

### Important (do within a month)

- [ ] **Page speed.** Target Lighthouse 90+ on all four scores (Performance, Accessibility, Best Practices, SEO). Specifically:
  - LCP under 2.5s.
  - CLS under 0.1.
  - TBT under 200ms.
  - Image optimization (Next.js `<Image>` everywhere; AVIF/WebP).
  - Font subsetting (current site uses webfonts; verify they're subsetted and preloaded).

- [ ] **Mobile responsiveness audit.** The site looks desktop-first. Walk through every page on a 375px viewport.

- [ ] **Accessibility audit.** axe-core in CI. Real keyboard navigation test. Screen reader test on the hero and CTA.

- [ ] **Internal linking strategy.** Every page should link to at least two other pages. Every article should link to two related articles and the relevant service page.

### Strategic (ongoing)

- [ ] **Google Search Console.** Verify the property, submit the sitemap, monitor queries and click-through rates.
- [ ] **Bing Webmaster Tools.** Same. Bing matters more than people think for B2B (still ~6% of searches, with higher CTR).
- [ ] **Backlinks.** Strategy TBD. Likely paths: open-source work, conference talks, podcast appearances, guest articles on a couple of established blogs (where the audience overlaps with our ICP).
- [ ] **Google Business Profile.** Set up for the CT location. Local + niche is a small but real lever.

## E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness)

Google increasingly weights these for any "your money or your life" topic, which includes enterprise software decisions. We need to surface:

- **Experience**: real case studies with real numbers, real client names. (Currently 1 — Lettini Brothers. Need 2-3 more.)
- **Expertise**: founder bios with specific credentials. (Currently good. Could add: years of experience, prior employers if no NDA.)
- **Authoritativeness**: external recognition. Open-source contributions, conference talks, published whitepapers, citations from other AI/security sources.
- **Trustworthiness**: clear contact info, physical address, real photos of real people, transparent pricing signals, privacy policy, terms of service.

## Tracking and KPIs

Weekly review:
- Organic sessions (GA4)
- Top organic queries (Search Console)
- Top landing pages by organic
- Position changes for Tier 1 keywords
- New backlinks (Ahrefs free tier or similar)

Monthly review:
- New articles published (target: 4)
- New keyword rankings in top 20 (target: 2/month)
- New keyword rankings in top 3 (target: 1/quarter for Tier 1)
- Discovery calls booked from organic source

The discovery call number is the only one that actually matters. Everything else is leading indicators.

## What this file is not

This file doesn't tell you *how* to write each article (voice is in `positioning.md` and the `sam-voice.md` library file). It tells you *what* to write and in what order. The actual articles live in `/content/articles/*.md` once written.

## When to update this file

- After each Google algorithm update that materially affects rankings.
- When a target keyword starts ranking (move it to "done" and replace with the next priority).
- When a target keyword turns out to have zero volume or wrong intent (kill it).
- Quarterly review of the whole roadmap.
