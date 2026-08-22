import type { Metadata } from "next";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { INDUSTRIES } from "@/lib/industries";
import { JsonLd } from "@/components/site/json-ld";
import Link from "next/link";

export const metadata: Metadata = pageMeta({
      title: "Who Custom Operational Automation Is For | Nihilo Solutions",
      description:
        "We work with operations, service, dispatch, billing, and office teams that still do the same work by hand. If the process repeats, we should talk.",
      path: "/who-we-work-with",
    });

export default function WhoWeWorkWith() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Who we work with", path: "/who-we-work-with" }])} />
      <PageHero
        kicker="Who we work with"
        title="If the work looks like this, we should talk."
        lede="We stay broad on industry on purpose. The fit is the shape of the work: a process that repeats, data that already exists, and a team tired of doing it by hand."
      />
      <section className="pb-16">
        <h2 className="sr-only">Whether this is a fit</h2>
        <div className="mx-auto grid w-[min(70rem,calc(100%-2.5rem))] gap-4.5 md:grid-cols-2">
          <article className="rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]">
            <h3 className="mb-2.5 font-serif text-xl font-medium">A good fit</h3>
            <ul className="ml-4.5 list-disc space-y-2 text-muted">
              <li>An operations, service, dispatch, billing, or office team that repeats the same tasks</li>
              <li>Data already living in sheets, portals, meters, or a few disconnected tools</li>
              <li>A process owner who can walk us through last week's run</li>
              <li>A willingness to start with one workflow, not a company-wide rebuild</li>
            </ul>
          </article>
          <article className="rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]">
            <h3 className="mb-2.5 font-serif text-xl font-medium">Not a fit</h3>
            <ul className="ml-4.5 list-disc space-y-2 text-muted">
              <li>You want a generic chatbot on the website</li>
              <li>You need a full ERP or platform replacement</li>
              <li>Nobody can describe the current process</li>
              <li>The work is different every single time, with no rules</li>
              <li>You are shopping for a staffed agency to run marketing</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="border-y border-border bg-bg-alt py-20">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] sm:text-5xl">
            Where this work shows up
          </h2>
          <p className="mt-3.5 max-w-xl text-lg text-muted">
            The industries vary. The jobs look familiar. The{" "}
            <Link href="/use-cases" className="text-fg underline decoration-accent">
              use cases
            </Link>{" "}
            go through six of them in detail.
          </p>
          <div className="mt-10 grid gap-4.5 md:grid-cols-3">
            <Place
              title="Service and field operations"
              body="Job close-out, service reports, meter or usage reads, and the status pack leadership asks for every week."
            />
            <Place
              title="Dispatch, transport, and scheduling"
              body="Looking up a client or job while someone is waiting. Moving a booking into the system that actually runs the day."
            />
            <Place
              title="Office and back office"
              body="The report that is still assembled by hand. The record entered twice. The exception that only appears after someone scrolls a thousand rows."
            />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] sm:text-5xl">
            Written up by sector
          </h2>
          <p className="mt-3.5 max-w-xl text-lg text-muted">
            Same work, said in the words three sectors actually use for it. If yours is not here,
            the process still is.
          </p>
          <ul className="mt-10 grid gap-4.5 md:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <li key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="flex h-full flex-col rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)] hover:border-accent"
                >
                  <span className="text-[0.8125rem] font-semibold tracking-[0.12em] text-accent">
                    {industry.kicker}
                  </span>
                  <span className="mt-2.5 font-serif text-xl font-medium">{industry.title}</span>
                  <span className="mt-2.5 text-base text-muted">{industry.metaDescription}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand
        title="If you recognize the work, book the call."
        body="We work from Connecticut and take remote engagements nationwide."
      />
    </>
  );
}

function Place({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]">
      <h3 className="mb-2.5 font-serif text-xl font-medium">{title}</h3>
      <p className="text-base text-muted">{body}</p>
    </article>
  );
}
