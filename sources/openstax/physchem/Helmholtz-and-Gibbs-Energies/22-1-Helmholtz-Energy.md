---
title: "22.1: Helmholtz Energy"
book: "Physical Chemistry (LibreTexts)"
chapter: "22: Helmholtz and Gibbs Energies"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/22%3A_Helmholtz_and_Gibbs_Energies/22.01%3A_Helmholtz_Energy"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

We have answered the question: what is entropy, but we still do not have a general criterion for spontaneity, just one that works in an isolated system. We will consider what happens when we hold volume and temperature constant. As discussed previously, the expression for the change in internal energy:

dU = TdS − PdV

is only valid for reversible changes. Let us consider a spontaneous change. If we assume constant volume, the −PdV work term drops out. From the Clausius inequality dS > (δq)/T we get:

dU ≤ TdS (constant V)

dU − TdS ≤ 0 (constant V)

Consider a new state function, Helmholtz energy, A:

A ≡ U − TS

dA = dU − TdS − SdT

If we also set T constant, we see that Equation (diff1) becomes

dA = dU − TdS ≤ 0 (constant V and T)

This means that the Helmholtz energy, A, is a decreasing quantity for spontaneous processes (regardless of isolation!) when T and V are held constant. A becomes constant once a reversible equilibrium is reached.

### Example 22.1.1 : What A stands for

A good example is the case of the mixing of two gases. Let's assume isothermal conditions and keep the total volume constant. For this process, ΔU is zero (isothermal, ideal) but the

ΔS_molar = −y1R ln y1 − y2R ln y2

This means that

ΔA_molar = RT(y1 ln y1 + y2 ln y2).

This is a negative quantity because the mole ratios are smaller than unity. So yes this spontaneous process has a negative ΔA. If we look at ΔA = ΔU − TΔS we should see that the latter term is the same thing as −q_rev So we have :

ΔA = ΔU − q_rev = w_rev

This is however the maximal work that a system is able to produce and so the Helmholtz energy is a direct measure of how much work one can get out of a system. A is therefore often called the Helmholtz free energy. Interestingly this work cannot be volume work as volume is constant. so it stands for the maximal other work (e.g. electrical work) that can be obtained under the unlikely condition that volume is constant.

## Natural variables of A

Because A ≡ U − TS we can write

dA = dU − TdS − SdT

= TdS − PdV − TdS − SdT

= −PdV − SdT

The natural variables of A are volume V and temperature T.
