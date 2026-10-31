---
title: "19.4: Applications of Proton NMR"
book: "Instrumental Analysis (LibreTexts)"
chapter: "19: Nuclear Magnetic Resonance Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/19%3A_Nuclear_Magnetic_Resonance_Spectroscopy/19.04%3A_Applications_of_Proton_NMR"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

Proton (^1H) NMR finds use for both qualitative analyses and quantitative analyses; in this section we briefly consider each of these areas.

## Identification of Compounds

Proton NMR is an essential tool for the qualitative analysis of organic, inorganic, and biochemical compounds. Figure 19.4.1 provides a simple example that shows the relationship between structure and a ^1H NMR's peaks. The spectra in this figure are for a set of four simple organic molecules, each of which has a chain of three carbons and an oxygen: 1-propanol, CH3CH2CH2OH, 2-propanol, CH3CH(OH)CH3, propanal, CH3CH2CHO, and propanoic acid, CH3CH2COOH. The first two of these molecules are alcohols, the third is an aldehyde, and the last is an acid. The main spectrum runs from 0–14 ppm, with insets showing the spectra over a narrower range of 0–5 ppm.

Each of these molecules has a terminal –CH3 group that is the most upfield peak in its spectrum, appearing between 0.94 – 1.20 ppm. Each of these molecules has a hydrogen that either is bonded to an oxygen or a hydrogen bonded to the same carbon as the oxygen. The hydrogens in the –OH groups of the two alcohols have similar shifts of 2.16 ppm and 2.26 ppm, but the aldehyde hydrogen in the –CHO group and the acid hydrogen in –COOH are shifted further downfield appearing at 9.793 ppm and 11.73 ppm, respectively. The hydrogens in the two –CH2– groups of 1-propanol have very different shifts, with the one adjacent to the –OH group appearing more downfield at 3.582 ppm than the one next to the –CH3 group at 1.57 ppm. Not surprisingly, the –CH– hydrogen in 2-propanol, which is adjacent to the –OH group appears at 4.008 ppm.

[Note: corrected; the source prints "2-proponal" where this reads "2-propanol". A misspelling of the compound named earlier in the paragraph.]

Comparisons such as this make it possible to build tables of chemical shifts—see Table 19.2.1 in Chapter 19.2 for an example—that can help in determining the identity of the molecule giving rise to a particular NMR spectrum. As this receives extensive coverage in other courses, particularly courses in organic chemistry, we will not provide a more extensive coverage here.

[Note: corrected; the source prints "Comparisons such of this" where this reads "Comparisons such as this"; the source prints "the identify of the molecule" where this reads "the identity of the molecule". Two typos: "such as" and "identity".]

Figure 19.4.1: ^1H NMR spectra for 1-propanol, 2-propanol, propanal, and propanoic acid. The full spectra are shown using the scale at the bottom of each figure. The insets show close-ups of the NMR spectra from 0 – 5 ppm. The original data used to construct these spectra are found here. The spectrum for propanal was recorded on a 300 MHz instrument; the other three spectra were recorded on a 90 MHz instrument.
Proton NMR spectra for 1-propanol, 2-propanol, propanal, and propanoic acid.

[Note: corrected; the source prints "The full spectrum are shown" where this reads "The full spectra are shown". The figure shows four spectra, and the verb is plural.]

## Quantitative Analysis

A quantitative analysis requires a method of standardization, which for NMR usually makes use of an internal standard. A good internal standard should have high purity and should have a relatively simple NMR spectrum with peaks that do not overlap with the analyte or other species present in the sample. If we are interested in only the relative concentrations of the analyte and the internal standard, then we can use the following formula

(Ma)/(M_is) = (Ia)/(I_is) × (N_is)/(Na)

where M is the molar concentration of the analyte or internal standard, I is the intensity of the NMR peak for the analyte or internal standard, and N is the number of nuclei giving rise to the NMR peak for the analyte and the internal standard. Even if we don't know the exact concentration of the internal standard, if we know that its concentration is the same in all samples, then we can determine the relative concentration of analyte in a collection of samples.

If we are interested in determining the absolute concentration of analyte in a sample, then we must know the absolute concentration of the internal standard; when true, then Equation (quant1) becomes

[Note: corrected; the source prints "internal standared" where this reads "internal standard". A typo.]

Ma = (Ia)/(I_is) × (N_is)/(Na) × M_is

Determining the purity of an analyte, Pa, in a sample, we can use the equation

Pa = (Ia)/(I_is) × (N_is)/(Na) × (Ma)/(M_is) × (W_is)/(Wa) × P_is

where W is the weight of the internal standard or the sample that contains our analyte.

[Note: In Equation (quant3), Ma and M_is must be the molar masses of the analyte and the internal standard, not the molar concentrations that M stands for in Equations (quant1) and (quant2): moles from the peak ratio times molar mass gives the mass of analyte, and dividing by the sample's weight Wa gives its purity. The source does not say that M changes meaning.]
