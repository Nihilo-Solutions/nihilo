/**
 * The three sectors we rebuilt on their original URLs.
 *
 * These are not a claim to specialise. The site's position is that the process
 * matters and the industry mostly does not, so each page says the same thing in
 * the vocabulary of one sector and then points at the use cases that fit it.
 *
 * `useCases` holds ids from src/lib/use-cases.ts. Keep them in sync: an id that
 * no longer exists would render an empty list rather than fail the build.
 */
export interface Industry {
  slug: string;
  kicker: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lede: string;
  /** The trades and roles a visitor uses to recognise themselves. */
  who: string;
  /** The repeating work, in the words that sector uses for it. */
  work: { title: string; body: string }[];
  /** Ids from USE_CASES, in the order they matter here. */
  useCases: string[];
  /** A plausible first build. Illustrative, never presented as work delivered. */
  firstBuild: string;
  notFor: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "home-services",
    kicker: "Home and field services",
    title: "The paperwork that follows every job home",
    metaTitle: "Automate Field Service Reporting and Job Close-Out | Nihilo Solutions",
    metaDescription:
      "Job close-out, recurring service reports, readings captured on site, and looking a customer up while they wait. Custom automation for home and field service operations.",
    lede:
      "The work in the field is not the problem. The problem is everything that has to happen after the van leaves: the close-out, the report, the reading typed into billing, and the customer who calls back asking which job was which.",
    who:
      "HVAC, plumbing, electrical, landscaping, pest control, cleaning, restoration, propane and fuel delivery, equipment service, and anyone else running scheduled or dispatched work with a back office behind it.",
    work: [
      {
        title: "Job close-out that stalls",
        body: "The tech finishes, the paperwork does not. Someone in the office chases the photo, the reading, the signature, or the note before it can be invoiced. The job is done and the money is not.",
      },
      {
        title: "The recurring service report",
        body: "Leadership, a property manager, or a commercial account wants the same pack on the same cycle. Someone gathers it, drops it into the template and sends it, and it goes out late whenever that person is on a truck or on holiday.",
      },
      {
        title: "Readings typed twice",
        body: "A meter, a tank level, a run-time counter, or a usage number gets read on site and then typed into the system that bills for it. Estimated readings and corrections follow.",
      },
      {
        title: "Which job is this?",
        body: "A customer calls about work from six weeks ago. Answering means checking the scheduling tool, the invoice, and someone's inbox while they wait on the phone.",
      },
    ],
    useCases: ["reports", "capture", "lookup", "follow-through"],
    firstBuild:
      "Most field operations start with either the weekly report or the close-out, because both have a hard edge: the report either arrives on Monday or it does not, and the job is either invoiceable or it is not. One workflow, scoped and priced on its own, so you can judge it before deciding whether there is a second.",
    notFor:
      "If your scheduling and invoicing already talk to each other cleanly and nobody is retyping anything, there may be nothing here worth paying for. We would rather say that on the call than sell you a project.",
  },
  {
    slug: "professional-services",
    kicker: "Professional services",
    title: "The reporting and lookups between the billable work",
    metaTitle: "Automate Client Reporting and Record Lookup | Nihilo Solutions",
    metaDescription:
      "Recurring client reports, matter and account lookup across systems, intake handoff, and exception review. Custom automation for professional services back offices.",
    lede:
      "Nobody bills for assembling the monthly client pack, chasing the intake form, or finding which engagement a document belongs to. It still takes hours, and those hours come out of the ones you can bill.",
    who:
      "Accounting and bookkeeping firms, law practices, insurance agencies, consultancies, marketing and creative agencies, staffing firms, and the operations or office managers who keep them running.",
    work: [
      {
        title: "The recurring client pack",
        body: "The same report, per client, on the same cycle. Gather it, drop it into the template, write two lines of commentary, send. Multiply by the client list and it is somebody's week.",
      },
      {
        title: "Which client, which matter",
        body: "A name, a reference or an email arrives and the answer lives across a practice system, a shared drive, an inbox and a billing tool. The search is the job, and it happens dozens of times a day.",
      },
      {
        title: "Intake that hands off by memory",
        body: "A form comes in and someone has to remember to open the file, notify the right person, and start the clock. When they are busy, it waits.",
      },
      {
        title: "Reviewing whole lists to find a few rows",
        body: "Unbilled time, missing documents, engagements past a date, records that never got matched. Most of the list is fine. Someone reads all of it anyway.",
      },
    ],
    useCases: ["reports", "lookup", "follow-through", "exceptions"],
    firstBuild:
      "Usually the recurring pack, because the rules are already written down in whoever's head builds it and the output is easy to compare against last month. Scoped and priced on its own, against the systems you already pay for.",
    notFor:
      "If the report is genuinely different every month because the analysis is the product, automating it will produce something worse. Sometimes we can assemble the parts that never change and leave the judgement to your people, but that is a smaller job and we will say so.",
  },
  {
    slug: "retail-ecommerce",
    kicker: "Retail and ecommerce",
    title: "Counts, orders, and the numbers that move between systems",
    metaTitle: "Automate Inventory Counts and Order Data Entry | Nihilo Solutions",
    metaDescription:
      "Inventory counts typed into a system, orders entered twice, supplier and channel reporting, and returns that need a person. Custom automation for retail and ecommerce operations.",
    lede:
      "Stock, orders and returns all generate the same kind of work: a number that exists in one place and has to end up in another, and a list somebody scans to find the handful of rows that went wrong.",
    who:
      "Independent retailers, multi-location stores, ecommerce and marketplace sellers, wholesalers and distributors, and the operations people who reconcile what the systems say against what is actually on the shelf.",
    work: [
      {
        title: "Counts and supplier data that get keyed in",
        body: "A count, a receiving sheet, or a supplier file arrives in one shape and has to end up in another. Someone reshapes it, corrects the obvious problems, and keys it in. The gap between what arrived and what landed is where the discrepancies live.",
      },
      {
        title: "The same order, entered twice",
        body: "An order lands in one channel and gets rekeyed into the system that actually fulfils it. People are acting as the integration between two tools that were never going to talk.",
      },
      {
        title: "Channel and supplier reporting",
        body: "Sales by channel, stock on hand for a supplier, a returns summary for a marketplace. Same sources, same template, same person, every cycle.",
      },
      {
        title: "The exceptions in a long list",
        body: "The short-shipped line, the return that never got received, the SKU whose count has drifted. A few rows matter and someone reads a thousand to find them.",
      },
    ],
    useCases: ["data-prep", "move", "reports", "exceptions"],
    firstBuild:
      "Often the count or the double entry, because both have a number you can check: what the system says versus what is on the shelf, or how many orders got rekeyed last week. One workflow, scoped and priced on its own.",
    notFor:
      "If you are looking for a platform migration, a new ERP, or a storefront rebuild, that is not what we do. We build against the systems you have already chosen.",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
