---
title: "30.8: The Velocity and Angular Distribution of the Products of a Reactive Collision"
book: "Physical Chemistry (LibreTexts)"
chapter: "30: Gas-Phase Reaction Dynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/30%3A_Gas-Phase_Reaction_Dynamics/30.08%3A_The_Velocity_and_Angular_Distribution_of_the_Products_of_a_Reactive_Collision"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## Calculation of the speed distribution for DF molecules based upon the vibrational state of the molecule

This section describes how data from crossed molecular beam experiments allow us to describe the velocity and angular distribution of particles produced by the simple bi-molecular collision

F(g) + D2(g) → DF(g) + D(g)

As noted in the previous section, the internal vibrational energy of the products will affect the velocity and distribution because if DF(g) is a harmonic oscillator, then

E_P_(trans) + E_P_(vib) = 165 kJ/mol

and

E_P_(vib) = (v + 1/2)(34.8 kJ/mol)

Thus

E_P_(trans) + E_P_(vib) = (1/2)μP v_Pr^2 + (v + 1/2)(34.8 kJ/mol)

[Note: corrected; the source prints "(1/2)μP v_Pr +" where this reads "(1/2)μP v_Pr^2 +". The kinetic energy is (1/2)μP v_Pr^2.]

= 165 kJ/mol

The reduced mass of the products μP is

((21.01 g/mol)(2.014 g/mol))/(21.01 g/mol + 2.014 g/mol) = 1.84 g/mol = 0.00184 kg/mol

so that solving for the product velocity in Equation (30.8.1) for v_Pr gives

v_Pr = √((2/(0.00184 kg/mol))(1.65 × 10^5 J/mol − (v + 1/2)(3.48 × 10^4)J/mol))

It can be shown that the corresponding relative velocity of the DF molecule and the center of mass,|v⃗_DF − v⃗_cm|, is equal to ((mD)/M)v_Pr for this reaction, with M = m_D2 + mF. Table 30.8.1 shows the values of v_Pr and |v⃗_DF − v⃗_cm| for vibrational states v = 0 − 4.

Table 30.8.1

| Vibrational state, v | relative velocity of the products, v_Pr in m/s | \|v⃗_DF − v⃗_cm\|, in m/s |
| --- | --- | --- |
| 0 | 12,700 | 1108 |
| 1 | 11,100 | 968 |
| 2 | 9210 | 805 |
| 3 | 6850 | 599 |
| 4 | 3020 | 264 |

[Note: corrected; the source prints "| 0 | 12,700 | 1111 |" where this reads "| 0 | 12,700 | 1108 |"; the source prints "| 1 | 11,100 | 971 |" where this reads "| 1 | 11,100 | 968 |"; the source prints "| 2 | 9270 | 811 |" where this reads "| 2 | 9210 | 805 |"; the source prints "| 3 | 6930 | 606 |" where this reads "| 3 | 6850 | 599 |"; the source prints "| 4 | 3200 | 280 |" where this reads "| 4 | 3020 | 264 |". With the 165 kJ/mol of energy stated above, v_Pr = √((2/μP)(165 kJ/mol − (v + 1/2)(34.8 kJ/mol))) and |v⃗_DF − v⃗_cm| = (2.014/23.03)v_Pr; the source's values are those for 166 kJ/mol.]

## Analysis of Crossed Molecular Beam Data

This link takes you to the 1986 Nobel Prize acceptance lecture of Yuan Tseh Lee, in which he describes the crossed molecular beam studies that his group carried out on the reaction (react1). On page 3 of the lecture, you will see a center-of-mass velocity flux contour map for the reaction. This map measures the speed distribution and the angular dispersion distribution as a result of collisions between one D2 molecule approaching from the left and one F atom approaching from the right. Moving away from the center of the graph in any direction represents an increase in speed. The dashed line circles represent the maximum speed that a molecule in that given vibrational state can obtain. Notice that the highest vibrational state is closest to the center of the map. Thus, the map is consistent with theory, which claims that as the vibrational energy increases, the translational energy decreases.

[Note: The link is to https://www.nobelprize.org/uploads/2018/06/lee-lecture-1.pdf; the reaction (react1) is D2 + F → DF + D. The text is left as printed.]

[Note: corrected; the source prints "closest to the nucleus" where this reads "closest to the center of the map". The map is of velocities; its center is the center-of-mass velocity, not a nucleus.]

The contour areas on the map represent a constant number of DF(g) molecules. The more closely spaced the contour lines, the greater the number of DF(g) molecules with that velocity in that vibrational state. An estimate of the population distribution is that roughly half the molecules are in the v = 3 state, roughly 25% of the molecules occupy the v = 2 state, and roughly 25% of the molecules occupy the v = 4 state. Very few molecules occupy the v = 0 or v = 1 states. The fact that there are molecules with velocities between the dashed lines shows that these DF molecules are in various rotational states within each vibrational state. If E_rot = 0 and J = 0, the molecular velocity distribution would be centered on each dashed line. But because these molecules do exist in various rotational states, their E_rot is greater than 0, and their translational energy is in between the energies of those molecules in rotational ground states. The distribution of vibrational states among the DF product molecules more closely resembles a normal distribution (i.e., Gaussian-like) than a Boltzmann distribution.

### Example 30.8.1

Determine the populations of the five lowest vibrational states of DF(v) relative to DF(v = 3), assuming that the distribution is in thermal equilibrium at 298 K. You can assume that the DF molecules act as harmonic oscillators with ṽ_DF = 2907 cm^-1.

**Solution**

If the DF(g) molecules are in thermal equilibrium, the population of vibrational states will follow a Boltzmann distribution. Therefore,

N(v) = e^{−((v + 1/2)hν_DF)/(kB T)}

and

N(v = 3) = e^{−((3 + 1/2)hν_DF)/(kB T)}

so

(N(v))/(N(v = 3)) = e^{−((v − 3)hν_DF)/(kB T)}

| v | (N(v))/(N(v = 3)) |
| --- | --- |
| 0 | 1.93 x 10^18 |
| 1 | 1.55 x 10^12 |
| 2 | 1.25 x 10^6 |
| 3 | 1 |
| 4 | 8.03 x 10^-7 |

[Note: corrected; the source prints "| 0 | 2.03 x 10^18 |" where this reads "| 0 | 1.93 x 10^18 |"; the source prints "| 1 | 1.60 x 10^12 |" where this reads "| 1 | 1.55 x 10^12 |"; the source prints "| 2 | 1.26 x 10^6 |" where this reads "| 2 | 1.25 x 10^6 |"; the source prints "| 4 | 7.90 x 10^-7 |" where this reads "| 4 | 8.03 x 10^-7 |". hν_DF/kB T = 14.035 for 2907 cm^−1 at 298 K; the source's values correspond to 14.05.]

It is clear that when the molecules are at thermal equilibrium, the population of the vibrational states decreases with an increasing v, which is not the population pattern found from the experiment.

<!-- end of example -->

The map also shows that a majority of DF(g) molecules generally head back towards the direction from which the F atom originally approached the collision. Some even head directly back from whence they came. This type of collision is called a rebound reaction. We will see in the next section that not all reactions are rebound reactions.

A different style of contour map is shown in figure 30.8.1. In this view, the density of the dots and the intensity of their color represent the number of particles being scattered at specific angles. This map does not show the vibrational state of the DF molecules.

Figure 30.8.1: A center-of-mass velocity flux contour map for the reaction D2 + F → DF + D. This map shows the angular dispersion distribution as a result of collisions between one D2 molecule approaching from the left and one F atom approaching from the right. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)
A center-of-mass velocity flux contour map: D2 arrives from the left and F from the right, the density of dots shows the scattered DF, dashed circles mark the speeds allowed for each vibrational state, and arrows show scattering directions.

[Note: corrected; the source prints "Schematic illustration of a sphere split into blue and pink halves, with arrows indicating forces and energy flow." where this reads "A center-of-mass velocity flux contour map: D2 arrives from the left and F from the right, the density of dots shows the scattered DF, dashed circles mark the speeds allowed for each vibrational state, and arrows show scattering directions.". The image's alt text, machine-written, misreads the image; this describes it.]
