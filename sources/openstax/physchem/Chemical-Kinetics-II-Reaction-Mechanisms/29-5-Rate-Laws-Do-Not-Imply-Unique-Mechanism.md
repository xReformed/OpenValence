---
title: "29.5: Rate Laws Do Not Imply Unique Mechanism"
book: "Physical Chemistry (LibreTexts)"
chapter: "29: Chemical Kinetics II- Reaction Mechanisms"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/29%3A_Chemical_Kinetics_II-_Reaction_Mechanisms/29.05%3A_Rate_Laws_Do_Not_Imply_Unique_Mechanism"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Because a proposed mechanism can only be valid if it is consistent with the rate law found experimentally, the rate law plays a central role in the investigation of chemical reaction mechanisms. The discussion above introduces the problems and methods associated with collecting rate data and with finding an empirical rate law that fits experimental concentration-versus-time data. We turn now to finding the rate laws that are consistent with a particular proposed mechanism. For simplicity, we consider reactions in closed constant-volume systems.

[Note: "The discussion above" is in Ellgen's book, which this text is taken from; in this book rate data and empirical rate laws are in Chapter 28. The text is left as printed.]

In principle, numerical integration can be used to predict the concentration at any time of each of the species in any proposed reaction mechanism. This prediction can be compared to experimental observations to see whether they are consistent with the proposed mechanism. To do the numerical integration, it is necessary to know the initial concentrations of all of the chemical species and to know, or assume, values of all of the rate constants. The initial concentrations are known from the procedure used to initiate the reaction. However, the rate constants must be determined by some iterative procedure in which initial estimates of the rate constants are used to predict concentration-versus-time data that can be compared to the experimental results to produce refined estimates.

In practice, we tailor our choice of reaction conditions so that we can use various approximations to test whether a proposed mechanism can explain the data. We now consider the most generally useful of these approximations.

In this discussion, we assume that the overall reaction goes to completion; that is, at equilibrium the concentration of the reactant whose concentration is limiting has become essentially zero. If the overall reaction involves more than one elementary step, then an intermediate compound is involved. A valid mechanism must include this intermediate, and more than one differential equation may be needed to characterize the time rate of change of all of the species involved in the reaction. We focus on conditions and approximations under which the rate of appearance of the final products in a multi-step reaction mechanism can be described by a single differential equation, the rate law.

We examine the application of these approximations to a particular reaction mechanism. When we understand the application of these approximations to this mechanism, the ways in which they can be used in other situations are clear.

Consider the following sequence of elementary steps

A + B ⇌ (k1, k2) C → (k3) D

whose kinetics are described by the following simultaneous differential equations:

(d[A])/dt = (d[B])/dt = −k1[A][B] + k2[C]

(d[C])/dt = k1[A][B]−k2[C]−k3[C]

(d[D])/dt = k3[C]

The general analytical solution for this system of coupled differential equations can be obtained, but it is rather complex, because [C] increases early in the reaction, passes through a maximum, and then decreases at long times. In principle, experimental data could be fit to these equations. The numerical approach requires that we select values for k1, k2, k3, [A]0, [B]0, [C]0, and [D]0, and then numerically integrate to get [A], [B], [C], and [D] as functions of time. In principle, we could refine our estimates of k1, k2, and k3 by comparing the calculated values of one or more concentrations to the experimental ones. In practice, the approximate treatments we consider next are more expedient.

When we begin a kinetic study, we normally have a working hypothesis about the reaction mechanism, and we design our experiments to simplify the differential equations that apply to it. For the present example, we will assume that we always arrange the experiment so that [C]0 = 0 and [D]0 = 0. In consequence, at all times:

[A]0 = [A] + [C] + [D].

Also, we restrict our considerations to experiments in which [B]0 ≫ [A]0. This exemplifies the use of flooding. The practical effect is that the concentration of B remains effectively constant at its initial value throughout the entire reaction, which simplifies the differential equations significantly. In the present instance, setting [B]0 ≫ [A]0 means that the rate-law term k1[A][B] can be replaced, to a good approximation, by k_obs[A], where k_obs = k1[B]0.

Once we have decided upon the reaction conditions we are going to use, whether the resulting concentration-versus-time data can be described by a single differential equation depends on the relative magnitudes of the rate constants in the several steps of the overall reaction. Particular combinations of relationships that lead to simplifications are often referred to by particular names; we talk about a combination that has a rate-determining step, or one that involves a prior equilibrium, or one in which a steady-state approximation is applicable. To see what we mean by these terms, let us consider some particular relationships that can exist among the rate constants in the mechanism above.

## Case I

Suppose that k1[A][B] ≫ k2[C] and k3 ≫ k2. We often describe this situation by saying, rather imprecisely, that the reaction to convert C to D is very fast and that the reaction to convert C back to A and B is very slow—compared to the reaction that forms C from A and B. When C is produced in these circumstances, it is converted to D so rapidly that we never observe a significant concentration of C in the reaction mixture. The formation of a molecule of C is tantamount to the formation of a molecule of D, and the reaction produces D at essentially the same rate that it consumes A or B. We say that the first step, A + B → C, is the rate-determining step in the reaction. We have

−(d[A])/dt = −(d[B])/dt ≈ (d[D])/dt

The assumption that k1[A][B] ≫ k2[C] means that we can neglect the smaller term in the equation for d[A]/dt, giving the approximation

(d[A])/dt = (d[B])/dt = −(d[D])/dt = −k1[A][B]

Letting [D] = x and recognizing that our assumptions make [C] ≈ 0, the mass-balance condition, [A]0 = [A] + [C] + [D], becomes [A] = [A]0 − x. Choosing [B]0 ≫ [A]0 means that k1[B] ≈ k1[B]0 = k_(I, obs). The rate equation becomes first-order:

dx/dt = k_(I, obs)( [A]0 − x)

Since k_(I, obs) is not strictly constant, it is a pseudo-first-order rate constant. The disappearance of A is said to follow a pseudo-first-order rate equation.

The concept of a rate-determining step step is an approximation. In general, the consequence we have in mind when we invoke this approximation is that no intermediate species can accumulate to a significant concentration if it is produced by the rate-determining step or by a step that occurs after the rate-determining step. We do not intend to exclude the accumulation of a species that is at equilibrium with another product. Thus, in the mechanism

A → (k) B ⇌ C

we suppose that the conversion of A to B is rate-determining and that the interconversion of B and C is so rapid that their concentrations always satisfy the equilibrium relationship

K = ([C])/([B]).

For the purpose at hand, we do not consider B to be an intermediate; B is a product that happens to be at equilibrium with the co-product, C.

## Case II

Suppose that k1[A][B] ≫ k3[C]. In this case A + B → C is fast compared to the rate at which C is converted to D, and we say that C → D is the rate-determining step. We can now distinguish three sub-cases depending upon the way [C] behaves during the course of the reaction.

Case IIa: Suppose that k1[A][B] ≫ k3[C] and k3 ≫ k2. Then A + B → C is rapid and essentially quantitative. That is, within a short time of initiating the reaction, all of the stoichiometrically limiting reactant is converted to C. Letting [D] = x and recognizing that our assumptions make [A] ≈ 0, the mass-balance condition,

[A]0 = [A] + [C] + [D]

becomes

[C] = [A]0 − x.

After a short time, the rate at which D is formed becomes

(d[D])/dt = k3[C] or dx/dt = k3( [A]0 − x)

The disappearance of C and the formation of D follow a first-order rate law.

Case IIb: If the forward and reverse reactions in the first elementary process are rapid, then this process may be effectively at equilibrium during the entire time that D is being formed. (This is the case that k1[A][B] ≫ k3[C] and k2 ≫ k3.) Then, throughout the course of the reaction, we have

K_eq = [C]/([A][B])

Letting [D] = x and making the further assumption that [A] ≫ [C] ≈ 0 throughout the reaction, the mass-balance condition, [A]0 = [A] + [C] + [D], becomes [A] = [A]0 − x. Substituting into the equilibrium-constant expression, we find

[C] = K_eq[B]0 ([A]0 − x)

Substituting into d[D]/dt = k3[C] we have

dx/dt = k3K_eq[B]0 ([A]0 − x) = k_(IIb, obs)([A]0 − x)

[Note: corrected; the source prints "k_(IIa, obs)" where this reads "k_(IIb, obs)". This is Case IIb, here and in the next line.]

where k_(IIb, obs) = k3K_eq[B]0. The disappearance of A and the formation of D follow a pseudo-first-order rate equation. The pseudo-first-order rate constant is a composite quantity that is directly proportional to [B]0.

[Note: corrected; the source prints "where k_(IIa, obs)" where this reads "where k_(IIb, obs)". As above.]

Case IIc: If we suppose that the first step is effectively at equilibrium during the entire time that D is being produced (as in case IIb) but that [C] is not negligibly small compared to [A], we again have K_eq = [C]/([A][B]). With [D] = x, the mass-balance condition becomes [A] = [A]0−[C]−x. Eliminating [A] between the mass-balance and equilibrium-constant equations gives

[C] = (K_eq[B]0([A]0 − x))/(1 + K_eq[B]0)

so that d[D]/dt = k3[C] becomes

dx/dt = ((k3K_eq[B]0)/(1 + K_eq[B]0))([A]0 − x) = k_(IIc, obs)([A]0 − x)

The formation of D follows a pseudo-first-order rate equation. (The disappearance of A is also pseudo-first-order, with the same pseudo-first-order rate constant.) As in Case IIb, the pseudo-first-order rate constant, k_(IIc, obs), is a composite quantity, but now its dependence on [B]0 is more complex. The result for Case IIc reduces to that for Case IIb if K_eq[B]0 ≪ 1.

[Note: corrected; the source prints "but the pseudo-first-order rate constant is different.)" where this reads "with the same pseudo-first-order rate constant.)". [A] = ([A]0 − x)/(1 + K_eq[B]0), so −d[A]/dt = k_(IIc, obs)[A].]

## Case III

In the cases above, we have assumed that one or more reactions are intrinsically much slower than others are. The differential equations for this mechanism can also become much simpler if all three reactions proceed at similar rates, but do so in such a way that the concentration of the intermediate is always very small, [C] ≈ 0. If the concentration of C is always very small, then we expect the graph of [C] versus time to have a slope, d[C]/dt, that is approximately zero. In this case, we have

(d[C])/dt = k1[A][B]−k2[C]−k3[C] ≈ 0

so that [C] = (k1[A][B])/(k2 + k3)

With [D] = x, d[D]/dt = k3[C] becomes

dx/dt = ((k1 k3[B]0)/(k2 + k3))([A]0 − x) = k_(III, obs)([A]0 − x)

As in the previous cases, the disappearance of A and the formation of D follow a pseudo-first-order rate equation. The pseudo-first-order rate constant is again a composite quantity, which depends on [B]0 and the values of all of the rate constants.

Case III illustrates the steady-state approximation, in which we assume that the concentration of an intermediate species is much smaller than the concentrations of other species that affect the reaction rate. Under these circumstances, we can be confident that the time-derivative of the intermediate’s concentration is negligible compared to the reaction rate, so that it is a good approximation to set it equal to zero. The idea is simply that, if the concentration is always small, its time-derivative must also be small. If the graph of the intermediate’s concentration versus time is always much lower than that of other participating species, then its slope will be much less.

Equating the time derivative of the steady-state intermediate’s concentration to zero produces an algebraic expression that involves the intermediate’s concentration. Solving this expression for the concentration of the steady-state intermediate makes it possible to greatly simplify the set of simultaneous differential equations that is predicted by the mechanism. When there are multiple intermediates to which the approximation is applicable, remarkable simplifications can result. This often happens when the mechanism involves free-radical intermediates.

The name “steady-state approximation” is traditional. When we use it, we do so on the understanding that the “state” which is approximately “steady” is the concentration of the intermediate, not the state of the system. Since a net reaction is occurring, the state of the system is distinctly not constant.
