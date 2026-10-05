/* The CC BY licence requires attribution wherever source text is shown. */
export default function SiteFooter() {
  return (
    <footer
      className="mx-auto w-full max-w-352 border-t border-neutral-200 px-5 py-10 text-sm text-neutral-500 sm:px-8 lg:px-12"
    >
      Answers draw on{" "}
      <a
        href="https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)"
        className="underline underline-offset-4 hover:text-neutral-900"
        target="_blank"
        rel="noreferrer"
      >
        Chemistry 1e by OpenStax
      </a>
      , licensed CC BY 4.0. OpenValence is an educational tool; check anything
      safety-critical against a primary source.
    </footer>
  );
}
