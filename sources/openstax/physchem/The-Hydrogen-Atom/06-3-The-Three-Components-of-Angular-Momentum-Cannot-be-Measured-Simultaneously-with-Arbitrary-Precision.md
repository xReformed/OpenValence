---
title: "6.3: The Three Components of Angular Momentum Cannot be Measured Simultaneously with Arbitrary Precision"
book: "Physical Chemistry (LibreTexts)"
chapter: "6: The Hydrogen Atom"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/06%3A_The_Hydrogen_Atom/6.03%3A_The_Three_Components_of_Angular_Momentum_Cannot_be_Measured_Simultaneously_with_Arbitrary_Precision"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Understand how to measure the orbital angular momentum of an electron around a nucleus.
- Understand how the Heisenburgh Uncertainty Principle extends to orbital angular momenta.
- Manipulate the angular momenta cyclic permutations that allow two of the three projects to be simultaneous measured

[Note: no two components of the angular momentum commute ([L̂x, L̂y] = iħL̂z), so no two can be measured together; what can be known at once is L^2 and one component, as the section's title says. The text is left as printed.]

Consider a particle described by the Cartesian coordinates (x, y, z) ≡ r⃗ and their conjugate momenta (px, py, pz) ≡ p⃗. The classical definition of the orbital angular momentum of such a particle about the origin is (i.e., via the vector cross product):

L⃗ = r⃗ × p⃗

which can be separated into projections into each of the primary axes :

Lx = y pz − z py,

Ly = z px − x pz

Lz = x py − y px

Extending this discussion to the quantum mechanics, we can assume that the operators (L̂x, L̂y, L̂z) ≡ L⃗ - that represent the components of orbital angular momentum in quantum mechanics - can be defined in an analogous manner to the corresponding components of classical angular momentum. In other words, we are going to assume that the above equations specify the angular momentum operators in terms of the position and linear momentum operators.

In Cartesian coordinates, the three operators for the orbital angular momentum components can be written as

L̂x = −i ħ(y (∂)/(∂z) − z (∂)/(∂y))

L̂y = −i ħ(z (∂)/(∂x) − x (∂)/(∂z))

L̂z = −i ħ(x (∂)/(∂y) − y (∂)/(∂x))

These can be transforming to operators in standard spherical polar coordinates,

x = r sin θ cos φ

y = r sin θ sin φ

z = r cos θ

we obtain

L̂x = i ħ (sin φ (∂)/(∂θ) + cot θ cos φ (∂)/(∂φ))

L̂y = −i ħ (cos φ (∂)/(∂θ) − cot θ sin φ (∂)/(∂φ))

L̂z = −i ħ (∂)/(∂φ)

We can introduce a new operator L̂^2:

L̂^2 = L̂x^2 + L̂y^2 + L̂z^2

= −ħ^2(1/(sin θ) · ((∂)/(∂θ)) sin θ (∂)/(∂θ) + 1/(sin^2θ) · (∂^2)/(∂φ^2))

The eigenvalue problem for L̂^2 takes the form

L̂^2|ψ⟩ = λ ħ^2|ψ⟩

where ψ(r, θ, φ) is the wavefunction, and λ is a number. Let us write

ψ(r, θ, φ) = R(r) Y(θ, φ)

By definition,

L^2 Yl^(ml) = l (l + 1) ħ^2 Yl^(ml)

where l is an integer. This is an important conclusion that argues the angular momentum is quantized with the square of the magnitude of the angular momentum only capable of assume one of the discrete set of values (Equation (6.3.9)). From this, the amplitude of angular momentum can be expressed

|L⃗| = √(L^2) = √(l(l + 1))ħ

### Warning

We often refer to a particle in a state with angular momentum quantum number l as having angular momentum l, rather than saying that it has angular momentum of √(l(l + 1))ħ magnitude, primarily since it is awkward to say quickly.

The properties of spherical harmonics that the z-component of the angular momentum (Lz) is also quantized and can only assume a one of a discrete set of values

Lz Yl^(ml) = m ħ Yl^(ml)

where ml is an integer lying in the range −l ≤ ml ≤ l.

- l is sometimes called "azimuthal quantum number" or "orbital quantum number"
- ml is sometimes called "magnetic quantum number"

## Simultaneous Measurements

Note that observables associated with L̂x, L̂y, and L̂z can, in principle, be measured. However, to determine if they can be measured simultaneously with infinite precision, the corresponding operators must commute. Remember that the fundamental commutation relations satisfied by the position and linear momentum operators are:

[x̂i, x̂j] = 0

[p̂i, p̂j] = 0

[x̂i, p̂j] = i ħ δ_ij

where i and j stand for either x, y, or z. Consider the commutator of the operators L̂x and L̂y :

[Note: corrected; the source prints "the operators L̂x and L̂z :" where this reads "the operators L̂x and L̂y :". The commutator worked out below is [L̂x, L̂y].]

[L̂x, L̂y] = [(y pz − z py), (z px − x pz)]

= y [pz, z] px + x py [z, pz]

= i ħ (−y px + x py)

= i ħ L̂z

The cyclic permutations of the above result yield the fundamental commutation relations satisfied by the components of an orbital angular momentum:

[L̂x, L̂y] = i ħ L̂z

[L̂y, L̂z] = i ħ L̂x

[L̂z, L̂x] = i ħ L̂y

The three commutation relations (Equations (6.3.17a) - (6.3.17c)) are the foundation for the whole theory of angular momentum in quantum mechanics. Whenever we encounter three operators having these commutation relations, we know that the dynamical variables that they represent have identical properties to those of the components of an angular momentum (which we are about to derive). In fact, we shall assume that any three operators that satisfy the commutation relations (Equations (6.3.17a) - (6.3.17c)) represent the components of some sort of angular momentum.

Any three operators that satisfy the cyclic commutation relations represent the components of some sort of angular momentum.

### Example 6.3.1 : Commutators

Show that the L̂^2 and L̂x operators commute.

**Solution**

We want to confirm that [L̂^2, L̂x] = 0 that from Equation (6.3.5) this can be expanded

[L̂^2, L̂x] = [L̂x^2 + L̂y^2 + L̂z^2, L̂x]

from the properties of commutators, this can be expanded

[L̂^2, L̂x] = [L̂x^2, L̂x] + [L̂y^2, L̂x] + [L̂z^2, L̂x]

However,

[L̂x^2, L̂x] = L̂x^2 L̂x − L̂x L̂x^2 = L̂x L̂x L̂x − L̂x L̂x L̂x = 0

So

[L̂^2, L̂x] = [L̂y^2, L̂x] + [L̂z^2, L̂x]

= L̂y^2 L̂x − L̂x L̂y^2 + L̂z^2 L̂x − L̂x L̂z^2

= L̂y L̂y L̂x − L̂x L̂y L̂y + L̂z L̂z L̂x − L̂x L̂z L̂z

Lets look at some related forms which can be used to simplify the above expression. The first two terms can and final two terms can be rewritten as different commutators

[L̂y, L̂x]L̂y + L̂y[L̂y, L̂x]

[Note: corrected; the source prints "[L̂y, L̂x] = L̂y + L̂y[L̂y, L̂x]" where this reads "[L̂y, L̂x]L̂y + L̂y[L̂y, L̂x]". The two terms are [L̂y, L̂x]L̂y and L̂y[L̂y, L̂x], as the next line expands them.]

= (L̂y L̂x − L̂x L̂y)L̂y + L̂y(L̂y L̂x − L̂x L̂y)

= ~~L̂y L̂x L̂y~~−L̂x L̂y L̂y + L̂y L̂y L̂x−~~L̂y L̂x L̂y~~

The first & fourth terms cancel, giving

[L̂y, L̂x]L̂y + L̂y[L̂y, L̂x] = L̂y L̂y L̂x − L̂x L̂y L̂y

Similarly,

[Lz, L̂x]L̂z + L̂z[L̂z, L̂x] = L̂z L̂z L̂x − L̂x L̂z L̂z

So,

[L̂^2, L̂x] = [L̂y, L̂x]L̂y + L̂y[L̂y, L̂x] + [L̂z, L̂x]L̂z + L̂z[L̂z, L̂x]

= −iħL̂z L̂y − iħL̂y L̂z + iħL̂y L̂z + iħL̂z L̂y

[Note: corrected; the source prints "+ ihL̂z L̂y" where this reads "+ iħL̂z L̂y". The constant is ħ, so this term cancels the −iħL̂z L̂y.]

= 0

One can also show similarly that

[L̂^2, L̂y] = [L̂^2, L̂z] = 0

<!-- end of example -->

Example 6.3.1 shows that while Lz can be known with certainty, Lx and Ly would unknown. This means that every vector with the appropriate length and z-component can drawn to represent L⃗, which forms a cone (Figure 6.3.1 ). The expected value of the angular momentum for a given ensemble of systems in the quantum state characterized by l and ml could be somewhere on this cone while it cannot be defined for a single system (since the components of L do not commute with each other).

[Image: Diagram of a hyperboloid with two blue cones intersecting, and three blue circles positioned around the cones.]

[Image: Diagram illustrating light convergence through lenses, featuring multiple lens shapes and labeled focal points.]

[Note: this image description reads as machine-written and does not describe the image, which is the vector model of orbital angular momentum for l = 2 (cones of possible L⃗).]

Figure 6.3.1: Illustration of the vector model of orbital angular momentum. (left) A set of states with quantum numbers l = 1, and ml = −1,0, + 1,. (right) A set of states with quantum numbers l = 2, and ml = −2, −1,0, + 1, + 2. (Public Domain; Maschen via Wikipedia)

### The Meaning of Commutation of Two Operators

The mathematics of commutation relations is relatively straightforward, but what does it physically mean for an observable (Hermitian operator) to commute with another observable (Hermitian operator) in quantum mechanics?

If two operators Â and B̂ commute with each other then

ÂB̂−B̂Â = 0,

which can be rearranged to

ÂB̂ = B̂Â.

This is not a trivial statement and many operations do not commute and hence the end-result depends on how you have ordered the operations.

If you recall that operators act on quantum mechanical states and give you a new state in return, then this means that with Â and B̂ commuting, the state you obtain from letting first Â act and then B̂ act on some initial state is the same as if you let first B̂ and then Â act on that state, i.e.,

ÂB̂|ψ⟩ = B̂Â|ψ⟩.

Recall that when you perform a quantum mechanical measurement, you will always measure an eigenvalue of your operator, and after the measurement your state is left in the corresponding eigenstate. The eigenstates to the operator are precisely those states for which there is no uncertainty in the measurement: You will always measure the eigenvalue.

Therefore, B̂|a⟩ must be an eigenfunction of Â with eigenvalue a just like |a⟩ itself is. That is essentially saying that |a⟩ is an eigenfunction of B̂.

A key example of this is since L̂^2 and L̂x commute (Example 6.3.1 ) then both operators share the same eigenstates. Hence, we do no need to solve two eignevalue problems:

L̂^2|ψ⟩ = λ|ψ⟩

and

L̂x|ψ⟩ = β|ψ⟩

If we solve one, we then know the eigenfunctions (|ψ⟩) for the other!

[Note: corrected; the source prints "we then know the eigenvalues (|ψ⟩)" where this reads "we then know the eigenfunctions (|ψ⟩)". |ψ⟩ are eigenfunctions.]

What does it mean when some observable Â commutes with the Hamiltonian Ĥ? First, we get all the result from above: There is a simultaneous eigenbasis of the energy-eigenstates and the eigenstates of Â. This can yield a tremendous simplification of the task of solving Schrödinger equations. For example, the Hamiltonian of the hydrogen atom commutes with L̂, the angular momentum operator, and with L̂z, its z-component. This tells you that you can classify the eigenstates by an angular- and magnetic quantum number l and m.

## Summary

In the quantum world, angular momentum is quantized. The square of the magnitude of the angular momentum (determined by the eigenvalues of the L̂^2 operator) can only assume one of the discrete set of values

L^2 = l(l + 1)ħ^2

or the magnitude of the angular momentum

L = √(l(l + 1))ħ

with l = 0,1,2, ...

The z-component of the angular momentum (i.e., projection of L onto the z-axis) is also quantized with

Lz = ml ħ

with ml = −l, −l + 1, ..., 0, ..., l − 1, l for a given value of l. Hence, l and ml are the angular momentum quantum number and the magnetic quantum number, respectively.

[Note: corrected; the source prints "ml = −l,0 − 1, ...,0, ... + l + 1, l" where this reads "ml = −l, −l + 1, ..., 0, ..., l − 1, l". ml runs from −l to l in steps of 1.]

## Contributors and Attributions

- Richard Fitzpatrick (Professor of Physics, The University of Texas at Austin)
