---
title: "9.6: A Simple Molecular-Orbital Treatment of H₂ Places Both Electrons in a Bonding Orbital"
book: "Physical Chemistry (LibreTexts)"
chapter: "9: Chemical Bonding in Diatomic Molecules"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09%3A_Chemical_Bonding_in_Diatomic_Molecules/9.06%3A_A_Simple_Molecular-Orbital_Treatment_of_H_Places_Both_Electrons_in_a_Bonding_Orbital"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

To describe the electronic states of molecules, we construct wavefunctions for the electronic states by using molecular orbitals. These wavefunctions are approximate solutions to the Schrödinger equation. A mathematical function for a molecular orbital is constructed, ψi, as a linear combination of other functions, φj, which are called basis functions because they provide the basis for representing the molecular orbital.

|ψi⟩ = Σj c_ij φj

where

- j is the index for the j^th basis function (e.g., atomic orbital)
- i is the i^th molecular orbitals and
- c_ij is the expansion coefficient of the j^th basis function for the i^th molecular orbital.

The variational method is used to find values for parameters in the basis functions and for the constant coefficients in the linear combination that optimize these functions, i.e. make them as good as possible. The criterion for quality in the variational method is making the ground state energy of the molecule as low as possible. Here and in the rest of this chapter, the following notation is used: σ is a general spin function (can be either α or β), φ is the basis function (this usually represents an atomic orbital), ψ is a molecular orbital, and Ψ is the electronic state wavefunction (representing a single Slater determinant or linear combination of Slater determinants).

The ultimate goal is a mathematical description of electrons in molecules that enables chemists and other scientists to develop a deep understanding of chemical bonding and reactivity, to calculate properties of molecules, and to make predictions based on these calculations. Just as for atoms, each electron in a molecule can be described by a product of spin-orbitals. Since electrons are fermions, the electronic wavefunction must be antisymmetric with respect to the permutation of any two electrons. A Slater determinant containing the molecular spin orbitals produces the antisymmetric wavefunction. For example for two electrons,

Ψ(r1, r2) = 1/(√2)|ψA(r1)α(1), ψB(r1)β(1); ψA(r2)α(2), ψB(r2)β(2)|

Solving the Schrödinger equation in the orbital approximation will produce a set of spatial molecular orbitals, each with a specific energy, ε. Following the Aufbau Principle, two electrons with different spins ( α and β, consistent with the Pauli Exclusion Principle discussed for muliti-electron atoms) are assigned to each spatial molecular orbital in order of increasing energy. For the ground state of the 2n electron molecule, the n lowest energy spatial orbitals will be occupied, and the electron configuration will be given as ψ1^2ψ2^2ψ3^2…ψn^2. The electron configuration also can be specified by an orbital energy level diagram as shown in Figure 9.6.1 . Higher energy configurations exist as well, and these configurations produce excited states of molecules. Some examples are shown in Figure 9.6.1 .

Figure 9.6.1: a) The lowest energy configuration of a closed-shell system. b) The lowest energy configuration of an open-shell radical. c) An excited singlet configuration. d) An excited triplet configuration.
Four orbital energy-level diagrams a)–d), levels ε1 to ε5, with ε1 doubly occupied and the other electrons placed differently in each.

[Note: corrected; the source prints "Diagram illustrating various mathematical operations represented by symbols, arranged in a tabular format." where this reads "Four orbital energy-level diagrams a)–d), levels ε1 to ε5, with ε1 doubly occupied and the other electrons placed differently in each.". The image's alt text, machine-written, misreads the image; this describes it.]

## Symmetry

Molecular orbitals usually are identified by their symmetry or angular momentum properties. For example, a typical symbol used to represent an orbital in an electronic configuration of a diatomic molecule is 2σg^2. The superscript in symbol means that this orbital is occupied by two electrons; the prefix means that it is the second sigma orbital with gerade symmetry.

Diatomic molecules retain a component of angular momentum along the internuclear axis. The molecular orbitals of diatomic molecule therefore can be identified in terms of this angular momentum. A Greek letter, e.g. σ or π, encodes this information, as well as information about the symmetry of the orbital. A σ means the component of angular momentum is 0, and there is no node in any plane containing the internuclear axis, so the orbital must be symmetric with respect to reflection in such a plane. A π means there is a node and the wavefunction is antisymmetric with respect to reflection in a plane containing the internuclear axis. For homonuclear diatomic molecules, a g or a u is added as a subscript to designate whether the orbital is symmetric or antisymmetric with respect to the center of inversion of the molecule.

A homonuclear diatomic molecule has a center of inversion in the middle of the bond. This center of inversion means that ψ(x, y, z) = ±ψ(−x, −y, −z) with the origin at the inversion center. Inversion takes you from (x, y, z) to (−x, −y, −z). For a heteronuclear diatomic molecule, there is no center of inversion so the symbols g and u are not used. A prefix 1, 2, 3, etc. simply means the first, second, third, etc. orbital of that type. We can specify an electronic configuration of a diatomic molecule by these symbols by using a superscript to denote the number of electrons in that orbital, e.g. the lowest energy configuration of N2 is

1σg^2 1σu^2 2σg^2 2σu^2 1πu^4 3σg^2

### Contrasting LCAO with other Quantum Chemistry Methods

As we have already seen, the LCAO approach is very approximate, yielding only qualitative results. It should be noted that the Hartree-Fock method discussed earlier for atoms can also be used for molecules. For example, the molecule He2^+ has three electrons, and the Li atom also has three electrons. As usual with Hartree-Fock, the idea is to optimize the shapes of the single-electron orbitals ψ1(r), ψ2(r) and ψ3(r) by minimizing the guess to the ground state energy Eg. Of course, we will not get the same answer as for Li because there is a different V_en energy for He2^+ due to the presence of two positively charge nuclei (charge = +2 e) separated by a distance R in contrast to the single +3 e charged nucleus for Li. When the shapes of the orbitals are optimized, we also obtain three energy ε1, ε2 and ε3. Not unexpectedly, we find that two of the HF orbitals resemble 1σg while the third resembles 1σu^* and the first two energies ε1 and ε2 will be nearly equal, while the third ε3 will be noticeably higher. To contrast with the LCAO approach, in LCAO, we do not optimize the shapes of the orbitals (these are assumed a priori to be 1s shaped). All we do is choose the mixing coefficients so as to minimize the guess to the ground-state energy Eg.

We note, finally, that the density functional theory alluded to earlier can also be used for molecules. It is often the case that density functional theory yields a more accurate description than Hartree-Fock, but this depends on the molecule. In any case, both are more accurate than LCAO. There is also a hierarchy of methods called post Hartree-Fock methods, all of which are based on the wavefunction rather than the electron density, that can be used to improve upon the HF approximation systematically. The greater the accuracy that is desired for the calculation, the more costly computationally the post HF methods become, so quantum chemistry is often a trade-off between accuracy and efficiency, an issue that becomes more critical to take into account when calculations on large molecules must be carried out!

## Contributors and Attributions

- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("Quantum States of Atoms and Molecules")
- Mark Tuckerman (New York University)
