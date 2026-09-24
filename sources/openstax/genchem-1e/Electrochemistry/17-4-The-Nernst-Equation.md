---
title: "17.4: The Nernst Equation"
book: "Chemistry 1e (OpenStax)"
chapter: "17: Electrochemistry"
source_url: "https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/17%3A_Electrochemistry/17.04%3A_The_Nernst_Equation"
author: "OpenStax"
license: "CC BY 4.0"
---

We will now extend electrochemistry by determining the relationship between E°cell and the thermodynamics quantities such as ΔG° (Gibbs free energy) and K (the equilibrium constant). In galvanic cells, chemical energy is converted into electrical energy, which can do work. The electrical work is the product of the charge transferred multiplied by the potential difference (voltage):

electrical work = volts × (charge in coulombs) = J

The charge on 1 mole of electrons is given by Faraday's constant (F)

F = (6.022 × 10^23 e− / mol) × (1.602 × 10^−19 C / e−)
= 9.648 × 10^4 C/mol
= 9.648 × 10^4 J/(V·mol)

Therefore

total charge = (number of moles of e−) × F = nF

In this equation, n is the number of moles of electrons for the balanced oxidation-reduction reaction. The measured cell potential is the maximum potential the cell can produce and is related to the electrical work (wele) by

Ecell = −wele / (nF)   or   wele = −nFEcell

The negative sign for the work indicates that the electrical work is done by the system (the galvanic cell) on the surroundings. In an earlier chapter, the free energy was defined as the energy that was available to do work. In particular, the change in free energy was defined in terms of the maximum work (wmax), which, for electrochemical systems, is wele.

ΔG = wmax = wele
= −nFEcell

We can verify the signs are correct when we realize that n and F are positive constants and that galvanic cells, which have positive cell potentials, involve spontaneous reactions. Thus, spontaneous reactions, which have ΔG < 0, must have Ecell > 0. If all the reactants and products are in their standard states, this becomes

ΔG° = −nFE°cell

This provides a way to relate standard cell potentials to equilibrium constants, since

ΔG° = −RT ln K

−nFE°cell = −RT ln K

or

E°cell = (RT / nF) ln K

Most of the time, the electrochemical reactions are run at standard temperature (298.15 K). Collecting terms at this temperature yields

E°cell = (RT / nF) ln K
= ((8.314 J/K·mol)(298.15 K)) / (n × 96,485 C/V·mol) ln K
= (0.0257 V / n) ln K

where n is the number of moles of electrons. The logarithm in equations involving cell potentials is often expressed using base 10 logarithms (i.e., log10 or just log), which changes the constant by a factor of 2.303:

E°cell = (0.0592 V / n) log K

Thus, if ΔG°, K, or E°cell is known or can be calculated, the other two quantities can be readily determined. The relationships are shown graphically in Figure 17.4.1.

Figure 17.4.1: The relationships between ΔG°, K, and E°cell. Given any one of the three quantities, the other two can be calculated, so any of the quantities could be used to determine whether a process was spontaneous.
A diagram is shown that involves three double headed arrows positioned in the shape of an equilateral triangle. The vertices are labeled in red. The top vertex is labeled "K." The vertex at the lower left is labeled "ΔG°." The vertex at the lower right is labeled "E°cell." The right side of the triangle is labeled "E°cell = (RT/nF) ln K." The lower side of the triangle is labeled "ΔG° = −nFE°cell." The left side of the triangle is labeled "ΔG° = −RT ln K."

Given any one of the quantities, the other two can be calculated.

### Example 17.4.1: Equilibrium Constants, Potentials, & Free Energy Changes

What is the standard Gibbs free energy change and equilibrium constant for the following reaction at 25 °C?

2Ag+(aq) + Fe(s) ⇌ 2Ag(s) + Fe^2+(aq)

**Solution**

The reaction involves an oxidation-reduction reaction, so the standard cell potential can be calculated using the data in Table P1.

anode (oxidation): Fe(s) ⟶ Fe^2+(aq) + 2e−   E°(Fe^2+/Fe) = −0.447 V
cathode (reduction): 2 × (Ag+(aq) + e− ⟶ Ag(s))   E°(Ag+/Ag) = 0.7996 V
E°cell = E°cathode − E°anode = E°(Ag+/Ag) − E°(Fe^2+/Fe) = +1.247 V

Remember that the cell potential for the cathode is not multiplied by two when determining the standard cell potential. With n = 2, the equilibrium constant is then

E°cell = (0.0592 V / n) log K

K = 10^(n × E°cell / 0.0592 V)
= 10^(2 × 1.247 V / 0.0592 V)
= 10^42.128
= 1.3 × 10^42

The standard free energy is then

ΔG° = −nFE°cell

ΔG° = −2 × 96,485 J/(V·mol) × 1.247 V = −240.6 kJ/mol

Check your answer: A positive standard cell potential means a spontaneous reaction, so the standard free energy change should be negative, and an equilibrium constant should be >1.

### Exercise 17.4.1

What is the standard Gibbs free energy change and the equilibrium constant for the following reaction at room temperature? Is the reaction spontaneous?

Sn(s) + 2Cu^2+(aq) ⇌ Sn^2+(aq) + 2Cu+(aq)

**Answer**

Spontaneous; n = 2; E°cell = +0.291 V; ΔG° = −56.2 kJ/mol; K = 6.8 × 10^9.

Now that the connection has been made between the free energy and cell potentials, nonstandard concentrations follow. Recall that

ΔG = ΔG° + RT ln Q

where Q is the reaction quotient (see the chapter on equilibrium fundamentals). Converting to cell potentials:

−nFEcell = −nFE°cell + RT ln Q

or

Ecell = E°cell − (RT / nF) ln Q

This is the generalized Nernst equation that is applicable at any temperature. However, it can be simplified for reactions occurring at 25 °C (298.15 K) by rewriting it as

Ecell = E°cell − (0.0257 V / n) ln Q

or

Ecell = E°cell − (0.0592 V / n) log10 Q

If the temperature is not 298.15 K, it is necessary to recalculate the potential with the generalized form. With the Nernst equation, it is possible to calculate the cell potential at nonstandard conditions. This adjustment is necessary because potentials determined under different conditions will have different values.

### Example 17.4.2: Cell Potentials at Nonstandard Conditions

Consider the following reaction at room temperature:

Co(s) + Fe^2+(aq, 1.94 M) ⟶ Co^2+(aq, 0.15 M) + Fe(s)

Is the process spontaneous?

**Solution**

There are two ways to solve the problem. If the thermodynamic information in Table T1 were available, you could calculate the free energy change. If the free energy change is negative, the process is spontaneous. The other approach, which we will use, requires information like that given in Table P1. Using those data, the cell potential can be determined. If the cell potential is positive, the process is spontaneous. Collecting information from Table P1 and the problem,

Anode (oxidation): Co(s) ⟶ Co^2+(aq) + 2e−   E°(Co^2+/Co) = −0.28 V
Cathode (reduction): Fe^2+(aq) + 2e− ⟶ Fe(s)   E°(Fe^2+/Fe) = −0.447 V
E°cell = E°cathode − E°anode = −0.447 V − (−0.28 V) = −0.17 V

The process is not spontaneous under standard conditions. Using the Nernst equation and the concentrations stated in the problem and n = 2,

Q = [Co^2+] / [Fe^2+] = 0.15 M / 1.94 M = 0.077

Now we can insert these into the Nernst equation at room temperature:

Ecell = E°cell − (0.0592 V / n) log Q
= −0.17 V − (0.0592 V / 2) log 0.077
= −0.17 V + 0.033 V = −0.14 V

The process is (still) nonspontaneous.

### Exercise 17.4.2

What is the cell potential for the following reaction at room temperature?

Al(s) │ Al^3+(aq, 0.15 M) ‖ Cu^2+(aq, 0.025 M) │ Cu(s)

What are the values of n and Q for the overall reaction? Is the reaction spontaneous under these conditions?

**Answer**

n = 6; Q = 1440; Ecell = +1.97 V, spontaneous.

Finally, we will take a brief look at a special type of cell called a concentration cell. In a concentration cell, the electrodes are the same material and the half-cells differ only in concentration. Since one or both compartments is not standard, the cell potentials will be unequal; therefore, there will be a potential difference, which can be determined with the aid of the Nernst equation.

### Example 17.4.3: Concentration Cells

What is the cell potential of the concentration cell described by

Zn(s) │ Zn^2+(aq, 0.10 M) ‖ Zn^2+(aq, 0.50 M) │ Zn(s)

**Solution**

From the information given:

Anode: Zn(s) ⟶ Zn^2+(aq, 0.10 M) + 2e−   E°anode = −0.7618 V
Cathode: Zn^2+(aq, 0.50 M) + 2e− ⟶ Zn(s)   E°cathode = −0.7618 V
Overall: Zn^2+(aq, 0.50 M) ⟶ Zn^2+(aq, 0.10 M)   E°cell = 0.000 V

The standard cell potential is zero because the anode and cathode involve the same reaction; only the concentration of Zn2+ changes. Substituting into the Nernst equation,

Ecell = 0.000 V − (0.0592 V / 2) log(0.10 / 0.50) = +0.021 V

and the process is spontaneous at these conditions.

Check your answer: In a concentration cell, the standard cell potential will always be zero. To get a positive cell potential (spontaneous process) the reaction quotient Q must be <1. Q < 1 in this case, so the process is spontaneous.

### Exercise 17.4.3

What value of Q for the previous concentration cell would result in a voltage of 0.10 V? If the concentration of zinc ion at the cathode was 0.50 M, what was the concentration at the anode?

**Answer**

Q = 0.00042; [Zn2+]anode = 2.1 × 10^−4 M.

## Summary

Electrical work (wele) is the negative of the product of the total charge (Q) and the cell potential (Ecell). The total charge can be calculated as the number of moles of electrons (n) times the Faraday constant (F = 96,485 C/mol e−). Electrical work is the maximum work that the system can produce and so is equal to the change in free energy. Thus, anything that can be done with or to a free energy change can also be done to or with a cell potential. The Nernst equation relates the cell potential at nonstandard conditions to the logarithm of the reaction quotient. Concentration cells exploit this relationship and produce a positive cell potential using half-cells that differ only in the concentration of their solutes.

## Key Equations

- E°cell = (RT / nF) ln K
- E°cell = (0.0257 V / n) ln K = (0.0592 V / n) log K   (at 298.15 K)
- Ecell = E°cell − (RT / nF) ln Q   (Nernst equation)
- Ecell = E°cell − (0.0257 V / n) ln Q = E°cell − (0.0592 V / n) log Q   (at 298.15 K)
- ΔG = −nFEcell
- ΔG° = −nFE°cell
- wele = wmax = −nFEcell
