---
title: "26.2: An Equilibrium Constant is a Function of Temperature Only"
book: "Physical Chemistry (LibreTexts)"
chapter: "26: Chemical Equilibrium"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26%3A_Chemical_Equilibrium/26.02%3A_An_Equilibrium_Constant_is_a_Function_of_Temperature_Only"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Consider a generic reaction:

vA A + vB B ⇌ vY Y + vZ Z

When the reaction reaches equilibrium, the Gibbs energy of reaction, Δr G, goes to zero. In this case, the reaction quotient, Q, is usually rewritten as the equilibrium constant, K, and we get:

Δr G = Δr G^o + RT ln K = 0

Δr G^o = −RT ln K

where

K = (P_(eq, Y)^(vY)P_(eq, Z)^(vZ))/(P_(eq, A)^(vA)P_(eq, B)^(vB))

### Note

As you see Δr G^o is not zero, because the standard state does not represent an equilibrium state (typically).

We can calculate the temperature dependence of K. Rather than look at:

((∂K)/(∂T))_P

We will look at:

((∂ln K)/(∂T))_P

Starting with Gibbs energy:

Δr G° = −RT ln K

∴ ln K = −(ΔrG°)/RT

((∂ln K)/(∂T))_P = −(1/R)[(∂(Δr G°/T))/(∂T)]_P

We need to take the Gibbs-Helmholtz equation:

ΔH̄ = −T^2[(∂(ΔḠ/T))/(∂T)]_P

We can also write it as:

[(∂(ΔḠ/T))/(∂T)]_P = −(ΔH̄)/T^2

Plugging the Gibbs-Helmholtz equation into our earlier equation, we obtain the Van't Hoff equation:

((∂ln K)/(∂T))_P = (Δr H°)/RT^2

The temperature dependence of the equilibrium constant depends on enthalpy of reaction. Rearranging:

d(ln K) = ((Δr H°(T))/RT^2)dT

This is the Van't Hoff equation. We can use it to find K at other temperatures. Assuming enthalpy is independent of temperature, the integrated form becomes:

ln((K(T2))/(K(T1))) = −((Δr H°)/R)(1/(T2) − 1/(T1))

## Le Chatelier's Principle

In the ideal gas reaction case, K only depends on temperature, T, (just like U) not on the total pressure, P. This leads to the well-known principle of Le Chatelier. Consider a gas reaction like:

A ⇌ B + C

e.g.

PCl5 ⇌ PCl3 + Cl2

In pressures, the equilibrium constant becomes:

K = (PB PC)/(PA)

If initially n_A =1 we have at an extent ξ:

n_A = 1- ξ

n_B= ξ

n_C= ξ

n_Total = 1+ ξ

The partial pressures are given by Dalton's law:

P_A= [(1- ξ)/(1+ ξ)] P

[Note: corrected; the source prints "P_A= [1- ξ /1+ ξ] P" where this reads "P_A= [(1- ξ)/(1+ ξ)] P". The fraction is (1 − ξ)/(1 + ξ), as K below requires.]

P_B = [ξ/(1+ ξ)] P

[Note: corrected; the source prints "P_B [ξ / 1+ ξ ] P" where this reads "P_B = [ξ/(1+ ξ)] P". The "=" is missing; ξ/(1 + ξ).]

P_C = [ξ/(1+ ξ)] P

[Note: corrected; the source prints "P_C [ξ /1+ ξ ] P" where this reads "P_C = [ξ/(1+ ξ)] P". As above.]

The equilibrium constant becomes:

K = P (ξ_eq^2)/(1 − ξ_eq^2)

Even though the total pressure, P, does occur in this equation, K is not dependent on P. If the total pressure is changed (e.g. by compression of the gas) the value of ξ_eq will change (the equilibrium shifts) in response. It will go to the side with the fewer molecules. This fact is known as le Chatelier's principle

If the system is not ideal we will also get a Chatelier shift, but the value of K may change a little because the value of the activity coefficients (or fugacity) is a little dependent on the pressure too. In solution the same thing holds. In ideal solutions K is only T dependent, but as we saw these systems are rare. Particularly in ionic solutions equilibrium constants will be effected by other things than just temperature, e.g. changes in the ionic strength and we need to find the activity coefficients to make any predictions.

### Example

Consider the reaction of ammonia decomposition:

2NH3(g) ⇋ N2(g) + 3H2(g)

Δf H°(NH3, g) = −45.90 kJ/mol

The reaction is initially at equilibrium. For each of the stresses, use your General Chemistry knowledge to decide if equilibrium will be unaffected, or if it will shift towards reactants or products.

| Process | Shifts towards |
| --- | --- |
| Isothermal removal of H2 gas |  |
| Isothermal addition of N2 gas |  |
| Isothermal decrease of container volume |  |
| Isothermal and isochoric addition of argon gas |  |
| Isobaric increase of temperature |  |

Write the equilibrium constant expression for the above chemical reaction in terms of gas-phase mole fractions.

## Concentration

The gas law contains a hidden definition of concentration:

PV = nRT

P = (n/V)RT

P = cRT

c = P/RT

Here c stands for the molar amount per unit volume or molarity. For gaseous mixtures we do not use this fact much, but it provides the link to the more important liquid solution as a reaction medium. We can rewrite the equilibrium constant as

K = (c_(eq, Y)^(vY)c_(eq, Z)^(vZ))/(c_(eq, A)^(vA)c_(eq, B)^(vB))

However, c (Equation (Conc)) is substituted into K (Equation (K)), then not all the factors of RT cancel. The missing term g. ln[RT] depends on the stoichiometric coefficients:

g = vY + vZ − vA − vB

The term is generally incorporated in Δ_rG^⦵ so that the latter now refers to a new standard state of 1 mole per liter of each species rather than 1 bar of each (or so).
