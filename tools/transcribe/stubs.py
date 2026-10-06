"""Create the section files for a LibreTexts book or chapter.

Usage: python tools/transcribe/stubs.py <libretexts url> <corpus book folder>
                                        [--book "Title"] [--author "Name"] [--license "CC BY 4.0"]

<libretexts url> is a book's page (all its chapters) or a single chapter's page.
Each numbered section gets a file containing only front matter:

    <corpus book folder>/<Chapter-Title>/<NN>-<n>-<Section-Title>.md

which fetch.py and fill.py then fill in. Existing files are never touched, so
running it again only adds what is missing. Front and back matter and the
end-of-chapter pages ("16.E: … (Exercises)", "13.7: End-of-Chapter Material")
are skipped.

The book title, author, and license are read from the LibreTexts page; pass
--book, --author, or --license to override them. Check the license before
transcribing, and record the book in sources/ATTRIBUTION.md.
"""
import html
import re
import sys
import time
import unicodedata
import urllib.request
from pathlib import Path

LICENSES = {
    "ccby": "CC BY", "ccbysa": "CC BY-SA", "ccbync": "CC BY-NC", "ccbyncsa": "CC BY-NC-SA",
    "ccbynd": "CC BY-ND", "ccbyncnd": "CC BY-NC-ND", "publicdomain": "Public Domain",
    "gnu": "GNU GPL", "gnufdl": "GNU FDL", "arr": "All Rights Reserved",
}
AUTHORS = {"anonymous": "Anonymous", "openstax": "OpenStax"}
CHAPTER = re.compile(r"^(\d+):\s*(.+)$")
SECTION = re.compile(r"^(\d+)\.(\d+):\s*(.+)$")


def option(name):
    if f"--{name}" in sys.argv:
        i = sys.argv.index(f"--{name}")
        if i + 1 < len(sys.argv):
            return sys.argv[i + 1]
        sys.exit(f"--{name} needs a value")
    return None


def fetch(url):
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=60) as response:
        page = response.read().decode("utf8")
    time.sleep(1)  # be polite to LibreTexts
    return page


def title_of(page):
    """'16: Organic Chemistry - Chemistry LibreTexts' -> '16: Organic Chemistry'."""
    raw = re.search(r"<title>(.*?)</title>", page, re.S)
    text = html.unescape(raw[1]).strip() if raw else ""
    return re.sub(r"\s+-\s+\w+ LibreTexts$", "", text)


def listing(page):
    """(link text, url) for every page linked from the content area."""
    start = page.find('class="mt-content-container"')
    end = page.find('<footer class="mt-content-footer"', start)
    links, seen = [], set()
    for href, text in re.findall(r'<a[^>]+href="(https://[^"#]+)"[^>]*>(.*?)</a>', page[start:end], re.S):
        text = " ".join(html.unescape(re.sub(r"<[^>]+>", "", text)).split())
        href = html.unescape(href)
        if text and href not in seen:
            seen.add(href)
            links.append((text, href))
    return links


def license_and_author(page):
    tags = html.unescape(page)
    kind = re.search(r"license:([a-z]+)", tags)
    version = re.search(r"licenseversion:(\d)(\d)", tags)
    author = re.search(r"authorname:([\w-]+)", tags)
    license_ = LICENSES.get(kind[1], kind[1]) if kind else None
    if license_ and version and license_ not in ("Public Domain", "All Rights Reserved"):
        license_ += f" {version[1]}.{version[2]}"
    name = author[1] if author else None
    return license_, (AUTHORS.get(name.lower(), name.replace("-", " ").title()) if name else None)


# Letters that Unicode decomposition leaves alone ("Brønsted" must become "Bronsted").
LETTERS = str.maketrans({"ø": "o", "Ø": "O", "æ": "ae", "Æ": "AE", "œ": "oe", "Œ": "OE",
                         "ß": "ss", "ł": "l", "Ł": "L", "đ": "d", "Đ": "D", "þ": "th", "Þ": "Th"})


def slug(text):
    """'Shifting Equilibria - Le Chatelier's Principle' -> 'Shifting-Equilibria-Le-Chateliers-Principle'."""
    text = unicodedata.normalize("NFKD", text.translate(LETTERS)).encode("ascii", "ignore").decode()
    text = text.replace("'", "")
    return re.sub(r"[^A-Za-z0-9]+", "-", text).strip("-")


def quoted(value):
    return '"' + value.replace("\\", "\\\\").replace('"', '\\"') + '"'


def main():
    args = [a for i, a in enumerate(sys.argv[1:], 1)
            if not a.startswith("--") and not sys.argv[i - 1].startswith("--")]
    if len(args) != 2:
        sys.exit(__doc__)
    url, book_dir = args[0].rstrip("/"), Path(args[1])

    page = fetch(url)
    links = listing(page)
    chapters = [(m, href) for text, href in links if (m := CHAPTER.match(text))]
    if chapters:  # a book page: read each chapter's page
        book_page = page
        chapter_pages = [(f"{m[1]}: {m[2]}", fetch(href)) for m, href in chapters]
    else:  # a chapter page: the book is the page above it
        book_page = fetch(url.rsplit("/", 1)[0])
        chapter_pages = [(title_of(page), page)]

    license_, author = license_and_author(book_page)
    book = option("book") or title_of(book_page)
    author = option("author") or author
    license_ = option("license") or license_
    if not (book and author and license_):
        sys.exit(f"couldn't read the book's title/author/license from the page "
                 f"(got {book!r}, {author!r}, {license_!r}); pass --book, --author, --license")
    print(f"{book} — {author}, {license_}")

    created = existing = 0
    for chapter_title, chapter_page in chapter_pages:
        heading = CHAPTER.match(chapter_title)
        if not heading:
            sys.exit(f"not a numbered chapter page: {chapter_title!r}")
        folder = book_dir / slug(heading[2])
        for text, href in listing(chapter_page):
            section = SECTION.match(text)
            if not section or section[1] != heading[1]:
                continue  # "16.E: … (Exercises)", or a link to another chapter
            if section[3].lower().startswith("end-of-chapter"):
                continue  # "13.7: End-of-Chapter Material" is numbered like a section
            path = folder / f"{int(section[1]):02d}-{int(section[2])}-{slug(section[3])}.md"
            if path.exists():
                existing += 1
                continue
            folder.mkdir(parents=True, exist_ok=True)
            fields = [("title", f"{section[1]}.{section[2]}: {section[3]}"), ("book", book),
                      ("chapter", chapter_title), ("source_url", href),
                      ("author", author), ("license", license_)]
            front = "\n".join(f"{key}: {quoted(value)}" for key, value in fields)
            path.write_text(f"---\n{front}\n---\n", encoding="utf8", newline="\n")
            created += 1
            print(f"  created {path.relative_to(book_dir)}")
    print(f"{created} created, {existing} already existed")


if __name__ == "__main__":
    main()
