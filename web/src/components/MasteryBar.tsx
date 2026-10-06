import { masteryLevel } from "../lib/masteryStore";

/* Branches without a textbook have nothing to practise yet, so their bar is
   an empty track rather than a misleading 0%. */
export default function MasteryBar({
  score,
  available,
  className = "",
}: {
  score: number;
  available: boolean;
  className?: string;
}) {
  const percent = Math.round(score * 100);
  return (
    <span className={`relative block ${className}`}>
      <span className="flex items-baseline justify-between text-xs">
        <span className="text-neutral-500">Mastery</span>
        <span className={available ? "text-neutral-700" : "text-neutral-400"}>
          {available ? `${masteryLevel(score)} · ${percent}%` : "Not available yet"}
        </span>
      </span>
      <span
        role="progressbar"
        aria-label="Mastery"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={available ? percent : 0}
        aria-valuetext={available ? `${masteryLevel(score)}, ${percent}%` : "Not available yet"}
        className={`mt-2 block h-1.5 overflow-hidden rounded-full ${
          available ? "bg-neutral-100" : "bg-neutral-100/60"
        }`}
      >
        <span
          className="bg-accent block h-full rounded-full transition-[width] duration-700 ease-out motion-reduce:transition-none"
          style={{ width: `${available ? percent : 0}%` }}
        />
      </span>
    </span>
  );
}
