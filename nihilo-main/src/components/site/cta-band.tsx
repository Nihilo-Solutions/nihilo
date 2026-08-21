import { Button } from "@/components/site/ui/button";
import { BOOKING_URL } from "@/lib/site";

export function CtaBand({ title, body }: { title: string; body: string }) {
  return (
    <section className="bg-dark py-16 text-on-dark">
      <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
        <h2 className="max-w-2xl font-serif text-4xl leading-tight font-normal tracking-[-0.02em] text-on-dark sm:text-5xl">
          {title}
        </h2>
        <p className="mt-3.5 mb-7 max-w-md text-on-dark-muted">{body}</p>
        <Button asChild size="lg" variant="dark">
          <a href={BOOKING_URL} target="_blank" rel="noopener">
            Book a discovery call
          </a>
        </Button>
      </div>
    </section>
  );
}
