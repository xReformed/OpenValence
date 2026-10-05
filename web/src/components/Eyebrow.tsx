import type { ReactNode } from "react";

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-accent-ink text-[0.7rem] tracking-[0.25em] uppercase">
      {children}
    </p>
  );
}
