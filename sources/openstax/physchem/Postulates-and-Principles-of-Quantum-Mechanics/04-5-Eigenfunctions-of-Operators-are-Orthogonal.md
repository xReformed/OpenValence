---
title: "4.5: Eigenfunctions of Operators are Orthogonal"
book: "Physical Chemistry (LibreTexts)"
chapter: "4: Postulates and Principles of Quantum Mechanics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/04%3A_Postulates_and_Principles_of_Quantum_Mechanics/4.05%3A_Eigenfunctions_of_Operators_are_Orthogonal"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Understand the properties of a Hermitian operator and their associated eigenstates
- Recognize that all experimental obervables are obtained by Hermitian operators

Consideration of the quantum mechanical description of the particle-in-a-box exposed two important properties of quantum mechanical systems. We saw that the eigenfunctions of the Hamiltonian operator are orthogonal, and we also saw that the position and momentum of the particle could not be determined exactly. We now examine the generality of these insights by stating and proving some fundamental theorems. These theorems use the Hermitian property of quantum mechanical operators that correspond to observables, which is discuss first.

## Hermitian Operators

Since the eigenvalues of a quantum mechanical operator correspond to measurable quantities, the eigenvalues must be real, and consequently a quantum mechanical operator must be Hermitian. To prove this, we start with the premises that ψ and φ are functions, ∫dτ represents integration over all coordinates, and the operator Â is Hermitian by definition if

∫ψ^*Âψ dτ = ∫(Â^*ψ^*)ψ dτ

[Note: a Hermitian operator is defined with two functions, ∫ψ^*Âφ dτ = ∫(Â^*ψ^*)φ dτ, as the sentence below describes. And it is because quantum mechanical operators are Hermitian that their eigenvalues are real, not the other way round: an operator with real eigenvalues need not be Hermitian. The text is left as printed.]

This equation means that the complex conjugate of Â can operate on ψ^* to produce the same result after integration as Â operating on φ, followed by integration. To prove that a quantum mechanical operator Â is Hermitian, consider the eigenvalue equation and its complex conjugate.

Âψ = aψ

Â^*ψ^* = a^*ψ^* = aψ^*

Note that a^* = a because the eigenvalue is real. Multiply Equation (4-38) and (4-39) from the left by ψ^* and ψ, respectively, and integrate over the full range of all the coordinates. Note that ψ is normalized. The results are

∫ψ^*Âψ dτ = a∫ψ^*ψ dτ = a

∫ψÂ^*ψ^* dτ = a∫ψψ^* dτ = a

Since both integrals equal a, they must be equivalent.

∫ψ^*Âψ dτ = ∫ψÂ^*ψ^* dτ

The operator acting on the function,

Â^*∫ψ^*Âψ dτ = ∫ψÂ^*ψ^* dτ_*

produces a new function. Since functions commute, Equation (4-42) can be rewritten as

∫ψ^*Âψdτ = ∫(Â^*ψ^*)ψdτ

This equality means that Â is Hermitian.

### Orthogonality Theorem

Eigenfunctions of a Hermitian operator are orthogonal if they have different eigenvalues.

Because of this theorem, we can identify orthogonal functions easily without having to integrate or conduct an analysis based on symmetry or other considerations.

### Proof

ψ and φ are two eigenfunctions of the operator Â with real eigenvalues a1 and a2, respectively. Since the eigenvalues are real, a1^* = a1 and a2^* = a2.

Âψ = a1ψ

Â^*ψ^* = a2ψ^*

Multiply the first equation by φ^* and the second by ψ and integrate.

∫ψ^*Âψ dτ = a1∫ψ^*ψ dτ

∫ψÂ^*ψ^* dτ = a2∫ψψ^* dτ

Subtract the two equations in Equation (4-45) to obtain

∫ψ^*Âψ dτ−∫ψÂ^*ψ^* dτ = (a1 − a2)∫ψ^*ψ dτ

The left-hand side of Equation (4-46) is zero because Â is Hermitian yielding

0 = (a1 − a2)∫ψ^*ψ dτ

[Note: the second eigenfunction, φ, is written ψ throughout these equations. They should read Â^*φ^* = a2φ^*, ∫φ^*Âψ dτ = a1∫φ^*ψ dτ, ∫ψÂ^*φ^* dτ = a2∫ψφ^* dτ and 0 = (a1 − a2)∫φ^*ψ dτ; as printed, the last would make a normalized ψ orthogonal to itself. The text is left as printed.]

If a1 and a2 in Equation (4-47) are not equal, then the integral must be zero. This result proves that nondegenerate eigenfunctions of the same operator are orthogonal.

□

Two wavefunctions, ψ1(x) and ψ2(x), are said to be orthogonal if

∫_−∞^∞ ψ1^*ψ2 dx = 0.

Consider two eigenstates of Â, ψa(x) and ψ_a'(x), which correspond to the two different eigenvalues a and a', respectively. Thus,

Aψa = aψa

Aψa' = a'ψa'

Multiplying the complex conjugate of the first equation by ψ_a'(x), and the second equation by ψa^*(x), and then integrating over all x, we obtain

[Note: corrected; the source prints "the second equation by ψ_a'^*(x)" where this reads "the second equation by ψa^*(x)". The second equation is multiplied by ψa^*, as the next equation shows.]

∫_−∞^∞ (Aψa)^*ψ_a' dx = a∫_−∞^∞ ψa^*ψ_a' dx,

∫_−∞^∞ ψa^*(Aψ_a')dx = a'∫_−∞^∞ ψa^*ψ_a' dx.

However, from Equation (4-46), the left-hand sides of the above two equations are equal. Hence, we can write

(a − a')∫_−∞^∞ ψa^*ψ_a' dx = 0.

By assumption, a ≠ a', yielding

∫_−∞^∞ ψa^*ψ_a' dx = 0.

In other words, eigenstates of an Hermitian operator corresponding to different eigenvalues are automatically orthogonal.

The eigenvalues of operators associated with experimental measurements are all real.

### Example4.5.1

Draw graphs and use them to show that the particle-in-a-box wavefunctions for ψ(n = 2) and ψ(n = 3) are orthogonal to each other.

**Solution**

The two PIB wavefunctions are qualitatively similar when plotted

[Image: Graph showing two sinusoidal curves plotted against a variable labeled "L," with y-values ranging from -1 to 1.]

These wavefunctions are orthogonal when

∫_−∞^∞ ψ(n = 2)ψ(n = 3)dx = 0

and when the PIB wavefunctions are substituted this integral becomes

∫0^L √(2/L) sin((2πx)/L)√(2/L) sin((3πx)/L)dx = ?

[Note: corrected; the source prints "sin(((2 n)/L)x)√(2/L) sin(((2 n)/L)x)dx" where this reads "sin((2πx)/L)√(2/L) sin((3πx)/L)dx". The two wavefunctions are ψ2 and ψ3.]

(2/L)∫0^L sin((2πx)/L) sin((3πx)/L)dx = ?

[Note: corrected; the source prints "sin((2/L)x) sin((3/L)x) = ?" where this reads "sin((2πx)/L) sin((3πx)/L)dx = ?". The arguments are 2πx/L and 3πx/L; without π the integral is not zero.]

We can expand the integrand using trigonometric identities to help solve the integral, but it is easier to take advantage of the symmetry of the integrand, specifically, the ψ(n = 2) wavefunction is odd (blue curves in above figure) and the ψ(n = 3) is even (purple curve). Their product (even times odd) is an odd function and the integral over an odd function is zero. Therefore ψ(n = 2) and ψ(n = 3) wavefunctions are orthogonal.

[Note: corrected; the source prints "the ψ(n = 2) wavefunction is even" where this reads "the ψ(n = 2) wavefunction is odd"; the source prints "the ψ(n = 3) is odd" where this reads "the ψ(n = 3) is even". About the centre of the box, x = L/2, ψ2 is odd and ψ3 is even; their product is odd, so the integral is zero.]

This can be repeated an infinite number of times to confirm the entire set of PIB wavefunctions are mutually orthogonal as the Orthogonality Theorem guarantees.

## Orthogonality of Degenerate Eigenstates

Consider two eigenstates of Â, ψa and ψ'a, which correspond to the same eigenvalue, a. Such eigenstates are termed degenerate. The above proof of the orthogonality of different eigenstates fails for degenerate eigenstates. Note, however, that any linear combination of ψa and ψ'a is also an eigenstate of Â corresponding to the eigenvalue a. Thus, even if ψa and ψ'a are not orthogonal, we can always choose two linear combinations of these eigenstates which are orthogonal. For instance, if ψa and ψ'a are properly normalized, we can define the overlap integral

S = ∫_−∞^∞ ψa^*ψa'dx,

It is easily demonstrated (but not here) that

ψa'' = ((|S|)/(√(1−|S|^2)))(ψa − S^−1ψa')

is a properly normalized eigenstate of Â, corresponding to the eigenvalue a, which is orthogonal to ψa. It is straightforward to generalize the above argument to three or more degenerate eigenstates. Hence, we conclude that the eigenstates of a Hermitian operator are, or can be chosen to be, mutually orthogonal.

### Theorem: Gram-Schmidt Orthogonalization

Degenerate eigenfunctions are not automatically orthogonal, but can be made so mathematically via the Gram-Schmidt Orthogonalization.

The above theorem argues that if the eigenvalues of two eigenfunctions are the same then the functions are said to be degenerate and linear combinations of the degenerate functions can be formed that will be orthogonal to each other. Since the two eigenfunctions have the same eigenvalues, the linear combination also will be an eigenfunction with the same eigenvalue. The proof of this theorem shows us one way to produce orthogonal degenerate functions.

### Proof

If ψa and ψ'a are degenerate, but not orthogonal, we can define a new composite wavefunction ψa'' = ψ'a − Sψa where S is the overlap integral:

S = ⟨ψa|ψ'a⟩

then ψa and ψa'' will be orthogonal.

⟨ψa|ψa''⟩ = ⟨ψa|ψ'a − Sψa⟩

= ~~⟨ψa|ψ'a⟩~~ (→ S) − S~~⟨ψa|ψa⟩~~ (→ 1)

= S − S = 0

∫ψa^*ψa dτ

then ψa and Φ will be orthogonal.

[Note: this line and the ones after it, from ∫ψa^*ψa dτ on, repeat the proof above in other symbols: Φ is ψa'' and ψA is ψa. The text is left as printed.]

∫ψA^*Φdτ = ∫ψa^*(ψ'a − Sψa)dτ

= ∫ψa^*ψ'a dτ − S∫ψa^*ψa dτ

= S − S = 0

□

### Exercise 4.5.2

Find N that normalizes ψ if ψ = N(φ1 − Sφ2) where φ1 and φ2 are normalized wavefunctions and S is their overlap integral.

S = ⟨φ1|φ2⟩

**Answer**

Remember that to normalize an arbitrary wavefunction, we find a constant N such that ⟨ψ|ψ⟩ = 1. This equates to the following procedure:

⟨ψ|ψ⟩ = ⟨N(φ1 − Sφ2)|N(φ1 − Sφ2)⟩ = 1

N^2⟨(φ1 − Sφ2)|(φ1 − Sφ2)⟩ = 1

N^2[~~⟨φ1|φ1⟩~~ (→ 1) − S~~⟨φ2|φ1⟩~~ (→ S) − S~~⟨φ1|φ2⟩~~ (→ S) + S^2 ~~⟨φ2|φ2⟩~~ (→ 1)] = 1

N^2(1 − S^2 ~~−S^2~~ + ~~S^2~~) = 1

N^2(1 − S^2) = 1

therefore

N = 1/(√(1 − S^2))

We conclude that the eigenstates of operators are, or can be chosen to be, mutually orthogonal.

## Contributors and Attributions

- Richard Fitzpatrick (Professor of Physics, The University of Texas at Austin)
