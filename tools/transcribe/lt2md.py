"""Mechanical LibreTexts page -> corpus markdown body.

Usage: python lt2md.py <page.html> <section-number e.g. 8.2>
Prints the markdown body (no front matter) to stdout. Never rewrites text:
it only drops markup, converts entities/LaTeX to plain text, and formats
boxes the way the rest of sources/openstax does.
"""
import re
import sys
from html.parser import HTMLParser

SEC = sys.argv[2]

SYMBOLS = {
    "lambda": "λ", "nu": "ν", "times": "×", "Delta": "Δ", "delta": "δ", "mu": "μ",
    "pi": "π", "alpha": "α", "beta": "β", "gamma": "γ", "sigma": "σ", "theta": "θ",
    "ell": "ℓ", "cdot": "·", "rightarrow": "→", "leftarrow": "←", "to": "→",
    "rightleftharpoons": "⇌", "approx": "≈", "lt": "<", "gt": ">", "le": "≤",
    "leq": "≤", "ge": "≥", "geq": "≥", "neq": "≠", "degree": "°", "circ": "°",
    "pm": "±", "infty": "∞", "ldots": "…", "cdots": "…", "uparrow": "↑",
    "downarrow": "↓", "equiv": "≡", "longrightarrow": "⟶", "curvearrowright": "↷",
    "chi": "χ", "Pi": "Π", "phi": "φ", "rho": "ρ", "omega": "ω", "Omega": "Ω",
    "epsilon": "ε", "varepsilon": "ε", "eta": "η", "kappa": "κ", "tau": "τ",
    "Sigma": "Σ", "sum": "Σ", "Gamma": "Γ", "Lambda": "Λ", "psi": "ψ", "xi": "ξ",
    # The source types \prod (the product sign) for osmotic pressure; it means Π.
    "prod": "Π",
    "sim": "~", "log": "log", "ln": "ln", "exp": "exp",
    # layout-only commands: drop
    "left": "", "right": "", "nonumber": "", "displaystyle": "", "mathbf": "",
    "boldsymbol": "", "mathit": "", "cancel": "", "bcancel": "", "xcancel": "",
}


def brace_group(s, i):
    """s[i] == '{'. Return (contents, index after the closing brace)."""
    depth = 0
    for j in range(i, len(s)):
        if s[j] == "{":
            depth += 1
        elif s[j] == "}":
            depth -= 1
            if depth == 0:
                return s[i + 1:j], j + 1
    return s[i + 1:], len(s)


def wrap(part):
    # Braces stay (sub/superscripts are resolved later); they're ignored for the test.
    # Bare only for a single symbol (n^2, λ, mol) or a plain number; "18.0g" keeps parens.
    # Strikeout markers (\x0e…\x0f) don't count: a struck-out "mol" is still one symbol.
    simple = re.fullmatch(r"[A-Za-zℓλνΔ]+(?:\^[−\d]+)?|[\d.]+", re.sub("[{}\x0e\x0f]", "", part))
    return part if simple else f"({part})"


def expand_frac(s):
    while (k := s.find("\\frac")) >= 0:
        num, after = brace_group(s, s.index("{", k))
        den, end = brace_group(s, s.index("{", after))
        s = s[:k] + wrap(expand_frac(num)) + "/" + wrap(expand_frac(den)) + s[end:]
    return s


DOT_ABOVE, TWO_ABOVE, DOT_BELOW, TWO_BELOW = "\u0307", "\u0308", "\u0323", "\u0324"


def tex_arg(s, i):
    """Read one TeX argument at s[i:]: a {group} or a single character."""
    while i < len(s) and s[i] == " ":
        i += 1
    if i < len(s) and s[i] == "{":
        return brace_group(s, i)
    return s[i:i + 1], i + 1


def mark(text, combining):
    """Put a combining mark on the element symbol (first capital letter)."""
    m = re.search(r"[A-Z]", text) or re.search(r"\w", text)
    if not m:
        return text + combining
    return text[:m.end()] + combining + text[m.end():]


def lewis_dots(s):
    """Lewis dot diagrams: \\dot / \\ddot put dots above the symbol and
    \\underset{.}{X} / \\underset{. .}{X} put dots below; render them as
    combining marks so every dot in the source survives as text."""
    out, i = "", 0
    while i < len(s):
        m = re.match(r"\\(ddot|dot|underset)(?![A-Za-z])", s[i:])
        if not m:
            out += s[i]
            i += 1
            continue
        i += m.end()
        if m.group(1) == "underset":
            dots, i = tex_arg(s, i)
            body, i = tex_arg(s, i)
            if re.sub(r"\\[,;: ]|\s", "", dots).strip("."):
                # A word label under a species (\underset{acid}{H^+}), not dots.
                out += lewis_dots(body) + "\\; (" + dots + ")"
            else:
                out += mark(lewis_dots(body), TWO_BELOW if dots.count(".") >= 2 else DOT_BELOW)
        else:
            body, i = tex_arg(s, i)
            out += mark(lewis_dots(body), TWO_ABOVE if m.group(1) == "ddot" else DOT_ABOVE)
    return out


SUP = str.maketrans("0123456789-−+", "⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁻⁺")
SUB = str.maketrans("0123456789-−+", "₀₁₂₃₄₅₆₇₈₉₋₋₊")


def nuclide(base, sub, sup):
    """A nuclide's mass number (sup) and atomic number (sub) written before its
    symbol: ²³⁵₉₂U, ⁰₋₁e, as in the OpenStax nuclear chapter."""
    return sup.strip().translate(SUP) + sub.strip().translate(SUB) + base.strip()


# A superscript that needs no grouping: a number, word, or charge (10^−14, i^th,
# SO4^2−, P^*). Anything else is an expression and is grouped: e^(−0.693 t/t_1/2).
SIMPLE_SUP = re.compile(r"[+\-−–]?[\w.*′°\x00\x0e\x0f]*[+\-−–]?")


def group_sup(content):
    if SIMPLE_SUP.fullmatch(content.strip()):
        return content
    return ("{" + content + "}") if re.search(r"[()]", content) else ("(" + content + ")")


# _{92}^{235}\textrm{U}, ^{90}_{231}T, _{ }^{1}n, 5_{0}^{1}n: scripts written before
# a symbol (not after a letter or bracket, where they'd belong to what precedes).
NUCLIDE = re.compile(
    r"(?<![A-Za-z)\]}])"
    r"(?:_(?P<s1>\{[^{}]*\}|[−\-]?\d)\s*\^(?P<p1>\{\s*\d+\s*\}|\d)"
    r"|\^(?P<p2>\{\s*\d+\s*\}|\d)\s*_(?P<s2>\{[^{}]*\}|[−\-]?\d))"
    r"\s*(?:\\(?:textrm|mathrm|text)\s*)?(?P<b>\{\s*[A-Za-zαβγ][a-z]?\s*\}|[A-Za-zαβγ][a-z]?)"
)


def nuclide_match(m):
    sub = (m["s1"] or m["s2"]).strip("{} ")
    sup = (m["p1"] or m["p2"]).strip("{} ")
    symbol = m["b"].strip("{} ")
    before = m.string[m.start() - 1] if m.start() else ""
    lead = "\\;" if before.isdigit() or before == "?" else ""  # a coefficient: 5 ¹₀n (\; survives TeX whitespace removal)
    if re.fullmatch(r"[−\-]?\d*", sub):
        return lead + nuclide(symbol, sub, sup)
    # Not an atomic number but a label in that slot (a molar mass): ²³⁵U (235.0439)
    return lead + sup.translate(SUP) + symbol + "\\; (" + sub + ")"


def tex(s):
    s = s.replace("\xa0", " ")
    s = re.sub(r"\\PageIndex\{(\d+)([a-z]*)\}", lambda m: f"{SEC}.{m.group(1)}{m.group(2)}", s)
    # _{92}^{235}\textrm{U}, \ce{_0^1n}: prescripts on a symbol are a nuclide.
    s = NUCLIDE.sub(nuclide_match, s)
    s = lewis_dots(s)
    s = s.replace("\\dfrac", "\\frac").replace("\\tfrac", "\\frac").replace("\\%", "%")
    s = re.sub(r"\\label\{[^{}]*\}", "", s)  # equation labels are never displayed
    # \begin{align*} x + (−6) &= −1 \\ x &= +5 \end{align*}: drop the environment
    # and its alignment marks; the line breaks between steps are kept.
    s = re.sub(r"\\(?:begin|end)\{(?:align|aligned|eqnarray|gather|split)\*?\}", "", s)
    s = s.replace("&", "")
    s = re.sub(r"\\\\(?:\[[^\]]*\])?", "\x06", s)  # a line break between steps (\\[4pt] too); becomes a paragraph break
    # \sqrt{b^2-4ac} -> √(b^2−4ac); a single token needs no parentheses (√2).
    while (k := s.find("\\sqrt")) >= 0 and "{" in s[k:]:
        body, end = tex_arg(s, k + len("\\sqrt"))
        s = s[:k] + ("√" + body if re.fullmatch(r"\w+", body) else "√(" + body + ")") + s[end:]
    # \overset{100\%}{\rightarrow}: a label printed above an arrow -> "→ (100%)".
    while (k := s.find("\\overset")) >= 0 and "{" in s[k:]:
        over, after = tex_arg(s, k + len("\\overset"))
        base, end = tex_arg(s, after)
        s = s[:k] + base + "\\; (" + over + ")\\; " + s[end:]
    # \cancel{g} strikes a unit out to show it cancelling; the text refers to
    # "the strikeouts", so keep them, as markdown strikethrough (~~g~~).
    while (k := s.find("\\cancel")) >= 0 and "{" in s[k:]:
        body, end = brace_group(s, s.index("{", k))
        s = s[:k] + "\x0e" + body + "\x0f" + s[end:]
    # Text runs keep their spaces; everywhere else TeX ignores whitespace.
    keep = []

    def protect(m):
        text = re.sub(r"\\[,;: ]", " ", m.group(1))
        text = re.sub(r"\\([A-Za-z]+)", lambda c: SYMBOLS.get(c.group(1), "\\" + c.group(1)), text)
        keep.append(text)
        return f"\x00{len(keep) - 1}\x00"

    # mhchem \ce{H_2O}/\ce{H2O}: subscripts are implicit, so drop _ and braces.
    while (k := s.find("\\ce")) >= 0 and "{" in s[k:]:
        body, end = brace_group(s, s.index("{", k))
        body = re.sub(r"\s*(?:->|\\rightarrow)\s*", " → ", body)
        body = re.sub(r"\s*(?:<=>|\\rightleftharpoons)\s*", " ⇌ ", body)
        # \ce{NH^{+}4}: mhchem sets a digit after a charge as the formula's
        # subscript (NH₄⁺), so write it in the usual order: NH4^+.
        body = re.sub(r"\^\{([^{}]*)\}(\d+)", r"\2^{\1}", body)
        s = s[:k] + "\\text{" + body.replace("_", "").replace("{", "").replace("}", "") + "}" + s[end:]
    s = re.sub(r"\\(?:text|textrm|mathrm)\s*\{([^{}]*)\}", protect, s)
    s = re.sub(r"\\[,;: ]|\\quad|\\qquad", "\x04", s)  # explicit TeX spaces survive
    s = re.sub(r"\\([A-Za-z]+)", lambda m: SYMBOLS.get(m.group(1), "\\" + m.group(1)) + "\x01", s)
    s = re.sub(r"\s+", "", s).replace("\x01", "")
    # Three or more explicit spaces separate columns (atom vs. ion): keep a gap.
    s = re.sub("\x04+", lambda m: "\x05" if len(m.group()) >= 3 else " ", s)
    s = expand_frac(s)
    s = s.replace("-", "−")
    # Signs inside a superscript (A^{2+}, e^-) are charges, not operators:
    # hide them from the operator spacing below, restore at the end.
    sign = lambda t: t.replace("+", "\x02").replace("−", "\x03")
    # An exponent that is an expression rather than a number, word, or charge
    # is grouped so it can't be misread: e^{−0.693t/t_{1/2}} -> e^(−0.693 t/t_1/2).
    # The site reads ^(…) and ^{…} as superscripts but can't nest either, so an
    # exponent with parentheses of its own keeps braces (\x11 \x12 until the end).
    k = 0
    while (k := s.find("^{", k)) >= 0:
        body, end = brace_group(s, k + 1)
        flat = re.sub(r"[{}]", "", body)
        if not SIMPLE_SUP.fullmatch(flat):
            left, right = ("\x11", "\x12") if re.search(r"[()]", flat) else ("(", ")")
            s = s[:k] + "^" + left + body + right + s[end:]
        k += 1
    # A word superscript runs into the next word in TeX source (i^{th}component).
    s = re.sub(r"\^\{([^{}]*[A-Za-z][^{}]*)\}(?=[A-Za-z\x00])", lambda m: "^" + sign(m.group(1)) + " ", s)
    s = re.sub(r"\^\{([^{}]*)\}", lambda m: "^" + sign(m.group(1)), s)
    s = re.sub(r"\^([+−])", lambda m: "^" + sign(m.group(1)), s)
    # Subscripts, innermost first (\chi_{C_{10}H_{8}}): digits and single
    # characters join the formula (C10H8); a word subscript keeps "_" and is
    # spaced off from what follows (χ_solv P_solv, not χ_solvP_solv).
    # \x10 stands in for a kept "_" so later passes don't re-read it.
    previous = None
    while previous != s:
        previous = s
        s = re.sub(r"_\{(\d+)\}", r"\1", s)
        s = re.sub(r"_\{(\w)\}|_(\w)", lambda m: m.group(1) or m.group(2), s)
        s = re.sub(r"_\{([^{}]*)\}(?=[A-Za-zΑ-ω])", "\x10\\1 ", s)
        s = re.sub(r"_\{([^{}]*)\}", "\x10\\1", s)
    s = s.replace("\x10", "_")
    s = s.replace("{", "").replace("}", "")
    s = re.sub(r"\s*([=×<>≤≥→⟶⇌⇄↑↓≡+])\s*", r" \1 ", s)
    # Between carbon groups "=" is a double bond, not an equation: CH2=CH2.
    s = re.sub(r"\b(C|CH|CH2) = (?=(?:CH2|CH|C)(?![a-z]))", r"\1=", s)
    # A sign, not an addition: x = +5, (+2), or a leading +3.
    s = re.sub(r"(=|\(|^) *\+ +(?=[\d.])", lambda m: (m.group(1) + " " if m.group(1) == "=" else m.group(1)) + "+", s)
    s = re.sub(r"(?<=[\w)])−(?=[\w(])", " − ", s)
    s = re.sub(r",(?=[^\d\s])", ", ", s)
    s = s.replace("\x02", "+").replace("\x03", "−")
    for _ in range(2):  # electron configurations: 4s^23d^6 -> 4s^2 3d^6
        s = re.sub(r"(\d[spdfg])\^(\d+?)(?=\d[spdfg])", r"\1^\2 ", s)
    s = re.sub(r"(\^−?[\d.]+)(?=[A-Za-z])", r"\1 ", s)
    # number then unit (109,700cm -> 109,700 cm), but not orbital labels (3s, 4d)
    # and not formulas: a digit before a capital is a subscript or coefficient (H2O, 2H2)
    # and not algebra: a run of variables (2x, 0.00088x, 4ac) stays attached.
    # Nor electrons: 3e^−, not 3 e^−.
    s = re.sub(r"(\d)(?=[a-z])(?![spdf](?:\^|\s|$|[)\]\x05])|e\^)(?![abcxy]+(?![a-z]))", r"\1 ", s)
    s = re.sub(r"(\d)(?=\x0e)", r"\1 ", s)  # 45.7 ~~g~~, not 45.7~~g~~
    s = s.replace("\x0e", "~~").replace("\x0f", "~~")
    s = re.sub("\x00(\\d+)\x00", lambda m: keep[int(m.group(1))], s)
    s = re.sub(r" +", " ", s)
    s = re.sub(r" \^", "^", s)  # \mathbf{Mg\,}^{2+} -> Mg^2+
    s = s.replace("\x11", "{").replace("\x12", "}")
    return re.sub(r" ?\x05 ?", "\x05", s).strip()  # gap is expanded at the very end


def inline_math(s):
    # Source typo: "\(\ce{C10H8}\ is" — the closing "\)" typed as "\ ".
    s = re.sub(r"\\\(\\ce\{([^{}]*)\}\\ (?!\))", r"\(\\ce{\1}\) ", s)
    # A cross-reference in running text to an equation label; show the label.
    s = re.sub(r"\\ref\{([^{}]*)\}", r"(\1)", s)
    s = re.sub(r"\\\[(.*?)\\\]", lambda m: tex(m.group(1)), s, flags=re.S)
    return re.sub(r"\\\((.*?)\\\)", lambda m: tex(m.group(1)), s, flags=re.S)


FILENAME = re.compile(r"\w[\w .,()+-]*\.(?:jpe?g|png|gif|svg|webp)", re.I)  # "The Actions of Buffers.png", "2,4-dimethyl-3-heptene .png"

BOX_END = "\x07"  # where an Example box closed


def mark_example_ends(paragraphs):
    """An Example normally runs to its Exercise or the next heading, which the
    site can see. Where an Example has no Exercise and the book's prose follows
    its box (16.5.1), say where it ends; the comment isn't rendered. Box
    boundaries alone can't be trusted: some pages close an Example's box
    mid-solution (13.5.1) or give other boxes the example class, so the end is
    kept only when the box closed an Example (by its heading) that has no
    Exercise of its own."""
    out = []
    for i, p in enumerate(paragraphs):
        if p != BOX_END:
            out.append(p)
            continue
        before = [q for q in paragraphs[:i] if q.startswith("#")]
        after = [q for q in paragraphs[i + 1:] if q != BOX_END]
        next_box = next((q for q in after if q.startswith("### ")), "")
        if (
            before and before[-1].startswith("### Example")
            and after and not after[0].startswith("#")
            and not next_box.startswith("### Exercise")
        ):
            out.append("<!-- end of example -->")
    return out


BLOCKS = ("p", "h2", "h3", "h4", "h5", "h6", "li", "figcaption", "div", "section",
          "ul", "ol", "caption", "dt", "dd")


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out, self.buf, self.stack = [], "", []
        self.alt = None
        self.rows = self.row = self.cell = None
        self.table_caption = None
        self.spans, self.cell_rowspan, self.cell_colspan = {}, 1, 1
        self.caption_at = None
        self.lists = []
        self.prev_lettered = False
        self.in_figure = False
        self.p_legend = False
        self.h_legend = False
        self.boxes = []
        self.skip_at = None  # stack depth of a MathJax copy being skipped
        self.pending = None  # an open list item's marker, waiting for its first text
        self.mathml_read = False  # this equation's bare MathML has been read
        self.mms = None  # an <mmultiscripts> being collected
        self.sup_at = None  # where the open <sup>'s text starts: ("buf"|"cell", index)
        self.sub_at = None  # likewise for <sub>
        self.box_kind = {}  # box depth -> "Example" / "Exercise" (None for other boxes)

    def fill_spans(self):
        """Insert cells still covered by a rowspan from an earlier row."""
        while len(self.row) in self.spans:
            col = len(self.row)
            left, value = self.spans[col]
            self.row.append(value)
            if left <= 1:
                del self.spans[col]
            else:
                self.spans[col][0] = left - 1

    def peek(self):
        return re.sub(r"\s+", " ", inline_math(self.buf)).strip()

    def image_paragraph(self):
        if self.alt and self.alt.lower() not in ("alt", "image", "img"):
            # An image can be a list item's whole content: "a. [Image: …]".
            marker, self.pending = self.pending or "", None
            if FILENAME.fullmatch(self.alt):  # alt text is just the upload's file name
                self.out.append(marker + "[Image not described in source]")
            else:
                self.out.append(f"{marker}[Image: {self.alt}]")
        self.alt = None

    def text(self):
        t = re.sub(r"\s+", " ", inline_math(self.buf)).strip()
        self.buf = ""
        return t

    def flush(self, prefix=""):
        if t := self.text():
            # A list item's text can sit in a <div>/<p> or come before a nested
            # list; either way its first text carries the item's marker.
            if not prefix and self.pending is not None:
                prefix, self.pending = self.pending, None
            # "# mol HCl = …" means "number of"; unescaped it would be a heading.
            if not prefix and t.startswith("#"):
                t = "\\" + t
            self.out.append(prefix + t)

    def handle_starttag(self, tag, a):
        a = dict(a)
        # Some pages were saved with MathJax already rendered: an equation can
        # hold bare <semantics> MathML, a typeset copy (class "math"), and a
        # screen-reader copy. Never read the typeset copy; read the
        # screen-reader copy only if the equation had no bare MathML.
        classes = (a.get("class") or "").split()
        if "inlineequation" in classes:
            self.mathml_read = False
        if self.skip_at is None and (
            "math" in classes or ("MJX_Assistive_MathML" in classes and self.mathml_read)
        ):
            self.skip_at = len(self.stack)
        if self.skip_at is None and "mt-comment-datetime" in classes:
            self.skip_at = len(self.stack)  # a page comment's timestamp ("Nov 27, 2021, 2:38 PM")
        if self.skip_at is None and tag in ("annotation", "annotation-xml"):
            # MathML's machine-readable copy of the equation it annotates
            # (Organic Chemistry: "⇅." would otherwise come out "⇅.⇅.").
            self.skip_at = len(self.stack)
        if self.skip_at is None and tag in ("audio", "video"):
            # The text inside is the player's fallback ("Your browser does not
            # support the audio element."), not content: leave a placeholder.
            self.flush()
            self.out.append(f"[{tag.capitalize()} not described in source]")
            self.skip_at = len(self.stack)
        if self.skip_at is not None:
            self.stack.append(tag)
            return
        if tag == "semantics":
            self.mathml_read = True
        # <mmultiscripts>: a base, then (after <mprescripts/>) sub/sup pairs
        # written before it — a nuclide. Collect each child's text.
        if self.mms is not None:
            if len(self.stack) == self.mms["depth"] + 1:
                if tag == "mprescripts":
                    self.mms["pre_at"] = len(self.mms["parts"])
                else:
                    self.mms["parts"].append("")
            self.stack.append(tag)
            return
        if tag == "mmultiscripts":
            self.mms = {"depth": len(self.stack), "parts": [], "pre_at": None}
            self.stack.append(tag)
            return
        if tag in BLOCKS:
            self.flush()
        if tag == "sup":
            if self.cell is not None:
                self.cell += "^"
                self.sup_at = ("cell", len(self.cell))
            else:
                self.buf += "^"
                self.sup_at = ("buf", len(self.buf))
        elif tag == "sub":
            self.sub_at = ("cell", len(self.cell)) if self.cell is not None else ("buf", len(self.buf))
        elif tag == "figure":
            self.caption_at = None
            self.in_figure = True
        elif tag == "p":
            self.p_legend = "box-legend" in (a.get("class") or "")
        elif tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self.h_legend = "box-legend" in (a.get("class") or "")
        if tag in ("section", "div") and re.search(r"\bbox-(?!legend)\w", a.get("class") or ""):
            self.boxes.append(len(self.stack))  # inside an Example/Exercise/Objectives box
            kind = re.search(r"\bbox-(example|exercise)\b", a.get("class") or "")
            self.box_kind[len(self.stack)] = kind.group(1).capitalize() if kind else None
        elif tag in ("ol", "ul"):
            # Lettered lists keep their letters: answers refer to "Answer a".
            # An <ol start="2"> right after a lettered list continues it.
            start = int(a["start"]) - 1 if (a.get("start") or "").isdigit() else 0
            if tag == "ul":
                kind = "bullet"
            elif "lower-alpha" in (a.get("style") or "") or (start > 0 and self.prev_lettered):
                kind = "alpha"
            else:
                kind = "decimal"
            self.lists.append([kind, start, len(self.out)])  # kind, items so far, where its output starts
        elif tag == "li" and self.lists:
            kind, n, _ = self.lists[-1]
            self.lists[-1][1] += 1
            marker = {"bullet": "- ", "alpha": f"{chr(ord('a') + n)}. "}.get(kind, f"{n + 1}. ")
            if self.pending is not None:
                # The parent item has no text of its own: "3. a. toward reactants".
                self.pending += marker
            else:
                self.pending = "   " * (len(self.lists) - 1) + marker  # nested: indented
        elif tag == "img":
            self.alt = (a.get("alt") or "").strip() or None
            if self.cell is not None:
                # An image as a table cell's content (Organic Chemistry Table 1.3.1
                # draws each configuration): keep its description in the cell.
                if self.alt and self.alt.lower() not in ("alt", "image", "img"):
                    self.cell += (" [Image not described in source] " if FILENAME.fullmatch(self.alt)
                                  else f" [Image: {self.alt}] ")
                self.alt = None
            elif not self.in_figure:
                # An image outside a <figure> has no caption; its alt text is
                # the only description of what it shows (often an equation).
                self.flush()
                self.image_paragraph()
        elif tag == "br":
            self.buf += " "
        elif tag == "table":
            self.rows, self.table_caption, self.spans = [], None, {}
        elif tag == "tr" and self.rows is not None:
            self.row = []
        elif tag in ("td", "th") and self.row is not None:
            self.fill_spans()
            self.cell = ""
            span = a.get("rowspan") or "1"
            self.cell_rowspan = int(span) if span.isdigit() else 1
            cols = a.get("colspan") or "1"
            self.cell_colspan = int(cols) if cols.isdigit() else 1
        self.stack.append(tag)

    def handle_endtag(self, tag):
        if self.stack:
            self.stack.pop()
        if self.skip_at is not None and len(self.stack) <= self.skip_at:
            self.skip_at = None
            return
        if self.skip_at is not None:
            return
        if self.mms is not None:
            if tag == "mmultiscripts" and len(self.stack) == self.mms["depth"]:
                parts, pre = self.mms["parts"], self.mms["pre_at"]
                self.mms = None
                base = parts[0].strip() if parts else ""
                post = parts[1:pre] if pre is not None else parts[1:]
                pre_pairs = parts[pre:] if pre is not None else []
                out = "".join(
                    nuclide("", pre_pairs[i], pre_pairs[i + 1] if i + 1 < len(pre_pairs) else "")
                    for i in range(0, len(pre_pairs), 2)
                ) + base
                for i in range(0, len(post), 2):  # ordinary sub/superscripts after the base
                    out += post[i].strip() + (f"^{post[i + 1].strip()}" if i + 1 < len(post) and post[i + 1].strip() else "")
                if self.cell is not None:
                    self.cell += out
                else:
                    self.buf += out
            return
        if tag == "sub" and self.sub_at is not None:
            # p<sub>x</sub> -> p_x, ΔH<sub>vap</sub> -> ΔH_vap: a letter subscript on a
            # letter is marked, the corpus's convention. Digit subscripts (H<sub>2</sub>O)
            # stay plain, and so does one after a digit ("3 − 2<sub>x</sub>" in a formula).
            where, i = self.sub_at
            self.sub_at = None
            text = self.cell if where == "cell" else self.buf
            if (
                text is not None and 0 < i <= len(text)
                and re.fullmatch(r"[A-Za-z]+|\?", text[i:])  # "?" is a blank: PH<sub>?</sub>
                and re.match(r"[A-Za-zΔ]", text[i - 1])
            ):
                text = text[:i] + "_" + text[i:]
                if where == "cell":
                    self.cell = text
                else:
                    self.buf = text
        if tag == "sup" and self.sup_at is not None:
            # e<sup>−(0.693)(60.0 s)/11.0 s</sup>: group an expression exponent.
            where, i = self.sup_at
            self.sup_at = None
            text = self.cell if where == "cell" else self.buf
            if text is not None and i <= len(text):
                text = text[:i] + group_sup(text[i:])
                if where == "cell":
                    self.cell = text
                else:
                    self.buf = text
        while self.boxes and len(self.stack) <= self.boxes[-1]:
            if self.box_kind.get(self.boxes.pop()):
                self.flush()
                self.out.append(BOX_END)  # kept only where an Example's prose ends (mark_example_ends)
        # Some pages set a box's title and its Solution/Answer as real headings
        # (<h2>Example</h2>, <h3>Solution</h3>), and some set an equation as a
        # heading (<h4>moles of solute = MV</h4>). Normalise them to the form
        # every other page uses; an equation is never a heading, and neither
        # is a table's title (<h3>Table 13.6.1 Acid Dissociation …</h3>).
        # A heading that is just "Answers"/"Solution" is a marker even outside a
        # box (end-of-section answers that spilled out of their box).
        if tag in ("h1", "h2", "h3", "h4") and (
            self.boxes
            or " = " in self.peek()
            or re.match(r"Table \d+\.\d+\.\d+", self.peek())
            or re.fullmatch(r"(Solutions?|Answers?)( [a-z0-9]+)?", self.peek())
        ):
            t = self.text()
            if self.h_legend:
                self.out.append(f"### {t}")
            elif re.fullmatch(r"(Solutions?|Answers?)( [a-z0-9]+)?", t):
                self.out.append(f"**{t}**")
            elif t:
                self.out.append(t)
            self.h_legend = False
            return
        if tag in ("td", "th") and self.row is not None:
            value = re.sub(r"\s+", " ", inline_math(self.cell or "")).strip()
            if self.cell_rowspan > 1:  # repeat this cell's column in the rows below
                self.spans[len(self.row)] = [self.cell_rowspan - 1, value]
            self.row.append(value)
            # A cell spanning columns keeps its text in the first one and leaves the
            # rest empty, so later cells stay under their headings (Organic Chemistry
            # Table 1.9.1: "Bond strength" over "(kJ/mol)" and "(kcal/mol)").
            self.row.extend([""] * (self.cell_colspan - 1))
            self.cell = None
        elif tag == "tr" and self.row is not None:
            self.fill_spans()
            self.rows.append(self.row)
            self.row = None
        elif tag == "caption":
            self.table_caption = self.text()
        elif tag == "table" and self.rows is not None:
            if self.table_caption:
                self.out.append(self.table_caption)
            if self.rows:
                w = max(len(r) for r in self.rows)
                rows = [r + [""] * (w - len(r)) for r in self.rows]
                lines = ["| " + " | ".join(rows[0]) + " |", "| " + " | ".join(["---"] * w) + " |"]
                lines += ["| " + " | ".join(r) + " |" for r in rows[1:]]
                self.out.append("\n".join(lines))
            self.rows = None
        elif tag == "h2":
            self.flush("## ")
        elif tag in ("h3", "h5"):
            kind = self.box_kind.get(self.boxes[-1]) if self.boxes else None
            if self.h_legend and kind and not self.peek():
                self.text()
                self.out.append(f"### {kind}")  # the source left the box's title blank
            else:
                self.flush("### ")
        elif tag == "h4":
            self.flush("#### ")
        elif tag in ("h6", "dt"):
            t = self.text()
            if re.fullmatch(r"(Solutions?|Answers?)( [a-z0-9]+)?:?", t):
                self.out.append(f"**{t.rstrip(':')}**")  # "Answer:" is a marker too
            elif t:
                self.out.append(t)  # e.g. a figure caption set as a heading
        elif tag == "li":
            self.flush()
            if self.pending is not None:
                # An empty numbered item still holds its place (answers to odd
                # exercises only: "1. …", "2.", "3. …"); other empty items go.
                if re.fullmatch(r"\s*\d+\. ", self.pending):
                    self.out.append(self.pending.rstrip())
                self.pending = None
        elif tag in ("ol", "ul"):
            self.flush()
            if self.lists:
                kind, _, began = self.lists.pop()
                self.prev_lettered = kind == "alpha"
                # Empty items hold later items' numbers; trailing ones hold nothing.
                while len(self.out) > began and re.fullmatch(r" *\d+\.", self.out[-1]):
                    self.out.pop()
        elif tag == "figcaption":
            t = self.text()
            # "Figure8.5.6:" / "Figure 8.4.1 Title" / "Figure 16.2.1 - Title" -> "Figure 8.4.1: Title"
            t = re.sub(r"^Figure\s*(\d+\.\d+\.\d+[a-z]?)\s*(?:[:\-–]\s*)?", r"Figure \1: ", t)
            if not t:
                pass
            elif self.caption_at is not None:
                # A second figcaption in the same figure is its description.
                self.out[self.caption_at] += "\n" + t
            else:
                self.out.append(t)
                self.caption_at = len(self.out) - 1
                if (
                    self.alt
                    and not FILENAME.fullmatch(self.alt)
                    and self.alt.lower() not in ("alt", "image", "img")
                ):
                    self.out[-1] += "\n" + self.alt
            self.alt = None
        elif tag == "figure":
            if self.caption_at is None:  # figure without a caption
                self.flush()
                self.image_paragraph()
            self.caption_at = None
            self.in_figure = False
        elif tag == "p" and self.p_legend:
            self.flush("### ")  # box title set as <p class="box-legend">
            self.p_legend = False
        elif tag == "p" and re.fullmatch(r"(Solutions?|Answers?)( [a-z0-9]+)?:?", self.peek()):
            self.out.append(f"**{self.text().rstrip(':')}**")  # "Answer:" is a marker too
        elif tag in BLOCKS:
            self.flush()

    def handle_data(self, d):
        if self.skip_at is not None or (self.stack and self.stack[-1] in ("script", "style")):
            return
        if self.mms is not None:
            if self.mms["parts"]:
                self.mms["parts"][-1] += d
            return
        if self.cell is not None:
            self.cell += d
        else:
            self.buf += d


html = open(sys.argv[1], encoding="utf8").read()
start = html.find('class="mt-content-container"')
end = html.find('<footer class="mt-content-footer"', start)
page = Page()
page.feed(html[html.find(">", start) + 1:end])
page.flush()

def repair_broken_image(paragraph):
    """Some source pages have a mangled <img> whose attributes spill out as
    text ('... BL acids. lt-chem-64081" style="width: …" src="…"'). Keep the
    surviving words of its description as an image placeholder."""
    m = re.match(r'^(.*?)\s*lt-chem-\d+"?\s+style="[^"]*".*\bsrc="[^"]*"', paragraph, re.S)
    return f"[Image: … {m.group(1).strip()}]" if m else paragraph


def line_breaks(paragraph):
    """TeX line breaks between steps: separate paragraphs, except inside a list
    item or table, where a paragraph break would split it ("x + (−6) = −1; x = +5")."""
    inline = re.match(r" *(?:- |[a-z]\. |\d+\. |\|)", paragraph)
    return re.sub(" ?\x06 ?", "; " if inline else "\n\n", paragraph)


text = "\n\n".join(
    line_breaks(repair_broken_image(p))
    for p in mark_example_ends([p for p in page.out if p == BOX_END or not re.fullmatch(r"[\s.,;:↵]*", p)])
)  # also drops stray "." / "↵" paragraphs
text = re.sub(" ?\x05 ?", "    ", text)  # column gaps from TeX spacing
text = re.sub(r"(?m)^(#{3,4} (?:Example|Exercise) [\d.]+):[ \t]*$", r"\1", text)  # "Example 13.5.1:"
# An alt attribute cut at an embedded "<span class=" spills the rest of the tag
# into the text: '[Image: Propanoic acid reacts with <span class=]' + 'KOH." style="…'.
text = re.sub(r'\[Image: ([^\]\n]*?)\s*<span class=\]\n\n([^"\n]*)"\s+style="[^\n]*', r"[Image: \1 \2]", text)
text = re.sub(r"(?m)^(#{3,4}) [.,;:]+\s*(?=(?:Example|Exercise)\b)", r"\1 ", text)  # ".Exercise 13.3.4"
text = re.sub(r"(?m)[ \t]+$", "", text)
text = re.sub(r"\^\s+", "^", text)
text = re.sub(r"\^(\d+)\^([+−])", r"^\1\2", text)  # Fe<sup>2</sup><sup>+</sup>
text = text.replace("^°", "°")  # 180<sup>°</sup> (Organic Chemistry): the degree sign is just text
text = re.sub(r"\^([+−])\^(\d)", r"^\1\2", text)  # 10<sup>−</sup><sup>10</sup>
text = text.replace("(opens in new window)", "")  # link label for screen readers
text = text.replace("​", "").replace("﻿", "")  # zero-width spaces ("World War ​​II")
# Electron configurations, corpus style: 1s^22s^2 -> 1s^2 2s^2
# (and 2p_x^12p_y^1 -> 2p_x^1 2p_y^1, with marked orbital subscripts)
text = re.sub(r"(\d[spdfg](?:_[xyz]+)?)\^(\d+?)(?=\d[spdfg])", r"\1^\2 ", text)
text = re.sub(r"(\d[spdfg](?:_[xyz]+)?)\^(\d+?)(?=\d[spdfg])", r"\1^\2 ", text)
for _ in range(2):  # tighten consecutive list items
    text = re.sub(r"(?m)^( *(?:- |[a-z]\. |\d+\.(?: |$)).*)\n\n(?= *(?:- |[a-z]\. |\d+\.(?: |$)))", r"\1\n", text)
print(text)
