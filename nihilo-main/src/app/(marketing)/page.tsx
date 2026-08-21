import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/site/cta-band";
import { Button } from "@/components/site/ui/button";
import { pageMeta } from "@/lib/seo";
import { BOOKING_URL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
      title: "Custom Operational Automation for Growing Companies | Nihilo Solutions",
      description:
        "Nihilo Solutions builds custom operational automations for growing companies. Recurring reports, readings, lookups, and other repeating work. Book a 30-minute discovery call.",
      path: "/",
    });

export default function Home() {
  return (
    <>
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="mx-auto grid w-[min(70rem,calc(100%-2.5rem))] items-center gap-10 lg:grid-cols-[1fr_22rem]">
          <div>
            <p className="mb-4.5 text-xs tracking-[0.16em] text-muted uppercase">
              Operational automation
            </p>
            <h1 className="max-w-2xl font-serif text-5xl leading-[0.95] font-normal tracking-[-0.03em] sm:text-7xl">
              Give your team <em className="text-accent not-italic sm:italic">their week back.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted">
              We take repeating operational work off your team and turn it into a system that runs
              without them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={BOOKING_URL} target="_blank" rel="noopener">
                  Book a discovery call
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/what-we-build">See what we build</Link>
              </Button>
            </div>
            <p className="mt-5 max-w-md text-sm text-muted">
              30 minutes. You talk with our team. You own the system when we are done.
            </p>
          </div>

          <aside className="rounded-lg border border-border bg-bg-elev p-6 shadow-[var(--shadow-card)]">
            <p className="text-xs tracking-[0.16em] text-muted uppercase">This Friday, by hand</p>
            <ol className="mt-4 space-y-3 border-l border-border pl-4 text-sm">
              <li>Export the jobs</li>
              <li>Paste into the sheet</li>
              <li>Write the summary</li>
              <li>Email the pack</li>
            </ol>
            <p className="mt-4 text-sm text-muted">One person. Same two hours. Same chance a row is missing.</p>
            <div className="mt-5 border-t border-border pt-5">
              <p className="text-xs tracking-[0.16em] text-accent uppercase">After</p>
              <p className="mt-2 font-serif text-2xl leading-tight">The report lands on its own.</p>
              <p className="mt-2 text-sm text-muted">Same rules. Same format. Nobody assembled it.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-bg-alt py-20">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <p className="mb-2.5 text-xs tracking-[0.16em] text-accent uppercase">If this is still a person</p>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight font-normal tracking-[-0.02em] sm:text-5xl">
            The work we take off your team.
          </h2>
          <p className="mt-3.5 max-w-xl text-lg text-muted">
            Industry does not matter as much as a process that repeats. If someone does it every
            week, it is a candidate.
          </p>
          <div className="mt-10 grid gap-4.5 md:grid-cols-3">
            <WorkCard
              num="01"
              title="Operational reports"
              body="Pull the data, apply the same rules, and send the pack on a schedule. Service reports, status packs, exception lists. No Friday spreadsheet session."
              href="/use-cases#reports"
            />
            <WorkCard
              num="02"
              title="Meter and usage capture"
              body="Collect readings, skip the typing, and push clean numbers into the system that already bills or tracks usage. Fewer errors. Faster close-out."
              href="/use-cases#meters"
            />
            <WorkCard
              num="03"
              title="Client and record lookup"
              body="Find the right customer, job, or account without hunting portals, inboxes, and sheets. One question. The right record."
              href="/use-cases#lookup"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <p className="mb-2.5 text-xs tracking-[0.16em] text-accent uppercase">How an engagement runs</p>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight font-normal tracking-[-0.02em] sm:text-5xl">
            You work with the people who will build it.
          </h2>
          <ol className="mt-10">
            <Step
              num="01"
              title="Discovery call"
              body="Thirty minutes on the process that is costing you time. What happens today, who does it, where the data lives, what done looks like."
            />
            <Step
              num="02"
              title="Map the process"
              body="We write the workflow down: inputs, exceptions, systems, and the output your team actually needs. Then a scoped build, not a platform overhaul."
            />
            <Step
              num="03"
              title="Build the automation"
              body="We construct it against your real process. You review it on your data. We adjust until it runs the way your operation runs."
            />
            <Step
              num="04"
              title="Handoff"
              body="When we are done, you own the system. We show your team how it works and what to do when the process changes."
            />
          </ol>
          <div className="mt-7">
            <Button asChild variant="ghost">
              <Link href="/how-we-work">Read the full process</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand
        title="If the same task keeps showing up on the calendar, we should talk."
        body="Book a discovery call. Bring one process. We will tell you whether it is worth automating."
      />
    </>
  );
}

function WorkCard({
  num,
  title,
  body,
  href,
}: {
  num: string;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <article className="rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]">
      <p className="text-[0.8125rem] font-semibold tracking-[0.12em] text-accent">{num}</p>
      <h3 className="mt-2.5 mb-2.5 font-serif text-xl font-medium">{title}</h3>
      <p className="text-base text-muted">{body}</p>
      <Link
        href={href}
        className="mt-4 inline-block border-b border-accent text-sm font-medium text-fg"
      >
        See this use case
      </Link>
    </article>
  );
}

function Step({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <li className="grid gap-2 border-t border-border py-7 last:border-b sm:grid-cols-[5.5rem_1fr] sm:gap-5">
      <p className="text-[0.8125rem] font-semibold tracking-[0.12em] text-accent">{num}</p>
      <div>
        <h3 className="font-serif text-xl font-medium">{title}</h3>
        <p className="mt-1.5 max-w-xl text-muted">{body}</p>
      </div>
    </li>
  );
}
