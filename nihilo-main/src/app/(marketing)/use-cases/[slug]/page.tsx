import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { USE_CASES, getUseCase } from "@/lib/use-cases";

/**
 * One page per use case. All six prerender at build time; there is no runtime
 * data source, so an unknown slug is a 404 rather than a fetch.
 */
export function generateStaticParams() {
  return USE_CASES.map((c) => ({ slug: c.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};
  return pageMeta({
    title: useCase.metaTitle,
    description: useCase.metaDescription,
    path: `/use-cases/${useCase.id}`,
  });
}

function Points({ title, items, tone }: { title: string; items: string[]; tone?: "accent" }) {
  return (
    <section className="border-t border-border py-10 first:border-t-0">
      <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))] grid gap-4 md:grid-cols-[16rem_1fr] md:gap-10">
        <h2
          className={
            tone === "accent"
              ? "font-serif text-2xl font-medium text-accent"
              : "font-serif text-2xl font-medium"
          }
        >
          {title}
        </h2>
        <ul className="max-w-2xl space-y-3">
          {items.map((item) => (
            <li key={item} className="border-l-2 border-border pl-4 text-muted">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  const others = USE_CASES.filter((c) => c.id !== useCase.id);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Use cases", path: "/use-cases" },
          { name: useCase.kicker, path: `/use-cases/${useCase.id}` },
        ])}
      />
      <PageHero kicker={useCase.kicker} title={useCase.title} lede={useCase.problem} />

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
                  href="/use-cases"
                  className="inline-flex min-h-11 items-center text-fg underline decoration-accent"
                >
                  Use cases
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="inline-flex min-h-11 items-center">
                {useCase.kicker}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <Points title="What happens today" items={useCase.detail.today} />
      <Points title="Why it costs more than the hours" items={useCase.detail.cost} />

      <section className="border-y border-border bg-bg-alt py-14">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))] grid gap-4 md:grid-cols-[16rem_1fr] md:gap-10">
          <h2 className="font-serif text-2xl font-medium text-accent">What we build</h2>
          <div className="max-w-2xl">
            <p className="text-lg text-fg">{useCase.build}</p>
            <ul className="mt-6 space-y-3">
              {useCase.detail.built.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-bg-elev p-4 text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Points title="What changes once it runs" items={useCase.detail.after} />
      <Points title="What we need from you" items={useCase.detail.needed} />

      <section className="border-t border-border py-10">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))] grid gap-4 md:grid-cols-[16rem_1fr] md:gap-10">
          <h2 className="font-serif text-2xl font-medium">When this is the wrong build</h2>
          <p className="max-w-2xl text-muted">{useCase.detail.notFor}</p>
        </div>
      </section>

      <section className="border-t border-border py-14">
        <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
          <h2 className="font-serif text-2xl font-medium">Other work we get asked about</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/use-cases/${c.id}`}
                  className="flex h-full flex-col rounded-lg border border-border bg-bg-elev p-5 hover:border-accent"
                >
                  <span className="text-[0.8125rem] font-semibold tracking-[0.12em] text-accent">
                    {c.kicker}
                  </span>
                  <span className="mt-2 text-fg">{c.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Bring us last week's run of it."
        body="Book a call. Thirty minutes on this one process, and a straight answer on whether it is worth automating."
      />
    </>
  );
}
