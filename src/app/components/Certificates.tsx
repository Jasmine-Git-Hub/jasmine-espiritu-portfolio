import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Mic } from 'lucide-react';
import { certifications, trainings, type Certificate } from '../../data/portfolio';
import { useReveal } from '../lib/useReveal';
import { SectionLabel } from './SectionLabel';

function CertRow({ c, i, icon: Icon }: { c: Certificate; i: number; icon: typeof Award }) {
  const body = (
    <>
      {c.href && (
        <motion.span
          variants={{ rest: { scaleY: 0 }, hover: { scaleY: 1 } }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 origin-bottom bg-bone"
        />
      )}
      <span className="relative font-mono text-xs text-mist group-hover:text-ink/60">{String(i + 1).padStart(2, '0')}</span>
      <Icon className="relative hidden shrink-0 text-azure md:block" size={26} />
      <span className="relative flex-1">
        <span className="block font-display text-2xl uppercase transition-colors group-hover:text-ink md:text-4xl">{c.title}</span>
        <span className="mt-2 block font-mono text-xs uppercase tracking-widest text-mist group-hover:text-ink/60">
          {c.issuer} · {c.date}
        </span>
      </span>
      {c.href && (
        <span className="relative flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-widest group-hover:text-ink">
          <span className="hidden sm:inline">{c.linkLabel ?? 'View'}</span>
          <motion.span
            variants={{ rest: { rotate: 0 }, hover: { rotate: 45 } }}
            className="grid h-11 w-11 place-items-center rounded-full border border-bone/20 group-hover:border-ink/30"
          >
            <ArrowUpRight size={18} />
          </motion.span>
        </span>
      )}
    </>
  );
  const cls = 'group relative flex items-center gap-4 overflow-hidden border-b border-bone/10 py-7 md:gap-8 md:py-8';

  return (
    <li data-reveal={i * 0.06}>
      {c.href ? (
        <motion.a href={c.href} target="_blank" rel="noreferrer" data-cursor={c.linkLabel ?? 'View'} initial="rest" whileHover="hover" className={cls}>
          {body}
        </motion.a>
      ) : (
        <div className={cls}>{body}</div>
      )}
    </li>
  );
}

function Group({ title, note, items, icon }: { title: string; note: string; items: Certificate[]; icon: typeof Award }) {
  return (
    <div className="mb-20 last:mb-0">
      <div data-reveal className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-3xl uppercase md:text-4xl">{title}</h3>
        <span className="font-mono text-xs uppercase tracking-widest text-mist">{note}</span>
      </div>
      <ul className="border-t border-bone/10">
        {items.map((c, i) => (
          <CertRow key={c.title} c={c} i={i} icon={icon} />
        ))}
      </ul>
    </div>
  );
}

export function Certificates() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} id="certificates" className="relative bg-ink-deep px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="03">Always learning</SectionLabel>
        <h2 data-split className="mb-16 font-display text-huge uppercase md:mb-24">Certificates</h2>

        <Group title="Certifications" note="Course completion" items={certifications} icon={Award} />
        <Group title="Trainings & Webinars" note="Certificates of participation" items={trainings} icon={Mic} />
      </div>
    </section>
  );
}
