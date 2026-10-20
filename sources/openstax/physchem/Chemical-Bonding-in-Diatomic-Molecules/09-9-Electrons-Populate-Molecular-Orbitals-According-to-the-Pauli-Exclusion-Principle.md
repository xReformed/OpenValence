---
title: "9.9: Electrons Populate Molecular Orbitals According to the Pauli Exclusion Principle"
book: "Physical Chemistry (LibreTexts)"
chapter: "9: Chemical Bonding in Diatomic Molecules"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09%3A_Chemical_Bonding_in_Diatomic_Molecules/9.09%3A_Electrons_Populate_Molecular_Orbitals_According_to_the_Pauli_Exclusion_Principle"
author: "Kcrabtree"
license: "CC BY-NC-SA 4.0"
---

Just like with multielectron atoms, there are restrictions on how electrons occupy molecular orbitals. The most important of these rules is the Pauli exclusion principle, which we will not try to prove but will take as a fact. In general chemistry, you were told that the Pauli exclusion principle means that electrons in the same orbital must have opposite spin, and that only two electrons can be in each orbital. That is close, but not entirely accurate. The true statement of the Pauli exclusion principle is this: wavefunctions must be antisymmetric with respect to exchange of identical fermions, and symmetric with respect to exchange of identical bosons. A fermion is a particle with half-integer spin, and a boson is a particle with integer spin. Recall that electrons are fermions (spin 1/2): we represent the two possible spin states as |α⟩ (mz = 1/2) and |β⟩ (mz = −1/2), according to their spin projections.

[Note: corrected; the source prints "A is a particle with half-integer spin, and a is a particle with integer spin" where this reads "A fermion is a particle with half-integer spin, and a boson is a particle with integer spin". The terms are missing from the source's HTML.]

Because all electrons are identical, the Pauli exclusion principle requires that the electronic wavefunction be antisymmetric with respect to exchanging any of them.^2 The word “antisymmetric” in this context means that if we swap two electrons (i.e., exchange their labels), the wavefunction must change sign. To denote both the orbital of an electron and its spin, we use a product of spin orbitals, each of the form |ψσ⟩, where ψ depends only on the spatial coordinates of the electrons, and σ depends only on their spins.

[Note: corrected; the source prints "a product of , each" where this reads "a product of spin orbitals, each". A word is missing from the source's HTML.]

In the ground electronic state of H2, the electrons both occupy the |1σ⟩ spatial orbital. Naively, we could write the following product of spin orbitals:

[Note: corrected; the source prints "In the ground electronic state of ," where this reads "In the ground electronic state of H2,". A word is missing from the source's HTML.]

|ψ⟩ = |1σ^1α^1⟩|1σ^2β^2⟩

where the superscript refers to the electron number. Note that since the spatial and spin coordinates are independent of one another, we can group them into kets in whichever way is most convenient for us at the time. Let us define the permutation operator p̂12, which swaps the labels of electrons 1 and 2, in order to test the wavefunction for antisymmetry in accordance with the Pauli Exclusion Principle. It is clear that the electronic wavefunction we wrote above does not change sign under this permutation operation!

[Note: corrected; the source prints "for asymmetry" where this reads "for antisymmetry". The Pauli principle requires antisymmetry.]

p̂12|ψ⟩ = |1σ^2α^2⟩|1σ^1β^1⟩ ≠ −|ψ⟩.

Instead, we can take a linear combination of spin functions to make a new wavefunction:

|ψ⟩ = (1/(√2))(|1σ^1α^1 1σ^2β^2⟩−|1σ^2α^2 1σ^1β^1⟩)

Since the Hamiltonian did not contain any terms that depend on spin, the energy of this new wavefunction is equal to the energy of our original wavefunction.^3 We can use the permutation operator p̂12 to see that this wavefunction is in fact antisymmetric:

p̂12|ψ⟩ = (1/(√2))(|1σ^2α^2 1σ^1β^1⟩−|1σ^1α^1 1σ^2β^2⟩)

= −(1/(√2))(|1σ^1α^1 1σ^2β^2⟩−|1σ^2α^2 1σ^1β^1⟩)

= −|ψ⟩.

We see here that the orbital is not occupied by one electron of each spin, but in fact it is occupied electrons in a superposition of spin states. In larger systems, antisymmetrized wavefunctions show that each orbital is occupied by a superposition of all electrons in the system in both spin states. Although that is difficult to conceptualize, in most practical cases the electrons can still be thought of as localized in one particular orbital with one particular spin.

There is a standard procedure to generate an appropriately antisymmetrized electronic wavefunction from any set of single-electron functions. Like in multi-electron atoms, the general method for doing this is by use of a Slater determinant: a determinant in which each column contains the product of one molecular orbital and spin function for each possible labeling of the electrons. For our system above (two electrons in |1σ⟩, one with spin α, and the other with spin β), we would write

|ψ⟩ = 1/(√(2!))||1σ^1α^1⟩, |1σ^1β^1⟩; |1σ^2α^2⟩, |1σ^2β^2⟩|,

where once again the superscript indicated the label on the electron. The Slater determinant therefore contains all of the possible ways that we could assign numbers to the electrons in the system.

### Note

A few things to know about Slater determinants:

- If two columns are swapped, the determinant changes sign (this is why it satisfies the exclusion principle!).
- If any two columns in a determinant are the same, the determinant is 0. This is why the Pauli exclusion principle only allows one electron of each spin to occupy a single orbital, which you learned way back in Gen Chem. It also directly leads to the “Aufbau” principle: when populating molecular orbitals, we fill up orbitals in order of increasing energy with two electrons each.
- The energy of a Slater determinant (in the independent particle approximation) is simply the sum of the orbitals that make it up (i.e., add up the energy of each electron in the MO diagram).
- The wavefunction described by a Slater determinant is normalized if the individual orbitals that make it up are normalized.
- Two Slater determinants are orthogonal if they differ in any single orbital.

Given an MO diagram, it is easy to generate a Slater determinant for the ground electronic state of a closed-shell molecule using general chemistry rules: the Aufbau principle and the Pauli exclusion principle. Each orbital can accommodate one electrons of each spin, and electrons are placed into orbitals from lowest to highest energy. A system with N electrons in the orbitals |φ1⟩, |φ2⟩, etc., will generate an N × N dimensional Slater determinant, and the general form is (if N is even):

|ψ⟩ = 1/(√(N!))||φ1^1α^1⟩, |φ1^1β^1⟩, |φ2^1α^1⟩, |φ2^1β^1⟩, …, |φ_(N/2)^1α^1⟩, |φ_(N/2)^1β^1⟩; |φ1^2α^2⟩, |φ1^2β^2⟩, |φ2^2α^2⟩, |φ2^2β^2⟩, …, |φ_(N/2)^2α^2⟩, |φ_(N/2)^2β^2⟩; ⋮, ⋮, ⋮, ⋮, ⋱, ⋮, ⋮; |φ1^N α^N⟩, |φ1^N β^N⟩, |φ2^N α^N⟩, |φ2^N β^N⟩, …, |φ_(N/2)^N α^N⟩, |φ_(N/2)^N β^N⟩|

Once again, each column contains the orbital and spin state of one of the electrons in the diagram, and each row in the column corresponds to a different choice of label (1, 2, 3, etc...). Evaluating the determinant yields a normalized, antisymmetrized wavefunction. Therefore, an MO diagram can stand as an effective substitute for an electronic wavefunction; it is implied that the true wavefunction used in calculations comes from the Slater determinant described by the diagram.
