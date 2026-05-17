import { Calendar, Video, ArrowRight } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section id="contact" className="relative overflow-hidden" style={{ padding: '5rem 0 7rem', background: 'var(--brand-void)', borderTop: '1px solid var(--line)' }}>
      {/* Azure halo */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(45,107,255,0.12) 0%, transparent 65%)', filter: 'blur(1px)' }} />
      <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block pointer-events-none" style={{ borderLeft: '1px solid var(--line)' }} />

      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">

          <div>
            <span className="eyebrow mb-5 block">05 // Let&apos;s Talk</span>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 'clamp(32px, 5vw, 64px)', color: 'var(--fg)', letterSpacing: '-0.03em', textTransform: 'uppercase', fontStyle: 'italic', marginBottom: '24px', lineHeight: 1.05 }}>
              Talk Directly With<br />
              <span style={{ color: 'var(--brand-azure-lit)' }}>the Engineers.</span>
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg-dim)', fontWeight: 300, lineHeight: 1.65, marginBottom: '40px', maxWidth: '460px' }}>
              No sales reps. No hand-offs. You book a call directly with the people who will build your system — and we tell you honestly whether AI is the right move for your situation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  icon: Video,
                  title: 'Microsoft Teams Session',
                  body: '30 minutes. We look at your current workflows and find the fastest path to ROI.',
                },
                {
                  icon: Calendar,
                  title: 'Book Anytime',
                  body: 'Real availability, no assistant — pick a time that works for your schedule.',
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4">
                  <div style={{ padding: '8px', background: 'var(--n-800)', border: '1px solid var(--line)', borderRadius: '6px', flexShrink: 0 }}>
                    <Icon size={18} style={{ color: 'var(--brand-azure-lit)' }} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--fg)', fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{title}</h4>
                    <p style={{ color: 'var(--fg-dim)', fontSize: '13px', margin: 0, lineHeight: 1.55 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 pointer-events-none" style={{ border: '1px solid var(--line)', borderRadius: '12px' }} />
            <div style={{ background: 'var(--n-800)', padding: '3rem', border: '1px solid var(--line-strong)', textAlign: 'center', borderRadius: '8px' }}>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '22px', color: 'var(--fg)', marginBottom: '6px', letterSpacing: '-0.01em' }}>
                Book a Discovery Call
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--fg-dim)', marginBottom: '28px' }}>
                Free · 30 min · No commitment
              </p>

              <a
                href="https://intake.nihilosolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full"
                style={{ padding: '18px 24px', background: 'white', color: 'black', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.22em', border: 'none', cursor: 'pointer', transition: 'background 0.2s', textDecoration: 'none', boxShadow: '0 0 40px rgba(255,255,255,0.08)' }}
                aria-label="Start Readiness Protocol - opens in new tab"
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#e4e4e7')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'white')}
              >
                <span>Start Readiness Protocol</span>
                <ArrowRight size={16} />
              </a>

              <p style={{ marginTop: '20px', fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--fg-faint)' }}>
                Secured by Microsoft Teams
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;
