const phases: { num: string; title: string; body: string }[] = [
  {
    num: '01',
    title: 'Growth Assessment',
    body: 'We audit your current site, SEO position, and workflow bottlenecks. You get a concrete scorecard with the three highest-leverage things to fix. No obligation to continue.',
  },
  {
    num: '02',
    title: 'Scoped proposal',
    body: 'We scope the engagement based on what the audit found. Fixed price, fixed scope. No surprises. You know exactly what we are building and what it costs before we start.',
  },
  {
    num: '03',
    title: 'Build and launch',
    body: 'We build. You review. We launch. Most projects are live in 2 to 4 weeks. You keep full ownership of everything we build: the code, the content, the accounts.',
  },
  {
    num: '04',
    title: 'Measure and improve',
    body: 'We set up tracking before launch so you can see what is working. Monthly reporting, optional ongoing retainer. You choose how much support you want after launch.',
  },
];

const HowWeWork: React.FC = () => {
  return (
    <section
      className="bg-white"
      style={{ paddingTop: '120px', paddingBottom: '120px', fontFamily: 'var(--font-inter)' }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <p
          className="uppercase"
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '11px',
            color: '#9AA0AE',
            letterSpacing: '0.3em',
            marginBottom: '24px',
          }}
        >
          HOW AN ENGAGEMENT RUNS
        </p>

        <h2
          className="leading-tight"
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '44px',
            fontWeight: 600,
            color: '#0B0D14',
          }}
        >
          From audit
          <br />
          <span className="italic" style={{ color: '#2D6BFF' }}>to results.</span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '560px',
            marginTop: '16px',
            lineHeight: 1.6,
          }}
        >
          Every engagement starts with a free assessment. We find the gaps, scope the fix, build it, and measure what changes. No surprises, no hand-offs to junior staff.
        </p>

        {/* Four phases */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mt-16">
          {phases.map((phase) => (
            <div
              key={phase.num}
              className="phase-card"
              style={{
                borderLeft: '1px solid #E4E6EB',
                paddingLeft: '24px',
                transition: 'border-color 200ms ease',
              }}
            >
              <p
                className="uppercase"
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '10px',
                  color: '#9AA0AE',
                  letterSpacing: '0.2em',
                  marginBottom: '12px',
                }}
              >
                PHASE {phase.num}
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#0B0D14',
                  marginBottom: '12px',
                }}
              >
                {phase.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  color: '#6B7280',
                  lineHeight: 1.7,
                }}
              >
                {phase.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="text-center italic"
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '13px',
            color: '#9AA0AE',
            marginTop: '48px',
          }}
        >
          Principal-led throughout. You work with Sam or Jake at every phase, not a project manager.
        </p>
      </div>

      <style>{`
        .phase-card:hover { border-left-color: #2D6BFF !important; }
      `}</style>
    </section>
  );
};

export default HowWeWork;
