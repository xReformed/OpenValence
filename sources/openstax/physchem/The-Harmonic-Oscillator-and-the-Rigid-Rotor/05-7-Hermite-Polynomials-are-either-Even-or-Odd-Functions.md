---
title: "5.7: Hermite Polynomials are either Even or Odd Functions"
book: "Physical Chemistry (LibreTexts)"
chapter: "5: The Harmonic Oscillator and the Rigid Rotor"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05%3A_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.07%3A_Hermite_Polynomials_are_either_Even_or_Odd_Functions"
author: "Delmar"
license: "CC BY-SA"
---

### Learning Objectives

- Understand key properties of the Hermite polynomials including orthogonality and symmetry.
- Be proficient at using symmetries of integrands to quickly solve integrals.

Hermite polynomials were defined by Laplace (1810) though in scarcely recognizable form, and studied in detail by Chebyshev (1859). Chebyshev's work was overlooked and they were named later after Charles Hermite who wrote on the polynomials in 1864 describing them as new. They were consequently not new although in later 1865 papers Hermite was the first to define the multidimensional polynomials. The first six Hermite polynomial are plotted in Figure 5.7.1 .

Figure 5.7.1: The first six Hermite polynomials Hn(x). (CC BY-SA 3.0 Unported; Alessio Damato, Vulpecula and others via Wikipedia)

### Generating Formula

Any Hermite polynomial Hn(x) can be generated from a previous one H_(n−1)(x) via the following using the recurrence relation

H_(n+1)(x) = 2xHn(x) − 2 nH_(n−1)(x).

## Hermite Polynomials are Symmetric

Let f(x) be a real-valued function of a real variable.

- Then f is even if the following equation holds for all x and -x in the domain of f f(x) = f(−x)
- Then f is odd if the following equation holds for all x and -x in the domain of f −f(x) = f(−x)

Even and odd are terms used to describe particularly well-behaved functions. An even function is symmetric about the y-axis (Figure 5.7.2 ; left). That is, if we reflect the graph of the function in the y-axis, then it does not change. Formally, we say that f is even if, for all x and −x in the domain of f, we have

[Note: this page has no Figure 5.7.2; the even, odd and neither examples it describes are not shown. The text is left as printed.]

f(−x) = f(x)

Two examples of even functions are f(x) = x^2 and f(x) = cos x.

An odd function has rotational symmetry of order two about the origin (Figure 5.7.2 ; middle). That is, if we rotate the graph of the function 180° about the origin, then it does not change. Formally, we say that ff is odd if, for all x and −x in the domain of f, we have

f(−x) = −f(x)

Examples of odd functions are f(x) = x^3 and f(x) = sin x.

Naturally, not all functions can be classified as even or odd. For example f = x^3 + 1 shown in the right side of Figure 5.7.2 , is neither.

You can also think of these properties as symmetry conditions at the origin. More symmetries in 3D space are discussed in Group Theory.

Without proof, we can identify several key features involving multiplication properties of even and odd functions:

- The product of two even functions is an even function.
- The product of two odd functions is an even function.
- The product of an even function and an odd function is an odd function.

This can be shown graphically as a product table like that in Table 5.7.1 .

Table 5.7.1 : Product table of 1D Functions

| Product table | Odd Function (anti-symmetric) | Even Function (symmetric) | No symmetry (neither) |
| --- | --- | --- | --- |
| Odd Function (anti-symmetric) | Even Function (symmetric) | Odd Function (anti-symmetric) | who knows |
| Even Function (symmetric) | Odd Function (anti-symmetric) | Even Function (symmetric) | who knows |
| No symmetry (neither) | who knows | who knows | who knows |

Notice that the Hermite polynomials in Figure 5.7.1 oscillate from even to odd. We can take advantage of that aspect in our calculation of Harmonic Oscillator wavefunctions. Hermite Polynomial is an even or odd function depends on its degree n. Based on

Hn(−x) = (−1)^n Hn(x)

- Hn(x) is an even function, when n is even.
- Hn(x) is an odd function, when n is odd.

## Integration over Symmetric Functions

You often consider integrals of the form

I = ∫_−a^a f(x) dx

If f is odd or even, then sometimes you can make solving this integral easier. For example, we can rewrite that integral in the following way:

I = ∫_−a^a f(x) dx = ∫_−a^0 f(x) dx + ∫0^a f(x) dx

= ∫0^a f(−x) dx + ∫0^a f(x) dx

For an even function, we have f(−x) = f(x) and Equation (intsym) can be simplified

I = ∫0^a f(−x) dx + ∫0^a f(x) dx

= 2∫0^a f(x) dx

For an odd function, we have f(−x) = −f(x) and Equation (intsym) can be simplified

I = −∫0^a f(x) dx + ∫0^a f(x) dx

= 0

That’s what it means to simplify the integration: the integral of an odd or even function over the interval [−L, L] can be put into a nicer form (and sometimes we can see that it vanishes without ever computing an integral).

### Example 5.7.1

Technically, evaluating the orthogonality of Hermite polynomials requires integrating over the exp(−x^2) weight function (Equations (1) and (2)).

**Solution**

For the Hermite polynomials Hn(x), the relevant inner product (using Dirac Notation)

⟨f, g⟩ = ∫_−∞^∞ f(x)g(x)exp(−x^2) dx

While the H2(x)H3(x) product is indeed an odd function (Table 5.7.1 ), while exp(−x^2) is even. Their product is odd, and thus ⟨f, g⟩ certainly ought to be zero.

<!-- end of example -->

Symmetry is an important aspect of quantum mechanics and mathematics, especially in calculating integrals. Using this symmetry, integrals can be identified to be equal to zero without explicitly solving them. For example, the integral of an odd integrand over all possible values will always be zero irrespective of the exact nature of the function:

∫_−∞^∞ f(x) dx = 0

This simplifies calculations greatly as demonstrated in the following chapters.

## Hermite Polynomials are Orthogonal

Hermite polynomials Hn(x) are nth-degree polynomials for n = 0, 1, 2, 3 and form an orthogonal set of functions for the weight function e^(−x^2). The exact relation is:

[Note: corrected; the source prints "for the weight function e^(−x^2/2)" where this reads "for the weight function e^(−x^2)". The Hermite polynomials are orthogonal with the weight e^(−x^2), as Example 5.7.1 says.]

∫_−∞^∞ Hm(x)Hn(x)e^(−x^2)dx = 0

[Note: corrected; the source prints "e^(−x^2/2)dx = 0" where this reads "e^(−x^2)dx = 0". The weight is e^(−x^2).]

if m ≠ n and

∫_−∞^∞ Hm(x)Hn(x)e^(−x^2)dx = 2^n n!√(π)

[Note: corrected; the source prints "e^(−x^2/2)dx = 2^n n!√(π)" where this reads "e^(−x^2)dx = 2^n n!√(π)". The weight is e^(−x^2).]

if m = n.

This will not be proved, but can the demonstrated using any of the Hermite polynomials listed in the previous section. The orthogonality property becomes important when solving the Harmonic oscillator problems. Note that the integral of Equation (2) is important for normalizing the quantum harmonic oscillator wavefunctions discussed in last Section.

### Example 5.7.2 : Hermite Polynomials are Orthogonal

Demonstrate that H2(x) and H3(x) are orthogonal.

[Note: orthogonality is with the weight e^(−x^2): the integral to show is ∫H2(x)H3(x)e^(−x^2)dx = 0, zero because the integrand is odd. Without the weight, as below, the integral over all x does not converge, which is why the solution falls back to a finite range. The text is left as printed.]

**Solution**

We need to confirm

∫_−∞^∞ H2(x)H3(x)dx = 0

or when substituted

∫_−∞^∞ (4x^2 − 2)(8x^3 − 12x)dx = 0

because it says I need to show it's orthogonal on [−∞, ∞] or we can just evaluate it on a finite interval [−L, L], where L is a constant.

∫_−L^L (4x^2 − 2)(8x^3 − 12x)dx = 8((2x^6)/3 − 2x^4 + (3x^2)/2)|_−L^L

= 8((2L^6)/3 − 2L^4 + (3L^2)/2) − 8((2(−L)^6)/3 − 2(−L)^4 + (3(−L)^2)/2)

= 0.

## Concluding

Hermite polynomials are a component in the harmonic oscillator wavefunction that dictates the symmetry of the wavefunctions. If your integration interval is symmetric around 0, then the integral over any integrable odd function is zero, no exception. Therefore as soon as you've found that your integrand is odd and your integration interval is symmetric, you're done. Also, for general functions, if you can easily split them into even and odd parts, you only have to consider the integral over the even part for symmetric integration intervals.

Another important property is that the product of two even or of two odd functions is even, and the product of an even and an odd function is odd. For example, if ff is even, x↦f(x) sin(x) is odd, and therefore the integral over it is zero (provided it is well defined).
