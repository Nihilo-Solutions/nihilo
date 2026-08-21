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

`BOOKING_URL` in `src/lib/site.ts` is the only value to change:

```ts
export const BOOKING_URL =
  "https://outlook.office.com/book/NihiloSolutionsDiscoveryCall@nihilosolutions.com/";
```

`/contact#book` is the single canonical location for the embed, rendered by
`src/components/booking-embed.tsx`. Every "Book a call" button links there.

A Microsoft Bookings page only renders in an iframe when it allows anonymous
booking. If it requires sign-in the frame comes up blank, because Microsoft's
login screen refuses to be framed. Two things follow from that, and both are
deliberate: the embed always renders a "not loading, open in a new tab" link,
and the contact page keeps a request-a-time form below the card. The form is not
a leftover. It is the path for someone whose available times do not work, and
the fallback if the frame ever goes blank.

**Confirm the frame renders on the deployed site.** If it does not, enable
anonymous booking on the Bookings page, or drop the embed and rely on the link
and the form.

## 7. Build notes

TanStack Start, React 19, Tailwind v4, server-rendered. `npm run build` runs
`vite build`; the nitro vercel preset emits `.vercel/output` in Build Output API
v3 format, which Vercel consumes with no deploy step to configure. `vercel.json`
carries only the retired-URL redirects.

This is Grok's application, not a rewrite of it. What was removed on the way in
was the app-builder harness the site never called: better-auth, pglite, kysely,
the multiplayer P2P layer, the PWA middleware, the auth-popup and app-env Vite
plugins, and the migration runner. Dependencies went from roughly 60 to 28.
`src/routes/`, `src/components/` and `src/styles.css` are as Grok wrote them,
apart from the changes listed below.

`engines.node` is `22.x` and the function runtime is `nodejs22.x`, ahead of
Vercel disabling Node 20.x builds on 30 September 2026.

SEO per route comes from `pageHead()` in `src/lib/seo.ts`: title, description,
canonical, Open Graph and Twitter card. Organization plus ProfessionalService
JSON-LD is in `site-shell.tsx`; `/faq` adds FAQPage JSON-LD built from the same
`FAQ_ITEMS` array it renders, so the two cannot drift.

### What was changed in the app source, and why

| Change | Reason |
| --- | --- |
| `pageHead()` emits OG and Twitter tags | the redesign shipped none, so every share rendered bare |
| Skip link and `#main` in `site-shell` | there was no way past the nav by keyboard |
| Nav links `min-h-11` | they measured about 22px, under the WCAG 2.2 AA 24px minimum |
| `prefers-reduced-motion` extended to animations and transitions | it only reset `scroll-behavior` |
| Footer column labels `h4` to `h2` | `/faq` jumped h1 to h4; the classes are explicit, so rendering is identical |
| `sr-only` `h2` on six pages | a card grid followed the `h1` directly, jumping h1 to h3 |
| `whitespace-nowrap` on buttons, `shrink-0` on the header logo and actions | "Book a call" wrapped to two lines and spilled out of the 72px header on phones |
| Wordmark shortens to "NIHILO" below 360px | the full lockup, the CTA and the menu button overflowed a 320px viewport by 41px |
| Contact page: Bookings embed in the card, form moved below it | see section 6 |
| `apple-touch-icon.png` and `favicon.svg` cut from the brand mark | the redesign shipped a placeholder serif "N" and no touch icon |

### Open items

1. Confirm the Bookings iframe renders on the deployed site rather than coming
   up blank.
2. The Vercel project was configured for a no-build static site. It now needs to
   run `npm run build`; zero-config should detect that, but an explicitly pinned
   Framework Preset or an empty Build Command in the dashboard would have to be
   cleared by hand.
3. Decide whether to publish "from" pricing anywhere. The site currently commits
   to fixed price per fixed scope, quoted after discovery.
