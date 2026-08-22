import type { Metadata } from "next";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = pageMeta({
      title: "Operational Automation Examples | Nihilo Solutions",
      description:
        "Examples of work we automate: weekly reports, typed readings, record lookup, exception review, and follow-through. If the process repeats, we can look at it.",
      path: "/use-cases",
    });

const CASES = [
  {
    id: "reports",
    kicker: "Recurring reports",
    title: "The weekly pack someone still builds by hand",
    problem:
      "Every week someone exports from one system, pastes into a sheet, applies the same filters, writes a short summary, and emails it. It might be a service report, a job list, a billing recap, or a status pack for leadership. Late files, missing rows, and a process that lives in one person's head.",
    build: "A scheduled pull, the same rules every time, and a report that lands in the inbox or folder in the format your team already uses.",
  },
  {
    id: "meters",
    kicker: "Collecting numbers",
    title: "Readings and counts that still get typed",
    problem:
      "A person reads a meter, a portal, a print-out, a counter, or a screen, then types the number into the system that bills, restocks, or tracks usage. Manual entry creates estimates, corrections, and delays. This shows up anywhere a number has to move from the real world into a system.",
    build: "A capture path for the number, basic validation, and a write-back to the system that already owns billing, inventory, or tracking.",
  },
  {
    id: "lookup",
    kicker: "Finding the right record",
    title: "Who is this, and which job is it?",
    problem:
      "A name, phone, ID, or ticket comes in. Staff hunt across a booking tool, a sheet, email, and billing to find the right customer, job, or account. Time that should be spent helping is spent searching.",
    build: "A single lookup against the sources you already have, so the right record comes back without re-keying.",
  },
  {
    id: "exceptions",
    kicker: "Exceptions, not every row",
    title: "Review only what needs a person",
    problem:
      "The team still scans entire lists to find the late job, the odd reading, the unmatched record, or the item that slipped. Most of the list is fine. The value is in the few rows that broke.",
    build: "Rules that surface only what needs a person, with enough context to act.",
  },
  {
    id: "move",
    kicker: "Moving information",
    title: "The same record, entered twice",
    problem:
      "A new job, order, or client is created in one system and then typed into another. That second entry is where errors and delay live. People are acting as the integration between tools.",
    build: "A one-way or two-way movement of the fields that actually matter. Not an enterprise integration program.",
  },
  {
    id: "follow-through",
    kicker: "Follow-through",
    title: "The next step that lives in someone's head",
    problem:
      "After a job closes, a form arrives, or a reading comes in, someone has to remember to update a sheet, send a note, or kick off the next step. If they forget, it stalls. The process is real. It just is not written down as a system.",
    build: "The close-out, intake, or reading triggers the next step automatically, the same way every time.",
  },
];

const ALSO = [
  "Intake and handoff",
  "Status updates",
  "Scheduled checks",
  "Invoice backups",
  "Inventory counts",
  "File and folder routing",
];

export default function UseCases() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Use cases", path: "/use-cases" }])} />
      <PageHero
        kicker="Use cases"
        title="Examples of work we automate."
        lede="These are starting points, not a closed list. If someone on your team still does the same steps every week, we can look at it, even if it is not on this page."
      />
      <section className="pb-16">
        <h2 className="sr-only">Worked examples</h2>
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))] space-y-4.5">
          {CASES.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="scroll-mt-24 rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]"
            >
              <p className="text-[0.8125rem] font-semibold tracking-[0.12em] text-accent">
                {c.kicker}
              </p>
              <h3 className="mt-2.5 mb-5 font-serif text-xl font-medium">{c.title}</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs tracking-[0.14em] text-muted uppercase">Today</p>
                  <p className="text-muted">{c.problem}</p>
                </div>
                <div className="rounded-md bg-bg-alt p-5">
                  <p className="mb-2 text-xs tracking-[0.14em] text-accent uppercase">What we build</p>
                  <p className="text-fg">{c.build}</p>
                </div>
              </div>
            </article>
          ))}

          <article className="rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]">
            <p className="text-[0.8125rem] font-semibold tracking-[0.12em] text-accent">And similar work</p>
            <h3 className="mt-2.5 mb-3 font-serif text-xl font-medium">
              If the pattern repeats, it belongs here.
            </h3>
            <p className="max-w-2xl text-muted">
              Other examples we look at include intake, status updates, scheduled checks, invoice
              backups, inventory counts, and file routing. If it is rules-based, currently done by a
              person, and you can walk us through last week's run, bring it.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {ALSO.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-bg-alt px-3 py-1.5 text-sm text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <CtaBand
        title="Your process does not have to match an example."
        body="Book a call. Bring the work that keeps coming back. We will tell you if it is worth automating."
      />
    </>
  );
}
