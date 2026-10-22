---
title: "28.3: First-Order Reactions Show an Exponential Decay of Reactant Concentration with Time"
book: "Physical Chemistry (LibreTexts)"
chapter: "28: Chemical Kinetics I - Rate Laws"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/28%3A_Chemical_Kinetics_I_-_Rate_Laws/28.03%3A_First-Order_Reactions_Show_an_Exponential_Decay_of_Reactant_Concentration_with_Time"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

A first order rate law would take the form

(d[A])/dt = −k[A]

[Note: corrected; the source prints "(d[A])/dt = k[A]" where this reads "(d[A])/dt = −k[A]". A reactant is consumed; the next line has −k.]

Again, separating the variables by placing all of the concentration terms on the left and all of the time terms on the right yields

(d[A])/([A]) = −k dt

This expression is also easily integrated as before

∫_([A]=[A]o)^([A]) (d[A])/([A]) = −k∫_(t=0)^(t = t) dt

[Note: corrected; the source prints "∫_([A]=0)^([A])" where this reads "∫_([A]=[A]o)^([A])". At t = 0 the concentration is [A]o (ln 0 would diverge).]

Noting that

dx/x = d(ln x)

The form of the integrated rate law becomes

ln[A]−ln[A]o = −kt

[Note: corrected; the source prints "ln[A]−ln[A]o = kt" where this reads "ln[A]−ln[A]o = −kt". As in the next line.]

or

ln[A] = ln[A]o − kt

This form implies that a plot of the natural logarithm of the concentration is a linear function of the time. And so a plot of ln[A] as a function of time should produce a linear plot, the slope of which is -k, and the intercept of which is ln[A]0.

### Example 28.3.1

Consider the following kinetic data. Use a graph to demonstrate that the data are consistent with first order kinetics. Also, if the data are first order, determine the value of the rate constant for the reaction.

| Time (s) | 0 | 10 | 20 | 50 | 100 | 150 | 200 | 250 | 300 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [A] (M) | 0.873 | 0.752 | 0.648 | 0.414 | 0.196 | 0.093 | 0.044 | 0.021 | 0.010 |

**Solution**

The plot looks as follows:

[Image not described in source]

From this plot, it can be seen that the rate constant is 0.0149 s^-1. The concentration at time t = 0 can also be inferred from the intercept.

It should also be noted that the integrated rate law (Equation (In1)) can be expressed in exponential form:

[A] = [A]o e^(−kt)

Because of this functional form, 1^st order kinetics are sometimes referred to as exponential decay kinetics. Many processes, including radioactive decay of nuclides follow this type of rate law.
