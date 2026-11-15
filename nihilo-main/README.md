# nihilosolutions.com

Marketing site for Nihilo Solutions, a small Connecticut firm building custom
operational automations for growing companies. Next.js 16 App Router, React 19,
Tailwind v4, deployed to Vercel.

Its one job is producing 30-minute discovery calls.

```sh
npm install
npm run dev        # http://localhost:5000
npm run typecheck
npm run build
npm run start
```

## Pages

Routes are files under `src/app/(marketing)/`.

| Route | Purpose |
| --- | --- |
| `/` | Home. The hero before/after, the three kinds of work, how an engagement runs |
| `/what-we-build` | Four classes of system: reporting, meter and usage, lookup, similar workflows |
| `/use-cases` | Six worked examples, anchored (`#reports`, `#meters`, `#lookup`, ...) for deep links |
| `/how-we-work` | Four steps, what we need from you, time and price and ownership |
| `/who-we-work-with` | Good fit, explicitly not a fit, where the work shows up. Footer only, not primary nav |
| `/about` | Sam Oakes, Jake Ice, Ish Pandhal. Roles and backgrounds only |
| `/faq` | Eleven questions. Carries FAQPage structured data |
| `/contact` | The Bookings calendar at `#book`, with a form below it |
| `/privacy` | Short policy |
| `/terms` | Terms of Service |

Primary nav is What we build, How we work, Use cases, About, plus a Book a call
button. Who we work with, FAQ, Privacy and Terms live in the footer.

Shared chrome is in `src/components/site/`: `site-header`, `site-footer`,
`page-hero`, `cta-band`, `booking-embed`, `json-ld`, `ui/button`.

## Booking and the contact form

`BOOKING_URL` in `src/lib/site.ts` is the Microsoft Bookings page for the
discovery call. Every "Book a call" and "Book a discovery call" points at it, and
`/contact#book` embeds it.

A Bookings page only renders in an iframe when it allows anonymous booking. If it
requires sign-in the frame comes up blank, because Microsoft's login screen
refuses to be framed. The embed therefore always renders an "open in a new tab"
link, and `/contact` keeps a form below the card.

That form posts to `/api/leads`, which syncs to HubSpot behind
`HUBSPOT_ACCESS_TOKEN`. The process description travels in `message`. If the post
fails the form hands over a prefilled `mailto:` rather than dropping the lead.

## Redirects

Every retired path from the previous site 301s in `next.config.ts`: the old
`/solutions/*` pages, the six `/industries/*` landing pages, `/tools/growth-assessment`,
`/assessment`, `/intake`, `/book`, `/security` and `/platforms`. Non-www is
canonical, and each retired path also has an explicit www variant so www visitors
resolve in a single hop rather than chaining through the catch-all.

## Conventions

See `CLAUDE.md` and `docs/positioning.md`. The short version:

- Design tokens are the `@theme` block at the top of `src/styles.css`. Change a
  colour there, not in a component.
- The primary button is ink on paper. The spruce accent (`#3d5c56`) is for
  kickers, rules, numbers and italic emphasis only. No cobalt, no orange.
- Server components by default. `"use client"` only for the header drawer and the
  contact form.
- `pageMeta()` in `src/lib/seo.ts` emits title, description, canonical, Open Graph
  and Twitter card for a route. Add a page by calling it, not by hand-writing meta
  tags.
- `/faq` builds its FAQPage JSON-LD from the same `FAQ_ITEMS` array it renders, so
  the two cannot drift. Keep it that way.
- Copy is locked. No em dashes in user-facing text, no unsourced stats, no
  employee-count cap, no invented case studies. Discovery calls are 30 minutes.
