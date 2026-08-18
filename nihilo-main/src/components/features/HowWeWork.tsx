const phases = [
  {
    num: '01',
    title: 'Growth Assessment',
    body: 'We audit your current site, SEO position, and workflow bottlenecks. You get a concrete scorecard with the three highest-leverage things to fix. No obligation to continue.',
  },
  {
    num: '02',
    title: 'Scoped Proposal',
    body: 'We scope the engagement based on what the audit found. Fixed price, fixed scope. No surprises. You know exactly what we are building and what it costs before we start.',
  },
  {
    num: '03',
    title: 'Build and Launch',
    body: 'We build. You review. We launch. Most projects are live in 2 to 4 weeks. You keep full ownership of everything we build: the code, the content, the accounts.',
  },
  {
    num: '04',
    title: 'Measure and Improve',
    body: 'We set up tracking before launch so you can see what is working. Monthly reporting, optional ongoing retainer. You choose how much support you want after launch.',
  },
];

const HowWeWork: React.FC = () => {
  return (
    <section
      className="border-t"
      style={{ borderColor: 'rgba(0,0,0,0.08)', background: '#F7F6F4' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-24 md:py-36">

        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <p className="label mb-4">How an engagement runs</p>
          <h2
            className="text-[#0F0F0F] tracking-tight leading-tight"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 600,
            }}
          >
            From audit to results.
          </h2>
          <p className="text-[#52525B] text-[15px] leading-relaxed mt-4 max-w-lg">
            Every engagement starts with a free assessment. We find the gaps, scope the fix, build it, and measure what changes. No surprises, no hand-offs to junior staff.
          </p>
        </div>

        {/* Four phases */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {phases.map((phase) => (
            <div
              key={phase.num}
              className="phase-item"
              style={{ borderLeft: '2px solid rgba(0,0,0,0.1)', paddingLeft: '20px' }}
            >
              <p className="label mb-3">{phase.num}</p>
              <h3
                className="text-[#0F0F0F] mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '17px', fontWeight: 600 }}
              >
                {phase.title}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: '#52525B' }}>
                {phase.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="mt-12 text-[11px] tracking-[0.1em] uppercase"
          style={{ fontFamily: 'var(--font-mono)', color: '#A1A1AA' }}
        >
          Principal-led throughout — you work with Sam or Jake at every phase, not a project manager.
        </p>
      </div>

      <style>{`.phase-item { transition: border-left-color 200ms; } .phase-item:hover { border-left-color: #E8610A !important; }`}</style>
    </section>
  );
};

export default HowWeWork;
