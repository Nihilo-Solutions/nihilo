import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const cases = [
  {
    client: 'Lettini Brothers Landscaping',
    subtitle: 'Automated Lead Pipeline · Azure',
    description: 'A leading NJ landscaping company was losing leads to slow response times and manual data entry. We built an Azure-native system that automatically captures, qualifies, and routes every inbound lead — the moment it comes in.',
    results: [
      'Zero manual data entry for web leads',
      'Lead response time cut to under 1 minute',
      'Hosting costs reduced with serverless architecture',
      'Automated follow-up sequences increased engagement',
    ],
    stats: [
      { value: '100%', label: 'Automation Rate' },
      { value: '< 1 min', label: 'Lead Response' },
      { value: 'Zero', label: 'Manual Entry' },
    ],
  },
  {
    client: 'Enterprise Security Client',
    subtitle: 'AI Security Audit & Hardening · Azure',
    description: 'A mid-size enterprise needed to validate that their AI deployments met compliance requirements. Sam Oakes led a full security audit — identifying gaps, implementing zero-trust controls, and producing a documented compliance report.',
    results: [
      'Full security audit across Azure AI services',
      'Zero-trust access controls implemented',
      'Compliance gaps documented and closed',
      'Ongoing monitoring pipeline established',
    ],
    stats: [
      { value: '100%', label: 'Gaps Resolved' },
      { value: 'SOC 2', label: 'Alignment' },
      { value: 'Azure', label: 'Native' },
    ],
  },
];

const CaseStudy: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 relative overflow-hidden" style={{ background: 'var(--brand-void)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      {/* Halo */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top, rgba(45,107,255,0.07) 0%, transparent 65%)' }} />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="mb-14 text-center">
          <span className="eyebrow mb-4 block">02 // Client Results</span>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.02em', color: 'var(--fg)', fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>
            Real Projects. Real Results.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map(({ client, subtitle, description, results, stats }) => (
            <div key={client} className="group relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: 'var(--r-card)', padding: '2rem 2.5rem' }}>
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(45,107,255,0.05) 0%, transparent 60%)' }} />

              <div className="relative z-10">
                <div className="mb-5">
                  <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '22px', color: 'var(--fg)', letterSpacing: '-0.01em', margin: '0 0 6px' }}>
                    {client}
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--brand-azure-lit)' }}>
                    {subtitle}
                  </span>
                </div>

                <p style={{ fontSize: '14px', color: 'var(--fg-dim)', lineHeight: 1.65, marginBottom: '20px', fontWeight: 300 }}>
                  {description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {results.map(r => (
                    <li key={r} className="flex items-start gap-3" style={{ color: 'var(--fg-mute)', fontSize: '13.5px', lineHeight: 1.55 }}>
                      <CheckCircle2 size={16} style={{ color: '#4ade80', flexShrink: 0, marginTop: '2px' }} />
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {stats.map(({ value, label }) => (
                    <div key={label} style={{ background: 'var(--n-900)', border: '1px solid var(--line)', borderRadius: '8px', padding: '14px 10px', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '22px', color: 'var(--fg)', letterSpacing: '-0.02em', marginBottom: '4px' }}>{value}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--fg-faint)' }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--fg-faint)', marginBottom: '20px' }}>
            Want to see if your business is a fit?
          </p>
          <a href="https://intake.nihilosolutions.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-primary">
            <span>Start Readiness Protocol</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CaseStudy;
