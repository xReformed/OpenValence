"""Mechanical LibreTexts page -> corpus markdown body.

Usage: python lt2md.py <page.html> <section-number e.g. 8.2>
Prints the markdown body (no front matter) to stdout. Never rewrites text:
it only drops markup, converts entities/LaTeX to plain text, and formats
boxes the way the rest of sources/openstax does.
"""
import re
import sys
import unicodedata
from html.parser import HTMLParser

SEC = sys.argv[2]

SYMBOLS = {
    "lambda": "λ", "nu": "ν", "times": "×", "Delta": "Δ", "delta": "δ", "mu": "μ",
    "pi": "π", "alpha": "α", "beta": "β", "gamma": "γ", "sigma": "σ", "theta": "θ",
    "ell": "ℓ", "cdot": "·", "rightarrow": "→", "leftarrow": "←", "to": "→",
    "rightleftharpoons": "⇌", "rightleftarrows": "⇄", "approx": "≈", "lt": "<", "gt": ">", "le": "≤",
    "leq": "≤", "prime": "′", "ll": "≪", "gg": "≫", "ge": "≥", "geq": "≥", "neq": "≠", "degree": "°", "circ": "°",
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
    "overline": "",  # the bar over a carbanion carbon in a Wittig ylide (Organic Chemistry 19.11)
    # Inorganic Chemistry (LibreTexts): calculus in the Schrödinger equation (2.2), font
    # switches (\sf, \bf) and sizes, and \big( … \big) delimiters.
    "propto": "∝", "textstyle": "", "scriptstyle": "",
    # Physical Chemistry (LibreTexts): ħ, ∇, expectation-value brackets, limits.
    "hbar": "ħ", "nabla": "∇", "langle": "⟨", "rangle": "⟩", "lim": "\x13lim",
    "Psi": "Ψ", "Phi": "Φ", "Theta": "Θ", "Xi": "Ξ", "Upsilon": "Υ", "zeta": "ζ", "iota": "ι",
    "star": "*",  # σ_u^{\star}: the antibonding mark (Inorganic Chemistry 5.2)
    # ΔG^{\circ\ddagger}: activation (Inorganic Chemistry 12.1); ⟸ points at a rate-limiting step (12.2.3).
    "ddagger": "‡", "dagger": "†", "Longleftarrow": "⟸", "Longrightarrow": "⟹",
    "partial": "∂", "int": "∫", "lessapprox": "⪅", "gtrapprox": "⪆",
    "sf": "", "bf": "", "rm": "", "large": "", "Large": "", "small": "", "normalsize": "",
    "big": "", "Big": "", "bigg": "", "Bigg": "", "bigl": "", "bigr": "", "Bigl": "", "Bigr": "",
    # A function name: spaced off from a coefficient before it (A sin(rx), not Asin(rx)).
    "sin": "\x13sin", "cos": "\x13cos", "tan": "\x13tan",
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
        frac = wrap(expand_frac(num)) + "/" + wrap(expand_frac(den))
        # The argument of a function: \log \dfrac{I_0}{I} -> log((I0)/I), not log(I0)/I.
        if re.search(r"(?:\\|\b)(?:log|ln|exp|sin|cos|tan)\s*$", s[:k]):
            frac = f"({frac})"
        # A factor after a fraction: \dfrac{-8\pi^2m_eE}{h^2}\psi -> ((−8π^2 meE)/h^2)ψ, so ψ
        # can't be read as part of the denominator. Likewise a number or letter:
        # \frac{1}{4} 3(3+1) -> (1/4)3(3+1), not 1/43(3+1) (Inorganic Chemistry 10.1.2).
        # (Only a letter or digit right after it, not one past a closing group, ^{\frac{1}{3}}a,
        # or a function name: (0.05916 V)/1 log(…).)
        elif re.match(r"[{}]*[α-ωΑ-Ω]", s[end:]) or (
                re.match(r"\w", s[end:]) and not re.match(r"(?:log|ln|exp|sin|cos|tan)(?![a-z])", s[end:])):  # also across groups: \textcolor{green}{\dfrac…}\textcolor{red}{\psi}
            frac = f"({frac})"
        # Two fractions side by side multiply: \frac{2hc^2}{\lambda^5}\frac{1}{e^{…}-1} ->
        # (2hc^2)/λ^5 · 1/(…), not …/λ^51/(…) (Physical Chemistry 1.2).
        if re.match(r"\s*\\frac", s[end:]):
            frac += " · "
        s = s[:k] + frac + s[end:]
    return s


DOT_ABOVE, TWO_ABOVE, DOT_BELOW, TWO_BELOW = "\u0307", "\u0308", "\u0323", "\u0324"


def tex_arg(s, i):
    """Read one TeX argument at s[i:]: a {group} or a single character."""
    while i < len(s) and s[i] == " ":
        i += 1
    if i < len(s) and s[i] == "{":
        return brace_group(s, i)
    return s[i:i + 1], i + 1


def tilde(letter):
    """A letter with a tilde over it, precomposed where Unicode has one (ṽ)."""
    return unicodedata.normalize("NFC", letter + "̃")


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


# mhchem \bond{…}, by symbol or by order: \ce{C \bond{3} M} is C≡M (Inorganic Chemistry 13.6.4).
BONDS = {"-": "−", "=": "=", "#": "≡", "1": "−", "2": "=", "3": "≡", "...": "···", "~": "~"}


# A superscript that needs no grouping: a number, word, or charge (10^−14, i^th,
# SO4^2−, P^*). Anything else is an expression and is grouped: e^(−0.693 t/t_1/2).
SIMPLE_SUP = re.compile(r"[+\-−–]?[\w.*′°\x00\x0e\x0f]*[+\-−–]?")


def group_sup(content):
    if SIMPLE_SUP.fullmatch(content.strip()):
        return content
    # <sup>‡ </sup>= (Inorganic Chemistry 12.3.5): spaces stay outside the group, G^(‡) =.
    core = content.strip()
    after = " " if content != content.rstrip() else ""
    return (("{" + core + "}") if re.search(r"[()]", core) else ("(" + core + ")")) + after


# _{92}^{235}\textrm{U}, ^{90}_{231}T, _{ }^{1}n, 5_{0}^{1}n: scripts written before
# a symbol (not after a letter or bracket, where they'd belong to what precedes).
NUCLIDE = re.compile(
    r"(?<![A-Za-zΑ-Ωα-ωħ)\]}])"
    r"(?:_(?P<s1>\{[^{}]*\}|[−\-]?\d)\s*\^(?P<p1>\{\s*\d+\s*\}|\d)"
    r"|\^(?P<p2>\{\s*\d+\s*\}|\d)\s*_(?P<s2>\{[^{}]*\}|[−\-]?\d))"
    r"\s*(?:\\(?:textrm|mathrm|text)\s*)?(?P<b>\{\s*[A-Za-zαβγ][a-z]?\s*\}|[A-Za-zαβγ][a-z]?)"
)


def nuclide_match(m):
    sub = (m["s1"] or m["s2"]).strip("{} ")
    sup = (m["p1"] or m["p2"]).strip("{} ")
    symbol = m["b"].strip("{} ")
    if "\\" in sub and not re.sub(r"\\[,;:! ]", "", sub).strip():
        # \ce{^4_{\,}A_{2g}}: a spacer, not an atomic number, so a term symbol's
        # multiplicity, written as the text writes the others: ^4A2g (Inorganic Chemistry 11.3.5).
        return f"^{sup}{symbol}"
    before = m.string[m.start() - 1] if m.start() else ""
    lead = "\\;" if before.isdigit() or before == "?" else ""  # a coefficient: 5 ¹₀n (\; survives TeX whitespace removal)
    if re.fullmatch(r"[−\-]?\d*", sub):
        return lead + nuclide(symbol, sub, sup)
    # Not an atomic number but a label in that slot (a molar mass): ²³⁵U (235.0439)
    return lead + sup.translate(SUP) + symbol + "\\; (" + sub + ")"


def as_text(result):
    """A converted piece of math put back into TeX as a protected text run."""
    return "\\text{" + result.replace("{", "\x11").replace("}", "\x12") + "}"


def rows_of(body):
    """The rows of a TeX array or matrix body, each a list of cell sources."""
    rows = re.split(r"\\\\(?:\[[^\]]*\])?", body)
    rows = [re.sub(r"\\hline|\\cline\{[^{}]*\}", "", row) for row in rows]
    return [[cell.strip() for cell in row.split("&")] for row in rows if row.strip()]


def environments(s):
    """Matrices and arrays (Inorganic Chemistry 4.3: group theory), converted cell by cell.

    A matrix becomes its rows in brackets, entries separated by commas and rows by
    semicolons: \\begin{pmatrix} 3 & -2 \\\\ 5 & 3i \\end{pmatrix} -> (3, −2; 5, 3i).
    An array ruled into a table (a character table: \\begin{array}{l|llll} … \\hline …)
    becomes a markdown table; any other array (aligned equations) one line per row."""
    brackets = {"pmatrix": "()", "bmatrix": "[]", "Bmatrix": "{}", "vmatrix": "||", "Vmatrix": "‖‖",
                "matrix": "()", "smallmatrix": "()"}
    # "\begin {array}" with a space appears too (Inorganic Chemistry 5.4.3).
    matrix = re.compile(r"\\begin\s*\{(p|b|B|v|V|small|)matrix\}((?:(?!\\begin\s*\{).)*?)\\end\s*\{\1matrix\}", re.S)
    array = re.compile(r"\\begin\s*\{array\}\s*\{([^{}]*)\}((?:(?!\\begin\s*\{).)*?)\\end\s*\{array\}", re.S)
    while True:
        if m := matrix.search(s):
            left, right = brackets[m.group(1) + "matrix"]
            inner = "; ".join(", ".join(tex(cell) for cell in row) for row in rows_of(m.group(2)))
            s = s[:m.start()] + as_text(left + inner + right) + s[m.end():]
        elif m := array.search(s):
            spec, body = m.groups()
            rows = [[tex(cell) for cell in row] for row in rows_of(body)]
            if "|" in spec or "\\hline" in body:
                width = max(len(row) for row in rows)
                rows = [row + [""] * (width - len(row)) for row in rows]
                lines = ["| " + " | ".join(row) + " |" for row in rows]
                lines.insert(1, "| " + " | ".join(["---"] * width) + " |")
                # \x17 is a line break inside the table; \x06 sets it apart as its own paragraph.
                s = s[:m.start()] + "\x06" + as_text("\x17".join(lines)) + "\x06" + s[m.end():]
            elif len(re.sub(r"[^lcr]", "", spec)) <= 1:
                # One column: text stacked over two lines inside an equation, "Bond order =
                # 1/2[(number of electrons / in bonding orbitals) − …]" (Inorganic Chemistry 5.2.1).
                s = s[:m.start()] + as_text(" ".join(" ".join(c for c in row if c) for row in rows)) + s[m.end():]
            else:
                s = s[:m.start()] + "\x06".join(as_text(" ".join(c for c in row if c)) for row in rows) + s[m.end():]
        else:
            return s


def tex(s):
    # ~ is TeX's non-breaking space: 100 × 10^{-12}~\mathrm{m}. It is an explicit space, kept
    # through the whitespace removal below: "Lewis~basicity~of~B" (Inorganic Chemistry 6.4.4).
    # A ~ with spaces either side ties nothing: it means "about the same", \ce{py > NH3 ~ Cl^-}
    # (Inorganic Chemistry 12.6.2).
    s = re.sub(r"(?<= )~(?= )", r"\\sim", s)
    s = s.replace("\xa0", " ").replace("~", "\\ ")
    s = s.replace("​", "").replace("﻿", "")  # zero-width spaces: "XeF_​2" (Inorganic Chemistry 8.14.10)
    # Unicode typed into the TeX: 4π&#1013;_0, n^2&#8463;^2, 10^{&#8209;11} (Physical Chemistry 1.8).
    s = s.replace("ϵ", "ε").replace("ℏ", "ħ").replace("‑", "-")
    # The part letter can be a capital: \PageIndex{1A} (Organic Chemistry 29.5, a figure in two parts).
    s = re.sub(r"\\PageIndex\{(\d+)([A-Za-z]*)\}", lambda m: f"{SEC}.{m.group(1)}{m.group(2)}", s)
    # A script belongs to the letter before it even after a space: \epsilon ^2_0 h^3 is
    # ε0^2 h^3, not ε ²₀h^3 (Physical Chemistry 1.8). After an arrow it starts a nuclide:
    # \rightarrow _{138.9088}^{139}\textrm{Ba} (Introductory Chemistry 15.6).
    def attach(m):
        command = m.group(1)[1:] if m.group(1).startswith("\\") else None
        if command is not None and not re.fullmatch(r"[Α-Ωα-ωħ]", SYMBOLS.get(command, "")):
            return m.group(0)
        return m.group(1)
    s = re.sub(r"(\\[A-Za-z]+|[A-Za-z])\s+(?=[_^])", attach, s)
    # _{92}^{235}\textrm{U}, \ce{_0^1n}: prescripts on a symbol are a nuclide.
    s = NUCLIDE.sub(nuclide_match, s)
    # A superscript written before the subscript, p^2_n, \epsilon^2_0: put the subscript
    # first, as it is displayed, or it reads "p^2 n", "ε^20" (Physical Chemistry 1.8);
    # ΔG^‡_B too (Organic Chemistry 14.3). Not a degree sign: E°_(N2O4 → NO) reads as
    # displayed (Inorganic Chemistry 8.2).
    s = re.sub(r"\^\s*(?!\{?\s*(?:\\circ(?![A-Za-z])|°|\\degree(?![A-Za-z])))(\{[^{}]*\}|\\[A-Za-z]+|[^\s{}\\_^()\[\]])"
               r"\s*_\s*(\{[^{}]*\}|\\[A-Za-z]+|\w)", r"_\2^\1", s)
    s = lewis_dots(s)
    s = s.replace("\\dfrac", "\\frac").replace("\\tfrac", "\\frac").replace("\\%", "%")
    s = re.sub(r"\^\{\s*\^\{([^{}]*)\}\s*\}", r"^{\1}", s)  # n^{^{2}} (Inorganic Chemistry 2.1.2): n^2
    # A subscript that is a condition: \psi_{x=0} -> ψ_(x=0), not ψ_x = 0.
    s = re.sub(r"_\{([^{}]*=[^{}]*)\}", lambda m: "_{(" + m.group(1).replace("=", "\x14") + ")}", s)
    s = re.sub(r"\\label\s*\{[^{}]*\}", "", s)  # equation labels are never displayed
    # … nor a label holding other markup: \label{\(\PageIndex{8}\)} (Inorganic Chemistry 8.7.2).
    while (m := re.search(r"\\label\s*\{", s)):
        _, end = brace_group(s, m.end() - 1)
        s = s[:m.start()] + s[end:]
    # \PageIndex{I}, \PageIndex{\sf{1,~~part~~a}}: a scheme or figure labelled other than by
    # a number (Inorganic Chemistry 8.2), shown the way the page shows it: 8.2.4.I.
    while (m := re.search(r"\\PageIndex\s*\{", s)):
        arg, end = brace_group(s, m.end() - 1)
        arg = " ".join(re.sub(r"\\[A-Za-z]+|\\ |[{}]", " ", arg).split())
        arg = re.sub(r"^sf\s+", "", arg)  # \PageIndex{sf{II}}: the backslash of \sf lost (Inorganic Chemistry 8.2.4)
        s = s[:m.start()] + as_text(f"{SEC}.{arg}" if arg else "") + s[end:]
    # \xrightarrow{\Delta}, \xrightarrow[below]{above}: a labelled arrow -> "→ (Δ)".
    while (m := re.search(r"\\xrightarrow\s*(?:\[([^\[\]]*)\])?\s*(?=\{)", s)):
        above, end = brace_group(s, m.end())
        label = ", ".join(part for part in (above.strip(), (m.group(1) or "").strip()) if part)
        s = s[:m.start()] + "\\rightarrow" + (f"\\; ({label})\\; " if label else "") + s[end:]
    # \underbrace{reaction}_{\text{Direct combustion}}: a label under an expression.
    while (m := re.search(r"\\underbrace\s*(?=\{)", s)):
        body, end = brace_group(s, m.end())
        label = ""
        if (under := re.match(r"\s*_\s*(?=\{)", s[end:])):
            label, end = brace_group(s, end + under.end())
        s = s[:m.start()] + body + (f"\\; ({label})" if label else "") + s[end:]
    s = re.sub(r"\\mathring\s*\{\s*(?:\\mathrm\s*\{\s*A\s*\}|A)\s*\}", "Å", s)  # \mathring{\mathrm{A}}: ångström
    s = re.sub(r"\\ce\s+(\w+)", r"\\ce{\1}", s)  # "\ce C": a one-token argument without braces
    s = re.sub(r"\\PageIndex\{\}", "", s)  # "Exercise \(\PageIndex{}\)": the source left the number out
    s = re.sub(r"\\rule\s*\{[^{}]*\}\s*\{[^{}]*\}", "", s)  # a drawn line under a sum (Inorganic Chemistry 6.3.6)
    s = environments(s)
    # Source typo: "\widetilde{ u}" (Inorganic Chemistry 2.1) — "\n" of \nu lost to a newline.
    s = re.sub(r"\\widetilde\{ u\}", "\\\\tilde{ν}", s)
    # \widetilde{\nu}, \bar {\nu}: an accent over a Greek letter (Physical Chemistry 1.2, 1.4): ν̃, ν̄.
    s = re.sub(r"\\(?:wide)?tilde\s*\{\s*\\([A-Za-z]+)\s*\}",
               lambda m: unicodedata.normalize("NFC", SYMBOLS.get(m.group(1), m.group(1)) + "\u0303"), s)
    s = re.sub(r"(?<![A-Za-z])\\bar\s*\{\s*(?:\\([A-Za-z]+)|(\w))\s*\}|(?<![A-Za-z])\\bar\s+(\w)",
               lambda m: unicodedata.normalize("NFC", SYMBOLS.get(m.group(1), m.group(1)) if m.group(1)
                                               else (m.group(2) or m.group(3))) + "\u0304", s)
    s = re.sub(r"\\(?:wide)?tilde\{?\s*(\w)\}?", lambda m: tilde(m.group(1)), s)  # \tilde{v}: wavenumber ṽ
    # \sum_i^n m_{l_i}: a space between the sum's limits and its term, Σi^n m_li, not Σi^nm_li (Inorganic Chemistry 11.2).
    s = re.sub(r"\\sum\s*_\{?(\w+)\}?\s*\^\{?(\w+)\}?\s*", "Σ_\\1^\\2\\\\ ", s)
    # \bar{v}: the wavenumber written with a bar, v̄ (Inorganic Chemistry 11.1.1).
    s = re.sub(r"\\bar\{?\s*(\w)\}?", lambda m: m.group(1) + "̄", s)
    # \hat{H}: an operator, Ĥ.
    s = re.sub(r"\\(?:wide)?hat\{?\s*(\w)\}?", lambda m: unicodedata.normalize("NFC", m.group(1) + "̂"), s)
    # \hat{\sigma}_{xz}: the same on a Greek letter (Inorganic Chemistry 4.3.2).
    s = re.sub(r"\\(?:wide)?hat\s*\{\s*(\\[A-Za-z]+)\s*\}", "\\1\x18", s)
    # \vec{\mu}, \vec{r}_i, \vec{v_1}: a vector, with an arrow over its symbol (μ⃗, v⃗_1).
    s = re.sub(r"\\vec\s*\{\s*(\\[A-Za-z]+|\w)", lambda m: "{" + m.group(1) + "\x15", s)
    s = re.sub(r"\\vec\s*(\\[A-Za-z]+|\w)", lambda m: m.group(1) + "\x15", s)
    s = re.sub(r"\\color\{\w+\}", "", s)  # \color{red}: colour can't be shown; a [Note] says what it marked
    # \textcolor{red}{…}: the same, with the coloured part as an argument; keep the part.
    while (m := re.search(r"\\textcolor\s*\{\w+\}\s*(?=\{)", s)):
        body, end = brace_group(s, m.end())
        s = s[:m.start()] + "{" + body + "}" + s[end:]
    s = re.sub(r"\\textcolor\s*\{\w+\}", "", s)  # \textcolor{blue}R: a single coloured token
    # \hspace{1cm}: a wide gap between an equation and its label (Inorganic Chemistry 2.3).
    s = re.sub(r"\\hspace\*?\{[^{}]*\}", r"\\;\\;\\;", s)
    s = s.replace("\\thinspace", "\\,")
    # \mathrm{\dfrac{14.82\: g\: carbon}{2.78\: g\: hydrogen}}: upright type around a whole
    # expression, not a run of text; keep the expression. \textrm H: a one-letter argument.
    k = 0
    while (m := re.compile(r"\\(?:mathrm|textrm)\s*\{").search(s, k)):
        body, end = brace_group(s, m.end() - 1)
        if "{" in body:
            s = s[:m.start()] + "{" + body + "}" + s[end:]
        k = m.start() + 1
    s = re.sub(r"\\(?:mathrm|textrm)\s+(\w)", r"\1", s)
    # \tag{Henderson-Hasselbalch }: an equation's name, printed beside it in parentheses.
    s = re.sub(r"\\tag\{([^{}]*)\}", lambda m: f"\\text{{  ({m.group(1).strip()})}}", s)
    s = re.sub(r"\\operatorname\{(\w+)\}", r"\1", s)  # \operatorname{antilog}(2.54)
    # \begin{align*} x + (−6) &= −1 \\ x &= +5 \end{align*}: drop the environment
    # and its alignment marks; the line breaks between steps are kept.
    s = re.sub(r"\\(?:begin|end)\{(?:align|aligned|eqnarray|gather|split)\*?\}", "", s)
    s = s.replace("&", "")
    s = re.sub(r"\\\\(?:\[[^\]]*\])?", "\x06", s)  # a line break between steps (\\[4pt] too); becomes a paragraph break
    # \sqrt{b^2-4ac} -> √(b^2−4ac); a single token needs no parentheses (√2), but a
    # product does: \sqrt{2m_eE} -> √(2meE), not √2meE.
    while (k := s.find("\\sqrt")) >= 0 and "{" in s[k:]:
        body, end = tex_arg(s, k + len("\\sqrt"))
        single = re.fullmatch(r"\w+", body) and not re.search(r"\d[A-Za-z]|_", body)
        s = s[:k] + ("√" + body if single else "√(" + body + ")") + s[end:]
    # \overset{100\%}{\rightarrow}: a label printed above an arrow -> "→ (100%)".
    while (k := s.find("\\overset")) >= 0 and "{" in s[k:]:
        over, after = tex_arg(s, k + len("\\overset"))
        base, end = tex_arg(s, after)
        s = s[:k] + base + "\\; (" + over + ")\\; " + s[end:]
    # \stackrel{\delta+}{\mathrm{C}}: a partial charge printed above an atom -> "C(δ+)".
    while (k := s.find("\\stackrel")) >= 0 and "{" in s[k:]:
        over, after = tex_arg(s, k + len("\\stackrel"))
        base, end = tex_arg(s, after)
        s = s[:k] + "{" + base + "}(\\text{" + over.replace("-", "−") + "})" + s[end:]
    # \cancel{g} strikes a unit out to show it cancelling; the text refers to
    # "the strikeouts", so keep them, as markdown strikethrough (~~g~~).
    while (k := s.find("\\cancel")) >= 0 and "{" in s[k:]:
        body, end = brace_group(s, s.index("{", k))
        s = s[:k] + "\x0e" + body + "\x0f" + s[end:]
    # Text runs keep their spaces; everywhere else TeX ignores whitespace.
    keep = []

    def protect(m):
        text = re.sub(r"\\[,;: ]", " ", m.group(2))
        # \mathrm{Cl_2(g)}: a digit subscript in a formula joins it, as outside a text run.
        # (Not in \text, which also carries already-converted math such as C_2v.)
        if m.group(1) in ("mathrm", "textrm"):
            text = re.sub(r"(?<=[A-Za-z)\]])_(\d+)", r"\1", text)
        text = re.sub(r"\\([A-Za-z]+)", lambda c: SYMBOLS.get(c.group(1), "\\" + c.group(1)), text)
        keep.append(text)
        return f"\x00{len(keep) - 1}\x00"

    # mhchem \ce{H_2O}/\ce{H2O}: subscripts are implicit, so drop _ and braces.
    while (k := s.find("\\ce")) >= 0 and "{" in s[k:]:
        body, end = brace_group(s, s.index("{", k))
        # \ce{$K_E = \ce{\frac{…}{…}}$} (Inorganic Chemistry 12.3.4): the inner \ce adds nothing.
        body = re.sub(r"\\ce\s*(?=\{)", "", body)
        # mhchem bonds: \ce{Co \bond{-} X} is Co−X, [Y\bond{...}ML_{n}] a partial bond (Inorganic Chemistry 12.2.3).
        body = re.sub(r"\s*\\bond\{([^{}]*)\}\s*", lambda b: BONDS.get(b.group(1), b.group(1)), body)
        # ->[\text{electric}][\text{discharge}]: an arrow with conditions over and under it,
        # "→ (electric discharge)" (Inorganic Chemistry 8.11.4).
        body = re.sub(r"\s*->\[([^\[\]]*)\](?:\[([^\[\]]*)\])?\s*",
                      lambda m: " → (" + " ".join(re.sub(r"\\text\s*\{([^{}]*)\}", r"\1", part).strip()
                                                  for part in m.groups() if part) + ") ", body)
        body = re.sub(r"\s*(?:->|\\rightarrow)\s*", " → ", body)
        # <=>[k_1][k_{-1}]: an equilibrium's rate constants, "⇌ (k1, k−1)" (Inorganic Chemistry 12.2.3).
        body = re.sub(r"\s*<=>\[([^\[\]]*)\](?:\[([^\[\]]*)\])?\s*",
                      lambda m: " ⇌ (" + ", ".join(part.strip() for part in m.groups() if part) + ") ", body)
        # <=>> and <<=> lean the equilibrium one way (Inorganic Chemistry 6.6.2); still ⇌.
        body = re.sub(r"\s*(?:<=>>|<<=>|<=>|\\rightleftharpoons)\s*", " ⇌ ", body)
        # \ce{\Delta G^\circ_{rxn}}: symbols are read before the braces go, or \circ runs into rxn (12.1).
        body = re.sub(r"\\([A-Za-z]+)(?![A-Za-z])", lambda c: SYMBOLS.get(c.group(1), c.group(0)), body)
        # \ce{NH^{+}4}: mhchem sets a digit after a charge as the formula's
        # subscript (NH₄⁺), so write it in the usual order: NH4^+.
        body = re.sub(r"\^\{([^{}]*)\}(\d+)", r"\2^{\1}", body)
        body = body.replace("$", "")  # mhchem's $…$ math escapes: [^{11}_5B]$^*$ (Inorganic Chemistry 8.6.1)
        # \ce{ICl4-}: a sign at the end of a formula is its charge (ICl4^−); "A + B" is spaced.
        body = re.sub(r"(?<!\S)([A-Za-z0-9()\[\]]*[A-Za-z)\]\d])([+−-]+)(?=\s|$)",
                      lambda m: m.group(1) + "^{" + m.group(2).replace("-", "−") + "}", body)
        body = expand_frac(body)  # \ce{(CH2)_{n} + \dfrac{3 n}{2} O2 -> …}
        s = s[:k] + "\\text{" + body.replace("_", "").replace("{", "").replace("}", "") + "}" + s[end:]
    s = re.sub(r"\\(text|textrm|mathrm|textbf|textit)\s*\{([^{}]*)\}", protect, s)
    s = s.replace("\\!", "")  # a negative thin space: d\!ν
    # An integral's limits end before its integrand: \int_0^k x^2 -> ∫0^k x^2, not ∫0^kx^2.
    s = re.sub(r"(\\int\s*_\s*(?:\{[^{}]*\}|\\[A-Za-z]+|\w)\s*\^\s*(?:\{[^{}]*\}|\\[A-Za-z]+|\w))", r"\1\\ ", s)
    s = re.sub(r"\\[,;: ]|\\quad|\\qquad", "\x04", s)  # explicit TeX spaces survive
    s = re.sub(r"\\([A-Za-z]+)", lambda m: SYMBOLS.get(m.group(1), "\\" + m.group(1)) + "\x01", s)
    s = re.sub(r"\s+", "", s).replace("\x01", "")
    s = re.sub("(?<=[\\w)′])\x13", "\x04", s).replace("\x13", "")  # A sin(rx); sin(ra) = 0
    # A number before a fraction is a separate factor: 10^7\frac{1}{m} -> 10^7 1/m, not 10^71/m.
    s = re.sub(r"(?<=\d)(?=\\frac)", "\x04", s)
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
            # A charge after a group is a sign, not an operator: A^{(n+1)+} (Inorganic Chemistry 2.3).
            # So is one ending a mixed-valence label: Cr^{4/3+} (Inorganic Chemistry 8.2.4).
            body = re.sub(r"(?<=[\w)])[+−]$", lambda c: sign(c.group()), body)
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
    # A hyphen inside a word subscript joins words, it isn't a minus: Γ_{cis-CO},
    # x_{hydrogen-a} (Inorganic Chemistry 4.4.2). \x19 keeps it from operator spacing.
    s = re.sub(r"_\{[^{}]*[A-Za-z]−[A-Za-z][^{}]*\}",
               lambda m: re.sub(r"(?<=[A-Za-z])−(?=[A-Za-z])", "\x19", m.group()), s)
    def word_sub(content):
        # A sign in a subscript belongs to its label, and a label of several words is
        # grouped: NE^{\circ}_{+4~O.S.} -> NE°_(+4 O.S.) (Inorganic Chemistry 8.2.4.3).
        # So is one holding an arrow or operator: \lim_{n_2 \to \infty} -> lim_(n2→∞).
        if " " in content.strip() or re.search(r"[→=<>≤≥]", content):
            return "(" + sign(content.strip()) + ")"
        return content

    previous = None
    while previous != s:
        previous = s
        s = re.sub(r"_\{(\d+)\}", r"\1", s)
        s = re.sub(r"_\{(\w)\}|_(\w)", lambda m: m.group(1) or m.group(2), s)
        s = re.sub(r"_\{([^{}]*)\}(?=[A-Za-zΑ-ω])", lambda m: "\x10" + word_sub(m.group(1)) + " ", s)
        s = re.sub(r"_\{([^{}]*)\}", lambda m: "\x10" + word_sub(m.group(1)), s)
    s = s.replace("\x10", "_")
    s = s.replace("{", "").replace("}", "")
    s = re.sub(r"\s*([=×<>≤≥→⟶⇌⇄↑↓≡+])\s*", r" \1 ", s)
    # Between carbon groups "=" is a double bond, not an equation: CH2=CH2.
    s = re.sub(r"\b(C|CH|CH2) = (?=(?:CH2|CH|C)(?![a-z]))", r"\1=", s)
    # A sign, not an addition: x = +5, (+2), or a leading +3.
    s = re.sub(r"(=|\(|^) *\+ +(?=[\d.])", lambda m: (m.group(1) + " " if m.group(1) == "=" else m.group(1)) + "+", s)
    s = re.sub(r"(?<=[\w)])−(?=[\w(])", " − ", s)
    s = re.sub(r",(?=[^\d\s])", ", ", s)
    s = s.replace("\x02", "+").replace("\x03", "−").replace("\x14", "=")
    s = s.replace("\x15", "⃗").replace("\x18", "̂")  # \vec's arrow, \hat's circumflex
    s = s.replace("\x19", "-")
    for _ in range(2):  # electron configurations: 4s^23d^6 -> 4s^2 3d^6 (no 0f: 4s^2p^6d^10f^14)
        s = re.sub(r"(\d[spdfg])\^(\d+?)(?=[1-9][spdfg])", r"\1^\2 ", s)
    s = re.sub(r"(\^−?[\d.]+)(?=[A-Za-z])", r"\1 ", s)
    # number then unit (109,700cm -> 109,700 cm), but not orbital labels (3s, 4d)
    # and not formulas: a digit before a capital is a subscript or coefficient (H2O, 2H2)
    # and not algebra: a run of variables (2x, 0.00088x, 4ac) stays attached.
    # Nor electrons: 3e^−, not 3 e^−. Nor a subscript: the point group C_2v (Inorganic
    # Chemistry 4), and not an imaginary number in a matrix: 3i.
    s = re.sub(r"(?<!_)(?<!_\d)(?<!_\d\d)(\d)(?=[a-z])(?![spdf](?:\^|\s|$|[)\]\x05]|[xyz]\b)|e\^)(?![abcxyi]+(?![a-z]))",
               r"\1 ", s)
    s = re.sub(r"(\d)(?=\x0e)", r"\1 ", s)  # 45.7 ~~g~~, not 45.7~~g~~
    s = s.replace("\x0e", "~~").replace("\x0f", "~~")
    s = re.sub("\x00(\\d+)\x00", lambda m: keep[int(m.group(1))], s)
    s = re.sub(r" +", " ", s)
    s = re.sub(r" \^", "^", s)  # \mathbf{Mg\,}^{2+} -> Mg^2+
    s = s.replace("\x11", "{").replace("\x12", "}")
    return re.sub(r" ?\x05 ?", "\x05", s).strip()  # gap is expanded at the very end


def bare_arrays(s):
    """A \\begin{array} … \\end{array} typed straight into a paragraph, outside \\[ \\] or \\( \\)
    (Inorganic Chemistry 13.5.2's D5h character table), gets the display delimiters it lacks."""
    out, k = [], 0
    for m in re.finditer(r"\\begin\{array\}.*?\\end\{array\}", s, re.S):
        before = s[:m.start()]
        open_math = (before.count("\\[") - before.count("\\]")) + (before.count("\\(") - before.count("\\)"))
        out.append(s[k:m.start()])
        out.append(m.group() if open_math > 0 else "\\[" + m.group() + "\\]")
        k = m.end()
    return "".join(out) + s[k:]


def inline_math(s):
    # Source typo: "\(\ce{C10H8}\ is" — the closing "\)" typed as "\ ".
    s = re.sub(r"\\\(\\ce\{([^{}]*)\}\\ (?!\))", r"\(\\ce{\1}\) ", s)
    # Source typo: "\(ce{HNO3}\)" (Inorganic Chemistry 1.3) — the backslash of \ce dropped.
    s = re.sub(r"\\\(ce\{", r"\(\\ce{", s)
    # Source typo: "\(\ce[ML_{n}XY]}\)" (Inorganic Chemistry 12.2.3) — the brace of \ce dropped.
    s = re.sub(r"\\ce\[(?=[^{}\s]*(?:\{[^{}]*\}[^{}\s]*)*\]\})", r"\\ce{[", s)
    # Source typos around \ce (Inorganic Chemistry 13.5.4, 14.2.1, 15.4.1): "(\ce{Ru3(CO)9(C60)}\)"
    # with the backslash of \( dropped, "\(\ce{^- LX})" with that of \) dropped, and "\{\ce{B4H10}\)".
    ce = r"\\ce\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}"
    s = re.sub(r"(?<!\\)\((" + ce + r")\\\)", r"\\(\1\\)", s)
    s = re.sub(r"\\\((" + ce + r")\)", r"\\(\1\\))", s)
    s = re.sub(r"\\\{(?=" + ce + r"\\\))", r"\\(", s)
    s = bare_arrays(s)
    # Source typo: "/(n_l = 1\)" (Inorganic Chemistry 2.1) — the opening "\(" typed as "/(".
    s = re.sub(r"(?<![\w)])/\((?=[^()\\]*\\\))", r"\(", s)
    # Source typo: "\( u\)", "\[ u=constant" (Inorganic Chemistry 2.1.2) — the "\n" of \nu lost
    # to a newline, leaving " u" at the start of the math.
    s = re.sub(r"(\\[(\[]) u(?=[\s=\\])", r"\1\\nu ", s)
    # Source typo: "(Figure \{\PageIndex{1}\))" (Inorganic Chemistry 8.2.8) — "\(" typed as "\{".
    s = s.replace("\\{\\PageIndex", "\\(\\PageIndex")
    # Source typos (Inorganic Chemistry 9.3, 9.5): math with its opening "\(" left out,
    # "Scheme \sf{\PageIndex{VII}}\)", or typed "/(", "180/(^{\circ}\)".
    s = re.sub(r"(?<!\\\()\\sf\{\\PageIndex\{(\w+)\}\}\\\)", r"\(\\sf{\\PageIndex{\1}}\)", s)
    s = s.replace("/(^{\\circ}\\)", "\\(^{\\circ}\\)")
    # Source typo: a stray "\[]\" after an image (Inorganic Chemistry 6.3.4).
    s = s.replace("\\[]\\", "")
    # Source typo: "\(\ce{H_2O}\)\)" (Inorganic Chemistry 3.3) — the math closed twice.
    s = s.replace("\\)\\)", "\\)")
    # Source typo: "\((n-1\)d\)" (Inorganic Chemistry 2.2.4) — the ")" of (n-1) typed as "\)".
    s = s.replace("\\((n-1\\)d\\)", "\\((n-1)d\\)")
    # A cross-reference in running text to an equation label; show the label.
    s = re.sub(r"\\ref\{([^{}]*)\}", r"(\1)", s)
    # Display math set apart from text run up against it: "(CE)\[CE = …\]" in a table cell.
    s = re.sub(r"\\\]\s*\\\[", "\\]\x06\\[", s)  # two display equations in a row: one per line
    s = re.sub(r"(?<=[\w)])\\\[", r" \[", s)
    s = re.sub(r"\\\[(.*?)\\\](?=\w)", r"\[\1\] ", s, flags=re.S)
    s = re.sub(r"\\\[(.*?)\\\]", lambda m: tex(m.group(1)), s, flags=re.S)
    return re.sub(r"\\\((.*?)\\\)", lambda m: tex(m.group(1)), s, flags=re.S)


FILENAME = re.compile(  # "The Actions of Buffers.png", "2,4-dimethyl-3-heptene .png", or a bare upload hash
    # "Unknown": a file name with its extension dropped (Inorganic Chemistry 2.2.2).
    # A mangled <img>'s alt: escaped quotes or the start of a tag (Inorganic Chemistry 7.2.2).
    # A pasted image's generated name, letters, digits, _ and - with no spaces (Inorganic Chemistry 10.1).
    # "undefined": an editor's empty alt (Inorganic Chemistry 10.3.2). "ROMtoM'Marcus.png" (12.8.1).
    r"\w[\w .,()+'-]*\.(?:jpe?g|png|gif|svg|webp)|[0-9a-f]{32,}|[\w-]{60,}|Unknown(?:-\d+)?|undefined|(?:&quot;|\")+|<div\b.*", re.I)
# The letters of the Symbol typeface: <font face="Symbol">s</font> is σ.
SYMBOL_FONT = str.maketrans("abgdezhqiklmnxprstufcywDGQLXPSUFYW­¯®¬",
                            "αβγδεζηθικλμνξπρστυφχψωΔΓΘΛΞΠΣΥΦΨΩ↑↓→←")  # and its arrows (Inorganic Chemistry 7.7.1)
# An image file that is one Greek letter ("delta.GIF"), set inline in the text.
GLYPH = re.compile(r"(delta|capdelta|alpha|beta|gamma|sigma|pi|mu)\.(?:gif|png|jpe?g)", re.I)
GLYPH_TEXT = {"capdelta": "Δ"}  # the capital (Inorganic Chemistry 8.13.2: "T[capdelta.gif]S")
# A blank image used only for spacing (Inorganic Chemistry 8.13): no content, no placeholder.
SPACER = re.compile(r"(?:padding|spacer|blank)\.gif", re.I)

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
        self.figure_depth = 0
        self.held_alts = []  # images of inner figures, kept until the outer one's caption is known
        self.p_legend = False
        self.h_legend = False
        self.boxes = []
        self.skip_at = None  # stack depth of a MathJax copy being skipped
        self.pending = None  # an open list item's marker, waiting for its first text
        self.mathml_read = False  # this equation's bare MathML has been read
        self.mms = None  # an <mmultiscripts> being collected
        self.sup_at = None  # where the open <sup>'s text starts: ("buf"|"cell", index)
        self.last_sup = None  # the <sup> just closed: (where, start, end, raw text), to join a next one
        self.sup_prefix = ""  # the raw text of the <sup> a reopened one continues
        self.sub_at = None  # likewise for <sub>
        self.symbol_at = None  # likewise for <font face="Symbol">
        self.in_pre = False  # inside <pre>: text is kept line by line
        self.table_notes, self.in_tfoot = [], False  # a table's <tfoot> lines, printed after it
        self.box_kind = {}  # box depth -> "Example" / "Exercise" (None for other boxes)
        self.note_boxes = set()  # box depths of "box-note" boxes
        self.first_row = False  # the next <mtr> is its <mtable>'s first
        self.layout = []  # open MathML <mfrac>/<msub>/<msup>: [tag, depth, where each child starts]

    def at(self):
        return len(self.cell) if self.cell is not None else len(self.buf)

    def close_layout(self, tag, starts):
        """Rewrite a MathML fraction or script from its children's text: <mfrac>
        becomes (num)/(den), <msup> base^sup, <msub> base_sub (letters) or basesub."""
        text = self.cell if self.cell is not None else self.buf
        if starts and starts[-1] > len(text):
            return  # the text it was written into has been flushed
        parts = [text[s:e] for s, e in zip(starts, starts[1:] + [len(text)])]
        if tag == "msup" and len(parts) == 1 and parts[0].strip() in ("+", "−", "–"):
            parts = ["", parts[0]]  # a charge set alone: H<msup>O</msup><msup>+</msup>
        while tag != "mfrac" and len(parts) > 2 and not parts[-1].strip():
            blank = parts.pop()
            parts[-1] += blank  # a blank extra child (Beginning Chemistry 8.3: d_z^2)
        if len(parts) < 2:
            return
        head, last = "".join(parts[:-1]), parts[-1].strip()
        after = parts[-1][len(parts[-1].rstrip()):]  # "d<msub>z</msub><msup>2 </msup>orbital"
        if tag == "mfrac":
            out = wrap(head.strip()) + "/" + wrap(last)
            if re.search(r"\b(?:log|ln|exp)\s*$", text[:starts[0]]):
                out = f"({out})"  # log([A–]/[HA]), as with \frac
        elif tag == "msup":
            # Ar′ stays; so does a superscript the HTML inside already marked (8.3: <sup>2</sup>)
            out = head + ("^" + group_sup(last) if last not in ("", "′", "″") and last[0] != "^" else last)
        else:  # K<sub>b</sub> -> K_b; RNH<sub>2</sub> stays plain, as with HTML <sub>
            mark = re.match(r"[A-Za-z]", last) and re.search(r"[A-Za-zΔ]$", head)
            out = head + ("_" if mark else "") + last
        text = text[:starts[0]] + out + after
        if self.cell is not None:
            self.cell = text
        else:
            self.buf = text

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
        if self.alt:
            # An image can be a list item's whole content: "a. [Image: …]".
            marker, self.pending = self.pending or "", None
            # alt text that is just the upload's file name, or a placeholder word
            # ("alt": Inorganic Chemistry 4.3 has diagrams the text goes on to discuss)
            if FILENAME.fullmatch(self.alt) or self.alt.lower() in ("alt", "image", "img"):
                self.out.append(marker + "[Image not described in source]")
            else:
                self.out.append(f"{marker}[Image: {self.alt}]")
        self.alt = None

    def text(self):
        t = re.sub(r"\s+", " ", inline_math(self.buf)).strip()
        self.buf = ""
        self.last_sup = None
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
        if self.skip_at is None and tag == "iframe":
            # An embedded player (YouTube) or simulation (PhET): Inorganic Chemistry
            # 2.1 and Physical Chemistry 1.9 point to them in the text.
            self.flush()
            video = re.search(r"youtube\.com|youtu\.be|vimeo\.com", a.get("src") or "")
            self.out.append("[Video not described in source]" if video
                            else "[Interactive simulation not described in source]")
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
        if self.layout and len(self.stack) == self.layout[-1][1] + 1:
            self.layout[-1][2].append(self.at())  # a child of the open fraction/script
        if tag in ("mfrac", "msub", "msup"):
            self.layout.append([tag, len(self.stack), []])
        elif tag == "mtable":
            self.first_row = True
        elif tag == "mtr":
            # Each row of an equation array is its own line (Organic Chemistry 24.3: Kb,
            # pKb), but not a table's first row: the source's broken MathML (24.3) starts
            # a new one-row table for the end of a line ("–log" … "Kb").
            if not self.first_row and (self.cell if self.cell is not None else self.buf).strip():
                if self.cell is not None:
                    self.cell += "\x06"
                else:
                    self.buf += "\x06"
            self.first_row = False
        if tag in BLOCKS:
            self.flush()
        if tag == "sup":
            where = "cell" if self.cell is not None else "buf"
            text = self.cell if where == "cell" else self.buf
            last = self.last_sup
            if last and last[0] == where and last[2] == len(text):
                # <sup>4</sup><sup>/3</sup><sup>+</sup> right after one another: one
                # superscript, Cr^(4/3+) (Inorganic Chemistry 8.2.4); reopen the last one.
                text = text[:last[1]] + last[3]
                if where == "cell":
                    self.cell = text
                else:
                    self.buf = text
                self.sup_at = (where, last[1])
                self.sup_prefix = last[3]
            else:
                text += "^"
                if where == "cell":
                    self.cell = text
                else:
                    self.buf = text
                self.sup_at = (where, len(text))
            self.last_sup = None
        elif tag == "sub":
            self.sub_at = ("cell", len(self.cell)) if self.cell is not None else ("buf", len(self.buf))
        elif tag == "pre":
            self.flush()
            self.in_pre = True
        elif tag == "font" and (a.get("face") or "").lower() == "symbol":
            self.symbol_at = ("cell", len(self.cell)) if self.cell is not None else ("buf", len(self.buf))
        elif tag == "figure":
            if self.figure_depth == 0:
                self.caption_at = None
                self.held_alts = []
            self.figure_depth += 1
            self.in_figure = True
        elif tag == "p":
            self.p_legend = "box-legend" in (a.get("class") or "")
        elif tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self.h_legend = "box-legend" in (a.get("class") or "")
        if tag in ("section", "div") and re.search(r"\bbox-(?!legend)\w", a.get("class") or ""):
            self.boxes.append(len(self.stack))  # inside an Example/Exercise/Objectives box
            kind = re.search(r"\bbox-(example|exercise)\b", a.get("class") or "")
            self.box_kind[len(self.stack)] = kind.group(1).capitalize() if kind else None
            if re.search(r"\bbox-note\b", a.get("class") or ""):
                self.note_boxes.add(len(self.stack))
        elif tag in ("ol", "ul"):
            # Lettered lists keep their letters: answers refer to "Answer a".
            # An <ol start="2"> right after a lettered list continues it.
            start = int(a["start"]) - 1 if (a.get("start") or "").isdigit() else 0
            if tag == "ul":
                kind = "bullet"
            elif "upper-alpha" in (a.get("style") or ""):
                kind = "Alpha"  # A., B.: the Strategy steps that answers call "A" (Inorganic Chemistry 2.1.2)
            elif "lower-alpha" in (a.get("style") or "") or (start > 0 and self.prev_lettered):
                kind = "alpha"
            else:
                kind = "decimal"
            self.lists.append([kind, start, len(self.out)])  # kind, items so far, where its output starts
        elif tag == "li" and self.lists:
            kind, n, _ = self.lists[-1]
            self.lists[-1][1] += 1
            marker = {"bullet": "- ", "alpha": f"{chr(ord('a') + n)}. ",
                      "Alpha": f"{chr(ord('A') + n)}. "}.get(kind, f"{n + 1}. ")
            if self.pending is not None:
                # The parent item has no text of its own: "3. a. toward reactants".
                self.pending += marker
            else:
                self.pending = "   " * (len(self.lists) - 1) + marker  # nested: indented
        elif tag == "img" and SPACER.fullmatch((a.get("alt") or "").strip()):
            pass
        elif tag == "img" and (a.get("alt") or "").strip().lower() == "edit section":
            pass  # the LibreTexts editor's icon inside a heading (Inorganic Chemistry 8.9.2), not content
        elif tag == "img":
            # Word's generated alt text, "Chart, line chart\n\nDescription automatically
            # generated" (Inorganic Chemistry 10.6): keep the description, drop the trailer.
            alt = (a.get("alt") or "").strip()
            if alt.endswith("Description automatically generated"):
                alt = re.sub(r"\s+", " ", alt.removesuffix("Description automatically generated")).strip()
            self.alt = alt or None
            glyph = GLYPH.fullmatch(self.alt or "")
            if glyph:
                # A letter set as a picture inside a sentence: "sufficient <img alt="delta.GIF">+
                # charge" (Inorganic Chemistry 3.4) reads "sufficient δ+ charge".
                if self.cell is not None:
                    self.cell += GLYPH_TEXT.get(glyph[1].lower()) or SYMBOLS[glyph[1].lower()]
                else:
                    self.buf += GLYPH_TEXT.get(glyph[1].lower()) or SYMBOLS[glyph[1].lower()]
                self.alt = None
            elif self.cell is not None:
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
            if self.cell is not None:
                self.cell += "; "  # lines in one table cell (Inorganic Chemistry Table 3.2.3.1)
            else:
                self.buf += " "
        elif tag == "table":
            self.rows, self.table_caption, self.spans = [], None, {}
            self.table_notes, self.in_tfoot = [], False
        elif tag == "tfoot":
            self.in_tfoot = True
        elif tag == "tr" and self.rows is not None:
            self.row = []
        elif tag in ("td", "th") and self.row is not None:
            self.fill_spans()
            self.cell = ""
            self.last_sup = None
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
        if self.layout and self.layout[-1][0] == tag and self.layout[-1][1] == len(self.stack):
            _, _, starts = self.layout.pop()
            self.close_layout(tag, starts)
        if tag == "pre" and self.in_pre:
            # Preformatted text keeps its lines and spacing: a diagram drawn in characters
            # (Inorganic Chemistry 7.7.1's Born-Haber cycle for NaCl). A code block holds it.
            self.in_pre = False
            lines = [line.rstrip() for line in self.buf.replace(" ", " ").split("\n")]
            self.buf = ""
            while lines and not lines[0].strip():
                lines.pop(0)
            while lines and not lines[-1].strip():
                lines.pop()
            if lines:
                self.out.append("```\n" + "\n".join(lines) + "\n```")
            return
        if tag == "font" and self.symbol_at is not None:
            # <font face="Symbol">p</font>: the Symbol typeface draws Latin letters as
            # Greek ones; "a p (pi) bond" is "a π (pi) bond" (Inorganic Chemistry 5.1.2).
            where, i = self.symbol_at
            self.symbol_at = None
            if where == "cell" and self.cell is not None:
                self.cell = self.cell[:i] + self.cell[i:].translate(SYMBOL_FONT)
            elif where == "buf":
                self.buf = self.buf[:i] + self.buf[i:].translate(SYMBOL_FONT)
        if tag == "sub" and self.sub_at is not None:
            # p<sub>x</sub> -> p_x, ΔH<sub>vap</sub> -> ΔH_vap: a letter subscript on a
            # letter is marked, the corpus's convention. Digit subscripts (H<sub>2</sub>O)
            # stay plain, and so does one after a digit ("3 − 2<sub>x</sub>" in a formula).
            # A closing bracket takes one too: (Hg)<sub>liquid</sub> (Physical Chemistry 1.4).
            where, i = self.sub_at
            self.sub_at = None
            text = self.cell if where == "cell" else self.buf
            if (
                text is not None and 0 < i <= len(text)
                and re.fullmatch(r"[A-Za-z]+\s*|\?", text[i:])  # "?" is a blank: PH<sub>?</sub>; "p<sub>z </sub>"
                and re.match(r"[A-Za-zΔ)]", text[i - 1])
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
                raw = text[i:].replace("​", "")  # 1s<sup>2&#8203;</sup> (Inorganic Chemistry 8.13)
                if not raw.strip() and text[i - 1:i] == "^":
                    # An empty <sup> </sup> (Inorganic Chemistry 8.6, 8.14): no exponent, just
                    # the space it holds: "$2500/ft^3 in 1915", not "ft^3^in 1915".
                    text = text[:i - 1] + (" " if text[i:] else "")
                elif self.sup_prefix and re.fullmatch(r"[.,;:]+", raw[len(self.sup_prefix):].strip()):
                    # A superscripted comma after a superscript is just punctuation:
                    # Zn<sup>II</sup><sup>,</sup> -> Zn^II, (Inorganic Chemistry 9.5).
                    text = text[:i] + group_sup(self.sup_prefix) + raw[len(self.sup_prefix):].strip()
                else:
                    text = text[:i] + group_sup(raw)
                    self.last_sup = (where, i, len(text), raw)
                self.sup_prefix = ""
                if where == "cell":
                    self.cell = text
                else:
                    self.buf = text
        while self.boxes and len(self.stack) <= self.boxes[-1]:
            depth = self.boxes.pop()
            self.note_boxes.discard(depth)
            if self.box_kind.get(depth):
                self.flush()
                self.out.append(BOX_END)  # kept only where an Example's prose ends (mark_example_ends)
        # Some pages set a box's title and its Solution/Answer as real headings
        # (<h2>Example</h2>, <h3>Solution</h3>), and some set an equation as a
        # heading (<h4>moles of solute = MV</h4>). Normalise them to the form
        # every other page uses; an equation is never a heading, and neither
        # is a table's title (<h3>Table 13.6.1 Acid Dissociation …</h3>).
        # A heading that is just "Answers"/"Solution" is a marker even outside a
        # box (end-of-section answers that spilled out of their box).
        # A note box can hold a whole subsection under its own heading (Inorganic
        # Chemistry 3.2.1 sets each "AX4E Molecules: SF4" part in one); that heading stays.
        in_box = self.boxes and not (self.boxes[-1] in self.note_boxes and not self.h_legend)
        if tag in ("h1", "h2", "h3", "h4") and (
            in_box
            # … but not a title with a condition in brackets: "Two Electron Groups (m + n = 2)"
            or " = " in re.sub(r"\([^()]*\)", "", self.peek())
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
            value = re.sub(r"^(?:;\s*)+|(?:\s*;)+$", "", value)  # a cell that starts or ends with <br>
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
            if self.in_tfoot:
                # A table's footnote (<tfoot>) is printed below it, not as a row
                # (Inorganic Chemistry Table 6.2.1).
                self.table_notes.append(" ".join(cell for cell in self.row if cell))
            else:
                self.rows.append(self.row)
            self.row = None
        elif tag == "tfoot":
            self.in_tfoot = False
        elif tag == "caption":
            self.table_caption = self.text()
        elif tag == "table" and self.rows is not None:
            if self.table_caption:
                self.out.append(self.table_caption)
            if self.rows:
                w = max(len(r) for r in self.rows)
                # A bar in a cell, |l1 + l2| (Inorganic Chemistry 11.2), is escaped so it can't end the cell.
                rows = [[c.replace("|", "\\|") for c in r] + [""] * (w - len(r)) for r in self.rows]
                lines = ["| " + " | ".join(rows[0]) + " |", "| " + " | ".join(["---"] * w) + " |"]
                lines += ["| " + " | ".join(r) + " |" for r in rows[1:]]
                self.out.append("\n".join(lines))
            self.out.extend(note for note in self.table_notes if note)
            self.rows, self.table_notes = None, []
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
            # "Figure8.5.6:" / "Figure 8.4.1 Title" / "Figure 16.2.1 - Title" / "Figure 1.1.1. Title"
            # -> "Figure 8.4.1: Title". A sub-page's figures have a fourth number (2.3.1.1).
            # A zero-width space can sit before the colon: "Figure 3.3.1&#8203;: …" (Inorganic Chemistry 3.3).
            t = re.sub(r"^Figure\s*(\d+(?:\.\d+){2,}[a-zA-Z]?)[\s​﻿]*(?:[:\-–]\s*|\.\s+)?", r"Figure \1: ", t)
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
            self.figure_depth = max(self.figure_depth - 1, 0)
            if self.figure_depth > 0:
                # An inner figure of a group (<figure role="group">). A described image is
                # written out as usual; an undescribed one is covered by the group's
                # caption, if the group has one (Inorganic Chemistry 3.1.4).
                if self.caption_at is None and self.alt:
                    if FILENAME.fullmatch(self.alt):
                        self.held_alts.append(self.alt)
                    else:
                        self.flush()
                        self.image_paragraph()
                self.alt = None
                return
            if self.caption_at is None:  # figure without a caption
                self.flush()
                for alt in self.held_alts + [self.alt]:
                    self.alt = alt
                    self.image_paragraph()
            self.caption_at = None
            self.held_alts = []
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
    inline = re.match(r" *(?:- |[a-zA-Z]\. |\d+\. |\|)", paragraph)
    pieces = re.split(" ?\x06 ?", paragraph)
    out = pieces[0]
    for before, piece in zip(pieces, pieces[1:]):
        # A table set in TeX (environments()) always stands as its own block.
        table = piece.startswith("|") or before.startswith("|") and before.endswith("|")
        out += ("; " if inline and not table else "\n\n") + piece
    return out


# A bare end-of-chapter problem label left on a page with no problem after it
# ("Problem 11-20" at the end of Organic Chemistry 11.12).
# … and the attributes of a mangled <img> spilled out as text (Inorganic Chemistry 7.2.2:
# '" height="200" width="463" src="/@api/deki/files/…jpg">').
# … and an author's donation appeal closing a page (Inorganic Chemistry 11.3.3: "Dr. Kai
# Landskron (Lehigh University). If you like this textbook, please consider to make a donation …").
STRAY = re.compile(r'[\s.,;:↵]*|Problem \d+-\d+|"\s+(?:height|width|style|src)=".*>'
                   r'|.*If you like this textbook, please consider to make a donation.*')
text = "\n\n".join(
    line_breaks(repair_broken_image(p))
    for p in mark_example_ends([p for p in page.out if p == BOX_END or not STRAY.fullmatch(p.strip())])
)  # also drops stray "." / "↵" paragraphs
text = re.sub(" ?\x05 ?", "    ", text)  # column gaps from TeX spacing
text = re.sub(" ?\x17 ?", "\n", text)  # rows of a table set in TeX (environments())
text = re.sub(r"(?m)(^\|.*\|)\n\n[.,;:](?=\n|$)", r"\1", text)  # "\[ … \end{array} \]." ends with a lone "."
text = re.sub(r"(?m)^(#{3,4} (?:Example|Exercise) [\d.]+):[ \t]*$", r"\1", text)  # "Example 13.5.1:"
# An alt attribute cut at an embedded "<span class=" spills the rest of the tag
# into the text: '[Image: Propanoic acid reacts with <span class=]' + 'KOH." style="…'.
text = re.sub(r'\[Image: ([^\]\n]*?)\s*<span class=\]\n\n([^"\n]*)"\s+style="[^\n]*', r"[Image: \1 \2]", text)
text = re.sub(r"(?m)^(#{3,4}) [.,;:]+\s*(?=(?:Example|Exercise)\b)", r"\1 ", text)  # ".Exercise 13.3.4"
text = re.sub(r"(?m)[ \t]+$", "", text)
text = re.sub(r"\^\s+\^", " ^", text)  # an empty <sup> </sup> before a real one: "specifically ^83Kr"
text = re.sub(r"\^\s+", "^", text)
# Cu<sup>2</sup><sup>+/3+</sup> (Inorganic Chemistry 7.3.1): one mixed-valence charge, Cu^(2+/3+).
text = re.sub(r"\^(\d+|n)\^\(([+−–-][^()\s]*)\)", r"^(\1\2)", text)
text = re.sub(r"\^(\d+|n)\^([+−–-])", r"^\1\2", text)  # Fe<sup>2</sup><sup>+</sup>, CO3<sup>2</sup><sup>–</sup>, M + H_n<sup>n</sup><sup>+</sup>, C60<sup>n</sup><sup>-</sup>
text = text.replace("^°", "°")  # 180<sup>°</sup> (Organic Chemistry): the degree sign is just text
# MathML <mover accent><mi>v</mi><mo>&tilde;</mo></mover> comes out "v˜": the wavenumber ṽ.
text = re.sub(r"(\w)˜", lambda m: tilde(m.group(1)), text)
text = re.sub(r"\^([+−–]\d*)\^(\d)", r"^\1\2", text)  # 10<sup>−</sup><sup>10</sup>, 10<sup>–1</sup><sup>4</sup>
text = text.replace("(opens in new window)", "")  # link label for screen readers
text = text.replace("​", "").replace("﻿", "")  # zero-width spaces ("World War ​​II")
text = text.replace("­", "")  # soft hyphens: invisible on the page ("a. ­mer-", Inorganic Chemistry 9.4)
# Electron configurations, corpus style: 1s^22s^2 -> 1s^2 2s^2
# (and 2p_x^12p_y^1 -> 2p_x^1 2p_y^1, with marked orbital subscripts)
text = re.sub(r"(\d[spdfg](?:_[xyz]+)?)\^(\d+?)(?=[1-9][spdfg])", r"\1^\2 ", text)
text = re.sub(r"(\d[spdfg](?:_[xyz]+)?)\^(\d+?)(?=[1-9][spdfg])", r"\1^\2 ", text)
for _ in range(2):  # tighten consecutive list items
    text = re.sub(r"(?m)^( *(?:- |[a-zA-Z]\. |\d+\.(?: |$)).*)\n\n(?= *(?:- |[a-zA-Z]\. |\d+\.(?: |$)))", r"\1\n", text)
print(text)
