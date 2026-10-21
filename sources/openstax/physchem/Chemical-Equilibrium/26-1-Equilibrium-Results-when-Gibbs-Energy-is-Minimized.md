---
title: "26.1: Equilibrium Results when Gibbs Energy is Minimized"
book: "Physical Chemistry (LibreTexts)"
chapter: "26: Chemical Equilibrium"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26%3A_Chemical_Equilibrium/26.01%3A_Equilibrium_Results_when_Gibbs_Energy_is_Minimized"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Many important chemical reactions -if not most- are performed in solution rather than between solids or gases. Solid state reactions are often very slow and not all chemical species can be put in the vapor phase because they decompose before evaporating.

Often we are not concerned with the temporal aspects of a reaction. That can be technologically very important but it is the domain of kinetics - a different branch of Physical Chemistry - rather than classical thermodynamics.. The latter is more concerned with the endpoint. This is the thermodynamically speaking the (stable) equilibrium, but chemically it can either represent a completed reaction or a chemical equilibrium.

Unfortunately, of the three main aggregation states: gas – liquid – solid, the structure of liquids is least understood and one of the most complex liquids is also one of the most extensively used ones: water. It is vital to many branches of chemistry varying from geochemistry to environmental chemistry to biochemistry. We shall make just a small inroad into its complexity.

## Extent of reaction

To describe the progress of a reaction we define the extent of reaction. It is usually denoted by the Greek letter ξ.

Consider a generic reaction:

vA A + vB B ⇌ vY Y + vZ Z

Using stoichiometry we can define the extent by considering how the number of moles (or molar amounts) of each species changes during the reaction:

reactants

- nA = n_(A, 0) − vA ξ
- nB = n_(B, 0) − vB ξ

products

- nY = n_(Y, 0) + vY ξ
- nZ = n_(Z, 0) + vZ ξ

The dimension of ξ is [mol] because the stoichiometric coefficients v_i are dimensionless integers. If the reaction goes to completion for one of the reactants -the limiting reactant- n_(A or B)=n_limiting will go to zero. If we start with n_limiting = v_limiting moles, the value of ξ starts at 0 (no products) and goes to 1 at completion (limiting reactant depleted). When approaching an equilibrium ξ will not go beyond ξ_eq.

## Measuring ξ

The extent of reaction is what is the central subject of reaction kinetics. Its value is typically measured as a function of time indirectly by measuring a quantity q that is linearly dependent on ξ(t):

q(ξ) = aξ + b

Consider the situation at the extremes ξ = 0 and ξ = 1:

q0 = a.0 + b = b

q1 = a.1 + b = a + b

q1 − q0 = a

Thus, ξ can be found from

(q(t) − q0)/(q1 − q0) = (q(t) − b)/a

The nature of q can vary widely from UV/Vis absorption, conductivity, gravimetric to caloric data.

In practice, q0 at ξ = 0 is often hard to observe because it takes time to mix the reactants, particularly in solutions, and q1 at ξ=1 may never be reached if the reaction goes to equilibrium. Nevertheless the values of a and b can often be found from the available data by fitting techniques.

In (equilibrium, static) thermodynamics we are only concerned with the endpoint:

- ξ = 1: the reaction runs to completion
- ξ = ξ_eq: the react ion goes to a state of chemical equilibrium

## Thermodynamic Potentials

As we have seen we can write any change in the Gibbs free energy due to changes in the molar amounts of the species involved in the reaction (at T, P constant) as:

dG = Σ ((∂G)/(∂ni))dni = Σμi dni

where μ is the thermodynamic potential, often called chemical potential when dealing with reactions. From the definition of ξ we can see by differentiation that

- dnA = −vA dξ
- dnB = −vB dξ
- dnY = vY dξ
- dnZ = vZ dξ

[Note: corrected; the source prints "- dnB = −vA dξ" where this reads "- dnB = −vB dξ". B's own stoichiometric coefficient.]

This allows us to unify the changes in the molar amount of all the species into one single variable dξ. We get:

dG = [Σ − v_(i, reactants) μ_(i, reactants) + Σ + v_(i, products) μ_(i, products)]dξ

[Note: corrected; the source prints "v_(i, products) μ_(j, products)" where this reads "v_(i, products) μ_(i, products)". The same index i in both factors.]

or

((∂G)/(∂ξ))_(T, P) = −Σv_(i, r) μ_(i, r) + Σv_(i, p) μ_(i, p)

[Note: corrected; the source prints "Σv_(i, p) μ_(j, p)" where this reads "Σv_(i, p) μ_(i, p)". As above: index i.]

This quantity is also written as:

((∂G)/(∂ξ))_(T, P) = Δr G

This quantity gives the change in Gibbs free energy for the reaction (as written!!) for Δξ=1 mole. (Units are [J/mol] therefore). This is the change in Gibbs energy (the slope of G vs ξ) when the extent of reaction changes by one mole with a fixed composition. Equilibrium results when Gibbs energy is at a minimum with respect to the extent of reaction.

Figure 1. Gibbs energy plotted as a function of the extent of reaction. Equilibrium results when the Gibbs energy is minimized.
Gibbs energy G against extent of reaction ξ, from reactants (ξ = 0) to products (completion): the curve falls to a minimum marked "Equilibrium" and rises again; a red label reads "Slope = dG/dξ = μ".

[Note: corrected; the source prints "Mathematical equation displaying slope formula: "Slope = Δy/Δx = m" with variables in red on a plain background." where this reads "Gibbs energy G against extent of reaction ξ, from reactants (ξ = 0) to products (completion): the curve falls to a minimum marked "Equilibrium" and rises again; a red label reads "Slope = dG/dξ = μ".". The image's alt text, machine-written, misreads the image; this describes it.]

## Gas Reactions

Let us assume that our reaction is entirely between gas species and that the gas is sufficiently dilute that we can use the ideal gas law. Then we can write for each species:

μi = μi^o + RT ln((Pi)/(Pi^o))

We can then split up the Δ_rG expression in two parts:

Δr G = Δr G^o + RT ln Q

The standard potentials:

Δr G^o = −Σv_(i, r) μ_(i, r)^o + Σv_(i, p) μ_(i, p)^o

[Note: corrected; the source prints "Σvi, r μ_(i, r)^o" where this reads "Σv_(i, r) μ_(i, r)^o"; the source prints "Σv_(i, p) μ_(j, p)^o" where this reads "Σv_(i, p) μ_(i, p)^o". The source's TeX misplaces the subscript of v (v_i,_r); and as above, index i.]

and the logarithmic terms:

RT ln Q = −vA RT ln((PA)/(PA^o)) − vB RT ln((PB)/(PB^o)) + vY RT ln((PY)/(PY^o)) + vZ RT ln((PZ)/(PZ^o))

We can combine all the logarithmic terms into Q, called the reaction quotient. The stoichiometric coefficients become exponents and the reactants' factors will be 'upside down' compared to the products, because of the properties of logarithms:

a ln x = ln x^a

−a ln x = ln(1/(x^a))

We have kept the standard pressures Pi^o in the expression, but often they are omitted. They are usually all 1 bar, but in principle we could choose 1 bar for A 1 Torr for B an 1 psi for the products. It creates a valid (though ridiculous) definition of what ^⦵ stands for. (Of course the value of Δr G^o does depend on that choice!).

We could write

RT ln Q = RT ln((QP)/(Q^o))

Q^o is typically unity in magnitude but it cancels the dimensions of QP. That means that Q and QP are equal in magnitude and we can get Q from QP by simply dropping the dimensions. Q is dimensionless but QP usually is not. Often this fine distinction is simply not made and Q^o is omitted, we get:

Δr G = Δr G^o + RT ln((PY^(vY)PZ^(vZ))/(PA^(vA)PB^(vB)))

Notice the difference between Δr G which denotes the conditions (e.g. pressures) of your reaction and Δr G^o denotes standard conditions.
