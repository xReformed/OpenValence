---
title: "4.3: Observable Quantities Must Be Eigenvalues of Quantum Mechanical Operators"
book: "Physical Chemistry (LibreTexts)"
chapter: "4: Postulates and Principles of Quantum Mechanics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/04%3A_Postulates_and_Principles_of_Quantum_Mechanics/4.03%3A_Observable_Quantities_Must_Be_Eigenvalues_of_Quantum_Mechanical_Operators"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- To be introduced to the role of eigenvalue equations in obtaining observables from a system
- Understand how expectation values are calculated if the wavefunctions is not an eigenstate of the operator for the observable.

Recall, that we can identify the total energy operator, which is called the Hamiltonian operator, Ĥ, as consisting of the kinetic energy operator plus the potential energy operator.

Ĥ = −(ħ^2/(2 m))∇^2 + V̂(x, y, z)

Using this notation, we write the Schrödinger Equation as

Ĥ|ψ(x, y, z)⟩ = E|ψ(x, y, z)⟩

Equation (3-23) says that the Hamiltonian operator operates on the wavefunction to produce the energy, which is a number, (a quantity of Joules), times the wavefunction. Such an equation, where the operator, operating on a function, produces a constant times the function, is called an eigenvalue equation. The function is called an eigenfunction, and the resulting numerical value is called the eigenvalue. Eigen here is the German word meaning self or own.

It is a general principle of Quantum Mechanics that there is an operator for every physical observable. A physical observable is anything that can be measured. If the wavefunction that describes a system is an eigenfunction of an operator, then the value of the associated observable is extracted from the eigenfunction by operating on the eigenfunction with the appropriate operator. The value of the observable for the system is the eigenvalue, and the system is said to be in an eigenstate. Equation (3-23) states this principle mathematically for the case of energy as the observable.

### Postulate III: Obtaining Observables Requires Solving Eigenvalue Problems

If a system is described by the eigenfunction Ψ of an operator Â then the value measured for the observable property corresponding to Â will always be the eigenvalue a, which can be calculated from the eigenvalue equation.

Â|Ψ⟩ = a|Ψ⟩

Consider a general real-space operator A(x). When this operator acts on a general wavefunction ψ(x) the result is usually a wavefunction with a completely different shape. However, there are certain special wavefunctions which are such that when A acts on them the result is just a multiple of the original wavefunction. These special wavefunctions are called eigenstates, and the multiples are called eigenvalues. Thus, if

A|ψa(x)⟩ = a|ψa(x)⟩

where a is a complex number, then ψa is called an eigenstate of A corresponding to the eigenvalue a.

Suppose that A is an operator corresponding to some physical dynamical variable. Consider a particle whose wavefunction is ψa. The expectation of value A in this state is simply

⟨A⟩ = ∫_−∞^∞ ψa^*Aψa dx

= a∫_−∞^∞ ψa^*ψa dx

= a.

where use has been made of Equation (4.3.2) and the normalization condition. Moreover,

⟨A^2⟩ = ∫_−∞^∞ ψa^*A^2ψa dx

= a∫_−∞^∞ ψa^*Aψa dx

= a^2∫_−∞^∞ ψa^*ψa dx

= a^2.

So the variance of A is

σA^2 = ⟨A^2⟩−⟨A⟩^2 = a^2 − a^2

= 0.

The fact that the variance is zero implies that every measurement of A is bound to yield the same result: namely, a. Thus, the eigenstate ψa is a state which is associated with a unique value of the dynamical variable corresponding to A. This unique value is simply the associated eigenvalue determined by Equation (4.3.2).

## Expectation Values

We have seen that |ψ(x, t)|^2 is the probability density of a measurement of a particle's displacement yielding the value x at time t. Suppose that we made a large number of independent measurements of the displacement on an equally large number of identical quantum systems. In general, measurements made on different systems will yield different results. However, from the definition of probability, the mean of all these results is simply

⟨x⟩ = ∫_−∞^∞ x|ψ|^2 dx

Here, ⟨x⟩ is called the expectation value of x. Similarly the expectation value of any function of x is

⟨f(x)⟩ = ∫_−∞^∞ f(x)|ψ|^2 dx.

### Postulate IV

The average value of an observable measurement of a state in (normalized) wavefunction ψ with operator Â is given by the expectation value ⟨a⟩:

⟨a⟩ = ⟨ψ|Â|ψ⟩

[Note: corrected; the source prints "⟨a⟩ = ⟨ψ|a|ψ⟩" where this reads "⟨a⟩ = ⟨ψ|Â|ψ⟩". The operator Â goes between the bra and the ket, as in the integral below.]

= ∫_−∞^∞ ψ^*Âψdx

If an unnormalized wavefunction where used, then Equation (4.3.7) changes to

⟨a⟩ = (⟨ψ|Â|ψ⟩)/(⟨ψ|ψ⟩)

[Note: corrected; the source prints "(⟨ψ|a|ψ⟩)/(⟨ψ|ψ⟩)" where this reads "(⟨ψ|Â|ψ⟩)/(⟨ψ|ψ⟩)". The operator Â goes in the numerator.]

= (∫_−∞^∞ ψ^*Âψdx)/(∫_−∞^∞ ψ^*ψdx)

The denominator is just the normalization requirement discussed earlier. In general, the results of the various different measurements of x will be scattered around the expectation value ⟨x⟩. The degree of scatter is parameterized by the quantity

σx^2 = ∫_−∞^∞ (x−⟨x⟩)^2|ψ|^2 dx

≡ ⟨x^2⟩−⟨x⟩^2,

which is known as the variance of x. The square-root of this quantity, σx, is called the standard deviation of x. We generally expect the results of measurements of x to lie within a few standard deviations of the expectation value (Figure 4.3.1 ).

Figure 4.3.1: A plot of a normal distribution (or bell-shaped curve) where each band has a width of 1 standard deviation. image usd with permission from Wikipedia.
Normal distribution curve with percentages: 34.1% in the middle, flanked by 13.6% on each side. Vertical lines indicate sections.

### Example 4.3.1

For a particle in a box in its ground state, calculate the expectation value of the

a. position,
b. the linear momentum,
c. the kinetic energy, and
d. the total energy

**Solution**

First the wavefunction needs to be defined. From the particle in the box solutions, the ground state wavefunction (n = 1) is

ψ = √(2/L) sin((πx)/L)

We can confirm that the wavefunction is normalized.

∫ψ^*ψ dτ = ∫0^L √(2/L) sin((πx)/L)√(2/L) sin((πx)/L) dx = 1

Hence, the Equation (4.3.7) is the relevant equation to use.

**Solution a**

The expectation value of the position is:

⟨x⟩ = ∫ψ^*xψ dτ = ∫0^L √(2/L)x sin((πx)/L)√(2/L) sin((πx)/L) dx

= (2/L)∫0^L x sin^2((πx)/L) dx

= L/2

**Solution b**

The expectation value of the momentum is:

⟨p⟩ = ∫ψ^*p̂ψ dτ = ∫0^L √(2/L) sin((πx)/L)(−iħd/dx)√(2/L) sin((πx)/L) dx

= −((2iħπ)/L^2)∫0^L sin((πx)/L) cos((πx)/L) dx

[Note: corrected; the source prints "= ((2iħπ)/L^2)∫0^L" where this reads "= −((2iħπ)/L^2)∫0^L". −iħ(d/dx)sin(πx/L) = −iħ(π/L)cos(πx/L), so the factor is negative; the result, 0, is unaffected.]

= 0

**Solution c**

The expectation value of the kinetic energy is:

⟨T⟩ = ∫ψ^*K̂ψ dτ = (2/L)∫0^L sin((πx)/L)(−ħ^2/(2 m) · (∂^2)/(∂x^2)) sin((πx)/L) dx

= (ħ^2π^2)/(2 mL^2) · (2/L)∫0^L sin^2((πx)/L) dx

= (ħ^2π^2)/(2 mL^2)

A position "on average" is in the middle of the box (L/2). It has equal probability of traveling towards the left or right, so the average momentum and velocity must be zero.

**Solution d**

The average kinetic energy must be equal to the total energy of the ground state of the particle in the box, as there is no other energy component (i.e, V = 0).

## Expanding the Wavefunction

It is also possible to demonstrate that the eigenstates of an operator attributed to a observable form a complete set (i.e., that any general wavefunction can be written as a linear combination of these eigenstates). However, the proof is quite difficult, and we shall not attempt it here.

In summary, given an operator Â, any general wavefunction, ψ(x), can be written

ψ = Σi ci φi

where the ci are complex weights, and the φ(x) are the properly normalized (and mutually orthogonal) eigenstates of Â: i.e.,

Aφi = ai φi

where ai is the eigenvalue corresponding to the eigenstate φi, and

∫_−∞^∞ φi^*φj dx = δ_ij.

Here, δ_ij is called the Kronecker delta-function, and takes the value unity when its two indices are equal, and zero otherwise. It follows from Equations (4.3.8) and (4.3.11) that

ci = ∫_−∞^∞ φi^*ψdx.

Thus, the expansion coefficients in Equation (4.3.12) are easily determined, given the wavefunction ψ and the eigenstates φi. Moreover, if ψ is a properly normalized wavefunction then Equations (4.3.8) and (4.3.11) yield

Σi|ci|^2 = 1.

### Collapsing the Wavefunction

Wavefunction collapse is said to occur when a wavefunction—initially in a superposition of several eigenstates—appears to reduce to a single eigenstate (by "observation"). A particle (or a system in general) can be found in a given state ψ(x, t). Suppose now a measurement is performed on the wavefuction to characterize a specific property of the system.

The measurement of position (with the position operator) effectively collapses this wavefunction that is a superposition of position eigenstates, which are delta-functions and are continuous - i.e. not quantized. Using a different measurement operation may in quantized values (CC BY-NC 4.0; Ümit Kaya via LibreTexts)
Diagram depicting a wavefunction before measurement and its collapse into distinct states after three measurements.

Mathematically, an operator Â is associated with this measurement process, which you suppose has a complete orthonormal set of eigenfunctions: {φi} that is typically an infinite set of functions that depend on quantum number n. The wavefunction Ψ can be expand and a set of basis functions can be selected to specifies the wavefunction is the coefficients {cn} of the expansion. Therefore, if the system is perturbed, then your wavefunction will have another set of coefficients {c'n}.

[Note: corrected; the source prints "complete orthonormal set of eigenvalues: {φi}" where this reads "complete orthonormal set of eigenfunctions: {φi}"; the source prints "an infinite set of functionals" where this reads "an infinite set of functions". The φi are the operator's eigenfunctions.]

The measurement of position (with the position operator) does not collapse this wavefunction since it is in a position eigenstate in contrast to the wavefunction above. Using a different measurement operation (e.g., kinetic energy) may "collapse" the wavefunction into a different eigenstate (CC BY-NC 4.0; Ümit Kaya via LibreTexts)
Diagram illustrating a quantum wavefunction before and after three measurements, showing changes in probability distributions.

If you wavefunction is in the eigenstate of the operator, then each measurement via that operator will give the same result.

## Contributors and Attributions

- Richard Fitzpatrick (Professor of Physics, The University of Texas at Austin)
- Wikiversity
