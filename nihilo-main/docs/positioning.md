# Nihilo Solutions site

The framing, structure and build notes for the current site. The site itself is the
deliverable and is live in this repo.

Supersedes `docs/archive/2026-08-smb-packages-brief.md`, which documented the
five-package small-business positioning.

---

## 1. The offer

One thing: **custom operational automation.** We take repeating operational work
off a team and turn it into a system that runs without them.

The narrowing is deliberate. The previous site sold five packages spanning
websites, lead capture, operations automation, industry starters and a retainer.
That range asked a buyer to work out which box they were in before they could tell
whether we could help. The new framing leads with the work itself, in the words an
operator would use: the Friday report, the meter reading, the client lookup.

Industry is deliberately broad. The qualifier is the shape of the work, not the
sector: a process that repeats, data that already exists, and a team tired of doing
it by hand.

### What was removed and why

| Removed | Reason |
| --- | --- |
| The five packages and `/solutions` | Asked the buyer to self-classify before they could tell whether we could help. The work is the offer now |
| `/intake` and the Microsoft Form | A second entry path that competed with booking and needed maintaining. One CTA, one calendar |
| Website rebuilds, lead capture, growth retainers | Broadened the offer past operational automation and diluted all of it |
| Published stats on manual-work cost | Unsourced. Nothing on this site claims a number we cannot stand behind |
| Case studies, client logos, metrics | There are none to publish yet, and inventing them is not on the table |

## 2. Sitemap

```
/                     Home
/what-we-build        Four classes of system we build
/use-cases            Six worked examples, anchored for deep links
/how-we-work          Discovery > map and scope > build > handoff
/who-we-work-with     Good fit, not a fit, where the work shows up
/about                The three of us, and how we think about the work
/faq                  Eleven questions, FAQPage schema
/contact              The booking calendar
/privacy              Short policy
```

Primary nav carries four items: What we build, How we work, Use cases, About.
"Book a call" is a persistent button rather than a nav link, so the primary action
never competes with navigation. Who we work with, FAQ and Privacy live in the
footer.

Retired URLs 301 to their nearest equivalent, configured in `vercel.json`:
`/solutions` to `/what-we-build`, `/how-it-works` to `/how-we-work`,
`/who-we-help` to `/who-we-work-with`, `/intake` to `/contact`.

## 3. Homepage

```
01  HERO            "Give your team their week back." Dual CTA, plus a
                    before/after panel: the four manual steps of a Friday
                    report, then the same report landing on its own
02  THE WORK        Three cards, each deep-linking into a use case
03  ENGAGEMENT      Four numbered steps, link to the full process
04  CTA BAND        Book a discovery call
```

The hero panel is the argument in miniature: a concrete four-step manual process
on top, the same output arriving unassisted below. It does the job a stock
illustration would occupy space doing.

## 4. Voice

- Lead with the work, in the operator's words. "The report that someone still
  builds by hand", not "operational inefficiencies".
- No invented metrics, client names, logos, or case studies anywhere.
- Say what we will not do. `/who-we-work-with` carries an explicit "not a fit"
  column, and `/how-we-work` states what we need from the client. Both filter
  poor-fit inquiries before they reach a call.
- Concrete over aspirational. "Thirty minutes" beats "a brief conversation".
- No em dashes or en dashes, matching the existing house style.
- Every page ends in a next step.

## 5. Design

Warm paper, ink, and a muted green accent. Newsreader for headings, IBM Plex Sans
for body. Tokens live in the `@theme` block at the top of `src/styles.css`.

The primary button is ink on paper, not accent-filled. The accent is reserved for
kickers, rules, numbers and emphasis, which keeps it meaningful at the density this
site runs at.

Accessibility: skip link, the active nav item marked, a mobile drawer with
`aria-expanded`, visible focus rings, 44px minimum touch targets, and
`prefers-reduced-motion` support.

## 6. Booking

`BOOKING_URL` in `src/lib/site.ts` is the Microsoft Bookings page for the
discovery call. Every "Book a call" and "Book a discovery call" button points at
it directly, and `/contact#book` embeds it via
`src/components/site/booking-embed.tsx`.

A Bookings page only renders in an iframe when it allows anonymous booking. If it
requires sign-in the frame comes up blank, because Microsoft's login screen
refuses to be framed. So the embed always renders an "open in a new tab" link,
and `/contact` keeps a form below the card for anyone whose times do not work or
who would rather describe the process first.

That form posts to `/api/leads`, the existing HubSpot route, with the process
description carried in `message`. If the post fails the form hands over a
prefilled `mailto:` rather than losing the lead.

## 7. Build notes

Next.js 16 App Router, React 19, Tailwind v4, server-rendered on Vercel. Routes
live in `src/app/(marketing)/`; shared chrome is in `src/components/site/`.

The nine redesign pages plus `/terms` are the whole site. Everything from the
previous positioning was removed: the solution pages, the six industry landing
pages, the growth assessment and its API, the tenant-local security page, and the
feature components behind them. Retired paths 301 in `next.config.ts`.

Design tokens are the `@theme` block at the top of `src/styles.css`. The primary
button is ink on paper; the spruce accent is for kickers, rules, numbers and
italic emphasis only. Fonts are IBM Plex Sans and Newsreader via `next/font`.

SEO per route comes from `pageMeta()` in `src/lib/seo.ts`: title, description,
canonical, Open Graph and Twitter card. Organization plus ProfessionalService
JSON-LD is in the root layout; `/faq` adds FAQPage JSON-LD built from the same
`FAQ_ITEMS` array it renders, so the two cannot drift.

### Accessibility

Skip link to the `main` landmark, `aria-current` on the active nav item, a mobile
drawer with `aria-expanded` and Escape-to-close, visible focus rings, 44px
minimum targets throughout, `prefers-reduced-motion`, and an unbroken heading
order (an `sr-only` section `h2` sits above the first card grid on the pages
where one follows the `h1` directly).

### Open items

1. Confirm the Bookings iframe renders on the deployed site rather than coming up
   blank.
2. `/terms` still carries its standing note that the wording is AI-drafted and
   needs counsel review. Only its styling was changed.
3. HubSpot needs a `message` property on contacts for the contact form's process
   description to land. The route already degrades to a logged warning, so a
   missing property does not break the page.
