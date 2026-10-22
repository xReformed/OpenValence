---
title: "31.8: Using Langmuir Isotherms to Derive Rate Laws for Surface-Catalyzed Gas-Phase Reactions"
book: "Physical Chemistry (LibreTexts)"
chapter: "31: Solids and Surface Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/31%3A_Solids_and_Surface_Chemistry/31.08%3A_Using_Langmuir_Isotherms_to_Derive_Rate_Laws_for_Surface-Catalyzed_Gas-Phase_Reactions"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

It is possible to predict how the kinetics of certain heterogeneously-catalyzed reactions might vary with the partial pressures of the reactant gases above the catalyst surface by using the Langmuir isotherm expression for equilibrium surface coverages.

## Unimolecular Decomposition

Consider the surface decomposition of a molecule A, i.e. the process

A_(g) ⇌ A_(ads) → Products

Let us assume that :

1. The decomposition reaction occurs uniformly across the surface sites at which molecule A may be adsorbed and is not restricted to a limited number of special sites.
2. The products are very weakly bound to the surface and, once formed, are rapidly desorbed.
3. The rate determining step (rds) is the surface decomposition step.

Under these circumstances, the molecules of A adsorbed on the surface are in equilibrium with those in the gas phase and we may predict the surface concentration of A from the Langmuir isotherm, i.e.

θ = bP/(1 + bP)

The rate of the surface decomposition (and hence of the reaction) is given by an expression of the form

rate = kθ

This is assuming that the decomposition of A(ads) occurs in a simple unimolecular elementary reaction step and that the kinetics are first order with respect to the surface concentration of this adsorbed intermediate). Substituting for the coverage, θ, gives us the required expression for the rate in terms of the pressure of gas above the surface

rate = kbP/(1 + bP)

It is useful to consider two extremes:

### Low Pressure/Binding Limit

This is the low pressure (or weak binding. i.e., small b) limit : under these conditions the steady state surface coverage, θ, of the reactant molecule is very small.

bP ≪ 1

then

1 + bP ≈ 1

and Equation (rate) can be simplified to

rate ≈ kbP

Under this limiting case, the kinetics follow a first order reaction (with respect to the partial pressure of A) with an apparent first order rate constant k' = kb.

### High Pressure/Binding Limit

This is the high pressure (or strong binding, i.e., large b) limit: under these conditions the steady state surface coverage, θ, of the reactant molecule is almost unity and

bP ≫ 1

then

1 + bP ≈ bP

and Equation (rate) can be simplified to

rate ≈ k

Under this limiting case, the kinetics follow a zero-order reaction (with respect to the partial pressure of A). The rate shows the same pressure variation as does the surface coverage, but this is hardly surprising since it is directly proportional to θ.

These two limiting cases can be identified in the general kinetics from Equation (rate) in Figure 31.8.1.

Figure 31.8.1: Plot of reaction rate versus the pressure of the reactant gas. The graph shows that at low pressures, the rate is first order with respect to the pressure of the reacting gas. At high pressures, however, the reaction approaches zero order with respect to the reacting gas.
Graph showing reaction rate versus pressure, indicating zero-order and first-order relationships.

## Bimolecular Reaction (between molecular adsorbates)

Consider a Langmuir-Hinshelwood reaction of the following type:

A_(g) ⇌ A_(ads)

B_(g) ⇌ B_(ads)

A_(ads) + B_(ads) ⟶ (slow) AB_(ads) ⟶ (fast) AB_(g)

We will further assume, as noted in the above scheme, that the surface reaction between the two adsorbed species (left side of Equation (Eq2.3) is the rate determining step.

If the two adsorbed molecules are mobile on the surface and freely intermix then the rate of the reaction will be given by the following rate expression for the bimolecular surface combination step

Rate = kθA θB

For a single molecular adsorbate the surface coverage (as given by the standard Langmuir isotherm) is

θ = bP/(1 + bP)

Where two molecules (A & B ) are competing for the same adsorption sites then the relevant expressions are (see derivation):

θA = (bA PA)/(1 + bA PA + bB PB)

and

θB = (bB PB)/(1 + bA PA + bB PB)

Substituting these into the rate expression gives :

Rate = kθA θB = (kbA PA bB PB)/((1 + bA PA + bB PB)^2)

Once again, it is interesting to look at several extreme limits

### Low Pressure/Binding Limit

bA PA ≪ 1

and

bB PB ≪ 1

In this limit that θA & θB are both very low , and

rate → kbA PA bB PB = k'PA PB

i.e. first order in both reactants

### Mixed Pressure/Binding Limit

bA PA ≪ 1 ≪ bB PB

In this limit θA → 0, θB → 1, and

Rate → (kbA PA)/(bB PB) = (k'PA)/(PB)

i.e. first order in A, but negative first order in B

Clearly, depending upon the partial pressure and binding strength of the reactants, a given model for the reaction scheme can give rise to a variety of apparent kinetics: this highlights the dangers inherent in the reverse process - namely trying to use kinetic data to obtain information about the reaction mechanism.

### Example 31.8.1: CO Oxidation Reaction

On precious metal surfaces (e.g. Pt), the CO oxidation reaction is generally believed to by a Langmuir-Hinshelwood mechanism of the following type :

CO_(g) ⇌ CO_(ads)

O_2(g) ⇌ 2O_(ads)

CO_(ads) + O_(ads) ⟶ (slow) CO_2(ads) ⟶ (fast) CO_2(g)

As CO2 is comparatively weakly-bound to the surface, the desorption of this product molecule is relatively fast and in many circumstances it is the surface reaction between the two adsorbed species that is the rate determining step.

If the two adsorbed molecules are assumed to be mobile on the surface and freely intermix then the rate of the reaction will be given by the following rate expression for the bimolecular surface combination step

Rate = k θ_CO θO

Where two such species (one of which is molecularly adsorbed, and the other dissociatively adsorbed) are competing for the same adsorption sites then the relevant expressions are (see derivation):

θ_CO = (b_CO P_CO)/(1 + √(bO P_O2) + b_CO P_CO)

and

θO = (√(bO P_O2))/(1 + √(bO P_O2) + b_CO P_CO)

Substituting these into the rate expression gives:

rate = kθ_CO θO = (kb_CO P_CO√(bO P_O2))/((1 + √(bO P_O2) + b_CO P_CO)^2)

Once again, it is interesting to look at certain limits. If the CO is much more strongly bound to the surface such that

b_CO P_CO ≫ 1 + √(bO P_O2)

then

1 + √(bO P_O2) + b_CO P_CO ≈ b_CO P_CO

and the Equation (Ex1.1) simplifies to give

rate ≈ (k√(bO P_O2))/(b_CO P_CO) = k'(P_O2^(1/2))/(P_CO)

In this limit the kinetics are half-order with respect to the gas phase pressure of molecular oxygen, but negative order with respect to the CO partial pressure, i.e. CO acts as a poison (despite being a reactant) and increasing its pressure slows down the reaction. This is because the CO is so strongly bound to the surface that it blocks oxygen adsorbing, and without sufficient oxygen atoms on the surface the rate of reaction is reduced.

## Contributors and Attributions

- Roger Nix (Queen Mary, University of London)
