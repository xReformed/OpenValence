---
title: "22.5: Thermodynamic Functions have Natural Variables"
book: "Physical Chemistry (LibreTexts)"
chapter: "22: Helmholtz and Gibbs Energies"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/22%3A_Helmholtz_and_Gibbs_Energies/22.05%3A_Thermodynamic_Functions_have_Natural_Variables"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The fundamental thermodynamic equations follow from five primary thermodynamic definitions and describe internal energy, enthalpy, Helmholtz energy, and Gibbs energy in terms of their natural variables. Here they will be presented in their differential forms.

## Introduction

The fundamental thermodynamic equations describe the thermodynamic quantities U, H, G, and A in terms of their natural variables. The term "natural variable" simply denotes a variable that is one of the convenient variables to describe U, H, G, or A. When considered as a whole, the four fundamental equations demonstrate how four important thermodynamic quantities depend on variables that can be controlled and measured experimentally. Thus, they are essentially equations of state, and using the fundamental equations, experimental data can be used to determine sought-after quantities like G or H.

## First Law of Thermodynamics

The first law of thermodynamics is represented below in its differential form

dU = đq + đw

where

- U is the internal energy of the system,
- q is heat flow of the system, and
- w is the work of the system.

The "đ" symbol represent inexact differentials and indicates that both q and w are path functions. Recall that U is a state function. The first law states that internal energy changes occur only as a result of heat flow and work done.

It is assumed that w refers only to PV work, where

w = −∫pdV

The fundamental thermodynamic equation for internal energy follows directly from the first law and the principle of Clausius:

dU = đq + đw

dS = (δq_rev)/T

we have

dU = TdS + δw

Since only PV work is performed,

dU = TdS − pdV

The above equation is the fundamental equation for U with natural variables of entropy S and volumeV.

### Principle of Clausius

The Principle of Clausius states that the entropy change of a system is equal to the ratio of heat flow in a reversible process to the temperature at which the process occurs. Mathematically this is written as

dS = (δq_rev)/T

where

- S is the entropy of the system,
- q_rev is the heat flow of a reversible process, and
- T is the temperature in Kelvin.

## Enthalpy

Mathematically, enthalpy is defined as

H = U + pV

where H is enthalpy of the system, p is pressure, and V is volume. The fundamental thermodynamic equation for enthalpy follows directly from it deffinition (Equation (DefEnth)) and the fundamental equation for internal energy (Equation (DefU)) :

dH = dU + d(pV)

= dU + pdV + VdP

dU = TdS − pdV

dH = TdS − pdV + pdV + Vdp

dH = TdS + Vdp

The above equation is the fundamental equation for H. The natural variables of enthalpy are S and p, entropy and pressure.

## Gibbs Energy

The mathematical description of Gibbs energy is as follows

G = U + pV − TS

= H − TS

where G is the Gibbs energy of the system. The fundamental thermodynamic equation for Gibbs Energy follows directly from its definition (Defgibbs) and the fundamental equation for enthalpy (DefEnth):

dG = dH − d(TS)

= dH − TdS − SdT

[Note: corrected; the source prints "dH − TdS − SdT" where this reads "= dH − TdS − SdT". A missing equals sign.]

Since

dH = TdS + VdP

dG = TdS + VdP − TdS − SdT

= VdP − SdT

The above equation is the fundamental equation for G. The natural variables of Gibbs energy are P and T.

## Helmholtz Energy

Mathematically, Helmholtz energy is defined as

A = U − TS

where A is the Helmholtz energy of the system, which is often written as the symbol F. The fundamental thermodynamic equation for Helmholtz energy follows directly from its definition (Equation (DefHelm)) and the fundamental equation for internal energy (Equation (DefU)):

dA = dU − d(TS)

= dU − TdS − SdT

Since

dU = TdS − pdV

dA = TdS − pdV − TdS − SdT

= −pdV − SdT

Equation (EqHelm1) is the fundamental equation for A with natural variables of V and T. For the definitions to hold, it is assumed that only PV work is done and that only reversible processes are used. These assumptions are required for the first law and the principle of Clausius to remain valid. Also, these equations do not account include n, the number of moles, as a variable. When n is included, the equations appear different, but the essence of their meaning is captured without including the n-dependence.

## Chemical Potential

The fundamental equations derived above were not dependent on changes in the amounts of species in the system. Below the n-dependent forms are presented^(1,4).

dU = TdS − PdV + Σ_(i=1)^Nμi dni

dH = TdS + VdP + Σ_(i=1)^Nμi dni

dG = −SdT + Vdp + Σ_(i=1)^Nμi dni

dA = −SdT − PdV + Σ_(i=1)^Nμi dni

where μi is the chemical potential of species i and dn_i is the change in number of moles of substance i.

## Importance/Relevance of Fundamental Equations

The differential fundamental equations describe U, H, G, and A in terms of their natural variables. The natural variables become useful in understanding not only how thermodynamic quantities are related to each other, but also in analyzing relationships between measurable quantities (i.e. P, V, T) in order to learn about the thermodynamics of a system. Below is a table summarizing the natural variables for U, H, G, and A:

| Thermodynamic Quantity | Natural Variables |
| --- | --- |
| U (internal energy) | S, V |
| H (enthalpy) | S, P |
| G (Gibbs energy) | T, P |
| A (Helmholtz energy) | T, V |

## Maxwell Relations

The fundamental thermodynamic equations are the means by which the Maxwell relations are derived^(1,4). The Maxwell Relations can, in turn, be used to group thermodynamic functions and relations into more general "families"^(2,3).

As we said dA is an exact differential. Let's write is out in its natural variables (Equation (EqHelm1)) and take a cross derivative. The dA expression in natural variables is

dA = ((∂A)/(∂V))_T dV + ((∂A)/(∂T))_V dT

The partial derivatives of A of first order can already be quite interesting we see e.g. in step 2 that the first partial of A versus V (at T constant) is the negative of the pressure.

((∂A)/(∂V))_T = −P

Likewise we find the (isochoric) slope with temperature gives us the negative of the entropy. Thus entropy is one of the first order derivatives of A.

((∂A)/(∂T))_V = −S

When we apply a cross derivative

((∂^2 A)/(∂V∂T)) = ((∂(−S))/(∂V))_T = ((∂(−P))/(∂T))_V

[Note: corrected; the source prints "((∂(−S))/(∂V))_T + ((∂(−P))/(∂T))_V" where this reads "((∂(−S))/(∂V))_T = ((∂(−P))/(∂T))_V". The two mixed derivatives are equal, which gives the Maxwell relation below.]

we get what is known as a Maxwell relation:

((∂P)/(∂T))_V = ((∂S)/(∂V))_T

### Exercise

What does Equation three mean for the heat capacity? answer

A similar treatment of dG (Equation (EqGibbs1) gives:

((∂G)/(∂T))_P = −S

((∂G)/(∂P))_T = V

and another Maxwell relation

−((∂S)/(∂P))_T = ((∂V)/(∂T))_P

### Exercise 22.5.1

If the assumptions made in the derivations above were not made, what would effect would that have? Try to think of examples were these assumptions would be violated. Could the definitions, principles, and laws used to derive the fundamental equations still be used? Why or why not?

**Answer**

If it was not assumed that PV-work was the only work done, then the work term in the first law of thermodynamics equation would include other terms (e.g. for electrical work, mechanical work). If reversible processes were not assumed, the Principle of Clausius could not be used. One example of such situations could the movement of charged particles towards a region of like charge (electrical work) or an irreversible process like combustion of hydrocarbons or friction.

[Note: corrected; the source prints "the work term in the second law of thermodynamics equation" where this reads "the work term in the first law of thermodynamics equation". The work term is in dU = đq + đw.]

### Exercise 22.5.2

For what kind of system does the number of moles not change? This said, do the fundamental equations without n-dependence apply to a wide range of processes and systems?

**Answer**

In general, a closed system of non-reacting components would fit this description. For example, the number of moles would not change for a closed system in which a gas is sealed (to prevent leaks) in a container and allowed to expand/is contracted.

### Exercise 22.5.3

Derive the Maxwell Relations.

**Answer**

See the Maxwell Relations section.

### Exercise 22.5.4

1. Derive the expression

((∂H)/(∂P))_(T, n) = −T((∂V)/(∂T))_(P, n) + V

Then apply this equation to an ideal gas. Does the result seem reasonable?

**Answer**

((∂H)/(∂P))_(T, n) = 0 for an ideal gas. Since there are no interactions between ideal gas molecules, changing the pressure will not involve the formation or breaking of any intermolecular interactions or bonds.

### Exercise 22.5.5

Using the definition of Gibbs energy and the conditions observed at phase equilibria, derive the Clapeyron equation.

**Answer**

See the third outside link.

## References

1. DOI: 10.1063/1.1749582
2. DOI: 10.1063/1.1749549
3. DOI:10.1103/PhysRev.3.273
4. A Treatise on Physical Chemistry, 3rd ed.; Taylor, H. S. and Glasstone, S., Eds.; D. Van Nostrand Company: New York, 1942; Vol. 1; p 454-485.
