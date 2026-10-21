---
title: "21.1: Entropy Increases with Increasing Temperature"
book: "Physical Chemistry (LibreTexts)"
chapter: "21: Entropy and the Third Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/21%3A_Entropy_and_the_Third_Law_of_Thermodynamics/21.01%3A_Entropy_Increases_with_Increasing_Temperature"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Define entropy and its relation to energy flow.

## Entropy versus temperature

We can put together the first and the second law for a reversible process with no other work than volume (PV) work and obtain:

dU = δq_rev + δw_rev

Entropy is the dispersal of energy and is related to heat:

δq_rev = TdS

Work is related to the change in volume:

δw_rev = −PdV

Plugging these into our expression for dU for reversible changes:

dU = TdS − PdV

We no longer have any path functions in the expression, as U, S and V are all state functions. This means this expression must be an exact differential. We can generalize the expression to hold for irreversible processes, but then the expression becomes an inequality:

dU ≤ TdS − PdV

This equality expresses U as a function of two variables, entropy and volume: U(S, V). S and V are the natural variables of U.

### Entropy and heat capacity

At constant volume, dU becomes:

dU = TdS

Recall that internal energy is related to constant volume heat capacity, CV:

CV = (dU/dT)_V

Combining these two expressions, we obtain:

dS = ((CV)/T)dT

Integrating:

ΔS = ∫_T1^T2 ((CV(T))/T)dT

If we know how CV changes with temperature, we can calculate the change in entropy, ΔS. Since heat capacity is always a positive value, entropy must increase as the temperature increases. There is nothing to stop us from expressing U in other variables, e.g. T and V. In fact, we can derive some interesting relationships if we do.

### Example 21.1.1

1. Write U as a function of T and V.
2. Write U as a function of its natural variables.
3. Rearrange (2) to find an expression for dS.
4. Substitute (1) into (3) and rearrange. This is the definition of CV.
5. Write out S as a function of T and V.

<!-- end of example -->

We can also derive an expression for the change in entropy as a function of constant pressure heat capacity, CP. To start, we need to change from internal energy, U, to enthalpy, H:

H = U + PV

dH = dU + d(PV)

= dU + PdV + VdP

For reversible processes:

dH = dU + PdV + VdP

= TdS − PdV + PdV + VdP

[Note: corrected; the source prints "= TdS − PdV + PdV + VP" where this reads "= TdS − PdV + PdV + VdP". VdP: the d is missing.]

= TdS + VdP

The natural variables of the enthalpy are S and P (not: V). A similar derivation as above shows that the temperature change of entropy is related to the constant pressure heat capacity:

dH = TdS + VdP

At constant pressure:

dH = TdS

[Note: corrected; the source prints "dH = TdS + VdP" where this reads "dH = TdS". At constant pressure dP = 0, so dH = TdS.]

Recall that:

CP = ((∂H)/(∂T))_P

[Note: corrected; the source prints "CP = dH/dT" where this reads "CP = ((∂H)/(∂T))_P". The constant-pressure derivative.]

Combining, we obtain:

dS = ((CP)/T)dT

Integrating:

ΔS = ∫_T1^T2 ((CP(T))/T)dT

This means that if we know the heat capacities as a function of temperature we can calculate how the entropy changes with temperature. Usually it is easier to obtain data under constant P conditions than for constant V, so that the route with Cp is the more common one.
