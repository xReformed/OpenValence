import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

/**
 * Fades its children up a few pixels the first time they scroll into view.
 * Elements already on screen at load animate immediately, which is what gives
 * the hero its staggered entrance. Reduced-motion users get the final state.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, shown] = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
