import type { Metadata } from "next";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = pageMeta({
      title: "About Nihilo Solutions | Custom Automation Team in Connecticut",
      description:
        "Nihilo Solutions is a Connecticut team that designs and ships custom operational automations. Meet Sam Oakes, Jake Ice, and Ish Pandhal.",
      path: "/about",
    });

export default function About() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
      <PageHero
        kicker="About"
        title="A small firm that builds the system, then gets out of the way."
        lede="Nihilo Solutions is a small team. We design and ship operational automations for companies that have outgrown doing everything by hand."
      />
      <section className="pb-16">
        <h2 className="sr-only">The team</h2>
        <div className="mx-auto grid w-[min(70rem,calc(100%-2.5rem))] gap-4.5 md:grid-cols-3">
          <Person
            initials="SO"
            name="Sam Oakes"
            role="Co-founder, Systems"
            bio="Builds custom operational automations. Experience shipping this class of work inside live managed-services operations, including service reporting, data capture and validation, and client lookup systems."
          />
          <Person
            initials="JI"
            name="Jake Ice"
            role="Co-founder, Delivery"
            bio="Owns delivery and the commercial side of each engagement: scope, timeline, and tying the build to a business outcome from the first conversation through go-live."
          />
          <Person
            initials="IP"
            name="Ish Pandhal"
            role="Marketing and Client Relations"
            bio="Leads marketing and client relations. First point of contact for new conversations, and the relationship once a project is underway."
          />
        </div>
      </section>
      <section className="border-y border-border bg-bg-alt py-20">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] sm:text-5xl">
            How we think about the work
          </h2>
          <div className="mt-10 grid gap-4.5 md:grid-cols-3">
            <Think
              title="Start from the process"
              body="If we cannot watch or reconstruct last week's run, we do not build. Automation without a real process is just another tool."
            />
            <Think
              title="Nobody has to log in"
              body="The point is that the work stops landing on someone's desk. Your team should notice the output arriving, not a new system to log into."
            />
            <Think
              title="Stay on the work"
              body="The people who scoped it stay on it after it goes live. That is the whole model."
            />
          </div>
          <p className="mt-6 text-[0.8125rem] text-muted">
            Based in Connecticut. We work across the Northeast and take remote engagements
            nationwide.
          </p>
        </div>
      </section>
      <CtaBand
        title="Book a call with our team."
        body="A discovery call is thirty minutes. Bring one process."
      />
    </>
  );
}

function Person({
  initials,
  name,
  role,
  bio,
}: {
  initials: string;
  name: string;
  role: string;
  bio: string;
}) {
  return (
    <article className="min-h-56 rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]">
      <div className="grid size-14 place-items-center rounded-full bg-accent-soft font-semibold tracking-wide text-accent-dark">
        {initials}
      </div>
      <h3 className="mt-4 font-serif text-xl font-medium">{name}</h3>
      <p className="mt-1 mb-3 text-[0.8125rem] text-muted">{role}</p>
      <p className="text-muted">{bio}</p>
    </article>
  );
}

function Think({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]">
      <h3 className="mb-2.5 font-serif text-xl font-medium">{title}</h3>
      <p className="text-base text-muted">{body}</p>
    </article>
  );
}
