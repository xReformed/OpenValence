---
title: "26.11: Thermodynamic Equilibrium Constants Are Expressed in Terms of Activities"
book: "Physical Chemistry (LibreTexts)"
chapter: "26: Chemical Equilibrium"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26%3A_Chemical_Equilibrium/26.11%3A_Thermodynamic_Equilibrium_Constants_Are_Expressed_in_Terms_of_Activities"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The above is a general principle that can be extended to other concentration units and to liquid solutions, ideal or not. In non-ideal systems we could replace

μi= μi^⦵+RTln P_i/P_i^⦵

by:

μi= μi^⦵+RTln a_i

and follow the same procedure as above. In stead of an expression for K involving pressures or concentrations it now read in activities:

K=[a_(eq,Y)^(v_Y)a_(eq,Z)^(v_Z) /a_(eq,A)^(v_A)a_(eq,B)^(v_B)]

For each species we could write the activity as:

a_i = γic_i/c_i^⦵

Here c_i^⦵ is unity in whatever concentration measure we wish to choose. Again its function is to cancel the dimension of c_i.

With this split in three factors we can write K as three factors as well:

K =KγK_c/K⦵

Kγ=[γ_(eq,Y)^(v_Y)γ_(eq,Z)^(v_Z) /γ_(eq,A)^(v_A)γ_(eq,B)^(v_B)]

K_c=[c_(eq,Y)^(v_Y)c_(eq,Z)^(v_Z) /c_(eq,A)^(v_A)c_(eq,B)^(v_B)]

K_c⦵=[c⦵^(v_Y)c⦵^(v_Z) /c⦵^(v_A)c⦵^(v_B)]

The last factor is unity, it cancels the dimensions of K_c and is often omitted. The factor Kγ is unity if the solution is ideal. Obviously, for ionic solutions that is seldom the case.

## activities of pure condensed phases

Sometimes one of the reactants or products is a pure solid (precipitate) or liquid (more solvent e.g.). What activity should we assign in such a case?

We start by choosing a suitable standard state, say the pure compound at 1 bar and temperature of interest, we then have:

μ = μ^⦵

but also:

μ = μ^⦵ +RTlna

So a=1 at standard conditions

Any change can be written as

dμ = RTdlna

We can study the pressure dependence by considering:

∂ μ /∂P |T = V_(partial molar) ( V_bar)

For a solid or liquid V_bar is a relatively small and constant value. Thus we can write:

dμ = V_bar dP

RTdlna = V_bar dP

dlna = V_bar dP/RT

Upon integration to a different pressure P' we find

lna' = (P'-1) V_bar/RT

| S&McQ; 1083 |
| --- |

Example 26-12 shows that for graphite the activity is only 1.02 at 100 bars, so the activity is not very pressure dependent. Mostly if pure condensed compounds are involved in reactions the activity can taken as unity.

[Note: corrected; the source prints "the activity is only 1.01 at 100 bars" where this reads "the activity is only 1.02 at 100 bars". From ln a' = (P' − 1)V̄/RT with V̄ = 12.011/2.26 ≈ 5.3 cm^3 mol^−1, 99 bar and 298 K, ln a' ≈ 0.021. "Example 26-12" is in the book this page draws on (the S&McQ reference above), not in this one.]

This is also in line with what we said previously about the solvent following Raoult's law. In the limit of the solvent going to pure solvent we have that its P goes to P*. As the activity is defined as P/P* this converges to unity. If a reaction produces more solvent molecules we can usually consider their activity equal to one in very good approximation for dilute solutions, even if they are already non-ideal.

The fact that a=1 for pure condensed phases has an important consequence for reactions (in general: processes) that only involve such phases. If all activities are unity, Q=1 and lnQ=0 which means that Δ_rG = Δ_rG^⦵ + 0. Thus Δ_rG can only be zero -i.e. an equilibrium achieved- if Δ_rG^⦵ happens to be zero, which is generally not the case. In fact there can only be an equilbrium at one specific temperature:

Δ_rG^⦵ = 0

Δ_rH^⦵-TΔ_rS^⦵ = 0

[Note: corrected; the source prints "Δ_rH^⦵-TΔ_rS^⦵" where this reads "Δ_rH^⦵-TΔ_rS^⦵ = 0". The relation sign is missing; it gives the next line.]

T_equilibrium= Δ_rH^⦵/Δ_rS^⦵

If the process is the transformation from a solid to a liquid this is the well-known melting point. At temperature other than 0^oC only one phase can exist: either ice or water. If the other is present, that is an unstable condition and it will transform entirely to the stable form. In other words the process will go to completion, not equilbirium. Only at 0^oC can the two coexist in equilibrium. This holds for all melting points but it also holds for e.g. a solid-solid chemical reactions only producing, say, another solid.

Another way of expressing the above is to say that in order to have equilibrium at a series of temperatures, one needs at least one species involved for which activity depends on composition, e.g. a dilute solute or a gas.
