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
for body. Tokens live at the top of `assets/site.css`.

The primary button is ink on paper, not accent-filled. The accent is reserved for
kickers, rules, numbers and emphasis, which keeps it meaningful at the density this
site runs at.

Accessibility: skip link, `aria-current` on the active nav item, a mobile drawer
with Escape-to-close and `aria-expanded`, visible focus rings, 44px minimum touch
targets, and `prefers-reduced-motion` support.

## 6. Booking

One config block at the top of `assets/site.js`:

```js
var NIHILO = {
  BOOKING_URL: 'https://outlook.office.com/book/NihiloSolutionsDiscoveryCall@nihilosolutions.com/'
};
```

Nothing else needs editing. `/contact#book` is the single canonical location for
the embed. Every "Book a call" button site-wide carries `data-book` and points at
`/contact#book`; on pages that do not host the embed, the script rewrites those to
open the scheduler directly.

A Microsoft Bookings page only renders in an iframe when it allows anonymous
booking. If it requires sign-in the frame comes up blank, because Microsoft's login
screen refuses to be framed. The embed therefore always renders a "not loading,
open in a new tab" link beneath it. **Confirm the frame renders on the deployed
site.** If it does not, enable anonymous booking on the Bookings page or drop the
embed and link out instead.

## 7. Build notes

Static multi-page site, no build step, deployed on Vercel with `cleanUrls`. Shared
`assets/site.css` and `assets/site.js`; every page is hand-editable HTML.

The root `package.json` exists only to pin `engines.node` to `22.x`. Vercel
disables new builds on Node 20.x from 30 September 2026, and pinning in the repo
means the setting is not carried in project config alone.

SEO per page: title, meta description, extensionless canonical, Open Graph and
Twitter card tags, and Organization plus ProfessionalService JSON-LD. `/faq`
additionally carries FAQPage JSON-LD generated from the same question list that
renders on the page, so the two cannot drift.

### Open items

1. Confirm the Bookings iframe renders on the deployed site rather than coming up
   blank.
2. `favicon.svg` is the redesign's placeholder mark, a serif N on ink. The logo set
   in `design/design_system/` is the real identity but is drawn in the retired
   orange. Cut a proper mark in the current palette, and generate
   `apple-touch-icon.png` from it. There is currently no apple-touch-icon, so iOS
   home-screen saves fall back to a screenshot.
3. Decide whether to publish "from" pricing anywhere. The site currently commits to
   fixed price per fixed scope, quoted after discovery.
