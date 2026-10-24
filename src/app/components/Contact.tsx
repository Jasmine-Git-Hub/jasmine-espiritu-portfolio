import { useRef } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/portfolio';
import { scrollTo } from '../lib/scroll';
import { useReveal } from '../lib/useReveal';
import { Magnetic } from './Magnetic';
import { TiltCard } from './TiltCard';

const channels = [
  { label: 'Email', handle: profile.emails[0], href: `mailto:${profile.emails[0]}`, Icon: Mail },
  { label: 'LinkedIn', handle: 'Jasmine Michaela Espiritu', href: profile.linkedin, Icon: Linkedin },
  { label: 'GitHub', handle: '@Jasmine-Git-Hub', href: profile.github, Icon: Github },
];

export function Contact() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} id="contact" className="mesh relative overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1600px]">
        <p data-reveal className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-glow">
          05 — Have a project or role in mind?
        </p>
        <h2 data-split className="font-display text-mega uppercase">
          Let’s talk
        </h2>

        <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-3">
          {channels.map(({ label, handle, href, Icon }, i) => (
            <div key={label} data-reveal={i * 0.1}>
              <Magnetic strength={0.12} className="w-full">
                <a href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer" data-cursor="Say hi" className="block">
                  <TiltCard className="flex aspect-[4/3] flex-col justify-between rounded-3xl border border-bone/15 bg-ink/60 p-6 backdrop-blur transition-colors duration-500 hover:border-azure md:p-8">
                    <div className="relative flex items-start justify-between">
                      <Icon size={32} strokeWidth={1.5} />
                      <ArrowUpRight size={28} className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-45" />
                    </div>
                    <div className="relative">
                      <div className="font-display text-5xl uppercase md:text-6xl">{label}</div>
                      <div className="mt-2 truncate text-sm text-mist">{handle}</div>
                    </div>
                  </TiltCard>
                </a>
              </Magnetic>
            </div>
          ))}
        </div>

        <p data-reveal className="mt-8 text-sm text-mist">
          Also reachable at{' '}
          <a href={`mailto:${profile.emails[1]}`} className="text-bone underline decoration-azure underline-offset-4">
            {profile.emails[1]}
          </a>
        </p>

        <footer className="mt-28 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-8 font-mono text-xs uppercase tracking-widest text-mist md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {profile.fullName}</span>
          <span>Designed & built with React, GSAP & a little AI</span>
          <button onClick={() => scrollTo('home')} className="hover:text-bone" data-cursor="Up">
            Back to top ↑
          </button>
        </footer>
      </div>
    </section>
  );
}
