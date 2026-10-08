import thermochemistryIcon from "../../assets/concept/thermochemistry.webp";
import type { Concept } from "../types";

const thermochemistry: Concept = {
  slug: "thermochemistry",
  title: "Thermochemistry",
  icon: thermochemistryIcon,
  status: "planned",
  summary:
    "A levelled path through thermochemistry, from energy and heat through calorimetry and enthalpy to entropy and free energy.",
  span: "energy basics to free energy",
  stages: [
    {
      title: "Energy basics",
      levels: [
        {
          skill: "Forms of energy and conservation of energy",
          tag: "energy-forms",
          example: "Kinetic vs potential energy; chemical energy stored in bonds",
        },
        {
          skill: "Energy units and conversions",
          tag: "energy-units",
          example: "1 cal = 4.184 J; a 250 Cal snack = 1046 kJ",
        },
        {
          skill: "System and surroundings; open, closed, isolated",
          tag: "system-surroundings",
          example: "In a hand warmer, the reaction is the system",
        },
        {
          skill: "Endothermic vs exothermic; sign of q",
          tag: "endo-exo",
          example: "Melting ice absorbs heat, so q is positive",
        },
        {
          skill: "Heat vs temperature",
          tag: "heat-vs-temperature",
          example: "A bathtub of warm water holds more heat than a cup of boiling water",
        },
        {
          skill: "First law of thermodynamics (ΔE = q + w)",
          tag: "first-law",
          example: "q = +50 J, w = −20 J → ΔE = +30 J",
          advanced: true,
        },
        {
          skill: "Pressure-volume work (w = −PΔV)",
          tag: "pv-work",
          example: "Expanding 2.00 L against 1.00 atm: w = −203 J",
          advanced: true,
        },
      ],
    },
    {
      title: "Heat calculations",
      levels: [
        {
          skill: "Specific heat and heat capacity",
          tag: "specific-heat",
          example: "Water: 4.184 J/(g·°C)",
        },
        {
          skill: "Calculating heat (q = mcΔT)",
          tag: "q-mc-delta-t",
          example: "100.0 g water from 20.0 to 30.0 °C absorbs 4.18 kJ",
        },
        {
          skill: "Solving for specific heat, mass, or final temperature",
          tag: "specific-heat-solve",
          example: "Identifying a metal from its specific heat",
        },
        {
          skill: "Heat transfer between objects",
          tag: "heat-transfer",
          example: "Hot metal dropped into water: heat lost = heat gained",
        },
        {
          skill: "Heat of phase changes",
          tag: "phase-change-heat",
          example: "Melting 18.02 g (1 mol) of ice takes 6.01 kJ",
        },
        {
          skill: "Heating curves (multi-step)",
          tag: "heating-curves",
          example: "Total heat to turn ice at −10 °C into steam at 110 °C",
        },
      ],
    },
    {
      title: "Calorimetry",
      levels: [
        {
          skill: "Coffee-cup calorimetry (constant pressure)",
          tag: "coffee-cup-calorimetry",
          example: "Finding ΔH of neutralization from a temperature rise",
        },
        {
          skill: "Bomb calorimetry (constant volume, calorimeter constant)",
          tag: "bomb-calorimetry",
          example: "Energy content of a fuel sample",
          advanced: true,
        },
      ],
    },
    {
      title: "Enthalpy",
      levels: [
        {
          skill: "Enthalpy and the sign of ΔH",
          tag: "enthalpy",
          example: "ΔH < 0 means heat is released",
        },
        {
          skill: "Thermochemical equations (reversing and scaling)",
          tag: "thermochemical-equations",
          example: "CH4 combustion: ΔH = −890 kJ; reversed: +890 kJ; doubled: −1780 kJ",
        },
        {
          skill: "Thermochemical stoichiometry",
          tag: "thermo-stoichiometry",
          example: "Burning 2.000 mol CH4 releases about 1780 kJ",
        },
        {
          skill: "Hess's law",
          tag: "hess-law",
          example: "C + ½O2 → CO: −393.5 − (−283.0) = −110.5 kJ",
        },
        {
          skill: "Standard states and enthalpies of formation",
          tag: "formation-enthalpy-basics",
          example: "ΔH°_f of an element in its standard state = 0",
        },
        {
          skill: "ΔH°_rxn from enthalpies of formation",
          tag: "formation-enthalpy",
          example: "CH4 combustion: [−393.5 + 2(−285.8)] − [−74.8] = −890.3 kJ",
        },
        {
          skill: "Estimating ΔH from bond enthalpies",
          tag: "bond-enthalpy",
          example: "Bonds broken minus bonds formed",
        },
      ],
    },
    {
      title: "Applied",
      levels: [
        {
          skill: "Fuels and food energy",
          tag: "fuel-food-energy",
          example: "Comparing energy per gram of different fuels",
        },
      ],
    },
    {
      title: "Thermodynamics",
      levels: [
        {
          skill: "Entropy and spontaneity (conceptual)",
          tag: "entropy",
          example: "Melting ice increases entropy",
          advanced: true,
        },
        {
          skill: "Calculating ΔS° from standard entropies",
          tag: "entropy-calc",
          example: "ΔS° for a reaction from table values",
          advanced: true,
        },
        {
          skill: "Gibbs free energy (ΔG = ΔH − TΔS)",
          tag: "gibbs-free-energy",
          example: "ΔH = +40 kJ, ΔS = +100 J/K → spontaneous above 400 K",
          advanced: true,
        },
        {
          skill: "ΔG° from free energies of formation",
          tag: "gibbs-formation",
          example: "Using table values like ΔH°_f",
          advanced: true,
        },
        {
          skill: "ΔG and the equilibrium constant",
          tag: "delta-g-k",
          example: "ΔG° = −RT ln K",
          advanced: true,
        },
      ],
    },
    {
      title: "Review",
      levels: [
        {
          skill: "Mixed review: calorimetry, Hess's law, and formation enthalpies",
          tag: "thermo-mixed",
          example: "Multi-step problems combining several methods",
        },
      ],
    },
  ],
};

export default thermochemistry;
