---
title: "9.2: Atomic Absorption Instrumentation"
book: "Instrumental Analysis (LibreTexts)"
chapter: "9: Atomic Absorption Spectrometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/09%3A_Atomic_Absorption_and_Atomic_Fluorescence_Spectrometry/9.02%3A_Atomic_Absorption_Instrumentation"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

Atomic absorption spectrophotometers use optical benches similar to those described earlier in Chapter 7, including a source of radiation, a method for introducing the sample (covered in the previous section), a means for isolating the wavelengths of interest, and a way to measure the amount of light absorbed or emitted.

## Radiation Sources

Because atomic absorption lines are narrow, we need to use a line source instead of a continuum source to record atomic absorption spectra. Figure 9.2.1 will help us understand why this is necessary. As discussed in Chapter 7, a typical continuum source has an effective bandwidth on the order of 1 nm after passing through a monochromator. An atomic absorption line, as we learned in Chapter 8, has an effective line width on the order of 0.002 nm due to Doppler broadening and pressure broadening that takes place in a flame. If we pass the radiation from a continuum source through the flame, the incident power from the source, P0, and the power that reaches the detector, Pt, are essentially identical, leading to an absorbance of zero. A line source, which operates at a temperature that is lower than a flame, has a line width on the order of 0.001 nm. Passing this source radiation through the flame results in a measurable Pt and a measurable absorbance.

[Note: corrected; the source prints "which operates a temperature" where this reads "which operates at a temperature"; the source prints "a measurable PT and" where this reads "a measurable Pt and". A missing word, and the transmitted power is written Pt earlier in the same paragraph.]

Figure 9.2.1: Illustration showing the effect on absorbance of using a continuum source and a line source for atomic absorption. Note that the peaks in the top row have the same width; thus, the x-axis scale is different for the continuum spectra than for the line source spectra.
Illustration showing the effect on absorbance of using a continuum source and a line source for atomic absorption.

The source for atomic absorption is a hollow cathode lamp that consists of a cathode and anode enclosed within a glass tube filled with a low pressure of an inert gas, such as Ne or Ar (Figure 9.2.2). Applying a potential across the electrodes ionizes the filler gas. The positively charged gas ions collide with the negatively charged cathode, sputtering atoms from the cathode’s surface. Some of the sputtered atoms are in the excited state and emit radiation characteristic of the metal(s) from which the cathode is manufactured. By fashioning the cathode from the metallic analyte, a hollow cathode lamp provides emission lines that correspond to the analyte’s absorption spectrum.

Figure 9.2.2: Photo of a typical multielemental hollow cathode lamp. The cathode in this lamp is fashioned from an alloy of Co, Cr, Cu, Fe, Mn, and Ni, and is surrounded by a glass shield that isolates it from the anode. The lamp is filled with Ne gas. Also shown is the process that leads to atomic emission. Note the black deposit of sputtered metal on the outer wall of the hollow cathode lamp. See the text for additional details.
Photo of a typical multielemental hollow cathode lamp.

Each element in a hollow cathode lamp provides several atomic emission lines that we can use for atomic absorption. Usually the wavelength that provides the best sensitivity is the one we choose to use, although a less sensitive wavelength may be more appropriate for a sample that has a higher concentration of analyte. For the Cr hollow cathode lamp in Table 9.2.1, the best sensitivity is obtained using a wavelength of 357.9 nm as this line requires the smallest concentration of analyte to achieve an absorbance of 0.20.

[Note: corrected; the source prints "has higher concentration of analyte" where this reads "has a higher concentration of analyte". The article is missing.]

Table 9.2.1. Atomic Emission Lines for a Cr Hollow Cathode Lamp

| wavelength (nm) | slit width (nm) | mg Cr/L giving A = 0.20 | P0 (relative) |
| --- | --- | --- | --- |
| 357.9 | 0.2 | 2.5 | 40 |
| 425.4 | 0.2 | 12 | 85 |
| 429.0 | 0.5 | 20 | 100 |
| 520.5 | 0.2 | 1500 | 15 |
| 520.8 | 0.2 | 500 | 20 |

Another consideration is the emission line's intensity, P0. If several emission lines meet our requirements for sensitivity, we may wish to use the emission line with the largest relative P0 because there is less uncertainty in measuring P0 and Pt. When analyzing a sample that is ≈10 mg Cr/L, for example, the first three wavelengths in Table 9.2.1 provide good sensitivity; the wavelengths of 425.4 nm and 429.0 nm, however, have a greater P0 and will provide less uncertainty in the measured absorbance.

[Note: corrected; the source prints "measuring P0 and P_T." where this reads "measuring P0 and Pt.". The transmitted power is written Pt in the section's first paragraph and in Chapter 6.]

The emission spectrum for a hollow cathode lamp includes, in addition to the analyte's emission lines, additional emission lines from impurities present in the metallic cathode and from the filler gas. These additional lines are a potential source of stray radiation that could result in an instrumental deviation from Beer’s law. The monochromator’s slit width is set as wide as possible to improve the throughput of radiation and narrow enough to eliminate these sources of stray radiation.

## Optical Benches

Atomic absorption spectrometers are available using either a single-beam or a double-beam optical bench. Figure 9.2.3 shows a typical single-beam spectrometer, which consists of a hollow cathode lamp as a source, a flame, a grating monochromator, a detector (usually a photomultiplier tube), and a signal processor. Also included in this design is a chopper that periodically blocks light from the hollow cathode lamp from passing through the flame and reaching the detector. The purpose of the chopper is to provide a means for discriminating against the emission of light from the flame, which will otherwise contribute to the total amount of light that reaches the detector. As shown in Figure 9.2.3, when the chopper is closed, the only light reaching the detector is from the flame; emission from the flame and light from the lamp after it passes through the flame reach the detector when the chopper is open. The difference between the two signals gives the amount of light that reaches the detector after being absorbed by the sample. An alternative method that accomplishes the same thing is to modulate the amount of radiation emitted by the hollow cathode lamp.

[Note: corrected; the source prints "either a single-beam and a double-beam" where this reads "either a single-beam or a double-beam". A typing error; an instrument uses one design or the other.]

Figure 9.2.3: Typical single-beam optical bench for atomic absorption.
Typical single-beam optical bench for atomic absorption.

Figure 9.2.4 shows the typical arrangement of a double-beam instrument for atomic absorption spectroscopy. In this design, the chopper alternates between two optical paths: one in which light from the hollow cathode lamp bypasses the flame and that measures the total emission of radiation from the flame and the lamp, and one that passes the light from the hollow cathode lamp through the flame and that measures the emission of light from the flame and the amount of light from the hollow cathode lamp that is not absorbed by the sample. The difference between the two signals gives the amount of light that reaches the detector after being absorbed by the sample.

[Note: corrected; the source prints "passes the hollow light from the hollow cathode lamp" where this reads "passes the light from the hollow cathode lamp". A stray word.]

Figure 9.2.4: Typical double-beam optical bench for atomic absorption.
Typical double-beam optical bench for atomic absorption.
