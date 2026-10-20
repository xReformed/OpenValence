---
title: "3.5: The Energy of a Particle in a Box is Quantized"
book: "Physical Chemistry (LibreTexts)"
chapter: "3: The Schrödinger Equation and a Particle in a Box"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03%3A_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.05%3A_The_Energy_of_a_Particle_in_a_Box_is_Quantized"
author: "Smblinder"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Solve the particle-in-a-box model used to describing a trapped particle in 1 D well
- Characterize the particle-in-a-box eigenstates (i.e., wavefunctions) and the eigenenergies as a function of the quantum number
- Demonstrate that the eigenstates are orthogonal

The particle in the box model system is the simplest non-trivial application of the Schrödinger equation, but one which illustrates many of the fundamental concepts of quantum mechanics. For a particle moving in one dimension (again along the x- axis), the Schrödinger equation can be written

−(ħ^2/(2 m))ψ''(x) + V(x)ψ(x) = Eψ(x)

Assume that the particle can move freely between two endpoints x = 0 and x = L, but cannot penetrate past either end. This is equivalent to a potential energy dependent on x with

V(x) = {0, 0 ≤ x ≤ L; ∞, x < 0 and x > L}

This potential is represented in Figure 3.5.1 . The infinite potential energy constitutes an impenetrable barrier since the particle would have an infinite potential energy if found there, which is clearly impossible.

Figure 3.5.1: The barriers outside a one-dimensional box have infinitely large potential, while the interior of the box has a constant, zero potential. (CC-BY 4.0; OpenStax).
Graph showing potential energy with regions V = ∞ at x = 0 and x = L, and V = 0 between them on a horizontal axis.

The particle is thus bound to a "potential well" since the particle cannot penetrate beyond x = 0 or x = L

ψ(x) = 0    for x < 0 and x > L

By the requirement that the wavefunction be continuous, it must be true as well that

ψ(0) = 0    and    ψ(L) = 0

which constitutes a pair of boundary conditions on the wavefunction within the box. Inside the box, V(x) = 0, so the Schrödinger equation reduces to the free-particle form:

−(ħ^2/(2 m))ψ''(x) = Eψ(x)

with 0 ≤ x ≤ L.

We again have the differential equation

ψ''(x) + k^2ψ(x) = 0

with

k^2 = (2 mE)/ħ^2

The general solution can be written

ψ(x) = A sin kx + B cos kx

where A and B are constants to be determined by the boundary conditions in Equation (3.5.4). By the first condition, we find

ψ(0) = A sin 0 + B cos 0 = B = 0

The second boundary condition at x = L then implies

ψ(L) = A sin kL = 0

[Note: corrected; the source prints "ψ(a) = A sin kL = 0" where this reads "ψ(L) = A sin kL = 0". The boundary is at x = L.]

It is assumed that A ≠ 0, for otherwise ψ(x) would be zero everywhere and the particle would disappear (i.e., the trivial solution). The condition that sin kL = 0 implies that

[Note: corrected; the source prints "The condition that sin kx = 0" where this reads "The condition that sin kL = 0". The condition is at x = L, as the equation below shows.]

kL = nπ

where n is a integer, positive, negative or zero. The case n = 0 must be excluded, for then k = 0 and again ψ(x) would vanish everywhere. Eliminating k between Equation (3.5.6) and (3.5.10), we obtain

En = ((ħ^2π^2)/(2 mL^2)) n^2 = (h^2/(8 mL^2))n^2

with n = 1,2, ,3....

These are the only values of the energy which allows solutions of the Schrödinger Equation (3.5.5) consistent with the boundary conditions in Equation (3.5.4). The integer n, called a quantum number, is appended as a subscript on E to label the allowed energy levels. Negative values of n add nothing new because the energies in Equation (3.5.11) depends on n^2.

Figure 3.5.2: A plot of ψn(x) for the first four wavefunctions. (CC-BY 4.0; OpenStax).
Graph depicting wave functions in a quantum system with multiple graphs and labeled axes for different states.

Figure 3.5.2 shows part of the energy-level diagram for the particle in a box. The occurrence of discrete or quantized energy levels is characteristic of a bound system, that is, one confined to a finite region in space. For the free particle, the absence of confinement allowed an energy continuum. Note that, in both cases, the number of energy levels is infinite-denumerably infinite for the particle in a box, but nondenumerably infinite for the free particle.

The particle in a box assumes its lowest possible energy when n = 1, namely

E1 = h^2/(8 mL^2)

The state of lowest energy for a quantum system is termed its ground state.

### Zero Point Energy

An interesting point is that E1 > 0, whereas the corresponding classical system would have a minimum energy of zero. This is a recurrent phenomenon in quantum mechanics. The residual energy of the ground state, that is, the energy in excess of the classical minimum, is known as zero point energy. In effect, the kinetic energy, hence the momentum, of a bound particle cannot be reduced to zero. The minimum value of momentum is found by equating E1 to p^2/2m, giving p_min = ±h/2L. This can be expressed as an uncertainty in momentum given by Δp≈h/L. Coupling this with the uncertainty in position, Δx≈L, from the size of the box, we can write

ΔxΔp≈h

This is in accord with the Heisenberg uncertainty principle.

The particle-in-a-box eigenfunctions are given by Equation (3.5.14), with B = 0 and k = nπ/L = a, in accordance with Equation (3.5.10)

ψn(x) = A sin((nπx)/L)

with n = 1,2,3....

These, like the energies, can be labeled by the quantum number n. The constant A, thus far arbitrary, can be adjusted so that ψn(x) is normalized. The normalization condition is, in this case,

∫0^L [ψn(x)]^2 dx = 1

[Note: corrected; the source prints "∫0^a [ψn(x)]^2 dx = 1" where this reads "∫0^L [ψn(x)]^2 dx = 1". The box runs from 0 to L.]

the integration running over the domain of the particle 0 ≤ x ≤ L. Substituting Equation (3.5.14) into Equation (3.5.15),

A^2 ∫0^L sin^2 ((nπx)/L)dx = A^2 (L/(nπ))∫0^(nπ) sin^2 θ dθ

= A^2 L/2 = 1

We have made the substitution θ = nπx/L and used the fact that the average value of sin^2θ over an integral number of half wavelengths equals 1/2 (alternatively, one could refer to standard integral tables). From Equation (3.5.16), we can identify the general normalization constant

A = √(2/L)

for all values of n. Finally we can write the normalized eigenfunctions:

ψn(x) = √(2/L) sin((nπx)/L)

with n = 1,2,3....

The first few eigenfunctions and the corresponding probability distributions are plotted in Figure 3.5.3 . There is a close analogy between the states of this quantum system and the modes of vibration of a violin string. The patterns of standing waves on the string are, in fact, identical in form with the wavefunctions in Equation (3.5.17).

Figure 3.5.3: The probability density distribution |ψn(x)|^2 for a quantum particle in a box for: (a) the ground state, n = 1; (b) the first excited state, n = 2; and, (c) the nineteenth excited state, n = 20. (CC-BY 4.0; OpenStax).
Graph depicting three waveforms: a smooth curve, a sinusoidal wave, and a series of rapid oscillations at the bottom.

### Nodes and Curvature

A significant feature of the particle-in-a-box quantum states is the occurrence of nodes. These are points, other than the two end points (which are fixed by the boundary conditions), at which the wavefunction vanishes. At a node there is exactly zero probability of finding the particle. The nth quantum state has, in fact, n − 1 nodes. It is generally true that the number of nodes increases with the energy of the quantum state, which can be rationalized by the following qualitative argument. As the number of nodes increases, so does the number and the steepness of the 'wiggles' in the wavefunction. It's like skiing down a slalom course. Accordingly, the average curvature, given by the second derivative, must increase. But the second derivative is proportional to the kinetic energy operator. Therefore, the more nodes, the higher the energy. This will prove to be an invaluable guide in more complex quantum systems.

### Example 3.5.1 : Excited State Probabilities

For a particle in a one-dimensional box of length L, the second excited state wavefunction (n = 3) is

ψ3 = √(2/L) sin((3πx)/L)

a. What is the probability that the particle is in the left half of the box?
b. What is the probability that the particle is in the middle third of the box?

Strategy

Probability that the particle will be found between a and b is

P(a, b) = ∫_a^b ψ^2 dx

For this problem,

ψ3 = √(2/L) sin((3πx)/L)

therefore,

P(a, b) = (2/L)∫_a^b sin^2((3πx)/L) dx

= (2/L)(x/2 − (L sin((6πx)/L))/(12π))|a^b

= (b − a)/L − (1/(6π))[sin((6πb)/L) − sin((6πa)/L)]

**Solution a**

The probability that the particle is in the left half of the box is

P(0, L/2) = (L/2 − 0)/L − (1/(6π))[sin((6π(L/2))/L) − sin((6π(0))/L)]

= 1/2

**Solution b**

The probability that the particle is in the middle third of the box

P(L/3, (2L)/3) = ((2L)/3 − L/3)/L − (1/(6π))[sin((6π((2L)/3))/L) − sin((6π(L/3))/L)]

= 1/3

### Exercise 3.5.1 : Ground State Probability

For a particle in a one-dimensional box, the ground state wavefunction is

ψ1 = √(2/L) sin((xπ)/L)

What is the probability that the particle is in the left half of the box in the ground state?

**Answer**

P(0, L/2) = (2/L)∫0^(L/2) sin^2 ((xπ)/L)dx

= 2/L · ((Lπ)/L + sin 0 + sin((Lπ)/L))/((4π)/L)

[Note: the antiderivative of sin^2(πx/L) is (2πx/L − sin(2πx/L))/(4π/L), so this line should read ((Lπ)/L − sin((Lπ)/L) + sin 0)/((4π)/L); the result, 1/2, is unchanged, as sin π = sin 0 = 0. The text is left as printed.]

= 1/2

This is the same answer as for the ψ3 state in Example 3.5.1 . This is because the eigenstate squared (.e., probability density) for the particle in a 1D box will always be symmetric around the center of the box. So there will be equal probability to be on either side (i.e., no side is favored).

### Time Dependence and Complex Nature of Wavefunctions

Recall that the time-dependence of the wavefunction with time-independent potential was discussed in Section 3.1 and is expressed as

Ψ(x, t) = ψ(x)e^(−iEt/ħ)

so for the particle in a box, these are

ψn(x) = √(2/L) sin((nπx)/L)e^(−iEn t/ħ)

with En given by Equation (3.5.11).

The phase part of Equation (PIBtime) can be expanded into a real part and a complex components. So the total wavefunction for a particle in a box is

Ψ(x, t) = (√(2/L) sin((nπx)/L))(cos((En t)/ħ)) (real part) − i( √(2/L) sin((nπx)/L))(sin((En t)/ħ)) (imaginary part)

which can be simplified (slightly) to

Ψ(x, t) = (√(2/L) sin((nπx)/L))(cos((En t)/ħ)) (real part) − (i( √(2/L) sin((nπx)/L))(cos((En t)/ħ) − π/2)) (imaginary part)

[Note: the π/2 belongs inside the cosine: sin(En t/ħ) = cos(En t/ħ − π/2). The text is left as printed.]

As discussed previously, the imaginary part of the total wavefunction oscillates out of phase by π/2 with respect to the real part (we call this "out of phase"). This is demonstrated in the time-dependent behavior of the first three eigenfunctions in Figure 3.5.4 .

Figure 3.5.4: Some trajectories of a particle in a box according to Newton's laws of classical mechanics (A), and according to the Schrödinger equation of quantum mechanics (B-D). In (B-D), the horizontal axis is position, and the vertical axis is the real part (blue) and imaginary part (red) of the wavefunction. The states (B, C, D) are energy eigenstates. (Public Domain; Sbyrnes321 via Wikipedia).
Four labeled graphs (A, B, C, D) depicting different waveforms, including a stationary point and various curves.

Note that as n increased, the energy of the wavefunction increases (Equation (3.5.11)) and both the number of nodes and antinodes increase and the frequency of oscillation of the wavefunction increases.

It is generally true in quantum systems (not just for particles in boxes) that the number of nodes in a wavefunction increases with the energy of the quantum state.

## Orthonormality of the Eigenstates

Another important property of the eigenfunctions in Equation (3.5.17) applies to the integral over a product of two different eigenfunctions (Equation (3.5.17)). It is easy to see from Figure 3.5.5 that the integral

∫0^L ψ2(x)ψ1(x)dx = 0

The integral in Equation (3.5.18) is zero when the two eignestates differ and when integrated over the entire range of the system (from −∞ to ∞ for a 1-D particle in the box, but this can be a narrow region of 0 to L since the eigenstates are zero outside of the box).

Figure 3.5.5: (Top Row): Select plots of the n = 1 (red curves), n = 2 (purple curves), n = 3 (green curves), and n = 4 (blue curves) eigenfunctions. (Bottom Row): Product of different eigenstates with positive (tan) and negative (cyan) areas emphasized. Note that the negative and positive areas perfectly cancel when added together. Created via fooplot (CC BY-NC; Ümit Kaya via LibreTexts)
Graphs displaying different waveforms with highlighted sections, including sine and other wave patterns, arranged in two rows.

To prove Equation (3.5.18) for a particle in a box model, we can use the trigonometric identity

sin α sin β = 1/2[cos(α − β) − cos(α + β)]

to show that

∫0^L ψm(x)ψn(x)dx = 0    if    m ≠ n

This property is called orthogonality. We will show in the next chapter, that this is a general result from quantum-mechanical eigenfunctions. The normalization (Equation (3.5.18)) together with the orthogonality (Equation (3.5.19)) can be combined into a single relationship

∫0^L ψm(x)ψn(x)dx = δ_mn

In terms of the Kronecker delta

δ_mn = {1, if m = n; 0, if m ≠ n}

A set of functions {ψn} which obeys Equation (3.5.20) is called orthonormal.

### Example 3.5.2

Evaluate

a. ⟨ψ3|ψ3⟩
b. ⟨ψ4|ψ4⟩
c. ⟨ψ3|ψ4⟩
d. ⟨ψ4|ψ3⟩

for the normalized wavefunctions:

|ψ3⟩ = √(2/L) sin((3πx)/L)

and

|ψ4⟩ = √(2/L) sin((4πx)/L)

Strategy

These are four different integrals and we can solve them directly or use orthonormality (Equation (3.5.21)) to evaluate.

**Solution a**

⟨ψ3|ψ3⟩ = ∫_−∞^+∞ (√(2/L) sin((3πx)/L))(√(2/L) sin((3πx)/L)) dx

= (2/L)∫_−∞^+∞ sin^2 ((3πx)/L) dx

This is an integration over an even function, so it cannot be tossed out via symmetry. We can use the Trigonometry relationship in Equation (trig) to get

(2/L)∫_−∞^+∞ sin^2 ((3πx)/L) dx = (2/L)∫_−∞^+∞ (1/2)(1 − cos((6πx)/L)) dx

and we can continue the fun. However, there is no need. Since the we can recognize that ⟨ψ3|ψ3⟩ is 1 by the normalization criteria which is folded into the orthonormal criteria (Equation (3.5.21)).

Therefore ⟨ψ3|ψ3⟩ = 1.

**Solution b**

⟨ψ4|ψ4⟩ = ∫_−∞^+∞ (√(2/L) sin((4πx)/L))(√(2/L) sin((4πx)/L)) dx

= (2/L)∫_−∞^+∞ sin^2 ((4πx)/L) dx

We can expand and solve, but again there is no need. The wavefunctions are normalized therefore ⟨ψ4|ψ4⟩ = 1.

**Solution c**

⟨ψ3|ψ4⟩ = ∫_−∞^+∞ (√(2/L) sin((3πx)/L))(√(2/L) sin((4πx)/L)) dx

= (2/L)∫_−∞^+∞ sin((3πx)/L) sin((4πx)/L) dx

We can expand this integral and evaluate, but since the integrand is odd (and even function times an odd), this integral is zero. Alternatively, we can use the orthogonality criteria into the greater orthonormal criteria (Equation (3.5.21)).

[Note: the integrals in this example are written from −∞ to +∞, but the particle-in-a-box wavefunctions are zero outside the box, so they run from 0 to L. And sin(3πx/L)sin(4πx/L) is odd about the centre of the box, x = L/2 (ψ3 is even about it and ψ4 odd), not about x = 0; that is why the integrals in Solutions c and d are zero. The text is left as printed.]

**Solution d**

⟨ψ4|ψ3⟩ = ∫_−∞^+∞ (√(2/L) sin((4πx)/L))(√(2/L) sin((3πx)/L)) dx

= (2/L)∫_−∞^+∞ sin((4πx)/L) sin((3πx)/L) dx

We can expand this integral and evaluate, but since the integrand is odd (and even function times an odd function), this integral is zero. Alternatively, we can use the orthogonality criteria into the greater orthonormal criteria (Equation (3.5.21)).

However, since the wavefunctions are real, then

⟨ψ4|ψ3⟩ = ⟨ψ3|ψ4⟩

which also means

⟨ψ4|ψ3⟩ = 0

from the results of section c.
