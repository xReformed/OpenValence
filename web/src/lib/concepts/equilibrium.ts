import equilibriumIcon from "../../assets/concept/equilibrium.webp";
import type { Concept } from "../types";

const equilibrium: Concept = {
  slug: "equilibrium",
  title: "Chemical equilibrium",
  icon: equilibriumIcon,
  status: "planned",
  summary:
    "A levelled path through chemical equilibrium, from dynamic equilibrium and K expressions through ICE tables and Le Chatelier's principle to solubility equilibria.",
  span: "dynamic equilibrium to solubility equilibria",
  stages: [
    {
      title: "The idea of equilibrium",
      levels: [
        {
          skill: "Reversible reactions and dynamic equilibrium",
          tag: "dynamic-equilibrium",
          example: "Forward and reverse rates become equal; reactions don't stop",
        },
        {
          skill: "Common misconceptions",
          tag: "equilibrium-misconceptions",
          example: "Equilibrium doesn't mean equal amounts of reactants and products",
        },
        {
          skill: "Reading concentration-vs-time graphs",
          tag: "equilibrium-graphs",
          example: "Curves level off when equilibrium is reached",
        },
      ],
    },
    {
      title: "Equilibrium expressions",
      levels: [
        {
          skill: "Writing K_c expressions",
          tag: "kc-expression",
          example: "N2 + 3H2 ⇌ 2NH3: K_c = [NH3]^2 / ([N2][H2]^3)",
        },
        {
          skill: "Heterogeneous equilibria (leave out solids and liquids)",
          tag: "heterogeneous-equilibrium",
          example: "CaCO3(s) ⇌ CaO(s) + CO2(g): K_c = [CO2]",
        },
        {
          skill: "Writing K_p expressions",
          tag: "kp-expression",
          example: "K_p = P(NH3)^2 / (P(N2)·P(H2)^3)",
        },
        {
          skill: "What the size of K means",
          tag: "k-magnitude",
          example: "K ≫ 1: products favored; K ≪ 1: reactants favored",
        },
        {
          skill: "Manipulating K (reversing, multiplying, combining)",
          tag: "manipulating-k",
          example: "K = 4.0 → reversed: 0.25; doubled: 16",
        },
        {
          skill: "Converting K_p and K_c (K_p = K_c(RT)^{Δn})",
          tag: "kp-kc-conversion",
          example: "N2 + 3H2 ⇌ 2NH3 has Δn = −2",
          advanced: true,
        },
      ],
    },
    {
      title: "Calculations",
      levels: [
        {
          skill: "Calculating K from equilibrium concentrations",
          tag: "k-from-concentrations",
          example: "H2 + I2 ⇌ 2HI with [H2] = [I2] = 0.10 M, [HI] = 0.70 M → K = 49",
        },
        {
          skill: "Reaction quotient (Q vs K) and reaction direction",
          tag: "q-vs-k",
          example: "Q < K → reaction shifts forward",
        },
        {
          skill: "ICE tables with one known equilibrium concentration",
          tag: "ice-tables-basic",
          example: "Finding K when one equilibrium value is measured",
        },
        {
          skill: "ICE tables to solve for equilibrium concentrations",
          tag: "ice-tables-solve",
          example: "0.100 M each of H2 and I2, K = 49 → [HI] = 0.156 M",
        },
        {
          skill: "Small-x approximation and the 5% rule",
          tag: "small-x-approximation",
          example: "When x can be ignored next to the initial concentration",
        },
        {
          skill: "ICE tables requiring the quadratic formula",
          tag: "ice-quadratic",
          example: "When the approximation fails",
          advanced: true,
        },
      ],
    },
    {
      title: "Le Chatelier's principle",
      levels: [
        {
          skill: "Changing concentration",
          tag: "le-chatelier-concentration",
          example: "Adding N2 shifts the Haber reaction to the right",
        },
        {
          skill: "Changing pressure or volume",
          tag: "le-chatelier-pressure",
          example: "Decreasing volume shifts N2 + 3H2 ⇌ 2NH3 to the right (fewer gas moles)",
        },
        {
          skill: "Changing temperature (the only change that alters K)",
          tag: "le-chatelier-temperature",
          example: "Heating an exothermic reaction shifts it left and lowers K",
        },
        {
          skill: "Catalysts don't shift equilibrium",
          tag: "catalyst-equilibrium",
          example: "A catalyst only helps reach equilibrium faster",
        },
        {
          skill: "Real-world trade-offs",
          tag: "haber-process",
          example: "Haber process: pressure, temperature, and catalyst choices",
        },
      ],
    },
    {
      title: "Solubility equilibria",
      levels: [
        {
          skill: "Writing K_sp expressions",
          tag: "ksp-expression",
          example: "CaF2(s) ⇌ Ca^2+ + 2F^−: K_sp = [Ca^2+][F^−]^2",
        },
        {
          skill: "Molar solubility from K_sp",
          tag: "molar-solubility",
          example: "AgCl (K_sp = 1.8 × 10^−10): s = 1.3 × 10^−5 M",
        },
        {
          skill: "Common ion effect",
          tag: "common-ion-effect",
          example: "AgCl in 0.10 M NaCl: s = 1.8 × 10^−9 M",
        },
        {
          skill: "Predicting precipitation (Q vs K_sp)",
          tag: "precipitation-prediction",
          example: "Mixing two solutions: will a solid form?",
        },
        {
          skill: "Selective precipitation",
          tag: "selective-precipitation",
          example: "Separating Ag+ and Pb^2+ by adding Cl− gradually",
          advanced: true,
        },
        {
          skill: "Complex ion equilibria (K_f)",
          tag: "complex-ion-equilibria",
          example: "Ag+ + 2NH3 ⇌ Ag(NH3)2^+ increases AgCl solubility",
          advanced: true,
        },
      ],
    },
    {
      title: "Equilibrium and energy",
      levels: [
        {
          skill: "ΔG and K (ΔG° = −RT ln K)",
          tag: "delta-g-k",
          example: "K > 1 when ΔG° < 0",
          advanced: true,
        },
        {
          skill: "How K changes with temperature (van 't Hoff equation)",
          tag: "vant-hoff-equation",
          example: "Calculating K at a new temperature",
          advanced: true,
        },
      ],
    },
    {
      title: "Review",
      levels: [
        {
          skill: "Mixed review: expressions, ICE tables, and Le Chatelier",
          tag: "equilibrium-mixed",
          example: "Multi-part problems on one reaction",
        },
      ],
    },
  ],
};

export default equilibrium;
