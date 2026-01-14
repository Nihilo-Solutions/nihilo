import React, { useEffect, useState } from 'react';

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

    // Ensure each h2 has an id
    const hs = h2s.map((h) => {
      if (!h.id) h.id = slugify(h.textContent || 'section');
      return { id: h.id, text: h.textContent ? h.textContent.trim() : h.id };
    });

    setHeadings(hs);

    // IntersectionObserver to highlight active heading
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

    // close on mobile
    if (window.innerWidth <= 768) setOpen(false);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    // focus for a11y
    target.setAttribute('tabindex', '-1');
    (target as HTMLElement).focus({ preventScroll: true });
    setTimeout(() => target.removeAttribute('tabindex'), 1000);
  };

  if (!headings.length) return null;

  return (
    <nav id="toc" className={`toc ${open ? 'toc--open' : ''}`} aria-label="Page table of contents">
      <button
        id="toc-toggle"
        className="toc__toggle"
        aria-expanded={open}
        aria-controls="toc-list"
        onClick={() => setOpen((s) => !s)}
      >
        <span className="toc__toggle-label">Contents</span>
        <span className="toc__toggle-icon" aria-hidden>
          ▾
        </span>
      </button>

      <ul id="toc-list" className="toc__list">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              className="toc__link"
              href={`#${h.id}`}
              onClick={(e) => handleClick(e, h.id)}
              aria-current={activeId === h.id ? 'true' : undefined}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
