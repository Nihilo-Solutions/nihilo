export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="pt-16 pb-9">
      <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
        <p className="mb-4 text-xs tracking-[0.16em] text-muted uppercase">{kicker}</p>
        <h1 className="max-w-2xl font-serif text-4xl leading-[1.02] font-normal tracking-[-0.03em] sm:text-6xl">
          {title}
        </h1>
        {lede ? <p className="mt-3.5 max-w-xl text-lg text-muted">{lede}</p> : null}
      </div>
    </section>
  );
}
