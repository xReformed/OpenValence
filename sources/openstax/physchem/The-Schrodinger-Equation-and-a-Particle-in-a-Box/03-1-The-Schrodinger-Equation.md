---
title: "3.1: The Schrödinger Equation"
book: "Physical Chemistry (LibreTexts)"
chapter: "3: The Schrödinger Equation and a Particle in a Box"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03%3A_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.01%3A_The_Schrodinger_Equation"
author: "Flowlerm"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- To be introduced to the general properties of the Schrödinger equation and its solutions.

De Broglie’s doctoral thesis, defended at the end of 1924, created a lot of excitement in European physics circles. Shortly after it was published in the fall of 1925 Pieter Debye, Professor of Theoretical Physics at Zurich and Einstein's successor, suggested to Erwin Schrödinger that he give a seminar on de Broglie’s work. Schrödinger gave a polished presentation, but at the end Debye remarked that he considered the whole theory rather childish: why should a wave confine itself to a circle in space? It wasn’t as if the circle was a waving circular string, real waves in space diffracted and diffused, in fact they obeyed three-dimensional wave equations, and that was what was needed. This was a direct challenge to Schrödinger, who spent some weeks in the Swiss mountains working on the problem and constructing his equation. There is no rigorous derivation of Schrödinger’s equation from previously established theory, but it can be made very plausible by thinking about the connection between light waves and photons, and construction an analogous structure for de Broglie’s waves and electrons (and later, other particles).

## The Schrödinger Equation: A Better Approach

While the Bohr model is able to predict the allowed energies of any single-electron atom or cation, it by no means, a general approach. Moreover, it relies heavily on classical ideas, clumsily grafting quantization onto an essentially classical picture, and therefore, provides no real insights into the true quantum nature of the atom. Any rule that might be capable of predicting the allowed energies of a quantum system must also account for the wave-particle duality and implicitly include a wave-like description for particles. Nonetheless, we will attempt a heuristic argument to make the result at least plausible. In classical electromagnetic theory, it follows from Maxwell's equations that each component of the electric and magnetic fields in vacuum is a solution of the 3-D wave equation for electromagnetic waves:

∇^2Ψ(x, y, z, t) − 1/c^2 · (∂^2Ψ(x, y, z, t))/(∂t^2) = 0

The wave equation in Equation (3.1.1) is the three-dimensional analog to the wave equation presented earlier (Equation 2.1.1) with the velocity fixed to the known speed of light: c. Instead of a partial derivative (∂^2)/(∂x^2) in one dimension, the Laplacian (or "del-squared") operator is introduced:

∇^2 = (∂^2)/(∂x^2) + (∂^2)/(∂y^2) + (∂^2)/(∂z^2)

Corresponding, the solution to this 3D equation wave equation is a function of four independent variables: x, y, z, and t and is generally called the wavefunction ψ.

We will attempt now to create an analogous equation for de Broglie's matter waves. Accordingly, let us consider a only 1-dimensional wave motion propagating in the x-direction. At a given instant of time, the form of a wave might be represented by a function such as

Ψ(x) = f((2πx)/λ)

where f(θ) represents a sinusoidal function such as sin θ, cos θ, e^(iθ), e^(−iθ) or some linear combination of these. The most suggestive form will turn out to be the complex exponential, which is related to the sine and cosine by Euler's formula

e^(±iθ) = cos θ±i sin θ

Each of the above is a periodic function, its value repeating every time its argument increases by 2π. This happens whenever x increases by one wavelength λ. At a fixed point in space, the time-dependence of the wave has an analogous structure:

T(t) = f(2πνt)

where ν gives the number of cycles of the wave per unit time. Taking into account both x and t dependence, we consider a wavefunction of the form

Ψ(x, t) = exp[2πi(x/λ − νt)]

representing waves traveling from left to right. Now we make use of the Planck formula (E = hν) and de Broglie formulas (p = h/λ) to replace ν and λ by their particle analogs. This gives

Ψ(x, t) = exp[(i(px − Et))/ħ]

where

ħ ≡ h/(2π)

Since Planck's constant occurs in most formulas with the denominator 2π, the ħ symbol was introduced by Paul Dirac. Equation (3.1.5) represents in some way the wavelike nature of a particle with energy E and momentum p. The time derivative of Equation (3.1.7) gives

(∂Ψ)/(∂t) = −(iE/ħ)exp[(i(px − Et))/ħ]

Thus from a simple comparison of Equations (3.1.7) and (3.1.9)

iħ(∂Ψ)/(∂t) = EΨ

or analogously differentiation of Equation (3.1.9) with respect to x

−iħ(∂Ψ)/(∂x) = pΨ

and then the second derivative

−ħ^2 (∂^2Ψ)/(∂x^2) = p^2Ψ

The energy and momentum for a nonrelativistic free particle (i.e., all energy is kinetic with no potential energy involved) are related by

E = (1/2)mv^2 = p^2/(2 m)

Substituting Equations (3.1.12) and (3.1.10) into Equation (3.1.13) shows that Ψ(x, t) satisfies the following partial differential equation

iħ(∂Ψ)/(∂t) = −ħ^2/(2 m) · (∂^2Ψ)/(∂x^2)

Equation (3.1.14) is the applicable differential equation describing the wavefunction of a free particle that is not bound by any external forces or equivalently not in a region where its potential energy V(x, t) varies.

For a particle with a non-zero potential energy V(x), the total energy E is then a sum of kinetics and potential energies

E = p^2/(2 m) + V(x)

we postulate that Equation (3.1.3) for matter waves can be generalized to

(iħ(∂Ψ(x, t))/(∂t) = [−ħ^2/(2 m) · (∂^2)/(∂x^2) + V(x)]Ψ(x, t)) (time-dependent Schrödinger equation in 1D)

For matter waves in three dimensions, Equation (3.1.6) is then expanded

(iħ((∂)/(∂t))Ψ(r⃗, t) = [−(ħ^2/(2 m))∇^2 + V(r⃗)]Ψ(r⃗, t)) (time-dependent Schrödinger equation in 3D)

Here the potential energy and the wavefunctions Ψ depend on the three space coordinates x, y, z, which we write for brevity as r⃗. Notice that the potential energy is assumed to depend on position only and not time (i.e., particle motion). This is applicable for conservative forces that a potential energy function V(r⃗) can be formulated.

### The Laplacian Operator

The three second derivatives in parentheses together are called the Laplacian operator, or del-squared,

∇^2 = ∇·∇

= ((∂^2)/(∂x^2) + (∂^2)/(∂y^2) + (∂^2)/(∂z^2))

with the del operator,

∇ = (x⃗(∂)/(∂x) + y⃗(∂)/(∂y) + z⃗(∂)/(∂z))

Remember from basic calculus that when the del operator is direclty operates on a field (e.g, ∇f(x, y, z), it denotes the gradient (i.e, the locally steepest slope) of the field. The symbols with arrows in Equation (3-21) are unit vectors.

[Note: corrected; the source prints "∇f(x, y, x)" where this reads "∇f(x, y, z)". A typing error.]

Equation (3.1.17) is the time-dependent Schrödinger equation describing the wavefunction amplitude Ψ(r⃗, t) of matter waves associated with the particle within a specified potential V(r⃗). Its formulation in 1926 represents the start of modern quantum mechanics (Heisenberg in 1925 proposed another version known as matrix mechanics).

For conservative systems, the energy is a constant, and the time-dependent factor from Equation (3.1.7) can be separated from the space-only factor (via the Separation of Variables technique discussed in Section 2.2)

Ψ(r⃗, t) = ψ(r⃗)e^(−iEt/ħ)

where ψ(r⃗) is a wavefunction dependent (or time-independent) wavefuction that only depends on space coordinates. Putting Equation (3.1.18) into Equation (3.1.17) and cancelling the exponential factors, we obtain the time-independent Schrödinger equation:

([−(ħ^2/(2 m))∇^2 + V(r⃗)]ψ(r⃗) = Eψ(r⃗)) (time-independent Schrödinger equation)

The overall form of the Equation (3.1.19) is not unusual or unexpected as it uses the principle of the conservation of energy. Most of our applications of quantum mechanics to chemistry will be based on this equation (with the exception of spectroscopy). The terms of the time-independent Schrödinger equation can then be interpreted as total energy of the system, equal to the system kinetic energy plus the system potential energy. In this respect, it is just the same as in classical physics.

### Time Dependence to the Wavefunctions

Notice that the wavefunctions used with the time-independent Schrödinger equation (i.e., ψ(r⃗)) do not have explicit t dependences like the wavefunctions of time-dependent analog in Equation (3.1.17) (i.e., Ψ(r⃗, t)). That does not imply that there is no time dependence to the wavefunction. Equation (3.1.18) argues that the time-dependent (i.e., full spatial and temporal) wavefunction (Ψ(r⃗, t)) differs from from the time-independent (i.e., spatial only) wavefunction ψ(r⃗) by a "phase factor" of constant magnitude. Using the Euler relationship in Equation (3.1.4), the total wavefunction above can be expanded

Ψ(r⃗, t) = ψ(r⃗)(cos(Et/ħ) − i sin(Et/ħ))

This means the total wavefunction has a complex behavior with a real part and an imaginary part. Moreover, using the trigonometry identity sin(θ) = cos(θ − π/2) Equation (eq30) can further simplified to

Ψ(r⃗, t) = ψ(r⃗) cos(Et/ħ) − iψ(r⃗) cos(Et/ħ − π/2)

This shows that both the real and the imaginary components of the total wavefunction oscillate, the imaginary part of the total wavefunction oscillates out of phase by π/2 with respect to the real part.

Note that while all wavefunctions have a time-dependence, that dependence may not impact in simple quantum problems as the next sections discuss and can often be ignored.

Before we embark on this, however, let us pause to comment on the validity of quantum mechanics. Despite its weirdness, its abstractness, and its strange view of the universe as a place of randomness and unpredictability, quantum theory has been subject to intense experimental scrutiny. It has been found to agree with experiments to better than 10^−10% for all cases studied so far. When the Schrödinger Equation is combined with a quantum description of the electromagnetic field, a theory known as quantum electrodynamics, the result is one of the most accurate theories of matter that has ever been put forth. Keeping this in mind, let us forge ahead in our discussion of the quantum universe and how to apply quantum theory to both model and real situations.
