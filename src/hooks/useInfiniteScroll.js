import { useEffect } from "react";

/**
 * @param {boolean} enabled - Whether infinite scroll is enabled
 * @param {function} onBottom - Callback when user scrolls near bottom
 */
export default function useInfiniteScroll(enabled, onBottom) {
  useEffect(() => {
    if (!enabled) return;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const bottom = document.documentElement.offsetHeight - 120;

        if (scrollPosition >= bottom) {
          onBottom();
        }

        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled, onBottom]);
}