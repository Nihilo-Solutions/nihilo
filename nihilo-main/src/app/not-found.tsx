import Link from "next/link";
import { Button } from "@/components/site/ui/button";

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
        <p className="mb-4 text-xs tracking-[0.16em] text-muted uppercase">404</p>
        <h1 className="max-w-2xl font-serif text-4xl leading-[1.02] font-normal tracking-[-0.03em] sm:text-6xl">
          That page is not here.
        </h1>
        <p className="mt-3.5 max-w-xl text-lg text-muted">
          It may have moved. The work we do is on What we build, and the examples are on Use cases.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/">Go to the homepage</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/what-we-build">See what we build</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
