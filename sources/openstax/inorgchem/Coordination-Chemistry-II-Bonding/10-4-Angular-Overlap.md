---
title: "10.4: Angular Overlap"
book: "Inorganic Chemistry (LibreTexts)"
chapter: "10: Coordination Chemistry II - Bonding"
source_url: "https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Inorganic_Chemistry_(LibreTexts)/10%3A_Coordination_Chemistry_II_-_Bonding/10.04%3A_Angular_Overlap"
author: "Cschaller"
license: "CC BY-NC 3.0"
---

The angular overlap model is an approach to quantifying the interaction between metal and ligand orbitals in different geometries, with a focus on the metal d orbitals. Although developed in the 1970's, this approach is still used as a starting point for theoretical calculations using advanced computational chemistry methods available today.1

The core concept of the angular overlap model is that different ligand orbitals will overlap with metal d orbitals to different extents because of the variety of angles at which these orbitals would approach each other. Stronger overlap leads to greater interaction. That means both greater stabilization of the ligand-centered bonding orbital and greater destabilization of the metal-centered antibonding orbital.

[Image not described in source]

Let's look at some examples. Consider the overlap of the d_(z^2) orbital with an axial ligand in octahedral geometry, with the assumption that the d_(z^2) orbital lies in the axial direction. There should be considerable overlap between the metal and ligand orbitals, leading to both significant stabilization of the ligand donor electrons and similar destabilization of electrons in the metal d_(z^2) orbital. By comparison, an equatorial ligand would have significantly less overlap with the d_(z^2) orbital. Instead of overlapping with the substantial lobe along the z axis, the ligand would be interacting with the minimal d_(z^2) toroid in the xy plane. The bonding orbital would be stabilized to a significantly lesser extent compared to the axial ligand. The antibonding orbital would be destabilized by a correspondingly smaller amount.

[Note: corrected; the source prints "of an electrons" where this reads "of electrons". A typing error.]

In the case of a tetrahedral ligand, there is essentially no overlap with the d_(z^2) orbital because its on-axis lobe is too far away from the cubic corner positions occupied by ligands in a tetrahedral array. There is really no bonding or antibonding in this case. On the other hand, the dxz orbital reaches a little closer to that corner position, allowing for some overlap with the ligand orbital. Consequently, there is some stabilization of the bonding electrons and destabilization of the antibonding d orbital. At first glance, the amount of overlap in this case, and the amount of stabilization or destabilization, appears much more similar to the case of the equatorial ligand with the d_(z^2) orbital than the axial ligand with the d_(z^2) orbital.

We will not go into the mathematics that explore the exact extent of overlap expected in each case. Instead, we will go straight to a summary of the results in the next section.

### Exercise 10.4.1

Estimate the degree of interaction between the ligand and metal orbital: large, medium, or none.

[Image not described in source]

[Image not described in source]

**Answer**

a) none b) medium c) medium (although it may appear greater than in (b), and it is) d) large

## References

1. For example: Chilkuri, V. G.; DeBeer, S.; Neese, F. Ligand Field Theory and Angular Overlap Model Based Analysis of the Electronic Structure of Homovalent Iron–Sulfur Dimers. Inorg. Chem. 2020, 59(2), 984-995.

## 10.4.1: Sigma Bonding in the Angular Overlap Model

The pictures we considered previously explicitly addressed sigma overlap between the ligand donor orbital and the metal d acceptor orbital. The donor electrons drop in energy into the new sigma bonding combination and any electrons in the d orbital are raised into the new sigma antibonding combination. For example, when an axial ligand interacts with a metal dz2 orbital, the in-phase, bonding combination drops in energy by a quantity that we will call eσ. At the same time, the out-of-phase, antibonding combination is raised in energy by the same quantity, eσ. A real computational treatment would reveal that this is not exactly true; the amount of energy by which the bonding orbital is stabilized is slightly different from the amount by which the antibonding orbital is destabilized. However, the distinction is pretty minor for our purposes.

[Image not described in source]

From the interactions we have already looked at, we know that this specific interaction is a strong one. Other metal-ligand interactions may involve less overlap than this one and will lead to smaller changes in energy. For this reason, other metal-ligand interactions are expressed as fractions of the quantity, eσ, found in the case of the dz2 orbital interacting with an axial ligand.

Our first task is to label the positions that will be occupied by ligands in a number of different geometries. To avoid a cluttered diagram of these positions, we can use three separate illustrations to illustrate the ligand positions in some common geometries. The first drawing below includes all the geometries in which ligands are found along Cartesian coordinates. The second drawing describes tetrahedral geometry, whereas the third one describes trigonal structures.

[Image not described in source]

Given those ligand positions, we can assess the interactions that would occur if ligands were purely sigma donors. For reference, the dz2 orbital is assumed to lie along the axis between positions 1 and 6 and the magnitudes of the interactions are all scaled relative to the interaction of a ligand at position 1 or 6 with the dz2 orbital. We will not address the approach that was taken to arrive at these relative numbers; we will simply use the results tabulated here.

Sigma Interactions of Ligands with Metal d Orbitals (units of eσ)

| Ligand Positions | dz2 | dx2-y2 | dxy | dxz | dyz |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 0 | 0 | 0 | 0 |
| 2 | 1/4 | 3/4 | 0 | 0 | 0 |
| 3 | 1/4 | 3/4 | 0 | 0 | 0 |
| 4 | 1/4 | 3/4 | 0 | 0 | 0 |
| 5 | 1/4 | 3/4 | 0 | 0 | 0 |
| 6 | 1 | 0 | 0 | 0 | 0 |
| 7 | 0 | 0 | 1/3 | 1/3 | 1/3 |
| 8 | 0 | 0 | 1/3 | 1/3 | 1/3 |
| 9 | 0 | 0 | 1/3 | 1/3 | 1/3 |
| 10 | 0 | 0 | 1/3 | 1/3 | 1/3 |
| 11 | 1/4 | 3/16 | 9/16 | 0 | 0 |
| 12 | 1/4 | 3/16 | 9/16 | 0 | 0 |

In order to quantify the interactions between ligands and metal orbitals, we simply tally up the interactions for each orbital. For example, consider a complex like hexaamminecobalt(III) chloride, [Co(NH3)6]Cl3. It has six sigma donor ligands, forming an octahedral structure. The total interactions with each orbital in this geometry would be calculated by totaling the interactions at all the ligand positions for each orbital.

Looking under the dz2 column and totaling only the values for positions 1 through 6, we find:

dz2: (1 + 1/4 + 1/4 + 1/4 + 1/4 + 1) eσ = 3eσ

A similar approach using the dx2-y2 column leads to:

dx2-y2: (0 + 3/4 + 3/4 + 3/4 + 3/4 + 0) eσ = 3eσ

However, the remaining three d orbitals have no interactions with the ligands in these six positions:

dxy: 0; dxz: 0; dyz: 0

So, we find that the dz2 and dx2-y2 orbitals are both raised in energy by 3eσ. At the same time, we know that the ligand donor orbitals are stabilized by their interaction with the metal orbitals. To see how much, we can tally up the interaction for each ligand at its position. That is, for the ligand in position 1, we would add in its interaction with each of the five d orbitals to determine the amount by which it is stabilized by bonding. We simply add up the values across that row.

Ligand in position 1: - (1 + 0 + 0 + 0 + 0) eσ = - eσ

Ligand in position 2: - (1/4 + 3/4 + 0 + 0 + 0) eσ = - eσ

Ligand in position 3: - (1/4 + 3/4 + 0 + 0 + 0) eσ = - eσ

Ligand in position 4: - (1/4 + 3/4 + 0 + 0 + 0) eσ = - eσ

Ligand in position 5: - (1/4 + 3/4 + 0 + 0 + 0) eσ = - eσ

Ligand in position 6: - (1 + 0 + 0 + 0 + 0) eσ = - eσ

We have now generated a diagram that looks very much like what we saw from ligand field theory. We see the familiar d orbital splitting diagram for octahedral geometry as well as stabilization of the ligand donor orbitals in sigma bonds.

[Image not described in source]

The results from the angular overlap model are somewhat simplified compared to the results from ligand field theory. For example, they completely neglect any interaction between ligand orbitals and metal s or p orbitals. However, this model allows a very straightforward calculation of the relative d orbital energy levels.

### Problems

1. Use the results of the calculation for the octahedral geometry to calculate the net stabilization due to bonding (in units of eσ) for the following complexes.

a) [Co(NH3)6]Cl3 (assume low spin) b) [Fe(NH3)6](NO3)3 (assume high spin)

c) [Ni(NH3)6]Cl2

2. Use the table of sigma interactions to calculate orbital energy stabilization or destabilization for the following geometries.

a) trigonal planar ML3 b) square planar ML4 c) trigonal bipyramidal ML5

**Solutions**

1.

[Image not described in source]

2. a) Positions 2, 11, 12.

dz2: (1/4 + 1/4 + 1/4) eσ = 3/4 eσ

dx2-y2: (3/4 + 3/16 + 3/16) eσ = 18/16 = 9/8 eσ

dxy: (0 + 9/16 + 9/16) eσ = 18/16 = 9/8 eσ

dxz: 0

dyz: 0

Ligand in position 2: - (1/4 + 3/4 + 0 + 0 + 0) eσ = - eσ

Ligand in position 11: - (1/4 + 3/16 + 9/16 + 0 + 0) eσ = - eσ

Ligand in position 12: - (1/4 + 3/16 + 9/16 + 0 + 0) eσ = - eσ

[Note: corrected; the source prints "(1/4 + 3/4 + 9/16" where this reads "(1/4 + 3/16 + 9/16". Position 12's row in the table is 1/4, 3/16, 9/16, 0, 0.]

b) Positions 2, 3, 4, 5.

dz2: (1/4 + 1/4 + 1/4 + 1/4) eσ = eσ

dx2-y2: (3/4 + 3/4 + 3/4 + 3/4) eσ = 3 eσ

dxy: 0

dxz: 0

dyz: 0

Ligand in position 2: - (1/4 + 3/4 + 0 + 0 + 0) eσ = - eσ

Ligand in position 3: - (1/4 + 3/4 + 0 + 0 + 0) eσ = - eσ

Ligand in position 4: - (1/4 + 3/4 + 0 + 0 + 0) eσ = - eσ

Ligand in position 5: - (1/4 + 3/4 + 0 + 0 + 0) eσ = - eσ

c) Positions 1, 2, 6, 11, 12.

dz2: (1 + 1/4 + 1+ 1/4 + 1/4) eσ = 11/4 eσ

dx2-y2: (0 + 3/4 + 0 + 3/16 + 3/16) eσ = 18/16 = 9/8 eσ

dxy: (0 + 0 + 0 + 9/16 + 9/16) eσ = 18/16 = 9/8 eσ

dxz: 0

dyz: 0

Ligand in position 1: - (1 + 0 + 0 + 0 + 0) eσ = - eσ

Ligand in position 2: - (1/4 + 3/4 + 0 + 0 + 0) eσ = - eσ

Ligand in position 6: - (1 + 0 + 0 + 0 + 0) eσ = - eσ

Ligand in position 11: - (1/4 + 3/16 + 9/16 + 0 + 0) eσ = - eσ

Ligand in position 12: - (1/4 + 3/16 + 9/16 + 0 + 0) eσ = - eσ

[Note: corrected; the source prints "(1/4 + 3/4 + 9/16" where this reads "(1/4 + 3/16 + 9/16". Position 12's row in the table is 1/4, 3/16, 9/16, 0, 0.]

## 10.4.2: Pi Acceptors in the Angular Overlap Model

So far, we have considered only the effects of sigma donation on the d orbital splitting diagram using the angular overlap model. When we looked at ligand field theory, we saw that pi-donor and pi-acceptor effects produced significant changes in these diagrams. We generally see these effects in any ligands that have orbitals that can accept electron density from the metal (back-bonding). The paradigm of a pi acceptor is carbon monoxide, of course. Similar effects can be found in related ligands in which the donor atoms participate in pi bonding with another atom in the ligand, thus making a pi* orbital available for back-bonding. In addition, back-bonding is a feature of phosphine ligands and some N-heterocyclic carbenes.

We usually think about this interaction as illustrated below. The empty ligand orbital approaches so that it is perpendicular to the bond axis, allowing overlap with the filled metal d orbital. The interaction lowers the energy of the d electrons, which become bonding in nature, and raises the energy of the empty ligand orbital.

[Image not described in source]

We can use the same ligand positions for pi acceptors that we already used for sigma donors. The orbitals will be oriented differently than the sigma donor orbitals but they will approach from the same directions.

[Note: corrected; the source prints "directions.." where this reads "directions.". A typing error.]

[Image not described in source]

As before, we can use the results of calculations of the strengths of these interactions based on the amount of overlap; we don't need to know exactly how the numbers in the table below came about. This time, the maximum overlap occurs between a dxz orbital and a p orbital approaching in position 1, perpendicular to the bond axis. Several other combinations will be equally strong. This time, the stabilization is expressed in terms of eπ rather than eσ. The amount of energy in this case is somewhat smaller than in sigma donation because of a lesser degree of metal-ligand orbital overlap.

[Note: corrected; the source prints "rather that eσ" where this reads "rather than eσ". A typing error.]

Pi Interactions of Ligands with Metal d Orbitals (units of eπ)

[Note: corrected; the source prints "Sigma Interactions" where this reads "Pi Interactions". This table gives the pi interactions, in units of eπ.]

| Ligand Positions | dz2 | dx2-y2 | dxy | dxz | dyz |
| --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 2 | 0 | 0 | 1 | 1 | 0 |
| 3 | 0 | 0 | 1 | 0 | 1 |
| 4 | 0 | 0 | 1 | 1 | 0 |
| 5 | 0 | 0 | 1 | 0 | 1 |
| 6 | 0 | 0 | 0 | 1 | 1 |
| 7 | 2/3 | 2/3 | 2/9 | 2/9 | 2/9 |
| 8 | 2/3 | 2/3 | 2/9 | 2/9 | 2/9 |
| 9 | 2/3 | 2/3 | 2/9 | 2/9 | 2/9 |
| 10 | 2/3 | 2/3 | 2/9 | 2/9 | 2/9 |
| 11 | 0 | 3/4 | 1/4 | 1/4 | 3/4 |
| 12 | 0 | 3/4 | 1/4 | 1/4 | 3/4 |

These interactions modify the picture we built previously for simple sigma donors. In the new interaction diagram, a second set of ligand p orbitals is destabilized by the pi interaction. At the same time, some of the d orbitals are stabilized by the additional interaction. This modification is illustrated below for octahedral geometry.

[Image not described in source]

### Problems

1. Use the table of pi interactions to calculate orbital energy stabilization or destabilization for the following geometries.

a) trigonal planar ML3 b) square planar ML4 c) trigonal bipyramidal ML5

**Solutions**

1. a) Positions 2, 11, 12.

dz2: 0

dx2-y2: - (0 + 3/4 + 3/4) eπ = 6/4 = - 3/2 eπ

dxy: - (1 + 1/4 + 1/4) eπ = 6/4 = - 3/2 eπ

[Note: corrected; the source prints "eσ = 6/4" where this reads "eπ = 6/4". These are pi interactions, in units of eπ.]

dxz: - (1 + 1/4 + 1/4) eπ = 6/4 = - 3/2 eπ

[Note: corrected; the source prints "eσ = 6/4" where this reads "eπ = 6/4". These are pi interactions, in units of eπ.]

dyz: - (0 + 3/4 + 3/4) eπ = 6/4 = - 3/2 eπ

[Note: corrected; the source prints "eσ = 6/4" where this reads "eπ = 6/4". These are pi interactions, in units of eπ.]

Ligand in position 2: (0 + 0 + 1 + 1 + 0) eπ = 2eπ

[Note: corrected; the source prints "(0 + 0 + 0 + 1 + 1) eπ = 2eπ" where this reads "(0 + 0 + 1 + 1 + 0) eπ = 2eπ". Position 2's row in the pi table is 0, 0, 1, 1, 0 (the row printed is position 1's); the total is the same.]

Ligand in position 11: (0 + 3/4 + 1/4 + 1/4 + 3/4) eπ = 2eπ

Ligand in position 12: (0 + 3/4 + 1/4 + 1/4 + 3/4) eπ = 2eπ

b) Positions 2, 3, 4, 5.

dz2: 0

dx2-y2: 0

dxy: - (1 + 1 + 1 + 1) = -4 eπ

dxz: - (1 + 0 + 1 + 0) = -2 eπ

dyz: - (0 + 1 + 0 + 1) = -2 eπ

Ligand in position 2: (0 + 0 + 1 + 1 + 0) eπ = 2 eπ

Ligand in position 3: (0 + 0 + 1 + 0 + 1) eπ = 2 eπ

Ligand in position 4: (0 + 0 + 1 + 1 + 0) eπ = 2 eπ

Ligand in position 5: (0 + 0 + 1 + 0 + 1) eπ = 2 eπ

c) Positions 1, 2, 6, 11, 12.

dz2: 0

dx2-y2: - (0 + 0 + 0 + 3/4 + 3/4) eπ = -3/2 eπ

dxy: - (0 + 1 + 0 + 1/4 + 1/4) eπ = -3/2 eπ

dxz: - (1 + 1 + 1 + 1/4 + 1/4) eπ = -7/2 eπ

dyz: - (1 + 0 + 1 + 3/4 + 3/4) eπ = -7/2 eπ

[Note: corrected; the source prints "3/4 + 4/4" where this reads "3/4 + 3/4". Position 12's dyz value is 3/4, which gives the −7/2 eπ total.]

Ligand in position 1: (0 + 0 + 0 + 1 + 1) eπ = 2 eπ

Ligand in position 2: (0 + 0 + 1 + 1 + 0) eπ = 2 eπ

Ligand in position 6: (0 + 0 + 0 + 1 + 1) eπ = 2 eπ

Ligand in position 11: (0 + 3/4 + 1/4 + 1/4 + 3/4) eπ = 2 eπ

Ligand in position 12: (0 + 3/4 + 1/4 + 1/4 + 3/4) eπ = 2 eπ

## 10.4.3: Pi Donors in the Angular Overlap Model

Ligands in which the donor atom has more than one lone pair are capable of pi donation to the metal. Common examples include halide and alkoxide ligands. The overlap question in this case is exactly the same as in the case of pi acceptors; the same table of interactions applies here. However, since the ligand electrons are forming the pi bond in this case, the ligand electrons are stabilized and the d orbitals with which they overlap are destabilized.

[Image not described in source]

In octahedral geometry, for example, we see the off-axis d orbitals raised modestly in energy in the presence of pi donor ligands. The angular overlap model allows us to quantify the relative changes in energy because of these ligand interactions.

[Image not described in source]

#### Example 10.4.3.1

Confirm the stabilization and destabilization of orbitals due to pi donation in the octahedral interaction diagram shown above.

**Solution**

Positions 1, 2, 3, 4, 5, 6.

- dz2: 0
- dx2-y2: 0
- dxy: (0 + 1 + 1 + 1 + 1 + 0) = 4 eπ
- dxz: (1 + 1 + 0 + 1 + 0 + 1) = 4 eπ
- dyz: (1 + 0 + 1 + 0 + 1 + 1) = 4 eπ
- Ligand in position 1: (0 + 0 + 0 + 1 + 1) eπ = 2 eπ
- Ligand in position 2: (0 + 0 + 1 + 1 + 0) eπ = 2 eπ
- Ligand in position 3: (0 + 0 + 1 + 0 + 1) eπ = 2 eπ
- Ligand in position 4: (0 + 0 + 1 + 1 + 0) eπ = 2 eπ
- Ligand in position 5: (0 + 0 + 1 + 0 + 1) eπ = 2 eπ
- Ligand in position 6: (0 + 0 + 0 + 1 + 1) eπ = 2 eπ

## 10.4.4: The Spectrochemical Series

The spectrochemical series was determined through an examination of the absorption spectra of a series of octahedral Co(III) complexes by Tsuchida in the 1930's. The position of the d-d absorption band is influenced by the field strength of the ligand, which leads to greater or lesser values of Δo. That interaction depends on both the relative energies of the metal and ligand orbitals and the degree of overlap between these orbitals. The closer in energy the two orbitals are to each other, the greater the interaction. Also, the greater the overlap between the two orbitals, the greater the interaction.

Recall that sigma donors simply donate a lone pair to the metal but do not have additional metal-ligand interactions. The classic example is ammonia. The nitrogen in ammonia has only one lone pair to donate and is a simple sigma donor. Ethylenediamine, NH2CH2CH2NH2 (en), is also a sigma donor because it has a single lone pair on each nitrogen atom. The en ligand is a slightly stronger sigma donor than ammonia. The difference is explained by the slightly stronger basicity of en compared to ammonia; the nitrogen lone pairs in en are better donors to both protons and metal ions.

en > NH3 (basicity)

The common pi donors include the halides and some oxygen donors. In these cases, the donor atom has an additional lone pair (or more) which may engage in formation of a pi bond by donation to a metal d orbital. Among the halides, fluoride produces the largest field splitting and iodide the smallest. This trend is also explained in terms of the relative basicity of these halides; fluoride is more basic than bromide. In addition, there is also understood to be better overlap between fluorine's p orbital and the d acceptor of a positively charged metal ion, compared to larger halides such as iodine.

F- > Cl- > Br- > I- (basicity)

Oxygen donors do not follow this basicity trend. Hydroxide is thought to act as a better pi donor than water, partly because of its negative charge. A carboxylate ligand is not quite as strong a pi donor as hydroxide, probably because its lone pair is delocalized into the carbonyl group.

H2O > RCO2- > HO- (pi donation anion vs neutral)

[Note: corrected; the source prints "H20 >" where this reads "H2O >". Water, H2O.]

The pi acceptors include familiar examples such as carbon monoxide (carbonyl ligand) as well as the aromatic phenanthroline.

CO > -CN > phenanthroline > NO2- > SCN-

The phenanthroline may be an unfamiliar ligand. It is an aromatic amine, like pyridine. Other aromatic ligands, if they donate through a lone pair such as a phenyl, C6H5^-, can also be considered pi acceptors. These compounds feature a pi bond that includes the donor atom, so there is a pi* orbital at that position capable of undergoing back-donation from the metal.

[Image not described in source]

Again, there are subtle variations among the field strengths exhibited by these pi acceptors, and there may be several factors contributing to those differences. For example, the cyanide is only slightly weaker field than the isoelectronic carbon monoxide. That small difference may be due to the negative charge on the cyanide rendering it a weaker electron acceptor. On the other hand, phenanthroline is neutral, but it is still a weaker donor than carbon monoxide. That weaker field may be due to the smaller lobe on the nitrogen atom in the pi* orbital in phenanthroline. Because nitrogen is more electronegative than carbon, it makes a greater contribution to the C=N pi bonding orbital than carbon; the opposite is true in the antibonding orbital. Carbon monoxide, in contrast, features a larger lobe on carbon in its pi* orbital. The result is better metal-ligand pi overlap with carbon monoxide than with phenanthroline.

Phosphines are also commonly considered to be pi acceptors, for subtle reasons that have been subject to some debate.1

[Image not described in source]

All three of these series can be collated to arrive at a combined list, which is a more complete spectrochemical series. Note that there may be some overlap between the different types of donors. Nevertheless, the overall trend holds: pi acceptors lead to the greatest field splitting on average, whereas pi donors lead to the smallest.

[Note: corrected; the source prints "di donors" where this reads "pi donors". A typing error.]

[Image not described in source]

#### Example 10.4.4.1

Some additional common ligands are displayed according to field strength, below. Classify these ligands as pi donors, sigma donors, or pi acceptors.

[Image not described in source]

**Solution**

PPh3, based on its structure, appears to be a sigma donor only because it has just one lone pair on the donor atom. However, phosphines tend to behave as pi acceptors; that is, they appear to withdraw some electron density from the metal as indicated by the response of reporter ligands such as CO.

[Note: corrected; the source prints "Ph3, based" where this reads "PPh3, based". The ligand is triphenylphosphine, PPh3.]

Bpy, py and CH3CN (acetonitrile) all appear to be pi acceptors. Like phen, they behave as weak pi acceptors.

Acac, oxide, oxalate and sulfide are all pi donors. The donor atom in each case has a lone pair in addition to the sigma donor pair.

### References

1. Wolczanski, P. T. "Flipping the Oxidation State Formalism: Charge Distribution in Organometallic Complexes as Reported by Carbon Monoxide". Organometallics 2017, 36, 622-631.

## 10.4.5: The Magnitude of Parameters eσ, eπ and Δ

In the angular overlap model (AOM), the field splitting, Δ, can be shown to result from a combination of the interaction parameters eσ and eπ. For example, in octahedral geometry,

Δ = 3 eσ − 4 eπ

in which the value of eπ is positive for a pi donor but negative for a pi acceptor.

The magnitude of these parameters varies from one complex to another. As we have seen previously in examination of ligand field theory, both the metal ion and the identity of the ligand play a role in determining the magnitude of the field splitting. As outlined in the previous section on ligand field theory, the identity of the metal influences the d orbital splitting. Even for the same element, an increase in charge translates into a significant increase in the splitting parameter. For this reason, aqueous Co(II) ion is high spin, whereas the aqueous Co(III) ion is low spin.

[Image not described in source]

The spectrochemical series tells us that the ligands also play a major role in determining the magnitude of the field splitting, with pi donors producing a smaller splitting than pi acceptors. The splitting produced by an aquo ligand is much smaller than that produced by a cyano ligand, for example.

[Note: corrected; the source prints "than the produced by" where this reads "than that produced by". A typing error.]

[Image not described in source]

Spectroscopic data can be used to determine the parameters eσ and eπ. A series of examples for different ligands coordinated to the Cr^3+ ion are outlined in Table 10.4.5.1.

[Note: corrected; the source prints "are outlines in" where this reads "are outlined in". A typing error.]

Table 10.4.5.1: Angular Overlap Parameters in Octahedral Cr(III) Complexes^1

| Ligand | eσ | eπ | Δ (cm-1) |
| --- | --- | --- | --- |
| π acceptors |  |  |  |
| -CN | 7,530 | -930 | 26,310 |
| pyridine | 6,150 | -330 | 19,770 |
| σ donors |  |  |  |
| en | 7,260 | assumed 0 | 21,780 |
| NH3 | 7,180 | assumed 0 | 21,540 |
| π donors |  |  |  |
| HO- | 8,600 | 2,150 | 17,200 |
| H2O | 7,550 | 1,850 | 15,250 |
| F- | 8,200 | 2,000 | 16,600 |
| Cl- | 5,700 | 980 | 13,180 |
| Br- | 5,380 | 950 | 12,430 |
| I- | 4,100 | 670 | 9,620 |

[Note: With Δ = 3eσ − 4eπ, the Br- row gives 3(5,380) − 4(950) = 12,340 cm^-1, not 12,430; every other row agrees with the formula. Which figure is misprinted isn't known, so the row is left as printed.]

It is worth noting that the parameters observed for Cr(III), although mostly consistent with the spectrochemical series, are not identical to those seen in Co(III). In particular, the places of water and hydroxide are switched in the series. Once again, the identity of the metal plays a role in the strength of interaction with the ligand, and certain ligands may be observed to interact more strongly with some metals than with others.

#### Example 10.4.5.1

Calculate Δ for tetrahedral Ni^2+ when coordinated with the following ligands, given the parameters eσ and eπ.^1

a. PPh3 with eσ = 5,000 cm^−1 and eπ = −1,750 cm^−1
b. Cl^- with eσ = 3,900 cm^−1 and eπ = 1,500 cm^−1
c. Br^- with eσ = 3,600 cm^−1 and eπ = 1,000 cm^−1

[Note: corrected; the source prints "eπ = −1,000 cm^−1" where this reads "eπ = 1,000 cm^−1". Bromide is a pi donor, so eπ is positive, and the solution uses 4(1,000).]

**Solution**

This question is a direct application of the equation for Δ above:

[Note: corrected; the source prints "Equation (eq1)" where this reads "the equation for Δ above". The source's cross-reference is broken.]

a. PPh3: Δ = 3 eσ − 4 eπ; = 3(5,000) − 4(−1,750)cm^−1; = 22,000 cm^−1.
b. Cl^-: Δ = 3(3,900) − 4(1,500); = 5,700 cm^−1.
c. Br^-: Δ = 3(3,600) − 4(1,000); = 6,800 cm^−1.

[Note: The solution applies the octahedral expression Δ = 3eσ − 4eπ, although the question is about tetrahedral Ni^2+; for tetrahedral geometry the angular overlap model gives Δ_t = (4/3)eσ − (16/9)eπ, 4/9 of these values. The text is left as printed.]

#### Example 10.4.5.2

AOM parameters eσ were calculated from spectroscopic data for a series of bidentate nickel complexes with octahedral geometry, Ni(en')2(NCS)2.^2

- en' = H2NCH2CH2NH2 with eσ = 4,010 cm-1
- en' = (CH3)2NCH2CH2N(CH3)2 with eσ = 3,165 cm-1
- en' = (CH3CH2)2NCH2CH2NH2 with eσ = 2,485 cm-1 (-NEt2); eσ = 4,650 cm-1 (-NH2)

Explain the reasons for the differences in the eσ values.

**Solution**

Greater steric hindrance appears to decrease the interaction between the sigma donor and the metal. Thus, the magnitude of eσ decreases from the least hindered -NH2 group to the most hindered NEt2 group.

### References

1. Figgis, B. N.; Hitchman, M. A. Ligand Field Theory and Its Applications. Wiley-VCH: New York, 2000, p. 71.
2. Lever, A. B. P.; Walker, I. M.; McCarthy, P. J.; Mertes, K. B.; Jircitano, A.; Sheldon, R. "Crystallographic and Spectroscopic Studies of Low-Symmetry Nickel(II) Complexes Possessing Long Nickel-Nitrogen Bonds", Inorg. Chem. 1983, 22, 2252-8.

[Note: corrected; the source prints "Ling Nickel" where this reads "Long Nickel". The paper's title has "Long".]

## 10.4.6: The Magnetochemical Series

The relative strengths of metal-ligand binding interactions distilled into the spectrochemical series depend on an inference drawn from the difference between the ground and excited states. In contrast, the magnetochemical series offers similar information based solely on observation of the ground state. These observations are possible in iron(III) porphyrin complexes because of a subtle change in spin state that occurs upon substitution of the axial position with different ligands. The result is a series analogous to the spectrochemical series that is called the magnetochemical series. This series was developed chiefly by the lab of Christopher Reed at University of Southern California and University of California, Riverside.1

[Image not described in source]

There are two unusual things that happen with these porphyrin complexes that allow measurement of metal-ligand interactions in this way. A distortion that occurs in the weak field case of these square pyramidal complexes results in spin pairing in the weak field configuration rather than the high field case. Also, in these porphyrin complexes, a quantum mechanical admixture occurs in which the 5/2 and 3/2 states exist in superposition with each other. As a result, the spin state in these complexes is often intermediate between these two cases.

[Image not described in source]

One additional feature makes these porphyrin complexes quite useful in measuring a magnetochemical series. Paramagnetic complexes produce dramatic shifts in nuclear magnetic resonance spectroscopy. In this case, the hydrogen atoms of the 5-membered pyrrole rings in the porphyrin system shift from about -60 ppm in the S = 3/2 case to about +80 ppm in the S = 5/2 case. In the case of a quantum admixture, the shift ranges in between these two limiting values. This NMR shift can be used to compare the field strength of the axial ligand.

An array of experiments eventually led to a magnetochemical series. Example ligands from this series are shown in order here, from strong field to weak field:

[Note: corrected; the source prints "eventually lead" where this reads "eventually led". A typing error.]

NO^+ = CO > R3Sn^− > -CH3 > RS^− > F^− > -OPh > N3^− = -OAc > NCS^− > Cl^− = -OH > Br^− > I^−

In addition, this method has allowed the inclusion of several very weakly bound ligands. These can be appended to the series as follows:

I^− > ReO4^− > BF4^− > CF3SO3^− > ClO4^− > H2O > SbF6^− > CB11H12^−

Note the unusual position of water, which shows up as a much lower field ligand than in the Co(III) based spectrochemical series for octahedral complexes. The difference is thought to come from the low spin Co(III) vs. the usually high spin Fe(III). Pi bonding is less favourable in the latter case and so the order in the iron porphyrin complexes is more strongly reflective of sigma donating effects. The anionic hydroxide is a better sigma donor than water because of greater electrostatic attraction to the metal.

[Note: corrected; the source prints "spectrochemcial" where this reads "spectrochemical". A typing error.]

#### Example 10.4.6.1

Organometallic ligands such as -CH3 are not typically included in the spectrochemical series.

a. Characterize -CH3 in terms of ligand type (pi donor, sigma donor, pi acceptor).
b. Explain why it appears so high in the magnetochemical series compared to other anions such as F-.

**Solution**

a. -CH3 is a sigma donor.
b. The -CH3 anion would be extraordinarily basic. The pKa of CH4 is estimated to be approximately 50, compared to a pKa of approximately 4 for HF. The -CH3 anion is a very strong sigma donor.

### References

1. Reed, C.; Guiset, F. "Reversal of H2O and OH- Ligand Field Strength on the Magnetochemical Series Relative to the Spectrochemical Series. Novel 1-equiv Water Chemistry of Iron(III) Tetraphenylporphyrin Complexes." J. Am. Chem. Soc., 2000, 122, 3281-2.
