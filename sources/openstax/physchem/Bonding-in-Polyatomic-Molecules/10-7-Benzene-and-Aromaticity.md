---
title: "10.7: Benzene and Aromaticity"
book: "Physical Chemistry (LibreTexts)"
chapter: "10: Bonding in Polyatomic Molecules"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/10%3A_Bonding_in_Polyatomic_Molecules/10.07%3A_Benzene_and_Aromaticity"
author: "Wreusch"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Apply Hückel theory to describing the pi bonding in cyclical conjugated system
- Identify the origin of aromaticity within Hückel theory to describe extra stabilization in certain cyclical conjugated systems

The previous sections addressed the π orbitals of linear conjugated system. Here we address conjugated systems of cyclic conjugated hydrocarbons with the general formula of CnHn where n is the number of carbon atoms in the ring. The molecule from this important class of organic molecule that you are most familiar with is benzene (C6H6) with n = 6, although many other molecules exist like cyclobutadiene (C4H4) with n = 4 (Figure 10.7.1 ).

[Image: A 3D model of a molecular structure with black and white spheres representing atoms and bonds.]

[Image: 3D molecular model with overlapping spheres in shades of gray, representing atoms and chemical bonds.]

Figure 10.7.1: Space-filling model of benzene (left) and cyclobutadiene (right). Carbon atoms are indicated in black, while hydrogen atoms are indicated in white. (Public domain; Benjah-bmm27 and  Edgar181, respectively).

### Structure of Benzene

The structure of benzene is an interesting historical topic. In 1865, the German chemist Friedrich August Kekulé published a paper suggesting that the structure of benzene contained a ring of six carbon atoms with alternating single and double bonds. Within this argument, two resonance structures can be formulated.

Figure 10.7.2: Resonance structures of benzene.
Two Kekulé structures of benzene with a double-headed resonance arrow between them.

[Note: corrected; the source prints "Chemical structure of biphenyl with a double-headed arrow indicating resonance between two configurations." where this reads "Two Kekulé structures of benzene with a double-headed resonance arrow between them.". The image's alt text, machine-written, misreads the image; this describes it.]

However, X-ray diffraction shows that all six carbon-carbon bonds in benzene are of the same length, at 140 pm. The C–C bond lengths are greater than a double bond (135 pm), but shorter than a typical single bond (147 pm). This means that neither of the structures in Figure 10.7.2 are correct and the true 'structure' of benzene is a mixture of the two. As discussed previously, that such a valence bond perspective results in a delocalization energy within a molecular orbital approach.

Aromatic systems provide the most significant applications of Hückel theory. For benzene, we find the secular determinant

|x, 1, 0, 0, 0, 1; 1, x, 1, 0, 0, 0; 0, 1, x, 1, 0, 0; 0, 0, 1, x, 1, 0; 0, 0, 0, 1, x, 1; 1, 0, 0, 0, 1, x| = 0

with the six roots x = ±2, ±1, ±1. This corresponds to the following energies (ordered from most stable to least since β < 0):

- E1 = α + 2β
- E2 = α + β
- E3 = α + β
- E4 = α − β
- E5 = α − β
- E6 = α − 2β

The two pairs of E = α±β energy levels are two-fold degenerate (Figure 10.7.3 ).

Figure 10.7.3: The π molecular orbitals for benzene. The dashed lines represent the energy of an isolated p orbitals and all orbitals below this line are bonding. All orbitals above it are antibonding. (CC BY-NC-SA 4.0; Nick Greeves via ChemTube3D)
Illustration showing molecular orbital diagrams with labels for bonding and antibonding molecular orbitals.

The resulting wavefunctions are below (expanded in terms of carbon |2p⟩ atomic orbitals).

|ψ1⟩ = (1/(√6))[|2p_z1⟩ + |2p_z2⟩ + |2p_z3⟩ + |2p_z4⟩ + |2p_z5⟩ + |2p_z6⟩]

|ψ2⟩ = (1/(√4))[|2p_z2⟩ + |2p_z3⟩−|2p_z5⟩−|2p_z6⟩]

[Note: corrected; the source prints "[|2p_z2⟩ + |2p_z3⟩−|2p_z4⟩−|2p_z5⟩]" where this reads "[|2p_z2⟩ + |2p_z3⟩−|2p_z5⟩−|2p_z6⟩]". As printed this is not a solution of the secular equations (at atom 1, c6 + c2 = 1 ≠ c1 = 0).]

|ψ3⟩ = (1/(√3))[|2p_z1⟩ + 1/2|2p_z2⟩−1/2|2p_z3⟩−|2p_z4⟩−1/2|2p_z5⟩ + 1/2|2p_z6⟩]

|ψ4⟩ = (1/(√4))[|2p_z2⟩−|2p_z3⟩ + |2p_z5⟩−|2p_z6⟩]

[Note: corrected; the source prints "[|2p_z2⟩−|2p_z3⟩ + |2p_z4⟩−|2p_z5⟩]" where this reads "[|2p_z2⟩−|2p_z3⟩ + |2p_z5⟩−|2p_z6⟩]". As printed this is not a solution of the secular equations.]

|ψ5⟩ = (1/(√3))[|2p_z1⟩−1/2|2p_z2⟩−1/2|2p_z3⟩ + |2p_z4⟩−1/2|2p_z5⟩−1/2|2p_z6⟩]

|ψ6⟩ = (1/(√6))[|2p_z1⟩−|2p_z2⟩ + |2p_z3⟩−|2p_z4⟩ + |2p_z5⟩−|2p_z6⟩]

Each of the carbons in benzene contributes one electron to the π-bonding framework (Figure 10.7.3 ). This means that all bonding molecular orbitals are fully occupied and benzene then has an electron configuration of π1^2π2^2π3^2. With the three lowest molecular orbitals occupied, the total π-bonding energy is

E_tot(benzene) = 2(α + 2β) + 4(α + β)

= 6α + 8β

Since the energy of a localized double bond is 2(α + β), as determined from the analysis of ethylene, the delocalization energy of benzene is

ΔE = E_tot(benzene) − 3E_tot(ethylene)

= (6α + 8β) − 3 × 2(α + β)

= 2β

The experimental thermochemical value is -152 kJ mol^-1.

## Aromaticity

In general, cyclic polyenes are only closed shell (i.e., each electron paired up) and extra stable for with (4 n + 2)π electrons (n=0,1,2…). These special molecules have the highest delocalization energies and are said to be “aromatic”. For benzene this is 2β (Equation (32)), which is the energy by which the delocalized π electrons in benzene are more stable than those in three isolated double bonds.

### Hückel's Rule

A stable, closed-shell conjugated cyclic structure is obtained for molecules with (4 n + 2)π electrons with n = 0, 1, 2, … (i.e., 2, 6, 10, … π electrons).

[Note: corrected; the source prints "with n=2, 6, 10, .... electrons." where this reads "with n = 0, 1, 2, … (i.e., 2, 6, 10, … π electrons).". 2, 6 and 10 are the electron counts; n is 0, 1, 2, ….]

Evidence for the enhanced thermodynamic stability of benzene was obtained from measurements of the heat released when double bonds in a six-carbon ring are hydrogenated (hydrogen is added catalytically) to give cyclohexane as a common product.

C6H6 + 3H2 → C6H12

In the following diagram cyclohexane represents a low-energy reference point. Addition of hydrogen to cyclohexene produces cyclohexane and releases heat amounting to 119.7 kJ mol^-1. If we take this value to represent the energy cost of introducing one double bond into a six-carbon ring, we would expect a cyclohexadiene to release 239.3 kJ mol^-1 on complete hydrogenation, and 1,3,5-cyclohexatriene to release 359 kJ mol^-1. These heats of hydrogenation ΔH_hyd reflect the relative thermodynamic stability of the compounds (Figure 10.7.4 ).

[Note: corrected; the source prints "amounting to 11.9 kJ mol^-1" where this reads "amounting to 119.7 kJ mol^-1"; the source prints "release 23.9 kJ mol^-1" where this reads "release 239.3 kJ mol^-1"; the source prints "release 35.9 kJ" where this reads "release 359 kJ". The heat of hydrogenation of cyclohexene is 28.6 kcal/mol, 119.7 kJ/mol; the source's values are ten times too small.]

Figure 10.7.4: Experimental evidence for aromatic stabilization energy in benzene from the heat of hydrogenation. Energies are in kcal/mol. (CC BY-NC-SA 4.0; William Resuch);
Diagram of energy levels and reaction pathways involving benzene and hypothetical cyclohexane structures.

In practice, 1,3-cyclohexadiene is slightly more stable than expected, by about 8.1 kJ mol^-1, presumably due to conjugation of the double bonds. Benzene, however, is an extraordinary 150 kJ mol-1 more stable than expected. This additional stability is a characteristic of all aromatic compounds.

[Note: corrected; the source prints "an extraordinary 15 kJ mol-1" where this reads "an extraordinary 150 kJ mol-1". About 36 kcal/mol, 150 kJ/mol, consistent with the −152 kJ/mol above.]
