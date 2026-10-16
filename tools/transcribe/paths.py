"""Where things live, shared by the transcription scripts.

Every script takes any mix of corpus paths: a section file, a chapter folder, a
whole book folder, or a glob. A section file is

    sources/<…>/<book>/<Chapter-Title>/<NN>-<n>-<Section-Title>.md

(stubs.py creates them in that layout). Nothing here is specific to one book.
"""
import glob
import json
import os
import re
import subprocess
import sys
from pathlib import Path
from typing import NamedTuple

HERE = Path(__file__).resolve().parent
REPO = HERE.parents[1]
SOURCES = REPO / "sources"
# Downloaded LibreTexts pages, one folder per book. Git-ignored (sources/raw/),
# re-downloadable with fetch.py.
RAW = SOURCES / "raw" / "libretexts"

SECTION_FILE = re.compile(r"^(\d+)-(\d+)-.+\.md$")


class Section(NamedTuple):
    path: Path
    chapter: int
    number: int

    @property
    def label(self):
        """"16.3": what the page calls the section (its \\PageIndex numbers use it)."""
        return f"{self.chapter}.{self.number}"

    @property
    def book(self):
        return self.path.parent.parent

    @property
    def raw(self):
        """The downloaded page: sources/raw/libretexts/<book path>/<NN>-<n>.html."""
        try:
            book = self.book.relative_to(SOURCES)
        except ValueError:
            book = Path(self.book.name)
        return RAW / book / f"{self.chapter:02d}-{self.number}.html"

    @property
    def manifest(self):
        """The section's sub-pages, in reading order: <NN>-<n>.pages.json beside
        its page, written by fetch.py. Their pages are kept in <NN>-<n>/."""
        return self.raw.with_suffix(".pages.json")

    def subpages(self):
        """[{"label", "title", "depth", "url", "file"}] for each sub-page, or []."""
        if not self.manifest.exists():
            return []
        return json.loads(self.manifest.read_text(encoding="utf8"))


def find_sections(args):
    """Section files under the given files, folders, or globs, in reading order."""
    found = set()
    for arg in args:
        path = Path(arg)
        if path.is_dir():
            candidates = path.rglob("*.md")
        elif path.is_file():
            candidates = [path]
        else:
            candidates = map(Path, glob.glob(arg, recursive=True))
        for candidate in candidates:
            candidate = candidate.resolve()
            match = SECTION_FILE.match(candidate.name)
            if match and RAW not in candidate.parents:
                found.add(Section(candidate, int(match[1]), int(match[2])))
    if not found:
        sys.exit(f"no section files (NN-n-Title.md) found in: {' '.join(args)}")
    return sorted(found, key=lambda s: (str(s.book), s.chapter, s.number))


def split_front(path):
    """Return (front matter including its --- fences, body)."""
    _, front, body = Path(path).read_text(encoding="utf8").split("---", 2)
    return f"---{front}---", body


def front_value(path, key):
    front, _ = split_front(path)
    for line in front.splitlines():
        if line.startswith(f"{key}:"):
            return line.split(":", 1)[1].strip().strip('"')
    return None


# A source error is corrected in the text, and the [Note: …] after the paragraph
# records what the book printed, in this form (one or more per note):
#   [Note: corrected; the source prints "Section 1.8" where this reads "Section 1.7". …]
# A recorded string may itself contain quotes, so each one ends only where the
# sentence goes on: at the next pair, the end of the sentence, or the note's end.
CORRECTION = re.compile(r'the source prints "(.*?)" where this reads "(.*?)"(?=; the source prints |\. |\.?\]$)', re.S)


def corrections(note):
    """The (printed, corrected) pairs a note records."""
    return CORRECTION.findall(note)


def correct(paragraph, pairs):
    """Apply (printed, corrected) pairs to a paragraph as the converter wrote it."""
    for printed, fixed in pairs:
        paragraph = paragraph.replace(printed, fixed, 1)
    return paragraph


def as_printed(paragraph, pairs):
    """Undo (printed, corrected) pairs: the paragraph as the source printed it."""
    for printed, fixed in pairs:
        paragraph = paragraph.replace(fixed, printed, 1)
    return paragraph


def printed_paragraphs(body):
    """The body's text paragraphs as the source printed them: notes dropped, and
    each correction a note records undone. This is what lt2md.py produces."""
    out = []
    for paragraph in body.strip().split("\n\n") if body.strip() else []:
        if paragraph.startswith("[Note:"):
            if out:
                out[-1] = as_printed(out[-1], corrections(paragraph))
        else:
            out.append(paragraph)
    return out


def lt2md(page, label):
    """Run lt2md.py on one downloaded page. An empty file is a page with no text
    of its own (LibreTexts redirects those to its home page; see fetch.py)."""
    if page.stat().st_size == 0:
        return ""
    result = subprocess.run(
        [sys.executable, str(HERE / "lt2md.py"), str(page), label],
        capture_output=True, text=True, encoding="utf8",
        env={**os.environ, "PYTHONIOENCODING": "utf-8"},
    )
    if result.returncode:
        sys.exit(f"lt2md.py failed on {page}:\n{result.stderr}")
    return result.stdout.strip()


HEADING = re.compile(r"^(#+) ", re.M)


def demote(markdown, levels):
    """Push every heading down the given number of levels (at most to ######)."""
    return HEADING.sub(lambda m: "#" * min(len(m[1]) + levels, 6) + " ", markdown)


def has_text_below(pages, texts, i):
    """Whether any page nested under pages[i] (the run after it that is deeper) has text."""
    for page, text in zip(pages[i + 1:], texts[i + 1:]):
        if page["depth"] <= pages[i]["depth"]:
            return False
        if text:
            return True
    return False


def convert(section):
    """Run lt2md.py on the section's downloaded page; return its markdown.

    A section with sub-pages (a LibreTexts hub such as 8.5, with 8.5.1 and 8.5.2
    beneath it) gets each sub-page after its own text, under a heading with the
    sub-page's title, one level deeper per level of nesting: ## 8.5.1: …,
    ### 8.2.4.1: …. The sub-page's own headings move down to sit beneath it."""
    if not section.raw.exists():
        sys.exit(f"{section.raw} is missing; run fetch.py on {section.path.parent} first")
    parts = [lt2md(section.raw, section.label)]
    folder = section.raw.with_suffix("")
    pages = section.subpages()
    texts = [lt2md(folder / page["file"], page["label"]) for page in pages]
    for i, page in enumerate(pages):
        # A sub-page with no text, and none beneath it, is left out (LibreTexts has
        # some created and never written); its heading alone would be noise.
        if not texts[i] and not has_text_below(pages, texts, i):
            continue
        heading = "#" * min(page["depth"] + 1, 6) + " " + page["title"]
        parts += [heading, demote(texts[i], page["depth"])]
    return "\n\n".join(part for part in parts if part)


def flags(argv, *names):
    """Split argv into (paths, {flag: present})."""
    paths = [a for a in argv if not a.startswith("--")]
    unknown = [a for a in argv if a.startswith("--") and a[2:] not in names]
    if unknown:
        sys.exit(f"unknown option(s): {' '.join(unknown)}")
    return paths, {name: f"--{name}" in argv for name in names}
