import { useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { useReveal } from '../lib/useReveal';
import { SectionLabel } from './SectionLabel';

const stats = [
  { k: 'BSIT', v: 'Student' },
  { k: 'PM', v: 'Capstone Lead' },
  { k: 'ML', v: 'Model → API → Web' },
];

export function About() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} id="about" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="01">About</SectionLabel>

        <h2 data-split className="max-w-6xl font-display text-big uppercase">
          I build the interface you see <span className="text-mist">and the intelligence behind it.</span>
        </h2>

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12">
          {/* 👉 Secondary photo: public/images/profile-editorial.jpg */}
          <div className="lg:col-span-4">
            <div data-img className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="/images/profile-editorial.jpg"
                sizes="(min-width: 1024px) 30vw, 100vw"
                alt="Jasmine in an editorial portrait"
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            </div>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-bone/80 md:text-xl lg:col-span-7 lg:col-start-6">
            <p data-reveal>
              I’m Jasmine — a <strong className="text-bone">BSIT student</strong>, <strong className="text-bone">Project Manager</strong>, and{' '}
              <strong className="text-bone">Programmer</strong>. I love the space where design meets data.
            </p>
            <p data-reveal>
              My work bridges the gap between <span className="text-glow">frontend web development</span> and{' '}
              <span className="text-glow">backend AI & API integration</span> — from training a Scikit-learn model in Jupyter, to serving it
              through Flask, to shipping the React interface people actually use.
            </p>

            <div data-reveal className="grid grid-cols-3 gap-4 border-y border-bone/10 py-8">
              {stats.map((s) => (
                <div key={s.k}>
                  <div className="font-display text-4xl md:text-5xl">{s.k}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-mist">{s.v}</div>
                </div>
              ))}
            </div>

            {/* AI Ethos */}
            <figure
              data-reveal
              className="relative overflow-hidden rounded-2xl border border-azure/30 bg-gradient-to-br from-azure/15 via-ink-soft to-ink p-6 md:p-8"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-azure/40 bg-azure/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-glow">
                <Sparkles size={13} /> AI Ethos
              </div>
              <blockquote className="text-base leading-relaxed text-bone md:text-lg">
                “I leverage AI as an advanced pair-programmer to accelerate my workflow, optimize my code, and rapidly learn new technologies.
                Transparency and continuous learning are at the core of my development process.”
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
