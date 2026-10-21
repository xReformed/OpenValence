---
title: "24.7: Activities of Nonideal Solutions"
book: "Physical Chemistry (LibreTexts)"
chapter: "24: Solutions I - Volatile Solutes"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/24%3A_Solutions_I_-_Volatile_Solutes/24.07%3A_Activities_of_Nonideal_Solutions"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The bulk of the discussion in this chapter dealt with ideal solutions. However, real solutions will deviate from this kind of behavior. So much as in the case of gases, where fugacity was introduced to allow us to use the ideal models, activity is used to allow for the deviation of real solutes from limiting ideal behavior. The activity of a solute is related to its concentration by

aB = γ (mB)/(m^o)

where γ is the activity coefficient, mB is the molaliy of the solute, and m^o is unit molality. The activity coefficient is unitless in this definition, and so the activity itself is also unitless. Furthermore, the activity coefficient approaches unity as the molality of the solute approaches zero, insuring that dilute solutions behave ideally. The use of activity to describe the solute allows us to use the simple model for chemical potential by inserting the activity of a solute in place of its mole fraction:

μB = μB^o + RT ln aB

The problem that then remains is the measurement of the activity coefficients themselves, which may depend on temperature, pressure, and even concentration.

## Activity Coefficients for Ionic Solutes

For an ionic substance that dissociates upon dissolving

MX(s) → M^+(aq) + X^−(aq)

the chemical potential of the cation can be denoted μ_(+) and that of the anion as μ_(−). For a solution, the total molar Gibbs function of the solutes is given by

G = μ_(+) + μ_(−)

where

μ = μ^* + RT ln a

where μ^* denotes the chemical potential of an ideal solution, and a is the activity of the solute. Substituting his into the above relationship yields

G = μ_(+)^* + RT ln a_(+) + μ_(−)^* + RT ln a_(−)

Using a molal definition for the activity coefficient

ai = γi mi

The expression for the total molar Gibbs function of the solutes becomes

G = μ_(+)^* + RT ln γ_(+)m_(+) + μ_(−)^* + RT ln γ_(−)m_(−)

This expression can be rearranged to yield

G = μ_(+)^* + μ_(−)^* + RT ln m_(+)m_(−) + RT ln γ_(+)γ_(−)

where all of the deviation from ideal behavior comes from the last term. Unfortunately, it impossible to experimentally deconvolute the term into the specific contributions of the two ions. So instead, we use a geometric average to define the mean activity coefficient, γ_±.

γ_± = √(γ_(+)γ_(−))

For a substance that dissociates according to the general process

Mx Xy(s) → xM^y+(aq) + yX^x−(aq)

the expression for the mean activity coefficient is given by

γ_± = (γ_(+)^x γ_(−)^y)^(1/(x + y))

[Note: corrected; the source prints "^(1/x + y)" where this reads "^(1/(x + y))". The mean is the (x + y)th root.]

### Debeye-Hückel Law

In 1923, Debeye and Hückel (Debye & Hückel, 1923) suggested a means of calculating the mean activity coefficients from experimental data. Briefly, they suggest that

log10γ_± = −(1.824 × 10^6)/((εT)^(3/2))|z_(+)z_(−)|√(I)

[Note: corrected; the source prints "log10γ_± = (1.824 × 10^6)/((εT)^(3/2))|z_(+) + z_(−)|√(I)" where this reads "log10γ_± = −(1.824 × 10^6)/((εT)^(3/2))|z_(+)z_(−)|√(I)". The Debye–Hückel limiting law has a minus sign and the product of the charges; with the sum, every 1:1 electrolyte would have γ± = 1. For water at 25 °C (ε = 78.5) the factor is 0.509.]

where ε is the dielectric constant of the solvent, T is the temperature in K, z_(+) and z_(−) are the charges on the ions, and I is the ionic strength of the solution. I is given by

I = 1/2 · (m_(+)z_(+)^2 + m_(−)z_(−)^2)/(m^o)

For a solution in water at 25 ^oC,

[Note: The page ends here: the page it reuses breaks off at this point. For water at 25 °C the law above reads log10 γ± = −0.509|z+z−|√I.]

As seen before activities are a way to account for deviation from ideal behavior while still keeping the formulism for the ideal case intact. For example in a ideal solution we have:

μ^(sln) = μ^* + RT ln xi

is replaced by

μ^(sln) = μ^* + RT ln ai

The relationship between ai and xi is often written using an activity coefficient γ:

ai = γi xi

## Raoult versus Henry

Implicitly we have made use of Raoult's law here because we originally used

xi = (Pi)/(Pi^*)

In the case of a solvent this makes sense because Raoult's law is still valid in the limiting case, but for the solute it would make more sense to use Henry's law as a basis for the definition of activity:

a_(solute, H) ≡ (P_solute)/(K_(x, H))

This does mean that the μ^* now becomes a μ^(*Henry) because the extrapolation of the Henry law all the way to the other side of the diagram where x_solute = 1 points to a point that is not the equilibrium vapor pressure of this component. In fact it represents a virtual state of the system that cannot be realized. This however does not affect the usefulness of the convention.

## Various concentration units

The subscript X was added to the K value because we are still using mole fractions. However Henry's law is often used with other concentration measures. The most important are:

- molarity
- molality
- mole fraction

Both the numerical values and the dimensions of K will differ depending on which concentration measure is used. In addition the pressure units can differ. For example for oxygen in water we have:

K_(x,H)= 4.259 10^4 atm

K_(cp,H)= 1.3 10^-3 mol/lit.atm

K_(pc,H)= 769.23 lit.atm/mol

As you can see K_(cp,H) is simply 1/K_(pc,H), both conventions are used..

Note that in this case a choice based on Raoult is really not feasible. At room temperature we are far above the critical point of oxygen which make the equilibrium vapor pressure a non-existent entity. Returning to activities we could use each of the versions of K as a basis for the activity definition. This means that when using activities it must be specified what scale we are using. Activities and Henry coefficients of dissolved gases in water (both fresh and salt) are quite important in geochemistry, environmental chemistry etc.

## Non-volatile solutes

A special case arises if the vapor pressure of a solute is negligible. For example if we dissolve sucrose in water. In that case we can still use the Henry based definition

a_(solute, H) ≡ (P_solute)/(K_(x, H))

Even though both K and P will be exceedingly small their ratio is still finite. However how do we determine either?

The answer lies in the solvent. Even if the vapor pressure of sucrose is immeasurably small, the water vapor pressure above the solution can be measured. The Gibbs-Duhem equation can then be used to translate one into the other. We can use Raoult Law to define the activity of the solvent:

a1 = (P1)/(P1^*)

We can measure the pressures as a function of the solute concentrations. At low concentrations

ln a1 = ln x1 ≈ −x2

[Note: corrected; the source prints "ln a1 ln x − 1 ≈ −x − 2" where this reads "ln a1 = ln x1 ≈ −x2". The source's TeX (\ln a_1 \ln x-1 ≈ -x-2) loses the relation sign and runs the subscripts 1 and 2 into minus signs; for small x2, ln x1 = ln(1 − x2) ≈ −x2.]

At higher concentrations we will get deviations, we can write:

ln((P1)/(P1^*)) = ln a1 ≈ −x2φ

The 'fudge factor' φ is known as the osmotic coefficient and can thus be determined as a function of the solute concentration from the pressure data. What we are really interested in is a2, not a1:

a2 = γ2 x2

Using Gibbs-Duhem we can convert φ into γ2. Usually this is done in terms of molalities rather than mole fractions and it leads to this integral:

ln γ_(2, m) = φ − 1 + ∫_(m'=0)^m ((φ − 1)/(m'))dm'
