'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** The exact figure as it should finally read, e.g. "1,750". */
  value: string;
  durationMs?: number;
  className?: string;
}

/**
 * Counts up to a number once it scrolls into view. The real value is in the
 * server-rendered HTML and is what screen readers and search engines get; the
 * animated digits are decorative. With reduced motion, or without
 * JavaScript, the final value simply shows.
 */
export default function CountUp({ value, durationMs = 1600, className }: CountUpProps) {
  const target = Number(value.replace(/[^\d.]/g, ''));
  const decimals = (value.split('.')[1] ?? '').replace(/\D/g, '').length;
  const format = (n: number) =>
    n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !Number.isFinite(target)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          const eased = 1 - Math.pow(1 - t, 4);
          setDisplay(t < 1 ? format(target * eased) : null);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // format depends only on decimals, derived from value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, durationMs]);

  return (
    <span ref={ref} className={`relative inline-block tabular-nums ${className ?? ''}`}>
      {/* The real value: always in the page text and the accessibility tree, and it reserves the final width. It is only made transparent (never display:none or visibility:hidden) while the decorative count runs on top. */}
      <span className={display === null ? undefined : 'opacity-0'}>{value}</span>
      {display !== null && (
        <span aria-hidden="true" className="absolute inset-0">
          {display}
        </span>
      )}
    </span>
  );
}
