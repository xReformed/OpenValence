---
title: "7.3: Trial Functions Can Be Linear Combinations of Functions That Also Contain Variational Parameters"
book: "Physical Chemistry (LibreTexts)"
chapter: "7: Approximation Methods"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/07%3A_Approximation_Methods/7.03%3A_Trial_Functions_Can_Be_Linear_Combinations_of_Functions_That_Also_Contain_Variational_Parameters"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Demonstrate that variational problems can include changing parameters within the elements (normal variational method) and changing coefficients of a basis set (linear variational method)

An alternative approach to the general problem of introducing variational parameters into wavefunctions is the construction of a wavefunction as a linear combination of other functions each with one or multiple parameters that can be varied

For hydrogen, the radial function decays, or decreases in amplitude, exponentially as the distance from the nucleus increases. For helium and other multi-electron atoms, the radial dependence of the total probability density does not fall off as a simple exponential with increasing distance from the nucleus as it does for hydrogen. More complex single-electron functions therefore are needed in order to model the effects of electron-electron interactions on the total radial distribution function. One way to obtain more appropriate single-electron functions is to use a sum of exponential functions in place of the hydrogenic spin-orbitals.

An example of such a wavefunction created from a sum or linear combination of exponential functions is written as

φ_1s(r1) = Σj cj e^(−ζj r1/ao)

[Note: corrected; the source prints "e^(−ζj rj/ao)" where this reads "e^(−ζj r1/ao)". The variable is r1; j counts the terms of the sum.]

The linear combination permits weighing of the different exponentials through the adjustable coefficients (cj) for each term in the sum. Each exponential term has a different rate of decay through the zeta-parameter ζj. The exponential functions in Equation (9-37) are called basis functions. Basis functions are the functions used in linear combinations to produce the single-electron orbitals that in turn combine to create the product multi-electron wavefunctions. Originally the most popular basis functions used were the STO’s, but today STO’s are not used in most quantum chemistry calculations. However, they are often the functions to which more computationally efficient basis functions are fitted.

Physically, the ζj parameters account for the effective nuclear charge (often denoted with Z_eff). The use of several zeta values in the linear combination essentially allows the effective nuclear charge to vary with the distance of an electron from the nucleus. This variation makes sense physically. When an electron is close to the nucleus, the effective nuclear charge should be close to the actual nuclear charge. When the electron is far from the nucleus, the effective nuclear charge should be much smaller. See Slater's rules for a rule-of-thumb approach to evaluate Z_eff values.

A term in Equation (9-37) with a small ζ will decay slowly with distance from the nucleus. A term with a large ζ will decay rapidly with distance and not contribute at large distances. The need for such a linear combination of exponentials is a consequence of the electron-electron repulsion and its effect of screening the nucleus for each electron due to the presence of the other electrons.

### Exercise 7.3.1

Make plots of φ in Equation (9-37) using three equally weighted terms with ζ = 1.0, 2.0, and 5.0. Also plot each term separately.

Computational procedures in which an exponential parameter like ζ is varied are more precisely called the Nonlinear Variational Method because the variational parameter is part of the wavefunction and the change in the function and energy caused by a change in the parameter is not linear. The optimum values for the zeta parameters in any particular calculation are determined by doing a variational calculation for each orbital to minimize the ground-state energy. When this calculation involves a nonlinear variational calculation for the zetas, it requires a large amount of computer time. The use of the variational method to find values for the coefficients, {cj}, in the linear combination given by Equation (9-37) above is called the Linear Variational Method because the single-electron function whose energy is to be minimized (in this case φ_1s) depends linearly on the coefficients. Although the idea is the same, it usually is much easier to implement the linear variational method in practice.

Nonlinear variational calculations are extremely costly in terms of computer time because each time a zeta parameter is changed, all of the integrals need to be recalculated. In the linear variation, where only the coefficients in a linear combination are varied, the basis functions and the integrals do not change. Consequently, an optimum set of zeta parameters were chosen from variational calculations on many small multi-electron systems, and these values, which are given in Table 7.3.1 , generally can be used in the STOs for other and larger systems.

Table 7.3.1 : Orbital Exponents for Slater Orbitals

| Atom | ζ_1s | ζ_(2s, 2p) |
| --- | --- | --- |
| H | 1.24 | - |
| He | 1.69 | - |
| Li | 2.69 | 0.80 |
| Be | 3.68 | 1.15 |
| B | 4.68 | 1.50 |
| C | 5.67 | 1.72 |
| N | 6.67 | 1.95 |
| O | 7.66 | 2.25 |
| F | 8.65 | 2.55 |
| Ne | 9.64 | 2.88 |

[Note: corrected; the source prints "| F | 8.56 | 2.55 |" where this reads "| F | 8.65 | 2.55 |". The standard exponent for fluorine is 8.65, about one unit above oxygen's, as the next exercise says.]

### Exercise 7.3.2

Compare the value ζ_1s = 1.24 in Table 7.3.1 for hydrogen with the value you obtained in Exercise 7.3.1 . and comment on possible reasons for any difference. Why are the zeta values larger for 1s than for 2s and 2p orbitals? Why do the ζ_1s values increase by essentially one unit for each element from He to Ne while the increase for the ζ_(2s, 2p) values is much smaller?

**Answer**

ζ values represent the rate of decay in the radial function of an orbital. ζ values are larger for 1s than 2s and 2p orbitals because 1s orbitals have a smaller radial function. As a result, 1s orbitals decrease faster in radial function as you move further from the nucleus, and have a larger ζ value to represent this faster decay. The ζ values for 1s increase essentially by one unit for each element from He to Ne because the 1s orbital is closest to the nucleus, and experiences the greatest effects from change in electronegativity as nuclear density increases from He to Ne. This increase in electronegativity causes the radial function to decay more and more rapidly as atomic number/nucleus density increase. The 2s and 2p orbitals don't experience as great a change in radial function decay rate because they are shielded by the 1s orbital.

[Note: the reason is the nuclear charge, which rises by one from each element to the next while the 1s electrons are barely screened (ζ1s ≈ Z − 0.3); ζ2s,2p rises less because each added electron enters the n = 2 shell and partly screens the others. Electronegativity is not the cause. The text is left as printed.]

The discussion above gives us some new ideas about how to write flexible, useful single-electron wavefunctions that can be used to construct multi-electron wavefunctions for variational calculations. Single-electron functions built from the basis function approach are flexible because they have several adjustable parameters, and useful because the adjustable parameters still have clear physical interpretations. Such functions will be needed in the Hartree-Fock method discussed elsewhere.
