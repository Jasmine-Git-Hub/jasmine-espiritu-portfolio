import { useLayoutEffect, type RefObject } from 'react';
import SplitType from 'split-type';
import { gsap } from './scroll';

/**
 * Staggered scroll reveal. Any element inside `scope` with:
 *  - [data-split]  → split into lines/words, words slide up from a mask
 *  - [data-reveal] → fades & rises in
 *  - [data-img]    → clip-path wipe reveal
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    if (!scope.current) return;
    const splits: SplitType[] = [];
    const ctx = gsap.context(() => {
      scope.current!.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
        const split = new SplitType(el, { types: 'lines,words', lineClass: 'split-line' });
        splits.push(split);
        gsap.from(split.words, {
          yPercent: 110,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.04,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
      gsap.utils.toArray<HTMLElement>('[data-reveal]', scope.current).forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: Number(el.dataset.reveal) || 0,
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });
      gsap.utils.toArray<HTMLElement>('[data-img]', scope.current).forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(100% 0 0 0)', scale: 1.15 },
          {
            clipPath: 'inset(0% 0 0 0)',
            scale: 1,
            duration: 1.4,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          },
        );
      });
    }, scope);
    return () => {
      ctx.revert();
      splits.forEach((s) => s.revert());
    };
  }, [scope]);
}
