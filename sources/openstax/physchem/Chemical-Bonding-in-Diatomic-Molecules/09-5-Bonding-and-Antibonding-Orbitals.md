---
title: "9.5: Bonding and Antibonding Orbitals"
book: "Physical Chemistry (LibreTexts)"
chapter: "9: Chemical Bonding in Diatomic Molecules"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09%3A_Chemical_Bonding_in_Diatomic_Molecules/9.05%3A_Bonding_and_Antibonding_Orbitals"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Characterize the bonding and anti-bonding molecular orbitals in H2^+

[Note: corrected; the source prints "in H^+" where this reads "in H2^+". The molecule is H2^+; H^+ has no electrons.]

The two molecular orbitals of the H2^+ ion were created via the linear combinations of atomic orbitals (LCAOs) approximation were created from the sum and the difference of two atomic orbitals. Within this approximation, the j^th molecular orbital can be expressed as a linear combination of many atomic orbitals {φi}:

[Note: corrected; the source prints "of the H^+ ion" where this reads "of the H2^+ ion". The molecule is H2^+.]

|ψJ⟩ = Σi^N c_(J, i)|φi⟩

A molecule will have as many molecular orbitals as there are atomic orbitals used in the basis set (N in Equation (9.5.12)). Adding two atomic orbitals corresponds to constructive interference between two waves, thus reinforcing their intensity; the internuclear electron probability density is increased. The molecular orbital corresponding to the sum of the two H 1s orbitals is called a σ1s combination (parts (a) and (b) of Figure 9.5.1 ).

Figure 9.5.1: Molecular Orbitals for the H2 Molecule. (a) This diagram shows the formation of a bonding σ_1s molecular orbital for H2 as the sum of the wavefunctions (Ψ) of two H 1s atomic orbitals. (b) This plot of the square of the wavefunction (Ψ^2) for the bonding σ1s molecular orbital illustrates the increased electron probability density between the two hydrogen nuclei. (Recall that the probability density is proportional to the square of the wavefunction.) (c) This diagram shows the formation of an antibonding σ_1s^* molecular orbital for H2 as the difference of the atomic orbital wavefunctions (Ψ) of two H 1s atomic orbitals. (d) This plot of the square of the wavefunction (Ψ2) for the σ_1s^* antibonding molecular orbital illustrates the node corresponding to zero electron probability density between the two hydrogen nuclei. (CC BY-SA-NC; anonymous).
Diagrams illustrating quantum mechanics concepts, including wave functions and probability density, with various graph annotations.

In the sigma (σ) orbital, the electron density along the internuclear axis and between the nuclei has cylindrical symmetry; that is, all cross-sections perpendicular to the internuclear axis are circles. The subscript 1s denotes the atomic orbitals from which the molecular orbital was derived.

|σ_1s⟩ = (1/(√(2(1 + S))))(|1sA⟩ + |1sB⟩)

Conversely, subtracting one atomic orbital from another corresponds to destructive interference between two waves, which reduces their intensity and causes a decrease in the internuclear electron probability density (part (c) and part (d) in Figure 9.5.1 ). The resulting pattern contains a node where the electron density is zero. The molecular orbital corresponding to the difference is called σ_1s^* and has a region of zero electron probability, a nodal plane, perpendicular to the internuclear axis:

|σ_1s^*⟩ = (1/(√(2(1 − S))))(|1sA⟩−|1sB⟩)

The electron density in the σ1s molecular orbital is greatest between the two positively charged nuclei, and the resulting electron–nucleus electrostatic attractions reduce repulsions between the nuclei. Thus the σ1s orbital represents a bonding molecular orbital. A molecular orbital that forms when atomic orbitals or orbital lobes with the same sign interact to give increased electron probability between the nuclei due to constructive reinforcement of the wavefunctions. In contrast, electrons in the σ_1s^* orbital are generally found in the space outside the internuclear region. Because this allows the positively charged nuclei to repel one another, the σ_1s^* orbital is an antibonding molecular orbital (a molecular orbital that forms when atomic orbitals or orbital lobes of opposite sign interact to give decreased electron probability between the nuclei due to destructive reinforcement of the wavefunctions).

> Antibonding orbitals contain a node perpendicular to the internuclear axis; bonding orbitals do not.

Because electrons in the σ1s orbital interact simultaneously with both nuclei, they have a lower energy than electrons that interact with only one nucleus. This means that the σ1s molecular orbital has a lower energy than either of the hydrogen 1s atomic orbitals. Conversely, electrons in the σ_1s^* orbital interact with only one hydrogen nucleus at a time. In addition, they are farther away from the nucleus than they were in the parent hydrogen 1s atomic orbitals. Consequently, the σ_1s^* molecular orbital has a higher energy than either of the hydrogen 1s atomic orbitals. The σ1s (bonding) molecular orbital is stabilized relative to the 1s atomic orbitals, and the σ_1s^* (antibonding) molecular orbital is destabilized. The relative energy levels of these orbitals are shown in the energy-level diagram (a schematic drawing that compares the energies of the molecular orbitals (bonding, antibonding, and nonbonding) with the energies of the parent atomic orbitals) in Figure 9.5.2

Figure 9.5.2: Molecular Orbital Energy-Level Diagram for H2. The two available electrons (one from each H atom) in this diagram fill the bonding σ1s molecular orbital. Because the energy of the σ1s molecular orbital is lower than that of the two H 1s atomic orbitals, the H2 molecule is more stable (at a lower energy) than the two isolated H atoms.
Diagram illustrating molecular orbitals of hydrogen, showing bonding and antibonding states with energy levels marked.

> A bonding molecular orbital is always lower in energy (more stable) than the component atomic orbitals, whereas an antibonding molecular orbital is always higher in energy (less stable).

## Expanding Beyond the 1s Orbital Basis Set

This picture of bonding in H2^+ in the previous section is very simple, but gives reasonable results when compared to an exact calculation. The equilibrium bond distance is 132 pm compared to 106 pm (exact), and a dissociation energy is 1.8 eV compared to 2.8 eV (exact). To better describe chemical bonding we need to account for the increase in electron density between the two nuclei. The 1s orbitals alone are not particularly good for this purpose because they are spherically symmetric and show no preference for the space between the atomic nuclei. The use of additional atomic orbitals can correct this situation and provide additional parameters, which can be optimized by the linear variational method, to give a better function with a lower energy and more accurate description of the charge density.

[Note: corrected; the source prints "The equilibrium bond distance is 134 pm" where this reads "The equilibrium bond distance is 132 pm". The simple LCAO curve has its minimum at 2.49a0 = 132 pm (Section 9.4).]

The energy of the non-normalized molecular orbital can be calculated from the expectation value integral of the Hamiltonian,

EJ = (⟨ψJ|Ĥ_elec|ψJ⟩)/(⟨ψJ|ψJ⟩)

This is the variational energy using |ψJ⟩ as the trail wavefunction. After substituting the LCAO expansion for |ψJ⟩ (Equation (9.5.12)) into the energy expression of Equation (9.5.13) results in:

EJ = (⟨Σi c_(J, i)^*φi|Ĥ_elec|Σj c_(J, j) φj⟩)/(⟨Σi c_(J, i)^*φi|Σj c_(J, j) φj⟩)

[Note: corrected; the source prints "Ĥ_elec|Σj c_(J, i) φj⟩" where this reads "Ĥ_elec|Σj c_(J, j) φj⟩"; the source prints "(⟨Σi c_(J, i)^*φj|Σj" where this reads "(⟨Σi c_(J, i)^*φi|Σj". Each sum's coefficient carries its own index, as the next line has it.]

= (Σ_(i, j) c_(J, i)^*c_(J, j)⟨φi|Ĥ_elec|φj⟩)/(Σ_(i, j) c_(J, i)^*c_(J, j)⟨φi|φj⟩)

= (Σ_(i, j) c_(J, i)^*c_(J, j) H_ij)/(Σ_(i, j) c_(J, i)^*c_(J, j) S_ij)

where H_ij is the Hamiltonian matrix element.

H_ij = ⟨φi|Ĥ_elec|φj⟩

Following the variational theorem, to determine the coefficients of the LCAO expansion ci, we need to minimize EJ

(∂EJ)/(∂ck) = 0

for all k. This requires solving N linear equations to hold true (where N is the number of atomic orbitals in the basis)

Σ_(i=1)^N ci(H_ki − ES_ki) = 0

These equations are the secular equations and were discussed previously in the context of the linear variational method approximation. For the two basis set expansion (N) in Figure 9.5.1 , these are

c1(H11 − ES11) + c2(H12 − ES12) = 0

c1(H12 − ES12) + c2(H22 − ES22) = 0

where c1 and c2 are the coefficients in the linear combination of the atomic orbitals used to construct the molecular orbital. Writing this set of homogeneous linear equations in matrix form gives

(H11 − ES11, H12 − ES12; H12 − ES12, H22 − ES22)(c1; c2) = (0; 0)

Solving these secular equations with N different atomic orbitals in the expansion (Equation (9.5.12)) requires finding the N roots of an N order polynomial.

|H11 − ES11, H12 − ES12, …; H12 − ES12, H22 − ES22, …; …, …, …| = 0

Each molecular orbital (|ψJ⟩) from this treatment has an energy EJ that is given by a different set of coefficients, {c_ij} where i runs over all N functions in the basis (i.e., number of the atomic orbitals in the LCAO approximation of Equation (9.5.12)), and J runs over molecular orbitals. Solve the set of linear equations using that specific EJ to determine c_ij values.

### Steps in a Solving the Secular Equations

1. Select a set of N basis functions
2. Determine all N(N + 1)/2 values of both H_ij and S_ij
3. Form the secular determinant; determine N roots Ej of secular equation
4. For each EJ solve the set of linear equations to determine the basis set coefficients c_ij for the j-th molecular orbital

[Note: corrected; the source prints "all N( N –1)/2 values" where this reads "all N(N + 1)/2 values". The diagonal elements are needed too: for N = 2, H11, H22 and H12.]

[Note: corrected; the source prints "coefficients \(c_{ij\}) for" where this reads "coefficients c_ij for". The source's TeX is broken here.]

For more information on solving the Secular equations check here.

The greater the number of atomic orbitals N that combine to genera the molecular orbitals (Equation (9.5.12)), the more accurate the LCAO approximation is. This is expected based on our discussions of the variational method examples. Hence, the ψ_(+) and ψ_(−) molecular orbitals for H2^+ are better expressed with higher energy hydrogenic wavefunctions

|ψJ⟩ = c_(J, 1) 1sA + c_(J, 2) 1sB + c_(J, 3) 2sA + c_(J, 4) 2sB + c_(J, 5) 2p_(z, A) + c_(J, 6) 2p_(z, B)

The reasons that only the pz atomic orbitals are included in this expansion are discussed later.

## Contributors and Attributions

- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("Quantum States of Atoms and Molecules")
