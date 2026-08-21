> **Superseded, 2026-08-21.** This brief documents the five-package,
> small-business positioning that the site carried until the operational
> automation redesign replaced it. The packages, `/solutions`, `/how-it-works`,
> `/who-we-help` and `/intake` are all retired. Kept as the record of the prior
> reasoning. The current brief is `docs/site-brief.md`.

# Nihilo Solutions site redesign

Repositioning from "product studio building AI-native websites and platforms"
to a focused, conversion-oriented site selling productized solutions to small
and mid-sized businesses.

This document is the reasoning behind the build. The site itself is the
deliverable and is live in this repo.

---

## 1. Proposed sitemap

```
/                     Home
/solutions            Solutions & Packages      (the five offers, in full)
/how-it-works         Discover > Build > Launch > Optimize
/who-we-help          SMB categories, and honest fit / non-fit
/about                Principal-led studio, the three principals
/contact              Two ways to start. Booking calendar lives at #book
/intake               "Tell us about your business" (Microsoft Form)
```

Primary nav carries four items: Solutions, How it works, Who we help, About.
"Book a call" is a persistent button, not a nav link, so the primary action
never competes with navigation. Contact and intake are reachable from every
CTA and from the footer.

### What was removed and why

| Removed | Reason |
| --- | --- |
| "Labs" section and the two empty product slots | Speaks to the studio's ambitions, not the buyer's problem. Empty "coming soon" slots read as an early-stage studio to an SMB owner evaluating vendors |
| "One studio, two engines" manifesto | Interesting internally, irrelevant to someone losing leads |
| The AI capabilities accordion (semantic search, personalization, generative content) | Capability language, not outcome language. The buyable subset is folded into packages 02 and 03 |
| "iOS apps", "MVPs", "fractional AI partner" | Broadens the offer past what an SMB buys, and dilutes the five packages |
| "We make things from nothing" as the headline | Beautiful, and it tells a prospect nothing about whether you can help them |

Stowed survives as one paragraph on About, framed as why the studio thinks the
way it does rather than as a case study.

---

## 2. Homepage

### Section order

```
01  NAV                  Solutions · How it works · Who we help · About · [Book a call]
02  HERO                 Problem-led headline, subhead, dual CTA, three proof chips,
                         lead-flow diagram
03  AUDIENCE STRIP       "Built for businesses with 5 to 150 people" + category chips
04  PAIN > SOLUTION      Five rows. Left: the symptom in the owner's words.
                         Right: the package that fixes it. Each row links to it
05  THE FIVE PACKAGES    Six cards (five packages + "not sure which one you need")
06  HOW IT WORKS         Four condensed steps, link to the full process
07  WHY NIHILO           Three cards: scope, systems not decks, yours when we leave
08  CTA BAND             Book a call / tell us about your business
09  FOOTER               Packages by name, studio pages, both start paths
```

Every section from 04 onward ends in a next step. There is no section a visitor
can reach without a visible way to act.

### Headline options

The site ships **A**. The others are drop-in alternatives.

- **A (shipped, problem-led).** "Stop losing work to a slow site and slower follow-up."
- **B (outcome-led).** "Your website should bring in work. Your systems should keep it moving."
- **C (time-led).** "Win back the week. Stop losing the leads."
- **D (plain).** "Websites, lead follow-up, and automation that small businesses can actually buy."

B is the safer choice if "stop losing" tests as too negative with the audience.
D is the strongest choice for paid traffic, where clarity beats voice.

### Subhead options

- **A (shipped).** "Nihilo builds the website, lead capture, and back-office automation that small and mid-sized businesses actually need. Clear packages, fixed scope, and a working system in weeks rather than quarters."
- **B.** "Five packages, each with a fixed scope and a fixed price. Built by the people you talk to, live in weeks."

### Proof chips

Not metrics, because there are none to publish yet. Three structural claims
that are true today: *Principal-led. No account managers.* / *Fixed scope.
Fixed price.* / *Built to run without us.*

### The pain to solution map

The heart of the page. Left column is the symptom as an owner would describe
it; right column names the package. Copy shipped:

| Symptom | Package |
| --- | --- |
| An inquiry comes in at 9pm and nobody sees it until the next afternoon | 02 · Lead Capture & Follow-up |
| Your site looks dated next to competitors, and visitors cannot tell what to do next | 01 · Website Rebuild |
| Quotes, reminders, and hand-offs live in someone's head or a spreadsheet | 03 · Operations Automation |
| You bought tools that do not match how the business actually runs | 04 · Industry Starters |
| The site launched a while ago and nobody has owned it since | 05 · Growth Retainer |

### Hero diagram

Purpose-built SVG rather than stock abstraction: an inquiry at 9:41pm, replied
to in 12 seconds, logged to CRM, branching to owner notification and a
follow-up sequence, with a dashed X labelled "without a system". It illustrates
the product rather than decorating the page, and it is `aria-hidden` because
the headline already carries the message.

---

## 3. Solutions page structure

Each package is one `<article>` with a consistent five-part anatomy:

```
IDX + NAME              "01 / Package" and the full offer name
THE PROBLEM             Factual, observable, no statistics
WHAT IS INCLUDED        6 to 8 concrete deliverables
WHERE IT STOPS          4 to 5 explicit exclusions
META BAR                Typical timeline · Ideal fit · Pricing or scope
CTA                     Book a call, or the intake form
```

"Where it stops" is the differentiating element. Stating exclusions in public
is what turns an offer into something a prospect can evaluate, and it filters
poor-fit inquiries before they reach a call.

| # | Package | Timeline | Anchor |
| --- | --- | --- | --- |
| 01 | Website Rebuild & Conversion System | 3 to 5 weeks | `#website` |
| 02 | AI Lead Capture & Follow-up System | 2 to 3 weeks | `#lead-capture` |
| 03 | Operations Automation Pack | 3 to 5 weeks | `#operations` |
| 04 | Industry Starter Systems | 4 to 6 weeks | `#starters` |
| 05 | Ongoing Growth & AI Maintenance Retainer | Monthly | `#retainer` |

Page order: hero, jump strip, the five packages, "How we price it" (three
cards), FAQ (seven questions, `FAQPage` schema), CTA band.

**Pricing.** No numbers are published. The page commits to fixed price per
fixed scope, quoted after discovery, with out-of-scope work quoted rather than
absorbed. If price anchoring is wanted later, "from $X" on packages 01 and 02
is the lowest-risk place to add it.

---

## 4. Booking calendar and Microsoft Form

Both integrations read from one config block at the top of `assets/site.js`:

```js
var NIHILO = {
  BOOKING_URL: 'https://outlook.office.com/book/NihiloSolutionsDiscoveryCall@nihilosolutions.com/',
  MS_FORM_URL: 'REPLACE_ME'    // Microsoft Form, "Tell us about your business"
};
```

Nothing else needs editing. The booking calendar is live; until `MS_FORM_URL`
is set the intake page keeps serving its working fallback form.

### Booking calendar

**Placement.** `/contact#book`, immediately below the two-path chooser. This is
the single canonical location for the embed.

**Behaviour.** Every "Book a call" button site-wide carries `data-book` and
points at `/contact#book`. Once `BOOKING_URL` is set, buttons on pages that do
not host the embed open the scheduler directly, while the contact page renders
it inline.

**Section copy (shipped).**
> **Book a discovery call.**
> Thirty minutes, video or phone, whichever you prefer. Times below are live on
> the shared calendar for Jake and Ish.

**Helper text under the embed.**
> What to expect: 30 minutes · no cost · no obligation · written recommendation afterwards

**Live.** Points at the Microsoft Bookings page for the Nihilo Solutions
Discovery Call. A Bookings page only renders in an iframe when it allows
anonymous booking; if it requires sign-in the frame comes up blank, since
Microsoft's login screen refuses to be framed. Every mounted embed therefore
also renders an "open in a new tab" escape link, and buttons on other pages
open the scheduler directly rather than framing it. Confirm the frame renders
once deployed; if it does not, enable anonymous booking or link out instead.

**Below the embed**, a persistent secondary path: "Would rather write it down
first →" linking to `/intake`.

### Microsoft Form

**Placement.** `/intake`, directly under the page hero. The page is reachable
from every secondary CTA ("Tell us about your business") and from the footer.

**Positioning copy (shipped).**
> **Tell us about your business.**
> About five minutes. Enough for us to come back with a real recommendation
> rather than a generic reply. If you would rather just talk, book a call
> instead and skip all of this.

**Required fields**, in this order, matching the fallback form already built:

1. Business name
2. Website, if any
3. Industry or type of business
4. Rough company size (just me / 2-10 / 11-25 / 26-50 / 51-150 / 150+)
5. Main challenge (website / leads and follow-up / operations and automation /
   a combination / not sure / something else) plus a free-text detail field
6. Current tools, as checkboxes plus a free-text "which ones"
7. Anything else we should know
8. Contact name, email, phone

**After submission.** The confirmation keeps selling the call rather than
ending the journey:

> **Got it. Thank you.**
> Your details are with us. One of the principals will read this properly and
> come back within one to two business days with a recommendation.
> If you would rather not wait, the next step is a 30-minute call. You can pick
> a time now.
>
> [Book a 30-minute call →] [Read about the packages]

Microsoft Forms cannot render that confirmation itself. Two options: set the
form's own thank-you message to include the booking link, or configure the form
to redirect back to `/intake?submitted=1`. The fallback form already implements
the confirmation shown above.

**Fallback.** A complete working form posting to Formspree collects the same
fields today and hides itself automatically the moment `MS_FORM_URL` is set.

---

## 5. Remaining pages

### How it works

Discover → Design & Build → Launch → Optimize. Condensed four-step strip, then
each step expanded with **what you get**, **what we need from you**, your time
commitment, and cost. The time commitment is stated explicitly (30 minutes,
about 2 hours total across the build, 1 hour at launch) because "how much of my
week does this take" is the unasked question behind most SMB hesitation. Closes
with a short prose section on principal-led delivery.

### Who we help

Six cards, each with a one to two sentence pain statement: service businesses,
retailers, professional services, wholesale and distribution, light
manufacturing and operations, and an explicit "everyone in between" so the page
does not read as exclusionary. Followed by a candid good-fit / poor-fit split,
then the three failure modes shared across every industry. The poor-fit column
is a qualification tool, not modesty.

### About

Principal-led positioning carried by structure rather than adjectives: a studio
of three cannot hide behind process. Sections: why the studio exists (against
the familiar agency experience), how we work (five commitments), why the studio
builds its own products, the three principals, and "what we will not do" —
which states plainly that no invented case studies, logos, or percentages
appear anywhere on the site.

Roles were reframed from studio language to buyer language: Sam is Design &
Engineering, Jake is Delivery & Operations, Ish is Growth. Jake and Ish are
named as the people who take discovery calls, matching the shared booking
calendar.

### Contact

Two explicit paths, weighted rather than equal. Option 01 (book a call) is the
primary card, accented, marked "Fastest". Option 02 (the form) is presented as
the choice for people who prefer to write things down first, not as a lesser
option. Below: the booking embed, what happens on the call in three steps, then
email, location, and response time.

---

## 6. Messaging rules applied throughout

- Lead with the problem, then name the package. Every section on the homepage
  and solutions page follows this order.
- No invented metrics, client names, logos, or case studies anywhere.
- Pain statements are framed as widely observed patterns ("Response speed is
  where small businesses lose work without ever seeing it happen"), never as
  measured claims.
- Business language over technical language. "AI" appears in exactly two
  package names and describes what it does rather than what it is.
- Every major section ends in a next step: book, or open the form.
- House style avoids em dashes and en dashes, matching the existing copy.

---

## 7. Build notes

Static multi-page site, no build step, deployed on Vercel with `cleanUrls`.
Shared `assets/site.css` and `assets/site.js` replace what was previously
several hundred lines of CSS duplicated per page.

Carried over from the previous design: Bricolage Grotesque, Instrument Serif,
Inter, and Space Mono; the `#FF4D2B` accent on bone and void; the grain
overlay, grid field, and light/dark toggle. The identity was distinctive and
worth keeping. What changed is the information architecture, the density, and
every word.

Accessibility and robustness: skip links, `aria-current` on the active nav
item, a working mobile drawer with Escape-to-close, visible focus rings,
`prefers-reduced-motion` support, and scroll reveals gated behind a `js` class
so no content is hidden if JavaScript fails to load.

### Open items

1. Set `MS_FORM_URL` in `assets/site.js`. `BOOKING_URL` is live; confirm the
   iframe actually renders on the deployed site rather than coming up blank.
2. Build the Microsoft Form to the field list in section 4, and set its
   thank-you message or redirect to include the booking link.
3. Regenerate `og-image.png`. It still carries the old "product studio"
   positioning and is referenced by every page.
4. Point the Formspree endpoint at a form named for intake rather than the old
   project brief, or retire it once the Microsoft Form is live.
5. Decide whether to publish "from" pricing on packages 01 and 02.
6. Add 301 redirects if any old anchor URLs (`/#studio`, `/#capabilities`,
   `/#labs`) were being linked externally.
