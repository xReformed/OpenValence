---
title: "4.1: The Wavefunction Specifies the State of a System"
book: "Physical Chemistry (LibreTexts)"
chapter: "4: Postulates and Principles of Quantum Mechanics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/04%3A_Postulates_and_Principles_of_Quantum_Mechanics/4.01%3A_The_Wavefunction_Specifies_the_State_of_a_System"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Introduce the first postulate of quantum mechanics
- Recognize invalid wavefunction categories

In classical mechanics, the configuration or state of a system is given by a point (x, p) in the space of coordinates and momenta. This specifies everything else in the system in a fully deterministic way, in that any observable Q that can be expressed as Q(x, p) can be found, and any that cannot is irrelevant. Yet, as we have seen with the diffraction of electrons, it is impossible to know both the position and momentum of the electron exactly at every point along the trajectory. This is mathematically expressed as the famous position-momentum uncertainty principle. Hence, specifying a state by (x, p) in classical mechanics clearly will not work in quantum mechanics. So what specifies the state of a quantum system? This is where the first Postulate of quantum mechanics comes in.

### Postulate I

The state of the system is completely specified by ψ. All possible information about the system can be found in the wavefunction ψ.

The properties of a quantum mechanical system are determined by a wavefunction ψ(r, t) that depends upon the spatial coordinates of the system and time, r and t. For a single particle system, r is the set of coordinates of that particle r = (x1, y1, z1). For more than one particle, r is used to represent the complete set of coordinates r = (x1, y1, z1, x2, y2, z2, …xn, yn, zn). Since the state of a system is defined by its properties, ψ specifies or identifies the state and sometimes is called the state function rather than the wavefunction.

What does ψ mean? This is best answered in terms of the probability density P(x) that determines the probability (density) that an object in the state ψ(x) will be found at position x (the Born interpretation).

P(x) = ψ^*(x)ψ(x)

= |ψ(x)|^2

Hence, for valid (e.g., well-behaved) wavefunctions, the normalized probability in Equation (norm) holds true, such that the integral over all space is equal to 1.

∫_−∞^∞ ψ^*(x)ψ(x) dx = 1

Equation (4.1.1) means that the chance to find a particle is 100% somewhere within all space (e.g. somewhere between −∞ and + ∞). A wavefunction is said to be square-integrable if Equation (4.1.1) can be satisfied (so that the Born Interpretation to be applicable).

### Definition: Square-Integrable Functions

A complex-valued function, f(x), is a square-integrable function if the integral of the square of the absolute value is finite.

∫_−∞^∞ f^*(x)f(x) dx < ∞

For this to be true, the integrals of the positive and negative portions of the real and imaginary parts of f(x) must both be finite.

Let us examine this set of examples in further detail in Figure 4.1.1 . The first wavefunction ψ1 is sharply peaked at a particular value of x, and the probability density, being its square, is likewise peaked there as well. This is the wavefunction for a particle well localized at a position given by the center of the peak, as the probability density is high there, and the width of the peak is small, so the uncertainty in the position is very small.

Figure 4.1.1: Examples of good wavefunctions, ψ(x), (red, top) and corresponding probability densities, P(x), (blue, bottom).
Four graphs showing voltage input and output waveforms, exhibiting distinct oscillations and plateau phases.

[Note: the line after the caption is the image's alt text, which reads as machine-written and is misleading: the image shows example wavefunctions and their probability densities, as the caption above says, not voltage waveforms.]

The second wavefunction ψ2 has the same peak profile, but shifted to a different position center. All of the properties of the first wavefunction hold here too, so this simply describes a particle that is well-localized at that different position. The third and fourth wavefunctions ψ3 and ψ4 respectively look like sinusoids of different spatial periods. The wavefunctions are actually complex of the form

ψ(x) = Ne^(ikx)

so only the real part is being plotted in Figure 4.1.1 . Note that even though the wavenumbers, k, of the oscillating wavefunctions are different,

[Note: corrected; the source prints "the periods, k," where this reads "the wavenumbers, k,". k is the wavenumber; the wavelength is 2π/k.]

P(x) = ψ^*(x)ψ(x)

= |Ne^(ikx)|^2

[Note: corrected; the source prints "= |e^(ikx)|^2" where this reads "= |Ne^(ikx)|^2". The wavefunction is Ne^(ikx), and the next line keeps N.]

= N^2(e^(−ikx))(e^(ikx))

= N^2

for all k, so the corresponding probability densities, P(x), are the same except for the normalization constant (Equation (norm)). We saw before that it does not make a whole lot of sense to think of a sinusoidal wave as being localized in some place. Indeed, the positions for these two wavefunctions are ill-defined, so they are not well-localized, and the uncertainty in the position is large in each case. This is Heisenberg Uncertainty Principle in action.

## Ill-behaved (invalid) Wavefunctions

The Born interpretation in Equation (norm) means that many wavefunctions which would be acceptable mathematical solutions of the Schrödinger equation are not acceptable because of their implications for the physical properties of the system. To satisfy this interpretation, wavefunctions must be:

- single valued,
- continuous, and
- finite.

These aspects mean that the valid wavefunction must be single-valued, it cannot have an undefined slope, and cannot go to −∞ or + ∞. For example, the wavefunction must not be infinite over any finite region. If it is, then the integral in Equation (4.1.1) is equal to infinity. This implies that the particle described by such a wavefunction has a zero probability of being anywhere where the wavefunction is not infinite, but is certain to be found at all points where the wavefunction is infinite.

[Note: corrected; the source prints "must be one-to-one" where this reads "must be single-valued". A wavefunction must have one value at each point, as the paragraph below explains; one-to-one would also rule out valid wavefunctions such as sin x, which takes each value at many points.]

Figure 4.1.2: This function is an invalid wavefunction since the amplitude is going to infinity over a region (the middle in this case). (CC BY-NC; Ümit Kaya via LibreTexts)
Graph showing a curve with a steep dip in the center and two upward slopes on each side, labeled along the top.

The Born interpretation also renders unacceptable solutions of the Schrödinger equation for which |ψ(x)|^2 has more than one value at any point. This would suggest that there were multiple different probabilities of finding the particle at that point, which is clearly absurd. The requirement that the square modulus of the wavefunction must be single-valued usually implies that the wavefunction itself must be single valued. The function in Figure 4.1.3 violates this requirement. The grey lines indicate the region where the wavefunction is multivalued.

Figure 4.1.3: This function is an invalid wavefunction since it is not a proper function (i. e., not single-valued). (CC BY-NC; Ümit Kaya via LibreTexts)
Graph showing a green curve with two vertical dashed lines, indicating points on the x-axis and a blue frame.

[Note: corrected; the source prints "(i. e., not one-to-one)" where this reads "(i. e., not single-valued)". The figure shows a curve with more than one value at some x.]

Further restrictions arise because the wavefunction must satisfy the Schrödinger equation, which is a second-order differential equation. This implies that the second derivative of the function must exist, which implies that the first derivative of the wavefunction to exist (otherwise the second derivative is also undefined and the wavefunction cannot be a solution of the Schrödinger equation). The functions in Figure 4.1.4 are also not acceptable for these reasons.

[Image: Graph showing a green curve representing a function with a vertical asymptote, along with a set of blue vertical lines at the top.]

[Image: Graph of a fluctuating function, showing peaks and valleys, with a vertical dashed line marking the midpoint.]

Figure 4.1.4: These functions are invalid wavefunctions. (left) The first derivative of a function gives its gradient at a given point, and it thus exists as long as the function is continuous - only if there is a break in the function is there a point at which its first derivative does not exist. (right) The second derivative of this wavefunction is discontinuous at the point indicated, where the gradient of the line changes by more than 180º. In practice, this requirement may be somewhat flexible, particularly if the potential energy of the system shows rapid changes with distance. (CC BY-NC; Ümit Kaya via LibreTexts)

[Note: a continuous function can still lack a first derivative at a point where it has a kink, as |x| does at x = 0. The text is left as printed.]

### Exercise 4.1.1

Determine if each of the following functions is acceptable as a wavefunction over the indicated regions:

a. cos x over (0, ∞)
b. e^x over (−∞, ∞)
c. e^−x over [0, ∞)
d. tan θ over [0,2π]

[Note: corrected; the source prints "tan θ over [0,2θ]" where this reads "tan θ over [0,2π]". The interval is 0 to 2π, as Solution d's discontinuities at π/2 and 3π/2 show.]

**Solution a**

This is not an acceptable wavefunction. It is single-valued across the entire range. There is a single value for each value of x. It is continuous over the defined limits of integration, as we can see from a plot given below. However, it is not square-integrable. ∫0^∞ |cos(x)|^2 dx ≮ ∞

[Image: Graph of a sine wave, showing periodic fluctuations above and below a horizontal axis.]

**Solution b**

This is not an acceptable wavefunction. Over the limits of integration from −∞ to ∞, this function is not square-integrable. Note in the plot below, how the function is indefinite approaching the limits of ∞.

[Image: Graph showing an exponential curve, starting near the origin and rising steeply as values increase.]

**Solution c**

This is an acceptable wavefunction over the given limits. It is finite over the given limits. It is continuous within given limits. It is single-valued. It is square-integrable with ∫0^∞ |Ψ(x)|^2 dx = 1/2.

[Image: Graph of an exponential decay curve approaching zero, with the x-axis labeled 0 to 90 and the y-axis showing values decreasing from 1.]

**Solution d**

This is not an acceptable wavefunction. It is discontinuous over the limits of integration.

[Image: Graph showing a curve approaching the y-axis from the left and the x-axis from the bottom, indicating asymptotic behavior.]

## Contributors and Attributions

- Prof. Allan Adams, Prof. Matthew Evans, Prof. Barton Zwiebach (used with permission, MIT OpenCourseWare)
