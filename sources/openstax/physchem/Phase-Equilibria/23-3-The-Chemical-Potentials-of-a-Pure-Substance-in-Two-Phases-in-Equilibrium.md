---
title: "23.3: The Chemical Potentials of a Pure Substance in Two Phases in Equilibrium"
book: "Physical Chemistry (LibreTexts)"
chapter: "23: Phase Equilibria"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/23%3A_Phase_Equilibria/23.03%3A_The_Chemical_Potentials_of_a_Pure_Substance_in_Two_Phases_in_Equilibrium"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## Chemical Potential of Two Phases in Equilibrium

Equilibrium between two phases, e.g. water ice (ice) and liquid water (water), is at constant T and P. Therefore:

dG = ~~−SdT + VdP~~ + μ_ice dn_ice + μ_water dn_water

There is a relationship between the amount of ice and water:

dn_ice = −dn_water

From this, we get:

0 = [μ_water − μ_ice]dn_water = Δμ dn_water

[Note: corrected; the source prints "[μ_ice − μ_water]dn_water" where this reads "[μ_water − μ_ice]dn_water". With dn_ice = −dn_water; the conclusion Δμ = 0 is unchanged.]

As dn_water is not zero, this means that Δμ must be zero! This must hold true for any set of points where ice and water are in equilibrium. The statement is not just for liquid and solid water, but for any two phases in equilibrium. That is, any two phases in equilbrium will always have the same chemical potential.

## The Clapeyron Equation

That is the almost vertical line in the diagram. Its points are not at the same P and T, but we can find out where they should be by considering the chemical potential μ as a function of T and P:

[Note: corrected; the source prints "the thermodynamic potential μ" where this reads "the chemical potential μ". As in Section 23.1.]

dμ = ((∂μ)/(∂P))_T dP + ((∂μ)/(∂T))_P dT

[Note: corrected; the source prints "((∂μ)/(∂P))_T dT + ((∂μ)/(∂T))_P dP" where this reads "((∂μ)/(∂P))_T dP + ((∂μ)/(∂T))_P dT". dP and dT are swapped.]

Because μ = ((∂G)/(∂n))_(T, P) = Ḡ, it is not hard to identify the partial derivatives:

((∂μ)/(∂P)) = ((∂Ḡ)/(∂P)) = V̄

((∂μ)/(∂T)) = ((∂Ḡ)/(∂T)) = −S̄

This is true for both water and ice, or any two phases in equilibrium. As the Δμ = 0, we can equate the dμ expressions for both water and ice:

((∂μ_ice)/(∂P))_T dP + ((∂μ_ice)/(∂T))_P dT = ((∂μ_water)/(∂P))_T dP + ((∂μ_water)/(∂T))_P dT

[Note: corrected; the source prints "((∂μ_ice)/(∂P))_T dT + ((∂μ_ice)/(∂T))_P dP = ((∂μ_water)/(∂P))_T dT + ((∂μ_water)/(∂T))_P dP" where this reads "((∂μ_ice)/(∂P))_T dP + ((∂μ_ice)/(∂T))_P dT = ((∂μ_water)/(∂P))_T dP + ((∂μ_water)/(∂T))_P dT". As above.]

Rearranging and identifying the partials gives:

V̄_ice dP − S̄_ice dT = V̄_water dP − S̄_water dT

Solving for dP/dT we get:

dP/dT = (ΔS̄)/(ΔV̄)

As ΔḠ = ΔH̄ − TΔS̄ = 0, we have:

ΔS̄ = (ΔH̄)/(Tm)

So:

dP/dT = (ΔH̄)/(TΔV̄)

This expression should be valid for all points along a phase boundary, such as the melt line. In fact, it tells use that the phase boundary is defined by ΔH̄/TΔV̄. For water and ice, we immediately see why the melt line runs a little to the left: exceptionally ΔV̄ is negative for ice, because water is actually a little denser that ice.

The above expression(s) are named after Clapeyron. The values of ΔH̄ and ΔV̄ do not change much with pressure and can often be considered constants for the melting line. When gases are involved that is not really true.
