# Nihilo Solutions

Marketing site for Nihilo Solutions, a small Connecticut firm building custom
operational automations for growing companies.

TanStack Start (React 19, Tailwind v4), server-rendered, deployed to Vercel.

## Running it

```sh
npm install
npm run dev        # http://127.0.0.1:8080
```

```sh
npm run build      # emits .vercel/output
npm run preview    # serves that build on http://127.0.0.1:8081
npm run typecheck
npm run lint
```

Always check a change against `npm run preview`, not just `npm run dev`. A build
can pass and still deploy blank if `/assets/*` fail to resolve and the HTML
fallback is served in their place, and only the built output shows that.

## Pages

Routes are files in `src/routes/`. Paths come from the filenames, so
`what-we-build.tsx` serves `/what-we-build`. `src/routeTree.gen.ts` is generated
by the router plugin; do not edit it.

| Route | Purpose |
| --- | --- |
| `index` | Home. The hero before/after, the three kinds of work, how an engagement runs |
| `what-we-build` | Four classes of system: reporting, meter and usage, lookup, similar workflows |
| `use-cases` | Six worked examples, each anchored (`#reports`, `#meters`, `#lookup`, ...) for deep links |
| `how-we-work` | Four steps, what we need from you, time and price and ownership |
| `who-we-work-with` | Good fit, explicitly not a fit, where the work shows up |
| `about` | The three of us, and how we think about the work |
| `faq` | Eleven questions. Carries FAQPage structured data |
| `contact` | The Bookings calendar at `#book`, with a request-a-time form below it |
| `privacy` | Short policy |

Shared chrome lives in `src/components/`: `site-shell` (skip link, JSON-LD,
header, footer), `site-header`, `site-footer`, `page-hero`, `cta-band`,
`booking-embed`, and `ui/button`.

Retired URLs 301 in `vercel.json`: `/solutions`, `/how-it-works`,
`/who-we-help`, `/intake`. The reasoning behind the current framing is in
`docs/site-brief.md`; the previous five-package positioning is archived under
`docs/archive/`.

## The booking calendar

One value, `BOOKING_URL` in `src/lib/site.ts`:

```
https://outlook.office.com/book/NihiloSolutionsDiscoveryCall@nihilosolutions.com/
```

`src/components/booking-embed.tsx` renders it at `/contact#book`. The plain
`/book/` form is deliberate: it is what Microsoft's own embed code takes, and the
share link's `?ismsaljsauthenabled` parameter is not needed for framing.

A Bookings page only renders inside an iframe when it allows anonymous booking.
If it requires sign-in the frame comes up blank, because Microsoft's login screen
refuses to be framed. So the embed always renders an "open in a new tab" link
beneath it, and the contact page keeps a request-a-time form below the card that
posts by email. If the frame is blank on the live site, either enable anonymous
booking in Bookings or drop the embed and rely on the link.

Setting `BOOKING_URL` to an empty string swaps the iframe for a labelled
placeholder rather than a broken frame.

## Conventions

- Design tokens are the `@theme` block at the top of `src/styles.css`. Change a
  colour there, not in a component.
- The primary button is ink on paper. The accent green is for kickers, rules,
  numbers and emphasis only.
- House style avoids em dashes and en dashes in body copy.
- No invented case studies, client names, logos, or performance metrics.
- Every page ends with a next step.
- `pageHead()` in `src/lib/seo.ts` emits the title, description, canonical, Open
  Graph and Twitter tags for a route. Add a page by calling it, not by
  hand-writing meta tags.
- `/faq` builds its FAQPage JSON-LD from the same `FAQ_ITEMS` array it renders,
  so the two cannot drift. Keep it that way: Google flags structured data that
  does not match the visible text.
- Card headings are `h3`. Where a card grid is the first thing after the page
  hero, there is an `sr-only` `h2` above it so heading order never jumps h1 to
  h3.

## Deployment

Vercel, zero-config. `npm run build` runs `vite build`, and the nitro vercel
preset writes `.vercel/output` in the Build Output API v3 format, which Vercel
consumes directly. There is no separate deploy step and no output directory to
configure. `vercel.json` carries only the redirects.

`engines.node` is pinned to `22.x`, and the generated function runtime is
`nodejs22.x`. Vercel disables new builds on Node 20.x from 30 September 2026.

`nihilo-main/` is a separate Next.js project with its own `vercel.json` and its
own toolchain. It is excluded from this app's eslint config and is not part of
this build.
