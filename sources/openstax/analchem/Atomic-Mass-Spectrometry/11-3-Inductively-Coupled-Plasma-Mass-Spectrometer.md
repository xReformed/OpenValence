---
title: "11.3: Inductively Coupled Plasma Mass Spectrometer"
book: "Instrumental Analysis (LibreTexts)"
chapter: "11: Atomic Mass Spectrometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/11%3A_Atomic_Mass_Spectrometry/11.03%3A_Inductively_Coupled_Plasma_Mass_Spectrometer"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

In Chapter 10 we introduced the inductively coupled plasma (ICP) as a source for atomic emission. The plasma in ICP is formed by ionizing a flowing stream of argon gas, producing argon ions and electrons. The sample is introduced into the plasma where the high operating temperature of 6000–8000 K is sufficient to atomize and ionize the sample. In optical ICP we measure the emission of photons from the atoms and ions that are in excited states. In ICP-MS we use the plasma as a source of ions that we can send to a mass spectrometer for analysis.

## Instrumentation for ICP-MS

An ICP torch operates at room pressure and at an elevated temperature, and a mass spectrometer, as noted in Section 11.2, operates under a vacuum and at room temperature. This difference in pressure and temperature means that a coupling together of these two instruments requires an interface that can bring the pressure and temperature in line with the demands of the mass spectrometer. Figure 11.3.1 provides a schematic diagram of a typical ICP-MS instrument with the ICP torch on the right and the mass spectrometer's quadrupole mass analyzer and a continuous electron multiplier on the left. In between the two is a two-stage interface. Note that none of the components in Figure 11.3.1 are drawn to scale.

[Note: corrected; the source prints "these two instrument requires an interface than can bring the pressure and temprature" where this reads "these two instruments requires an interface that can bring the pressure and temperature". Typos: the plural "instruments", "that" for "than", and the misspelled "temprature".]

Figure 11.3.1: Schematic diagram of an instrument for an inductively coupled plasma mass spectrometer (ICP-MS), showing the torch and the sample nebulizer that make up the ICP on the right, and the mass analyzer and the transducer that make up the MS on the left. Also shown is the interface between the two. The first stage of the interface (1) samples the plasma from the ICP torch and then further reduces the number of particles that are passed along to the second stage (2) a set of ion lenses are used to remove electrons, neutral species, and photons and to focus the ion beam onto the quadrupole.
Schematic diagram of an instrument for an inductively coupled plasma mass spectrometer (ICP-MS).

The first stage of the interface consists of two cone-shaped openings: a sampler cone and a skimmer cone. The hot plasma from the ICP torch enters the first stage of the interface through the sampler cone, which is a pin-hole with a diameter of approximately 1 mm. Samples in solution form are drawn directly into the ICP torch using a nebulizer. Solid samples are vaporized using a laser (a process called laser ablation) and the vapor drawn directly into the ICP torch.

A pump is used to drop the pressure in the first stage to approximately 1 torr. The expansion of the plasma as it enters the first stage results in some cooling of the plasma. The skimmer cone allows a small portion of the plasma in the first stage to pass into the second stage, which is held at the mass spectrometer's operating pressure of approximately 10^–5 torr. A series of ion lenses are used to narrow the conical dispersion of the plasma, to isolate positive ions from electrons, neutral species, and photons—all of which will generate a signal if they reach the transducer—and to focus the ion beam onto the quadrupole's entrance.

## Atomic Mass Spectra and Interferences

Figure 11.3.2 shows an example of an ICP-MS spectrum for the analysis of a metal coating using laser ablation to volatilize the sample. The quadrupole mass analyzer operates over a mass-to-charge range of approximately 3 to 300 and can resolve lines that differ by ±1 m/z. Data are collected either by scanning the quadrupole to provide a survey spectrum of all ions generated in the plasma, as is the case in Figure 11.3.2, or by peak hopping in which we gather data for just a few discrete mass-to-charge ratios, adjusting the quadrupole so that it passes only a single mass-to-charge ratio and count the ions for a set period of time before moving to the next mass-to-charge ratio.

Figure 11.3.2: Example of an ICP-MS spectrum of a metal coating using laser ablation to vaporize the sample before drawing it into the ICP torch. The intensity of ions is reported in kilocounts per second. The major peaks are identified by element. The data used to construct this figure were extrapolated from the source linked to here.
Example of an ICP-MS spectrum of a metal coating using laser ablation to vaporize the sample before drawing it into the ICP torch.

[Note: corrected; the source prints "kilocounts per seconds" where this reads "kilocounts per second". The unit is counts per second.]

### Spectroscopic Interferences

An ICP-MS spectrum is much simpler than the corresponding ICP atomic emission spectrum because each element in the latter has many emission lines and because the plasma itself has many emission lines. Still, an ICP-MS is not free from interferences, the two most important of which are isobaric ions and polyatomic ions.

Isobaric Ions. Iso- means same and -baric means weight; thus, isobaric means same weight and refers to two (or more) species that have—within the resolution of the mass spectrometer—identical weights and that both contribute to the same peak in the mass spectrum. The source of this interference is the existence of isotopes. For example, the most abundant ions for argon and for calcium are ^40Ar and ^40Ca, and, given the resolving power of a quadrupole mass analyzer, the two ions appear as a single peak at m/z = 40 even though the mass of ^40Ar is 39.962383 amu and the mass of ^40Ca is 39.962591 amu. We can correct for this interference because the second most abundant isotope of calcium, ^44Ca, does not share a m/z with argon (or with another element). Figure 11.3.3 shows the ICP-MS spectrum for a sample that contains calcium and argon, and Example 11.3.1 shows how we can use this spectrum to determine the contribution of each element.

Figure 11.3.3: ICP-MS spectrum for a mixture of calcium and argon. The peak at m/z = 40 includes contributions from both ^40Ca and ^40Ar. The other two peaks are for ^42Ca and for ^44Ca and do not include contributions from argon. The peaks for ^36Ar, ^38Ar, ^43Ca, ^46Ca, and ^48Ca are too small to appear as peaks in this spectrum.
ICP-MS spectrum for a mixture of calcium and argon.

### Example 11.3.1

For the spectrum in Figure 11.3.3, the intensity at m/z = 40 is 972.07 cps and the intensity at m/z = 44 is 18.77 cps. Given that the isotopic abundance of ^40Ca is 96.941% and the isotopic abundance of ^44Ca is 2.086%, what is the counts-per-second at m/z = 40 for Ca and for Ar.

[Note: corrected; the source prints "the istopic abundance" where this reads "the isotopic abundance". "Istopic" is a misspelling.]

**Solution**

Given that only ^44Ca contributes to the peak at m/z = 44 we can use the relative abundances of ^40Ca and ^44Ca to determine the expected contribution of ^40Ca to the total intensity at m/z = 40.

18.77 cps × 96.941/2.086 = 872.28 cps

Subtracting this result from the total intensity gives the intensity at m/z = 40 for argon as

972.07 cps−872.28 cps = 99.79 cps

<!-- end of example -->

Polyatomic Ions. Compensating for isobaric ions is relatively straightforward because we can rely on the known isotopic abundances of the elements. A more difficult problem is an interference between the isotope of an elemental analyte and a polyatomic ion that has the same mass. Such polyatomic ions may arise from the sample's matrix or from the plasma. For example, the ion ^40Ar^16O^+ has a mass-to-charge ratio of 56, which overlaps with peak for ^56Fe, the most abundant isotope of iron. Although we could choose to monitor iron at a different mass-to-charge ratio, we will lose sensitivity as we are using a less abundant isotope. Corrections can be made using the method outlined in Example 11.3.1, although it may require using multiple peaks, which increases the uncertainty of the final result.

### Matrix Effects

A matrix effect occurs when the sample's matrix affects the relationship between the signal and the concentration of the analyte. Matrix effects are common in ICP-MS and may lead to either a suppression or an enhancement in the signal. Although not always well understood, matrix effects likely result from how an easily ionizable element affects the ability to ionize other elements. Matrix matching, using the method of standard additions, or using an internal standard can help minimize matrix effects for quantitative work.

[Note: corrected; the source prints "result from how easily an ionizable element affects" where this reads "result from how an easily ionizable element affects". The matrix effect comes from easily ionizable elements in the matrix suppressing or enhancing the ionization of other elements; the source's word order misplaces "easily".]

## Applications of ICP-MS

ICP-MS finds application for analytes in a wide variety of matrices, including both solutions and solids. Solution samples with high concentrations of dissolved ions may present problems due to the deposition of the salts onto the sampler and skimmer cones, which reduces the size of the pinhole that provides entry into the interface between the ICP torch and the mass spectrometer. The use of laser ablation makes it possible to analyze surfaces—such as glasses, metals, and ceramics—without additional sample preparation.

[Note: corrected; the source prints "possible to analyzer surfaces" where this reads "possible to analyze surfaces". The verb is "analyze".]

Qualitative and Semiquantitative Applications. One of the strengths of ICP-MS is its ability to provide a survey scan, such as that in Figure 11.3.2, that allows for the identification of the elements present in a sample. Analysis of a single sample that contains known concentrations of these elements is suitable for providing a rough estimate of their concentration in the sample.

[Note: corrected; the source prints "such as that in Figure 11.3.1," where this reads "such as that in Figure 11.3.2,". Figure 11.3.1 is the instrument schematic; the survey spectrum is Figure 11.3.2.]

Quantitative Analysis. For a more accurate and precise quantitative analysis, one can prepare multiple external standards and prepare a calibration curve. Linearly across approximately six orders of magnitude with detection limits of less than 1 ppb. Including an internal standard in the external standards can help reduce matrix effects. The ideal internal standard will not produce isobaric ions and its primary ionization potential should be similar to that for the analyte; when working with several analytes, it may be necessary to choose a different internal standard for each analyte.

Isotope Ratios. An important advantage of ICP-MS over other analytical methods is its ability to monitor multiple isotopes for a single element.
