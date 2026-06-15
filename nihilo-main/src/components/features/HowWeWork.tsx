const phases: { num: string; title: string; body: string }[] = [
  {
    num: '01',
    title: 'Readiness Audit',
    body:
      'A structured diagnostic. We map your workflows, data sources, and infrastructure. We tell you what AI can actually move and what it cannot. Flat fee. No obligation to continue.',
  },
  {
    num: '02',
    title: 'Architecture',
    body:
      'We design the system inside your Azure tenant. Vector stores, agent orchestration, integration points. You own the architecture document regardless of what happens next.',
  },
  {
    num: '03',
    title: 'Build',
    body:
      'We build inside your environment. Every credential in Key Vault. Every component tested against your real workflows. Production-ready in 4 to 8 weeks.',
  },
  {
    num: '04',
    title: 'Handoff and Support',
    body:
      'Your team owns what we build. We document everything, train your staff, and stay available for 30 days post-launch. No retainer required to keep the lights on.',
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
          From nothing
          <br />
          <span className="italic" style={{ color: '#2D6BFF' }}>to production.</span>
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
          Every engagement follows the same four phases. No surprises. No scope creep. No hand-offs to junior staff.
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
          Principal-led throughout. You work with Sam or Jake at every phase.
        </p>
      </div>

      <style>{`
        .phase-card:hover { border-left-color: #2D6BFF !important; }
      `}</style>
    </section>
  );
};

export default HowWeWork;
