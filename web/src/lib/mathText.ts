/**
 * Lays out the corpus's plain-text fractions and square roots, on top of
 * chemText's subscripts and superscripts. Pure string work, like chemText;
 * hooks/useChemText.tsx renders the nodes.
 *
 * The transcription writes a fraction whose parts are more than one symbol
 * with brackets round them: \dfrac{∂U}{∂T} is "(∂U)/(∂T)", \dfrac{8RT}{\pi M}
 * inside a root "√((8RT)/(πM))", and a one-symbol part bare, "(ΔH)/RT",
 * "f/(f^o)". So a slash with a bracketed group on at least one side is a
 * fraction and is stacked; "1/2", "mol/L" and "and/or" stay as they are.
 *
 * Left alone:
 *   - a slash inside a superscript or subscript, e^{−(ΔG°)/RT}: a stacked
 *     fraction can't sit in an exponent;
 *   - a bracket that is a function's argument, f(x)/2 or ln(K)/RT, where
 *     only the argument would be stacked;
 *   - links.
 */

export type MathNode =
  | { kind: "text"; text: string }
  | { kind: "frac"; num: MathNode[]; den: MathNode[] }
  | { kind: "sqrt"; body: MathNode[] };

const OPEN: Record<string, string> = { "(": ")", "{": "}", "[": "]" };
const CLOSE: Record<string, string> = { ")": "(", "}": "{", "]": "[" };

/* A one-symbol operand: letters, digits (a decimal point only before a
   digit), °, ⦵, primes, with any subscripts and superscripts after it. */
const SYMBOL = String.raw`(?:[\p{L}\p{N}°⦵′·∂]|\.(?=\p{N}))+`;
const SCRIPTS = String.raw`(?:[\^_](?:\{[^{}]*\}|\([^()]*\)|[\p{L}\p{N}+\-−*°⦵]+))*`;
const SYMBOL_AFTER = new RegExp(String.raw`^${SYMBOL}${SCRIPTS}`, "u");
const SYMBOL_BEFORE = new RegExp(String.raw`${SYMBOL}${SCRIPTS}$`, "u");

/** The index of the bracket matching the one at s[i] (forwards for an opening one). */
function matchForward(s: string, i: number): number {
  const open = s[i];
  const close = OPEN[open];
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === open) depth++;
    else if (s[j] === close && --depth === 0) return j;
  }
  return -1;
}

function matchBackward(s: string, i: number): number {
  const close = s[i];
  const open = CLOSE[close];
  let depth = 0;
  for (let j = i; j >= 0; j--) {
    if (s[j] === close) depth++;
    else if (s[j] === open && --depth === 0) return j;
  }
  return -1;
}

/* Positions inside a script group (^{…}, ^(…), _{…}, _(…)) or a link, where a
   slash is not a fraction. */
function maskedPositions(s: string): boolean[] {
  const masked = new Array<boolean>(s.length).fill(false);
  for (const link of s.matchAll(/https?:\/\/\S+/g)) {
    masked.fill(true, link.index, link.index + link[0].length);
  }
  for (let i = 0; i < s.length - 1; i++) {
    if ((s[i] === "^" || s[i] === "_") && (s[i + 1] === "{" || s[i + 1] === "(")) {
      const end = matchForward(s, i + 1);
      if (end > 0) masked.fill(true, i, end + 1);
    }
  }
  return masked;
}

interface Fraction {
  start: number;
  end: number;
  num: string;
  den: string;
}

/* The stackable fraction in s that starts first, or null: the outermost one, so
   ((a)/(b))/(c) stacks a/b over c rather than splitting at the inner slash. */
function findFraction(s: string): Fraction | null {
  const masked = maskedPositions(s);
  let best: Fraction | null = null;
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] !== "/" || masked[i]) continue;

    let start: number;
    let num: string;
    let leftGroup = false;
    if (s[i - 1] === ")") {
      start = matchBackward(s, i - 1);
      /* f(x)/2, ln(K)/RT, e^(…)/2: a function's argument or a script, not a numerator. */
      if (start < 0 || (start > 0 && /[\p{L}\p{N}^_]/u.test(s[start - 1]))) continue;
      num = s.slice(start + 1, i - 1);
      leftGroup = true;
    } else {
      const symbol = s.slice(0, i).match(SYMBOL_BEFORE);
      if (!symbol) continue;
      start = i - symbol[0].length;
      /* (…)^2/(…): the 2 is an exponent, not a numerator. */
      if (start > 0 && (s[start - 1] === "^" || s[start - 1] === "_")) continue;
      num = symbol[0];
    }

    let end: number;
    let den: string;
    let rightGroup = false;
    if (s[i + 1] === "(") {
      end = matchForward(s, i + 1);
      if (end < 0) continue;
      den = s.slice(i + 2, end);
      end += 1;
      rightGroup = true;
    } else {
      const symbol = s.slice(i + 1).match(SYMBOL_AFTER);
      if (!symbol) continue;
      den = symbol[0];
      end = i + 1 + symbol[0].length;
    }

    if ((leftGroup || rightGroup) && num.trim() && den.trim() && (!best || start < best.start)) {
      best = { start, end, num, den };
    }
  }
  return best;
}

/* The first √(…) in s, or null. */
function findRoot(s: string): { start: number; end: number; body: string } | null {
  const masked = maskedPositions(s);
  for (let i = s.indexOf("√"); i >= 0; i = s.indexOf("√", i + 1)) {
    if (masked[i] || s[i + 1] !== "(") continue;
    const end = matchForward(s, i + 1);
    if (end > 0) return { start: i, end: end + 1, body: s.slice(i + 2, end) };
  }
  return null;
}

function pushText(nodes: MathNode[], text: string) {
  if (!text) return;
  const last = nodes[nodes.length - 1];
  if (last?.kind === "text") last.text += text;
  else nodes.push({ kind: "text", text });
}

export function parseMath(text: string): MathNode[] {
  if (!text.includes("/") && !text.includes("√")) return [{ kind: "text", text }];
  const fraction = findFraction(text);
  const root = findRoot(text);
  /* Whichever starts first; a root round a fraction is found before it. */
  const first =
    root && (!fraction || root.start <= fraction.start)
      ? { ...root, node: { kind: "sqrt", body: parseMath(root.body) } as MathNode }
      : fraction
        ? { ...fraction, node: { kind: "frac", num: parseMath(fraction.num), den: parseMath(fraction.den) } as MathNode }
        : null;
  if (!first) return [{ kind: "text", text }];

  const nodes: MathNode[] = [];
  for (const node of parseMath(text.slice(0, first.start))) {
    if (node.kind === "text") pushText(nodes, node.text);
    else nodes.push(node);
  }
  nodes.push(first.node);
  for (const node of parseMath(text.slice(first.end))) {
    if (node.kind === "text") pushText(nodes, node.text);
    else nodes.push(node);
  }
  return nodes;
}
