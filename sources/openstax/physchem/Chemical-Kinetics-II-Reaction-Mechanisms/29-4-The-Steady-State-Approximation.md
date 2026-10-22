---
title: "29.4: The Steady-State Approximation"
book: "Physical Chemistry (LibreTexts)"
chapter: "29: Chemical Kinetics II- Reaction Mechanisms"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/29%3A_Chemical_Kinetics_II-_Reaction_Mechanisms/29.04%3A_The_Steady-State_Approximation"
author: "Flemingp"
license: "CC BY-NC-SA 4.0"
---

One of the most commonly used and most attractive approximations is the steady state approximation. This approximation can be applied to the rate of change of concentration of a highly reactive (short lived) intermediate that holds a constant value over a long period of time. The advantage here is that for such an intermediate (I),

(d[I])/dt = 0

So long as one can write an expression for the rate of change of the concentration of the intermediate I, the steady state approximation allows one to solve for its constant concentration. For example, if the reaction

A + B → C

is proposed to follow the mechanism

A + A → (k1) A2

A2 + B → (k2) C + A

The time-rate of change of the concentration of the intermediate A2 can be written as

(d[A2])/dt = k1[A]^2 − k2[A2][B]

In the limit that the steady state approximation can be applied to A2

(d[A2])/dt = k1[A]^2 − k2[A2][B] ≈ 0

or

[A2] ≈ (k1[A]^2)/(k2[B])

So if the rate of the overall reaction is expressed as the rate of formation of the product C,

(d[C])/dt = k2[A2][B]

the above expression for [A2] can be substituted

(d[C])/dt = k2((k1[A]^2)/(k2[B]))[B]

of

(d[C])/dt = k1[A]^2

and the reaction is predicted to be second order in [A].

Alternatively, if the mechanism for Equation (total) is proposed to be

A → (k1) A^*

A^* + B → (k2) C

then the rate of change of the concentration of A^* is

(d[A^*])/dt = k1[A]−k2[A^*][B]

[Note: corrected; the source prints "([A^*])/dt" where this reads "(d[A^*])/dt". The d is missing.]

And if the steady state approximation holds, then

[A^*] ≈ (k1[A])/(k2[B])

So the rate of production of C is

(d[C])/dt = k2[A^*][B]

= ~~k2~~((k1[A])/(~~k2~~ ~~[B]~~))~~[B]~~

or

(d[C])/dt = k1[A]

and the rate law is predicted to be first order in A. In this manner, the plausibility of either of the two reaction mechanisms is easily deduced by comparing the predicted rate law to that which is observed. If the prediction cannot be reconciled with observation, then the scientific method eliminates that mechanism from consideration.
