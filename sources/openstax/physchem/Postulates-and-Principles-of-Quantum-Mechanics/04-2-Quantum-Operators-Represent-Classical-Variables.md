---
title: "4.2: Quantum Operators Represent Classical Variables"
book: "Physical Chemistry (LibreTexts)"
chapter: "4: Postulates and Principles of Quantum Mechanics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/04%3A_Postulates_and_Principles_of_Quantum_Mechanics/4.02%3A_Quantum_Operators_Represent_Classical_Variables"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Understand how the correspondence principle argues that a unique quantum operator exist for every classical observable.
- Recognize several of the commonly used quantum operators

An observable is a dynamic variable of a system that can be experimentally measured (e.g., position, momentum and kinetic energy). In systems governed by classical mechanics, it is a real-valued function (never complex), however, in quantum physics, every observable in quantum mechanics is represented by an independent operator that is used to obtain physical information about the observable from the wavefunction. It is a general principle of quantum mechanics that there is an operator for every physical observable. For an observable that is represented in classical physics by a function Q(x, p), the corresponding operator is Q(x̂, p̂).

### Postulate II: The Correspondence Principle

For every observable property of a system there is a corresponding quantum mechanical operator. This is often referred to as the Correspondence Principle.

Classical dynamical variables, such as x and p, are represented in quantum mechanics by linear operators which act on the wavefunction. The operator for position of a particle in three dimensions is just the set of coordinates x, y, and z, which is written as a vector, r:

r⃗ = (x, y, z)

= xi⃗ + yj⃗ + zk⃗

The operator for a component of linear momentum is

p̂x = −iħ(∂)/(∂x)

and the operator for kinetic energy in one dimension is

T̂x = (−ħ^2/(2 m))(∂^2)/(∂x^2)

and in three dimensions

p̂ = −iħ∇

and

T̂ = (−ħ^2/(2 m))∇^2

The total energy operator is called the Hamiltonian operator, Ĥ and consists of the kinetic energy operator plus the potential energy operator.

Ĥ = −(ħ^2/(2 m))∇^2 + V̂(x, y, z)

### The Hamiltonian Operator

The Hamiltonian operator is named after the Irish mathematician William Hamilton and comes from the his formulation of Classical Mechanics that is based on the total energy:

Ĥ = T̂ + V̂

rather than Newton's second law,

F⃗ = ma⃗

In many cases only the kinetic energy of the particles and the electrostatic or Coulomb potential energy due to their charges are considered, but in general all terms that contribute to the energy appear in the Hamiltonian. These additional terms account for such things as external electric and magnetic fields and magnetic interactions due to magnetic moments of the particles and their motion.

Table 4.2.1 : Some common Operators in Quantum Mechanics

| Name | Observable Symbol | Operator Symbol | Operation |
| --- | --- | --- | --- |
| Position (in 1D) | x | X̂ | Multiply by x |
| Position (in 3D) | r⃗ | R̂ | Multiply by r⃗ |
| Momentum (in 1D) | px | P̂x | -iħd/dx |
| Momentum (in 3D) | p⃗ | P̂ | -iħ[î d/dx + ĵd/dy + k̂d/dz] |
| Kinetic Energy (in 1D) | Tx | T̂x | (−ħ^2)/(2 m) · d^2/dx^2 |
| Kinetic Energy (in 3D) | T | T̂ | ((−ħ^2)/(2 m))[d^2/dx^2 + d^2/dy^2 + d^2/dz^2] Which can be simplified to (−ħ^2)/(2 m)∇^2 |
| Potential Energy (in 1D) | V(x) | V̂(x) | Multiply by V(x) |
| Potential Energy (in 3D) | V(x, y, z) | V̂(x, y, z) | Multiply by V(x, y, z) |
| Total Energy | E | Ê | ((−ħ^2)/(2 m))∇^2 + V(x, y, z) |
| Angular Momentum (x axis component) | Lx | L̂x | -iħ[y d/dz − z d/dy] |
| Angular Momentum (y axis component) | Ly | L̂y | -iħ[z d/dx − x d/dz] |
| Angular Momentum (z axis component) | Lz | L̂z | -iħ[x d/dy − y d/dx] |
