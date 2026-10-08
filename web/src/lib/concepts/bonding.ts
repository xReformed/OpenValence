import bondingIcon from "../../assets/concept/bonding.webp";
import type { Concept } from "../types";

const bonding: Concept = {
  slug: "bonding",
  title: "Bonding and molecular shape",
  icon: bondingIcon,
  status: "planned",
  summary:
    "A levelled path through chemical bonding, from why atoms bond through Lewis structures and molecular shape to orbital theories and intermolecular forces.",
  span: "the octet rule to intermolecular forces",
  stages: [
    {
      title: "Bond types",
      levels: [
        {
          skill: "Why atoms bond; the octet rule",
          tag: "octet-rule",
          example: "Na loses 1 electron, Cl gains 1, both reach a noble-gas configuration",
        },
        {
          skill: "Ionic, covalent, and metallic bonding",
          tag: "bond-types",
          example: "NaCl ionic, Cl2 covalent, Cu metallic",
        },
        {
          skill: "Electronegativity difference and bond polarity",
          tag: "bond-polarity",
          example: "H–Cl: ΔEN = 0.96 → polar covalent",
        },
        {
          skill: "Lattice energy trends",
          tag: "lattice-energy",
          example: "MgO has a higher lattice energy than NaCl (higher ion charges)",
        },
        {
          skill: "Born-Haber cycles",
          tag: "born-haber",
          example: "Calculating the lattice energy of NaCl from a cycle",
          advanced: true,
        },
      ],
    },
    {
      title: "Lewis structures",
      levels: [
        {
          skill: "Lewis dot symbols for atoms and ions",
          tag: "lewis-symbols",
          example: "N has 5 dots; Cl− has 8",
        },
        {
          skill: "Lewis structures of ionic compounds",
          tag: "ionic-lewis",
          example: "[Na]^+ [:Cl:]^−",
        },
        {
          skill: "Lewis structures of simple molecules",
          tag: "lewis-basic",
          example: "H2O, NH3, CH4",
        },
        {
          skill: "Multiple bonds",
          tag: "multiple-bonds",
          example: "O=C=O; N≡N",
        },
        {
          skill: "Lewis structures of polyatomic ions",
          tag: "lewis-ions",
          example: "NH4+, OH−, SO4^2−",
        },
        {
          skill: "Formal charge and choosing the best structure",
          tag: "formal-charge",
          example: "In CO2, every atom has a formal charge of 0",
        },
        {
          skill: "Resonance structures",
          tag: "resonance",
          example: "NO3− has three equivalent structures",
        },
        {
          skill: "Octet exceptions (odd electrons, incomplete, expanded)",
          tag: "octet-exceptions",
          example: "NO (odd), BF3 (incomplete), SF6 (expanded)",
        },
      ],
    },
    {
      title: "Bond properties",
      levels: [
        {
          skill: "Bond order, length, and strength",
          tag: "bond-order",
          example: "C≡C is shorter and stronger than C=C, which is shorter and stronger than C–C",
        },
        {
          skill: "Estimating ΔH from bond enthalpies",
          tag: "bond-enthalpy",
          example: "Energy of bonds broken minus bonds formed",
        },
      ],
    },
    {
      title: "Molecular shape (VSEPR)",
      levels: [
        {
          skill: "Counting electron domains",
          tag: "electron-domains",
          example: "NH3: 3 bonding domains + 1 lone pair = 4",
        },
        {
          skill: "Electron geometry vs molecular geometry",
          tag: "vsepr-geometry",
          example: "NH3: tetrahedral electron geometry, trigonal pyramidal shape",
        },
        {
          skill: "Shapes with 2–4 domains",
          tag: "vsepr-basic",
          example:
            "Linear (CO2), trigonal planar (BF3), bent (H2O), tetrahedral (CH4), trigonal pyramidal (NH3)",
        },
        {
          skill: "Shapes with 5–6 domains",
          tag: "vsepr-expanded",
          example:
            "Seesaw (SF4), T-shaped (ClF3), linear (XeF2), octahedral (SF6), square pyramidal (BrF5), square planar (XeF4)",
          advanced: true,
        },
        {
          skill: "Bond angles and lone-pair effects",
          tag: "bond-angles",
          example: "CH4 109.5°, NH3 ~107°, H2O ~104.5°",
        },
        {
          skill: "Molecular polarity",
          tag: "molecular-polarity",
          example: "CO2 nonpolar, H2O polar; CCl4 nonpolar, CHCl3 polar",
        },
      ],
    },
    {
      title: "Valence bond theory",
      levels: [
        {
          skill: "Orbital overlap; sigma and pi bonds",
          tag: "sigma-pi",
          example: "A double bond = 1 σ + 1 π; a triple bond = 1 σ + 2 π",
        },
        {
          skill: "Hybridization (sp, sp^2, sp^3)",
          tag: "hybridization",
          example: "CH4 sp^3, C2H4 sp^2, C2H2 sp",
        },
        {
          skill: "Counting σ and π bonds in larger molecules",
          tag: "sigma-pi-counting",
          example: "C2H4 has 5 σ bonds and 1 π bond",
        },
        {
          skill: "Hybridization with expanded octets (sp^3d, sp^3d^2)",
          tag: "hybridization-expanded",
          example: "PCl5 sp^3d, SF6 sp^3d^2",
          advanced: true,
        },
      ],
    },
    {
      title: "Molecular orbital theory",
      levels: [
        {
          skill: "MO diagrams and bond order for diatomics",
          tag: "mo-theory",
          example: "O2 bond order = 2",
          advanced: true,
        },
        {
          skill: "Predicting magnetism from MO diagrams",
          tag: "mo-magnetism",
          example: "O2 is paramagnetic (two unpaired π* electrons)",
          advanced: true,
        },
      ],
    },
    {
      title: "Intermolecular forces",
      levels: [
        {
          skill: "Types of intermolecular forces",
          tag: "imf-types",
          example: "London dispersion, dipole-dipole, hydrogen bonding, ion-dipole",
        },
        {
          skill: "Hydrogen bonding requirements",
          tag: "hydrogen-bonding",
          example: "H bonded to N, O, or F",
        },
        {
          skill: "Predicting boiling points and solubility from IMFs",
          tag: "imf-properties",
          example: "H2O boils far higher than H2S",
        },
      ],
    },
    {
      title: "Review",
      levels: [
        {
          skill: "Mixed review: Lewis structure → shape → polarity → hybridization for one molecule",
          tag: "bonding-mixed",
          example: "Full analysis of SO2",
        },
      ],
    },
  ],
};

export default bonding;
