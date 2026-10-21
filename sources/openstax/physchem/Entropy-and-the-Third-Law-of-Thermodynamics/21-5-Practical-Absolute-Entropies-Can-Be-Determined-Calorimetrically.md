---
title: "21.5: Practical Absolute Entropies Can Be Determined Calorimetrically"
book: "Physical Chemistry (LibreTexts)"
chapter: "21: Entropy and the Third Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/21%3A_Entropy_and_the_Third_Law_of_Thermodynamics/21.05%3A_Practical_Absolute_Entropies_Can_Be_Determined_Calorimetrically"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Practical absolute entropies can also be determined experimentally using calorimetry, based on the Third Law of Thermodynamics. The Third Law states that a perfect crystalline substance has zero entropy at absolute zero (0 K). From this reference point, the entropy at any higher temperature can be obtained by measuring the heat capacity of the substance as it is warmed from 0 K up to the temperature of interest (often 298 K for standard entropies).

From section 21.1, we learned that the entropy at constant pressure changes with temperature by:

ΔS = ∫_T1^T2 ((CP(T))/T)dT

where Cp is the molar heat capacity at constant pressure.

Equation (1) accounts for the continuous increase in entropy as the substance absorbs heat with rising temperature but does not address the increase in entropy if the substances undergoes a phase transition. From section 21.3, we learned that the entropy of a phase transition (e.g., melting or vaporization) is:

ΔS_trs = (ΔH_trs)/(T_trs)

Note that third law of thermodynamics can be used to set the entropy at absolute zero (T1 = 0K) to zero in the integral in Equation (1) and the expression in Equation (2) applies to all possible phase transitions. These aspects combined with Equations (1) and (2) results in an expression for the absolute entropy of a substance at temperature T:

S(T) = ∫0^T ((Cp(T))/T)dT + Σ (ΔH_trs)/(T_trs)

The summation term adds contributions from multiple possible phase transitions, where entropy changes abruptly due to latent heats (ΔH) at specific transition temperatures.

The values of Cp, ΔH_trs, and T can be experimentally determined using calorimetry. We can calculate the practical absolute entropy of a substance for any temperature.

### Example 21.5.1

What is the absolute entropy of CO2 gas at 300 K?

**Solution**

The entropy of CO2 gas at 300 K can be calculated by:

S(T) = ∫_0K^(T_sub)((CP(T))/T)dT + (ΔH_sub)/(T_sub) + ∫_(T_sub)^(300 K)((CP^g(T))/T)dT

where the temperature of sublimation (T_sub) is 194.7 K.

Figure 21.5.1: The molar entropy of CO2 from 0 K to 300 K.
Graph of the molar entropy of CO2 against temperature from 0 to 300 K, with a jump at the sublimation point, 194.7 K.

[Note: corrected; the source prints "Graph showing entropy (J/(mol·K)) vs. temperature (°C), with a distinct increase after 200°C." where this reads "Graph of the molar entropy of CO2 against temperature from 0 to 300 K, with a jump at the sublimation point, 194.7 K.". The caption's scale is 0 to 300 K. The image's alt text, machine-written, misreads the image; this describes it.]
