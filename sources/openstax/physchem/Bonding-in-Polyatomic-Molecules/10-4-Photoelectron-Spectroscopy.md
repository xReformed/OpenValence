---
title: "10.4: Photoelectron Spectroscopy"
book: "Physical Chemistry (LibreTexts)"
chapter: "10: Bonding in Polyatomic Molecules"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/10%3A_Bonding_in_Polyatomic_Molecules/10.04%3A_Photoelectron_Spectroscopy"
author: "Nixr"
license: "CC BY 4.0"
---

### Learning Objectives

- Demonstrate how photoelectron spectroscopy can be used to resolve the absolute energies of molecular orbitals.

Photoelectron spectroscopy (PES) utilizes photo-ionization and analysis of the kinetic energy distribution of the emitted photoelectrons to study the composition and electronic state of the surface region of a sample.

- X-ray Photoelectron Spectroscopy (XPS) uses soft x-rays (with a photon energy of 200-2000 eV) to examine electrons in core-levels.
- Ultraviolet Photoelectron Spectroscopy (UPS) using vacuum UV radiation (with a photon energy of 10-45 eV) to examine electrons in valence levels.

Both photoelectron spectroscopies are based upon a single photon in/electron out process. The energy of a photon of all types of electromagnetic radiation is given by the Planck–Einstein relation:

E = hν

where h is Planck constant and ν is the frequency (Hz) of the radiation. UPS is a powerful technique to exam molecular electron structure since we are interested in the molecular orbitals from polyatomic molecules (especially the valence orbitals) and is the topic of this page.

Photoelectron spectroscopy uses monochromatic sources of radiation (i.e. photons of fixed energy). In UPS the photon interacts with valence levels of the molecule or solid, leading to ionization by removal of one of these valence electrons. The kinetic energy distribution of the emitted photoelectrons (i.e. the number of emitted photoelectrons as a function of their kinetic energy) can be measured using any appropriate electron energy analyzer and a photoelectron spectrum can thus be recorded.

Figure 10.4.1: Diagram of a basic, typical PES instrument used in UPS, where the radiation source is an UV light source. When the sample is irradiated, the released photoelectrons pass through the lens system which slows them down before they enter the energy analyzer. The analyzer shown is a spherical deflection analyzer which the photoelectrons pass through before they are collected at the collector slit. (CC BY 4.0; Ümit Kaya via LibreTexts)
Diagram of an analytical device showing components: lamp source, sample, entrance slit, energy analyzer, exit slit, and detector, with arrows indicating vacuum pump flow.

The process of photoionization can be considered in several ways. One way is to look at the overall process for a species A:

A + photon → A^+ + e^−

Conservation of energy then requires that (after using Equation (5.3.1)):

E(A) + hν = E(A^+) + E(e^−)

Since the free electron's energy is present solely as kinetic energy (KE) (i.e., there is no internal energy in a free electron)

E(e^−) = KE

Equation (5.3.3) can then be rearranged to give the following expression for the KE of the photoelectron:

KE = hν−[E(A^+) − E(A)]

The final term in brackets represents the difference in energy between the ionized and neutral species and is generally called the vertical ionization energy (IE) of the ejected electron; this then leads to the following commonly quoted equations:

KE = hν − IE

or

IE = hν − KE

The vertical ionization energy is a direct measure of the energy required to just remove the electron concerned from its initial level to the vacuum level (i.e., a free electron). Photoelectron spectroscopy measures the relative energies of the ground and excited positive ion states that are obtained by removal of single electrons from the neutral molecule.

### Note

Equation (5.3.5) may look familiar to you as it the same equation Einstein used to describe the photoelectric effect except the vertical ionization energy (IE) is substituted for workfunction Φ. Both vertical ionization energy and workfunctions are metrics for the binding energy of an electron in the sample.

At a fundamental level, ionization energies are well-defined thermodynamic quantities related to the heats of protonation, oxidation/reduction chemistry, and ionic and covalent bond energies. Ionization energies are closely related to the concepts of electronegativity, electron-richness, and the general reactivity of molecules. The energies and other characteristic features of the ionization bands observed in photoelectron spectroscopy provide some of the most detailed and specific quantitative information regarding the electronic structure and bonding in molecules.

[Note: corrected; the source prints "provide some of the molecular orbitals detailed" where this reads "provide some of the most detailed". A word swapped in the source.]

Figure 10.4.2: Vertical ionization process for molecular hydrogen. (CC BY 4.0; Ümit Kaya via LibreTexts)
Graph depicting ionization energy (eV) of H₂ and H₂⁺ as a function of bond length (r in Å). Arrows indicate ionization energy for H₂.

Ionization is explicitly defined in terms of transitions between the ground state of a molecule and ion states as shown in Equation (Big) and as illustrated in the Figure 10.4.2. Nonetheless, the information obtained from photoelectron spectroscopy is typically discussed in terms of the electronic structure and bonding in the ground states of neutral molecules, with ionization of electrons occurring from bonding molecular orbitals, lone pairs, antibonding molecular orbitals, or atomic cores. These descriptions reflect the relationship of ionization energies to the molecular orbital model of electronic structure.

Ionization energies are directly related to the energies of molecular orbitals by Koopmans' theorem, which states that the negative of the eigenvalue of an occupied orbital from a Hartree-Fock calculation is equal to the vertical ionization energy to the ion state formed by removal of an electron from that orbital (Figure 10.4.3 ), provided the distributions of the remaining electrons do not change (i.e., frozen).

Ij = −εj

There are many limitations to Koopmans' theorem, but in a first order approximation each ionization of a molecule can be considered as removal of an electron from an individual orbital. The ionization energies can then be considered as measures of orbital stabilities, and shifts can be interpreted in terms of orbital stabilizations or destabilizations due to electron distributions and bonding. Koopmans' theorem is implicated whenever an orbital picture is involved, but is not necessary when the focus is on the total electronic states of the positive ions.

Figure 10.4.3: Within Koopmans' Theorem, the energies of the orbitals ε have an attractively simple physical interpretation: they give the amount of energy necessary to remove (ionize) the electron out of the molecular orbital, which corresponds to the negative of the experimentally observable ionization potential (I). (CC BY 4.0; Ümit Kaya via LibreTexts)
Energy-level diagram with vertical lines representing states I1, I2, I3, I4 and energy levels ε1, ε2, ε3, ε4.

### Koopmans' Theorem

Koopmans' theorem argues that the negative of the eigenvalue of an occupied orbital from a Hartree-Fock calculation is equal to the vertical ionization energy to the ion state formed by removal of an electron from that orbital.

Several different ionization energies can be defined, depending on the degree of vibrational excitation of the cations. In general, the following two types of ionization energies are considered (Figure 10.4.4 ):

- Adiabatic ionization energy corresponds to the ionization energy associated with this transition M(X, v” = 0) + hν → M^+(x, v’ = 0) + e^− Adiabatic ionization energy that is, the minimum energy required to eject an electron from a molecule in its ground vibrational state and transform it into a cation in the lowest vibrational level of an electronic state x of the cation.
- Vertical ionization energy corresponds to the ionization energy associated with this transition M(X, v” = 0) + hν → M^+(x, v’ = n) + e^− where, the value n of the vibrational quantum number v’ corresponds to the vibrational level whose wavefunction gives the largest overlap with the v” = 0 wavefunction. This is the most probable transition and usually corresponds to the vertical transition where the internuclear separations of the ionic state are similar to those of the ground state.

Figure 10.4.4: Difference between vertical and adiabatic ionization energies for a simple harmonic oscillator system. (CC BY 4.0; Ümit Kaya via LibreTexts)
Graph depicting energy vs. bond length, showing ion, neutral, vertical, and adiabatic states with labeled curves.

The geometry of an ion may be different from the neutral molecule. The measured ionzation energy in a PES experiment can refer to the vertical ionization energy, in which case the ion is in the same geometry as the neutral, or to the adiabatic ionzaiton energy, in which case the ion is in its lowest energy, relaxed geometry (mostly the former though). This is illustrated in the Figure 10.4.4. For a diatomic the only geometry change possible is the bond length. The figure shows an ion with a slightly longer bond length than the neutral. The harmonic potential energy surfaces are shown in green (neutral) and red (ion) with vibrational energy levels. The vertical ionzation energy is always greater than the adiabatic ionzation energy.

### Differing Ionization Energies

You have been exposed to three metrics of ionization energies already, which are similar, but with distinct differences:

- The ionization energy (also called adiabatic ionization energy) is the lowest energy required to effect the removal of an electron from a molecule or atom, and corresponds to the transition from the lowest electronic, vibrational and rotational level of the isolated molecule to the lowest electronic, vibrational and rotational level of the isolated ion.
- The binding energy (also called vertical ionization energy) is the energy change corresponding to an ionization reaction leading to formation of the ion in a configuration which is the same as that of the equilibrium geometry of the ground state neutral molecule.
- The workfunction is the minimum energy needed to remove an electron from a (bulk) solid to a point in the vacuum.

### Example 10.4.1: Molecular Hydrogen

As you remember, the molecular orbital description of molecular hydrogen involves two |1s⟩ atomic orbitals generating a bonding 1σg and antibonding 1σu^* molecular orbitals. The two electrons that are responsible for the H2 bond are occupied in the 1σg.

[Note: corrected; the source prints "antibonding 2σu^* molecular orbital" where this reads "antibonding 1σu^* molecular orbital". The antibonding orbital from two 1s orbitals is the first σu.]

MO diagram and PES spectrum of H2. (CC BY 4.0; Ümit Kaya via LibreTexts)
MO diagram of H2 (two H 1s orbitals forming 1σg and 1σu^*) on the left and its photoelectron spectrum on the right.

[Note: corrected; the source prints "Diagram showing a six-atom hexagonal molecule on the left and an ionization energy spectrum on the right." where this reads "MO diagram of H2 (two H 1s orbitals forming 1σg and 1σu^*) on the left and its photoelectron spectrum on the right.". The image's alt text, machine-written, misreads the image; this describes it.]

The PES spectrum has a single band that corresponds to the ionization of a 1σg electron. The multiple peaks are due to formation of the H2^+ ion in a range of vibrational energy levels. When extensive vibrational structure is resolved in a PES molecular orbital, then the removal of an electron from that molecular orbital induces a significant change in the bonding (in this case an increase in the bond length since the bond order has been reduced).

[Note: corrected; the source prints "The multiple peaks are due to electrons ejecting from a range of stimulated vibrational energy levels." where this reads "The multiple peaks are due to formation of the H2^+ ion in a range of vibrational energy levels.". The progression comes from the vibrational levels of the ion left behind.]

### Example 10.4.2: Molecular Nitrogen

Diatomic nitrogen is more complex than hydrogen since multiple molecular orbitals are occupied. Four molecular orbitals are occupied (the two 1πu orbitals are both occupied). The UV photoelectron spectrum of N2, has three bands corresponding to 3σg, 1πu and 2σu occupied molecular orbitals. Both 3σg and 2σu are weakly bonding and antibonding. The 2σg orbital is not resolved in this spectrum since the incident light hν used did not have sufficient energy to ionize electrons in that deeply stabilized molecular orbital.

[Note: corrected; the source prints "The 1σg orbital is not resolved" where this reads "The 2σg orbital is not resolved". The bands are 3σg, 1πu and 2σu; the deeper valence orbital out of reach is 2σg (1σg is the N 1s core).]

MO diagram and PES spectrum of N2. (CC BY 4.0; Ümit Kaya via LibreTexts)
Molecular energy levels diagram on the left, with ionization energy spectrum on the right, showing peaks and labels.

Note that extensive vibrational structure for the 1πu band indicates that the removal of an electron from this molecular orbital causes a significant change in the bonding.

## Hydrogen Chloride

The molecular energy level diagram for HCl is reproduced in Figure 10.4.5

Figure 10.4.5: Molecular Orbital Energy-Level Diagram for HCl. The hydrogen 1s atomic orbital interacts most strongly with the 3p_z orbital on chlorine, producing a bonding/antibonding pair of molecular orbitals. The other electrons on Cl are best viewed as nonbonding. As a result, only the bonding σ orbital is occupied by electrons, giving a bond order of 1. (CC BY 4.0; Ümit Kaya via LibreTexts)
Molecular orbital diagram illustrating energy levels and nonbonding orbitals of H, HC, and Cl with electron configurations.

[Note: corrected; the source prints "interacts molecular orbitals strongly" where this reads "interacts most strongly". A word swapped in the source.]

Important aspects of molecular orbital diagram in Figure 10.4.5:

- The H 1s energy lies well above the Cl 3s and 3p atomic orbitals;
- The valence electron configuration can be written 2σ^2 3σ^2 1π^4;
- The H 1s orbital contributes only to the σ molecular orbitals, as does one of the Cl 3p orbitals (hence the lines in Figure 10.4.5 connecting these atomic orbitals and the 3σ and 4σ molecular orbitals);
- The remaining Cl 3p orbitals (ie those perpendicular to the bond axis) are unaffected by bonding, and these form the 1π molecular orbitals;
- The 1π orbitals are nonbonding - they are not affected energetically by the interaction between the atoms, and are hence neither bonding nor antibonding;
- The 3σ orbital is weakly bonding, and largely Cl 3p;
- The 4σ* orbital is antibonding, and primarily of H 1s character;

[Note: corrected; the source prints "above the Cl 2s and 2p atomic orbitals" where this reads "above the Cl 3s and 3p atomic orbitals"; the source prints "can be written 3σ^2 1π^4" where this reads "can be written 2σ^2 3σ^2 1π^4"; the source prints "as does one of the Cl 2p orbitals" where this reads "as does one of the Cl 3p orbitals"; the source prints "The remaining Cl 2p orbitals" where this reads "The remaining Cl 3p orbitals"; the source prints "and largely Cl 2p" where this reads "and largely Cl 3p"; the source prints "The 3σ* orbital is antibonding" where this reads "The 4σ* orbital is antibonding". Chlorine's valence orbitals are 3s and 3p; HCl's eight valence electrons are 2σ^2 3σ^2 1π^4; and 3σ is the bonding, 4σ the antibonding orbital.]

Figure 10.4.6 shows the analogous MO diagram and photoelectron spectrum for HCl. The spectrum has two bands corresponding to non-bonding 1π molecular orbitals (with negligible vibrational structure) and the 3σ bonding molecular orbital (vibrational structure).

[Note: corrected; the source prints "non-bonding 1p (or 1π) molecular orbitals" where this reads "non-bonding 1π molecular orbitals"; the source prints "and the 3s bonding molecular orbital" where this reads "and the 3σ bonding molecular orbital". The Greek letters were lost in the source.]

Figure 10.4.6: Photoelectron spectrum HCl. (CC BY 4.0; Ümit Kaya via LibreTexts)
Graph showing ionization energy in eV with peaks labeled 1π in green and 3σ in red, indicating energy levels from 14 to 18 eV.

The higher energy (more stabilized) core molecular orbitals are not observed since the incident photon energy hν is below their ionization energies.

## Water

In the simplified valence bond theory perspective of the water molecule, the oxygen atom form four sp^3 hybrid orbitals. Two of these are occupied by the two lone pairs on the oxygen atom, while the other two are used for bonding. Within the molecular orbital picture, the electronic configuration of the H2O molecule is (1a1)^2(2a1)^2(1b2)^2(3a1)^2(1b1)^2 where the symbols a1, b2 and b1 are orbital labels based on molecular symmetry that will be discussed later (Figure 10.4.7 ). Within Koopmans' theorem:

[Note: corrected; the source prints "of the H2O^+ molecule is" where this reads "of the H2O molecule is". This ten-electron configuration is neutral water's.]

- The energy of the 1b1 HOMO corresponds to the ionization energy to form the H2O^+ ion in its ground state (1a1)^2(2a1)^2(1b2)^2(3a1)^2(1b1)^1.
- The energy of the second-highest molecular orbitals 3a1 refers to the ion in the excited state (1a1)^2(2a1)^2(1b2)^2(3a1)^1(1b1)^2.

Figure 10.4.7: MO diagram for water. (CC BY 4.0; Ümit Kaya via LibreTexts)
Molecular orbital diagram showing energy levels of oxygen and hydrogen, with labels for orbitals and symmetry types.

The Hartree–Fock orbital energies (with sign changed) of these orbitals are tabulated below and compared to the experimental ionization energies.

| Molecular orbital | Hartree–Fock orbital Energies (eV) | Experimental Ionization Energies (eV) |
| --- | --- | --- |
| 2a1 | 36.7 | 32.2 |
| 1b2 | 19.5 | 18.5 |
| 3a1 | 15.9 | 14.7 |
| 1b1 | 13.8 | 12.6 |

As explained above, the deviations between orbital energy and ionization energy is small and due to the effects of orbital relaxation as well as differences in electron correlation energy between the molecular and the various ionized states.

The molecular orbital perspective has the lone pair in different orbitals (one in a non-bonding orbital (1b1 and one in the bonding orbitals). We tern to the photoelectron spectroscopy to help identify which theory is more accurate (i.e., describes reality better). The photoelectron spectrum of water in Figure 10.4.8 can be interpreted as having three major peaks with some fine structure arises from vibrational energy changes. The light source used in this experiment is not sufficiently energetic to ionize electrons from the lowest lying molecular orbitals.

[Note: corrected; the source prints "of water in Figure 10.4.6" where this reads "of water in Figure 10.4.8". Figure 10.4.6 is the HCl spectrum.]

Figure 10.4.8: Photoelectron spectrum of water. Note the energy axes is flipped compared to other spectra on this page. This spectrum does not go to high enough energy to show the deep 2a1 molecular orbital.

If water was formed two identical O-H bonds and two lone pairs on the oxygen atom line valence bond theory predicts, then the PES in Figure 10.4.8 would have two (degenerate) peaks, one for the two bonds and one for the two lone pairs. The photoelectron spectrum clearly shows three peaks in the positions expected for the molecular orbitals in Figure 10.4.7.

[Note: corrected; the source prints "for the molecular orbitals in Figure 10.4.8." where this reads "for the molecular orbitals in Figure 10.4.7.". The MO diagram is Figure 10.4.7.]

If the molecular orbitals in Figure 10.4.7 represent the real electronic structure, how do we view the bonding? These molecular orbitals are delocalized and bare little relationship to the familiar 2-center bonds used in valence bond theory. For example, the 2a1, 1b2 and 3a1 molecular orbitals all have contributions from all three atoms, they are really 3-centered molecular orbitals. The bonds however can be thought of as representing a build up of the total electron density which loosely put is a total of all the orbital contributions. Despite this, we keep the ideas of hybridization and 2-center bonds because they are useful NOT because they represent reality

[Note: corrected; the source prints "the 2a1 1b1 and 3a1" where this reads "the 2a1, 1b2 and 3a1". 1b1 is the oxygen lone pair; 1b2 spreads over all three atoms.]

## Summary

A photoelecton spectrum can show the relative energies of occupied molecular orbitals by ionization. (i.e. ejection of an electron). A photoelectron spectrum can also be used to determine energy spacing between vibrational levels of a given electronic state. Each orbital energy band has a structure showing ionization to different vibrational levels.
