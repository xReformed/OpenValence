---
title: "22.3: Electrode Potentials"
book: "Instrumental Analysis (LibreTexts)"
chapter: "22: An Introduction to Electroanalytical Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/22%3A_An_Introduction_to_Electroanalytical_Chemistry/22.03%3A_Electrode_Potentials"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

We began this chapter by examining the electrochemical cell in Figure 22.1.1 where Zn(s) is oxidized to Zn^2+(aq) and Ag^+(aq) is reduced to Ag(s), as shown by the following reaction.

Zn(s) + 2Ag^+(aq) ⇌ 2Ag(s) + Zn^2+(aq)

[Note: corrected; the source prints "2Ag(s) + Zn^2+(aq) ⇌ Zn(s) + 2Ag^+(aq)" where this reads "Zn(s) + 2Ag^+(aq) ⇌ 2Ag(s) + Zn^2+(aq)". The sentence before describes Zn(s) being oxidized and Ag^+ reduced, which is the cell reaction of Figure 22.1.1 as written in Sections 22.1 and 22.2; the printed equation is its reverse.]

The reaction proceeds as written because the reduction of Ag^+(aq) to Ag(s)

Ag^+(aq) + e^− ⇌ Ag(s)

is more thermodynamically favorable than the reduction of Zn^2+(aq) to Zn(s)

Zn^2+(aq) + 2e^− ⇌ Zn(s)

But, how do we know this is true? In this section we answer this question by taking a close look at electrode potentials.

## Nature of Electrode Potentials

The potential of an electrochemical cell is the difference between the potential at the cathode, E_cathode, and the potential at the anode, E_anode, where both potentials are defined in terms of a reduction reaction (and are called reduction potentials); thus

E_cell = E_cathode − E_anode

H^+(aq) + e^− = (1/2)H2(g)

which is the reaction that defines the standard hydrogen electrode, or SHE.

[Note: the source moves from E_cell = E_cathode − E_anode straight to the H^+/H2 half-reaction without the sentence that introduces it; the missing point is that a single electrode's potential cannot be measured, so reduction potentials are measured against this reference half-reaction, which is assigned a potential of zero.]

## The Standard Hydrogen Electrode (SHE)

The SHE consists of a Pt electrode immersed in a solution in which the activity of hydrogen ion is 1.00 and in which the partial pressure of H2(g) is 1.00 atm (Figure 22.3.1). A conventional salt bridge connects the SHE to the indicator half-cell. The short hand notation for the standard hydrogen electrode is

Pt(s), H2(g, f_H2 = 1.00)| H^+(aq, a_(H^+) = 1.00)||

and the standard-state potential for the reaction (she) is, by definition, 0.000 V at all temperatures.

Figure 22.3.1: Schematic diagram showing the standard hydrogen electrode.
Schematic diagram showing the standard hydrogen electrode.

## Practical Reference Electrodes

Although the standard hydrogen electrode is the standard against which all other potentials are referenced, it is not practical for routine use as it is difficult to prepare and maintain. Instead, we use one of several other reference electrodes. The two most common of these alternative reference electrodes are the calomel, or Hg/Hg2Cl2 electrode, which is based on the following redox couple between Hg2Cl2 and Hg (calomel is the common name for Hg2Cl2)

Hg2Cl2(s) + 2e^− ⇌ 2Hg(l) + 2Cl^−(aq)

and the Ag/AgCl reference electrode, which is based on the reduction of AgCl to Ag

AgCl(s) + e^− ⇌ Ag(s) + Cl^−(aq)

A more detailed examination of these two reference electrodes is found in Chapter 23.1.

## Definition of Electrode Potential

To determine the potential for the reduction of Zn^2+(aq) to Zn(s) we make it the cathode in the following electrochemical cell

Pt(s), H2(g, P_H2 = 1.00)| H^+(aq, a_(H^+) = 1.00)||Zn^2+(aq, a_(Zn^2+) = x)|Zn(s)

where x is the activity of Zn^2+ in its half-cell. For example, when a_(Zn^2+) = 1.00, the potential of the electrochemical cell is −0.763V. If we find that the potential for the electrochemical cell

Zn(s)|Zn^2+(aq, a_(Zn^2+) = 1.00)||Ag^+(aq, a_(Ag^+) = 1.00)|Ag(s)

is +1.562 V, then knowing that

E_cell = E_(Ag^+/Ag) − E_(Zn^2+/Zn) = E_(Ag^+/Ag) − (−0.763V)

gives E_(Ag^+/Ag) = +0.799. In this way, we can build tables of potentials for individual half-reactions.

## Sign Convention for Electrode Potentials

In Section 22.2 we noted the following relationship between an electrochemical potential, E, and the Gibbs free energy, ΔG

ΔG = −nFE

which tells us that a positive potential corresponds to a thermodynamically favorable reaction. Knowing that the potential for the electrochemical cell in Equation (she_zn) is −0.763V tells us that the reduction of Zn^2+(aq) to Zn(s) is not thermodynamically favorable relative to the reduction of H^+(aq) to H2(g); that is, we do not expect the reaction

Zn^2+(aq) + H2(g) ⇌ 2H^+(aq) + Zn(s)

to occur; however, with a potential of +0.799 V, we do expect the reaction

2Ag^+(aq) + H2(g) ⇌ 2H^+(aq) + 2Ag(s)

to occur. Or, looking at this another way, we expect that Zn(s), but not Ag(s), will dissolve in acid.

## Effect of Activity on Electrode Potentials

In Chapter 22.2 we wrote the Nernst equation for the reaction

Zn(s) + 2Ag^+(aq) ⇌ 2Ag(s) + Zn^2+(aq)

in terms of the concentrations of Zn^2+(aq) and Ag^+(aq)

E = E° − (0.05916/2) log(([Zn^2+])/([Ag^+]^2))

Although there are times when we will write the Nernst equation in terms of concentrations, thermodynamic functions are more correctly written in terms of the activities of ions. Under ideal conditions, individual ions and molecules of gases behave as independent particles. When this is true, then an ion's activity and concentration are equal and we can write the Nernst equation using concentrations; under other conditions, then the Nernst equation is more correctly written in terms of activities

E = E° − (0.05916/2) log((a_(Zn^2+))/((a_(Ag^+))^2))

where a_(Zn^2+) and a_(Ag^+) are the activities of Zn^2+ and Ag^+. Equation (zn_ag_activity) shows us how the potential changes as the activities of Zn^2+ and Ag^+ change.

If you are not familiar with activity, or need a reminder on the relationship between activity and concentration, then see the appendix in Chapter 35.7, which explains what activity is, why it is important to make a distinction between activity and concentration, and when it is reasonable to use concentrations in place of activities.

## The Standard Electrode Potential E°

The standard electrode potential, E°, for a half-reaction is the potential when all species are present at unit activity or, for gases, unit fugacity. Its value is independent of how we choose to write the half-reaction; that is, the standard state potential for the reduction of Ag^+(aq) to Ag(s), which is the cathode in the electrochemical cell in Figure 22.1.1, is +0.799 V whether we write the half-reaction as

[Note: corrected; the source prints "write the half-reacation as" where this reads "write the half-reaction as". A typo.]

Ag^+(aq) + e^− ⇌ Ag(s)

or as

2Ag^+(aq) + 2e^− ⇌ 2Ag(s)

[Note: corrected; the source prints "2Ag^+(aq) + e^− ⇌ 2Ag(s)" where this reads "2Ag^+(aq) + 2e^− ⇌ 2Ag(s)". Reducing two Ag^+ takes two electrons; the equation as printed does not balance in charge, and the calculation below uses n = 2 for it.]

At first glance, this seems counterintuitive; however, if we calculate the potential when the activity of Ag^+ is 0.50 we get

[Note: corrected; the source prints "Ag+ is 0.50" where this reads "Ag^+ is 0.50". The charge is a superscript, as everywhere else in the section.]

E = E° − (0.05916/1) log(1/(a_(Ag^+))) = 0.799 − (0.05916/1) log(1/0.50) = 0.781V

when using reaction (ag1), and

E = E° − (0.05916/2) log(1/((a_(Ag^+))^2)) = 0.799 − (0.05916/2) log(1/(0.50^2)) = 0.781V

The appendix in Chapter 35.8 provides a table of standard state reduction potentials for a wide variety of half-reactions at 298 K.

## Some Limitations to the Use of Standard Electrode Potentials

Although standard electrode potentials are valuable, there are several important limitations to their use, which we outline here.

[Note: corrected; the source prints "they are several" where this reads "there are several". A typo.]

### Substitution of Concentration for Activities

One important limitation is that the Nernst equation is defined in terms of the activity of ions instead of their concentrations. Although it is easy to prepare a solution for which the concentration of Na^+ is 0.100 M using NaCl—just weigh out 5.844 g of NaCl and dissolve in 1.00 L of water—it is much more challenging to prepare a solution for which the activity of Na^+ is 0.100. For this reason, in calculations we usually substitute concentrations for activities when using the Nernst equation. This simplification generally is okay for dilute solutions where the difference between activities and concentrations are small.

[Note: corrected; the source prints "that that" where this reads "that". A doubled word.]

### Effect of Other Equilibrium Reactions

A standard state potential tells us about the equilibrium position of a redox half-reaction under standard state conditions. If one or more of the species in the half-reaction are involved in other equilibrium reactions, then these reactions will affect the value of the standard potential. For example, Fe^2+ and Fe^3+ form a variety of metal-ligand complexes with Cl^– which explains why E_(Fe^3+/Fe^2+)° is 0.771 in the absence of chloride ion, but is 0.70 in 1 M HCl.

[Note: corrected; the source prints "half-reaction reaction" where this reads "half-reaction". A doubled word.]

### Formal Potentials

One way to compensate for using concentrations and partial pressures in place of activities and fugacities, and to compensate for other equilibrium reactions, is to replace the standard state potentials, E° with a formal potential, E°′, that is measured using concentrations of 1.00 for ions, partial pressures of 1.00 for gases, and for a specific concentration of other reagents. The table below, which is adapted from the appendix in Chapter 35.8, provides formal potentials for Fe^3+/Fe^2+ half-reaction in five different solvents.

| iron | E° (V) | E°′ (V) |
| --- | --- | --- |
| Fe^3+ + e^− ⇌ Fe^2+ | 0.771 | 0.70 in 1 M HCl; 0.767 in 1 M HClO4; 0.746 in 1 M HNO3; 0.68 in 1 M H2SO4; 0.44 in 0.3 M H3PO4 |

### Reaction Rates

The reduction of Fe^3+ to Fe^2+ consumes an electron, which is drawn from the electrode. The oxidation of another species, perhaps the solvent, at a second electrode is the source of this electron. Because the reduction of Fe^3+ to Fe^2+ consumes one electron, the flow of electrons between the electrodes—in other words, the current—is a measure of the rate at which Fe^3+ is reduced. One important consequence of this observation is that the current is zero when the reaction Fe^3+(aq) + e^− ⇌ Fe^2+(aq) is at equilibrium. If redox half-reaction cannot maintain an equilibrium because the reaction in one direction is too slow, then we cannot measure a meaningful standard state potential.

[Note: corrected; the source prints "Fe^3+(aq) ⇌ Fe^2+(aq) + e^−" where this reads "Fe^3+(aq) + e^− ⇌ Fe^2+(aq)". The reduction of Fe^3+ to Fe^2+ described in the paragraph takes up an electron; the printed equation has the electron on the wrong side and does not balance in charge.]
