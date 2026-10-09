import { useId, useSyncExternalStore } from "react";

/* One orbit: an ellipse around the nucleus at (24, 24), as a path so an
   electron can follow it (animateMotion needs a path to ride on). */
const ORBIT = "M4 24a20 7.5 0 1 0 40 0a20 7.5 0 1 0-40 0";
const SECONDS_PER_ORBIT = 1.5;

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
function subscribeToMotionPreference(onChange: () => void) {
  const query = matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/* An atom whose electrons orbit the nucleus: the app's loading spinner. The
   electrons keep moving under reduced motion, only slower, since they're the
   sign that something is happening. SMIL animation ignores CSS media queries,
   so the preference is read here. */
export default function Spinner({
  className = "h-8 w-8",
  label = "Loading",
}: {
  className?: string;
  label?: string;
}) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const reduced = useSyncExternalStore(
    subscribeToMotionPreference,
    () => matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
  const seconds = SECONDS_PER_ORBIT * (reduced ? 3 : 1);

  return (
    <span role="status" className="text-accent-ink inline-flex">
      <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
        {[0, 60, 120].map((angle, i) => (
          <g key={angle} transform={`rotate(${angle} 24 24)`}>
            <path id={`${id}-orbit-${i}`} d={ORBIT} fill="none" stroke="currentColor" strokeOpacity={0.3} strokeWidth={1.5} />
            <circle r={2.75} fill="currentColor">
              <animateMotion dur={`${seconds}s`} begin={`${(-i * seconds) / 3}s`} repeatCount="indefinite">
                <mpath href={`#${id}-orbit-${i}`} />
              </animateMotion>
            </circle>
          </g>
        ))}
        <circle cx={24} cy={24} r={4} fill="currentColor" />
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  );
}

/* The whole screen while the first page loads (the router's HydrateFallback). */
export function PageSpinner() {
  return (
    <div className="flex h-dvh items-center justify-center bg-white">
      <Spinner className="h-14 w-14" />
    </div>
  );
}
