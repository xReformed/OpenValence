---
title: "19.5: Carbon-13 NMR"
book: "Instrumental Analysis (LibreTexts)"
chapter: "19: Nuclear Magnetic Resonance Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/19%3A_Nuclear_Magnetic_Resonance_Spectroscopy/19.05%3A_Carbon-13_NMR"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

The relatively slow development of instrumentation for ^13C NMR spectra is the result of its limited sensitivity compared to ^1H NMR. This difference in sensitivity is due to two key differences between the nuclei ^1H and ^13C: their relative abundances and their relative magnetogyric ratios. While ^1H comprises 99% of all hydrogen, ^13C accounts for just 1% of all carbon. The strength of an NMR signal also depends on the difference in energy, ΔE, between the ground state and the excited state, which is a function of the magnetogyric ratio, γ

ΔE = hν = (γhB0)/(2π)

[Note: corrected; the source prints "(γB0)/(2π)" where this reads "(γhB0)/(2π)". The energy gap is ΔE = γhB0/2π, as Section 19.1 derives; γB0/2π is the frequency ν, so hν cannot equal it.]

The greater the difference in energy, the greater the difference in the population between the ground and the excited states, and the greater the signal. The magnetogyric ratio, γ, for ^1H is 4 × greater than that for ^13C. As a result of these two factors, ^1H NMR is approximately 6400 × more sensitive than ^13C. The development of magnets with higher field strengths and the capabilities of signal averaging (see Chapter 5 on signals and noise) when using Fourier transforms to gather and analyze data, make ^13C feasible.

[Note: corrected; the source prints "more senstitive than" where this reads "more sensitive than". A typo.]

Figure 19.5.1 shows ^13C NMR spectra for three related molecules: p-nitrophenol, o-nitrophenol, and m-nitrophenol. There are three things to make note of from this figure. First, each spectrum consists of a set of peaks, each of which is a singlet, suggesting that no spin-spin coupling is taking place. Second, the number of peaks in each spectrum is the same as the number of unique types of carbon—four unique carbons for p-nitrophenol and six each for m-nitrophenol and o-nitrophenol—which suggests that chemical shifts in ^13C provide useful information about the environment of the carbon atoms and, therefore, the molecule's structure. And, third, unlike ^1H, there is no relationship between the intensity of a ^13C peak and the number of carbon atoms. This is particularly evident when comparing the intensity of the peaks for the carbon bonded to the –NO2 group and the carbon bonded to the –OH group, which are significantly less intense than the peaks for other carbons. We will consider each of these observations in the remainder of this section.

[Note: corrected; the source prints "shows ^13C NMR spectrum for three" where this reads "shows ^13C NMR spectra for three". The figure shows a spectrum for each of the three nitrophenols.]

Figure 19.5.1: ^13C NMR spectra for three nitrophenols. The original data used to construct these spectra are found here. The spectra were recorded on a 15 MHz instrument (with respect to ^13C, or 60 MHz with respect to ^1H).
Carbon-13 NMR spectra for three nitrophenols.

## Proton Decoupling

In ^13C NMR there is no coupling between adjacent carbon atoms because it is unlikely that both are ^13C, the only isotope of carbon that is NMR active (the odds that two adjacent carbons are both ^13C is 0.01 × 0.01, or 0.0001 or 0.010%). Coupling does take place between ^13C and ^1H when the hydrogen atoms are attached to the carbon atom. Such coupling follows the same N+1 rule as in ^1H NMR; thus, a quaternary carbon (R4C) appears as a singlet, a methine carbon (R3CH) appears as a doublet, a methylene carbon (R2CH2) appears as a triplet, and a methyl carbon (RCH3) appears as a quartet. Even with the extensive range of ppm values over which ^13C peaks appear—chemical shifts for ^13C spectra run from 250 – 0 ppm instead of 14 – 0 ppm for ^1H spectra—a compound with many different types of carbon atoms, each with 1 – 3 hydrogen atoms results in a complex spectrum. For this reason, ^13C NMR spectra are acquired in a way that prevents coupling between ^13C and ^1H. This is called proton decoupling.

[Note: corrected; the source prints "a quartenary carbon" where this reads "a quaternary carbon". A misspelling; the table below has "quaternary alkyl".]

The most common method of proton decoupling is to use a second RF generator to irradiate the sample with a broad-band of RF signals that spans the range of frequencies for the protons. As described earlier in Section 19.2, the effect is to saturate the proton's ground and excited states, which prevents the protons from absorbing energy and from coupling with each other and with the carbon atoms. The ^13C spectra in Figure 19.5.1 are examples of decoupled spectra.

[Note: corrected; the source prints "Section 19.3" where this reads "Section 19.2"; the source prints "with the carbons atoms" where this reads "with the carbon atoms". Decoupling by saturating a nucleus's ground and excited states is described in Section 19.2 (Figure 19.2.6); Section 19.3 does not discuss it. The second is a typo.]

## Qualitative Applications of ^13C NMR

Just as with ^1H NMR spectra, tables of chemical shifts for ^13C peaks aid in determining a molecule's structure. Table 19.5.1 provides ranges of chemical shifts for different types of carbon atom. A set of tables is available here.

[Note: corrected; the source prints "peaks aids in determining a molecules structure" where this reads "peaks aid in determining a molecule's structure". The verb agrees with "tables", and "molecule's" is possessive.]

Table 19.5.1. ^13C Shifts in ppm

| type of carbon atom | example | range of chemical shifts (ppm) |
| --- | --- | --- |
| primary alkyl | R-CH3 | 10 – 30 |
| secondary alkyl | R-CH2–R | 15 – 55 |
| tertiary alkyl | R3CH | 20 – 60 |
| quaternary alkyl | R4C | 30 – 40 |
| alkynyl | R–C≡C–H | 65 – 90 |
| alkenyl | R–C=C–H | 100 – 150 |
| aromatic | C6H6 | 110 – 170 |
| ester | R-C(=O)-O-R | 165 – 175 |
| amide | R-C(=O)-N-R2 | 165 – 175 |
| carboxylic acid | R–C(=O)–OH | 175 – 185 |
| aldehyde | R–C(=O)–H | 190 – 220 |
| ketone | R-C(=O)-R | 205 – 220 |
| attached to iodine | C-I | 0 – 40 |
| attached to bromine | C-Br | 25 – 65 |
| attached to chlorine | C-Cl | 35 – 80 |
| attached to oxygen | C-O | 40 – 80 |
| attached to nitrogen | C-N | 40 – 60 |

[Note: corrected; the source prints "| alkynl |" where this reads "| alkynyl |". A misspelling of "alkynyl", parallel to "alkenyl" in the next row.]

## Nuclear Overhauser Enhancement

The most intense peak in the ^13C NMR spectrum for m-nitrophenol (see Figure 19.5.1 above) is the carbon in the benzene ring labeled as position 4, with an intensity of 1000 (the intensity scale is normalized here to a maximum value of 1000, but for this section, let's take it as an absolute value). Because the spectrum was acquired with proton decoupling turned on, the peak for this carbon appears as a singlet. If we turn proton decoupling off, then we expect the peak to appear as a doublet as this carbon has one hydrogen attached to it. We might reasonably expect to find that each peak has an intensity of 500, giving a total intensity of 1000. The actual intensities of the peaks for this carbon, however, are smaller than expected. Put another way, when we turn proton decoupling on, the intensity of a ^13C line increases more than expected and the more hydrogens, the greater the effect. This is called nuclear Overhauser enhancement (NOE).

[Note: corrected; the source prints "nuclear overhauser enhancement" where this reads "nuclear Overhauser enhancement". The effect is named after Albert Overhauser, as in the section heading.]

NOE is the result of the relative populations of the ground and excited states. The technical details are more than we will consider here, but the extent of the total enhancement of the peak intensities is proportional to the ratio of the magnetogyric ratios of the irradiated nucleus (^1H) and the observed nucleus (^13C), which for a ^1H decoupled ^13C NMR results in a total enhancement of the intensity of approximately 200%. As magnetogyric ratios can be negative, as is the case for ^15N, a decoupled spectrum can result in less intense peaks. One important consequence of NOE, is that integrated peak areas are not proportional to the number of identical carbon atoms, which is a loss of information.

### Note

Although our focus in this chapter is on ^1H and ^13C NMR, other nuclei, such as ^31P, ^19F, and ^15N are useful for the study of chemically and biochemically important molecules.
