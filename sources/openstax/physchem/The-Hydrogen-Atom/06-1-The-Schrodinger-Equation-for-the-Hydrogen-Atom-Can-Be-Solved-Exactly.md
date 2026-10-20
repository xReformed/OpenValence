---
title: "6.1: The Schrodinger Equation for the Hydrogen Atom Can Be Solved Exactly"
book: "Physical Chemistry (LibreTexts)"
chapter: "6: The Hydrogen Atom"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/06%3A_The_Hydrogen_Atom/6.01%3A_The_Schrodinger_Equation_for_the_Hydrogen_Atom_Can_Be_Solved_Exactly"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The hydrogen atom, consisting of an electron and a proton, is a two-particle system, and the internal motion of two particles around their center of mass is equivalent to the motion of a single particle with a reduced mass. This reduced particle is located at r, where r is the vector specifying the position of the electron relative to the position of the proton. The length of r is the distance between the proton and the electron, and the direction of r and the direction of r is given by the orientation of the vector pointing from the proton to the electron. Since the proton is much more massive than the electron, we will assume throughout this chapter that the reduced mass equals the electron mass and the proton is located at the center of mass.

Figure 6.1.1: (a) The proton (p^+) and electron (e^−) of the hydrogen atom. (b) Equivalent reduced particle with reduced mass μ at distance r from center of mass.
A simple diagram illustrating solar systems with a yellow sun, an orange planet, and smaller celestial objects.

### Exercise 6.1.1

a. Assuming the Bohr radius gives the distance between the proton and electron, calculate the distance of the proton from the center of mass, and calculate the distance of the electron from the center of mass.
b. Calculate the reduced mass of the electron-proton system.
c. In view of your calculations in (a) and (b), comment on the validity of a model in which the proton is located at the center of mass and the reduced mass equals the electron mass.

Since the internal motion of any two-particle system can be represented by the motion of a single particle with a reduced mass, the description of the hydrogen atom has much in common with the description of a diatomic molecule discussed previously. The time-independent Schrödinger Equation for the hydrogen atom

Ĥ(r, θ, φ)ψ(r, θ, φ) = Eψ(r, θ, φ)

employs the same kinetic energy operator, T̂, written in spherical coordinates. For the hydrogen atom, however, the distance, r, between the two particles can vary, unlike the diatomic molecule where the bond length was fixed and the rigid rotor model was applicable. The hydrogen atom Hamiltonian also contains a potential energy term, V̂, to describe the attraction between the proton and the electron. This term is the Coulomb potential energy,

V̂(r) = −e^2/(4πε0 r)

where r is the distance between the electron and the proton. The Coulomb potential energy depends inversely on the distance between the electron and the nucleus and does not depend on any angles. Such a potential is called a central potential.

The full expression for Ĥ in spherical coordinates is

Ĥ(r, θ, φ) = −(ħ^2/(2μr^2))[((∂)/(∂r))(r^2 (∂)/(∂r)) + 1/(sin θ) · ((∂)/(∂θ))(sin θ (∂)/(∂θ)) + 1/(sin^2θ) · (∂^2)/(∂φ^2)]−e^2/(4πε0 r)

The contributions from rotational and radial components of the motion become clearer if we write out the complete Schrödinger equation,

{−(ħ^2/(2μr^2))[((∂)/(∂r))(r^2 (∂)/(∂r)) + 1/(sin θ) · ((∂)/(∂θ))(sin θ (∂)/(∂θ)) + 1/(sin^2θ) · (∂^2)/(∂φ^2)]−e^2/(4πε0 r)}ψ(r, θ, φ) = Eψ(r, θ, φ)

multiply both sides of Equation (6.1.4) by 2μr^2, and rearrange to obtain

ħ^2 ((∂)/(∂r))(r^2 ((∂)/(∂r))ψ(r, θ, φ)) + 2μr^2[E + e^2/(4πε0 r)]ψ(r, θ, φ) =

−ħ^2[1/(sin θ) · ((∂)/(∂θ))(sin θ (∂)/(∂θ)) + 1/(sin^2θ) · (∂^2)/(∂φ^2)]ψ(r, θ, φ)

Manipulating the Schrödinger equation in this way helps us recognize the square of the angular momentum operator in Equation (6.1.5). The square of the angular momentum operator in Equation (6.1.6).

M̂^2 = −ħ^2[1/(sin θ) · ((∂)/(∂θ))(sin θ (∂)/(∂θ)) + 1/(sin^2θ) · (∂^2)/(∂φ^2)]

Substituting Equation (6.1.6) into Equation (6.1.5) produces

ħ^2 ((∂)/(∂r))(r^2 ((∂)/(∂r))ψ(r, θ, φ)) + 2μr^2[E − V̂]ψ(r, θ, φ) = M̂^2ψ(r, θ, φ)

### Exercise 6.1.2

Show the algebraic steps going from Equation (6.1.4) to (6.1.5) and finally to (6.1.7). Justify the statement that the rotational and radial motion are separated in Equation (6.1.7).

Since the angular momentum operator does not involve the radial variable, r, we can separate variables in Equation (6.1.7) by using a product wavefunction, as we did previously for rigid rotors. We know that the eigenfunctions of the angular momentum operator are the Spherical Harmonic functions (Table M4), Y(θ, φ), so a good choice for a product function is

ψ(r, θ, φ) = R(r)Y(θ, φ)

The Spherical Harmonic functions provide information about where the electron is around the proton, and the radial function R(r) describes how far the electron is away from the proton.

To separate variables, substitute the product function, Equation (6.1.8) into Equation (6.1.7), evaluate partial derivatives, divide each side by R(r) Y(θ, φ), and set each side of that resulting equation equal to a constant λ.

ħ^2/(R(r)) · ((∂)/(∂r))r^2 ((∂)/(∂r))R(r) + ((2μr^2)/(R(r)))[E − V]R(r) = λ

(1/(Y(θ, φ)))M̂^2 Y(θ, φ) = λ

Equations (6.1.9) and (6.1.10) represent the radial differential equation and the angular differential equation, respectively. As we describe below, they are solved separately to give the Y(θ, φ) angular functions and the R(r) radial functions.

### Exercise 6.1.3

Complete the steps leading from Equations (6.1.7) to (6.1.9) and (6.1.10).

Rearranging Equation (6.1.10) yields

M̂^2 Yl^(ml)(θ, φ) = λYl^(ml)(θ, φ)

where we have added the indices l and ml to identify a particular spherical harmonic function. Note that the notation has changed from that used with the Rigid Rotor; it is customary to use J and mJ to represent the angular momentum quantum numbers for rotational states, but for electronic states, it is customary to use l and ml to represent the same thing. Furthermore, the electronic angular momentum is designated by L and the corresponding operator is called L̂. In complete electronic notation, Equation (6.1.11) is

L̂^2 Yl^(ml)(θ, φ) = λYl^(ml)(θ, φ)

Equation (6.1.12) says that Yl^(ml)(θ, φ) must be an eigenfunction of the angular momentum operator L̂^2 with eigenvalue λ. We know from the discussion of the Rigid Rotor that the eigenvalue λ is J(J + 1)ħ^2, or in electronic notation, l(l + 1)ħ^2. Consequently, Equation (6.1.12) becomes

L̂^2 Yl^(ml)(θ, φ) = l(l + 1)ħ^2 Yl^(ml)(θ, φ)

Using this value for λ and rearranging Equation (6.1.9), we obtain

−ħ^2/(2μr^2) · ((∂)/(∂r))r^2 ((∂)/(∂r))R(r) + [(l(l + 1)ħ^2)/(2μr^2) + V(r) − E]R(r) = 0

### Exercise 6.1.4

Write the steps leading from Equation (6.1.9) to Equation (6.1.14).

The details for solving Equation (6.1.14) are provided elsewhere, but the procedure and consequences are similar to previously examined cases. As for the harmonic oscillator, an asymptotic solution (valid at large r) is found, and then the complete solutions are written as products of the asymptotic solution and polynomials arising from sequential truncations of a power series expansion.

## Contributors and Attributions

- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("Quantum States of Atoms and Molecules")
