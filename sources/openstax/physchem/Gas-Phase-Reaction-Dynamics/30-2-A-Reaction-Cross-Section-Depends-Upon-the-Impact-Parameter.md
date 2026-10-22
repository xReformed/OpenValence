---
title: "30.2: A Reaction Cross Section Depends Upon the Impact Parameter"
book: "Physical Chemistry (LibreTexts)"
chapter: "30: Gas-Phase Reaction Dynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/30%3A_Gas-Phase_Reaction_Dynamics/30.02%3A_A_Reaction_Cross_Section_Depends_Upon_the_Impact_Parameter"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

In the previous section, it was assumed that all collisions with sufficient energy would lead to a reaction between the Q and B particles. This is an unrealistic assumption because not all collisions occur with a proper alignment of the particles as shown in Figure 30.2.1.

Figure 30.2.1: In the top collision, the particles collide head-on, and thus all of the kinetic energy can be used to overcome electron-electron repulsion and to break bonds. In the bottom collision, the particles collide with a glancing blow so that only part of the kinetic energy is contributed to the reaction process. With collisions involving larger, more complex molecules, there is often a specific molecular orientation required for an effective collision. (CC BY-NC; Ümit Kaya via LibreTexts)
Illustration showing two pairs of spheres, one gray and one orange, with arrows showing each pair moving toward a collision.

[Note: corrected; the source prints "with arrows indicating movement toward and away from each other." where this reads "with arrows showing each pair moving toward a collision.". The image's alt text, machine-written, misreads the image; this describes it.]

Thus, the energy-dependent reaction cross-section,σr(Er), introduced previously is inaccurate and must be modified to take into account the inefficient collisions. One modification is to employ the line-of-centers (loc) model for σr(Er). This model incorporates the angle of collision relative to the line drawn between the centers of the two colliding particles, as shown in Figure 30.2.2.

Figure 30.2.2: This figure shows the geometry of the collision between two particles. The particle velocities are v⃗Q and v⃗B. The distance between the paths traveled by the two particle centers is b. (CC BY-NC; Ümit Kaya via LibreTexts)
Diagram showing two spheres labeled Q and B, with distances and vectors indicated, illustrating a physical interaction.

In this model, and effective collision occurs when E_loc > E0 where E_loc takes into account the fact that all particle collisions are not head-on collisions. If we define v_r as the relative velocity of approach of particles Q and B, then v_r = v⃗Q − v⃗B. The relative kinetic energy, Er, is then (1/2)μvr^2. From Figure 30.2.2 we can see that the fraction of Er that can be applied to the collision, (E_loc), is dependent upon b, the impact parameter, which is the perpendicular distance between the extrapolated paths traveled by the centers of the particles before the collision occurs. If b is 0, then E_loc = Er, but for any other value of b, E_loc < Er. If b is greater than the sum of the radii of Q and B, the particles will not collide, and E_loc = 0. The calculation for determining the exact relationship between the σr(Er) and Er for this line of center model rather complicated, but the result is that σr(Er) is equal to 0 if Er < E0 and is equal to σ_QB(1 − (E0)/(Er)) if Er ≥ E0.

When compared to the simple hard-sphere collision theory, we see that

σr(Er) = σ_QB if Er ≥ E0 (hard-sphere theory)

σr(Er) = σ_QB(1 − (E0)/(Er)) if Er ≥ E0 (line of centers theory)

If we substitute Equation (30.2.2) into Equation 30.1.4 we get

k = (2/(kB T))^(3/2)(1/(μπ))^(1/2)∫_E0^∞ dEr Er e^(−Er/kB T)σ_QB(1 − (E0)/(Er))

= ((8 kB T)/(μπ))^(1/2)σ_QB e^(−E0/kB T)

[Note: corrected; the source prints "e^(−Er/kB T)" where this reads "e^(−E0/kB T)". Er is the integration variable; integrating from E0 leaves e^(−E0/kB T), here and in the lines below, as in Section 30.1.]

= ⟨vr⟩σ_QB e^(−E0/kB T)

[Note: corrected; the source prints "e^(−Er/kB T)" where this reads "e^(−E0/kB T)". As above.]

When compared to the simple hard-sphere collision theory, we see that

k = ⟨vr⟩σ_QB e^(−E0/kB T)(1 + (E0)/(kB T))(hard-sphere theory)

[Note: corrected; the source prints "e^(−Er/kB T)" where this reads "e^(−E0/kB T)". As above.]

= ⟨vr⟩σ_QB e^(−E0/kB T)(line of centers theory)

[Note: corrected; the source prints "e^(−Er/kB T)" where this reads "e^(−E0/kB T)". As above.]

The line of centers theory expresses k in the same terms as the Arrhenius equation, yet experimental values of k still differ from those predicted by the line of centers model. The errors come about because σr(Er) is not accurately described by σ_QB(1 − (E0)/(Er)). More work needs to be done to improve the model for describing A, the Arrhenius factor.
