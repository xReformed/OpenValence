---
title: "27.6: Mean Free Path"
book: "Physical Chemistry (LibreTexts)"
chapter: "27: The Kinetic Theory of Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/27%3A_The_Kinetic_Theory_of_Gases/27.06%3A_Mean_Free_Path"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## Collision energy

Consider two particles A and B in a system. The kinetic energy of these two particles is

K_AB = (pA^2)/(2 mA) + (pB^2)/(2 mB)

We can describe kinetic energy in terms of center-of-mass (P) and relative momentum (p), which are given by

P = pA + pB

and

p = relative velocity × μ

= (vA − vB) × ((mA mB)/(mA + mB))

= (mB pA − mA pB)/M

where

M = mA + mB

is the total mass of the two particles, and

μ = (mA mB)/M

is the reduced mass of the two particles.

Substituting these terms into equation (27.6.1), we find

K_AB = (pA^2)/(2 mA) + (pB^2)/(2 mB) = (P^2)/(2M) + (p^2)/(2μ)

Note that the kinetic energy separates into a sum of a center-of-mass term and a relative momentum term.

Now the relative position of the two particles is r = rA − rB so that the relative velocity is ṙ = ṙA − ṙB or v = vA − vB. Thus, if the two particles are approaching each other such that vA = −vB, then v = 2vA. However, by equipartitioning the relative kinetic energy, which is mass independent, we get

⟨(p^2)/(2μ)⟩ = (3/2)kB T

which is called the collision energy

## Collision cross-section

Consider two molecules in a system. The probability that they will collide increases with the effective “size” of each particle. However, the size measure that is relevant is the apparent cross-section area of each particle. For simplicity, suppose the particles are spherical, which is not a bad approximation for small molecules. If we are looking at a sphere, what we perceive as the size of the sphere is the cross section area of a great circle. Recall that each spherical particle has an associated “collision sphere” that just encloses two particles at closest contact, i.e., at the moment of a collision, and that this sphere is a radius d, where d is the diameter of each spherical particle. The cross-section of this collision sphere represents an effective cross section for each particle inside which a collision is imminent. The cross-section of the collision sphere is the area of a great circle, which is πd^2. We denote this apparent cross section area σ. Thus, for spherical particles A and B with diameters dA and dB, the individual cross sections are

σA = πdA^2,    σB = πdB^2

The collision cross section, σ_AB is determined by an effective diameter d_AB characteristic of both particles. The collision probability increases of both particles have large diameters and decreases if one of them has a smaller diameter than the other. Hence, a simple measure sensitive to this is the arithmetic average

d_AB = (1/2)(dA + dB)

and the resulting collision cross section becomes

σ_AB = πd_AB^2

= π((dA + dB)/2)^2

= (π/4)(dA^2 + 2dA dB + dB^2)

= (1/4)(σA + 2√(σA σB) + σB)

= (1/2)[((σA + σB)/2) + √(σA σB)]

which, interestingly, is an average of the two types of averages of the two individual cross sections, the arithmetic and geometric averages!

## Average collision Frequency

Consider a system of particles with individual cross sections σ. A particle of cross section σ that moves a distance l in a time Δt will sweep out a cylindrical volume (ignoring the spherical caps) of volume σl (Figure 27.6.1 ). If the system has a number density ρ, then the number of collisions that will occur is

N_coll = ρσl

Figure 27.6.1: Collision cylinder. Any particle whose center lies within this volume will experience a collision with a test particle tracing out this volume. (CC BY-NC; Ümit Kaya)
Illustration of particles in a tube showing "hit" and "miss" scenarios related to collision distances.

[Note: corrected; the source prints "Any particle that partially overlaps with this volume will experience a collision" where this reads "Any particle whose center lies within this volume will experience a collision". The cylinder's radius is the collision diameter d (σ = πd^2), so a particle collides only if its center is inside; the figure marks one that partly overlaps the tube "miss".]

We define the collision frequency for a single molecule, zA, also known as the average collision rate as N_coll/Δt, i.e.,

zA = (N_coll)/Δt = (ρσl)/Δt = ρσ⟨v⟩

where ⟨v⟩ is the average speed of a particle

⟨v⟩ = √((8 kB T)/(πmA))

Equation (27.6.2) is not quite correct because it is based on the assumption that only the molecule of interest is moving. If we take into account the fact that all of the particles are moving relative to one another, and assume that all of the particles are of the same type (say, type A), then performing the average over a Maxwell-Boltzmann speed distribution gives

⟨vr⟩ = √((8 kB T)/(πμ))

where μ = mA/2 is the reduced mass.

Thus,

⟨vr⟩ = √(2)⟨v⟩

and

zA = √(2)ρσ⟨v⟩ = ρσ⟨vr⟩

The reciprocal of zA is a measure of the average time between collisions for a single molecule.

## Mean Free Path

The mean free path is the distance a particle will travel, on average, before experiencing a collision event. This is defined as the product of the average speed of a particle and the time between collisions. The former is ⟨v⟩, while the latter is 1/zA. Hence, we have

λ = (⟨v⟩)/(√(2)ρσ⟨v⟩) = 1/(√(2)ρσ)

The mean free path can also be described using terms from the ideal gas law, because ρ = (P·NA)/(R·T):

λ = (R·T)/(√(2)·NA·σ·P)

## Random Walks

In any system, a particle undergoing frequent collisions will have the direction of its motion changed with each collision and will trace out a path that appears to be random. In fact, if we treat the process as statistical, then, we are, in fact, treating each collision event as a random event, and the particle will change its direction at random times in random ways! Such a path might appear as shown in Figure 27.6.2. Such a path is often referred to as a random walk path.

Figure 27.6.2: Random walk path. The Path of a Single Particle in a Gas Sample. The frequent changes in direction are the result of collisions with other gas molecules and with the walls of the container.
3D diagram showing a path between points A and B within a cube, connected by a dashed line.

In order to analyze such paths, let us consider a random walk in one dimension. We’ll assume that the particle move a mean-free path length λ between collisions and that each collision changes the direction of the particles motion, which in one dimension, means that the particle moves either to the right or to the left after each event. This can be mapped onto a metaphoric “coin toss” that can come up heads “H” or tails “T”, with “H” causing motion to the right, and “T” causing motion to the left. Let there be N such coin tosses, let i be the number of times “H” comes up and j denote the number of times “T” comes up. Thus, the progress of the particle, which we define as net motion to the right, is given by (i − j)λ. Letting k = i − j, this is just kλ. Thus, we need to know what the probability is for obtaining a particular value of k in a very large number N of coin tosses. Denote this P(k).

In N coin tosses, the total number of possible sequences of “H” and “T” is 2^N. However, the number of ways we can obtain i heads and j tails, with i + j = N is a binomial coefficient N!/i!j!. Now

j = N − i = N − (j + k) = N − j − k

so that j = (N − k)/2. Similarly,

i = N − j = N − (i − k) = N − i + k

so that i = (N + k)/2. Thus, the probability P(k) is

P(k) = (N!)/(2^N i!j!) = 1/(2^N) · (N!)/(((N + k)/2)!((N − k)/2)!)

We now take the logarithm of both sides:

ln P(k) = ln N!− ln 2^N− ln ((N + k)/2)!− ln ((N − k)/2)!

and use Stirling’s approximation:

ln N! ≈ N ln N − N

and write ln P(k) as

ln P(k) ≈ N ln N − N − N ln 2 − (1/2)(N + k) ln (1/2)(N + k) + (1/2)(N + k) − (1/2)(N − k) ln (1/2)(N − k) + (1/2)(N − k)

= N ln N − N ln 2 − (1/2)(N + k) ln 1/2 − (1/2)(N + k) ln (N + k) − (1/2)(N − k) ln 1/2 − (1/2)(N − k) ln (N − k)

[Note: corrected; the source prints "+ (1/2)(N + k) ln 1/2" where this reads "− (1/2)(N + k) ln 1/2". Expanding −(1/2)(N + k) ln (1/2)(N + k) gives −(1/2)(N + k) ln 1/2, as for the (N − k) term; the next line's +(1/2)(N + k) ln 2 follows only from the minus sign.]

= N ln N − N ln 2 + (1/2)(N + k) ln 2 − (1/2)(N + k) ln (N + k) + (1/2)(N − k) ln 2 − (1/2)(N − k) ln (N − k)

= N ln N − (1/2)[(N + k) ln (N + k) + (N − k) ln (N − k)]

Now, write

ln (N + k) = ln N(1 + k/N) = ln N + ln (1 + k/N)

and

ln (N − k) = ln N(1 − k/N) = ln N + ln (1 − k/N)

We now use the expansions

ln (1 + k/N) = (k/N) − (1/2)(k/N)^2 + …

ln (1 − k/N) = −(k/N) − (1/2)(k/N)^2 + …

If we stop at the second-order term, then

ln P(k) = N ln N − (1/2)(N + k)[ ln N + (k/N) − (1/2)(k/N)^2]−(1/2)(N − k)[ ln N − (k/N) − (1/2)(k/N)^2]

= −(1/2)(N + k)[(k/N) − (1/2)(k/N)^2] + (1/2)(N − k)[(k/N) + (1/2)(k/N)^2]

= (1/2)N(k/N)^2 − k(k/N)

= k^2/(2N) − k^2/N = −k^2/(2N)

so that

P(k) = e^(−k^2/2N)

Now, if we let x = kλ and L = √(N)λ, and if we let x be a continuous random variable, then the corresponding probability distribution P(x) becomes

P(x) = (1/(L√(2π))) e^(−x^2/2L^2) = (1/(√(2πNλ^2))) e^(−x^2/2Nλ^2)

which is a simple Gaussian distribution. Now, N is the number of collisions, which is given by zA t, so we can write the probability distribution for the particle to diffuse a distance x in time t as

P(x, t) = (1/(√(2πzA tλ^2))) e^(−x^2/2zA tλ^2)

Define D = zA λ^2/2 as the diffusion constant, which has units of (length)^2/time. The distribution then becomes

P(x, t) = (1/(√(4πDt))) e^(−x^2/4Dt)

Note that this distribution satisfies the following equation:

((∂)/(∂t))P(x, t) = D ((∂^2)/(∂x^2))P(x, t)

which is called the diffusion equation. The diffusion equation is, in fact, more general than the Gaussian distribution in Equation (27.6.3). It is capable of predicting the distribution in any one-dimensional geometry subject to any initial distribution P(x,0) and any imposed boundary conditions.

In three dimensions, we consider the three spatial directions to be independent, hence, the probability distribution for a particle to diffuse to a location r = (x, y, z) is just a product of the three one-dimensional distributions:

P(r) = P(x) P(y) P(z) = (1/((4πDt)^(3/2))) e^{−(x^2 + y^2 + z^2)/4Dt}

and if we are only interested in diffusion over a distance r, we can introduce spherical coordinates, integrate over the angles, and we find that

P(r, t) = ((4πr^2)/((4πDt)^(3/2))) e^(−r^2/4Dt)

[Note: corrected; the source prints "((4π)/((4πDt)^(3/2)))" where this reads "((4πr^2)/((4πDt)^(3/2)))". Integrating over the angles brings in the r^2 of the spherical volume element; without it P(r, t) would not integrate to 1.]

## Total collision frequency per unit volume

In Equation (27.6.2), zA represents the collision frequency for one specific molecule in a gas sample. If we wish to calculate the total collision frequency per unit volume, the number density of the molecules, ρ, must be taken into account. The total collision frequency in a sample that contains only A molecules, Z_AA, is

[Note: corrected; the source prints "In equation 27.6.18" where this reads "In Equation (27.6.2)". The page has no Equation 27.6.18; zA, the collision frequency of one molecule, is Equation (27.6.2).]

Z_AA = (1/2)ρzA = (1/2)σ⟨vr⟩ρ^2 = (σ⟨v⟩ρ^2)/(√2)

The factor of 1/2 must be included to avoid double counting collisions between similar molecules. (This is identical reasoning to the fact that there is only one way to roll double 3 with two dice.)

If you have a gas sample that contains A molecules and B molecules, then

Z_AB = σ_AB⟨vr⟩ρA ρB

where

σ_AB = π((dA + dB)/2)^2 and ⟨vr⟩ = √((8 kB T)/(πμ))

### Example 27.6.1

Calculate the frequency of hydrogen-hydrogen collisions in a 1.00 cubic centimeter container at 1.00 bar and 298 K.

**Solution**

The collisional frquency requires knowledge of (1) the number denisty, the average speed (Z_AA = σ⟨v⟩ρ^2/√2 above).

[Note: corrected; the source prints "the average speed (Equation (27.6.4))." where this reads "the average speed (Z_AA = σ⟨v⟩ρ^2/√2 above).". Equation (27.6.4) is Z_AB = σ_AB⟨vr⟩ρA ρB, for two different species; for H2 alone Z_AA = σ⟨v⟩ρ^2/√2, which gives the result below (Z_AB with A = B would count each collision twice).]

The value of σ_H2 is 2.30 x 10^-19 m^2.

The number density:

ρ = ((NA P_H2)/RT) = (((6.022x10^23 mole^−1)(1.00 bar))/((0.08314L·bar·mol^−1·K^−1)(298K))) = 2.43 × 10^22 L^−1 = 2.43 × 10^25 m^−3

The average speed:

⟨v⟩ = √((8R T)/(πM)) = √(((8(8.314J·K^−1·mol^−1)(298K))/(π(0.002016 kg·mol^−1)))) = 1770 m/s

[Note: corrected; the source prints "(8.314J·K^−1)" where this reads "(8.314J·K^−1·mol^−1)"; the source prints "(0.002016 kg)" where this reads "(0.002016 kg·mol^−1)". R is per mole and M is a molar mass; the value, 1770 m/s, is right.]

These are substituted into Z_AA = σ⟨v⟩ρ^2/√2 to get the collisional frequency

[Note: corrected; the source prints "These are substituted into Equation (27.6.4)" where this reads "These are substituted into Z_AA = σ⟨v⟩ρ^2/√2". As above.]

Z_(H2, H2) = ((2.30x10^−19 m^2)(1770 m/s)(2.43x10^25 m^−3)^2)/(√2)

= 1.7x10^35 s^−1 m^−3

= 1.7 × 10^29 s^−1 cm^−3
