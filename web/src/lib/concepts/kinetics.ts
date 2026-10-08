import kineticsIcon from "../../assets/concept/kinetics.webp";
import type { Concept } from "../types";

const kinetics: Concept = {
  slug: "kinetics",
  title: "Kinetics",
  icon: kineticsIcon,
  status: "planned",
  summary:
    "A levelled path through reaction kinetics, from reaction rates and rate laws through integrated rate laws and activation energy to mechanisms and catalysis.",
  span: "reaction rates to catalysis",
  stages: [
    {
      title: "Reaction rates",
      levels: [
        {
          skill: "What a reaction rate is",
          tag: "reaction-rate",
          example: "Change in concentration per unit time (M/s)",
        },
        {
          skill: "Average and instantaneous rates",
          tag: "average-instantaneous-rate",
          example: "[A] drops from 0.100 to 0.060 M in 20 s → 2.0 × 10^−3 M/s",
        },
        {
          skill: "Rates and stoichiometry",
          tag: "rate-stoichiometry",
          example: "2N2O5 → 4NO2 + O2: NO2 forms twice as fast as N2O5 disappears",
        },
        {
          skill: "Factors that affect rate",
          tag: "rate-factors",
          example: "Concentration, temperature, surface area, catalysts",
        },
      ],
    },
    {
      title: "Rate laws",
      levels: [
        {
          skill: "Rate law form and reaction order",
          tag: "rate-law",
          example: "rate = k[A]^{m}[B]^{n}",
        },
        {
          skill: "Overall order and units of k",
          tag: "rate-constant-units",
          example: "Second order: k in M^−1 s^−1",
        },
        {
          skill: "Method of initial rates",
          tag: "initial-rates",
          example: "Doubling [A] quadruples the rate → second order in A",
        },
        {
          skill: "Calculating k and rates from a rate law",
          tag: "rate-law-calc",
          example: "Plugging concentrations into a known rate law",
        },
      ],
    },
    {
      title: "Integrated rate laws",
      levels: [
        {
          skill: "First-order integrated rate law",
          tag: "first-order-integrated",
          example: "k = 0.0693 s^−1: after 10.0 s, half of A remains",
        },
        {
          skill: "First-order half-life",
          tag: "first-order-half-life",
          example: "t_(1/2) = 0.693/k = 10.0 s; independent of concentration",
        },
        {
          skill: "Zero-order integrated rate law and half-life",
          tag: "zero-order",
          example: "[A] decreases linearly with time",
          advanced: true,
        },
        {
          skill: "Second-order integrated rate law and half-life",
          tag: "second-order",
          example: "1/[A] = kt + 1/[A]_0; t_(1/2) = 1/(k[A]_0)",
          advanced: true,
        },
        {
          skill: "Determining order from graphs",
          tag: "order-from-graphs",
          example: "ln[A] vs t is linear → first order",
        },
      ],
    },
    {
      title: "Energy and temperature",
      levels: [
        {
          skill: "Collision theory",
          tag: "collision-theory",
          example: "Molecules must collide with enough energy and the right orientation",
        },
        {
          skill: "Activation energy and energy diagrams",
          tag: "activation-energy",
          example: "Reading E_a, ΔH, and the transition state from a diagram",
        },
        {
          skill: "Temperature and molecular energy distribution",
          tag: "temperature-rate",
          example: "Higher temperature → more molecules exceed E_a",
        },
        {
          skill: "Arrhenius equation",
          tag: "arrhenius-equation",
          example: "k = Ae^(−Ea/RT)",
          advanced: true,
        },
        {
          skill: "Finding E_a or k at two temperatures",
          tag: "arrhenius-two-point",
          example: "E_a = 50 kJ/mol: going from 298 K to 308 K about doubles k",
          advanced: true,
        },
      ],
    },
    {
      title: "Mechanisms",
      levels: [
        {
          skill: "Elementary steps and molecularity",
          tag: "elementary-steps",
          example: "Unimolecular, bimolecular, termolecular steps",
        },
        {
          skill: "Intermediates vs catalysts",
          tag: "intermediates",
          example: "An intermediate forms then is used up; a catalyst is used then regenerated",
        },
        {
          skill: "Rate-determining step and deriving the rate law",
          tag: "rate-determining-step",
          example: "A slow first step sets the rate law",
        },
        {
          skill: "Mechanisms with a fast pre-equilibrium",
          tag: "pre-equilibrium",
          example: "Substituting for an intermediate using K",
          advanced: true,
        },
      ],
    },
    {
      title: "Catalysis",
      levels: [
        {
          skill: "How catalysts work",
          tag: "catalysis",
          example: "A different pathway with lower E_a",
        },
        {
          skill: "Homogeneous and heterogeneous catalysts",
          tag: "catalyst-types",
          example: "Catalytic converters use solid metal surfaces",
        },
        {
          skill: "Enzymes as catalysts",
          tag: "enzymes",
          example: "Enzymes speed up reactions in the body",
        },
        {
          skill: "Michaelis-Menten kinetics",
          tag: "michaelis-menten",
          example: "Rate levels off at high substrate concentration",
          advanced: true,
        },
      ],
    },
    {
      title: "Applied",
      levels: [
        {
          skill: "Real-world problems",
          tag: "applied-kinetics",
          example: "Refrigeration slowing food spoilage; drug half-lives",
        },
      ],
    },
    {
      title: "Review",
      levels: [
        {
          skill: "Mixed review: rate law from data, then predict concentration over time",
          tag: "kinetics-mixed",
          example: "Multi-part problem from one dataset",
        },
      ],
    },
  ],
};

export default kinetics;
