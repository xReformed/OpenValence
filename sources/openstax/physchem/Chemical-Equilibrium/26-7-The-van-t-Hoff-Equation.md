---
title: "26.7: The van 't Hoff Equation"
book: "Physical Chemistry (LibreTexts)"
chapter: "26: Chemical Equilibrium"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26%3A_Chemical_Equilibrium/26.07%3A_The_van_'t_Hoff_Equation"
author: "Mtuckerman"
license: "CC BY-NC-SA 4.0"
---

We can use Gibbs-Helmholtz to get the temperature dependence of K

((∂[ΔG^o/T])/(∂T))_P = (−ΔH^o)/T^2

At equilibrium, we can equate ΔG^o to −RT ln K so we get:

((∂[ln K])/(∂T))_P = (ΔH^o)/RT^2

We see that whether K increases or decreases with temperature is linked to whether the reaction enthalpy is positive or negative. If temperature is changed little enough that ΔH^o can be considered constant, we can translate a K value at one temperature into another by integrating the above expression, we get a similar derivation as with melting point depression:

ln((K(T2))/(K(T1))) = ((−ΔH^o)/R)(1/(T2) − 1/(T1))

If more precision is required we could correct for the temperature changes of ΔH^o by using heat capacity data.

> How K increases or decreases with temperature is linked to whether the reaction enthalpy is positive or negative.

The expression for K is a rather sensitive function of temperature given its exponential dependence on the difference of stoichiometric coefficients One way to see the sensitive temperature dependence of equilibrium constants is to recall that

K = e^(−Δr G^o/RT)

However, since under constant pressure and temperature

ΔG^o = ΔH^o − TΔS^o

Equation (18) becomes

K = e^(−ΔH^o/RT)e^(ΔS^o/R)

Taking the natural log of both sides, we obtain a linear relation between ln K and the standard enthalpies and entropies:

ln K = −(ΔH^o)/R · 1/T + (ΔS^o)/R

which is known as the van ’t Hoff equation. It shows that a plot of ln K vs. 1/T should be a line with slope −Δr H^o/R and intercept Δr S^o/R.

[Image: Endothermic reaction: ln Keq against 1/T (1/K), points on a straight line falling to the right, labelled slope = −ΔH/R and intercept = ΔS/R.]

[Note: corrected; the source prints "Graph showing an inverse relationship, with Y-axis labeled "Porosity" and X-axis labeled "1/T (K⁻¹)". Points are plotted along a downward slope." where this reads "Endothermic reaction: ln Keq against 1/T (1/K), points on a straight line falling to the right, labelled slope = −ΔH/R and intercept = ΔS/R.". The image's alt text, machine-written, misreads the image; this describes it.]

[Image: Exothermic reaction: ln Keq against 1/T (1/K), points on a straight line rising to the right, labelled slope = −ΔH/R and intercept = ΔS/R.]

[Note: corrected; the source prints "Graph showing the relationship of an exothermic reaction, with temperature (K) on the x-axis and enthalpy on the y-axis." where this reads "Exothermic reaction: ln Keq against 1/T (1/K), points on a straight line rising to the right, labelled slope = −ΔH/R and intercept = ΔS/R.". The image's alt text, machine-written, misreads the image; this describes it.]

Figure 26.7.1: Endothermic Reaction (left) and Exothermic Reaction van 't Hoff Plots (right). Figures used with permission of Wikipedia

Hence, these quantities can be determined from the ln K vs. 1/T data without doing calorimetry. Of course, the main assumption here is that Δr H^o and Δr S^o are only very weakly dependent on T, which is usually valid.
