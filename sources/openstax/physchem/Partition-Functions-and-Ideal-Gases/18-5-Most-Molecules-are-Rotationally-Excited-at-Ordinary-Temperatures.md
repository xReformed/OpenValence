---
title: "18.5: Most Molecules are Rotationally Excited at Ordinary Temperatures"
book: "Physical Chemistry (LibreTexts)"
chapter: "18: Partition Functions and Ideal Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18%3A_Partition_Functions_and_Ideal_Gases/18.05%3A_Most_Molecules_are_Rotationally_Excited_at_Ordinary_Temperatures"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The rotational quantum number is J and the energy of the rotations is:

E(J) = B̃J(J + 1)

Where B̃ is in units of cm^-1 and is equivalent to:

h/(8π^2 Ic)

Where c is the speed of light in units of cm s^-1. However, with the exception of the ground state (i.e., J = 0), multiple eigenstates exist for a given value of J. This is a form of degeneracy, (g), and the number of levels per energy goes as 1, 3, 5, 7, 9 etc or:

[Note: corrected; the source prints "speed of light in units of cm^-1." where this reads "speed of light in units of cm s^-1.". A speed in cm s^−1.]

g(J) = 2J + 1

Therefore, the summation to find the partition function q_rot(T) contains an extra factor g = 2J + 1. This factor is mathematically very handy, because it is the derivative of:

X = J(J + 1)

[Note: corrected; the source prints "g(J) = J(J + 1)" where this reads "X = J(J + 1)". g(J) is 2J + 1, as above; this substitution X = J(J + 1) has dX = (2J + 1)dJ.]

This makes it possible to change variables to X = J(J + 1) and the integration becomes very easy. Notice that just like in the translation partition function, we approximate the summation with an integral. However, because we are dealing with far fewer levels, this is less justified in the rotational case. How justified it is depends on the gas and the temperature we consider. Roughly speaking we should be at a temperature T ≫ Θ_rot.

### Exercise 18.5.1

Look at Table 18.4.1. When do we need to actually work out the (discrete) summation instead of making a (continuous) integration out of it?

[Note: corrected; the source prints "Look at table 18.2." where this reads "Look at Table 18.4.1.". The table of Θ values is in Section 18.4.]

**Answer**

Only for the lightest gases like H2 (and D2, HD) do we need to worry and then only at pretty low cryogenic circumstances. At room temperature, we can take the rotational levels as a continuous set and use an integral. Notice that the vibrational Θ values are much larger! At T = 300 K, usually only a single level is occupied and we are in the discrete limit. On the surface of the sun that would be a different matter of course.

[Note: corrected; the source prints "lightest gases like He and H2" where this reads "lightest gases like H2 (and D2, HD)". He is monatomic and has no rotational levels.]

The rotational constant B is directly linked to the moment of inertia:

I = μr^2

Where μ is the reduced mass of the molecule:

1/μ = 1/(m1) + 1/(m2)

and r is the bond length. Again we can scale the behavior of different systems to one and the same picture by introducing a characteristic temperature:

Θ_rot = hcB̃/k = ħ^2/(2Ikb)

[Note: corrected; the source prints "Θ_rot = hb/k" where this reads "Θ_rot = hcB̃/k". With B̃ in cm^−1.]

As we did for the translations, we can calculate the moment ⟨ε⟩. For vibrations we get a relatively complicated function of temperature. However, for rotations, the moment is simply equal to NkT and this means that the rotational contribution to the molar Cv of a diatomic is simply R. As the vibrational and electronic contributions to the heat capacity are typically negligible at room temperature, we get:

- monatomic gas Cv = Cv^(trans) = (3/2)nR
- diatomic Cv = Cv^(trans) + Cv^(rot); = (3/2)nR + nR; = (5/2)nR

Rotational energies are less than vibrational and electronic energies and, at room temperature, many rotational states will be populated.

The normalized rotational population of HCl at room temperature.
Bar graph with varying heights, displaying data distribution with taller bars on the left and shorter bars on the right.
