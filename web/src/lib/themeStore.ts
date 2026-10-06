/* Light or dark mode. Until the reader picks one, the site follows the
   system setting (and keeps following it as it changes). */
export type Theme = "light" | "dark";
type Choice = Theme | "system";

/* Read before first paint by the inline script in index.html; keep in sync. */
const KEY = "chemia.theme";
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

/* localStorage throws outright in some contexts (blocked site data, private
   windows, quota) — never let that take the page down. */
function readChoice(): Choice {
  try {
    const value = localStorage.getItem(KEY);
    return value === "light" || value === "dark" ? value : "system";
  } catch {
    return "system";
  }
}

function writeChoice(choice: Choice) {
  try {
    if (choice === "system") localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, choice);
  } catch {
    // Best effort: the theme still applies for this visit.
  }
}

const systemTheme = (): Theme => (darkQuery.matches ? "dark" : "light");

let choice = readChoice();
let theme: Theme = choice === "system" ? systemTheme() : choice;
const listeners = new Set<() => void>();

function apply() {
  theme = choice === "system" ? systemTheme() : choice;
  document.documentElement.classList.toggle("dark", theme === "dark");
  listeners.forEach((listener) => listener());
}

darkQuery.addEventListener("change", () => {
  if (choice === "system") apply();
});
apply();

export function subscribeToTheme(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getTheme(): Theme {
  return theme;
}

/* Picking the theme the system already uses goes back to following the
   system, so toggling away and back doesn't pin it forever. */
export function setTheme(next: Theme) {
  choice = next === systemTheme() ? "system" : next;
  writeChoice(choice);
  apply();
}
