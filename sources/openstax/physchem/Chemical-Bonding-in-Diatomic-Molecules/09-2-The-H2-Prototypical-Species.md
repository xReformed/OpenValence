---
title: "9.2: The H₂⁺ Prototypical Species"
book: "Physical Chemistry (LibreTexts)"
chapter: "9: Chemical Bonding in Diatomic Molecules"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09%3A_Chemical_Bonding_in_Diatomic_Molecules/9.02%3A_The_H_Prototypical_Species"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Molecular orbital theory is a conceptual extension of the orbital model, which was so successfully applied to atomic structure. As was once playfully remarked, "a molecule is nothing more than an atom with more nuclei." This may be overly simplistic, but we do attempt, as far as possible, to exploit analogies with atomic structure. Our understanding of atomic orbitals began with the exact solutions of a prototype problem – the hydrogen atom. We will begin our study of homonuclear diatomic molecules beginning with another exactly solvable prototype, the hydrogen molecule-ion H2^+.

## The Hydrogen Molecular Ion

The simplest conceivable molecule would be made of two protons and one electron, namely H2^+. This species actually has a transient existence in electrical discharges through hydrogen gas and has been detected by mass spectrometry and it also has been detected in outer space. The Schrödinger equation for H2^+ can be solved exactly within the Born-Oppenheimer approximation (i.e., fixed nuclei). This ion consists of two protons held together by the electrostatic force of a single electron. Clearly the two protons, two positive charges, repeal each other. The protons must be held together by an attractive Coulomb force that opposes the repulsive Coulomb force. A negative charge density between the two protons would produce the required counter-acting Coulomb force needed to pull the protons together. So intuitively, to create a chemical bond between two protons or two positively charged nuclei, a high density of negative charge between them is needed. We expect the molecular orbitals that we find to reflect this intuitive notion.

Figure 9.2.1: Hydrogen molecular ion H2^+ with fixed nuclei A and B, internuclear distance R. (CC BY-NC; Ümit Kaya via LibreTexts)
Diagram of H2^+: an electron above two protons A and B, with its distances rA and rB to them and the internuclear distance R.

[Note: corrected; the source prints "Diagram illustrating a binary tree structure with a blue node at the top and orange nodes below, with empty rectangular boxes on the sides." where this reads "Diagram of H2^+: an electron above two protons A and B, with its distances rA and rB to them and the internuclear distance R.". The image's alt text, machine-written, misreads the image; this describes it.]

The electronic Hamiltonian for H2^+ is

Ĥ_elec(r, R) = −(ħ^2/(2 m))∇^2 − e^2/(4πε0 rA) − e^2/(4πε0 rB) + e^2/(4πε0 R)

where rA and rB are the distances electron from the A and B hydrogen nuclei, respectively and R is the distance between the two protons.

Although the Schrödinger equation for H2^+ can be solved exactly (albeit within the Born-Oppenheimer approximation where the nuclei are fixed) because there is only one electron, we will develop approximate solutions in a manner applicable to other diatomic molecules that have more than one electron.

## Linear Combination of Atomic Orbitals

For the case where the protons in H2^+ are infinitely far apart, we have a hydrogen atom and an isolated proton when the electron is near one proton or the other. The electronic wavefunction would just be 1sA(r) or 1sB(r) depending upon which proton, labeled A or B, the electron is near. Here 1sA denotes a 1s hydrogen atomic orbital with proton A serving as the origin of the spherical polar coordinate system in which the position r of the electron is specified. Similarly 1sB has proton B as the origin. A useful approximation for the molecular orbital when the protons are close together therefore is a linear combination of the two atomic orbitals. The general method of using

ψ(r) = CA 1sA(r) + CB 1sB(r)

i.e. of finding molecular orbitals as linear combinations of atomic orbitals is called the Linear Combination of Atomic Orbitals - Molecular Orbital (LCAO-MO) Method. In this case we have two basis functions in our basis set, the hydrogenic atomic orbitals 1sA and 1sB.

### The Linear Combination of Atomic Orbitals (LCAO) Approximation and Interference

The LCAO approximation is an example of the linear variational method discussed previously with the true molecular orbital wavefunction approximated as an expansion of a basis set of atomic orbitals on each atom of the molecule with variable coefficients that can be optimized (e.g., via the secular equations). As discussed previously, the number of wavefunctions (solutions) extracted from solving the secular determinant is equal the number of elements in the expansion. So for the expansion in Equation (9.2.2) with two atomic orbitals contributing result in two molecule orbitals.

This method yields a approximate picture of the molecular orbitals in a molecules. The figure below shows two atoms approaching along the axis of one of their 2p states. In the top row, the two lobes facing one another have the same sign; in the bottom row they have opposite sign. These are two different linear combinations of the same two atomic states, on different atoms and with difference phases (i.e., signs of CA vs. CB in the expansion). In the first example, the electron density increases between the nuclei and in the second example, a very steep-sided node between the two nuclei causes all the probability density to face away from the atom opposite.

[Image: Animation of two atoms approaching along the axis of their p orbitals: in one row the facing lobes have the same sign, in the other opposite signs.]

[Note: corrected; the source prints "[Image: Black square with no discernible features or text.]" where this reads "[Image: Animation of two atoms approaching along the axis of their p orbitals: in one row the facing lobes have the same sign, in the other opposite signs.]". The alt text describes only the blank first frame of an animation; this describes the animation.]

For H2^+, the simplest molecule, the starting function is given by Equation (9.2.2). We must determine the values for the coefficients, CA and CB. We could use the variational method to find a value for these coefficients, but for the case of H2^+ evaluating these coefficients is easy. Since the two protons are identical, the probability that the electron is near A must equal the probability that the electron is near B. These probabilities are given by |CA|^2 and |CB|^2, respectively. Consider two possibilities that satisfy the condition |CA|^2 = |CB|^2; namely, CA = CB = C_(+) and CA = −CB = C_(−). These two cases produce two molecular orbitals:

ψ_(+) = C_(+)(1sA + 1sB)

ψ_(−) = C_(−)(1sA − 1sB)

The probability density for finding the electron at any point in space is given by |ψ^2| and the electronic charge density is just |eψ^2|. The important difference between ψ_(+) and ψ_(−) is that the charge density for ψ_(+) is enhanced (Figure 9.2.2 (bottom) between the two protons, whereas it is diminished for ψ_(−) as shown in Figures 9.2.2 (top). ψ_(−) has a node in the middle while ψ_(+) corresponds to our intuitive sense of what a chemical bond must be like. The electronic charge density is enhanced in the region between the two protons.

Figure 9.2.2: Electron wavefunctions for the 1s orbital of a lone hydrogen atom (left and right) and the corresponding bonding (bottom) and antibonding (top) molecular orbitals of the H2^+ ion. The real part of the wavefunction is the blue curve, and the imaginary part is the red curve. The red dots mark the locations of the nuclei. The electron wavefunction oscillates according to the Schrödinger wave equation, and orbitals are its standing waves. The standing wave frequency is proportional to the orbital's kinetic energy. (This plot is a one-dimensional slice through the three-dimensional system.)
Four panels: left and right, a hydrogen 1s wavefunction centred on a nucleus (red dot); top, the antibonding combination with a node between the nuclei; bottom, the bonding combination with density between them.

[Note: corrected; the source prints "through the three-dimensional .)" where this reads "through the three-dimensional system.)". A word is missing in the source.]

[Note: corrected; the source prints "Four graphs displaying sinusoidal waves in blue, with red dots marking peaks and troughs, arranged in a 2x2 grid." where this reads "Four panels: left and right, a hydrogen 1s wavefunction centred on a nucleus (red dot); top, the antibonding combination with a node between the nuclei; bottom, the bonding combination with density between them.". The image's alt text, machine-written, misreads the image; this describes it.]

So ψ_(+) is called a bonding molecular orbital. If the electron were described by ψ_(−), the low charge density between the two protons would not balance the Coulomb repulsion of the protons, so ψ_(−) is called an antibonding molecular orbital.

## Contributors and Attributions

- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("Quantum States of Atoms and Molecules")
- Rudolf Winter (Aberystwyth University)
