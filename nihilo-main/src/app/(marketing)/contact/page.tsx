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

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <PageHero
        kicker="Contact"
        title="Book a call with our team."
        lede="We review every inquiry ourselves and reply within one business day. The fastest path is a 30-minute discovery call."
      />

      <section className="pb-12" id="book">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <div className="grid gap-8 rounded-[1.25rem] bg-dark p-6 text-on-dark sm:p-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] text-on-dark sm:text-4xl">
                Book a discovery call
              </h2>
              <p className="mt-2.5 text-on-dark-muted">
                Bring one process: the report, the reading, or the lookup that keeps landing on the
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

      <section className="pb-20">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <div className="max-w-2xl rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]">
            <p className="text-[0.8125rem] font-semibold tracking-[0.12em] text-accent uppercase">
              Or write it down first
            </p>
            <h2 className="mt-2.5 font-serif text-2xl font-medium">Send us the process.</h2>
            <p className="mt-2 text-muted">
              If none of the times work, or you would rather describe the process before talking,
              send it over. We will come back with a time within one business day.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
