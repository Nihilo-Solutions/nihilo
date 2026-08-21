# Nihilo Solutions

Marketing site for Nihilo Solutions, a small Connecticut firm building custom
operational automations for growing companies.

Static multi-page site. Deploys to Vercel with no build step. `cleanUrls` is on,
so `what-we-build.html` is served at `/what-we-build`.

## Pages

| File | URL | Purpose |
| --- | --- | --- |
| `index.html` | `/` | Home. The hero before/after, the three kinds of work, how an engagement runs |
| `what-we-build.html` | `/what-we-build` | Four classes of system: reporting, meter and usage, lookup, similar workflows |
| `use-cases.html` | `/use-cases` | Six worked examples, each anchored (`#reports`, `#meters`, `#lookup`, ...) for deep links |
| `how-we-work.html` | `/how-we-work` | Four steps, what we need from you, time and price and ownership |
| `who-we-work-with.html` | `/who-we-work-with` | Good fit, explicitly not a fit, where the work shows up |
| `about.html` | `/about` | The three of us, and how we think about the work |
| `faq.html` | `/faq` | Eleven questions. Carries FAQPage structured data |
| `contact.html` | `/contact` | The booking calendar. The embed lives at `/contact#book` |
| `privacy.html` | `/privacy` | Short policy |

Shared assets: `assets/site.css` and `assets/site.js`. Every page links both.

Retired URLs 301 in `vercel.json`: `/solutions`, `/how-it-works`, `/who-we-help`,
`/intake`. The reasoning behind the current framing is in `docs/site-brief.md`;
the previous five-package positioning is archived under `docs/archive/`.

## Configuring the booking calendar

One value, at the top of `assets/site.js`:

```js
var NIHILO = {
  BOOKING_URL: 'https://outlook.office.com/book/NihiloSolutionsDiscoveryCall@nihilosolutions.com/'
};
```

`/contact#book` renders it inline. Every "Book a call" button carries `data-book`
and points at `/contact#book`; on pages without the embed the script rewrites
those to open the scheduler directly in a new tab.

The plain `/book/` URL is used rather than the share link's
`?ismsaljsauthenabled` variant, because that is the form Microsoft's own embed
code takes. A Bookings page only renders inside an iframe when it allows
anonymous booking; if it requires sign-in the frame comes up blank, because
Microsoft's login screen refuses to be framed. The embed therefore always renders
an "open in a new tab" escape link beneath it. If the frame is blank on the live
site, either enable anonymous booking in Bookings or drop the embed and link out.

While `BOOKING_URL` is left as `REPLACE_ME` the section renders a labelled
placeholder and an email link rather than a broken frame.

## Conventions

- No build step, no dependencies. Edit HTML and CSS directly.
- Design tokens are the `:root` block at the top of `assets/site.css`. Change a
  colour there, not in a page.
- The primary button is ink on paper. The accent green is for kickers, rules,
  numbers and emphasis only.
- House style avoids em dashes and en dashes in body copy.
- No invented case studies, client names, logos, or performance metrics.
- Every page ends with a next step.
- If you edit a question on `/faq`, edit the matching entry in that page's
  FAQPage JSON-LD too. Google flags structured data that does not match the
  visible text.

## Node version

The root `package.json` carries nothing but `engines.node: "22.x"`. There is no
build and there are no dependencies. It exists because Vercel disables new builds
on Node 20.x from 30 September 2026, and pinning the version in the repo is more
durable than setting it in project config.

## Local preview

```sh
npx serve .
```

`serve` resolves extensionless paths to `.html` the way Vercel's `cleanUrls`
does, so interior links work. With `python3 -m http.server 8080` they will not,
because it needs the `.html` extension.
