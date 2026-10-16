"""Download the LibreTexts page of each section, using its source_url, and its sub-pages.

Usage: python tools/transcribe/fetch.py <corpus path> [...] [--force]

<corpus path> is a section file, a chapter folder, or a whole book folder.
Pages land in sources/raw/libretexts/<book path>/<NN>-<n>.html (git-ignored).

Some books split a section into sub-pages (8.5 holds 8.5.1 and 8.5.2, which may
hold pages of their own). The section's sub-pages, in reading order, are listed
in <NN>-<n>.pages.json and downloaded to <NN>-<n>/; convert() in paths.py puts
them after the section's own text. Sub-pages that are problem sets, discussion
questions or reference lists are left out, as end-of-chapter pages are.

LibreTexts redirects a page with no text of its own to its home page. Such a page
is saved as an empty file, which converts to nothing.

Pages already downloaded are skipped unless --force is given.
"""
import json
import re
import sys
import time
import urllib.parse
import urllib.request

from paths import find_sections, flags, front_value

SITE = re.compile(r"^(https://[^/]+)/(.+)$")
LABEL = re.compile(r"^(\d+(?:\.\d+)+):\s")
# Sub-pages that aren't reading text: "7.1.9: Problems", "14.5.2: Homework Problems Chapter 12".
SKIP = re.compile(r"^(?:[\d.]+:\s*)?(problems|discussion questions|references|exercises"
                  r"|concept review questions|homework problems)\b", re.I)


def get(url):
    """(final url, body) after redirects."""
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=60) as response:
        body, final = response.read(), response.geturl()
    time.sleep(1)  # be polite to LibreTexts
    return final, body


def page(url):
    """The page's HTML, or b"" when LibreTexts redirects it elsewhere (no text of its own)."""
    final, html = get(url)
    if urllib.parse.unquote(final).rstrip("/") != urllib.parse.unquote(url).rstrip("/"):
        return b""
    if b"mt-content-container" not in html:
        sys.exit(f"{url} has no page content (mt-content-container); not saved")
    return html


def subpages(url):
    """[{"label", "title", "depth", "url", "file"}] for the page's sub-pages, depth first."""
    site, path = SITE.match(url).groups()
    key = urllib.parse.quote(urllib.parse.quote(urllib.parse.unquote(path), safe=""), safe="")
    _, body = get(f"{site}/@api/deki/pages/={key}/tree?dream.out.format=json")
    found = []

    def walk(node, depth, parent):
        children = node.get("subpages") or {}
        children = children.get("page", []) if isinstance(children, dict) else []
        for child in [children] if isinstance(children, dict) else children:
            title = " ".join(child["title"].split())
            if SKIP.match(title):
                continue
            label = LABEL.match(title)
            label = label[1] if label else parent
            found.append({"label": label, "title": title, "depth": depth,
                          "url": child["uri.ui"], "file": f"{len(found) + 1:03d}.html"})
            walk(child, depth + 1, label)

    walk(json.loads(body)["page"], 1, None)
    return found


if __name__ == "__main__":
    args, opt = flags(sys.argv[1:], "force")
    if not args:
        sys.exit(__doc__)

    for section in find_sections(args):
        name = f"{section.path.name:60}"
        url = front_value(section.path, "source_url")
        if not url:
            print(f"{name} no source_url; skipped")
            continue
        if section.raw.exists() and section.manifest.exists() and not opt["force"]:
            print(f"{name} already downloaded")
            continue
        if section.raw.exists() and not opt["force"]:
            html = section.raw.read_bytes()  # downloaded before sub-pages were fetched
        else:
            html = page(url)
            section.raw.parent.mkdir(parents=True, exist_ok=True)
            section.raw.write_bytes(html)
        pages = subpages(url)
        folder = section.raw.with_suffix("")
        for sub in pages:
            folder.mkdir(exist_ok=True)
            (folder / sub["file"]).write_bytes(page(sub["url"]))
        section.manifest.write_text(json.dumps(pages, indent=1, ensure_ascii=False) + "\n",
                                    encoding="utf8", newline="\n")
        empty = " (no text of its own)" if not html else ""
        print(f"{name} {len(html):,} bytes{empty}, {len(pages)} sub-page(s)")
