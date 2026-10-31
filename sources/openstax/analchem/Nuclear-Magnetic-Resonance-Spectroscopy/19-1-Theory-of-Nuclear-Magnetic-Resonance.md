---
title: "19.1: Theory of Nuclear Magnetic Resonance"
book: "Instrumental Analysis (LibreTexts)"
chapter: "19: Nuclear Magnetic Resonance Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/19%3A_Nuclear_Magnetic_Resonance_Spectroscopy/19.01%3A_Theory_of_Nuclear_Magnetic_Resonance"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

As is the case with other forms of optical spectroscopy, the signal in nuclear magnetic resonance (NMR) spectroscopy arises from a difference in the energy levels occupied by the nuclei in the analyte. In this section we develop a general theory of nuclear magnetic resonance spectroscopy that draws on quantum mechanics and on classical mechanics to explain these energy levels.

## Quantum Mechanical Description of NMR

The quantum mechanical description of an electron is given by four quantum numbers: the principal quantum number, n, the angular momentum quantum number, l, the magnetic quantum number, ml, and the spin quantum number, ms. The first three of these quantum numbers tell us something about where the electron is relative to the nucleus and something about the electron's energy. The last of these four quantum numbers, the spin quantum number, tells us something about the ability of an electron to interact with an applied magnetic field. An electron has possible spins of +1/2 or of –1/2, which we often refer to as spin up, using an upwards arrow, ↑, to represent it, or as spin down, using a downwards arrow, ↓, to represent it.

A nucleus, like an electron, carries a charge and has a spin quantum number. The overall spin, I, of a nucleus is a function of the number of protons and neutrons that make up the nucleus. Here are three simple rules for nuclear spin states:

- If the number of neutrons and the number of protons are both even numbers, then the nucleus does not have a spin; thus, ^12C, with six protons and six neutrons, has no overall spin and I = 0.
- If the number of neutrons plus the number of protons is an odd number, then the nucleus has a half-integer spin, such as 1/2 or 3/2; thus, ^13C, with six protons and seven neutrons, has an overall spin of I = 1/2; this also is true for ^1H.
- If the number of neutrons and the number of protons are both odd numbers, then the nucleus has an integer spin, such as 1 or 2; thus, ^2H, with one proton and one neutron, has an overall spin of I = 1.

### Note

Predicting that ^13C has a spin of I = 1/2, but that ^127I has a spin of I = 5/2 and that ^17O has a spin of I = 5/2 is not trivial. A periodic table that provides spin states for elements is available here.

[Note: corrected; the source prints "^127I has a spin of I = 3/2" where this reads "^127I has a spin of I = 5/2". The nuclear spin of ^127I, the only stable iodine isotope, is 5/2.]

The total number of spin states—that is, the total number of possible orientations of the spin—is equal to (2 × I) + 1. To be NMR active, a nucleus must have at least two spin states so that a change in spin states, and, therefore, a change in energy, is possible; thus, ^12C, for which there are (2 × 0) + 1 = 1 spin states, is NMR inactive, but ^13C, for which there are (2 × 1/2) + 1 = 2 spin states with values of m = +1/2 and of m = −1/2, is NMR active, as is ^2H for which there are (2 × 1) + 1 = 3 spin states with values of m = +1, m = 0, and m = −1. As our interest in this chapter is in the NMR spectra for ^1H and for ^13C, we will limit ourselves to considering I = 1/2 and spin states of m = +1/2 and of m = −1/2.

[Note: corrected; the source prints "m = +1/2, m = 0, and m = −1/2" where this reads "m = +1, m = 0, and m = −1". For I = 1 the values of m run from +I to −I in steps of 1, so ^2H has m = +1, 0 and −1.]

### Energy Levels in an Applied Magnetic Field

Suppose we have a large population of ^1H atoms. In the absence of an applied magnetic field the atoms are divided equally between their possible spin states: 50% of the atoms have a spin of +1/2 and 50% of the atoms have a spin of –1/2. Both spin states have the same energy, as is the case on the left side of Figure 19.1.1, and neither absorption nor emission occurs.

Figure 19.1.1: Energy level diagram for a proton, ^1H, in the absence (left) and in the presence (right) of an applied magnetic field.
Energy level diagram for a proton in the absence and in the presence of an applied magnetic field.

In the presence of an applied magnetic field, as on the right side of Figure 19.1.1, the nuclei are either aligned with the magnetic field with spins of m = +1/2, or aligned against the magnetic field with spins of m = −1/2. The energies in these two spin states, E_lower and E_upper, are given by the equations

E_lower = −((γh)/(4π))B0

E_upper = + ((γh)/(4π))B0

where γ is the magnetogyric ratio for the nucleus, h is Planck's constant, and B0 is the strength of the applied magnetic field. The difference in energy, ΔE, between the two states is

ΔE = E_upper − E_lower = + ((γh)/(4π))B0 − (−((γh)/(4π))B0) = ((γh)/(2π))B0

Substituting Equation (nmr3) into the more familiar equation ΔE = hν gives the frequency, ν, of electromagnetic radiation needed to effect a change in spin state as

ν = (γB0)/(2π)

This is called the Larmor frequency for the nucleus. For example, if the magnet has a field strength of 11.74 Tesla, then the frequency needed to effect a change in spin state for ^1H, for which γ is 2.68 × 10^8 rad T^−1 s^−1, is

ν = ((2.68 × 10^8 rad T^−1 s^−1)(11.74 T))/(2π) = 5.01 × 10^8 s^−1

or 500 MHz, which is in the radio frequency (RF) range of the electromagnetic spectrum. This is the Larmor frequency for ^1H.

### Population of Spin States

The relative population of the upper spin state, N_upper, and of the lower spin state, N_lower, is given by the Boltzmann equation

(N_upper)/(N_lower) = e^(−ΔE/kT)

where k is Boltzmann's constant (1.38066 × 10^−23 J/K) and T is the temperature in Kelvin. Substituting in Equation (nmr3) for ΔE gives this ratio as

(N_upper)/(N_lower) = e^(−γhB0/2πkT)

If we place a population of ^1H atoms in a magnetic field with a strength of 11.74 Tesla, the ratio (N_upper)/(N_lower) at 298 K is

[Note: corrected; the source prints "IF we place" where this reads "If we place". A capitalisation typo.]

(N_upper)/(N_lower) = e^{−((2.68 × 10^8 rad T^−1 s^−1)(6.626 × 10^−34 Js)(11.74 T))/((2π)(1.38 × 10^−23 JK^−1)(298 K))} = 0.99992

[Note: corrected; the source prints "(2.68 × 10^8 rad s^−1)" where this reads "(2.68 × 10^8 rad T^−1 s^−1)". The magnetogyric ratio is in rad T^−1 s^−1, as given for the Larmor frequency above, and its T^−1 cancels the tesla of B0.]

If this ratio is 1:1, then the probability of absorption and emission are equal and there is no net signal. In this case, the difference in the populations is on the order of 8 per 100,000, or 80 per 1,000,000, or 80 ppm. The small difference in the two populations means that NMR is less sensitive than many other spectroscopic methods.

## Classical Description of NMR

To understand the classical description of an NMR experiment we draw upon Figure 19.1.2. For simplicity, let's assume that in the population of nuclei available to us, there is an excess of just one nucleus with a spin state of +1/2. In Figure 19.1.2a, we see that the spin of this nucleus is not perfectly aligned with the applied magnetic field, B0, which is aligned with the z-axis; instead the nucleus precesses around the z-axis at an angle of theta, Θ. As a result, the net magnetic moment along the z-axis, μz, is less than the magnetic moment, µ, of the nucleus. The precession occurs with an angular velocity, ω0, of γB0.

Figure 19.1.2: Illustration that shows in (a) the magnetic moment, µ, of a nucleus whose spin is aligned with the applied magnetic field, B0. Application of the magnetic field, B1 flips the spin of the nucleus, as shown in (b).
Illustration that shows in (a) the magnetic moment of a nucleus whose spin is aligned with the applied magnetic field. Application of the magnetic field flips the spin of the nucleus, as shown in (b).

If we apply a source of radio frequency (RF) electromagnetic radiation along the x-axis such that its magnetic field component, B1, is perpendicular to B0, then it will generate its own angular velocity in the xy-plane. When the angular velocity of the precessing nucleus matches the angular velocity of B1, absorption takes place and the spin flips, as seen in Figure 19.1.2b.

## Relaxation

When the magnetic field B1 is removed, the nucleus returns to its original state, as seen in Figure 19.1.2a, a process called relaxation. In the absence of relaxation, the system is saturated with equal populations of the two spin states and absorption approaches zero. This process of relaxation has two separate mechanisms: spin-lattice relaxation and spin-spin relaxation.

In spin-lattice relaxation the nucleus in its higher energy spin state, Figure 19.1.2b, returns to its lower energy spin state, Figure 19.1.2a, by transferring energy to other species present in the sample (the lattice in spin-lattice). Spin-lattice relaxation is characterized by first-order exponential decay with a characteristic relaxation time of T1 that is a measure of the average time the nucleus remains in its higher energy spin state. Smaller values for T1 result in more efficient relaxation.

[Note: corrected; the source prints "lower energy state spin state" where this reads "lower energy spin state". A doubled word.]

If two nuclei of the same type, but in different spin states, are in close proximity to each other, they can trade places in which the nucleus in the higher energy spin state gives up its energy to the nucleus in the lower energy spin state. The result is a decrease in the average life-time of an excited state. This is called spin-spin relaxation and it is characterized by a relaxation time of T2.

[Note: corrected; the source prints "they can trades places" where this reads "they can trade places". A typo.]

## Continuous Wave NMR vs. Fourier Transform NMR

In Chapter 16 we learned that we can record an infrared spectrum by using a scanning monochromator to pass, sequentially, different wavelengths of IR radiation through a sample, obtaining a spectrum of absorbance as a function of wavelength. We also learned that we can obtain the same spectrum by passing all wavelengths of IR radiation through the sample at the same time using an interferometer, and then use a Fourier transform to convert the resulting interferogram into a spectrum of absorbance as a function of wavelength. Here we consider their equivalents for NMR spectroscopy.

### Continuous Wave NMR

If we scan B1 while holding B0 constant—or scan B0 while holding B1 constant—then we can identify the Larmor frequencies where a particular nucleus absorbs. The result is an NMR spectrum that shows the intensity of absorption as a function of the frequency at which that absorption takes place. Because we record the spectrum by scanning through a continuum of frequencies, the method is known as continuous wave NMR. Figure 19.1.2 provides a useful visualization for this experiment.

### Fourier Transform NMR

In Fourier transform NMR, the magnetic field B1 is applied as a brief pulse of radio frequency (RF) electromagnetic radiation centered at a frequency appropriate for the nucleus of interest and for the strength of the primary magnetic field, B0. The pulse typically is 1-10 µs in length and applied in the xy-plane. From the Heisenberg uncertainty principle, a short pulse of Δt results in a broad range of frequencies as Δf = 1/Δt; this ensures that the pulse spans a sufficient range of frequencies such that the nucleus of interest to us will absorb energy and enter into an excited state.

Before we apply the pulse, the population of nuclei are aligned parallel to the applied magnetic field, B0, some with a spin of +1/2 and others with a spin of –1/2. As we learned above, there is a slight excess of nuclei with spins of +1/2, which we can represent as a single vector that shows their combined magnetic moments along the z-axis, μz, as shown in Figure 19.1.3a. When we apply a pulse of RF electromagnetic radiation with a magnetic field strength of B1, the spin states of the nuclei tip away from the z-axis by an angle that depends on the nucleus's magnetogyric ratio, γ, the value of B1, and the length of the pulse. If, for example, a pulse of 5 µs tips the magnetic vector by 45° (Figure 19.1.3b), then a pulse of 10 µs will tip the magnetic vector by 90° (Figure 19.1.3c), so that it now lies completely within the xy-plane.

[Note: corrected; the source prints "tips the the magnetic vector" where this reads "tips the magnetic vector"; the source prints "by 90° degrees" where this reads "by 90°". Doubled words.]

Figure 19.1.3: Illustration that shows (a) the net magnetic moment on the z-axis for a population of nuclei in an applied magnetic field with a field strength of B0. Application of a pulsed RF field, B1, tips the magnetic moment (b) away from the z-axis. The longer the pulse of RF, the greater the angle of tipping, as shown in (c).
Illustration that shows the net magnetic moment on the z-axis for a population of nuclei in an applied magnetic field. Application of a pulsed RF field tips the magnetic moment away from the z-axis. The longer the pulse of RF, the greater the angle of tipping.

At the end of the pulse, the nuclei begin to relax back to their original state. Figure 19.1.4 shows that this relaxation occurs both in the xy-plane (spin-spin relaxation) and along the z-axis (spin-lattice relaxation). If we were to trace the path of the magnetic vector with time, we would see that it follows a spiral-like motion as its contribution in the xy-plane decreases and its contribution along the z-axis increases. We measure this signal—called the free induction decay, or FID—during this period of relaxation.

Figure 19.1.4: Illustration showing the process of relaxation during an NMR experiment. The bottom row shows the net magnetic moment aligned with the z-axis, μz, as a function of time. The top row shows the net magnetic moment in the xy-plane with the figure on the top right showing the overall change in the net magnetic moment in three dimensions.
Illustration showing the process of relaxation during an NMR experiment.

The FID for a system that consists of only one type of nucleus is the simple exponentially damped oscillating signal in Figure 19.1.5a. The Fourier transform of this simple FID gives the spectrum in Figure 19.1.5b that has a single peak. A sample with a more than one type of nucleus yields a more complex FID pattern, such as that in Figure 19.1.5c, and a more complex spectrum, such as the two peaks in Figure 19.1.5d. Note that, as we learned in an earlier treatment of the Fourier transform in Chapter 7, a broader peak in the frequency domain results in a faster decay in the time domain.

Figure 19.1.5: Panels (a) and (b) show the FID signal for a sample that yields single peak and the result of taking the FT of the FID. Panels (c) and (d) show the FID signal for a sample that consists of two peaks and the result of taking the FT of the FID.
Panels (a) and (b) show the FID signal for a sample that yields single peak and the result of taking the FT of the FID. Panels (c) and (d) show the FID signal for a sample that consists of two peaks and the result of taking the FT of the FID.

Figure 19.1.6 shows a typical pulse sequence highlighting the total cycle time and its component parts: the pulse width, the acquisition time during which the FID is recorded, and a recycle delay before applying the next pulse and beginning the next cycle.

Figure 19.1.6: Example of a pulse sequence.
Example of a pulse sequence.

[Note: corrected; the source prints "Figure 19.1.1: Example" where this reads "Figure 19.1.6: Example". This is the section's sixth figure, which the text above calls Figure 19.1.6.]
