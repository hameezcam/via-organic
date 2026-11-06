'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SELECTOR = '[data-reveal]:not([data-revealed]), [data-reveal-group]:not([data-revealed])';

/**
 * One shared IntersectionObserver for every scroll reveal on the page.
 * Elements opt in with data-reveal or data-reveal-group (see globals.css).
 * Each element is revealed once and then no longer observed, so scrolling
 * back up does not replay anything.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!('IntersectionObserver' in window)) {
      root.removeAttribute('data-reveal-ready');
      return;
    }
    (window as Window & { __revealStarted?: boolean }).__revealStarted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-revealed', '');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );

    const scan = () => document.querySelectorAll(SELECTOR).forEach((el) => observer.observe(el));
    scan();

    // Pick up content that streams in or mounts after navigation.
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

/**
 * Runs in <head> before first paint. Enables hiding of not-yet-revealed
 * content only when the browser can reveal it, and turns hiding off again if
 * the reveal script has not started within a few seconds (slow network or a
 * script error), so content is never left invisible.
 */
export const REVEAL_BOOTSTRAP = `(function(){try{var d=document.documentElement;if(!('IntersectionObserver' in window))return;d.setAttribute('data-reveal-ready','');setTimeout(function(){if(!window.__revealStarted)d.removeAttribute('data-reveal-ready')},3500)}catch(e){}})();`;
