---
title: "2.4: The General Solution is a Superposition of Normal Modes"
book: "Physical Chemistry (LibreTexts)"
chapter: "2: The Classical Wave Equation"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/02%3A_The_Classical_Wave_Equation/2.04%3A_The_General_Solution_is_a_Superposition_of_Normal_Modes"
author: "Flowlerm"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Separate the wave equation into individual spatial and temporal problems and solve them.
- Demonstrate that the general solution can be a superposition of solutions (normal modes)

As discussed previously, the solutions to the string example u(x, t) for all x and t would be assumed to be a product of two functions: X(x) and T(t), where X(x) is a function of only x, not t and T(t) is a function of t, but not x.

u(x, t) = X(x)T(t)

By substituting the new product solution form into the original wave equation, one can obtain two ordinary differential equations (differential equation containing a function or functions of one independent variable and its derivatives). Each differential equation would involve only one of the independent variables (x or t).

## Spatial Dependence of the Solution: X(x)

The boundary conditions for the string held to zero at both ends argue that u(x, t) collapses to zero at the extremes of the string. Unfortunately, when K > 0, the general solution to the wave equation results in a sum of exponential decays and growths that cannot achieve the boundary conditions (except for the trivial solution that u(x, t) = 0); hence K < 0. This means we must introduce complex numbers due to the √K terms in Equation 2.4.5. So we can rewrite K:

K = −p^2

and Equation 2.4.4b can be

(d^2 X(x))/dx^2 + p^2 X(x) = 0

The general solution to differential equations of the form of Equation (2.4.2) is

X(x) = Ae^{√(K)x} + Be^{−√(K)x}

that when substituted with Equation (2.4.1) give

X(x) = Ae^(ipx) + Be^(−ipx)

The complex exponentials in Equation (2.4.1) can be expressed as trigonometric functions via Euler formula (e^(iθ) = cos θ + i sin θ)

X(x) = A[cos(px) + i sin(px)] + B[cos(px) − i sin(px)]

collecting like terms

X(x) = (A + B) cos(px) + i(A − B) sin(px)

The general solution in Equation (2.4.6) can be expressed as oscillatory functions by introducing new complex constants C = A + B and D = i(A − B):

X(x) = C cos(px) + D sin(px)

### Exercise 2.4.1

Verify that Equation (2.4.3) is the general form for differential equations of the form of Equation (2.4.2).

**Answer**

In order to show that

X(x) = Ae^{√(k)x} + Be^{−√(k)x}

[Note: corrected; the source prints "X(x) = Ae^{√(x)x} + Be^{−√(x)x}" where this reads "X(x) = Ae^{√(k)x} + Be^{−√(k)x}". The exponent is √(k)x, as in the lines that follow.]

is a general solution to the differential equation

(d^2 X(x))/dx^2 + p^2 X(x) = 0.

We then have to take the second derivative of Equation (2.4.4) and substitute it and the original function into the appropriate locations in Equation (2.4.3) and verify that it does in fact equal 0.

First we have to take the first and then second derivative of Equation (2.4.4)

(d/dx)(Ae^{√(kx)} + Be^{−√(k)x}) = √(k)Ae^{√(kx)}−√(k)Be^{−√(kx)}

(d^2/dx^2)(Ae^{√(kx)} + Be^{−√(k)x}) = kAe^{√(kx)} + kBe^{−√(kx)}

[Note: in these two lines, and in the check below, several exponents are written e^{√(kx)} where e^{√(k)x} is meant: the derivatives shown (√(k)Ae^{…}, kAe^{…}) hold only for the exponent √(k)x. The text is left as printed.]

Now that we have the second derivative of Equation (2.4.4) we plug the relevant values into Equation (2.4.2)

(d^2 X(x))/dx^2 + p^2 X(x) = 0

kAe^{√(k)x} + kBe^{−√(k)x} + p^2(Ae^{√(k)x} + Be^{−√(k)x}) = (?) 0

We are given in Equation (2.4.2) that

k = −p^2

So

p^2 = −k

Now we can plug that into our differential equation to simplify

kAe^{√(k)x} + kBe^{−√(k)x}−k(Ae^{√(k)x} + Be^{−√(k)x}) = (?) 0

~~kAe^{√(kx)}~~ + ~~kBe^{−√(kx)}~~−~~kAe^{√(kx)}~~−~~kBe^{−√(kx)}~~ = (✓) 0

As all of these terms cancel to equal 0, we prove that the solution given is a general solution to the differential equation. It is important to remember though that it is not the only solution to the differential equation.

Now let's apply the boundary conditions from Equation (2.4.7) to determine the constants C and D. Substituting the first boundary condition (X(x = 0) = 0) into the general solutions of Equation (2.4.7) results in

X(x = 0) = 0

C cos(0) + D sin(0) = 0

C + 0 = 0

C = 0

and substituting the second boundary condition (X(x = L) = 0) into the general solutions of Equation (2.4.7) results in

X(x = L) = C cos(pL) + D sin(pL) = 0

we already know that C = 0 from the first boundary condition so Equation (2.4.9) simplifies to

D sin(pL) = 0

Given the properties of sines, Equations (2.4.9) simplifies to

pL = nπ

with n = 0 is the trivial solution that we ignore so n = 1,2,3....

p = (nπ)/L

Substituting Equations (2.4.12) and (2.4.8c) into Equation (2.4.7) results in

X(x) = D sin((nπx)/L)

Equation (2.4.13) presents a set of solutions to the spatial part of the solution to the wave equation subject to the boundary conditions (Figure 2.4.1). This set of solutions is infinitely large with individual solutions that are distinguished from each other by the n parameter introduced to account for the boundary conditions. This number is an example of a "quantum number" that are ubiquitously in quantum mechanics and are uniquely defined for each system.

Figure 2.4.1: The first seven X(x) solutions of a vibrating string of length L at the two times of maximum displacement (red and blue). (CC BY-NC; Ümit Kaya via LibreTexts).
Two sets of wavy lines, one red and one blue, displayed in layers with evenly spaced points along them.

## Time Dependence of the Solution: T(t)

A similar argument applies to the other half of the ansatz (T(t)) originally proposed for the classical wave equation was obtain from solving Equation 2.4.4a, which qualitatively resembles the original spatial differential equation solved above (Equation 2.4.4b).

(d^2 T(t))/dt^2 − Kv^2 T(t) = 0

However, the constraints extracted from solving spatial dependence apply to the time dependence. When Equations (2.4.1) and (2.4.12) are substituted into Equation 2.4.4a, a more simplified expression is obtained

(d^2 T(t))/dt^2 + p^2 v^2 T(t) = (d^2 T(t))/dt^2 + ((nvπ)/L)^2 T(t) = 0

Define a new constant: ωn

ωn = ((nvπ)/L)

and substitute into Equation (2.4.14)

(d^2 T(t))/dt^2 + ωn^2 T(t) = 0

This is the same functional form of Equation (2.4.2)

T(t) = E cos(ωn t) + F sin(ωn t)

In contrast to the spatial dependence solution, we have no boundary conditions to use to identify the constants E and F.

## The Principle of Superposition

Now let's revisit the original ansatz solution to the classical wave equation (Equation (2.4.1)), which can be substituted with Equations (2.4.13) and (2.4.17)

u(x, t) = X(x)T(t)

= [D sin((nπx)/L)](E cos(ωn t) + F sin(ωn t))

we can collect constants again with G = DE and H = DF and introduce a n dependence to each since E and F may be n dependence.

un(x, t) = ([Gn cos(ωn t) + Hn sin(ωn t)]) (temporal solution) sin((nπx)/L) (spatial solution)

The functions represented in Equation (2.4.19) are set of solutions including both spatial and temporal features that solve the wave equation of a string held tight on two ends.

### Linearity of the Wave Equation

The wave equation has a very important property: if we have two solutions to the equation, then the sum of the two is also a solution to the equation. It’s easy to check this:

(∂^2(f + g))/(∂x^2) = (∂^2 f)/(∂x^2) + (∂^2 g)/(∂x^2) = 1/v^2 · (∂^2 f)/(∂t^2) + 1/v^2 · (∂^2 g)/(∂t^2) = 1/v^2 · (∂^2(f + g))/(∂t^2)

Any differential equation for which this property holds is called a linear differential equation. Also note that af(x, t) + bg(x, t) is also a solution to the equation if a, b are constants. So you can add together—superpose—multiples of any two solutions of the wave equation to find a new function satisfying the equation.

The linearity property is easy to interpret visually: if you can draw two wave solutions, then at each point on the string simply add the displacement un(x, t) of one wave to the other um(x, t)—the sum of the two waves together is a solution. So, for example, as two traveling waves moving along the string in opposite directions meet each other, the displacement of the string at any point at any instant is just the sum of the displacements it would have had from the two waves singly.

Figure 2.4.2: Interference of Multiple Pulses. ("for non-profit educational purposes."; Tom Walsh via ophysics.com)
A line graph depicting two sine wave patterns, one in blue and one in orange, showing fluctuations over time.

This simple addition of the displacements is interference, doubtless because if the waves meeting have displacements in opposite directions, the string will be displaced less than by a single wave. This is also called the Principle of Superposition.

### Principle of Superposition

The Principle of Superposition is the sum of two or more solutions is also a solution.

Since the wave equation is a linear homogeneous differential equation, the total solution can be expressed as a sum of all possible solutions described by Equation (2.4.19).

u(x, t) = Σ_(n=1)^∞un(x, t)

= Σ_(n=1)^∞(Gn cos(ωn t) + Hn sin(ωn t)) sin((nπx)/L)

Each un(x, t) solution is called a normal mode of the system and can be characterized via their corresponding wavenumbers (nπ)/L with n = 1,2,3.... The spatial dependence of the first seven normal modes are shown in Figure 2.4.1 and are standing waves. The first term with n = 1 is typically called the fundamental and each subsequent modes is called an overtone or harmonic. The temporal dependence of the normal modes is sinusoidal with angular frequencies ωn that can be expanded to natural frequencies νn via

[Note: corrected; the source prints "their corresponding frequencies (nπ)/L" where this reads "their corresponding wavenumbers (nπ)/L". nπ/L is each mode's wavenumber; its angular frequency is ωn = nπv/L.]

νn = (ωn)/(2π) = nv/(2L)

Hence, as the spatial curvature of the normal mode increases, the temporal oscillation of that mode also increases. This is a common trait in quantum mechanical systems and is a direct consequence of the wave equation.
