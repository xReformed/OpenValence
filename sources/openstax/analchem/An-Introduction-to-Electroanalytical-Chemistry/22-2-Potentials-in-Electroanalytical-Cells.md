---
title: "22.2: Potentials in Electroanalytical Cells"
book: "Instrumental Analysis (LibreTexts)"
chapter: "22: An Introduction to Electroanalytical Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/22%3A_An_Introduction_to_Electroanalytical_Chemistry/22.02%3A_Potentials_in_Electroanalytical_Cells"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

If a Zn(s) electrode in a solution of Zn^2+(aq) in an electrochemical cell is at equilibrium, the current is zero and the potential is fixed in value. If we change the potential from its equilibrium value, current will flow as the system moves to its new equilibrium position. Although the initial current is quite large, it decreases over time, reaching zero when the reaction reaches equilibrium. The current, therefore, changes in response to the applied potential. Alternatively, we can pass a fixed current through the electrochemical cell, forcing the oxidation of Zn(s) to Zn^2+(aq), effecting a change in the potential. In short, if we choose to control the potential, then we must accept the resulting current, and we must accept the resulting potential if we choose to control the current.

## The Thermodynamics of Cell Potentials

Because a redox reaction involves a transfer of electrons from a reducing agent to an oxidizing agent, it is convenient to consider the reaction’s thermodynamics in terms of the electron. For a reaction in which one mole of a reactant undergoes oxidation or reduction, the net transfer of charge, q, in coulombs is

q = nF

where n is the moles of electrons per mole of reactant, and F is Faraday’s constant (96485 C/mol). The free energy, ∆G, to move this charge given an applied potential, E, is

ΔG = Eq

The change in free energy (in J/mol) for a redox reaction, therefore, is

[Note: corrected; the source prints "(in kJ/mole)" where this reads "(in J/mol)". With F in C/mol and E in volts, −nFE comes out in J/mol (1 C·V = 1 J), not kJ/mol.]

ΔG = −nFE

where ∆G has units of J/mol. The minus sign in Equation (deltaG2) is the result of a different convention for assigning a reaction’s favorable direction. In thermodynamics, a reaction is favored when ∆G is negative, but a redox reaction is favored when E is positive. Substituting Equation (deltaG2) into the thermodynamic equation that relates the free energy to its standard state value

[Note: corrected; the source prints "has units of kJ/mol" where this reads "has units of J/mol". With F in C/mol and E in volts, −nFE comes out in J/mol (1 C·V = 1 J), not kJ/mol.]

ΔG = ΔG° + RT ln Qr

gives

−nFE = −nFE° + RT ln Qr

Dividing by –nF leads to the Nernst equation

E = E° − (RT/nF) ln Qr

where E^o is the potential under standard‐state conditions (more on this in Section 22.3). Substituting appropriate values for R and F, assuming a temperature of 25 ^oC (298 K), and switching from the natural logarithm (ln) to the base 10 logarithm (log) gives the potential in volts as

E = E^o−(0.05916/n) log Qr

The term Qr in the previous equations is the reaction quotient, which has the same mathematical form as the reaction's equilibrium constant expression, but uses the instantaneous amounts of reactants and products in place of their equilibrium values. For the cell in Figure 22.1.1, for example, the overall reaction is

Zn(s) + 2Ag^+(aq) ⇌ 2Ag(s) + Zn^2+(aq)

and Equation (nernst2) becomes

E = E° − (0.05916/2) log(([Zn^2+])/([Ag^+]^2))

Equation (zn_ag) shows us how the potential changes as the concentrations of Zn^2+ and Ag^+ change.

As we will see in 22.3, (zn_ag) actually is expressed in terms of activities instead of concentrations. The appendix in Chapter 35.7 explains what activity is, why it is important to make a distinction between activity and concentration, and when it is reasonable to use concentrations in place of activities.

## Liquid Junction Potentials

A junction potential develops at the interface between two ionic solutions if there is a difference in the concentration and the mobility of the ions. Consider, for example, a porous membrane that separates a solution of 0.1 M HCl from a solution of 0.01 M HCl (Figure 22.2.1a). Because the concentration of HCl on the membrane’s left side is greater than that on the right side of the membrane, H^+ and Cl^– will diffuse in the direction of the arrows. The mobility of H^+, however, is greater than that for Cl^–, as shown by the difference in the lengths of their respective arrows. Because of this difference in mobility, the solution on the right side of the membrane develops an excess concentration of H^+ and a positive charge (Figure 22.2.1b). Simultaneously, the solution on the membrane’s left side develops a negative charge because there is an excess concentration of Cl^–. We call this difference in potential across the membrane a junction potential and represent it as E_j.

Figure 22.2.1: Origin of the junction potential between a solution of 0.1 M HCl and a solution of 0.01 M HCl.
Origin of the junction potential between a solution of 0.1 M HCl and a solution of 0.01 M HCl.

The magnitude of a junction potential depends upon the difference in the concentration of ions on the two sides of the interface, and may be as large as 30–40 mV. For example, a junction potential of 33.09 mV has been measured at the interface between solutions of 0.1 M HCl and 0.1 M NaCl [Sawyer, D. T.; Roberts, J. L., Jr. Experimental Electrochemistry for Chemists, Wiley-Interscience: New York, 1974, p. 22]. A salt bridge’s junction potential is minimized by using a salt, such as KCl, for which the mobilities of the cation and anion are approximately equal. We also can minimize the junction potential by incorporating a high concentration of the salt in the salt bridge. For this reason salt bridges frequently are constructed using solutions that are saturated with KCl. Nevertheless, a small junction potential, generally of unknown magnitude, is always present.
