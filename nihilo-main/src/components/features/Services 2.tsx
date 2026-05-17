import Link from 'next/link';
import { Database, Cpu, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ServiceIcon = ({ icon: Icon, color = '#60a5fa' }: { icon: LucideIcon; color?: string }) => (
  <div className="relative mb-6 group">
    <div className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: 'rgba(45,107,255,0.2)', filter: 'blur(14px)' }} />
    <div className="relative flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300"
      style={{ background: 'var(--n-800)', border: '1px solid var(--line)' }}>
      <Icon size={24} strokeWidth={1.5} style={{ color }} />
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-28 relative" style={{ background: 'var(--brand-ink)', borderTop: '1px solid var(--line)' }}>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12">

        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20 gap-6">
          <div className="max-w-md">
            <span className="eyebrow mb-3 block">01 // What We Do</span>
            <h2 style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 600,
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              letterSpacing: '-0.02em',
              color: 'var(--fg)',
              fontStyle: 'italic',
              textTransform: 'uppercase',
              margin: 0,
            }}>
              We Automate the Work That Slows You Down
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--fg-dim)', lineHeight: 1.6, maxWidth: '360px' }}>
            Three core services. All built to run inside your existing cloud — Azure or AWS. No data leaves your systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          {/* Card 1 */}
          <article className="group p-6 md:p-9 rounded-xl transition-all duration-500"
            style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid var(--line)', borderRadius: 'var(--r-card)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.015)')}>
            <ServiceIcon icon={Database} color="var(--brand-azure-lit)" />
            <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '18px', color: 'var(--fg)', marginBottom: '14px', letterSpacing: '-0.01em', textTransform: 'uppercase', fontStyle: 'italic' }}>
              AI-Powered Knowledge Search
            </h4>
            <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: 'var(--fg-dim)', marginBottom: '16px', fontWeight: 300 }}>
              Give your team an AI that actually knows your business. It searches through your documents, emails, and data in seconds — and the answers stay private inside your own systems, not on someone else's server.
            </p>
            <h5 style={{ fontSize: '12px', color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>What you get</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {[
                'Instant answers from your own documents and data',
                'Sensitive info stays inside your network — always',
                'Works with Azure, AWS, and your existing tools',
              ].map(item => (
                <li key={item} style={{ fontSize: '12.5px', color: 'var(--fg-faint)', lineHeight: 1.55, paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '1px', background: 'var(--brand-azure)', display: 'block' }} />
                  {item}
                </li>
              ))}
            </ul>
            <h5 style={{ fontSize: '12px', color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Results you can expect</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {[
                'Teams find information 20–40% faster',
                'Responses in under 200ms — no waiting',
                'Over 95% reduction in data leaving your organization',
              ].map(item => (
                <li key={item} style={{ fontSize: '12.5px', color: 'var(--fg-faint)', lineHeight: 1.55, paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '1px', background: 'var(--brand-azure)', display: 'block' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--fg-dim)' }}>
              <Link style={{ color: 'var(--brand-azure-lit)', textDecoration: 'underline' }} href="/security">How we keep it secure →</Link>
            </p>
          </article>

          {/* Card 2 */}
          <article className="group p-6 md:p-9 rounded-xl transition-all duration-500"
            style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid var(--line)', borderRadius: 'var(--r-card)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.015)')}>
            <ServiceIcon icon={Cpu} color="#4ade80" />
            <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '18px', color: 'var(--fg)', marginBottom: '14px', letterSpacing: '-0.01em', textTransform: 'uppercase', fontStyle: 'italic' }}>
              Automated Business Workflows
            </h4>
            <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: 'var(--fg-dim)', marginBottom: '16px', fontWeight: 300 }}>
              Stop paying people to do repetitive tasks that a machine can handle. We automate the handoffs, approvals, and data entry that eat up your team's day — and build in the right checks so nothing falls through the cracks.
            </p>
            <h5 style={{ fontSize: '12px', color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>What you get</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {[
                'Repetitive tasks handled automatically, 24/7',
                'Human review built in for anything that needs it',
                'Full audit trail — you can see every action the system took',
              ].map(item => (
                <li key={item} style={{ fontSize: '12.5px', color: 'var(--fg-faint)', lineHeight: 1.55, paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '1px', background: 'var(--brand-azure)', display: 'block' }} />
                  {item}
                </li>
              ))}
            </ul>
            <h5 style={{ fontSize: '12px', color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Results you can expect</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {[
                '60–85% fewer manual steps in back-office work',
                'Issues resolved 30–70% faster on average',
                'Everything logged and replayable for audits',
              ].map(item => (
                <li key={item} style={{ fontSize: '12.5px', color: 'var(--fg-faint)', lineHeight: 1.55, paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '1px', background: 'var(--brand-azure)', display: 'block' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--fg-dim)' }}>
              <Link style={{ color: 'var(--brand-azure-lit)', textDecoration: 'underline' }} href="/assessment">See if your workflow is a fit →</Link>
            </p>
          </article>

          {/* Card 3 */}
          <article className="group p-6 md:p-9 rounded-xl transition-all duration-500"
            style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid var(--line)', borderRadius: 'var(--r-card)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.015)')}>
            <ServiceIcon icon={Layers} color="#c084fc" />
            <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '18px', color: 'var(--fg)', marginBottom: '14px', letterSpacing: '-0.01em', textTransform: 'uppercase', fontStyle: 'italic' }}>
              Cloud AI Infrastructure
            </h4>
            <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: 'var(--fg-dim)', marginBottom: '16px', fontWeight: 300 }}>
              If your company is ready to run AI at scale, we build the foundation — the secure, cost-efficient infrastructure that keeps your AI systems fast, reliable, and under your control. Think of it as your AI backbone.
            </p>
            <h5 style={{ fontSize: '12px', color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>What you get</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {[
                'Built on Azure or AWS — whichever you already use',
                'Scales automatically with your business demand',
                'Security and compliance built in from day one',
              ].map(item => (
                <li key={item} style={{ fontSize: '12.5px', color: 'var(--fg-faint)', lineHeight: 1.55, paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '1px', background: 'var(--brand-azure)', display: 'block' }} />
                  {item}
                </li>
              ))}
            </ul>
            <h5 style={{ fontSize: '12px', color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Results you can expect</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {[
                '25–50% reduction in cloud computing costs',
                'Stays online even during high traffic or outages',
                'Meets SOC 2 and ISO 27001 compliance standards',
              ].map(item => (
                <li key={item} style={{ fontSize: '12.5px', color: 'var(--fg-faint)', lineHeight: 1.55, paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '1px', background: 'var(--brand-azure)', display: 'block' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--fg-dim)' }}>
              <Link style={{ color: 'var(--brand-azure-lit)', textDecoration: 'underline' }} href="/security">Read our security whitepaper →</Link>
            </p>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Services;
