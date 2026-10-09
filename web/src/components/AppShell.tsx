import { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

/* A navigation that finishes within this many milliseconds shows no spinner,
   so quick page changes don't flash one. */
const SPINNER_DELAY = 200;

/**
 * h-dvh + min-h-0 is what lets ChatPage pin its composer to the bottom and
 * scroll only the transcript.
 */
export default function AppShell() {
  const navigation = useNavigation();
  const pending = navigation.state === "loading" ? navigation.location.key : null;
  const [slow, setSlow] = useState<string | null>(null);

  useEffect(() => {
    if (!pending) return;
    const timer = setTimeout(() => setSlow(pending), SPINNER_DELAY);
    return () => clearTimeout(timer);
  }, [pending]);

  const loading = pending !== null && slow === pending;

  return (
    <div className="font-michroma flex h-dvh flex-col overflow-hidden bg-white text-neutral-900">
      <div
        aria-busy={loading}
        className={`flex min-h-0 flex-1 flex-col transition-opacity duration-200 motion-reduce:transition-none ${
          loading ? "opacity-50" : ""
        }`}
      >
        <Outlet />
      </div>
      {loading && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
          <span className="rounded-full bg-white p-2.5 shadow-sm ring-1 ring-neutral-200">
            <Spinner className="h-11 w-11" />
          </span>
        </div>
      )}
    </div>
  );
}
