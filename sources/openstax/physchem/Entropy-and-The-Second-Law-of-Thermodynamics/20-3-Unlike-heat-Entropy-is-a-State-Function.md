---
title: "20.3: Unlike heat, Entropy is a State Function"
book: "Physical Chemistry (LibreTexts)"
chapter: "20: Entropy and The Second Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20%3A_Entropy_and_The_Second_Law_of_Thermodynamics/20.03%3A_Unlike_heat_Entropy_is_a_State_Function"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## Circular integrals

Because entropy is a state function, it integrates to zero over any circular path going back to initial conditions, just like U and H:

∮dS = 0

∮dH = 0

∮dU = 0

As discussed previously, we can use this fact to revisit the isotherm + isochore + adiabat circular path (Figure 20.3.1 ).

Figure 20.3.1: A: isothermal expansion, B:adiabat, C:isochore (CC BY-NC; Ümit Kaya via LibreTexts)
Graph showing pressure (P) vs. volume (V) with three curves labeled A, B, and C, depicting different thermodynamic processes.

Along adiabat B and isochore C:

- There is no heat transfer along adiabat B:

q_(rev, B) = 0

- There is no work along isochore C:

δw = 0

- But the temperature changes from T2 back to T1. This requires heat:

q_(rev, C) = CV ΔT

Along the isotherm A:

- We have seen that

q_(rev, A) = nRT ln((V2)/(V1))

The quantities q_(rev,A), q_(rev,B), and q_(rev,C) are not the same, which once again underlines that heat is a path function. How about entropy?

First, consider the combined paths of B and C:

q_(rev, B+C) = ∫_T2^T1 Cv dT

∫dS_(B+C) = ∫(dq_(rev, B+C))/T = ∫_T2^T1 ((Cv)/T)dT

We had seen this integral before from Section 19-6, albeit from T1 to T2:

ΔS_(B+C) = nR ln((V2)/(V1))

(Notice sign in Equation (19.21) is positive)

Along the isotherm A:

q_(rev, A) = nRT ln((V2)/(V1))

T is a constant so we can just divide q_(rev, A) by T to get ΔSA:

[Note: corrected; the source prints "q_(rec, A)" where this reads "q_(rev, A)". q_rev.]

ΔSA = nR ln((V2)/(V1))

We took two different paths to get start and end at the same points. Both paths had the same change in entropy. Clearly entropy is a state function while q_rev is not.
