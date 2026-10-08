import organicFundamentalsIcon from "../../assets/concept/organic-fundamentals.webp";
import type { Concept } from "../types";

const organicFundamentals: Concept = {
  slug: "organic-fundamentals",
  title: "Organic fundamentals",
  icon: organicFundamentalsIcon,
  status: "planned",
  summary:
    "A levelled path through the basics of organic chemistry, from carbon bonding and naming through functional groups and isomers to reactions and polymers.",
  span: "carbon bonding to polymers",
  stages: [
    {
      title: "Foundations",
      levels: [
        {
          skill: "Carbon bonding (4 bonds, chains, rings)",
          tag: "carbon-bonding",
          example: "Carbon forms long chains and rings with itself",
        },
        {
          skill: "Structural representations",
          tag: "structural-representations",
          example: "Molecular (C2H6O), condensed (CH3CH2OH), skeletal",
        },
        {
          skill: "Reading skeletal structures",
          tag: "skeletal-structures",
          example: "Counting hidden hydrogens at each corner",
        },
      ],
    },
    {
      title: "Hydrocarbons",
      levels: [
        {
          skill: "Alkanes, alkenes, alkynes, and aromatics",
          tag: "hydrocarbon-types",
          example: "Alkanes C_{n}H_{2n+2}, alkenes C_{n}H_{2n}, alkynes C_{n}H_{2n−2}",
        },
        {
          skill: "Naming straight-chain alkanes (C1–C10)",
          tag: "alkane-naming-basic",
          example: "C5H12 = pentane",
        },
        {
          skill: "Naming branched alkanes",
          tag: "alkane-naming-branched",
          example: "(CH3)2CHCH2CH3 = 2-methylbutane",
        },
        {
          skill: "Cycloalkanes",
          tag: "cycloalkanes",
          example: "Cyclohexane, methylcyclopentane",
        },
        {
          skill: "Naming alkenes and alkynes",
          tag: "alkene-alkyne-naming",
          example: "CH3CH=CHCH3 = but-2-ene",
        },
        {
          skill: "Aromatic compound basics",
          tag: "aromatic-basics",
          example: "Benzene, toluene",
        },
        {
          skill: "Naming substituted benzenes (ortho, meta, para)",
          tag: "aromatic-naming",
          example: "1,4-dimethylbenzene = p-xylene",
          advanced: true,
        },
      ],
    },
    {
      title: "Functional groups",
      levels: [
        {
          skill: "Identifying functional groups",
          tag: "functional-groups",
          example:
            "Alcohol, ether, aldehyde, ketone, carboxylic acid, ester, amine, amide, haloalkane",
        },
        {
          skill: "Naming alcohols",
          tag: "alcohol-naming",
          example: "CH3CH(OH)CH3 = propan-2-ol (isopropyl alcohol)",
        },
        {
          skill: "Naming aldehydes and ketones",
          tag: "carbonyl-naming",
          example: "Ethanal; propanone (acetone)",
        },
        {
          skill: "Naming carboxylic acids and esters",
          tag: "acid-ester-naming",
          example: "Ethanoic acid; methyl ethanoate",
        },
        {
          skill: "Naming amines and amides",
          tag: "amine-amide-naming",
          example: "Methylamine; ethanamide",
        },
        {
          skill: "Naming haloalkanes and ethers",
          tag: "halide-ether-naming",
          example: "Chloromethane; diethyl ether",
        },
        {
          skill: "Naming with multiple functional groups (priority rules)",
          tag: "naming-priority",
          example: "Which group gets the suffix",
          advanced: true,
        },
      ],
    },
    {
      title: "Isomers",
      levels: [
        {
          skill: "Constitutional isomers",
          tag: "constitutional-isomers",
          example: "C4H10 has 2 isomers; C5H12 has 3",
        },
        {
          skill: "Cis/trans isomers",
          tag: "cis-trans",
          example: "cis- and trans-but-2-ene",
        },
        {
          skill: "E/Z notation",
          tag: "e-z-notation",
          example: "Naming alkenes when cis/trans is ambiguous",
          advanced: true,
        },
        {
          skill: "Chirality and chiral centers",
          tag: "chirality",
          example: "Butan-2-ol has one chiral carbon",
        },
        {
          skill: "R/S configuration",
          tag: "r-s-configuration",
          example: "Assigning priorities around a chiral center",
          advanced: true,
        },
        {
          skill: "Enantiomers vs diastereomers",
          tag: "stereoisomer-types",
          example: "Mirror images vs non-mirror stereoisomers",
          advanced: true,
        },
      ],
    },
    {
      title: "Properties",
      levels: [
        {
          skill: "Physical properties of organic compounds",
          tag: "organic-properties",
          example: "Ethanol boils much higher than propane despite similar mass",
        },
        {
          skill: "Organic acids and bases",
          tag: "organic-acid-base",
          example: "Carboxylic acids are weak acids; amines are weak bases",
        },
      ],
    },
    {
      title: "Reactions",
      levels: [
        {
          skill: "Combustion of organic compounds",
          tag: "combustion",
          example: "CH4 + 2O2 → CO2 + 2H2O",
        },
        {
          skill: "Addition reactions",
          tag: "addition-reactions",
          example: "Ethene + Br2 → 1,2-dibromoethane",
        },
        {
          skill: "Substitution reactions",
          tag: "substitution-reactions",
          example: "CH4 + Cl2 → CH3Cl + HCl (with light)",
        },
        {
          skill: "Elimination reactions",
          tag: "elimination-reactions",
          example: "Dehydrating ethanol gives ethene",
        },
        {
          skill: "Oxidation of alcohols",
          tag: "alcohol-oxidation",
          example:
            "Primary → aldehyde → carboxylic acid; secondary → ketone; tertiary → no reaction",
        },
        {
          skill: "Esterification (condensation)",
          tag: "esterification",
          example: "Acetic acid + ethanol → ethyl acetate + H2O",
        },
        {
          skill: "Markovnikov's rule",
          tag: "markovnikov",
          example: "HBr adds to propene to give mainly 2-bromopropane",
          advanced: true,
        },
      ],
    },
    {
      title: "Polymers and biomolecules",
      levels: [
        {
          skill: "Addition polymers",
          tag: "addition-polymers",
          example: "Ethene → polyethylene",
        },
        {
          skill: "Condensation polymers",
          tag: "condensation-polymers",
          example: "Nylon and polyesters",
        },
        {
          skill: "Biomolecules preview",
          tag: "biomolecules-preview",
          example: "Carbohydrates, lipids, proteins, nucleic acids",
        },
      ],
    },
    {
      title: "Review",
      levels: [
        {
          skill: "Mixed review: name, draw, identify isomers, predict products",
          tag: "organic-mixed",
          example: "Multi-part problem on one compound",
        },
      ],
    },
  ],
};

export default organicFundamentals;
