import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '../../data/portfolio';
import { useReveal } from '../lib/useReveal';
import { SectionLabel } from './SectionLabel';
import { TiltCard } from './TiltCard';
import { Magnetic } from './Magnetic';

function ProjectCard({ p }: { p: Project }) {
  return (
    <TiltCard
      max={p.featured ? 4 : 7}
      className={`flex h-full flex-col justify-between rounded-3xl border border-bone/10 bg-ink-soft/60 p-6 md:p-10 ${
        p.featured ? 'bg-gradient-to-br from-azure/20 via-ink-soft/80 to-ink-soft/40' : ''
      }`}
    >
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs text-mist">{p.index} / {p.kind}</span>
          {p.live && (
            <span className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Live
            </span>
          )}
        </div>
        <h3 className={`mt-6 font-display uppercase leading-[0.9] ${p.featured ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl'}`}>
          {p.title}
        </h3>
        {p.fullTitle && (
          <p className="mt-4 max-w-2xl font-mono text-[11px] uppercase leading-relaxed tracking-wider text-glow/80">{p.fullTitle}</p>
        )}
        <p className={`mt-5 leading-relaxed text-bone/70 ${p.featured ? 'max-w-2xl md:text-lg' : ''}`}>{p.description}</p>
      </div>

      <div className="relative mt-10 flex flex-wrap items-end justify-between gap-6">
        <ul className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full border border-bone/15 px-3 py-1 font-mono text-[11px] text-bone/80">
              {t}
            </li>
          ))}
        </ul>
        {p.links && (
          <div className="flex flex-wrap gap-2">
            {p.links.map((l, i) => (
              <Magnetic key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="Open"
                  className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:bg-azure hover:text-white ${
                    i === 0 ? 'bg-bone text-ink' : 'border border-bone/25 text-bone'
                  }`}
                >
                  {l.label} <ArrowUpRight size={16} />
                </a>
              </Magnetic>
            ))}
          </div>
        )}
      </div>
    </TiltCard>
  );
}

export function Projects() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const [featured, ...rest] = projects;

  return (
    <section ref={root} id="projects" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="02">Selected Work</SectionLabel>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 md:mb-24">
          <h2 data-split className="font-display text-huge uppercase">Projects</h2>
          <p data-reveal className="max-w-sm text-mist">
            From trained models to shipped apps — a mix of AI systems, mobile, and web platforms.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-5 md:grid-cols-6">
          <div data-reveal className="md:col-span-6 lg:col-span-4 lg:row-span-2">
            <ProjectCard p={featured} />
          </div>
          {rest.map((p, i) => (
            <div key={p.index} data-reveal={i * 0.1} className="md:col-span-3 lg:col-span-2">
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
