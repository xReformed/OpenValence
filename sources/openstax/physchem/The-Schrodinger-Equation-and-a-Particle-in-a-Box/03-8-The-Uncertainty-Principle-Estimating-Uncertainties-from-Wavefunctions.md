---
title: "3.8: The Uncertainty Principle - Estimating Uncertainties from Wavefunctions"
book: "Physical Chemistry (LibreTexts)"
chapter: "3: The Schrödinger Equation and a Particle in a Box"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03%3A_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.08%3A_The_Uncertainty_Principle_-_Estimating_Uncertainties_from_Wavefunctions"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Expand on the introduction of Heisenberg's Uncertainty Principle by calculating the Δx or Δp directly from the wavefunction

As will be discussed in Section 4.6, the operators x̂ and p̂ are not compatible and there is no measurement that can precisely determine the coresponding observables (x and p) simultaneously. Hence, there must be an uncertainty relation between them that specifies how uncertain we are about one quantity given a definite precision in the measurement of the other. Presumably, if one can be determined with infinite precision, then there will be an infinite uncertainty in the other. The uncertainty in a general quantity A is

ΔA = √(⟨A^2⟩−⟨A⟩^2)

where ⟨A^2⟩ and ⟨A⟩ are the expectation values of Â^2 and Â operators for a specific wavefunction. Extending Equation (3.8.1) to x and p results in the following uncertainties

Δx = √(⟨x^2⟩−⟨x⟩^2)

Δp = √(⟨p^2⟩−⟨p⟩^2)

These quantities can be expressed explicitly in terms of the (time-dependent) wavefunction Ψ(x, t) using the fact that

⟨x⟩ = ⟨Ψ(t)|x̂|Ψ(t)⟩

= ∫Ψ^*(x, t)xΨ(x, t) dx

and

⟨x^2⟩ = ⟨Ψ(t)|x̂^2|Ψ(t)⟩

= ∫Ψ^*(x, t)x^2Ψ(x, t) dx

The middle terms in both Equations (3.8.3) and (3.8.4) are the integrals expressed in Dirac's Bra-ket notation. Similarly using the definition of the linear momentum operator:

p̂x = −iħ(∂)/(∂x).

So

⟨p⟩ = ⟨Ψ(t)|p̂|Ψ(t)⟩

= ∫Ψ^*(x, t) − iħ((∂)/(∂x))Ψ(x, t) dx

and

⟨p^2⟩ = ⟨Ψ(t)|p̂^2|Ψ(t)⟩

= ∫Ψ^*(x, t)(−ħ^2 (∂^2)/(∂x^2))Ψ(x, t) dx

### Time-dependent vs. time-independent wavefunction

The expectation values above are formulated with the total time-dependence wavefunction ψ(x, t) that are functions of x and t. However, it is easy to show that the same expectation value would be obtained if the time-independent wavefunction ψ(x) that are functions of only x are used. If V(x) in Ĥ is time independent, then the wavefunctions are stationary and the expectation value are time-independent. You can easily confirm that by comparing the expectation values using the general formula for a stationary wavefunction

Ψ(x, t) = ψ(x)e^(−iEt/ħ)

and for ψ(x).

The Heisenberg uncertainty principle can be quantitatively connected to the properties of a wavefunction, i.e., calculated via the expectation values outlined above:

ΔpΔx ≥ ħ/2

This essentially states that the greater certainty that a measurement of x or p can be made, the greater will be the uncertainty in the other. Hence, as Δp approaches 0, Δx must approach ∞, which is the case of the free particle (e.g, with V(x) = 0) where the momentum of a particles can be determined precisely.

### Example 3.8.1 : Uncertainty with a Gaussian wavefunction

A particle is in a state described by the wavefunction

ψ(x) = ((2a)/π)^(1/4)e^(−ax^2)

where a is a constant and −∞ ≤ x ≤ ∞. Verify that the value of the product ∆p∆x is consistent with the predictions from the uncertainty principle (Equation (3.8.8)).

**Solution**

Let's calculate the average of x:

⟨x⟩ = ∫_−∞^∞ ψ^*xψ dx

= ∫_−∞^∞ (2a/π)^(1/4)e^(−ax^2)x(2a/π)^(1/4)e^(−ax^2) dx

= ∫_−∞^∞ x(2a/π)^(1/2)e^(−2ax^2) dx

= 0

since the integrand is an odd function (an even function times an odd function is an odd function). This makes sense given that the gaussian wavefunction is symmetric around x = 0.

Let's calculate the average of x^2:

⟨x^2⟩ = ∫_−∞^∞ ψ^*x^2ψ dx

= ∫_−∞^∞ (2a/π)^(1/4)e^(−ax^2)(x^2)(2a/π)^(1/4)e^(−ax^2) dx

= ∫_−∞^∞ x^2(2a/π)^(1/2)e^(−2ax^2) dx

= 1/(4a)

Let's calculate the average in p:

⟨p⟩ = ∫_−∞^∞ ψ^*pψ dx

= ∫_−∞^∞ ((2a)/π)^(1/4)e^(−ax^2) − iħ(d/dx)((2a)/π)^(1/4)e^(−ax^2) dx

= ∫_−∞^∞ ((2a)/π)^(1/4)e^(−ax^2)(−iħ)((2a)/π)^(1/4)e^(−ax^2)(−2ax) dx

= 0

since the integrand is an odd function.

Let's calculate the average of p^2:

⟨p^2⟩ = ∫_−∞^∞ ψ^*p^2ψdx

= −ħ^2((2a)/π)^(1/2)∫_−∞^∞ 2a(2ax^2 − 1)e^(−2ax^2)dx

[Note: corrected; the source prints "2a(ax^2 − 1)e^(−2ax^2)" where this reads "2a(2ax^2 − 1)e^(−2ax^2)". (d^2/dx^2)e^(−ax^2) = (4a^2x^2 − 2a)e^(−ax^2) = 2a(2ax^2 − 1)e^(−ax^2).]

= −8ħ^2 a^2((2a)/π)^(1/2)∫0^∞ x^2 e^(−2ax^2)dx + 4ħ^2 a((2a)/π)^(1/2)∫0^∞ e^(−2ax^2)dx

[Note: corrected; the source prints "= −4ħ^2 a^2" where this reads "= −8ħ^2 a^2". Folding the integral from −∞ to ∞ onto 0 to ∞ doubles both terms, so −8ħ^2a^2 goes with +4ħ^2a; with −4ħ^2a^2 the line would give (3/2)aħ^2, not aħ^2.]

= aħ^2

We use Equation (3.8.1) to check on the uncertainty

Δx^2 = ⟨x^2⟩−⟨x⟩^2 = 1/(4a) − 0

Δx = √(Δx^2) = 1/(2√a)

Δp^2 = ⟨p^2⟩−⟨p⟩^2 = aħ^2 − 0

Δp = √(Δp^2) = ħ√a

Finally we have

ΔpΔx = (1/(2√a))(ħ√a) = ħ/2

Not only does the Heisenburg uncertainly principle hold (Equation (3.8.8)), but the equality is established for this wavefunction. This is because the Gaussian wavefunction (Equation (Ex1eq1)) is special as discussed later.

### Exercise 3.8.1

A particle is in a state described by the ground state wavefunction of a particle in a box

ψ = √(2/L) sin((πx)/L)

where L is the length of the box and 0 ≤ x ≤ L. Verify that the value of the product ∆p∆x is consistent with the predictions from the uncertainty principle (Equation (3.8.8)).

The uncertainty principle is a consequence of the wave property of matter. A wave has some finite extent in space and generally is not localized at a point. Consequently there usually is significant uncertainty in the position of a quantum particle in space.
