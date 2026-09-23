---
title: "16.3: The Second and Third Laws of Thermodynamics"
book: "Chemistry 1e (OpenStax)"
chapter: "16: Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/16%3A_Thermodynamics/16.03%3A_The_Second_and_Third_Laws_of_Thermodynamics"
author: "OpenStax"
license: "CC BY 4.0"
---

## The Second Law of Thermodynamics

In the quest to identify a property that may reliably predict the spontaneity of a process, we have identified a very promising candidate: entropy. Processes that involve an increase in entropy of the system (ΔS > 0) are very often spontaneous; however, examples to the contrary are plentiful. By expanding consideration of entropy changes to include the surroundings, we may reach a significant conclusion regarding the relation between this property and spontaneity. In thermodynamic models, the system and surroundings comprise everything, that is, the universe, and so the following is true:

ΔSuniv = ΔSsys + ΔSsurr

To illustrate this relation, consider again the process of heat flow between two objects, one identified as the system and the other as the surroundings. There are three possibilities for such a process:

- The objects are at different temperatures, and heat flows from the hotter to the cooler object. This is always observed to occur spontaneously. Designating the hotter object as the system and invoking the definition of entropy yields the following:

  ΔSsys = −qrev / Tsys   and   ΔSsurr = qrev / Tsurr

  The arithmetic signs of qrev denote the loss of heat by the system and the gain of heat by the surroundings. Since Tsys > Tsurr in this scenario, the magnitude of the entropy change for the surroundings will be greater than that for the system, and so the sum of ΔSsys and ΔSsurr will yield a positive value for ΔSuniv. This process involves an increase in the entropy of the universe.

- The objects are at different temperatures, and heat flows from the cooler to the hotter object. This is never observed to occur spontaneously. Again designating the hotter object as the system and invoking the definition of entropy yields the following:

  ΔSsys = qrev / Tsys   and   ΔSsurr = −qrev / Tsurr

  The arithmetic signs of qrev denote the gain of heat by the system and the loss of heat by the surroundings. The magnitude of the entropy change for the surroundings will again be greater than that for the system, but in this case, the signs of the heat changes will yield a negative value for ΔSuniv. This process involves a decrease in the entropy of the universe.

- The temperature difference between the objects is infinitesimally small, Tsys ≈ Tsurr, and so the heat flow is thermodynamically reversible. See the previous section's discussion. In this case, the system and surroundings experience entropy changes that are equal in magnitude and therefore sum to yield a value of zero for ΔSuniv. This process involves no change in the entropy of the universe.

These results lead to a profound statement regarding the relation between entropy and spontaneity known as the second law of thermodynamics: all spontaneous changes cause an increase in the entropy of the universe. A summary of these three relations is provided in Table 16.3.1.

Table 16.3.1: The Second Law of Thermodynamics

| | |
| --- | --- |
| ΔSuniv > 0 | spontaneous |
| ΔSuniv < 0 | nonspontaneous (spontaneous in opposite direction) |
| ΔSuniv = 0 | reversible (system is at equilibrium) |

**Definition: The Second Law of Thermodynamics**

All spontaneous changes cause an increase in the entropy of the universe.

For many realistic applications, the surroundings are vast in comparison to the system. In such cases, the heat gained or lost by the surroundings as a result of some process represents a very small, nearly infinitesimal, fraction of its total thermal energy. For example, combustion of a fuel in air involves transfer of heat from a system (the fuel and oxygen molecules undergoing reaction) to surroundings that are infinitely more massive (the earth's atmosphere). As a result, qsurr is a good approximation of qrev, and the second law may be stated as the following:

ΔSuniv = ΔSsys + ΔSsurr = ΔSsys + qsurr/T

We may use this equation to predict the spontaneity of a process as illustrated in Example 16.3.1.

### Example 16.3.1: Will Ice Spontaneously Melt?

The entropy change for the process

H2O(s) ⟶ H2O(l)

is 22.1 J/K and requires that the surroundings transfer 6.00 kJ of heat to the system. Is the process spontaneous at −10.00 °C? Is it spontaneous at +10.00 °C?

**Solution**

We can assess the spontaneity of the process by calculating the entropy change of the universe. If ΔSuniv is positive, then the process is spontaneous. At both temperatures, ΔSsys = 22.1 J/K and qsurr = −6.00 kJ.

At −10.00 °C (263.15 K), the following is true:

ΔSuniv = ΔSsys + ΔSsurr = ΔSsys + qsurr/T
= 22.1 J/K + (−6.00 × 10^3 J)/(263.15 K) = −0.7 J/K

ΔSuniv < 0, so melting is nonspontaneous (not spontaneous) at −10.0 °C.

At 10.00 °C (283.15 K), the following is true:

ΔSuniv = ΔSsys + qsurr/T
= 22.1 J/K + (−6.00 × 10^3 J)/(283.15 K) = +0.9 J/K

ΔSuniv > 0, so melting is spontaneous at 10.00 °C.

### Exercise 16.3.1

Using this information, determine if liquid water will spontaneously freeze at the same temperatures. What can you say about the values of Suniv?

**Answer**

Entropy is a state function, and freezing is the opposite of melting. At −10.00 °C spontaneous, +0.7 J/K; at +10.00 °C nonspontaneous, −0.9 J/K.

## The Third Law of Thermodynamics

The previous section described the various contributions of matter and energy dispersal that contribute to the entropy of a system. With these contributions in mind, consider the entropy of a pure, perfectly crystalline solid possessing no kinetic energy (that is, at a temperature of absolute zero, 0 K). This system may be described by a single microstate, as its purity, perfect crystallinity and complete lack of motion means there is but one possible location for each identical atom or molecule comprising the crystal (W = 1). According to the Boltzmann equation, the entropy of this system is zero.

S = k ln W = k ln(1) = 0

This limiting condition for a system's entropy represents the third law of thermodynamics: the entropy of a pure, perfect crystalline substance at 0 K is zero.

**Definition: Third Law of Thermodynamics**

The entropy of a pure, perfect crystalline substance at 0 K is zero.

We can make careful calorimetric measurements to determine the temperature dependence of a substance's entropy and to derive absolute entropy values under specific conditions. Standard entropies are given the label S°298 for values determined for one mole of substance, isolated in its pure form in its own container, at a pressure of 1 bar and a temperature of 298 K.

**Definition: Thermodynamic Standard State**

The thermodynamic standard state of a substance refers to an isolated sample of that substance, in its own container, at 1.000 bar (0.9869 atm) pressure. If the substance is a solute, the most common standard state is one in which the concentration of the solute is 1.000 molal (sometimes approximated with 1.000 M). There is no defined temperature for the standard state, but most discussions about standard state assume that the temperature is 298.15 K (25 ºC) unless otherwise noted.

This may seem like a strange definition, because it requires that each of the reactants and each of the products of a reaction are kept separate from one another, unmixed. The entropy of mixing must be determined separately.

The standard entropy change (ΔS°) for any process may be computed from the standard entropies of its reactant and product species like the following:

ΔS° = ∑νS°298(products) − ∑νS°298(reactants)

Here, ν represents stoichiometric coefficients in the balanced equation representing the process. For example, ΔS° for the following reaction at room temperature

mA + nB ⟶ xC + yD

is computed as the following:

= [xS°298(C) + yS°298(D)] − [mS°298(A) + nS°298(B)]

Table 16.3.2 lists some standard entropies at 298.15 K. You can find additional standard entropies in Tables T1 or T2.

Table 16.3.2: Standard Entropies (at 298.15 K, 1 atm)

| Substance | S°298 (J/mol·K) |
| --- | --- |
| **carbon** | |
| C(s, graphite) | 5.740 |
| C(s, diamond) | 2.38 |
| CO(g) | 197.7 |
| CO2(g) | 213.8 |
| CH4(g) | 186.3 |
| C2H4(g) | 219.5 |
| C2H6(g) | 229.5 |
| CH3OH(l) | 126.8 |
| C2H5OH(l) | 160.7 |
| **hydrogen** | |
| H2(g) | 130.57 |
| H(g) | 114.6 |
| H2O(g) | 188.71 |
| H2O(l) | 69.91 |
| HCl(g) | 186.8 |
| H2S(g) | 205.7 |
| **oxygen** | |
| O2(g) | 205.03 |

### Example 16.3.2: Determination of ΔS°

Calculate the standard entropy change for the following process:

H2O(g) ⟶ H2O(l)

**Solution**

The value of the standard entropy change at room temperature, ΔS°298, is the difference between the standard entropy of the product, H2O(l), and the standard entropy of the reactant, H2O(g).

ΔS°298 = S°298(H2O(l)) − S°298(H2O(g))
= (70.0 J mol^−1 K^−1) − (188.8 J mol^−1 K^−1) = −118.8 J mol^−1 K^−1

The value for ΔS°298 is negative, as expected for this phase transition (condensation), which the previous section discussed.

### Exercise 16.3.2

Calculate the standard entropy change for the following process:

H2(g) + C2H4(g) ⟶ C2H6(g)

**Answer**

−120.6 J mol^−1 K^−1

### Example 16.3.3: Determination of ΔS°

Calculate the standard entropy change for the combustion of methanol, CH3OH, at room temperature:

2CH3OH(l) + 3O2(g) ⟶ 2CO2(g) + 4H2O(l)

**Solution**

The value of the standard entropy change is equal to the difference between the standard entropies of the products and the entropies of the reactants scaled by their stoichiometric coefficients.

ΔS° = ΔS°298 = ∑νS°298(products) − ∑νS°298(reactants)
= [2S°298(CO2(g)) + 4S°298(H2O(l))] − [2S°298(CH3OH(l)) + 3S°298(O2(g))]
= {[2(213.8) + 4 × 70.0] − [2(126.8) + 3(205.03)]} = −161.1 J/mol·K

### Exercise 16.3.3

Calculate the standard entropy change for the following reaction:

Ca(OH)2(s) ⟶ CaO(s) + H2O(l)

**Answer**

24.7 J/mol·K

## Summary

The second law of thermodynamics states that a spontaneous process increases the entropy of the universe, ΔSuniv > 0. If ΔSuniv < 0, the process is nonspontaneous, and if ΔSuniv = 0, the system is at equilibrium. The third law of thermodynamics establishes the zero for entropy as that of a perfect, pure crystalline solid at 0 K. With only one possible microstate, the entropy is zero. We may compute the standard entropy change for a process by using standard entropy values for the reactants and products involved in the process.

## Key Equations

- ΔS° = ΔS°298 = ∑νS°298(products) − ∑νS°298(reactants)
- ΔS = qrev / T
- ΔSuniv = ΔSsys + ΔSsurr
- ΔSuniv = ΔSsys + ΔSsurr = ΔSsys + qsurr/T
