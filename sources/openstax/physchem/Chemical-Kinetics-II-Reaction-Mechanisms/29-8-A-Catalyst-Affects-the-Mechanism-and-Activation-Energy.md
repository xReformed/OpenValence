---
title: "29.8: A Catalyst Affects the Mechanism and Activation Energy"
book: "Physical Chemistry (LibreTexts)"
chapter: "29: Chemical Kinetics II- Reaction Mechanisms"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/29%3A_Chemical_Kinetics_II-_Reaction_Mechanisms/29.08%3A_A_Catalyst_Affects_the_Mechanism_and_Activation_Energy"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

As can be seen from the Arrhenius equation, the magnitude of the activation energy, Ea, determines the value of the rate constant, k, at a given temperature and thus the overall reaction rate. Catalysts provide a means of reducing Ea and increasing the reaction rate. Catalysts are defined as substances that participate in a chemical reaction but are not changed or consumed. Instead they provide a new mechanism for a reaction to occur which has a lower activation energy than that of the reaction without the catalyst.

Figure 29.8.1: Comparison of energy profiles with and without catalyst present.
Graph comparing energy profiles of a reaction with and without a catalyst, showing energy peaks and reaction coordinates.

Homogeneous catalysis refers to reactions in which the catalyst is in solution with at least one of the reactants whereas heterogeneous catalysis refers to reactions in which the catalyst is present in a different phase, usually as a solid, than the reactants. Figure 29.8.1 shows a comparison of energy profiles of a reaction in the absence and presence of a catalyst.

Consider a non-catalyzed elementary reaction

A ⟶ (k) P

which proceeds at rate k at a certain temperature. The reaction rate can be expressed as

(d[A])/dt = −k[A]

In the presence of a catalyst C, we can write the reaction as

A + C ⟶ (k_cat) P + C

and the reaction rate as

(d[A])/dt = −k[A]−k_cat[A][C]

where the first term represents the uncatalyzed reaction and the second term represents the catalyzed reaction. Because the reaction rate of the catalyzed reaction is often magnitudes larger than that of the uncatalyzed reaction (i.e. k_cat[C] ≫ k), the first term can often be ignored.

[Note: corrected; the source prints "(i.e. k_cat ≫ k)" where this reads "(i.e. k_cat[C] ≫ k)". The rates are compared: k_cat[C] with k.]

## Example of Homogenous Catalysis: Acid Catalysis

A common example of homogeneous catalysts are acids and bases. For example, given an overall reaction is S → P. If k is the rate, then

(d[P])/dt = k[S]

The purpose of a catalyst is to enhance the rate of production of the product P. The equations of the acid-catalyzed reaction are

[Note: corrected; the source prints "The purpose of an enzyme" where this reads "The purpose of a catalyst". This is acid catalysis; the catalyst is the acid.]

S + AH ⇌ (k1, k_−1) SH^+ + A^−

SH^+ + H2O → (k2) P + H3O^+

H3O^+ + A^− ⇌ (k3, k_−3) AH + H2O

The full set of kinetic equations is

(d[S])/dt = −k1[S][AH] + k_−1[SH^+][A^−]

(d[AH])/dt = −k1[S][AH] + k_−1[SH^+][A^−]−k_−3[AH] + k3[H3O^+][A^−]

(d[SH^+])/dt = k1[S][AH]−k_−1[SH^+][A^−]−k2[SH^+]

(d[A^−])/dt = k1[S][AH]−k_−1[SH^+][A^−]−k3[A^−][H3O^+] + k_−3[AH]

[Note: corrected; the source prints "−k2[A^−][H3O^+]" where this reads "−k3[A^−][H3O^+]". A^− reacts with H3O^+ in step 3.]

(d[P])/dt = k2[SH^+]

(d[H3O^+])/dt = k2[SH^+]−k3[H3O^+][A^−] + k_−3[AH]

[Note: corrected; the source prints "(d[H3O^+])/dt = −k2[SH^+]" where this reads "(d[H3O^+])/dt = k2[SH^+]". Step 2 produces H3O^+.]

We cannot easily solve these, as they are nonlinear. However, let us consider two cases k2 ≫ k_−1[A^−] and k2 ≪ k_−1[A^−]. In both cases, SH^+ is consumed quickly, and we can apply a steady-state approximation:

(d[SH^+])/dt = k1[S][AH]−k_−1[A^−][SH^+]−k2[SH^+] = 0

Rearranging in terms of SH^+ yields

[SH^+] = (k1[S][AH])/(k_−1[A^−] + k2)

and the rate of production of P can be written as

(d[P])/dt = k2[SH^+] = (k1 k2[S][AH])/(k_−1[A^−] + k2)

In the case where k2 ≫ k_−1[A^−], Equation 29.8.17 can be written as

[Note: Equation 29.8.17 is the one just above, d[P]/dt = k2[SH^+] = …; the page numbers its equations but does not show the numbers.]

(d[P])/dt = k1[S][AH]

which is known as a general acid-catalyzed reaction. On the other hand, if k2 ≪ k_−1[A^−], we can use an equilibrium approximation to write the rate of production of P as

(d[P])/dt = (k1 k2[S][AH])/(k_−1[A^−]) = ((k1 k2)/(k_−1 K))[S][H^+]

where K is the acid dissociation constant:

K = ([A^−][H^+])/([AH])

In this case, the reaction is hydrogen ion-catalyzed.

## Example of Heterogeneous Catalysis: Surface Catalysis of Gas-Phase Reactions

Many gas-phase reactions are catalyzed on a solid surface. For a first-order, unimolecular reaction, the reaction mechanism can be written as

A(g) + S(s) ⇌ (k1, k_−1) AS(s)

AS(s) → (k2) P(g) + S(s)

[Note: corrected; the source prints "P(g) + S(g)" where this reads "P(g) + S(s)". The surface site is a solid, S(s).]

where the first step is reversible adsorption of the gas molecule, A, onto active sites on the catalyst surface, S, to form an adsorbed intermediate, AS, and the second step is the conversion of adsorbed A molecules to species P. Applying the steady-state approximation to species AS, we can write

[Note: corrected; the source prints "to form a transition state, AS," where this reads "to form an adsorbed intermediate, AS,". AS is the adsorbed species, an intermediate, not a transition state.]

(d[AS])/dt = k1[A][S]−k_−1[AS]_ss − k2[AS]_ss = 0

Because the concentration of total active sites on the catalyst surface is fixed at [S]0, the concentration of adsorbed species on the catalyst surface, [AS] can be written as

[AS] = θ[S]0

and [S] can be written as

[S] = (1 − θ)[S]0

where θ is the fractional surface coverage of species A on the catalyst surface. We can now write Equation 29.8.23 as

[Note: Equation 29.8.23 is the steady-state equation d[AS]/dt = … = 0 above; the page does not show its number.]

k1[A](1 − θ)[S]0 − (k_−1 + k2)θ[S]0 = 0

Rearranging the above equation in terms of θ yields

θ = (k1[A])/(k1[A] + k_−1 + k2)

The rate of production of P can be written as

(d[P])/dt = k2[AS]_ss = k2θ[S]0 = ((k1 k2)/(k1[A] + k_−1 + k2))[A][S]0

From the above equation, we can observe the importance of having high surface areas for catalytic reactions.

Figure 29.8.2: Illustrations of the Langmuir-Hinshelwood and Eley-Rideal mechanisms for heterogeneous catalysis of bimolecular gas-phase reactions.
Two mechanisms on a surface: Langmuir-Hinshelwood, in which A and B both adsorb, react and AB leaves; and Eley-Rideal, in which adsorbed A is struck by B from the gas.

[Note: corrected; the source prints "Diagram illustrating two types of molecular interactions: longitudinal and equilateral membrane interactions, with arrows and labeled components." where this reads "Two mechanisms on a surface: Langmuir-Hinshelwood, in which A and B both adsorb, react and AB leaves; and Eley-Rideal, in which adsorbed A is struck by B from the gas.". The image's alt text, machine-written, misreads the image; this describes it.]

For bimolecular gas-phase reactions, two generally-used mechanisms to explain reactions kinetics are the Langmuir-Hinshelwood and Eley-Rideal mechanisms, shown in Figure 29.8.2 . In the Langmuir-Hinshelwood mechanism, A and B both adsorb onto the catalyst surface, at which they react to form a product. The reaction mechanism is

A(g) + S(s) ⇌ (k1, k_−1) AS(s)

B(g) + S(s) ⇌ (k2, k_−2) BS(s)

AS(s) + BS(s) → (k3) P

The rate law for the Langmuir-Hinshelwood mechanism can be derived in a similar manner to that for unimolecular catalytic reactions by assuming that the total number of active sites on the catalyst surface is fixed. In the Eley-Rideal mechanism, only one species adsorbs onto the catalyst surface. An example of such a reaction is the partial oxidation of ethylene into ethylene oxide, as shown in Figure 29.8.3 . In this reaction, diatomic oxygen adsorbs onto the catalytic surface where it reacts with ethylene molecules in the gas phase.

The reactions for the Eley-Rideal mechanism can be written as

A(g) + S(s) ⇌ (k1, k_−1) AS(s)

AS(s) + B(g) → (k2) P(g) + S(s)

Figure 29.8.3: Illustrations of the reaction mechanism for the partial oxidation of ethylene to ethylene oxide. [Reproduced from Kilty, PA and WMH Sachtler. Catal. Rev., 10, 1]
Ethylene and an O2 molecule polarized (δ+, δ−) on silver, the C–C–O^+/O^− intermediate on the silver, and ethylene oxide on the silver.

[Note: corrected; the source prints "WMH Sacthler" where this reads "WMH Sachtler"; the source prints "Chemical reaction diagram showing the transformation of a compound into another, with structures labeled A1, A2, and A3." where this reads "Ethylene and an O2 molecule polarized (δ+, δ−) on silver, the C–C–O^+/O^− intermediate on the silver, and ethylene oxide on the silver.". W. M. H. Sachtler (Kilty and Sachtler, Catal. Rev. 10, 1 (1974)). The image's alt text, machine-written, misreads the image; this describes it.]

Assuming that k_−1 ≫ k1, we can apply a steady-state approximation to species AS:

(d[AS])/dt = 0 = k1[A][S]−k_−1[AS]_ss − k2[AS]_ss[B]

As in the case of unimolecular catalyzed reactions, we can express the concentrations of AS and S in terms of a fraction of the total number of active sites, S0 and rewrite the above equation as

0 = k1[A](1 − θ)[S]0 − k_−1θ[S]0 − k2θ[S]0[B]

[Note: corrected; the source prints "− k_−1[S]0 −" where this reads "− k_−1θ[S]0 −". Desorption is from the covered sites, θ[S]0, as the next line requires.]

Solving for θ yields

θ = (k1[A])/(k1[A] + k_−1 + k2[B])

Furthermore, if k2[B] ≪ k1[A] + k_−1, we can simplify θ to

[Note: corrected; the source prints "if k2 ≪ k1 and k_−1" where this reads "if k2[B] ≪ k1[A] + k_−1". The terms of the denominator are compared.]

θ = (k1[A])/(k1[A] + k_−1)

The rate of production of P can be expressed as

(d[P])/dt = k2[AS]_ss[B] = k2θ[S]0[B] = ((k1 k2[A])/(k1[A] + k_−1))[S]0[B]

We can also write the above expression in terms of the equilibrium constant, K, which is equal tok1/k_−1

(d[P])/dt = k2[S]0[B](K[A])/(K[A] + 1)

[Note: corrected; the source prints "(d[P])/dt = Kk2[B](K[A])/(K[A] + 1)" where this reads "(d[P])/dt = k2[S]0[B](K[A])/(K[A] + 1)". Dividing the line above by k_−1: there is no extra K, and [S]0 stays.]

## Contributors and Attributions

- Mark Tuckerman (New York University)
