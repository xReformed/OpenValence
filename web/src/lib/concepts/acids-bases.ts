import acidsBasesIcon from "../../assets/concept/acids-bases.webp";
import type { Concept } from "../types";

const acidsBases: Concept = {
  slug: "acids-bases",
  title: "Acids and bases",
  icon: acidsBasesIcon,
  status: "planned",
  summary:
    "A levelled path through acids and bases, from definitions and pH through weak acids and buffers to titrations.",
  span: "definitions to titrations",
  stages: [
    {
      title: "Definitions",
      levels: [
        {
          skill: "Properties of acids and bases",
          tag: "acid-base-properties",
          example: "Acids turn blue litmus red; bases feel slippery",
        },
        {
          skill: "Arrhenius definitions",
          tag: "arrhenius",
          example: "HCl produces H+ in water; NaOH produces OH−",
        },
        {
          skill: "Brønsted-Lowry definitions",
          tag: "bronsted-lowry",
          example: "Acids donate protons; bases accept them",
        },
        {
          skill: "Conjugate acid-base pairs",
          tag: "conjugate-pairs",
          example: "NH3 + H2O ⇌ NH4+ + OH−: NH3/NH4+ and H2O/OH−",
        },
        {
          skill: "Amphiprotic substances",
          tag: "amphiprotic",
          example: "Water and HCO3− can act as acid or base",
        },
        {
          skill: "Lewis acids and bases",
          tag: "lewis-acids",
          example: "BF3 accepts an electron pair from NH3",
          advanced: true,
        },
        {
          skill: "Strong vs weak acids and bases",
          tag: "strong-weak",
          example: "Strong acids: HCl, HBr, HI, HNO3, H2SO4, HClO4, HClO3",
        },
        {
          skill: "How structure affects acid strength",
          tag: "acid-strength-structure",
          example: "HI is stronger than HF; HClO4 is stronger than HClO",
          advanced: true,
        },
      ],
    },
    {
      title: "pH",
      levels: [
        {
          skill: "Autoionization of water (K_w)",
          tag: "kw",
          example: "K_w = 1.0 × 10^−14 at 25 °C",
        },
        {
          skill: "Converting pH, pOH, [H+], and [OH−]",
          tag: "ph-conversions",
          example: "[H+] = 1.0 × 10^−3 M → pH 3.00, pOH 11.00",
        },
        {
          skill: "Significant figures in pH",
          tag: "ph-sig-figs",
          example: "Decimal places in pH = sig figs in [H+]",
        },
        {
          skill: "pH of strong acids and bases",
          tag: "strong-acid-base-ph",
          example: "0.010 M HCl → pH 2.00; 0.0050 M Ba(OH)2 → pH 12.00",
        },
        {
          skill: "Neutralization reactions",
          tag: "neutralization",
          example: "HCl + NaOH → NaCl + H2O",
        },
      ],
    },
    {
      title: "Weak acids and bases",
      levels: [
        {
          skill: "K_a expressions and meaning",
          tag: "ka-expression",
          example: "Larger K_a means a stronger weak acid",
        },
        {
          skill: "pH of weak acids",
          tag: "weak-acid-ph",
          example: "0.10 M acetic acid (K_a = 1.8 × 10^−5) → pH 2.87",
        },
        {
          skill: "Finding K_a from pH",
          tag: "ka-from-ph",
          example: "Measured pH of a weak acid solution → K_a",
        },
        {
          skill: "Percent ionization",
          tag: "percent-ionization",
          example: "0.10 M acetic acid is 1.3% ionized",
        },
        {
          skill: "pH of weak bases (K_b)",
          tag: "weak-base-ph",
          example: "0.10 M NH3 (K_b = 1.8 × 10^−5) → pH 11.13",
        },
        {
          skill: "K_a × K_b = K_w; pK_a and pK_b",
          tag: "ka-kb-relationship",
          example: "K_b of acetate = 5.6 × 10^−10",
        },
        {
          skill: "Acidic, basic, and neutral salts",
          tag: "salt-hydrolysis",
          example: "NH4Cl acidic, NaC2H3O2 basic, NaCl neutral",
        },
        {
          skill: "pH of salt solutions",
          tag: "salt-ph",
          example: "0.10 M NaC2H3O2 → pH 8.87",
          advanced: true,
        },
        {
          skill: "Polyprotic acids",
          tag: "polyprotic-acids",
          example: "H3PO4 loses protons in steps; K_a1 ≫ K_a2 ≫ K_a3",
          advanced: true,
        },
      ],
    },
    {
      title: "Buffers",
      levels: [
        {
          skill: "What buffers are",
          tag: "buffer-basics",
          example: "A weak acid with its conjugate base resists pH change",
        },
        {
          skill: "Henderson-Hasselbalch equation",
          tag: "henderson-hasselbalch",
          example: "Equal acetic acid and acetate → pH = pK_a = 4.74",
        },
        {
          skill: "Adding strong acid or base to a buffer",
          tag: "buffer-addition",
          example: "React first (stoichiometry), then use Henderson-Hasselbalch",
        },
        {
          skill: "Buffer capacity and choosing a buffer",
          tag: "buffer-design",
          example: "Pick an acid with pK_a close to the target pH",
        },
      ],
    },
    {
      title: "Titrations",
      levels: [
        {
          skill: "Titration basics and equivalence point",
          tag: "titration",
          example: "Moles of acid = moles of base at equivalence (1:1)",
        },
        {
          skill: "Strong acid-strong base titration curves",
          tag: "titration-strong",
          example: "pH = 7 at the equivalence point",
        },
        {
          skill: "Weak acid-strong base titration curves",
          tag: "titration-weak",
          example: "pH = pK_a at half-equivalence; basic at equivalence",
        },
        {
          skill: "Calculating pH at any point on a titration curve",
          tag: "titration-curve-calc",
          example: "pH after adding 15.0 mL of base",
          advanced: true,
        },
        {
          skill: "Choosing indicators",
          tag: "indicators",
          example: "Phenolphthalein for weak acid-strong base titrations",
        },
        {
          skill: "Polyprotic acid titration curves",
          tag: "titration-polyprotic",
          example: "Two equivalence points for a diprotic acid",
          advanced: true,
        },
      ],
    },
    {
      title: "Solubility link",
      levels: [
        {
          skill: "pH and solubility",
          tag: "ph-solubility",
          example: "Mg(OH)2 dissolves more in acid",
          advanced: true,
        },
      ],
    },
    {
      title: "Applied",
      levels: [
        {
          skill: "Real-world problems",
          tag: "applied-acids-bases",
          example: "Blood's carbonate buffer, acid rain, antacids",
        },
      ],
    },
    {
      title: "Review",
      levels: [
        {
          skill: "Mixed review: identifying the solution type, then calculating pH",
          tag: "acids-bases-mixed",
          example: "Strong acid, weak base, buffer, or salt?",
        },
      ],
    },
  ],
};

export default acidsBases;
