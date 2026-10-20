---
title: "7.4: Perturbation Theory Expresses the Solutions in Terms of Solved Problems"
book: "Physical Chemistry (LibreTexts)"
chapter: "7: Approximation Methods"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/07%3A_Approximation_Methods/7.04%3A_Perturbation_Theory_Expresses_the_Solutions_in_Terms_of_Solved_Problems"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Use perturbation theory to approximate the energies of systems as a series of perturbation of a solved system.
- Use perturbation theory to approximate the wavefunctions of systems as a series of perturbation of a solved system.

It is easier to compute the changes in the energy levels and wavefunctions with a scheme of successive corrections to the zero-field values. This method, termed perturbation theory, is the single most important method of solving problems in quantum mechanics and is widely used in atomic physics, condensed matter and particle physics. Perturbation theory is another approach to finding approximate solutions to a problem, by starting from the exact solution of a related, simpler problem. A critical feature of the technique is a middle step that breaks the problem into "solvable" and "perturbation" parts. Perturbation theory is applicable if the problem at hand cannot be solved exactly, but can be formulated by adding a "small" term to the mathematical description of the exactly solvable problem.

Figure 7.4.1: Perturbed Energy Spectrum. (CC BY-SA 2.0, Frontier via Wikipedia)
A simple black silhouette of a dog, sitting with its tail curled around its body.

[Note: the line above is the image's alt text, which reads as machine-written and does not describe the image, an energy-level diagram of the perturbed spectrum; the caption above describes it.]

We begin with a Hamiltonian Ĥ^0 having known eigenstates and eigenenergies:

Ĥ^o|n^o⟩ = En^o|n^o⟩

The task is to find how these eigenstates and eigenenergies change if a small term H^1 (an external field, for example) is added to the Hamiltonian, so:

(Ĥ^0 + Ĥ^1)|n⟩ = En|n⟩

That is to say, on switching on Ĥ^1 changes the wavefunctions:

|n^o⟩ (unperturbed) ⇒ |n⟩ (Perturbed)

and energies (Figure 7.4.1 ):

En^o (unperturbed) ⇒ En (Perturbed)

The basic assumption in perturbation theory is that H^1 is sufficiently small that the leading corrections are the same order of magnitude as H^1 itself, and the true energies can be better and better approximated by a successive series of corrections, each of order H^1/H^o compared with the previous one.

The strategy is to expand the true wavefunction and corresponding eigenenergy as series in Ĥ^1/Ĥ^o. These series are then fed into Equation (7.4.2), and terms of the same order of magnitude in Ĥ^1/Ĥ^o on the two sides are set equal. The equations thus generated are solved one by one to give progressively more accurate results.

To make it easier to identify terms of the same order in Ĥ^1/Ĥ^o on the two sides of the equation, it is convenient to introduce a dimensionless parameter λ which always goes with Ĥ^1, and then expand both eigenstates and eigenenergies as power series in λ,

|n⟩ = Σi^m λ^i|n^i⟩

En = Σ_(i=0)^m λ^i En^i

where m is how many terms in the expansion we are considering. The ket |n^i⟩ is multiplied by λ^i and is therefore of order (H^1/H^o)^i.

λ is purely a bookkeeping device: we will set it equal to 1 when we are through! It’s just there to keep track of the orders of magnitudes of the various terms.

For example, in first order perturbation theory, Equations (7.4.5) are truncated at m = 1 (and setting λ = 1):

|n⟩≈|n^o⟩ + |n^1⟩

En≈En^o + En^1

However, let's consider the general case for now. Adding the full expansions for the eigenstate (Equation (7.4.5)) and energies (Equation (7.4.6)) into the Schrödinger equation for the perturbation Equation (7.4.2) in

(Ĥ^o + λĤ^1)|n⟩ = En|n⟩

we have

(Ĥ^o + λĤ^1)(Σ_(i = 0)^m λ^i|n^i⟩) = (Σ_(i=0)^m λ^i En^i)(Σ_(i = 0)^m λ^i|n^i⟩)

We’re now ready to match the two sides term by term in powers of λ. Note that the zeroth-order term, of course, just gives back the unperturbed Schrödinger Equation (Equation (7.4.1)).

Let's look at Equation (7.4.10) with the first few terms of the expansion:

(Ĥ^o + λĤ^1)(|n^o⟩ + λ|n^1⟩) = (En^0 + λEn^1)(|n^o⟩ + λ|n^1⟩)

Ĥ^o|n^o⟩ + λĤ^1|n^o⟩ + λH^o|n^1⟩ + λ^2Ĥ^1|n^1⟩ = En^0|n^o⟩ + λEn^1|n^o⟩ + λEn^0|n^1⟩ + λ^2 En^1|n^1⟩

Collecting terms in order of λ and coloring to indicate different orders

Ĥ^o|n^o⟩ (zero order) + λ(Ĥ^1|n^o⟩ + Ĥ^o|n^1⟩) (1st order) + λ^2Ĥ^1|n^1⟩ (2nd order) = En^0|n^o⟩ (zero order) + λ(En^1|n^o⟩ + En^0|n^1⟩) (1st order) + λ^2 En^1|n^1⟩ (2nd order)

If we expanded Equation (7.4.10) further we could express the energies and wavefunctions in higher order components.

## Zero-Order Terms (λ = 0)

Collecting the zero order terms in the expansion (black terms in Equation (7.4.12)) results in just the Schrödinger Equation for the unperturbed system

Ĥ^o|n^o⟩ = En^o|n^o⟩

## First-Order Expression of Energy (λ = 1)

The summations in Equations (7.4.5), (7.4.6), and (7.4.10) can be truncated at any order of λ. For example, the first order perturbation theory has the truncation at λ = 1. Matching the terms that linear in λ (red terms in Equation (7.4.12)) and setting λ = 1 on both sides of Equation (7.4.12):

Ĥ^o|n^1⟩ + Ĥ^1|n^o⟩ = En^o|n^1⟩ + En^1|n^o⟩

Equation (7.4.13) is the key to finding the first-order change in energy En^1. Taking the inner product of both sides with ⟨n^o|:

⟨n^o|Ĥ^o|n^1⟩ + ⟨n^o|Ĥ^1|n^o⟩ = ⟨n^o|En^o|n^1⟩ + ⟨n^o|En^1|n^o⟩

since operating the zero-order Hamiltonian on the bra wavefunction (this is just the Schrödinger equation; Equation (Zero)) is

⟨n^o|Ĥ^o = ⟨n^o|En^o

and via the orthonormality of the unperturbed |n^o⟩ wavefunctions both

⟨n^o|n^o⟩ = 1

and Equation (7.4.8) can be simplified

~~En^o⟨n^o|n^1⟩~~ + ⟨n^o|H^1|n^o⟩ = ~~En^o⟨n^o|n^1⟩~~ + En^1 ~~⟨n^o|n^o~~ (→ 1)⟩

since the unperturbed set of eigenstates are orthogonal (Equation (7.4.16)) and we can cancel the other term on each side of the equation, we find that

En^1 = ⟨n^o|Ĥ^1|n^o⟩

The first-order change in the energy of a state resulting from adding a perturbing term Ĥ^1 to the Hamiltonian is just the expectation value of Ĥ^1 in the unperturbed wavefunctions.

That is, the first order energies (Equation (7.4.13)) are given by

En≈En^o + En^1

≈(En^o + ⟨n^o|H^1|n^o⟩) (First Order Perturbation)

### Example 7.4.1A: A Perturbed Particle in a Box

Estimate the energy of the ground-state and first excited-state wavefunction within first-order perturbation theory of a system with the following potential energy

V(x) = {Vo, 0 ≤ x ≤ L; ∞, x < 0 and x > L}

**Solution**

The first step in any perturbation problem is to write the Hamiltonian in terms of a unperturbed component that the solutions (both eigenstates and energy) are known and a perturbation component (Equation (7.4.2)). For this system, the unperturbed Hamilonian and solutions is the particle in an infiinitely high box and the perturbation is a shift of the potential within the box by Vo.

Ĥ^1 = Vo

Using Equation (7.4.17) for the first-order term in the energy of the ground-state

En^1 = ⟨n^o|H^1|n^o⟩

with the wavefunctions known from the particle in the box problem

|n^o⟩ = √(2/L) sin(((nπ)/L)x)

At this stage we can do two problems independently (i.e., the ground-state with |1⟩ and the first excited-state |2⟩). However, in this case, the first-order perturbation to any particle-in-the-box state can be easily derived.

En^1 = ∫0^L √(2/L) sin(((nπ)/L)x)Vo√(2/L) sin(((nπ)/L)x)dx

or better yet, instead of evaluating this integrals we can simplify the expression

En^1 = ⟨n^o|H^1|n^o⟩ = ⟨n^o|Vo|n^o⟩ = Vo⟨n^o|n^o⟩ = Vo

so via Equation (7.4.17.2), the energy of each perturbed eigenstate is

En≈En^o + En^1

≈(h^2/(8 mL^2))n^2 + Vo

While this is the first order perturbation to the energy, it is also the exact value.

### Example 7.4.1B: An Even More Perturbed Particle in a Box

Estimate the energy of the ground-state wavefunction within first-order perturbation theory of a system with the following potential energy

V(x) = {Vo, 0 ≤ x ≤ L/2; ∞, x < 0 and x > L}

[Note: the potential is 0 for L/2 < x ≤ L, as the solution below uses, and "x < 0 and x > L" means x < 0 or x > L. The text is left as printed.]

**Solution**

As with Example 7.4.1 , we recognize that unperturbed component of the problem (Equation (7.4.2)) is the particle in an infinitely high well. For this system, the unperturbed Hamiltonian and solution is the particle in an infinitely high box and the perturbation is a shift of the potential within half a box by Vo. This is essentially a step function.

Using Equation (7.4.17) for the first-order term in the energy of the any state

En^1 = ⟨n^o|H^1|n^o⟩

= ∫0^(L/2) √(2/L) sin(((nπ)/L)x)Vo√(2/L) sin(((nπ)/L)x)dx + ∫_(L/2)^L √(2/L) sin(((nπ)/L)x)0√(2/L) sin(((nπ)/L)x)dx

The second integral is zero and the first integral is simplified to

En^1 = (2/L)∫0^(L/2) Vo sin^2(((nπ)/L)x)dx

this is evaluated to

En^1 = ((2Vo)/L)[((−1)/(2 (πn)/L)) cos(((nπ)/L)x) sin(((nπ)/L)x) + x/2]0^(L/2)

[Note: corrected; the source prints "((−1)/(2 (πn)/a))" where this reads "((−1)/(2 (πn)/L))". The box length is L; with it the bracket gives L/4 and En^1 = Vo/2.]

= (2Vo)/~~L~~ · ~~L~~/4 = (Vo)/2

The energy of each perturbed eigenstate, via Equation (7.4.17.2), is

En≈En^o + (Vo)/2

≈(h^2/(8 mL^2))n^2 + (Vo)/2

## First-Order Expression of Wavefunction (λ = 1)

The general expression for the first-order change in the wavefunction is found by taking the inner product of the first-order expansion (Equation (7.4.13)) with the bra ⟨m^o| with m ≠ n,

⟨m^o|H^o|n^1⟩ + ⟨m^o|H^1|n^o⟩ = ⟨m^o|En^o|n^1⟩ + ⟨m^o|En^1|n^o⟩

Last term on right side of Equation (7.4.18)

The last integral on the right hand side of Equation (7.4.18) is zero, since m ≠ n so

⟨m^o|En^1|n^o⟩ = En^1⟨m^o|n^o⟩

and

⟨m^o|n^0⟩ = 0

First term on right side of Equation (7.4.18)

The first integral is more complicated and can be expanded back into the H^o

Em^o⟨m^o|n^1⟩ = ⟨m^o|Em^o|n^1⟩ = ⟨m^o|H^o|n^1⟩

since

⟨m^o|H^o = ⟨m^o|Em^o

so

⟨m^o|n^1⟩ = (⟨m^o|H^1|n^o⟩)/(En^o − Em^o)

and therefore the wavefunction corrected to first order is:

|n⟩≈|n^o⟩ + |n^1⟩

≈(|n^o⟩ + Σ_(m ≠ n) (|m^o⟩⟨m^o|H^1|n^o⟩)/(En^o − Em^o)) (First Order Perturbation Theory)

Equation (7.4.24) is essentially is an expansion of the unknown wavefunction correction as a linear combination of known unperturbed wavefunctions (7.4.24.2):

|n⟩≈|n^o⟩ + |n^1⟩

≈|n^o⟩ + Σ_(m ≠ n) c_(m, n)|m^o⟩

with the expansion coefficients determined by

c_(m, n) = (⟨m^o|H^1|n^o⟩)/(En^o − Em^o)

This is justified since the set of original zero-order wavefunctions forms a complete basis set that can describe any function.

Figure 7.4.2: The first order perturbation of the ground-state wavefunction for a perturbed (left potential) can be expressed as a linear combination of all excited-state wavefunctions of the unperturbed potential (Equation (7.4.24.2)), shown as a harmonic oscillator in this example (right potential). Note that the ground-state harmonic oscillator wavefunction is not part of this expression and all wavefunctions need to be included in the expression, not just the first eight wavefunctions shown here. (CC BY 4.0; Delmar Larsen)
A graph showing a parabolic curve with several linear lines intersecting it, labeled with values along the y-axis.

Calculating the first order perturbation to the wavefunctions is in general an infinite sum of off diagonal matrix elements of H^1 (Figure 7.4.2 ).

- However, the denominator argues that terms in this sum will be weighted by states that are of comparable energy. That means in principle, these sum can be truncated easily based off of some criterion.
- Another point to consider is that many of these matrix elements will equal zero depending on the symmetry of the {|n^o⟩} basis and H^1 (e.g., some ⟨m^o|H^1|n^o⟩ integrals in Equation (7.4.24) could be zero due to the integrand having an odd symmetry; see Example 7.4.2 ).

[Note: corrected; the source prints "see Example 7.4.3 )" where this reads "see Example 7.4.2 )". The cubic, odd perturbation is Example 7.4.2.]

The denominators in Equation (7.4.24) argues that terms in this sum will be preferentially dictated by states that are of comparable energy. That is, eigenstates that have energies significantly greater or lower than the unperturbed eigenstate will weakly contribute to the perturbed wavefunction.

### Example 7.4.2 : A Harmonic Oscillator with a Cubic Perturbation

Estimate the energy of the ground-state wavefunction associated with the Hamiltonian using perturbation theory

Ĥ = (−ħ)/(2 m) · d^2/dx^2 + (1/2)kx^2 + εx^3

[Note: the kinetic energy term is −(ħ^2/(2m))d^2/dx^2; ħ is squared here and in the Hamiltonians below. The text is left as printed.]

**Solution**

The first step in a perturbation theory problem is to identify the reference system with the known eigenstates and energies. For this example, this is clearly the harmonic oscillator model.

Energy

The first steps in flowchart for applying perturbation theory (Figure 7.4.1 ) is to separate the Hamiltonian of the difficult (or unsolvable) problem into a solvable one with a perturbation. For this case, we can rewrite the Hamiltonian as

Ĥ^o + Ĥ^1

where

- Ĥ^o is the Hamitonian for the standard Harmonic Oscillator with known eigenstates and eigenenergies Ĥ^{(0)} = (−ħ)/(2 m) · d^2/dx^2 + (1/2)kx^2
- Ĥ^1 is the pertubtiation Ĥ^1 = εx^3

The first order perturbation is given by Equation (7.4.17), which for this problem is

En^1 = ⟨n^o|εx^3|n^o⟩

Notice that the integrand has an odd symmetry (i.e., f(x) = −f(−x)) with the perturbation Hamiltonian being odd and the ground state harmonic oscillator wavefunctions being even. So

En^1 = 0

This means to first order pertubation theory, this cubic terms does not alter the ground state energy (via Equation (7.4.17.2)). However, this is not the case if second-order perturbation theory were used, which is more accurate (not shown).

Wavefunction

Calculating the first order perturbation to the wavefunctions (Equation (7.4.24)) is more difficult than energy since multiple integrals must be evaluated (an infinite number if symmetry arguments are not applicable). The harmonic oscillator wavefunctions are often written in terms of Q, the unscaled displacement coordinate:

|Ψv(x)⟩ = Nv''Hv(√(α)Q)e^(−αQ^2/2)

with α

α = 1/√(β) = √((kμ)/ħ^2)

and

Nv'' = √(1/(2^v v!))(α/π)^(1/4)

Let's consider only the first six wavefunctions that use these Hermite polynomials Hv(x):

- H0 = 1
- H1 = 2x
- H2 = −2 + 4x^2
- H3 = −12x + 8x^3
- H4 = 12 − 48x^2 + 16x^4
- H5 = 120x − 160x^3 + 32x^5

The first order perturbation to the ground-state wavefunction (Equation (7.4.24))

|0^1⟩ = Σ_(m ≠ 0)^5 (|m^o⟩⟨m^o|H^1|0^o⟩)/(E0^o − Em^o)

given these truncated wavefunctions (we should technically use the infinite sum) and that we are considering only the ground state with n = 0:

|0^1⟩ = (⟨1^o|H^1|0^o⟩)/(E0^o − E1^o)|1^o⟩ + (⟨2^o|H^1|0^o⟩)/(E0^o − E2^o)|2^o⟩ + (⟨3^o|H^1|0^o⟩)/(E0^o − E3^o)|3^o⟩ + (⟨4^o|H^1|0^o⟩)/(E0^o − E4^o)|4^o⟩ + (⟨5^o|H^1|0^o⟩)/(E0^o − E5^o)|5^o⟩

We can use symmetry of the perturbation and unperturbed wavefunctions to solve the integrals above. We know that the unperturbed harmonic oscillator wavefunctions {|n^0}⟩ alternate between even (when v is even) and odd (when v is odd) as shown previously. Since the perturbation is an odd function, only when m = 2 k + 1 with k = 0,1,2 can these integrals be non-zero (i.e., for m = 1,3,5, ...).

[Note: corrected; the source prints "with k = 1,2,3" where this reads "with k = 0,1,2"; the source prints "would these integrals be non-zero" where this reads "can these integrals be non-zero". m = 1, 3, 5, … needs k = 0, 1, 2, …; parity allows only odd m, but does not make each of them non-zero (see below).]

So of the original five unperturbed wavefunctions, only |m = 1⟩ and |m = 3⟩ mix to make the first-order perturbed ground-state wavefunction so

[Note: corrected; the source prints "only |m = 1⟩, |m = 3⟩, and |m = 5⟩ mix" where this reads "only |m = 1⟩ and |m = 3⟩ mix". x^3 changes v by ±1 or ±3 only, so ⟨5^o|x^3|0^o⟩ = 0 as well.]

|0^1⟩ = (⟨1^o|H^1|0^o⟩)/(E0^o − E1^o)|1^o⟩ + (⟨3^o|H^1|0^o⟩)/(E0^o − E3^o)|3^o⟩

[Note: corrected; the source prints "(E0^o − E3^o)|3^o⟩ + (⟨5^o|H^1|0^o⟩)/(E0^o − E5^o)|5^o⟩" where this reads "(E0^o − E3^o)|3^o⟩". The |5^o⟩ term is zero, as ⟨5^o|x^3|0^o⟩ = 0.]

At this stage, the integrals have to be manually calculated using the defined wavefuctions above, which is left as an exercise. Notice that each unperturbed wavefunction that can "mix" to generate the perturbed wavefunction will have a reciprocally decreasing contribution (w.r.t. energy) due to the growing denominator in Equation (energy1).

### Exercise 7.4.3 : Harmonic Oscillator with a Quartic Perturbation

Use perturbation theory to estimate the energy of the ground-state wavefunction associated with this Hamiltonian

Ĥ = (−ħ)/(2 m) · d^2/dx^2 + (1/2)kx^2 + γx^4.

**Answer**

The model that we are using is the harmonic oscillator model which has a Hamiltonian

H^0 = −ħ/(2 m) · d^2/dx^2 + (1/2)kx^2

Making the perturbed Hamiltonian

H^1 = γx^4

To find the perturbed energy we approximate it using Equation (7.4.17.2)

E^1 = ⟨n^0|H^1|n^0⟩

where is the wavefunction of the ground state harmonic oscillator

n^0 = (a/π)^{(1/4)}e^(−ax^2/2)

When we substitute in the Hamiltonian and the wavefunction we get

E^1 = ⟨(a/π)^{(1/4)}e^(−ax^2/2)|γx^4|(a/π)^{(1/4)}e^(−ax^2/2)⟩

Changing this into integral form, and combining the wavefunctions,

E^1 = ∫_−∞^∞ (a/π)^{(1/2)}e^(−ax^2)γx^4 dx

[Note: corrected; the source prints "e^{((−ax^2)/2)}γx^4" where this reads "e^(−ax^2)γx^4". The two wavefunctions together give e^(−ax^2), as the next line has it.]

= γ(a/π)^{(1/2)}∫_−∞^∞ x^4 e^(−ax^2)dx

Now we use the integral table value

∫0^∞ x^(2n)e^(−ax^2)dx = ((1·3·5…(2 n − 1))/(2^(n + 1)a^n))(π/a)^(1/2)

[Note: corrected; the source prints "x^(2π)e^(−ax^2)dx" where this reads "x^(2n)e^(−ax^2)dx"; the source prints "/(2^(m + 1)a^n)" where this reads "/(2^(n + 1)a^n)". The standard integral is for x^(2n), with 2^(n + 1) in the denominator; n = 2 gives 3/(8a^2)√(π/a).]

Where we plug in n = 2 and a = α for our integral

E^1 = 2γ(a/π)^{(1/2)}∫0^∞ x^4 e^(−ax^2)dx

= 2γ(a/π)^{(1/2)}((1·3)/(2^3 a^2))(π/a)^(1/2)

This is our perturbed energy.

Now we have to find our ground state energy using the formula for the energy of a harmonic oscillator that we already know,

Er^0 = (v + 1/2)hν

Where in the ground state v = 0 so the energy for the ground state of the quantum harmonic oscillator is

E_r^0 = (1/2)hν

Putting both of our energy terms together gives us the ground state energy of the wavefunction of the given Hamiltonian,

E = E^0 + E^1

= (1/2)hν + γ 3/(4a^2)

## Second-Order Terms (λ = 2)

There are higher energy terms in the expansion of Equation (7.4.5) (e.g., the blue terms in Equation (7.4.12)), but are not discussed further here other than noting the whole perturbation process is an infinite series of corrections that ideally converge to the correct answer. It is truncating this series as a finite number of steps that is the approximation. The general approach to perturbation theory applications is giving in the flowchart in Figure 7.4.1 .

Figure 7.4.1: Simplified algorithmic flowchart of the Perturbation Theory approximation showing the first two perturbation orders. The process can be continued to third and higher orders. (CC BY 4.0; Delmar Larsen)
Flowchart detailing the process of report generation, structured into three sections with interconnected boxes.

[Note: the line above is the image's alt text, which reads as machine-written and misreads the image, a flowchart of the steps of perturbation theory.]

### Perturbation Theory Does not always Work

It should be noted that there are problems that cannot be solved using perturbation theory, even when the perturbation is very weak, although such problems are the exception rather than the rule. One such case is the one-dimensional problem of free particles perturbed by a localized potential of strength λ. Switching on an arbitrarily weak attractive potential causes the k = 0 free particle wavefunction to drop below the continuum of plane wave energies and become a localized bound state with binding energy of order λ^2. However, changing the sign of λ to give a repulsive potential there is no bound state, the lowest energy plane wave state stays at energy zero. Therefore the energy shift on switching on the perturbation cannot be represented as a power series in λ, the strength of the perturbation.
