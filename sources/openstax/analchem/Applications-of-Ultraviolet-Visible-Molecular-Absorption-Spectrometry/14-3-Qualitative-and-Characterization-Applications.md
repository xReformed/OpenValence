---
title: "14.3: Qualitative and Characterization Applications"
book: "Instrumental Analysis (LibreTexts)"
chapter: "14: Applications of Ultraviolet/Visible Molecular Absorption Spectrometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/14%3A_Applications_of_Ultraviolet_Visible_Molecular_Absorption_Spectrometry/14.03%3A_Qualitative_Applications"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

## Qualitative Applications

As discussed in Chapter 14.2, ultraviolet, visible, and infrared absorption bands result from the absorption of electromagnetic radiation by specific valence electrons or bonds. The energy at which the absorption occurs, and the intensity of that absorption, is determined by the chemical environment of the absorbing moiety. For example, benzene has several ultraviolet absorption bands due to π → π^* transitions. The position and intensity of two of these bands, 203.5 nm (ε = 7400 M^–1cm^–1) and 254 nm (ε = 204 M^–1 cm^–1), are sensitive to substitution. For benzoic acid, in which a carboxylic acid group replaces one of the aromatic hydrogens, the two bands shift to 230 nm (ε = 11600 M^–1 cm^–1) and 273 nm (ε = 970 M^–1 cm^–1). A variety of rules have been developed to aid in correlating UV/Vis absorption bands to chemical structure. With the availability of computerized data acquisition and storage it is possible to build digital libraries of standard reference spectra. The identity of an unknown compound often can be determined by comparing its spectrum against a library of reference spectra, a process known as spectral searching.

[Note: corrected; the source prints "The identity of an a unknown compound" where this reads "The identity of an unknown compound". A stray "a".]

## Characterization Applications

Molecular absorption, particularly in the UV/Vis range, has been used for a variety of different characterization studies, including determining the stoichiometry of metal–ligand complexes and determining equilibrium constants. Both of these examples are examined in this section.

### Stoichiometry of a Metal-Ligand Complex

We can determine the stoichiometry of the metal–ligand complexation reaction

M + yL ⇌ MLy

using one of three methods: the method of continuous variations, the mole-ratio method, and the slope-ratio method. Of these approaches, the method of continuous variations, also called Job’s method, is the most popular. In this method a series of solutions is prepared such that the total moles of metal and of ligand, n_total, in each solution is the same. If (n_M)_i and (n_L)_i are, respectively, the moles of metal and ligand in solution i, then

n_total = (n_M)i + (n_L)i

The relative amount of ligand and metal in each solution is expressed as the mole fraction of ligand, (X_L)i, and the mole fraction of metal, (X_M)_i,

(X_L)i = ((n_L)i)/(n_total)

(XM)i = 1 − ((n_L)i)/(n_total) = ((n_M)i)/(n_total)

The concentration of the metal–ligand complex in any solution is determined by the limiting reagent, with the greatest concentration occurring when the metal and the ligand are mixed stoichiometrically. If we monitor the complexation reaction at a wavelength where only the metal–ligand complex absorbs, a graph of absorbance versus the mole fraction of ligand has two linear branches—one when the ligand is the limiting reagent and a second when the metal is the limiting reagent. The intersection of the two branches represents a stoichiometric mixing of the metal and the ligand. We use the mole fraction of ligand at the intersection to determine the value of y for the metal–ligand complex ML_y.

y = (n_L)/(n_M) = (X_L)/(X_M) = (X_L)/(1 − X_L)

You also can plot the data as absorbance versus the mole fraction of metal. In this case, y is equal to (1 – X_M)/X_M.

### Example 14.3.1

To determine the formula for the complex between Fe^2+ and o-phenanthroline, a series of solutions is prepared in which the total concentration of metal and ligand is held constant at 3.15 × 10^−4 M. The absorbance of each solution is measured at a wavelength of 510 nm. Using the following data, determine the formula for the complex.

| X_L | absorbance | X_L | absorbance |
| --- | --- | --- | --- |
| 0.000 | 0.000 | 0.600 | 0.693 |
| 0.100 | 0.116 | 0.700 | 0.809 |
| 0.200 | 0.231 | 0.800 | 0.693 |
| 0.300 | 0.347 | 0.900 | 0.347 |
| 0.400 | 0.462 | 1.000 | 0.000 |
| 0.500 | 0.578 |  |  |

**Solution**

A plot of absorbance versus the mole fraction of ligand is shown in Figure 14.3.1. To find the maximum absorbance, we extrapolate the two linear portions of the plot. The two lines intersect at a mole fraction of ligand of 0.75. Solving for y gives

y = (XL)/(1 − XL) = 0.75/(1 − 0.75) = 3

The formula for the metal–ligand complex is Fe(phen)3^2+.

Figure 14.3.1: Continuous variations plot for Example 14.3.1 . The photo shows the solutions used to gather the data. Each solution is displayed directly below its corresponding point on the continuous variations plot. To prepare these solutions I first prepared a solution of 3.15 × 10^−4 M Fe^2+ and a solution of 3.15 × 10^−4 M o-phenanthroline. Because the two stock solutions have the same concentration, diluting a portion of one solution with the other solution gives a mixture in which the combined concentration of o-phenanthroline and Fe^2+ is 3.15 × 10^−4 M. Because each solution has the same volume, each solution also contains the same total moles of metal and ligand.
Continuous variations plot for Example 14.3.1.

### Exercise 14.3.1

Use the continuous variations data in the following table to determine the formula for the complex between Fe^2+ and SCN^–. The data for this problem is adapted from Meloun, M.; Havel, J.; Högfeldt, E. Computation of Solution Equilibria, Ellis Horwood: Chichester, England, 1988, p. 236.

| X_L | absorbance | X_L | absorbance | X_L | absorbance | X_L | absorbance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0200 | 0.068 | 0.2951 | 0.670 | 0.5811 | 0.790 | 0.8923 | 0.324 |
| 0.0870 | 0.262 | 0.3887 | 0.767 | 0.6860 | 0.701 | 0.9787 | 0.071 |
| 0.1792 | 0.471 | 0.4964 | 0.807 | 0.7885 | 0.540 |  |  |

**Answer**

The figure below shows a continuous variations plot for the data in this exercise. Although the individual data points show substantial curvature—enough curvature that there is little point in trying to draw linear branches for excess metal and excess ligand—the maximum absorbance clearly occurs at X_L ≈ 0.5. The complex’s stoichiometry, therefore, is Fe(SCN)^2+.

[Image: Continuous variations plot for Exercise 14.3.1.]

Several precautions are necessary when using the method of continuous variations. First, the metal and the ligand must form only one metal–ligand complex. To determine if this condition is true, plots of absorbance versus X_L are constructed at several different wavelengths and for several different values of n_total. If the maximum absorbance does not occur at the same value of X_L for each set of conditions, then more than one metal–ligand complex is present. A second precaution is that the metal–ligand complex’s absorbance must obey Beer’s law. Third, if the metal–ligand complex’s formation constant is relatively small, a plot of absorbance versus X_L may show significant curvature. In this case it often is difficult to determine the stoichiometry by extrapolation. Finally, because the stability of a metal–ligand complex may be influenced by solution conditions, it is necessary to control carefully the composition of the solutions. When the ligand is a weak base, for example, each solution must be buffered to the same pH.

[Note: corrected; the source prints "each solutions must be buffered" where this reads "each solution must be buffered". A typo for "each solution".]

In the mole-ratio method the moles of one reactant, usually the metal, is held constant, while the moles of the other reactant is varied. The absorbance is monitored at a wavelength where the metal–ligand complex absorbs. A plot of absorbance as a function of the ligand-to-metal mole ratio, n_L/n_M, has two linear branches that intersect at a mole–ratio corresponding to the complex’s formula. Figure 14.3.2a shows a mole-ratio plot for the formation of a 1:1 complex in which the absorbance is monitored at a wavelength where only the complex absorbs. Figure 14.3.2b shows a mole-ratio plot for a 1:2 complex in which all three species—the metal, the ligand, and the complex—absorb at the selected wavelength. Unlike the method of continuous variations, the mole-ratio method can be used for complexation reactions that occur in a stepwise fashion if there is a difference in the molar absorptivities of the metal–ligand complexes, and if the formation constants are sufficiently different. A typical mole-ratio plot for the step-wise formation of ML and ML2 is shown in Figure 14.3.2c.

Figure 14.3.2: Mole-ratio plots for: (a) a 1:1 metal–ligand complex in which only the complex absorbs; (b) a 1:2 metal–ligand complex in which the metal, the ligand, and the complex absorb; and (c) the stepwise formation of a 1:1 and a 1:2 metal–ligand complex.
Mole-ratio plots.

[Note: corrected; the source prints "Figure 14.3.2a: Mole-ratio plots" where this reads "Figure 14.3.2: Mole-ratio plots". The caption covers all three panels (a), (b) and (c) of Figure 14.3.2, not panel a alone.]

For both the method of continuous variations and the mole-ratio method, we determine the complex’s stoichiometry by extrapolating absorbance data from conditions in which there is a linear relationship between absorbance and the relative amounts of metal and ligand. If a metal–ligand complex is very weak, a plot of absorbance versus X_L or n_L/n_M becomes so curved that it is impossible to determine the stoichiometry by extrapolation. In this case the slope-ratio method is used.

[Note: corrected; the source prints "the slope-ratio is used." where this reads "the slope-ratio method is used.". The source drops the word "method".]

In the slope-ratio method two sets of solutions are prepared. The first set of solutions contains a constant amount of metal and a variable amount of ligand, chosen such that the total concentration of metal, C_M, is much larger than the total concentration of ligand, C_L. Under these conditions we may assume that essentially all the ligand reacts to form the metal–ligand complex. The concentration of the complex, which has the general form M_xL_y, is

[Mx L_y] = (C_L)/y

If we monitor the absorbance at a wavelength where only M_xL_y absorbs, then

A = εb[Mx Ly] = (εbC_L)/y

and a plot of absorbance versus C_L is linear with a slope, s_L, of

s_L = (εb)/y

A second set of solutions is prepared with a fixed concentration of ligand that is much greater than a variable concentration of metal; thus

[Mx Ly] = (C_M)/x

A = εb[Mx Ly] = (εbC_M)/x

sM = (εb)/x

A ratio of the slopes provides the relative values of x and y.

(s_M)/(s_L) = (εb/x)/(εb/y) = y/x

An important assumption in the slope-ratio method is that the complexation reaction continues to completion in the presence of a sufficiently large excess of metal or ligand. The slope-ratio method also is limited to systems in which only a single complex forms and for which Beer’s law is obeyed.

### Determination of Equilibrium Constants

Another important application of molecular absorption spectroscopy is the determination of equilibrium constants. Let’s consider, as a simple example, an acid–base reaction of the general form

HIn(aq) + H2O(l) ⇌ H3O^+(aq) + In^−(aq)

where HIn and In^– are the conjugate weak acid and weak base forms of an acid–base indicator. The equilibrium constant for this reaction is

K_a = ([H3O^+][In^−])/([HIn])

[Note: corrected; the source prints "K_a = ([H3O^+][A^-])/([HA])" where this reads "K_a = ([H3O^+][In^−])/([HIn])". The reaction just given is that of the indicator HIn, so the constant is written in [In^−] and [HIn], as in Equation (10.10).]

To determine the equilibrium constant’s value, we prepare a solution in which the reaction is in a state of equilibrium and determine the equilibrium concentration for H3O^+, HIn, and In^–. The concentration of H3O^+ is easy to determine by measuring the solution’s pH. To determine the concentration of HIn and In^– we can measure the solution’s absorbance.

If both HIn and In^– absorb at the selected wavelength, then, from Beer's law, we know that

A = ε_HIn b[HIn] + ε_In b[In^−]

[Note: corrected; the source prints "A = ε_Hln b[HIn] + ε_ln b[In^−]" where this reads "A = ε_HIn b[HIn] + ε_In b[In^−]". The subscripts are the species HIn and In^− (capital I, as in ε_HIn and ε_In in the text below), not "Hln" and "ln".]

where ε_HIn and ε_In are the molar absorptivities for HIn and In^–. The indicator’s total concentration, C, is given by a mass balance equation

C = [HIn] + [In^−]

Solving Equation (10.6) for [HIn] and substituting into Equation (10.5) gives

A = ε_HIn b(C−[In^−]) + ε_In b[In^−]

[Note: corrected; the source prints "A = ε_Hln b(C−[In^−]) + ε_ln b[In^−]" where this reads "A = ε_HIn b(C−[In^−]) + ε_In b[In^−]". The subscripts are the species HIn and In^− (capital I), not "Hln" and "ln".]

which we simplify to

A = ε_HIn bC − ε_HIn b[In^−] + ε_In b[In^−]

[Note: corrected; the source prints "A = ε_Hln bC − ε_Hln b[In^−] + ε_ln b[In^−]" where this reads "A = ε_HIn bC − ε_HIn b[In^−] + ε_In b[In^−]". The subscripts are the species HIn and In^− (capital I), not "Hln" and "ln".]

A = A_HIn + b[In^−](ε_In − ε_HIn)

[Note: corrected; the source prints "(ε_ln − ε_HIn)" where this reads "(ε_In − ε_HIn)". The subscript is the species In^− (capital I), not "ln".]

where A_HIn, which is equal to ε_HIn bC, is the absorbance when the pH is acidic enough that essentially all the indicator is present as HIn. Solving Equation (10.7) for the concentration of In^– gives

[In^−] = (A − A_HIn)/(b(ε_In − ε_HIn))

[Note: corrected; the source prints "[In^−] = (A − A_Hln)/(b(ε_ln − ε_HIn))" where this reads "[In^−] = (A − A_HIn)/(b(ε_In − ε_HIn))". The subscripts are the species HIn and In^− (capital I), not "Hln" and "ln".]

Proceeding in the same fashion, we derive a similar equation for the concentration of HIn

[HIn] = (A_In − A)/(b(ε_In − ε_HIn))

[Note: corrected; the source prints "(b(ε_ln − ε_Hln))" where this reads "(b(ε_In − ε_HIn))". The subscripts are the species In^− and HIn (capital I), not "ln" and "Hln".]

where A_In, which is equal to ε_In bC, is the absorbance when the pH is basic enough that only In^– contributes to the absorbance. Substituting Equation (10.8) and Equation (10.9) into the equilibrium constant expression for HIn gives

Ka = ([H3O^+][In^−])/([HIn]) = [H3O^+] × (A − A_HIn)/(A_In − A)

We can use Equation (10.10) to determine K_a in one of two ways. The simplest approach is to prepare three solutions, each of which contains the same amount, C, of indicator. The pH of one solution is made sufficiently acidic such that [HIn] >> [In^–]. The absorbance of this solution gives A_HIn. The value of A_In is determined by adjusting the pH of the second solution such that [In^–] >> [HIn]. Finally, the pH of the third solution is adjusted to an intermediate value, and the pH and absorbance, A, recorded. The value of K_a is calculated using Equation (10.10).

### Example 14.3.2

The acidity constant for an acid–base indicator is determined by preparing three solutions, each of which has a total concentration of indicator equal to 5.00 × 10^−5 M. The first solution is made strongly acidic with HCl and has an absorbance of 0.250. The second solution is made strongly basic and has an absorbance of 1.40. The pH of the third solution is 2.91 and has an absorbance of 0.662. What is the value of K_a for the indicator?

**Solution**

The value of K_a is determined by making appropriate substitutions into Equation (10.10) where [H3O^+] is 1.23 × 10^−3; thus

[Note: corrected; the source prints "substitutions into 10.20 where" where this reads "substitutions into Equation (10.10) where". The equation for K_a in terms of absorbances is Equation (10.10); there is no 10.20 in this section.]

K_a = (1.23 × 10^−3) × (0.662 − 0.250)/(1.40 − 0.662) = 6.87 × 10^−4

### Exercise 14.3.2

To determine the K_a of a merocyanine dye, the absorbance of a solution of 3.5 × 10^−4 M dye was measured at a pH of 2.00, a pH of 6.00, and a pH of 12.00, yielding absorbances of 0.000, 0.225, and 0.680, respectively. What is the value of K_a for this dye? The data for this problem is adapted from Lu, H.; Rutan, S. C. Anal. Chem., 1996, 68, 1381–1386.

**Answer**

The value of K_a is

K_a = (1.00 × 10^−6) × (0.225 − 0.000)/(0.680 − 0.225) = 4.95 × 10^−7

A second approach for determining K_a is to prepare a series of solutions, each of which contains the same amount of indicator. Two solutions are used to determine values for A_HIn and A_In. Taking the log of both sides of Equation (10.10) and rearranging leave us with the following equation.

log((A − A_HIn)/(A_In − A)) = pH−pK_a

[Note: corrected; the source prints "log((A − A_Hin)/(A_(ln^−) − A))" where this reads "log((A − A_HIn)/(A_In − A))". The absorbances are A_HIn and A_In, as in Equation (10.10) and the sentence that follows, not "A_Hin" and "A_(ln^−)".]

A plot of log[(A – A_HIn)/(A_In – A)] versus pH is a straight-line with a slope of +1 and a y-intercept of –pK_a.

### Exercise 14.3.3

To determine the K_a for the indicator bromothymol blue, the absorbance of each of a series of solutions that contain the same concentration of bromothymol blue is measured at pH levels of 3.35, 3.65, 3.94, 4.30, and 4.64, yielding absorbance values of 0.170, 0.287, 0.411, 0.562, and 0.670, respectively. Acidifying the first solution to a pH of 2 changes its absorbance to 0.006, and adjusting the pH of the last solution to 12 changes its absorbance to 0.818. What is the value of K_a for bromothymol blue? The data for this problem is from Patterson, G. S. J. Chem. Educ., 1999, 76, 395–398.

[Note: corrected; the source prints "the absorbance of each a series" where this reads "the absorbance of each of a series". The source drops the word "of".]

**Answer**

To determine K_a we use Equation (10.11), plotting log[(A – A_HIn)/(A_In – A)] versus pH, as shown below.

[Image: Determination of Ka for Exercise 14.3.3.]

Fitting a straight-line to the data gives a regression model of

log((A − A_HIn)/(A_In − A)) = −3.80 + 0.962pH

[Note: corrected; the source prints "(A_ln − A)" where this reads "(A_In − A)". The absorbance is A_In (capital I), not "A_ln".]

The y-intercept is –pK_a; thus, the pK_a is 3.80 and the K_a is 1.58 × 10^−4.

In developing these approaches for determining K_a we considered a relatively simple system in which the absorbance of HIn and In^– are easy to measure and for which it is easy to determine the concentration of H3O^+. In addition to acid–base reactions, we can adapt these approaches to any reaction of the general form

X(aq) + Y(aq) ⇌ Z(aq)

including metal–ligand complexation reactions and redox reactions, provided we can determine spectrophotometrically the concentration of the product, Z, and one of the reactants, either X or Y, and that we can determine the concentration of the other reactant by some other method. With appropriate modifications, a more complicated system in which we cannot determine the concentration of one or more of the reactants or products also is possible [Ramette, R. W. Chemical Equilibrium and Analysis, Addison-Wesley: Reading, MA, 1981, Chapter 13].
