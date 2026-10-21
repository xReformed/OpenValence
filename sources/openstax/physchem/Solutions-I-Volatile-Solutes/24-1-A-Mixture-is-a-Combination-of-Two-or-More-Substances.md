---
title: "24.1: A Mixture is a Combination of Two or More Substances"
book: "Physical Chemistry (LibreTexts)"
chapter: "24: Solutions I - Volatile Solutes"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/24%3A_Solutions_I_-_Volatile_Solutes/24.01%3A_A_Mixture_is_a_Combination_of_Two_or_More_Substances"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

So far, we have only discussed systems that are comprised of one component. Because a lot of chemistry occurs in mixtures or produces a mixture, chemists need to consider the thermodynamics of mixtures. A mixture can consist of many different components, however, for the sake of simplicity, we will restrict ourselves for now to two-component mixtures. Two-component mixtures can consist of two gases, two liquids, two solids, or even a liquid and a gas.

## Partial Quantities and Scaling

Let's consider a two-component system where the volume and number of moles are changing. For example, we could have a system of a certain size of 1 and reduce its size stepwise in successive steps by taking half of it and throwing the other half away. The number of moles of each component, n1 and n2, will change as the volume of the system, V, changes:

dn1 = n1dV

dn2 = n2dV

The extensive Gibbs free energy will be affected the same way:

dG = GdV

At constant T and P we can write:

dG = ~~−SdT~~ + ~~VdP~~ + μ1 dn1 + μ2 dn2

So:

dG = μ1 dn1 + μ2 dn2

GdV = μ1 n1dV + μ2 n2dV

If we integrate this from the original size, 1, down to 0 (or 0 to 1, it does not matter). We get:

∫0^1 GdV = ∫0^1 μ1 n1dV + ∫0^1 μ2 n2dV

G∫0^1 dV = μ1 n1∫0^1 dV + μ2 n2∫0^1 dV

G = μ1 n1 + μ2 n2

By the same argument we have:

V = V̄1 n1 + V̄2 n2

where V̄i is the partial molar volume for component i. These partial molar volumes are generally a function of composition (and P, T) and have been tabulated for a number of liquid systems. They allow us to calculate the real volume of a binary mixture. Volumes are generally speaking not strictly additive. This fact is typically ignored in volumetric analysis and the use of molarities. Fortunately the deviations are often negligible in dilute solutions.

For phase diagrams, molarity (moles per liter) is not a very suitable quantity to use for concentration due to its volume dependence. Usually we work with mole fractions or molalities (moles per kilogram), where there are no volume dependencies.

## Gaseous Mixtures

Gases can always mix in any ratio and mixtures typically act close to ideal unless heavily compressed or brought to low temperatures. The only exception is if the gases react (e.g, HCl and NH3). Gas molecules experience little interaction with each other and, therefore, it does not matter much whether the molecules are different or the same. The total pressure can be computed by adding the partial pressures of the two components (Dalton's Law of Partial Pressures):

P_total = P1 + P2

## Liquid Mixtures

There are binary liquid systems that are fully miscible and are said to act as ideal solutions. Liquid molecules typically experience strong interactions with their neighbors. For the solution to be ideal, the interactions must remain equally strong even when the neighboring substance is different. This means they must be chemically similar. For this reason, liquid binaries are often not ideal. The next nearest thing are regular solutions. Even these systems can display phase segregation and limited mutual solubilities at low temperatures. Many liquid-liquid binaries diverge from ideality even more than the regular solutions and many of them are hardly miscible at all.

Table 24.1.1: Solutions

| Solution/mixture | Interactions | Miscibility |
| --- | --- | --- |
| Ideal gas | none | complete |
| Ideal liquid | strong but similar | complete |
| Regular liquid | strong, modestly dissimilar | not always complete |
| Real liquid | often strongly dissimilar | partial or none |

## Solid Mixtures

Solid binaries tend to be even less miscible than liquid binaries to the point that immiscibility is the rule and miscibility is the exception. Even totally miscible systems like electrum (the alloys of silver and gold) are far from ideal.

Figure 24.1.1: Electrum coin of the Byzantine Emperor Alexius I Comnenus. (CC-BY-SA-3.0; Classical Numismatic Group, Inc. http://www.cngcoins.com)
Two ancient coins side by side, one featuring a central figure with a crown, the other depicting two figures with items.

Another point of practical (kinetic rather than thermodynamic) importance is that even if two compounds are able to form a homogeneous solid solution, it usually takes heating for prolonged periods to get them to mix because solid diffusion is typically very slow. Nevertheless, solid solubility is an important issue for many systems, particularly for metal alloys. Two molecular solid substances that differ vastly in shape, size, polarity and or hydrogen bonding (e.g. organic compounds) typically have negligible mutual solid solubility. The latter fact is frequently exploited in organic chemistry to purify compounds through recrystallization.

### Note

Solid solutions are relatively infrequent and never ideal.

## Ideal liquid/Ideal Gas Phase Diagrams

Let's mix two liquids together. Liquids typically have different boiling points, with one being more volatile than the other. The vapor pressure of a component scales simply with the equilibrium vapor pressure of the pure component. In the gas phase, Dalton's law is applicable:

yi = (Pi)/(P_total)

This is a consequence of the fact that ideal gases do not interact. The latter implies that the total pressure is simply the sum of the partial ones:

P_total = Σi^N Pi

If the liquid solution is ideal, then the vapor pressure of both components follow Raoult's law, which states that the equilibrium vapor pressure above the mixture is the equilibrium pressure of the pure component times the mole fraction:

Pi = χi P°i

- Pi is the vapor pressure of component i in the mixture
- P°i is equilibrium vapor pressure of the pure component i.
- χi is the mole fraction of i^th component in the liquid phase.

Note that values for pure components are typically indicated by adding a ° superscript.

[Note: corrected; the source prints "adding an asterisk ° superscript" where this reads "adding a ° superscript". The mark shown, and used in this section's equations (P°1, P°2), is a degree sign, not an asterisk.]

The idea behind Raoult's law is that if the interactions are similar, it is a matter of random chance which component sits at the interface at any given moment. The equilibrium vapor pressure has to do with the probability that a molecule escapes from the interface into the gas phase and is dependent on both the substances volatility and the number that cover the surface. This leads to Raoult's Law, where we must multiply the vapor pressure of the pure liquid (volatility) by the mole fraction (number on the surface).

### Note: Applicability of Raoult's Law

Raoult's law seldom holds completely, which is more applicable if the two components are almost chemically identical like two isomers, e.g., 1-propanol and 2-propanol.

## The Pressure Phase Diagram

If we assume that temperature is constant, we can plot the total pressure for both Dalton and Raoult's laws versus composition (of gas: y1 and liquid: χ1 on the same axis).

Liquid Phase:

P_total = P1 + P2

= χ1 P°1 + χ2 P°2

= χ1 P°1 + (1 − χ1)P°2

= P°2 − χ1(P°2 − P°1)

Clearly this is a straight line going from P°2 at x = 0 to P°1 at x = 1.

However the composition of the vapor in equilibrium with a liquid at a given mole fraction χ is different than that of the liquid. So y is not χ. If we take Dalton's law (Equation (Dalton)) and substitute Raoult's Law (Equation (Raoult)) in the numerator and the straight line in the denominator we get:

y1 = (χ1 P°1)/(P°2 − χ1(P°2 − P°1))

### Exercise

Suppose P°1 = 50 Torr and P°2 = 25 Torr. If χ1 = 0.6 what is the composition of the vapor?

We can rearrange Equations (liquidus) and (vaporus1) to plot the total pressure as function of y1:

P_total = (P°1P°2)/(P°1 + (P°2 − P°1)y1)

This is not a straight line.

Figure 24.1.2: an ideal-ideal phase diagram for the binary system of toluene (A) and benzene (B). The curves are calculated from Equations (liquidus) and (vaporus2).
Pressure P (bar) against mole fraction X_A, from benzene (X_A = 0) to toluene (X_A = 1): a straight liquid line falling from about 0.66 bar to 0.24 bar, with the gas curve sagging below it between the same end points.

[Note: corrected; the source prints "Figure 24.1.1: an ideal-ideal" where this reads "Figure 24.1.2: an ideal-ideal"; the source prints "Scatter plot showing data points labeled "Leading" and "Lagging" in a coordinate system with axes for "Effort" and "Total."" where this reads "Pressure P (bar) against mole fraction X_A, from benzene (X_A = 0) to toluene (X_A = 1): a straight liquid line falling from about 0.66 bar to 0.24 bar, with the gas curve sagging below it between the same end points.". Figure 24.1.1 is the electrum coin above. The image's alt text, machine-written, misreads the image; this describes it.]

As you can see when we plot both lines we get a diagram with three regions. At high pressures we just have a liquid. At low pressures we just have a gas. In between we have a phase gap or two phase region. Points inside this region represent states that the system cannot achieve homogeneously. The horizontal tie-line shows which two phases coexists. I used the same 25 and 50 Torr values for the pure equilibrium pressures as in the question above. If you try to make a system with overall composition x and impose a pressure that falls in the forbidden zone you get two phases: a gaseous one that is richer in the more volatile component and a liquid one that is poorer in the volatile component than the overall composition would indicate.

## The Temperature Phase Diagram

Note that the question: what phase do we have when? is really a function of both P and T, so that if we want to represent all our knowledge in a diagram we should make it a three dimensional picture. This is not so easy to draw and not easy to comprehend visually either. This is why we usually look at a 2D cross section of the 3D space.

The above diagram is isothermal: we vary P, keeping T constant. It is, however, more usual (and easier) to do it the other way around. We keep pressure constant (say 1 bar, that's easy) and start heating things up isobarically.

The boiling points of our mixtures can also be plotted against x (the liquid composition) and y (the gaseous one) on the same horizontal axis. Again because in general y is not equal x we get two different curves. Neither of them are straight lines in this case and we end up with a lens-shaped two phase region:

[Image: binary T-X diagram showing the lever rule]

binary T-X diagram showing the lever rule

What happens to a mixture with a given overall composition x(=x1) when it is brought to a temperature where it boils can be seen at the intersection of a vertical line (an isopleth) at x_overall and a horizontal one (an isotherm) at T_boil. If the intersection points in inside the two phase region a vapor phase and a liquid phase result that have a different composition from the overall one. The vapor phase is always richer in the more volatile component (the one with the lowest boiling point, on the left in the diagram). The liquid phase is enriched in the less volatile one.

### The Lever Rule

How much of each phase is present is represented by the arrows in the diagram. The amount of liquid is proportional to the left arrow, the amount of gas to the right one (i.e. it works crosswise). The composition of the liquid in equilibrium with the vapor is:

x2 = (n2^(liq))/(n_(1+2)^(liq))

x2 · n_(1+2)^(liq) = n2^(liq)

[Note: corrected; the source prints "x2^*n_(1+2)^(liq) = n2^(liq)" where this reads "x2 · n_(1+2)^(liq) = n2^(liq)". The source types * (set as a superscript) for multiplication, here and in the lines below: x2 times n_(1+2)^(liq), from the line above; it is not the star that marks a pure component.]

The composition of the vapor is:

y2 = (n2^(gas))/(n_(1+2)^(gas))

y2 · n_(1+2)^(gas) = n2^(gas)

[Note: corrected; the source prints "y2^*n_(1+2)^(gas) = n2^(gas)" where this reads "y2 · n_(1+2)^(gas) = n2^(gas)". As above: a product.]

The overall composition is:

x_all = (n2^(liq + gas))/(n_(1+2)^(liq + gas))

x_all · n_(1+2)^(liq + gas) = n2^(gas) + n2^(liq)

[Note: corrected; the source prints "x_all^*n_(1+2)^(liq + gas) = n2^(gas) + n2^(liq)" where this reads "x_all · n_(1+2)^(liq + gas) = n2^(gas) + n2^(liq)". As above: a product.]

x_all · n_(1+2)^(liq + gas) = y2 · n_(1+2)^(gas) + x2 · n_(1+2)^(liq)

[Note: corrected; the source prints "x_all^*n_(1+2)^(liq + gas) = y2^*n_(1+2)^(gas) + x2^*n_(1+2)^(liq)" where this reads "x_all · n_(1+2)^(liq + gas) = y2 · n_(1+2)^(gas) + x2 · n_(1+2)^(liq)". As above: products.]

x_all · n_(1+2)^(gas) + x_all · n_(1+2)^(liq) = y2 · n_(1+2)^(gas) + x2 · n_(1+2)^(liq)

[Note: corrected; the source prints "x_all^*n_(1+2)^(gas) + x_all^*n_(1+2)^(liq) = y2^*n_(1+2)^(gas) + x2^*n_(1+2)^(liq)" where this reads "x_all · n_(1+2)^(gas) + x_all · n_(1+2)^(liq) = y2 · n_(1+2)^(gas) + x2 · n_(1+2)^(liq)". As above: products.]

Thus:

(n_(1+2)^(liq))/(n_(1+2)^(gas)) = (y2 − x_all)/(x_all − x2)

### Distillation

The difference in composition between the gas and the liquid can be exploited to separate the two components, at least partially. We could trap the vapor and cool it down to form a liquid with a different composition. We could then boil it again and repeat the process. Each time the vapor will be more enriched in the volatile phase whereas the residual liquid is more enriched in the less volatile one. This process is known as distillation. In practice the process is done one a fractionation column which makes it possible to have a series of vapor-liquid equilibria at once.

A good degree of purity can be reached this way, although 100% purity would take an infinite number of distillation steps.
