import { useSyncExternalStore } from "react";
import { getTheme, setTheme, subscribeToTheme } from "../lib/themeStore";
import { MoonIcon, SunIcon } from "./LandingIcons";

/* Shows the theme you'd switch to, as most sites do: a moon in light mode. */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme);
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 ${className}`}
    >
      {theme === "dark" ? <SunIcon className="h-4.5 w-4.5" /> : <MoonIcon className="h-4.5 w-4.5" />}
    </button>
  );
}
