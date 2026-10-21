---
title: "3.2: Linear Operators in Quantum Mechanics"
book: "Physical Chemistry (LibreTexts)"
chapter: "3: The Schrödinger Equation and a Particle in a Box"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03%3A_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.02%3A_Linear_Operators_in_Quantum_Mechanics"
author: "Smblinder"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Classical-Mechanical quantities are represented by linear operators in Quantum Mechanics
- Understand that "algebra" of scalars and functions do not always to operators (specifically the commutative property)

The bracketed object in the time-independent Schrödinger Equation (in 1D)

[−(ħ^2/(2 m))∇^2 + V(r⃗)]ψ(r⃗) = Eψ(r⃗)

is called an operator. An operator is a generalization of the concept of a function applied to a function. Whereas a function is a rule for turning one number into another, an operator is a rule for turning one function into another. For the time-independent Schrödinger Equation, the operator of relevance is the Hamiltonian operator (often just called the Hamiltonian) and is the most ubiquitous operator in quantum mechanics.

Ĥ = −(ħ^2/(2 m))∇^2 + V(r⃗)

We often (but not always) indicate that an object is an operator by placing a 'hat' over it, eg, Ĥ. So time-independent Schrödinger Equation can then be simplified from Equation (3.1.19) to

Ĥψ(r⃗) = Eψ(r⃗)

Equation (simple) says that the Hamiltonian operator operates on the wavefunction to produce the energy, which is a scalar (i.e., a number, a quantity and observable) times the wavefunction. Such an equation, where the operator, operating on a function, produces a constant times the function, is called an eigenvalue equation. The function is called an eigenfunction, and the resulting numerical value is called the eigenvalue. Eigen here is the German word meaning self or own. We will discuss this in detail in later Sections.

## Fundamental Properties of Operators

Most properties of operators are straightforward, but they are summarized below for completeness.

1. The sum and difference of two operators Â and B̂ are given by (Â±B̂)f = Âf±B̂f
2. The product of two operators is defined by ÂB̂f ≡ Â[B̂f]
3. Two operators are equal if Âf = B̂f for all functions f.
4. The identity operator 1̂ does nothing (or multiplies by 1) 1̂f = f
5. The n-th power of an operator Â^n is defined as n successive applications of the operator, e.g. Â^2 f = ÂÂf
6. The associative law holds for operators Â(B̂Ĉ) = (ÂB̂)Ĉ
7. The commutative law does not generally hold for operators. In general, but not always, ÂB̂ ≠ B̂Â.

To help identify if the inequality in Equation (comlaw) holds for any two specific operators, we define the commutator.

### Definition: The Commutator

It is convenient to define the commutator of Â and B̂

[Â, B̂] ≡ ÂB̂ − B̂Â

If Â and B̂ commute, then

[Â, B̂] = 0.

If the commutator is not zero, the order of operating matters and the operators are said to "not commute." Moreover, this property applies

[Â, B̂] = −[B̂, Â].

## Linear Operators

The action of an operator that turns the function f(x) into the function g(x) is represented by

Âf(x) = g(x)

The most common kind of operator encountered are linear operators which satisfies the following two conditions:

Ô(f(x) + g(x)) = Ôf(x) + Ôg(x) (Condition A)

and

Ôcf(x) = cÔf(x) (Condition B)

where

- Ô is a linear operator,
- c is a constant that can be a complex number (c = a + ib), and
- f(x) and g(x) are functions of x

If an operator fails to satisfy either Equations (3.2.2a) or (3.2.2b) then it is not a linear operator.

### Example 3.2.1

Is this operator Ô = −iħd/dx linear?

**Solution**

To confirm is an operator is linear, both conditions in Equation (3.2.2b) must be demonstrated.

Condition A (Equation (3.2.2a)):

Ô(f(x) + g(x)) = −iħ(d/dx)(f(x) + g(x))

From basic calculus, we know that we can use the sum rule for differentiation

Ô(f(x) + g(x)) = −iħ(d/dx)f(x) − iħ(d/dx)g(x)

= Ôf(x) + Ôg(x)    ✓

Condition A is confirmed. Does Condition B (Equation (3.2.2b)) hold?

Ôcf(x) = −iħ(d/dx)cf(x)

Also from basic calculus, this can be factored out of the derivative

Ôcf(x) = −ciħ(d/dx)f(x)

= cÔf(x)    ✓

Yes. This operator is a linear operator (this is the linear momentum operator).

### Exercise 3.2.1

Confirm if the square root operator √(f(x)) linear or not?

**Answer**

To confirm is an operator is linear, both conditions in Equations (3.2.2a) and (3.2.2b) must be demonstrated. Let's look first at Condition B.

Does Condition B (Equation (3.2.2b)) hold?

Ôcf(x) = cÔf(x)

√(cf(x)) ≠ c√(f(x))

Condition B does not hold, therefore the square root operator is not linear.

The most operators encountered in quantum mechanics are linear operators.

## Hermitian Operators

An important property of operators is suggested by considering the Hamiltonian for the particle in a box:

Ĥ = −ħ^2/(2 m) · d^2/dx^2

Let f(x) and g(x) be arbitrary functions which obey the same boundary values as the eigenfunctions of Ĥ (e.g., they vanish at x = 0 and x = a). Consider the integral

∫0^a f(x) Ĥ g(x) dx = −(ħ^2/(2 m))∫0^a f(x) g''(x) dx

Now, using integration by parts,

∫0^a f(x) g''(x) dx = −∫0^a f'(x) g'(x) dx + f(x) g'(x)|0^a

The boundary terms vanish by the assumed conditions on f and g. A second integration by parts transforms Equation (3) to

∫0^a f''(x) g(x) dx − f'(x) g(x)|0^a

It follows therefore that

∫0^a f(x) Ĥ g(x) dx = ∫0^a g(x) Ĥ f(x) dx

An obvious generalization for complex functions will read

∫0^a f^*(x) Ĥ g(x) dx = (∫0^a g^*(x) Ĥ f(x) dx)^*

In mathematical terminology, an operator Â for which

∫f^* Â g dτ = (∫g^* Â f dτ)^*

for all functions f and g which obey specified boundary conditions is classified as Hermitian or self-adjoint. Evidently, the Hamiltonian is a Hermitian operator. It is postulated that all quantum-mechanical operators that represent dynamical variables are Hermitian. The term is also used for specific times of matrices in linear algebra courses.

> All quantum-mechanical operators that represent dynamical variables are Hermitian.
