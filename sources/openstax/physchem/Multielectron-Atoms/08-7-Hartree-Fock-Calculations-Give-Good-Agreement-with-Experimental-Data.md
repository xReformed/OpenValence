---
title: "8.7: Hartree-Fock Calculations Give Good Agreement with Experimental Data"
book: "Physical Chemistry (LibreTexts)"
chapter: "8: Multielectron Atoms"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08%3A_Multielectron_Atoms/8.07%3A_Hartree-Fock_Calculations_Give_Good_Agreement_with_Experimental_Data"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Understand how the Hartree method is expanded to include symmetrized mulit-electron determential wavefunctions via the Hartree-Fock equations.
- Understand how to calculate the orbital energies from HF theory.
- Apply HF theory with Koopman's theory to estimate ionization energies and electron affinities.

The Hartree method discussed previously is useful as an introduction to the solution of many-particle system and to the concepts of self-consistency and of the self-consistent-field calculations, but its importance is confined to the history of physics. In fact the Hartree method is not just approximate, it is fundamentally wrong since its wavefunction is not antisymmetric to electron permutation! The Hartree-Fock approach discussed below is a better approach, which correctly takes into account the antisymmetric character of the trial wavefunctions.

Although the Hartree equations are numerically tractable via the self-consistent field method, it is not surprising that such a crude approximation fails to capture elements of the essential physics. The Pauli exclusion principle demands that the many-body wavefunction be antisymmetric with respect to interchange of any two electron coordinates, e.g.

Ψ(r1, r2, …, rN) = −Ψ(r2, r1, …, rN)

which clearly cannot be satisfied by the multi-electron wavefunctions of the form used in the Hartree Approximation, i.e., the orbital approximation (Equation (2.3)).

Ψ(r1, r2, …, rN) ≈ ψ1(r1)ψ2(r2)…ψN(rN)

This indistinguishability condition can be satisfied by forming a Slater determinant of single-particle orbitals

Ψ(r1, r2, …, rN) = 1/(√(N!))|ψ(r1)ψ(r2)…ψ(rN)|

[Note: corrected; the source prints "1/(√N)|" where this reads "1/(√(N!))|". A Slater determinant of N electrons is normalized by 1/√(N!), as in Section 8.6.]

This decouples the electrons resulting in N single-particle Hartree-Fock equations:

−(ħ^2/(2 m))∇^2ψi(r) (kinetic energy) + V_nucleus(r)ψi(r) (electron-nucleus potential) + V_electron(r)ψi(r) (Hartree Term) − Σj∫dr^′(ψj^*(r')ψi^*(r')ψj(r))/(|r − r^′|) = εi ψi(r).

As with the Hartree equations, the first term is the kinetic energy of the i^th electron

−(ħ^2/(2 m))∇^2ψi(r)

and the second term is the electron-nucleus potential between the i^th electron and nucleus

V_nucleus(r)ψi(r)

The third term (sometimes called the “Hartree” term) is the electrostatic potential between the i^th electron and the average charge distribution of the other N − 1 electrons.

V_electron(r)ψi(r) = J_(j, k) = ∫|φj(r)|^2|φk(r’)|^2 (e^2/(r − r'))drdr’

[Note: this sets a function, V(r)ψi(r), equal to a number, the Coulomb integral J_jk; and that integral has e^2/(4πε0|r − r′|), with the distance |r − r′|, in it. The text is left as printed.]

These three terms are identical to Hartree Equations with the product wavefunction ansatz (i.e., orbital approximation). The fourth term of Equation (2.9) is not in the Hartree Equations:

Σj∫dr^′(ψj^*(r')ψi^*(r')ψj(r))/(|r − r^′|)

[Note: the exchange term is linear in ψi: it should read ψj^*(r′)ψi(r′)ψj(r), without the conjugate on ψi; the same holds in the Hartree-Fock equation above. The text is left as printed.]

and is the exchange term. This term resembles the direct Coulomb term, but for the exchanged indices. It is a manifestation of the Pauli exclusion principle, and acts so as to separate electrons of the same spin. This “exchange” term acts only on electrons with the same spin and comes from the Slater determinant form of the wavefunction (Equation (2.8)). Physically, the effect of exchange is for like-spin electrons to avoid each other. The exchange term adds considerably to the complexity of these equations.

The Hartree-Fock Equations in Equation (2.9) can be recast as series of Schrödinger-like equations:

F̂|φi⟩ = εi|φi⟩

where F̂ is called the Fock operator and {|φi⟩} are the Hatree-Fock orbitals with corresponding energies εi.

The Fock operator is a one-electron operator and solving a Hartree-Fock equation gives the energy and Hartree-Fock orbital for one electron. For a system with 2N electrons, the variable i will range from 1 to N; i.e there will be one equation for each orbital. The reason for this is that only the spatial wavefunctions are used in Equation (8.7.2). Since the spatial portion of an orbital can be used to describe two electrons, each of the energies and wavefunctions found by solving Equation (8.7.2) will be used to describe two electrons.

The nature of the Fock operator reveals how the Hartree-Fock (HF) or Self-Consistent Field (SCF) Method accounts for the electron-electron interaction in atoms and molecules while preserving the idea of independent atomic orbitals. The wavefunction written as a Slater determinant of spin-orbitals is necessary to derive the form of the Fock operator, which is

F̂ = Ĥ^0 + Σ_(j=1)^N(2Ĵj − K̂j)

= −(ħ^2/(2 m))∇^2 − Ze^2/(4πε0 r) + Σ_(j=1)^N(2Ĵj − K̂j)

As shown by the expanded version on the far right, the first term in this equation, Ĥ^0, is the familiar hydrogen-like operator that accounts for the kinetic energy of an electron and the potential energy of this electron interacting with the nucleus. The next term accounts for the potential energy of one electron in an average field created by all the other electrons in the system. The Ĵ and K̂ operators result from the electron-electron repulsion terms in the full Hamiltonian for a multi-electron system. These operators involve the one-electron orbitals as well as the electron-electron interaction energy.

The Fock operator (Equation (8.7.3)) depends on all occupied orbitals (because of the exchange and Coulomb operators). Therefore, a specific orbital can only be determined if all the others are known. One must use iterative methods to solve the HF equations like the Self-consistent field method discussed previously for the Hartree Approximation.

### Exchange Energy

The exchange interaction is a quantum mechanical effect that only occurs between identical particles. Despite sometimes being called an exchange force in analogy to classical force, it is not a true force, as it lacks a force carrier. The effect is due to the wavefunction of indistinguishable particles being subject to exchange symmetry, that is, either remaining unchanged (symmetric) or changing its sign (antisymmetric) when two particles are exchanged. Both bosons and fermions can experience the exchange interaction. For fermions, it is sometimes called Pauli repulsion and related to the Pauli exclusion principle. For bosons, the exchange interaction takes the form of an effective attraction that causes identical particles to be found closer together, as in Bose–Einstein condensation.

### Example 8.7.1 : Hartree-Fock Energy of Helium

For example, the electron 1 in helium (with Z = 2), then

Ĥ^0(1) = −(ħ^2/(2 m))∇1^2 − (2e^2)/(4πε0 r1)

<!-- end of example -->

The Fock operator is couched in terms of the coordinates of the one electron whose perspective we are taking (which we will call electron 1 throughout the following discussion), and the average field created by all the other electrons in the system is built in terms of the coordinates of a generic “other electron” (which we’ll call electron 2) that is considered to occupy each orbital in turn during the summation over the N spatial orbitals. The best possible one-electron wavefunctions, by definition, will give the lowest possible total energy for a multi-electron system used with the complete multielectron Hamiltonian to calculate the expectation value for the total energy of the system. These wavefunctions are called the Hartree-Fock wavefunctions and the calculated total energy is the Hartree-Fock energy of the system.

As with the Hartree Equations, solving the Hartree-Fock Equations is mathematically equivalent to assuming each electron interacts only with the average charge cloud of the other electrons. This is how the electron-electron repulsion is handled. This also why this approach is also called the Self-Consistant Field (SCF) approach.

## Hartree-Fock Energy

The Hartree-Fock equations he φi = εi φi imply that the orbital energies εi can be written as:

εi = ⟨φi|he|φi⟩

= ⟨φi|T + V|φi⟩ + Σ_j(occupied)⟨φi|Jj − Kj|φi⟩

= ⟨φi|T + V|φi⟩ + Σ_j(occupied)[J_(i, j) − K_(i, j)],

where T + V represents the kinetic (T) and nuclear attraction (V) energies, respectively. Thus, εi is the average value of the kinetic energy plus Coulombic attraction to the nuclei for an electron in φi plus the sum over all of the spin-orbitals occupied in ψ of Coulomb minus Exchange interactions of these electrons with the electron in φi.

If φi is an occupied spin-orbital, the j = i term [J_(i, i) − K_(i, i)] disappears in the above sum and the remaining terms in the sum represent the Coulomb minus exchange interaction of φi with all of the N − 1 other occupied spin-orbitals. If φi is a virtual spin-orbital, this cancelation does not occur because the sum over j does not include j = i. So, one obtains the Coulomb minus exchange interaction of φi with all N of the occupied spin-orbitals in ψ. Hence the energies of occupied orbitals pertain to interactions appropriate to a total of N electrons, while the energies of virtual orbitals pertain to a system with N + 1 electrons. This difference is very important to understand and to keep in mind.

To give an idea of how well HF theory can predict the ground state energies of several atoms, consider Table 8.7.1 below:

Table 8.7.1 : Hartree-Fock Calculations of Ground Energies of Select Atoms (all energies are in RH)

| Atom | Hartree-Fock Energy | Experiment |
| --- | --- | --- |
| He | −5.72 | −5.80 |
| Li | −14.86 | −14.96 |
| Ne | −257.10 | −257.88 |
| Ar | −1053.64 | −1055.20 |

## Koopmans' Theorem

Koopmans' theorem states that the first ionization energy is equal to the negative of the orbital energy of the highest occupied molecular orbital. Hence, the ionization energy required to generated a cation and detached electron is represented by the removal of an electron from an orbital without changing the wavefunctions of the other electrons. This is called the "frozen orbital approximation." Let us consider the following model of the detachment or attachment of an electron in an N-electron system.

1. In this model, both the parent molecule and the species generated by adding or removing an electron are treated at the single-determinant level.
2. The Hartree-Fock orbitals of the parent molecule are used to describe both species. It is said that such a model neglects orbital relaxation (i.e., the re-optimization of the spin-orbitals to allow them to become appropriate to the daughter species).

Within this model, the energy difference between the daughter and the parent can be written as follows (φk represents the particular spin-orbital that is added or removed:

- for electron detachment (vertical ionization energies) E_(N−1) − EN = −εk
- and for electron attachment (electron affinities) EN − E_(N+1) = −εk.

The Hartree-Fock equations deal with exchange exactly; however, the equations neglect more detailed correlations due to many-body interactions. The effects of electronic correlations are not negligible; indeed the failure of Hartree-Fock theory to successfully incorporate correlation leads to one of its most celebrated failures.

### Example 8.7.2 : Electron Affinity

Let’s derive this result for the case in which an electron is added to the N + 1^st spin-orbital. The energy of the N-electron determinant with spin-orbitals φ1 through φN occupied is

[Note: corrected; the source prints "φ1 through fN" where this reads "φ1 through φN". A typing error.]

EN = Σ_(i=1)^N⟨φi|T + V|φi⟩ + Σ_(i<j)[J_(i, j) − K_(i, j)]

[Note: corrected; the source prints "+ Σ_(i=1)^N[J_(i, j) − K_(i, j)]" where this reads "+ Σ_(i<j)[J_(i, j) − K_(i, j)]". The pair sum runs over i < j, the same as the (1/2)Σ over all i, j below.]

which can also be written as

EN = Σ_(i=1)^N⟨φi|T + V|φi⟩ + (1/2)Σ_(i, j=1)^N[J_(i, j) − K_(i, j)].

Likewise, the energy of the N + 1-electron determinant wavefunction is

E_(N+1) = Σ_(i=1)^(N + 1)⟨φi|T + V|φi⟩ + (1/2)Σ_(i, j=1)^(N + 1)[J_(i, j) − K_(i, j)].

The difference between these two energies is given by

EN − E_(N+1) = −⟨φ_(N+1)|T + V|φ_(N+1)⟩−(1/2)Σ_(i=1)^(N + 1)[J_(i, N+1) − K_(i, N+1)]

−(1/2)Σ_(j=1)^(N + 1)[J_(N+1, j) − K_(N+1, j)]

= −⟨φ_(N+1)|T + V|φ_(N+1)⟩−Σ_(i=1)^(N + 1)[J_(i, N+1) − K_(i, N+1)]

= −ε_(N+1).

That is, the energy difference is equal to minus the expression for the energy of the N + 1^st spin-orbital, which was given earlier.

### Advanced: Electron Correlation and the "Exchange Hole"

In the Copenhagen Interpretation, the squared modulus of the wavefunction gives the probability of finding a particle in a given place. The many-body wavefunction gives the N-particle distribution function, i.e. |Φ(r1, ..., rN)|^2 is the probability density that particle 1 is at r1, ..., and particle N is at rN. However, when trying to work out the interaction between electrons, what we want to know is the probability of finding an electron at r, given the positions of all the other electrons {ri}. This implies that the electron behaves quantum mechanically when we evaluate its wavefunction, but as a classical point particle when it contributes to the potential seen by the other electrons.

Figure 8.7.2: Normalized Conditional Probability for from electron-electron interactions (excluding coulomb effects) in (A) the Hartree approximation and (B) the Hartree-Fock approximation.
Two graphs: the left shows a flat line indicating a constant value; the right shows a sigmoid curve rising gradually.

The contributions of electron-electron interactions in N-electron systems within the Hartree and Hartree-Fock methods are shown in Figure 8.7.2 . The conditional electron probability distributions n(r) of N − 1 electrons around an electron with given spin situated at r = 0. Within the Hartree approximation, all electrons are treated as independent, therefore n(r) is structureless. However, within the Hartree-Fock approximation, the N-electron wavefunction reflects the Pauli exclusion principle and near the electron at r = 0 the exchange hole can be seen where the the density of spins equal to that of the central electron is reduced. Electrons with opposite spins are unaffected (not shown).

## Summary

So, within the limitations of the HF, frozen-orbital model, the ionization potentials (IPs) and electron affinities (EAs) are given as the negative of the occupied and virtual spin-orbital energies, respectively. This statement is referred to as Koopmans’ theorem; it is used extensively in quantum chemical calculations as a means of estimating ionization potentials (Equation (8.7.8)) and Electron Affinities (Equation (8.7.9)) and often yields results that are qualitatively correct (i.e., ± 0.5 eV). In general Hartree-Fock theory gives a great first order solution (99%) to describing multi-electron systems, but that last 1% is still too great for quantitatively describing many aspects of chemistry and more sophisticated approaches are necessary. These are discussed elsewhere.
