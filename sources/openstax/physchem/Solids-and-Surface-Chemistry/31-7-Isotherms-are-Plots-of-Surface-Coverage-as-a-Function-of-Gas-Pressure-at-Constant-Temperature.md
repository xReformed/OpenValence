---
title: "31.7: Isotherms are Plots of Surface Coverage as a Function of Gas Pressure at Constant Temperature"
book: "Physical Chemistry (LibreTexts)"
chapter: "31: Solids and Surface Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/31%3A_Solids_and_Surface_Chemistry/31.07%3A_Isotherms_are_Plots_of_Surface_Coverage_as_a_Function_of_Gas_Pressure_at_Constant_Temperature"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## Introduction

Whenever a gas is in contact with a solid there will be an equilibrium established between the molecules in the gas phase and the corresponding adsorbed species (molecules or atoms) which are bound to the surface of the solid. As with all chemical equilibria, the position of equilibrium will depend upon a number of factors:

1. The relative stabilities of the adsorbed and gas phase species involved
2. The temperature of the system (both the gas and surface, although these are normally the same)
3. The pressure of the gas above the surface

In general, factors (2) and (3) exert opposite effects on the concentration of adsorbed species - that is to say that the surface coverage may be increased by raising the gas pressure but will be reduced if the surface temperature is raised.

The Langmuir isotherm was developed by Irving Langmuir in 1916 to describe the dependence of the surface coverage of an adsorbed gas on the pressure of the gas above the surface at a fixed temperature. There are many other types of isotherm (Temkin, Freundlich ...) which differ in one or more of the assumptions made in deriving the expression for the surface coverage; in particular, on how they treat the surface coverage dependence of the enthalpy of adsorption. Whilst the Langmuir isotherm is one of the simplest, it still provides a useful insight into the pressure dependence of the extent of surface adsorption.

Note: Surface Coverage & the Langmuir Isotherm

When considering adsorption isotherms it is conventional to adopt a definition of surface coverage (θ) which defines the maximum (saturation) surface coverage of a particular adsorbate on a given surface always to be unity, i.e. θ_max = 1. This way of defining the surface coverage differs from that usually adopted in surface science where the more common practice is to equate θ with the ratio of adsorbate species to surface substrate atoms (which leads to saturation coverages which are almost invariably less than unity).

## The Langmuir Isotherm - Derivation from Equilibrium Considerations

We may derive the Langmuir isotherm by treating the adsorption process as we would any other equilibrium process - except in this case the equilibrium is between the gas phase molecules (M), together with vacant surface sites, and the species adsorbed on the surface. Thus, for a non-dissociative (molecular) adsorption process, we consider the adsorption to be represented by the following chemical equation :

S−* + M_(g) ⇌ S − M

where :

- S−* represents a vacant surface site

### Assumption 1

In writing Equation ref{Eq1} we are making an inherent assumption that there are a fixed number of localized surface sites present on the surface. This is the first major assumption of the Langmuir isotherm.

[Note: "Equation ref{Eq1}" is a broken reference in the source; it means the adsorption equilibrium above. The text is left as printed.]

We may now define an equilibrium constant (K) in terms of the concentrations of "reactants" and "products"

K = ([S − M])/([S−*][M])

We may also note that :The [ S - M ] is proportional to the surface coverage of adsorbed molecules, i.e. proportional to θ

- [ S - * ] is proportional to the number of vacant sites, i.e. proportional to 1 − θ
- [ M ] is proportional to the pressure of gas, P

Hence, it is also possible to define another equilibrium constant, b , as given below :

b = θ/((1 − θ)P)

Rearrangement then gives the following expression for the surface coverage

θ = bP/(1 + bP)

which is the usual form of expressing the Langmuir Isotherm. As with all chemical reactions, the equilibrium constant, b, is both temperature-dependent and related to the Gibbs free energy and hence to the enthalpy change for the process.

### Assumption 2

b is only a constant (independent of θ) if the enthalpy of adsorption is independent of coverage. This is the second major assumption of the Langmuir Isotherm.

A plot of θ vs. bP shows that as the pressure increases, θ approaches 1, meaning that nearly the entire surface is coated with a monolayer of adsorbed gas (Figure 31.7.1).

Figure 31.7.1: A plot of equation (4) which shows the nonlinear relationship between the fraction of surface coverage and the gas pressure. .(CC BY-NC; Ümit Kaya via LibreTexts)
Graph of θ versus bPA, showing a curve that rises steeply from the origin and levels off near 1.0 as bPA increases.

[Note: corrected; the source prints "showing a sigmoidal curve that levels off" where this reads "showing a curve that rises steeply from the origin and levels off". The image's alt text, machine-written, misreads the image; this describes it. The Langmuir isotherm is not sigmoidal.]

Equation (4) can be rearranged to the form

1/θ = 1 + 1/bP

showing that the inverse of the fraction of occupied surface sites is a linear function of the inverse of the pressure. If we plot experimental data for the adsorption of diatomic oxygen and carbon monoxide onto a silica surface, we can see that the Langmuir adsorption isotherm describes the data well (figure 31.7.2).

Figure 31.7.2: A plot showing the relationship of the inverse of the fraction of occupied surface sites to the inverse of the gas pressure for O2 and CO molecules adsorbed onto a silica surface. (CC BY-NC; Ümit Kaya via LibreTexts)
Graph showing the relationship between 1/P and 1/θ for O2 (0°C) and CO at 0°C and 100°C, with distinct colored lines.

[Note: In the figure the CO line for 100 °C lies below the 0 °C one; adsorption is exothermic, so b falls as T rises and the 100 °C line should be the steeper. The labels look swapped. The text is left as printed.]

## The Langmuir Isotherm from a Kinetics Consideration

The equilibrium that may exist between gas adsorbed on a surface and molecules in the gas phase is a dynamic state, i.e. the equilibrium represents a state in which the rate of adsorption of molecules onto the surface is exactly counterbalanced by the rate of desorption of molecules back into the gas phase. It should therefore be possible to derive an isotherm for the adsorption process simply by considering and equating the rates for these two processes.

Expressions for the rate of adsorption and rate of desorption have been derived in Sections 2.3 & 2.6 respectively: specifically ,

[Note: Sections 2.3 and 2.6 are in the course this text comes from; this book does not derive these rates. The text is left as printed.]

R_ads = ((f(θ)P)/(√(2πmkT))) exp(−Ea^(ads)/RT)

R_des = v f'(θ) exp(−Ea^(des)/RT)

[Note: corrected; the source prints "exp(−Ea^(ads)/RT)" where this reads "exp(−Ea^(des)/RT)". Desorption has its own barrier, Ea^(des), which the result below for b needs.]

Equating these two rates yields an equation of the form :

(P f(θ))/(f'(θ)) = C(T)

where θ is the fraction of sites occupied at equilibrium and the terms f(θ) and f'(θ) contain the pre-exponential surface coverage dependence of the rates of adsorption and desorption respectively and all other factors have been taken over to the right hand side to give a temperature-dependent "constant" characteristic of this particular adsorption process, C(T). We now need to make certain simplifying assumptions. The first is one of the key assumptions of the Langmuir isotherm.

Assumption 1

Adsorption takes place only at specific localized sites on the surface and the saturation coverage corresponds to complete occupancy of these sites.

Let us initially further restrict our consideration to a simple case of reversible molecular adsorption, i.e.

S−* + M(g) ⇌ S-M

where

- S−* represents a vacant surface site and
- S-M the adsorption complex.

Under these circumstances it is reasonable to assume coverage dependencies for rates of the two processes of the form :

- Adsorption (forward reaction in Equation (33Eq2)): f(θ) = c(1 − θ) i.e. proportional to the fraction of sites that are unoccupied.
- Desorption (reverse reaction in Equation (33Eq2)): f'(θ) = c'θ i.e. proportional to the fraction of sites which are occupied by adsorbed molecules.

Note

These coverage dependencies in Equations (Eqabsorb) and (Eqdesorb) are exactly what would be predicted by noting that the forward and reverse processes are elementary reaction steps, in which case it follows from standard chemical kinetic theory that

- The forward adsorption process will exhibit kinetics having a first order dependence on the concentration of vacant surface sites and first order dependence on the concentration of gas particles (proportional to pressure).
- The reverse desorption process will exhibit kinetics having a first order dependence on the concentration of adsorbed molecules.

Substitution of Equations (Eqabsorb) and (Eqdesorb) into Equation (33Eq1) yields:

(P(1 − θ))/θ = B(T)

where

B(T) = ((c')/c)C(T).

After rearrangement this gives the Langmuir Isotherm expression for the surface coverage

θ = bP/(1 + bP)

where b = 1/B(T) is a function of temperature and contains an exponential term of the form

b ∝ exp[(Ea^(des) − Ea^(ads))/RT] = exp[−ΔH_ads/RT]

with

ΔH_ads = Ea^(ads) − Ea^(des).

[Note: corrected; the source prints "ΔH_ads = Ea^(des) − Ea^(ads)." where this reads "ΔH_ads = Ea^(ads) − Ea^(des).". From the line above, exp[(Ea^(des) − Ea^(ads))/RT] = exp[−ΔH_ads/RT].]

Assumption 2

b can be regarded as a constant with respect to coverage only if the enthalpy of adsorption is itself independent of coverage; this is the second major assumption of the Langmuir Isotherm.

## Contributors and Attributions

- Roger Nix (Queen Mary, University of London)
