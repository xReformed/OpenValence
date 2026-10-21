---
title: "13.12: The Selection Rule for the Rigid Rotor"
book: "Physical Chemistry (LibreTexts)"
chapter: "13: Molecular Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13%3A_Molecular_Spectroscopy/13.12%3A_The_Selection_Rule_for_the_Rigid_Rotor"
author: "Anonymous"
license: "CC BY-SA 4.0"
---

A selection rule describes how the probability of transitioning from one level to another cannot be zero. It has two sub-pieces: a gross selection rule and a specific selection rule. A gross selection rule illustrates characteristic requirements for atoms or molecules to display a spectrum of a given kind, such as an IR spectroscopy or a microwave spectroscopy. Once the atom or molecules follow the gross selection rule, the specific selection rule must be applied to the atom or molecules to determine whether a certain transition in quantum number may happen or not.

Selection rules specify the possible transitions among quantum levels due to absorption or emission of electromagnetic radiation. Incident electromagnetic radiation presents an oscillating electric field E0 cos(ωt) that interacts with a transition dipole. The dipole operator is μ = e·r where r is a vector pointing in a direction of space.

A dipole moment of a given state is

μz = ∫Ψ1^*μz Ψ1 dτ

A transition dipole moment is a transient dipolar polarization created by an interaction of electromagnetic radiation with a molecule

(μz)12 = ∫Ψ1^*μz Ψ2 dτ

In an experiment we present an electric field along the z axis (in the laboratory frame) and we may consider specifically the interaction between the transition dipole along the x, y, or z axis of the molecule with this radiation. If μz is zero then a transition is forbidden. The selection rule is a statement of when μz is non-zero.

> The selection rule is a statement of when μz is non-zero.

## Rotational transitions

We can use the definition of the transition moment and the spherical harmonics to derive selection rules for a rigid rotator. Once again we assume that radiation is along the z axis.

(μz)_(J, M, J', M') = ∫0^(2π) ∫0^π Y_J'^(M')(θ, φ)^*μz YJ^M(θ, φ) sin θ dφ, dθ

[Note: corrected; the source prints "Y_J'^(M')(θ, φ)μz YJ^M(θ, φ)" where this reads "Y_J'^(M')(θ, φ)^*μz YJ^M(θ, φ)". The first spherical harmonic is complex-conjugated, which gives the e^(i(M − M')φ) below.]

Notice that μ must be non-zero in order for the transition moment to be non-zero. This proves that a molecule must have a permanent dipole moment in order to have a rotational spectrum. The spherical harmonics can be written as

[Note: corrected; the source prints "Notice that m must be non-zero" where this reads "Notice that μ must be non-zero". The source's Symbol-font μ came out as m.]

YJ^M(θ, φ) = N_JM PJ^(|M|)(cos θ)e^(iMφ)

where N_JM is a normalization constant. Using the standard substitution of x = cos θ we can express the rotational transition moment as

[Note: corrected; the source prints "x = cos q" where this reads "x = cos θ". The Symbol-font θ came out as q.]

(μz)_(J, M, J', M') = μ N_JM N_J'M'∫0^(2π) e^{i(M − M')φ} dφ∫_−1^1 P_J'^(|M'|)(x) x PJ^(|M|)(x)dx

[Note: corrected; the source prints "e^{I(M − M')φ}" where this reads "e^{i(M − M')φ}"; the source prints "P_J'^(|M'|)(x)PJ^(|M|)(x)dx" where this reads "P_J'^(|M'|)(x) x PJ^(|M|)(x)dx". i, not I; and μz = μ cos θ = μx, so the integrand has a factor x, which the recursion below is needed for.]

The integral over φ is zero unless M = M' so ΔM = 0 is part of the rigid rotator selection rule. Integration over φ for M = M' gives 2π so we have

[Note: corrected; the source prints "The integral over f is zero" where this reads "The integral over φ is zero". The Symbol-font φ came out as f.]

(μz)_(J, M, J', M') = 2πμ N_JM N_J'M'∫_−1^1 P_J'^(|M'|)(x) x PJ^(|M|)(x)dx

[Note: corrected; the source prints "P_J'^(|M'|)(x)PJ^(|M|)(x)dx" where this reads "P_J'^(|M'|)(x) x PJ^(|M|)(x)dx". As above: the factor x.]

We can evaluate this integral using the identity

(2J + 1)x PJ^(|M|)(x) = (J−|M| + 1)P_(J+1)^(|M|)(x) + (J + |M|)P_(J−1)^(|M|)(x)

[Note: corrected; the source prints "(2J + 1)x PJ^(|M])(x) = (J−|M| + 1)P_(J+1)^(|M|)(x) + (J−|M|)P_(J−1)^(|M|)(x)" where this reads "(2J + 1)x PJ^(|M|)(x) = (J−|M| + 1)P_(J+1)^(|M|)(x) + (J + |M|)P_(J−1)^(|M|)(x)". The recursion has (J + |M|) for P_(J−1); the source also types |M] for |M|.]

Substituting into the integral one obtains an integral which will vanish unless J' = J + 1 or J' = J − 1.

∫_−1^1 P_J'^(|M'|)(x)((((J−|M| + 1))/((2J + 1)))P_(J+1)^(|M|)(x) + (((J + |M|))/((2J + 1)))P_(J−1)^(|M|)(x))dx

[Note: corrected; the source prints "(((J−|M|))/((2J + 1)))P_(J−1)^(|M|)(x))dx" where this reads "(((J + |M|))/((2J + 1)))P_(J−1)^(|M|)(x))dx". As above: (J + |M|).]

This leads to the selection rule ΔJ = ±1 for absorptive rotational transitions. Keep in mind the physical interpretation of the quantum numbers J and M as the total angular momentum and z-component of angular momentum, respectively. As stated above in the section on electronic transitions, these selection rules also apply to the orbital angular momentum (Δl = ±1, Δm = 0).
