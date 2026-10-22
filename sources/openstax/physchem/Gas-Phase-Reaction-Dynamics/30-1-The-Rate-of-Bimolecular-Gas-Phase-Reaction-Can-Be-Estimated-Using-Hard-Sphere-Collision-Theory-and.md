---
title: "30.1: The Rate of Bimolecular Gas-Phase Reaction Can Be Estimated Using Hard-Sphere Collision Theory and an Energy-Dependent Reaction Cross Section"
book: "Physical Chemistry (LibreTexts)"
chapter: "30: Gas-Phase Reaction Dynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/30%3A_Gas-Phase_Reaction_Dynamics/30.01%3A_The_Rate_of_Bimolecular_Gas-Phase_Reaction_Can_Be_Estimated_Using_Hard-Sphere_Collision_Theory_and_an_Energy-Dependent_Reaction_Cross_Section"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## Collision Frequency using the Hard Sphere Model

For the bimolecular gas-phase reaction

Q(g) + B(g) → products

the reaction rate is

rate = −(d[Q])/dt = k[Q][B]

If it is assumed that every collision between Q and B particles results in products, the rate at which molecules collide is equal to the frequency of collisions per unit volume, Z_QB (Equation 27.6.4)

rate = Z_QB = σ_QB⟨vr⟩ρQ ρB

Also known as the collision frequency, Z_QB, has units of molecules per volume per time, molecules·m^-3·s^-1. It is possible to obtain a rough estimate of the value of the rate constant, k, from the collision frequency.

Equation (30.1.1) shows the rate on a molecular scale. Generally, Z_QB is divided by Avogadro's number, N0, to obtain the collision frequency on a molar scale

rate = −(d[Q])/dt = (Z_QB)/(N0) = ((σ_QB⟨vr⟩)/(N0))ρQ ρB

To convert the number densities to molar concentrations, we need to realize that

(ρQ)/(N0) = [Q]

then

−(d[Q])/dt = (Z_QB)/(N0) = ((σ_QB⟨vr⟩)/(N0))(N0[Q])(N0[B])

−(d[Q])/dt = (Z_QB)/(N0) = N0σ_QB⟨vr⟩[Q][B]

−(d[Q])/dt = (Z_QB)/(N0) = N0σ_QB√((8 kB T)/(πμ_QB))[Q][B]

Thus

Z_QB = N0^2σ_QB√((8 kB T)/(πμ_QB))[Q][B]

and

k = N0σ_QB√((8 kB T)/(πμ_QB))

where:

- ⟨vr⟩ is the mean relative speed of molecules, which is equal to √((8 kB T)/(πμ_QB))
- ρQ and ρB are the number densities of Q molecules and B molecules
- N_Q and NB are the numbers of Q molecules and B molecules
- σ_QB is the averaged sum of the collision cross sections of molecules Q and B, σ_QB = π((dQ + dB)/2)^2. The collision cross section represents the collision region presented by one molecule to another. σ_QB is often written as πd_QB^2.

The units of σ are m^2, the units of N0 are mole^−1, and the units of ⟨vr⟩ are m/s. Thus, the units of k are m^3/(mole·s)

As noted earlier, using this hard-sphere collision theory value for the rate constant is a rough estimate, mainly because the temperature dependence of k is improperly represented in the hard-sphere collision theory prediction. The next sections will describe an initial attempt to correct that error.

## Successful Collisions

For a successful collision to occur, the reactant molecules must collide with enough kinetic energy to overcome the repulsions of the electron clouds and to break the existing bonds. To take the energy dependence of a successful collision into account, we will introduce a new reaction cross-section, σr(vr), which takes into account the speed of the reactants. Thus

k(vr) = vr σr(vr)

The rate constant can be calculated by averaging over a distribution of all speeds, f(vr)

k = ∫0^∞ k(vr)f(vr)dvr = ∫0^∞ vr f(vr)dvr σr(vr)

From the end of Section 27.7, we know that vr f(vr)dvr is

[Note: corrected; the source prints "From equation 27.7.4," where this reads "From the end of Section 27.7,". Section 27.7 numbers no Equation 27.7.4; vr f(vr)dvr is its last, unnumbered equation.]

vr f(vr)dvr = (μ/(kB T))^(3/2)(2/π)^(1/2)vr^3 e^(−μvr^2/2kB T)dvr

Equation (30.1.3) presents the rate constant as a function of speed. If we want to compare this version of k with the common, Arrhenius form of k, the dependent variable must be changed from relative speed to relative kinetic energy, Er. The relationship is

Er = (1/2)μvr^2 which rearranges to vr = ((2Er)/μ)^(1/2)

Thus,

dvr = (1/(2μEr))^(1/2)dEr

Substituting vr and dvr into equation (30.1.3) gives

vr f(vr)dvr = (μ/(kB T))^(3/2)(2/π)^(1/2)((2Er)/μ)^(3/2)e^(−Er/kB T)(1/(2μEr))^(1/2)dEr

Substituting this equation into equation (30.1.2) and simplifying gives

k = (2/(kB T))^(3/2)(1/(μπ))^(1/2)∫0^∞ dEr Er e^(−Er/kB T)σr(Er)

We can then assume that the energy dependent reaction cross section σr(Er) will include only those molecules which undergo effective collisions with a kinetic energy that is greater than or equal to a minimum sufficient energy, E0. Thus σr(Er) is equal to 0 if Er < E0 and is equal to σ_QB if Er ≥ E0.

Thus we integrate from E0 to ∞ using the known integral ∫xe^(ax)dx = a^−2 e^(ax)(ax − 1),

k = (2/(kB T))^(3/2)(1/(μπ))^(1/2)∫_E0^∞ dEr Er e^(−Er/kB T)σ_QB

= ((8 kB T)/(μπ))^(1/2)σ_QB e^(−E0/kB T)(1 + (E0)/(kB T))

= ⟨vr⟩σ_QB e^(−E0/kB T)(1 + (E0)/(kB T))

This model results in a value for k that takes into account the temperature and a minimum energy requirement to determine the fraction of successful collisions. However, it is not yet equivalent to the Arrhenius equation, in which k is proportional to e^(−E0/kB T) and not e^(−E0/kB T)(1 + (E0)/(kB T)).

## References

Atkins, Peter and Julio de Paula. Physical Chemistry for the Life Sciences. 2006. New York, NY: W.H. Freeman and Company.

## Contributor

- Tom Neils, Grand Rapids Community College
