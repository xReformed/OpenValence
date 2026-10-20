---
title: "3.6: Wavefunctions Must Be Normalized"
book: "Physical Chemistry (LibreTexts)"
chapter: "3: The Schrödinger Equation and a Particle in a Box"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03%3A_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.06%3A_Wavefunctions_Must_Be_Normalized"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Calculate the probability of an event from the wavefunction
- Understand the utility and importance of normalizing wavefunctions
- Demonstrate how to normalize an arbitrary wavefunction

## Extracting Probabilities

Since wavefunctions can in general be complex functions, the physical significance of wavefunctions cannot be found from the functions themselves because the √(−1) is not a property of the physical world. Rather, the physical significance is found in the product of the wavefunction and its complex conjugate, i.e. the absolute square of the wavefunction, which also is called the square of the modulus.

Ψ^*(r, t)Ψ(r, t) = |Ψ(r, t)|^2

where r is a vector specifying a point in three-dimensional space. The square is used, rather than the modulus itself, just like the intensity of a light wave depends on the square of the electric field. Remember that the Born interpretation is that ψ^*(ri)ψ(ri) dτ is the probability that the electron is in the volume dτ located at ri. The Born interpretation therefore calls the wavefunction the probability amplitude, the absolute square of the wavefunction is called the probability density, and the probability density times a volume element in three-dimensional space (dτ) is the probability.

Since the squared magnitude |ψ|^2 of the wavefunction of a particle can be interpreted as the probability density, then the probability for a one-dimensional wavefunction between the points x = a and x = b can be calculated by

P_1D = ∫_a^b |ψ(x)|^2 dx

This is just the area under the under the |ψ|^2 curve (Figure 3.6.1 ).

Figure 3.6.1: The probability can be interpreted as an area under the probability density |ψ|^2. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)
Diagram showing variables related to a probability density function, featuring labels for A, B, C, and x, with an area under a curve.

If the probability of a two-dimensional wavefunction is being evaluated, then Equation (prob) will be amended to included a double integral:

P_2D = ∬_(a1, a2)^(b1, b2) |ψ(x, y)|^2 dxdy

and similarly a triple integral would be used for calculating probabilities of three-dimensional wavefunctions:

P_3D = ∭_(a1, a2, a3)^(b1, b2, b3) |ψ(x, y, z)|^2 dxdydz

### Example 3.6.1 : Probability of a Particle in a Box

Calculate the probability of finding an electron at L/2 in a box of infinite height within an interval ranging from L/2 − L/200 to L/2 + L/200 for the n = 1 and n = 2 states. Since the length of the interval, L/100, is small compared to L, you can get an approximate answer without explicitly integrating.

**Solution**

The wavefunction for the particle in a box is

ψ(x) = √(2/L) sin((nπx)/L)

and the wavefunction for the n = 1 state is

ψ_(n=1) = √(2/L) sin((πx)/L)

From the interpretation that the wavefunction modulus squared is the probability density, we can establish the following integral to solve the problem (note the limits of integration)

|ψ_(n=1)|^2 = (2/L)∫_((99L)/200)^{(101L)/200} sin^2((πx)/L)dx

[Note: the integral of the probability density over an interval is a probability: the left side here, and in the approximations below, should be the probability P of finding the particle between 99L/200 and 101L/200, not |ψ|^2. The text is left as printed.]

We can solve this, but we can also recognize that Equation (Ex3) is just calculating an area that can be approximated as the area of a rectangle with a height ((2/L) sin^2((πx)/L) at x = L/2) and width Δx = L/100 (Figure 3.6.2 ).

Figure 3.6.2: The probability can be interpreted as an area under the probability density |ψ1|^2. (CC BY-NC; Ümit Kaya via LibreTexts)
Graph showing a wave function Ψ plotted against a horizontal axis from 0 to L, with a highlighted region labeled dx.

This area can be computed:

|ψ_(n=1)|^2≈(2/L)~~sin^2((π(L/2))/L)~~ (→ 1)Δx

≈(2/L)(L/100)

≈1/50 = 0.02

Given that the wavefunction is sinusoidal, the actual probability of finding an electron within the given interval at L/2 should be slightly less because of the behavior of the sinusoid at L/2 is at its peak of the wavefunction (Figure 3.6.2 ).

The wavefunction for the n = 2 state

ψ_(n=2) = √(2/L) sin((2πx)/L)

so the integral that we need to construct and solve is

|ψ_(n=2)|^2 = (2/L)∫_((99L)/200)^{(101L)/200} sin^2((2πx)/L)dx

We can use the same graphical interpretation as above, but using the probability density of the ψ2 wavefunction (Figure 3.6.3 ).

Figure 3.6.3: The probability can be interpreted as an area under the probability density |ψ2|^2. (CC BY-NC Copyright; Ümit Kaya via LibreTexts)
Graph showing a wave function (Ψ) with peaks and troughs along the x-axis labeled from 0 to L.

|ψ_(n=2)|^2≈(2/L)~~sin^2((2π(L/2))/L)~~ (→ 0)Δx

[Note: corrected; the source prints "|ψ_(n=1)|^2≈(2/L)~~sin^2((2π" where this reads "|ψ_(n=2)|^2≈(2/L)~~sin^2((2π". This is the n = 2 calculation.]

≈0

The probability of finding an electron in a box at L/2 for n = 2 is approximately zero.

### Exercise 3.6.1

Show that the square of the modulus of Ψ(r, t) = ψ(r)e^(−iωt) is time independent. What insight regarding stationary states do you gain from this proof?

**Solution**

The square of the modulus of a wavefunction is Ψ(r, t)^*Ψ(r, t) so for wavefunctions of this form, the square of the modulus is

Ψ(r, t)^*Ψ(r, t) = ψ(r)~~e^(+iωt)~~ψ(r)~~e^(−iωt)~~

[Note: the complex conjugate of Ψ is ψ^*(r)e^(+iωt), so the product is ψ^*(r)ψ(r) = |ψ(r)|^2, which is time independent. The text is left as printed.]

= ψ(r)^2

Hence, there is no time dependence to the modulus of wavefunctions of this work, which from the probability interpretation of the wavefunction means that the probability density is time-independent.

## Normalizing of the Wavefunction

A probability is a real number between 0 and 1, inclusive. An outcome of a measurement which has a probability 0 is an impossible outcome, whereas an outcome which has a probability 1 is a certain outcome. According to Equation (3.6.1), the probability of a measurement of x yielding a result between −∞ and + ∞ is

P_(x∈−∞:∞)(t) = ∫_−∞^∞ |ψ(x, t)|^2 dx.

However, a measurement of x must yield a value between −∞ and + ∞, since the particle has to be located somewhere. It follows that P_(x∈−∞:∞)(t) = 1, or

∫_−∞^∞ |ψ(x, t)|^2 dx = 1,

which is generally known as the normalization condition for the wavefunction.

### Example 3.6.2 : Normalizing a Gaussian Wavepacket

Normalize the wavefunction of a Gaussian wave packet, centered on x = xo with characteristic width σ:

ψ(x) = ψ0 e^{−(x − x0)^2/(4σ^2)}.

**Solution**

To determine the normalization constant ψ0, we simply substitute Equation (3.6.4) into Equation (3.6.3), to obtain

|ψ0|^2∫_−∞^∞ e^{−(x − x0)^2/(2σ^2)}dx = 1.

Changing the variable of integration to y = (x − x0)/(√(2)σ), we get

|ψ0|^2√(2)σ∫_−∞^∞ e^(−y^2)dy = 1.

However, from an integral table we know

∫_−∞^∞ e^(−y^2)dy = √(π),

which implies that

|ψ0|^2 = 1/((2πσ^2)^(1/2)).

Hence, a general normalized Gaussian wavefunction takes the form

ψ(x) = ((e^(iφ))/((2πσ^2)^(1/4)))e^{−(x − x0)^2/(4σ^2)}

where φ is an arbitrary real phase-angle.

### Exercise 3.6.2

Normalize this wavefunction for a particle in a harmonic well:

ψ = xe^(−x^2)

**Answer**

ψ = 2(2/π)^(1/4)xe^(−x^2)

## Time Dependence to the Wavefunction

Now, it is important to demonstrate that if a wavefunction is initially normalized then it stays normalized as it evolves in time according to the time-dependent Schrödinger's equation. If this is not the case then the probability interpretation of the wavefunction is untenable, since it does not make sense for the probability that a measurement of x yields any possible outcome (which is, manifestly, unity) to change in time. Hence, we require that

(d/dt)∫_−∞^∞ |ψ(x, t)|^2 dx = 0

for wavefunctions satisfying the time-dependent Schrödinger's equation (this results from the time-dependent Schrödinger's equation and Equation (3.6.3)). The above equation gives

(d/dt)∫_−∞^∞ ψ^*ψ dx = ∫_−∞^∞ (((∂ψ^*)/(∂t))ψ + ψ^*(∂ψ)/(∂t))dx = 0.

Now, multiplying Schrödinger's equation by ψ^*/(iħ), we obtain

ψ^*(∂ψ)/(∂t) = (i/(2 m))ψ^*(∂^2ψ)/(∂x^2) − (i/ħ)V|ψ|^2

[Note: dividing −(ħ^2/(2m))∂^2ψ/∂x^2 by iħ gives (iħ/(2m))∂^2ψ/∂x^2, so the factor i/(2m) in this equation and the next three should be iħ/(2m). The conclusion, that a normalized wavefunction stays normalized, is unaffected. The text is left as printed.]

The complex conjugate of this expression yields

ψ (∂ψ^*)/(∂t) = −(i/(2 m))ψ (∂^2ψ^*)/(∂x^2) + (i/ħ)V|ψ|^2

since

- (AB)^* = A^*B^*,
- A^** = A, and
- i^* = −i.

Summing Equation (3.6.12) and (3.6.13) results in

((∂ψ^*)/(∂t))ψ + ψ^*(∂ψ)/(∂t) = (i/(2 m))(ψ^*(∂^2ψ)/(∂x^2) − ψ (∂^2ψ^*)/(∂x^2))

= i/(2 m) · ((∂)/(∂x))(ψ^*(∂ψ)/(∂x) − ψ (∂ψ^*)/(∂x)).

Equations (3.6.11) and (3.6.14) can be combined to produce

(d/dt)∫_−∞^∞ |ψ|^2 dx = (i/(2 m))[ψ^*(∂ψ)/(∂x) − ψ (∂ψ^*)/(∂x)]_−∞^∞ = 0.

The above equation is satisfied provided the wavefunction converges

lim_(|x| → ∞)|ψ| = 0

However, this is a necessary condition for the integral on the left-hand side of Equation (3.6.3) to converge. Hence, we conclude that all wavefunctions which are square-integrable [i.e., are such that the integral in Equation (3.6.3) converges] have the property that if the normalization condition Equation (3.6.3) is satisfied at one instant in time then it is satisfied at all subsequent times.

### Not all Wavefunctions can be Normalized

Not all wavefunctions can be normalized according to the scheme set out in Equation (3.6.3). For instance, a planewave wavefunction for a quantum free particle

Ψ(x, t) = ψ0 e^{i(kx − ωt)}

is not square-integrable, and, thus, cannot be normalized. For such wavefunctions, the best we can say is that

P_(x∈a:b)(t)∝∫_a^b |Ψ(x, t)|^2 dx.

In the following, all wavefunctions are assumed to be square-integrable and normalized, unless otherwise stated.
