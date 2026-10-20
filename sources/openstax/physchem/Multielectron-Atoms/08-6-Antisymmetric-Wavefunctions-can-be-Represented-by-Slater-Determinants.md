---
title: "8.6: Antisymmetric Wavefunctions can be Represented by Slater Determinants"
book: "Physical Chemistry (LibreTexts)"
chapter: "8: Multielectron Atoms"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08%3A_Multielectron_Atoms/8.06%3A_Antisymmetric_Wavefunctions_can_be_Represented_by_Slater_Determinants"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Understand how the Pauli Exclusion principle affects the electronic configuration of mulit-electron atoms
- Understand how determinantal wavefunctions (Slater determinents) ensure the proper symmetry to electron permutation required by Pauli Exclusion Principle.
- Connect the electron permutation symmetry requirement to multi-electron wavefunctions to the Aufbau principle taught in general chemistry courses

Let’s try to construct an antisymmetric function that describes the two electrons in the ground state of helium. Blindly following the first statement of the Pauli Exclusion Principle, then each electron in a multi-electron atom must be described by a different spin-orbital. For the ground-state helium atom, this gives a 1s^2 2s^0 2p^0 configuration (Figure 8.6.1 ).

Figure 8.6.1: Electron configuration for ground state of the helium atom.
Diagram showing electron energy levels: 1s at the bottom, followed by 2s, and 2p at the top with lines representing orbitals.

We try constructing a simple product wavefunction for helium using two different spin-orbitals. Both have the 1s spatial component, but one has spin function α and the other has spin function β so the product wavefunction matches the form of the ground state electron configuration for He, 1s^2.

|ψ(r1, r2)⟩ = φ_1s α(r1)φ_1s β(r2)

After permutation of the electrons, this becomes

|ψ(r2, r1)⟩ = φ_1s α(r2)φ_1s β(r1)

which is different from the starting function since φ_1sα and φ_1sβ are different spin-orbital functions. Hence, the simple product wavefunction in Equation (8.6.1) does not satisfy the indistinguishability requirement since an antisymmetric function must produce the same function multiplied by (–1) after permutation of two electrons, and that is not the case here. We must try something else.

To avoid getting a totally different function when we permute the electrons, we can make a linear combination of functions. A very simple way of taking a linear combination involves making a new function by simply adding or subtracting functions. The function that is created by subtracting the right-hand side of Equation (8.6.2) from the right-hand side of Equation (8.6.1) has the desired antisymmetric behavior. The constant on the right-hand side accounts for the fact that the total wavefunction must be normalized.

|ψ(r1, r2)⟩ = (1/(√2))[φ_1s α(r1)φ_1s β(r2) − φ_1s α(r2)φ_1s β(r1)]

In this orbital approximation, a single electron is held in a single spin-orbital with an orbital component (e.g., the 1s orbital) determined by the n, l, ml quantum numbers and a spin component determined by the ms quantum number.

The wavefunction in Equation (8.6.3) can be decomposed into spatial and spin components:

|ψ(r1, r2)⟩ = (1/(√2))[φ_1s(1)φ_1s(2)] (spatial component)[α(1)β(2) − α(2)β(1)] (spin component)

### Example 8.6.1 : Symmetry to Electron Permutation

Show that the linear combination of spin-orbitals in Equation (8.6.3) is antisymmetric with respect to permutation of the two electrons.

Hint

Replace the minus sign with a plus sign (i.e. take the positive linear combination of the same two functions) and show that the resultant linear combination is symmetric.

**Solution**

First a reminder of permutation symmetries:

- If the wavefunction is symmetric with respect to permutation of the two electrons then |ψ(r1, r2)⟩ = |ψ(r2, r1)⟩
- If the wavefunction is antisymmetric with respect to permutation of the two electrons then |ψ(r1, r2)⟩ = −|ψ(r2, r1)⟩

We start with the original wavefunction

|ψ(r1, r2)⟩ = (1/(√2))[φ_1sα(r1)φ_1sβ(r2) − φ_1sα(r2)φ_1sβ(r1)]

and flip the position of electron 1 with electron 2 and vice versa

|ψ(r2, r1)⟩ = (1/(√2))[φ_1sα(r2)φ_1sβ(r1) − φ_1sα(r1)φ_1sβ(r2)]

We then we ask if we can rearrange the left side of Equation (permute1) to either become + |ψ(r1, r2)⟩ (symmetric to permutation) or −|ψ(r1, r2)⟩ (antisymmetric to permutation).

|ψ(r2, r1)⟩ = (1/(√2))[−φ_1sα(r1)φ_1sβ(r2) + φ_1sα(r2)φ_1sβ(r1)]

or

|ψ(r2, r1)⟩ = −(1/(√2))[φ_1sα(r1)φ_1sβ(r2) − φ_1sα(r2)φ_1sβ(r1)]

This is just the negative of the original wavefunction, therefore

|ψ(r2, r1)⟩ = −|ψ(r1, r2)⟩

The wavefunction is antisymemtric.

### Exercise 8.6.1 : Symmetry

Is this linear combination of spin-orbitals

|ψ(r1, r2)⟩ = (1/(√2))[φ_1sα(r1)φ_1sβ(r2) + φ_1sα(r2)φ_1sβ(r1)]

symmetric or antisymmetric with respect to permutation of the two electrons?

**Answer**

Symmetric

The electronic configuration of the first excited state of He is 1s^1 2s^1 2p^0 and we can envision four microstates for this configuration (Figure 8.6.2 ). As spected, the wavefunctions associated for of these microstate must satisfy indistinguishability requirement just like the ground state.

Figure 8.6.2: Electron configurations for first-excited state of the helium atom.
Diagram showing various forms of horizontal and vertical lines with varying styles, marked with arrows and labels for clarity.

These electron configurations are used to construct four possible excited-state two-electron wavefunctions (but not necessarily in a one-to-one correspondence):

|ψ1(r1, r2)⟩ = (1/2)[φ_1s(1)φ_2s(2) + φ_1s(2)φ_2s(1)] (spatial component)[α(1)β(2) − α(2)β(1)] (spin component)

|ψ2(r1, r2)⟩ = (1/(√2))[φ_1s(1)φ_2s(2) − φ_1s(2)φ_2s(1)] (spatial component)[α(1)α(2)] (spin component)

|ψ3(r1, r2)⟩ = (1/2)[φ_1s(1)φ_2s(2) − φ_1s(2)φ_2s(1)] (spatial component)[α(1)β(2) + α(2)β(1)] (spin component)

[Note: corrected; the source prints "|ψ3(r1, r2)⟩ = (1/(√2))[" where this reads "|ψ3(r1, r2)⟩ = (1/2)[". Both brackets have two terms, so the normalization constant is 1/2.]

|ψ4(r1, r2)⟩ = (1/(√2))[φ_1s(1)φ_2s(2) − φ_1s(2)φ_2s(1)] (spatial component)[β(1)β(2)] (spin component)

[Note: corrected; the source prints "|ψ4(r1, r2)⟩ = (1/2)[" where this reads "|ψ4(r1, r2)⟩ = (1/(√2))[". The spin part β(1)β(2) is a single normalized term, so the constant is 1/√2.]

All four wavefunctions are antisymmetric as required for fermionic wavefunctions (which is left to an exercise). Wavefunctions |ψ2⟩ and |ψ4⟩ correspond to the two electrons both having spin up or both having spin down (Configurations 2 and 3 in Figure 8.6.2 , respectively). Wavefunctions |ψ1⟩ and |ψ3⟩ are more complicated and are antisymmetric (Configuration 1 - Configuration 4) and symmetric combinations (Configuration 1 + 4). That is, a single electron configuration does not describe the wavefunction. For many electrons, this ad hoc construction procedure would obviously become unwieldy. However, there is an elegant way to construct an antisymmetric wavefunction for a system of N identical particles.

## Determinantal Wavefunctions

A linear combination that describes an appropriately antisymmetrized multi-electron wavefunction for any desired orbital configuration is easy to construct for a two-electron system. However, interesting chemical systems usually contain more than two electrons. For these multi-electron systems a relatively simple scheme for constructing an antisymmetric wavefunction from a product of one-electron functions is to write the wavefunction in the form of a determinant. John Slater introduced this idea so the determinant is called a Slater determinant.

John C. Slater introduced the determinants in 1929 as a means of ensuring the antisymmetry of a wavefunction, however the determinantal wavefunction first appeared three years earlier independently in Heisenberg's and Dirac's papers.

The Slater determinant for the two-electron ground-state wavefunction of helium is

|ψ(r1, r2)⟩ = 1/(√2)|φ_1s(1)α(1), φ_1s(1)β(1); φ_1s(2)α(2), φ_1s(2)β(2)|

A shorthand notation for the determinant in Equation (8.6.4) is then

|ψ(r1, r2)⟩ = 2^(−1/2)Det|φ_1sα(r1)φ_1sβ(r2)|

The determinant is written so the electron coordinate changes in going from one row to the next, and the spin orbital changes in going from one column to the next. The advantage of having this recipe is clear if you try to construct an antisymmetric wavefunction that describes the orbital configuration for uranium! Note that the normalization constant is (N!)^(−1/2) for N electrons.

The generalized Slater determinant for a multi-electrom atom with N electrons is then

ψ(r1, r2, …, rN) = 1/(√(N!))|(φ1(r1), φ2(r1), …, φN(r1); φ1(r2), φ2(r2), …, φN(r2); ⋮, ⋮, ⋱, ⋮; φ1(rN), φ2(rN), …, φN(rN))|

### Example 8.6.2 : Helium Atom

Expand the Slater determinant in Equation (8.6.4) for the He atom.

**Solution**

To expand the Slater determinant of the Helium atom, the wavefunction in the form of a two-electron system:

|ψ(r1, r2)⟩ = 1/(√2)|φ_1s(1)α(1), φ_1s(1)β(1); φ_1s(2)α(2), φ_1s(2)β(2)|

This is a simple expansion exercise of a 2 × 2 determinant

|ψ(r1, r2)⟩ = (1/(√2))[φ_1s(1)α(1)φ_1s(2)β(2) − φ_1s(2)α(2)φ_1s(1)β(1)]

It is not unexpected that the determinant wavefunction in Equation (8.6.4) is the same as the form for the helium wavefunction that is given in Equation (8.6.3).

### Exercise 8.6.2 : Lithium Atom

Write and expand the Slater determinant for the ground-state Li atom.

**Answer**

Slater determinant for Li atom:

ψ(1,2,3) = (1/(√6))det(φ_1s α(1), φ_1s β(1), φ_2s α(1); φ_1s α(2), φ_1s β(2), φ_2s α(2); φ_1s α(3), φ_1s β(3), φ_2s α(3))

Expansion of Slater determinant:

ψ(1,2,3) = (1/(√6))[φ_1s α(1)φ_1s β(2)φ_2s α(3) − φ_1s α(1)φ_1s β(3)φ_2s α(2) − φ_1s α(2)φ_1s β(1)φ_2s α(3) + φ_1s α(2)φ_1s β(3)φ_2s α(1) + φ_1s α(3)φ_1s β(1)φ_2s α(2) − φ_1s α(3)φ_1s β(2)φ_2s α(1)]

[Note: corrected; the source prints "(1/(√6))[φ_1s α(1)φ_1s β(2)φ_2s α(3) − φ_1s α(1)φ_1s β(3)φ_2s α(2) + φ_1s α(3)φ_1s β(1)φ_2s α(2) − φ_1s α(3)φ_1s β(2)φ_1s α(1) + φ_1s α(2)φ_1s β(3)φ_2s α(3)]" where this reads "(1/(√6))[φ_1s α(1)φ_1s β(2)φ_2s α(3) − φ_1s α(1)φ_1s β(3)φ_2s α(2) − φ_1s α(2)φ_1s β(1)φ_2s α(3) + φ_1s α(2)φ_1s β(3)φ_2s α(1) + φ_1s α(3)φ_1s β(1)φ_2s α(2) − φ_1s α(3)φ_1s β(2)φ_2s α(1)]". A 3 × 3 determinant has six terms, one per permutation of the three electrons; the source leaves out −φ1sα(2)φ1sβ(1)φ2sα(3) and has φ1sα(1) and φ2sα(3) where φ2sα(1) belongs.]

Note that this is also a valid ground state wavefunction

ψ(1,2,3) = (1/(√6))det(φ_1s α(1), φ_1s β(1), φ_2s β(1); φ_1s α(2), φ_1s β(2), φ_2s β(2); φ_1s α(3), φ_1s β(3), φ_2s β(3))

What is the difference between these two wavefunctions?

Now that we have seen how acceptable multi-electron wavefunctions can be constructed, it is time to revisit the “guide” statement of conceptual understanding with which we began our deeper consideration of electron indistinguishability and the Pauli Exclusion Principle. What does a multi-electron wavefunction constructed by taking specific linear combinations of product wavefunctions mean for our physical picture of the electrons in multi-electron atoms? Overall, the antisymmetrized product function describes the configuration (the orbitals, regions of electron density) for the multi-electron atom. Because of the requirement that electrons be indistinguishable, we cannot visualize specific electrons assigned to specific spin-orbitals. Instead, we construct functions that allow each electron’s probability distribution to be dispersed across each spin-orbital. The total charge density described by any one spin-orbital cannot exceed one electron’s worth of charge, and each electron in the system is contributing a portion of that charge density.

The four configurations in Figure 8.6.2 for first-excited state of the helium atom can be expressed as the following Slater Determinants

|φa(r1, r2)⟩ = 1/(√2)|φ_1s(1)α(1), φ_2s(1)β(1); φ_1s(2)α(2), φ_2s(2)β(2)|

|φb(r1, r2)⟩ = 1/(√2)|φ_1s(1)α(1), φ_2s(1)α(1); φ_1s(2)α(2), φ_2s(2)α(2)|

|φc(r1, r2)⟩ = 1/(√2)|φ_1s(1)β(1), φ_2s(1)α(1); φ_1s(2)β(2), φ_2s(2)α(2)|

|φd(r1, r2)⟩ = 1/(√2)|φ_1s(1)β(1), φ_2s(1)β(1); φ_1s(2)β(2), φ_2s(2)β(2)|

Slater determinants are constructed by arranging spinorbitals in columns and electron labels in rows and are normalized by dividing by √(N!), where N is the number of occupied spinorbitals. As you can imagine, the algebra required to compute integrals involving Slater determinants is extremely difficult. It is therefore most important that you realize several things about these states so that you can avoid unnecessary algebra:

- A Slater determinant corresponds to a single electron configuration diagram (Figure 8.6.2 ). Furthermore, recall that for the excited states of helium we had a problem writing certain stick diagrams as a (space)x(spin) product and had to make linear combinations of certain states to force things to separate (Equation (8.6.3C2) and (8.6.3C4)). Because of the direct correspondence of configuration diagrams and Slater determinants, the same pitfall arises here: Slater determinants sometimes may not be representable as a (space)x(spin) product, in which case a linear combination of Slater determinants must be used instead. This generally only happens for systems with unpaired electrons (like several of the Helium excited-states).
- A Slater determinant is anti-symmetric upon exchange of any two electrons. We recall that if we take a matrix and interchange two its rows, the determinant changes sign.

The wavefunctions in (8.6.3C1)-(8.6.3C4) can be expressed in term of the four determinants in Equations (8.6.10A)-(8.6.10C).

|ψ2⟩ = |φb⟩

= 1/(√2)|φ_1s(1)α(1), φ_2s(1)α(1); φ_1s(2)α(2), φ_2s(2)α(2)|

|ψ4⟩ = |φd⟩

= 1/(√2)|φ_1s(1)β(1), φ_2s(1)β(1); φ_1s(2)β(2), φ_2s(2)β(2)|

but the wavefunctions that represent combinations of spinorbitals and hence combinations of electron configurations (e.g., igure 8.6.2 ) are combinations of Slater determinants (Equation (8.6.10A)-(8.6.10D))

|ψ1⟩ = (1/(√2))(|φa⟩−|φc⟩)

[Note: corrected; the source prints "|ψ1⟩ = |φa⟩−|φc⟩" where this reads "|ψ1⟩ = (1/(√2))(|φa⟩−|φc⟩)". φa and φc are normalized and orthogonal, so their difference needs a factor 1/√2.]

= (1/2)(|φ_1s(1)α(1), φ_2s(1)β(1); φ_1s(2)α(2), φ_2s(2)β(2)|−|φ_1s(1)β(1), φ_2s(1)α(1); φ_1s(2)β(2), φ_2s(2)α(2)|)

|ψ3⟩ = (1/(√2))(|φa⟩ + |φc⟩)

[Note: corrected; the source prints "|ψ3⟩ = |φa⟩ + |φc⟩" where this reads "|ψ3⟩ = (1/(√2))(|φa⟩ + |φc⟩)". The sum also needs a factor 1/√2.]

= (1/2)(|φ_1s(1)α(1), φ_2s(1)β(1); φ_1s(2)α(2), φ_2s(2)β(2)| + |φ_1s(1)β(1), φ_2s(1)α(1); φ_1s(2)β(2), φ_2s(2)α(2)|)

Note the expected change in the normalization constants.

### Example 8.6.3 : Carbon Atom

Write the Slater determinant for the ground-state carbon atom. If you expanded this determinant, how many terms would be in the linear combination of functions?

**Solution**

Carbon has 6 electrons which occupy the 1s 2s and 2p orbitals. Each row in the determinant represents a different electron and each column a unique spin-obital where the electron could be found. There are 6 rows, 1 for each electron, and 6 columns, with the two possible p orbitals both alpha (spin up), in the determinate. There are two columns for each s orbital to account for the alpha and beta spin possibilities. There are two different p orbitals because the electrons in their ground state will be in the different p orbitals and both spin up. N=6 so the normalization constant out front is 1 divided by the square-root of 6!

ψ(1,2,3,4,5,6) = 1/(6!^(1/2))|φ_1s(1)α(1), φ_1s(1)β(1), φ_2s(1)α(1), φ_2s(1)β(1), φ_2px(1)α(1), φ_2py(1)α(1); φ_1s(2)α(2), φ_1s(2)β(2), φ_2s(2)α(2), φ_2s(2)β(2), φ_2px(2)α(2), φ_2py(2)α(2); φ_1s(3)α(3), φ_1s(3)β(3), φ_2s(3)α(3), φ_2s(3)β(3), φ_2px(3)α(3), φ_2py(3)α(3); φ_1s(4)α(4), φ_1s(4)β(4), φ_2s(4)α(4), φ_2s(4)β(4), φ_2px(4)α(4), φ_2py(4)α(4); φ_1s(5)α(5), φ_1s(5)β(5), φ_2s(5)α(5), φ_2s(5)β(5), φ_2px(5)α(5), φ_2py(5)α(5); φ_1s(6)α(6), φ_1s(6)β(6), φ_2s(6)α(6), φ_2s(6)β(6), φ_2px(6)α(6), φ_2py(6)α(6)|

Expanding this determinant would result in a linear combination of functions containing 720 terms. An expanded determinant will contain N! factorial terms, where N is the dimension of the matrix.

### Exercise 8.6.3A: Excited-State of Helium Atom

Write the Slater determinant for the 1s^1 2s^1 excited state orbital configuration of the helium atom.

**Answer**

Since there are 2 electrons in question, the Slater determinant should have 2 rows and 2 columns exactly. Additionally, this means the normalization constant is 1/√2.

Each element of the determinant is a different combination of the spatial component and the spin component of the 1s^1 2s^1 atomic orbitals

(1/(√2))[φ_1s(1)α(1), φ2 s(1)β(1); φ1 s(2)α(2), φ2 s(2)β(2)]

### Exercise 8.6.3B

Critique the energy level diagram and shorthand electron configuration notation from the perspective of the indistinguishability criterion. Can you imagine a way to represent the wavefunction expressed as a Slater determinant in a schematic or shorthand notation that more accurately represents the electrons? (This is not a solved problem!)
