/* Concept paths, shown beside Learn and Practice at /roadmap: one file per
   path, named by its slug, so balancing.ts is /roadmap/balancing. Keep them
   in step with the README's roadmap tables.

   The router reads only these file names, so a path's levels load with its
   own page, not with the app. List a new path here too: this is the order
   of the roadmap's cards.

   The icons are web-sized copies (384px WebP, trimmed and centred) of the
   *-icon.webp originals in src/assets/concept; regenerate them if an
   original changes. */
import acidsBases from "./acids-bases";
import atomicStructure from "./atomic-structure";
import balancing from "./balancing";
import bonding from "./bonding";
import electrochemistry from "./electrochemistry";
import equilibrium from "./equilibrium";
import gases from "./gases";
import kinetics from "./kinetics";
import nomenclature from "./nomenclature";
import nuclear from "./nuclear";
import organicFundamentals from "./organic-fundamentals";
import solutions from "./solutions";
import stoichiometry from "./stoichiometry";
import thermochemistry from "./thermochemistry";
import type { Concept } from "../types";

export const CONCEPTS: Concept[] = [
  balancing,
  stoichiometry,
  nomenclature,
  atomicStructure,
  bonding,
  gases,
  solutions,
  thermochemistry,
  equilibrium,
  acidsBases,
  electrochemistry,
  kinetics,
  nuclear,
  organicFundamentals,
];
