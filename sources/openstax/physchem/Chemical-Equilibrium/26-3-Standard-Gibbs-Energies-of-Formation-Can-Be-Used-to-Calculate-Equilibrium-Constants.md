---
title: "26.3: Standard Gibbs Energies of Formation Can Be Used to Calculate Equilibrium Constants"
book: "Physical Chemistry (LibreTexts)"
chapter: "26: Chemical Equilibrium"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26%3A_Chemical_Equilibrium/26.03%3A_Standard_Gibbs_Energies_of_Formation_Can_Be_Used_to_Calculate_Equilibrium_Constants"
author: "Hdevoe"
license: "CC BY-NC-SA 4.0"
---

The relation K = e^{−(Δr G°)/RT} gives us a way to evaluate the thermodynamic equilibrium constant K of a reaction at a given temperature from the value of the standard molar reaction Gibbs energy Δ_rG° at that temperature. If we know the value of Δ_rG°, we can calculate the value of K.

One method is to calculate Δ_rG° from values of the standard molar Gibbs energy of formation Δ_fG° of each reactant and product. These values are the standard molar reaction Gibbs energies for the formation reactions of the substances. To relate Δ_fG° to measurable quantities, we make the substitution μi = Hi − TSi (Eq. 9.2.46) in Δ_rG = Σi νi μi to give Δ_rG = Σi νi Hi − TΣi νi Si, or

[Note: This page is taken from DeVoe's Thermodynamics and Chemistry, and its cross-references (Eq. 9.2.46, Sec. 11.3.2, Sec. 6.2, Sec. 14.3.3, Appendix H) and equation numbers (11.8.20–11.8.31) are that book's; this book has no Appendix H, and its Sections 6.2, 9.2, 11.3 and 14.3 are on other subjects. The text is left as printed.]

Δ_rG = Δ_rH − TΔ_rS (11.8.20)

When we apply this equation to a reaction with each reactant and product in its standard state, it becomes

Δ_rG° = Δ_rH° − TΔ_rS° (11.8.21)

where the standard molar reaction entropy is given by

Δ_rS° = Σi νi Si° (11.8.22)

If the reaction is the formation reaction of a substance, we have

Δ_fG° = Δ_fH° − TΣi νi Si° (11.8.23)

where the sum over i is for the reactants and product of the formation reaction. We can evaluate the standard molar Gibbs energy of formation of a substance, then, from its standard molar enthalpy of formation and the standard molar entropies of the reactants and product.

Extensive tables are available of values of Δ_fG° for substances and ions. An abbreviated version at the single temperature 298.15 K is given in Appendix H. For a reaction of interest, the tabulated values enable us to evaluate Δ_rG°, and then K, from the expression (analogous to Hess’s law)

Δ_rG° = Σi νi Δ_fG°(i) (11.8.24)

The sum over i is for the reactants and products of the reaction of interest.

Recall that the standard molar enthalpies of formation needed in Eq. 11.8.23 can be evaluated by calorimetric methods (Sec. 11.3.2). The absolute molar entropy values Si° come from heat capacity data or statistical mechanical theory by methods discussed in Sec. 6.2. Thus, it is entirely feasible to use nothing but calorimetry to evaluate an equilibrium constant, a goal sought by thermodynamicists during the first half of the 20th century. (Another method, for a reaction that can be carried out reversibly in a galvanic cell, is described in Sec. 14.3.3.)

For ions in aqueous solution, the values of S_m° and Δ_fG° found in Appendix H are based on the reference values S_m° = 0 and Δ_fG° = 0 for H^+(aq) at all temperatures, similar to the convention for Δ_fH° values discussed in Sec. 11.3.2. For a reaction with aqueous ions as reactants or products, these values correctly give Δ_rS° using Eq. 11.8.22, or Δ_rG° using Eq. 11.8.24.

Note that the values of S_m° in Appendix H for some ions, unlike the values for substances, are negative; this simply means that the standard molar entropies of these ions are less than that of H^+(aq).

The relation of Eq. 11.8.23 does not apply to an ion, because we cannot write a formation reaction for a single ion. Instead, the relation between Δ_fG°, Δ_fH° and S_m° is more complicated.

Consider first a hypothetical reaction in which hydrogen ions and one or more elements form H2 and a cation M^z_+ with charge number z_(+):

z_(+)H^+(aq) + elements → (z_(+)/2)H2(g) + M^z_+(aq)

For this reaction, using the convention that Δ_fH°, S_m°, and Δ_fG° are zero for the aqueous H^+ ion and the fact that Δ_fH° and Δ_fG° are zero for the elements, we can write the following expressions for standard molar reaction quantities:

Δ_rH° = Δ_fH°(M^z_+) (11.8.25)

Δ_rS° = (z_(+)/2)S_m°(H2) + S_m°(M^z_+) − Σ_elements Si° (11.8.26)

Δ_rG° = Δ_fG°(M^z_+) (11.8.27)

Then, from Δ_rG° = Δ_rH° − TΔ_rS°, we find

Δ_fG°(M^z_+) = Δ_fH°(M^z_+) −T[S_m°(M^z_+) − Σ_elements Si° + (z_(+)/2)S_m°(H2)] (11.8.28)

For example, the standard molar Gibbs energy of the aqueous mercury(I) ion is found from

Δ_fG°(Hg2^2+) = Δ_fH°(Hg2^2+) − TS_m°(Hg2^2+) + 2TS_m°(Hg) − (2/2)TS_m°(H2) (11.8.29)

For an anion X^z_− with negative charge number z_(−), using the hypothetical reaction

|z_(−)/2|H2(g) + elements → |z_(−)|H^+(aq) + X^z_−(aq)

we find by the same method

Δ_fG°(X^z_−) = Δ_fH°(X^z_−) − T[S_m°(X^z_−) − Σ_elements Si° − |z_(−)/2|S_m°(H2)] (11.8.30)

For example, the calculation for the nitrate ion is

Δ_fG°(NO3^−) = Δ_fH°(NO3^−) − TS_m°(NO3^−) + (1/2)TS_m°(N2) + (3/2)TS_m°(O2) + (1/2)TS_m°(H2) (11.8.31)
