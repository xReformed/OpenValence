---
title: "18.9: Molar Heat Capacities"
book: "Physical Chemistry (LibreTexts)"
chapter: "18: Partition Functions and Ideal Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18%3A_Partition_Functions_and_Ideal_Gases/18.09%3A_Molar_Heat_Capacities"
author: "Tgrubbs"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Goal: Specific heat capacity data for a wide range of elements are used to assess the accuracy and limitations of the Dulong-Petit Law.
- Prerequisites: An introductory knowledge of statistical thermodynamics including the derivation of the vibrational (harmonic oscillator) contributions to the heat capacity are recommended.
- Resources you will need: This exercise should be carried out within a data analysis software environment which is capable of graphing and generating a best-fit line for an x-y data set.

The heat capacity (C) of a substance is a measure of how much heat is required to raise the temperature of that substance by one degree Kelvin. For a simple molecular gas, the molecules can simultaneously store kinetic energy in the translational, vibrational, and rotational motions associated with the individual molecules. In this case, the heat capacity of the substance can be broken down into translational, vibrational, and rotational contributions;

C=C_trans + C_vib + C_rot

Monoatomic crystalline solids represent a much simpler case. Einstein proposed a simple model for such substances whereby the atoms only have vibrational energy (each atom can vibrate in three perpendicular directions around its lattice position). Specifically, the ‘Einstein Solid Model’ assumes that the atoms act like three-dimensional harmonic oscillators (with the vibrational motion of each atom in each perpendicular dimension entirely independent). Statistical mechanics provides a relatively simple expression for the constant volume molar heat capacity (C_(V, m)) of a one-dimensional harmonic oscillator

C_(V, m)^(1 − D) = R((Θv)/T)^2((e^(−Θv/2T))/(1 − e^(−Θv/T)))^2

where R is the universal gas constant, T is absolute temperature, and Θv is called the ‘characteristic vibrational temperature’ of the oscillator and depends on the vibrational frequency (ν) according to

Θv = hν/k

[Note: corrected; the source prints "Θv = hv/k" where this reads "Θv = hν/k". ν is the frequency.]

with h representing Plank’s constant and k representing Boltzmann’s constant.

Since the vibrations in each dimension are assumed to be independent, the expression for the constant volume molar heat capacity of a 'three-dimensional' Einstein Solid is obtained by simply multiplying Equation (1) by three;

C_(V, m)^(3 − D) = 3R((Θv)/T)^2((e^(−Θv/2T))/(1 − e^(−Θv/T)))^2

The temperature variation of the heat capacity of most metallic solids is well described by Equation (3). Furthermore, plots of Equation (3) as a function of temperature for metals with widely varying vibrational frequencies reveal that the heat capacity always approaches the same asymptotic limit of 3R at high temperatures. Stated another way, at high temperatures

lim_(T → ∞)[((Θv)/T)^2((e^(−Θv/2T))/(1 − e^(−Θv/T)))^2] = 1

and Equation (3) reduces to

lim_(T → ∞)[C_(V, m)^(3D)] = 3R

(You will be asked to verify this result in the exercise below). According to Equation (5), the molar heat capacities of metallic solids should approach 24.9 J/(K mol) at high temperatures, regardless of the identity of the metal.

The vibrational frequencies of most metallic solids are usually small enough so that Θv lies considerably below room temperature (Θv ≪ 298 K). For these substances, the limits implied by Equations (4) and (5) are well approximated even at room temperature, leading to the result that C_(v, m) = 24.9 J/(K·mol) for most metals at room temperature.

In the early 1800s, two French scientists by the names of Pierre Louis Dulong and Alexis Therese Petit empirically discovered the same remarkable result. The Dulong-Petit Law is normally expressed in terms of the specific heat capacity (Cs) and the molar mass (M) of the metal

Cs M = C_(V, m) ≈ 25(J K^−1 mol^−1)

where Cs represents how much heat is required to raise the temperature of 'one gram' of that substance by one degree Kelvin. Dulong and Petit, as well as other scientists of their time, used this famous relationship as a means of establishing more accurate values for the atomic weight of metallic elements (by instead measuring the specific heat capacity of the element and using the Dulong-Petit relationship, which is a relatively simple method of establishing weights in comparison to the more disputable gravimetric methods that were being used at the time to establish the equivalent weights of elements).

In the exercise below, you will look up the specific heat capacities of a number of elements that exist as simple monoatomic solids at room temperature and assess the accuracy of the Dulong-Petit law.

## Experimental Data

Consult the CRC Handbook of Chemistry and Physics (CRC Press: Boca Raton, FL) and compile a table of specific heat capacities for a large number of elements that are known to exist as monoatomic solids at room temperature. Also look up and record the molar mass of these elements. The elements that you consider should be restricted to those appearing in groups 1-14 of the periodic table. Make sure you generate a fairly large list which includes a number of elements that are normally considered as metallic in character (such as copper, iron, sodium, lithium, gold, platinum, barium, and aluminum), but also some non-metallic elements that are nonetheless monoatomic isotropic solids (such as carbon-diamond, boron, and silicon; and the light metal beryllium). Heat capacities that are usually reported in the literature are not actual constant volume heat capacities (Cv), but are instead constant pressure heat capacities (Cp). Fortunately, Cp and Cv are essentially equal for simple solids (within the level of precision that we consider in this exercise), and you can assume that the values from the CRC Handbook represent Cs.

[Note: corrected; the source prints "(such as carbon-diamond, beryllium, boron, and silicon)" where this reads "(such as carbon-diamond, boron, and silicon; and the light metal beryllium)". Beryllium is a metal; it falls below the Dulong-Petit value because of its very high Debye temperature.]

## Exercises

1. Enter the element name, the specific heat capacity, and the molar mass of each element in a spreadsheet. Calculate the product of specific heat and molar mass for each element and calculate how much this product differs from the Dulong-Petit prediction (express your result as a percent difference relative to 3R).
2. Assess the generality of the Dulong-Petit law in an alternate way by generating a plot of specific heat as a function of reciprocal Molar Mass (Cs versus 1/M), which should be linear with a slope equal to 3R if the data behave according to Equation (6).
3. Inspect your results from 1 and 2 above and identify any elements that significantly deviate from the Dulong-Petit law. When they occur, do deviations tend to be smaller or larger than 3R? Does the degree of deviation from the Dulong-Petit law seem to correlate with periodic trends in metallic (or covalent) bonding for these elements? Do deviations tend to occur more readily for elements of smaller or higher atomic weight? Explain how the type of bonding and the magnitude of the atomic weight can lead to deviations from the arguments made in Equations (4)-(6) above.
4. Use the plotting method that you employed in step 2 above as a means of determining a value for the universal gas constant (R) - but make sure you throw-out any specific heat data for elements that you suspect do not fall within the limit Θv ≪ 298 K. Calculate the percent error in the value of R that you determine.
5. Verify that the limit expressed in Equation (4) above is true (HINT: expand each of the exponential terms in a power series and note that higher-order terms are negligible in the limit T ≫ Θv).
