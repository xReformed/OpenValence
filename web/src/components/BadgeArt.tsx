import type { CSSProperties } from "react";
import type { Badge } from "../lib/badges";
import { LockIcon } from "./LandingIcons";

/* A badge's artwork: greyed out with a lock until earned. Badges with an
   effect (lib/badges.ts) get its animation from index.css: "intense" (golden
   rays and sparkles) or "nature" (leaves, fireflies and sunlight). For
   reduced motion they're drawn still. */

/* Where the sparkles sit around the badge, and when each one twinkles. */
const SPARKLES: CSSProperties[] = [
  { top: "2%", left: "8%", animationDelay: "0s" },
  { top: "10%", right: "2%", animationDelay: "0.45s" },
  { bottom: "18%", left: "-4%", animationDelay: "0.9s" },
  { bottom: "6%", right: "6%", animationDelay: "1.35s" },
  { top: "44%", right: "-6%", animationDelay: "0.7s", width: 10, height: 10 },
];

/* Leaves on the ring that revolves round the medal: evenly spaced on its
   circle, each angled along it and fluttering out of step. */
const RING_LEAVES: CSSProperties[] = [0, 60, 120, 180, 240, 300].map((angle, i) => {
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${50 + 50 * Math.sin(rad)}%`,
    top: `${50 - 50 * Math.cos(rad)}%`,
    rotate: `${angle}deg`,
    animationDelay: `${-0.4 * i}s`,
  };
});

/* Leaves drifting down past the medal, and fireflies rising: across, and when. */
const FALLING_LEAVES: CSSProperties[] = [
  { left: "18%", animationDelay: "0s, 0s" },
  { left: "70%", animationDelay: "-1.6s, -0.5s" },
  { left: "44%", animationDelay: "-3.2s, -1.1s" },
];
const FIREFLIES: CSSProperties[] = [
  { left: "6%", animationDelay: "0s, 0s" },
  { left: "88%", animationDelay: "-1.3s, -0.4s" },
  { left: "30%", animationDelay: "-2.6s, -0.9s" },
  { left: "62%", animationDelay: "-3.4s, -0.2s" },
];

function Lock() {
  return (
    <span className="absolute right-0 bottom-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white">
      <LockIcon className="h-4 w-4 text-neutral-500" />
    </span>
  );
}

export default function BadgeArt({
  src,
  earned,
  effect,
  className = "h-30 w-auto",
}: {
  src: string;
  earned: boolean;
  effect?: Badge["effect"];
  /** Sizes the image; the animation scales with it. */
  className?: string;
}) {
  if (!effect) {
    return (
      <span className="relative">
        <img
          src={src}
          alt=""
          className={`object-contain transition-[filter,opacity] duration-300 ${className} ${
            earned ? "" : "opacity-45 grayscale group-hover:opacity-70"
          }`}
        />
        {!earned && <Lock />}
      </span>
    );
  }

  const mask = `url("${src}")`;
  const maskStyle = { maskImage: mask, WebkitMaskImage: mask };

  if (effect === "nature") {
    return (
      <span className="relative">
        <span className={`badge-nature ${earned ? "" : "badge-nature--locked"}`}>
          <span aria-hidden="true" className="badge-nature__aura" />
          <span aria-hidden="true" className="badge-nature__shafts" />
          <span className="badge-nature__body">
            <img src={src} alt="" className={`badge-nature__img object-contain ${className}`} />
            <span aria-hidden="true" className="badge-nature__sun" style={maskStyle} />
          </span>
          <span aria-hidden="true" className="badge-nature__ring">
            {RING_LEAVES.map((style, i) => (
              <span key={i} className="badge-nature__leaf" style={style} />
            ))}
          </span>
          {FALLING_LEAVES.map((style, i) => (
            <span key={i} aria-hidden="true" className="badge-nature__leaf badge-nature__fall" style={style} />
          ))}
          {FIREFLIES.map((style, i) => (
            <span key={i} aria-hidden="true" className="badge-nature__firefly" style={style} />
          ))}
        </span>
        {!earned && <Lock />}
      </span>
    );
  }

  return (
    <span className="relative">
      <span className={`badge-intense ${earned ? "" : "badge-intense--locked"}`}>
        <span aria-hidden="true" className="badge-intense__rays" />
        <span className="badge-intense__body">
          <img src={src} alt="" className={`badge-intense__img object-contain ${className}`} />
          <span aria-hidden="true" className="badge-intense__shine" style={maskStyle} />
        </span>
        {SPARKLES.map((style, i) => (
          <span key={i} aria-hidden="true" className="badge-intense__sparkle" style={style} />
        ))}
      </span>
      {!earned && <Lock />}
    </span>
  );
}
