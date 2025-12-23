
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PERFORMANCE_DATA } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] mono uppercase tracking-[0.4em] text-zinc-600 mb-6 block">02 // Optimization Metrics</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">Measurable Operational Gains</h2>
            <p className="text-zinc-500 text-lg mb-12 leading-relaxed font-light">
              Our engineering approach prioritizes reduction in manual cycle times and significant latency optimization. We don't just build; we optimize for scale and cost-efficiency.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="p-6 border border-zinc-900 bg-zinc-900/20">
                <span className="block text-4xl font-bold text-white mb-2">85%</span>
                <span className="text-zinc-600 text-[10px] mono uppercase tracking-widest font-bold">Manual Task Reduction</span>
              </div>
              <div className="p-6 border border-zinc-900 bg-zinc-900/20">
                <span className="block text-4xl font-bold text-white mb-2">4.2x</span>
                <span className="text-zinc-600 text-[10px] mono uppercase tracking-widest font-bold">Data Processing Speed</span>
              </div>
              <div className="p-6 border border-zinc-900 bg-zinc-900/20">
                <span className="block text-4xl font-bold text-white mb-2">0.03%</span>
                <span className="text-zinc-600 text-[10px] mono uppercase tracking-widest font-bold">Workflow Error Rate</span>
              </div>
              <div className="p-6 border border-zinc-900 bg-zinc-900/20">
                <span className="block text-4xl font-bold text-white mb-2">30%</span>
                <span className="text-zinc-600 text-[10px] mono uppercase tracking-widest font-bold">Cloud Cost Savings</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 p-10 rounded-xl h-[450px] w-full relative">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-xs mono uppercase tracking-widest text-zinc-400">Automation Performance Index</h4>
              <span className="text-[9px] mono text-emerald-500 font-bold px-2 py-0.5 border border-emerald-900/30 rounded bg-emerald-950/20">ACTIVE_TELEMETRY</span>
            </div>
            
            <ResponsiveContainer width="100%" height="75%">
              <AreaChart data={PERFORMANCE_DATA}>
                <defs>
                  <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d4d4d8" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#d4d4d8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#18181b" vertical={false} />
                <XAxis dataKey="name" stroke="#3f3f46" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#3f3f46" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '4px', fontSize: '10px' }}
                  itemStyle={{ color: '#fff', fontFamily: 'JetBrains Mono' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="efficiency" 
                  stroke="#fff" 
                  fillOpacity={1} 
                  fill="url(#colorEff)" 
                  strokeWidth={2}
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
            
            <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-center text-[10px] mono text-zinc-600">
              <p>Y-AXIS: OPERATIONAL_YIELD</p>
              <p>X-AXIS: DEPLOYMENT_WEEKS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
