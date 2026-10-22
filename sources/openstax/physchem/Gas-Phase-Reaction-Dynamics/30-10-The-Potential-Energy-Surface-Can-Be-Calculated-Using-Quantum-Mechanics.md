---
title: "30.10: The Potential-Energy Surface Can Be Calculated Using Quantum Mechanics"
book: "Physical Chemistry (LibreTexts)"
chapter: "30: Gas-Phase Reaction Dynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/30%3A_Gas-Phase_Reaction_Dynamics/30.10%3A_The_Potential-Energy_Surface_Can_Be_Calculated_Using_Quantum_Mechanics"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

A potential energy surface (PES) describes the potential energy of a system, especially a collection of atoms, in terms of certain parameters, normally the positions of the atoms. The surface might define the energy as a function of one or more coordinates; if there is only one coordinate, the surface is called a potential energy curve or energy profile. It is helpful to use the analogy of a landscape: for a system with two degrees of freedom (e.g. two bond lengths), the value of the energy (analogy: the height of the land) is a function of two bond lengths (analogy: the coordinates of the position on the ground). The Potential Energy Surface represents the concept that each geometry (both external and internal) of the atoms of the molecules in a chemical reaction has associated with it a unique potential energy. This creates a smooth energy “landscape” and chemistry can be viewed from a topology perspective of particles evolving as they pass through potential energy "valleys" and "passes".

The PES concept finds application in fields such as chemistry and physics, especially in the theoretical sub-branches of these subjects. It can be used to theoretically explore properties of structures composed of atoms, for example, finding the minimum energy shape of a molecule or computing the rates of a chemical reaction.

## Potential Energy Curves (2-D Potential Energy Surfaces)

The energy of a system of two atoms depends on the distance between them. At large distances the energy is zero, meaning “no interaction”. At distances of several atomic diameters, attractive forces dominate, whereas at very close approaches the force is repulsive, causing the energy to rise. The attractive and repulsive effects are balanced at the minimum point in the curve. Plots that illustrate this relationship are quite useful in defining certain properties of a chemical bond (Figure 30.10.1).

Figure 30.10.1: A potential energy curve for the covalent bond in a H2 molecule. The distance r is the distance between the nuclei of the two H atoms. ( CC BY-NC; Ümit Kaya via LibreTexts)
Graph showing a red curve with two distinct sections, one decreasing and the other increasing, labeled with axes.

The internuclear distance at which the potential energy minimum occurs defines the bond length. This is more correctly known as the equilibrium bond length because thermal motion causes the two atoms to vibrate about this distance. In general, the stronger the bond, the smaller the bond length.

Attractive forces operate between all atoms, but unless the potential energy minimum is at least of the order of RT, the two atoms will not be able to withstand the disruptive influence of thermal energy long enough to result in an identifiable molecule. Thus we can say that a chemical bond exists between the two atoms in H2. The weak attraction between argon atoms does not allow Ar2 to exist as a molecule, but it does give rise to the van der Waals force that holds argon atoms together in their liquid and solid forms.

### Potential, Kinetic, and Total Energy for a System

Potential energy and kinetic energy quantum theory tell us that an electron in an atom possesses kinetic energy K as well as potential energy V, so the total energy E is always the sum of the two: E = V + K. The relation between them is surprisingly simple: K = −0.5V. This means that when a chemical bond forms (an exothermic process with ΔE < 0), the decrease in potential energy is accompanied by an increase in the kinetic energy (embodied in the momentum of the bonding electrons), but the magnitude of the latter change is only half as much, so the change in potential energy always dominates. The bond energy –ΔE has half the magnitude of the decrease in potential energy.

## Mathematical Definition and Computation of a Potential Energy Surface

The geometry of a set of atoms can be described by a vector, r, whose elements represent the atom positions. The vector r could be the set of the Cartesian coordinates of the atoms, or could also be a set of inter-atomic distances and angles. Given r, the energy as a function of the positions, V(r), is the value of V(r) for all values of r of interest. Using the landscape analogy from the introduction, V(r) gives the height on the "energy landscape" so that the concept of a potential energy surface arises. An example is the PES for water molecule (Figure 30.10.2) that shows the energy minimum corresponding to optimized molecular structure for water- O-H bond lengths of 0.0958 nm and H-O-H bond angle of 104.5°

Figure 30.10.2: PES for water molecule showing the energy minimum corresponding to optimized molecular structure for water- O-H bond lengths of 0.0958nm and H-O-H bond angle of 104.5°. of Wikipedia (Credit: Aimnature).
3D surface of energy against q1 = bond length (nm) and q2 = H-O-H bond angle, with its minimum marked at 0.0958 nm and 104.5°.

[Note: corrected; the source prints "3D graph showing a surface plot with axes labeled "Energy," "0.50000 m," and "194.5°" representing data points." where this reads "3D surface of energy against q1 = bond length (nm) and q2 = H-O-H bond angle, with its minimum marked at 0.0958 nm and 104.5°.". The image's alt text, machine-written, misreads the image; this describes it.]

### The Dimensionality of a Potential Energy Surface

To define an atom’s location in 3-dimensional space requires three coordinates (e.g., x, y,and z or r, θ and φ in Cartesian and Spherical coordinates) or degrees of freedom. However, a reaction and hence the corresponding PESs do not depend on the absolute position of the reaction, only the relative positions (internal degrees). Hence both translation and rotation of the entire system can be removed (each with 3 degrees of freedom, assuming non-linear geometries). So the dimensionality of a PES is

3N − 6

where N is the number of atoms involves in the reaction, i.e., the total number of atoms in all the reactants). The PES is a hypersurface with many degrees of freedom and typically only a few are plotted at any one time for understanding. See Calculate Number of Vibrational Modes to get a more detailed picture of how this applies to calculating the number of vibrations in a molecule

[Note: corrected; the source prints "i.e., the number of atoms in each reactant)" where this reads "i.e., the total number of atoms in all the reactants)". For H + H2, N = 3 gives the 3N − 6 = 3 coordinates (the three H–H distances) used below.]

To study a chemical reaction using the PES as a function of atomic positions, it is necessary to calculate the energy for every atomic arrangement of interest. Methods of calculating the energy of a particular atomic arrangement of atoms are well known. For very simple chemical systems or when simplifying approximations are made about inter-atomic interactions, it is sometimes possible to use an analytically derived expression for the energy as a function of the atomic positions. An example is

H + H2 → H2 + H

a system that is described by a function of the three H-H distances. For more complicated systems, calculation of the energy of a particular arrangement of atoms is often too computationally expensive for large-scale representations of the surface to be feasible.

## Applications of Potential Energy Surfaces

A PES is a conceptual tool for aiding the analysis of molecular geometry and chemical reaction dynamics. Once the necessary points are evaluated on a PES, the points can be classified according to the first and second derivatives of the energy with respect to position, which respectively are the gradient and the curvature. Stationary points (or points with a zero gradient) have physical meaning: energy minima correspond to physically stable chemical species and saddle points correspond to transition states, the highest energy point on the reaction coordinate (which is the lowest energy pathway connecting a chemical reactant to a chemical product).

### A Hypothetical Endothermic Reaction PES

Figure 30.10.3 shows an example of a PES for a hypothetical reaction system, with the corresponding 2-D energy contour map projected on the plane below. The contour map shows isolines of potential energy, using color to differentiate between high and low energies. In this figure, the highest potential energy is indicated with red, and as the color changes along the ROYGBIV scale, the potential energy decreases until violet is reached, indicating the lowest potential energy. In the PES, the z axis represents the potential energy, with the energy of the plane in the PES defined as 0 kJ. The color scheme of the PES has the same meaning as that of the 2-D contour map - red is high potential energy and violet is low potential energy.

Figure 30.10.3: A 2-D contour map and corresponding Potential Energy Surface for a hypothetical endothermic reaction. See the text for a detailed explanation. (CC BY-NC; Ümit Kaya via LibreTexts)
3D graph showing a colorful surface plot above with contour lines below, representing a mathematical function in three dimensions.

Before the reaction, the reactants are found at (or near) the energy minimum on the right. (The deep well in the PES and the smallest, violet oval in the contour map.) As the reaction proceeds, the reactants are shown following the minimum energy pathway toward the products, as designated by the dashed red line. The point "2" designates the transition state at the saddle point, the highest energy point of the reaction process. The reaction then moves on to form the products, which sit in the potential energy well on the left. (Designated by the shallower well on the PES and by the dark blue oval on the left in the contour map.) Because the potential energy of the reactants is less than the potential energy of the products, this reaction is an endothermic reaction. The point "1" represents a second, higher energy saddle point which is the transition state for an alternative reaction that is possible for this set of chemicals.

### The Exchange Reaction H_A + H_B H_C ⇒ H_A H_B + H_C

A specific application of a PES is the mapping of the reaction shown in equation (30.10.1), the exchange of hydrogen atoms in an H2 molecule. In this map, the individual H atoms are labeled as

HA + HB HC → HA HB + HC

We must take into account the collision angle between the HA atom and the HB HC molecule. If we fix this collision angle at 180°, we are able to plot a PES that is dependent on the two parameters of R_BC and R_AB. The resulting PES (figure 30.10.4a, right) and energy contour map (figure 30.10.4a, left) show us that if the particles are far enough apart, the potential energy of the reaction system starts out being described by the potential energy curve for the HB HC molecule, and ends up being described by the potential energy curve of the HA HB molecule. Individually, these curves both have appearances similar to the curve shown in Figure 30.10.1. The PES and the energy contour map show the symmetrical nature of the potential energy changes that occur in this exchange process that involves products that are equivalent to the reactants.

[Note: corrected; the source prints "The resulting PES (figure 30.10.4a) and energy contour map (figure 30.10.4b)" where this reads "The resulting PES (figure 30.10.4a, right) and energy contour map (figure 30.10.4a, left)". There is no Figure 30.10.4b; Figure 30.10.4a holds both panels.]

[Image: Contour plot with yellow shading on a beige background, featuring curved lines depicting gradients.]

Figure 30.10.4a: (left) The potential energy contour map for the exchange reaction HA + HB HC → HA HB + HC. The x-axis is R_AB, the interatomic distance between HA and HB. These two atoms begin very far apart, but end up being bonded together. The y-axis is R_BC, the interatomic distance between HB and HC. These two atoms start out bonded together but end up separated and far apart. The darker the color, the lower the potential energy. (right) The 3-D potential energy surface for the exchange reaction HA + HB HC → HA HB + HC. The darker the color, the lower the potential energy. (CC BY-NC; Ümit Kaya via LibreTexts)

As the HA atom more closely approaches the HB HC molecule, the interactions between these particles begin to affect the potential energy of the system. There are many possible potential energy pathways that the reaction could follow. Figure 30.10.5 shows the energy contour map for three possible reaction pathways:

Figure 30.10.5: An energy contour map showing three possible reaction pathways for the reaction HA + HB HC → HA HB + HC (CC BY-NC; Ümit Kaya via LibreTexts)
Contour plot with three dashed pathways, labeled 1 (green), 2 (blue) and 3 (red); a red dot marks the transition state on pathway 3.

[Note: corrected; the source prints "Contour plot with three marked points: red point 3 at the intersection of dashed green and blue lines, points 1 and 2 indicated nearby." where this reads "Contour plot with three dashed pathways, labeled 1 (green), 2 (blue) and 3 (red); a red dot marks the transition state on pathway 3.". The image's alt text, machine-written, misreads the image; this describes it.]

In pathway 1, the HB HC bond length R_BC is held constant as the distance R_AB decreases. This type of interaction would lead to a continually increasing potential energy for the system as the HA atom moves closer and closer to the HB HC molecule. Eventually, the new HA HB molecule would form, and the HC atom would break off and would move farther and farther away.

Pathway 2 shows a second possible reaction pathway in which the HB HC bond length R_BC increases even though the HA atom is still relatively far away. This pathway is unlikely because it requires a great deal of potential energy to stretch the HB HC bond before the attractive force from the HA atom influences this bond lengthening.

As the particles travel along Pathway 3, the reactants still must pass through a potential energy maximum at the saddle point, but this local maximum is the lowest energy barrier separating reactants from products. As noted above, this saddle point is called the transition state structure (designated by the red dot in pathway 3). This is the structure that is equally poised to return to the reactants or move forward to form products. Pathway 3 is the minimum energy pathway, and thus the one most likely to be followed during a successful reaction.

It is sometimes useful to create energy contour maps that include information about the vibrational state of reactants and products, as shown in figure 30.10.6.

Figure 30.10.6: Four possible collision outcomes for the exchange reaction HA + HB HC → HA HB + HC. 6A) The minimum energy pathway which leads to a successful exchange. 6B) The successful collision of a vibrating HB HC molecule with an HA atom, resulting in the formation of a vibrating HA HB molecule. 6C) The approach of an HA atom to a non-vibrating, slow-moving HB HC molecule that has insufficient kinetic energy to escape the potential energy well, leading to an unsuccessful exchange reaction. 6D) The approach of an HA atom to a vibrating, slow-moving HB HC molecule that has insufficient kinetic energy to escape the potential energy well, leading to an unsuccessful exchange reaction. (CC BY-NC; Ümit Kaya via LibreTexts)
Four contour plots labeled A to D, showing varying paths and points within a dynamic system with highlighted trajectories.

### The Exchange Reaction F + D2 ⇒ DF + D

When modeling the potential energy for the reaction

F(g) + D2(g) → DF(g) + D(g)

it is useful to differentiate between the two deuterium atoms, so we can designate them as DA and DB. Doing so allows us to determine how the potential energy of the pre-reaction system is affected by the F to DA distance R_(DA F) and the DA to DB distance R_(DA DB) (figure 30.10.7).

Figure 30.10.7: Defining the distances R_(DA F) and R_(DA DB) (CC BY-NC; Ümit Kaya via LibreTexts)
Three atoms in a line, F and then D_A bonded to D_B, with the distances R_(DA F) and R_(DA DB) labeled.

[Note: corrected; the source prints "Diagram showing two spheres (D_A and D_B) connected by a line, with a force (F) acting and distances labeled (R_DF, R_DA, R_DB)." where this reads "Three atoms in a line, F and then D_A bonded to D_B, with the distances R_(DA F) and R_(DA DB) labeled.". The image's alt text, machine-written, misreads the image; this describes it. F is the fluorine atom.]

As the F atom more closely approaches the D2 molecule, the interactions between these particles begin to affect the potential energy of the system. There are many possible potential energy pathways that the reaction could follow. Figure 30.10.8 shows the energy contour map for three possible reaction pathways:

Figure 30.10.8: Three possible reaction pathways for the F(g) + D2(g) → DF(g) + D reaction. (CC BY-NC; Ümit Kaya via LibreTexts)

In pathway 1, the D2 bond length R_(DA DB) is held constant as the distance R_(DA F) decreases. This type of interaction would lead to a continually increasing potential energy for the system as the F atom moves closer and closer to the D2 molecule. Eventually, the new DA F molecule would form, and the DB atom would break off and would move farther and farther away.

Pathway 2 shows a second possible reaction pathway in which the D2 bond length R_(DA DB) increases even though the F atom is still relatively far away. This pathway is unlikely because it requires a great deal of potential energy to stretch the D2 bond before the attractive force from the F atom influences this bond lengthening.

As the particles travel along Pathway 3, the reactants still must pass through a potential energy maximum at the saddle point, but this local maximum is the lowest energy barrier separating reactants from products. As noted above, this saddle point is called the transition state structure (designated by the red dot in pathway 3, labeled as 3^(‡)). This is the structure that is equally poised to return to the reactants or move forward to form products. Pathway 3 is the minimum energy pathway, and thus the one most likely to be followed during a successful reaction.

If we were to plot the potential energy curve for the reaction pathway along the minimum energy pathway, we would get the familiar potential energy curve of a reaction similar to that shown in Figure 30.10.9.

Figure 30.10.9: This graph shows the potential energy relationships for the reaction F + D2 ⟶ DF + D. The activation energy for the forward reaction is about 6 kJ/mol. The difference in potential energy between the reactants and the products is De(D2) − De(DF). The curve’s peak represents the transition state. ( CC BY-NC; Ümit Kaya via LibreTexts)
Graph depicting energy changes during a chemical reaction, showing a decrease from reactants to products along a reaction coordinate.

## Contributors and Attributions

- Wikipedia
- Stephen Lower, Professor Emeritus (Simon Fraser U.) Chem1 Virtual Textbook
- Tom Neils, Grand Rapids Community College
