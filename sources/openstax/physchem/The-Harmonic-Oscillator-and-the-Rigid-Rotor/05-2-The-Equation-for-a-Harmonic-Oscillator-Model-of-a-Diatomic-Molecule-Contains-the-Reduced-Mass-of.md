---
title: "5.2: The Equation for a Harmonic-Oscillator Model of a Diatomic Molecule Contains the Reduced Mass of the Molecule"
book: "Physical Chemistry (LibreTexts)"
chapter: "5: The Harmonic Oscillator and the Rigid Rotor"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05%3A_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.02%3A_The_Equation_for_a_Harmonic-Oscillator_Model_of_a_Diatomic_Molecule_Contains_the_Reduced_Mass_of_the_Molecule"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

For studying the energetics of molecular vibration we take the simplest example, a diatomic heteronuclear molecule AB. Let the respective masses of atoms A and B be mA and mB. For diatomic molecules, we define the reduced mass μ_AB by:

μ_AB = (mA mB)/(mA + mB)

Reduced mass is the representation of a two-body system as a single-body one. When the motion (displacement, vibrational, rotational) of two bodies are only under mutual interactions, the inertial mass of the moving body with respect to the body at rest can be simplified to a reduced mass.

## Reduced Mass

Viewing the multi-body system as a single particle allows the separation of the motion: vibration and rotation, of the particle from the displacement of the center of mass. This approach greatly simplifies many calculations and problems.

Figure 5.2.1: a) the individual vectors to the particles m1 and m2 in the coordinate space and the resultant vector. b) center of mass. c) reduced mass. (CC BY-NC; Ümit Kaya via LibreTexts)
Diagram showing three axes with arrows indicating movement and interactions between colored spheres at the ends, illustrating a physical concept.

This concept is readily used in the general motion of diatomics, i.e. simple harmonic oscillator (vibrational displacement between two bodies, following Hooke's Law), the rigid rotor approximation (the moment of inertia about the center of mass of a two-body system), spectroscopy, and many other applications.

### Example 5.2.1 : Reduced Mass

Determine the reduced mass of the two body system of a proton and electron with m_proton = 1.6727 × 10^−27 kg and m_electron = 9.110 × 10^−31 kg).

**Answer**

μ_pe = ((1.6727 × 10^−27)(9.110 × 10^−31))/(1.6727 × 10^−27 + 9.110 × 10^−31)

= 9.105 × 10^−31 kg

## The Quantum Harmonic Oscillator

The classical Harmonic Oscillator approximation is a simple yet powerful representation of the energetics of an oscillating spring system. Central to this model is the formulation of the quadratic potential energy

V(x)≈(1/2)kx^2

One problem with this classical formulation is that it is not general. We cannot use it, for example, to describe vibrations of diatomic molecules, where quantum effects are important. This require the formulation for Schrödinger Equation using Equation (potential).

Ĥ|ψ⟩ = [(−ħ^2)/(2μ) · d^2/dx^2 + (1/2)kx^2]|ψ⟩ = E|ψ⟩

Solving this quantum harmonic oscillator is appreciably harder than solving the Schrödinger Equation for the simpler particle-in-the-box model and is outside the scope of this text. However, as with most quantum modules (and in contrast to the classical harmonic oscillator), the energies are quantized in terms of a quantum number (v in this case):

Ev = ħ(√(k/μ))(v + 1/2)

= hν(v + 1/2)

with the natural vibrational frequency of the system given as

ν = (1/(2π))√(k/μ)

and the mass, μ, is the reduced mass of the system (Equation (5.2.1)).

### Warning

Be careful to distinguish ν, the symbol for the natural frequency (as a Greek nu) from v the quantum harmonic oscillator quantum number (Latin v).

### Caution: Do Not Use Atomic Weights to Calculate Reduced Masses

The vibrational frequencies given by Equation (freq) depend on the force constants (k) and the atomic masses of the vibrating nuclei via the reduced mass (μ). It should be clear that the substitution of one isotope of an atom in a molecule for another isotope will affect the atomic masses and therefore the reduced mass (via Equation (5.2.1)) and therefore the vibrational frequencies (via Equation (freq)).

It is important to remember that the Periodic Table gives only atomic weights of elements, which are scaled averages of atoms normally encountered in the laboratory (Table 5.2.1). To properly discuss vibrational frequencies of molecules, we need to know (or denote) the specific isotopes in the molecule. Check Table A4 for that information.

Table 5.2.1: Atomic Mass and Isotope Composition. Consult Table A4 for more extensive table.

| isotope | atomic mass (in amu) | isotopic abundance (%) |
| --- | --- | --- |
| ^1H | 1.007825 | 99.985 |
| ^2H | 2.0140 | 0.015 |
| ^35Cl | 34.968852 | 75.77 |
| ^37Cl | 36.965903 | 24.23 |
| ^79Br | 78.918336 | 50.69 |
| ^81Br | 80.916289 | 49.31 |

[Note: corrected; the source prints "| ^35Cl | 35.968852 |" where this reads "| ^35Cl | 34.968852 |". The mass of chlorine-35 is 34.968852 u, the value the example below uses.]

### Example 5.2.2 : Isotope Effect

[Note: corrected; the source prints "### Example 5.2.1 : Isotope Effect" where this reads "### Example 5.2.2 : Isotope Effect". The second example of the section; the source numbers both 5.2.1.]

What are the reduced mass for ^1H^35Cl and ^1H^37Cl? If the spring constants for vibrations of both molecules are equal and estimated at 478 N/m, what are the natural vibrational frequencies of these two molecules?

**Solution**

The periodic table gives an atomic weight of 35.45 amu for chlorine, but remember this is the the average of the natural abundances of different chlorine isotopes which is dictated primary by two isotopes: ^35Cl and ^37Cl. For this problem, we need the exact mass of the ^1H, ^35Cl, and ^37Cl isotopes. Check Table A4 for that information.

For ^1H^35Cl:

Reduced mass = (m1 m2)/(m1 + m2)

= (mH m_(^35Cl))/(mH + m_(^35Cl))

= (((1.0078)(34.9688))/(1.0078 + 34.9688))) amu

= 0.9796 amu

or when converted into kg is 1.627 × 10^−27 kg.

[Note: corrected; the source prints "is 1.629 × 10^−27 kg." where this reads "is 1.627 × 10^−27 kg.". 0.9796 u × 1.66054 × 10^−27 kg/u = 1.627 × 10^−27 kg.]

For ^1H^37Cl:

Reduced mass = (m1 m2)/(m1 + m2)

= (mH m_(^37Cl))/(mH + m_(^37Cl))

= (((1.0078)(36.965))/(1.0078 + 36.965))) amu

= 0.9810 amu

or when converted into kg is 1.6291 × 10^−27 kg. This is only 0.15% bigger.

[Note: corrected; the source prints "This is only 0.29% bigger." where this reads "This is only 0.15% bigger.". 0.98105/0.97957 = 1.0015.]

Equation (freq) is used to predict the respective vibrational frequencies of these two molecules.

For ^1H^35Cl:

ν = (1/(2π))√(k/μ)

= (1/(2π))√((478 N/m)/(1.627 × 10^−27 kg))

[Note: corrected; the source prints "(1.629 × 10^−27 kg)" where this reads "(1.627 × 10^−27 kg)". The reduced mass of H35Cl, as above.]

= 8.628 × 10^13 s^−1

[Note: corrected; the source prints "= 8.6394 × 10^13 s^−1" where this reads "= 8.628 × 10^13 s^−1". (1/(2π))√(478/(1.627 × 10^−27)) = 8.628 × 10^13 s^−1.]

For ^1H^37Cl:

ν = (1/(2π))√(k/μ)

= (1/(2π))√((478 N/m)/(1.629 × 10^−27 kg))

= 8.621 × 10^13 s^−1

As with the differences in the reduced masses, the differences in the vibrational frequencies of these two molecules is quite small. However, high resolution IR spectroscopy can easily distinguish the vibrations between these two molecules. Exercise 5.2.1 will demonstrate that this "isotope effect" is not always a small effect.

### Exercise 5.2.1 : Hydrogen Chloride

The force constant is weakly sensitive to the specific isotopes in a molecule (and we typically assume it is isotope independent). If the k = 478 N/m for both H^35Cl and H^37Cl. What are the vibration frequencies in these two diatomic molecules.

**Answer**

H^35Cl: 2886 cm^-1

D^35Cl: 2081 cm^-1

[Note: with k = 478 N/m the wavenumbers come out 2878 cm^−1 for H35Cl and 2876 cm^−1 for H37Cl (and 2064 cm^−1 for D35Cl); 2886 cm^−1 is the observed H35Cl value, and the question asks about H37Cl, not D35Cl. The text is left as printed.]
