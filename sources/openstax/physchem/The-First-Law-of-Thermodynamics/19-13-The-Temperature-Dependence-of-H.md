---
title: "19.13: The Temperature Dependence of ΔH"
book: "Physical Chemistry (LibreTexts)"
chapter: "19: The First Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/19%3A_The_First_Law_of_Thermodynamics/19.13%3A_The_Temperature_Dependence_of_H"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

It is often required to know thermodynamic functions (such as enthalpy) at temperatures other than those available from tabulated data. Fortunately, the conversion to other temperatures is not difficult.

At constant pressure

dH = Cp dT

And so for a temperature change from T1 to T2

ΔH = ∫_T1^T2 Cp dT

[Note: corrected; the source prints "∫_T2^T2" where this reads "∫_T1^T2". The limits are T1 and T2.]

Equation (EQ1) is often referred to as Kirchhoff's Law. If Cp is independent of temperature, then

ΔH = Cp ΔT

If the temperature dependence of the heat capacity is known, it can be incorporated into the integral in Equation (EQ1). A common empirical model used to fit heat capacities over broad temperature ranges is

Cp(T) = a + bT + c/T^2

After combining Equations (EQ15) and (EQ1), the enthalpy change for the temperature change can be found obtained by a simple integration

ΔH = ∫_T1^T2 (a + bT + c/T^2)dT

Solving the definite integral yields

ΔH = [aT + (b/2)T^2 − c/T]_T1^T2

= a(T2 − T1) + (b/2)(T2^2 − T1^2) − c(1/(T2) − 1/(T1))

This expression can then be used with experimentally determined values of a, b, and c, some of which are shown in the following table.

Table 19.13.1: Empirical Parameters for the temperature dependence of Cp

| Substance | a (J mol^-1 K^-1) | b (J mol^-1 K^-2) | c (J mol^-1 K) |
| --- | --- | --- | --- |
| C(gr) | 16.86 | 4.77 x 10^-3 | -8.54 x 10^5 |
| CO2(g) | 44.22 | 8.79 x 10^-3 | -8.62 x 10^5 |
| H2O(l) | 75.29 | 0 | 0 |
| N2(g) | 28.58 | 3.77 x 10^-3 | -5.0 x 10^4 |
| Pb(s) | 22.13 | 1.172 x 10^-2 | 9.6 x 10^4 |

### Example 19.13.1: Heating Lead

What is the molar enthalpy change for a temperature increase from 273 K to 353 K for Pb(s)?

**Solution**

The enthalpy change is given by Equation (EQ1) with a temperature dependence Cp given by Equation (EQ15) using the parameters in Table 19.13.1. This results in the integral form (Equation (ineq)):

[Note: corrected; the source prints "Cp given by Equation (EQ1)" where this reads "Cp given by Equation (EQ15)". The heat-capacity polynomial is Equation (EQ15).]

ΔH = a(T2 − T1) + (b/2)(T2^2 − T1^2) − c(1/(T2) − 1/(T1))

when substituted with the relevant parameters of Pb(s) from Table 19.13.1.

ΔH = (22.13 (J/(mol K))(353 K − 273 K)

[Note: corrected; the source prints "(22.14 (J/(mol K))" where this reads "(22.13 (J/(mol K))". The table gives 22.13, and 1770.4 = 22.13 × 80.]

+ ((1.172 × 10^−2 J/(mol K^2))/2)((353 K)^2 − (273 K)^2)

−9.6 × 10^4 ((J K)/mol)(1/((353 K)) − 1/((273 K)))

ΔH = 1770.4 J/mol + 293.5 J/mol + 79.7 J/mol

[Note: corrected; the source prints "ΔH = 1770.4 J/mol + 295.5 J/mol + 470.5 J/mol" where this reads "ΔH = 1770.4 J/mol + 293.5 J/mol + 79.7 J/mol". (0.01172/2)(353^2 − 273^2) = 293.5 and 9.6 × 10^4 (1/273 − 1/353) = 79.7 J/mol.]

= 2143.6 J/mol

[Note: corrected; the source prints "= 2534.4 J/mol" where this reads "= 2143.6 J/mol". 1770.4 + 293.5 + 79.7 = 2143.6 J/mol.]

<!-- end of example -->

For chemical reactions, the reaction enthalpy at differing temperatures can be calculated from

ΔH_rxn(T2) = ΔH_rxn(T1) + ∫_T1^T2 ΔCp dT

[Note: corrected; the source prints "ΔCp ΔT" where this reads "ΔCp dT". dT, under the integral.]

### Example 19.13.2: Enthalpy of Formation

The enthalpy of formation of NH3(g) is -46.11 kJ/mol at 25 ^oC. Calculate the enthalpy of formation at 100 ^oC.

**Solution**

1/2 N2(g) + 3/2 H2(g) ⇌ NH3(g)

[Note: corrected; the source prints "N2(g) + 3 H2(g) ⇌ 2 NH3(g)" where this reads "1/2 N2(g) + 3/2 H2(g) ⇌ NH3(g)". ΔH = −46.11 kJ/mol is per mole of NH3, so the reaction is written for one NH3.]

with ΔH (298 K) = −46.11 kJ/mol

| Compound | Cp (J mol^-1 K^-1) |
| --- | --- |
| N2(g) | 29.12 |
| H2(g) | 28.82 |
| NH3(g) | 35.06 |

ΔH(373 K) = ΔH(298 K) + ΔCp ΔT

= −46110 J/mol + [(35.06 J/(mol K)) − 1/2(29.12 J/(mol K)) − 3/2(28.82 J/(mol K))](373 K − 298 K)

[Note: corrected; the source prints "= −46110 + (J/mol)[2(35.06 J/(mol K)) − (29.12 J/(mol K)) − 3(28.82 J/(mol K))]" where this reads "= −46110 J/mol + [(35.06 J/(mol K)) − 1/2(29.12 J/(mol K)) − 3/2(28.82 J/(mol K))]". For one NH3, ΔCp = 35.06 − 14.56 − 43.23 = −22.73 J/(mol K).]

= −47.8 kJ/mol

[Note: corrected; the source prints "= −49.5 kJ/mol" where this reads "= −47.8 kJ/mol". −46.11 + (−22.73 × 75)/1000 = −47.8 kJ/mol.]
