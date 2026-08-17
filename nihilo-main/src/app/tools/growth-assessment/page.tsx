'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Loader2 } from 'lucide-react';

// Metadata is declared in layout.tsx since this is a 'use client' component.

interface AssessmentScores {
  speed: number;
  seo: number;
  mobile: number;
}

type Stage = 'form' | 'loading' | 'results' | 'leadCapture' | 'submitted';

const FIELD_CLASS =
  'w-full px-4 py-3 bg-[#111] text-white border border-white/10 outline-none ' +
  'placeholder:text-white/30 focus:border-white/30 transition text-sm font-mono';

const LABEL_CLASS = 'block text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-2';

function ScoreCard({ label, score }: { label: string; score: number }) {
  const color = score >= 90 ? 'text-emerald-400' : score >= 50 ? 'text-yellow-400' : 'text-red-400';
  const barColor = score >= 90 ? 'bg-emerald-500' : score >= 50 ? 'bg-yellow-500' : 'bg-red-500';
  const status = score >= 90 ? 'Good' : score >= 50 ? 'Needs improvement' : 'Poor';

  return (
    <div className="bg-[#111] border border-white/8 p-6 space-y-3">
      <div className="flex justify-between items-baseline">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">{label}</span>
        <span className={`text-3xl font-black ${color}`}>{score}</span>
      </div>
      <div className="h-1 w-full bg-white/10">
        <div
          className={`h-full ${barColor} transition-all duration-700`}
          style={{ width: `${score}%` }}
        />
      </div>
      <p className="text-[11px] text-white/30">{status}</p>
    </div>
  );
}

function OverallGauge({ scores }: { scores: AssessmentScores }) {
  const overall = Math.round((scores.speed + scores.seo + scores.mobile) / 3);
  const label = overall >= 85 ? 'Strong foundation' : overall >= 60 ? 'Room to grow' : 'Significant opportunity';
  const color = overall >= 85 ? 'text-emerald-400' : overall >= 60 ? 'text-yellow-400' : 'text-red-400';

  return (
    <div className="bg-[#111] border border-white/8 p-6 text-center">
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-3">Overall score</p>
      <p className={`text-6xl font-black mb-2 ${color}`}>{overall}</p>
      <p className="text-sm text-white/60">{label}</p>
    </div>
  );
}

function Recommendations({ scores }: { scores: AssessmentScores }) {
  const recs: string[] = [];

  if (scores.speed < 90) {
    recs.push('Improve page load speed — every second of delay costs 7% of conversions');
  }
  if (scores.seo < 90) {
    recs.push('Fix on-page SEO issues — search engines may be underranking your site');
  }
  if (scores.mobile < 90) {
    recs.push('Optimize for mobile — most local searches happen on phones');
  }
  if (recs.length === 0) {
    recs.push('Maintain your scores with regular audits and content updates');
    recs.push('Focus on building high-quality backlinks to improve domain authority');
    recs.push('Expand your content strategy targeting high-intent buyer keywords');
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-4">Top recommendations</p>
      {recs.slice(0, 3).map((rec, i) => (
        <div key={i} className="flex gap-3 items-start">
          <span className="text-xs font-mono text-white/30 mt-0.5 shrink-0">0{i + 1}</span>
          <p className="text-sm text-white/70 leading-relaxed">{rec}</p>
        </div>
      ))}
    </div>
  );
}

export default function GrowthAssessmentPage() {
  const [stage, setStage] = useState<Stage>('form');
  const [url, setUrl] = useState('');
  const [scores, setScores] = useState<AssessmentScores | null>(null);
  const [error, setError] = useState('');

  // Lead capture fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleUrlSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setStage('loading');

    try {
      const res = await fetch('/api/assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ website: url }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({})) as { error?: string };
        throw new Error(body.error ?? `Server error ${res.status}`);
      }

      const data = await res.json() as { scores: AssessmentScores };
      setScores(data.scores);
      setStage('results');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong';
      setError(msg);
      setStage('form');
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!scores) return;
    setIsSending(true);

    const overall = Math.round((scores.speed + scores.seo + scores.mobile) / 3);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          company,
          phone,
          websiteUrl: url,
          source: 'Growth Assessment',
          scores: { ...scores, overall },
        }),
      });

      setStage('submitted');
    } catch {
      // Non-fatal — show submitted state regardless
      setStage('submitted');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 px-4">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4 block">
            Free · No obligation
          </span>
          <h1
            className="text-4xl font-bold text-white tracking-tight leading-tight mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Growth Assessment
          </h1>
          <p className="text-white/60 text-base leading-relaxed">
            Enter your website URL. We run a real PageSpeed audit and show you your speed, SEO, and mobile scores in under 60 seconds.
          </p>
        </div>

        {/* URL form */}
        {(stage === 'form' || stage === 'loading') && (
          <form onSubmit={handleUrlSubmit} className="space-y-4">
            <div>
              <label htmlFor="assess-url" className={LABEL_CLASS}>
                Website URL
              </label>
              <input
                id="assess-url"
                type="text"
                inputMode="url"
                required
                placeholder="yoursite.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className={FIELD_CLASS}
                disabled={stage === 'loading'}
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm font-mono">{error}</p>
            )}

            <button
              type="submit"
              disabled={stage === 'loading' || !url}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black disabled:bg-white/20 disabled:text-white/40 font-bold text-sm uppercase tracking-[0.15em] transition-colors hover:bg-white/90"
            >
              {stage === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Running audit...
                </>
              ) : (
                <>
                  Score my site
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            <p className="text-[11px] text-white/30 text-center">
              Powered by Google PageSpeed Insights. Takes 10-20 seconds.
            </p>
          </form>
        )}

        {/* Results */}
        {stage === 'results' && scores && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-1">
                Results for {(() => {
                  try {
                    return new URL(/^https?:\/\//.test(url) ? url : `https://${url}`).hostname;
                  } catch {
                    return url;
                  }
                })()}
              </p>
            </div>

            <OverallGauge scores={scores} />

            <div className="grid grid-cols-3 gap-3">
              <ScoreCard label="Speed" score={scores.speed} />
              <ScoreCard label="SEO" score={scores.seo} />
              <ScoreCard label="Mobile" score={scores.mobile} />
            </div>

            <div className="bg-[#111] border border-white/8 p-6">
              <Recommendations scores={scores} />
            </div>

            <div className="border-l-2 border-white/20 pl-5">
              <p className="text-white/60 text-sm leading-relaxed">
                Scores below 90 represent measurable traffic and lead losses. We can fix every one of these, and tell you which to prioritize first.
              </p>
            </div>

            <button
              onClick={() => setStage('leadCapture')}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-bold text-sm uppercase tracking-[0.15em] transition-colors hover:bg-white/90"
            >
              Get the full report
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => { setStage('form'); setScores(null); }}
              className="w-full text-[11px] font-mono uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors py-2"
            >
              Score a different site
            </button>
          </div>
        )}

        {/* Lead capture */}
        {stage === 'leadCapture' && scores && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-[#111] border border-white/8 p-4">
              <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-3">Your scores</p>
              <div className="flex gap-8">
                <div className="text-center">
                  <p className="text-2xl font-black text-white">{scores.speed}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">Speed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">{scores.seo}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">SEO</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">{scores.mobile}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">Mobile</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">
                    {Math.round((scores.speed + scores.seo + scores.mobile) / 3)}
                  </p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">Overall</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Get the full report
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                We will send you a prioritized fix list and tell you what each improvement is worth in traffic and leads. No pitch, no obligation.
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lead-first-name" className={LABEL_CLASS}>First name</label>
                  <input
                    id="lead-first-name"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={FIELD_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="lead-last-name" className={LABEL_CLASS}>Last name</label>
                  <input
                    id="lead-last-name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={FIELD_CLASS}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lead-email" className={LABEL_CLASS}>Email</label>
                <input
                  id="lead-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={FIELD_CLASS}
                />
              </div>
              <div>
                <label htmlFor="lead-company" className={LABEL_CLASS}>
                  Company <span className="text-white/30 normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="lead-company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={FIELD_CLASS}
                />
              </div>
              <div>
                <label htmlFor="lead-phone" className={LABEL_CLASS}>
                  Phone <span className="text-white/30 normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="lead-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={FIELD_CLASS}
                />
              </div>

              <button
                type="submit"
                disabled={isSending || !firstName || !email}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black disabled:bg-white/20 disabled:text-white/40 font-bold text-sm uppercase tracking-[0.15em] transition-colors hover:bg-white/90"
              >
                {isSending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send my report
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <p className="text-[11px] text-white/30 text-center">
                No spam. We respond personally within 1 business day.
              </p>
            </form>
          </div>
        )}

        {/* Submitted */}
        {stage === 'submitted' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="border-l-2 border-white/30 pl-6 py-2">
              <p className="text-white font-bold mb-2">Report on its way.</p>
              <p className="text-white/60 text-sm leading-relaxed">
                We received your scores and will send a prioritized fix list within 1 business day.
                If you want to talk through the results directly, book time below.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/intake"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-bold text-sm uppercase tracking-[0.15em] transition-colors hover:bg-white/90"
              >
                Talk to a principal
                <ArrowRight size={16} />
              </Link>

              <button
                onClick={() => { setStage('form'); setScores(null); setUrl(''); }}
                className="text-[11px] font-mono uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors py-2"
              >
                Score another site
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
