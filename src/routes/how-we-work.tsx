import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/how-we-work")({
  component: HowWeWork,
  head: () =>
    pageHead({
      title: "How We Build Operational Automations | Nihilo Solutions",
      description:
        "A 30-minute discovery call, a written process map, a fixed-price scope, then a build against your live tools. You own the automation when we are done.",
      path: "/how-we-work",
    }),
});

const STEPS = [
  {
    num: "01",
    title: "Discovery call",
    body: "Book time. We want one concrete workflow: who does it, how often, which systems, what goes wrong, and what a good output looks like. If it is not a fit, we will say so on the call.",
  },
  {
    num: "02",
    title: "Process map and scope",
    body: "We document the current path and the exceptions. Then you get a written scope: what we will automate, what we will not, what we need from you, and a fixed price for that build.",
  },
  {
    num: "03",
    title: "Build against live process",
    body: "We build on your actual data and tools: spreadsheets, portals, meters, inboxes, the systems you already pay for. You review early. We do not disappear for a month and come back with a surprise.",
  },
  {
    num: "04",
    title: "Review, adjust, handoff",
    body: "We run it beside the current process until you trust it. Then we hand it over. You own it. We show the people who will live with it how to run it and how to change a rule when the business changes.",
  },
];

function HowWeWork() {
  return (
    <main>
      <PageHero
        kicker="How we work"
        title="Scoped. Built by our team. Yours when we are done."
        lede="No account managers between you and the work. We start with one process, write it down, and only build what that process needs."
      />
      <section className="pb-16">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <h2 className="sr-only">The four steps</h2>
          <ol>
            {STEPS.map((s) => (
              <li
                key={s.num}
                className="grid gap-2 border-t border-border py-7 last:border-b sm:grid-cols-[5.5rem_1fr] sm:gap-5"
              >
                <p className="text-[0.8125rem] font-semibold tracking-[0.12em] text-accent">
                  {s.num}
                </p>
                <div>
                  <h3 className="font-serif text-xl font-medium">{s.title}</h3>
                  <p className="mt-1.5 max-w-xl text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-y border-border bg-bg-alt py-20">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] sm:text-5xl">
            What we need from you
          </h2>
          <div className="mt-10 grid gap-4.5 md:grid-cols-3">
            <Need
              title="A real process owner"
              body="Someone who does the work today or sits next to it. Not a committee. One person who can walk us through last week's run."
            />
            <Need
              title="Access to the source"
              body="The sheet, export, portal, mailbox, or meter path the data already lives in. We work with what you have. We do not require a new platform first."
            />
            <Need
              title="A definition of done"
              body="The report that has to go out. The number that has to land in billing. The lookup that has to return during a call. Specific beats 'make us more efficient.'"
            />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] sm:text-5xl">
            Time, price, and ownership
          </h2>
          <div className="mt-10 grid gap-4.5 md:grid-cols-3">
            <Need
              title="The call is free"
              body="Thirty minutes. If it is not a fit, we say so. You are not buying a discovery workshop."
            />
            <Need
              title="Fixed price, in writing"
              body="You get a scope and a number before we build. You are not buying hours against an open retainer unless you ask for support after handoff."
            />
            <Need
              title="You own it"
              body="When we are done, the workflow is yours. We show your team how to run it. No black box subscription required to keep the lights on."
            />
          </div>
        </div>
      </section>
      <CtaBand
        title="Bring one process to the call."
        body="If we cannot see a clean path to automate it, we will tell you. If we can, you leave with a sense of scope, not a forty-page proposal."
      />
    </main>
  );
}

function Need({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]">
      <h3 className="mb-2.5 font-serif text-xl font-medium">{title}</h3>
      <p className="text-base text-muted">{body}</p>
    </article>
  );
}
