---
title: "30.5: A Reactive Collision Can Be Described in a Center-of-Mass Coordinate System"
book: "Physical Chemistry (LibreTexts)"
chapter: "30: Gas-Phase Reaction Dynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/30%3A_Gas-Phase_Reaction_Dynamics/30.05%3A_A_Reactive_Collision_Can_Be_Described_in_a_Center-of-Mass_Coordinate_System"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

We will apply a center-of-mass coordinate system to the bimolecular reaction of ideal gases

B(g) + Q(g) → F(g) + G(g)

to develop an improved model for reaction kinetics that produces theoretical values that more closely represent experimental results. In this model, the reactant molecules will travel at velocities v⃗B and v⃗Q before the collision. The product molecules will travel at velocities v⃗F and v⃗G after the collision.

## The Velocity and Kinetic Energy of the Center of Mass

The center of mass of two objects must lie along a straight line drawn between the centers of the two objects. Because the two molecules are heading toward each other, the line between them will be changing in size and can be best represented with the vector, r⃗, where r⃗ = r⃗B − r⃗Q. The pre-reaction center of mass, R is defined as

R = (mB rB + mQ rQ)/M

where mB and mQ are the masses of the individual reactants, and M is the total mass, mB + mQ.

Velocity is (dr⃗)/dt, and so the velocity of the center of mass, v⃗_cm is

v⃗_cm = (mB v⃗B + mQ v⃗Q)/M

The kinetic energy of the reacting system is

KE_react = (1/2)mB vB^2 + (1/2)mQ vQ^2

This equation can be rewritten as

KE_react = (1/2)Mv_cm^2 + (1/2)μvr^2

Here, μ is the reduced mass and the realtive speed of the colliding particles is vr = |v⃗r| = |v⃗B − v⃗Q|. Because we are assuming we have ideal gases, KE_react is a constant for the center of mass.

[Note: corrected; the source prints "vr = |v⃗r| = |v⃗B|−|v⃗Q|" where this reads "vr = |v⃗r| = |v⃗B − v⃗Q|". The relative speed is the magnitude of the difference of the velocities, not the difference of the speeds.]

## The Reaction

As shown in equation (30.5.1), the kinetic energy of the moving reactants consists of two parts, one due to the relative motion of the two reactant particles, and one due to the motion of the center of mass. The energy due to the motion of the center of mass will not contribute to the reaction, as will soon be shown. Only the energy due to the relative motion of the reacting molecules (1/2)μvr^2 will contribute to overcoming the energy barrier of the energy of the reaction. And only a fraction of that energy will contribute because the molecules are not colliding head-on. Figure 30.5.1 gives a view of the progress of the reaction at several times.

Figure 30.5.1: A diagram showing the progress of a reaction collision occurring along the path of the center of mass as time passes. The velocity of the center of mass remains constant at all times. The energy that can be contributed towards the reaction by each reactant particles is the component of its own velocity that is co-linear with the collision direction. As shown by Equation (30.5.1), this energy contribution of the reacting particles is combined in the term (1/2)μvr^2. (CC BY-NC; Ümit Kaya via LibreTexts)
Diagram illustrating the motion of particles around a center of mass, with labeled velocity vectors and mass points.

### Removing the Center of Mass Term

Once F and G have formed, the post-reaction center of mass, R is defined as

R = (mF r⃗F + mG r⃗G)/M

where mF and mG are the masses of the individual products, and M is the total mass, mF + mG. That means that the velocity of the center of mass, v⃗_cm is

[Note: corrected; the source prints "the masses of the individual reactants" where this reads "the masses of the individual products". F and G are the products.]

v⃗_cm = (mF v⃗F + mG v⃗G)/M

The kinetic energy of the reacting system is

KE_react = (1/2)mF vF^2 + (1/2)mG vG^2

This equation can be rewritten as

KE_react = (1/2)Mv_cm^2 + (1/2)μP v_Pr^2

Because the products have different individual masses than the reactants, the reduced mass μP and the relative speed v_Pr of the products must be denoted as having different values from those of the reactants. The total mass is conserved, however, as is v⃗_cm, the velocity of the center of mass. Because linear momentum must be conserved,

mB v⃗B + mQ v⃗Q = mF v⃗F + mG v⃗G = Mv⃗_cm

Because mass is conserved and velocity of the center of mass is constant, the energy contribution of the motion of the center of mass is also constant, and thus does not contribute to the kinetic energy used to attain a successful reaction collision.

### Estimating the Total Internal Energy

Using the center of mass model for a reaction, we have found the kinetic energy terms for the reactants, (1/2)μvr^2, and products, (1/2)μP v_Pr^2. Thus the law of conservation of energy tells us

E_Reactant_(internal) + (1/2)μvr^2 = E_Product_(internal) + (1/2)μP v_Pr^2

This relationship can be rewritten as

E_Reactant_(internal) + E_Reactant_(translational) = E_Product_(internal) + E_Product_(translational)

or

E_R_(int) + E_R_(trans) = E_P_(int) + E_P_(trans)

The velocity of the products can be defined based on the laws of conservation of energy and momentum. Unfortunately, the angle between the velocity vector of the reactants v⃗r and the velocity vector of the products v⃗_Prcannot be determined because products molecules can theoretically disperse from the collision in any direction.
