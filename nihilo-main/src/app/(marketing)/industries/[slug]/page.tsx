import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { INDUSTRIES, getIndustry } from "@/lib/industries";
import { getUseCase } from "@/lib/use-cases";

/**
 * Three sectors, on the URLs the previous site had indexed. Everything else
 * under /industries still 301s to /who-we-work-with from next.config.ts.
 */
export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMeta({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const cases = industry.useCases.map(getUseCase).filter((c) => c !== undefined);
  const others = INDUSTRIES.filter((i) => i.slug !== industry.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Who we work with", path: "/who-we-work-with" },
          { name: industry.kicker, path: `/industries/${industry.slug}` },
        ])}
      />
      <PageHero kicker={industry.kicker} title={industry.title} lede={industry.lede} />

      <section className="pb-12">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 text-sm text-muted">
              <li>
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center text-fg underline decoration-accent"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/who-we-work-with"
                  className="inline-flex min-h-11 items-center text-fg underline decoration-accent"
                >
                  Who we work with
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="inline-flex min-h-11 items-center">
                {industry.kicker}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="border-t border-border py-12">
        <div className="mx-auto grid w-[min(70rem,calc(100%-2.5rem))] gap-4 md:grid-cols-[16rem_1fr] md:gap-10">
          <h2 className="font-serif text-2xl font-medium">Who this is</h2>
          <p className="max-w-2xl text-muted">{industry.who}</p>
        </div>
      </section>

      <section className="border-y border-border bg-bg-alt py-16">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] sm:text-4xl">
            The work that keeps coming back
          </h2>
          <div className="mt-10 grid gap-4.5 md:grid-cols-2">
            {industry.work.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-border bg-bg-elev p-7 shadow-[var(--shadow-card)]"
              >
                <h3 className="mb-2.5 font-serif text-xl font-medium">{item.title}</h3>
                <p className="text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] sm:text-4xl">
            What we would build first
          </h2>
          <p className="mt-3.5 max-w-2xl text-lg text-muted">{industry.firstBuild}</p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {cases.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/use-cases/${c.id}`}
                  className="flex h-full flex-col rounded-lg border border-border bg-bg-elev p-5 hover:border-accent"
                >
                  <span className="text-[0.8125rem] font-semibold tracking-[0.12em] text-accent">
                    {c.kicker}
                  </span>
                  <span className="mt-2 text-fg">{c.title}</span>
                  <span className="mt-2 text-sm text-muted">{c.build}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border py-12">
        <div className="mx-auto grid w-[min(70rem,calc(100%-2.5rem))] gap-4 md:grid-cols-[16rem_1fr] md:gap-10">
          <h2 className="font-serif text-2xl font-medium">When we are the wrong call</h2>
          <p className="max-w-2xl text-muted">{industry.notFor}</p>
        </div>
      </section>

      <section className="border-t border-border py-12">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <h2 className="font-serif text-2xl font-medium">Not your sector?</h2>
          <p className="mt-2 max-w-2xl text-muted">
            The industry matters less than the process. If your team repeats the same steps every
            week, the work looks the same from where we sit.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((i) => (
              <li key={i.slug}>
                <Link
                  href={`/industries/${i.slug}`}
                  className="inline-flex min-h-11 items-center rounded-md border border-border bg-bg-elev px-4 text-fg"
                >
                  {i.kicker}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/who-we-work-with"
                className="inline-flex min-h-11 items-center rounded-md border border-border bg-bg-elev px-4 text-fg"
              >
                Everyone else
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand
        title="Bring the process, not the industry."
        body="Book a call. Thirty minutes on one workflow, and a straight answer on whether it is worth automating."
      />
    </>
  );
}
