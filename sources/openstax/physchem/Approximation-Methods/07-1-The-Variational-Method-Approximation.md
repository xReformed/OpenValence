---
title: "7.1: The Variational Method Approximation"
book: "Physical Chemistry (LibreTexts)"
chapter: "7: Approximation Methods"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/07%3A_Approximation_Methods/7.01%3A_The_Variational_Method_Approximation"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Appreciate the complexity of solving muliti-electron atoms
- Characterize multi-electron interactions within shielding and penetration concepts
- Use the variational method as an approximation to study insolvable problems
- User variational method to evaluate the effective nuclear charge for a specific atom

In this section we introduce the powerful and versatile variational method and use it to improve the approximate solutions we found for the helium atom using the independent electron approximation.

## The True (Experimentally Determined) Energy of the Helium Atom

The helium atom has two electrons bound to a nucleus with charge Z = 2. The successive removal of the two electrons can be considered stepwise:

He → (I1) He^+ + e^− → (I2) He^++ + 2e^−

The first ionization energy I1 is the minimum energy required to remove the first electron from helium gas and is experimentally determined:

I1 = −E_1s(He) = 24.59 eV

While the second ionization energy, I2 can be experimentally determined, it can also be calculated exactly from the hydrogen atom solutions since He^+ is a hydrogen-like ion with Z = 2. Hence, we have

I2 = −E_1s(He^+)

= Z^2/(2 n^2)

= 54.42 eV

The energy of the three separated particles on the right side of Equation (7.1.1) is zero (by definition). Therefore the ground-state energy of helium atom is given by

E_true = −(I1 + I2)

= −79.01 eV.

[Note: corrected; the source prints "= −79.02 eV." where this reads "= −79.01 eV.". −(24.59 + 54.42) eV = −79.01 eV.]

which can be expressed in terms of the Rydberg constant (RH = 13.6 eV) that also describes the lowest energy of the hydrogen atom

E_true = −5.8066 RH

We will attempt to reproduce this true value, as close as possible, by different theoretical approaches (all approximations).

## The "Ignorance is Bliss" Approximation

The Hamiltonian for the Helium atom is:

Ĥ = −(ħ^2/(2 me))∇_el1^2 − (ħ^2/(2 me))∇_el2^2 − Ze^2/(4πε0 r1) − Ze^2/(4πε0 r2) + ~~e^2/(4πε0 r12)~~

If we simply ignore the electron-electron repulsion term, then Equation (7.1.3) can be simplified to

Ĥ≈−(ħ^2/(2 me))∇_el1^2 − Ze^2/(4πε0 r1) − (ħ^2/(2 me))∇_el2^2 − Ze^2/(4πε0 r2)

≈h1(r1) + h2(r2)

where h1 and h2 are one electron Hamiltonians for electron 1 and 2, respectively, and are just the hydrogen-like Hamiltonians. The approximation in Equation (7.1.3C) is convenient since electron 1 is separable from electron 2, so that the two-electron wavefunction is approximated as a product to two one-electron wavefunctions:

Ψ_total = ψ_el1 ψ_el2

or in braket notation

|Ψ_total⟩ = |ψ_el1 ψ_el2⟩

[Note: corrected; the source prints "|Ψ_total⟩ = Ĥ|ψ_el1 ψ_el2⟩" where this reads "|Ψ_total⟩ = |ψ_el1 ψ_el2⟩". The product state itself has no Ĥ in it; Ĥ acts on it in the next equation.]

With some operator algebra, something important arises - the one electron energies are additive:

ĤΨ_total = (Ĥ_el1 + Ĥ_el2)ψ_(n el1) ψ_(n el2) = (E_n1 + E_n2)ψ_(n el1) ψ_(n el2)

or in bra-ket notation

Ĥ|Ψ_total⟩ = Ĥ|ψ_el1 ψ_el2⟩

= (E_n1 + E_n2)|ψ1 ψ2⟩

The energy for a ground state Helium atom (both electrons in lowest state) is then

E_He_1s = E_n1 (energy of single electron in helium) + E_n2 (energy of single electron in helium)

= −RH(Z^2/1) − RH(Z^2/1)

= −8RH

This approximation significantly overestimates the true energy of the helium atom E_He_1s = −5.8066 R. This is a poor approximation and we need to address electron-electron repulsion properly (or better at least).

## Shielding and Penetration

One way to take electron-electron repulsion into account is to modify the form of the wavefunction. A logical modification is to change the nuclear charge, Z, in the wavefunctions to an effective nuclear charge (Z_eff), from +2 to a smaller value. The rationale for making this modification is that one electron partially shields the nuclear charge from the other electron, as shown in Figure 7.1.1 .

Figure 7.1.1: Electron-electron shielding leading to a reduced effective nuclear charge. The attractive force of the nucleus on the outer electron is partially countered by the repulsive force between inner electrons and the outer electron. (CC BY-SA; Ümit Kaya via LibreTexts)
Diagram illustrating light interaction with a central sphere, showing arrows indicating light pathways and reflections.

[Note: the line above is the image's alt text, which reads as machine-written and does not describe the image, which is a diagram of electron shielding (nucleus, inner and outer electrons, with attraction and repulsion arrows); the caption above describes it.]

A region of negative charge density between one of the electrons and the +2 nucleus makes the potential energy between them more positive (decreases the attraction between them). We can effect this change mathematically by using ζ < 2 in the wavefunction expression. If the shielding were complete, then Z_eff would equal 1. If there is no shielding, then Z_eff = 2. So a way to take into account the electron-electron interaction is by saying it produces a shielding effect. The shielding is not zero, and it is not complete, so the effective nuclear charge varies between one and two.

In general, a theory should be able to make predictions in advance of knowledge of the experimental result. Consequently, a principle and method for choosing the best value for Z_eff or any other adjustable parameter that is to be optimized in a calculation is needed. The Variational Principle provides the required criterion and method and says that the best value for any variable parameter in an approximate wavefunction is the value that gives the lowest energy for the ground state; i.e., the value that minimizes the energy. The variational method is the procedure that is used to find the lowest energy and the best values for the variable parameters.

## A Better Approximation: The Variational Method

The variational method is one way of finding approximations to the lowest energy eigenstate or ground state, and some excited states. This allows calculating approximate wavefunctions and is the variational principle. The method consists in choosing a "trial wavefunction" depending on one or more parameters, and finding the values of these parameters for which the expectation value of the energy is the lowest possible. The wavefunction obtained by fixing the parameters to such values is then an approximation to the ground state wavefunction, and the expectation value of the energy in that state is an upper bound to the ground state energy.

The variational principle means that the expectation value for the binding energy obtained using an approximate wavefunction and the exact Hamiltonian operator will be higher than or equal to the true energy for the system. This idea is really powerful. When implemented, it permits us to find the best approximate wavefunction from a given wavefunction that contains one or more adjustable parameters, called a trial wavefunction. A mathematical statement of the variational principle is

E_trial ≥ E_true

where

E_trial = (⟨ψ_trial|Ĥ|ψ_trial⟩)/(⟨ψ_trial|ψ_trial⟩)

= (∫ψ_trial^*Ĥψ_trial dτ)/(∫ψ_trial^*ψ_trial dτ)

Equation (7.1.7) is called the variational theorem and states that for a time-independent Hamiltonian operator, any trial wavefunction will have an variational energy (i.e., expectation value) that is greater than or equal to the true ground state wavefunction corresponding to the given Hamiltonian (Equation (7.1.7)). Because of this, the variational energy is an upper bound to the true ground state energy of a given molecule. The general approach of this method consists in choosing a "trial wavefunction" depending on one or more parameters, and finding the values of these parameters for which the expectation value of the energy is the lowest possible (Figure 7.1.2 ).

Figure 7.1.2: Simplified algorithmic flowchart of the Variational Method approximation
Flowchart illustrating a process with boxes labeled "Define Your Mission," "Evaluate Alternatives," "Develop Measurements," and more, concluding with assessments labeled "Good" and "Not Good."

[Note: the line above is the image's alt text, which reads as machine-written and misreads the image: its boxes read Define Hamiltonian, Define Trial Function, Evaluate the Variational Energy, Find its Minimum, Construct the Trial Wavefunction, and Compare with known data.]

The variational energy E_trial is only equal to the true energy E_true when the the corresponding trial wavefunction ψ_trial is equal to the true wavefunction ψ_true.

## Application to the Helium atom Ground State

Often the expectation values (numerator) and normalization integrals (denominator) in Equation (7.1.8) can be evaluated analytically. For the case of the He atom, let's consider the trial wavefunction as the product wavefunction given by Equation (7-13) (this is called the orbital approximation),

ψ(r1, r2)≈φ(r1)φ(r2)

The adjustable or variable parameter in the trial wavefunction is the effective nuclear charge ζ, and the Hamiltonian is the complete form given below (Note: quantum calculations typically refer to effective nuclear charge as ζ rather than Z_eff as we used previously).

Ĥ = −(ħ^2/(2 m))∇1^2 − (ζe^2)/(4πε0 r1) − (ħ^2/(2 m))∇2^2 − (ζe^2)/(4πε0 r2) + e^2/(4πε0 r12)

the adjustable or variable parameter in the trial wavefunction is the effective nuclear charge ζ (would be equal to ζ = 2 if fully unshielded), and the Hamiltonian is the complete form. When the expectation value for the trial energy (Equation (7.1.8)) is evaluated for helium, the result is a variational energy that depends on the adjustable parameter, ζ.

E_trial(ζ) = ((μe^4)/(4ε0^2 h^2))(ζ^2 − (27/8)ζ)

[Note: corrected; the source prints "((μe^4)/(4ε0^2 h))" where this reads "((μe^4)/(4ε0^2 h^2))". The prefactor is the hartree, μe^4/(4ε0^2h^2) = 27.21 eV.]

[Note: the complete Hamiltonian written above should have the true nuclear charge, Z = 2, in its electron-nucleus terms; ζ belongs only in the trial wavefunction. With Z in Ĥ the expectation value is the one given here, Eh(ζ^2 − 27ζ/8). The text is left as printed.]

This function is plotted in Figure 7.1.3 as a function of ζ. According to the variational principle (Equation (7.1.7)), the minimum value of the energy on this graph is the best approximation of the true energy of the system, and the associated value of ζ is the best value for the adjustable parameter.

Figure 7.1.3: Graph of trial energies for helium atom as a function of the adjustable parameter ζ in Equation (7.1.9) that represents the effective nuclear charge felt by the electrons.
Graph of a quadratic function, showing a downward curve in red with axes labeled for x and y values.

Using the mathematical function for the energy of a system, the minimum energy with respect to the adjustable parameter can be found by taking the derivative of the energy with respect to that parameter, setting the resulting expression equal to zero, and solving for the parameter, in this case ζ. This is a standard method in calculus for finding maxima and minima.

### Exercise 7.1.1

Find the value for ζ that minimizes the helium binding energy for the product trial wavefunction in Equation (7-13) with the Hamiltonian in Equation (9-9). and compare the binding energy to the experimental value. What is the percent error in the calculated value?

**Solution**

The variational method requires following the workflow in Figure 7.1.2 .

- Step 1: Define the Hamiltonian - This is given by Equation (9-9).
- Step 2: Define the trial wavefunction as a function of at least one parameter - This is given by Equation (7-13).
- Step 3: Evaluate variational energy (E_trial integral (Equation (7.1.8)) - This procedure was already above in Equation (7.1.9).
- Step 4: Minimize the variational energy as a function of the parameter(s) - Following the standard approach to find extrema in calculus, evaluate the derivative of E_trial with respect to ζ and set to zero: (dE_trial)/(dζ) = ((μe^4)/(4ε0^2 h))(2ζ − 27/8) = 0 then find solve for the roots of this polynomial 2ζ − 27/8 = 0 or ζ = 27/16≈1.6875
- Step 5-6: The question does not ask for the optimized wavefunction (Step 5) or to compare the result with the true value to evaluate the quality of the approximation (Step 6). We can skip these steps.

From Exercise 7.1.1 , the ζ = 1.6875 and the approximate energy we calculate using this approximation method, E_approx = -77.483 eV. Table 7.1.1 show that a substantial improvement in the accuracy of the computed binding energy is obtained by using shielding to account for the electron-electron interaction. Including the effect of electron shielding in the wavefunction reduces the error in the binding energy to about 2%. This idea is very simple, elegant, and significant.

Table 7.1.1 : Comparison of the results of three approximation methods to experiment.

| Method | He binding energy (eV) |
| --- | --- |
| "Ignorance is Bliss" Approximation (neglect repulsion between electrons) | -108.8 |
| Variational method with variable effective charge | -77.483 |
| Experimental | -79.0 |

The improvement we have seen in the total energy calculations using a variable parameter ζ indicates that an important contribution of electron-electron interaction or repulsion to the total binding energy arises from the fact that each electron shields the nuclear charge from the other electron. It is reasonable to assume the electrons are independent; i.e., that they move independently, but the shielding must be taken into account in order to fine-tune the wavefunctions. The inclusion of optimizable parameters in the wavefunction allows us to develop a clear physical image of the consequences of our variation calculation. Calculating energies correctly is important, and it is also important to be able to visualize electron densities for multi-electron systems. In the next two sections, we take a temporary break from our consideration of approximation methods in order to examine multi-electron wavefunctions more closely.
