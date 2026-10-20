---
title: "3.4: Wavefunctions Have a Probabilistic Interpretation"
book: "Physical Chemistry (LibreTexts)"
chapter: "3: The Schrödinger Equation and a Particle in a Box"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03%3A_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.04%3A_Wavefunctions_Have_a_Probabilistic_Interpretation"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- To understand that wavefunctions can have probabilistic interpretations.
- To calculate the probabilities directly from a wavefunctions

For a single-particle system, the wavefunction Ψ(r⃗, t), or ψ(r⃗) for the time-independent case, represents the amplitude of the still vaguely defined matter waves. Since wavefunctions can in general be complex functions, the physical significance cannot be found from the function itself because the √(−1) is not a property of the physical world. Rather, the physical significance is found in the product of the wavefunction and its complex conjugate, i.e. the absolute square of the wavefunction, which also is called the square of the modulus (also called absolute value).

P(r⃗, t) = Ψ^*(r⃗, t)Ψ(r⃗, t)

= |Ψ(r⃗, t)|^2

where r⃗ is a vector (x, y, z) specifying a point in three-dimensional space. The square is used, rather than the modulus itself, just like the intensity of a light wave depends on the square of the electric field.

Born proposed in 1926, the most commonly accepted interpretation of the wavefunction that the square of the modulus (Equation (3.4.1)) is proportional to the probability density (probability per unit volume) that the electron is in the volume dτ located at ri. Since the wavefunction represents the wave properties of matter, the probability density P(x, t) will also exhibit wave-like behavior. Probability density is the three-dimensional analog of the diffraction pattern that appears on the two-dimensional screen in the double-slit diffraction experiment for electrons. The idea that we can understand the world of atoms and molecules only in terms of probabilities is disturbing to some, who are seeking more satisfying descriptions through ongoing research.

[Note: corrected; the source prints "the probability amplitude P(x, t)" where this reads "the probability density P(x, t)". P = |ψ|^2 is the probability density; the next paragraph calls the wavefunction itself the probability amplitude.]

The Born interpretation therefore calls the wavefunction the probability amplitude, the absolute square of the wavefunction is called the probability density, and the probability density times a volume element in three-dimensional space (dτ) is the probability P

The probability that a single quantum particle moving in one spatial dimension will be found in a region x∈[a, b] if a measurement of its location is performed is

P(x∈[a, b]) = ∫_a^b |ψ(x)|^2 dx

In three dimensions, Equation (3.4.2) is represented differently

P(x∈[a, b]) = ∫_V|ψ(τ⃗)|^2 dτ

This integration extends over a specified volume (V) with the symbol dτ designating the appropriate volume element (including a Jacobian) of the coordinate system adopted:

- Cartesian: dτ = dx dy dz
- Spherical: dτ = r^2 sin θ dr dθ dφ
- Cylindrical: dτ = r dr dφ dz.

[Note: corrected; the source prints "dτ = r^2 sin φ dr dθ dφ" where this reads "dτ = r^2 sin θ dr dθ dφ". With θ the polar angle and φ the azimuth, as in the cylindrical line, the factor is sin θ.]

For rectilinear Cartesian space, Equation (3.4.3) can be is expanded with dimension explicitly indicated

P(x∈[a, b]) = ∫_ax^(bx) ∫_ay^(by) ∫_az^(bz) |ψ(x, y, z)|^2 dx dy dz

where the limits of integration are selected to encompass the volume V of consideration.

The Born interpretation (Equation (3.4.1)) of relating the wavefunction to probability forces certain demands on its mathematical behavior of wavefunctions and not any mathematical function can be a valid wavefunction.

### Required Properties of Wavefunction

- The wavefunction must be a single-valued function of all its coordinates, since the probability density ought to be uniquely determined at each point in space.
- The wavefunction should be both finite as an infinite probability has no meaning.
- The wavefunction should be continuous everywhere, as expected for a physically-meaningful probability density.

The conditions that the wavefunction be single-valued, finite and continuous--in short, "well behaved"-- lead to restrictions on solutions of the Schrödinger equation such that only certain values of the energy and other dynamical variables are allowed. This is called quantization and is in the feature that gives quantum mechanics its name.

It is important to note that this interpretation implies the wavefunction does not mean the particle is distributed over a large region as a sort of "charge cloud". The wavefunction is used to describe the electron motion that behaves like waves and satisfies a wave equation. This is akin to how a grade distribution in a large class does not represent a smearing of grades for a single student, but only makes sense when taking into account that the distribution is the result of many measurables (e.g., student performances).

### Example 3.4.1

Show that the square of the modulus of Ψ(r⃗, t) = ψ(r⃗)e^(−iωt) is time independent. What insight regarding stationary states do you gain from this proof?

### Example 3.4.2

According to the Born interpretation, what is the physical significance of eψ^*(r0)ψ(r0)dτ?

[Note: corrected; the source prints "eψ^*(r0)(r0)dτ" where this reads "eψ^*(r0)ψ(r0)dτ". The second ψ is missing.]
