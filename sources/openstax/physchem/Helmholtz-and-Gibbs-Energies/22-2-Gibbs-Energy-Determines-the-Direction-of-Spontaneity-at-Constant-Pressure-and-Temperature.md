---
title: "22.2: Gibbs Energy Determines the Direction of Spontaneity at Constant Pressure and Temperature"
book: "Physical Chemistry (LibreTexts)"
chapter: "22: Helmholtz and Gibbs Energies"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/22%3A_Helmholtz_and_Gibbs_Energies/22.02%3A_Gibbs_Energy_Determines_the_Direction_of_Spontaneity_at_Constant_Pressure_and_Temperature"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The Helmholtz energy A is developed for isochoric changes and as we have often said before it is much easier to deal with isobaric ones where P = constant. We can therefore repeat the above treatment for the enthalpy and introduce another state function the Gibbs energy

G ≡ H − TS

= U + PV − TS

= A + PV

If we take both T and P constant we get

dU − TdS + PdV ≤ 0

dG ≤ 0

G either decreases (spontaneously) or is constant (at equilibrium). Calculating the state function between two end points we get:

ΔG = ΔH − TΔS ≤ 0(T, P constant)

This quantity is key to the question of spontaneity under the conditions we usually work under. If for a process ΔG is positive it does not occur spontaneous and can only be made to occur if it is 'pumped', i.e. coupled with a process that has a negative ΔG. The latter is spontaneous.

If ΔG = 0 then the system is as equilibrium.

## Direction of the spontaneous change

Because the ΔS term contains the temperature T as coefficient the spontaneous direction of a process, e.g. a chemical reaction can change with temperature depending on the values of the enthalpy and the entropy change ΔH and ΔS. This is true for the melting process, e.g. for water below 0^oC we get water=>ice, above this temperature ice melts to water, but it also goes for chemical reactions.

### Example

Consider

NH3(g) + HCl(g) ⇌ NH4Cl(s)

Δr H at 298K / 1 bar is -176.2 kJ. The change in entropy is -0.285 kJ/K so that at 298K ΔG is -91.3 kJ. Clearly this is a reaction that will proceed to the depletion of whatever is the limiting reagent on the left.

[Note: corrected; the source prints "ΔG is -91.21 kJ" where this reads "ΔG is -91.3 kJ". −176.2 − 298(−0.285) = −91.3 kJ.]

However at 618 K this is a different story. Above this temperature ΔG is positive! (assuming enthalpy and entropy have remained the same, which is almost but not completely true) The reaction will not proceed. Instead the reverse reaction would proceed spontaneously. The salt on the right would decompose in the two gases -base and acid- on the left.

## Meaning of the ΔG term

As we have seen, ΔA can be related to the maximal amount of work that a system can perform at constant V and T. We can hold an analogous argument for ΔG except that V is not constant so that we have to consider volume work (zero at constant volume) .

dG = d(U + PV − TS) = dU − TdS − SdT + PdV + VdP

[Note: corrected; the source prints "= dU − TdS − SdT − PdV + VdP" where this reads "= dU − TdS − SdT + PdV + VdP". d(PV) = PdV + VdP, as the next line has.]

As dU = TdS + δw_rev

dG = δw_rev − SdT + VdP + PdV

As the later term is −δw_volume

dG = δw_rev − SdT + VdP − δw_volume

At constant T and P the two middle terms drop out

dG = δw_rev − δw_volume = δw_otherusefulwork

### Note

ΔG stands for the (maximal) reversible, isobaric isothermal non-PV work that a certain spontaneous change can perform. The volume work may not be zero, but is corrected for.

## Natural variables of G

Because G ≡ H − TS, we can write

dG = dH − TdS − SdT

= TdS + VdP − TdS − SdT

= VdP − SdT

The natural variables of G are pressure P and temperature T. This is what makes this function the most useful of the four U, H, A, and G: these are the natural variables of most of your laboratory experiments!

## Summary

We now have developed the basic set of concepts and functions that together form the framework of thermodynamics. Let's summarize four very basic state functions:

| state function | natural variables |
| --- | --- |
| dU = −PdV + TdS | U(V, S) |
| dH = + VdP + TdS | H(P, S) |
| dA = −PdV − SdT | A(V, T) |
| dG = + VdP − SdT | G(P, T) |

Note:

1. The replacement of δq by TdS was based on reversible heat. This means that in the irreversible case the expressions for dU and dH become inequalities
2. We only include volume work in the above expressions. If other work (elastic, electrical e.g.) is involved extra terms need to be added: dU = TdS − PdV + xdX etc.

We are now ready to begin applying thermodynamics to a number of very diverse situations, but we will first develop some useful partial differential machinery.
