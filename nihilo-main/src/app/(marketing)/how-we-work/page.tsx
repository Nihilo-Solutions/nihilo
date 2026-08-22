import type { Metadata } from "next";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";
import Link from "next/link";

export const metadata: Metadata = pageMeta({
      title: "How We Build Operational Automations | Nihilo Solutions",
      description:
        "A 30-minute discovery call, a written process map, a fixed-price scope, then a build against your live tools. Then we keep it running so your team does not have to.",
      path: "/how-we-work",
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
    title: "Review, adjust, go live",
    body: "We run it beside the current process until you trust it. Then it goes live and we keep it running. The people who depend on the output get told what it does, and what to do when the process changes.",
  },
];

export default function HowWeWork() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "How we work", path: "/how-we-work" }])} />
      <PageHero
        kicker="How we work"
        title="Scoped, built, and kept running by our team."
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
              body="You get a scope and a number before we build. Running it after that is quoted the same way, per project. No hourly billing against an open retainer."
              link={{ href: "/faq", label: "More on how we price" }}
            />
            <Need
              title="Nothing new for your team to run"
              body="Your team does not get another tool to learn or maintain. They get the report, the number, or the record, where they already look for it."
            />
          </div>
        </div>
      </section>
      <CtaBand
        title="Bring one process to the call."
        body="If we cannot see a clean path to automate it, we will tell you. If we can, you leave with a sense of scope, not a forty-page proposal."
      />
    </>
  );
}

function Need({
  title,
  body,
  link,
}: {
  title: string;
  body: string;
  link?: { href: string; label: string };
}) {
  return (
    <article className="rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]">
      <h3 className="mb-2.5 font-serif text-xl font-medium">{title}</h3>
      <p className="text-base text-muted">{body}</p>
      {link ? (
        <Link
          href={link.href}
          className="mt-4 inline-block border-b border-accent text-sm font-medium text-fg"
        >
          {link.label}
        </Link>
      ) : null}
    </article>
  );
}
