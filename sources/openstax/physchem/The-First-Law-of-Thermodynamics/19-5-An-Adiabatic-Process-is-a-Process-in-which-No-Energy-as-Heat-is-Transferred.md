---
title: "19.5: An Adiabatic Process is a Process in which No Energy as Heat is Transferred"
book: "Physical Chemistry (LibreTexts)"
chapter: "19: The First Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/19%3A_The_First_Law_of_Thermodynamics/19.05%3A_An_Adiabatic_Process_is_a_Process_in_which_No_Energy_as_Heat_is_Transferred"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## Isothermal expansion of an ideal gas

For a monatomic ideal gas we have seen that energy ⟨E⟩ observed as U = 3/2nRT. This means that energy is only dependent on temperature and if a gas is compressed isothermally, then the internal energy does not change:

ΔU_(isothermal-idealgas) = 0

This means that the reversible work must cancel the reversible heat:

ΔU_rev = w_rev + q_rev = 0

Therefore

w_rev = −q_rev

so from the expression of the reversible work for expansion in Section 19.3

[Note: corrected; the source prints "in the last section" where this reads "in Section 19.3". The expression is in Section 19.3.]

q_rev = nRT ln((V2)/(V1))

If V2 > V1 (expansion), then you (or the environment) must put heat into the system because this is a positive number.

## Adiabatic expansion of an ideal gas

Now suppose you make sure that no heat can enter the cylinder. (Put it in styrofoam or so). Then the path can still be reversible (slow pulling) but the process is then adiabatic.

> This bat- part comes from a Greek verb βαινω (baino) that means walking, compare acrobat, someone who goes high places (acro-). The δια (dia) part means 'through' (cf. diagram, diorama, diagonal etc.) and the prefix α- (a-) denies it all (compare atypical versus typical).

So the styrofoam prevents the heat from walking through the wall. When expanding the gas from V1 to V2 it still does reversible work but where does that come from? It can only come from the internal energy itself. So in this case any energy change should consist of work (adiabatic means: δq = 0).

dU = δw_rev

This implies that the temperature must drop, because if U changes, then T must change.

The change of energy with temperature at constant volume is known as the heat capacity (at constant volume) Cv

Cv = ((∂U)/(∂T))_V

For an ideal gas U only changes with temperature, so that

[Image not described in source]

or:

[Image not described in source]

We can now compare two paths to go from state P1, V1, T1 to state P2, V2, T1:

1. Reversible isothermal expansion A
2. Reversible adiabatic expansion B followed by reversible isochoric heating C

[Image: Graph showing curves labeled A, B, and C, plotting pressure (P) against volume (V) with points P1, P2, and P3.]

Figure 19.5.1:

[Note: corrected; the source prints "Figure __:" where this reads "Figure 19.5.1:". The source leaves the number blank. Its equation images (CH431_Image61 to 64) are missing in the source, so their equations are not shown.]

Notice that the temperature remains T1 for path A (isotherm!), but that it drops to T2 on the adiabat B, so that the cylinder has to be isochorically warmed up, C, to regain the same temperature.

ΔU_tot should be the same for both path A and the combined path B+C, because the end points are the same (U is a state function!). As the and points are at the same temperature and U only depends on T:

ΔU_tot = 0

Along adiabat B:

q_rev = 0

Along isochoric heating C, there is no volume work because the volume is kept constant, so that:

[Image not described in source]

This is the only reversible heat involved in path B+C. However, we know that ΔU_tot for path A is zero (isothermal!). This means that the volume work along B must cancel the heat along C:

The book keeping looks as follows, all paths are reversible:

ΔU_(B+C) = ΔUA = 0 = qB + wB + qC + wC

We know that qB = 0 since it is an adiabat and wC = 0 since it is an isochore:

ΔU_(B+C) = ΔUA = 0 = 0 + wB + qC + 0

Therefore:

wB = −qC

We had already seen before that along the isotherm A:

wA = −qA = −nRT ln((V2)/(V1))

[Note: corrected; the source prints "wA = −qA = −nRT ln((V1)/(V2))" where this reads "wA = −qA = −nRT ln((V2)/(V1))". For the expansion the work is negative.]

As you can see wA and wB are not the same. Work is a path function, even if reversible. As we are working with an ideal gas we can be more precise about wB and qc as well. The term wB along the adiabat is reversible volume work. Since there is no heat along B we can write a straight d instead of δ for the work contributions (It is the only contribution and must be identical to the state function dU):

[Image not described in source]
