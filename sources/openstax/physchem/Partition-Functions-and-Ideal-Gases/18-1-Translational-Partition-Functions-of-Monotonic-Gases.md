---
title: "18.1: Translational Partition Functions of Monotonic Gases"
book: "Physical Chemistry (LibreTexts)"
chapter: "18: Partition Functions and Ideal Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18%3A_Partition_Functions_and_Ideal_Gases/18.01%3A_Translational_Partition_Functions_of_Monotonic_Gases"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Let us consider the translational partition function of a monatomic gas particle confined to a cubic box of length L. The particle inside the box has translational energy levels given by:

E_trans = (h^2(nx^2 + ny^2 + nz^2))/(8 mL^2)

where nx, ny and nz are the quantum numbers in the three directions. The translational partition function is given by:

q_trans = Σi e^(−εi/kT)

which is the product of translational partition functions in the three dimensions. We can write the translation partition function as the product of the translation partition function for each direction:

q_trans = qx qy qz

= Σ_(nx=1)^∞e^(−εx/kT)Σ_(ny=1)^∞e^(−εy/kT)Σ_(nz=1)^∞e^(−εz/kT)

Since the levels are very closely spaced (continuous), we can replace each sum in Equation (sum1) with an integral. For example:

qx = Σ_(nx=1)^∞e^(−εx/kT)

≈ ∫_(nx=1)^∞ e^(−εx/kT)

and after substituting the energy for the relevant dimension:

εx = (h^2 nx^2)/(8 mL^2)

we can extend the lower limit of integration in the approximation of Equation (int1):

qx = ∫1^∞ e^{−(h^2nx^2)/(8mL^2kT)} ≈ ∫0^∞ e^{−(h^2nx^2)/(8mL^2kT)}

We then use the following solved Gaussian integral:

∫0^∞ e^(−an^2)dn = √(π/(4a))

[Note: corrected; the source prints "∫_o^∞" where this reads "∫0^∞". The lower limit is zero.]

with the following substitution:

a = h^2/(8 mL^2 kT)

we get:

qx = (1/2)√(π/a) = (1/2)√((π8 mkT)/h^2)L

or more commonly presented as:

qx = L/Λ

where Λ is the de Broglie wavelength and is given by

Λ = h/(√(2πmkT))

[Note: corrected; the source prints "Λ = h/(√(2π8 mkT))" where this reads "Λ = h/(√(2πmkT))". qx = (L/2)√(8πmkT)/h = L√(2πmkT)/h, so Λ = h/√(2πmkT), as the example below uses.]

Multiplying the expressions for qx, qy and qz (Equation (times1)) and using V as the volume of the box L^3, we arrive at:

q_trans = ((2πmkT)/h^2)^(3/2)V = V/Λ^3

[Note: corrected; the source prints "q_trans = ((√(2π8 mkT))/h)^(3/2)V" where this reads "q_trans = ((2πmkT)/h^2)^(3/2)V". As printed the expression is not dimensionless; (2πmkT/h^2)^(3/2)V = V/Λ^3.]

This is usually a very large number (10^24 to 10^26) for volumes of 1 cm^3 for small molecular masses. This means that such a large number of translational states are accessible and available for occupation by the molecules of a gas. This result is very similar to the result of the classical kinetic gas theory that said that the observed energy of an ideal gas is:

[Note: corrected; the source prints "This is usually a very large number (10^20)" where this reads "This is usually a very large number (10^24 to 10^26)". At 300 K in 1 cm^3, q_trans is about 10^24 for H atoms and 10^26 for N2 (the example below gives 3.95 × 10^27 per cm^3 for I2).]

U = (3/2)nRT

We postulate therefore that the observed energy of a macroscopic system should equal the statistical average over the partition function as shown above. In other words: if you know the particles your system is composed of and their energy states you can use statistics to calculate what you should observe on the whole ensemble.

### Example

Calculate the translational partition function of an I2 molecule at 300K. Assume V to be 1 liter.

**Solution**

Mass of I2 is 2 × 127 × 1.6606 × 10^−27 kg

2πmkT = 2 × 3.1415 × (2 × 127 × 1.6606 × 10^−27 kg) × 1.3807 × 10^−23 J/K × 300K

= 1.0969 × 10^−44 J kg

Λ = h/(√(2πmkT))

= (6.6262 × 10^−34 J s)/(√(1.0969 × 10^−44 J kg)) = 6.326 × 10^−12 m

The via Equation (parttransation)

q_trans = V/Λ^3 = (1000 × 10^−6 m^3)/((6.326 × 10^−12 m)^3) = 3.95 × 10^30

This means that 3.95 × 10^30 quantum states are thermally accessible to the molecular system

## Contributors and Attributions

- www.chem.iitb.ac.in/~bltembe/pdfs/ch_3.pdf
