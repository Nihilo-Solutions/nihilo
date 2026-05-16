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
- Real production deployments with quantified outcomes (Lettini Brothers: 100% automation rate on inbound leads, sub-1-minute response time).

**The differentiator** (why we beat the alternatives):
- vs. API-wrapper consultancies: we deploy in *your* cloud, not behind their endpoint.
- vs. enterprise vendors (Glean, Hebbia, etc.): you own the deployment, the data, the IP.
- vs. internal teams: 4-6 weeks production-ready vs. 6+ months stalled on security review.
- vs. strategy firms: we ship code, not slide decks.

## The hero copy (homepage)

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
- The current H1 "AI Automations That Cut Ops Costs 30-60%" leads with the outcome. That's strong. The proposed version above leads with the *what + where*, which is more defensible. Test both. The cost-cut version may convert better; the deployment version positions better.
- The 30-60% claim is real but needs to be supportable. If we lead with it, every prospect will ask "based on what?" We should have the answer ready.

## Section headers (homepage, in order)

1. **Hero** — as above.
2. **What we deliver** — three service lines, expanded.
3. **Why tenant-local** — the differentiator section. Why your cloud, not ours, matters.
4. **Proof** — case studies + quantified outcomes. Currently one (Lettini Brothers); need to build to three.
5. **Security and governance** — the security posture section. Currently strong; keep.
6. **The team** — Sam + Jake bios. Direct-access model. Currently good; tighten.
7. **Discovery** — the CTA to book.
8. **Footer** — contact, legal, links.

## Service line copy (homepage)

### Enterprise RAG implementation

**Headline:**
> Retrieval that stays in your tenancy.

**Body:**
> When you scale LLM features, three things bite: fragmented knowledge across systems, hallucinations you can't audit, and data leaving the perimeter for someone else's API. We build production RAG that solves all three. Embeddings, vector indexes, and retrieval logic deploy in your VPC or VNet. Ingestion pipelines normalize and redact PII before indexing. Hybrid retrieval (semantic + metadata + rerank) keeps factuality high. SOC 2 and ISO 27001 evidence collection is straightforward because nothing crosses your boundary.

**KPIs:**
- >95% reduction in external data egress (typical Azure deployments).
- 20-40% improvement in Precision@K on enterprise data lakes.
- <200ms median retrieval latency for typical document stores.

### Agentic process automation

**Headline:**
> Workflow automation you can actually audit.

**Body:**
> Most enterprise workflows fail not because the work is hard, but because the handoffs are brittle. We blend deterministic orchestration with controlled LLM agents to automate multi-step processes while preserving governance. Agents run inside policy sandboxes with clear role separation and observable action trails. Autonomous on routine work; human-in-the-loop on exceptions. RBAC, separation of duties, and full action logging — not bolted on, designed in.

**KPIs:**
- 60-85% reduction in manual steps (typical back-office deployments).
- 30-70% MTTR reduction via automated triage and remediation.
- 100% of agent actions logged, traceable, and replayable.

### Cloud-native AI infrastructure

**Headline:**
> Inference at enterprise scale, on your terms.

**Body:**
> Deploying AI at scale requires infrastructure that balances performance, cost, and control. We engineer cloud-native AI platforms that treat model workloads as platform services: autoscaling inference, request batching, telemetry-driven governance, cost dashboards. Where compliance requires it, the whole stack runs in your tenancy with KMS integrations so you keep the keys.

**KPIs:**
- 25-50% reduction in per-request inference cost via batching and caching.
- Multi-zone failover and autoscaling meeting enterprise RTO/RPO.
- Tenant-local deployments simplify SOC 2 / ISO 27001 evidence collection.

## "Why tenant-local" section (new section to add)

This section doesn't exist on the current site. It should. This is our wedge.

**Headline:**
> Why "tenant-local" matters more than you think.

**Body:**
> Most AI vendors ask you to send your data to their cloud, then ask security and legal to trust the contract. That model works until it doesn't, and when it doesn't, the cost is everything.
>
> **Tenant-local means**:
> - Your data never crosses your boundary. No external egress on inference or retrieval.
> - You hold the keys. BYOK KMS integration is the default, not a premium tier.
> - Your existing audit, IAM, and monitoring already work. You don't add a vendor to your SOC 2 scope.
> - You own the deployment. If we leave, your platform doesn't go with us.
> - Compliance evidence collection is straightforward, not a custom project for every audit.
>
> We don't operate a multi-tenant SaaS. We architect, deploy, and harden your AI platform inside your account, then hand you the keys.

## The team section

Current bios are decent. Sharpen:

### Sam Oakes — Co-Founder, Principal Engineer (NOT "AI Strategy Consultant")

> Sam designs and ships the systems. Background in cloud orchestration and tenant-local LLM infrastructure across regulated industries. Currently architecting AI and security platforms at LDI (managed services). Holds AWS Solutions Architect Pro, Azure Solutions Architect Expert, AWS Security Specialty, and aligns to CISSP. Writes the code on day one of every engagement.

**Tags:** AI Engineering, Tenant-Local Architecture, Cloud Security, RAG Implementation, Agentic Systems

### Jake Ice — Co-Founder, Head of Business Operations

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
- Enterprise-grade (it's redundant — "enterprise" is doing the work)
- Solutions (as a generic suffix — "AI solutions," "cloud solutions" — it means nothing)

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
