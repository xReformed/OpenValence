/* Concept paths, shown beside Learn and Practice at /roadmap. Keep them in
   step with the README's roadmap tables. */

import { AtomIcon, CalculatorIcon, ScaleIcon, TagIcon } from "../components/LandingIcons";
import type { Concept } from "./types";

export const CONCEPTS: Concept[] = [
  {
    slug: "balancing",
    title: "Chemical balancing",
    icon: ScaleIcon,
    status: "planned",
    summary:
      "A levelled path through balancing chemical equations, from counting atoms to redox and disproportionation.",
    span: "atom counting to disproportionation",
    stages: [
      {
        levels: [
          { skill: "Atom counting (subscripts, coefficients, parentheses, hydrates)", tag: "atom-counting" },
          { skill: "Synthesis and decomposition, with state symbols", tag: "basic-balancing" },
          { skill: "Odd/even trick", tag: "odd-even" },
          { skill: "Single and double replacement", tag: "replacement-reactions" },
          { skill: "Polyatomic ions as units", tag: "polyatomic-ions" },
          { skill: "Word equations to balanced equations", tag: "word-equations" },
          { skill: "Hydrocarbon combustion (including fractional method)", tag: "combustion" },
          { skill: "Combustion of fuels containing oxygen", tag: "combustion-o-fuel" },
          { skill: "Predicting products", tag: "predicting-products" },
          { skill: "Net ionic equations", tag: "net-ionic" },
          { skill: "Many-element equations (algebraic method)", tag: "algebraic-method" },
          { skill: "Redox in acidic solution", tag: "redox-acidic" },
          { skill: "Redox in basic solution", tag: "redox-basic" },
          { skill: "Disproportionation", tag: "disproportionation" },
        ],
      },
    ],
  },
  {
    slug: "stoichiometry",
    title: "Stoichiometry",
    icon: CalculatorIcon,
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
          { skill: "Gas collected over water", tag: "daltons-law" },
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
  },
  {
    slug: "nomenclature",
    title: "Nomenclature and formula writing",
    icon: TagIcon,
    status: "planned",
    summary:
      "A levelled path through naming compounds and writing their formulas, from element symbols to coordination compounds. Every level works in both directions: name → formula and formula → name.",
    span: "element symbols to coordination compounds",
    stages: [
      {
        title: "Foundations",
        levels: [
          {
            skill: "Element names and symbols (including Latin-based ones)",
            tag: "element-symbols",
            example: "Fe = iron, Pb = lead, Ag = silver",
          },
          {
            skill: "Predicting ion charges from the periodic table",
            tag: "ion-charges",
            example: "Na+, Mg2+, Al3+, N3−, O2−, F−",
          },
          {
            skill: "Naming monatomic ions (-ide for anions)",
            tag: "monatomic-ions",
            example: "Cl− = chloride, N3− = nitride",
          },
          {
            skill: "Diatomic and polyatomic elements",
            tag: "diatomic-elements",
            example: "H2, N2, O2, F2, Cl2, Br2, I2, P4, S8",
          },
          {
            skill: "Identifying ionic vs molecular compounds",
            tag: "ionic-vs-molecular",
            example: "NaCl ionic (metal + nonmetal), CO2 molecular",
          },
        ],
      },
      {
        title: "Ionic compounds",
        levels: [
          {
            skill: "Writing binary ionic formulas (balancing charges, simplest ratio)",
            tag: "binary-ionic-formula",
            example: "aluminum oxide = Al2O3; magnesium oxide = MgO, not Mg2O2",
          },
          {
            skill: "Naming binary ionic compounds",
            tag: "binary-ionic-name",
            example: "CaBr2 = calcium bromide",
          },
          {
            skill: "Metals with variable charges (Stock system)",
            tag: "stock-system",
            example: "FeCl3 = iron(III) chloride, Cu2O = copper(I) oxide",
          },
          {
            skill: "Transition metals with fixed charges (no Roman numeral)",
            tag: "fixed-charge-metals",
            example: "Ag+, Zn2+, Cd2+: ZnO = zinc oxide",
          },
          {
            skill: "Classical names (-ous/-ic)",
            tag: "classical-names",
            example: "FeCl2 = ferrous chloride, FeCl3 = ferric chloride",
            advanced: true,
          },
        ],
      },
      {
        title: "Polyatomic ions",
        levels: [
          {
            skill: "Common polyatomic ions",
            tag: "polyatomic-ions",
            example: "NH4+, OH−, NO3−, SO4^2−, PO4^3−, CO3^2−, C2H3O2−",
          },
          {
            skill: "Oxyanion series (per-, -ate, -ite, hypo-)",
            tag: "oxyanion-series",
            example: "ClO4− perchlorate, ClO3− chlorate, ClO2− chlorite, ClO− hypochlorite",
          },
          {
            skill: "Oxyanions by analogy",
            tag: "oxyanion-analogy",
            example: "BrO3− = bromate, IO4− = periodate",
            advanced: true,
          },
          {
            skill: "Hydrogen-containing anions",
            tag: "hydrogen-anions",
            example: "HCO3− = hydrogen carbonate (bicarbonate), H2PO4− = dihydrogen phosphate",
          },
          {
            skill: "Ionic compounds with polyatomic ions (parentheses)",
            tag: "polyatomic-compounds",
            example: "Ca(NO3)2 = calcium nitrate, (NH4)2SO4 = ammonium sulfate",
          },
          {
            skill: "Polyatomic ions with variable-charge metals",
            tag: "polyatomic-stock",
            example: "Fe2(SO4)3 = iron(III) sulfate",
          },
          {
            skill: "Special ions that don't reduce",
            tag: "special-ions",
            example: "Hg2Cl2 = mercury(I) chloride, Na2O2 = sodium peroxide",
            advanced: true,
          },
          {
            skill: "Less common polyatomic ions",
            tag: "uncommon-polyatomic",
            example: "S2O3^2− thiosulfate, SCN− thiocyanate, Cr2O7^2− dichromate, MnO4− permanganate",
            advanced: true,
          },
        ],
      },
      {
        title: "Molecular compounds",
        levels: [
          {
            skill: "Binary molecular compounds (Greek prefixes)",
            tag: "covalent-prefixes",
            example: "N2O4 = dinitrogen tetroxide, PCl5 = phosphorus pentachloride",
          },
          {
            skill: "Prefix rules (no mono- on first element, dropping vowels)",
            tag: "prefix-rules",
            example: "CO = carbon monoxide, not monocarbon monooxide",
          },
          {
            skill: "Common names",
            tag: "common-names",
            example: "H2O = water, NH3 = ammonia, CH4 = methane, H2O2 = hydrogen peroxide",
          },
        ],
      },
      {
        title: "Acids",
        levels: [
          {
            skill: "Binary acids (hydro-…-ic)",
            tag: "binary-acids",
            example: "HCl(aq) = hydrochloric acid, H2S(aq) = hydrosulfuric acid",
          },
          {
            skill: "Gas vs aqueous naming",
            tag: "acid-state",
            example: "HCl(g) = hydrogen chloride, HCl(aq) = hydrochloric acid",
          },
          {
            skill: "Oxyacids (-ate → -ic, -ite → -ous)",
            tag: "oxyacids",
            example: "H2SO4 sulfuric, H2SO3 sulfurous, HClO hypochlorous",
          },
        ],
      },
      {
        title: "Hydrates",
        levels: [
          {
            skill: "Naming and writing hydrates",
            tag: "hydrates",
            example: "CuSO4·5H2O = copper(II) sulfate pentahydrate",
          },
        ],
      },
      {
        title: "Review",
        levels: [
          {
            skill: "Mixed review: classify the compound, then name it or write its formula",
            tag: "nomenclature-mixed",
            example: "Mixed ionic, molecular, acid, and hydrate questions",
          },
        ],
      },
      {
        title: "Beyond intro",
        levels: [
          {
            skill: "Coordination compounds",
            tag: "coordination-naming",
            example: "[Cu(NH3)4]SO4 = tetraamminecopper(II) sulfate",
            advanced: true,
          },
        ],
      },
    ],
  },
  {
    slug: "atomic-structure",
    title: "Atomic structure and periodic trends",
    icon: AtomIcon,
    status: "planned",
    summary:
      "A levelled path through the atom, from early atomic models through electron configurations to periodic trends.",
    span: "atomic models to periodic trends",
    stages: [
      {
        title: "Atoms and particles",
        levels: [
          {
            skill: "Development of atomic models (Dalton, Thomson, Rutherford, Bohr, quantum)",
            tag: "atomic-models",
            example: "Rutherford's gold foil experiment showed a small, dense nucleus",
          },
          {
            skill: "Subatomic particles: charge, mass, location",
            tag: "subatomic-particles",
            example: "Proton: +1, ~1 u, in the nucleus",
          },
          {
            skill: "Atomic number, mass number, and nuclear symbols",
            tag: "nuclear-symbol",
            example: "³⁵₁₇Cl: 17 protons, 18 neutrons, 17 electrons",
          },
          {
            skill: "Counting particles in ions",
            tag: "ion-particles",
            example: "Fe3+: 26 protons, 23 electrons",
          },
          {
            skill: "Isotopes",
            tag: "isotopes",
            example: "C-12, C-13, and C-14 differ only in neutrons",
          },
          {
            skill: "Average atomic mass",
            tag: "average-atomic-mass",
            example: "75.78% Cl-35 (34.969 u) and 24.22% Cl-37 (36.966 u) → 35.45 u",
          },
          {
            skill: "Reading mass spectra",
            tag: "mass-spectrometry",
            example: "Finding isotope abundances from peak heights",
            advanced: true,
          },
        ],
      },
      {
        title: "Periodic table",
        levels: [
          {
            skill: "Groups, periods, blocks; metals, nonmetals, metalloids; group names",
            tag: "periodic-table-layout",
            example: "Alkali metals, halogens, noble gases",
          },
          {
            skill: "Valence electrons of main-group elements",
            tag: "valence-electrons",
            example: "Oxygen has 6 valence electrons",
          },
        ],
      },
      {
        title: "Light and quantum theory",
        levels: [
          {
            skill: "Wavelength and frequency (c = λν)",
            tag: "wave-properties",
            example: "500 nm light → 6.00 × 10^14 Hz",
          },
          {
            skill: "Photon energy (E = hν) and the photoelectric effect",
            tag: "photon-energy",
            example: "A 500 nm photon carries 3.98 × 10^−19 J",
          },
          {
            skill: "Bohr model and hydrogen line spectra",
            tag: "bohr-model",
            example: "n = 3 → 2 emits red light at 656 nm",
          },
          {
            skill: "Wave-particle duality (de Broglie wavelength)",
            tag: "de-broglie",
            example: "Wavelength of a moving electron",
            advanced: true,
          },
          {
            skill: "Heisenberg uncertainty principle",
            tag: "uncertainty-principle",
            example: "Why exact electron paths can't be known",
            advanced: true,
          },
        ],
      },
      {
        title: "Quantum numbers and orbitals",
        levels: [
          {
            skill: "Quantum numbers (n, l, m_l, m_s) and valid sets",
            tag: "quantum-numbers",
            example: "n = 2, l = 2 is not allowed",
          },
          {
            skill: "Sublevels and orbital shapes (s, p, d, f)",
            tag: "orbital-shapes",
            example: "A p sublevel has 3 orbitals holding up to 6 electrons",
          },
          {
            skill: "Orbital nodes",
            tag: "orbital-nodes",
            example: "A 3p orbital has 1 radial node (n − l − 1)",
            advanced: true,
          },
        ],
      },
      {
        title: "Electron configurations",
        levels: [
          {
            skill: "Aufbau principle, Pauli exclusion, Hund's rule",
            tag: "configuration-rules",
            example: "Fill lowest energy first; pair electrons only when needed",
          },
          {
            skill: "Full electron configurations",
            tag: "electron-configuration",
            example: "Fe: 1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6",
          },
          {
            skill: "Orbital diagrams",
            tag: "orbital-diagrams",
            example: "Nitrogen's 2p has three unpaired electrons",
          },
          {
            skill: "Noble-gas shorthand",
            tag: "noble-gas-shorthand",
            example: "Fe: [Ar] 4s^2 3d^6",
          },
          {
            skill: "Configuration exceptions",
            tag: "config-exceptions",
            example: "Cr: [Ar] 4s^1 3d^5; Cu: [Ar] 4s^1 3d^10",
          },
          {
            skill: "Configurations of ions",
            tag: "ion-configurations",
            example: "Fe2+: [Ar] 3d^6 (4s electrons are removed first)",
          },
          {
            skill: "Paramagnetism and diamagnetism",
            tag: "magnetism",
            example: "Zn is diamagnetic; all electrons are paired",
          },
          {
            skill: "f-block configurations (lanthanides and actinides)",
            tag: "f-block",
            example: "Configurations for Ce or U",
            advanced: true,
          },
        ],
      },
      {
        title: "Periodic trends",
        levels: [
          {
            skill: "Effective nuclear charge and shielding",
            tag: "effective-nuclear-charge",
            example: "Why outer electrons feel less than the full nuclear charge",
          },
          {
            skill: "Slater's rules for calculating Z_eff",
            tag: "slaters-rules",
            example: "Calculating Z_eff for a 3p electron in Cl",
            advanced: true,
          },
          {
            skill: "Atomic radius",
            tag: "atomic-radius",
            example: "K > Na > Mg > Cl",
          },
          {
            skill: "Ionization energy and successive ionization energies",
            tag: "ionization-energy",
            example: "Mg shows a big jump after the 2nd ionization",
          },
          {
            skill: "Ionization energy exceptions",
            tag: "ionization-exceptions",
            example: "B is lower than Be; O is lower than N",
          },
          {
            skill: "Electron affinity",
            tag: "electron-affinity",
            example: "Cl releases more energy gaining an electron than F does",
          },
          {
            skill: "Electronegativity",
            tag: "electronegativity",
            example: "F is the most electronegative element",
          },
          {
            skill: "Ionic radii and isoelectronic series",
            tag: "ionic-radii",
            example: "O2− > F− > Na+ > Mg2+",
          },
          {
            skill: "Metallic character and reactivity trends",
            tag: "metallic-character",
            example: "Reactivity increases down the alkali metals",
          },
        ],
      },
      {
        title: "Review",
        levels: [
          {
            skill: "Mixed review: configurations, ranking trends, explaining exceptions",
            tag: "atomic-mixed",
            example: "Rank and explain: Na, Mg, Al ionization energies",
          },
        ],
      },
    ],
  },
];

export function levelCount({ stages }: Pick<Concept, "stages">) {
  return stages.reduce((sum, stage) => sum + stage.levels.length, 0);
}
