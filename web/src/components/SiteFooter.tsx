/* The books' Creative Commons licences require attribution wherever source text is shown. */
export default function SiteFooter() {
  return (
    <footer
      className="mx-auto w-full max-w-352 border-t border-neutral-200 px-5 py-10 text-sm text-neutral-500 sm:px-8 lg:px-12"
    >
      Answers draw on{" "}
      <a
        href="https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Beginning_Chemistry_(Ball)"
        className="underline underline-offset-4 hover:text-neutral-900"
        target="_blank"
        rel="noreferrer"
      >
        Beginning Chemistry (Ball)
      </a>{" "}
      (CC BY-NC-SA 3.0) and{" "}
      <a
        href="https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_(OpenStax)"
        className="underline underline-offset-4 hover:text-neutral-900"
        target="_blank"
        rel="noreferrer"
      >
        Organic Chemistry by OpenStax
      </a>{" "}
      (CC BY-NC-SA 4.0), via LibreTexts. OpenValence is an educational tool; check anything
      safety-critical against a primary source.
    </footer>
  );
}
