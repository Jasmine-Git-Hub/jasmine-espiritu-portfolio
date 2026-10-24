import { useEffect, useRef, useState } from 'react';

/** Dot + lagging ring. Elements with [data-cursor="Label"] expand the ring and show the label. */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    document.documentElement.classList.add('has-cursor');
    const pos = { x: -100, y: -100 };
    const lag = { x: -100, y: -100 };
    let raf = 0;

    const move = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    };
    const over = (e: PointerEvent) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor], a, button');
      setLabel(t ? t.dataset.cursor ?? '' : null);
    };
    const loop = () => {
      lag.x += (pos.x - lag.x) * 0.16;
      lag.y += (pos.y - lag.y) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${lag.x}px, ${lag.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', over);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      document.documentElement.classList.remove('has-cursor');
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className={`cursor-ring ${label !== null ? 'is-hover' : ''}`}>
        {label}
      </div>
    </>
  );
}
