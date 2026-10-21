---
title: "26.4: Gibbs Energy of a Reaction vs. Extent of Reaction is a Minimum at Equilibrium"
book: "Physical Chemistry (LibreTexts)"
chapter: "26: Chemical Equilibrium"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26%3A_Chemical_Equilibrium/26.04%3A_Gibbs_Energy_of_a_Reaction_vs._Extent_of_Reaction_is_a_Minimum_at_Equilibrium"
author: "Anonymous"
license: "CC BY 4.0"
---

As discussed in Section 26.1, we defined the extent of the reaction (ξ) as a quantitative measure of how far along the reaction has evolved. For simple reactions like A ⇌ B, the extent of reaction is easy to define and is simply the number of moles of A that has been converted to B. Since dξ has the same value as dn, we can write that

[Note: corrected; the source prints "As discussed in Section 26.4" where this reads "As discussed in Section 26.1". The extent of reaction is defined in Section 26.1.]

dG = μA dnA + μB dnB

= −μA dξ + μB dξ.

The minus sign comes from the fact that when the reaction goes in the left to right direction, the amount of A is decreasing, while the amount of B is increasing. Looking at these equations, it is reasonable to suggest that:

((∂G)/(∂ξ))_PT = μB − μA

This is the slope of the free energy with respect to the extent of the reaction. This relationship will have a region where the sign is negative, one point where the value is zero and a region where the value is positive (Figure 26.4.1). If we look at a plot of G as a function of ξ, we can see that the point where is the minimum of the curve:

((∂G)/(∂ξ))_PT = 0

This is the point where μA and μB are the same. On one side of the minimum, the slope is negative and on the other side, the slope is positive. In both cases, the reaction is spontaneous (i.e, dG < 0) as long as the reaction is evolving towards the minimum, which will be called the equilibrium position. Hence, all reactions spontaneously move towards equilibrium; the immediate question is what value of ξ corresponds to the equilibrium position of a reaction?

Figure 26.4.1: Reactive Gibbs Energy and Equilibria. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)
Graph depicting Gibbs energy (G) versus extent of reaction (ξ), showing regions of ΔG < 0, ΔG = 0, and ΔG > 0.

### Terminology

- A reaction for which Δr G < 0 is called exergonic.
- A reaction for which Δr G > 0 is called endergonic.
- Δr G < 0, the forward reaction is spontaneous.
- Δr G > 0, the reverse reaction is spontaneous.
- Δr G = 0, the reaction is at equilibrium.

## Ideal Gas Equilibrium

To understand how we can find the minimum and what the Gibbs free energy of a reaction depends on, let's first start with a reaction that converts one ideal gas into another.

A ⇌ B

Let's assume the reaction enthalpy is zero and hence the only thing that determines what the ratio of product to reactant should be is the entropy term (the mixing term), which is the most favorable when the mixture is half and half.

ΔG_mix = nRT(χA ln χA + χB ln χB)

Remember that the Gibbs free energy of mixing is not a molar quantity and depends on n (unlike the reaction Gibbs free energy). Also, the Gibbs free energy of mixing is defined relative to pure A and B. The free energy of mixing in Equation (Smixing) is at a minimum when the amounts of A equal B.

Thus, if we have a reaction A ⇌ B and there is no enthalpy term (and no change in the inherent entropy of A vs. B), we would expect the system to have the minimum Gibbs free energy when the mole fraction of A and B are each 0.5.

### Think about it

If A can form B and B can form A and there is no other forces involved (no heat/enthalpy) that would favor one product over the other, probability would just state that eventually you will have statistically the same amount of both A and B present -- this is the lowest free energy state. (This, of course, will not be true if the enthalpy for the reaction is not zero or if A and B have different inherent entropies). Usually there are additional terms for the reaction.

Lets work through this for an ideal gas reaction:

Δr G = μB − μA

= μB^o + RT ln((PB)/(P^θ)) − μA^o − RT ln((PA)/(P^θ))

= μB^o − μA^o + RT ln((PB)/(PA))

What we normally do at this point is to give the first two terms a special name. Since it is the difference between the chemical potentials at standard conditions, we refer to it as the Gibbs free energy of reaction at standard conditions or the standard Gibbs free energy of reaction.

Δr G^o = μB^o − μA^o

Δr G = Δr G^o + RT ln((PB)/(PA))

There are two parts to Equation (eq30). The first term (Δr G^o) is the Gibbs free energy for converting one mole of A to B under standard conditions (1 bar of both A and B). The second term is the mixing term, the slope of the Gibbs energy of mixing, which is minimized (so the term is zero) when the amounts of A and B are equal to one another (Figure 26.4.2). The first term you look up in a reference book and is specific for a specific reaction. The second term is calculated knowing the partial pressures of A and B in the gas.

[Note: corrected; the source prints "The second term is the mixing term that is minimized when" where this reads "The second term is the mixing term, the slope of the Gibbs energy of mixing, which is minimized (so the term is zero) when". RT ln(PB/PA) rises steadily with PB/PA; it is zero, not at a minimum, when PA = PB, where the Gibbs energy of mixing has its minimum.]

Figure 26.4.2: Molecular interpretation of the minimum in the reaction Gibbs energy Gibbs energy of the system decreases as the reaction progress Gibbs energy of a system consisting of different portions of reactants and products. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)
Gibbs energy vs. extent of reaction graph showing curves for 'without mixing' and 'including mixing' with annotations.

Now the minimum absolute Gibbs free energy will occur at the bottom of the curve where the slope is zero. Thus, the lowest free energy will occur when the reaction free energy (i.e., the slope of that curve in Figure 26.4.1) is equal to zero. The chemical potentials of A and B are equal.

μA = μB

At this point, the reaction will neither go forwards or backwards and we call this equilibrium. Hence, at equilibrium:

Δr G = Δr G^o + RT ln((PB)/(PA))

= 0

and the specific ratio of PA and PB necessary to ensure Δr G = 0 is characteristic of the reaction and is called the equilibrium constant for that reaction.

K_eq = (PB)/(PA)

We can now relate thermodynamic quantities to concentrations of molecules at equilibrium. We can also see that at equilibrium:

0 = Δr G^o + RT ln K_eq

Δr G^o = −RT ln K_eq

K_eq = e^{−(Δr G^o)/RT}
