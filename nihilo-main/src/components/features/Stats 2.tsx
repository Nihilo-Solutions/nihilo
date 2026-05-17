'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PERFORMANCE_DATA } from '@/constants';

const Stats: React.FC = () => {
  return (
    <section style={{ padding: '7rem 0', background: 'var(--brand-ink)', borderTop: '1px solid var(--line)' }}>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div>
            <span className="eyebrow mb-5 block">02 // The Numbers</span>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 'clamp(28px, 4vw, 52px)', color: 'var(--fg)', letterSpacing: '-0.03em', marginBottom: '24px' }}>
              What Our Clients Actually See
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--fg-dim)', marginBottom: '40px', fontWeight: 300 }}>
              These aren't projections. They're numbers pulled from Azure and AWS deployments we've shipped for real businesses.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {[
                { num: '85%', label: 'Fewer Manual Tasks', note: 'on average, in back-office ops' },
                { num: '4.2x', label: 'Faster Data Processing', note: 'compared to manual workflows' },
                { num: '0.03%', label: 'Error Rate', note: 'in automated workflows' },
                { num: '30%+', label: 'Cloud Cost Savings', note: 'typical on Azure and AWS' },
              ].map(({ num, label, note }) => (
                <div key={label} style={{ padding: '20px', border: '1px solid var(--line)', background: 'rgba(255,255,255,0.02)', borderRadius: '4px' }}>
                  <span style={{ display: 'block', fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '40px', letterSpacing: '-0.03em', color: 'var(--fg)', marginBottom: '6px' }}>
                    {num}
                  </span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--fg-faint)', fontWeight: 700, marginBottom: '4px' }}>
                    {label}
                  </span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--fg-faint)', letterSpacing: '0.1em' }}>
                    {note}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--fg-faint)', marginTop: '20px' }}>
              * Based on aggregated results from Azure and AWS production deployments.
            </p>
          </div>

          {/* Chart */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', padding: '40px', borderRadius: 'var(--r-card)', height: '450px', position: 'relative' }}>
            <div className="flex justify-between items-center mb-8">
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--fg-dim)', margin: 0 }}>
                Automation Performance Index
              </h4>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#4ade80', fontWeight: 700, padding: '3px 8px', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '3px', background: 'rgba(74,222,128,0.05)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Live Data
              </span>
            </div>

            <ResponsiveContainer width="100%" height="70%">
              <AreaChart data={PERFORMANCE_DATA}>
                <defs>
                  <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2D6BFF" stopOpacity={0.18} />
                    <stop offset="95%" stopColor="#2D6BFF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.15)" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(255,255,255,0.15)" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'var(--brand-ink)', border: '1px solid var(--line)', borderRadius: '4px', fontSize: '10px' }}
                  itemStyle={{ color: '#fff', fontFamily: 'JetBrains Mono' }}
                />
                <Area
                  type="monotone"
                  dataKey="efficiency"
                  stroke="var(--brand-azure)"
                  fillOpacity={1}
                  fill="url(#colorEff)"
                  strokeWidth={2}
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--fg-faint)' }}>
              <span>Y — Operational Output</span>
              <span>X — Weeks After Launch</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
