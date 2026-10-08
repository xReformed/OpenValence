import electrochemistryIcon from "../../assets/concept/electrochemistry.webp";
import type { Concept } from "../types";

const electrochemistry: Concept = {
  slug: "electrochemistry",
  title: "Electrochemistry",
  icon: electrochemistryIcon,
  status: "planned",
  summary:
    "A levelled path through electrochemistry, from oxidation numbers and balancing redox through galvanic cells to electrolysis.",
  span: "oxidation numbers to electrolysis",
  stages: [
    {
      title: "Redox basics",
      levels: [
        {
          skill: "Oxidation and reduction (OIL RIG)",
          tag: "redox-basics",
          example: "Oxidation is loss of electrons; reduction is gain",
        },
        {
          skill: "Assigning oxidation numbers",
          tag: "oxidation-numbers",
          example: "S in H2SO4 = +6; Cr in Cr2O7^2− = +6",
        },
        {
          skill: "Oxidizing and reducing agents",
          tag: "redox-agents",
          example: "Zn + Cu^2+ → Zn^2+ + Cu: Zn is oxidized and is the reducing agent",
        },
        {
          skill: "Writing half-reactions",
          tag: "half-reactions",
          example: "Zn → Zn^2+ + 2e^−; Cu^2+ + 2e^− → Cu",
        },
        {
          skill: "Balancing redox in acidic solution",
          tag: "redox-acidic",
          example: "MnO4− + 5Fe^2+ + 8H+ → Mn^2+ + 5Fe^3+ + 4H2O",
        },
        {
          skill: "Balancing redox in basic solution",
          tag: "redox-basic",
          example: "2MnO4− + I− + H2O → 2MnO2 + IO3− + 2OH−",
        },
        {
          skill: "Activity series",
          tag: "activity-series",
          example: "Zn displaces Cu^2+ from solution; Cu doesn't displace Zn^2+",
        },
      ],
    },
    {
      title: "Galvanic cells",
      levels: [
        {
          skill: "Parts of a galvanic cell",
          tag: "galvanic-cell-parts",
          example: "Anode (oxidation), cathode (reduction), salt bridge, electron flow",
        },
        {
          skill: "Cell notation",
          tag: "cell-notation",
          example: "Zn(s) | Zn^2+(aq) ‖ Cu^2+(aq) | Cu(s)",
        },
        {
          skill: "Standard reduction potentials and the standard hydrogen electrode",
          tag: "reduction-potentials",
          example: "E°(Cu^2+/Cu) = +0.34 V",
        },
        {
          skill: "Calculating E°_cell",
          tag: "e-cell",
          example: "Zn-Cu cell: 0.34 − (−0.76) = 1.10 V",
        },
        {
          skill: "Predicting spontaneity from E°_cell",
          tag: "redox-spontaneity",
          example: "Positive E°_cell → spontaneous",
        },
        {
          skill: "Comparing oxidizing and reducing agent strength",
          tag: "agent-strength",
          example: "F2 is the strongest oxidizing agent; Li is the strongest reducing agent",
        },
      ],
    },
    {
      title: "Energy and equilibrium",
      levels: [
        {
          skill: "ΔG° from E°_cell (ΔG° = −nFE°)",
          tag: "delta-g-e-cell",
          example: "Zn-Cu cell: ΔG° = −212 kJ",
          advanced: true,
        },
        {
          skill: "E°_cell and K",
          tag: "e-cell-k",
          example: "Zn-Cu cell: K ≈ 10^37",
          advanced: true,
        },
        {
          skill: "Nernst equation (non-standard conditions)",
          tag: "nernst-equation",
          example: "[Zn^2+] = 1.0 M, [Cu^2+] = 0.010 M → E = 1.04 V",
          advanced: true,
        },
        {
          skill: "Concentration cells",
          tag: "concentration-cells",
          example: "Same metal, different concentrations, still produces voltage",
          advanced: true,
        },
      ],
    },
    {
      title: "Applied electrochemistry",
      levels: [
        {
          skill: "Batteries",
          tag: "batteries",
          example: "Alkaline, lead-acid, and lithium-ion batteries",
        },
        {
          skill: "Fuel cells",
          tag: "fuel-cells",
          example: "2H2 + O2 → 2H2O producing electricity directly",
        },
        {
          skill: "Corrosion and prevention",
          tag: "corrosion",
          example: "Rusting of iron; galvanizing; sacrificial anodes",
        },
      ],
    },
    {
      title: "Electrolysis",
      levels: [
        {
          skill: "Electrolytic vs galvanic cells",
          tag: "electrolytic-vs-galvanic",
          example: "Electrolysis uses electricity to drive a non-spontaneous reaction",
        },
        {
          skill: "Electrolysis of molten salts",
          tag: "electrolysis-molten",
          example: "Molten NaCl → Na at the cathode, Cl2 at the anode",
        },
        {
          skill: "Electrolysis of aqueous solutions",
          tag: "electrolysis-aqueous",
          example: "Aqueous NaCl gives H2 at the cathode, not Na",
          advanced: true,
        },
        {
          skill: "Faraday's law calculations",
          tag: "electro-stoichiometry",
          example: "2.00 A for 965 s deposits 0.635 g Cu",
        },
        {
          skill: "Electroplating and industrial electrolysis",
          tag: "industrial-electrolysis",
          example: "Aluminum production; chrome plating",
        },
      ],
    },
    {
      title: "Review",
      levels: [
        {
          skill: "Mixed review: cell analysis from start to finish",
          tag: "electrochem-mixed",
          example: "Identify anode and cathode, write cell notation, calculate E°_cell",
        },
      ],
    },
  ],
};

export default electrochemistry;
