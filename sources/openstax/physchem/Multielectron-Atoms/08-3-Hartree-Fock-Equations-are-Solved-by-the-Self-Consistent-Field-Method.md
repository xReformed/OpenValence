---
title: "8.3: Hartree-Fock Equations are Solved by the Self-Consistent Field Method"
book: "Physical Chemistry (LibreTexts)"
chapter: "8: Multielectron Atoms"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08%3A_Multielectron_Atoms/8.03%3A_Hartree-Fock_Equations_are_Solved_by_the_Self-Consistent_Field_Method"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Show how the Hartree approximation can be used to solve for the wavefunctions and energies of multi-electron atoms.
- Understand the orbital approach of independent orbitals is an approximation to a mutlti-electron system with the motions of all electrons coupled together.
- Demonstate how the Self-Consistant Field (SCF) calculation is needed to support the Hartree approximation

The Hartree method is used to approximate the wavefunction and the energy of a quantum multi-electron system in a stationary state. This approximation assumes that the exact N-body wavefunction of the system can be approximated by a product of single-electron wavefunctions. By invoking the variational method, one can derive a set of N-coupled equations for the N spin orbitals. A solution of these equations yields the Hartree wavefunction and energy of the system. It is one step better than the "Ignorance is Bliss" approach, discussed previously, but still far from modern state-off-the-art methods.

## Unsolvable Systems

The Hamiltonian for a generic multielectron atom includes nucleus-electron attraction terms for the additional electrons with a general charge Z; e.g.

V_nuclear-electron(r1) = −Z/(|r − R|)

in atomic units with |r − R| is the distance between the electron and the nucleus, The Hamiltonian must also have terms for electron-electron repulsion (also in atomic units)

V_electron-electron(r12) = 1/(|r − r^′|)

with |r − r^′| is the distance between electron 1 and electron 2. So the proper multi-electron Hamiltonian can be constructed

Ĥ(r1, r2, ...rn) = −(ħ^2/(2 me))Σi∇i^2 + Σi V_nuclear-electron(ri) + Σ_(i ≠ j) V_electron-electron(r_ij)

[Note: a sum over i ≠ j counts every pair of electrons twice; it should run over i < j (or carry a factor 1/2). The text is left as printed.]

Given what we have learned from the previous quantum mechanical systems we’ve studied, we predict that exact solutions to the multi-electron Schrödinger equation would consist of a family of multi-electron wavefunctions, each with an associated energy eigenvalue. These wavefunctions and energies would describe the ground and excited states of the multi-electron atom, just as the hydrogen wavefunctions and their associated energies describe the ground and excited states of the hydrogen atom. We would predict quantum numbers to be involved, as well.

The fact that electrons interact through their electron-electron repulsion (final term in Equation (8.3.3)) means that an exact wavefunction for a multi-electron system would be a single function that depends simultaneously upon the coordinates of all the electrons; i.e., a multi-electron wavefunction:

|ψ(r1, r2, …ri)⟩

Unfortunately, the electron-electron repulsion terms make it impossible to find an exact solution to the Schrödinger equation for many-electron atoms.

## The Hartree Approximation

The method for finding best possible one-electron wavefunctions that was published by Douglas Hartree in 1928 and improved two years later by Vladimir Fock. For the Schrödinger equation to be analytically solvable, the variables must be separable - the variables are the coordinates of the electrons. To separate the variables in a way that retains information about electron-electron interactions, the electron-electron term (Equation (8.3.1)) must be approximated so it depends only on the coordinates of one electron. Such an approximate Hamiltonian can account for the interaction of the electrons in an average way. The exact one-electron eigenfunctions of this approximate Hamiltonian then can be found by solving the Schrödinger equation. These functions are the best possible one-electron functions.

[Note: corrected; the source prints "Hartree in 1948" where this reads "Hartree in 1928". Hartree's self-consistent field method appeared in 1928, and Fock's improvement in 1930.]

The Hartree approximation starts by invoking an initial ansatz that the multi-electron wavefunction in Equation (8.3.4) can be expanded as a product of single-electron wavefunctions (i.e., orbitals)

|ψ(r1, r2, …, rN)⟩≈ψ1(r1)ψ2(r2)…ψN(rN)

from which it follows that the electrons are independent, and interact only via the mean-field Coulomb potential. This yields one-electron Schrödinger equations of the form

−(ħ^2/(2 m))∇^2ψi(r) + V(r)ψi(r) = εi ψi(r)

or

He(r)ψi(r) = εi ψi(r)

where V(r) is the potential in which the electron moves; this includes both the nuclear-electron interaction

V_nucleus(r) = −Ze^2ΣR 1/(|r − R|)

and the mean field arising from the N − 1 other electrons. We smear the other electrons out into a smooth negative charge density ρ(r') leading to a potential of the form

V_electron(r) = −e∫dr^′ρ(r^′)1/(|r − r^′|)

[Note: with ρ, the electron density defined below, positive, this potential energy should be positive, a repulsion: +e^2∫dr′ρ(r′)/|r − r′|. The text is left as printed.]

where

ρ(r) = Σi^occupied|ψi(r)|^2.

[Note: corrected; the source prints "Σi^occupied|ψ(r)|^2." where this reads "Σi^occupied|ψi(r)|^2.". The sum is over the occupied orbitals ψi.]

The sum over runs over all occupied states; i.e., only the states of electrons that exist in the atom. The wavefunctions that from this approach with the Hamiltonian He(r) involve possess three kinds of energies discussed below.

### Three Energies within the Hartree Approximation

The total energy εj of the orbital φj, is the sum of the above three contributions:

1. Kinetic Energy: The Kinetic energy of the electron has an average value is computed by taking the expectation value of the kinetic energy operator ((−ħ^2)/(2 m))∇^2 with respect to any particular solution φj(r) to the Schrödinger equation: KE = ⟨φj|((−ħ^2)/(2 m))∇^2|φj⟩
2. Nuclear-Electron Coulombic Attraction Energy: Coulombic attraction energy with the nucleus of charge Z: ⟨φj|(−Ze^2)/(|r − R|)|φj⟩
3. Electron-Electron Coulombic Repulsion Energy: Coulomb repulsion energies with all of the N − 1 other electrons, which are assumed to occupy other atomic orbitals denoted φK, with this energy computed as Σ_(j ≠ k)⟨φj(r)φk(r’)|e^2/(|r − r’|)|φj(r)φk(r’)⟩. The Dirac notation ⟨φj(r)φk(r’)|e^2/(|r − r’|)|φj(r)φk(r’)⟩ is used to represent the two-electron (six-dimensional) Coulomb integral J_(j, k) = ∫|φj(r)|^2|φk(r’)|^2 (e^2/(|r − r'|))drdr’ that describes the Coulomb repulsion between the charge density |φj(r)|^2 for the electron in φj and the charge density |φk(r’)|^2 for the electron in φk. Of course, the sum over k must be limited to exclude k = j to avoid counting a “self-interaction” of the electron in orbital φj with itself.

[Note: corrected; the source prints "(e^2/(r − r'))" where this reads "(e^2/(|r − r'|))". The repulsion depends on the distance |r − r′|.]

Adding these all together to get the total energy εj of the orbital φj:

εJ = ⟨φj|((−ħ^2)/(2 m))∇^2|φj⟩ + ⟨φj|(−Ze^2)/(|r − R|)|φj⟩ + Σ_(j ≠ k)⟨φj(r)φk(r’)|e^2/(|r − r’|)|φj(r)φk(r’)⟩.

This treatment of the electrons and their orbitals is referred to as the Hartree-level of theory.

When screened hydrogenic atomic orbitals are used to approximate the φj and φK orbitals, the resultant εJ values do not produce accurate predictions. For example, the negative of εJ should approximate the ionization energy for removal of an electron from the orbitals φj. Such ionization potentials (IP s) can be measured, and the measured values do not agree well with the theoretical values when a crude screening approximation is made for the atomic orbitals.

## The Self-Consistant Field (SCF) Approach to the Variational Method

The Hartree Equations are nonlinear and must be solved iteratively. This is because if particles interact, that interaction must be in the Hamiltonian. So until we know where the particles are, we cannot write down the Hamiltonian, but until we know the Hamiltonian, we cannot tell where the particles are.

The idea is to solve the Schrödinger equation for an electron moving in the potential of the nucleus and all the other electrons. We start with a guess for the trial electron charge density, solve N/2 one-particle Schrödinger equations (initially identical) to obtain N electron wavefunctions. Then we construct the potential for each wavefunction from that of the nucleus and that of all the other electrons, symmetrize it, and solve the N/2 Schrödinger equations again. This method is ideal for a computer, because it is easily written as an algorithm (Figure 8.3.1 ).

Figure 8.3.1: Algorithm for Self-consistent field theory.
Flowchart illustrating steps for calculating charge density and potential, including decision points and outcomes.

Although we are concerned here with atoms, the same methodology is used for molecules or even solids (with appropriate potential symmetries and boundary conditions). This is a variational method, so wherever we refer to wavefunctions, we assume that they are expanded in some appropriate basis set.

Fock improved on Hartree’s method by using proper "antisymmetrized wavefunctions" (called the Hartree-Fock method) instead of simple one-electron wavefunctions.

### Shielding and Effective Charges Concepts are Useful

The hydrogen-like orbitals provide qualitative descriptions of orbitals of atoms with more than a single electron. By introducing the concept of screening as a way to represent the repulsive interactions among the electrons of an atom, an effective nuclear charge Z_eff can be used in place of Z in the hydrogenic ψ_(n, l, m) and E_(n, l) formulas to generate approximate atomic orbitals to be filled by electrons in a many-electron atom. For example, in the crudest approximation of a carbon atom, the two 1s electrons experience the full nuclear attraction so Z_eff = 6 for them, whereas the 2s and 2p electrons are screened by the two 1s electrons, so Z_eff = 4 for them. Within this approximation, one then occupies two 1s orbitals with Z = 6, two 2s orbitals with Z = 4 and two 2p orbitals with Z = 4 in forming the full six-electron product wavefunction of the lowest-energy state of carbon

|ψ(1,2, …,6)⟩ = |ψ_1s(1)ψ_1s(2)ψ_2s(3)…ψ_2p(6)⟩.

[Note: corrected; the source prints "ψ_1p(6)" where this reads "ψ_2p(6)". There is no 1p orbital; the sixth electron is in a 2p orbital.]

However, such approximate orbitals are not sufficiently accurate to be of use in quantitative simulations of atomic and molecular structure. In particular, their energies do not properly follow the trends in atomic orbital (AO) energies that are taught in introductory chemistry classes (Figure 8.3.2 ).

[Image: Graph showing multiple curves in blue, green, and red, illustrating energy trends over varying time periods.]

[Image: Graph depicting energy levels with labeled curves for 3d (red), 4s (blue), and 4p (green) against distance.]

[Note: the two image descriptions above read as machine-written and misread the images: both plot orbital energy against Z (or the number of electrons), the first for n = 1 to 5 and l = 0 to 3, the second the 3d, 4s and 4p energies from Z = 17 to 28; neither shows time or distance.]

Figure 8.3.2: Energies of Atomic Orbitals as Functions of the number of electrons in Neutral Atoms. (CC BY 4.0; Delmar Larsen).

For example, the relative energies of the 3d and 4s orbitals are not adequately described in a model that treats electron repulsion effects in terms of a simple screening factor. So, now it is time to examine how we can move beyond the screening model and take the electron repulsion effects, which cause the inter-electronic couplings that render the Schrödinger equation insolvable, into account in a more reliable manner.
