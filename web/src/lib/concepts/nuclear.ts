import nuclearIcon from "../../assets/concept/nuclear.webp";
import type { Concept } from "../types";

const nuclear: Concept = {
  slug: "nuclear",
  title: "Nuclear chemistry",
  icon: nuclearIcon,
  status: "planned",
  summary:
    "A levelled path through nuclear chemistry, from radioactive decay and half-lives through nuclear stability and energy to transmutation and applications.",
  span: "nuclear notation to applications",
  stages: [
    {
      title: "Basics",
      levels: [
        {
          skill: "Nuclear vs chemical reactions",
          tag: "nuclear-vs-chemical",
          example: "Nuclear reactions change the nucleus and can turn one element into another",
        },
        {
          skill: "Nuclear notation and isotopes",
          tag: "nuclear-symbol",
          example: "¹⁴₆C: mass number 14, atomic number 6",
        },
        {
          skill: "The strong nuclear force",
          tag: "nuclear-forces",
          example: "Holds protons together despite their repulsion",
        },
      ],
    },
    {
      title: "Radioactive decay",
      levels: [
        {
          skill: "Types of radiation and penetrating power",
          tag: "radiation-types",
          example: "Alpha is stopped by paper; gamma needs thick lead or concrete",
        },
        {
          skill: "Alpha decay",
          tag: "alpha-decay",
          example: "²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He",
        },
        {
          skill: "Beta decay",
          tag: "beta-decay",
          example: "¹⁴₆C → ¹⁴₇N + ⁰₋₁e",
        },
        {
          skill: "Positron emission and electron capture",
          tag: "positron-ec",
          example: "¹¹₆C → ¹¹₅B + ⁰₊₁e; ⁷₄Be + ⁰₋₁e → ⁷₃Li",
        },
        {
          skill: "Gamma emission",
          tag: "gamma-emission",
          example: "Tc-99m → Tc-99 + γ",
        },
        {
          skill: "Balancing nuclear equations and finding the missing particle",
          tag: "nuclear-equations",
          example: "Sum of mass numbers and atomic numbers must match on both sides",
        },
      ],
    },
    {
      title: "Nuclear stability",
      levels: [
        {
          skill: "Band of stability and neutron-to-proton ratio",
          tag: "nuclear-stability",
          example:
            "Too many neutrons → beta decay; too many protons → positron emission or electron capture",
        },
        {
          skill: "Magic numbers and even-even nuclei",
          tag: "magic-numbers",
          example: "Nuclei with 2, 8, 20, 28, 50, 82 protons or neutrons are extra stable",
          advanced: true,
        },
        {
          skill: "Decay series",
          tag: "decay-series",
          example: "U-238 → Pb-206 takes 8 alpha and 6 beta decays",
        },
      ],
    },
    {
      title: "Rates of decay",
      levels: [
        {
          skill: "Half-life (conceptual)",
          tag: "half-life-basics",
          example: "After 3 half-lives, 12.5% remains",
        },
        {
          skill: "Half-life calculations and the decay constant",
          tag: "first-order-half-life",
          example: "k = 0.693/t_(1/2); N = N_{0}e^(−kt)",
        },
        {
          skill: "Radiometric dating",
          tag: "radiometric-dating",
          example: "25% of C-14 remaining → about 11,460 years old",
        },
        {
          skill: "Activity and its units",
          tag: "activity",
          example: "1 Ci = 3.7 × 10^10 Bq",
          advanced: true,
        },
      ],
    },
    {
      title: "Nuclear energy",
      levels: [
        {
          skill: "Mass defect and binding energy (E = mc^2)",
          tag: "binding-energy",
          example: "He-4 binding energy ≈ 28.3 MeV",
          advanced: true,
        },
        {
          skill: "Binding energy per nucleon curve",
          tag: "binding-energy-curve",
          example: "Nuclei near Fe-56 are the most stable",
        },
        {
          skill: "Fission and chain reactions",
          tag: "fission",
          example: "U-235 splitting; critical mass",
        },
        {
          skill: "Fusion",
          tag: "fusion",
          example: "²H + ³H → ⁴He + ¹n; the sun fuses hydrogen into helium",
        },
        {
          skill: "Nuclear reactors",
          tag: "nuclear-reactors",
          example: "Fuel rods, moderator, control rods, coolant",
        },
      ],
    },
    {
      title: "Transmutation",
      levels: [
        {
          skill: "Artificial transmutation",
          tag: "transmutation",
          example: "¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H",
        },
        {
          skill: "Making transuranium elements",
          tag: "transuranium",
          example: "Bombarding heavy nuclei in particle accelerators",
          advanced: true,
        },
      ],
    },
    {
      title: "Radiation and applications",
      levels: [
        {
          skill: "Biological effects and radiation units",
          tag: "radiation-effects",
          example: "Ionizing radiation; grays and sieverts",
        },
        {
          skill: "Medical and everyday uses",
          tag: "nuclear-applications",
          example:
            "PET scans (F-18), Tc-99m imaging, I-131 thyroid treatment, Am-241 smoke detectors",
        },
      ],
    },
    {
      title: "Review",
      levels: [
        {
          skill: "Mixed review: identify the decay, write the equation, calculate remaining amount",
          tag: "nuclear-mixed",
          example: "Multi-part problem on one isotope",
        },
      ],
    },
  ],
};

export default nuclear;
