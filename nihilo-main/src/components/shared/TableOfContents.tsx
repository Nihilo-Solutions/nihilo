'use client';

import { useEffect, useState } from 'react';

type Heading = { id: string; text: string };

const slugify = (text = '') =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+|-+$/g, '');

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const container = document.querySelector('main') || document.body;
    const h2s = Array.from(container.querySelectorAll('h2')) as HTMLHeadingElement[];

    const hs = h2s.map((h) => {
      if (!h.id) h.id = slugify(h.textContent || 'section');
      return { id: h.id, text: h.textContent ? h.textContent.trim() : h.id };
    });

    setHeadings(hs);

    const idToElement = new Map<string, Element>();
    hs.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) idToElement.set(s.id, el);
    });

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -55% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) setActiveId(id);
      });
    }, observerOptions);

    hs.forEach((s) => {
      const el = idToElement.get(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    if (window.innerWidth <= 768) setOpen(false);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    setActiveId(id);
  };

  if (headings.length === 0) return null;

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="md:hidden fixed bottom-4 right-4 z-[60] bg-zinc-900/80 p-3 border border-zinc-800 text-white text-[9px] font-mono uppercase tracking-widest shadow-lg"
        aria-label="Toggle table of contents"
      >
        {open ? 'Close' : 'Index'}
      </button>

      <aside
        className={`${
          open ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0 fixed top-1/4 right-4 md:right-8 z-50 w-52 bg-zinc-950/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none border border-zinc-800 md:border-none rounded-lg md:rounded-none p-4 md:p-0 transition-transform duration-300`}
      >
        <ul className="space-y-3 text-[10px] uppercase tracking-widest font-mono">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                onClick={(e) => handleClick(e, h.id)}
                className={`block transition-colors duration-200 ${
                  activeId === h.id
                    ? 'text-blue-400 border-l-2 border-blue-500 pl-2'
                    : 'text-zinc-500 hover:text-white pl-0'
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default TableOfContents;
