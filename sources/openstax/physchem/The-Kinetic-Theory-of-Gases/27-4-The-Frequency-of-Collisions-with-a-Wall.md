---
title: "27.4: The Frequency of Collisions with a Wall"
book: "Physical Chemistry (LibreTexts)"
chapter: "27: The Kinetic Theory of Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/27%3A_The_Kinetic_Theory_of_Gases/27.04%3A_The_Frequency_of_Collisions_with_a_Wall"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

In the derivation of an expression for the pressure of a gas, it is useful to consider the frequency with which gas molecules collide with the walls of the container. To derive this expression, consider the expression for the "collision volume".

V_col = vx Δt ·A

in which the product of the velocity vx and a time interval Δt is multiplied by A, the area of the wall with which the molecules collide.

All of the molecules within this volume, and with a velocity such that the x-component exceeds vx (and is positive) will collide with the wall. That fraction of molecules is given by

N_col = N/V · (⟨vx⟩Δt·A)/2

and the frequency of collisions with the wall per unit area per unit time is given by

zw = N/V · (⟨vx⟩)/2

In order to expand this model into a more useful form, one must consider motion in all three dimensions. Considering that

⟨v^2⟩ = ⟨vx^2⟩ + ⟨vy^2⟩ + ⟨vz^2⟩

[Note: corrected; the source prints "⟨v⟩ = √(⟨vx⟩ + ⟨vy⟩ + ⟨vz⟩)" where this reads "⟨v^2⟩ = ⟨vx^2⟩ + ⟨vy^2⟩ + ⟨vz^2⟩". As printed it is dimensionally wrong; the components add as squares. ⟨v⟩ = 2⟨vx⟩, with ⟨vx⟩ here the mean of |vx|, follows from the Maxwell–Boltzmann distribution (Sections 27.2 and 27.3), not from this sum.]

and that

⟨vx⟩ = ⟨vy⟩ = ⟨vz⟩

it can be shown that

⟨v⟩ = 2⟨vx⟩

or

⟨vx⟩ = (1/2)⟨v⟩

and so

zw = 1/4 · (N/V)⟨v⟩

A different approach to determining zw is to consider a collision cylinder that will enclose all of the molecules that will strike an area of the wall at an angle θ and with a speed v in the time interval dt. The volume of this collision cylinder is the product of its base area (A) times its vertical height (vcosθdt), as shown in figure 27.4.1.

Figure 27.4.1: The collision cylinder for determining the number of collisions of gas molecules with a wall. (CC BY-NC; Ümit Kaya)
Illustration of a cylindrical object with approaching molecules, showing variables like velocity, angle, and time intervals.

The number of molecules in this cylinder is ρ·A·v·cosθdt, where ρ is the number density N/V. The fraction of molecules that are traveling at a speed between v and v + dv is F(v)dv. The fraction of molecules traveling within the solid angle bounded by θ and θ + dθ and between φ and φ + dφ is (sinθdθdφ)/(4π). Multiplying these three terms together results in the number of molecules colliding with the area A from the specified direction during the time interval dt

dNw = ρ·A·v·cosθ dt · F(v)dv · (sinθdθdφ)/(4π)

This equation can be rearranged to obtain

1/A · (dNw)/dt = (ρ/(4π))vF(v)dv·cosθ sinθ dθdφ = dzw

Integrating this equation over all possible speeds and directions (on the front side of the wall only), we get

zw = (ρ/(4π))∫0^∞ vF(v)dv·∫0^(π/2) cosθ sinθ dθ∫0^(2π) dφ

The result is that

zw = 1/A · (dNw)/dt = 1/4 · (N/V)⟨v⟩ = ρ (⟨v⟩)/4

### Example 27.4.1

Calculate the collision frequency per unit area (Zw) for oxygen at 25.0°C and 1.00 bar using equation (27.4.1):

zw = 1/4 · (N/V)⟨v⟩

**Solution**

N molecules = NA x n, so that

N/V = ((NA)·n)/V = ((NA)·P)/(R·T)

((6.022x10^23 mole^−1)(1.00 bar))/((0.08314 L·bar·mole^−1·K^−1)(298 K)) = 2.43 × 10^22 L^−1 = 2.43 × 10^25 m^−3

[Note: corrected; the source prints "0.08319 L·bar" where this reads "0.08314 L·bar". R = 0.08314 L bar mol^−1 K^−1; the result is unchanged.]

and

⟨v⟩ = ((8RT)/(πM))^(1/2) = ((8(8.314J·K^−1·mol^−1)(298K))/(π·(0.031999 kg·mol^−1)))^(1/2) = 444 m·s^−1

[Note: corrected; the source prints "(π·(0.031999 kg))" where this reads "(π·(0.031999 kg·mol^−1))". M is a molar mass, so the units cancel.]

Thus

zw = (1/4)(2.43 × 10^25 m^−3)(444 m·s^−1)((1 m)/(100 cm))^2 = 2.70 × 10^23 s^−1·cm^−2

The factor of N/V is often referred to as the “number density” as it gives the number of molecules per unit volume. At 1 bar pressure and 298 K, the number density for an ideal gas is approximately 2.43 x 10^19 molecule/cm^3. (This value is easily calculated using the ideal gas law.) By comparison, the number density of interstellar space in our galaxy is approximately 1 atom/cm^3.

[Note: corrected; the source prints "At 1 atm pressure and 298 K" where this reads "At 1 bar pressure and 298 K"; the source prints "the average number density for the universe is approximately 1 molecule/cm^3" where this reads "the number density of interstellar space in our galaxy is approximately 1 atom/cm^3". 2.43 × 10^19 cm^−3 is the 1 bar value calculated above (at 1 atm it is 2.46 × 10^19). About one atom per cm^3 is typical of the gas between the stars of our galaxy; the universe's mean density is about 10^6 times lower.]

### Exercise 27.4.1

Calculate the collision frequency per unit area (Zw) for hydrogen at 25.0°C and 1.00 bar using equation (27.4.1):

zw = 1/4 · (N/V)⟨v⟩

**Answer**

⟨v⟩ = 1770 m·s^−1 and Zw = 1.08 × 10^24 s^−1·cm^−2

## Contributors and Attributions

- Patrick E. Fleming (Department of Chemistry and Biochemistry; California State University, East Bay)
- Tom Neils, Grand Rapids Community College
