import { prefersReducedMotion } from "../hooks/useReveal";

export function roadmapCardClass(selected: boolean) {
  return `card-shine group relative isolate flex h-full min-h-60 w-full flex-col justify-between overflow-hidden rounded-2xl border bg-white p-7 text-left transition-[border-color,box-shadow,translate] duration-200 hover:-translate-y-0.5 ${
    selected ? "border-neutral-900 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.35)]" : "border-neutral-200 hover:border-neutral-400"
  }`;
}

export function scrollIntoViewSoftly(element: HTMLElement | null) {
  element?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "nearest" });
}
