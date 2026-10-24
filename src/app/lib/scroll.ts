import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

export function initLenis() {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  lenis.on('scroll', ScrollTrigger.update);
  const tick = (time: number) => lenis?.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  return () => {
    gsap.ticker.remove(tick);
    lenis?.destroy();
    lenis = null;
  };
}

export function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: id === 'home' ? 0 : -60 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

export { gsap, ScrollTrigger };
