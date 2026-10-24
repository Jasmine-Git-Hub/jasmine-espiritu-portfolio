import { useRef } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import { useReveal } from '../lib/useReveal';
import { SectionLabel } from './SectionLabel';

export function Skills() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const marquee = skills.flatMap((s) => s.items);

  return (
    <section ref={root} id="skills" className="relative overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="04">Toolkit</SectionLabel>
        <h2 data-split className="mb-16 font-display text-huge uppercase md:mb-24">Skills</h2>
      </div>

      {/* Marquee band */}
      <div className="mb-20 -rotate-2 border-y border-bone/10 bg-azure py-5 text-ink">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-4xl uppercase md:text-6xl">
          {[...marquee, ...marquee].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              {s} <span className="text-white/70">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] gap-5 px-5 md:grid-cols-2 md:px-10 xl:grid-cols-4">
        {skills.map((g, gi) => (
          <div key={g.group} data-reveal={gi * 0.1} className="rounded-3xl border border-bone/10 bg-ink-soft/50 p-6 md:p-8">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="font-display text-3xl uppercase md:text-4xl">{g.group}</h3>
              <span className="font-mono text-xs text-mist">{String(g.items.length).padStart(2, '0')}</span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <motion.li
                  key={s}
                  whileHover={{ y: -3, backgroundColor: '#f2f0eb', color: '#1a1d21' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="rounded-full border border-bone/15 px-4 py-2 text-sm"
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
