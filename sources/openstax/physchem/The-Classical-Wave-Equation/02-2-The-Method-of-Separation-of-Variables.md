---
title: "2.2: The Method of Separation of Variables"
book: "Physical Chemistry (LibreTexts)"
chapter: "2: The Classical Wave Equation"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/02%3A_The_Classical_Wave_Equation/2.02%3A_The_Method_of_Separation_of_Variables"
author: "Flowlerm"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- To be introduced to the Separation of Variables technique as method to solved wave equations

Solving the wave equation involves identifying the functions u(x, t) that solve the partial differential equation that represent the amplitude of the wave at any position x at any time t

(∂^2 u(x, t))/(∂x^2) = 1/v^2 · (∂^2 u(x, t))/(∂t^2)

This wave equation is a type of second-order partial differential equation (PDE) involving two variables - x and t. PDEs differ from ordinary differential equations (ODEs) that involve functions of only one variable. However, this difference makes PDEs appreciably more difficult to solve. In fact, the vast majority of PDE cannot be solved analytically and those classes of special PDEs that can be solved analytically invariably involve converting the PDE into one or more ODEs and then solving independently. One of these approaches is the the method of separation of variables.

### Method of Separation of Variables

The general application of the Method of Separation of Variables for a wave equation involves three steps:

[Note: only two numbered steps are listed below. The text is left as printed.]

1. We find all solutions of the wave equation with the general form u(x, t) = X(x)T(t) for some function X(x) that depends on x but not t and some function T(t) that depends only on t, but not x. It is of course too much to expect that all solutions of Equation (2.1.1) are of this form, however, if we find a set of solutions {Xi(x)Ti(t)} since the wave equation is a linear equation, u(x, t) = Σi ci Xi(x)Ti(t) is also a solution for any choice of the constants ci.
2. Impose constraints on the solutions based on the knowledge of the system. These are called the boundary conditions, which specify the values of u(x, t) at the extremes ("boundaries"). This is a similar constraint to the solution as in initial value problems which the conditions x(ti) are specified at a specific time ti. The goal is then to select the constants ci in Equation (gen1) so that the boundary conditions are also satisfied.

Method of separation of variables is one of the most widely used techniques to solve partial differential equations and is based on the assumption that the solution of the equation is separable, that is, the final solution can be represented as a product of several functions, each of which is only dependent upon a single independent variable. If this assumption is incorrect, then clear violations of mathematical principles will be obvious from the analysis.

## A Vibrating String Held Fixed Between Two Points

[Note: corrected; the source prints "A Vibrating Spring Held Fixed" where this reads "A Vibrating String Held Fixed". The section is about a string held at both ends.]

As discussed in Section 2.1, the solutions to the string example u(x, t) for all x and t would be assumed to be a product of two functions: X(x) and T(t), where X(x) is a function of only x, not t and T(t) is a function of t, but not x.

u(x, t) = X(x)T(t)

Substitute Equation (2.2.1) into the one-dimensional wave equation (Equation (2.1.1)) gives

(∂^2 X(x)T(t))/(∂x^2) = 1/v^2 · (∂^2 X(x)T(t))/(∂t^2)

Since X is not a function of t and T is not a function of x, Equation (2.2.2) can be simplified

T(t)(∂^2 X(x))/(∂x^2) = (1/v^2)X(x)(∂^2 T(t))/(∂t^2)

Collecting the expressions that depend on x on the left side of Equation (2.2.3) and of t on the right side results in

1/(X(x)) · (∂^2 X(x))/(∂x^2) = 1/v^2 · 1/(T(t)) · (∂^2 T(t))/(∂t^2)

Equation (2.2.3a) is an interesting equation since each side can be set to a fixed constant K as that is the only solution that works for all values of t and x. Therefore, the equation can be separated into two ordinary differential equations:

(d^2 T(t))/dt^2 − Kv^2 T(t) = 0

(d^2 X(x))/dx^2 − KX(x) = 0

Hence, by substituting the new product solution form (Equation (2.2.1)) into the original wave equation (Equation (2.1.1)), we converted a partial differential equation of two variables (x and t) into two ordinary differential equations (differential equation containing a function or functions of one independent variable and its derivatives). Each differential equation involves only one of the independent variables (x or t).

- If K = 0, then the solution is the trivial u(x, t) = 0 solution (i.e., no wave exists).
- If K > 0, then the general solution of Equation (2.2.4b) is X(x) = Ae^{√(K)x} + Be^{−√(K)x}

[Note: corrected; the source prints "the trivial u(x, y, ) = 0 solution" where this reads "the trivial u(x, t) = 0 solution". The displacement is a function of x and t.]

At this stage, Equation (2.2.5) implies that the solution to the two ordinary differential wave equations will be an infinite number of waves with no quantization to limit those that are allowed (i.e., any values of A and B are possible). Narrowing down the general solution to a specific solution occurs when taking the boundary conditions into account.

The boundary conditions for this problem is that the wave amplitude equal to zero at the ends of the string

u(0, t) = X(0)T(t) = 0

[Note: corrected; the source prints "u(0, t) = X(x)T(t) = 0" where this reads "u(0, t) = X(0)T(t) = 0". At the boundary x = 0 the condition is on X(0).]

u(L, t) = X(L)T(t) = 0

[Note: corrected; the source prints "u(L, t) = X(x)T(t) = 0" where this reads "u(L, t) = X(L)T(t) = 0". At the boundary x = L the condition is on X(L).]

for all times t.

Applying the two boundary conditions in Equations (2.2.6a) and (2.2.6b) into the general solution in Equation (2.2.5) results into relationships between A and B:

X(x = 0) = A + B = 0

and

X(x = L) = Ae^{√(K)L} + Be^{−√(K)L} = 0

### Ignore the Trivial Solution

One solution to this is that A = B = 0, but this is the trivial solution from K = 0 and one we ignore since it provides no physical solution to the problem other than the knowledge that 0 = 0, which is not that inspiring of a result.

[Note: for K > 0 the two conditions above force A = B = 0, since e^(√(K)L) ≠ e^(−√(K)L); this case gives only the trivial solution, and it is not the K = 0 case. The oscillating solutions come from K < 0 (Section 2.3). The text is left as printed.]

Both Equations (2.2.4a) and (2.2.4b) can be generalized into the following equations

(d^2 y(x))/dx^2 − k^2 y(x) = 0

where k is a real constant (i.e., not complex). Equation (2.2.8) is a homogeneous second order linear differential equation. The general solution to these types of differential equations has the form

y(x) = e^(αx)

where α is a constant to be determined by the constraints of system. Substituting Equation (2.2.9) into Equation (2.2.8) results in

(α^2 − k^2)y(x) = 0

For this equation to be satisfied, either

- α^2 − k^2 = 0 or
- y(x) = 0.

The later is the trivial solution and is ignored and therefore

α^2 − k^2 = 0

so

α = ±k

Hence, there are two solutions to the general Equation (2.2.8), as expected for a second order differential equation (first order differential equations have one solution), which are a result from substituting the α values from Equation (2.2.12) into Equation (2.2.9)

y(x) = e^(k x)

y(x) = e^(−k x)

The general solution can then be any linear combination of these two equations

y(x) = c1 e^(k x) + c2 e^(−k x)

### Example 2.2.1 : General Solution

Solve

y'' + 3y'−4y = 0

**Solution**

The strategy is to search for a solution of the form

y = e^(αt)

The reason for this is that long ago some geniuses figured this stuff out and it works. Now calculate derivatives

y' = αe^(αt)

y'' = α^2 e^(αt)

Substituting into the differential equation gives

α^2 e^(αt) + 3(αe^(αt)) − 4(e^(αt)) = 0

(α^2 + 3α − 4)e^(αt) = 0

Now divide by e^(αt) to get

α^2 + 3α − 4 = 0

(α − 1)(α + 4) = 0

α = 1

and

α = −4

We can conclude that two solutions are

y1 = e^t

and

y2 = e^(−4t)

Now let

L(y) = y'' + 3y'−4y

It is easy to verify that if y1 and y2 are solutions to

L(y) = 0

then

y = c1y1 + c2y2

is also a solution. More specifically we can conclude that

y = c1 e^t + c2 e^(−4t)

Represents a two dimensional family (vector space) of solutions. Later we will prove that this is the most general description of the solution space.

### Example 2.2.2 : Boundary Conditions

Solve

y''−y'−6y = 0

with y(0) = 1 and y'(0) = 2.

**Solution**

As before we seek solutions of the form

y = e^(rt)

Now calculate derivatives

y' = re^(rt)

y'' = r^2 e^(rt)

Substituting into the differential equation gives

r^2 e^(rt) − (re^(rt)) − 6(e^(rt)) = 0

[Note: corrected; the source prints "r^2 e^(rt) + (re^(rt))" where this reads "r^2 e^(rt) − (re^(rt))". The equation is y'' − y' − 6y = 0, so the middle term is subtracted, as the next line has it.]

(r^2 − r − 6)e^(rt) = 0

Now divide by e^(rt) to get

r^2 − r − 6 = 0

(r − 3)(r + 2) = 0

We can conclude that two solutions are

y1 = e^(3t)

and

y2 = e^(−2t)

We can conclude that

y = c1 e^(3t) + C2 e^(−2t)

Represents a two dimensional family (a "vector space") of solutions. Now use the initial conditions to find that

1 = c1 + c2

We have that

y' = 3C1 e^(3t) − 2C2 e^(−2t)

Plugging in the initial condition with y', gives

2 = 3c1 − 2c2

This is a system of two equations and two unknowns. We can use linear algebra to arrive at

c1 = 4/5

and

C2 = 1/5

The final solution is

y = (4/5)e^(3t) + (1/5)e^(−2t)

<!-- end of example -->

When K < 0, the general solutions of Equations (2.2.4a) and (2.2.4b) are oscillatory in time and space, respectively, as discussed in the following section.

[Note: corrected; the source prints "When K > 0, the general solutions" where this reads "When K < 0, the general solutions". K > 0 gives real exponentials; the oscillatory solutions come from K < 0, as Section 2.3 begins.]
