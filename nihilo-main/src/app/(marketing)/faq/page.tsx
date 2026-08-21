import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/site/ui/button";
import { faqJsonLd, pageMeta } from "@/lib/seo";
import { BookCallLink } from "@/components/site/book-call-link";

export const FAQ_ITEMS = [
  {
    q: "Who is this for?",
    a: "Operations, service, dispatch, billing, and office teams that still do the same work by hand every week. If a person can walk us through last week's run, we can usually tell you on the first call whether it is worth automating.",
  },
  {
    q: "How is this different from Zapier or Make?",
    a: "Those tools are excellent when two products already talk to each other and the process is simple. We build when the work is messier: a spreadsheet plus a portal plus a meter plus a report that has to look a certain way. Custom operational automation, not a catalog of app-to-app zaps.",
  },
  {
    q: "Do we need to buy a new platform first?",
    a: "No. We build against the tools and files you already use. If a new piece of infrastructure is required, that will be in the scope before we start, not a surprise in week three.",
  },
  {
    q: "How do you price?",
    a: "Fixed scope and a fixed price for the build, written down before we start. Running it after that is quoted the same way, per project. No hourly billing against an open retainer.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the process, the number of exceptions, and how quickly we can get access to the source. Many single-workflow builds land in a few weeks once scope is agreed. We will give you a range after the discovery call, not a generic promise on this page.",
  },
  {
    q: "Who do we work with?",
    a: "Our team. Discovery calls go to the people who run the engagement.",
  },
  {
    q: "Who runs it once it is live?",
    a: "We do. Your team gets the output, not another system to operate. If the process changes, we change the rules.",
  },
  {
    q: "What if our process changes?",
    a: "Then the automation changes with it. Tell us what moved and we adjust the rules. Keeping it current is part of running it, and priced per project like the build.",
  },
  {
    q: "Is everything AI?",
    a: "Only where it earns its place: reading a meter image, matching a messy client name, drafting a summary. A lot of the value is still reliable plumbing: pull, validate, write, notify. We will not bolt a model onto a process that only needs a scheduled export.",
  },
  {
    q: "Can you start from more than one process?",
    a: "We can sequence work. We still want the first build to be one workflow you can judge. That is how you decide whether to do the next one.",
  },
  {
    q: "Where are you based?",
    a: "Connecticut. We work across the Northeast and take remote engagements nationwide.",
  },
];

export const metadata: Metadata = pageMeta({
      title: "Operational Automation FAQ | Nihilo Solutions",
      description:
        "Answers on pricing, timeline, ownership, Zapier vs custom automation, and whether you need a new platform before automating operational work.",
      path: "/faq",
    });

export default function Faq() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />
      <PageHero kicker="FAQ" title="Straight answers before you book." />
      <section className="pb-20">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <div>
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={item.q}
                className="border-t border-border py-4.5 last:border-b"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="text-xl font-normal text-accent" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-2.5 max-w-2xl text-muted">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild>
              <BookCallLink placement="faq_end">Book a discovery call</BookCallLink>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
