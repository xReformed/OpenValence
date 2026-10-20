---
title: "9.4: Chemical Bond Stability"
book: "Physical Chemistry (LibreTexts)"
chapter: "9: Chemical Bonding in Diatomic Molecules"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09%3A_Chemical_Bonding_in_Diatomic_Molecules/9.04%3A_Chemical_Bond_Stability"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Identify the nature of the energy of molecular orbitals of a diatomic as a function of internuclear distance
- Identify the three integrals involved in calculation the total Molecular Orbital Energy: coulomb Integral, exchange integral, and overlap integral

[Note: corrected; the source prints "as a function of intermolecular distance" where this reads "as a function of internuclear distance". The distance between the nuclei.]

As shown previously, we can construct two molecular orbitals for the H2^+ system using the LCAO approximation with a basis set of two 1s atomic orbitals (i.e., the 1s orbitals on hydrogen A (1sA) and hydrogen B (1sB):

|ψ_±⟩ = (1/(√(2(1±S))))(1 sA±1sB)

The energy of these two molecular orbitals can be calculated from the expectation value integral of the Hamiltonian,

E_± = ⟨ψ_±|Ĥ_elec|ψ_±⟩

which can be expanded using the expanded molecular orbital wavefunctions in Equations (9.3.7a) to give

E_± = (1/(2(1±S)))[⟨1sA|Ĥ_elec|1sA⟩ (H_AA) + ⟨1sB|Ĥ_elec|1sB⟩ (H_BB)±⟨1sA|Ĥ_elec|1sB⟩ (H_AB)±⟨1sB|Ĥ_elec|1sA⟩ (H_BA)]

where S is the overlap integral between the two atomic orbitals of the basis. The four integrals in Equation (9.4.2a) can be represented by H_AA, H_BB, H_AB, and H_BA, respectively.

E_± = (1/(2(1±S)))[H_AA + H_BB±H_AB±H_BA]

### Exercise 9.4.1

Show that Equation (9.4.1) expands to give Equation (9.4.2a) within the LCAO approximation that uses a basis set of only two 1s atomic orbitals.

**Answer**

Here we have the wavefunction within the LCAO approximation that uses a basis set of only two 1s atomic orbitals (Equation (9.3.7a)).

|ψ_±⟩ = (1/(√(2(1±S))))(1sA±1sB)

[Note: corrected; the source prints "(1_Sa±1_Sb)" where this reads "(1sA±1sB)". The orbitals are 1sA and 1sB.]

And our LCAO approximation is equivalent to this if we plug in the wavefunction directly.

E_± = ⟨ψ_±|Ĥ|ψ_±⟩ = N^2⟨(1sA±1sB)|Ĥ|(1sA±1sB)⟩

[Note: corrected; the source prints "N^2⟨(1_Sa±1_Sb)|Ĥ|(1_Sa − 1_Sb)⟩" where this reads "N^2⟨(1sA±1sB)|Ĥ|(1sA±1sB)⟩". The orbitals are 1sA and 1sB, with the same sign in the bra and the ket.]

We can see form above that the normalization constant squared results in:

N^2 = 1/(2(1±S))

We now FOIL the mulitple (i.e., expaned term by term):

⟨1sA|Ĥ|1sA⟩ + ⟨1sB|Ĥ|1sB⟩±⟨1sA|Ĥ|1sB⟩±⟨1sB|Ĥ|1sA⟩

[Note: corrected; the source prints "⟨1_Sa|Ĥ|1_Sa⟩ + ⟨1_Sb|Ĥ|1_Sb⟩±⟨1_Sa|Ĥ|1_Sb⟩±⟨1_Sb|Ĥ|1_Sa⟩" where this reads "⟨1sA|Ĥ|1sA⟩ + ⟨1sB|Ĥ|1sB⟩±⟨1sA|Ĥ|1sB⟩±⟨1sB|Ĥ|1sA⟩". The orbitals are 1sA and 1sB.]

Now we can see this is now equivalent to Equation (9.4.2a) if the equation above is inserted (and adding a subscript to emphasize this only applies to the electronic wavefunction):

E_± = (1/(2(1±S)))[⟨1sA|Ĥ_elec|1sA⟩ (H_AA) + ⟨1sB|Ĥ_elec|1sB⟩ (H_BB)±⟨1sA|Ĥ_elec|1sB⟩ (H_AB)±⟨1sB|Ĥ_elec|1sA⟩ (H_BA)]

Notice that A and B appear equivalently in the Hamiltonian operator for H2^+. This equivalence means that integrals involving 1sA must be the same as corresponding integrals involving 1sB, i.e.

H_AA = H_BB

and since the wavefunctions are real

⟨1sA|Ĥ_elec|1sB⟩ = ⟨1sB|Ĥ_elec|1sA⟩^* = ⟨1sB|Ĥ_elec|1sA⟩

[Note: corrected; the source prints "|A⟩ = ⟨A|" where this reads "⟨1sA|Ĥ_elec|1sB⟩ = ⟨1sB|Ĥ_elec|1sA⟩^* = ⟨1sB|Ĥ_elec|1sA⟩". A ket does not equal a bra; what follows from Ĥ being Hermitian and the functions real is H_AB = H_BA.]

so

H_AB = H_BA

These two equalities simplify Equation (9.4.2b):

E_± = (1/(1±S))(H_AA±H_AB)

Now examine the details of H_AA after inserting the Hamiltonian operator for H2^+ (Equation 9.2.1):

H_AA = (⟨1sA|−(ħ^2/(2 m))∇^2 − e^2/(4πε0 rA)|1sA⟩) (EH) + (e^2/(4πε0 R))~~⟨1sA|1sA⟩~~ (→ 1)−⟨1sA|e^2/(4πε0 rB)|1sA⟩ (J_AB)

- The first term is just the integral for the energy of the hydrogen atom of the 1s orbital, EH.
- The second integral is equal to 1 by normalization; the prefactor is just the Coulomb repulsion of the two protons.
- The last integral, including the minus sign, is represented by J and is called the Coulomb integral.

Physically J_AB is the potential energy of interaction of the electron located around proton A with proton B. It is negative because it is an attractive interaction. It is the average interaction energy of an electron described by the 1sA function with proton B.

### The Coulomb Integral (J)

The Coulomb Integral is the potential energy of electrostatic attraction between the electron density in 1sA and proton B

[Note: corrected; the source prints "The Coulomb Integral is the potential energy of electrostatic repulsion between the electron with the electron density in 1SA and the the electron with the electron density function 1SB" where this reads "The Coulomb Integral is the potential energy of electrostatic attraction between the electron density in 1sA and proton B". H2^+ has one electron; J is the attraction of its 1sA density to the other proton, as said above.]

Now consider H_AB.

H_AB = (⟨1sA|−(ħ^2/(2 m))∇^2 − e^2/(4πε0 rB)|1sB⟩) (EH S) + (e^2/(4πε0 R))~~⟨1sA|1sB⟩~~ (→ S)−⟨1sA|e^2/(4πε0 rA)|1sB⟩ (K_AB)

- In the first integral we have the hydrogen atom Hamiltonian and the H atom function 1s_B. The function 1s_B is an eigenfunction of the operator with eigenvalue EH. Since EH is a constant it factors out of the integral, which then becomes the overlap integral, S. The first integral therefore reduces to EH S.
- The second term is just the Coulombic energy of the two protons times the overlap integral.
- The third term, including the minus sign, is given the symbol K and is called the exchange integral because the electron is described by the 1s_A orbital on one side and by the 1s_B orbital on the other side of the operator. The electron changes or exchanges position in the molecule.

### The Exchange Integral (K)

In a coulomb integral, the electron always is in the same orbital; whereas, in an Exchange Integral, the electron is in one orbital on one side of the operator and in a different orbital on the other side.

Using the expressions for H_AA (Equation (9.4.6)) and H_AB (Equation (9.4.7S)) and substituting into Equation (9.4.5) produces:

E_± = (1/(1±S))[(EH + e^2/(4πε0 R))(1±S) + J±K]

= EH + e^2/(4πε0 R) + (J±K)/(1±S)

Equation (9.4.9) tells us that the energy of the H2^+ molecule is the energy of a hydrogen atom plus the repulsive energy of two protons plus some additional electrostatic interactions of the electron with the protons. These additional interactions are given by the last term

(J±K)/(1±S).

If the protons are infinitely far apart then only EH is nonzero, which we can set to zero by subtracting off:

ΔE_± = E_±−EH

= e^2/(4πε0 R) + (J±K)/(1±S)

To get a chemical bond and a stable H2^+ molecule ΔE_± must be less than zero and have a minimum, i.e. (J±K)/(1±S) must be sufficiently negative to overcome the positive repulsive energy of the two protons e^2/(4πε0 R) for some value of R. For large R, these terms are zero, and for small R, the Coulomb repulsion of the protons rises to infinity.

### Exercise 9.4.2

Show that Equation 9.2.1 follows from Equation (9.4.5)

## The Coulomb and Exchange Integrals

We will examine more closely how the Coulomb repulsion term and the integrals J, K, and S depend on the separation of the protons, but first we want to discuss the physical significance of J, the Coulomb integral, and K, the exchange integral. J and K have been defined as

J_AB = ⟨1sA|(−e^2)/(4πε0 rB)|1sA⟩ = −∫φ_1sA^*(r)φ_1sA(r)(e^2/(4πε0 rB))dτ

K_AB = ⟨1sA|(−e^2)/(4πε0 rA)|1sB⟩ = −∫φ_1sA^*(r)φ_1sB(r)(e^2/(4πε0 rA))dτ

Figure 9.4.2 shows graphs of the four terms contributing to the energy of H2^+ (Equation (9.4.10)). In Figure 9.4.2 , you can see that as the internuclear distance R approaches zero,

- the Coulomb repulsion of the two protons goes from near zero to a large positive number,
- the overlap integral goes for zero to one, and
- J and K become increasingly negative.

Figure 9.4.2: (a) The electrostatic energy (in hartrees, 27.2 eV) of two protons separated by a distance R in units of the Bohr radius (52.92 pm). (b) The overlap (S), Coulomb (J), and exchange (K) integrals at different proton separations. The units for J and K are hartrees; S has no units. (CC BY-SA-NC; David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski via ChemEdDL)
Two graphs: the top shows a decreasing red curve, and the bottom shows three curves (red, green, blue) with varying trends.

Note that both J and K integrals are negative since all quantities in the integrands of Equation (9.4.11) and (9.4.12) are positive. In the Coulomb integral, eφ_1sA^*(r)φ_1sA(r) is the charge density of the electron around proton A, since r represents the coordinates of the electron relative to proton A. Since r_B is the distance of this electron to proton B, the Coulomb integral gives the potential energy of the charge density around proton A interacting with proton B. J can be interpreted as an average potential energy of this interaction because eφ_1sA^*(r)φ_1aA(r) is the probability density for the electron at point r, and e^2/(4πε0 rB) is the potential energy of the electron at that point due to the interaction with proton B. Essentially, J accounts for the attraction of proton B to the electron density of hydrogen atom A. As the two protons get further apart, this integral goes to zero because all values for r_B become very large and all values for 1/r_B become very small.

[Note: corrected; the source prints "eφ_1sA^*(r)φ_1aA(r) is the charge density" where this reads "eφ_1sA^*(r)φ_1sA(r) is the charge density". A typing error: 1sA.]

In the exchange integral, K, the product of the two functions is nonzero only in the regions of space where the two functions overlap. If one function is zero or very small at some point then the product will be zero or small. The exchange integral also approaches zero as internuclear distances increase because the both the overlap and the 1/r values become zero. The product eφ_1sA^*(r)φ_1sB(r) is called the overlap charge density. Since the overlap charge density is significant in the region of space between the two nuclei, it makes an important contribution to the chemical bond. The exchange integral, K, is the potential energy due to the interaction of the overlap charge density with one of the protons. While J accounts for the attraction of proton B to the electron density of hydrogen atom A, K accounts for the added attraction of the proton due the build-up of electron charge density between the two protons.

[Note: corrected; the source prints "eφ_1sA^*(r)φ_1aB(r)" where this reads "eφ_1sA^*(r)φ_1sB(r)". A typing error: 1sB.]

### Exercise 9.4.3

Write a paragraph describing in your own words the physical significance of the Coulomb and exchange integrals for H2^+.

Figure 9.4.3 shows the energy of H2^+ relative to the energy of a separated hydrogen atom and a proton as given by Equation (9.4.9). For the electron in the ψ_(−) orbital, the energy of the molecule, E_el(R), always is greater than the energy of the separated atom and proton.

Figure 9.4.3: Energy of the H2^+ bonding molecular orbital ΔE_(+) and the antibonding molecular orbital ΔE_(−), relative to the energy of a separated hydrogen atom and proton.
Graph showing two curves: one red decreasing sharply, the other blue leveling off over a range of values on the x-axis.

[Note: corrected; the source prints "and the molecular orbital ΔE_(−)" where this reads "and the antibonding molecular orbital ΔE_(−)". ΔE_(−) is the antibonding orbital's energy.]

For the electron in the ψ_(+) orbital, you can see that the big effect for the energy of the bonding orbital, E_(+)(R), is the balance between the repulsion of the two protons e^2/(4πε0 R) and J and K, which are both negative. J and K manage to compensate for the repulsion of the two protons until their separation is less than about 80 pm (i.e the energy is negative up until this point), and a minimum in the energy is produced at 132 pm. This minimum represents the formation of a chemical bond. The effect of S is small. It only causes the denominator in Equation (9.4.9) to increase from 1 to 2 as R approaches 0.

[Note: corrected; the source prints "less than 100 pm" where this reads "less than about 80 pm"; the source prints "produced at 134 pm" where this reads "produced at 132 pm". With the exact S, J and K, ΔE_(+) is negative below R = 1.52a0 (81 pm) and has its minimum at R = 2.49a0 (132 pm), with De = 1.76 eV.]

For the antibonding orbital, −K is a positive quantity and essentially cancels J so there is not sufficient compensation for the Coulomb repulsion of the protons. The effect of the -K in the expression, Equation (9.4.9), for E_(−) is to account for the absence of overlap charge density and the enhanced repulsion because the charge density between the protons for ψ_(−) is even lower than that given by the atomic orbitals.

## Contributors and Attributions

- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("Quantum States of Atoms and Molecules")
