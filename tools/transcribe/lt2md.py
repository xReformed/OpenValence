"""Mechanical LibreTexts page -> corpus markdown body.

Usage: python lt2md.py <page.html> <section-number e.g. 8.2>
Prints the markdown body (no front matter) to stdout. Never rewrites text:
it only drops markup, converts entities/LaTeX to plain text, and formats
boxes the way the rest of sources/openstax does.
"""
import html as html_lib
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
    # \sim as ∼, not "~": two single tildes on a line read as strikethrough in markdown (Physical Chemistry 13.4).
    # ln, log, exp are function names like sin: R \ln \dfrac{V}{V_A} -> R ln(V/VA), k \ln W -> k ln W (20.6).
    "sim": "∼", "log": "\x13log\x16", "ln": "\x13ln\x16", "exp": "\x13exp\x16",
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
    "scriptsize": "", "footnotesize": "", "tiny": "",
    # Γ1 ⊗ Γ2: the direct product of two representations (Physical Chemistry 12.15).
    "otimes": "⊗", "oplus": "⊕",
    "big": "", "Big": "", "bigg": "", "Bigg": "", "bigl": "", "bigr": "", "Bigl": "", "Bigr": "",
    "biggl": "", "biggr": "", "Biggl": "", "Biggr": "",
    # Physical Chemistry (LibreTexts) 13–14: an approximation (r_c ≅ r_e) and an allowed transition (|4⟩ ↔ |2⟩).
    "cong": "≅", "leftrightarrow": "↔", "longleftrightarrow": "⟷",
    "triangle": "△",  # \triangle H: the page shows a triangle where Δ is meant (Physical Chemistry 22.7)
    # A function name: spaced off from a coefficient before it (A sin(rx), not Asin(rx)).
    # And from a variable after it (\cos m\theta: cos mθ, not cosmθ; Physical Chemistry 2.5).
    "sin": "\x13sin\x16", "cos": "\x13cos\x16", "tan": "\x13tan\x16", "cot": "\x13cot\x16",
    # Physical Chemistry (LibreTexts) 2–4: operators, probabilities and set notation.
    # \lbrace and \rbrace are literal braces (\x1a \x1b until the end, like \{ \}).
    "vert": "|", "Vert": "‖", "ast": "*", "in": "∈", "notin": "∉", "imath": "i", "jmath": "j",
    "checkmark": "✓", "Rightarrow": "⇒", "Leftarrow": "⇐", "Leftrightarrow": "⇔",
    "iint": "∬", "iiint": "∭", "oint": "∮", "dots": "…", "bigtriangledown": "∇",
    "square": "□", "lbrace": "\x1a", "rbrace": "\x1b",
    # Physical Chemistry 5–6: φ written \varphi, i ≠ j written i \ne j, a result in a \boxed{…}.
    "varphi": "φ", "vartheta": "θ", "ne": "≠", "boxed": "",
    # A Slater determinant's elided rows and columns (Physical Chemistry 8.6).
    "vdots": "⋮", "ddots": "⋱", "mp": "∓",  # E = α ∓ β (10.5)
    "hslash": "ħ", "leadsto": "⇝",  # (9.1, 10.2)
    # Physical Chemistry 25–26: ⊖, an equilibrium sign typed \leftrightharpoons, ∴, the \it font switch.
    "ominus": "⊖", "leftrightharpoons": "⇋", "therefore": "∴", "it": "",
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
    # A lone Greek letter too: \left(\dfrac{a}{\pi}\right) -> (a/π), not (a/(π)) (Physical Chemistry 7.4).
    simple = re.fullmatch(r"[A-Za-zℓλνΔ]+(?:\^[−\d]+)?|[α-ωΑ-Ωħ](?:\^[−\d]+)?|[\d.]+", re.sub("[{}\x0e\x0f]", "", part))
    return part if simple else f"({part})"


def expand_frac(s):
    while (k := s.find("\\frac")) >= 0:
        num, after = brace_group(s, s.index("{", k))
        den, end = brace_group(s, s.index("{", after))
        frac = wrap(expand_frac(num)) + "/" + wrap(expand_frac(den))
        # The argument of a function: \log \dfrac{I_0}{I} -> log((I0)/I), not log(I0)/I;
        # braced or squared too, \sin{\dfrac{n \pi x}{L_x}}, \sin^2 \dfrac{3\pi x}{L} (Physical Chemistry 3.5, 3.9).
        # (\x01, \x16: the marks a converted command leaves, R \ln \dfrac{V}{V_A} (Physical Chemistry 20.6).)
        if re.search(r"(?:(?:\\|\b|\x13)(?:log|ln|exp|sin|cos|tan|cot)|(?:log|ln|exp)\x01)(?:\^\d+)?[\s{\x01\x16]*$", s[:k]):
            frac = f"({frac})"
        # A factor after a fraction: \dfrac{-8\pi^2m_eE}{h^2}\psi -> ((−8π^2 meE)/h^2)ψ, so ψ
        # can't be read as part of the denominator. Likewise a number or letter:
        # \frac{1}{4} 3(3+1) -> (1/4)3(3+1), not 1/43(3+1) (Inorganic Chemistry 10.1.2).
        # (Only right after it, not past a closing group: ^{\frac{1}{3}}a.)
        # So does an integral or root: \frac{2}{L}\int … -> (2/L)∫…, not 2/L∫… (Physical Chemistry 3.6),
        # a function, \frac{2}{L}\sin^2 … -> (2/L) sin^2…, and a bracket, \dfrac{h}{x}(f(x)+3) ->
        # (h/x)(f(x) + 3), not h/x(f(x) + 3) (Physical Chemistry 3.6, 4.6).
        # An average after it too, \dfrac{1}{2} \langle v \rangle -> (1/2)⟨v⟩ (Physical Chemistry 27.4).
        elif re.match(r"[{}]*[α-ωΑ-Ω∫∬∭∮√∇⟨]", s[end:]) or re.match(r"\{*\s*(?:[\w(\[\x0e]|\\langle\b)", s[end:]):  # \x0e: a struck-out factor; [ (8.6)
            # (also across groups: \textcolor{green}{\dfrac…}\textcolor{red}{\psi})
            frac = f"({frac})"
        # Two fractions side by side multiply: \frac{2hc^2}{\lambda^5}\frac{1}{e^{…}-1} ->
        # (2hc^2)/λ^5 · 1/(…), not …/λ^51/(…) (Physical Chemistry 1.2).
        if re.match(r"\s*\\frac", s[end:]):
            frac += " · "
        s = s[:k] + frac + s[end:]
    return s


DOT_ABOVE, TWO_ABOVE, DOT_BELOW, TWO_BELOW = "\u0307", "\u0308", "\u0323", "\u0324"


def tex_arg(s, i):
    """Read one TeX argument at s[i:]: a {group}, a command or a single character."""
    while i < len(s) and s[i] == " ":
        i += 1
    if i < len(s) and s[i] == "{":
        return brace_group(s, i)
    if (m := re.match(r"\\[A-Za-z]+", s[i:])):  # \underset{k_{-1}}\rightleftharpoons
        return m.group(), i + m.end()
    return s[i:i + 1], i + 1


def tilde(letter):
    """A letter with a tilde over it, precomposed where Unicode has one (ṽ)."""
    return unicodedata.normalize("NFC", letter + "̃")


def bracketed(s, close):
    """The text inside the bracket that closes at s[close] ( ")" or "]" )."""
    return s[opener(s, close) + 1:close]


def opener(s, close):
    """Where the bracket that closes at s[close] opens."""
    pair = {")": "(", "]": "["}[s[close]]
    depth = 0
    for i in range(close, -1, -1):
        depth += 1 if s[i] == s[close] else -1 if s[i] == pair else 0
        if depth == 0:
            return i
    return -1


def constraint(s, at):
    """Whether a subscript at s[at] on the bracket before it is a derivative's constraint: the bracket
    holds a fraction or derivative, ((∂U)/(∂T))_V, [((∂)/(∂V))(…)_V]_S, or follows a derivative operator,
    ((∂)/(∂V))(T)_V (Physical Chemistry 17.4, 22.3); or it is an evaluation bar after a fraction, dU/dV|_T."""
    if at == 0:
        return False
    if s[at - 1] == "|":
        return "/" in s[max(0, at - 40):at - 1]
    if s[at - 1] not in ")]":
        return False
    start = opener(s, at - 1)
    if re.search(r"[/∂]", s[start + 1:at - 1]):
        return True
    return start > 0 and s[start - 1] == ")" and "∂" in bracketed(s, start - 1)


MACROS = {}  # name -> (number of arguments, body): \newcommand definitions typed into the page itself


def read_macros(content):
    """A page that types its own \\newcommand definitions into its text, each in \\( … \\)
    (Physical Chemistry 26.3, from DeVoe's Thermodynamics and Chemistry): collect them for
    tex() to expand, and drop them from the text, which the page does not show."""
    definition = re.compile(r"\\\(\s*\\(?:re)?newcommand\s*\{?\s*\\([A-Za-z]+)\s*\}?\s*(?:\[(\d)\])?\s*(?=\{)")
    while (m := definition.search(content)):
        body, after = brace_group(content, m.end())
        close = content.find("\\)", after)
        # Math switched on inside a text box, \units = \mbox{$\thinspace$#1}: already math here.
        MACROS[m.group(1)] = (int(m.group(2) or 0), re.sub(r"(?<!\\)\$", "", html_lib.unescape(body)))
        tail = re.match(r"\s*(?:<br\s*/?>)?", content[close + 2:])
        content = content[:m.start()] + content[close + 2 + tail.end():]
    return content


def expand_macros(s):
    """Replace the page's own macros (MACROS) with their definitions, inner ones too."""
    for _ in range(10):
        before = s
        for name in sorted(MACROS, key=len, reverse=True):
            count, body = MACROS[name]
            while (m := re.search(r"\\" + name + r"(?![A-Za-z])", s)):
                end, args = m.end(), []
                for _ in range(count):
                    while end < len(s) and s[end] == " ":
                        end += 1
                    arg, end = tex_arg(s, end)
                    args.append(arg)
                text = body
                for k, arg in enumerate(args, 1):
                    text = text.replace(f"#{k}", arg)
                s = s[:m.start()] + "{" + text + "}" + s[end:]
        if s == before:
            break
    return s


def roman(n):
    """A list number in lower-case roman numerals: 4 -> iv."""
    out = ""
    for value, digits in ((10, "x"), (9, "ix"), (5, "v"), (4, "iv"), (1, "i")):
        while n >= value:
            out, n = out + digits, n - value
    return out


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
            if re.fullmatch(r"\s*(?:\\lim|\\(?:text|mathrm|operatorname)\s*\{\s*lim\s*\})\s*", body):
                # \underset{t \rightarrow \infty}{\text{lim}}: a limit, as \lim_{…} (Physical Chemistry 28.8).
                out += "\\lim_{" + dots + "} "
            elif re.sub(r"\\[,;: ]|\s", "", dots).strip("."):
                # A word label under a species (\underset{acid}{H^+}), not dots; one in brackets
                # of its own keeps just those, \underset{\text{(forward first step)}} (Physical Chemistry 29.6).
                bracketed = re.fullmatch(r"\s*(?:\\text\s*\{\s*\(.*\)\s*\}|\(.*\))\s*", dots, re.S)
                out += lewis_dots(body) + ("\\; " + re.sub(r"^\s*\\text\s*\{\s*\((.*)\)\s*\}\s*$", r"(\\text{\1})", dots, flags=re.S)
                                           if bracketed else "\\; (" + dots + ")")
            else:
                out += mark(lewis_dots(body), TWO_BELOW if dots.count(".") >= 2 else DOT_BELOW)
        else:
            body, i = tex_arg(s, i)
            out += mark(lewis_dots(body), TWO_ABOVE if m.group(1) == "ddot" else DOT_ABOVE)
    return out


SCRIPT = {"B": "ℬ", "E": "ℰ", "F": "ℱ", "H": "ℋ", "I": "ℐ", "L": "ℒ", "M": "ℳ", "R": "ℛ"}  # \mathcal letters
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
SIMPLE_SUP = re.compile(r"[+\-−–]?[\w.*′°⦵∞\x00\x0e\x0f]*[+\-−–]?")


def simple_sup(content):
    """A superscript that needs no grouping. A product of a number and a letter, or of
    letters, is an expression, e^{-4t}, e^{ikx} -> e^(−4t), e^(ikx) (Physical Chemistry
    2.2); an ordinal or a roman numeral is a word: i^th, Fe^III."""
    core = content.strip()
    if not SIMPLE_SUP.fullmatch(core):
        return False
    # A text run counts as a letter: \mathrm{e}^{\mathrm{i}\phi} -> e^(iφ) (Physical Chemistry 6.6).
    core = re.sub(r"\x00\d+\x00", "a", core).strip("+-−–")
    letters = re.sub(r"[\W\d_]", "", core)
    if re.search(r"\d[^\W\d_]", core) or (
            len(letters) >= 2 and not re.fullmatch(r"\d*(?:th|st|nd|rd)|[IVX]+", core)):
        return False
    return True


def group_sup(content):
    if simple_sup(content):
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
    # \begin{cases} 0 & 0 \leq x \leq L \\ \infty & … \end{cases}: a function defined piece
    # by piece (Physical Chemistry 3.5), written like a matrix: {0, 0 ≤ x ≤ L; ∞, …}.
    cases = re.compile(r"\\begin\s*\{cases\}((?:(?!\\begin\s*\{).)*?)\\end\s*\{cases\}", re.S)
    while True:
        if m := cases.search(s):
            inner = "; ".join(", ".join(tex(cell) for cell in row if cell) for row in rows_of(m.group(1)))
            s = s[:m.start()] + as_text("{" + inner + "}") + s[m.end():]
        elif (m := matrix.search(s)) and m.group(1) == "p" and len(rows := rows_of(m.group(2))) == 1 \
                and len(rows[0]) == 1:
            # A one-entry pmatrix is a pair of brackets: \dfrac{1}{\sqrt{6}}\begin{pmatrix} 2s_1 - s_2
            # - s_3 \end{pmatrix} -> (1/(√6))(2s1 − s2 − s3) (Physical Chemistry 12.8).
            s = s[:m.start()] + "\\left(" + rows[0][0] + "\\right)" + s[m.end():]
        elif m := matrix.search(s):
            left, right = brackets[m.group(1) + "matrix"]
            inner = "; ".join(", ".join(tex(cell) for cell in row) for row in rows_of(m.group(2)))
            s = s[:m.start()] + as_text(left + inner + right) + s[m.end():]
        elif m := array.search(s):
            spec, body = m.groups()
            rows = [[tex(cell) for cell in row] for row in rows_of(body)]
            if (re.search(r"\\left\s*(?:\(|\[|\||\\\{|\\lbrack|\\vert)\s*$", s[:m.start()])
                    and len(re.sub(r"[^lcr]", "", spec)) > 1):  # (one column is stacked text, below)
                # An array set inside \left( … \right) is a matrix or determinant, written as one:
                # det(φ1s α(1), φ1s β(1), φ2s α(1); …) (Physical Chemistry 8.6's Slater determinants).
                s = s[:m.start()] + as_text("; ".join(", ".join(c for c in row) for row in rows)) + s[m.end():]
            elif ("|" in spec or "\\hline" in body
                  # Unruled, but a grid of matrices: each operation's matrix under its name,
                  # its character below (Physical Chemistry 12.15).
                  or any(sum(bool(re.fullmatch(r"[(\[{|‖].*;.*[)\]}|‖]", c, re.S)) for c in row) >= 2
                         for row in rows)
                  # … or a grid of four or more columns with no cell opening on a relation (not
                  # aligned equations): characters under each operation, χ_3N: 9 −1 3 1 (12.10).
                  or (len(re.sub(r"[^lcr]", "", spec)) >= 4 and len(rows) >= 2
                      and not any(re.match(r"\s*[=<>≈≤≥→⟶⇌∝≡]", c)
                                  for row in rows for c in row))):
                width = max(len(row) for row in rows)
                rows = [row + [""] * (width - len(row)) for row in rows]
                # A bar in a cell is the cell's (a ket, |1⟩), not a column rule (Physical Chemistry 14.7).
                lines = ["| " + " | ".join(c.replace("|", "\\|") for c in row) + " |" for row in rows]
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
    if MACROS:
        s = expand_macros(s)
    # ~ is TeX's non-breaking space: 100 × 10^{-12}~\mathrm{m}. It is an explicit space, kept
    # through the whitespace removal below: "Lewis~basicity~of~B" (Inorganic Chemistry 6.4.4).
    # A ~ with spaces either side ties nothing: it means "about the same", \ce{py > NH3 ~ Cl^-}
    # (Inorganic Chemistry 12.6.2).
    s = re.sub(r"(?<= )~(?= )", r"\\sim", s)
    s = s.replace("\xa0", " ").replace("~", "\\ ")
    s = s.replace("​", "").replace("﻿", "")  # zero-width spaces: "XeF_​2" (Inorganic Chemistry 8.14.10)
    # Unicode typed into the TeX: 4π&#1013;_0, n^2&#8463;^2, 10^{&#8209;11} (Physical Chemistry 1.8).
    s = s.replace("ϵ", "ε").replace("ℏ", "ħ").replace("‑", "-").replace("‐", "-")  # also U+2010: m_{l2} ‐ 1 (8.8)
    # An en dash typed for minus before a command: \bar{V}_r&ndash;\dfrac{1}{3} (Physical Chemistry 16.4);
    # not a bond, O–H, or a range.
    s = re.sub(r"–(?=\s*\\[A-Za-z])", "-", s)
    # … and between spaced terms or after a bracket: x\ln x – x (17.2), 4(799)&ndash;2(463) (19.12).
    s = re.sub(r"(?<=[\s)])–(?=[\s\d(])", "-", s)
    s = re.sub("[\u2061-\u2063]", "", s)  # invisible "function application": exp\u2061 (Physical Chemistry 5.7)
    # The cross product typed as a letter: v_{i} = \omega{X}r_{i} (Physical Chemistry 5.8) -> vi = ω × ri.
    s = re.sub(r"(\\omega|v_\{i\})\{X\}", r"\1\\times ", s)
    # \mathcal{E}: a script capital, ℰ (Physical Chemistry 17.5); one without a Unicode form keeps its letter.
    s = re.sub(r"\\mathcal\s*\{\s*([A-Z])\s*\}", lambda m: SCRIPT.get(m.group(1), m.group(1)), s)
    # \ln{p_jA}: a braced argument of several symbols is bracketed, ln(pj A), not ln pj A (Physical Chemistry 20.8).
    s = re.sub(r"\\(ln|log|exp)\s*\{((?:[^{}]|\{[^{}]*\})*)\}",
               lambda m: f"\\{m.group(1)}" + ("{" + m.group(2) + "}"
                                               if re.fullmatch(r"\s*(?:\\[A-Za-z]+|\w)\s*(?:_\s*(?:\{[^{}]*\}|\w))?\s*", m.group(2))
                                               or re.match(r"\s*(?:\\left\s*)?\(", m.group(2))  # bracketed already
                                               else "\\left(" + m.group(2) + "\\right)"), s)
    # T>> \Theta: "much greater than" typed as two signs, ≫ (Physical Chemistry 18.5); and << as ≪.
    s = re.sub(r"(?<![<>=-])>\s*>(?![>=])", r"\\gg ", s)
    s = re.sub(r"(?<![<>=-])<\s*<(?![<=])", r"\\ll ", s)
    # A command straight before an accented symbol keeps its name: \cdot\hat{\vec{I}_2} is · Î⃗2,
    # not the unknown command \cdotI (Physical Chemistry 14.7); \partial\bar{U} is ∂Ū (19.6).
    s = re.sub(r"(\\[A-Za-z]+)(?=\\(?:wide)?(?:hat|tilde)\b|\\(?:vec|overrightarrow|bar|overline|dot|ddot)\b)", r"\1 ", s)
    # Bold type under an accent can't be shown; the accent is on the letter: \dot{\textbf{r}}_i -> ṙi (17.1).
    s = re.sub(r"(\\(?:(?:wide)?(?:hat|tilde)|vec|bar|dot|ddot)\s*\{\s*)\\(?:boldsymbol|mathbf|bm|textbf|bf)\s*\{([^{}]*)\}(\s*\})",
               r"\1\2\3", s)
    # \dfrac{1}{P} .\dfrac{dP}{dT}: a full stop typed for a multiplication dot between fractions (23.4).
    s = re.sub(r"(?<=\})\s*\.\s*(?=\\[dt]?frac\b)", "", s)  # (two fractions side by side then get " · ")
    # (k/\mu)^\dfrac{1}{2}: a fraction exponent without braces is still the whole exponent,
    # (k/μ)^(1/2), not (k/μ)^1/2 (Physical Chemistry 13.2).
    s = re.sub(r"\^\s*(\\[dt]?frac\s*\{[^{}]*\}\s*\{[^{}]*\})", r"^{\1}", s)
    # v^{'}, v^": a prime set as a superscript is a prime, v' and v" (Physical Chemistry 15.1).
    s = re.sub(r"\^\s*\{\s*('+|\")\s*\}|\^\s*(\")", lambda m: m.group(1) or m.group(2), s)
    # Source typo: "\text(18.1)" (Physical Chemistry 12.15) \u2014 an equation number typed with parentheses, not braces.
    s = re.sub(r"\\text\s*\((?=[\d.]+\))", "(", s)
    # The part letter can be a capital: \PageIndex{1A} (Organic Chemistry 29.5, a figure in two parts).
    s = re.sub(r"\\PageIndex\{(\d+)([A-Za-z]*)\}", lambda m: f"{SEC}.{m.group(1)}{m.group(2)}", s)
    # \ket{a}, \bra{a}, \braket{a}{b}: Dirac notation macros the page defines (Physical Chemistry 9.9).
    for _ in range(3):  # nested: \ket{\psi} inside other groups
        s = re.sub(r"\\ket\s*\{((?:[^{}]|\{[^{}]*\})*)\}", r"|\1\\rangle ", s)
        s = re.sub(r"\\bra\s*\{((?:[^{}]|\{[^{}]*\})*)\}", r"\\langle \1|", s)
        s = re.sub(r"\\braket\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}",
                   r"\\langle \1|\2\\rangle ", s)
    # \{X_i(x)T_i(t)\}: literal braces, a set (Physical Chemistry 2.2), kept out of the
    # brace handling below until the end.
    s = s.replace("\\{", "\x1a").replace("\\}", "\x1b")
    # \int\limits_a^b: limits set above and below; they read the same here.
    s = re.sub(r"\\(?:no)?limits(?![A-Za-z])", "", s)
    # \not= and \not\in: a struck-through relation (Physical Chemistry 4.6).
    s = re.sub(r"\\not\s*=", r"\\neq ", s)
    s = re.sub(r"\\not\s*\\in(?![A-Za-z])", r"\\notin ", s)
    # A \not before anything else strikes nothing meaningful: ⟨ψ_v'|\not \hat{\mu}(x)|ψ_v⟩
    # (Physical Chemistry 5.5) is the transition moment ⟨ψ_v'|μ̂(x)|ψ_v⟩; a [Note] says so.
    s = re.sub(r"\\not(?![A-Za-z])\s*", "", s)
    # {\partial \over \partial x}: plain TeX's fraction (Physical Chemistry 3.8), as \frac.
    while (m := re.search(r"\\over(?![A-Za-z])", s)):
        depth, start = 0, m.start()
        while start > 0 and not (s[start - 1] == "{" and depth == 0):
            start -= 1
            depth += {"}": 1, "{": -1}.get(s[start], 0)
        if start == 0:  # no group around it: the whole expression is the fraction
            s = "{" + s + "}"
            continue
        _, end = brace_group(s, start - 1)
        s = (s[:start - 1] + "\\frac{" + s[start:m.start()] + "}{" + s[m.end():end - 1] + "}"
             + s[end:])
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
    # displayed (Inorganic Chemistry 8.2). A command moved to the end is braced, or it
    # runs into what follows: \int ^\infty_{-\infty}x -> \int _{-\infty}^{\infty}x (Physical Chemistry 3.8).
    # A script may hold one group of its own: \int^{\frac{L}{2}}_0 (Physical Chemistry 3.5).
    group = r"\{(?:[^{}]|\{[^{}]*\})*\}"
    s = re.sub(r"\^\s*(?!\{?\s*(?:\\circ(?![A-Za-z])|°|\\degree(?![A-Za-z])))(" + group
               + r"|\\[A-Za-z]+|[^\s{}\\_^()\[\]])\s*_\s*(" + group + r"|\\[A-Za-z]+|\w|[+-](?![\w{\\]))",  # \mu^*_+ (24.7)
               lambda m: "_" + m.group(2) + "^" + ("{" + m.group(1) + "}" if m.group(1).startswith("\\")
                                                   else m.group(1)), s)
    # A superscript ends before a number set after it: 1\sigma^2_g 1\sigma^2_u -> 1σg^2 1σu^2,
    # not 1σg^21σu^2 (Physical Chemistry 9.6).
    s = re.sub(r"(\^\s*(?:\{[^{}]*\}|\\[A-Za-z]+|\w))(?=\s+\d)", r"\1\\ ", s)
    # The limits of an evaluation bar end before what follows: \right|_{x_0}^{x} (x - x_0)
    # -> |_x0^x (x − x0), not |_x0^x(x − x0) (Physical Chemistry 5.3).
    s = re.sub(r"(\\(?:right|[bB]ig[lr]?)\s*\|\s*_\s*(?:\{[^{}]*\}|\w)\s*\^\s*(?:\{[^{}]*\}|\w))", r"\1\\ ", s)
    # A group holding a superscript, raised to a power, is bracketed: {\sigma^*_{1s}}^2 ->
    # (σ_1s^*)^2, not σ_1s^*^2 (Physical Chemistry 9.10).
    s = re.sub(r"(?<![_^A-Za-z])\{((?:[^{}]|\{[^{}]*\})*\^(?:[^{}]|\{[^{}]*\})*)\}(?=\s*\^)", r"\\left(\1\\right)", s)
    # \phi_{N/2}^1: a fraction as a subscript, with a superscript after it, is grouped (9.9).
    s = re.sub(r"_\{([^{}()]*/[^{}()]*)\}(?=\s*\^)", r"_{(\1)}", s)
    # \psi_\uparrow: a spin arrow as a subscript joins its symbol, ψ↑ (10.1); \ue000/\ue001 until the end.
    s = re.sub(r"_\s*\{?\s*\\uparrow\s*\}?", "\ue000", s)
    s = re.sub(r"_\s*\{?\s*\\downarrow\s*\}?", "\ue001", s)
    # \left. and \right.: an invisible delimiter, the open side of |_a^b (Physical Chemistry 3.5).
    s = re.sub(r"\\(?:left|right)\s*\.", "", s)
    # \cancelto{S}{⟨ψa|ψ'a⟩}: a term struck out, with the value it becomes, "~~⟨ψa|ψ'a⟩~~ (→ S)"
    # (Physical Chemistry 3.6, 4.5); \cancel below would strike the value instead.
    while (k := s.find("\\cancelto")) >= 0 and "{" in s[k:]:
        value, after = tex_arg(s, k + len("\\cancelto"))
        body, end = tex_arg(s, after)
        s = s[:k] + "\\cancel{" + body + "}\\;(\\rightarrow " + value + ")" + s[end:]
    # A struck-out relation is its negation: \xcancel{<} is ≮ (Physical Chemistry 4.1).
    s = re.sub(r"\\[bx]?cancel\s*\{\s*(?:<|\\lt)\s*\}", "≮", s)
    s = re.sub(r"\\[bx]?cancel\s*\{\s*(?:>|\\gt)\s*\}", "≯", s)
    s = re.sub(r"\\[bx]?cancel\s*\{\s*=\s*\}", r"\\neq ", s)
    # \bcancel and \xcancel strike out as \cancel does (Physical Chemistry 2.4).
    s = re.sub(r"\\[bx]cancel(?![A-Za-z])", r"\\cancel", s)
    # \overset{k_1}{\underset{k_{-1}}{\rightleftharpoons}}: rate constants over and under an equilibrium
    # arrow, the forward one on top -> "⇌ (k1, k−1)", in that order (Physical Chemistry 29.6).
    # \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} nests them the other way (28.5).
    k = 0
    while (m := re.compile(r"\\(over|under)set\s*(?=\{)").search(s, k)):
        outer, after = tex_arg(s, m.end())
        other = "under" if m.group(1) == "over" else "over"
        if (inner := re.match(r"\s*\{\s*\\" + other + r"set\s*(?=\{)", s[after:])):
            nested, i = tex_arg(s, after + inner.end())
            base, i = tex_arg(s, i)
            if (close := re.match(r"\s*\}", s[i:])):
                over, under = (outer, nested) if m.group(1) == "over" else (nested, outer)
                s = s[:m.start()] + base + "\\; (" + over + ", " + under + ")\\; " + s[i + close.end():]
        k = m.start() + 1
    s = lewis_dots(s)
    s = s.replace("\\dfrac", "\\frac").replace("\\tfrac", "\\frac").replace("\\%", "%")
    s = s.replace("\\#", "#")  # \#molecules: the number of molecules (Physical Chemistry 26.8)
    # \left< … \right>: angle brackets, an average, not less-than and greater-than (Physical Chemistry 27.6).
    s = re.sub(r"\\left\s*<", r"\\langle ", s)
    s = re.sub(r"\\right\s*>", r"\\rangle ", s)
    # ν_+ inside a script, C_{\nu_+}, a^{\nu_+}: the stoichiometric numbers ν+ and ν−, written
    # as one script, C_(ν+), not C_ν_(+) (Physical Chemistry 25.5).
    s = re.sub(r"([_^])\s*\{\s*(\\nu|ν)\s*_\s*\{?\s*([+-])\s*\}?\s*\}", r"\1{\2\3}", s)
    # μ^{-\ominus}: a minus and ⊖ set together for the standard-state sign ⦵ (Physical Chemistry 25.2).
    s = re.sub(r"-\s*(?:\{\s*\\ominus\s*\}|\\ominus(?![A-Za-z]))", "⦵", s)
    # \underline{M}: the unit underlined; markdown has no underline (Physical Chemistry 24.8).
    s = re.sub(r"\\underline\s*\{\s*(\w)\s*\}", "\\1\u0332", s)
    # \dfrac {1}2: a one-character argument without braces, braced, or the next group in the
    # expression would be read as the denominator (Physical Chemistry 8.6).
    arg = r"(\{(?:[^{}]|\{[^{}]*\})*\}|\\[A-Za-z]+|[^\s{}\\])"
    s = re.sub(r"\\frac\s*" + arg + r"\s*" + arg,
               lambda m: "\\frac" + "".join(a if a.startswith("{") else "{" + a + "}" for a in m.groups()), s)
    # {\left[C\right]}/{[A][B]}: a braced denominator after a slash is grouped when it is more than
    # one symbol, [C]/([A][B]), not [C]/[A][B] (Physical Chemistry 29.5).
    s = re.sub(r"(?<=\})\s*/\s*\{((?:[^{}]|\{[^{}]*\})*)\}",
               lambda m: "/" + ("{" + m.group(1) + "}" if re.fullmatch(r"\s*(?:\\?[A-Za-z]+|[\d.]+)\s*", m.group(1))
                                else "\\left(" + m.group(1) + "\\right)"), s)
    s = re.sub(r"\^\{\s*\^\{([^{}]*)\}\s*\}", r"^{\1}", s)  # n^{^{2}} (Inorganic Chemistry 2.1.2): n^2
    # A subscript that is a condition: \psi_{x=0} -> ψ_(x=0), not ψ_x = 0.
    s = re.sub(r"_\{([^{}]*=[^{}]*)\}", lambda m: "_{(" + m.group(1).replace("=", "\x14") + ")}", s)
    s = re.sub(r"\\label\s*\{[^{}]*\}", "", s)  # equation labels are never displayed
    s = re.sub(r"\\label(?![A-Za-z])(?!\s*\{)", "", s)  # nor a \label left without one (Physical Chemistry 8.4)
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
    # {4\choose 2}, \binom{4}{2}: a binomial coefficient, "(4 choose 2)" (Physical Chemistry 14.7).
    s = re.sub(r"\{\s*(\w+)\s*\\choose\s*(\w+)\s*\}|\\binom\s*\{\s*(\w+)\s*\}\s*\{\s*(\w+)\s*\}",
               lambda m: as_text(f"({m.group(1) or m.group(3)} choose {m.group(2) or m.group(4)})"), s)
    # \xrightarrow{\Delta}, \xrightarrow[below]{above}: a labelled arrow -> "→ (Δ)".
    while (m := re.search(r"\\xrightarrow\s*(?:\[([^\[\]]*)\])?\s*(?=\{)", s)):
        above, end = brace_group(s, m.end())
        label = ", ".join(part for part in (above.strip(), (m.group(1) or "").strip()) if part)
        s = s[:m.start()] + "\\rightarrow" + (f"\\; ({label})\\; " if label else "") + s[end:]
    # \underbrace{reaction}_{\text{Direct combustion}}: a label under an expression; and
    # \overbrace{\psi^*}^{R_{n,l}Y_l^{m_l}}, one over it (Physical Chemistry 6.4).
    while (m := re.search(r"\\(under|over)brace\s*(?=\{)", s)):
        body, end = brace_group(s, m.end())
        label = ""
        if (under := re.match(r"\s*[_^]\s*(?=\{)", s[end:])):
            label, end = brace_group(s, end + under.end())
            # _{=4\pi v^2}, already bracketed as a condition above: one pair (Physical Chemistry 27.3).
            label = re.sub(r"^\((.*\x14.*)\)$", r"\1", label, flags=re.S)
        # A sum or difference labelled as a whole is bracketed (Physical Chemistry 8.2), not a
        # chemical equation (\ce{…}), which reads as one already.
        if (label and "\\ce" not in body
                and not re.search(r"\\(?:long)?rightarrow|\\rightleftharpoons|\\leftrightarrow|->|<=>|[→⇌]", body)
                and re.search(r"(?<=[^\s{(])\s*[-+]\s*(?=\S)", body.strip())
                and not re.fullmatch(r"\s*[\[(].*[\])]\s*", body, re.S)):  # [ … ] is bracketed already
            body = "(" + body + ")"
        s = s[:m.start()] + body + (f"\\; ({label})" if label else "") + s[end:]
    s = re.sub(r"\\mathring\s*\{\s*(?:\\mathrm\s*\{\s*A\s*\}|A)\s*\}", "Å", s)  # \mathring{\mathrm{A}}: ångström
    s = re.sub(r"\\ce\s+(\w+)", r"\\ce{\1}", s)  # "\ce C": a one-token argument without braces
    # m_\ce{H}, m_\ce{^35Cl}: a formula as a subscript, braced (Physical Chemistry 5.2); a
    # plain one joins (mH), one with a mass number is grouped, m_(^35Cl).
    s = re.sub(r"_\s*\\ce\s*\{\s*([A-Za-z]+)\s*\}", r"_{\1}", s)
    # m_\mathrm{e} e^2: an upright subscript without braces, braced (Physical Chemistry 8.1).
    s = re.sub(r"_\s*(\\(?:mathrm|textrm|text|textbf)\s*\{[^{}]*\})", r"_{\1}", s)  # \textbf too (28.8)
    s = re.sub(r"_\s*\\ce\s*(\{[^{}]*\})", r"_{\\ce\1}", s)
    s = re.sub(r"\\PageIndex\{\}", "", s)  # "Exercise \(\PageIndex{}\)": the source left the number out
    s = re.sub(r"\\rule\s*\{[^{}]*\}\s*\{[^{}]*\}", "", s)  # a drawn line under a sum (Inorganic Chemistry 6.3.6)
    s = environments(s)
    # Source typo: "\widetilde{ u}" (Inorganic Chemistry 2.1) — "\n" of \nu lost to a newline.
    s = re.sub(r"\\widetilde\{ u\}", "\\\\tilde{ν}", s)
    # \widetilde{\nu}, \bar {\nu}: an accent over a Greek letter (Physical Chemistry 1.2, 1.4): ν̃, ν̄.
    s = re.sub(r"\\(?:wide)?tilde\s*\{\s*\\([A-Za-z]+)\s*\}",
               lambda m: unicodedata.normalize("NFC", SYMBOLS.get(m.group(1), m.group(1)) + "\u0303"), s)
    # \tilde{\chi_e}: the accent on the letter, its subscript after: χ̃e (Physical Chemistry 13.5).
    s = re.sub(r"\\(?:wide)?tilde\s*\{\s*\\([A-Za-z]+)\s*(_\s*(?:\{[^{}]*\}|\w))\s*\}",
               lambda m: unicodedata.normalize("NFC", SYMBOLS.get(m.group(1), m.group(1)) + "\u0303") + m.group(2), s)
    # (after a letter too, and without braces: d\bar\mu_i -> d\u03bc\u0304i, Physical Chemistry 22.8)
    s = re.sub(r"(?<!\\)\\bar\s*(?:\{\s*(?:\\([A-Za-z]+)|(\w))\s*\}|\\([A-Za-z]+)(?![A-Za-z]))|(?<!\\)\\bar\s+(\w)",
               lambda m: unicodedata.normalize("NFC", SYMBOLS.get(m.group(1) or m.group(3), m.group(1) or m.group(3))
                                               if (m.group(1) or m.group(3)) else (m.group(2) or m.group(4))) + "\u0304", s)
    s = re.sub(r"\\(?:wide)?tilde\{?\s*(\w)\}?", lambda m: tilde(m.group(1)), s)  # \tilde{v}: wavenumber ṽ
    # \sum_i^n m_{l_i}: a space between the sum's limits and its term, Σi^n m_li, not Σi^nm_li (Inorganic Chemistry 11.2).
    s = re.sub(r"\\sum\s*_\{?(\w+)\}?\s*\^\{?(\w+)\}?\s*", "Σ_\\1^\\2\\\\ ", s)
    # … and a condition below it, \sum_{i=1}^N \textbf{p}_i^2 in an exponent (Physical Chemistry 28.8).
    s = re.sub(r"\\sum\s*_(\{\([^{}]*\)\})\s*\^(\{\s*\w+\s*\}|\w(?![\w{]))\s*", "Σ_\\1^\\2\\\\ ", s)
    # \bar{v}: the wavenumber written with a bar, v̄ (Inorganic Chemistry 11.1.1).
    s = re.sub(r"\\bar\{?\s*(\w)\}?", lambda m: m.group(1) + "̄", s)
    # \hat{\boldsymbol{\mu}}: bold type under the hat can't be shown; the hat is on μ (Physical Chemistry 12.15).
    s = re.sub(r"(\\(?:wide)?hat\s*\{\s*)\\(?:boldsymbol|mathbf|bm)\s*\{\s*(\\[A-Za-z]+|\w)\s*\}(\s*\})", r"\1\2\3", s)
    # \hat {\vec {p}}: a vector operator, p̂⃗ (Physical Chemistry 3.3).
    s = re.sub(r"\\(?:wide)?hat\s*\{\s*\\vec\s*\{?\s*(\w)\s*\}?\s*\}", "\\1\x18\x15", s)
    # \hat {KE}: a hat over a name, over each letter (Physical Chemistry 3.3).
    s = re.sub(r"\\(?:wide)?hat\s*\{\s*([A-Za-z]{2,})\s*\}",
               lambda m: unicodedata.normalize("NFC", "".join(c + "̂" for c in m.group(1))), s)
    # \hat{H}: an operator, Ĥ; \hat {A} with a space too (Physical Chemistry 4.5). In
    # \hat{P_x} the hat is on the P, and the group stays open: {P̂_x}.
    s = re.sub(r"\\(?:wide)?hat\s*(?:\{\s*(\w)\s*\}|(\{)\s*(\w)|(\w))",
               lambda m: (m.group(2) or "") + unicodedata.normalize(
                   "NFC", (m.group(1) or m.group(3) or m.group(4)) + "̂"), s)
    # \hat{\sigma}_{xz}: the same on a Greek letter (Inorganic Chemistry 4.3.2).
    s = re.sub(r"\\(?:wide)?hat\s*\{\s*(\\[A-Za-z]+)\s*\}", "\\1\x18", s)
    # \vec{\mu}, \vec{r}_i, \vec{v_1}: a vector, with an arrow over its symbol (μ⃗, v⃗_1);
    # \overrightarrow {x} too (Physical Chemistry 11.2).
    s = re.sub(r"\\(?:vec|overrightarrow)\s*\{\s*(\\[A-Za-z]+|\w)", lambda m: "{" + m.group(1) + "\x15", s)
    s = re.sub(r"\\(?:vec|overrightarrow)\s*(\\[A-Za-z]+|\w)", lambda m: m.group(1) + "\x15", s)
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
    s = re.sub(r"\\(?:mathrm|textrm|text)\s+(\w)", r"\1", s)
    # \tag{Henderson-Hasselbalch }: an equation's name, printed beside it in parentheses.
    s = re.sub(r"\\tag\{([^{}]*)\}", lambda m: f"\\text{{  ({m.group(1).strip()})}}", s)
    s = re.sub(r"\\operatorname\{(\w+)\}", r"\1", s)  # \operatorname{antilog}(2.54)
    # \begin{align*} x + (−6) &= −1 \\ x &= +5 \end{align*}: drop the environment
    # and its alignment marks; the line breaks between steps are kept.
    is_align = bool(re.search(r"\\begin\s*\{align", s)) and "\\begin{eqnarray" not in s
    # "\end {align*}" with a space too (Physical Chemistry 19.13).
    s = re.sub(r"\\(?:begin|end)\s*\{(?:align|aligned|eqnarray|gather|split|equation)\*?\}", "", s)
    # In align, every second "&" starts another equation on the same line: "\hat I_z|\alpha\rangle
    # &= \tfrac12|\alpha\rangle & \hat I_z|\beta\rangle &= …" (Physical Chemistry 14.7); keep them apart.
    if is_align:
        rows = re.split(r"(\\\\)", s)
        for n in range(0, len(rows), 2):
            parts = rows[n].split("&")
            rows[n] = parts[0] + "".join(("" if k % 2 else "\\text{; }") + p for k, p in enumerate(parts[1:], 1))
        s = "".join(rows)
    s = s.replace("&", "")
    s = re.sub(r"(?:\\\\(?:\[[^\]]*\])?\s*)+$", "", s)  # a break after the last step ends nothing (Physical Chemistry 14.7)
    s = re.sub(r"\\\\(?:\[[^\]]*\])?", "\x06", s)  # a line break between steps (\\[4pt] too); becomes a paragraph break
    # \sqrt{b^2-4ac} -> √(b^2−4ac); a single token needs no parentheses (√2), but a
    # product does: \sqrt{2m_eE} -> √(2meE), not √2meE.
    while (k := s.find("\\sqrt")) >= 0 and "{" in s[k:]:
        body, end = tex_arg(s, k + len("\\sqrt"))
        # Nor is one with a factor right after it: \sqrt{K}x -> √(K)x, not √Kx (Physical Chemistry 2.2).
        # Several letters are a product too: \sqrt{mk} -> √(mk), not √mk (Physical Chemistry 13.7).
        single = (re.fullmatch(r"\w+", body) and not re.search(r"\d[^\W\d_]|_|[^\W\d_]{2}", body)
                  and not re.match(r"\s*(?:\w|\\(?![,;: !]|left|right|[bB]ig))", s[end:]))
        s = s[:k] + ("√" + body if single else "√(" + body + ")") + s[end:]
    # \overset{100\%}{\rightarrow}: a label printed above an arrow -> "→ (100%)".
    while (k := s.find("\\overset")) >= 0 and "{" in s[k:]:
        over, after = tex_arg(s, k + len("\\overset"))
        base, end = tex_arg(s, after)
        s = s[:k] + base + "\\; (" + over + ")\\; " + s[end:]
    # \stackrel{\circ}{A}: the ångström sign, Å (Physical Chemistry 5.9).
    s = re.sub(r"\\(?:stackrel|overset)\s*\{\s*\\circ\s*\}\s*\{\s*(?:\\mathrm\s*\{\s*A\s*\}|A)\s*\}", r"\\,Å", s)
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
        body = re.sub(r"(?<=[A-Za-z\d)])#(?=[A-Za-z(])", "≡", body)  # \ce{N#N}: a triple bond (9.10)
        # ->[\text{electric}][\text{discharge}]: an arrow with conditions over and under it,
        # "→ (electric discharge)" (Inorganic Chemistry 8.11.4).
        body = re.sub(r"\s*->\[([^\[\]]*)\](?:\[([^\[\]]*)\])?\s*",
                      lambda m: " → (" + " ".join(re.sub(r"\\text\s*\{([^{}]*)\}", r"\1", part).strip()
                                                  for part in m.groups() if part) + ") ", body)
        body = re.sub(r"\s*(?:->|\\rightarrow)\s*", " → ", body)
        # <=>[k_1][k_{-1}]: an equilibrium's rate constants, "⇌ (k1, k−1)" (Inorganic Chemistry 12.2.3).
        # A negative subscript keeps its "_", k_−1, not k-1 read as k minus 1 (Physical Chemistry 29.7).
        body = re.sub(r"\s*<=>\[([^\[\]]*)\](?:\[([^\[\]]*)\])?\s*",
                      lambda m: " ⇌ (" + ", ".join(re.sub(r"_\s*\{?\s*-\s*(\d+)\s*\}?", "\x1d−\\1", part.strip())
                                                   for part in m.groups() if part) + ") ", body)
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
        s = s[:k] + "\\text{" + body.replace("_", "").replace("{", "").replace("}", "").replace("\x1d", "_") + "}" + s[end:]
    s = re.sub(r"\\(text|textrm|mathrm|textbf|textit|mbox)\s*\{([^{}]*)\}", protect, s)
    s = s.replace("\\!", "")  # a negative thin space: d\!ν
    # A space opening a sub- or superscript is only kerning: N_{\,JM} -> NJM (Physical Chemistry 13.12).
    s = re.sub(r"([_^]\s*\{)\s*(?:\\[,;:]\s*)+", r"\1", s)
    # An integral's limits end before its integrand: \int_0^k x^2 -> ∫0^k x^2, not ∫0^kx^2;
    # a double or triple one's too (\iint, Physical Chemistry 3.6).
    s = re.sub(r"(\\(?:i+nt|oint)\s*_\s*(?:\{[^{}]*\}|\\[A-Za-z]+|\w)\s*\^\s*(?:\{[^{}]*\}|\\[A-Za-z]+|\w))",
               r"\1\\ ", s)
    # A number subscript before a number is a product: g_2 4.5\times 10^{-5} -> g2 4.5 × 10^−5, not g24.5 (18.2).
    s = re.sub(r"(_\s*(?:\{\s*\d+\s*\}|\d))\s+(?=\d)", "\\1\x04", s)
    # \qquad sets a condition apart from its equation, (2J + 1)^2 \qquad J = 0, 1, 2 (18.8): a column gap.
    s = s.replace("\\qquad", "\x04\x04\x04")
    s = re.sub(r"\\[,;: ]|\\quad", "\x04", s)  # explicit TeX spaces survive
    s = re.sub(r"\\([A-Za-z]+)", lambda m: SYMBOLS.get(m.group(1), "\\" + m.group(1)) + "\x01", s)
    s = re.sub(r"\s+", "", s).replace("\x01", "")
    # A one-letter superscript is spaced off from a letter after it: \sum_{n=0}^v c_n x^n
    # -> Σ_(n=0)^v cn x^n, 2^v v!, (r/a0)^l L (Physical Chemistry 5.6, 5.7, 6.4). A word
    # superscript was braced (i^{th}) and is untouched.
    s = re.sub(r"(\^[A-Za-zα-ωΑ-Ω∞])(?=[A-Za-zα-ωΑ-Ω\\])", "\\1\x04", s)
    # So is a one-digit one from the digit after it, as TeX sets it: 1\sigma_g^21\sigma_u^2 ->
    # 1σg^2 1σu^2 (Physical Chemistry 9.15): only before a molecular orbital's number and Greek
    # letter, since d^10 and 10^23 are typed for d^{10} and 10^{23}.
    s = re.sub(r"(\^\d)(?=\d[α-ωΑ-Ω])", "\\1\x04", s)
    # A one-letter variable before a fraction is a separate factor: y\dfrac{d}{dx} -> y d/dx (5.8).
    # γ 3/(4a^2) (7.4); a one-letter subscript too, \sum_{R}\dfrac{1}{…} -> ΣR 1/(…) (8.3).
    # An accented one too: \tilde{B}\dfrac{1}{\sigma\tilde{B}} -> B̃ 1/(σB̃), not B̃1/(σB̃) (18.11).
    s = re.sub(r"(?<![A-Za-z\\])([A-Za-zα-ωΑ-Ω][\u0300-\u036f]*\}?)(?=\\frac)", "\\1\x04", s)
    s = re.sub("(?<=[\\w)′}\x00])\x13", "\x04", s).replace("\x13", "")  # A sin(rx); sin(ra) = 0
    s = re.sub("\x16(?=\\{?[^\\W_])", "\x04", s).replace("\x16", "")  # sin kx, \cos{2\phi}; sin(kx), sin^2
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
        # Not a charge but an exponent with a sign in it: a_+^{ν+} -> a_(+)^(ν+), not a_(+)^ν+ read
        # as a sum (Physical Chemistry 25.5); nor a starred power, T_m^{*2} -> Tm^(*2) (25.3).
        # (Only ν: δ+ is a partial charge, A^δ−B^δ+.)
        if not simple_sup(flat) or re.fullmatch(r"\s*(?:ν|\\nu)\s*[+−]\s*|\*\s*\w+", flat):
            left, right = ("\x11", "\x12") if re.search(r"[()]", flat) else ("(", ")")
            # A charge after a group is a sign, not an operator: A^{(n+1)+} (Inorganic Chemistry 2.3).
            # So is one ending a mixed-valence label: Cr^{4/3+} (Inorganic Chemistry 8.2.4).
            body = re.sub(r"(?<=[\w)])[+−]$", lambda c: sign(c.group()), body)
            # \x08 keeps a coefficient on its variable, e^(−4t), from the number-unit spacing below.
            body = re.sub(r"(?<=\d)(?=[^\W\d_])", "\x08", body)
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
    def integral_limit(m):
        return m.start() > 0 and m.string[m.start() - 1] in "∫∬∭∮"

    def word_sub(content, limit=False):
        # A sign in a subscript belongs to its label, and a label of several words is
        # grouped: NE^{\circ}_{+4~O.S.} -> NE°_(+4 O.S.) (Inorganic Chemistry 8.2.4.3).
        # So is one holding an arrow or operator: \lim_{n_2 \to \infty} -> lim_(n2→∞).
        # And a fraction with a bracketed part: \int_{\frac{99 L}{200}} -> ∫_((99L)/200),
        # not ∫_(99L)/200 (Physical Chemistry 3.6).
        # A list or a range too: \iint_{a_1, a_2} -> ∬_(a1, a2), P_{x \in a:b} -> P_(x∈a:b);
        # not a comma already in brackets: ψ_{(n,l,m_l)}, CX_{4(l,s)} (Inorganic Chemistry 2.2, 8.7).
        # And a sum or difference: x_{n-1} -> x_(n−1), not x_n − 1 (Physical Chemistry 2.3).
        # And a relation or a superscript: \sum_{i \ne j} -> Σ_(i ≠ j), d_{z^2} -> d_(z^2),
        # \psi_{21\pm 1} -> ψ_(21±1); a text run counts by its text, \int_{\text{all space}} (6.2, 6.7).
        # And a quotient of a letter: C_{n/2} -> C_(n/2), not C_n/2 (12.2); t_{1/2} stays.
        test = re.sub("\x00(\\d+)\x00", lambda t: keep[int(t.group(1))], content)
        if re.fullmatch(r"\s*\([^()]*\)\s*", content):  # bracketed already: ∫_{(L/2)}, φ_{(N/2)}
            return content.strip()
        # And a ladder operator's label with its sign: \hat I_{1+} -> Î_(1+), not Î_1 + (Physical Chemistry 14.7).
        # And one holding a subscript of its own, an integral's limit \int_{V_{initial}} -> ∫_(V_initial) (19.2).
        if (" " in test.strip() or re.search(r"[→↔⟷=<>≤≥∈≠≈≡^\x19]|\)/|/\(|\w[+−±]\w|[A-Za-z]/\w|^\w+[+−]$", test)
                or ("\x10" in test and limit)
                or "," in re.sub(r"\([^()]*\)", "", content)):
            # A list is spaced evenly: ψ_{2,1,+1} -> ψ_(2, 1, +1) (Physical Chemistry 6.6).
            if "," in re.sub(r"\([^()]*\)", "", content):
                content = re.sub(r",\s*", ", ", content)
            return "(" + re.sub(r"(?<=\d)(?=[^\W\d_])", "\x08", sign(content.strip())) + ")"
        # A leading sign is the label's, not an operator: \int_{-a}^a -> ∫_−a^a (Physical Chemistry 5.7).
        return re.sub(r"^[+−]", lambda c: sign(c.group()), content)

    def letter_sub(m):
        # A one-letter subscript joins its symbol (k_B -> kB); one followed by another
        # symbol is spaced off from it: \omega_n t -> ωn t, k_x x -> kx x, not ωnt, kxx
        # (Physical Chemistry 2.4, 2.5). A digit joins both sides: H_2O -> H2O.
        # Not a word run on from it: E_cryst, the braces left out (Inorganic Chemistry 7.7).
        sub = m.group(1) or m.group(2)
        # An integral's limit keeps "_": \int_Q^{Q + dQ} -> ∫_Q^(Q + dQ), not ∫Q^(…) (Physical Chemistry 5.4).
        if sub.isalpha() and m.string[m.start() - 1:m.start()] in "∫∬∭∮" and m.start():
            return "\x10" + sub
        # So does a subscript on a bracket, a derivative's constraint: ((∂U)/(∂T))_V, not ((∂U)/(∂T))V,
        # which reads as times V (Physical Chemistry 17.4).
        # (Only a bracket holding a fraction or derivative; a polymer stays (R2SiO2)n, Inorganic Chemistry 8.7.)
        if sub.isalpha() and constraint(m.string, m.start()):
            return "\x10" + sub + (" " if re.match(r"[^\W\d_]|\x00", m.string[m.end():m.end() + 6].lstrip("{")) else "")
        # A symbol after it in braces counts too: C_n\bf{u} -> Cn u (Physical Chemistry 12.4).
        after = m.string[m.end():m.end() + 6].lstrip("{")[:3]
        # A digit subscript on a Greek symbol before a letter, \epsilon_0 R -> ε0 R (9.2), and a letter
        # subscript before an orbital, C_A 1s_A -> CA 1sA (9.2), are spaced off too.
        before = m.string[m.start() - 1:m.start()] if m.start() else ""
        if sub.isdigit() and re.match(r"[α-ωΑ-Ω]", before) and re.match(r"[^\W\d_]", after):
            return sub + " "
        if sub.isalpha() and re.match(r"\d[spdf]", after):
            return sub + " "
        return sub + (" " if sub.isalpha() and re.match(r"[^\W\d_]|\x00", after)
                      and not re.fullmatch(r"[a-z]{3}", after) else "")

    # C_\infty, C_{\infty v}: the infinite-fold axis joins its symbol like a letter, C∞, C∞v (Physical Chemistry 12.2).
    s = re.sub(r"(?<![∫∬∭∮])_(?:\{(∞[a-z]?)\}|(∞))", lambda m: m.group(1) or m.group(2), s)
    # An integral's limit holding a fraction is grouped: \int_{L/2}^L -> ∫_(L/2)^L (Physical Chemistry 7.4).
    s = re.sub(r"([∫∬∭∮])_\{([^{}()]*/[^{}()]*)\}", r"\1_{(\2)}", s)  # (a bracketed one is grouped below)
    # \psi_+, \psi_-: a sign alone as a subscript, ψ_(+), not ψ_ + (Physical Chemistry 2.3).
    # (Not the sign of what follows: \int_{-\infty} is ∫_−∞.)
    s = re.sub(r"_(?:\{([+−])\}|([+−]))",
               lambda m: "\x10(" + sign(m.group(1) or m.group(2)) + ")", s)
    previous = None
    while previous != s:
        previous = s
        # A digit subscript joins (H_{2}O -> H2O); on a Greek symbol, before a letter, it is spaced
        # off: \epsilon_{0}R -> ε0 R (Physical Chemistry 9.2).
        s = re.sub(r"(?<=([α-ωΑ-Ω]))_\{(\d+)\}(?=[^\W\d_])|_\{(\d+)\}",
                   lambda m: m.group(2) + " " if m.group(2) else m.group(3), s)
        s = re.sub(r"_\{(\w)\}|_(\w)", letter_sub, s)
        # A plain group inside a subscript goes, so the subscript can be read: \psi_{n\ {el_1}} (7.1).
        s = re.sub(r"(?<=[^_\\^])\{([^{}]*)\}(?=[^{}]*\})", r"\1", s)
        # (and before a braced term: \sum_{\text{Products}}{v_i S_i} -> Σ_Products vi Si, Physical Chemistry 21.9)
        s = re.sub(r"_\{([^{}]*)\}(?=[A-Za-zΑ-ω\d])|_\{(\x00\d+\x00)\}(?=\{[A-Za-zΑ-ω\d])",
                   lambda m: "\x10" + word_sub(m.group(1) or m.group(2), integral_limit(m)) + " ", s)
        s = re.sub(r"_\{([^{}]*)\}", lambda m: "\x10" + word_sub(m.group(1), integral_limit(m)), s)
    s = s.replace("\x10", "_")
    s = s.replace("{", "").replace("}", "")
    s = re.sub(r"\s*([=×<>≤≥→⟶⇌⇋⇄↑↓≡+≠⇒≮≯⇝⊗⊕≅↔⟷≈∼∝≫≪∴])\s*", r" \1 ", s)
    s = s.replace("( → ", "(→ ")  # \cancelto's "(→ S)"
    # Between carbon groups "=" is a double bond, not an equation: CH2=CH2.
    s = re.sub(r"\b(C|CH|CH2) = (?=(?:CH2|CH|C)(?![a-z]))", r"\1=", s)
    # A sign, not an addition: x = +5, (+2), or a leading +3; e^(+iωt) too (Physical Chemistry 3.6).
    s = re.sub(r"(=|\(|^) *\+ +(?=[\d.])", lambda m: (m.group(1) + " " if m.group(1) == "=" else m.group(1)) + "+", s)
    s = re.sub(r"\( *\+ +(?=[A-Za-zα-ωΑ-Ω/])", "(+", s)  # (+s) − (−s) = 1 (8.4); (+/−) (9.14)
    s = re.sub(r"(?<=\^\() \+ (?=\w)", "+", s)
    # (and after an accent or a prime: ν̃ − B̃0, v'' − χ̃'e; Physical Chemistry 13.3, 13.6)
    # After a degree sign too: ΔH°−TΔS° -> ΔH° − TΔS° (Organic Chemistry 6.7, Physical Chemistry 26.3).
    s = re.sub(r"(?<=[\w)}̀-ͯ'°⦵])−(?=[\w(\x00])", " − ", s)  # \x00: a text run, − \mathrm{i}Î_iy (14.7)
    s = re.sub(r"(?<=[°⦵])−(?=\|)", " − ", s)  # Si°−|z_−/2| (26.3)
    s = re.sub(r"(_\x00\d+\x00)−(?=[\w(\x00])", r"\1 − ", s)  # after a text subscript: S̄_calc − S̄_exp (21.8), not a bond
    s = re.sub(r",(?=[^\d\s])", ", ", s)
    s = s.replace("\x02", "+").replace("\x03", "−").replace("\x14", "=")
    s = s.replace("\x15", "⃗").replace("\x18", "̂")  # \vec's arrow, \hat's circumflex
    s = s.replace("\x19", "-")
    for _ in range(2):  # electron configurations: 4s^23d^6 -> 4s^2 3d^6 (no 0f: 4s^2p^6d^10f^14)
        s = re.sub(r"(\d[spdfg][xyz]?)\^(\d+?)(?=[1-9][spdfg])", r"\1^\2 ", s)  # 2px^2 2py^2 (10.1)
        s = re.sub(r"(?<!\d)(\d[spdf][xyz]?)(?=[1-9][spdf])", r"\1 ", s)  # 2s 2pz, 2px 2py (10.1)
    s = re.sub(r"(\^−?[\d.]+)(?=[A-Za-z\x00])", r"\1 ", s)  # 10^14 rad, a \text unit too (5.5)
    # number then unit (109,700cm -> 109,700 cm), but not orbital labels (3s, 4d)
    # and not formulas: a digit before a capital is a subscript or coefficient (H2O, 2H2)
    # and not algebra: a run of variables (2x, 0.00088x, 4ac) stays attached.
    # Nor electrons: 3e^−, not 3 e^−. Nor a subscript: the point group C_2v (Inorganic
    # Chemistry 4), and not an imaginary number in a matrix: 3i.
    # Nor a denominator: p^2/2m, not p^2/2 m, which reads (p^2/2)m (Physical Chemistry 3.3).
    s = re.sub(r"(?<!_)(?<!_\d)(?<!_\d\d)(?<!/)(?<!/\d)(?<!/\d\d)(\d)(?=[a-z])"
               r"(?![spdf](?:\^|\s|$|[)\]\x05⟩|]|[xyz]\b)|e\^)(?![abcxyi]+(?![a-z]))"  # |1s⟩ (8.4)
               r"(?![spdf](?:_|\x0f|[a-dA-Z]\d?(?:[\s)(\]⟩|,_\x0f]|$)))",  # |1sa⟩, 1sA(r), |2p_z1⟩, 2s~~ (9.2, 9.5, 10.1, 10.5, 10.7); not 52.9 pm
               r"\1 ", s)
    s = re.sub(r"(\d)(?=\x0e)", r"\1 ", s)  # 45.7 ~~g~~, not 45.7~~g~~
    s = re.sub(r"(?<=[A-Za-zα-ωΑ-Ω])(\d)(?=e\^)", r"\1 ", s)  # x0 e^(iωt) (Physical Chemistry 5.1); 3e^− stays
    # Two strikeouts side by side stay two: ~~k2~~ ~~[B]~~, not a run of four tildes (Physical Chemistry 29.4).
    s = s.replace("\x0f\x0e", "\x0f \x0e")
    s = s.replace("\x0e", "~~").replace("\x0f", "~~")
    s = re.sub("\x00(\\d+)\x00", lambda m: keep[int(m.group(1))], s)
    s = re.sub(r" +", " ", s)
    s = re.sub(r" \^", "^", s)  # \mathbf{Mg\,}^{2+} -> Mg^2+
    s = s.replace("\x11", "{").replace("\x12", "}").replace("\x1a", "{").replace("\x1b", "}").replace("\x08", "")
    s = s.replace("\ue000", "↑").replace("\ue001", "↓")
    return re.sub(r" ?\x05 ?", "\x05", s).strip()  # gap is expanded at the very end


def bare_arrays(s):
    """A \\begin{array} … \\end{array} typed straight into a paragraph, outside \\[ \\] or \\( \\)
    (Inorganic Chemistry 13.5.2's D5h character table), gets the display delimiters it lacks."""
    out, k = [], 0
    # An align* block too (Physical Chemistry 6.6's 2p_x and 2p_y derivation), and an
    # equation block (Physical Chemistry 26.3: "we have \begin{equation} … \tag{11.8.23} \end{equation}").
    for m in re.finditer(r"\\begin\{(array|align\*?|aligned|equation\*?)\}.*?\\end\{\1\}", s, re.S):
        before = s[:m.start()]
        open_math = (before.count("\\[") - before.count("\\]")) + (before.count("\\(") - before.count("\\)"))
        out.append(s[k:m.start()])
        out.append(m.group() if open_math > 0 else "\\[" + m.group() + "\\]")
        k = m.end()
    return "".join(out) + s[k:]


def text_math(s):
    """Inline math nested in display math: "\\[ … +\\tx{M\\(^{z_+}\\)(aq)} \\]" (Physical Chemistry 26.3).
    A formula typed as text with math in it, \\text{M\\(^{z_+}\\)(aq)}, is all math, M^{z_+}(aq);
    in a sentence, \\text{: The … projection of \\(H_a\\) by each …} (Inorganic Chemistry 5.4),
    the math sits between two runs of text."""
    if "\\(" not in s:
        return s
    if MACROS:
        s = expand_macros(s)
    k = 0
    while (m := re.compile(r"\\text\s*(?=\{)").search(s, k)):
        body, end = brace_group(s, m.end())
        if "\\(" in body:
            if re.search(r"\s", re.sub(r"\\\(.*?\\\)", "", body)):
                body = re.sub(r"(?<!\\)\\\((.*?)\\\)", r"}\1\\text{", body)
                s = s[:m.start()] + "\\text{" + body + "}" + s[end:]
            else:
                s = s[:m.start()] + "{" + body + "}" + s[end:]
        k = m.start() + 1
    return re.sub(r"(?<!\\)\\[()]", "", s)


def inline_math(s):
    # A zero-width space hides where a display equation ends and the next sentence starts:
    # "\[ … \]​A linear combination" (Physical Chemistry 11.1).
    s = s.replace("​", "")
    # A point group's Hermann-Mauguin symbol, not a length: \(3m\) (Physical Chemistry 12.6).
    s = s.replace("Hermann-Mauguin (\\(3m\\))", "Hermann-Mauguin (3m)")
    # Source typo: "\(i\) heads and \)j\) tails" (Physical Chemistry 27.6) — the opening "\(" typed as "\)".
    s = re.sub(r"(?<=\s)\\\)(\w{1,3})\\\)",
               lambda m: m.group(0) if m.string[:m.start()].count("\\(") > m.string[:m.start()].count("\\)")
               else "\\(" + m.group(1) + "\\)", s)
    # A space typed before "\)" keeps the math off the next word: \(Z_x \)is -> Zx is (Physical Chemistry 9.1).
    s = re.sub(r"(?<!\\)\s+\\\)(?=[A-Za-z])", r"\\) ", s)
    # <sup>1</sup>⁄<sub>2</sub>: a fraction set with the fraction slash, ½ -> 1/2 (Physical Chemistry 8.1).
    s = re.sub(r"\^(\d+)\s*⁄\s*(\d+)", r"\1/\2", s)
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
    # Source typo: "9 Å. \ (A\) and \(B\) are constants" (Physical Chemistry 25.7) — "\(" typed as "\ (".
    s = re.sub(r"(?<!\\)\\ \((?=[^()\\]{1,40}\\\))", r"\(", s)
    # Source typo: "is (N-1\), the number" (Physical Chemistry 6.2) — the opening "\(" typed as "(".
    s = re.sub(r"(?<![\\\w(])\((?=[^()\\]*\\\))", r"\(", s)
    # … and "electrons (\S=1\)," (Inorganic Chemistry 11.2): "(\(S=1\))" with two characters lost;
    # S is a letter here, not a command.
    s = re.sub(r"(?<![\\\w(])\(\\([A-Z])(?![A-Za-z])([^()\\]*)\\\)", r"(\\(\1\2\\))", s)
    # … and with a command in the math: "rule (\Delta S=0\)" (Physical Chemistry 15.1).
    s = re.sub(r"(?<![\\\w(])\((?=\\[A-Za-z]+(?:[^()\\]|\\[A-Za-z]+)*\\\))", r"\(", s)
    # Source typos (Physical Chemistry 14.7): "$" for one end of the math, "\(E_i$)", "\(z$-axis", "spin-$1/2\)".
    s = re.sub(r"\\\(([^$()\\]{1,40})\$", r"\\(\1\\)", s)
    s = re.sub(r"(?<![\\$\w{])\$([0-9A-Za-z][^$\\(){}]*)\\\)", r"\\(\1\\)", s)
    # Source typo: "(Figure \(\PageIndex{8})." (Physical Chemistry 15.1) — the closing "\)" typed as ")";
    # not "\(\PageIndex{1})\)" (Inorganic Chemistry 5.2), closed after the bracket.
    s = re.sub(r"\\\((\\PageIndex\{\w+\})\)(?!\\\))", r"\\(\1\\))", s)
    # Source typo (Physical Chemistry 12.14): "A1Tj(b1)= \frac{1}{\sqrt{2}} (b_{1} +b_{2})\)" — math
    # with its opening "\(" left out, after an "=" outside any math.
    s = re.sub(r"(= )(\\frac\{(?:(?!\\[(\[]).)*?\\\))",
               lambda m: m.group(0) if m.string[:m.start()].count("\\(") > m.string[:m.start()].count("\\)")
               else m.group(1) + "\\(" + m.group(2), s)
    # Source typo (Physical Chemistry 12.11): "from our \Gamma to get" — a symbol typed outside math.
    s = s.replace("our \\Gamma to", "our \\(\\Gamma\\) to")
    # A cross-reference in running text to an equation label; show the label. Alone in its
    # math it is text, not math: \(\ref{3-23}\) is (3-23), not (3 − 23) (Physical Chemistry 4.3).
    s = re.sub(r"\\\(\s*\\ref\{([^{}]*)\}\s*\\\)", r"(\1)", s)
    s = re.sub(r"\\ref\{([^{}]*)\}", r"(\1)", s)
    # Source typo: "the second term in {\reference{3.24}}" (Physical Chemistry 18.2), typed outside math.
    s = re.sub(r"\{?\\reference\{([^{}]*)\}\}?", r"(\1)", s)
    # Source typo: "As you can see \w_A\) and" (Physical Chemistry 19.5) — "\(w_A" typed "\w_A".
    s = re.sub(r"(?<![\\(\w])\\([a-zA-Z])_(\{?\w+\}?)\\\)", r"\\(\1_\2\\)", s)
    # Display math set apart from text run up against it: "(CE)\[CE = …\]" in a table cell.
    s = re.sub(r"\\\]\s*\\\[", "\\]\x06\\[", s)  # two display equations in a row: one per line
    s = re.sub(r"(?<=[\w)])\\\[", r" \[", s)
    s = re.sub(r"\\\[(.*?)\\\](?=\w)", r"\[\1\] ", s, flags=re.S)
    # A page typed from TeX source with its own macros sets its displays inside the paragraph,
    # "… we have \begin{equation} … \end{equation} where the sum …" (Physical Chemistry 26.3);
    # each is displayed on a line of its own.
    apart = "\x06" if MACROS else ""
    s = re.sub(r"\\\[(.*?)\\\]", lambda m: apart + tex(text_math(m.group(1))) + apart, s, flags=re.S)
    if apart:
        s = re.sub(r"\s*\x06(?:\s*\x06)*\s*", "\x06", s).strip("\x06")
    s = re.sub(r"\\\((.*?)\\\)", lambda m: tex(m.group(1)), s, flags=re.S)
    # TeX spacing typed in plain text, outside any math: "T = 0.02\; eV" (Physical Chemistry 18.2).
    return re.sub(r"\\[;,:](?=\s)", "", s)


FILENAME = re.compile(  # "The Actions of Buffers.png", "2,4-dimethyl-3-heptene .png", or a bare upload hash
    # "Unknown": a file name with its extension dropped (Inorganic Chemistry 2.2.2).
    # A mangled <img>'s alt: escaped quotes or the start of a tag (Inorganic Chemistry 7.2.2).
    # A pasted image's generated name, letters, digits, _ and - with no spaces (Inorganic Chemistry 10.1).
    # "undefined": an editor's empty alt (Inorganic Chemistry 10.3.2). "ROMtoM'Marcus.png" (12.8.1).
    # "=Coriolis_effect12.gif", "Dye_laser_alignment_intra-cavity_beam_@_589nm.jpg" (Physical Chemistry 13.4, 15.5).
    # "Image:CH431_Image67.gif" (Physical Chemistry 19.7).
    r"=?\w[\w .,()+'@=:-]*\.(?:jpe?g|png|gif|svg|webp)|[0-9a-f]{32,}|[\w-]{60,}|Unknown(?:-\d+)?|undefined|(?:&quot;|\")+|<div\b.*", re.I)
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
            # A box that closes before the Example's own solution, which follows it outside
            # the box (Physical Chemistry 28.3, 28.4): the Example hasn't ended.
            and not re.match(r"\*\*(?:Solutions?|Answers?)\b|Given:", after[0])
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
        self.open_items = 0  # <li>s open: text after a nested list is still its item's
        self.floated = []  # alt texts of images floated into the paragraph being read
        self.manual_link = False  # the paragraph being read links to a solution manual
        self.quotes = 0  # <blockquote>s open
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
            if not marker and self.continues_item():
                marker = "   " * len(self.lists)  # further down an item, indented like its text
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

    def continues_item(self):
        """Whether what comes next is more of an open list item, after the text that began it.
        Not after a table in the item, which stands outside the list already."""
        return bool(self.lists and self.open_items >= len(self.lists) and self.out
                    and re.match(r" *(?:- |[a-zA-Z]\. |[ivxIVX]+\. |\d+\. )|   ", self.out[-1]))

    def flush(self, prefix=""):
        if t := self.text():
            # A list item's text can sit in a <div>/<p> or come before a nested
            # list; either way its first text carries the item's marker.
            if not prefix and self.pending is not None:
                prefix, self.pending = self.pending, None
            # More of an item's text after a list nested in it stays in the item, indented
            # under its marker (Physical Chemistry 12.2: "If the z-axis lies in the plane …").
            elif not prefix and self.continues_item():
                prefix = "   " * len(self.lists)
            # "# mol HCl = …" means "number of"; unescaped it would be a heading.
            if not prefix and t.startswith("#"):
                t = "\\" + t
            if self.quotes and not prefix.startswith("#"):
                prefix = "> " + prefix
            self.out.append(prefix + t)
        while self.floated:  # pictures floated beside this paragraph
            self.alt = self.floated.pop(0)
            self.image_paragraph()

    def handle_starttag(self, tag, a):
        a = dict(a)
        self.after_sup = self.after_sub = False  # only text straight after a </sup>, </sub> counts (handle_data)
        # Some pages were saved with MathJax already rendered: an equation can
        # hold bare <semantics> MathML, a typeset copy (class "math"), and a
        # screen-reader copy. Never read the typeset copy; read the
        # screen-reader copy only if the equation had no bare MathML.
        classes = (a.get("class") or "").split()
        if "inlineequation" in classes:
            self.mathml_read = False
        if self.skip_at is None and (
            ("math" in classes and not {"inline", "display"} & set(classes))  # "math inline": raw TeX (9.9)
            or ("MJX_Assistive_MathML" in classes and self.mathml_read)
        ):
            self.skip_at = len(self.stack)
        if self.skip_at is None and re.search(r"display\s*:\s*none", a.get("style") or ""):
            self.skip_at = len(self.stack)  # hidden: a MathML fallback and broken TeX (Physical Chemistry 10.5)
        if self.skip_at is None and "mt-comment-datetime" in classes:
            self.skip_at = len(self.stack)  # a page comment's timestamp ("Nov 27, 2021, 2:38 PM")
        if self.skip_at is None and "mw-cite-backlink" in classes:
            self.skip_at = len(self.stack)  # a wiki citation's "↑" link, pasted into a word: "t↑he" (Physical Chemistry 16.6)
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
        if tag == "blockquote" and self.cell is None:
            self.flush()
            self.quotes += 1  # quoted text is marked "> " (Physical Chemistry 14.7 quotes an answer)
        if tag == "p" and self.cell is not None and self.cell.strip():
            # Paragraphs in one table cell are separate entries, like lines: "UV/Vis spectroscopy;
            # atomic absorption spectroscopy" (Physical Chemistry 13.1); after a sentence or a comma, a space.
            self.cell = self.cell.rstrip() + (" " if re.search(r"[.,;:!?]$", self.cell.rstrip()) else "; ")
        if tag in BLOCKS or (tag == "table" and self.cell is None):
            self.flush()  # text before a table comes before it: a list item's text (Physical Chemistry 11.2)
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
        elif tag in ("s", "del", "strike"):
            # A struck-out table cell, <s>4</s> -> ~~4~~ (Physical Chemistry 8.8's microstate table).
            self.handle_data("~~")
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
            elif re.search(r"upper-(?:alpha|latin)", a.get("style") or ""):
                kind = "Alpha"  # A., B.: the Strategy steps that answers call "A" (Inorganic Chemistry 2.1.2)
            elif "upper-roman" in (a.get("style") or ""):
                kind = "Roman"  # I.–V.: regions the Solution calls "III, IV" (Physical Chemistry 24.6)
            elif re.search(r"lower-(?:alpha|latin)", a.get("style") or "") or (start > 0 and self.prev_lettered):
                kind = "alpha"  # lower-latin is the same (Physical Chemistry 11.2)
            elif "lower-roman" in (a.get("style") or ""):
                kind = "roman"  # i., ii., iii. (Physical Chemistry 12.10)
            else:
                kind = "decimal"
            self.lists.append([kind, start, len(self.out)])  # kind, items so far, where its output starts
        elif tag == "li" and self.lists:
            kind, n, _ = self.lists[-1]
            self.lists[-1][1] += 1
            self.open_items += 1
            marker = {"bullet": "- ", "alpha": f"{chr(ord('a') + n)}. ",
                      "Alpha": f"{chr(ord('A') + n)}. ", "roman": f"{roman(n + 1)}. ",
                      "Roman": f"{roman(n + 1).upper()}. "}.get(kind, f"{n + 1}. ")
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
            if "\\(" in alt or "\\[" in alt:
                # Math in the description: "one in red for \( y = \frac{1}{2}x^2 \)" (Physical Chemistry 5.1).
                alt = re.sub(r"\s+", " ", inline_math(alt)).strip()
            prev, self.alt = self.alt, alt or None
            if (self.in_figure and prev and self.alt and not FILENAME.fullmatch(prev)
                    and not FILENAME.fullmatch(self.alt) and not GLYPH.fullmatch(self.alt)):
                # Two pictures in one figure, each described (Physical Chemistry 24.6): keep both.
                self.alt = prev + "\x1c" + self.alt
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
            elif not self.in_figure and re.search(r"float\s*:\s*(?:left|right)", a.get("style") or "") \
                    and re.search(r"\w$", self.buf):
                # A picture floated beside a paragraph, set into it mid-word: "the orbital
                # ener<img>gies" (Physical Chemistry 12.15). It follows the paragraph.
                self.floated.append(self.alt)
                self.alt = None
            elif not self.in_figure:
                # An image outside a <figure> has no caption; its alt text is
                # the only description of what it shows (often an equation).
                self.flush()
                self.image_paragraph()
        elif tag == "a" and "Solution_Manual" in (a.get("href") or ""):
            self.manual_link = True
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
        if tag in ("s", "del", "strike"):
            # <s>o</s>: an o struck through is the standard-state sign, ⦵, not a deleted
            # letter: K<s>o</s>, c<sup><s>o</s></sup> (Physical Chemistry 22.7, 26.11).
            if self.mms is None and self.cell is not None and self.cell.endswith("~~o"):
                self.cell = self.cell[:-3] + "⦵"
            elif self.mms is None and self.cell is None and self.buf.endswith("~~o"):
                self.buf = self.buf[:-3] + "⦵"
            else:
                self.handle_data("~~")
        if tag == "sub" and self.sub_at is not None:
            # p<sub>x</sub> -> p_x, ΔH<sub>vap</sub> -> ΔH_vap: a letter subscript on a
            # letter is marked, the corpus's convention. Digit subscripts (H<sub>2</sub>O)
            # stay plain, and so does one after a digit ("3 − 2<sub>x</sub>" in a formula).
            # A closing bracket takes one too: (Hg)<sub>liquid</sub> (Physical Chemistry 1.4).
            where, i = self.sub_at
            self.sub_at = None
            text = self.cell if where == "cell" else self.buf
            # γ <sub>eq,Y</sub>: a space typed between a symbol and its subscript (Physical Chemistry 26.11).
            if (
                text is not None and 1 < i <= len(text) and text[i - 1].isspace()
                and re.search(r"(?<![^\W\d_])[A-Za-zα-ωΑ-Ω]\s$", text[:i])
                and re.fullmatch(r"[A-Za-z]+(?:\s*[-, ]\s*[A-Za-z]+)+", text[i:])
            ):
                text = text[:i - 1] + text[i:]
                i -= 1
            if (
                text is not None and 0 < i <= len(text)
                and re.fullmatch(r"[A-Za-z]+\s*|\?", text[i:])  # "?" is a blank: PH<sub>?</sub>; "p<sub>z </sub>"
                # ṽ<sub>obs</sub> too (Physical Chemistry 13.5); on another Greek letter than Δ, only a
                # subscript of several letters, as in TeX: Γ<sub>vib</sub> -> Γ_vib (13.14), but σ<sub>h</sub> -> σh.
                and (re.match(r"[A-Za-zÀ-ɏḀ-ỿΔ)⦵]", text[i - 1])  # G<sup><s>o</s></sup><sub>molar</sub> (22.7)
                     or (re.match(r"[α-ωΑ-Ω]", text[i - 1]) and re.match(r"[A-Za-z]{2}", text[i:])))
            ):
                text = text[:i] + "_" + text[i:]
                if where == "cell":
                    self.cell = text
                else:
                    self.buf = text
                # (see handle_data) "word": V<sub>bar</sub>dP -> V_bar dP, not V_bardP (Physical Chemistry 26.11)
                self.after_sub = "word" if re.match(r"[A-Za-z]{2}", text[i + 1:]) else True
            elif (
                text is not None and 0 < i <= len(text)
                # also C<sub>P,ice</sub> (19.10); n<sub>A or B</sub>, V<sub>partial molar</sub> (26.1, 26.11)
                and re.fullmatch(r"[A-Za-z]+(?:\s*[-, ]\s*[A-Za-z]+)+", text[i:])
                and re.match(r"[A-Za-zα-ωΑ-Ω]", text[i - 1])
            ):
                # J<sub>a-b</sub>: a coupling between two labels, grouped so it isn't read as J_a minus b,
                # ^3J_(a-b) (Physical Chemistry 14.6).
                text = text[:i] + "_(" + text[i:] + ")"
                if where == "cell":
                    self.cell = text
                else:
                    self.buf = text
            elif (
                text is not None and 0 < i <= len(text)
                and re.fullmatch(r"[,-][A-Za-z]+", text[i:])
                and re.search(r"_[A-Za-z]+$", text[:i])
            ):
                # K<sub>cp</sub><sub>,H</sub>: one subscript typed in two, K_(cp,H) (Physical Chemistry 24.7).
                k = text.rindex("_", 0, i)
                text = text[:k] + "_(" + text[k + 1:] + ")"
                if where == "cell":
                    self.cell = text
                else:
                    self.buf = text
            elif (
                text is not None and 0 < i <= len(text)
                and re.fullmatch(r"\s*[-+−±]\s*", text[i:])
                and re.match(r"[A-Za-zα-ωΑ-Ω]", text[i - 1])
            ):
                # m<sub>+</sub>, m<sub>-</sub>, a<sub>±</sub>: a sign subscript, written as from TeX,
                # m_(+), m_(−), a_±; not m+=2m, read as an operator (Physical Chemistry 25.5).
                sign = text[i:].strip().replace("-", "−")
                text = text[:i] + ("_±" if sign == "±" else f"_({sign})")
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
                self.after_sup = True  # (see handle_data)
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
        elif tag == "blockquote" and self.quotes:
            self.flush()
            self.quotes -= 1
        elif tag == "li":
            self.flush()
            self.open_items = max(0, self.open_items - 1)
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
                # A caption set in its own <p> went out as a paragraph; its figure's description
                # follows it as usual (Physical Chemistry 24.4).
                if (self.caption_at is None and self.alt and self.out and self.out[-1].startswith("Figure ")
                        and not FILENAME.fullmatch(self.alt) and self.alt.lower() not in ("alt", "image", "img")):
                    self.out[-1] += "\n" + self.alt.replace("\x1c", "\n")
                    self.caption_at = len(self.out) - 1
                    self.alt = None
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
                    self.out[-1] += "\n" + self.alt.replace("\x1c", "\n")
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
                for alt in self.held_alts + (self.alt.split("\x1c") if self.alt else [self.alt]):
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
            if self.manual_link:
                # Only a link to the solution manual of the book the page was taken from
                # (Physical Chemistry 14.6, from Soderberg's Organic Chemistry): nothing follows.
                self.out.append("[Solution in a separate solution manual; not included in source]")
            self.manual_link = False
        elif tag in BLOCKS:
            self.flush()
            if tag == "p":
                self.manual_link = False

    def handle_data(self, d):
        if self.skip_at is not None or (self.stack and self.stack[-1] in ("script", "style")):
            return
        if self.mms is not None:
            if self.mms["parts"]:
                self.mms["parts"][-1] += d
            return
        # A number straight after a superscript is a new term: 3σ<sup>2</sup>1π<sup>4</sup> ->
        # 3σ^2 1π^4, not 3σ^21π^4 (Physical Chemistry 10.4).
        if getattr(self, "after_sup", False) and d[:1].isdigit():
            d = " " + d
        # A word run up against a letter subscript: "the H<sub>b</sub>signal" (Physical Chemistry 14.6).
        if getattr(self, "after_sub", False) and re.match(r"[a-z]{3}", d):
            d = " " + d
        # … and any letter after a word subscript: V_bar dP (Physical Chemistry 26.11).
        elif getattr(self, "after_sub", False) == "word" and re.match(r"[A-Za-z]", d):
            d = " " + d
        self.after_sup = self.after_sub = False
        if self.cell is not None:
            self.cell += d
        else:
            self.buf += d


html = open(sys.argv[1], encoding="utf8").read()
start = html.find('class="mt-content-container"')
end = html.find('<footer class="mt-content-footer"', start)
page = Page()
page.feed(read_macros(html[html.find(">", start) + 1:end]))
page.flush()

def repair_broken_image(paragraph):
    """Some source pages have a mangled <img> whose attributes spill out as
    text ('... BL acids. lt-chem-64081" style="width: …" src="…"'). Keep the
    surviving words of its description as an image placeholder."""
    m = re.match(r'^(.*?)\s*lt-chem-\d+"?\s+style="[^"]*".*\bsrc="[^"]*"', paragraph, re.S)
    return f"[Image: … {m.group(1).strip()}]" if m else paragraph


def line_breaks(paragraph):
    """TeX line breaks between steps: separate paragraphs, except inside a list
    item or table, where a paragraph break would split it ("x + (−6) = −1; x = +5").
    A table row starts "| "; "|ψ|^2 ≈ …" is an equation (Physical Chemistry 3.6)."""
    inline = re.match(r" *(?:- |[a-zA-Z]\. |\d+\. |\| )", paragraph)
    pieces = re.split(" ?\x06 ?", paragraph)
    out = pieces[0]
    for before, piece in zip(pieces, pieces[1:]):
        # A table set in TeX (environments()) always stands as its own block.
        table = piece.startswith("| ") or before.startswith("| ") and before.endswith("|")
        out += ("; " if inline and not table else "\n\n") + piece
    return out


# A bare end-of-chapter problem label left on a page with no problem after it
# ("Problem 11-20" at the end of Organic Chemistry 11.12).
# … and the attributes of a mangled <img> spilled out as text (Inorganic Chemistry 7.2.2:
# '" height="200" width="463" src="/@api/deki/files/…jpg">').
# … and an author's donation appeal closing a page (Inorganic Chemistry 11.3.3: "Dr. Kai
# Landskron (Lehigh University). If you like this textbook, please consider to make a donation …").
STRAY = re.compile(r'[\s.,;:↵]*|Problem \d+-\d+|"\s+(?:height|width|style|src)=".*>'
                   r'|.*If you like this textbook, please consider to make a donation.*'
                   r'|[Uu]nder development\.?')  # a page with nothing written yet (Physical Chemistry 14.9)
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
text = re.sub(r'\[Image: ([^\]\n]*?)\s*<span class=\]\n\n *([^"\n]*)"\s+style="[^\n]*', r"[Image: \1 \2]", text)
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
# A Symbol-font letter saved as its private-use code point: "a factor &#61538;" (U+F062) is β (Physical Chemistry 19.7).
text = re.sub("[-]", lambda m: chr(ord(m.group()) - 0xF000).translate(SYMBOL_FONT), text)
text = text.replace("­", "")  # soft hyphens: invisible on the page ("a. ­mer-", Inorganic Chemistry 9.4)
# Electron configurations, corpus style: 1s^22s^2 -> 1s^2 2s^2
# (and 2p_x^12p_y^1 -> 2p_x^1 2p_y^1, with marked orbital subscripts)
text = re.sub(r"(\d[spdfg](?:_[xyz]+)?)\^(\d+?)(?=[1-9][spdfg])", r"\1^\2 ", text)
text = re.sub(r"(\d[spdfg](?:_[xyz]+)?)\^(\d+?)(?=[1-9][spdfg])", r"\1^\2 ", text)
for _ in range(2):  # tighten consecutive list items
    text = re.sub(r"(?m)^( *(?:- |[a-zA-Z]\. |[ivxIVX]+\. |\d+\.(?: |$)).*)\n\n(?= *(?:- |[a-zA-Z]\. |[ivxIVX]+\. |\d+\.(?: |$)))",
                  r"\1\n", text)
print(text)
