import type { Metadata } from "next";
import { BookingEmbed } from "@/components/site/booking-embed";
import { PageHero } from "@/components/site/page-hero";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { SITE_EMAIL } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = pageMeta({
  title: "Book a Discovery Call | Nihilo Solutions",
  description:
    "Book a 30-minute discovery call with our team. Bring one repeating operational process. We will tell you if it is worth automating. Connecticut, remote nationwide.",
  path: "/contact",
});

/** Step 01 of how-we-work, said plainly so booking feels like a known quantity. */
const FIRST_CALL = [
  {
    title: "The process itself",
    body: "One workflow. Who does it, how often, and what triggers it.",
  },
  {
    title: "Where the data lives",
    body: "The sheet, portal, inbox, meter, or system it comes out of today.",
  },
  {
    title: "What goes wrong",
    body: "The exceptions, the rework, and the week it fell over.",
  },
  {
    title: "Whether it is worth it",
    body: "A straight answer on fit, and a rough sense of what a build covers.",
  },
];

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <PageHero
        kicker="Contact"
        title="Book a call with our team."
        lede="Two ways in: book a 30-minute discovery call, or send us the process in writing. We review every inquiry ourselves and reply within one business day."
      />

      <section className="pb-12" id="book">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <div className="grid gap-8 rounded-[1.25rem] bg-dark p-6 text-on-dark sm:p-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] text-on-dark sm:text-4xl">
                Book a discovery call
              </h2>
              <p className="mt-2.5 text-on-dark-muted">
                Bring one process: the report, the cleanup, or the lookup that keeps landing on the
                same desk. We will tell you whether it is worth automating and what a first build
                would look like.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-on-dark-muted">
                <li>30 minutes, video</li>
                <li>With our team, not a sales queue</li>
                <li>You leave knowing if we should scope it</li>
              </ul>
              <p className="mt-6 text-[0.9375rem]">
                Prefer email?{" "}
                <a
                  className="text-on-dark underline decoration-accent"
                  href={`mailto:${SITE_EMAIL}`}
                >
                  {SITE_EMAIL}
                </a>
              </p>
            </div>
            <div className="rounded-lg border border-dark-line bg-dark-2 p-6">
              <h3 className="mb-2 text-lg font-medium text-on-dark">Pick a time</h3>
              <p className="mb-5 text-sm text-on-dark-muted">
                Live availability on the discovery-call calendar.
              </p>
              <BookingEmbed />
              <p className="mt-4 text-[0.8125rem] text-on-dark-muted">
                Connecticut &middot; remote nationwide
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <h2 className="font-serif text-2xl font-medium">What the first 30 minutes covers</h2>
          <ol className="mt-6 grid gap-4.5 md:grid-cols-4">
            {FIRST_CALL.map((item, i) => (
              <li
                key={item.title}
                className="rounded-lg border border-border bg-bg-elev p-6 shadow-[var(--shadow-card)]"
              >
                <p className="text-[0.8125rem] font-semibold tracking-[0.12em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-lg font-medium">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 max-w-2xl text-sm text-muted">
            No deck, no discovery workshop, and nothing to prepare. If we cannot see a clean path
            to automate it, we will say so on the call.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <div className="grid gap-8 rounded-[1.25rem] border border-border bg-bg-elev p-6 shadow-[var(--shadow-card)] sm:p-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[0.8125rem] font-semibold tracking-[0.12em] text-accent uppercase">
                Rather not book yet
              </p>
              <h2 className="mt-2.5 font-serif text-3xl font-normal tracking-[-0.02em] sm:text-4xl">
                Send one process, get a written answer.
              </h2>
              <p className="mt-2.5 text-muted">
                Describe the work that keeps landing on the same desk. We will read it and reply
                with whether it is worth automating, what a first build would cover, and what we
                would need from you. In writing, within one business day.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted">
                <li>No call required to get an answer</li>
                <li>A real reply from the people who would build it</li>
                <li>If it is not a fit, we will say that instead</li>
              </ul>
              <p className="mt-6 text-[0.9375rem] text-muted">
                Or write to us directly at{" "}
                <a className="text-fg underline decoration-accent" href={`mailto:${SITE_EMAIL}`}>
                  {SITE_EMAIL}
                </a>
                .
              </p>
            </div>
            <div className="rounded-lg border border-border bg-bg-alt p-6">
              <h3 className="mb-2 text-lg font-medium">Describe the process</h3>
              <p className="mb-1 text-sm text-muted">
                Four fields. The last one is the one that matters.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
