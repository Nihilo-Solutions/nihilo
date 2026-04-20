import React, { useState } from 'react';
import { ASSESSMENT_QUESTIONS } from '../constants';
import { ChevronRight, Activity, Terminal, ArrowUpRight } from 'lucide-react';

const Diagnostic: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [email, setEmail] = useState('');

  const handleChoice = (choice: string) => {
    setAnswers({ ...answers, [ASSESSMENT_QUESTIONS[step].id]: choice });
    if (step < ASSESSMENT_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <section className="py-32 bg-zinc-950 flex justify-center px-6">
        <div className="max-w-2xl w-full bg-zinc-900/50 border border-zinc-800 p-12 rounded-2xl text-center">
          <Activity className="text-blue-500 mx-auto mb-6" size={48} />
          <h2 id="protocol-complete" className="text-3xl font-bold text-white mb-4 italic uppercase">Protocol Complete</h2>
          <p className="text-zinc-400 mb-10 font-mono text-xs tracking-widest uppercase">
            Analysis ready. Enter email to receive readiness report & engineering feedback.
          </p>
          <input
            type="email"
            placeholder="eng_lead@enterprise.com"
            className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white mb-6 font-mono outline-none focus:border-blue-500 transition-colors"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="w-full py-5 bg-blue-500 text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Send Technical Report
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="assessment" className="py-32 bg-navy-950 border-t border-navy-900">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress Header */}
          <div className="flex justify-between items-end mb-8 font-mono text-[10px] tracking-[0.4em] uppercase text-navy-400">
            <div className="flex items-center gap-3">
              <Terminal size={14} />
              <span>Phase: {ASSESSMENT_QUESTIONS[step].phase}</span>
            </div>
            <span>{Math.round(((step + 1) / ASSESSMENT_QUESTIONS.length) * 100)}%</span>
          </div>
          <div className="h-[1px] w-full bg-navy-900 mb-16">
            <div
              className="h-full bg-accent shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-500"
              style={{ width: `${((step + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question */}
          <h2 className="text-4xl font-bold text-white mb-12 tracking-tight font-heading leading-tight">
            {ASSESSMENT_QUESTIONS[step].question}
          </h2>

          {/* Options */}
          <div className="grid grid-cols-1 gap-4">
            {ASSESSMENT_QUESTIONS[step].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleChoice(opt)}
                className="group flex justify-between items-center p-6 border border-navy-700 bg-navy-900/60 hover:border-cyan-DEFAULT/50 hover:bg-navy-800/80 transition-all duration-300 rounded-lg shadow-sm hover:shadow-cyan-DEFAULT/10"
              >
                <span className="font-medium text-[15px] text-slate-200 group-hover:text-white transition-colors text-left">
                  {opt}
                </span>
                <ChevronRight size={18} className="text-navy-500 group-hover:text-cyan-DEFAULT group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnostic;