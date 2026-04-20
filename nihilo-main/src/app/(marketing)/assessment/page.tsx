'use client';

import { useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { ASSESSMENT_QUESTIONS } from '@/constants';
import { Mail, Calendar, ArrowRight, ShieldCheck, ChevronRight, FileText } from 'lucide-react';

export default function AssessmentPage() {
  const [stage, setStage] = useState<'intake' | 'test' | 'results'>('intake');
  const [userData, setUserData] = useState({ name: '', email: '', company: '' });
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const calculateReadinessScore = () => {
    const highReadinessAnswers = [
      "Cloud-Native", "Yes, fully integrated", "Real-time", 
      "Automated Dashboards", "Immediately", "Early Adopters", "Enterprise Standard"
    ];
    const totalQuestions = ASSESSMENT_QUESTIONS.length;
    const matchingAnswers = Object.values(answers).filter(val => highReadinessAnswers.includes(val)).length;
    return Math.min(98, Math.max(15, Math.floor((matchingAnswers / totalQuestions) * 100) + 42));
  };

  const sendEmail = () => {
    setIsSending(true);
    const phases = [...new Set(ASSESSMENT_QUESTIONS.map(q => q.phase))];
    const formattedResults = phases.map(phase => {
      const phaseQuestions = ASSESSMENT_QUESTIONS.filter(q => q.phase === phase);
      const phaseAnswers = phaseQuestions.map(q => 
        `[Q] ${q.question}\n    RESULT: ${answers[q.id] || 'N/A'}`
      ).join('\n\n');
      return `--- SECTION: ${phase.toUpperCase()} ---\n${phaseAnswers}\n`;
    }).join('\n' + '='.repeat(40) + '\n');

    const templateParams = {
      user_name: userData.name,
      user_email: userData.email,
      company: userData.company,
      results_summary: formattedResults,
      booking_link: "https://outlook.office.com/book/NihiloSolutions1@nihilosolutions.com/"
    };

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          setEmailSent(true);
          setIsSending(false);
        }, (err) => {
          console.error("EmailJS Error:", err);
          alert("Transmission failed. Please contact help@nihilosolutions.com");
          setIsSending(false);
        });
    } else {
      setEmailSent(true);
      setIsSending(false);
    }
  };

  const handleAnswer = (option: string) => {
    setAnswers({ ...answers, [ASSESSMENT_QUESTIONS[currentStep].id]: option });
    if (currentStep < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      setStage('results');
      window.scrollTo(0, 0);
    }
  };

  if (stage === 'intake') {
    return (
      <div className="pt-40 pb-20 max-w-xl mx-auto px-6 animate-in fade-in duration-700">
        <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 border border-blue-500/30 rounded-full bg-blue-500/5">
          <ShieldCheck size={14} className="text-blue-400" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400">Strategic Audit Initialized</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 italic uppercase tracking-tighter">AI Business Assessment</h1>
        <p className="text-zinc-500 mb-10 font-mono text-xs uppercase tracking-widest leading-relaxed">
          Provide your enterprise credentials to begin the 35-point organizational AI readiness audit.
        </p>
        <div className="space-y-4">
          <input 
            type="text" placeholder="Full Name" 
            className="w-full p-4 bg-zinc-900 border border-zinc-800 text-white focus:border-blue-500 outline-none transition-all font-mono text-sm placeholder:text-zinc-700"
            onChange={(e) => setUserData({...userData, name: e.target.value})}
          />
          <input 
            type="email" placeholder="Business Email" 
            className="w-full p-4 bg-zinc-900 border border-zinc-800 text-white focus:border-blue-500 outline-none transition-all font-mono text-sm placeholder:text-zinc-700"
            onChange={(e) => setUserData({...userData, email: e.target.value})}
          />
          <input 
            type="text" placeholder="Company Name" 
            className="w-full p-4 bg-zinc-900 border border-zinc-800 text-white focus:border-blue-500 outline-none transition-all font-mono text-sm placeholder:text-zinc-700"
            onChange={(e) => setUserData({...userData, company: e.target.value})}
          />
          <button 
            disabled={!userData.email || !userData.name}
            onClick={() => { setStage('test'); window.scrollTo(0, 0); }}
            className="w-full py-4 bg-blue-500 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all flex justify-center items-center gap-2 mt-4 disabled:opacity-30"
          >
            Execute Assessment <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'test') {
    const q = ASSESSMENT_QUESTIONS[currentStep];
    const progress = ((currentStep + 1) / ASSESSMENT_QUESTIONS.length) * 100;
    return (
      <div className="pt-40 pb-20 max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex justify-between items-end mb-4 font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-600">
            <span>Section: {q.phase}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-[1px] w-full bg-zinc-900">
            <div className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 uppercase italic tracking-tighter leading-tight">{q.question}</h2>
        <div className="grid gap-4">
          {q.options.map(opt => (
            <button 
              key={opt}
              onClick={() => handleAnswer(opt)}
              className="p-6 text-left border border-zinc-900 bg-zinc-900/20 hover:border-blue-500/50 hover:bg-zinc-900 transition-all text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-widest flex justify-between group items-center"
            >
              {opt}
              <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-blue-400" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 max-w-2xl mx-auto px-6 text-center animate-in zoom-in-95 duration-700">
      <div className="mb-12">
        <div className="text-[72px] font-black text-blue-500 italic leading-none mb-2 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          {calculateReadinessScore()}%
        </div>
        <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">AI_Business_Maturity_Index</div>
      </div>
      
      <h2 id="assessment-complete" className="text-4xl font-bold text-white mb-6 italic uppercase tracking-tighter">Assessment Complete</h2>
      
      {!emailSent ? (
        <>
          <p className="text-zinc-400 mb-12 leading-relaxed font-light">
            A comprehensive strategy report for <span className="text-white font-bold">{userData.company}</span> has been compiled and is ready for dispatch.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={sendEmail} 
              disabled={isSending}
              className="flex items-center justify-center gap-3 p-5 bg-zinc-900 border border-zinc-800 hover:border-blue-500 text-white font-bold uppercase text-[10px] tracking-[0.3em] transition-all disabled:opacity-50 group"
            >
              <Mail size={16} className="group-hover:text-blue-400" /> {isSending ? "Dispatching..." : "Email Full Report"}
            </button>
            <a 
              href="https://intake.nihilosolutions.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 p-5 bg-blue-500 text-black font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <Calendar size={16} /> Book Principal Consultation
            </a>
          </div>
        </>
      ) : (
        <div className="bg-zinc-900/50 border border-blue-500/30 p-8 md:p-12 rounded-lg animate-in zoom-in-95 duration-500">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-zinc-900 border-2 border-blue-500 rounded-full p-4">
                <ShieldCheck size={40} className="text-blue-500" />
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4 italic">Report Dispatched</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light">
            Check your inbox. A copy has also been sent to our engineering team for review. 
            <br /><br />
            Expect a follow-up email within 24 hours.
          </p>
          
          <div className="flex flex-col gap-3">
            <a 
              href="https://intake.nihilosolutions.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 text-black font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              <Calendar size={16} /> Proceed to Calendar
            </a>
            
            <Link 
              href="/security"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase tracking-widest text-[10px] hover:border-blue-500 transition-all"
            >
              <FileText size={16} className="text-blue-400" /> Read Security Whitepaper
            </Link>
          </div>
        </div>
      )}

      <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-700 mt-16">
        Direct Support: <span className="text-zinc-500 underline hover:text-white transition-colors cursor-pointer">help@nihilosolutions.com</span>
      </p>
    </div>
  );
}
