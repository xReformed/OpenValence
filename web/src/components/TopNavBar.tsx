import { useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, UserIcon, ValenceMark } from "./LandingIcons";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Topics", href: "/#topics" },
  { label: "Sources", href: "/#sources" },
  { label: "Roadmap", href: "/roadmap" },
];

export default function TopNavBar() {
  /* Below md the links don't fit beside the logo, so they fold into a menu. */
  /* The menu remembers which location it was opened on, so navigating closes
     it without an effect. */
  const location = useLocation();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === location.key;
  const setOpen = (value: boolean) => setOpenOn(value ? location.key : null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenOn(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative mx-auto flex w-full max-w-352 shrink-0 items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
      <Link to="/" className="flex items-center gap-2 text-lg tracking-tight">
        <ValenceMark className="text-accent-ink h-5 w-5" />
        OpenValence
      </Link>

      <div className="flex items-center gap-8">
        <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className="transition-colors hover:text-neutral-900"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 md:hidden"
          >
            <MenuIcon className="h-4.5 w-4.5" />
          </button>
          <Link
            to="/chat"
            className="rounded-lg bg-neutral-900 px-4 py-2.5 text-sm text-white transition-colors hover:bg-neutral-700"
          >
            {/* The full label doesn't fit beside the icons on a phone. */}
            <span className="sm:hidden">Ask</span>
            <span className="hidden sm:inline">Ask a question</span>
          </Link>
          <Link
            to="/profile"
            aria-label="Your profile"
            title="Your profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-neutral-400 hover:text-neutral-900"
          >
            <UserIcon className="h-4.5 w-4.5" />
          </Link>
        </div>
      </div>

      {open && (
        <nav
          id={menuId}
          aria-label="Site"
          className="absolute inset-x-5 top-full z-20 -mt-2 flex flex-col rounded-xl border border-neutral-200 bg-white p-2 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.25)] sm:inset-x-8 md:hidden"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
