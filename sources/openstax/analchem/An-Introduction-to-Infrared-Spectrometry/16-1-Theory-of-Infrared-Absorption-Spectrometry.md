---
title: "16.1: Theory of Infrared Absorption Spectrometry"
book: "Instrumental Analysis (LibreTexts)"
chapter: "16: An Introduction to Infrared Spectrometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/16%3A_An_Introduction_to_Infrared_Spectrometry/16.01%3A_Theory_of_Infrared_Absorption_Spectrometry"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

## Understanding the IR Spectrum

Figure 16.1.1 shows the infrared spectrum for ethanol. Unlike a UV/Vis absorbance spectrum, the y-axis is displayed as percent transmittance (%T) instead of absorbance, reflecting the fact that IR is used more for qualitative purposes than for quantitative purposes, where Beer's law, which is a linear function of concentration (A = εbC) makes absorbance the more useful measurement. The x-axis for an IR spectrum usually is given in wavenumbers, ν̄ = λ^−1, with units of cm^–1. The peaks in an IR spectrum are inverted relative to absorbance spectrum; that is, they descend from a baseline of 100%T instead of rising from a baseline of zero absorbance.

Figure 16.1.1: Infrared (IR) spectrum for ethanol.
Infrared (IR) spectrum for ethanol.

### Dipole Changes

The energy of a photon of infrared radiation (see Figure 16.1.2) is not sufficient to effect a change in the electronic energy levels of electrons, as in the UV/Vis atomic or molecular absorption or emission spectroscopies covered in Chapters 9, 10, and 12–15. Instead, infrared radiation is confined to changes in the vibrational energy states of molecules and molecular ions. To absorb an IR photon, the absorbing species must experience a change in its dipole moment, which allows the oscillation in the photon's electrical field to interact with an oscillation in charge within the absorbing species. If the two oscillations have the same frequency, then absorption is possible.

[Note: corrected; the source prints "sufficient to affect a change" where this reads "sufficient to effect a change". To bring about a change is to "effect" it.]

### Note

Each vibrational energy state in Figure 16.1.2 also has a set of rotational energy states, which means that the peak for a particular change in vibrational energy levels may consist of a series of closely spaced lines, one for each of several changes in rotational energy. Because rotation is difficult for analytes that are in liquid or solid forms, we usually see just a single, broad absorption line; for this reason, we will consider only vibrational transitions in this chapter.

[Note: corrected; the source prints "analytes that in liquid" where this reads "analytes that are in liquid". The verb is missing.]

Figure 16.1.2: Diagram showing two electronic energy levels, E0 and E1, each with five vibrational energy levels, ν0 − ν4. Absorption of ultraviolet and visible radiation (shown by the blue arrows) leads to a change in the analyte's electronic energy levels and, possibly, a change in vibrational energy as well. A change in vibrational energy without a change in electronic energy levels occurs with the absorption of infrared radiation (shown by the red arrows).
Diagram showing two electronic energy levels, each with five vibrational energy levels.

[Note: corrected; the source prints "levels, ν0 − ν1." where this reads "levels, ν0 − ν4.". Five levels numbered from 0 run from ν0 to ν4.]

### Types of Molecular Vibrations

Although we tend to think of the atoms in a molecule as being rigidly fixed in space relative to each other, the individual atoms are in a constant state of motion: bond lengths increase and decrease by stretching and compressing, and bond angles change as the result of the bending of the bonds relative to each other. Figure 16.1.3 shows two different types of stretching (symmetric and asymmetric) and four different types of bending (in-plane rocking, in-plane scissoring, out-of-plane wagging, and out-of-plane twisting).

Figure 16.1.3: The six types of stretching and bending motions. For out-of-plane wagging and out-of-plane twisting, the plus sign ( + ) indicates that the atom is moving toward the viewer and the minus sign (−) indicates that the atom is moving away from the viewer.
The six types of stretching and bending motions.

[Note: corrected; the source prints "the minus sign (−) indicate that" where this reads "the minus sign (−) indicates that". The verb agrees with "the minus sign", as "the plus sign ( + ) indicates" does earlier in the sentence.]

Even a simple molecule can have many vibrational modes that give rise to a peak in the IR spectrum, as is the case for ethanol (Figure 16.1.1). The number of possible normal vibrational modes for a linear molecule is 3N − 5, where N is the number of atoms, and 3N − 6 for a non-linear molecule. Ethanol, for example, has 3 × 9 − 6 = 21 possible vibrational modes. As we will see later in this section, some of these modes may not lead to a change in dipole moment, decreasing the number of peaks in the IR spectrum.

### Note

Why does a non-linear molecule have 3N − 6 vibrational modes? Consider a molecule of methane, CH4. Each of methane’s five atoms can move in one of three directions (x, y, and z) for a total of 3 × 5 = 15 different ways in which the molecule’s atoms can move. A molecule can move in three ways: it can move from one place to another, which we call translational motion; it can rotate around an axis, which we call rotational motion; and its bonds can stretch and bend, which we call vibrational motion. Because the entire molecule can move in the x, y, and z directions, three of methane’s 15 different ways of moving are translational. In addition, the molecule can rotate about its x, y, and z axes, accounting for three additional forms of motion. This leaves 15 − 3 − 3 = 9 vibrational modes. A linear molecule, such as CO2, has 3N − 5 vibrational modes because it can rotate around only two axes.

## Mechanical Model of Stretching in a Diatomic Molecule

The simplest model system for the stretching and compressing of a bond is a weight with a mass, m, attached to an ideal spring that hangs from the ceiling as shown in Figure 16.1.4a. If we pull on the mass and then release it, we initiate a simple oscillating harmonic motion that we can model using Hooke's law. If we displace the weight by a distance, y, then the force, F, that acts on the weight is

[Note: corrected; the source prints "for the the stretching" where this reads "for the stretching". A doubled word.]

F = −ky

where k is the spring's force constant—a measure of the spring's springiness. The negative sign in Equation (hookeslaw) indicates that this is the force needed to restore the spring to its original position; that is, the force is in the direction opposite to our action of pulling down on the weight.

Figure 16.1.4: The model for a simple harmonic oscillator is shown in (a) and its potential energy as a function of displacement is shown in (b).
The model for a simple harmonic oscillator is shown in (a) and its potential energy as a function of displacement is shown in (b).

### Potential Energy of a Harmonic Oscillator

Let's take the potential energy, E, of the spring and weight as 0 when they are at rest (y = 0). If we pull down on the weight by a distance of dy, then the change in the system's potential energy, dE, must increase by the product of force and distance

dE = −F × dy = ky × dy

[Note: corrected; the source prints "= −ky × dy" where this reads "= ky × dy". With F = −ky, −F × dy = ky × dy; the extra minus sign would integrate to E = −(1/2)ky^2, not the E = (1/2)ky^2 the section derives.]

Integrating Equation (PEchange) from E = 0 to E = E and from y = 0 to y = y

∫0^E dE = k∫0^y ydy

[Note: corrected; the source prints "= −k∫0^y ydy" where this reads "= k∫0^y ydy". Integrating dE = ky × dy gives E = (1/2)ky^2, as the next equation states; with −k the result would be negative.]

gives the energy as

E = (1/2)ky^2

Figure 16.1.4b shows the resulting potential energy curve, for which the maximum potential energy is (1/2)kA^2 when the weight is at its maximum displacement. Note that the potential energy curve is a parabola.

### Vibrational Frequency

The simple harmonic oscillator described above and shown in Figure 16.1.4 vibrates with a frequency, ν0, given by the equation

ν0 = (1/(2π))√(k/m)

where k is the spring's force constant and m is the weight's mass. We can extend this to a spring that connects two weights to each other by substituting for the mass, m, the system's reduced mass, μ

μ = (m1 × m2)/(m1 + m2)

where m1 and m2 are the masses of the two weights. Substituting Equation (redmass) into Equation (natfreq) gives

ν0 = (1/(2π))√(k/μ) = (1/(2π))√((k(m1 + m2))/(m1 × m2))

If we make the assumption that Equation (natfreq2) applies to simple diatomic molecules, then we can estimate the bond's force constant, k, by measuring its vibrational frequency.

## Quantum Treatment of Vibrations

Equations (PE) and (natfreq2) are based on a classical mechanics treatment of the simple harmonic oscillator in which any displacement, and, thus, any energy is possible. Molecular vibrations, however, are quantized; thus

E = (v + 1/2) × h × (1/(2π))√(k/μ) = (v + 1/2)hν0

where v is the vibrational quantum number, which has allowed values of 0,1,2, …. The difference in energy, ΔE, between any two consecutive vibrational energy levels is hν0. As allowed transitions in quantum mechanics are limited to Δv = ±1 and as the difference in energy is limited to ΔE = hν0, any particular mode of vibration should give rise to a single peak.

[Note: corrected; the source prints "limited to Δν = ±1" where this reads "limited to Δv = ±1". The selection rule is on the vibrational quantum number v (as in Δv = ±2 or Δv = ±3 below), not on the frequency ν.]

### Anharmonic Behavior

The ideal behavior described in the last section, in which each vibrational motion that produces a change in dipole moment results in a single peak, does not hold due to a variety of reasons, including the coulombic interactions between the atoms as they move toward and away from each other. One result of these non-ideal behaviors is that the value ΔE does not remain constant for all values of the vibrational quantum number v. For larger values of v, the value of ΔE becomes smaller and transitions where Δv = ±2 or Δv = ±3 become possible giving rise to what are called overtone lines at frequencies that are 2 × or 3 × that for ν0.

## Why Do We See More or Fewer Vibrational Peaks Than Expected?

Figure 16.1.5 shows the IR spectrum for carbon dioxide, CO2, which consists of three clusters of peaks located at approximately 670 cm^–1, 2350 cm^–1, and 3700 cm^–1. As carbon dioxide is a linear molecule that consists of two carbon-oxygen double bonds (O=C=O), it has 3 × 3 − 5 = 9 − 5 = 4 vibrational modes. So why do we see just three clusters of peaks?

Figure 16.1.5: IR spectrum for CO2. The raw data is from NIST.
IR spectrum for carbon dioxide.

One of the requirements for the absorption of infrared radiation, is that the vibrational motion must result in a change in dipole moment. Figure 16.1.6 shows the four vibrational modes for CO2. Of these four vibrational modes, the symmetric stretch does not result in a change in dipole moment. Although this appears to explain why we see just three clusters of peaks, a close examination of the two bending motions in Figure 16.1.6 should convince you that they are identical and, therefore, will appear as a single peak.

Figure 16.1.6: The four vibrational modes for CO2. The symmetric stretch is not IR active as it does not involve a change in the molecule's dipole moment. The asymmetric stretch occurs at 2349 cm^–1. The two bending motions are identical (or degenerate to each other) and appear at 667 cm^–1.
The four vibrational modes for carbon dioxide.

[Note: corrected; the source prints "the molecules dipole moment" where this reads "the molecule's dipole moment". The possessive apostrophe is missing.]

So what is the source of the cluster of peaks around 3700 cm^–1? Sometimes the absorption of a single photon excites two or more vibrational modes. In this case, the wavenumber for this absorption band is equivalent to the sum of the wavenumbers for the asymmetric stretch and the two degenerate bending modes (2349 + 667 = 3016 cm^–1, and 2349 + 667 + 667 = 3683 cm^–1). These are called combination bands.

Another source of additional peaks are overtone bands in which Δv = ±2 or Δv = ±3. Figure 16.1.7 shows the IR spectrum for carbonyl sulfide, OCS, which is analogous to CO2 in which one of the oxygens is replaced with sulfur. The peak at 520 cm^–1 is for its two degenerate bending motions and is labeled ν2. The asymmetric stretch at 2062 cm^–1 (ν3) and the symmetric stretch at 859 cm^–1 (ν1) are the other two fundamental absorption bands. The remaining peaks are overtones, such as the peak labeled 2ν2 at 1040 cm^–1, or combination bands, such as the peak labeled ν3 + ν1 at 2921 cm^–1. Many of the peaks appear as two peaks; this is the result of changes in rotational energy as well.

[Note: corrected; the source prints "analagous" where this reads "analogous". A misspelling.]

Figure 16.1.7: IR spectrum for OCS. The raw data is from NIST. The peak labeled as I (in red) is an impurity.
IR spectrum for OCS

[Note: corrected; the source prints "form NIST" where this reads "from NIST". A typo.]
