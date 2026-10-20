---
title: "3.3: The Schrödinger Equation is an Eigenvalue Problem"
book: "Physical Chemistry (LibreTexts)"
chapter: "3: The Schrödinger Equation and a Particle in a Box"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03%3A_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.03%3A_The_Schrodinger_Equation_is_an_Eigenvalue_Problem"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- To recognize that each quantum mechanical observable is determined by solve by an eigenvalue problem with different operators for different observable
- Confirm if a specific wavefunction is an eigenfunction of a specific operation and extract the corresponding obserable (the eigenvalue)
- To recognize that the Schrödinger equation, just like all measurable, is also an eigenvalue problem with the eigenvalue ascribed to total energy
- Identity and manipulate several common quantum mechanical operators

As per the definition, an operator acting on a function gives another function, however a special case occurs when the generated function is proportional to the original

Âψ∝ψ

This case can be expressed in terms of a equality by introducing a proportionality constant k

Âψ = kψ

Not all functions will solve an equation like in Equation (3.3.1b). If a function does, then ψ is known as an eigenfunction and the constant k is called its eigenvalue (these terms are hybrids with German, the purely English equivalents being "characteristic function" and "characteristic value", respectively). Solving eigenvalue problems are discussed in most linear algebra courses.

In quantum mechanics, every experimental measurable a is the eigenvalue of a specific operator (Â):

Âψ = aψ

The a eigenvalues represents the possible measured values of the Â operator. Classically, a would be allowed to vary continuously, but in quantum mechanics, a typically has only a sub-set of allowed values (hence the quantum aspect). Both time-dependent and time-independent Schrödinger equations are the best known instances of an eigenvalue equations in quantum mechanics, with its eigenvalues corresponding to the allowed energy levels of the quantum system.

[Note: only the time-independent Schrödinger equation, Ĥψ = Eψ, is an eigenvalue equation; the time-dependent one, iħ∂Ψ/∂t = ĤΨ, is not. The text is left as printed.]

[−(ħ^2/(2 m))∇^2 + V(r⃗)]ψ(r⃗) = Eψ(r⃗)

The object on the left that acts on ψ(x) is an example of an operator.

[−(ħ^2/(2 m))∇^2 + V(r⃗)]

In effect, what is says to do is "take the second derivative of ψ(x), multiply the result by −(ħ^2/2m) and then add V(x)ψ(x) to the result of that." Quantum mechanics involves many different types of operators. This one, however, plays a special role because it appears on the left side of the Schrödinger equation. It is called the Hamiltonian operator and is denoted as

Ĥ = −(ħ^2/(2 m))∇^2 + V(r⃗)

Therefore, the time-dependent Schrödinger equation can be (and it more commonly) written as

Ĥψ(x, t) = iħ((∂)/(∂t))ψ(x, t)

and the time-independent Schrödinger equation

Ĥψ(x) = Eψ(x)

Note that the functional form of Equation (3.3.6b) is the same as the general eigenvalue equation in Equation (3.3.1b) where the eigenvalues are the (allowed) total energies (E).

The Hamiltonian, named after the Irish mathematician Hamilton, comes from the formulation of Classical Mechanics that is based on the total energy, H = T + V, rather than Newton's second law, F = ma. Equation (3.3.6b) says that the Hamiltonian operator operates on the wavefunction to produce the energy E, which is a scalar (e.g., expressed in Joules) times the wavefunction.

### Correspondence Principle

Note that Ĥ is derived from the classical energy p^2/2m + V(x) simply by replacing p → −iħ(d/dx). This is an example of the Correspondence Principle initially proposed by Niels Bohr that states that the behavior of systems described by quantum theory reproduces classical physics in the limit of large quantum numbers.

It is a general principle of Quantum Mechanics that there is an operator for every physical observable. A physical observable is anything that can be measured. If the wavefunction that describes a system is an eigenfunction of an operator, then the value of the associated observable is extracted from the eigenfunction by operating on the eigenfunction with the appropriate operator. The value of the observable for the system is then the eigenvalue, and the system is said to be in an eigenstate. Equation (3.3.6b) states this principle mathematically for the case of energy as the observable. If the wavefunction is not the eigenfunction of the operation, then the measurement will give an eigenvalue (by definition), but not necessarily the same one for each measurement (this will be discussed in more detail in later section).

## Common Operators

Although we could theoretically come up with an infinite number of operators, in practice there are a few which are much more important than any others.

- Linear Momentum:

The linear momentum operator of a particle moving in one dimension (the x-direction) is

p̂x = −iħ(∂)/(∂x)

and can be generalized in three dimensions:

p̂⃗ = −iħ∇

- Position

The position operator of a particle moving in one dimension (the x-direction) is

x̂ = x

and can be generalized in three dimensions:

r̂⃗ = r⃗

where r⃗ = (x, y, z).

- Kinetic Energy

Classically, the kinetic energy of a particle moving in one dimension (the x-direction), in terms of momentum, is

KE_classical = (px^2)/(2 m)

Quantum mechanically, the corresponding kinetic energy operator is

K̂Ê_quantum = −ħ^2/(2 m) · (∂^2)/(∂x^2)

and can be generalized in three dimensions:

K̂Ê_quantum = −(ħ^2/(2 m))∇^2

- Angular Momentum:

Angular momentum requires a more complex discussion, but is the cross product of the position operator r̂⃗ and the momentum operator p̂

L̂⃗ = −iħ(r⃗ × ∇)

- Hamiltonian:

The Hamiltonian operator corresponds to the total energy of the system

Ĥ = −ħ^2/(2 m) · (∂^2)/(∂x^2) + V(x)

and it represents the total energy of the particle of mass m in the potential V(x). The Hamiltonian in three dimensions is

Ĥ = −(ħ^2/(2 m))∇^2 + V(r⃗)

- Total Energy:

The energy operator from the time-dependent Schrödinger equation

iħ((∂)/(∂t))Ψ(x, t) = ĤΨ(x, t)

The right hand side of Equation (3.3.5) is the Hamiltonian Operator. In addition determining system energies, the Hamiltonian operator dictates the time evolution of the wavefunction

ĤΨ(x, t) = iħ(∂Ψ(x, t))/(∂t)

This aspect will be discussed in more detail elsewhere.

## Eigenstate, Eigenvalues, Wavefunctions, Measurables, and Observables

In general, the wavefunction gives the "state of the system" for the system under discussion. It stores all the information available to the observer about the system. Often in discussions of quantum mechanics, the terms eigenstate and wavefunction are used interchangeably. The term eigenvalue is used to designate the value of measurable quantity associated with the wavefunction.

- If you want to measure the energy of a particle, you have to operate on the wavefunction with the Hamiltonian operator (Equation (3.3.5)).
- If you want to measure the momentum of a particle, you have to operate on wavefunction with the momentum operator (Equation (3.3.7)).
- If you want to measure the position of a particle, you have to operate on wavefunction with the position operator (Equation (3.3.9D)).
- If you want to measure the kinetic energy of a particle, you have to operate on wavefunction with the kinetic energy operator (Equation (3.3.10)).

When discussing the eigenstates of the Hamiltonian (Ĥ), the associated eigenvalues represent energies and within the context of the momentum operators, the associated eigenvalues refer to the momentum of the particle. However, not all wavefunctions (ψ) are eigenstates of an operator (φ) – and if they are not, they can be usually be written as superpositions of eigenstates.

ψ = Σi ci φi

This will be discussed in more detail in later sections.

While the wavefunction may not be the eigenstate of an observable, when that operator operates on that wavefunction, the wavefunction becomes an eigenstate of that observable and only eigenvalues can be observed. Another way to say this is that the wavefunction "collapses" into an eigenstate of the observable. Because quantum mechanical operators have different forms, their associated eigenstates are similarly often (i.e., most of the time) different. For example, when a wavefunction is an eigenstate of total energy, it will not be an eigenstate of momentum.

[Note: applying an operator to a wavefunction does not make it an eigenstate; a measurement of the observable leaves the system in one of its eigenstates (the collapse). And an eigenstate of energy can also be an eigenstate of momentum: the free-particle state in Example 3.3.1b is both, as the next paragraph allows ("although not always"). The text is left as printed.]

If a wavefunction is an eigenstate of one operator, (e.g., momentum), that state is not necessarily an eigenstate of a different operator (e.g., energy), although not always.

The wavefunction immediately after a measurement is an eigenstate of the operator associated with this measurement. What happens to the wavefunction after the measurement is a different topic.

### Example 3.3.1

Confirm that the following wavefunctions are eigenstates of linear momentum and kinetic energy (or neither or both):

a. ψ = A sin(ax)
b. ψ = Ne^(−ix/ħ)

Strategy

This question is asking if the eigenvalue equation holds for the operators and these wavefunctions. This is just asking if these wavefunctions are solutions to Equation (3.3.1b) using the operators in Equations (3.3.7) and (3.3.10), i.e., are these equations true:

p̂x ψ = px ψ

K̂Êψ = KEψ

where px and KE are the measurables (eigenvalues) for these operators.

**Solution a**

Let's evaluate the left side of the linear momentum eigenvalue problem (Equation (ex1))

−iħ((∂)/(∂x))A sin(ax) = −iħAa cos(ax)

and compare to the the right side of Equation (ex1)

px A sin(ax)

These are not the same so this wavefunction is not an eigenstate of momentum.

Let's look at the left side of the kinetic energy eigenvalue problem (Equation (ex2))

−ħ^2/(2 m) · ((∂^2)/(∂x^2))A sin(ax) = −ħ^2/(2 m) · ((∂)/(∂x))Aa cos(ax)

= + (ħ^2/(2 m))Aa^2 sin(ax)

and compare to the right side

KEA sin(ax)

These are same, so this specific wavefunction is an eigenstate of kinetic energy. Moreover, the measured kinetic energy will be

KE = + (ħ^2/(2 m))a^2

**Solution b**

Let's look at the left side of Equation (ex1) for linear momentum

−iħ((∂)/(∂x))Ne^(−ix/ħ) = −Ne^(−ix/ħ)

and the right side of Equation (ex1)

px Ne^(−ix/ħ)

These are the same so this wavefunction is an eigenstate of momentum with momentum px = −1.

[Note: corrected; the source prints "with momentum px = −N" where this reads "with momentum px = −1". −iħ(d/dx)Ne^(−ix/ħ) = −Ne^(−ix/ħ), so the eigenvalue is −1 (in the units of the example); N is the normalization constant. The kinetic energy found below, KE = 1/(2m) = px^2/(2m), agrees.]

Let's look at the left side of Equation (ex2) for kinetic energy

−ħ^2/(2 m) · ((∂^2)/(∂x^2))Ne^(−ix/ħ) = + i ħ/(2 m) · ((∂)/(∂x))Ne^(−ix/ħ)

= + (1/(2 m))Ne^(−ix/ħ)

and the right side

KENe^(−ix/ħ)

These are same so this wavefunction is an eigenstate of kinetic energy. And the measured kinetic energy will be

KE = 1/(2 m)

This wavefunction is an eigenstate of both momentum and kinetic energy.

### Exercise 3.3.1

Are ψ = Me^(−bx) functions eigenstates of linear momentum and kinetic energy (or neither or both)?

**Answer**

ψ is an eigenstate of linear momentum with a eigenvalue of biħ and also an eigenstate of kinetic energy with an eigenvalue of −ħ^2 b^2/(2m).

[Note: corrected; the source prints "with an eigenvalue of b^2." where this reads "with an eigenvalue of −ħ^2 b^2/(2m).". −(ħ^2/(2m))(d^2/dx^2)Me^(−bx) = −(ħ^2 b^2/(2m))Me^(−bx).]
