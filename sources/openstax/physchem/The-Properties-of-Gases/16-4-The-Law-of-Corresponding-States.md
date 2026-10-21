---
title: "16.4: The Law of Corresponding States"
book: "Physical Chemistry (LibreTexts)"
chapter: "16: The Properties of Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/16%3A_The_Properties_of_Gases/16.04%3A_The_Law_of_Corresponding_States"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Johannes Diderik van der Waals modified the ideal gas law to better describe the behavior of real gases by introducing corrections to account for the finite size of molecules and the intermolecular forces between them, leading to the well-known van der Waals equation.

(P + a/(Vm^2))(Vm − b) = RT

This expression for the van der Waal gas involves two phenomenological constants, a and b. Van der Waals postulated that all real gases at corresponding states should behave similarly and he focused on applying Equation (1) at the critical point of difference gases—the unique temperature, pressure, and volume at which the distinction between liquid and gas disappears.

The corresponding state that van der Waals chose to use is called the reduced state, which is based on the ratio of the conditions of a substance to its own critical conditions. We can define reduced quantities:

[Note: corrected; the source prints "based on the deviation of the conditions of a substance from its own critical conditions" where this reads "based on the ratio of the conditions of a substance to its own critical conditions". Reduced variables are ratios to the critical values, as defined below.]

Pr = P/(Pc)

Vr = V/(Vc)

Tr = T/(Tc)

By substitution into Equation (1), the Van der Waal equations can be expressed differently

(Pr + 3/(V̄r^2))(V̄r − 1/3) = (8/3)Tr

Equation (vdw) means the critical parameters for a gas can be expressed in terms of a and b parameters:

Vc = 3b

Pc = a/(27b^2)

Tc = (8a)/(27bR)

Hence, when gases are expressed in terms of their reduced variables, the van der Waals equation takes on a universal form (Equation (vdw)) that applies to all gases, regardless of their chemical identity. This discovery led van der Waals to formulate the Law of Corresponding States, which states that different gases at the same reduced temperature and reduced pressure will exhibit similar thermodynamic behavior. This principle provided a unifying framework for understanding real-gas behavior and laid the foundation for generalized equations of state and compressibility charts used in modern thermodynamics.

Although the actual pressures and volumes may differ, two gases are said to be in corresponding states if their reduced pressure, volume, and temperature are the same. What it says is that the behavior of all gases (and liquids!!) is pretty much the same, except for a scaling factor that is related to the critical point of the substance. The compressibility value (Z) of 3/8 at the critical point for the van der Waals equation is actually not in such good agreement with measurement. This is why the more complicated Redlich-Kwong and Peng-Robinson expressions are better, although the idea is the same. Hence, all one needs to know to describe any fluid's behavior is its critical point. For example, argon behaves much the same at 300 K as ethane does at 600 K because these temperatures correspond to twice their respective critical temperatures (150.72 K and 305.4 K, respectively) so Tr = 2.0.

[Note: corrected; the source prints "Peng-Robertson" where this reads "Peng-Robinson". The Peng-Robinson equation (Peng and Robinson, 1976).]

## Compressibility

The Compressibility provides a useful way to compare the behavior of real gases with that predicted by the ideal gas law, and it connects directly to the critical ratios first introduced by van der Waals.

Z = PV/RT

Over the past 150 years, researchers have collected extensive experimental data on a wide variety of fluids, allowing the Law of Corresponding States to be tested and validated. When the pressure, temperature, and volume of different fluids are expressed in terms of their reduced values, their measurements can be superimposed on the same compressibility chart (Figure 16.4.1). This overlap shows that most “normal” fluids, despite having different molecular structures, follow a common pattern of behavior when scaled by their critical properties.

We can rewrite the universal expression for compressibility Z using reduced variables and plot measured values of Z versus the reduced pressure, Pr (Figure 16.4.1). As you can see, very different gases/liquids like nitrogen and water can be made to coincide if their properties are plotted relative to there critical points rather than in absolute terms. The compressibility factor Z can also be cast into the form of corresponding states showing that Z also can be expressed as a universal function of Vr and Tr or any other two reduced quantities:

Z = (V̄r)/(V̄r − 1/3) − 9/(8V̄r Tr)

Figure 16.4.1: Example of a generalized compressibility factor graph (Public domain; Milton Beychok)
Graph showing lines of varying curves representing compressibility as a function of reduced pressure, with labeled temperature lines.

These charts show that most “normal” fluids, such as simple hydrocarbons, noble gases, and diatomic molecules, conform closely to the predictions of the Law of Corresponding States. Deviations occur mainly in more complex or strongly associating fluids—such as water, ammonia, or hydrogen fluoride—where strong polarity or hydrogen bonding introduces additional interactions not accounted for by van der Waals’ simple model. Nevertheless, the overall success of the law demonstrates its power: by scaling thermodynamic variables to the critical constants, we can describe the behavior of a wide variety of substances with a single framework. This insight not only validated van der Waals’ pioneering theory but also provided a foundation for modern equations of state and practical tools in chemical engineering and physical chemistry.

Van der Waals did not stop here. He went on to describe the root cause of condensation of gases into liquids at lower temperatures: the attractive interactions between the molecules.
