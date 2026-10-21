---
title: "5.9: The Rigid Rotator is a Model for a Rotating Diatomic Molecule"
book: "Physical Chemistry (LibreTexts)"
chapter: "5: The Harmonic Oscillator and the Rigid Rotor"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05%3A_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.09%3A_The_Rigid_Rotator_is_a_Model_for_a_Rotating_Diatomic_Molecule"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Demonstrate how to use the 3D regid rotor to describe a rotating diatomic molecules
- Demonstate how microwave spectroscopy can get used to characterize rotating diatomic molecules
- Interprete a simple microwave spectrum for a diatomic molecule

To develop a description of the rotational states, we will consider the molecule to be a rigid object, i.e. the bond lengths are fixed and the molecule cannot vibrate. This model for rotation is called the rigid-rotor model. It is a good approximation (even though a molecule vibrates as it rotates, and the bonds are elastic rather than rigid) because the amplitude of the vibration is small compared to the bond length.

The rotation of a rigid object in space is very simple to visualize. Pick up any object and rotate it. There are orthogonal rotations about each of the three Cartesian coordinate axes just as there are orthogonal translations in each of the directions in three-dimensional space (Figures 5.9.1 and 5.9.2 ). These rotations are said to be orthogonal because one can not describe a rotation about one axis in terms of rotations about the other axes just as one can not describe a translation along the x-axis in terms of translations along the y- and z-axes. For a linear molecule, the motion around the interatomic axis (x-axis) is not considered a rotation.

Figure 5.9.1: Cartesian rotations of a chair. Rotations about the (a) x axis, (b) y axis, and (c) z axis.
Diagrams showing a chair from different angles, illustrating rotational movement around its axes.

In this section we examine the rotational states for a diatomic molecule by comparing the classical interpretation of the angular momentum vector with the probabilistic interpretation of the angular momentum wavefunctions. We want to answer the following types of questions. How do we describe the orientation of a rotating diatomic molecule in space? Is the molecule actually rotating? What properties of the molecule can be physically observed? In what ways does the quantum mechanical description of a rotating molecule differ from the classical image of a rotating molecule?

Figure 5.9.2: Rotation of a diatomic molecule about the x axis.
A sequence of three purple lines connecting two points each, with red dots at the endpoints.

## Introduction to Microwave Spectroscopy

The permanent electric dipole moments of polar molecules can couple to the electric field of electromagnetic radiation. This coupling induces transitions between the rotational states of the molecules. The energies that are associated with these transitions are detected in the far infrared and microwave regions of the spectrum. For example, the microwave spectrum for carbon monoxide spans a frequency range of 100 to 1200 GHz, which corresponds to 3 - 40 cm^−1.

The selection rules for the rotational transitions are derived from the transition moment integral by using the spherical harmonic functions and the appropriate dipole moment operator, μ̂.

μT = ∫Y_Jf^(mf*)μ̂Y_Ji^(mi) sin θ dθ dφ

or in braket notation

μT = ⟨Y_Jf^(mf)|μ̂|Y_Ji^(mi)⟩

Evaluating the transition moment integral involves a bit of mathematical effort. This evaluation reveals that the transition moment depends on the square of the dipole moment of the molecule, μ^2 and the rotational quantum number, J, of the initial state in the transition,

[Note: it is the square of the transition moment that has this form: |μT|^2 = μ^2(J + 1)/(2J + 1). The text is left as printed.]

μT = μ^2 (J + 1)/(2J + 1)

and that the selection rules for rotational transitions are

ΔJ = ±1

and

ΔmJ = 0, ±1

A photon is absorbed for ΔJ = +1 and emitted for ΔJ = −1.

### Exercise 5.9.1

Explain why your microwave oven heats water, but not air. Hint: draw and compare Lewis structures for components of air and for water.

The energies of the J^th rotational levels are given by

EJ = J(J + 1)ħ^2/(2I)

with each J^th energy level having a degeneracy of 2J + 1 due to the different possible mJ values.

## Microwave Transition Energies

The transition energies for absorption of radiation are given by

E_photon = ΔE

= Ef − Ei

= hν

= hcν̄

Substituting the relationship for energy (Equation (energy)) into Equation (5.9.5A) results in

E_photon = Ef − Ei

= Jf(Jf + 1)ħ^2/(2I) − Ji(Ji + 1)ħ^2/(2I)

with Ji and Jf representing the rotational quantum numbers of the initial (lower) and final (upper) levels involved in the absorption transition.

Since microwave spectroscopists use frequency units and infrared spectroscopists use wavenumber units when describing rotational spectra and energy levels, both ν and ν̄ are important to calculate. When we add in the constraints imposed by the selection rules to identify possible transitions, Jf in Equation (5.9.6) can be replaced by Ji + 1, since the selection rule requires Jf − Ji = 1 for the absorption of a photon (Equation (5.9.3)). The equation for absorption transitions (Equation (5.9.6)) then can be written in terms of the only the quantum number Ji of the initial state.

E_photon = hν

= hcν̄

= 2(Ji + 1)ħ^2/(2I)

Equation (5.9.7) can be rewritten as

E_photon = 2B(Ji + 1)

where B is the rotational constant for the molecule and is defined in terms of the energy of the absorbed photon

B = ħ^2/(2I)

Often spectroscopists want to express the rotational constant in terms of frequency of the absorbed photon and do so by dividing Equation (5.9.9) by h

B(in freq) = B/h

= h/(8π^2μr0^2)

More often, spectroscopists want to express the rotational constant in terms of wavenumbers (ν̄) of the absorbed photon by dividing Equation (5.9.9) by hc,

B̃ = B/hc = h/(8π^2 cμr0^2)

The rotational constant depends on the distance (R) and the masses of the atoms (via the reduced mass) of the nuclei in the diatomic molecule.

### Exercise 5.9.2

Construct a rotational energy level diagram for J = 0, 1, and 2 and add arrows to show all the allowed transitions between states that cause electromagnetic radiation to be absorbed or emitted.

### Exercise 5.9.3

Complete the steps going from Equation (5.9.6) to Equation (5.9.9) and identify the units of B at the end.

**Answer**

ΔE_photon = Ef − Ei

E_r.rotor = J(J + 1)ħ^2/(2I)

E_photon = hν = hcν̃ = Jf(Jf + 1)ħ^2/(2I) − Ji(Ji + 1)ħ^2/(2I)

Jf − Ji = 1

Jf = 1 + Ji

E_photon = hν = hcν̃ = (1 + Ji)(2 + Ji)ħ^2/(2I) − Ji(Ji + 1)ħ^2/(2I)

= (ħ^2/(2I))[2 + 3Ji + Ji^2 − Ji^2 − Ji]

= (ħ^2/(2I))2(Ji + 1)

= 2B(Ji + 1)

Now we do a standard dimensional analysis

B = ħ^2/(2I) ≡ [kgm^2/s^2] = [J]

B/h = B(infreq.) = h/(8π^2μro^2) ≡ [1/s]

B/hc = B̃ = h/(8π^2μcro^2) ≡ [1/m]

[Note: corrected; the source prints "≡ [s/m]" where this reads "≡ [1/m]". J s/(kg (m/s) m^2) = m^−1, a wavenumber (in practice cm^−1).]

### Exercise 5.9.4

Infrared spectroscopists use units of wavenumbers. Rewrite the steps going from Equation (5.9.6) to Equation (5.9.9) to obtain expressions for hν and B in units of wavenumbers. Note that to convert B in Hz to B in cm^−1, you simply divide the former by c.

Figure 5.9.3: The rotation spectrum of ^12C^16O at 40 K. The peaks are tabulated in Table 5.9.1.
Simple line drawing of a mountain range with a wavy base line.

Figure 5.9.3 shows the rotational spectrum as a series of nearly equally spaced lines. The line positions νJ, line spacings, and the maximum absorption coefficients ( γ_max, the absorption coefficients associated with the specified line position) for each line in this spectrum are given here in Table 5.9.1.

Table 5.9.1 : Rotational Transitions in ^12 C^16 O at 40 K

| J | νJ (MHz) | Spacing from previous line (MHz) | γ_max |
| --- | --- | --- | --- |
| 0 → 1 | 115,271.21 | 0 | 0.0082 |
| 1 → 2 | 230,538.01 | 115,266.80 | 0.0533 |
| 2 → 3 | 345,795.99 | 115,257.99 | 0.1278 |
| 3 → 4 | 461,040.76 | 115,244.77 | 0.1878 |
| 4 → 5 | 576,267.91 | 115,227.15 | 0.1983 |
| 5 → 6 | 691,473.03 | 115,205.12 | 0.1618 |
| 6 → 7 | 806,651.78 | 115,178.68 | 0.1064 |
| 7 → 8 | 921,799.55 | 115,147.84 | 0.0576 |
| 8 → 9 | 1,036,912.14 | 115,112.59 | 0.0262 |
| 9 → 10 | 1,151,985.08 | 115,072.94 | 0.0103 |

[Note: corrected; the source prints "| 6 → 6 |" where this reads "| 5 → 6 |". The transition between 5 → 6 and 6 → 7.]

Let’s try to reproduce Figure 5.9.3 from the data in Table 5.9.1 by using the quantum theory that we have developed so far. Equation (5.9.8) predicts a pattern of exactly equally spaced lines. The lowest energy transition is between Ji = 0 and Jf = 1 so the first line in the spectrum appears at a frequency of 2B. The next transition is from Ji = 1 to Jf = 2 so the second line appears at 4B. The spacing of these two lines is 2B. In fact the spacing of all the lines is 2B, which is consistent with the experimental data in Table 5.9.1 showing that the lines are very nearly equally spaced. The difference between the first spacing and the last spacing is less than 0.2%.

Figure 5.9.4: Energy levels and line positions calculated in the rigid rotor approximation. (CC BY-SA 3.0; Nrrw via Wikipedia)
Energy level diagram with transitions and a corresponding intensity plot against energy values.

### Exercise 5.9.5

Use Equation (5.9.8) to prove that the spacing of any two lines in a rotational spectrum is 2B, i.e. derive:

ν_(Ji+1) − ν_Ji = 2B

**Answer**

To prove the relationship, evaluate the LHS. First, define the terms:

ν_Ji = 2B(Ji + 1), ν_(Ji+1) = 2B((Ji + 1) + 1)

Substitute into the equation and evaluate:

2B((Ji + 1) + 1) − 2B(Ji + 1) = 2B

2B(Ji + 1) + 2B − 2B(Ji + 1) = 2B

2B = 2B

LHS equals RHS.Therefore, the spacing between any two lines is equal to 2B.

### Example 5.9.1 : Rotation of Sodium Hydride

The molecule NaH undergoes a rotational transition from J = 0 to J = 1 when it absorbs a photon of frequency 2.94 × 10^11 Hz. What is the equilibrium bond length of the molecule?

**Solution**

We use J = 0 in the formula for the transition frequency

ν = 2B = ħ/(2πI) = ħ/(2πμRe^2)

Solving for Re gives

Re = √(ħ/(2πμν))

The reduced mass is given by

μ = (m_Na mH)/(m_Na + mH)

= ((22.989)(1.0078))/(22.989 + 1.0078)

= 0.9655

which is in atomic mass units or relative units. To convert to kilograms, we need the conversion factor 1 au = 1.66 × 10^−27 kg. Multiplying this by 0.9655 gives a reduced mass of 1.603 × 10^−27 kg. Substituting in for Re gives

Re = √(((1.055 × 10^−34 J·s))/(2π(1.603 × 10^−27 kg)(2.94 × 10^11 Hz)))

= 1.888 × 10^−10 m

[Note: corrected; the source prints "= 1.899 × 10^−10 m" where this reads "= 1.888 × 10^−10 m". The square root evaluates to 1.888 × 10^−10 m, which gives the 1.89 Å below.]

= 1.89 Å

### Example 5.9.6

Use the frequency of the J = 0 to J = 1 transition observed for carbon monoxide to determine a bond length for ^12 C^16 O.

**Solution**

- J=0: v0 = 115271.21 MHz
- J=1: v1 = 230538.01 MHz

Δv = 230538.01 MHz−115271.21 MHz

= 115266.8 MHz

= 1.153 × 10^11 Hz

= ħ/(2πμRe^2)

The reduced mass is

μ = (mC mO)/(mC + mO)

= (12.01 × 16.00)/(12.01 + 16.00)

= 6.86 amu

Convert to kg

6.86 amu ((1.661 × 10^−27 kg)/(1 amu)) = 1.139 × 10^−26 kg

[Note: corrected; the source prints "((1.661 × 10^−27 kg)/(12 amu))" where this reads "((1.661 × 10^−27 kg)/(1 amu))". The conversion is per amu; 6.86 × 1.661 × 10^−27 kg = 1.139 × 10^−26 kg, as stated.]

Re = √(ħ/(2πμΔv))

= √((1.055 × 10^−34 J·s)/(2π·1.139 × 10^−26 kg·1.153 × 10^11 Hz))

= 1.131 × 10^−10 m

= 1.131 Å

### Advanced: Non-Rigid Rotors

Centrifugal stretching of the bond as J increases causes the decrease in the spacing between the lines in an observed spectrum (Table 5.9.1 ). This decrease shows that the molecule is not really a rigid rotor. As the rotational angular momentum increases with increasing J, the bond stretches. This stretching increases the moment of inertia and decreases the rotational constant (Figure 5.9.5 ).

Figure 5.9.5: Two atoms connected by a vibrating bond. There is a rotation around the common center of mass, and oscillation in bond distance. (CC SA-BY 3.0; www.cleonis.nl).
A simple graphic showing two circles connected by a wavy line, resembling a spring or wave pattern.

The effect of centrifugal stretching is smallest at low J values, so a good estimate for B can be obtained from the J = 0 to J = 1 transition. From B, a value for the bond length of the molecule can be obtained since the moment of inertia that appears in the definition of B (Equation (5.9.9)) is the reduced mass times the bond length squared. When the centrifugal stretching is taken into account quantitatively, the development of which is beyond the scope of the discussion here, a very accurate and precise value for B can be obtained from the observed transition frequencies because of their high precision. Rotational transition frequencies are routinely reported to 8 and 9 significant figures.

As we have just seen, quantum theory successfully predicts the line spacing in a rotational spectrum. An additional feature of the spectrum is the line intensities. The lines in a rotational spectrum do not all have the same intensity, as can be seen in Figure 5.9.3 and Table 5.9.1. This is related to the populations of the initial and final states. This aspect of spectroscopy will be discussed in more detail in the following chapters
