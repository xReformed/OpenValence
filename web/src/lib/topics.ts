import type { Topic } from "./types";

const CHAPTERS = [
  "1. What Is Chemistry?",
  "2. Measurements",
  "3. Atoms, Molecules, and Ions",
  "4. Chemical Reactions and Equations",
  "5. Stoichiometry and the Mole",
  "6. Gases",
  "7. Energy and Chemistry",
  "8. Electronic Structure",
  "9. Chemical Bonds",
  "10. Solids and Liquids",
  "11. Solutions",
  "12. Acids and Bases",
  "13. Chemical Equilibrium",
  "14. Oxidation and Reduction",
  "15. Nuclear Chemistry",
  "16. Organic Chemistry",
];

export const TOPICS: Topic[] = [
  {
    slug: "concepts",
    title: "Concepts & definitions",
    summary:
      "Ask what a term means or why something happens. Answers quote the section where the idea is actually defined, not just one of the places it's mentioned.",
    questions: [
      "How do I know how many significant figures a number has?",
      "What is Hess's law?",
      "What is the difference between an Arrhenius acid and a Brønsted-Lowry acid?",
      "Why does water have a much higher boiling point than hydrogen sulfide?",
    ],
    coveredHeading: "All 16 chapters of Beginning Chemistry",
    covered: CHAPTERS,
  },
  {
    slug: "calculations",
    title: "Step-by-step calculations",
    summary:
      "Learn how to solve a problem, not just what the answer is. Answers follow the textbook's worked examples and show which formula applies and why.",
    questions: [
      "What is the volume of 4.22 mol of argon at 1.21 atm and 34°C?",
      "How do you calculate percent yield?",
      "How do you calculate the freezing point depression of a solution?",
      "How much of a radioactive sample is left after three half-lives?",
    ],
    coveredHeading: "Sections with worked calculation examples",
    covered: [
      "2.5 Converting Units",
      "5.5 Mole-Mass and Mass-Mass Calculations",
      "5.6 Yields",
      "5.7 Limiting Reagents",
      "6.6 The Ideal Gas Law and Some Applications",
      "7.5 Stoichiometry Calculations Using Enthalpy",
      "11.3 Quantitative Units of Concentration",
      "11.6 Colligative Properties of Solutions",
      "12.4 Acid-Base Titrations",
      "13.5 Calculating Equilibrium Constant Values",
      "15.3 Half-Life",
    ],
    coming: [
      "Calculator tools that do the arithmetic in code, so every number is exact",
      "Unit conversions",
    ],
  },
  {
    slug: "balancing-equations",
    title: "Balancing chemical equations",
    soon: true,
    summary:
      "A balancer that solves any equation exactly, then explains the method. It will also check your own attempt, so you can see where it went wrong.",
    questions: [
      "What are the steps for balancing a chemical equation?",
      "How do you balance a redox reaction using the half-reaction method?",
    ],
    coveredHeading: "Available today: the methods, from the textbook",
    covered: [
      "4.2 The Chemical Equation",
      "14.3 Balancing Redox Reactions",
    ],
    coming: [
      "Exact balancing for any equation, including redox in acidic or basic solution",
      "Check your own attempt, element by element",
      "An atom-count table for each side",
      "Hints instead of answers, if you want to try first",
    ],
  },
  {
    slug: "compound-facts",
    title: "Compound facts from PubChem",
    soon: true,
    summary:
      "Look up any compound and get facts from PubChem, the US National Library of Medicine's chemistry database, instead of numbers recalled from memory.",
    questions: [],
    coveredHeading: "Available today",
    covered: ["Compounds discussed in the textbook itself"],
    coming: [
      "Molecular formula and molar mass",
      "Melting point, boiling point, and solubility",
      "GHS hazard pictograms",
      "2D structure images",
    ],
  },
  {
    slug: "organic-and-chemical-engineering",
    title: "Organic chemistry & chemical engineering",
    soon: true,
    summary:
      "Organic chemistry beyond the basics, and the foundation of chemical engineering: material and energy balances.",
    questions: [
      "What is the hybridization and bond angle at the carbon atoms in a carbon-carbon triple bond?",
      "What is the difference between a condensed structure and a skeletal structure?",
    ],
    coveredHeading: "Available today: introductory organic chemistry",
    covered: [
      "Beginning Chemistry 16.2 Hydrocarbons",
      "Beginning Chemistry 16.4 Alkyl Halides and Alcohols",
      "Beginning Chemistry 16.5 Other Oxygen-Containing Functional Groups",
      "Beginning Chemistry 16.6 Other Functional Groups",
      "Organic Chemistry (OpenStax) chapter 1: Structure and Bonding",
      "Organic Chemistry (OpenStax) chapter 2: Polar Covalent Bonds; Acids and Bases",
      "Organic Chemistry (OpenStax) chapter 3: Alkanes and Their Stereochemistry",
      "Organic Chemistry (OpenStax) chapter 4: Cycloalkanes and Their Stereochemistry",
      "Organic Chemistry (OpenStax) chapter 5: Stereochemistry at Tetrahedral Centers",
      "Organic Chemistry (OpenStax) chapter 6: An Overview of Organic Reactions",
      "Organic Chemistry (OpenStax) chapter 7: Alkenes: Structure and Reactivity",
      "Organic Chemistry (OpenStax) chapter 8: Alkenes: Reactions and Synthesis",
      "Organic Chemistry (OpenStax) chapter 9: Alkynes: An Introduction to Organic Synthesis",
      "Organic Chemistry (OpenStax) chapter 10: Organohalides",
      "Organic Chemistry (OpenStax) chapter 11: Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations",
      "Organic Chemistry (OpenStax) chapter 12: Structure Determination: Mass Spectrometry and Infrared Spectroscopy",
      "Organic Chemistry (OpenStax) chapter 13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy",
      "Organic Chemistry (OpenStax) chapter 14: Conjugated Compounds and Ultraviolet Spectroscopy",
      "Organic Chemistry (OpenStax) chapter 15: Benzene and Aromaticity",
      "Organic Chemistry (OpenStax) chapter 16: Chemistry of Benzene: Electrophilic Aromatic Substitution",
      "Organic Chemistry (OpenStax) chapter 17: Alcohols and Phenols",
      "Organic Chemistry (OpenStax) chapter 18: Ethers and Epoxides; Thiols and Sulfides",
      "Organic Chemistry (OpenStax) chapter 19: Aldehydes and Ketones: Nucleophilic Addition Reactions",
    ],
    coming: [
      "The rest of OpenStax Organic Chemistry, including reaction mechanisms",
      "Material and energy balances",
    ],
  },
];

export function findTopic(slug: string | undefined): Topic | undefined {
  return TOPICS.find((topic) => topic.slug === slug);
}

export function askHref(question: string): string {
  return `/chat?q=${encodeURIComponent(question)}`;
}
