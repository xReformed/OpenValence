---
title: "22.7: The Gibbs-Helmholtz Equation"
book: "Physical Chemistry (LibreTexts)"
chapter: "22: Helmholtz and Gibbs Energies"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/22%3A_Helmholtz_and_Gibbs_Energies/22.07%3A_The_Gibbs-Helmholtz_Equation"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Ideal gas

For a mole of ideal gas we can use the gas law to integrate volume over pressure and we get

ΔG_molar = RT ln((P2)/(P1))

It is customary to identify one of the pressures (P1) with the standard state of 1 bar and use the plimsoll to indicate the fact that we are referring to a standard state by writing:

[Note: corrected; the source prints "(P1}" where this reads "(P1)". A brace typed for a bracket.]

G_molar(P) = G_molar^o + RT ln(P/1) = G_molar^o + RT ln[P]

The fact that we are making the function intensive (per mole) is usually indicated by putting a bar over the G symbol, although this is often omitted for G^⦵_molar

### Solids

For solids the volume does not change very much with pressure (the isothermal compressibility κ is small), so can assume it more or less constant:

G(P_final) = G(P_initial) + ∫VdP(from init to final) ≈ G(P_initial) + V∫dP(from init to final) = G(P_initial) + VΔP

## The Gibbs-Helmholtz Expression

G/T = H/T − S

Take the derivative under constant pressure of each side to get

((∂G/T)/(∂T))_P = −H/T^2 + (1/T)((∂H)/(∂T))_P − ((∂S)/(∂T))_P

We make use of the relationship between Cp and H and Cp and S

((∂G/T)/(∂T))_P = −H/T^2 + ~~(CP)/T~~−~~(CP)/T~~

= −H/T^2

We said before that S is a first order derivative of G. As you can see from this derivation the enthalpy H is also a first order derivative, albeit not of G itself, but of G/T.

((∂ΔG/T)/(∂T))_P = −(△H)/T^2

The last step in the derivation simply takes the step before twice -say for the G and H at the begin and end of a process- and subtracts the two identical equations leading to a Δ symbol. In this differential form the Gibbs-Helmholtz equation can be applied to any process.

## Gibbs Energy as a Function of Temperature

If heat capacities are know from 0 K we could determine both enthalpy and entropy by integration:

S(T) = S(0) + ∫0^T ((Cp)/T)dT

H(T) = H(0) + ∫0^T Cp dT

As we have seen we must be careful at phase transitions such as melting or vaporization. At these points the curves are discontinuous and the derivative Cp is undefined.

H(T) = H(0) + ∫0^(T_fus)Cp(T)_solid dT + ΔH_fus + ∫_(T_fus)^(T_boil)Cp(T)_liquid dT + ΔH_vap + etc.

S(T) = S(0) + ∫0^(T_fus)((Cp(T)_solid)/T)dT + ΔS_fus + ∫_(T_fus)^(T_boil)((Cp(T)_liquid)/T)dT + ΔS_vap + etc.

= S(0) + ∫0^(T_fus)((Cp(T)_solid)/T)dT + (ΔH_fus)/(T_fus) + ∫_(T_fus)^(T_boil)((Cp(T)_liquid)/T)dT + (ΔH_vap)/(T_boil) + etc.

with H(T = 0) = undefined and S(T = 0) = 0 from the third law of thermodynamics.

We also discussed the fact that the third law allows us to define S(0) as zero in most cases. For the enthalpy we cannot do that so that our curve is with respect to an undefined zero point. We really should plot H(T) − H(0) and leave H(0) undefined.

Because the Gibbs free energy G = H − TS we can also construct a curve for G as a function of temperature, simply by combining the H and the S curves (Equations (Hcurve) and (Scurve)):

G(T) = H(T) − TS(T)

Interestingly, if we do so, the discontinuties at the phase transition points will drop out for G because at these points Δ_trs H = T_trs Δ_trs S. Therefore, G is always continuous.

The H(0) problem does not disappear so that once again our curve is subject to an arbitrary offset in the y-direction. The best thing we can do is plot the quantity G(T) − H(0) and leave the offset H(0) undefined.

We have seen above that the derivative of G with temperature is −S. As entropy is always positive, this means that the G-curve is always descending with temperature. It also means that although the curve is continuous even at the phase transitions, the slope of the G curve is not, because the derivative −S makes a jump there. Fig. 22.7 in the book shows an example of such a curve for benzene. Note the kinks in the curve at the mp and the boiling point.
