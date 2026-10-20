---
title: "2.3: Oscillatory Solutions to Differential Equations"
book: "Physical Chemistry (LibreTexts)"
chapter: "2: The Classical Wave Equation"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/02%3A_The_Classical_Wave_Equation/2.03%3A_Oscillatory_Solutions_to_Differential_Equations"
author: "Flowlerm"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Explore the basis of the oscillatory solutions to the wave equation
- Understand the consequences of boundary conditions on the possible solutions
- Rationalize how satisfying boundary conditions forces quantization (i.e., only solutions with specific wavelengths exist)

The boundary conditions for the string held to zero at both ends argue that u(x, t) collapses to zero at the extremes of the string (Figure 2.3.1 ).

Figure 2.3.1: Standing waves in a string (both spatially and temporally). from Wikipedia.
Grid with four horizontal lines, each containing two short horizontal segments, forming a minimalist design.

Unfortunately, when K > 0, the general solution (Equation 2.2.7) results in a sum of exponential decays and growths that cannot achieve the boundary conditions (except for the trivial solution); hence K < 0. This means we must introduce complex numbers due to the √K terms in Equation 2.2.5. So we can rewrite K:

K = −p^2

and Equation 2.2.4b can be

(d^2 X(x))/dx^2 + p^2 X(x) = 0

The general solution to differential equations of the form of Equation (2.3.2) is

X(x) = Ae^(ipx) + Be^(−ipx)

### Example 2.3.1

Verify that Equation (2.3.3) is the general form for differential equations of the form of Equation (2.3.2), which when substituted with Equation (2.3.1) give

X(x) = Ae^(ipx) + Be^(−ipx)

**Solution**

Expand the complex exponentials into trigonometric functions via Euler formula (e^(iθ) = cos θ + i sin θ)

X(x) = A[cos(px) + i sin(px)] + B[cos(px) − i sin(px)]

collecting like terms

X(x) = (A + B) cos(px) + i(A − B) sin(px)

Introduce new complex constants c1 = A + B and c2 = i(A − B) so that the general solution in Equation (2.3.6) can be expressed as oscillatory functions

X(x) = c1 cos(px) + c2 sin(px)

Now let's apply the boundary conditions from Equation 2.2.7 to determine the constants c1 and c2. Substituting the first boundary condition (X(x = 0) = 0) into the general solutions of Equation (2.3.7) results in

X(x = 0) = c1 cos(0) + c2 sin(0) = 0

c1 + 0 = 0

c1 = 0

and substituting the second boundary condition (X(x = L) = 0) into the general solutions of Equation (2.3.7) results in

X(x = L) = c1 cos(pL) + c2 sin(pL) = 0

we already know that c1 = 0 from the first boundary condition so Equation (2.3.9) simplifies to

c2 sin(pL) = 0

Given the properties of sines, Equation (2.3.9) simplifies to

pL = nπ

with n = 0 is the trivial solution that we ignore so n = 1,2,3....

p = (nπ)/L

Substituting Equations (2.3.12) and (2.3.8c) into Equation (2.3.7) results in

X(x) = c2 sin((nπx)/L)

which can simplify to

X(x) = c2 sin(ωx)

with

ω = (nπ)/L

A similar argument applies to the other half of the ansatz (T(t)).

### Exercise 2.3.1

Given two traveling waves: ψ1 = sin(c1x + c2 t) and ψ2 = sin(c1x − c2 t)

a. Find the wavelength and the wave velocity of ψ1 and ψ2
b. Find the following and identify nodes: ψ_(+) = ψ1 + ψ2 and ψ_(−) = ψ1 − ψ2

**Solution a**

ψ1 is a sin function. At every integer nπ where n = 0, ±1, ±2, ..., a sin function will be zero. Thus, ψ1 = 0 when c1x + c2 t = πn. Solving for the x, while ignoring trivial solutions:

x = (nπ − c2 t)/(c1)

The velocity of this wave is:

dx/dt = −(c2)/(c1)

Similarly for ψ2. At every integer nπ where n = 0, ±1, ±2, ..., a sin function will be zero. Thus, ψ2 = 0 when c1x − c2 t = πn. Solving for x, for ψ2:

x = (nπ + c2 t)/(c1)

The velocity of this wave is:

dx/dt = (c2)/(c1)

The wavelength for each wave is twice the distance between two successive nodes. In other words,

λ = 2(xn − x_(n−1)) = (2π)/(c1)

**Solution b**

Find ψ_(+) = ψ1 + ψ2 and ψ_(−) = ψ1 − ψ2.

ψ_(+) = sin(c1x + c2 t) + sin(c1x − c2 t)

= sin(c1x) cos(c2 t) + ~~cos(c1x) sin(c2 t)~~ + sin(c1x) cos(c2 t)−~~cos(c1x) sin(c2 t)~~

[Note: corrected; the source prints "+ ~~cos(c1x) sin(c1 t)~~ +" where this reads "+ ~~cos(c1x) sin(c2 t)~~ +"; the source prints "−~~cos(c1x) sin(c1 t)~~" where this reads "−~~cos(c1x) sin(c2 t)~~". Expanding sin(c1x ± c2t) gives cos(c1x) sin(c2t) in the cross terms; the result below is right.]

= 2 sin(c1x) cos(c2 t)

This should have a node at every x = nπ/c1 and

ψ_(−) = sin(c1x + c2 t) − sin(c1x − c2 t)

= ~~sin(c1x) cos(c2 t)~~ + cos(c1x) sin(c2 t)−~~sin(c1x) cos(c2 t)~~ + cos(c1x) sin(c2 t)

[Note: corrected; the source prints "cos(c1x) sin(c1 t)−~~" where this reads "cos(c1x) sin(c2 t)−~~"; the source prints "~~ + cos(c1x) sin(c1 t)" where this reads "~~ + cos(c1x) sin(c2 t)". Expanding sin(c1x ± c2t) gives cos(c1x) sin(c2t); the result below is right.]

= 2 cos(c1x) sin(c2 t)
