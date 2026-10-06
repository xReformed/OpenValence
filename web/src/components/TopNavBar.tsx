import { Link } from "react-router-dom";
import { ValenceMark } from "./LandingIcons";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Topics", href: "/#topics" },
  { label: "Sources", href: "/#sources" },
  { label: "Roadmap", href: "/roadmap" },
];

export default function TopNavBar() {
  return (
    <header className="mx-auto flex w-full max-w-352 shrink-0 items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
      <Link to="/" className="flex items-center gap-2 text-lg tracking-tight">
        <ValenceMark className="h-5 w-5" />
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
          <Link
            to="/chat"
            className="rounded-lg bg-neutral-900 px-4 py-2.5 text-sm text-white transition-colors hover:bg-neutral-700"
          >
            Ask a question
          </Link>
        </div>
      </div>
    </header>
  );
}
