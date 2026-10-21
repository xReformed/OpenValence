---
title: "6.7: The Helium Atom Cannot Be Solved Exactly"
book: "Physical Chemistry (LibreTexts)"
chapter: "6: The Hydrogen Atom"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/06%3A_The_Hydrogen_Atom/6.07%3A_The_Helium_Atom_Cannot_Be_Solved_Exactly"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Adding electrons to the quantum hydrogen atom results in analytically unsolvable Schrödinger Equations (they exist, we just do not have analytical forms for them)
- A basic aspect of the corresponding multi-electron Hamiltonians is that they are NOT separable with respect to the spatial coordinate of each electron
- The solutions to multi-electron Schrödinger Equations are called multi-electron wavefunctions and they are often approximated as a product of single-electron wavefunctions (called the orbital approximation).

## Multi-electron Hamiltonians

The second element in the periodic table provides our first example of a quantum-mechanical problem which cannot be solved exactly. Nevertheless, as we will show, approximation methods applied to helium can give accurate solutions in perfect agreement with experimental results. In this sense, it can be concluded that quantum mechanics is correct for atoms more complicated than hydrogen. By contrast, the Bohr theory failed miserably in attempts to apply it beyond the hydrogen atom.

Figure 6.7.1 shows a schematic representation of a helium atom with two electrons whose coordinates are given by the vectors r1 and r2. The electrons are separated by a distance r12 = |r1 − r2|. The origin of the coordinate system is fixed at the nucleus. As with the hydrogen atom, the nuclei for multi-electron atoms are so much heavier than an electron that the nucleus is assumed to be the center of mass. Fixing the origin of the coordinate system at the nucleus allows us to exclude translational motion of the center of mass from our quantum mechanical treatment.

Figure 6.7.1: (a) The nucleus (++) and electrons (e-) of the helium atom. (b) Equivalent reduced particles with the center of mass (approximately located at the nucleus) at the origin of the coordinate system. Note that μ1 and μ2 ≈ me.
Two diagrams representing directed graphs. The first graph shows nodes and directed edges labeled with values, while the second graph outlines a similar structure with additional labels.

The Hamiltonian operator for the hydrogen atom serves as a reference point for writing the Hamiltonian operator for atoms with more than one electron. Start with the same general form we used for the hydrogen atom Hamiltonian

Ĥ = T̂ + V̂

Include a kinetic energy term for each electron and a potential energy term for the attraction of each negatively charged electron for the positively charged nucleus and a potential energy term for the mutual repulsion of each pair of negatively charged electrons. The He atom Hamiltonian is

Ĥ = −(ħ^2/(2 me))(∇1^2 + ∇2^2) + V1(r1) + V2(r2) + V12(r12)

where

V1(r1) = −(2e^2)/(4πε0 r1)

V2(r2) = −(2e^2)/(4πε0 r2)

V12(r12) = e^2/(4πε0 r12)

The two-electron Hamiltonian in Equation (6.7.2) can be extended to any atom or ion by replacing the He nuclear charge of +2 with a general charge Z; e.g.

V1(r1) = −Ze^2/(4πε0 r1)

and including terms for the additional electrons. The subsequent multi-electron atom with n electron is

Ĥ = −(ħ^2/(2 me))Σi^n ∇i^2 (Kinetic Energy) + Σi^n Vi(ri) (Coulombic Attraction) + Σ_(i ≠ j)^(n, n)V_ij(r_ij) (electron-electron Repulsion)

[Note: a sum over i ≠ j counts every pair of electrons twice; it should run over i < j (or carry a factor 1/2), as the expanded forms below, which list each pair once, do. The same holds for the boron Hamiltonians below. The text is left as printed.]

This multi-electron Hamiltonian is qualitatively similar to the 2-electron Hamiltonian (Equation (6.7.1)) with each electron having its own kinetic energy and nuclear potential energy terms (Equations (6.7.3) and (6.7.4)). The other big difference between single electron systems and multi-electron systems is the presence of the V_ij(r_ij) terms which contain 1/r_ij, where r_ij is the distance between electrons i and j. These terms account for the electron-electron repulsion that we expect between like-charged particles.

### Exercise 6.7.1 : Multi-electron atom Hamiltonians

For the generalized multi-electron atom Hamiltonian (Equation (6.7.7)):

a. Explain the origin of each of the three summations.
b. What do these summations over (i.e., what is the origin of the summing index)?
c. Write expressions for Vi(ri) and V_ij(r_ij).

### Exercise 6.7.2 : Boron Atom

Boron is the fifth element of the periodic table (Z=5) and is located in Group 13.

a. Write the multi-electron Hamiltonian for a ^11B atom.
b. Would it be any different for a ^11B^+ ion?
c. Would it be any different for a ^10B atom?

**Answer**

a.

Ĥ_B(r⃗1, r⃗2, r⃗3, r⃗4, r⃗5) = −(ħ^2/(2 me))Σi^5 ∇i^2 + Σi^5 (−5e^2)/(4πε0 ri) + Σ_(i ≠ j)^(5,5)e^2/(4πε0 r_ij)

which expands to 20 terms

ĤB(r⃗1, r⃗2, r⃗3, r⃗4, r⃗5) = −(ħ^2/(2 me))∇1^2 − (ħ^2/(2 me))∇2^2 − (ħ^2/(2 me))∇3^2 − (ħ^2/(2 me))∇4^2 − (ħ^2/(2 me))∇5^2

−(5e^2)/(4πε0 r1) − (5e^2)/(4πε0 r2) − (5e^2)/(4πε0 r3) − (5e^2)/(4πε0 r4) − (5e^2)/(4πε0 r5)

[Note: corrected; the source prints "−(−5e^2)/(4πε0 r1) − (−5e^2)/(4πε0 r2) − (−5e^2)/(4πε0 r3) − (−5e^2)/(4πε0 r4) − (−5e^2)/(4πε0 r5)" where this reads "−(5e^2)/(4πε0 r1) − (5e^2)/(4πε0 r2) − (5e^2)/(4πε0 r3) − (5e^2)/(4πε0 r4) − (5e^2)/(4πε0 r5)". The nuclear attraction is negative; the double minus would make it a repulsion.]

+ e^2/(4πε0 r12) + e^2/(4πε0 r13) + e^2/(4πε0 r14) + e^2/(4πε0 r15) + e^2/(4πε0 r23) + e^2/(4πε0 r24) + e^2/(4πε0 r25) + e^2/(4πε0 r34) + e^2/(4πε0 r35) + e^2/(4πε0 r45)

b. Yes, ^11B^+ has one less electron than ^11B. Its Hamiltonian is

Ĥ_(B^+)(r⃗1, r⃗2, r⃗3, r⃗4) = −(ħ^2/(2 me))Σi^4 ∇i^2 + Σi^4 (−5e^2)/(4πε0 ri) + Σ_(i ≠ j)^(4,4)e^2/(4πε0 r_ij)

or expanded to 14 terms

ĤB(r⃗1, r⃗2, r⃗3, r⃗4) = −(ħ^2/(2 me))∇1^2 − (ħ^2/(2 me))∇2^2 − (ħ^2/(2 me))∇3^2 − (ħ^2/(2 me))∇4^2

−(5e^2)/(4πε0 r1) − (5e^2)/(4πε0 r2) − (5e^2)/(4πε0 r3) − (5e^2)/(4πε0 r4)

[Note: corrected; the source prints "−(−5e^2)/(4πε0 r1) − (−5e^2)/(4πε0 r2) − (−5e^2)/(4πε0 r3) − (−5e^2)/(4πε0 r4)" where this reads "−(5e^2)/(4πε0 r1) − (5e^2)/(4πε0 r2) − (5e^2)/(4πε0 r3) − (5e^2)/(4πε0 r4)". The nuclear attraction is negative; the double minus would make it a repulsion.]

+ e^2/(4πε0 r12) + e^2/(4πε0 r13) + e^2/(4πε0 r14) + e^2/(4πε0 r23) + e^2/(4πε0 r24) + e^2/(4πε0 r34)

c. No effect. Changing the number of neutrons in the nucleus does not affect kinetic nor potential energies of the electrons. The Hamilitonian for ^10B is identical to ^11B. This is technically correct for this level of discussion, but as we we will see in later, if we expand the Hamiltonian with hyperfine structure the number of neutrons can play a role.

## Multi-electron Wavefunctions and the Orbital Approximation

Given what we have learned from the previous quantum mechanical systems we’ve studied, we predict that exact solutions to the multi-electron Schrödinger equation in Equation (6.7.7) would consist of a family of multi-electron wavefunctions, each with an associated energy eigenvalue. These wavefunctions and energies would describe the ground and excited states of the multi-electron atom, just as the hydrogen wavefunctions and their associated energies describe the ground and excited states of the hydrogen atom. We would predict quantum numbers to be involved, as well.

The fact that electrons interact through their Coulomb repulsion means that an exact wavefunction for a multi-electron system would be a single function that depends simultaneously upon the coordinates of all the electrons; i.e., a multi-electron wavefunction,

ψ(r⃗1, r⃗2, r⃗3, r⃗4, …r⃗n)

The modulus squared of such a wavefunction would describe the probability of finding the electrons (though not specific ones) at a designated volume (V) in the atom.

p(V) = ∫_V|ψ(r⃗1, r⃗2, r⃗3, r⃗4, …r⃗n)|^2 dτ

All of the electrons are described simultaneously by a multi-electron wavefunction, so the total amount of electron density represented by the wavefunction equals the number of electrons in the atom.

∫_(all space)|ψ(r⃗1, r⃗2, r⃗3, r⃗4, …r⃗i)|^2 dτ = n

[Note: a normalized many-electron wavefunction integrates to 1 over all the electrons' coordinates; it is the one-electron density, n∫|ψ|^2 dτ2…dτn, that integrates to n, the number of electrons. The text is left as printed.]

Unfortunately, the Coulomb repulsion terms (Equation (6.7.5)) make it impossible to find an exact solution to the Schrödinger equation for many-electron atoms and molecules even for two electrons atoms. We have to rely on approximations and the orbital approximation is central to basic chemistry concepts.

### The Orbital Approximation

The most basic approximations to the exact solutions to a multi-electron atom Hamiltonian, Ĥ, (Equation (6.7.7)) involve writing a multi-electron wavefunction (ψ(r1, r2, …, rn)) as a simple product of single-electron wavefunctions (φi(ri) ):

ψ(r1, r2, …, rn) ≈ φ1(r1)φ2(r2)…φn(rn)

or in Dirac notation

|ψ(r1, r2, …, rn)⟩ ≈ |φ1(r1)⟩|φ2(r2)⟩…|φn(rn)⟩

The energy of the atom in the state associated with a specific multi-electron wavefunction (E) is obtained from the multi-electron Schrödinger Equation

Ĥψ(r1, r2, …, rn) = Eψ(r1, r2, …, rn)

Within the approximation in Equation (6.7.8), E can be expressed sum of the energies of the one-electron components (εi).

E ≈ Σi εi

This is called the orbital approximation.

By writing the multi-electron wavefunction as a product of single-electron functions (Equations (6.7.8) or (6.7.9)), we conceptually transform a multi-electron atom into a collection of individual electrons located in individual orbitals whose spatial characteristics and energies can be separately identified. For atoms, these single-electron wavefunctions are called atomic orbitals and resemble the wavefunctions for hydrogen-like atoms. For molecules, as we will see in the following chapters, these are called molecular orbitals. While a great deal can be learned from such an analysis, it is important to keep in mind that such a discrete, compartmentalized picture of the electrons is an approximation, albeit a powerful one.
