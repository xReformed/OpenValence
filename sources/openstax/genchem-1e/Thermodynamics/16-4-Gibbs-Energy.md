---
title: "16.4: Gibbs Energy"
book: "Chemistry 1e (OpenStax)"
chapter: "16: Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/16%3A_Thermodynamics/16.04%3A_Gibbs_Energy"
author: "OpenStax"
license: "CC BY 4.0"
---

One of the challenges of using the second law of thermodynamics to determine if a chemical reaction is spontaneous is that we must determine the entropy change for the system and the entropy change for the surroundings. A second challenge when working with a chemical reaction is that we need to take into account the mixing of the substances, an issue that does not occur when observing the phase change of a pure substance. An alternative approach involving a new thermodynamic property defined in terms of system properties only was introduced in the late nineteenth century by American mathematician Josiah Willard Gibbs. This new property is called the Gibbs free energy (G) (or simply the free energy), and it is defined in terms of a system's enthalpy and entropy as the following:

G = H − TS

Free energy is a state function, and at constant temperature and pressure, the standard free energy change (ΔG°) may be expressed as the following:

ΔG°sys = ΔH°sys − TΔS°sys

(For simplicity's sake, the subscript "sys" will be omitted henceforth.) We can understand the relationship between this system property and the spontaneity of a process by recalling the previously derived second law expression:

ΔSuniv = ΔS + qsurr/T

The first law requires that qsurr = −qsys, and at constant pressure qsys = ΔH, and so this expression may be rewritten as the following:

ΔSuniv = ΔS − ΔH/T

ΔH is the enthalpy change of the system. Multiplying both sides of this equation by −T, and rearranging yields the following:

−TΔSuniv = ΔH − TΔS

Comparing this equation to the previous one for free energy change shows the following relation:

ΔG = −TΔSuniv

The free energy change is therefore a reliable indicator of the spontaneity of a process, being directly related to the previously identified spontaneity indicator, ΔSuniv. Table 16.4.1 summarizes the relation between the spontaneity of a process and the arithmetic signs of these indicators.

Table 16.4.1: Relation between Process Spontaneity and Signs of Thermodynamic Properties

| | | |
| --- | --- | --- |
| ΔSuniv > 0 | ΔG < 0 | moves spontaneously in the forward direction, as written, to reach equilibrium |
| ΔSuniv < 0 | ΔG > 0 | nonspontaneous in the forward direction, as written, but moves spontaneously in the reverse direction, as written, to reach equilibrium |
| ΔSuniv = 0 | ΔG = 0 | reversible (at equilibrium) |

## Calculating Free Energy Change

Free energy is a state function, so its value depends only on the conditions of the initial and final states of the system that have undergone some change. A convenient and common approach to the calculation of free energy changes for physical changes and chemical reactions is by use of widely available compilations of standard state thermodynamic data. One method involves the use of standard enthalpies and entropies to compute standard free energy changes according to the following relation as demonstrated in Example 16.4.1.

ΔG° = ΔH° − TΔS°

It is important to understand that for phase changes, ΔG° tells you if the phase change is spontaneous or not; will it happen, or not happen. For chemical reactions, ΔG° tells you the extent of a reaction. In other words, ΔG° for a reaction tells you how much product will be present at equilibrium. A reaction with ΔG° < 0 is considered product-favored at equilibrium; there will be more products than reactants when the reaction reaches equilibrium. A reaction with ΔG° > 0 is considered reactant-favored at equilibrium; there will be more reactants than products when the reaction reaches equilibrium.

### Example 16.4.1: Evaluation of ΔG° for a Phase Change of a Pure Substance

Use standard enthalpy and entropy data from Tables T1 or T2 to calculate the standard free energy change for the vaporization of water at room temperature (298 K). What does the computed value for ΔG° say about the spontaneity of this physical change for a pure substance?

**Solution**

The process of interest is the following:

H2O(l) ⟶ H2O(g)

The standard change in free energy may be calculated using the following equation:

ΔG°298 = ΔH° − TΔS°

From Tables T1 or T2, here are the data:

| Substance | ΔH°f (kJ/mol) | S°298 (J/K·mol) |
| --- | --- | --- |
| H2O(l) | −285.83 | 70.0 |
| H2O(g) | −241.82 | 188.8 |

Combining at 298 K:

ΔH° = ΔH°298 = ΔH°f(H2O(g)) − ΔH°f(H2O(l))
= [−241.82 kJ − (−285.83)] kJ/mol
= 44.01 kJ/mol

ΔS° = ΔS°298 = S°298(H2O(g)) − S°298(H2O(l))
= 188.8 J/mol·K − 70.0 J/mol·K
= 118.8 J/mol·K

then use ΔG° = ΔH° − TΔS°.

Converting everything into kJ and combining at 298 K:

ΔG°298 = ΔH° − TΔS°
= 44.01 kJ/mol − (298 K × 118.8 J/mol·K) × (1 kJ / 1000 J)

44.01 kJ/mol − 35.4 kJ/mol = 8.6 kJ/mol

At 298 K (25 °C) ΔG°298 > 0, and so boiling is nonspontaneous (not spontaneous) at 298 K.

### Exercise 16.4.1: Evaluation of ΔG° for a Chemical Reaction

Use standard enthalpy and entropy data from Tables T1 or T2 to calculate the standard free energy change for the reaction shown here (298 K). What does the computed value for ΔG° say about the extent of this reaction at 298 K?

C2H6(g) ⟶ H2(g) + C2H4(g)

**Answer**

ΔG°298 = 102.0 kJ/mol; the reaction is reactant-favored at equilibrium at 25 °C. There will be more C2H6(g) than H2(g) and C2H4(g) at equilibrium.

Free energy changes may also use the standard free energy of formation (ΔG°f), for each of the reactants and products involved in the reaction. The standard free energy of formation is the free energy change that accompanies the formation of one mole of a substance from its elements in their standard states. Similar to the standard enthalpies of formation, ΔG°f is by definition zero for elemental substances under standard state conditions. The approach to computing the free energy change for a reaction using this approach is the same as that demonstrated previously for enthalpy and entropy changes. For the reaction

mA + nB ⟶ xC + yD,

the standard free energy change at room temperature may be calculated as

ΔG°298 = ΔG°
= ∑νΔG°298(products) − ∑νΔG°298(reactants)
= [xΔG°f(C) + yΔG°f(D)] − [mΔG°f(A) + nΔG°f(B)].

### Example 16.4.2: Calculation of ΔG°298

Consider the decomposition of yellow mercury(II) oxide.

HgO(s, yellow) ⟶ Hg(l) + ½O2(g)

Calculate the standard free energy change at room temperature, ΔG°298, using:

- standard free energies of formation and
- standard enthalpies of formation and standard entropies.

Do the results indicate the reaction to be product-favored or reactant-favored at equilibrium?

**Solution**

The required data are available in Tables T1 or T2 and are shown here.

| Compound | ΔG°f (kJ/mol) | ΔH°f (kJ/mol) | S°298 (J/K·mol) |
| --- | --- | --- | --- |
| HgO (s, yellow) | −58.43 | −90.46 | 71.13 |
| Hg(l) | 0 | 0 | 75.9 |
| O2(g) | 0 | 0 | 205.2 |

(a) Using free energies of formation:

ΔG°298 = ∑νΔG°298(products) − ∑νΔG°298(reactants)
= [1ΔG°298 Hg(l) + ½ΔG°298 O2(g)] − 1ΔG°298 HgO(s, yellow)
= [1 mol(0 kJ/mol) + ½ mol(0 kJ/mol)] − 1 mol(−58.43 kJ/mol) = 58.43 kJ/mol

(b) Using enthalpies and entropies of formation:

ΔH°298 = ∑νΔH°298(products) − ∑νΔH°298(reactants)
= [1ΔH°298 Hg(l) + ½ΔH°298 O2(g)] − 1ΔH°298 HgO(s, yellow)
= [1 mol(0 kJ/mol) + ½ mol(0 kJ/mol)] − 1 mol(−90.46 kJ/mol) = 90.46 kJ/mol

ΔS°298 = ∑νΔS°298(products) − ∑νΔS°298(reactants)
= [1ΔS°298 Hg(l) + ½ΔS°298 O2(g)] − 1ΔS°298 HgO(s, yellow)
= [1 mol(75.9 J/mol K) + ½ mol(205.2 J/mol K)] − 1 mol(71.13 J/mol K) = 107.4 J/mol K

then we can use ΔG° = ΔH° − TΔS° directly:

ΔG° = ΔH° − TΔS°
= 90.46 kJ − 298.15 K × 107.4 J/K·mol × (1 kJ / 1000 J)
= (90.46 − 32.01) kJ/mol = 58.45 kJ/mol

Both ways to calculate the standard free energy change at 25 °C give the same numerical value (to three significant figures), and both predict that the process is reactant-favored at equilibrium at room temperature.

### Exercise 16.4.2

Calculate ΔG° using (a) free energies of formation and (b) enthalpies of formation and entropies (Tables T1 or T2). Do the results indicate the reaction to be product-favored or reactant-favored at equilibrium at 25 °C?

C2H4(g) ⟶ H2(g) + C2H2(g)

**Answer**

141.5 kJ/mol, reactant-favored at equilibrium

## Temperature Dependence of Spontaneity and Extent of Reaction

As was previously demonstrated in this chapter's section on entropy, the spontaneity of a process may depend upon the temperature of the system. Phase transitions, for example, will proceed spontaneously in one direction or the other depending upon the temperature of the substance in question. In a similar, but not identical fashion, some chemical reactions can switch from being product-favored at equilibrium, to being reactant-favored at equilibrium, depending on the temperature.

**Note**

The numerical value of ΔG° is always dependent on the temperature. In this section we are determining whether or not the sign of ΔG° is dependent on the temperature.

To illustrate this concept, the equation relating free energy change to the enthalpy and entropy changes for the process is considered:

ΔG° = ΔH° − TΔS°

The extent of a process, as reflected in the arithmetic sign of its standard free energy change, is then determined by the signs of the enthalpy and entropy changes and, in some cases, the absolute temperature. Since T is the absolute (Kelvin) temperature, it can only have positive values. Four possibilities therefore exist with regard to the signs of the enthalpy and entropy changes:

- Both ΔH° and ΔS° are positive. This condition describes an endothermic process that involves an increase in system entropy. In this case, ΔG° will be negative if the magnitude of the TΔS° term is greater than ΔH°. If the TΔS° term is less than ΔH°, the free energy change will be positive. Such a process is product-favored at equilibrium at high temperatures and reactant-favored at equilibrium at low temperatures.

- Both ΔH° and ΔS° are negative. This condition describes an exothermic process that involves a decrease in system entropy. In this case, ΔG° will be negative if the magnitude of the TΔS° term is less than ΔH°. If the TΔS° term's magnitude is greater than ΔH°, the free energy change will be positive. Such a process is product-favored at equilibrium at low temperatures and reactant-favored at equilibrium at high temperatures.

- ΔH° is positive and ΔS° is negative. This condition describes an endothermic process that involves a decrease in system entropy. In this case, ΔG° will be positive regardless of the temperature. Such a process is reactant-favored at equilibrium at all temperatures.

- ΔH° is negative and ΔS° is positive. This condition describes an exothermic process that involves an increase in system entropy. In this case, ΔG° will be negative regardless of the temperature. Such a process is product-favored at equilibrium at all temperatures.

These four scenarios are summarized in Table 16.4.2.

Table 16.4.2: Temperature Dependence of the Sign of ΔG°

| Sign of ΔH° | Sign of ΔS° | Sign of ΔG° | Temperature Dependence of ΔG° |
| --- | --- | --- | --- |
| − | + | − | The sign of ΔG° does not depend on the temperature. The reaction is product-favored at equilibrium at all temperatures. |
| + | − | + | The sign of ΔG° does not depend on the temperature. The reaction is reactant-favored at equilibrium at all temperatures. |
| − | − | − or + | The sign of ΔG° does depend on the temperature. The reaction will be product-favored at equilibrium at lower temperatures. |
| + | + | − or + | The sign of ΔG° does depend on the temperature. The reaction will be product-favored at equilibrium at higher temperatures. |

### Example 16.4.3: Predicting the Temperature Dependence of Spontaneity

The incomplete combustion of carbon is described by the following equation:

2C(s) + O2(g) ⟶ 2CO(g)

Does the sign of ΔG° of this process depend upon temperature?

**Solution**

Combustion processes are exothermic (ΔH° < 0). This particular reaction involves an increase in entropy due to the accompanying increase in the amount of gaseous species (net gain of one mole of gas, ΔS° > 0). The reaction is therefore product-favored at equilibrium (ΔG° < 0) at all temperatures.

### Exercise 16.4.3

Popular chemical hand warmers generate heat by the air-oxidation of iron:

4Fe(s) + 3O2(g) ⟶ 2Fe2O3(s)

Does the sign of ΔG° of this process depend upon temperature?

**Answer**

ΔH° and ΔS° are both negative; the reaction is product-favored at equilibrium at low temperatures.

When considering the conclusions drawn regarding the temperature dependence of the sign of ΔG°, it is important to keep in mind what the terms "high" and "low" mean. Since these terms are adjectives, the temperatures in question are deemed high or low relative to some reference temperature. A process that is reactant-favored at equilibrium at one temperature but product-favored at equilibrium at another temperature will necessarily undergo a change in "extent" (as reflected by its ΔG°) as temperature varies. This is clearly illustrated by a graphical presentation of the free energy change equation, in which ΔG° is plotted on the y axis versus T on the x axis:

ΔG° = ΔH° − TΔS°

y = b + mx

Such a plot is shown in Figure 16.4.2. A process whose enthalpy and entropy changes are of the same arithmetic sign will exhibit a temperature-dependence for the sign of ΔG° as depicted by the two yellow lines in the plot. Each line crosses from one spontaneity domain (positive or negative ΔG°) to the other at a temperature that is characteristic of the process in question. This temperature is represented by the x-intercept of the line, that is, the value of T for which ΔG° is zero:

ΔG° = 0 = ΔH° − TΔS°

T = ΔH° / ΔS°

Thus, saying a process is product-favored at equilibrium at "high" or "low" temperatures means the temperature is above or below, respectively, that temperature at which ΔG° for the process is zero.

**Note**

In this discussion, we have used two different descriptions for the meaning of the sign of ΔG°. You should be aware of the meaning of each description.

a) Extent of Reaction: This description is used to predict the ratio of the product and reactant concentrations at equilibrium. In this description, we use the thermodynamic term ΔG° to tell us the same information as the equilibrium constant, K. When ΔG° < 0, K > 1, and the reaction will be product-favored at equilibrium. When ΔG° > 0, K < 1, and the reaction is reactant-favored at equilibrium. When ΔG° = 0, K = 1, and the reaction will have roughly equal amounts of products and reactants at equilibrium. In all cases, the reaction will form a mixture of products and reactants at equilibrium. We use the sign and magnitude of ΔG° to tell us how much product will be made if the reaction is allowed to reach equilibrium.

b) Spontaneity: This description is much more complicated because it involves two different interpretations of how a reaction at standard state occurs. One interpretation involves the hypothetical process in which the reaction proceeds from a starting point of pure reactants to a finishing point of pure products, with all substances isolated in their own containers under standard state conditions. In the second, more realistic interpretation, the reaction starts with all reactants and all products in their standard state in one container. We then allow this specific mixture to react an infinitesimally small amount so that we can obtain a rate of change in free energy with respect to the extent of reaction when all reactants and products are mixed and (essentially) in their standard states. Although each interpretation describes a different reaction scenario, the value of the difference in free energy and the value of the rate of change in free energy are the same number. If ΔG° < 0, we say that the reaction is spontaneous, meaning that the reaction would proceed in the forward direction, as written, to form pure products in their standard state. If ΔG° > 0, we say that the reaction is nonspontaneous, meaning that the reaction would proceed in the reverse direction, as written, to form pure reactants in their standard state. If ΔG° = 0, we say that neither the reactants nor the products are favored to be formed.

A detailed treatment of the meaning of ΔG° can be found in the paper, "Free Energy versus Extent of Reaction" by Richard S. Treptow, Journal of Chemical Education, 1996, Volume 73 (1), 51-54.

Figure 16.4.2: These plots show the variation in ΔG° with temperature for the four possible combinations of arithmetic sign for ΔH° and ΔS°. Note that in this graph of ΔG°, "spontaneous" is synonymous with "product-favored at equilibrium", and "nonspontaneous" is synonymous with "reactant-favored at equilibrium".

### Example 16.4.4: Equilibrium Temperature for a Phase Transition

As defined in the chapter on liquids and solids, the boiling point of a liquid is the temperature at which its liquid and gas phases are in equilibrium (that is, when vaporization and condensation occur at equal rates). Use the information in Tables T1 or T2 to estimate the boiling point of water.

**Solution**

The process of interest is the following phase change:

H2O(l) ⟶ H2O(g)

When this process is at equilibrium, ΔG = 0, so the following is true:

0 = ΔH° − TΔS°   or   T = ΔH° / ΔS°

Using the standard thermodynamic data from Tables T1 or T2,

ΔH° = ΔH°f(H2O(g)) − ΔH°f(H2O(l))
= −241.82 kJ/mol − (−285.83 kJ/mol) = 44.01 kJ/mol

ΔS° = ΔS°298(H2O(g)) − ΔS°298(H2O(l))
= 188.8 J/K·mol − 70.0 J/K·mol = 118.8 J/K·mol

T = ΔH°/ΔS° = (44.01 × 10^3 J/mol) / (118.8 J/K·mol) = 370.5 K = 97.3 °C

The accepted value for water's normal boiling point is 373.2 K (100.0 °C), and so this calculation is in reasonable agreement. Note that the values for enthalpy and entropy changes data used were derived from standard data at 298 K (Tables T1 or T2). If desired, you could obtain more accurate results by using enthalpy and entropy changes determined at (or at least closer to) the actual boiling point.

### Exercise 16.4.4

Use the information in Tables T1 or T2 to estimate the boiling point of CS2.

**Answer**

313 K (accepted value 319 K).

## Free Energy and Equilibrium

The free energy change for a process may be viewed as a measure of its driving force. A negative value for ΔG represents a finite driving force for the process in the forward direction, while a positive value represents a driving force for the process in the reverse direction. When ΔG is zero, the forward and reverse driving forces are equal, and so the process occurs in both directions at the same rate (the system is at equilibrium).

In the chapter on equilibrium the reaction quotient, Q, was introduced as a convenient measure of the status of an equilibrium system. Recall that Q is the numerical value of the mass action expression for the system, and that you may use its value to identify the direction in which a reaction will proceed in order to achieve equilibrium. When Q is lesser than the equilibrium constant, K, the reaction will proceed in the forward direction until equilibrium is reached and Q = K. Conversely, if Q > K, the process will proceed in the reverse direction until equilibrium is achieved.

The free energy change for a process taking place with reactants and products present under nonstandard conditions, ΔG, is related to the standard free energy change, ΔG°, according to this equation:

ΔG = ΔG° + RT ln Q

R is the gas constant (8.314 J/K mol), T is the kelvin or absolute temperature, and Q is the reaction quotient. We may use this equation to predict the spontaneity for a process under any given set of conditions as illustrated in Example 16.4.5.

### Example 16.4.5: Calculating ΔG under Nonstandard Conditions

What is the free energy change for the process shown here under the specified conditions?

T = 25 °C, P_N2 = 0.870 atm, P_H2 = 0.250 atm, and P_NH3 = 12.9 atm

2NH3(g) ⟶ 3H2(g) + N2(g)   ΔG° = 33.0 kJ/mol

**Solution**

The equation ΔG = ΔG° + RT ln Q relates free energy change to standard free energy change and reaction quotient and may be used directly:

ΔG = ΔG° + RT ln Q
= 33.0 kJ/mol + (8.314 J/mol·K × 298 K × ln((0.250^3 × 0.870) / 12.9^2))
= 9680 J/mol or 9.68 kJ/mol

Since the computed value for ΔG is positive, the reaction is nonspontaneous under these conditions. The reaction will proceed in the reverse direction to reach equilibrium.

### Exercise 16.4.5

Calculate the free energy change for this same reaction at 875 °C in a 5.00 L mixture containing 0.100 mol of each gas. Is the reaction spontaneous under these conditions?

**Answer**

ΔG = −47 kJ; yes, the reaction proceeds in the forward direction, as written, to reach equilibrium.

For a system at equilibrium, Q = K and ΔG = 0, and the equation ΔG = ΔG° + RT ln Q may be written as

0 = ΔG° + RT ln K   (at equilibrium)

ΔG° = −RT ln K

or alternatively

K = e^(−ΔG°/RT)

This form of the equation provides a useful link between these two essential thermodynamic properties, and it can be used to derive equilibrium constants from standard free energy changes and vice versa. The relations between standard free energy changes and equilibrium constants are summarized in Table 16.4.3.

Table 16.4.3: Relations between Standard Free Energy Changes and Equilibrium Constants

| K | ΔG° | Comments |
| --- | --- | --- |
| < 1 | > 0 | Reactants are more abundant at equilibrium. |
| = 1 | = 0 | Reactants and products are equally abundant at equilibrium. |
| > 1 | < 0 | Products are more abundant at equilibrium. |

### Example 16.4.6: Equilibrium Constant using Standard Free Energy Change

Given that the standard free energies of formation of Ag+(aq), Cl−(aq), and AgCl(s) are 77.1 kJ/mol, −131.2 kJ/mol, and −109.8 kJ/mol, respectively, calculate the solubility product, Ksp, for AgCl.

**Solution**

The reaction of interest is the following:

AgCl(s) ⇌ Ag+(aq) + Cl−(aq)   Ksp = [Ag+][Cl−]

The standard free energy change for this reaction is first computed using standard free energies of formation for its reactants and products:

ΔG° = ΔG°298 = [ΔG°f(Ag+(aq)) + ΔG°f(Cl−(aq))] − [ΔG°f(AgCl(s))]
= [77.1 kJ/mol − 131.2 kJ/mol] − [−109.8 kJ/mol]
= 55.7 kJ/mol

The equilibrium constant for the reaction may then be derived from its standard free energy change via K = e^(−ΔG°/RT):

Ksp = e^(−ΔG°/RT) = exp(−ΔG°/RT)
= exp(−(55.7 × 10^3 J/mol) / (8.314 J/mol·K × 298.15 K))
= exp(−22.470) = e^−22.470 = 1.74 × 10^−10

### Exercise 16.4.6: dissociation of dinitrogen tetroxide

Use the thermodynamic data provided in Tables T1 or T2 to calculate the equilibrium constant for the dissociation of dinitrogen tetroxide at 25 °C.

2NO2(g) ⇌ N2O4(g)

**Answer**

K = 6.9

[Note: the exercise is titled as the dissociation of N2O4, but the equation given and the printed answer are for the reverse process, the dimerization of NO2 (K ≈ 6.9 at 25 °C; the dissociation would have K ≈ 0.15). The equation is also missing its coefficient in the source, printed as "NO2(g) ⇌ N2O4(g)"; it is balanced here as 2NO2.]

To further illustrate the relation between these two essential thermodynamic concepts, consider the observation that reactions spontaneously proceed in a direction that ultimately establishes equilibrium. As may be shown by plotting the free energy change versus the extent of the reaction (for example, as reflected in the value of Q), equilibrium is established when the system's free energy is minimized (Figure 16.4.3). If a system is present with reactants and products present in nonequilibrium amounts (Q ≠ K), the reaction will proceed spontaneously in the direction necessary to establish equilibrium.

Figure 16.4.3: These plots show the free energy versus reaction progress for systems whose standard free changes are (a) negative, (b) positive, and (c) zero. Nonequilibrium systems will proceed spontaneously in whatever direction is necessary to minimize free energy and establish equilibrium. Note that reactions with K equal to exactly 1.000 are rare.

## Summary

Gibbs free energy (G) is a state function defined with regard to system quantities only and may be used to predict the spontaneity of a process. A negative value for ΔG indicates that the process will proceed in the forward direction to reach equilibrium; a positive ΔG indicates that the process will proceed in the reverse direction to reach equilibrium; and a ΔG of zero indicates that the system is at equilibrium. A negative value for ΔG° means that the reaction is product-favored at equilibrium. A positive value for ΔG° means that the reaction is reactant-favored at equilibrium. If ΔG° equals 0 (a rare occurrence), the reaction has roughly equal amounts of reactants and products at equilibrium. A number of approaches to the computation of free energy changes are possible.

## Key Equations

- ΔG = ΔH − TΔS
- ΔG = ΔG° + RT ln Q
- ΔG° = −RT ln K
