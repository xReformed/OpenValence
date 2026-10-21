---
title: "23.4: The Clausius-Clapeyron Equation"
book: "Physical Chemistry (LibreTexts)"
chapter: "23: Phase Equilibria"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/23%3A_Phase_Equilibria/23.04%3A_The_Clausius-Clapeyron_Equation"
author: "Anonymous"
license: "CC BY 4.0"
---

## Evaporation

In Section 23.3, the Clapeyron Equation was derived for melting points.

dP/dT = (ΔH_molar)/(TΔV_molar)

However, our argument is actually quite general and should hold for vapor equilibria as well. The only problem is that the molar volume of gases are by no means so nicely constant as they are for condensed phases. (i. e., for condenses phases, both α and κ are pretty small).

We can write:

dP/dT = (ΔH_molar)/(TΔV_molar) = (ΔH_molar)/(T[V_molar^(gas) − V_molar^(liquid)])

[Note: corrected; the source prints "= ((ΔH_molar)/T)[V_molar^(gas) − V_molar^(liquid)]" where this reads "= (ΔH_molar)/(T[V_molar^(gas) − V_molar^(liquid)])". ΔV is in the denominator.]

as

V_molar^(gas) ≫ V_molar^(liquid)

we can approximate

V_molar^(gas) − V_molar^(liquid)

by just taking V_molar^(gas). Further more if the vapor is considered an ideal gas, then

V_molar^(gas) = RT/P

We get

1/P · dP/dT = (d ln P)/dT = (ΔH_molar^(vap))/RT^2

Equation (CCe) is known as the Clausius-Clapeyron equation. We can further work our the integration and find the how the equilibrium vapor pressure changes with temperature:

ln((P2)/(P1)) = ((−ΔH_molar^(vap))/R)[1/(T2) − 1/(T1)]

Thus if we know the molar enthalpy of vaporization we can predict the vapor lines in the diagram. Of course the approximations made are likely to lead to deviations if the vapor is not ideal or very dense (e.g., approaching the critical point).

## The Clapeyron Equation

The Clapeyron attempts to answer the question of what the shape of a two-phase coexistence line is. In the P − T plane, we see the a function P(T), which gives us the dependence of P on T along a coexistence curve.

Consider two phases, denoted α and β, in equilibrium with each other. These could be solid and liquid, liquid and gas, solid and gas, two solid phases, et. Let μα(P, T) and μβ(P, T) be the chemical potentials of the two phases. We have just seen that

μα(P, T) = μβ(P, T)

Next, suppose that the pressure and temperature are changed by dP and dT. The changes in the chemical potentials of each phase are

dμα(P, T) = dμβ(P, T)

((∂μα)/(∂P))_T dP + ((∂μα)/(∂T))_P dT = ((∂μβ)/(∂P))_T dP + ((∂μβ)/(∂T))_P dT

However, since G(n, P, T) = nμ(P, T), the molar free energy Ḡ(P, T), which is G(n, P, T)/n, is also just equal to the chemical potential

Ḡ(P, T) = (G(n, P, T))/n = μ(P, T)

Moreover, the derivatives of Ḡ are

((∂Ḡ)/(∂P))_T = V̄,    ((∂Ḡ)/(∂T))_P = −S̄

Applying these results to the chemical potential condition in Equation (14.2b), we obtain

((∂Ḡα)/(∂P))_T dP + ((∂Ḡα)/(∂T))_P dT = ((∂Ḡβ)/(∂P))_T dP + ((∂Ḡβ)/(∂T))_P dT

V̄α dP − S̄α dT = V̄β dP − S̄β dT

Dividing through by dT, we obtain

V̄α (∂P)/(∂T) − S̄α = V̄β (∂P)/(∂T) − S̄β

(V̄α − V̄β)(∂P)/(∂T) = S̄α − S̄β

dP/dT = (S̄α − S̄β)/(V̄α − V̄β)

The importance of the quantity dP/dT is that is represents the slope of the coexistence curve on the phase diagram between the two phases. Now, in equilibrium dG = 0, and since G = H − TS, it follows that dH = T dS at fixed T. In the narrow temperature range in which the two phases are in equilibrium, ΔḠ = ΔH̄ − TΔS̄ = 0, hence, we can write ΔS̄ = ΔH̄/T. Consequently, we can write the molar entropy difference as

[Note: corrected; the source prints "we can assume that H is independent of T, hence, we can write S = H/T." where this reads "ΔḠ = ΔH̄ − TΔS̄ = 0, hence, we can write ΔS̄ = ΔH̄/T.". S = H/T is false for absolute quantities; at coexistence the transition's ΔS = ΔH/T holds exactly.]

S̄α − S̄β = (H̄α − H̄β)/T

and the pressure derivative dP/dT becomes

dP/dT = (H̄α − H̄β)/(T(V̄α − V̄β)) = (Δ_αβ H̄)/(TΔ_αβ V̄)

a result known as the Clapeyron equation, which tells us that the slope of the coexistence curve is related to the ratio of the molar enthalpy between the phases to the change in the molar volume between the phases. If the phase equilibrium is between the solid and liquid phases, then Δ_αβ H̄ and Δ_αβ V̄ are ΔH̄_fus and ΔV̄_fus, respectively. If the phase equilibrium is between the liquid and gas phases, then Δ_αβ H̄ and Δ_αβ V̄ are ΔH̄_vap and ΔV̄_vap, respectively.

For the liquid-gas equilibrium, some interesting approximations can be made in the use of the Clapeyron equation. For this equilibrium, Equation (14.8) becomes

dP/dT = (ΔH̄_vap)/(T(V̄g − V̄l))

In this case, V̄g ≫ V̄l, and we can approximate Equation (14.9) as

dP/dT ≈ (ΔH̄_vap)/(TV̄g)

Suppose that we can treat the vapor phase as an ideal gas. Certainly, this is not a good approximation so close to the vaporization point, but it leads to an example we can integrate. Since PVg = nRT, PV̄g = RT, Equation (14.10) becomes

dP/dT = (ΔH̄_vap P)/RT^2

1/P · dP/dT = (ΔH̄_vap)/RT^2

(d ln P)/dT = (ΔH̄_vap)/RT^2

which is called the Clausius-Clapeyron equation. We now integrate both sides, which yields

ln P = −(ΔH̄_vap)/RT + C

where C is a constant of integration. Exponentiating both sides, we find

P(T) = C'e^(−ΔH̄_vap/RT)

which actually has the wrong curvature for large T, but since the liquid-vapor coexistence line terminates in a critical point, as long as T is not too large, the approximation leading to the above expression is not that bad.

If we, instead, integrate both sides, the left from P1 to P2, and the right from T1 to T2, we find

∫_P1^P2 d ln P = ∫_T1^T2 ((ΔH̄_vap)/RT^2)dT

ln ((P2)/(P1)) = −((ΔH̄_vap)/R)(1/(T2) − 1/(T1))

= ((ΔH̄_vap)/R)((T2 − T1)/(T1T2))

[Note: corrected; the source prints "((T1 − T1)/(T1T2))" where this reads "((T2 − T1)/(T1T2))". T2 − T1.]

assuming that ΔH̄_vap is independent of T. Here P1 and P2 are the equilibrium vapor pressures at T1 and T2. Suppose we know P2 at a temperature T2, and we want to know P3 at another temperature T3. The above result can be written as

[Note: corrected; the source prints "Here P1 is the pressure of the liquid phase, and P2 is the pressure of the vapor phase." where this reads "Here P1 and P2 are the equilibrium vapor pressures at T1 and T2.". At each temperature both phases have the same pressure.]

ln ((P3)/(P1)) = −((ΔH̄_vap)/R)(1/(T3) − 1/(T1))

Subtracting the two results, we obtain

ln ((P2)/(P3)) = −((ΔH̄_vap)/R)(1/(T2) − 1/(T3))

so that we can determine the vapor pressure at any temperature if it is known as one temperature.

In order to illustrate the use of this result, consider the following example:

### Example 23.4.1

At 1 bar, the boiling point of water is 373 K. At what pressure does water boil at 473 K? Take the heat of vaporization of water to be 40.65 kJ/mol.

**Solution**

Let P1 = 1 bar and T1 = 373 K. Take T2 = 473 K, and we need to calculate P2. Substituting in the numbers, we find

ln P2(bar) = −(((40.65 kJ/mol)(1000 J/kJ))/(8.3145 J/mol·K))(1/(473 K) − 1/(373 K)) = 2.77

P2(bar) = (1 bar) e^2.77 = 16 bar

### Learning Objectives

- Apply the Clausius-Clapeyron equation to estimate the vapor pressure at any temperature.
- Estimate the heat of phase transition from the vapor pressures measured at two temperatures.

The vaporization curves of most liquids have similar shapes with the vapor pressure steadily increasing as the temperature increases (Figure 23.4.1).

Figure 23.4.1: The Vapor Pressures of Several Liquids as a Function of Temperature. The point at which the vapor pressure curve crosses the P = 1 atm line (dashed) is the normal boiling point of the liquid. (CC BY-SA-NC 3.0; Anonymous)

A good approach is to find a mathematical model for the pressure increase as a function of temperature. Experiments showed that the vapor pressure P and temperature T are related,

P ∝ exp(−(ΔH_vap)/RT)

where ΔH_vap is the Enthalpy (heat) of Vaporization and R is the gas constant (8.3145 J mol^-1 K^-1).

A simple relationship can be found by integrating Equation (1) between two pressure-temperature endpoints:

ln((P1)/(P2)) = ((ΔH_vap)/R)(1/(T2) − 1/(T1))

where P1 and P2 are the vapor pressures at two temperatures T1 and T2. Equation (2) is known as the Clausius-Clapeyron Equation and allows us to estimate the vapor pressure at another temperature, if the vapor pressure is known at some temperature, and if the enthalpy of vaporization is known.

### Alternative Formulation

The order of the temperatures in Equation (2) matters as the Clausius-Clapeyron Equation is sometimes written with a negative sign (and switched order of temperatures):

ln((P1)/(P2)) = −((ΔH_vap)/R)(1/(T1) − 1/(T2))

### Example 23.4.1: Vapor Pressure of Water

The vapor pressure of water is 1.0 atm at 373 K, and the enthalpy of vaporization is 40.7 kJ mol^-1. Estimate the vapor pressure at temperature 363 and 383 K respectively.

**Solution**

Using the Clausius-Clapeyron equation (Equation (2B)), we have:

P363 = 1.0 exp[−((40,700)/8.3145)(1/(363 K) − 1/(373 K))]

= 0.697 atm

P383 = 1.0 exp[−((40,700)/8.3145)(1/(383 K) − 1/(373 K))]

= 1.409 atm

Note that the increase in vapor pressure from 363 K to 373 K is 0.303 atm, but the increase from 373 to 383 K is 0.409 atm. The increase in vapor pressure is not a linear process.

Discussion

We can use the Clausius-Clapeyron equation to construct the entire vaporization curve. There is a deviation from experimental value, that is because the enthalpy of vaporization varies slightly with temperature.

<!-- end of example -->

The Clausius-Clapeyron equation can be also applied to sublimation; the following example shows its application in estimating the heat of sublimation.

### Example 23.4.2: Sublimation of Ice

The vapor pressures of ice at 268 K and 273 K are 2.965 and 4.560 torr respectively. Estimate the heat of sublimation of ice.

**Solution**

The enthalpy of sublimation is ΔH_sub. Use a piece of paper and derive the Clausius-Clapeyron equation so that you can get the form:

ΔH_sub = (R ln((P273)/(P268)))/(1/(268 K) − 1/(273 K))

= (8.3145 ln(4.560/2.965))/(1/(268 K) − 1/(273 K))

= 52,370 J mol^−1

Note that the heat of sublimation is the sum of heat of melting (6,006 J/mol at 0°C and 101 kPa) and the heat of vaporization (45,051 J/mol at 0 °C).

### Exercise 23.4.2

Show that the vapor pressure of ice at 274 K is higher than that of water at the same temperature. Note the curve of vaporization is also called the curve of vaporization.

[Note: this sentence is circular in the source. The text is left as printed.]

### Example 23.4.3: Vaporization of Ethanol

Calculate ΔH_vap for ethanol, given vapor pressure at 40 ^oC = 150 torr. The normal boiling point for ethanol is 78 ^oC.

**Solution**

Recognize that we have TWO sets of (P, T) data:

- Set 1: (150 torr at 40+273K)
- Set 2: (760 torr at 78+273K)

We then directly use these data in Equation (2B)

ln(150/760) = ((−ΔH_vap)/8.314)[1/313 − 1/351]

ln 150 − ln 760 = ((−ΔH_vap)/8.314)[1/313 − 1/351]

−1.623 = ((−ΔH_vap)/8.314)[3.195 × 10^−3 − 2.849 × 10^−3]

[Note: corrected; the source prints "[0.0032 − 0.0028]" where this reads "[3.195 × 10^−3 − 2.849 × 10^−3]". Rounded to 0.0004 the bracket gives 33.7 kJ/mol; the result below, 39.0 kJ/mol, comes from the unrounded 3.459 × 10^−4.]

Then solving for ΔH_vap

ΔH_vap = 3.90 × 10^4 J/mol

= 39.0 kJ/mol

### Advanced Note

It is important to not use the Clausius-Clapeyron equation for the solid to liquid transition. That requires the use of the more general Clapeyron equation

dP/dT = (ΔH̄)/(TΔV̄)

where ΔH̄ and ΔV̄ is the molar change in enthalpy (the enthalpy of fusion in this case) and volume respectively between the two phases in the transition.
