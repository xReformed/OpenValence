import type { ChemSegment } from "./types";

/**
 * Splits chemistry text into plain, subscript, and superscript runs.
 * Pure string work with no React, so it can be tested on its own;
 * hooks/useChemText.tsx turns the segments into <sub>/<sup> elements.
 *
 * It understands the notation the corpus (and so the model's answers) uses:
 *
 *   caret        10^−5, 1s^2, SO4^2−, Fe^2+, m^3, ^{...}, ^(...)   → superscript
 *   underscore   ΔH°_f, ΔH_vap, m_l, u_rms, t_(1/2), _{...}        → subscript
 *   formulas     H2O, CH3CO2H, Ca(OH)2, CuSO4·5H2O, CaCl2(aq), H2O(ℓ) → digit subscripts
 *   charges      H3O+, OH−, NH4+, Na+, Fe3+, [Co(en)3]3+, e−       → superscript charge
 *   constants    Ka, Kb, Kw, Ksp, Kc, Kp, Kf, Keq, pKa, E°cell      → subscript
 *   hybrids      sp2, sp3, sp3d, sp3d2                              → superscript
 *
 * Bare formulas are the risky case, so a word is only treated as one when
 * every symbol in it is a real element and no subscript is a lone "1"
 * (chemists never write one). That keeps "Table P1", "section 14.6",
 * "COVID19", and "MP3" as plain text.
 *
 * Known ambiguity: a polyatomic ion with a multi-digit charge needs a caret,
 * since "SO42−" can't be told apart from a subscript. Write SO4^2−, as the
 * corpus does. A single element plus digits plus a sign is read as a charge,
 * so Fe3+ → Fe³⁺ (and, rarely wrong, H2+ → H²⁺).
 */

const ELEMENTS = new Set(
  (
    "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co " +
    "Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb " +
    "Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re " +
    "Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es " +
    "Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og"
  ).split(" "),
);

const MINUS = "−";

/* Alternatives are tried left to right at each position, so order matters:
   URLs are claimed first so their underscores and digits are left alone. */
const PATTERN = new RegExp(
  [
    String.raw`(?<url>https?:\/\/\S+)`,
    /* A trailing sign is a charge (SO4^2−) unless a letter follows, as in
       "10^−5-M", where the hyphen joins the unit. */
    String.raw`\^(?<caret>\{[^}]*\}|\([^)]*\)|[+\-−]?\d+(?:\.\d+)?(?:[+\-−](?![A-Za-z]))?|[+\-−])`,
    String.raw`(?<=[^\s_])_(?<under>\{[^}]*\}|\([^)]*\)|[A-Za-z0-9]+)`,
    String.raw`\bsp(?<spN>[23])(?:d(?<spD>[12])?)?\b`,
    String.raw`\b(?<kPre>p?)K(?<kSub>sp|eq|a|b|w|c|p|f)\b`,
    String.raw`E°(?<eSub>cell|anode|cathode)\b`,
    String.raw`(?<![A-Za-z])e(?<eSign>[−-])(?=[\s,.;:)]|$)`,
    String.raw`(?<![A-Za-z_])(?<formula>[A-Z(\[][A-Za-z0-9()\[\]ℓ]*)(?<charge>[+−]|-(?=[\s,.;:)(]|$))?`,
  ].join("|"),
  "g",
);

/* The book writes a liquid as (ℓ), and sometimes (l). */
const STATE_SYMBOL = /\((?:aq|s|l|ℓ|g)\)$/;
const LIGAND = /^\([a-z]{1,4}\)/;

function unwrap(group: string): string {
  const first = group[0];
  return first === "{" || first === "(" ? group.slice(1, -1) : group;
}

function minus(text: string): string {
  return /^[+\-−]?[\d.]*[+\-−]?$/.test(text) ? text.replace(/-/g, MINUS) : text;
}

function formatFormula(rawBody: string, rawCharge: string | undefined): ChemSegment[] | null {
  const state = rawBody.match(STATE_SYMBOL)?.[0] ?? "";
  const body = state ? rawBody.slice(0, -state.length) : rawBody;
  const charge = rawCharge ? minus(rawCharge) : "";
  if (!body) return null;

  const out: ChemSegment[] = [];
  let depth = 0;
  let prev: "start" | "atom" | "open" = "start";
  let hasDigit = false;
  let i = 0;

  while (i < body.length) {
    const ch = body[i];

    if (ch >= "A" && ch <= "Z") {
      const two = body.slice(i, i + 2);
      const symbol = /^[A-Z][a-z]$/.test(two) && ELEMENTS.has(two) ? two : ch;
      if (!ELEMENTS.has(symbol)) return null;
      const next = body[i + symbol.length];
      if (next && next >= "a" && next <= "z") return null;
      out.push({ kind: "text", text: symbol });
      i += symbol.length;
      prev = "atom";
    } else if (ch >= "0" && ch <= "9") {
      const digits = body.slice(i).match(/^\d+/)![0];
      if (prev !== "atom" || digits === "1" || digits[0] === "0") return null;
      out.push({ kind: "sub", text: digits });
      hasDigit = true;
      i += digits.length;
      prev = "start";
    } else if (ch === "(" || ch === "[") {
      const ligand = ch === "(" ? body.slice(i).match(LIGAND)?.[0] : undefined;
      if (ligand) {
        out.push({ kind: "text", text: ligand });
        i += ligand.length;
        prev = "atom";
      } else {
        out.push({ kind: "text", text: ch });
        depth++;
        i++;
        prev = "open";
      }
    } else if (ch === ")" || ch === "]") {
      if (depth === 0 || prev === "open") return null;
      out.push({ kind: "text", text: ch });
      depth--;
      i++;
      prev = "atom";
    } else {
      return null;
    }
  }

  if (depth !== 0) return null;
  if (!hasDigit && !charge) return null;

  if (charge) {
    const singleElement = out.length === 2 && out[0].kind === "text" && /^[A-Z]/.test(out[0].text);
    const afterBracket = out.length >= 2 && out[out.length - 2].text === "]";
    const last = out[out.length - 1];
    if (last.kind === "sub" && (singleElement || afterBracket)) {
      out[out.length - 1] = { kind: "sup", text: last.text + charge };
    } else {
      out.push({ kind: "sup", text: charge });
    }
  }

  if (state) out.push({ kind: "text", text: state });
  return out;
}

/**
 * Prose brackets get swept into the match: "(CO3^2−)" arrives as "(CO3", and
 * "(H2O, CO2)" ends in "CO2)". Try the body as-is, then without an unmatched
 * bracket at either end, keeping the stripped bracket as plain text.
 */
function formulaInProse(body: string, charge: string | undefined): ChemSegment[] | null {
  const lead = /^[([]/.test(body) ? body[0] : "";
  const trail = /[)\]]$/.test(body) ? body[body.length - 1] : "";
  const attempts: [string, string, string | undefined, string][] = [
    ["", body, charge, ""],
    [lead, body.slice(lead.length), charge, ""],
    ["", body.slice(0, trail ? -1 : undefined), undefined, trail],
    [lead, body.slice(lead.length, trail ? -1 : undefined), undefined, trail],
  ];

  for (const [before, core, sign, after] of attempts) {
    if ((before || after) && core === body) continue;
    const parts = formatFormula(core, sign);
    if (!parts) continue;
    if (before) parts.unshift({ kind: "text", text: before });
    if (after) parts.push({ kind: "text", text: after + (charge ?? "") });
    return parts;
  }
  return null;
}

function push(segments: ChemSegment[], kind: ChemSegment["kind"], text: string) {
  if (!text) return;
  const last = segments[segments.length - 1];
  if (last && last.kind === kind) last.text += text;
  else segments.push({ kind, text });
}

export function parseChemText(text: string): ChemSegment[] {
  const segments: ChemSegment[] = [];
  let cursor = 0;

  for (const match of text.matchAll(PATTERN)) {
    const start = match.index;
    const g = match.groups!;
    let parts: ChemSegment[] | null = null;

    if (g.url !== undefined) {
      parts = [{ kind: "text", text: g.url }];
    } else if (g.caret !== undefined) {
      parts = [{ kind: "sup", text: minus(unwrap(g.caret)) }];
    } else if (g.under !== undefined) {
      parts = [{ kind: "sub", text: unwrap(g.under) }];
    } else if (g.spN !== undefined) {
      parts = [
        { kind: "text", text: "sp" },
        { kind: "sup", text: g.spN },
      ];
      if (match[0].includes("d")) {
        parts.push({ kind: "text", text: "d" });
        if (g.spD) parts.push({ kind: "sup", text: g.spD });
      }
    } else if (g.kSub !== undefined) {
      parts = [
        { kind: "text", text: `${g.kPre}K` },
        { kind: "sub", text: g.kSub },
      ];
    } else if (g.eSub !== undefined) {
      parts = [
        { kind: "text", text: "E°" },
        { kind: "sub", text: g.eSub },
      ];
    } else if (g.eSign !== undefined) {
      parts = [
        { kind: "text", text: "e" },
        { kind: "sup", text: MINUS },
      ];
    } else if (g.formula !== undefined) {
      parts = formulaInProse(g.formula, g.charge);
    }

    if (!parts) continue;

    push(segments, "text", text.slice(cursor, start));
    for (const part of parts) push(segments, part.kind, part.text);
    cursor = start + match[0].length;
  }

  push(segments, "text", text.slice(cursor));
  return segments;
}
