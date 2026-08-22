import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";
import { USE_CASES } from "@/lib/use-cases";

export const metadata: Metadata = pageMeta({
      title: "Operational Automation Examples | Nihilo Solutions",
      description:
        "Examples of work we automate: recurring reports, data cleanup before it goes into a system, record lookup, exception review, and follow-through. If the process repeats, we can look at it.",
      path: "/use-cases",
    });

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
          {USE_CASES.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="scroll-mt-24 rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]"
            >
              <p className="text-[0.8125rem] font-semibold tracking-[0.12em] text-accent">
                {c.kicker}
              </p>
              <h3 className="mt-2.5 mb-5 font-serif text-xl font-medium">
                <Link href={`/use-cases/${c.id}`} className="hover:underline hover:decoration-accent">
                  {c.title}
                </Link>
              </h3>
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
              <p className="mt-5">
                <Link
                  href={`/use-cases/${c.id}`}
                  className="inline-flex min-h-11 items-center text-fg underline decoration-accent"
                >
                  Read the full use case
                </Link>
              </p>
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
