---
title: "29.6: The Lindemann Mechanism"
book: "Physical Chemistry (LibreTexts)"
chapter: "29: Chemical Kinetics II- Reaction Mechanisms"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/29%3A_Chemical_Kinetics_II-_Reaction_Mechanisms/29.06%3A_The_Lindemann_Mechanism"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The Lindemann mechanism, sometimes called the Lindemann-Hinshelwood mechanism, is a schematic reaction mechanism. Frederick Lindemann discovered the concept in 1921 and Cyril Hinshelwood developed it. It breaks down a stepwise reaction into two or more elementary steps, then it gives a rate constant for each elementary step. The rate law and rate equation for the entire reaction can be derived from this information. Lindemann mechanisms have been used to model gas phase decomposition reactions. Although the net formula for a decomposition may appear to be first-order (unimolecular) in the reactant, a Lindemann mechanism may show that the reaction is actually second-order (bimolecular).

A Lindemann mechanism typically includes an activated reaction intermediate, labeled A* (where A can be any element or compound). The activated intermediate is produced from the reactants only after a sufficient activation energy is applied. It then either deactivates from A* back to A, or reacts with another (dis)similar reagent to produce yet another reaction intermediate or the final product.

## General Mechanism

The schematic reaction A + M → P is assumed to consist of two elementary steps:

STEP 1: Bimolecular activation of A

A + M ⇌ A^* + M

with

- forward activation reaction rate: k1
- reverse deactivation reaction rate: k_−1

STEP 2: Unimolecular reaction of A*

A^* → (k2) P

with

- forward reaction rate: k2

Assuming that the concentration of intermediate A^* is held constant according to the quasi steady-state approximation, what is the rate of formation of product P?

**Solution**

First, find the rates of production and consumption of intermediate A^*. The rate of production of A^* in the first elementary step (Equation (1)) and A^* is consumed both in the reverse first step and in the forward second step. The respective rates of consumption of A^* are:

(d[A^*])/dt = k1[A][M] (forward first step) − k_−1[A^*][M] (reverse first step) − k2[A^*] (forward second step)

According to the steady-state approximation,

(d[A^*])/dt ≈ 0

Therefore the rate of production of A^* (first term in Equation (3)) equals the rate of consumption (second and third terms in Equation (3)):

k1[A][M] = k_−1[A^*][M] + k2[A^*]

Solving for [A^*], it is found that

[A^*] = (k1[A][M])/(k_−1[M] + k2)

The overall reaction rate is (Equation (2))

(d[P])/dt = k2[A^*]

Now, by substituting the calculated value for [A^*] (Equation (7) into Equation (8)), the overall reaction rate can be expressed in terms of the original reactants A and M as follows:

(d[P])/dt = (k1 k2[A][M])/(k_−1[M] + k2)

The rate law for the Lindemann mechanism is not a simple first or second order reaction. However, under certain conditions (discussed below), Equation (9) can be simplified.

### Three Principles of the Lindemann Mechanism

1. Energy is transferred by collision (forward reaction of Equation (1))
2. There is a time delay Δt between collision and reaction (Equation (2))
3. Molecules may be de-activated by another collision during Δt (reverse reaction of Equation (1))

### Example 29.6.1 : Dissociation of N2O5

The decomposition of dinitrogen pentoxide to nitrogen dioxide and nitrogen trioxide

N2O5 → NO2 + NO3

is postulated to take place via two elementary steps, which are similar in form to the schematic example given above:

1. N2O5 + N2O5 ⇌ N2O5^* + N2O5
2. N2O5^* → NO2 + NO3

Using the quasi steady-state approximation soluioten (Equation 9) with [M] = [N2O5], then rate equation is:

Rate = k2[N2O5^*] = (k1 k2[N2O5]^2)/(k_−1[N2O5] + k2)

[Note: corrected; the source prints "Rate = k2[N2O5]^* =" where this reads "Rate = k2[N2O5^*] =". The star marks the activated species, N2O5^*.]

Experiment has shown that the rate is observed as first-order in the original concentration of N2O5 sometimes, and second order at other times.

- If k2 ≫ k_−1[N2O5], then the rate equation may be simplified by assuming that k_−1 ≈ 0. Then the rate equation is Rate = k1[N2O5]^2 which is second order.
- If k2 ≪ k_−1[N2O5], then the rate equation may be simplified by assuming k2 ≈ 0. Then the rate equation is Rate = (k1 k2[N2O5])/(k_−1) = k_obs[N2O5] which is first order with k_obs = (k1 k2)/(k_−1).

[Note: corrected; the source prints "If k2 ≫ k_−1, then" where this reads "If k2 ≫ k_−1[N2O5], then"; the source prints "If k2 ≪ k_−1, then" where this reads "If k2 ≪ k_−1[N2O5], then"; the source prints "with k_obs = (k2 k2)/(k_−1)" where this reads "with k_obs = (k1 k2)/(k_−1)". The limits compare the two terms of the denominator, k_−1[N2O5] + k2 (k2 and k_−1 have different units); k_obs = k1k2/k_−1, from the rate just given.]

### Exercise 29.6.1

The following first order rate constants for the gas phase decomposition of N2O5 have been obtained as a function of number density at 298 K.

| k_obs(s^−1) | 7.81 × 10^−3 | 12.5 × 10^−3 | 15.6 × 10^−3 |
| --- | --- | --- | --- |
| [N2O5](mol m^−3) | 10 | 25 | 50 |

[Note: corrected; the source prints "[N2O5](mol/m^−3)" where this reads "[N2O5](mol m^−3)". mol m^−3, or mol/m^3.]

Confirm that these data are consistent with the Lindemann mechanism and derive a rate constant and a ratio of two rate constants for elementary reactions in the mechanism. What are the units of the two quantities.

## Lindemann Mechanism

Consider the isomerization of methylisonitrile gas, CH3NC, to acetonitrile gas, CH3CN:

CH3NC ⟶ (k) CH3CN

If the isomerization is a unimolecular elementary reaction, we should expect to see 1^st order rate kinetics. Experimentally, however, 1^st order rate kinetics are only observed at high pressures. At low pressures, the reaction kinetics follow a 2^nd order rate law:

(d[CH3NC])/dt = −k[CH3NC]^2

To explain this observation, J.A. Christiansen and F.A. Lindemann proposed that gas molecules first need to be energized via intermolecular collisions before undergoing an isomerization reaction. The reaction mechanism can be expressed as the following two elementary reactions

A + M ⇌ (k1, k_−1) A^* + M

A^* → (k2) B

where M can be a reactant molecule, a product molecule or another inert molecule present in the reactor. Assuming that the concentration of A^* is small, or k1[M] ≪ k2 + k_−1[M], we can use a steady-state approximation to solve for the concentration profile of species B with time:

[Note: corrected; the source prints "or k1 ≪ k2 + k_−1" where this reads "or k1[M] ≪ k2 + k_−1[M]". The rates, not the constants, are compared.]

(d[A^*])/dt = k1[A][M]−k_−1[A^*]_ss[M]−k2[A^*]_ss ≈ 0

Solving for [A^*],

[A^*] = (k1[M][A])/(k2 + k_−1[M])

The reaction rates of species A and B can be written as

−(d[A])/dt = (d[B])/dt = k2[A^*] = (k1 k2[M][A])/(k2 + k_−1[M]) = k_obs[A]

where

k_obs = (k1 k2[M])/(k2 + k_−1[M])

At high pressures, we can expect collisions to occur frequently, such that k_−1[M] ≫ k2. Equation (21.33) then becomes

−(d[A])/dt = ((k1 k2)/(k_−1))[A]

which follows 1^st order rate kinetics.

At low pressures, we can expect collisions to occurs infrequently, such that k_−1[M] ≪ k2. In this scenario, Equation (21.33) becomes

−(d[A])/dt = k1[A][M]

which follows second order rate kinetics, consistent with experimental observations.

## References

- The content of this page is sourced from World Heritage Encyclopedia and licensed differently than most of the content in the Libretexts under a CC BY-SA 3.0 license.
