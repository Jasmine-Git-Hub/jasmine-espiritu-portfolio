import { useEffect } from 'react';
import { initLenis, ScrollTrigger } from './lib/scroll';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  useEffect(() => {
    const destroy = initLenis();
    // Fonts change line breaks, so re-measure triggers once they load
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return destroy;
  }, []);

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="scanlines" aria-hidden />
      <div className="vignette" aria-hidden />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
