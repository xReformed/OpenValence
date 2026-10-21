---
title: "5.5: The Harmonic Oscillator and Infrared Spectra"
book: "Physical Chemistry (LibreTexts)"
chapter: "5: The Harmonic Oscillator and the Rigid Rotor"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05%3A_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.05%3A_The_Harmonic_Oscillator_and_Infrared_Spectra"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Understand how the quantum harmonic oscillator model can be used to interpret the infrared spectra of diatomic molecules
- Understand the origin of the transition moment integral and selection rules and how they are related

Infrared (IR) spectroscopy is one of the most common and widely used spectroscopic techniques employed mainly by inorganic and organic chemists due to its usefulness in determining structures of compounds and identifying them. Chemical compounds have different chemical properties due to the presence of different functional groups. IR spectroscopy is one of the most common and widely used spectroscopic techniques. Absorbing groups in the infrared region absorb within a certain wavelength region. The absorption peaks within this region are usually sharper when compared with absorption peaks from the ultraviolet and visible regions. In this way, IR spectroscopy can be very sensitive to determination of functional groups within a sample since different functional group absorbs different particular frequency of IR radiation. Also, each molecule has a characteristic spectrum often referred to as the fingerprint. A molecule can be identified by comparing its absorption peak to a data bank of spectra. IR spectroscopy is very useful in the identification and structure analysis of a variety of substances, including both organic and inorganic compounds. It can also be used for both qualitative and quantitative analysis of complex mixtures of similar compounds.

## IR Spectroscopy

Transitions between vibrational energy levels can be induced about by absorption or emission of radiation. To understand this, knowledge of both the initial and final eigenstates is needed. The energy of the v^th eigenstate of a harmonic oscillator can be written as

Ev = (v + 1/2)(h/(2π))√(k/μ)

where h is Planck's constant and v is the vibrational quantum number and ranges from 0, 1, 2, 3,..., ∞. Equation (5.5.16) is often rewritten as

Ev = (v + 1/2)hνm

where νm is the vibrational frequency of the vibration. Equation (5.5.17) is often written as

Ev = (v + 1/2)ħω

where ω is the angular frequency (i.e., 2πν).

Transitions in vibrational energy levels can be brought about by absorption of radiation, provided the energy of the radiation (hν_photon) exactly matches the difference in energy (ΔE_(vv^′)) between the vibrational quantum state v to quantum state v^′. This can be expressed as

hν_photon = ΔE_(vv^′)

= E_(v^′) − Ev

= (v^′ + 1/2)hνm − (v + 1/2)hνm

= (v^′−v)hνm

Let's consider only transitions between adjacent eigenstates (discussed in more details below) so

v^′−v = ±1

which is positive if an IR photon is absorbed and negative if it is emitted. For the absorption of a IR photon, Equation (5.5.18) simplifies to

hν_photon = hνm

= (h/(2π))√(k/μ)

The frequency of radiation ν_photon that will bring about this change is identical to the classical vibrational frequency of the bond ν.

### The Wavenumber as a Unit of Energy

The cm^-1 is the wavenumber scale and it can also be defined as 1/wavelength in cm. A wavenumber is often used due to its direct relationship with both frequency and energy. The frequency of the absorbed radiation causes the molecular vibrational frequency for the absorption process:

ν̄(cm^−1) = 1/(λ(μm)) × 10^4((μm)/cm)

= (ν (Hz))/(c (cm/s))

Equation (5.5.18) can be modified so that the radiation can be expressed in wavenumbers

ν̃m = (1/(2πc))√(k/μ)

where c is the velocity of light (cm/s) and ν̃ is the wavenumber of an absorption maximum (cm^-1).

### Example 5.5.1: Hydrogen Halides

The force constants for typical diatomic molecules are in the range between 400 to 2000 N·m^−1.

| Molecule | HF | HCl | HBr | HI | CO | NO |
| --- | --- | --- | --- | --- | --- | --- |
| Force constant, k (N.m^-1) | 970 | 480 | 410 | 320 | 1860 | 1530 |

For the diatomic molecules listed above, calculate the following:

a. angular frequency (rad·s^−1)
b. natural frequency (Hz)
c. period (s)
d. separation between energy levels
e. wavelength λ of the electromagnetic radiation absorbed in the transition v = 0 → v = 1.

**Solution**

For HCl:

a. angular frequency ω = 5.45 × 10^14 rad·s^−1
b. natural frequency: ν = ω/(2π) = 8.68 × 10^13
c. period (s): T = 1/ν = 1.15 × 10^−14
d. separation between energy levels: ΔE = E_(v=1) − E_(v=0) = ħω = 5.75 × 10^−20 J
e. wavelength λ of the electromagnetic radiation absorbed in the transition v = 0 → v = 1: 3.46 × 10^−6 m

The electromagnetic radiation released (and absorbed) for vibrations is primarily in the infrared (IR) part of the spectrum. Calculating the above properties for the other molecules remains as an exercise.

Note: We did not designate the specific isotopes in the hydrogen halides above because that information was not required to solve these questions.

<!-- end of example -->

IR deals with the interaction between a molecule and radiation from the electromagnetic region ranging (4000- 40 cm^-1). The IR region of the electromagnetic spectrum ranges in wavelength from 2 -15 µm. Conventionally the IR region is subdivided into three regions (Table 5.5.1): near IR, mid IR and far IR. Most of the IR used originates from the mid IR region.

Table 5.5.1: Regions of the IR Spectrum

| Region | Wavelength | Wavenumbers (ν̃), cm^-1 | Frequencies (v), HZ |
| --- | --- | --- | --- |
| Near | 0.78 -2.5 | 12800 - 4000 | 3.8 x 10^14 - 1.2 x 10^14 |
| Middle | 2.5 - 50 | 4000 - 200 | 1.2 x 10^14 - 6.0 x 10^12 |
| Far | 50 -1000 | 200 -10 | 6.0 x 10^12 - 3.0 x 10^11 |
| Most Used | 2.5 -15 | 4000 -670 | 1.2 x 10^14 - 2.0 x 10^13 |

[Note: corrected; the source prints "| Far | 50 -100 |" where this reads "| Far | 50 -1000 |"; the source prints "| 4000 - 200 | 3.8 x 10^14 - 1.2 x 10^14 |" where this reads "| 4000 - 200 | 1.2 x 10^14 - 6.0 x 10^12 |"; the source prints "| 200 -10 | 3.8 x 10^14 - 1.2 x 10^14 |" where this reads "| 200 -10 | 6.0 x 10^12 - 3.0 x 10^11 |"; the source prints "| 4000 -670 | 3.8 x 10^14 - 1.2 x 10^14 |" where this reads "| 4000 -670 | 1.2 x 10^14 - 2.0 x 10^13 |". The source repeats the near-IR frequency range in every row; these follow from the wavelengths. The far IR, 200–10 cm^−1, is 50–1000 μm.]

### Example 5.5.2: Hydrogen Chloride

The H^35Cl equilibrium bond length is 0.127 nm and the v = 0 to v = 1 transition is observed in the infrared at 2,886 cm^-1. Compute the vibrational energy of H^35Cl in its lowest state.

a. Compute the classical limit for the stretching of the HCl bond from its equilibrium length in this state.
b. What percent of the equilibrium bond length is this extension?

**Solution**

The H-Cl bond length is 0.127 nm = 1.27 × 10^−10 m and the IR transition is observed at 2886 cm^−1. We first convert this to Hertz

2886 cm^−1(3 × 10^10 cm/s) = 8.658 × 10^13 s^−1 = 8.658 × 10^13 Hz

[Note: corrected; the source prints "= 8.646 × 10^13 s^−1 = 8.646 × 10^13 Hz" where this reads "= 8.658 × 10^13 s^−1 = 8.658 × 10^13 Hz". 2886 × 3 × 10^10 = 8.658 × 10^13.]

The equations for the energy of the v^th eigenstate of a harmonic oscillator is

Ev = (v + 1/2)ħω

So the ground state (v = 0) energy is

E0 = (1/2)ħω

with

ω = 2πν

= 5.44 × 10^14 rad/s

[Note: corrected; the source prints "= 5.54 × 10^14 rad/s" where this reads "= 5.44 × 10^14 rad/s". 2π × 8.658 × 10^13 s^−1 = 5.44 × 10^14 rad/s, which also matches k = μω^2 = 481 N/m.]

We can then extra the ground state vibrational energy (aka zero-point energy) from

Eo = (1/2)ħω

= (1/2)ħ(5.44 × 10^14 rad/s)

[Note: corrected; the source prints "ħ(5.54 × 10^14 rad/s)" where this reads "ħ(5.44 × 10^14 rad/s)". ω as corrected above.]

= 2.87 × 10^−20 J

[Note: corrected; the source prints "= 2.916 × 10^−20 J" where this reads "= 2.87 × 10^−20 J". (1/2)(1.0546 × 10^−34 J s)(5.44 × 10^14 s^−1) = 2.87 × 10^−20 J.]

The classical limit of the stretch is denoted as Q0, this can be equated as potential energy in relation to the total E0 found above as, at E0, all of the energy would be potential energy in the form of the stretch. In comparison to the classic spring potential

V = (1/2)kQ0^2

As described above, we can relate the two as

(1/2)ħω = (1/2)kQ0^2

or,

2.87 × 10^−20 J = (1/2)481Q0^2

[Note: corrected; the source prints "2.916 × 10^−20 J = (1/2)481Q0^2" where this reads "2.87 × 10^−20 J = (1/2)481Q0^2". E0 as corrected above.]

where Q0 = 1.09 × 10^−11 m = 0.0109 nm.

[Note: corrected; the source prints "Q0 = 1.10 × 10^−11 m = 0.0110 nm." where this reads "Q0 = 1.09 × 10^−11 m = 0.0109 nm.". √(2 × 2.87 × 10^−20/481) = 1.09 × 10^−11 m.]

Lastly, this classical limit to length can be compared to the equilibrium bond length by a simple relation of

Percent bond length = (Q0)/(x_eq) × 100%

= (0.0110 nm)/(0.127 nm) × 100%

= 8.6%

[Note: corrected; the source prints "= 8.66%" where this reads "= 8.6%". With Q0 = 1.09 × 10^−11 m.]

## Selection Rules for IR Transitions

Photons can be absorbed or emitted, and the harmonic oscillator can transition from one vibrational energy state to another. Which transitions between vibrational states are allowed? When discussing the Bohr hydrogen atom in Chapter 1, we identified multiple transitions between different states as being responsible for the line spectra emission of the hydrogen atom. No limitations were identified so that any transition between any starting state and ending state was possible and this resulted in a complex pattern in the spectra. As we will identify later on, when considering mulit-electron atoms, there are selection rules that limits which transitions will be observed (i.e., are allowed).

A similar situation exist for the harmonic oscillator and IR transitions and a set of selection rules must be satisfied to ensure a particular transition is allowed. Selection rules result from evaluating a transition moment integral that expresses the probability of a transition from the v to the v' eigenstates:

μT = ⟨ψ_v'|μ̂(x)|ψv⟩

= ∫_−∞^∞ ψ_v'^*(x)μ̂(x)ψv(x)dx

When the transition moment integral is zero for two specific eigenstates (i.e., ψv(x) and ψ'v(x)), then the probability of observing that transition is zero. In this case, this transition is called a forbidden transition (i.e., it will not be obversed). Transitions with low probabilities are call "weakly allowed transitions" since they will have small amplitudes in spectra and transitions with high probabilities are "strongly allowed transitions" and will exhibit high amplitudes in spectra.

Figure 5.5.1: Possible transitions for a harmonic oscillator. Allowed transitions are labeled with blue arrows and forbidden transitions are labeled with red arrows. (CC BY-NC; Ümit Kaya via LibreTexts)
Diagram showing energy levels and transitions in a quantum system, labeled with forbidden and transition energies.

To evaluate Equation (5.5.29), we need to express the dipole moment operator, μ̂, in terms of the magnitude of the vibration x. The dipole moment operator is defined as

μ̂ = Σ_electrons (−e)r⃗ + Σ_nuclei qR⃗

[Note: corrected; the source prints "Σ_electrons er⃗" where this reads "Σ_electrons (−e)r⃗". An electron's charge is −e, as the next sentence says.]

where the two sums are over all the electrons and nuclei and involve the particle charge (−e or q) multiplying the position vector (r⃗ or R⃗, respectively). We can obtain this dipole moment operator in terms of the magnitude of the displacement coordinate, x, in a simple way by using a Taylor series expansion for the dipole moment around the equlibrium position (x = 0).

μ̂(x) = μ_(x=0) + (dμ(x))/dx|_(x=0) x + (1/2)(d^2μ(x))/dx^2|_(x=0) x^2 + …

[Note: corrected; the source prints "+ (d^2μ(x))/dx^2|_(x=0) x^2" where this reads "+ (1/2)(d^2μ(x))/dx^2|_(x=0) x^2". The second-order Taylor term has a factor 1/2.]

Retaining only the first two terms and substituting into Equation (5.5.29) produces

μT = μ_(x=0)∫_−∞^∞ ψ_v'(x)ψv(x)dx + (dμ(x))/dx|_(x=0)∫_−∞^∞ xψ_v'^*(x)ψv(x)dx

where μ_(x=0) is the dipole moment of the molecule when the nuclei are at their equilibrium positions, and

(dμ(x))/dx|_(x=0)

is the linear change in the dipole moment due to the displacement of the nuclei in the normal mode. The derivative is the linear change because it multiplies x and not a higher power of x in Equation (5.5.31). Both μ and

(dμ(x))/dx|_(x=0)

are moved outside of the integral because they are constants that no longer depend on x because they are evaluated at x = 0.

The integral in the first term in Equation (5.5.32) is 0 because any two harmonic oscillator wavefunctions are orthogonal. The integral in the second term of Equation (5.5.32) is zero except when v' = v±1 as demonstrated in Exercise 5.5.1 . Also note that the second term is zero if

(dμ(x))/dx|_(x=0) = 0

Hence we can identify two "rules" that need to be satisfied for an IR photon to be absorb (or emitted) by a vibrating molecule.

### Rules for IR Absorption

For IR absorption to occur two conditions must be met:

1. There must be a change in the dipole moment of the molecule as a result of a molecular vibration (or rotation). The change (or oscillation) in the dipole moment allows interaction with the alternating electrical component of the IR radiation. Symmetric molecules (or bonds) do not absorb IR radiation since there is no dipole moment.
2. If the frequency of the radiation ν_photon matches the natural frequency of the vibration (νm), the IR photon can be absorbed and the amplitude of the vibration increases.

[Note: IR absorption needs a change of dipole moment during the vibration, not a permanent dipole: CO2 and CH4 have no dipole moment yet absorb IR. Only vibrations that leave the dipole unchanged, such as the stretch of a homonuclear diatomic, are IR inactive. The text is left as printed.]

### Exercise 5.5.1

Use one of the Hermite polynomial recursion relations to verify that the second integral in Equation (5.5.32) is 0 unless v' = v±1.

If we are to observe absorption of infrared radiation due to a vibrational transition in a molecule, the transition moment cannot be zero. This condition requires that the dipole moment derivative Equation (5.5.33) cannot be zero and that the vibrational quantum number change by one unit. The normal coordinate motion must cause the dipole moment of the molecule to change in order for a molecule to absorb infrared radiation. If the normal coordinate oscillation does not cause the dipole moment to change then μT = 0 and no infrared absorption is observed. So we can

Δv = ±1 (For allowed transitions)

Consider oxygen and nitrogen molecules. Because they are symmetrical, their dipole moments are zero, μ = 0. Since the vibrational motion (only bond stretching for a diatomic molecule) preserves this symmetry, the change in the dipole moment due to the vibrational motion also is zero, (dμ(x))/dx = 0. Consequently, oxygen and nitrogen do not absorb infrared radiation as a result of vibrational motion.

### Exercise 5.5.2

Explain why the molar absorptivity or molar extinction coefficients (ε) in Beer's Law for the IR absorption of some vibrations are greater than others.

**Answer**

Qualitatively, if the probability of transition is large, then the molar absorptivity is large. And similar if the transition were not allowed, then there will be no intensity and no observed peak in the spectrum. Transitions can be "partially allowed" as well, and these bands appear with a lower intensity than the full allowed transitions.

When looking at the Beer's Law

A = ε c l

where A is absorbance. ε is the molar absorptivity, c is the molar concentration and l is the optical path length

We are only looking at the change in the molar absorptivity as the IR absorptions of vibrations vary. To do this we have to look at the transition moment integral

μT = ⟨ψ_(v^′)|μ̂(x)|ψv⟩

[Note: the source draws a slash through μ̂ here (\not), a typing error; the transition moment is as written.]

When the transition moment integral is zero, there is no transition as it is not allowed under the selection rules. This means that the IR is not absorbing any vibrations and therefore the molar absorptivity is zero, which means that absorbance according to Beer's Law is zero. As the transition moment integral increases, the molar absorptivity also increases and the overall absorbance increases.

The case v' = v + 1 corresponds to going from one vibrational state to a higher energy one by absorbing a photon with energy hν. The case v' = v − 1 corresponds to a transition that emits a photon with energy hν. In the harmonic oscillator model infrared spectra are very simple; only the fundamental transitions, Δ = ±1, are allowed. The associated transition energy is ħω, according to Equation (5.5.19). The transition energy is the change in energy of the oscillator as it moves from one vibrational state to another, and it equals the photon energy.

ΔE = E_final − E_initial

= hv_photon

= ħω_oscillator

For perfect harmonic oscillators, the only possible allowed transitions are Δ = ±1 with all other transitions forbidden (Figure 5.5.1). This conclusion predicts that the vibrational absorption spectrum of a diatomic molecule consists of a single line since the energy levels are equally spaced in the harmonic oscillator model (Figure 5.5.1). If the vibration were anharmonic, then the levels would not be equally spaced and then transitions from v = 0 to v = 1 and from v = 1 to v = 2, etc. would occur at different frequencies.

> Only the fundamental transitions, Δ = ±1, are observed in infrared spectra within harmonic oscillator model.

The actual IR spectrum is more complex, especially at high resolution. There is a fine structure due to the rotational states of the molecule. These states will be discussed in Sections 5.8 and 5.9. The spectrum is enriched further by the appearance of lines due to transitions corresponding to Δ = ±n where n > 1. These transitions are called overtone transitions and their appearance in spectra despite being forbidden in the harmonic oscillator model is due to the anharmonicity of molecular vibrations. Anharmonicity means the potential energy function is not strictly the harmonic potential. The first overtone, Δv = 2, generally appears at a frequency slightly less than twice that of the fundamental, i.e. the frequency due to the Δv = 1 transition.

[Note: corrected; the source prints "These states will be discussed in the next chapter." where this reads "These states will be discussed in Sections 5.8 and 5.9.". Rotational states are covered later in this chapter.]

### Exercise 5.5.3: Hydrogen Chloride

Compute the approximate transition frequencies in wavenumber units for the first and second overtone transitions in HCl given that the fundamental is at 2,886 cm^-1.
