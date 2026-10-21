---
title: "10.6: Butadiene is Stabilized by a Delocalization Energy"
book: "Physical Chemistry (LibreTexts)"
chapter: "10: Bonding in Polyatomic Molecules"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/10%3A_Bonding_in_Polyatomic_Molecules/10.06%3A_Butadiene_is_Stabilized_by_a_Delocalization_Energy"
author: "Delmar"
license: "CC BY-SA 4.0"
---

### Learning Objectives

- Apply Hückel theory to an extended π-bonding network
- Identify the origin of delocalization energy from Hückel theory and relate it to resonances structures in valence bond theory

1,3-Butadiene is a simple conjugated diene with the formula C4H6 and can be viewed structurally as two vinyl groups (CH2=CH–) joined together with a single bond. Butadiene can occupy either a cis or trans conformers and at room temperature, 96% of butadiene exists as the trans conformer, which is 2.3 kcal/mole more stable than the cis structure.

[Note: corrected; the source prints "two vinyl groups (CH2=CH2)" where this reads "two vinyl groups (CH2=CH–)". CH2=CH2 is ethylene; a vinyl group is CH2=CH–.]

trans-1,3-Butadiene

For the simple application of applying Hückel theory for understanding the electronic structure of butadiene, we will ignore the energetic differences between the two conformers. As discussed previously, the molecular orbitals are linear combination of the four |p⟩ atomic orbitals on the carbon atoms that are not participating in the σ bonding network:

|ψi⟩ = Σj^4 c_ij|pj⟩

[Note: corrected; the source prints "Σj^4 c_ij|pi⟩" where this reads "Σj^4 c_ij|pj⟩". The sum runs over j.]

or explicitly

|ψi⟩ = c_i1|p1⟩ + c_i2|p2⟩ + c_i3|p3⟩ + c_i4|p4⟩

for the i^th molecular orbital |ψi⟩. The secular equations that need to be solved are

[H11 − ES11, H12 − ES12, H13 − ES13, H14 − ES14; H12 − ES12, H22 − ES22, H23 − ES23, H24 − ES24; H13 − ES13, H23 − ES23, H33 − ES33, H34 − ES34; H14 − ES14, H24 − ES24, H34 − ES34, H44 − ES44] × [c1; c2; c3; c4] = 0

If the standard Hückel theory approximations were used

H_ii − ES_ii = α − E

[Note: corrected; the source prints "H_ii − ES_ii = α" where this reads "H_ii − ES_ii = α − E". With S_ii = 1, as the matrix below uses.]

and

H_ij − ES_ij = β

when i = j±1, otherwise

H_ij − ES_ij = 0

then the secular equations for butadiene in Equation (complete) become

[α − E, β, 0, 0; β, α − E, β, 0; 0, β, α − E, β; 0, 0, β, α − E] × [c1; c2; c3; c4] = 0

Solving Equation (Huckel1) for {ci} coefficients and energy secular equation requires extracting the roots of the secular determinant:

|α − E, β, 0, 0; β, α − E, β, 0; 0, β, α − E, β; 0, 0, β, α − E| = 0

If both sides of Equation (24) were divided by β^4 and a new variable x is defined

x = (α − E)/β

then Equation (24) simplifies further to

|x, 1, 0, 0; 1, x, 1, 0; 0, 1, x, 1; 0, 0, 1, x| = 0

This is essentially the connection matrix for the butadiene molecule. Each pair of connected atoms is represented by 1, each non-connected pair by 0 and each diagonal element by x. Expansion of the determinant in Equation (26) gives the 4th order polynomial equation

x^4 − 3x^2 + 1 = 0

While solving 4th order equations typically require numerical estimation, Equation (27) can be further simplified by recognizing that it is a quadratic equation in terms of x^2. Therefore, the roots are

x^2 = (3±√5)/2

or x = ± 0.618 and x = ± 1.618. Since α and β are negative, these molecular orbital energies can ordered in terms of energy (from lowest to highest):

E1 = α + 1.618β

E2 = α + 0.618β

E3 = α − 0.618β

E4 = α − 1.618β

This sequence of energies is displayed in the energy diagram of Figure 10.6.1 .

Figure 10.6.1: The π molecular orbital energies from Hückel theory for butadiene with ground-state configuration. Structures calculated and images produced using HF/6-31G* (Public Domain; Ben Mills).

Each p atomic orbital of carbon contributes a single electron to the π manifold, so the ground-state occupation of the resulting four π electrons have a π1^2π2^2 configuration (Figure 10.6.1 ). The the total π-electron energy is then determined by adding up the energies in Equations (E1)-(E4) and scaling by their occupations to get

Eπ(butadiene) = 2 × E1 + 2 × E2 + 0 × E3 + 0 × E4

= 2(α + 1.618β) + 2(α + 0.618β)

= 4α + 4.472β

If the bonding of butadiene were described only as two localized double bond as in its dominant valence-bond structure (Figure 10.6.2 ), then its π-electron energy would be given by twice the Eπ predicted for the ethlyene molecule:

[Note: corrected; the source prints "valence-bond structure (Figure 10.6.1 )" where this reads "valence-bond structure (Figure 10.6.2 )". The resonance structures are in Figure 10.6.2.]

Eπ(butadiene) = 2 × Eπ(ethylene)

= 2 × 2(α + β)

= 4α + 4β

Comparing Equation (29) with Equation (29), the total π energy of butadiene lies lower than the total π energy of two double bonds by 0.47β (the σ bond does not contribute). This difference is known as the delocalization energy; a typical estimate of β is around -75 kJ/mol, which results in a delocalization energy for butadiene of -35 kJ/mol.

[Note: corrected; the source prints "by 0.48β" where this reads "by 0.47β". 4.472β − 4β = 0.472β; with β ≈ −75 kJ/mol that is the −35 kJ/mol given.]

> The delocalization energy is the extra stabilization resulting from the electrons extending over the whole molecule.

### Delocalization Energy in Valence Bond Theory

Delocalization energy is intrinsic to molecular orbital theory, since it results from breaking the two-center bond concept with the molecular orbitals that spread over more that just one pair of atoms. However, within the two-center theory of valence bond theory, the delocalization energy results from a stabilization energy attributed to resonance. Several conventional valence bond resonance structures that can be written for 1,3-butadiene, four of which are shown in Figure 10.6.2 . However, while structure 2a dominates, the other resonance structures also contribute to describing the total molecule and hence predict a corresponding stabilization energy akin to the delocalization energy in molecular orbital theory.

Figure 10.6.2: Several resonance structures that can be written for 1,3-butadiene. The resonance structure in the upper left dominates, but does not exclusively describe the system since a delocalization energy is experimentally observed compared to two ethylene molecules. (CC BY-NC; Ümit Kaya via LibreTexts)
Resonance structures of 1,3-butadiene.

[Note: corrected; the source prints "A series of interconnected boxes and lines, resembling a flowchart or diagram structure." where this reads "Resonance structures of 1,3-butadiene.". The image's alt text, machine-written, misreads the image; this describes it.]

In general, the true description of the bonding within the valence bond theory is a superposition of resonance structures with amplitudes that are determined via a variational optimization to find the lowest possible energy for the valence bond wavefunctions.

The solving the secular equations (Equation (complete)) gives the {c_ij} coefficients for the molecular orbitals in Equation (general) (not demonstrated):

|ψ1⟩ = 0.37|p1⟩ + 0.60|p2⟩ + 0.60|p3⟩ + 0.37|p4⟩

|ψ2⟩ = 0.60|p1⟩ + 0.37|p2⟩−0.37|p3⟩−0.60|p4⟩

[Note: corrected; the source prints "|ψ3⟩ = 0.60|p1⟩ + 0.37|p2⟩−0.37|p3⟩−0.60|p4⟩" where this reads "|ψ2⟩ = 0.60|p1⟩ + 0.37|p2⟩−0.37|p3⟩−0.60|p4⟩". These are ψ2's coefficients.]

|ψ3⟩ = 0.60|p1⟩−0.37|p2⟩−0.37|p3⟩ + 0.60|p4⟩

|ψ4⟩ = 0.37|p1⟩−0.60|p2⟩ + 0.60|p3⟩−0.37|p4⟩

These are depicted in Figure 10.6.3 .

Figure 10.6.3: Energy level diagram and decomposition of the π molecular orbitals of butadiene. This is view three-dimensionally in Figure 10.6.1 . (CC BY-NC; Ümit Kaya via LibreTexts)
Illustration of wave functions displaying nodes and antinodes, with three distinct patterns represented in red and blue.

Note the correlation of the energy of the π molecular orbitals of butadiene to the number of nodes in the wavefunction; this is the general trend observed in previous systems like the particle in the box and atomic orbitals. The four 3-D calculated molecular orbitals are contrasted in Figure 10.6.1 .

### Exercise 10.6.1

What would Hückel theory predict for the energy levels and π molecular orbitals of cis-butadiene? Do you believe this approach adequately describes the energy levels of the cis-trans isomerization reaction of butadiene?
