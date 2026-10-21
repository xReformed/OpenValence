---
title: "10.3: BeH₂ is Linear and H₂O is Bent"
book: "Physical Chemistry (LibreTexts)"
chapter: "10: Bonding in Polyatomic Molecules"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/10%3A_Bonding_in_Polyatomic_Molecules/10.03%3A_BeH_is_Linear_and_HO_is_Bent"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

In this section, we will construct approximate molecular orbitals for a water molecule by considering a simple linear triatomic of the general form HXH, where X is a second row element. We will take a multi-centered molecular orbital approach instead of the two-centered valence bond/hybrid approach discussed previously. As with previous discussions of Molecular Orbitals, we approximate them as a linear combinations of atomic orbitals (LCAO). In molecular orbital theory linear combinations of all available (atomic) orbitals will form molecular orbitals. These are spread over the whole molecule, or delocalized, and in a quantum chemical interpretation they are called canonical orbitals. Since it is absolutely wrong to assume that there are only three types of sp^x hybrid orbitals, it is possible, that there are multiple different types of orbitals involved in bonding for a certain atom.

## AH₂ Molecules

We want to construct a reasonable argument for the energetic ordering and structure of the molecular orbitals. We first note that each H will donate a 1s orbital in the LCAO scheme, and A will likely donate at least 2s and possible 2p orbitals, depending on its chemical identity. In general, if we consider only the first row A elements, the molecule orbitals (via the LCAO) can be expressed as combination of 1s orbitals on the two Hydrogens (H1 and H2) and the four n=2 orbitals (2s 2px 2py;2pz) on the A atom:

|χ⟩ = a1|1s⟩_H1 + a2|1s⟩_H2 + a3|2s⟩A + a4|2px⟩A + a5|2py⟩A + a6|2pz⟩A

These molecular orbitals were created with six atomic orbitals and hence six different |χ⟩ molecular orbitals can be created. As with previous molecular orbitals problems, the coefficients of this expansion ({ai}) are determined by solving the secular determinant.

If we consider only linear AH2 molecules, then Equation (MO1) can be simplified by ignoring 2px and 2py atomic orbitals since they are perpendicular to the bonds and are hence non-bonding (only for linear AH2 molecules). Moreover, the molecule is symmetric about the center (the position of A), hence the orbitals have to have the same symmetry.

Only the 2p orbital of A that will overlap with 1s of H is the 2pz. Hence, Equation (MO1) can be simplified to consider the combination

|χ⟩ = a1|1s⟩_H1 + a1|1s⟩_H2 + a3|2s⟩A + a6|2pz⟩A

Note that the two coefficients in front of the 1s orbitals of hydrogen are equal in magnitude by symmetry (a2 = ±a1). This since no hydrogen is "special" and they must have the same contribution to the molecular orbital.

[Note: corrected; the source prints "are the same by symmetry" where this reads "are equal in magnitude by symmetry (a2 = ±a1)". Symmetry fixes their size; the σu orbitals have opposite signs.]

### Mixing Amplitudes

How big should the 2s orbital contributors of A be compared to the 1s orbital of H?

This depends on several things. First, is the nuclear charge on A and the second is the electronegativity difference between H and A. The first determines how quickly the 2s orbitals, remembering that the exponential part is exp(−Zr/(2a0)), and the electronegativity difference determines the relative magnitude of the A-atom coefficients compared to the H 1s coefficients.

[Note: corrected; the source prints "the exponential part is exp(−Zr/a0)" where this reads "the exponential part is exp(−Zr/(2a0))"; the source prints "the relative magnitude of H1 compared to H2" where this reads "the relative magnitude of the A-atom coefficients compared to the H 1s coefficients". A 2s orbital decays as exp(−Zr/(2a0)); H1 and H2 are equivalent.]

The six |χ⟩ molecular orbitals from Equation (MO1) are shown in Figure 10.3.1 .

Figure 10.3.1: The six molecular orbitals for the AH2 molecule constrained to a linear geometry. The symmetry labels for each molecular orbital are indicated.

The first molecular orbital |χ1⟩ constructed from Equation (MO1) is purely bonding because the 2s orbital is positive near the A nucleus, but becomes negative as we go away from the nucleus. This orbital is also even (garade symmetry), so we can denote it as a 2σg orbital signifying that it is constructed from a 2s orbital of A combined with the two 1s orbitals of H. The only other MO that can be constructed that has the right symmetry is |χ6⟩ which is denoted as 3σg. This is an antibonding molecular orbital and is also even (garade symmetry). The corresponding wavefunctions are:

[Note: corrected; the source prints "which is denoted as 2σu. This" where this reads "which is denoted as 3σg. This". The orbital is gerade (even), the next σg after 2σg.]

|χ1⟩ = a1|1s⟩_H1 + a1|1s⟩_H2 + a3|2s⟩A

|χ6⟩ = a1|1s⟩_H1 + a1|1s⟩_H2 − a3|2s⟩A

Next, if we combine a 2pz orbital of A with the 1s of H, there are two possibilities that have the right symmetry. The first is

|χ2⟩ = a1|1s⟩_H1 − a1|1s⟩_H2 + a6|2pz⟩A

[Note: corrected; the source prints "|χ2⟩ = a1|1s⟩_H1 + a1|1s⟩_H2 + a6|2pz⟩A" where this reads "|χ2⟩ = a1|1s⟩_H1 − a1|1s⟩_H2 + a6|2pz⟩A". 2pz combines with the out-of-phase pair of H 1s orbitals (σu symmetry).]

which is a bonding orbital and denoted as 1σu. This is purely bonding and has an odd symmetry (ungarede). The other combination is

[Note: corrected; the source prints "This is purely antibonding" where this reads "This is purely bonding". χ2 is the bonding σu orbital.]

|χ5⟩ = a1|1s⟩_H1 − a1|1s⟩_H2 − a6|2pz⟩A

[Note: corrected; the source prints "|χ5⟩ = a1|1s⟩_H1 − a1|1s⟩_H2 + a6|2pz⟩A" where this reads "|χ5⟩ = a1|1s⟩_H1 − a1|1s⟩_H2 − a6|2pz⟩A". χ5 is the antibonding partner of χ2, with the opposite sign on 2pz.]

This is antibonding and is denoted 2σu. The orbitals 2px and 2py from X are nonbonding and become π_2px and π_2py nonbonding orbitals and designated as 1πu orbitals:

[Note: corrected; the source prints "Hence, we denote this as 2σg." where this reads "This is antibonding and is denoted 2σu.". χ5 has σu symmetry.]

|χ3⟩ = |2px⟩A

|χ4⟩ = |2py⟩A

## Beryllium Hydride (BeH2) is Linear

Consider the BeH2 molecule: Be has a 1s^2 2s^2 electron configuration with is no unpaired electrons available for bonding. From a perspective of using only atomic orbitals to generate the bonding orbitals, we would conclude that the molecule could not exist since no free orientals exist on Be atom to bond. Clearly, atomic orbitals are not adequate to describe orbitals in molecules, but this can be solved by allowing the 2s and one 2p orbital on Be to mix to form sp hybrid orbitals. The experimental H-Be-H bond angle is 180°. Presumably, one electron from Be is shared with each unpaired electrons from H. We could promote and electron from the 2s orbital on Be to the 2p orbital to get two unpaired electrons for bonding (predicting two non-equivalent Be–H bonds, one from 2s and one from 2p). Thus the geometry is still not explained with atomic orbitals alone.

[Note: corrected; the source prints "Consider the BeF2 molecule" where this reads "Consider the BeH2 molecule"; the source prints "(predicting 90° bond angles, not 180°)" where this reads "(predicting two non-equivalent Be–H bonds, one from 2s and one from 2p)". The section is about BeH2; one 2s and one 2p orbital give two different bonds, with no reason for a 180° angle.]

Be has 2s and 2p orbitals, and it is in the middle. H has 1s orbitals; there are two H atoms on the outside. We initially make combinations of the H atomic orbitals that we previously used to make diatomic hydrogen, except there is no overlap (i.e., S = 0). These combinations will mix with the 2s and 2p_z on Be, as shown in Figure 10.3.2.

Figure 10.3.2: Forming molecular orbitals for BeH2.
Diagram showing two combinations of hydrogen and beryllium atoms on the left, and their appropriate pairing on the right.

Then we can put the Molecular Orbital diagram together, starting with the outside, drawing in bonding, non-bonding and anti-bonding MOs, and filling the electrons (Figure 10.3.3). The bond order is 2.

Figure 10.3.3: Molecular orbitals diagram for BeH2.
Diagram illustrating energy levels in molecular interactions, showing bonding and anti-bonding orbitals with color-coded representations.

Walsh diagrams, often called angular coordinate diagrams or correlation diagrams, are representations of calculated orbital energies of a molecule versus a distortion coordinate, used for making quick predictions about the geometries of small molecules. By plotting the change in molecular orbital levels of a molecule as a function of geometrical change, Walsh diagrams explain why molecules are more stable in certain spatial configurations (i.e. why water adopts a bent conformation).

### Walsh Correlation Diagrams

A major application of Walsh diagrams is to explain the regularity in structure observed for related molecules having identical numbers of valence electrons (i.e. why H2O and H2S look similar), and to account for how molecules alter their geometries as their number of electrons or spin state changes. Additionally, Walsh diagrams can be used to predict distortions of molecular geometry from knowledge of how the LUMO (Lowest Unoccupied Molecular Orbital) affects the HOMO (Highest Occupied Molecular Orbital) when the molecule experiences geometrical perturbation. Walsh's rule for predicting shapes of molecules states that a molecule will adopt a structure that best provides the most stability for its HOMO. If a particular structural change does not perturb the HOMO, the closest occupied molecular orbital governs the preference for geometrical orientation.

Figure 10.3.4: A Walsh diagram for an AH2 molecule. (public domain).
Graph depicting various molecular structures, showing distances and angles between atoms, with colored spheres representing different atoms.

For the AH2 molecular system, Walsh produced the first angular correlation diagram by plotting the orbital energy curves for the canonical molecular orbitals while changing the bond angle from 90° to 180° (Figure 10.3.4). As the bond angle is distorted, the energy for each of the orbitals can be followed along the lines, allowing a quick approximation of molecular energy as a function of conformation.

A typical prediction result for water is an bond angle of 90°, which is not even close to the experimental value of 104°. At best, the method is able to differentiate between a bent and linear molecule.

> Walsh's rule for predicting shapes of molecules states that a molecule will adopt a structure that best provides the most stability for its HOMO. If a particular structural change does not perturb the HOMO, the closest occupied molecular orbital governs the preference for geometrical orientation.

Figure 10.3.4 illustrates the difference between the actual linear case we just analyzed and the truly bent molecule, e.g. H2O. The geometry changes the ordering somewhat, but the qualitative picture we obtain from the linear case makes it a useful construction. The oxygen atomic orbitals are labeled according to their symmetry (Figure 10.3.5) as a1 for the 2s orbital and b1 (2px), b2 (2py) and a1 (2pz) for the three 2p orbitals. The two hydrogen 1s orbitals are premixed to form a1 and b2 molecular orbitals.

Figure 10.3.5: MO diagram for water. (CC-SA-BY-3.0; Officer781 via Wikipedia).
Diagram illustrating a molecular structure with red and blue lines indicating interactions between atoms.

Mixing takes place between same-symmetry orbitals of comparable energy resulting a new set of MO's for water:

- 2a1 MO from mixing of the oxygen 2s atomic orbital and the hydrogen σ MO. Small oxygen 2p_z atomic orbital admixture strengthens bonding and lowers the orbital energy.
- 1b2 MO from mixing of the oxygen 2p_y atomic orbital and the hydrogen σ* MO.
- 3a1 MO from mixing of the oxygen 2p_z atomic orbital and the hydrogen σ MO. Small oxygen 2s atomic orbital admixture weakens bonding and raises the orbital energy.
- 1b1 nonbonding MO from the oxygen 2p_x atomic orbital (the p-orbital perpendicular to the molecular plane).

In the water molecule the highest occupied orbital, (1b1) is non-bonding and highly localized on the oxygen atom, similar to the non-bonding orbitals of hydrogen fluoride. The next lowest orbital (3a1) can be thought of as a non-bonding orbital, as it has a lobe pointing away from the two hydrogens. From the lower energy bonding orbitals, it is possible to see that oxygen also takes more than its "fair share" of the total electron density. The electronic configuration of water in the ground state (Figure 10.3.5) is therefore

[Note: corrected; the source prints "The next lowest orbital (2a1)" where this reads "The next lowest orbital (3a1)". Counting the O 1s core as 1a1, as Figure 10.3.5 does.]

(a1)^2(b2)^2(a1)^2(b1)^2

Figure 10.3.6: Image from Anna Krylov (USC)
Diagrams of various molecular orbitals, labeled with numbers, showing different shapes and symmetries.

[Note: corrected; the source prints "Figure 10.3.5: Image from Anna Krylov" where this reads "Figure 10.3.6: Image from Anna Krylov". The number 10.3.5 is already used.]

Table 10.3.1 list the respective LCAO coefficients for the six atomic orbitals. Table 10.3.1 combines the energy values with the description derived from the character table for molecules of point group C2v

Table 10.3.1: LCAO Coefficients of first six molecular orbitals of water

| Energy | Symbol | s(H) | s(O) | p_x(O) | p_y(O) | p_z(O) | s(H) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.728 | 2b2 | 0.525 | 0 | 0 | -0.669 | 0 | -0.525 |
| 5.440 | 4a1 | -0.553 | 0.306 | 0 | 0 | -0.544 | -0.553 |
| -12.191 | 1b1 | 0 | 0 | -1.000 | 0 | 0 | 0 |
| -14.467 | 3a1 | -0.309 | 0.354 | 0 | 0 | 0.827 | -0.309 |
| -19.113 | 1b2 | -0.473 | 0 | 0 | -0.743 | 0 | 0.473 |
| -40.032 | 2a1 | 0.315 | 0.884 | 0 | 0 | -0.143 | 0.315 |

[Note: corrected; the source prints "| 5.440 | 3a1 | -0.553 | 0.306 | 0 | 0 | -0.544 | 0.553 |" where this reads "| 5.440 | 4a1 | -0.553 | 0.306 | 0 | 0 | -0.544 | -0.553 |"; the source prints "| -14.467 | 2a1 |" where this reads "| -14.467 | 3a1 |"; the source prints "| -40.032 | 1a1 |" where this reads "| -40.032 | 2a1 |". The labels count the O 1s core as 1a1, as Figure 10.3.5 and the paragraph below do; and an a1 orbital has equal H coefficients, so the last 0.553 is −0.553 (with it the row is orthogonal to the others).]

Note in contrast to the valence bond theory discussed previous for water, the two lone electron pairs are not in identical orbitals. The 1b1 MO is a lone pair, while the 3a1, 1b2 and 2a1 MO's can be localized to give two O−H bonds and an in-plane lone pair. This is in agreement with the experimentally measured photoelectron spectrum discussed in the next section.

## Summary

Walsh correlation diagram is a plot of molecular orbital energy as a function of some systematic change in molecular geometry. For example, the correlation between orbital energies and bond angle for an AH2 molecule. The geometry of a molecule is determined by which possible structure is lowest in energy. We can use the Walsh diagram to determine the energy trends based on which orbitals are occupied.
