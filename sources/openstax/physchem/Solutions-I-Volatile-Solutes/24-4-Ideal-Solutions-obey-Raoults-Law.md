---
title: "24.4: Ideal Solutions obey Raoult's Law"
book: "Physical Chemistry (LibreTexts)"
chapter: "24: Solutions I - Volatile Solutes"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/24%3A_Solutions_I_-_Volatile_Solutes/24.04%3A_Ideal_Solutions_obey_Raoult's_Law"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Liquids tend to be volatile, and as such will enter the vapor phase when the temperature is increased to a high enough value, provided they do not decompose first. A volatile liquid is one that has an appreciable vapor pressure at the specified temperature. An ideal mixture containing at least one volatile liquid can be described using Raoult’s Law:

Pj = xj Pj^*

Raoult’s law can be used to predict the total vapor pressure above a mixture of two volatile liquids. As it turns out, the composition of the vapor will be different than that of the two liquids, with the more volatile compound having a larger mole fraction in the vapor phase than in the liquid phase. This is summarized in the following diagram for an ideal mixture of two compounds, water and ethanol at 75 °C. At this temperature, water has a pure vapor pressure of 289 Torr and ethanol has a pure vapor pressure of 665 Torr. In Figure 24.4.1, the composition of the liquid phase is represented by the solid line and the composition of the vapor phase is represented by the dashed line.

[Note: corrected; the source prints "water a pure vapor pressure of 384 Torr and ethanol has a pure vapor pressure of 945 Torr" where this reads "water has a pure vapor pressure of 289 Torr and ethanol has a pure vapor pressure of 665 Torr". At 75 °C water's vapor pressure is 289 Torr (38.6 kPa) and ethanol's about 665 Torr (88.7 kPa); 384 and 945 Torr are their values near 82 °C and 84 °C. Water and ethanol are far from an ideal mixture (they form an azeotrope); the diagram shows the ideal-solution model applied to them. That is left as printed.]

Figure 24.4.1: The composition of the liquid phase (solid line) and the vapor phase (dashed lined) as a function of mole fraction according to Raoult's law. The solution is a mixture of water and ethanol. PA is the vapor pressure of pure water and PB is the vapor pressure of pure ethanol at 75 °C
Graph showing pressure (P) vs. composition (X) for liquid and vapor phases, with solid and dashed lines representing each phase.

Often, it is desirable to depict the phase diagram at a single pressure so that temperature and composition are the variables included in the graphical representation. In such a diagram, the vapor, which exists at higher temperatures) is indicated at the top of the diagram, while the liquid is at the bottom. A typical temperature vs. composition diagram is depicted in Figure 24.4.2 for an ideal mixture of two volatile liquids.

Figure 24.4.2: A typical temperature vs. composition diagram.
Graph depicting a curve with T_A on the vertical axis and T_0 on the horizontal axis, showing several marked points.

In this diagram, TA and TB represent the boiling points of pure compounds A and B. If a system having the composition indicated by χB^c has its temperature increased to that indicated by point c, The system will consist of two phases, a liquid phase, with a composition indicated by χB^d and a vapor phase indicated with a composition indicated by χB^b. The relative amounts of material in each phase can be described by the lever rule, as described previously.

Further, if the vapor with composition χB^b is condensed (the temperature is lowered to that indicated by point b') and re-vaporized, the new vapor will have the composition consistent with χB^a. This demonstrates how the more volatile liquid (the one with the lower boiling temperature, which is A in the case of the above diagram) can be purified from the mixture by collecting and re-evaporating fractions of the vapor. If the liquid was the desired product, one would collect fractions of the residual liquid to achieve the desired result. This process is known as distillation.

## The Gibbs energy of mixing is always negative

When we add nA moles of component A and nB moles of component B to form an ideal liquid solution, this is generally a spontaneous process. Let us consider the Gibbs free energy change of that process:

Δ_mix G = n1μ1^(sln) + n2μ2^(sln) − (n1μ1^* + n2μ2^*)

Using:

μi^(sln) ≡ μi^* + RT ln xi

[Note: corrected; the source prints "μi^(sln) ≡ μi^* + nRTxi ln xi" where this reads "μi^(sln) ≡ μi^* + RT ln xi". The chemical potential of an ideal-solution component; n and xi enter only when it is multiplied by ni = nxi and summed, which gives the next line.]

his expression simplifies to:

Δ_mix G = nRTxA ln xA + nRTxB ln xB

where n is the total moles. Mole fraction, xi, is always less than one, so the Gibbs energy of mixing is always negative; mixing is always spontaneous. We can generalize this to mixtures with more than two components:

Δ_mix G = nRTΣi xi ln xi

This expression looks suspiciously familiar. Apart from a factor of −T, it is just like the entropy of mixing:

Δ_mix S = −nRΣi xi ln xi

Recalling the relationship between Gibbs energy and entropy:

Δ_mix G = Δ_mix H − TΔ_mix S

This leaves no room at all for an enthalpy effect:

Δ_mix H = 0

Even though there are strong interactions between neighboring particles in liquids, there is no enthalpy change. This implies that it does not matter what the neighboring molecules are. If we represent the average interaction energy between molecule i and j by U_ij, we are assuming that U_ij is always the same. In practice, this is seldom the case. It usually does matter and then the enthalpy term is not zero. As this affects the thermodynamics of the liquid solution, it should also affect the vapor pressures that are in equilibrium with it.

## In the ideal case, volumes are additive

From the change of G in its natural variables, we know that:

((∂G)/(∂P))_T = V

This means that if we take

((∂ΔG)/(∂P))_T = ΔV_mix

In the ideal case we get:

((∂ΔG^(ideal))/(∂P))_T = ΔV_mix^(ideal)

((∂RT(n1 ln x1 + n2 ln x2))/(∂P))_T = ΔV_mix^(ideal) = 0

In the ideal case, volumes are additive and we need not worry about how the partial molar volumes change with composition.
