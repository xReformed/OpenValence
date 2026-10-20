---
title: "8.2: Perturbation Theory and the Variational Method for Helium"
book: "Physical Chemistry (LibreTexts)"
chapter: "8: Multielectron Atoms"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08%3A_Multielectron_Atoms/8.02%3A_Perturbation_Theory_and_the_Variational_Method_for_Helium"
author: "Frioux"
license: "CC BY 4.0"
---

### Learning Objectives

- Demonstrate that both perturbation theory and variational methods can be used to solve the electron structure of the helium atom.

Both perturbation theory and variation method (especially the linear variational method) provide good results in approximating the energy and wavefunctions of multi-electron atoms. Below we address both approximations with respect to the helium atom.

## Perturbation Theory of the Helium Atom

We use perturbation theory to approach the analytically unsolvable helium atom Schrödinger equation by focusing on the Coulomb repulsion term that makes it different from the simplified Schrödinger equation that we have just solved analytically. The electron-electron repulsion term is conceptualized as a correction, or perturbation, to the Hamiltonian that can be solved exactly, which is called a zero-order Hamiltonian. The perturbation term corrects the previous Hamiltonian to make it fit the new problem. In this way the Hamiltonian is built as a sum of terms, and each term is given a name. For example, we call the simplified or starting Hamiltonian, Ĥ^0, the zero order term, and the correction term Ĥ^1.

Ĥ = Ĥ^0 + Ĥ^1

The Hamilonian for the helium atom (in atomic units) is:

Ĥ^0 = (−(1/2)∇1^2 − 2/(r1)) (H atom Hamiltonian) − ((1/2)∇2^2 − 2/(r2)) (H atom Hamiltonian)

Ĥ^1 = 1/(r12) = 1/(|r1 − r2|)

The expression for the first-order correction to the energy is

E^1 = ⟨ψ^0|Ĥ^1|ψ^0⟩

= ∫ψ^0*Ĥ^1ψ^0 dτ

Equation (9-28) is a general expression for the first-order perturbation energy, which provides an improvement or correction to the zero-order energy we already obtained. Hence, E^1 is the average interaction energy of the two electrons calculated using wavefunctions that assume there is no interaction.

The solution to Ĥ^0 (Equation (9-18)) is the product of two single-electron hydrogen wavefunctions (scaled by the increased nuclear charge) since Ĥ^0 can be separated into independent functions of each electron (i.e., Separation of Variables).

|ψ^0⟩ = |φ_1s(r1)φ_1s(r2)⟩

So the integral in Equation (9-28) is

E^1 = ∬φ_1s(r1)φ_1s(r2)(1/(r12))φ_1s(r1)φ_1s(r2) dτ1 dτ2

where the double integration symbol represents integration over all the spherical polar coordinates of both electrons r1, θ1, φ1, r2, θ2, φ2. The evaluation of these six integrals is lengthy. When the integrals are done, the result is E^1 = +34.0 eV so that the total energy calculated using our second approximation method, first-order perturbation theory, is

E_approx2 = E^0 + E^1 = −74.8 eV

The new approximate value for the binding energy represents a substantial (~30%) improvement over the zero-order energy:

E^0 = −2/n^2 − 2/n^2 = −4 Eh (hartrees) = −108.8 eV

[Note: corrected; the source prints "E^0 = 2/n^2 + 2/n^2 = 4 Eh (hartrees) = 108.8 eV" where this reads "E^0 = −2/n^2 − 2/n^2 = −4 Eh (hartrees) = −108.8 eV". Each electron's energy is −Z^2/(2n^2) = −2 hartrees; E^0 + E^1 = −108.8 + 34.0 = −74.8 eV, as above.]

so the interaction of the two electrons is an important part of the total energy of the helium atom. We can continue with perturbation theory and find the additional corrections, E^2, E^3, etc. For example,

E^0 + E^1 + E^2 = −79.1 eV.

[Note: corrected; the source prints "= −79.2 eV." where this reads "= −79.1 eV.". −4 + 1.25 − 0.15767 = −2.90767 Eh = −79.1 eV, within 0.3% of the experimental −79.0 eV.]

So with two corrections to the energy, the calculated result is within 0.3% of the experimental value of -79.01 eV. It takes thirteenth-order perturbation theory (adding E^1 through E^13 to E^0) to compute an energy for helium that agrees with experiment to within the experimental uncertainty. Interestingly, while we have improved the calculated energy so that it is much closer to the experimental value, we learn nothing new about the helium atom wavefunction by applying the first-order perturbation theory to the energy above. He need to expand the wavefunctions to first order perturbation theory, which requires more effort. Below, we will employ the variational method approximation to modify zero-order wavefunctions to address one of the ways that electrons are expected to interact with each other.

### The Hartree Unit of Energy

The hartree is the atomic unit of energy (named after the British physicist Douglas Hartree) and is defined as

Eh = 2RH hc

where RH is the Rydberg constant, h is the Planck constant and c is the speed of light.

Eh = 4.359 × 10^−18 J

= 27.21 eV.

The hartree is usually used as a unit of energy in atomic physics and computational chemistry. As discussed before for hydrogen emission, IR, and microwave spectroscopies, experimental measurements prefer the electronvolt (eV) or the wavenumber (cm^−1).

## Variational Method Applied to the Helium Method

As discussed in Section 6.7, because of the electron-electron interactions, the Schrödinger's Equation cannot be solved exactly for the helium atom or more complicated atomic or ionic species. However, the ground-state energy of the helium atom can be estimated using approximate methods. One of these is the variational method which requires the minimizing of the following variational integral.

E_trial = (⟨ψ_trial|Ĥ|ψ_trial⟩)/(⟨ψ_trial|ψ_trial⟩)

= (∫0^∞ ψ_trial^*Ĥψ_trial dτ)/(∫0^∞ ψ_trial^2 dτ)

The five trial wavefunctions discussions below are equally "valid" trial wavefunctions that describe the probability of finding each electron (technically the wavefunction squared). What separates the "poor" approximations from the "good" approximation is whether the trial wavefunction predicts experimental results. Consequently, for all the approximations used for the rest of this TextMap, it is important to compare the theoretical results to the "true" (i.e., experimental) results. No matter how complicated an approximation is, it is only as good as the accuracy of its predicted values to experimental values.

### Trial Wavefunction #1: Simple Orbital Approximation with One Parameter

As is clear from Equation (7.3.1b), the variational method approximation requires that a trial wavefunction with one or more adjustable parameters be chosen. A logical first choice for such a multi-electron wavefunction would be to assume that the electrons in the helium atom occupy two identical, but scaled, hydrogen 1s orbitals.

|ψ(1,2)⟩_trial = φ(1)φ(2)

= exp[−α(r1 + r2)]

The variational energy obtained after minimizing Equation (7.3.1a) after substituting the trial wavefunction (Equation (7.3.2)) by varying α is

E_trial = −2.84766 Eh

and the experimentally determined ground-state energy for the helium atom is the sum of first and second ionization energies

E_exp = −(I1 + I2) = −2.90372 Eh

[Note: corrected; the source prints "E_exp = I1 + I2" where this reads "E_exp = −(I1 + I2)". The ionization energies are positive; the ground-state energy is minus their sum.]

The deviation of energy for the optimized trial wavefunction from the experimental value is

|(E_trial(α) − E_exp)/(E_exp)| = |(−2.84766 Eh + 2.90372 Eh)/(−2.90372 Eh)|

= 1.93%

The value of -2.8477 hartrees is within 2% of the known ground-state energy of the helium atom. The error in the calculation is attributed to the fact that the wavefunction is based on the orbital approximation and, therefore, does not adequately take electron-electron interactions into account. In other words, this wavefunction gives the electrons too much independence, given that they have like charges and tend to avoid one another.

### Trial Wavefunction #2: Orbital Approximation with Two Parameters

Some electron-electron interactions can be built into the multi-electron wavefunction by assuming that each electron is in an orbital which is a linear combination of two different and scaled hydrogen 1s orbitals.

φ(r1) = exp(−αr1) + exp(−βr1)

[Note: the energy given below, −2.86035 Eh, comes from a sum of normalized 1s orbitals, α^(3/2)exp(−αr1) + β^(3/2)exp(−βr1); the function as written here gives at best −2.8614 Eh. The text is left as printed.]

Under the orbital approximation this assumption gives a trial wavefunction of the form

|ψ(1,2)⟩_trial = φ(1)φ(2)

= exp(−αr1)exp(−αr2) + exp(−αr1)exp(−βr2) + exp(−βr1)exp(−αr2) + exp(−βr1)exp(−βr2)

Inspection of this trial wavefunction indicates that 50% of the time the electrons are in different orbitals, while for the first trial wavefunction the electrons were in the same orbital 100% of the time. Notice the enormous increase in the complexity of the variational expression for the energy for this trial wavefunction (Equation (7.3.1a)). However, the calculation is very similar to that using the previous trial wavefunction. The differences are that in this case the expression for the energy is more complex and that it is being minimized simultaneously with respect to two parameters (α and β) rather than just one (α).

The variational energy obtained after minimizing Equation (7.3.1a) after substituting the trial wavefunction (Equation (7.3.4b)) by varying α and β is

E_trial = −2.86035 Eh

The deviation of energy for the optimized trial wavefunction from the experimental value (Equation (exp)) is

|(E_trial(α, β) − E_exp)/(E_exp)| = |(−2.86035 Eh + 2.90372 Eh)/(−2.90372 Eh)|

= 1.49%

Clearly introducing some electron-electron interactions into the trial wavefunction has improved the agreement between theory and experiment (Equation (trial1) vs. (trial2)).

### Trial Wavefunction #3: Orbital Approximation with Two Parameters

The extent of electron-electron interactions can be increased further by eliminating the first and last term in the second trial wavefunction (Equation (7.3.4b)). This yields a multi-electron wavefunction of the form,

|ψ(1,2)⟩_trial = exp(−αr1)exp(−βr2) + exp(−βr1)exp(−αr2)

This trial wavefunction places the electrons in different scaled hydrogen 1s orbitals 100% of the time this adds further improvement in the agreement with the literature value of the ground-state energy is obtained. The variational energy obtained after minimizing Equation (7.3.1a) after substituting the trial wavefunction (Equation (7.3.5)) by varying α and β is

E_trial = −2.87566 Eh

The deviation of energy for the optimized trial wavefunction from the experimental value (Equation (exp)) is

|(E_trial(α, β) − E_exp)/(E_exp)| = |(−2.87566 Eh + 2.90372 Eh)/(−2.90372 Eh)|

= 0.97%

This result is within 1% of the actual ground-state energy of the helium atom.

### Trial Wavefunction #4: Approximation with Two Parameters

The third trial wavefunction, however, still rests on the orbital approximation and, therefore, does not treat electron-electron interactions adequately. Hylleraas took the calculation a step further by introducing electron-electron interactions directly into the first trial wavefunction by adding a term, r12, involving the inter-electron separation.

|ψ_trial(1,2)⟩ = (exp[−α(r1 + r2)])(1 + βr12)

In the trial multi-electron wavefunction of Equation (7.3.6), if the electrons are far apart, then r12 is large and the magnitude of the wavefunction increases to favor that configuration. The variational energy obtained after minimizing Equation (7.3.1a) after substituting the trial wavefunction (Equation (7.3.6)) by varying α and β is

E_trial = −2.89112 Eh

The deviation of energy for the optimized trial wavefunction from the experimental value (Equation (exp)) is

|(E_trial(α, β) − E_exp)/(E_exp)| = |(−2.89112 Eh + 2.90372 Eh)/(−2.90372 Eh)|

= 0.43%

This modification of the trial wavefunction has further improved the agreement between theory and experiment to within 0.5%.

### Fifth Trial Wavefunction #5: Approximation with Three Parameters

Chandrasakar brought about further improvement by adding Hylleraas's r12 term to the third trial wavefunction (Equation (7.3.5)) as shown here.

|ψ(1,2)⟩_trial = [exp(−αr1)exp(−βr2) + exp(−βr1)exp(−αr2)][1 + γr12]

Chandrasakar's three parameter wavefunction gives rise to a fairly complicated variational expression for ground-state energy. The variational energy obtained after minimizing Equation (7.3.1a) after substituting the trial wavefunction (Equation (7.3.7)) by varying α, β and γ is

E_trial = −2.90143 Eh

The deviation of energy for the optimized trial wavefunction from the experimental value (Equation (exp)) is

|(E_trial(α, β, γ) − E_exp)/(E_exp)| = |(−2.90143 + 2.90372 Eh)/(−2.90372 Eh)|

= 0.0789%

Chandrasakar's wavefunction gives a result for helium that is within 0.08% of the experimental value for the ground-state energy.

[Note: corrected; the source prints "within 0.07%" where this reads "within 0.08%". The deviation calculated above is 0.0789%.]

## Summary

The purpose of this section is to examine five trial wavefunctions for the helium atom used within the Perturbation Theory and Variational method approximation. For the Variational method approximation, the calculations begin with an uncorrelated wavefunction in which both electrons are placed in a hydrogenic orbital with scale factor α. The next four trial functions use several methods to increase the amount of electron-electron interactions in the wavefunction. As the summary of results that is appended shows this gives increasingly more favorable agreement with the experimentally determined value for the ground-state energy of the species under study. The detailed calculations show that the reason for this improved agreement with experiment is due to a reduction in electron-electron repulsion.

Five variational method calculations that have been outlined above for the helium atom (Z = 2) can be repeated for two-electron atoms (e.g., H^-, Li^+, Be^2+, etc). The hydride anion is a particularly interesting case because the first two trial wavefunctions do not predict a stable ion (i.e., they are poor approximations). This indicates that electron-electron interactions is an especially important issue for atoms and ions with small nuclear charge.
