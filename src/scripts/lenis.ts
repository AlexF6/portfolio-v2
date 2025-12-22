// src/scripts/lenis.ts
import Lenis from "lenis";

export function initLenis() {
  if ((window as any).__lenis) return;

  const lenis = new Lenis({
    duration: 2,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
  });

  (window as any).__lenis = lenis;

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const refresh = () => lenis.resize();

  window.addEventListener("resize", refresh);
  document.addEventListener("astro:page-load", refresh);
  document.addEventListener("astro:after-swap", refresh);

  // --- Anchor smooth scroll (#hash) ---
  const bindAnchors = () => {
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      // evita duplicar listeners si se llama varias veces
      if (anchor.dataset.lenisBound === "true") return;
      anchor.dataset.lenisBound = "true";

      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");

        if (targetId && targetId !== "#") {
          lenis.scrollTo(targetId, {
            offset: 0,
            duration: 3.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      });
    });
  };

  // bind inicial + re-bind cuando Astro haga swaps
  bindAnchors();
  document.addEventListener("astro:page-load", bindAnchors);
  document.addEventListener("astro:after-swap", bindAnchors);
}
