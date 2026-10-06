"""Convert downloaded pages and write them into the corpus.

Usage: python tools/transcribe/fill.py <corpus path> [...] [--preview] [--force]

<corpus path> is a section file, a chapter folder, or a whole book folder. Each
section's page (downloaded by fetch.py) is converted with lt2md.py and written
under the section's front matter.

  (default)  fill empty stubs; sections already up to date are left alone, and
             sections whose text would change are skipped and listed
  --force    also replace sections whose text would change (after a fix to
             lt2md.py). Sections that don't look like converter output, such
             as hand transcriptions, are never replaced; empty one first to
             re-transcribe it from scratch
  --preview  write each result to sources/raw/libretexts/<book>/<NN>-<n>.md
             instead, for review; the corpus is not touched

Transcription notes live in the corpus files themselves: add a "[Note: …]"
paragraph right after the paragraph it corrects. Whenever a section is
re-converted, its notes are carried over, each after the same paragraph as
before. If that paragraph's text changed, the note goes in the nearest matching
spot and is listed so its place can be checked.
"""
import difflib
import sys
from collections import defaultdict

from paths import convert, find_sections, flags, split_front

# Below this share of matching paragraphs, a section is not converter output.
SAME_SOURCE = 0.8


def is_note(paragraph):
    return paragraph.startswith("[Note:")


def paragraphs(text):
    return text.strip().split("\n\n") if text.strip() else []


def carry_notes(old_body, new_body):
    """Put old_body's notes into new_body. Returns (body, moved, similarity):
    moved lists the notes whose preceding paragraph changed."""
    text, notes = [], []  # notes: (index of the text paragraph before it, note)
    for paragraph in paragraphs(old_body):
        if is_note(paragraph):
            notes.append((len(text) - 1, paragraph))
        else:
            text.append(paragraph)
    new = paragraphs(new_body)
    matcher = difflib.SequenceMatcher(None, text, new, autojunk=False)
    place, exact = {}, {}
    for op, i1, i2, j1, j2 in matcher.get_opcodes():
        for i in range(i1, i2):
            if op == "equal":
                place[i], exact[i] = j1 + (i - i1), True
            elif op == "replace":
                place[i], exact[i] = min(j1 + (i - i1), j2 - 1), False
            else:  # "delete": the paragraph is gone; keep the note where it stood
                place[i], exact[i] = j1 - 1, False
    after, moved = defaultdict(list), []
    for i, note in notes:
        target = place[i] if i >= 0 else -1
        after[target].append(note)
        if i >= 0 and not exact[i]:
            moved.append(note)
    out = list(after[-1])
    for j, paragraph in enumerate(new):
        out.append(paragraph)
        out.extend(after[j])
    return "\n\n".join(out), moved, matcher.ratio() if text else 1.0


if __name__ == "__main__":
    args, opt = flags(sys.argv[1:], "force", "preview")
    if not args:
        sys.exit(__doc__)

    skipped = 0
    for section in find_sections(args):
        name = f"{section.path.name:60}"
        front, old = split_front(section.path)
        if not section.raw.exists():
            if old.strip():
                print(f"{name} left as is (no downloaded page)")
            else:
                print(f"{name} empty, but no downloaded page; run fetch.py on it first")
                skipped += 1
            continue
        body, moved, similarity = carry_notes(old, convert(section))

        if opt["preview"]:
            out = section.raw.with_suffix(".md")
            with open(out, "w", encoding="utf8", newline="\n") as f:
                f.write(body + "\n")
            print(f"{name} preview: {out}")
            continue
        if old.strip() == body:
            print(f"{name} unchanged")
            continue
        if old.strip():
            if similarity < SAME_SOURCE:
                print(f"{name} NOT replaced: only {similarity:.0%} matches the conversion, so it "
                      "isn't converter output (empty it first to re-transcribe it)")
                skipped += 1
                continue
            if not opt["force"]:
                print(f"{name} skipped: its text would change; rerun with --force to replace it")
                skipped += 1
                continue
        with open(section.path, "w", encoding="utf8", newline="\n") as f:
            f.write(front + "\n\n" + body + "\n")
        notes = sum(map(is_note, paragraphs(body)))
        print(f"{name} written, {len(body.splitlines())} lines, {notes} note(s)")
        for note in moved:
            print(f"    check the place of: {note[:100]}")
    sys.exit(1 if skipped else 0)
