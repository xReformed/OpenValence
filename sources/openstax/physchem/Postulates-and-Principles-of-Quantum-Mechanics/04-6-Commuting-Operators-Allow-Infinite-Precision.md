---
title: "4.6: Commuting Operators Allow Infinite Precision"
book: "Physical Chemistry (LibreTexts)"
chapter: "4: Postulates and Principles of Quantum Mechanics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/04%3A_Postulates_and_Principles_of_Quantum_Mechanics/4.06%3A_Commuting_Operators_Allow_Infinite_Precision"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- To connect the Heisenberg Uncertainty principle to the commutation relations.
- Develop proficiency in calculating the commutator of two operators.

If two operators commute then both quantities can be measured at the same time with infinite precision, if not then there is a tradeoff in the accuracy in the measurement for one quantity vs. the other. This is the mathematical representation of the Heisenberg Uncertainty principle.

## Commuting Operators

One important property of operators is that the order of operation matters. Thus in general

ÂÊf(x) ≠ ÊÂf(x)

unless the two operators commute. Two operators commute if the following equation is true:

[Â, Ê] = ÂÊ − ÊÂ = 0

To determine whether two operators commute first operate ÂÊ on a function f(x). Then operateÊÂ the same function f(x). If the same answer is obtained subtracting the two functions will equal zero and the two operators will commute.on

If two operators commute, then they can have the same set of eigenfunctions. By definition, two operators Â and B̂ commute if the effect of applying Â then B̂ is the same as applying B̂ then Â, i.e.

ÂB̂ = B̂Â.

For example, the operations brushing-your-teeth and combing-your-hair commute, while the operations getting-dressed and taking-a-shower do not. This theorem is very important. If two operators commute and consequently have the same set of eigenfunctions, then the corresponding physical quantities can be evaluated or measured exactly simultaneously with no limit on the uncertainty. As mentioned previously, the eigenvalues of the operators correspond to the measured values.

If Â and B̂ commute and ψ is an eigenfunction of B̂ with eigenvalue b, then

[Note: corrected; the source prints "ψ is an eigenfunction of Â with eigenvalue b" where this reads "ψ is an eigenfunction of B̂ with eigenvalue b". The equation that follows uses B̂ψ = bψ.]

B̂Âψ = ÂB̂ψ = Âbψ = bÂψ

Equation (4-49) says that Âψ is an eigenfunction of B̂ with eigenvalue b, which means that when Â operates on ψ, it cannot change ψ. At most, Â operating on ψ can produce a constant times ψ.

Âψ = aψ

B̂(Âψ) = B̂(aψ) = aB̂ψ = abψ = b(aψ)

Equation (4-51) shows that Equation (4-50) is consistent with Equation (4-49). Consequently ψ also is an eigenfunction of Â with eigenvalue a.

### Example 4.6.1

Do the following pairs of operators commute?

a. Â = d/dx and Ê = x^2
b. B̂ = h/x and Ĉ{f(x)} = f(x) + 3
c. Ĵ = 3x and Ô = x^−1

**Solution a**

This requires evaluating [Â, Ê], which requires solving for Â{Êf(x)} and Ê{Âf(x)} for arbitrary wavefunction f(x) and asking if they are equal.

Â{Êf(x)} = Â{x^2 f(x)} = d/dx{x^2 f(x)} = 2 xf(x) + x^2 f'(x)

From the product rule of differentiation.

Ê{Âf(x)} = Ê{f'(x)} = x^2 f'(x)

Now ask if they are equal

[Â, Ê] = 2 xf(x) + x^2 f'(x) − x^2 f'(x) = 2 xf(x) ≠ 0

Therefore the two operators do not commute.

**Solution b**

This requires evaluating [B̂, Ĉ] like in Example 4.6.1 .

B̂{Ĉf(x)} = B̂{f(x) + 3} = (h/x)(f(x) + 3) = (hf(x))/x + (3 h)/x

Ĉ{B̂f(x)} = Ĉ{(h/x)f(x)} = (hf(x))/x + 3

Now ask if they are equal

[B̂, Ĉ] = (hf(x))/x + (3 h)/x − (hf(x))/x − 3 ≠ 0

The two operators do not commute.

**Solution c**

This requires evaluating [Ĵ, Ô]

Ĵ{Ôf(x)} = Ĵ{f(x)3x} = f(x)3x/x = 3 f(x)

Ô{Ĵf(x)} = Ô{(f(x))/x} = (f(x)3x)/x = 3 f(x)

[Note: the inner results in these two lines are swapped: Ô divides by x and Ĵ multiplies by 3x, so Ĵ{Ôf(x)} = Ĵ{f(x)/x} = 3f(x) and Ô{Ĵf(x)} = Ô{3xf(x)} = 3f(x). The conclusion, that the operators commute, is right. The text is left as printed.]

[Ĵ, Ô] = 3 f(x) − 3 f(x) = 0

Because the difference is zero, the two operators commute.

## General Heisenberg Uncertainty Principle

Although it will not be proven here, there is a general statement of the uncertainty principle in terms of the commutation property of operators. If two operators Â and B̂ do not commute, then the uncertainties (standard deviations σ) in the physical quantities associated with these operators must satisfy

σA σB ≥ (1/2)|∫ψ^*[ÂB̂−B̂Â]ψ dτ|

[Note: corrected; the source prints "σA σB ≥ |∫ψ^*" where this reads "σA σB ≥ (1/2)|∫ψ^*". The general uncertainty relation has a factor 1/2, which gives the ħ/2 of Exercise 4.6.1.]

where the integral inside the square brackets is called the commutator, and ││signifies the modulus or absolute value. If Â and B̂ commute, then the right-hand-side of Equation (4-52) is zero, so either or both σA and σB could be zero, and there is no restriction on the uncertainties in the measurements of the eigenvalues a and b. If Â and B̂ do not commute, then the right-hand-side of Equation (4-52) will not be zero, and neither σA nor σB can be zero unless the other is infinite. Consequently, both a and b cannot be eigenvalues of the same wavefunctions and cannot be measured simultaneously to arbitrary precision.

### Exercise 4.6.1

Show that the commutator for position and momentum in one dimension equals iħ and that the right-hand-side of Equation (4-52) therefore equals ħ/2 giving σx σ_px ≥ ħ/2.

[Note: corrected; the source prints "equals –iħ" where this reads "equals iħ". [x̂, p̂] = x̂p̂ − p̂x̂ = iħ; −iħ is [p̂, x̂]. Either way the right-hand side is ħ/2.]

## Applications

Operators are very common with a variety of purposes. They are used to figure out the energy of a wavefunction using the Schrödinger Equation.

Ĥψ = Eψ

They also help to explain observations made in the experimentally. An example of this is the relationship between the magnitude of the angular momentum and the components.

[L̂^2, L̂x^2] = [L̂^2, L̂y^2] = [L̂^2, L̂z^2] = 0

However the components do not commute themselves. An additional property of commuters that commute is that both quantities can be measured simultaneously. Thus, the magnitude of the angular momentum and ONE of the components (usually z) can be known at the same time however, NOTHING is known about the other components.

The physical quantities corresponding to operators that commute can be measured simultaneously to any precision.

### Example 4.6.2A

Determine whether the following two operators commute:

K̂ = α∫[1]^([∞])d[x]

and

Ĥ = d/dx

**Solution**

Evaluate

[K̂, Ĥ]

### Example 4.6.2B

Determine whether the following two operators commute:

Î = 5

and

L̂ = ∫_[1]^([∞]) d[x]

**Solution**

The identity operator, Î is a real number and commutes with everything. Thus, these two operators commute. We can also directly evaluate the commutator:

[Î, L̂]

[Î, L̂]f(x) = 5∫1^∞ f(x)d(x)−∫1^∞ 5 f(x)d(x) = 0

### Exercise 4.6.2C

Show that the components of the angular momentum do not commute.

L̂x = −iħ[−sin(φ δ/(δθ)) − cot(Θ) cos(φ δ/(δφ))]

L̂y = −iħ[cos(φ δ/(δθ)) − cot(Θ) cos(φ δ/(δφ))]

L̂z = −iħδ/(δθ)

[Note: these operators are garbled: δ stands for ∂, Θ for θ, and the derivatives belong outside the sine and cosine. In spherical coordinates L̂x = −iħ(−sin φ ∂/∂θ − cot θ cos φ ∂/∂φ), L̂y = −iħ(cos φ ∂/∂θ − cot θ sin φ ∂/∂φ) and L̂z = −iħ ∂/∂φ. The text is left as printed.]

**Solution**

This requires evaluating the following commucators:

[L̂z, L̂x] = iħL̂y

[L̂x, L̂y] = iħL̂z

[L̂y, L̂z] = iħL̂x

## References

1. Gohberg, I. Basic Operator Theory; Birkhäuser: Boston, 2001
2. McQuarrie, D.A. Quantum Chemistry, 2nd Edition; University Science Books:Sausalito, 2008
3. Schechter, M. Operator Methods in Quantum Mechanics; Dover Publications, 2003
