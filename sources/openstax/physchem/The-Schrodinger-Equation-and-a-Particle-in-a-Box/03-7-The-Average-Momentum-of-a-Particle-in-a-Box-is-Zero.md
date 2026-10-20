---
title: "3.7: The Average Momentum of a Particle in a Box is Zero"
book: "Physical Chemistry (LibreTexts)"
chapter: "3: The Schrödinger Equation and a Particle in a Box"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03%3A_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.07%3A_The_Average_Momentum_of_a_Particle_in_a_Box_is_Zero"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Calculate the expectation value for a measurement
- Apply the expectation value concept to calculate average properties of a participle in a box model
- Understand the origin of a zero-point energy/zero-point motion.
- Extend the concept of orthogonality from vectors to mathematical functions (and wavefunctions).

Now that we have mathematical expressions for the wavefunctions and energies for the particle-in-a-box, we can answer a number of interesting questions. The answers to these questions use quantum mechanics to predict some important and general properties for electrons, atoms, molecules, gases, liquids, and solids. Key to addressing these questions is the formulation and use of expectation values. This is demonstrated below and used in the context of evaluating average properties (momentum of the particle in a box for the case below).

## Classical Expectation Values

The expectation value is the probabilistic expected value of the result (measurement) of an experiment. It is not the most probable value of a measurement; indeed the expectation value may even have zero probability of occurring. The expected value (or expectation, mathematical expectation, mean, or first moment) refers to the value of a variable one would "expect" to find if one could repeat the random variable process an infinite number of times and take the average of the values obtained. More formally, the expected value is a weighted average of all possible values.

### Example 3.7.1 : Classical Expectation Value of Exam Scores (a discretized example)

A classical example is calculating the expectation value (i.e. average) of the exam grades in the class. For example if the class scores for an exam were

| 65 | 67 | 94 | 43 | 67 | 76 | 94 | 67 |
| --- | --- | --- | --- | --- | --- | --- | --- |

The discrete way is to sum up all scores and divide by the number of students:

⟨s⟩ = (Σi^N s(i))/N

which of this example of scores is

⟨s⟩ = (65 + 67 + 94 + 43 + 67 + 76 + 94 + 67)/8

[Note: corrected; the source prints "+ 76 + 94 + 76)/8" where this reads "+ 76 + 94 + 67)/8". The last score is 67, as in the table above; the sum, 573, gives the average shown.]

= 71.625

Notice that the average is not an allowable score on an individual exam. Equation (Cl1) can be rewritten with "probability" or "probability weights"

⟨s⟩ = Σi^N s(i)Ps(i)

where Ps(i) is the probability of observing a score of s. This is just the number of times it occurs in a dataset divided by the number of elements in that data set. Applying Equation (Cl2) to the set of scores, we need to calculate these weights:

| Score | 65 | 67 | 94 | 43 | 76 |
| --- | --- | --- | --- | --- | --- |
| Ps | 1/8 | 3/8 | 2/8 | 1/8 | 1/8 |

As with all probabilities, the sum of all probabilities possible must be one. These confirm that for the weights here:

1/8 + 3/8 + 2/8 + 1/8 + 1/8 = 8/8 = 1

This is the discretized "normalization" criterion (the same as why we normalize wavefunctions).

So, now we can use Equation (Cl2) properly

⟨s⟩ = 65 × 1/8 + 67 × 3/8 + 94 × 2/8 + 43 × 1/8 + 76 × 1/8

= 71.625

Hence, Equation (Cl2) gives the same result, as expected, from Equation (Cl1).

## Quantum Expectation Values

The extension of the classical expectation (average) approach in Example 3.7.1 using Equation (Cl2) to evaluating quantum mechanical expectation values requires three small changes:

1. Switch from descretized to continuous variables
2. Substitute the wavefunction squared for the probability weights (i.e., the probability distribution)
3. Use an operator instead of the scalar

Hence, the quantum mechanical expectation value ⟨o⟩ for an observable, o, associated with an operator, Ô, is given by

⟨o⟩ = ∫_−∞^+∞ ψ^*Ôψ dx

where x is the range of space that is integrated over (i.e., an integration over all possible probabilities). The expectation value changes as the wavefunction changes and the operator used (i.e, which observable you are averaging over).

In general, changing the wavefunction changes the expectation value for that operator for a state defined by that wavefunction.

## Average Energy of a Particle in a Box

If we generalize this conclusion, such integrals give the average value for any physical quantity by using the operator corresponding to that physical observable in the integral in Equation (expect). In the equation below, the symbol ⟨H⟩ is used to denote the average value for the total energy.

⟨H⟩ = ∫_−∞^∞ ψ^*(x)Ĥψ(x)dx

= ∫_−∞^∞ ψ^*(x)K̂Êψ(x)dx + ∫_−∞^∞ ψ^*(x)V̂ψ(x)dx

= ∫_−∞^∞ ψ^*(x)((−ħ^2)/(2 m))((∂^2)/(∂x^2))ψ(x)dx (average kinetic energy) + ∫_−∞^∞ ψ^*(x)V̂(x)ψ(x)dx (average potential energy)

The Hamiltonian operator consists of a kinetic energy term and a potential energy term. The kinetic energy operator involves differentiation of the wavefunction to the right of it. This step must be completed before multiplying by the complex conjugate of the wavefunction. The potential energy, however, usually depends only on position and not momentum (i.e., it involves conservative forces). The potential energy operator therefore only involves the coordinates of a particle and does not involve differentiation. For this reason we do not need to use a caret over V in Equation (3-35).

Equation (3-35) can be simplified

⟨H⟩ = ⟨KE⟩ + ⟨V⟩

The potential energy integral then involves only products of functions, and the order of multiplication does not affect the result, e.g. 6×4 = 4×6 = 24. This property is called the commutative property. The average potential energy therefore can be written as

⟨V⟩ = ∫_−∞^∞ V(x)ψ^*(x)ψ(x)dx

This integral is telling us to take the probability that the particle is in the interval dx at x, which is ψ^*(x)ψ(x)dx, multiply this probability by the potential energy at x, and sum (i.e., integrate) over all possible values of x. This procedure is just the way to calculate the average potential energy ⟨V⟩ of the particle.

### Exercise 3.7.2 : Particle in Box

Evaluate the two integrals in Equation (3-35) for the PIB wavefunction ψ(x) = √(2/L) sin(kx) with the potential function V(x) = 0 from 0 to the length of a box L with k = π/L.

**Solution**

The average kinetic energy is

⟨KE⟩ = ∫0^L (√(2/L)) sin(kx)((−ħ^2)/(2 m))((∂^2)/(∂x^2))(√(2/L)) sin(kx)dx

= (2/L)∫0^L sin(kx)((−ħ^2)/(2 m))((∂)/(∂x)) cos(kx)(k)dx

= (2/L)∫0^L sin(kx)((−ħ^2)/(2 m)) sin(kx)(k)(−k)dx

= (2/L)((k^2ħ^2)/(2 m))∫0^L sin^2(kx)dx

We can solve this intergral using the standard half-angle representation from an integral table. Or we can recognize that we already did this integral when we normalized the PIB wavefunction by rewriting this integral:

⟨KE⟩ = (2/L)((k^2ħ^2)/(2 m))∫0^L sin^2(kx)dx

= ((k^2ħ^2)/(2 m))∫0^L (2/L) sin^2(kx)dx

= ((k^2ħ^2)/(2 m))~~∫0^L ψ^*(x)ψ(x)dx~~ (→ 1)

= (k^2ħ^2)/(2 m)

Thus, the average value for the total energy of this particular system is

⟨KE⟩ = (k^2ħ^2)/(2 m) = (π^2ħ^2)/(2 mL^2)

Hence, the average kinetic energy of the wavefunction is dependent on the n quantum number

The average potential energy is

⟨V⟩ = ∫_−∞^∞ sin(kx)0 sin(kx)dx = 0

Thus, the average potential energy of the PIB is 0 irrespective of the wavefunction.

Hence via Equation (3-35 braket) for this system and set of wavefunctions

⟨H⟩ = (π^2ħ^2)/(2 mL^2)

This is the same result obtained from solving the eigenvalue equation for the PIB. However, if the wavefunctions used were NOT eigenstates of energy, then we cannot use the eigenvalue approach and need to rely on the expectation values to describe the energy of the system.

What is the lowest energy for a particle in a box? The lowest energy level is E1, and it is important to recognize that this lowest energy of a particle in a box is not zero. This finite energy is called the zero-point energy, and the motion associated with this energy is called the zero-point motion. Any system that is restricted to some region of space is said to be bound. The zero-point energy and motion are manifestations of the wave properties and the Heisenberg Uncertainty Principle, and are general properties of bound quantum mechanical systems.

### Exercise 3.7.2 : Progressing to the Classical Limit

What happens to the energy level spacing for a particle-in-a-box when mL^2 becomes much larger than h^2? What does this result imply about the relevance of quantization of energy to baseballs in a box between the pitching mound and home plate? What implications does quantum mechanics have for the game of baseball in a world where h is so large that baseballs exhibit quantum effects?

**Answer**

As mL^2 becomes much larger than h^2, as everyday objects are, the spacing between energy levels becomes much smaller. This shows how the quantizations of energy levels become irrelevant for an everyday object, as the quantizations of the energy of baseballs in a box between the pitching mound and home plate would appear particularly continuous for such a relatively large mass and box length. If h were so large that a baseball experiences quantum effects then a game of baseball would be far less predictable, in a classical world the position of a baseball can be easily predicted by the everyday understanding of projectile motion, however, in such a quantum world the baseball would not behave with expected projectile motion but instead behave wave-like with a probability of being in a certain position.

The first derivative of a function is the rate of change of the function, and the second derivative is the rate of change in the rate of change, also known as the curvature. A function with a large second derivative is changing very rapidly. Since the second derivative of the wavefunction occurs in the Hamiltonian operator that is used to calculate the energy by using the Schrödinger equation, a wavefunction that has sharper curvatures than another, i.e. larger second derivatives, should correspond to a state having a higher energy. A wavefunction with more nodes than another over the same region of space must have sharper curvatures and larger second derivatives, and therefore should correspond to a higher energy state.

### Exercise 3.7.3 : Nodes and Energies

Identify a relationship between the number of nodes in a wavefunction and its energy by examining the graphs you made above. A node is the point where the amplitude passes through zero. What does the presence of many nodes mean about the shape of the wavefunction?

## Average Position of a Particle in a Box

We can calculate the most probable position of the particle from knowledge of probability distribution, ψ^*ψ. For the ground-state particle in a box wavefunction with n = 1 (Figure 3.7.1a)

ψ_(n=1) = √(2/L) sin((πx)/L)

This state has the following probability distribution (Figure 3.7.1b):

ψ_(n=1)^*ψ_(n=1) = (2/L) sin^2((πx)/L)

Figure 3.7.1: (left) The ground-state (n = 1) wavefunction for a particle in a box. (right) The ground-state (n = 1) probability for a particle in a box.
Two line graphs labeled A and B. Graph A is blue with a smooth curve, while graph B is red with a similar curve.

The expectation value for position with the x̂ = x operation for any wavefunction (Equation (expect)) is

⟨x⟩ = ∫_−∞^+∞ ψ^*xψ dx

which for the ground-state wavefunction (Equation (PIB)) shown in Figure 3.7.1 is

⟨x⟩ = ∫_−∞^+∞ √(2/L) sin((πx)/L)x√(2/L) sin((πx)/L) dx

= (2/L)∫_−∞^+∞ x sin^2((πx)/L)

[Note: the particle-in-a-box wavefunction is zero outside the box, so these integrals run from 0 to L, not from −∞ to +∞; and the last one lacks its dx. The text is left as printed.]

### Solution by Inspection

Without even having to evaluate Equation (GSExpect), we can get the expectation value from simply inspecting ψ_(n=1)^*ψ_(n=1) in (Figure 3.7.1; right). This is a symmetric distribution around the center of the box (L/2) so it is just as likely to be found in the left half than the right half. Moreover, specifically at any point a fixed distance away from the mean, i.e.

ψ_(n=1)^*ψ_(n=1)(L/2 + Δx) = ψ_(n=1)^*ψ_(n=1)(L/2 − Δx)

Therefore, the particle is most likely to be found at the center of the box. So

⟨x⟩ = L/2

### Exercise 3.7.4

Use the general form of the particle-in-a-box wavefunction for any n to find the mathematical expression for the position expectation value ⟨x⟩ for a box of length L. How does ⟨x⟩ depend on n?

## Average Momentum of a Particle in a Box

What is the average momentum of a particle in the box? We start with Equation (expect) and use the momentum operator

p̂x = −iħ(∂)/(∂x)

We note that the particle-in-a-box wavefunctions are not eigenfunctions of the momentum operator (Exercise 3.7.5 ). However, this does not mean that Equation (expect) is inapplicable as Example 3.7.3 demonstrates.

[Note: corrected; the source prints "(Exercise 3.7.4 )" where this reads "(Exercise 3.7.5 )"; the source prints "as Example 3.7.2 demonstrates" where this reads "as Example 3.7.3 demonstrates". Exercise 3.7.5 is the one on momentum, and Example 3.7.3, which follows, is the demonstration.]

### Example 3.7.3 : The Average Momentum of a Particle in a Box is Zero

Even though the wavefunctions are not momentum eigenfunctions, we can calculate the expectation value for the momentum. Show that the expectation or average value for the momentum of an electron in the box is zero in every state (i.e., arbitrary values of n).

Strategy

First write the expectation value integral (Equation (expect)) with the momentum operator. Then insert the expression for the wavefunction and evaluate the integral as shown here.

**Solution**

⟨p⟩ = ∫0^L ψn^*(x)(−iħd/dx)ψn(x)dx

= ∫0^L (2/L)^(1/2) sin((nπx)/L)(−iħd/dx)(2/L)^(1/2) sin((nπx)/L)dx

= −iħ(2/L)∫0^L sin((nπx)/L)(d/dx) sin((nπx)/L)dx

= −iħ(2/L)((nπ)/L)∫0^L sin((nπx)/L) cos((nπx)/L)dx

= 0

Note that this makes sense since the particles spends an equal amount of time traveling in the + x and –x direction.

Interpretation

It may seem that this means the particle in a box does not have any momentum, which is incorrect because we know the energy is never zero. In fact, the energy that we obtained for the particle-in-a-box is entirely kinetic energy because we set the potential energy at 0. Since the kinetic energy is the momentum squared divided by twice the mass, it is easy to understand how the average momentum can be zero and the kinetic energy finite

### Exercise 3.7.5

Show that the particle-in-a-box wavefunctions are not eigenfunctions of the momentum operator (Equation (3.2.3a)).

**Answer**

The easiest way to address this question is asking if the PIB wavefunction also satisfies the eigenvalue equation using the momentum operation instead of the Hamiltonian operator (3rd postulate of QM). That is

p̂x ψ(n) = pψ(n)

with the following PIB wavefunctions

ψn = √(2/L) sin((nπx)/L)

and

p̂ = −iħd/dx

and p is a real scalar (since it is a measurable).

p̂x ψn = −iħ(d/dx)[√(2/L) sin((nπx)/L)]

= −iħ√(2/L) cos((nπx)/L)((nπ)/L)

≠ pψn

Hence, the PIB wavefunctions are NOT eigenfunctions of the momentum operator.

Alternative Solution

An alternative, albeit more complicated, approach is to recognize that the uncertainty of p must be zero if the wavefunction is an eigenstate of the momentum operator. Hence

√(⟨p^2⟩−⟨p⟩^2) = 0

This requires calculating the ⟨p^2⟩ and ⟨p⟩ expectation values:

⟨p⟩ = ∫0^L ψ^*[−iħd/dx]ψdx

= −iħ∫0^L (2/L) sin((nπx)/L)(d/dx)x sin((nπx)/L)dx

= −i ((h^2)/L)∫0^L sin((nπx)/L) cos((nπx)/L)dx

= 0

This integral is zero via orthonormality of the sine and cosine functions (although you can expand the integrand and confirm this).

⟨p^2⟩ = ∫0^L ψ^*[−iħd/dx]^2ψdx

= ((h^2)/L)∫0^L sin((nπx)/L)(d^2/dx^2) sin((nπx)/L)dx

= ((−h^2)/L)∫0^L sin((nπx)/L) sin((nπx)/L)dx

= −(h^2)/L

Now the integral above is 1 using orthonormality (although you can expand the integrand and confirm this). Now we calculate the uncertainty in momentum in the PIB wavefunctions:

√(⟨p^2⟩−⟨p⟩^2) = √((−h^2)/L − 0^2)

= √((−h^2)/L)

≠ 0 →

Since the uncertainty is not 0, different measurements (experiments) will results in different values of momentum being quantified. Hence, the PIB wavefunctions are not eigenfunctions of the momentum operator.

[Note: the steps of this alternative solution are wrong, though its conclusion is right. (d/dx)x sin(nπx/L) has a stray x; ⟨p⟩ = −iħ(2/L)(nπ/L)∫0^L sin(nπx/L)cos(nπx/L)dx = 0; and ⟨p^2⟩ = (2/L)(nπħ/L)^2∫0^L sin^2(nπx/L)dx, where the integral is L/2, not 1, so ⟨p^2⟩ = n^2π^2ħ^2/L^2 = n^2h^2/(4L^2), which is positive, and Δp = nπħ/L = nh/(2L). The text is left as printed.]

It must be equally likely for the particle-in-a-box to have a momentum −p as + p. The average of + p and –p is zero, yet p^2 and the average of p^2 are not zero. The information that the particle is equally likely to have a momentum of + p or –p is contained in the wavefunction. In fact, the sine function is a representation of the two momentum eigenfunctions e^(+ikx) and e^(−ikx) (Figure 3.7.2 ).

### Exercise 3.7.6

Write the particle-in-a-box wavefunction as a normalized linear combination of the momentum eigenfunctions e^(ikx) and e^(−ikx) by using Euler’s formula. Show that the momentum eigenvalues for these two functions are p = + ħk and −ħk.

The interpretation of the results of Exercise 3.7.6 is physically interesting. The exponential wavefunctions in the linear combination for the sine function represent the two opposite directions in which the electron can move. One exponential term represents movement to the left and the other term represents movement to the right (Figure 3.7.2 ).

Figure 3.7.2: Two waves traveling in opposite directions across the same medium combine linearly. In this animation, both waves have the same wavelength and the sum of amplitudes results in a standing wave. (Public Domain; LucasVB).
Graph showing two overlapping sine wave patterns, with red dots marking their peaks and troughs.

The electrons are moving, they have kinetic energy and momentum, yet the average momentum is zero.

### Did we just Violate the Uncertainty Principle?

Does the fact that the average momentum of an electron is zero and the average position is L/2 violate the Heisenberg Uncertainty Principle? No, because the Heisenberg Uncertainty Principle pertains to the uncertainty in the momentum and in the position, not to the average values. Quantitative values for these uncertainties can be obtained to compare with the limit set by the Heisenberg Uncertainty Principle for the product of the uncertainties in the momentum and position. However, to do this we need a quantitative definition of uncertainty, which is discussed in the following Section.

## Orthogonality

In vector calculus, orthogonality is the relation of two lines at right angles to one another (i.e., perpendicularity), but is generalized into n dimensions via zero amplitude "dot products" or "inner products." Hence, orthogonality is thought of as describing non-overlapping, uncorrelated, or independent objects of some kind. The concept of orthogonality extends to functions (wavefunctions or otherwise) too. Two functions ψA and ψB are said to be orthogonal if

∫_allspace ψA^*ψB dτ = 0

In general, eigenfunctions of a quantum mechanical operator with different eigenvalues are orthogonal. Are the eigenfunctions of the particle-in-a-box Hamiltonian orthogonal?

### Exercise 3.7.7

Evaluate the integral ∫ψ1^*ψ3 dx for all possible pairs of particle-in-a-box eigenfunctions from n = 1 to n = 3 (use symmetry arguments whenever possible) and explain what the results say about orthogonality of the functions.
