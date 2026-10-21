---
title: "23.5: Chemical Potential Can be Evaluated From a Partition Function"
book: "Physical Chemistry (LibreTexts)"
chapter: "23: Phase Equilibria"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/23%3A_Phase_Equilibria/23.05%3A_Chemical_Potential_Can_be_Evaluated_From_a_Partition_Function"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The chemical potential can be given in terms of a partition function. Internal energy can be defined as:

U = kB T^2((∂ln Q)/(∂T))_(n, V)

[Note: corrected; the source prints "U = RT^2(" where this reads "U = kB T^2(". With the canonical partition function Q the constant is kB; R would be N_A times too large.]

And entropy can be defined as:

S = kB T((∂ln Q)/(∂T))_(n, V) + kB ln Q

[Note: corrected; the source prints "S = RT((∂ln Q)/(∂T))_(n, V) + R ln Q" where this reads "S = kB T((∂ln Q)/(∂T))_(n, V) + kB ln Q". As above: kB.]

We know that Helmholtz energy is:

A = U − TS

Using our two equations above, we obtain:

A = −kB T ln Q

[Note: corrected; the source prints "A = −RT ln Q" where this reads "A = −kB T ln Q". As above: kB.]

Now, let's change gears a bit to show how Helmholtz energy is related to chemical potential. The total differential for Helmholtz energy is:

dA = ((∂A)/(∂T))_(n, V) dT + ((∂A)/(∂V))_(n, T) dV + ((∂A)/(∂n))_(V, T) dn

[Note: corrected; the source prints "dA = ((∂A)/(∂T))_(n, V) + ((∂A)/(∂V))_(n, T) + ((∂A)/(∂n))_(V, T)" where this reads "dA = ((∂A)/(∂T))_(n, V) dT + ((∂A)/(∂V))_(n, T) dV + ((∂A)/(∂n))_(V, T) dn". The differentials are missing.]

And the fundamental equation is:

dA = −SdT − PdV + ((∂A)/(∂n))_(V, T) dn

Using the relationship between Helmholtz energy and Gibbs energy:

G = A + PV

We obtain:

dG = dA + d(PV)

= −SdT + VdP + ((∂A)/(∂n))_(V, T) dn

We know that the change in Gibbs energy is:

dG = −SdT + VdP + ((∂G)/(∂n))_(P, T) dn

= −SdT + VdP + μdn

Inspecting these equations, we see that:

μ = ((∂G)/(∂n))_(P, T) = ((∂A)/(∂n))_(V, T)

This shows us that, as long as the natural variables for each thermodynamic potential are held constant, the partial derivatives of Gibbs energy and Helmholtz energy with respect to the number of moles, n are equal to the chemical potential. We can now plug in our expression above for Helmholtz energy in terms of the partition function:

μ = −kB T((∂ln Q)/(∂n))_(V, T)

[Note: corrected; the source prints "μ = −RT(" where this reads "μ = −kB T(". From A = −kB T ln Q.]

We now have chemical potential written in terms of the partition function, Q.
