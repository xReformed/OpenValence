import { useEffect, useRef, useState } from "react";

/** Read once on mount; the landing page doesn't need to react to a live change. */
export function prefersReducedMotion(): boolean {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

/**
 * True once the element has scrolled into view, then stays true. Works inside
 * the landing page's own scroll container: IntersectionObserver clips against
 * scrolling ancestors even when the root is the viewport.
 */
export function useReveal<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(prefersReducedMotion);

  useEffect(() => {
    const element = ref.current;
    if (!element || shown) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [shown, threshold]);

  return [ref, shown] as const;
}
