import { useLayoutEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import SplitType from 'split-type';
import { profile } from '../../data/portfolio';
import { gsap, scrollTo } from '../lib/scroll';

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const splits: SplitType[] = [];
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      root.current!.querySelectorAll<HTMLElement>('[data-hero-line]').forEach((el) => {
        const s = new SplitType(el, { types: 'chars' });
        splits.push(s);
        tl.from(s.chars, { yPercent: 120, duration: 1.4, stagger: 0.035 }, '<0.12');
      });
      tl.fromTo('[data-hero-img]', { clipPath: 'inset(100% 0 0 0)', scale: 1.2 }, { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 1.8 }, 0.2)
        .from('[data-hero-fade]', { y: 30, opacity: 0, duration: 1, stagger: 0.1 }, 0.8);

      // Parallax on scroll: photo drifts slower, headline faster
      gsap.to('[data-hero-img]', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('[data-hero-title]', { yPercent: -25, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } });
    }, root);
    return () => {
      ctx.revert();
      splits.forEach((s) => s.revert());
    };
  }, []);

  return (
    <section ref={root} id="home" className="mesh relative flex min-h-[100svh] overflow-hidden">
      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-end gap-8 px-5 pb-10 pt-28 md:px-10 lg:grid-cols-12 lg:pb-14">
        {/* Headline */}
        <div data-hero-title className="relative z-20 lg:col-span-7">
          <p data-hero-fade className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-glow">
            ● Open to internships & entry-level roles
          </p>
          <h1 className="font-display text-mega uppercase">
            <span data-hero-line className="block overflow-hidden">
              <span className="glitch" data-text={profile.firstName} data-cursor="Hi!">
                {profile.firstName}
              </span>
            </span>
            <span data-hero-line className="block overflow-hidden text-outline">
              {profile.lastName}
            </span>
            <span data-hero-line className="block overflow-hidden text-[0.42em] leading-[1] text-mist">
              Portfolio ’26
            </span>
          </h1>
        </div>

        {/* Photo — the focal point */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto h-[62svh] w-[min(88vw,460px)] lg:pointer-events-auto lg:relative lg:col-span-5 lg:h-[82svh] lg:w-full">
          {/* Soft blue glow to lift the photo off the background */}
          <div className="absolute inset-x-[10%] bottom-[5%] top-[15%] rounded-full bg-azure/30 blur-[90px]" />
          <div data-hero-img className="relative h-full w-full overflow-hidden">
            {/*
              👉 YOUR PHOTO GOES HERE: public/images/profile.jpg
                 (Replace that file to change the headshot — keep the same name.)
                 For sharper Retina rendering, also add a 2x export at
                 public/images/profile@2x.jpg and add it to srcSet below.
            */}
            <img
              src="/images/profile.jpg"
              srcSet="/images/profile.jpg 842w"
              sizes="(min-width: 1024px) 40vw, 88vw"
              alt={`Portrait of ${profile.fullName}`}
              fetchPriority="high"
              className="h-full w-full object-cover object-top mix-blend-lighten brightness-[0.92] contrast-[1.08] saturate-[0.85]"
              style={{
                // Radial mask melts the white studio backdrop into the dark scene
                maskImage: 'radial-gradient(ellipse 62% 70% at 50% 42%, #000 45%, transparent 78%)',
                WebkitMaskImage: 'radial-gradient(ellipse 62% 70% at 50% 42%, #000 45%, transparent 78%)',
              }}
            />
            {/* Cinematic fade at the bottom + cool tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute inset-0 bg-azure/15 mix-blend-soft-light" />
          </div>
        </div>

        {/* Right-aligned descriptor + scroll cue (Dao-style) */}
        <div className="relative z-20 flex items-end justify-between gap-6 lg:absolute lg:bottom-14 lg:right-10 lg:flex-col lg:items-end">
          <p data-hero-fade className="max-w-xs text-sm leading-relaxed text-bone/80 lg:text-right">
            {profile.role}. Bridging polished frontends with backend AI & API integrations.
          </p>
          <button
            data-hero-fade
            onClick={() => scrollTo('about')}
            data-cursor="Go"
            className="flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-mist hover:text-bone"
          >
            Scroll to explore
            <span className="grid h-10 w-10 place-items-center rounded-full border border-bone/30">
              <ArrowDown size={16} className="animate-bob" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
