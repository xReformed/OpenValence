import solutionsIcon from "../../assets/concept/solutions.webp";
import type { Concept } from "../types";

const solutions: Concept = {
  slug: "solutions",
  title: "Solutions",
  icon: solutionsIcon,
  status: "planned",
  summary:
    "A levelled path through solutions, from solubility and concentration units to colligative properties and colloids.",
  span: "solution vocabulary to colligative properties",
  stages: [
    {
      title: "Basics",
      levels: [
        {
          skill: "Solution vocabulary",
          tag: "solution-terms",
          example: "Solute, solvent, solution, aqueous",
        },
        {
          skill: "Saturated, unsaturated, and supersaturated",
          tag: "saturation",
          example: "Adding more solute to a saturated solution leaves it undissolved",
        },
        {
          skill: "Strong, weak, and nonelectrolytes",
          tag: "electrolytes",
          example: "NaCl strong, acetic acid weak, sugar nonelectrolyte",
        },
        {
          skill: "Dissociation and ion concentrations",
          tag: "ion-concentration",
          example: "0.10 M CaCl2 contains 0.20 M Cl−",
        },
      ],
    },
    {
      title: "Solubility",
      levels: [
        {
          skill: '"Like dissolves like"',
          tag: "like-dissolves-like",
          example: "Oil doesn't dissolve in water; ethanol does",
        },
        {
          skill: "Solubility rules for ionic compounds",
          tag: "solubility-rules",
          example: "All nitrates are soluble; AgCl is insoluble",
        },
        {
          skill: "Precipitation reactions",
          tag: "precipitation",
          example: "AgNO3 + NaCl forms solid AgCl",
        },
        {
          skill: "Temperature and solubility",
          tag: "solubility-temperature",
          example: "Most solids dissolve better when hot; gases dissolve less",
        },
        {
          skill: "Reading solubility curves",
          tag: "solubility-curves",
          example: "Grams of KNO3 that dissolve in 100 g water at 50 °C",
        },
        {
          skill: "Henry's law (gas solubility and pressure)",
          tag: "henrys-law",
          example: "Doubling the pressure doubles dissolved CO2",
        },
        {
          skill: "Energy of dissolving (lattice vs hydration energy)",
          tag: "enthalpy-of-solution",
          example: "Why some salts get cold when they dissolve",
          advanced: true,
        },
      ],
    },
    {
      title: "Concentration",
      levels: [
        {
          skill: "Mass percent",
          tag: "mass-percent",
          example: "5.0 g NaCl in 95.0 g water = 5.0%",
        },
        {
          skill: "Volume percent and mass/volume percent",
          tag: "volume-percent",
          example: "12% alcohol by volume",
        },
        {
          skill: "Parts per million and billion",
          tag: "ppm-ppb",
          example: "2.0 mg in 1.0 kg of water = 2.0 ppm",
        },
        {
          skill: "Molarity",
          tag: "molarity",
          example: "5.844 g NaCl in 0.500 L = 0.200 M",
        },
        {
          skill: "Preparing a solution of a given molarity",
          tag: "solution-prep",
          example: "250.0 mL of 0.100 M NaCl needs 1.461 g NaCl",
        },
        {
          skill: "Dilution",
          tag: "dilution",
          example: "10.0 mL of 6.00 M diluted to 100.0 mL = 0.600 M",
        },
        {
          skill: "Molality",
          tag: "molality",
          example: "1.00 mol solute in 2.00 kg solvent = 0.500 m",
        },
        {
          skill: "Mole fraction",
          tag: "mole-fraction",
          example: "1.00 mol ethanol + 3.00 mol water → x(ethanol) = 0.250",
        },
        {
          skill: "Converting between concentration units (using density)",
          tag: "concentration-conversion",
          example: "Molarity to molality for concentrated acid",
          advanced: true,
        },
      ],
    },
    {
      title: "Colligative properties",
      levels: [
        {
          skill: "What colligative properties are",
          tag: "colligative-basics",
          example: "They depend on the number of particles, not their identity",
        },
        {
          skill: "Van 't Hoff factor",
          tag: "vant-hoff-factor",
          example: "Glucose i = 1, NaCl i ≈ 2, CaCl2 i ≈ 3",
        },
        {
          skill: "Vapor pressure lowering (Raoult's law)",
          tag: "raoults-law",
          example: "x(solvent) = 0.900, P° = 23.8 torr → 21.4 torr",
        },
        {
          skill: "Boiling point elevation",
          tag: "boiling-point-elevation",
          example: "1.00 m glucose in water boils at 100.51 °C",
        },
        {
          skill: "Freezing point depression",
          tag: "freezing-point-depression",
          example: "1.00 m NaCl in water freezes at −3.72 °C",
        },
        {
          skill: "Osmotic pressure",
          tag: "osmotic-pressure",
          example: "0.100 M glucose at 298 K = 2.45 atm",
        },
        {
          skill: "Molar mass from colligative data",
          tag: "colligative-molar-mass",
          example: "Finding the molar mass of an unknown from its freezing point",
          advanced: true,
        },
        {
          skill: "Ion pairing (why real i is lower than ideal)",
          tag: "ion-pairing",
          example: "Measured i for MgSO4 is well below 2",
          advanced: true,
        },
        {
          skill: "Raoult's law for two volatile liquids",
          tag: "raoults-volatile",
          example: "Vapor pressure of a benzene-toluene mixture",
          advanced: true,
        },
      ],
    },
    {
      title: "Colloids",
      levels: [
        {
          skill: "Colloids and the Tyndall effect",
          tag: "colloids",
          example: "Milk scatters light; salt water doesn't",
        },
      ],
    },
    {
      title: "Applied",
      levels: [
        {
          skill: "Real-world problems",
          tag: "applied-solutions",
          example: "Road salt, isotonic IV saline, antifreeze",
        },
      ],
    },
    {
      title: "Review",
      levels: [
        {
          skill: "Mixed review: choosing the right concentration unit and calculation",
          tag: "solutions-mixed",
          example: "Problems requiring the student to pick molarity, molality, or ppm",
        },
      ],
    },
  ],
};

export default solutions;
