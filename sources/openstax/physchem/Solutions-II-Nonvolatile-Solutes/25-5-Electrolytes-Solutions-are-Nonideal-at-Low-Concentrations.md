---
title: "25.5: Electrolytes Solutions are Nonideal at Low Concentrations"
book: "Physical Chemistry (LibreTexts)"
chapter: "25: Solutions II - Nonvolatile Solutes"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/25%3A_Solutions_II_-_Nonvolatile_Solutes/25.05%3A_Electrolytes_Solutions_are_Nonideal_at_Low_Concentrations"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

A solution with a strong electrolyte, such as NaCl in water, is perhaps one of the most obvious systems to consider but, unfortunately, is also one of the more difficult ones. The reason is that the electrolyte produces two charged solutes, Na^+ and Cl^− (both in hydrated form), in solution. We need to consider the dissociation process and stoichiometry as we are bringing more than one solute species into solution. We also need to consider electrostatic interactions between solutes. The charges introduce a strong interaction that falls off with r^-1, as opposed to ~r^-6 if only neutral species are present. This causes a very serious divergence from ideality even at very low concentrations. Consider a salt going into solution:

[Note: corrected; the source prints "Na^+ and Cl^+" where this reads "Na^+ and Cl^−". Chloride is an anion.]

C_(ν+) A_(ν−) → ν_(+)C^z+ + ν_(−)A^z−

where ν_(+) and ν_(−) are the stoichiometric coefficients and z_(+) and z_(−) are the formal charges of the cation and anion, respectively. As we shall see, the stoichiometric coefficients involved in the dissociation process are important for a proper description of the thermodynamics of strong electrolytes. Charge neutrality demands:

ν_(+)z_(+) + ν_(−)z_(−) = 0

## Thermodynamic potentials versus the dissociation

For the salt, we can write:

μ2 = μ2^o + RT ln a2

However, we need to take into account the dissociation of the salt. To do so, we write:

μ2 = ν_(+)μ_(+) + ν_(−)μ_(−)

This implies:

μ2^o = ν_(+)μ_(+)^o + ν_(−)μ_(−)^o

where

μ_(+) = μ_(+)^o + RT ln a_(+)

[Note: corrected; the source prints "μ_(+) = μ_(−)^o" where this reads "μ_(+) = μ_(+)^o". The cation's standard chemical potential, as the derivation below uses it.]

μ_(−) = μ_(−)^o + RT ln a_(−)

Usually Henry's law is taken as standard state for both type of ions. However, we cannot measure the activities of the ions separately as it is impossible to add one without adding the other. Nevertheless, we can derive a useful formalism that takes into account the dissociation process. If we substitute the last two equations in the ones above we get:

ν_(+)ln a_(+) + ν_(−)ln a_(−) = ln a2

Taking the exponent of either side of Equation (Eq8), we get:

a2 = a_(+)^(ν+)a_(−)^(ν−)

Notice that the stoichiometric coefficients (Equation (Eq1)) are exponents in Equation (Eq9). We now introduce the sum of the stoichiometric coefficients:

ν_(+) + ν_(−) = ν

and define the mean ionic activity a_± as:

a_±^ν ≡ a2 = a_(+)^(ν+)a_(−)^(ν−)

### Note

The mean ionic activity a_± and the activity of the salt are closely related but the relationship involves exponents due to stoichiometric coefficients involved in the dissociation process. For example:

- For Na1Cl1: ν= 1+1 = 2: a_± ^2 = a_NaCl
- For Al2(SO4)3: ν= 2+3 = 5: a_± ^5 = aAl2(SO4)3

## Activity coefficients

All this remains a formality unless we find a way to relate it back to the concentration of the salt. Usually molality is used as a convenient concentration measure rather than molarity because we are dealing with pretty strong deviations from ideal behavior and that implies that volume may not be an additive quantity. Molality does not involve volume in contrast to molarity. Working with molalities, we can define activity coefficients for both ions, even though we have no hope to determine them separately:

a_(+) = γ_(+)m_(+)

a_(−) = γ_(−)m_(−)

Stoichiometry dictates the molalities of the individual ions must be related to the molality of the salt m by:

m_(−) = ν_(−)m

m_(+) = ν_(+)m

### Note

We cannot measure the activities of the ions separately because it is impossible to add one without adding the other

Analogous to the mean ionic activity, we can define a mean ionic molality as:

m_±^ν ≡ m_(+)^(ν+)m_(−)^(ν−)

We can do the same for the mean ionic activity coefficient:

γ_±^ν = γ_(+)^(ν+)γ_(−)^(ν−)

Using this definitions we can rewrite:

a2 = a_±^ν = a_(+)^(ν+)a_(−)^(ν−)

as:

a2 = a_±^ν = γ_±^ν m_±^ν

### Note

Note that when preparing a salt solution of molality m, we should substitute:

m_(−) = ν_(−)m

m_(+) = ν_(+)m

into:

m_±^ν ≡ m_(+)^(ν+)m_(−)^(ν−)

### Example 25.5.1: Aluminum Sulfate

For Al2(SO4)3 we get:

- ν= 2+3 = 5
- a_± ^5 = aAl2(SO4)3
- m_(−)=3m
- m_(+)=2m

[Note: Here a's subscript is the formula Al2(SO4)3 (a_Al2(SO4)3, as a_NaCl above), here and below.]

So:

m_± ^ν =m_(+)^{ν_(+)}m_(−)^{ν_(−)}=(2m)^2(3m)^3=108m^5

aAl2(SO4)3= a_± ^5 =108m^5γ_±^5

As you can see the stoichiometry enter both into the exponents and into the calculation of the molality. Notice that the activity of the salt now goes as the fifth power of its overall molality (on top of the dependency of γ_± of exp(√m) as shown below).

## Measuring mean ionic activity coefficients

In contrast to the individual coefficients, the mean ionic activity coefficient γ_± is a quantity that can be determined. In fact we can use the same Gibbs-Duhem trick we did for the sucrose problem to do so. We simply measure the water vapor pressure above the salt solution and use:

ln γ_± = φ − 1 + ∫_(m'=0)^m ([φ − 1]/m') dm'

[Note: corrected; the source prints "∫_(m'=0)^m [φ − 1]m' dm'" where this reads "∫_(m'=0)^m ([φ − 1]/m') dm'". The Gibbs–Duhem integral divides by m'.]

The fact that the salt itself has a negligible vapor pressure does not matter. Particularly for ions with high charges, the deviations from ideality are very strong even at tiny concentrations. Admittedly doing these vapor pressure measurements in pretty tedious, there are some other procedures involving electrochemical potentials. However, they too are tedious.
