---
title: "19.6: The Temperature of a Gas Decreases in a Reversible Adiabatic Expansion"
book: "Physical Chemistry (LibreTexts)"
chapter: "19: The First Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/19%3A_The_First_Law_of_Thermodynamics/19.06%3A_The_Temperature_of_a_Gas_Decreases_in_a_Reversible_Adiabatic_Expansion"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

We can make the same argument for the heat along C. If we do the three processes A and B+C only to a tiny extent we can write:

[Image not described in source]

And now we can integrate from V1 to V2 over the reversible adiabatic work along B and from T1 to T2 for the reversible isochoric heat along C. To separate the variables we do need to bring the temperature to the right side of the equation.:

[Image not described in source]

The latter expression is valid for a reversible adiabatic expansion of a monatomic ideal gas (say Argon) because we used the Cv expression for such a system. We can use the gas law PV = nRT to translate this expression in one that relates pressure and volume see Eq 19.23

[Note: there is no Equation 19.23; the result meant is P1V1^γ = P2V2^γ. The equation images on this page are missing in the source. The text is left as printed.]

We can mathematically show that the temperature of a gas decreases during an adiabatic expansion. Assuming an ideal gas, the internal energy along an adiabatic path is:

dŪ = δq + δw

= 0 − PdV̄

= −PdV̄

The constant volume heat capacity is defined as:

C̄V = ((∂Ū)/(∂T))_V

We can rewrite this for internal energy:

dŪ = C̄V dT

Combining these two expressions for internal energy, we obtain:

C̄V dT = −PdV̄

Using the ideal gas law for pressure of an ideal gas:

C̄V dT = −(RT/(V̄))dV̄

Separating variables:

((C̄V)/T)dT = −(R/(V̄))dV̄

This is an expression for an ideal path along a reversible, adiabatic path that relates temperature to volume. To find our path along a PV surface for an ideal gas, we can start in TV surface and convert to a PV surface. Let's go from (T1, V1) to (T2, V2).

∫_T1^T2 ((C̄V)/T)dT = −∫_V̄1^(V̄2) (R/(V̄))dV̄

C̄V ln((T2)/(T1)) = −R ln((V̄2)/(V̄1)) = R ln((V̄1)/(V̄2))

ln((T2)/(T1)) = (R/(C̄V)) ln((V̄1)/(V̄2))

((T2)/(T1)) = ((V̄1)/(V̄2))^{R/(C̄V)}

We know that:

R = C̄P − C̄V

R/(C̄V) = (C̄P − C̄V)/(C̄V) = (C̄P)/(C̄V) − 1

R/(C̄V) = γ − 1

Therefore:

((T2)/(T1)) = ((V̄1)/(V̄2))^(γ − 1)

This expression shows that volume and temperature are inversely related. That is, as the volume increase from V1 to V2, the temperature must decrease from T1 to T2.
