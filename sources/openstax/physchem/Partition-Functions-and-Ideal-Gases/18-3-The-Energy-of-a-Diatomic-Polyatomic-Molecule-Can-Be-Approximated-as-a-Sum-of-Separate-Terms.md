---
title: "18.3: The Energy of a Diatomic/Polyatomic Molecule Can Be Approximated as a Sum of Separate Terms"
book: "Physical Chemistry (LibreTexts)"
chapter: "18: Partition Functions and Ideal Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18%3A_Partition_Functions_and_Ideal_Gases/18.03%3A_The_Energy_of_a_Diatomic_Polyatomic_Molecule_Can_Be_Approximated_as_a_Sum_of_Separate_Terms"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

A monatomic gas has three degrees of freedom per molecule, all of them translational:

1. movement in x-direction
2. movement in y-direction
3. movement in z-direction

A polyatomic gas, including diatomic molecules, has other levels that you can 'stuff' energy into. Polyatomic molecules can rotate and vibrate, and if enough energy is available you could also excite the electrons involved in the σ and π bonds. A reasonable approximation of the partition function of the molecule would become:

q_tot(V, T) = q_trans q_vib q_rot q_elec

The partition function of a molecular idea gas is then:

Q(N, V, T) = ((q_trans q_vib q_rot q_elec)^N)/(N!)

The total energy of the molecule is then the sum of the translation, vibrational, rotational, and electronic energies:

E_tot = E_trans + E_vib + E_rot + E_elec

[Note: corrected; the source prints "E_tot = E_trans E_vib E_rot E_elec" where this reads "E_tot = E_trans + E_vib + E_rot + E_elec". The energy is a sum, as the text says.]

We will only scratch the surface of the additional degrees of freedom and their partition functions.

## Electronic

At room temperature the system is usually in its ground electronic state. This means that the electronic partition function q_elec ≈ g1 (= 1 for a nondegenerate ground state). Usually we do not have to worry about these degrees of freedom. If we do, there are usually just a few levels to worry about. This includes their degeneracy g. If there is a single state at a certain energy (g = 1), two states (g = 2), or more states, we must multiply the Boltzmann factor by this degeneracy number.

[Note: corrected; the source prints "the electronic partition function q_elec = 1." where this reads "the electronic partition function q_elec ≈ g1 (= 1 for a nondegenerate ground state).". With the ground state as zero, q_elec is the ground-state degeneracy; O2 (^3Σg^−) has q_elec ≈ 3.]

If there are more than one state to worry about, we could follow the same procedure as we did for the translational states:

1. Define the energy states and their degeneracies
2. Compose the partition function q for the molecule and Q for the gas
3. Use the (β or T) derivative of ln Q to determine ⟨E⟩
4. Use the T derivative of U ≈ ⟨E⟩ to find the contribution to the heat capacity
