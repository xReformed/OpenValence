---
title: "27.7: Rates of Gas-Phase Chemical Reactions"
book: "Physical Chemistry (LibreTexts)"
chapter: "27: The Kinetic Theory of Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/27%3A_The_Kinetic_Theory_of_Gases/27.07%3A_Rates_of_Gas-Phase_Chemical_Reactions"
author: "Mtuckerman"
license: "CC BY-NC-SA 4.0"
---

Now that we have a description of how often gas molecules will collide with one another, we can make an initial attempt to describe how the collision of gas molecules can lead to reactions between the molecules. This topic will be covered in much more detail in Chapter 30.

## Collision Frequency, Collision Energy, and Effective Collisions

In example 27.6.1, we calculated that the number of collision between H2 molecules at one bar and 25ºC is around 10^8 (moles)/(dm^3·s). Consider the elementary reaction

[Note: corrected; the source prints "around 10^8 (moles)/(dm·s)" where this reads "around 10^8 (moles)/(dm^3·s)". A rate per unit volume, mol dm^−3 s^−1: 1.7 × 10^29 cm^−3 s^−1 × 10^3 cm^3 dm^−3 / N_A ≈ 2.8 × 10^8.]

A + B ⟶ C

If all of the collisions between A and B resulted in a reaction, then the rate of the reaction would be about 10^8 (moles)/(dm^3·s). We know from experiment that most chemical reactions do not occur this quickly. It must be true, then, that not all collisions result in a reaction. It is intuitive that molecules traveling at faster speeds should be more likely to react because they have sufficient energy to overcome electronic repulsions, and to break existing bonds.

[Note: corrected; the source prints "about 10^8 (moles)/(dm·s)" where this reads "about 10^8 (moles)/(dm^3·s)". As above: mol dm^−3 s^−1.]

One way to approach this estimate is to use a modified version of the equation for the collision frequency with a wall. The reason for starting with this equation is that it is reasonable to assume that the faster a molecule is traveling, the more likely it is to hit the wall. If this is so, then the faster a molecule is traveling, the more likely it is to collide with other molecules so as to react.

Recall equation 27.4.1

[Note: corrected; the source prints "Recall equation 26.4.1" where this reads "Recall equation 27.4.1". The equation for the collision frequency with a wall is 27.4.1; Section 26.4 is on Gibbs energy.]

zw = 1/4 · (N/V)⟨v⟩

which can be rewritten for the molecular level by substituting ρ for N/V

zw = (1/4)ρ⟨v⟩

This equation was obtained by carrying out the integration

zw = (ρ/(4π))∫0^∞ vF(v)dv∫0^(π/2) cos θ sin θdθ∫0^(2π) dφ

which takes into account the fact that molecules will only hit the wall from one direction.

Recall from equation 27.3.1, the Maxwell-Boltzmann distribution of speeds

f(v) = 4πv^2(m/(2πkB T))^(3/2) exp((−mv^2)/(2 kB T))

that f(v) has a factor of v^2. Thus, equation (27.7.1) has a factor of v^3, meaning that the molecules colliding with the wall are traveling faster than the molecule in the bulk of the sample. The assumption is that the faster molecules are more likely to hit the wall in a given amount of time.

We must modify equation (27.7.1) to take into account the collision of molecules with each other, rather than with the wall. This is done by replacing the mass of a single molecule m with the reduced mass of the two colliding molecules μ. The resulting speed is the relative average speed vr. The result of these assumptions is that the collision frequency of molecules A and B per unit volume in which the molecules collide with a relative speed between vr and vr + dvr is

dZ_AB = Avr^3 e^(−μvr^2/2kB T)dvr

where A is a proportionality constant.

If we require the integral of this equation over all relative speeds to be equal to Z_AB, then

Z_AB = σ_AB ρA ρB((8 kB T)/(πμ))^(1/2) = A∫0^∞ vr^3 e^(−μvr^2/2kB T)dvr

Z_AB = σ_AB ρA ρB((8 kB T)/(πμ))^(1/2) = 2A((kB T)/μ)^2

Rearranging to solve for A gives

A = σ_AB ρA ρB(μ/(kB T))^(3/2)(2/π)^(1/2)

Substituting equation (27.7.3) into equation (27.7.2) gives

dZ_AB = σ_AB ρA ρB(μ/(kB T))^(3/2)(2/π)^(1/2)vr^3 e^(−μvr^2/2kB T)dvr

With this equation, we can describe the collision frequency per unit volume between A molecules and B molecules with relative speeds in the range of vr and vr + dvr. In this equation, the portion

(μ/(kB T))^(3/2)(2/π)^(1/2)vr^3 e^(−μvr^2/2kB T)dvr

which is vr f(vr)dvr, where f(vr)dvr is the probability that the relative speed of the molecules will fall between vr and vr + dvr.

[Note: corrected; the source prints "which is vr f(vr)dvr, is the probability that" where this reads "which is vr f(vr)dvr, where f(vr)dvr is the probability that". vr f(vr)dvr has units of speed and integrates to ⟨vr⟩; the probability is f(vr)dvr.]

## Contributors and Attributions

- Mark Tuckerman (New York University)
- Tom Neils, Grand Rapids Community College
