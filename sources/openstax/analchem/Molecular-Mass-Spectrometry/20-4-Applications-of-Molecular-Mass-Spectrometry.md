---
title: "20.4: Applications of Molecular Mass Spectrometry"
book: "Instrumental Analysis (LibreTexts)"
chapter: "20: Molecular Mass Spectrometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/20%3A_Molecular_Mass_Spectrometry/20.04%3A_Applications_of_Molecular_Mass_Spectrometry"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

## Qualitative Applications

In a qualitative analysis our interest is in determining the identity of a substance of interest to us. By itself, mass spectrometry is a powerful tool for determining the identity of pure compounds. The analysis of mixtures, however, is possible if we use a mass spectrometer as the detector for a separation technique, such as gas chromatography, or if we string together two or more mass analyzers in sequence.

### Identification of Pure Compounds

There are several ways to use a mass spectrum to identify a compound, including identifying its molecular weight, using isotopic ratios, examining fragmentation patterns, and by searching through data bases.

Using Molecular Weight Information. A molecular ion peak, M^(+•), when it is present, a [M + H]^+ peak or a [M – H]^+ peak, provides information about the compound's molecular weight. When using a low resolution mass analyzer, this may be sufficient to distinguish between molecular ions with, for example, a nominal mass of 95 amu and a nominal mass of 96 amu, but insufficient to distinguish between molecular ions with a more precise mass of 96.0939 amu and 96.0575 amu. When using a high resolution mass analyzer, the difference between the last pair of molecular ions may be feasible.

[Note: corrected; the source prints "a more precise mass of 96.0399 amu" where this reads "a more precise mass of 96.0939 amu". The pair is the two formulas with nominal mass 96 compared in the next paragraph: C6H8O is 96.0575 and C7H12 is 7(12.0000) + 12(1.00783) = 96.0939; the source transposes two digits.]

Using Isotopic Ratios. The molecule cycloheptene has the formula C7H12 and a nominal mass of 96 amu, and the molecule cyclohexenone has the formula C6H8O and a nominal mass of 96 amu. Although both molecules will produce a molecular ion with the same nominal mass-to-charge ratio, each will also have a peak with a nominal mass of M + 1 due to the presence of isotopes of carbon, hydrogen, and oxygen. Because cycloheptene and cyclohexenone have different chemical formulas, the relative heights of their M + 1 peaks are different. Here is how we can work this out.

For every 100 atoms of ^12C there are 1.08 atoms of ^13C (that is, 1.08% of the carbon atoms are ^13C), for every 100 atoms of ^1H there are 0.015 atoms of ^2H, and for every 100 atoms of ^16O there are 0.04 atoms of ^17O. For cycloheptene, this means that the relative height of its M + 1 peak to its M peak is

(7 × 1.08) + (12 × 0.015) = 7.74

and for cyclohexenone we have

(6 × 1.08) + (8 × 0.015) + (1 × 0.04) = 6.64

Here we see that a careful examination of the relative height of the M + 1 peak provides a way to distinguish between C7H12 and C6H8O even though they have the same nominal masses. On-line calculators are available—this link provides one example—that you can use to calculate the full isotopic abundance patterns, including M + 2, M + 3, and other peaks. Isotopic patterns are particularly useful for identifying the presence of chlorine and bromine in a molecule because each has one isotope with a significant abundance: for chlorine, ^37Cl has an abundance of 32.5% relative to ^35Cl, and for bromine, ^81Br has an abundance of 98.0% of ^79Br.

Using Fragmentation Patterns. Figure 20.4.1 shows the mass spectrum of p-nitrophenol, which we first considered in Section 20.1. A molecule's mass spectrum is unique and contains information that we can use to deduce its structure. Interpretation of a mass spectrum relies on identifying possible sources for the loss of mass, such as a Δm of 30 amu corresponding to the loss of NO, or a Δm of 46 amu corresponding to the loss of NO2. Some mass-to-charge ratios are recognized as evidence for a particular ion, such as C5H5^+ at a mass-to-charge ratio of 65. The interpretation of fragmentation patterns is covered elsewhere in the curriculum, particularly in organic chemistry, and is not given more consideration here.

[Note: corrected; the source prints "such as the a Δm of 30 amu" where this reads "such as a Δm of 30 amu". A stray article.]

Figure 20.4.1: Mass spectrum of p-nitrophenol.
Mass spectrum of p-nitrophenol.

Using Computer Searching. Large databases of mass spectra are available (see here for a source from NIST). A peak table of mass-to-charge ratios and peak intensities for a sample is entered into an algorithm that searches the database and identifies the most likely matches.

### Analysis of Mixtures Using MS as a Detector for a GC or LC Separation

Mass spectrometry is a powerful analytical technique when the sample we are analyzing is pure (or if impurities are of sufficiently low concentration that they have little effect on the mass spectrum). For a mixture of two or more analytes, the interpretation of the mass spectrum is difficult, if not impossible. To analyze such a mixture, we need a means of separating the analytes from each other. One approach is to interface a mass spectrometer to a gas chromatograph or a liquid chromatograph. The GC, or LC separates the mixture into its component parts with the mass spectrometer serving as the detector. See Chapter 27 and Chapter 28 for further details about GC-MS and LC-MS.

### Analysis of Mixtures Using Tandem Mass Spectrometry

Another approach to working with a complex sample is to use two or more mass analyzers in what is called tandem mass spectrometry. For example, if we place three quadrupole mass analyzers in a sequence, we can use a soft ionization source to generate mostly molecular ions of the form [M + H]^+ for each of the sample's analytes, and then let the first quadrupole separate these molecular ions by the differences in their mass-to-charge ratio. The [M + H]^+ molecular ions for one of the analytes is then selectively passed into the second quadrupole where it is allowed to undergo fragmentation by collision with a gas, such as He. Finally, these fragment ions are passed along to the third quadrupole where the mass spectrum is obtained. By sequentially passing each of the molecular ions from the first quadrupole through the second and third quadrupoles, we are able to obtain mass spectra for each molecule in the mixture.

## Quantitative Applications

As a detector for other instrumental methods, such as gas chromatography and liquid chromatography, mass spectrometry provides for a quantitative analysis by monitoring either the total ion count or by monitoring ions of a single mass-to-charge ratio, which is known as selective ion monitoring. As an independent method for determining an analyte's concentration, mass spectrometry is less attractive due to the difficulty of controlling the amount of sample or standard introduced into the instrument and the effect of the sample's matrix on fragmentation. The use of an internal standard improves precision and accuracy.

[Note: corrected; the source prints "As an Independent method" where this reads "As an independent method"; the source prints "and the affect of the sample's matrix" where this reads "and the effect of the sample's matrix". Typos.]
