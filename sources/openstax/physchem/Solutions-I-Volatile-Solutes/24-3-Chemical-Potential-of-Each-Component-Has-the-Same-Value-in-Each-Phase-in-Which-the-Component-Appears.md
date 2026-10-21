---
title: "24.3: Chemical Potential of Each Component Has the Same Value in Each Phase in Which the Component Appears"
book: "Physical Chemistry (LibreTexts)"
chapter: "24: Solutions I - Volatile Solutes"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/24%3A_Solutions_I_-_Volatile_Solutes/24.03%3A_Chemical_Potential_of_Each_Component_Has_the_Same_Value_in_Each_Phase_in_Which_the_Component_Appears"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

In much the same fashion as the partial molar volume is defined, the partial molar Gibbs function is defined for compound i in a mixture:

μi = ((∂G)/(∂ni))_(P, T, nj ≠ i)

The partial molar function is of particular importance and is called the chemical potential. The chemical potential tells how the Gibbs function will change as the composition of the mixture changes. Since systems tend to seek a minimum aggregate Gibbs function, the chemical potential will point to the direction the system can move in order to reduce the total Gibbs function and reach equilibrium. In general, the total change in the Gibbs function (dG) can be calculated from:

dG = ((∂G)/(∂P))_(T, ni) dP + ((∂G)/(∂T))_(P, ni) dT + Σi((∂G)/(∂ni))_(P, T, nj ≠ i) dni

[Note: corrected; the source prints "Σi((∂G)/(∂ni))_(T, nj ≠ i) dni" where this reads "Σi((∂G)/(∂ni))_(P, T, nj ≠ i) dni". The chemical potential is taken at constant P and T, as defined above.]

Or, by substituting the definition for the chemical potential, and evaluating the pressure and temperature derivatives:

dG = VdP − SdT + Σi μi dni

But as it turns out, the chemical potential can be defined as the partial molar quantity of any of the four major thermodynamic functions U, H, A, or G:

Table 24.3.1: Chemical potential can be defined as the partial molar derivative any of the four major thermodynamic functions

| dU = TdS − PdV + Σi μi dni | μi = ((∂U)/(∂ni))_(S, V, nj ≠ i) |
| --- | --- |
| dH = TdS + VdP + Σi μi dni | μi = ((∂H)/(∂ni))_(S, P, nj ≠ i) |
| dA = −PdV − SdT + Σi μi dni | μi = ((∂A)/(∂ni))_(V, T, nj ≠ i) |
| dG = VdP − SdT + Σi μi dni | μi = ((∂G)/(∂ni))_(P, T, nj ≠ i) |

[Note: corrected; the source prints "| dH = TdS − VdT + Σi μi dni" where this reads "| dH = TdS + VdP + Σi μi dni"; the source prints "| dA = −PdV − TdS + Σi μi dni" where this reads "| dA = −PdV − SdT + Σi μi dni". H has natural variables S and P, and A has V and T, as the derivatives beside them show.]

The last definition, in which the chemical potential is defined as the partial molar Gibbs function, is the most commonly used, and perhaps the most useful (Equation (eq1)). As the partial most Gibbs function, it is easy to show that:

dμ = VdP − SdT

where V is the molar volume, and S is the molar entropy. Using this expression, it is easy to show that:

((∂μ)/(∂P))_T = V

and so at constant temperature:

∫_(μ^o)^μ dμ = ∫_(P^o)^P V dP

So that for a substance for which the molar volume is fairly independent of pressure at constant temperature (i. e., κT is very small), therefore Equation (eq5) becomes:

∫_(μ^o)^μ dμ = V∫_(P^o)^P dP

μ − μ^o = V(P − P^o)

or:

μ = μ^o + V(P − P^o)

Where P^o is the standard state pressure (1 bar) and μ^o is the chemical potential at the standard pressure. If the substance is highly compressible (such as a gas) the pressure dependence of the molar volume is needed to complete the integral. If the substance is an ideal gas:

V = RT/P

So at constant temperature, Equation (eq5) then becomes:

∫_(μ^o)^μ dμ = RT∫_(P^o)^P dP/P

[Note: corrected; the source prints "RTint_(P^o)^P dP/P" where this reads "RT∫_(P^o)^P dP/P". The source's TeX lacks the backslash of \int, so the page shows the letters "int".]

or:

μ = μ^o + RT ln(P/(P^o))

A lot of chemistry takes place in solution and therefore this topic is of prime interest for chemistry.

## Thermodynamic potentials of solutions

The Gibbs free energy of an ideal gas depends logarithmically on pressure:

G = G^o + RT ln(P/(P^o))

P^⦵ is is often dropped out of the formula. and we write:

G = G^o + RT ln P

Notice however that although P and P/P^o have the same numerical value, the dimensions are different. P usually has dimensions of bar, but P/P^o is dimensionless.

If we have a gas mixture we can hold the same logarithmic argument for each partial pressure as the gases do not notice each other. We do need to take into account the number of moles of each and work with (partial) molar values, i.e. the thermodynamic potential:

μj = μj^o + RT ln((Pj)/(P^o))

If we are dealing with an equilibrium over an ideal liquid solution the situation in the gas phase gives us a probe for the situation in the liquid. The equilibrium must hold for each of all components j (say two in binary mixture). That means that for each of them the thermodynamic potential in the liquid and in the gas must be equal:

μj^(sln) = μj^(gas)

for all j. Consider what happens to a pure component, e.g. j = 1 in equilibrium with its vapor. We can write:

μ1^(pure liq) = μ1^(pure vapor) = μ1^o + RT ln((P1^*)/(P^o))

The asterisk in P1^* denotes the equilibrium vapor pressure of pure component 1 and we will use that to indicate the thermodynamic potential of pure compounds too:

μ1^(*liq) = μ1^o + RT ln((P1^*)/(P^o))

Combining Equations (A) and (B) we find a relationship between the solution and the pure liquid:

μj^(sln) = μj^* + RT ln((Pj)/(Pj^*))

Notice that the gas and its pressure is used to link the mixture and the pure compound.
