---
title: "28.8: Transition-State Theory Can Be Used to Estimate Reaction Rate Constants"
book: "Physical Chemistry (LibreTexts)"
chapter: "28: Chemical Kinetics I - Rate Laws"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/28%3A_Chemical_Kinetics_I_-_Rate_Laws/28.08%3A_Transition-State_Theory_Can_Be_Used_to_Estimate_Reaction_Rate_Constants"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## Transition State Theory

In Figure 28.8.1 , the point at which we evaluate or measure Ea serves as a dividing line (also called a dividing surface) between reactants and products. At this point, we do not have A + B, and we do not have C. Rather, what we have is an activated complex of some kind called a transition state between reactants and products. The value of the reaction coordinate at the transition state is denoted q^‡. Recall our notation x for the complete set of coordinates and momenta of all of the atoms in the system. Generally, the reaction coordinate q is a function q(x) of all of the coordinates and momenta, although typically, q(x) is a function of a subset of the coordinates and, possibly, the momenta.

[Note: Figure 28.8.1, the energy profile this paragraph describes, is not on the page. The text is left as printed.]

As an example, let us consider two atoms A and B undergoing a collision. An appropriate reaction coordinate could simply be the distance r between A and B. This distance is a function of the positions r_A and r_B of the two atoms, in that

q = r = |r_A − r_B|

When A and B are molecules, such as proteins, q(x) is a much more complicated function of x.

Now, recall that the mechanical energy ℰ(x) is given by

ℰ(x) = Σ_(i=1)^N (pi^2)/(2 mi) + U(r1, …, rN)

[Note: corrected; the source prints "(pi^2)/(2 m1)" where this reads "(pi^2)/(2 mi)". Each atom's own mass mi.]

and is a sum of kinetic and potential energies. Transition state theory assumes the following:

1. The system is classical, and the time dependence of the coordinates and momenta is determined by Newton’s laws of motion mi r̈i = Fi
2. We start a trajectory obeying this equation of motion with an initial condition x that makes q(x) = q^‡ and such that q̇(x) > 0 so that the reaction coordinate proceeds initial to the right, i.e., toward products.
3. We follow the motion xt of the coordinates and momenta in time starting from this initial condition x, which gives us a unique function xt(x).
4. If q(xt(x)) > q^‡ at time t, then the trajectory is designated as “reactive” and contributes to the reaction rate.

Define a function θ(y), which is 1 if y ≥ 0 and 0 if y < 0. The function θ(y) is known as a step function.

We now define a flux of reactive trajectories k(t) using statistical mechanics

k(t) = (1/(hQr))∫_(q(x) = q^‡) dx e^{−βℰ(x)}|q̇(x)|θ(q(xt(x)) − q^‡)

where h is Planck’s constant. Here Qr is the partition function of the reactants

Qr = ∫dx e^{−βℰ(x)}θ(q^‡−q(x))

The meaning of Equation (20.27) is an ensemble average over a canonical ensemble of the product |q̇(x)| and θ(q(xt(x)) − q^‡). The first factor in this product |q̇(x)| forces the initial velocity of the reaction coordinate to be positive, i.e., toward products, and the step function θ(q(xt(x)) − q^‡) requires that the trajectory of q(xt(x)) be reactive, otherwise, the step function will give no contribution to the flux. The function k(t) in Equation (20.27) is known as the reactive flux. In the definition of Qr the step function θ(q^‡−q(x)) measures the total number of microscopic states on the reactant side of the energy profile.

[Note: corrected; the source prints "on the reactive side" where this reads "on the reactant side". θ(q^‡ − q) is 1 for q < q^‡, the reactants' side.]

A plot of some examples of reactive flux functions k(t) is shown in Figure 28.8.2 . These functions are discussed in greater detail in J. Chem. Phys. 95, 5809 (1991). These examples all show that k(t) decays at first but then finally reaches a plateau value. This plateau value is taken to be the true rate of the reaction under the assumption that eventually, all trajectories that will become reactive will have done so after a sufficiently long time. Thus,

k = lim_(t → ∞) k(t)

gives the true rate constant. On the other hand, a common approximation is to take the value k(0) as an estimate of the rate constant, and this is known as the transition state theory approximation to k, i.e.,

k^(TST) = k(0)

= (1/(hQr))∫_(q(x) = q^‡) dx e^{−βℰ(x)}|q̇(x)|θ(q(x) − q^‡)

[Note: corrected; the source prints "= (1/(Qr))∫" where this reads "= (1/(hQr))∫". The factor h, as in k(t) above; it gives the kB T/h of the result.]

However, note that since we require q̇(x) to initially be toward products, then by definition, at t = 0, q(x) ≥ q^‡, and the step function in the above expression is redundant. In addition, if q̇(x) only depends on momenta (or velocities) and not actually on coordinates, which will be true if q(x) is not curvilinear (and is true for some curvilinear coordinates q(x)), and if q(x) only depends on coordinates, then Equation (20.30) reduces to

k^(TST) = (1/(hQr))∫dx_p e^{−βΣ_(i=1)^N pi^2/2mi}|q̇(p1, …, pN)|∫_(q(r1, …, rN) = q^‡) dx_r e^{−βU(r1, …, rN)}

Figure 28.8.2: Examples of the reactive flux k(t).
Graph depicting three curves of k(t)/k_TST versus time t, showing variations in values from 1 to -0.4.

[Note: corrected; the source prints "K(t)/M_max" where this reads "k(t)/k_TST". The image's alt text, machine-written, misreads the image; this describes it.]

The integral

Z^‡ = ∫_(q(r1, …, rN) = q^‡) dx_r e^{−βU(r1, …, rN)}

counts the number of microscopic states consistent with the condition q(r1, …, rN) = q^‡ and is, therefore, a kind of partition function, and is denoted Z^‡. On the other hand, because it is a partition function, we can derive a free energy ΔF^‡ from it

[Note: corrected; the source prints "and is denoted Q^‡" where this reads "and is denoted Z^‡". The integral is Z^‡, the name used next.]

F^‡ ∝ −kB T ln Z^‡

Similarly, if we divide Qr into its ideal-gas and configurational contributions

Qr = Qr^(ideal)Zr

then we can take

Zr = e^(−βFr)

where Fr is the free energy of the reactants. Finally, setting q̇ = p/μ, where μ is the associated mass, and p is the corresponding momentum of the reaction coordinate, then, canceling most of the momentum integrals between the numerator and Qr^(ideal), the momentum integral we need is

∫0^∞ e^(−βp^2/2μ) p/μ = kB T

which gives the final expression for the transition state theory rate constant

k^(TST) = ((kB T)/h)e^{−β(F^‡−Fr)} = ((kB T)/h)e^(−βΔF^‡)

Figure 28.8.2 actually shows k(t)/k^(TST), which must start at 1. As the figure shows, in addition, for t > 0, k(t) < k^(TST). Hence, k^(TST) is always an upper bound to the true rate constant. Transition state theory assumes that any trajectory that initially moves toward products will be a reactive trajectory. For this reason, it overestimates the reaction rate. In reality, trajectories can cross the dividing surface several or many times before eventually proceeding either toward products or back toward reactants.

Figure 28.8.3: Examples of the trajectories in a typical system, some of which are reactive but some of which return to reactants.
Six line graphs arranged in two columns and three rows, depicting various data trends over time.

Figure 28.8.3 shows that one can obtain trajectories of both types. Here, the dividing surface lies at q = 0. Left, toward q = −1 is the reactant side, and right, toward q = 1 is the product side. Because some trajectories return to reactants and never become products, the true rate is always less than k^(TST), and we can write

k = κk^(TST)

where the factor κ < 1 is known as the transmission factor. This factor accounts for multiple recrossings of the dividing surface and the fact that some trajectories do not become reactive ones.

## Contributors and Attributions

- Mark Tuckerman (New York University)
