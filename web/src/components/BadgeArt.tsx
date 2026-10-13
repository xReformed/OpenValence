import type { CSSProperties } from "react";
import type { Badge } from "../lib/badges";
import { LockIcon } from "./LandingIcons";

/* A badge's artwork: greyed out with a lock until earned. Badges with an
   effect (lib/badges.ts) get its animation from index.css: "intense" (golden
   rays and sparkles), "nature" (leaves, fireflies and sunlight), "crystal"
   (a turning lattice, prismatic light and rising crystals), "quantum"
   (electrons orbiting, rippling waves and flickers of light), "spectrum"
   (spectral bars, a scanning beam, a falling drop and bubbles) or "helix" (a
   double helix turning round the medal, light and rising bubbles). For
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

/* The lattice turning round the medal: an atom at each corner of a hexagon,
   alternately gold and blue as in the artwork, pulsing one after another. The
   bonds join the same corners, in the ring's own 0–100 coordinates. */
const LATTICE_CORNERS = [0, 60, 120, 180, 240, 300].map((angle) => {
  const rad = (angle * Math.PI) / 180;
  return { x: 50 + 50 * Math.sin(rad), y: 50 - 50 * Math.cos(rad) };
});
const LATTICE_ATOMS = LATTICE_CORNERS.map(({ x, y }, i) => ({
  gold: i % 2 === 0,
  style: { left: `${x}%`, top: `${y}%`, animationDelay: `${-0.4 * i}s` } as CSSProperties,
}));
const LATTICE_BONDS = LATTICE_CORNERS.map(({ x, y }) => `${x},${y}`).join(" ");

/* Glints on the crystal tips and round the rim, and when each one twinkles. */
const GLINTS: CSSProperties[] = [
  { top: "1%", left: "44%", animationDelay: "0s" },
  { top: "24%", left: "30%", animationDelay: "0.55s", width: 10, height: 10 },
  { top: "14%", right: "18%", animationDelay: "1.1s" },
  { bottom: "30%", left: "-3%", animationDelay: "1.65s" },
  { top: "52%", right: "-4%", animationDelay: "0.8s", width: 10, height: 10 },
];

/* Small hexagonal crystals rising past the medal: across, and when. */
const SHARDS: CSSProperties[] = [
  { left: "10%", animationDelay: "0s, 0s" },
  { left: "84%", animationDelay: "-1.5s, -0.6s" },
  { left: "36%", animationDelay: "-3s, -1.2s" },
  { left: "62%", animationDelay: "-3.8s, -0.3s" },
];

/* Three electron orbits tilted 60° apart, as in the atom on the artwork, with
   their electrons starting a third of a turn apart. */
const ORBITS = [0, 60, 120].map((tilt, i) => ({
  tilt: { transform: `rotate(${tilt}deg)` } as CSSProperties,
  delay: { animationDelay: `${-1.2 * i}s` } as CSSProperties,
}));

/* Rings rippling out from behind the medal, half a cycle apart. */
const WAVES: CSSProperties[] = [{ animationDelay: "0s" }, { animationDelay: "-1.6s" }];

/* Flickers of light round the medal, and when each one shows. */
const FLICKERS: CSSProperties[] = [
  { top: "6%", left: "12%", animationDelay: "0s" },
  { top: "18%", right: "4%", animationDelay: "0.9s" },
  { bottom: "24%", left: "-2%", animationDelay: "1.7s" },
  { bottom: "8%", right: "10%", animationDelay: "0.5s" },
  { top: "46%", right: "-5%", animationDelay: "2.1s" },
];

/* The ring of spectral bars: one every 15°, each rising and falling out of
   step with its neighbours so the ring reads as a spectrum, not a wave. */
const SPECTRUM_BARS: { arm: CSSProperties; bar: CSSProperties }[] = Array.from({ length: 24 }, (_, i) => ({
  arm: { transform: `rotate(${i * 15}deg)` },
  bar: { animationDelay: `${-((i * 0.53) % 1.4).toFixed(2)}s` },
}));

/* Bubbles rising in the purple flask on the artwork's left. */
const BUBBLES: CSSProperties[] = [
  { top: "52%", left: "10%", animationDelay: "0s" },
  { top: "54%", left: "14%", animationDelay: "-0.8s" },
  { top: "51%", left: "17%", animationDelay: "-1.6s" },
];

/* The double helix: a base pair every 15° round the ring. Each pair's beads
   swing across its rung half a cycle apart, and each pair runs a little
   behind the last, so the strands twist round each other three times over
   the circle. */
const HELIX_PERIOD = 2.4;
const HELIX_PAIRS: { arm: CSSProperties; blue: CSSProperties; pink: CSSProperties }[] = Array.from(
  { length: 24 },
  (_, i) => {
    const phase = ((i * 3) / 24) * HELIX_PERIOD;
    return {
      arm: { transform: `rotate(${i * 15}deg)` },
      blue: { animationDelay: `${-phase}s` },
      pink: { animationDelay: `${-(phase + HELIX_PERIOD / 2)}s` },
    };
  },
);

/* Bubbles drifting up past the medal: across, and when. */
const HELIX_BUBBLES: CSSProperties[] = [
  { left: "8%", animationDelay: "0s" },
  { left: "86%", animationDelay: "-1.5s" },
  { left: "30%", animationDelay: "-2.9s", width: 5, height: 5 },
  { left: "66%", animationDelay: "-3.7s", width: 5, height: 5 },
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

  if (effect === "helix") {
    return (
      <span className="relative">
        <span className={`badge-helix ${earned ? "" : "badge-helix--locked"}`}>
          <span aria-hidden="true" className="badge-helix__aura" />
          <span className="badge-helix__body">
            <img src={src} alt="" className={`badge-helix__img object-contain ${className}`} />
            <span aria-hidden="true" className="badge-helix__sweep" style={maskStyle} />
          </span>
          <span aria-hidden="true" className="badge-helix__ring">
            {HELIX_PAIRS.map(({ arm, blue, pink }, i) => (
              <span key={i} className="badge-helix__arm" style={arm}>
                <span className="badge-helix__rung" style={blue} />
                <span className="badge-helix__bead badge-helix__bead--blue" style={blue} />
                <span className="badge-helix__bead badge-helix__bead--pink" style={pink} />
              </span>
            ))}
          </span>
          {HELIX_BUBBLES.map((style, i) => (
            <span key={i} aria-hidden="true" className="badge-helix__bubble" style={style} />
          ))}
        </span>
        {!earned && <Lock />}
      </span>
    );
  }

  if (effect === "spectrum") {
    return (
      <span className="relative">
        <span className={`badge-spectrum ${earned ? "" : "badge-spectrum--locked"}`}>
          <span aria-hidden="true" className="badge-spectrum__aura" />
          <span aria-hidden="true" className="badge-spectrum__ring">
            {SPECTRUM_BARS.map(({ arm, bar }, i) => (
              <span key={i} className="badge-spectrum__arm" style={arm}>
                <span className="badge-spectrum__bar" style={bar} />
              </span>
            ))}
          </span>
          <span className="badge-spectrum__body">
            <img src={src} alt="" className={`badge-spectrum__img object-contain ${className}`} />
            <span aria-hidden="true" className="badge-spectrum__scan" style={maskStyle} />
          </span>
          <span aria-hidden="true" className="badge-spectrum__drop" />
          {BUBBLES.map((style, i) => (
            <span key={i} aria-hidden="true" className="badge-spectrum__bubble" style={style} />
          ))}
        </span>
        {!earned && <Lock />}
      </span>
    );
  }

  if (effect === "quantum") {
    return (
      <span className="relative">
        <span className={`badge-quantum ${earned ? "" : "badge-quantum--locked"}`}>
          <span aria-hidden="true" className="badge-quantum__aura" />
          {WAVES.map((style, i) => (
            <span key={i} aria-hidden="true" className="badge-quantum__wave" style={style} />
          ))}
          {ORBITS.map(({ tilt }, i) => (
            <span key={i} aria-hidden="true" className="badge-quantum__orbit badge-quantum__orbit--back" style={tilt}>
              <svg className="badge-quantum__path" viewBox="0 0 100 100" preserveAspectRatio="none">
                <ellipse cx="50" cy="50" rx="50" ry="18" vectorEffect="non-scaling-stroke" />
              </svg>
            </span>
          ))}
          <span className="badge-quantum__body">
            <img src={src} alt="" className={`badge-quantum__img object-contain ${className}`} />
            <span aria-hidden="true" className="badge-quantum__sweep" style={maskStyle} />
          </span>
          {ORBITS.map(({ tilt, delay }, i) => (
            <span key={i} aria-hidden="true" className="badge-quantum__orbit badge-quantum__orbit--front" style={tilt}>
              <span className="badge-quantum__squash">
                <span className="badge-quantum__arm" style={delay}>
                  <span className="badge-quantum__electron" style={delay} />
                </span>
              </span>
            </span>
          ))}
          {FLICKERS.map((style, i) => (
            <span key={i} aria-hidden="true" className="badge-quantum__flicker" style={style} />
          ))}
        </span>
        {!earned && <Lock />}
      </span>
    );
  }

  if (effect === "crystal") {
    return (
      <span className="relative">
        <span className={`badge-crystal ${earned ? "" : "badge-crystal--locked"}`}>
          <span aria-hidden="true" className="badge-crystal__aura" />
          <span aria-hidden="true" className="badge-crystal__facets" />
          <span className="badge-crystal__body">
            <img src={src} alt="" className={`badge-crystal__img object-contain ${className}`} />
            <span aria-hidden="true" className="badge-crystal__prism" style={maskStyle} />
          </span>
          <span aria-hidden="true" className="badge-crystal__lattice">
            <svg className="badge-crystal__bonds" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points={LATTICE_BONDS} vectorEffect="non-scaling-stroke" />
            </svg>
            {LATTICE_ATOMS.map(({ gold, style }, i) => (
              <span
                key={i}
                className={`badge-crystal__atom ${gold ? "badge-crystal__atom--gold" : "badge-crystal__atom--blue"}`}
                style={style}
              />
            ))}
          </span>
          {GLINTS.map((style, i) => (
            <span key={i} aria-hidden="true" className="badge-crystal__glint" style={style} />
          ))}
          {SHARDS.map((style, i) => (
            <span key={i} aria-hidden="true" className="badge-crystal__shard" style={style} />
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
