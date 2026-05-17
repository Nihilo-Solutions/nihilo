import Link from 'next/link';
import { Shield, Lock } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <section id="security" className="py-24" style={{ background: 'var(--brand-ink)', borderTop: '1px solid var(--line)' }}>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          <div>
            <span className="eyebrow mb-4 block">03 // Security</span>
            <div className="flex items-center space-x-4 mb-5">
              <Shield style={{ color: 'var(--brand-azure)' }} />
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: 'var(--fg)', textTransform: 'uppercase', fontStyle: 'italic', letterSpacing: '-0.02em', margin: 0 }}>
                Your Data Never Leaves Your Systems
              </h2>
            </div>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--fg-dim)', marginBottom: '24px', lineHeight: 1.75 }}>
              We deploy inside your own cloud account. Your files, your data, your control — at all times. Nothing passes through our servers.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                {
                  title: 'Deployed in Your Account',
                  body: 'Everything runs inside your Azure or AWS environment. We set it up, you own it.',
                },
                {
                  title: 'Zero External Data Transfer',
                  body: 'Your sensitive information never moves to a shared cloud or third-party service.',
                },
                {
                  title: 'Enterprise Encryption',
                  body: 'Data is encrypted in storage and in transit. You hold your own encryption keys.',
                },
                {
                  title: 'Full Audit Logs',
                  body: 'Every action is logged and feeds into your existing security monitoring tools.',
                },
              ].map(({ title, body }) => (
                <li key={title} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--fg-faint)', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--fg-mute)', display: 'block', marginBottom: '4px' }}>{title}</strong>
                  {body}
                </li>
              ))}
            </ul>

            <Link
              href="/security"
              className="inline-flex items-center gap-2 group"
              style={{ padding: '14px 24px', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'white', background: 'var(--n-800)', border: '1px solid var(--brand-azure)', borderRadius: 'var(--r-btn)', transition: 'all 0.24s', textDecoration: 'none', boxShadow: '2px 2px 0 rgba(0,0,0,0.8)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'var(--brand-azure)';
                el.style.color = '#000';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'var(--n-800)';
                el.style.color = 'white';
              }}
            >
              Read the Security Whitepaper <Lock size={12} />
            </Link>
          </div>

          {/* Checklist */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', padding: '2rem', borderRadius: '4px' }}>
            <h3 style={{ color: 'var(--fg)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '11px', fontStyle: 'italic', borderBottom: '1px solid var(--line)', paddingBottom: '14px', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>
              Security Checklist
            </h3>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--fg-faint)' }}>
              {[
                'All workloads run in your cloud account — fully isolated',
                'You control the encryption keys (BYOK)',
                'Zero-trust access controls on every service',
                'Security logs sent to your existing SIEM system',
                'Regular penetration testing and code scanning in CI',
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: 'var(--brand-azure)', flexShrink: 0 }}>0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Security;
