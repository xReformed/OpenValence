"""Download the LibreTexts page of each section, using its source_url.

Usage: python tools/transcribe/fetch.py <corpus path> [...] [--force]

<corpus path> is a section file, a chapter folder, or a whole book folder.
Pages land in sources/raw/libretexts/<book path>/<NN>-<n>.html (git-ignored).
Pages already downloaded are skipped unless --force is given.
"""
import sys
import time
import urllib.request

from paths import find_sections, flags, front_value

args, opt = flags(sys.argv[1:], "force")
if not args:
    sys.exit(__doc__)

for section in find_sections(args):
    target = section.raw
    if target.exists() and not opt["force"]:
        print(f"{section.path.name:60} already downloaded")
        continue
    url = front_value(section.path, "source_url")
    if not url:
        print(f"{section.path.name:60} no source_url; skipped")
        continue
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=60) as response:
        html = response.read()
    if b"mt-content-container" not in html:
        sys.exit(f"{url} has no page content (mt-content-container); not saved")
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(html)
    print(f"{section.path.name:60} {len(html):,} bytes")
    time.sleep(1)  # be polite to LibreTexts
