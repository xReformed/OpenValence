---
title: "20.6: We Must Always Devise a Reversible Process to Calculate Entropy Changes"
book: "Physical Chemistry (LibreTexts)"
chapter: "20: Entropy and The Second Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20%3A_Entropy_and_The_Second_Law_of_Thermodynamics/20.06%3A_We_Must_Always_Devise_a_Reversible_Process_to_Calculate_Entropy_Changes"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The second law of thermodynamics can be formulated in many ways, but in one way or another they are all related to the fact that the state function entropy, S, tends to increase over time in isolated systems. For a long time, people have looked at the entire universe as an example of an isolated system and concluded that its entropy must be steadily increasing until δS_universe becomes zero. As we will see below, the second law has important consequences for the question of how we can use heat to do useful work.

Of late, cosmologists like the late Stephen Hawking have begun to question the assumption that the entropy of the universe is steadily increasing. The key problem is the role that gravity and relativity play in creating black holes.

[Note: corrected; the source prints "the late Richard Hawkins" where this reads "the late Stephen Hawking". Stephen Hawking (1942–2018).]

## Vacuum Expansion

Let's compare two expansions from V1 to V2 for an ideal gas, both are isothermal. The first is an irreversible one, where we pull a peg an let the piston move against vacuum:

[Image: Diagram showing a division between ideal gas and vacuum, with a peg in the center separating the two.]

The second one is a reversible isothermal expansion from V1 to V2 (and P1 to P2) that we have examined before. In both cases, the is no change in internal energy since T does not change. During the irreversible expansion, however, there is also no volume work because the piston is expanding against a vacuum and the following integral:

∫−P_ext dV = 0

integrates to zero. The piston has nothing to perform work against until it slams into the right hand wall. At this point V = V2 and then dV becomes zero. This is not true for the reversible isothermal expansion as the external pressure must always equal the internal pressure.

> No energy and no work means no heat!

Clearly the zero heat is irreversible heat (q_irr = 0) and this makes it hard to calculate the entropy of this spontaneous process. But then this process ends in the same final state as the reversible expansion from V1 to V2. We know that dU is still zero, but now δw_rev = −δq_rev is nonzero. We calculated its value before:

q_rev = nRT ln((V2)/(V1))

The Claussius definition of entropy change can be used to find ΔS (under constant temperature).

ΔS = (q_rev)/T

Substituting Equation (Vacuum) into Equation (Claussius) results in

ΔS = nR ln((V2)/(V1))

As S is a state function this equation also holds for the irreversible expansion against vacuum.

Always calculate the entropy difference between two points along a reversible path.

For the irreversible expansion into vacuum we see that

ΔS_total = ΔS_sys + ΔS_surr

= nR ln((V2)/(V1)) + 0

= nR ln((V2)/(V1))

For the reversible expansion, heat is transferred to the system while the system does work on the surroundings in order to keep the process isothermal:

ΔS_sys = nR ln((V2)/(V1))

The entropy change for the surrounding is the opposite of the system:

ΔS_surr = −nR ln((V2)/(V1))

This is because the amount of heat transferred to the system is the same as the heat transferred from the surroundings and this process is reversible so the system and surroundings are at the same temperature (equilibrium). Heat is related to entropy by the following equation:

dS = (δq)/T

Therefore, the total entropy change for the reversible process is zero:

ΔS_total = ΔS_sys + ΔS_surr

= nR ln((V2)/(V1)) − nR ln((V2)/(V1))

= 0

## The Mixing of Two Gases

Consider two ideal gases at same pressure separated by a thin wall that is punctured. Both gases behave as if the other one is not there and again we get a spontaneous process, mixing in this case.

[Image: Two labeled boxes: left box marked "Gas A" in light gray, right box marked "Gas B" in white.]

If the pressure is the same the number of moles of each gas should be proportional to the original volumes, VA and VB, and the total number of moles to the total volume V_tot.

For gas A we can write:

ΔSA = nA R ln((V_tot)/(VA)) = nA R ln((n_tot)/(nA))

and similarly for gas B we can write:

ΔSB = nB R ln((V_tot)/(VB)) = nB R ln((n_tot)/(nB))

The total entropy change is therefore the sum of constituent entropy changes:

ΔS = ΔSA + ΔSB

and the entropy change total per mole of gas is:

ΔS/(n_tot) = R ([nB ln((n_tot)/(nB)) + nA ln((n_tot)/(nA))])/(n_tot)

Equation (EqTot) can be simplified using mole fractions:

χA = (nA)/(n_tot)

and the mathematical relationship of logarithms that:

ln(x/y) = −ln(y/x)

to:

ΔS̄ = −R[χA ln χA + χB ln χB]

In the case of mixing of more than two gases, Equation (Molar Entropy) can be expressed as:

ΔS̄ = −RΣχi ln χi

This entropy expressed in Equations (Molar Entropy) and (Sum Entropy) is known as the entropy of mixing; its existence is the major reason why there is such a thing as diffusion and mixing when gases, and also solutions (even solid ones), are brought into contact with each other.
