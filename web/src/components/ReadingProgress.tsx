import { useEffect, useRef, type RefObject } from "react";

/* Pages scroll inside their own container, not the window, so it
   watches that element. Decorative: the scrollbar already says the same. */
export default function ReadingProgress({
  container,
}: {
  container: RefObject<HTMLElement | null>;
}) {
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = container.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = el.scrollHeight - el.clientHeight;
      const progress = max > 0 ? Math.min(1, el.scrollTop / max) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    el.addEventListener("scroll", schedule, { passive: true });
    /* The page grows as images load and boxes open; keep the bar in step. */
    const resize = new ResizeObserver(schedule);
    resize.observe(el);
    Array.from(el.children).forEach((child) => resize.observe(child));
    return () => {
      el.removeEventListener("scroll", schedule);
      resize.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [container]);

  return (
    <div aria-hidden="true" className="pointer-events-none sticky top-0 z-50 h-0">
      <span
        ref={bar}
        style={{ transform: "scaleX(0)" }}
        className="bg-accent absolute inset-x-0 top-0 block h-[3px] origin-left"
      />
    </div>
  );
}
