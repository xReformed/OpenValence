"""Flag conversion leftovers in corpus markdown.

Usage: python tools/transcribe/scan.py <corpus path> [...]

<corpus path> is a section file, a chapter folder, a whole book folder, or a
glob. Exits 1 if anything is found.
"""
import re
import sys

from paths import find_sections

if len(sys.argv) < 2:
    sys.exit(__doc__)

PATTERNS = {
    # "\#" is a deliberate markdown escape ("# mol HCl" must not become a heading).
    "backslash (TeX command left over)": re.compile(r"\\(?!#)"),
    "brace": re.compile(r"[{}]"),
    "PageIndex": re.compile(r"PageIndex"),
    "doubled caret": re.compile(r"\^\^"),
    "caret with no exponent": re.compile(r"\^(?: |$)"),
    "space inside formula (H2 O)": re.compile(r"\b[A-Z][a-z]?\d+ [A-Z][a-z]?(?:\d|\b)(?![a-z])"),
    "lone punctuation line": re.compile(r"^\s*[.,;:]\s*$"),
}

found = 0
for section in find_sections(sys.argv[1:]):
    path = section.path
    for n, line in enumerate(open(path, encoding="utf8"), 1):
        if line.startswith(("title:", "source_url:")):
            continue  # front matter is copied, not converted
        # ^{…} is a deliberate superscript group (an exponent with parentheses).
        checked = re.sub(r"\^\{[^{}]*\}", "", line)
        for name, rx in PATTERNS.items():
            if rx.search(checked):
                found += 1
                print(f"{path.name}:{n}: {name}: {line.strip()[:110]}")
print(f"{found} finding(s)")
sys.exit(1 if found else 0)
