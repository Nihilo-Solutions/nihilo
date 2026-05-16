# Nihilo conversion playbook

The Nihilo site exists for one purpose: get qualified enterprise buyers onto a discovery call with Sam or Jake. This file is the playbook for making that happen.

## The funnel (as it exists today)

```
   Site visitor
        |
        v
   Reads hero, scrolls
        |
        v
   Clicks "Start Readiness Protocol" CTA
        |
        v
   Lands on intake.nihilosolutions.com (subdomain)
        |
        v
   Fills out form (unknown number of fields, unknown friction)
        |
        v
   Email arrives in our inbox
        |
        v
   We follow up to schedule a discovery call
        |
        v
   Discovery call held
        |
        v
   Engagement proposed and signed
```

There are losses at every step. Right now we don't know where. Job one is instrumenting the funnel so we can see drop-off rates, then optimizing the step with the biggest leak.

## Funnel diagnostics: what to instrument first

Before we optimize anything, we need data. In priority order:

1. **GA4 events** — fire events at:
   - `hero_cta_click` (primary CTA in hero)
   - `secondary_cta_click` (any other CTA on the page)
   - `service_section_view` (scroll-triggered, when each service section is 50% in viewport)
   - `case_study_view`
   - `team_section_view`
   - `contact_section_view`
   - `intake_form_started` (on the intake subdomain — needs coordination)
   - `intake_form_submitted` (the conversion event)

2. **Discovery-call source attribution.** Every discovery call should have a tracked source: organic search, direct, referral, LinkedIn, etc. GA4 + UTM parameters on outbound links.

3. **Heatmap / session replay** (optional, future). Hotjar, Microsoft Clarity (free), or PostHog. Helps see where users actually scroll, click, and abandon. Microsoft Clarity is free and fine for our volume.

## The buyer's journey (as we understand it)

Step-by-step, what we think a typical buyer goes through:

### Step 1: Arrival (0-10 seconds)

The buyer arrives. They scan the hero. Within 10 seconds they're forming a snap judgment: *Is this for me? Are these people serious?*

**What needs to be true at this step:**
- The H1 names the outcome or the differentiator. Not the company.
- The subtitle reinforces with specificity (cloud names, time-to-production, security posture).
- The visual signals "engineering company, not a strategy firm."
- There's a CTA visible above the fold.

**Current state:** OK. H1 is strong ("AI Automations That Cut Ops Costs 30-60%"). Subtitle reinforces. CTA is visible. Could be sharper — see `positioning.md` for proposed copy.

### Step 2: Qualification (10-60 seconds)

The buyer scrolls. They're checking: *Does what they do match what I need?*

**What needs to be true at this step:**
- The three service lines are scannable. A buyer should know within 10 seconds whether we do what they need.
- Each service has a quantified benefit, not just a description.
- There's enough technical depth to signal we're real, but not so much that a CTO-level buyer gets bored.

**Current state:** The service descriptions are good but dense. Bullets work better than paragraphs for scanning. The KPI bullets are great. Could tighten the prose.

### Step 3: Proof check (60-180 seconds)

Now they want to know: *Are these people real? Have they done this before?*

**What needs to be true at this step:**
- Real case study with real client, real numbers, real testimonial.
- Founder bios with real photos, real LinkedIn links, real credentials.
- Optionally: client logos, certifications visible.

**Current state:** One case study (Lettini Brothers) with metrics but no testimonial quote. Founder section is good. Missing: testimonial, client logo strip, certification badges.

### Step 4: Trust check (3-5 minutes)

Now they want to know: *If I send this site to legal or procurement, will it pass smell?*

**What needs to be true at this step:**
- Real company info: legal entity (Nihilo Solutions LLC — already there), location (CT — already there).
- Privacy policy, terms of service (privacy exists — verify terms).
- Real contact info (email — already there).
- Security and governance section that legal/procurement can scan.

**Current state:** Mostly good. The security section is strong. Privacy policy exists. Terms of service status unknown — verify.

### Step 5: Decision (anywhere from 5 minutes to 5 weeks)

The buyer decides whether to take action. Options:

- **Highest intent**: book a discovery call now.
- **Medium intent**: bookmark the site, share with a colleague, come back later.
- **Lower intent**: download the whitepaper, subscribe to a newsletter, follow on LinkedIn.

**What needs to be true at this step:**
- The "highest intent" path is obvious, low-friction, and has a clear value prop.
- The "medium" and "lower" paths exist and are visible.
- Even if they don't act today, they have a reason to come back.

**Current state:** Only the highest-intent path is clearly available (the intake form on a separate subdomain). No medium-intent path (no "talk to a principal" calendar link). No lower-intent path (no newsletter, no blog to follow). All three should exist.

## The CTA hierarchy

The single biggest conversion win is offering different CTAs for different intent levels.

### Primary CTA: Start your readiness assessment

For visitors who are ready to engage.

- **Where:** Hero (above the fold), after each service section, footer.
- **Color:** Highest-contrast button on the page.
- **Copy:** "Start your readiness assessment" or "Begin readiness assessment" — verb-first, outcome-oriented.
- **Destination:** Either keep the subdomain or (preferred) embed the form on the main domain at `/assessment`. Subdomain hops break the conversion path.
- **What happens next:** Form submission → email to us → we respond within 1 business day → schedule a Teams call.
- **What we promise:** This needs to be communicated on the form page. Currently it's "35-point organizational AI readiness audit" with no further explanation. Buyers should know: how long (~30 min), what we'll cover, what they'll walk away with, and whether there's a written deliverable.

### Secondary CTA: Talk to a principal

For visitors who want a human conversation without committing to a "readiness audit."

- **Where:** Sticky header (small, less prominent than the primary), team bio section.
- **Copy:** "Book a call with Sam or Jake" or "Talk to a principal"
- **Destination:** A Calendly or Cal.com booking link. 30-min slots. Both founders' availability synced.
- **Why this matters:** Many technical buyers want to chat before they fill out anything labeled "assessment." Removing this friction captures buyers who would otherwise bounce.

### Tertiary CTA: Read the security whitepaper

For visitors in research mode.

- **Where:** Security section, footer.
- **Copy:** "Read our security whitepaper"
- **Destination:** Currently a PDF download. Should be: a real HTML page at `/security/whitepaper` that's crawlable + a downloadable PDF for sharing.
- **Why this matters:** Technical buyers will read the whitepaper before talking to us. Making it accessible converts more of them.

### Quaternary CTA: Follow our engineering notes

For visitors not yet ready to buy but interested in our thinking.

- **Where:** Article pages, footer.
- **Copy:** "Get our engineering notes" or "Subscribe"
- **Destination:** Newsletter signup (Beehiiv, Substack, Buttondown, or Ghost). Future state. Not P0 but should exist by month 2.
- **Why this matters:** Captures top-of-funnel intent. Builds an owned audience independent of search rankings.

## Page-by-page conversion notes

### Homepage

- **Above the fold**: hero with primary CTA + secondary CTA visible without scrolling.
- **Scroll cue**: visible scroll indicator or section preview to signal there's more below.
- **First section after hero**: service lines, scannable.
- **Mid-page**: case study with real metrics + testimonial.
- **Lower-page**: security and governance section (the trust section for legal/procurement).
- **Team section**: bios with photos + direct-access pitch.
- **Final section**: discovery CTA, prominent.
- **Footer**: secondary contact info, social links, legal pages.

### /security

- **Above the fold**: the trust signals (ZDR, tenant sovereignty, audit integrity).
- **Mid-page**: technical detail (BYOK KMS, IAM, encryption specs).
- **Footer**: whitepaper download + CTA to book a call.

### /assessment

- **Above the fold**: what the assessment is, how long, what they'll walk away with.
- **Form**: as few fields as humanly possible. Name, work email, company, biggest current AI challenge. That's it. Anything else (role, budget, timeline) we ask on the discovery call.
- **Confirmation**: clear next steps. "We'll respond within 1 business day to schedule your call."

### /articles/[slug] (future)

- **Top**: article title, author byline (Sam or Jake), publish date, reading time.
- **Side or bottom**: CTA banner — "Working on this? Talk to a principal."
- **Bottom**: 2-3 related articles + newsletter signup.

## Friction audit (places to remove drag)

1. **Subdomain redirect for the intake form.** Either embed the form on `/assessment` or use a routing rule so the URL stays on the main domain. Subdomain hops cost trust and analytics fidelity.

2. **Long forms.** Whatever's on the intake page now, audit it. 3-4 fields is the upper limit for a first touchpoint. Email + name + company + "what are you trying to do" is plenty.

3. **No clear "what happens next."** Every CTA should set expectations. "Submit and we'll respond within 1 business day." "Book a call and you'll get a calendar invite immediately." Reduce uncertainty.

4. **No secondary path.** If a visitor isn't ready for the "readiness assessment," they leave. Add a "talk to a principal" calendar link.

5. **Whitepaper is PDF-only.** Most readers don't want to download a PDF. HTML page + downloadable PDF as a secondary action.

6. **No "what we don't do" page.** Counter-intuitive, but a "who we're not a fit for" page filters bad leads and signals confidence. Worth considering for month 2.

## Proof-building roadmap

Three concrete things to build over the next 90 days to strengthen conversion:

### Month 1: Lettini Brothers, expanded

The case study should become a full page: `/case-studies/lettini-brothers`. Include:
- 2-3 paragraphs of context (industry, size, problem).
- Architecture diagram (real, not stock).
- Timeline (we delivered in N weeks).
- Quantified outcomes (the existing 3 metrics + 2-3 more if possible).
- A testimonial quote from someone at Lettini with name and title.
- An optional photo of the Lettini logo or the team.

### Month 2: Second case study

Identify a second client (ideally in a different industry, ideally a name a buyer would recognize) and produce a similar case study. If LDI work is shareable under an NDA-friendly framing, that's a candidate.

### Month 3: Third case study + logo strip

Third case study. Then create a logo strip on the homepage with 3-5 client logos. Even small logos build trust.

## A/B tests worth running (later)

Once traffic is high enough (~500 visitors/week minimum), worth testing:

- H1 variant: outcome-first ("Cut ops costs 30-60%") vs. positioning-first ("AI deployed in your cloud, not ours").
- Primary CTA copy: "Start your readiness assessment" vs. "Talk to an engineer" vs. "Book a discovery call."
- Case study placement: above the fold vs. mid-page.
- Form length: 4 fields vs. 6 fields (we believe 4 wins; test confirms).
- Hero subtitle variants emphasizing different KPIs.

Without traffic, don't bother A/B testing. Just ship the most defensible version.

## What this file is not

It's not the SEO strategy (that's `seo-strategy.md`).
It's not the positioning copy bank (that's `positioning.md`).
It's not the technical SEO checklist (also `seo-strategy.md`).

This file is about *what happens after a visitor arrives*. SEO is about getting them to arrive. Positioning is what we say when they're there. Conversion is the path from "visitor" to "discovery call."

## When to update this file

- After we instrument the funnel and see real drop-off data.
- After every A/B test concludes.
- After every meaningful UX change to the site.
- When a new conversion-relevant insight comes from a discovery call ("they all asked about X").

This is a living doc. Treat it like a strategy document, not a fixed plan.
