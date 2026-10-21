---
title: "16.6: The Repulsive Term in the Lennard-Jones Potential"
book: "Physical Chemistry (LibreTexts)"
chapter: "16: The Properties of Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/16%3A_The_Properties_of_Gases/16.06%3A_The_Repulsive_Term_in_the_Lennard-Jones_Potential"
author: "Anonymous"
license: "CC BY 4.0"
---

Proposed by Sir John Edward Lennard-Jones, the Lennard-Jones potential describes the potential energy of interaction between two non-bonding atoms or molecules based on their distance of separation. The potential equation accounts for the difference between attractive forces (dipole-dipole, dipole-induced dipole, and London interactions) and repulsive forces.

## Introduction

Imagine two rubber balls separated by a large distance. Both objects are far enough apart that they are not interacting. The two balls can be brought closer together with minimal energy, allowing interaction. The balls can continuously be brought closer together until they are touching. At this point, it becomes difficult to further decrease the distance between the two balls. To bring the balls any closer together, increasing amounts of energy must be added. This is because eventually, as the balls begin to invade each other’s space, they repel each other; the force of repulsion is far greater than the force of attraction.

[Image not described in source]

This scenario is similar to that which takes place in neutral atoms and molecules and is often described by the Lennard-Jones potential.

## The Lennard-Jones Potential

The Lennard-Jones model consists of two 'parts'; a steep repulsive term, and smoother attractive term, representing the London dispersion forces. Apart from being an important model in itself, the Lennard-Jones potential frequently forms one of 'building blocks' of many force fields. It is worth mentioning that the 12-6 Lennard-Jones model is not the most faithful representation of the potential energy surface, but rather its use is widespread due to its computational expediency. The Lennard-Jones Potential is given by the following equation:

V(r) = 4ε[(σ/r)^12 − (σ/r)^6]

or is sometimes expressed as:

V(r) = A/r^12 − B/r^6

where

- V is the intermolecular potential between the two atoms or molecules.
- ε is the well depth and a measure of how strongly the two particles attract each other.
- σ is the distance at which the intermolecular potential between the two particles is zero (Figure 16.6.1). σ gives a measurement of how close two nonbonding particles can get and is thus referred to as the collision (van der Waals) diameter; the van der Waals radius is one-half of it, σ/2.
- r is the distance of separation between both particles (measured from the center of one particle to the center of the other particle).
- A = 4εσ^12, B = 4εσ^6
- Minimum value of Φ12(r) at r = r_min.

[Note: corrected; the source prints "and is thus referred to as the van der Waals radius. It is equal to one-half of the internuclear distance between nonbonding particles." where this reads "and is thus referred to as the collision (van der Waals) diameter; the van der Waals radius is one-half of it, σ/2.". σ is the internuclear distance at which V = 0; Example 16.6.1 takes the radius as σ/2.]

Figure 16.6.1: The Lennard-Jones potential describes both the attraction and repulsion between nonionic particles. The first part of the equation, the short-ranged (σ/r)^12 term describes the repulsive forces between particles while the latter part of the equation and the longer-ranged (σ/r)^6 term denotes the attraction.

[Note: corrected; the source prints "the short-ranged σ/r)^12 term" where this reads "the short-ranged (σ/r)^12 term"; the source prints "the longer-ranged σ/r^6 term" where this reads "the longer-ranged (σ/r)^6 term". The source's TeX is unbalanced here; the terms are (σ/r)^12 and (σ/r)^6.]

### Example 16.6.1: The van der Waals Radius

The ε and σ values for Xenon (Xe) are found to be 1.77 kJ/mol and 4.10 Angstroms, respectively. Determine the van der Waals radius for the Xenon atom.

**Solution**

Recall that the van der Waals radius is equal to one-half of the internuclear distance between nonbonding particles. Because σ gives a measure of how close two non-bonding particles can be, the van der Waals radius for Xenon (Xe) is given by:

r = σ/2 = 4.10 Angstroms/2 = 2.05 Angstroms

### Bonding Potential

The Lennard-Jones potential is a function of the distance between the centers of two particles. When two non-bonding particles are an infinite distance apart, the possibility of them coming together and interacting is minimal. For simplicity's sake, their bonding potential energy is considered zero. However, as the distance of separation decreases, the probability of interaction increases. The particles come closer together until they reach a region of separation where the two particles become bound; their bonding potential energy decreases from zero to a negative quantity. While the particles are bound, the distance between their centers continue to decrease until the particles reach an equilibrium, specified by the separation distance at which the minimum potential energy is reached.

If the two bound particles are further pressed together, past their equilibrium distance, repulsion begins to occur: the particles are so close together that their electrons are forced to occupy each other’s orbitals. Repulsion occurs as each particle attempts to retain the space in their respective orbitals. Despite the repulsive force between both particles, their bonding potential energy increases rapidly as the distance of separation decreases.

### Example 16.6.2

Calculate the intermolecular potential between two Argon (Ar) atoms separated by a distance of 4.0 Angstroms (use ε=0.997 kJ/mol and σ=3.40 Angstroms).

**Solution**

To solve for the intermolecular potential between the two Argon atoms, we use the Lennard-Jones equation (16.6.1) where V is the intermolecular potential between two non-bonding particles.

[Note: corrected; the source prints "we use equation 2.1" where this reads "we use the Lennard-Jones equation (16.6.1)". There is no equation 2.1 in this book.]

V = 4ε[(σ/r)^12 − (σ/r)^6]

The data given are:

- ε = 0.997 kJ/mol,
- σ = 3.40 Angstroms, and
- the distance of separation, r = 4.0 Angstroms.

We plug these values into Equation (1) and solve as follows:

V = 4(0.997 kJ/mol)[((3.40 Angstroms)/(4.0 Angstroms))^12 − ((3.40 Angstroms)/(4.0 Angstroms))^6]

= 3.988(0.142 − 0.377)

[Note: corrected; the source prints "= 3.988(0.14 − 0.38)" where this reads "= 3.988(0.142 − 0.377)". (3.40/4.0)^12 = 0.1422 and (3.40/4.0)^6 = 0.3771; rounding to two places too early changes the answer.]

= 3.988(−0.235)

[Note: corrected; the source prints "= 3.988(−0.24)" where this reads "= 3.988(−0.235)". 0.1422 − 0.3771 = −0.2349.]

= −0.94 kJ/mol

[Note: corrected; the source prints "= −0.96 kJ/mol" where this reads "= −0.94 kJ/mol". 3.988 × (−0.2349) = −0.937 kJ/mol.]

### Stability and Force of Interactions

Like the bonding potential energy, the stability of an arrangement of atoms is a function of the Lennard-Jones separation distance. As the separation distance decreases below equilibrium, the potential energy becomes increasingly positive (indicating a repulsive force). Such a large potential energy is energetically unfavorable, as it indicates an overlapping of atomic orbitals. However, at long separation distances, the potential energy is negative and approaches zero as the separation distance increases to infinity (indicating an attractive force). This indicates that at long-range distances, the pair of atoms or molecules experiences a small stabilizing force. Lastly, as the separation between the two particles reaches a distance slightly greater than σ, the potential energy reaches a minimum value (indicating zero force). At this point, the pair of particles is most stable and will remain in that orientation until an external force is exerted upon it.

[Image not described in source]

### Example 16.6.3

Two molecules, separated by a distance of 3.0 angstroms, are found to have a σ value of 4.10 angstroms. By decreasing the separation distance between both molecules to 2.0 angstroms, the intermolecular potential between the molecules becomes more negative. Do these molecules follow the Lennard-Jones potential? Why or why not?

**Solution**

Recall that σ is the distance at which the bonding potential between two particles is zero. On a graph of the Lennard-Jones potential, then, this value gives the x-intersection of the graph. According to the Lennard-Jones potential, any value of r greater than σ should yield a negative bonding potential and any value of r smaller than σ should yield a positive bonding potential. In this scenario, as the separation between the two molecules decreases from 3.0 angstroms to 2.0 angstroms, the bonding potential is becomes more negative. In essence however, because the starting separation (3.0 angstroms) is already less than σ (4.10 angstroms), decreasing the separation even further (2.0 angstroms) should result in a more positive bonding potential. Therefore, these molecules do not follow the Lennard-Jones potential.

[Note: corrected; the source prints "less than σ (4.0 angstroms)" where this reads "less than σ (4.10 angstroms)". The problem gives σ = 4.10 Å.]

### Exercise 16.6.1

The second part of the Lennard-Jones equation is (σ/r)^6 and denotes attraction. Name at least three types of intermolecular interactions that represent attraction.

**Answer**

From the introduction to this section, dipole-dipole, dipole-induced dipole, and London interactions are all attractive forces.

[Note: corrected; the source prints "From section 2.1," where this reads "From the introduction to this section,". These forces are listed at the start of this section.]

### Exercise 16.6.2

At what separation distance in the Lennard-Jones potential does a species have a repulsive force acting on it? An attractive force? No force?

**Answer**

See the potential curve above. A species will have a repulsive force acting on it when r is less than the equilibrium distance between the particles. A species will have an attractive force acting on it when r is greater than the equilibrium distance between the particles. Lastly, when r is equal to the equilibrium distance between both particles, the species will have no force acting upon it.

[Note: corrected; the source prints "See Figure C." where this reads "See the potential curve above.". There is no Figure C in this book.]

## References

1. Atkins, Peter and de Paula, Julio. Physical Chemistry for the Life Sciences. New York, N.Y. W. H. Freeman Company, 2006. (469-472).
2. Royer, Donald J. Bonding Theory. New York, NY.:McGraw-Hill, Inc., 1968.
3. Chang, Raymond. Physical Chemistry for the Biosciences. Sausalito, CA. University Science Books, 2005. (498-500)
