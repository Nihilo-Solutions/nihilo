import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { pageMeta } from "@/lib/seo";
import { SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
      title: "Privacy | Nihilo Solutions",
      description:
        "How Nihilo Solutions handles information you share when you email us or book a discovery call. We use it to respond and run the engagement. Nothing else.",
      path: "/privacy",
    });

export default function Privacy() {
  return (
    <>
      <PageHero
        kicker="Privacy"
        title="How we handle information."
        lede="This is a short policy for a small firm. If you email us or book a call, we use that information to respond and to run the engagement. Nothing else."
      />
      <section className="pb-20">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))] max-w-3xl">
          <h2 className="sr-only">The policy</h2>
          <article className="rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]">
            <h3 className="mb-2 font-serif text-xl font-medium">What we collect</h3>
            <p className="text-muted">
              Name, company, email, and whatever you choose to tell us about a process on a call or
              in a message. Booking details are handled by Microsoft Bookings.
            </p>
            <h3 className="mt-5 mb-2 font-serif text-xl font-medium">What we do not do</h3>
            <p className="text-muted">
              We do not sell contact information. We do not run a marketing list off this site.
              Project data you share during a build is used only to deliver that build.
            </p>
            <h3 className="mt-5 mb-2 font-serif text-xl font-medium">How to reach us</h3>
            <p className="text-muted">
              Questions:{" "}
              <a className="text-fg underline decoration-accent" href={`mailto:${SITE_EMAIL}`}>
                {SITE_EMAIL}
              </a>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
