'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Loader2 } from 'lucide-react';

interface AssessmentScores {
  speed: number;
  seo: number;
  mobile: number;
}

type Stage = 'form' | 'loading' | 'results' | 'leadCapture' | 'submitted';

const FIELD_CLASS =
  'w-full px-4 py-3 bg-zinc-900 text-white border border-zinc-800 outline-none ' +
  'placeholder:text-zinc-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition text-sm font-mono';

const LABEL_CLASS = 'block text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-2';

function ScoreBar({ label, score }: { label: string; score: number }) {
  const color =
    score >= 90 ? 'bg-emerald-500' : score >= 50 ? 'bg-yellow-500' : 'bg-red-500';
  const textColor =
    score >= 90 ? 'text-emerald-400' : score >= 50 ? 'text-yellow-400' : 'text-red-400';

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">{label}</span>
        <span className={`text-2xl font-black ${textColor}`}>{score}</span>
      </div>
      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-700 rounded-full`}
          style={{ width: `${score}%` }}
        />
      </div>
      <p className="text-[11px] text-zinc-600">
        {score >= 90 ? 'Good' : score >= 50 ? 'Needs improvement' : 'Poor'}
      </p>
    </div>
  );
}

function gradeLabel(scores: AssessmentScores): string {
  const avg = Math.round((scores.speed + scores.seo + scores.mobile) / 3);
  if (avg >= 85) return 'Strong foundation';
  if (avg >= 60) return 'Room to grow';
  return 'Significant opportunity';
}

export default function AssessmentPage() {
  const [stage, setStage] = useState<Stage>('form');
  const [url, setUrl] = useState('');
  const [scores, setScores] = useState<AssessmentScores | null>(null);
  const [error, setError] = useState('');

  // Lead capture fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleUrlSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setStage('loading');

    try {
      // Show scores first — lead capture comes after results
      const res = await fetch('/api/assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'anonymous', email: 'anonymous@placeholder.com', company: '', website: url }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `Server error ${res.status}`);
      }

      const data = await res.json();
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

    try {
      await fetch('/api/assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, website: url }),
      });

      window.gtag?.('event', 'generate_lead', {
        event_category: 'assessment',
        event_label: 'growth_assessment',
      });

      setStage('submitted');
    } catch {
      // Non-fatal — we still show submitted state
      setStage('submitted');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 pt-32 pb-24 px-4">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <span className="text-[10px] mono uppercase tracking-[0.4em] text-zinc-600 mb-4 block">
            Free · No obligation
          </span>
          <h1
            className="text-4xl font-bold text-white tracking-tight leading-tight mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Growth Assessment
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            Enter your website URL. We will run a real PageSpeed audit and show you your speed, SEO, and mobile scores instantly.
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
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-bold text-sm uppercase tracking-[0.15em] transition-colors"
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

            <p className="text-[11px] text-zinc-600 text-center">
              Powered by Google PageSpeed Insights. Takes 10-20 seconds.
            </p>
          </form>
        )}

        {/* Results */}
        {stage === 'results' && scores && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-6 space-y-6">
              <div className="flex items-baseline justify-between">
                <h2 className="text-white font-bold text-lg">{gradeLabel(scores)}</h2>
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                  {new URL(/^https?:\/\//.test(url) ? url : `https://${url}`).hostname}
                </span>
              </div>

              <ScoreBar label="Speed (desktop)" score={scores.speed} />
              <ScoreBar label="SEO" score={scores.seo} />
              <ScoreBar label="Mobile performance" score={scores.mobile} />
            </div>

            <div className="border-l-2 border-blue-500/40 pl-5">
              <p className="text-zinc-300 text-sm leading-relaxed">
                Scores below 90 represent real, measurable traffic and lead losses. We can fix every one of these, and we will tell you which to prioritize first.
              </p>
            </div>

            <button
              onClick={() => setStage('leadCapture')}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-[0.15em] transition-colors"
            >
              Get the full report
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => { setStage('form'); setScores(null); }}
              className="w-full text-[11px] font-mono uppercase tracking-widest text-zinc-600 hover:text-zinc-400 transition-colors py-2"
            >
              Score a different site
            </button>
          </div>
        )}

        {/* Lead capture */}
        {stage === 'leadCapture' && scores && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/30">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Your scores</p>
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-2xl font-black text-white">{scores.speed}</p>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Speed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">{scores.seo}</p>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest">SEO</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">{scores.mobile}</p>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Mobile</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Get the full report
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We will send you a prioritized fix list and tell you what each improvement is worth in traffic and leads. No pitch, no obligation.
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div>
                <label htmlFor="lead-name" className={LABEL_CLASS}>Name</label>
                <input
                  id="lead-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={FIELD_CLASS}
                />
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
                  Company <span className="text-zinc-600 normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="lead-company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={FIELD_CLASS}
                />
              </div>

              <button
                type="submit"
                disabled={isSending || !name || !email}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-bold text-sm uppercase tracking-[0.15em] transition-colors"
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

              <p className="text-[11px] text-zinc-600 text-center">
                No spam. We respond personally within 1 business day.
              </p>
            </form>
          </div>
        )}

        {/* Submitted */}
        {stage === 'submitted' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="border-l-2 border-blue-500 pl-6 py-2">
              <p className="text-white font-bold mb-2">Report on its way.</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We received your scores and will send a prioritized fix list within 1 business day.
                If you want to talk through the results directly, book time below.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/intake"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-zinc-900 border border-zinc-800 hover:border-blue-500 text-white font-bold text-sm uppercase tracking-[0.15em] transition-colors"
              >
                Talk to a principal
                <ArrowRight size={16} />
              </Link>

              <button
                onClick={() => { setStage('form'); setScores(null); setUrl(''); }}
                className="text-[11px] font-mono uppercase tracking-widest text-zinc-600 hover:text-zinc-400 transition-colors py-2"
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
