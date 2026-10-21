---
title: "24.9: Gibbs Energy of Mixing of Binary Solutions in Terms of the Activity Coefficient"
book: "Physical Chemistry (LibreTexts)"
chapter: "24: Solutions I - Volatile Solutes"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/24%3A_Solutions_I_-_Volatile_Solutes/24.09%3A_Gibbs_Energy_of_Mixing_of_Binary_Solutions_in_Terms_of_the_Activity_Coefficient"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Activity and activity coefficients

In the ideal case, we have seen that the thermodynamic potential for species i can be written as:

μi^(sln) = μi^o + RT ln xi = μi^o + RT ln((Pi)/(Pi^o))

[Note: corrected; the source prints "= μ2^o + RT ln((Pi)/(P^o))" where this reads "= μi^o + RT ln((Pi)/(Pi^o))". Here ° marks the pure component, as in Section 24.1 (P°1, P°2): by Raoult's law xi = Pi/Pi°, and the index is i throughout.]

One approach to non-ideality is to simply redefine the problem and say:

μi^(sln) ≡ μi^o + RT ln ai

≡ indicates this is actually a definition. The newly defined variable ai is known as the activity. Alternatively we can define it as:

[Note: corrected; the source prints "The newly defined variable a2" where this reads "The newly defined variable ai". The activity of species i, as defined above.]

[ai] ≡ (Pi)/(Pi^o)

[Note: corrected; the source prints "[ai] ≡ (Pi)/(P^o)" where this reads "[ai] ≡ (Pi)/(Pi^o)". The pure component's vapor pressure Pi°; only with it does ai approach xi, as the next paragraph says.]

As at high enough values of the mole fraction we know that we can still apply Raoult law. So ai must approach xi in this limit, but for other concentrations this will no longer hold. Often this is expressed in terms of an activity coefficient γ:

[ai] = γi xi

For high values of xi, γi will approach unity. If we model the non-ideality with a Margules function we see that:

Pi = xi Pi^o f_Mar

[Note: corrected; the source prints "Pi = xi P^o f_Mar" where this reads "Pi = xi Pi^o f_Mar". As above: Pi°.]

[ai] = [(Pi)/Pi^0] = [(xi Pi^0 f_Mar)/Pi^0] = [xi f_Mar]

[Note: corrected; the source prints "[ai] = [(Pi)/P^0] = [(xi P^0 f_Mar)/P^0]" where this reads "[ai] = [(Pi)/Pi^0] = [(xi Pi^0 f_Mar)/Pi^0]". As above: Pi°.]

The activity coefficient and the Margules function are the same thing in this description.

### Regular solutions

A special and simplest case of a Margules function is the case where all but one Margules parameters (a) can be neglected. Such a system is called a regular solution. In this case, we can write:

a1 = x1 e^(ax2^2)

We can use Gibbs-Duhem to show that this implies:

a2 = x2 e^(ax1^2)

Gibbs free energy of regular solutions

Consider the change in Gibbs free energy when we mix two components to form a regular solution:

ΔG_mix = n1μ1^(sln) + n2μ2^(sln) − (n1μ1^* + n2μ2^*)

Dividing by the total number of moles, we get:

Δ_mix G = x1μ1^(sln) + x2μ2^(sln) − (x1μ1^* + x2μ2^*)

Using:

μi^(sln) ≡ μi^* + RT ln ai

and:

[ai] = γi xi

We get:

(Δ_mix G)/RT = x1 ln x1 + x2 ln x2 + x1 ln γ1 + x2 ln γ2

For a regular solution:

ln γ1 = ln f_Mar = ax2^2

ln γ2 = ln f_Mar = ax1^2

This gives:

(Δ_mix G)/RT = x1 ln x1 + x2 ln x2 + x1ax2^2 + x2ax1^2

= x1 ln x1 + x2 ln x2 + a[x1 + x2]x1x2

= x1 ln x1 + x2 ln x2 + ax1x2

Since:

x1 + x2 = 1

In this expression we see that we have an additional term to the entropy of mixing term we had seen before. Its coefficient a is dimensionless but represents the fact that the (strong!) interactions between the molecules are different depending on who is the neighbor. In general. a can be written as W/RT, where W represents an energy (enthalpy) that brings the difference in interaction energies into account. W does not depend strongly on temperature. We could look at W as the difference in average interaction energies:

W = 2U12 − U11 − U22

Rearranging we get:

(Δ_mix G)/W = (RT/W)[x1 ln X1 + x2 ln x2] + x1x2

The two terms will compete as a function of temperature. The mixing entropy will be more important at high temperatures, the interaction enthalpy at low temperatures. The entropy term has a minimum at x1=0.5, the enthalpy term a maximum if W is positive. So, one tends to favor mixing, the other segregation and we will get a compromise between the two. Depending on the value of RT/W (read: temperature), we can either get one or two minima. This means that at low temperatures there will be a solubility limit of 1 into 2 and vice versa. At higher temperatures the two components can mix completely. At the transition between these two regimes we will have critical or consolute point.

Notice that even though we used the vapor pressures of the gas to develop our theory, they are conspicuously absent from the final result. The same thing we said about melting points hold true here. Because we are dealing with the miscibility behavior of two condensed phases, the outcome should not depend very strongly on the total pressure of our experiment.

Although in regular solutions the consolute point is predicted to be a maximum in temperature, we can find them as minima as well in practice. The nicotine-water system even has two consolute points, an upper and a lower one. When heating up a mixture of these we first observe mixing, then segregation and then mixing again. Obviously this behavior is far more complicated than we can describe with just one Margules parameter.

#### Partial molar volumes

What we said above about volumes simply being additive in the ideal case is no longer true here.

((∂ΔG_mix)/(∂P))_T = ΔV_regular

((∂ΔH_mix + RT(n1 ln([x1]) + n2 ln([x2])))/(∂P))_T = ΔV_mix

((∂ΔH_mix)/(∂P))_T = ΔV_mix

In general the enthalpy of mixing does depend on pressure as it is related to the interactions between the molecules in solution. (W depends on the distance between them). This means that partial molar volumes now become a function of composition and volume is no longer simply additive.

## Real solutions

Notice that the curves are symmetrical around x = 0.5. This implies that it is as easy (or not) dissolving A into B as vice versa. In many cases this is not realistic. Many systems diverge more seriously from ideal behavior that the regular one. Up to a point we can model that by adding more terms to the Margules function. For example, adding a β-term undoes the symmetry (see example 24-7). However, many systems are so non-ideal that the Margules expression become unwieldy with too many parameters.

[Note: This book has no example 24-7, and Section 24.7 has no Example; the reference is to the book this page was adapted from. The text is left as printed.]

## Boiling non-ideal solutions

### Azeotropes

For ideal solutions we have seen that there is a lense shaped two-phase region between the gas and the liquid phase. For non-ideal systems the two-phase region can attain different shapes. In many cases there is either a minimum or a maximum. As such a point the phase gap closes to a point that is known as an azeotrope. It represents a composition of the liquid that boils congruently. That means that the vapor and the liquid have the same composition for a change. Azeotropes impose an important limitation unto distillation: they represent the end point of a distillation beyond which we can not purify by this method.

### Eutectics

Another point to be made is that in the diagram with the consolute point we are assuming the pressure to be constant. If we lower the pressure this would affect the boiling points strongly: the whole gas-liquid gap would come down in temperature (see animation). The mixing behavior is only weakly affected. (The reason is that one involves the volume term of the gas, the other only of the liquid(s)). At lower pressures it is possible therefore that the consolute point is above the gas-liquid gap. In other words: the mixtures will boil before they get a chance to mix. The boiling points will be lower there than for the pure compounds. There will be a composition for which the boiling point is at a minimum and where the mixture boils congruently (i.e. to a vapor with the same (overall) composition).

The mutual solubility limits increase as temperature increases, just as happens in the critical mixing case, but that due to the competition from the vapor phase this process comes to an end at the eutectic temperature. At this temperature one liquid boils always completely, the other one in part. At the eutectic composition they both boil away simultaneously.
