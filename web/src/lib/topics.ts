export interface Topic {
  slug: string;
  title: string;
  soon?: boolean;
  summary: string;
  questions: string[];
  coveredHeading: string;
  covered: string[];
  coming?: string[];
}

const CHAPTERS = [
  "1. Essential Ideas of Chemistry",
  "2. Atoms, Molecules, and Ions",
  "3. Composition of Substances and Solutions",
  "4. Stoichiometry of Chemical Reactions",
  "5. Thermochemistry",
  "6. Electronic Structure and Periodic Properties",
  "7. Chemical Bonding and Molecular Geometry",
  "8. Advanced Theories of Covalent Bonding",
  "9. Gases",
  "10. Liquids and Solids",
  "11. Solutions and Colloids",
  "12. Kinetics",
  "13. Fundamental Equilibrium Concepts",
  "14. Acid-Base Equilibria",
  "15. Equilibria of Other Reaction Classes",
  "16. Thermodynamics",
  "17. Electrochemistry",
  "18. Representative Metals, Metalloids, and Nonmetals",
  "19. Transition Metals and Coordination Chemistry",
  "20. Organic Chemistry",
  "21. Nuclear Chemistry",
];

export const TOPICS: Topic[] = [
  {
    slug: "concepts",
    title: "Concepts & definitions",
    summary:
      "Ask what a term means or why something happens. Answers quote the section where the idea is actually defined, not just one of the places it's mentioned.",
    questions: [
      "What is the difference between accuracy and precision?",
      "What is Hess's law?",
      "What is a Lewis acid?",
      "Why does water have a much higher boiling point than hydrogen sulfide?",
    ],
    coveredHeading: "All 21 chapters of OpenStax Chemistry",
    covered: CHAPTERS,
  },
  {
    slug: "calculations",
    title: "Step-by-step calculations",
    summary:
      "Learn how to solve a problem, not just what the answer is. Answers follow the textbook's worked examples and show which formula applies and why.",
    questions: [
      "What is the pH of a buffer made from 0.10 M acetic acid and 0.10 M sodium acetate?",
      "How do you calculate percent yield?",
      "How do you calculate the freezing point depression of a solution?",
      "How is the half-life of a first-order reaction related to its rate constant?",
    ],
    coveredHeading: "Sections with worked calculation examples",
    covered: [
      "3.1 Formula Mass and the Mole Concept",
      "3.3 Molarity",
      "4.4 Reaction Stoichiometry",
      "4.5 Reaction Yields",
      "5.3 Calorimetry",
      "9.2 Relating Pressure, Volume, Amount, and Temperature - The Ideal Gas Law",
      "11.5 Colligative Properties",
      "12.5 Integrated Rate Laws",
      "13.5 Equilibrium Calculations",
      "14.6 Buffers",
      "17.4 The Nernst Equation",
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
      "4.2 Writing and Balancing Chemical Equations",
      "17.1 Balancing Oxidation-Reduction Reactions",
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
      "Do esters have higher or lower vapor pressures than the alcohols and carboxylic acids they are made from?",
    ],
    coveredHeading: "Available today: introductory organic chemistry",
    covered: [
      "20.2 Hydrocarbons",
      "20.3 Alcohols and Ethers",
      "20.4 Aldehydes, Ketones, Carboxylic Acids, and Esters",
      "20.5 Amines and Amides",
    ],
    coming: [
      "Reaction mechanisms",
      "Material and energy balances",
      "More openly licensed textbooks",
    ],
  },
];

export function findTopic(slug: string | undefined): Topic | undefined {
  return TOPICS.find((topic) => topic.slug === slug);
}

export function askHref(question: string): string {
  return `/chat?q=${encodeURIComponent(question)}`;
}
