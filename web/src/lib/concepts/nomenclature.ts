import nomenclatureIcon from "../../assets/concept/nomenclature.webp";
import type { Concept } from "../types";

const nomenclature: Concept = {
  slug: "nomenclature",
  title: "Nomenclature and formula writing",
  icon: nomenclatureIcon,
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
};

export default nomenclature;
