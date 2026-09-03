import { useState } from "react";

export default function CookieNotice() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-20 w-[min(36rem,calc(100vw-2rem))] -translate-x-1/2 rounded-xl border border-neutral-200 bg-white/90 px-5 py-4 shadow-sm backdrop-blur-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.6rem] leading-relaxed text-neutral-500">
          We use essential cookies to run Chemia. Accept to allow analytics too
          &mdash; you can change this any time.
        </p>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="rounded-md border border-neutral-200 px-3 py-1.5 text-[0.6rem] text-neutral-600 transition-colors hover:border-neutral-400 hover:text-neutral-900"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="bg-accent rounded-md px-3 py-1.5 text-[0.6rem] text-neutral-900 transition-opacity hover:opacity-80"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
