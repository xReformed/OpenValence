---
title: "18.11: The Equipartition Principle"
book: "Physical Chemistry (LibreTexts)"
chapter: "18: Partition Functions and Ideal Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18%3A_Partition_Functions_and_Ideal_Gases/18.11%3A_The_Equipartition_Principle"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The equipartition theorem, also known as the law of equipartition, equipartition of energy or simply equipartition, states that every degree of freedom that appears only quadratically in the total energy has an average energy of ½kB T in thermal equilibrium and contributes ½kB to the system's heat capacity. Here, kB is the Boltzmann constant, and T is the temperature in Kelvin. The law of equipartition of energy states that each quadratic term in the classical expression for the energy contributes ½kBT to the average energy. For instance, the motion of an atom has three degrees of freedom (number of ways of absorbing energy), corresponding to the x, y and z components of its momentum. Since these momenta appear quadratically in the kinetic energy, every atom has an average kinetic energy of 3/2kB T in thermal equilibrium. The number of degrees of freedom of a polyatomic gas molecule is 3N where N is the number of atoms in the molecule. This is equal to number of coordinates for the system; e.g. for two atoms you would have x, y, z for each atom.

## Translations

The translational contribution to the average energy is derived in terms of the derivative of the translational partition:

⟨E_trans⟩ = −1/(q_trans) · (∂q_trans)/(∂β)

Introducing the translational partition function derived earlier, Equation (Eq1) becomes

= −Λ^3/V · (∂)/(∂β) · V/Λ^3 = 3/Λ · (∂Λ)/(∂β) = (3/2)kB T

[Note: corrected; the source prints "= −3/Λ · (∂Λ)/(∂β)" where this reads "= 3/Λ · (∂Λ)/(∂β)". ∂(VΛ^−3)/∂β = −3VΛ^−4 ∂Λ/∂β, so the middle term is +3/Λ ∂Λ/∂β = 3/(2β).]

Thus, the three translational degrees of freedom in three dimensions satisfy the equipartition theorem with each translational degree providing ½kB T of energy.

## Rotations

Consider the molecular partition functions. The average rotational energy to the average energy is derived in terms of the derivative of the rotational partition function:

[Note: corrected; the source prints "derivative of the translational partition:" where this reads "derivative of the rotational partition function:". The rotational partition function.]

⟨E_rot⟩ = −1/(q_rot) · (∂q_rot)/(∂β)

which when you introduce the rotational partition function, Equation (Eq2) becomes

⟨E_rot⟩ = −σβB̃ 1/(σB̃) · (∂)/(∂β) · 1/β = 1/β = kB T

The classical expression for the rotational energy of a diatomic molecule is

E_rot^{(classical)} = (1/2)I(ωx^2 + ωy^2)

where I is the moment of inertia and ωx and ωy are the angular velocities in the x and y directions. The rotation along the molecular axis (the z axis here) has no meaning in quantum mechanics because the rotations along the molecular axis lead to configurations which are indistinguishable from the original configuration. The two rotational degrees of freedom have thus given a value of kT with with each rotational degree providing ½kB T of energy.

## Vibrations

Consider vibrational motions. The average vibrational energy to the average energy is derived in terms of the derivative of the vibrational partition function:

[Note: corrected; the source prints "derivative of the translational partition:" where this reads "derivative of the vibrational partition function:". The vibrational partition function.]

⟨E_vib⟩ = −1/(q_vib) · (∂q_vib)/(∂β)

which when you introduce the partition function for vibration, Equation (Eq3) becomes

⟨E_vib⟩ = ((−1)/(q_vib))(−hcν̃(e^(−hcν̃/kB T))/((1 − e^(−hcν̃/kB T))^2)) = hcν̃(e^(−hcν̃/kB T))/((1 − e^(−hcν̃/kB T)))

This can be simplified by dividing both numerator and denominator of Equation (18.1.7) by e^(−hcν̃/kB T)

⟨E_vib⟩ = hcν̃(1/(e^(hcν̃/kB T) − 1))

Equation (18.1.7B) is applicable at all temperatures, but if hcν̃/kB T ≪ 1 (i.e., the high temperature limit), then the exponential in the denominator can be expanded

e^(hcν̃/kB T) − 1 ≈ 1 + hcν̃/kB T − 1 = hcν̃/kB T

and Equation (18.1.7B) becomes

⟨E_vib⟩ ≈ ~~hcν̃~~(1/(~~hcν̃~~/kB T))

⟨E_vib⟩ ≈ kB T

with each vibrational degree providing kB T of energy (since there ar two quadratic terms in the Hamiltonian for a harmonic oscillator (kinetics energy and potential energy).

Compare Equation (18.1.10) with the classical expression for the vibrational energy

E_vib^{(classical)} = ½kx^2 + ½μvx^2

At high temperature the equipartition theorem is valid, but at low temperature, the expansion in Equation (expansion) fails (or more terms are required). In this case, only a few vibrational states are occupied and the equipartition principle is not typically applicable.

## Heat Capacity

Heat capacity at constant volume Cv, is defined as

Cv = ((∂U)/(∂T))_v

The equipartition theorem requires that each degree of freedom that appears only quadratically in the total energy has an average energy of ½k_BT in thermal equilibrium and, thus, contributes ½kB to the system's heat capacity. Thus the three translational degrees of freedom each contribute ½R to (3/2 R). The contribution of rotational kinetic energy will be R for the linear, and 3/2R for the nonlinear molecules. For the vibration, an oscillator has quadratic kinetic and potential terms, making the contribution of each vibrational mode R. However, k_BT has to be much greater than the spacing between the quantum energy levels. If this is not satisfied, the heat capacity will be reduced and which drop to zero at low temperatures. The corresponding degree of freedom is said to be frozen out; this is the situation for the vibrational degrees of freedom at room temperature and that is why the usual assumption is that they will not contribute.

Figure 18.11.1: Idealized plot of the molar specific heat of a diatomic gas against temperature. It agrees with the value (7/2)R predicted by equipartition at high temperatures (where R is the gas constant), but decreases to (5/2)R and then (3/2)R at lower temperatures, as the vibrational and rotational modes of motion are "frozen out". The failure of the equipartition theorem led to a paradox that was only resolved by quantum mechanics. For most molecules, the transitional temperature T_rot is much less than room temperature, whereas T_vib can be ten times larger or more. A typical example is carbon monoxide, CO, for which T_rot ≈ 2.8 K and T_vib ≈ 3103 K. For molecules with very large or weakly bound atoms, T_vib can be close to room temperature (about 300 K); for example, T_vib ≈ 308 K for iodine gas, I2. (Public domain; PD-Self)
Molar heat capacity of a diatomic gas against temperature, rising from (3/2)R to (5/2)R to (7/2)R as rotation and then vibration become active.

[Note: corrected; the source prints "Graph showing a curve with variable values plotted against time, indicating changes at specific time markers." where this reads "Molar heat capacity of a diatomic gas against temperature, rising from (3/2)R to (5/2)R to (7/2)R as rotation and then vibration become active.". The plot is against temperature. The image's alt text, machine-written, misreads the image; this describes it.]

### Example: CO2 vs. NO2

For comparing the molar heat capacities of nitrogen dioxide and carbon dioxide at constant volume (at room temperature), let us use the law of equipartition and assume the vibrations to be frozen out at room temperature. The predicted molar for the linear CO2 (with three translational and two rotational degrees of freedom) is 5/2R (20.8 JK^−1 mol^−1).

[Note: corrected; the source prints "is 5/2R 20.8 JK^−1 mo'^−1)." where this reads "is 5/2R (20.8 JK^−1 mol^−1).". A typing error.]

The estimated molar for NO2 (a bent molecule, with three translational and three rotational degrees of freedom) is 3R (24.9 JK^−1 mol^−1). These estimations are close to the experimental values:

[Note: corrected; the source prints "is 3R (25.0 JK^−1 mol^−1)" where this reads "is 3R (24.9 JK^−1 mol^−1)". 3R = 24.94.]

- 30.1 JK^-1 mol^-1 for CO2
- 29.5 JK^-1 mol^-1 for NO2

Especially for CO2, the deviation is significant. This suggests that, although not all vibrational degrees of freedom are available, they cannot be totally ignored. The bigger deviation in the prediction of molar heat capacities is probably due to the existence of the lower frequency-bending vibration in carbon dioxide.

## References

1. Thermodynamics and Statistical Mechanics, Greiner W., Neise, Stocker, Springer, 2001
2. Physical Chemistry, 5th ed., Atkins P., W. H. Freeman and Company, 1994.

## Contributors and Attributions

- Zane Sterkewolf (UC Davis)
- www.chem.iitb.ac.in/~bltembe/pdfs/ch_3.pdf
- Sudarson S Sinha (Tel Aviv University)
