import stoichiometryIcon from "../../assets/concept/stoichiometry.webp";
import type { Concept } from "../types";

const stoichiometry: Concept = {
  slug: "stoichiometry",
  title: "Stoichiometry",
  icon: stoichiometryIcon,
  status: "planned",
  summary:
    "A levelled path through stoichiometry, from units to multi-concept problems, grouped into stages.",
  span: "units to multi-concept problems",
  stages: [
    {
      title: "Foundations",
      levels: [
        { skill: "Units, dimensional analysis, significant figures", tag: "units-sigfigs" },
        { skill: "Molar mass", tag: "molar-mass" },
        { skill: "Grams ↔ moles ↔ particles", tag: "mole-conversion" },
      ],
    },
    {
      title: "Formulas",
      levels: [
        { skill: "Percent composition", tag: "percent-composition" },
        { skill: "Empirical and molecular formulas", tag: "empirical-formula" },
        { skill: "Hydrate formulas", tag: "hydrates" },
        { skill: "Combustion analysis", tag: "combustion-analysis", advanced: true },
      ],
    },
    {
      title: "Reactions",
      levels: [
        { skill: "Mole ratios", tag: "mole-ratio" },
        { skill: "Mass to mass", tag: "mass-to-mass" },
        { skill: "Limiting reagent and theoretical yield", tag: "limiting-reagent" },
        { skill: "Excess reagent remaining", tag: "excess-reagent" },
        { skill: "Percent yield", tag: "percent-yield" },
        { skill: "Percent purity", tag: "percent-purity" },
        { skill: "Multi-step reactions", tag: "multi-step" },
      ],
    },
    {
      title: "Solutions",
      levels: [
        { skill: "Molarity", tag: "molarity" },
        { skill: "Dilution", tag: "dilution" },
        { skill: "Precipitation and gravimetric analysis", tag: "gravimetric" },
        { skill: "Titrations", tag: "titration" },
        { skill: "Back titration", tag: "back-titration", advanced: true },
      ],
    },
    {
      title: "Gases",
      levels: [
        { skill: "Volume ratios at same T and P", tag: "gas-volume-ratio" },
        { skill: "Gas stoichiometry with PV = nRT", tag: "gas-stoichiometry" },
        { skill: "Gas collected over water", tag: "gas-over-water" },
      ],
    },
    {
      title: "Energy and applied",
      levels: [
        { skill: "Thermochemical stoichiometry", tag: "thermo-stoichiometry" },
        { skill: "Atom economy", tag: "atom-economy" },
        { skill: "Electrochemical stoichiometry", tag: "electro-stoichiometry", advanced: true },
        { skill: "Real-world multi-concept problems", tag: "applied-stoichiometry" },
      ],
    },
  ],
};

export default stoichiometry;
