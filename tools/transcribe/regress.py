"""Re-convert written sections and diff them against the files in the corpus.

Usage: python tools/transcribe/regress.py <corpus path> [...]

<corpus path> is a section file, a chapter folder, or a whole book folder. Run it
after changing lt2md.py: every converted section should come out "identical".
[Note: …] paragraphs are ignored. Sections that are still empty, or whose page
hasn't been downloaded, are skipped. Exits 1 if anything differs.
"""
import difflib
import sys

from paths import convert, find_sections, split_front

if len(sys.argv) < 2:
    sys.exit(__doc__)

clean = True
for section in find_sections(sys.argv[1:]):
    _, body = split_front(section.path)
    if not body.strip() or not section.raw.exists():
        continue
    old = [p for p in body.strip().split("\n\n") if not p.startswith("[Note:")]
    new = convert(section).split("\n\n")
    diff = [line for line in difflib.unified_diff(old, new, lineterm="", n=0)
            if line[:1] in "+-" and not line.startswith(("+++", "---"))]
    if diff:
        clean = False
        print(section.path.name)
        for line in diff[:8]:
            print("   ", line[:140].replace("\n", " / "))
    else:
        print(section.path.name, "identical")
sys.exit(0 if clean else 1)
