---
title: "20.9: The Statistical Definition of Entropy is Analogous to the Thermodynamic Definition"
book: "Physical Chemistry (LibreTexts)"
chapter: "20: Entropy and The Second Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20%3A_Entropy_and_The_Second_Law_of_Thermodynamics/20.09%3A_The_Statistical_Definition_of_Entropy_is_Analogous_to_the_Thermodynamic_Definition"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The laws of thermodynamics can be understood in two ways: by looking at large-scale properties like temperature and pressure, or by examining how countless tiny atoms move and interact. Both perspectives lead to the same laws, even though the reasoning behind them is quite different.

We learned earlier that entropy, S, is related to the number of microstates, W, in an ensemble with A systems:

S_ensemble = kB ln W

and

W = (A!)/(Πj aj!)

Combining Equations (eq1) and (eq2) to get:

S_ensemble = kB ln((A!)/(Πj aj!))

= kB ln(A!) − kB Σj ln aj!

Using Sterling's approximation:

ln(A!) ≈ A ln A − A

We obtain:

S_ensemble = kB A ln A − kB A − kB Σj aj ln aj + kB Σaj

Since:

A = Σaj

The expression simplifies to:

S_ensemble = kB A ln A − kB Σj aj ln aj

We can make use of the fact that the number of systems in state j is equal to the total number of systems multiplied by the probability of finding the system in state j, pj:

[Note: corrected; the source prints "the number of microstates in state j is equal to the total number of microstates multiplied" where this reads "the number of systems in state j is equal to the total number of systems multiplied". aj and A count systems in the ensemble.]

aj = pj A

Plugging in, we obtain

S_ensemble = kB A ln A − kB Σj pj A ln(pj A)

= kB A ln A − kB Σj pj A ln pj − kB Σj pj A ln A

Since A is a constant and the sum of the probabilities of finding the system in state j is always 1:

Σpj = 1

The first and last term cancel out:

S_ensemble = −kB AΣj pj ln pj

We can use that the entropy of the system is the entropy of the ensemble divided by the number of systems:

S_system = S_ensemble/A

Dividing by A, we obtain:

S_system = −kB Σj pj ln pj

We can differentiate this equation and dropping the subscript:

dS = −kB Σj(dpj + ln pjdpj)

Since Σj pj = 1, the derivative Σj dpj = 0:

dS = −kB Σj ln pjdpj

In short:

Σj ln pjdpj = −(δq_rev)/(kB T)

Plugging in:

dS = (δq_rev)/T

The thermodynamic definition of entropy comes from macroscopic observations. In classical thermodynamics, entropy is defined as the measure of energy dispersal in a system (Equation (10)). It tells us how much heat is spread out or distributed in a system at temperature. This definition is practical and works well at the bulk level but does not say why entropy behaves this way.

The statistical definition of entropy in Equation (eq1), developed by Boltzmann, defines entropy in terms of the number of possible microstates that correspond to the same overall macroscopic state (macrostate). This shows that entropy measures the degree of microscopic disorder or multiplicity of arrangements consistent with what we see at the macroscopic level.

Both definitions describe the same underlying concept:

- The thermodynamic view says entropy measures the spread of energy in terms of heat and temperature.
- The statistical view says entropy measures the spread of possible microstates that energy can occupy.

They are equivalent because a system with more accessible microstates (higher disorder) will also tend to have greater energy dispersal, and thus higher entropy. In fact, the statistical definition explains why the thermodynamic definition works: macroscopic energy dispersal arises from the overwhelming number of microscopic ways energy can be arranged.
