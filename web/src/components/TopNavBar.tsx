import { Link } from "react-router-dom";
import DecryptedText from "./DecryptedText";

/* Only "Ask" has a destination so far; the rest are placeholders. */
const NAV_LINKS = [
  { label: "Ask", to: "/chat" },
  { label: "Sources", to: null },
  { label: "Compounds", to: null },
  { label: "Pricing", to: null },
];

export default function TopNavBar() {
  return (
    <header className="flex shrink-0 items-center justify-between px-6 py-5 sm:px-10">
      {/* Wordmark and nav travel together as one left-aligned cluster, so
          justify-between only has to push the actions to the right. */}
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-1.5 text-base">
          <DecryptedText
            text="Chemia"
            animateOn="load"
            sequential
            speed={55}
            className="text-neutral-900"
            encryptedClassName="text-neutral-300"
          />
          <span className="bg-accent mt-1 block h-2.5 w-2.5" />
        </Link>

        <nav className="hidden items-center gap-7 text-[0.6rem] text-neutral-500 md:flex">
          {NAV_LINKS.map(({ label, to }) =>
            to ? (
              <Link
                key={label}
                to={to}
                className="transition-colors hover:text-neutral-900"
              >
                {label}
              </Link>
            ) : (
              <span key={label} className="text-neutral-300">
                {label}
              </span>
            ),
          )}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="#"
          className="hidden text-[0.6rem] text-neutral-500 transition-colors hover:text-neutral-900 sm:block"
        >
          Docs&nbsp;&#8599;
        </a>
        <a
          href="#"
          className="hidden rounded-md border border-neutral-200 px-3.5 py-2 text-[0.6rem] transition-colors hover:border-neutral-400 sm:block"
        >
          See Demo
        </a>
        <a
          href="#"
          className="bg-accent rounded-md px-3.5 py-2 text-[0.6rem] transition-opacity hover:opacity-80"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
