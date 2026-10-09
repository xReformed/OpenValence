import type { BookKey } from "./types";

/* What the book's undescribed diagrams show. On the original pages their alt
   text is only a file name, so the transcription prints "[Image not described
   in source]"; these are OpenValence's own descriptions, shown in that box's
   place (and read as the image's alt text). The book's text stays as printed.

   Keyed like the image files in src/assets/figures/: "9.4-image-17" is section
   9.4's 17th image box. Written in ChemText notation (BF4^−, CH2O). */
const LABELS: Partial<Record<BookKey, Record<string, string>>> = {
  "beginning-chemistry": {
    "9.4-image-3": "Two F atoms share their unpaired electrons as one pair between them; each F keeps three lone pairs",
    "9.4-image-6": "An H atom with one electron beside an F atom with seven valence electrons",
    "9.4-image-7": "HF drawn two ways: H and F sharing a pair of electrons, or joined by a dash (H–F); F has three lone pairs",
    "9.4-image-8": "An H atom with one electron beside a Br atom with seven valence electrons",
    "9.4-image-9": "HBr drawn two ways: H and Br sharing a pair of electrons, or joined by a dash (H–Br); Br has three lone pairs",
    "9.4-image-10": "Cl2: Cl–Cl joined by a single bond, with three lone pairs on each Cl",
    "9.4-image-11": "An H atom with one electron beside an O atom with six valence electrons",
    "9.4-image-12": "H and O sharing a pair of electrons; O has only seven electrons around it",
    "9.4-image-13":
      "A second H atom's electron pairs with O's unpaired one (curved arrow), giving H2O: O shares a pair with each H and keeps two lone pairs",
    "9.4-image-14": "An N atom with five valence electrons: one pair and three unpaired electrons",
    "9.4-image-15": "NH3: N shares a pair of electrons with each of three H atoms and keeps one lone pair",
    "9.4-image-16": "PCl3: P shares a pair with each of three Cl atoms and keeps one lone pair; each Cl has three lone pairs",
    "9.4-image-17": "BF4^−, step 2: B in the center, with an F atom above, below, left and right",
    "9.4-image-18": "BF4^−, step 3: a pair of electrons between B and each of the four F atoms",
    "9.4-image-19":
      "BF4^−, step 4: three lone pairs complete each F atom's octet; the ion is shown in brackets with its 1− charge",
    "9.4-image-20": "CH2O with single bonds only: O above C with three lone pairs and an H on each side of C; C has just six electrons",
    "9.4-image-21": "CH2O with C and O sharing two pairs of electrons; O keeps two lone pairs",
    "9.4-image-22": "CH2O with a circle around each atom: O and C each have an octet, and each H has two electrons",
    "9.4-image-23": "CH2O with lines for bonds: a C=O double bond, two C–H single bonds, and two lone pairs on O",
    "9.4-image-24": "CO2 with single bonds only: each O has three lone pairs, but C has only four electrons",
    "9.4-image-25": "CO2 with two double bonds, O=C=O: each O keeps two lone pairs, and C has an octet",
    "9.4-image-26": "COS with two double bonds, S=C=O: S and O each keep two lone pairs",
    "9.4-image-27": "Triple bonds in N2 (:N≡N:) and acetylene, C2H2 (H–C≡C–H), each drawn with dots and with lines",

    "9.5-image-2": "HF with a dash for the bond, H–F, and three lone pairs on F",
    "9.5-image-4": "HF with partial charges: δ+ on the H atom and δ− on the F atom",
    "9.5-image-5": "The bonds in 2H2 + O2 → 2H2O: two H–H bonds and one O=O bond break, and four O–H bonds form",

    "9.6-image-2": "BF3: B joined to three F atoms by single bonds, with three lone pairs on each F; B has only six electrons",
    "9.6-image-3": "PF5: P joined to five F atoms by single bonds, with three lone pairs on each F; P has ten electrons",
    "9.6-image-4": "ClO: Cl and O share a pair of electrons; O has three lone pairs, and Cl has two lone pairs and one unpaired electron",
    "9.6-image-5": "SF6: S joined to six F atoms by single bonds, with three lone pairs on each F; S has twelve electrons",
    "9.6-image-6": "XeF2: Xe shares a pair with each F atom and keeps three lone pairs, ten electrons in all",

    "9.7-image-2": "BF3 is trigonal planar: three B–F bonds 120° apart, in one plane",
    "9.7-image-3": "GeF2 is bent: two Ge–F bonds and one lone pair on Ge",
    "9.7-image-4":
      "CH4 in three dimensions: four C–H bonds point to the corners of a tetrahedron, one drawn as a solid wedge (toward you) and one as a dashed wedge (away from you)",
    "9.7-image-5": "NH3 is trigonal pyramidal: three N–H bonds, drawn with wedges, and one lone pair on N",
    "9.7-image-6": "H2O is bent: two O–H bonds and two lone pairs on O",
    "9.7-image-7": "CH2O: C shares two pairs of electrons with O and one pair with each H",
    "9.7-image-8": "CH2O is trigonal planar: a C=O double bond and two C–H bonds spread out in one plane",
    "9.7-image-9": "PCl3 is trigonal pyramidal: three P–Cl bonds, drawn with wedges, and one lone pair on P",
    "9.7-image-10": "NOF is bent: N has a double bond to O, a single bond to F, and one lone pair",

    "12.3-image-2":
      "NH3 + H2O → NH4^+ + OH^−, drawn with bonds: N uses its lone pair to take an H^+ from H2O, becoming NH4^+",
    "12.3-image-3": "The same reaction with a double arrow, NH3 + H2O ⇌ NH4^+ + OH^−: it runs in both directions",
    "12.3-image-5":
      "NH3 + H2O ⇌ NH4^+ + OH^−, with brackets joining the conjugate pairs NH3/NH4^+ and H2O/OH^−; NH3 and OH^− are labeled BL bases, H2O and NH4^+ BL acids",

    "16.3-image-8": "A four-carbon chain with a one-carbon branch on the second carbon and another on the third (H atoms omitted)",
    "16.3-image-11":
      "A seven-carbon chain with a C=C double bond between the third and fourth carbons, and one-carbon branches on the second and fourth carbons (H atoms omitted)",
    "16.4-image-7":
      "The general elimination reaction: an H on one carbon and Z (a halogen or an OH group) on the next are removed with a catalyst, leaving a C=C double bond and HZ",
    "16.5-image-8": "A carboxylic acid, R–COOH, reacts with OH^− to give a carboxylate ion, R–COO^−, and H2O",
    "16.6-image-8": "Trimethylamine, (CH3)3N, uses its lone pair to take an H^+ from H2O, giving (CH3)3NH^+ and OH^−",
    "16.6-image-16":
      "The thiol behind grapefruit's odor: a six-carbon ring with one double bond and a methyl group, attached to a carbon that carries two methyl groups and an SH group",
    "16.7-image-7":
      "Amide formation: the N–H of an amine (R–NH2) and the OH of a carboxylic acid (R′–COOH) react, joining them in an amide, R–NH–CO–R′, and releasing H2O",
    "16.7-image-8":
      "The repeating unit of styrene butadiene rubber: a four-carbon butadiene unit with a C=C double bond joined to a styrene unit that carries a benzene ring, repeated n times",
    "16.7-image-9": "A silicone chain: alternating Si and O atoms, each Si carrying an H atom and a benzene ring, repeated n times",
    "16.7-image-10":
      "Two glycine molecules join: the COOH of one reacts with the NH2 of the other, forming an amide bond (–CO–NH–) in a dipeptide",
    "16.7-image-11": "A glucose molecule, C6H12O6, drawn as a ring of five C atoms and one O atom, with OH groups around it",
    "16.7-image-12": "Starch: glucose rings joined one after another through O atoms (three units shown)",
    "16.7-image-13": "Cellulose: glucose rings joined through O atoms, with every other ring flipped over, repeated n times",
  },
};

export function findImageLabel(book: BookKey, section: string, position: number): string | undefined {
  return LABELS[book]?.[`${section}-image-${position}`];
}

/* Every described box, for the test that checks each one still lands on an
   undescribed image in the book. */
export function imageLabelKeys(): { book: BookKey; key: string }[] {
  return Object.entries(LABELS).flatMap(([book, labels]) =>
    Object.keys(labels ?? {}).map((key) => ({ book: book as BookKey, key })),
  );
}
