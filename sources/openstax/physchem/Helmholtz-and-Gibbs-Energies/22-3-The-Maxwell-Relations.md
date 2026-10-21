---
title: "22.3: The Maxwell Relations"
book: "Physical Chemistry (LibreTexts)"
chapter: "22: Helmholtz and Gibbs Energies"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/22%3A_Helmholtz_and_Gibbs_Energies/22.03%3A_The_Maxwell_Relations"
author: "Flemingp"
license: "CC BY-NC-SA 4.0"
---

Modeling the dependence of the Gibbs and Helmholtz functions behave with varying temperature, pressure, and volume is fundamentally useful. But in order to do that, a little bit more development is necessary. To see the power and utility of these functions, it is useful to combine the First and Second Laws into a single mathematical statement. In order to do that, one notes that since

dS = dq/T

for a reversible change, it follows that

dq = TdS

And since

dw = −pdV

[Note: corrected; the source prints "dw = TdS − pdV" where this reads "dw = −pdV". Only with dw = −pdV does dU = dq + dw give dU = TdS − pdV.]

for a reversible expansion in which only p-V works is done, it also follows that (since dU = dq + dw):

dU = TdS − pdV

This is an extraordinarily powerful result. This differential for dU can be used to simplify the differentials for H, A, and G. But even more useful are the constraints it places on the variables T, S, p, and V due to the mathematics of exact differentials!

## Maxwell Relations

The above result suggests that the natural variables of internal energy are S and V (or the function can be considered as U(S, V)). So the total differential (dU) in Equation (1) can be expressed:

dU = ((∂U)/(∂S))_V dS + ((∂U)/(∂V))_S dV

Also, by inspection (comparing the two expressions for dU in Equations (1) and (2)) it is apparent that:

((∂U)/(∂S))_V = T

and

((∂U)/(∂V))_S = −p

But the value does not stop there! Since dU is an exact differential, the Euler relation must hold that

[((∂)/(∂V))((∂U)/(∂S))_V]_S = [((∂)/(∂S))((∂U)/(∂V))_S]_V

By substituting Equations (eq5A) and (eq5B), we see that

[((∂)/(∂V))(T)_V]_S = [((∂)/(∂S))(−p)_S]_V

or

((∂T)/(∂V))_S = −((∂p)/(∂S))_V

This is an example of a Maxwell Relation. These are very powerful relationship that allows one to substitute partial derivatives when one is more convenient (perhaps it can be expressed entirely in terms of α and/or κT for example.)

A similar result can be derived based on the definition of H.

H ≡ U + pV

Differentiating (and using the chain rule on d(pV)) yields

dH = dU + pdV + Vdp

Making the substitution using the combined first and second laws (dU = TdS − pdV) for a reversible change involving on expansion (p-V) work

dH = TdS−~~pdV~~ + ~~pdV~~ + Vdp

This expression can be simplified by canceling the pdV terms.

dH = TdS + Vdp

And much as in the case of internal energy, this suggests that the natural variables of H are S and p. Or

dH = ((∂H)/(∂S))_p dS + ((∂H)/(∂p))_S dp

[Note: corrected; the source prints "((∂H)/(∂p))_S dV" where this reads "((∂H)/(∂p))_S dp". The natural variables of H are S and p.]

Comparing Equations (eq2A) and (eq2B) show that

((∂H)/(∂S))_p = T

and

((∂H)/(∂p))_S = V

It is worth noting at this point that both Equation (eq5A)

((∂U)/(∂S))_V

and Equation (eq6A)

((∂H)/(∂S))_p

are equal to T. So they are equation to each other

((∂U)/(∂S))_V = ((∂H)/(∂S))_p

Moreover, the Euler Relation must also hold

[((∂)/(∂p))((∂H)/(∂S))_p]_S = [((∂)/(∂S))((∂H)/(∂p))_S]_p

so

((∂T)/(∂p))_S = ((∂V)/(∂S))_p

This is the Maxwell relation on H. Maxwell relations can also be developed based on A and G. The results of those derivations are summarized in Table 22.3.1.

Table 22.3.1: Maxwell Relations

| Function | Differential | Natural Variables | Maxwell Relation |
| --- | --- | --- | --- |
| U | dU = TdS − pdV | S, V | ((∂T)/(∂V))_S = −((∂p)/(∂S))_V |
| H | dH = TdS + Vdp | S, p | ((∂T)/(∂p))_S = ((∂V)/(∂S))_p |
| A | dA = −pdV − SdT | V, T | ((∂p)/(∂T))_V = ((∂S)/(∂V))_T |
| G | dG = Vdp − SdT | p, T | ((∂V)/(∂T))_p = −((∂S)/(∂p))_T |

The Maxwell relations are extraordinarily useful in deriving the dependence of thermodynamic variables on the state variables of p, T, and V.

### Example 22.3.1

Show that

((∂U)/(∂V))_T = T α/(κT) − p

[Note: corrected; the source prints "((∂V)/(∂T))_p = T α/(κT) − p" where this reads "((∂U)/(∂V))_T = T α/(κT) − p". This is the thermodynamic equation of state for (∂U/∂V)_T, as the derivation below shows; (∂V/∂T)_p is αV.]

**Solution**

Start with the combined first and second laws:

dU = TdS − pdV

Divide both sides by dV and constraint to constant T:

dU/dV|_T = TdS/dV|_T − p dV/dV|_T

Noting that

dU/dV|_T = ((∂U)/(∂V))_T

TdS/dV|_T = T((∂S)/(∂V))_T

[Note: corrected; the source prints "TdS/dV|_T = ((∂S)/(∂V))_T" where this reads "TdS/dV|_T = T((∂S)/(∂V))_T". The factor T, as used below.]

dV/dV|_T = 1

The result is

((∂U)/(∂V))_T = T((∂S)/(∂V))_T − p

Now, employ the Maxwell relation on A (Table 22.3.1)

[Note: corrected; the source prints "(Table 6.2.1)" where this reads "(Table 22.3.1)". The Maxwell relations are in Table 22.3.1.]

((∂p)/(∂T))_V = ((∂S)/(∂V))_T

to get

((∂U)/(∂V))_T = T((∂p)/(∂T))_V − p

and since

((∂p)/(∂T))_V = α/(κT)

It is apparent that

((∂U)/(∂V))_T = T α/(κT) − p

[Note: corrected; the source prints "((∂V)/(∂T))_p = T α/(κT) − p" where this reads "((∂U)/(∂V))_T = T α/(κT) − p". As above: (∂U/∂V)_T.]

Note: How cool is that? This result was given without proof in Chapter 4, but can now be proven analytically using the Maxwell Relations!

[Note: "Chapter 4" refers to the book this section was taken from (Fleming's Physical Chemistry). The text is left as printed.]
