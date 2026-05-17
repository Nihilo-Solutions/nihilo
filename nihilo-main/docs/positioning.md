# Nihilo positioning and copy bank

This is the single source of truth for what Nihilo says about itself on the marketing site. Every page, every CTA, every meta tag pulls from this file. If you find yourself writing copy that doesn't match what's here, stop and either: (a) update the copy to match this file, or (b) propose a positioning change and update this file first.

## The one-sentence positioning

> **Nihilo builds production AI automation deployed inside your cloud tenancy, not ours.**

Everything else flows from this. If a piece of copy could be said by Anthropic, OpenAI, AWS, a LangChain dev shop, or any other generic AI consultancy, it's not Nihilo copy.

## The pyramid

**The promise** (what we sell):
> Production-grade AI automation, deployed in your Azure or AWS tenancy in 4-6 weeks, with security and governance baked in from day one.

**The proof points** (why we can deliver):
- Tenant-local deployment by default (your cloud, your keys, your data residency).
- Founder-led delivery (talk to the engineer who builds it).
- AWS Solutions Architect Pro, Azure Solutions Architect Expert, AWS Security Specialty, CISSP-aligned certifications on the engineering side.
- Microsoft Azure Partner.
- Real production deployments with quantified outcomes (Lettini Brothers: 100% automation rate on inbound leads, sub-1-minute response time).

**The differentiator** (why we beat the alternatives):
- vs. API-wrapper consultancies: we deploy in *your* cloud, not behind their endpoint.
- vs. enterprise vendors (Glean, Hebbia, etc.): you own the deployment, the data, the IP.
- vs. internal teams: 4-6 weeks production-ready vs. 6+ months stalled on security review.
- vs. strategy firms: we ship code, not slide decks.

## The hero copy (homepage)

> **Status: locked.**

```
EYEBROW:     [No eyebrow. Cut it. The H1 is strong enough.]

H1:          Production AI Automation,
             Deployed in Your Cloud.

SUBTITLE:    Tenant-local RAG and agentic workflows on Azure and AWS.
             SOC 2 / ISO 27001 ready by default. Production in 4-6 weeks.

PRIMARY CTA: Start your readiness assessment
SECONDARY:   See how it works
```

Notes:
- The 30-60% cost reduction claim is real and supportable. Reference it in supporting body copy (proof bullets, stats section, service-line KPIs), not in the H1. If we lead with the cost claim in the H1, every prospect asks "based on what?" and the answer needs to be visible alongside.

## Section headers (homepage, in order)

1. **Hero**: as above.
2. **What we deliver**: three service lines, expanded.
3. **Why tenant-local**: the trust posture section. Executive-readable lead, technical depth follow.
4. **Proof**: case studies + quantified outcomes. Currently one (Lettini Brothers); need to build to three.
5. **Security and governance**: the deeper security posture section. Currently strong; keep.
6. **The team**: Sam + Jake bios. Direct-access model. Currently good; tighten.
7. **Discovery**: the CTA to book.
8. **Footer**: contact, legal, links.

## Service line copy (homepage)

Each service card is written in two layers. Layer A leads with a business outcome a non-technical executive can take to their CFO or board. Layer B carries the technical depth a CTO or VP Engineering needs to feel confident handing the work off. Both layers are required. Removing Layer A loses the business buyer; removing Layer B loses the technical buyer.

### Enterprise RAG implementation

**Headline:**
> Retrieval that stays in your tenancy.

**Layer A (business outcome):**
> Your team spends hours every week digging through scattered documents, emails, and systems for answers that already exist somewhere. We build a private AI search layer that surfaces those answers in seconds, with sensitive data never leaving your cloud.

**Layer B (technical body):**
> Production-grade RAG that addresses fragmented knowledge, unauditable hallucinations, and data egress, with nothing crossing your tenancy boundary.

**How we implement it:**
- Secure ingestion pipelines that filter, normalize and redact PII before indexing.
- Tenant-local vector stores with BYOK KMS integration and strict network controls.
- Retrieval tuning, prompt templates and reranking to improve factuality.

**KPIs:**
- >95% reduction in external data egress (typical Azure deployments).
- 20-40% improvement in Precision@K on enterprise data lakes.
- <200ms median retrieval latency for typical document stores.

### Agentic process automation

**Headline:**
> Workflow automation you can actually audit.

**Layer A (business outcome):**
> Repetitive operational work, lead routing, ticket triage, data entry, approval handoffs, eats your team's bandwidth and slows the business down. We automate that work with AI agents that operate inside controls you set, with a full audit trail for every action taken.

**Layer B (technical body):**
> Deterministic orchestration with controlled LLM agents, autonomous on routine work and human-in-the-loop on exceptions, with every agent action logged and replayable.

**How we implement it:**
- Define agent goals and safety constraints using reusable governance templates.
- Orchestrate agents with event-driven serverless patterns for reliability and idempotency.
- Integrate with ticketing, CI and observability stacks while enforcing RBAC and separation of duties.

**KPIs:**
- 60-85% reduction in manual steps (typical back-office deployments).
- 30-70% MTTR reduction via automated triage and remediation.
- 100% of agent actions logged, traceable, and replayable.

### Cloud-native AI infrastructure

**Headline:**
> Inference at enterprise scale, on your terms.

**Layer A (business outcome):**
> When AI usage starts mattering to the P&L, infrastructure decisions go from theoretical to existential. We build the AI backbone that scales with your business, runs on the cloud you already use, and keeps cost predictable as volume grows.

**Layer B (technical body):**
> Cloud-native AI platforms that treat model workloads as platform services, deployed in your tenancy with KMS integrations so you keep the keys.

**How we implement it:**
- IaC modules (Terraform/ARM) with secure-by-default parameterization.
- Autoscaling inference clusters, batching and model tiering to reduce per-request cost.
- Telemetry for model drift, A/B evaluation and cost dashboards to enforce governance.

**KPIs:**
- 25-50% reduction in per-request inference cost via batching and caching.
- Multi-zone failover and autoscaling meeting enterprise RTO/RPO.
- Tenant-local deployments simplify SOC 2 / ISO 27001 evidence collection.

## Why tenant-local

The wedge. This section is the executive-readable translation of the security story, with technical depth available below for the second buyer. It feeds the homepage `WhyTenantLocal` component.

**Eyebrow:** `02 // Trust posture`

**Headline:**
> Your data stays in your cloud. Nothing crosses your boundary.

**Layer A (business outcome, executive-readable, 2 to 3 sentences):**
> Most AI vendors ask you to send sensitive data into their environment and trust the contract. We deploy AI inside your own Azure or AWS tenancy, so customer data, regulated information, and proprietary content never leave. That keeps you aligned with SOC 2 and ISO 27001 evidence requirements without adding a new vendor to your compliance scope.

**Trust markers (icon grid for the homepage component):**
- **Data never leaves your tenancy.** No external egress on retrieval or inference.
- **SOC 2 and ISO 27001 aligned.** Evidence collection stays inside your existing scope.
- **BYOK encryption.** Your keys, your control, default for every deployment.

**Layer B (technical depth, for the technical buyer):**
> Tenant-local means embeddings, vector indexes, retrieval logic, and inference all deploy inside your VPC or VNet. Your existing IAM, audit, and monitoring tools already cover this footprint because nothing new is leaving your perimeter. We do not operate a multi-tenant SaaS. We architect, deploy, and harden your AI platform inside your account, then hand you the keys. If we walk away, your platform doesn't go with us.

**Why this matters for regulated industries and executive risk:**
- A data breach involving an external AI vendor is a board-level event. Our architecture removes that risk vector by design.
- Your security review, IAM, and monitoring already cover this work because nothing new is leaving your perimeter.
- "Trust the vendor" is replaced with "trust your own controls."

## The team section

Current bios are decent. Sharpen:

### Sam Oakes: Co-Founder / AI Engineer

> Sam designs and ships the systems. Background in cloud orchestration and tenant-local LLM infrastructure across regulated industries. Currently architecting AI and security platforms at LDI (managed services). Holds AWS Solutions Architect Pro, Azure Solutions Architect Expert, AWS Security Specialty, and aligns to CISSP. Writes the code on day one of every engagement.

**Tags:** AI Engineering, Tenant-Local Architecture, Cloud Security, RAG Implementation, Agentic Systems

### Jake Ice: Co-Founder, Head of Business Operations

> Jake runs delivery and commercial strategy. Over a decade scaling B2B enterprise sales and operations at SaaS and cloud consultancies. Translates technical capability into business outcomes and runs the client side end-to-end. Owns commercial structure, partnerships, and ensuring engagements stay on time and on scope.

**Tags:** Client Strategy, Commercial Operations, Partnerships, Engagement Management

### The two-of-us pitch

After the bios, a short line:

> **Why this matters for you:** When you engage Nihilo, you talk to the engineer who builds it and the operator who runs delivery. No account managers between you and the work. Two phone calls, one chain of accountability.

## CTAs

Hierarchy, in order of intent:

1. **Highest intent: Start your readiness assessment** (links to intake form). Use on hero, after each section, in footer.
2. **Medium intent: Talk to a principal** (links to Calendly or Teams scheduler). Use for visitors not ready to fill the intake form.
3. **Lower intent: Read the security whitepaper** (links to /security). For technical readers in research mode.
4. **Lowest intent: Subscribe to engineering notes** (newsletter, optional, future). For readers wanting to follow our thinking before they buy.

Right now we only have CTA 1 prominently displayed. Adding CTA 2 (talk-to-principal) is high-priority.

## Words and phrases we use

- Tenant-local
- Production-grade / production-ready
- BYOK KMS
- Zero-trust by default
- Audit integrity
- Cloud sovereignty
- Direct-access (principal-led)
- Engineering-led delivery
- Quantified outcomes
- 4-6 weeks production

## Words and phrases we never use

- AI-powered (everything is AI-powered now)
- Next-generation
- Transformative / transformation
- Cutting-edge
- Robust solutions
- Leverage
- Synergy
- Future-proof
- Harness the power of
- The future of [anything]
- Empower your business
- Forward-thinking enterprises
- Innovative
- Best-in-class
- World-class
- Industry-leading
- Game-changing
- Revolutionary
- Disruption / disruptive
- Enterprise-grade (it's redundant; "enterprise" is doing the work)
- Solutions (the generic suffix, as in "AI solutions," "cloud solutions": it means nothing)

If you catch yourself reaching for one of these, the underlying point is too vague. Find the specific thing.

## Meta tags (site-wide defaults)

```yaml
title: Tenant-Local AI Automation on Azure & AWS | Nihilo Solutions
meta-description: Production AI automation deployed inside your Azure or AWS tenancy. Tenant-local RAG, agentic workflows, SOC 2 / ISO 27001 ready. Production in 4-6 weeks.
og:title: Tenant-Local AI Automation | Nihilo Solutions
og:description: Production AI automation in your cloud, not ours. Tenant-local RAG and agentic workflows on Azure and AWS.
og:image: https://nihilosolutions.com/og-image.png  # need a real OG image, not the logo
og:type: website
twitter:card: summary_large_image
twitter:title: Tenant-Local AI Automation | Nihilo Solutions
twitter:description: Production AI automation in your cloud, not ours. Azure and AWS. 4-6 weeks to production.
```

Per-page titles override the site-wide. Pattern: `[Page Topic] | Nihilo Solutions`.

## When to update this file

- Anytime we change a positioning element (the H1, a service line headline, a tagline).
- Anytime we add or kill a service line.
- Anytime we add a real case study (the Lettini description here should be a one-liner; the full case study lives in `/content/case-studies/lettini-brothers.md`).
- Anytime Jake or Sam updates their bio.

This file is checked in to git. Update it via PR. Every change to positioning is a deliberate decision, not a drift.
