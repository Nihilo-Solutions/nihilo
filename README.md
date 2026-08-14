# Nihilo Solutions

Marketing site for Nihilo Solutions, a principal-led studio building websites,
lead capture and follow-up systems, and operations automation for small and
mid-sized businesses.

Static multi-page site. Deploys to Vercel with no build step. `cleanUrls` is on,
so `solutions.html` is served at `/solutions`.

## Pages

| File | URL | Purpose |
| --- | --- | --- |
| `index.html` | `/` | Home. Pain to solution mapping, the five packages, process, CTAs |
| `solutions.html` | `/solutions` | The five packages in full, with scope boundaries, timelines, pricing approach, FAQ |
| `how-it-works.html` | `/how-it-works` | Discover, Design and Build, Launch, Optimize |
| `who-we-help.html` | `/who-we-help` | SMB categories, fit and non-fit, shared failure modes |
| `about.html` | `/about` | Principal-led positioning and the three principals |
| `contact.html` | `/contact` | Two paths to start. Booking calendar embed lives at `/contact#book` |
| `intake.html` | `/intake` | "Tell us about your business". Microsoft Form embed, with a working fallback form |

Shared assets: `assets/site.css` and `assets/site.js`. Every page links both.

## Configuring the two integrations

Both live at the top of `assets/site.js` and are the only values that need
changing:

```js
var NIHILO = {
  BOOKING_URL: 'REPLACE_ME',   // shared discovery calendar for Jake and Ish
  MS_FORM_URL: 'REPLACE_ME'    // Microsoft Form for "Tell us about your business"
};
```

**BOOKING_URL** — Calendly, Microsoft Bookings, or any embeddable scheduler
pointed at the shared team calendar. Use the direct embed URL. Once set, the
`/contact#book` section renders the live scheduler in place of the placeholder,
and any "Book a call" button on a page without the embed opens the scheduler
directly.

**MS_FORM_URL** — in Microsoft Forms choose *Collect responses > Embed* and copy
the `src` from the generated iframe. Once set, `/intake` renders the Microsoft
Form and automatically hides the fallback form.

Until each value is replaced the site stays usable: the booking section offers
email and the intake form, and `/intake` shows a fully working fallback form
posting to Formspree that collects the same fields.

The Microsoft Form should collect, in order: business name; website if any;
industry or type of business; rough company size; main challenge (website /
leads and follow-up / operations and automation / a combination); current tools;
anything else; and contact name, email, and phone.

## Conventions

- No build step, no dependencies. Edit HTML and CSS directly.
- House style avoids em dashes and en dashes in body copy.
- No invented case studies, client names, logos, or performance metrics.
- Every major section ends with a next step: book a call, or open the intake form.

## Local preview

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`. Note that `cleanUrls` is a Vercel feature, so
locally you need the `.html` extension on interior pages.
