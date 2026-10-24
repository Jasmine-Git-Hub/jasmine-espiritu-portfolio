import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../../data/portfolio';
import { scrollTo } from '../lib/scroll';
import { Magnetic } from './Magnetic';

export function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink/70 py-3 backdrop-blur-md' : 'py-5'}`}>
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 md:px-10">
        <button onClick={() => go('home')} className="font-display text-2xl tracking-wide" data-cursor="Top">
          JME<span className="text-azure">.</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => go(id)}
                className={`relative px-4 py-2 text-sm transition-colors ${active === id ? 'text-bone' : 'text-mist hover:text-bone'}`}
              >
                {label}
                {active === id && (
                  <motion.span layoutId="nav-dot" className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-azure" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Magnetic>
            {/* 👉 Put your CV at public/cv.pdf for this button to work */}
            <a
              href={profile.cv}
              download
              data-cursor="CV"
              className="flex items-center gap-2 rounded-full bg-bone px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-azure hover:text-white md:px-5 md:py-2.5"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
            </a>
          </Magnetic>
          <button onClick={() => setOpen(!open)} className="rounded-full border border-bone/20 p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-5 mt-3 rounded-2xl border border-bone/10 bg-ink-deep/95 p-4 backdrop-blur-lg lg:hidden"
          >
            {navLinks.map(({ id, label }, i) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  className={`flex w-full items-baseline gap-3 py-3 font-display text-3xl uppercase ${active === id ? 'text-bone' : 'text-mist'}`}
                >
                  <span className="font-mono text-xs text-azure">0{i + 1}</span>
                  {label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
