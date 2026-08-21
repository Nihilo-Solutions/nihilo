import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/site/ui/button";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
      title: "Custom Workflow Automation | Nihilo Solutions",
      description:
        "Custom automations for operational reporting, meter and usage capture, client lookup, and similar repeating workflows. Built against the tools you already use.",
      path: "/what-we-build",
    });

const ITEMS = [
  {
    num: "01",
    title: "Operational service reporting",
    body: "Weekly or monthly packs that today live in a spreadsheet, a shared drive, or someone's head. We connect the sources, apply the same rules every time, and deliver the report in the format your team already uses.",
    bullets: [
      "Service, ticket, or job summaries",
      "Exception and overdue lists",
      "Scheduled delivery to email or a shared folder",
    ],
  },
  {
    num: "02",
    title: "Meter and usage reading",
    body: "Any operation that still depends on a person reading a device, a portal, or a print-out and typing the number in. We capture the reading, validate it, and write it to the system that already bills or tracks usage.",
    bullets: [
      "Device or fleet meter collection",
      "Usage capture for billing or allocation",
      "Fewer estimated reads and fewer corrections later",
    ],
  },
  {
    num: "03",
    title: "Client and record lookup",
    body: "Staff should not have to search three tools to answer who this is. We build a lookup against the systems you already have, so the right customer, job, or account comes back in one step.",
    bullets: [
      "Customer, rider, or account lookup",
      "Job or ticket retrieval during a call",
      "Less re-keying between dispatch, billing, and support",
    ],
  },
  {
    num: "04",
    title: "Similar operational workflows",
    body: "If the pattern is the same (repeatable, rules-based, and currently done by a person) we will look at it. Intake, status updates, data movement between tools, scheduled checks.",
    bullets: [
      "Moving the same record from one system to another",
      "Flagging exceptions instead of reviewing every row",
      "Turning a documented process into a running workflow",
    ],
  },
];

export default function WhatWeBuild() {
  return (
    <>
      <PageHero
        kicker="What we build"
        title="Automations for the work your team already does."
        lede="We do not sell a product you have to change your process around. We match the process you run today, then take the manual steps out."
      />
      <section className="pb-16">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <h2 className="sr-only">Classes of system we build</h2>
          <div className="grid gap-4.5 md:grid-cols-2">
            {ITEMS.map((item) => (
              <article
                key={item.num}
                className="rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]"
              >
                <p className="text-[0.8125rem] font-semibold tracking-[0.12em] text-accent">
                  {item.num}
                </p>
                <h3 className="mt-2.5 mb-2.5 font-serif text-xl font-medium">{item.title}</h3>
                <p className="text-base text-muted">{item.body}</p>
                <ul className="mt-4.5 ml-4.5 list-disc space-y-2 text-muted">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-7 text-[0.8125rem] text-muted">
            These are types of systems, not a catalog of products. Every build is scoped to your
            process, your tools, and your definition of done.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="ghost">
              <Link href="/use-cases">Browse use cases</Link>
            </Button>
          </div>
        </div>
      </section>
      <CtaBand
        title="Bring the process that keeps coming back."
        body="A discovery call is thirty minutes. You leave knowing whether it is worth automating."
      />
    </>
  );
}
