---
title: "19.2: Environmental Effects on NMR Spectra"
book: "Instrumental Analysis (LibreTexts)"
chapter: "19: Nuclear Magnetic Resonance Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/19%3A_Nuclear_Magnetic_Resonance_Spectroscopy/19.02%3A_Environmental_Effects_on_NMR_Spectra"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

In the previous section we showed that there is a relationship between the Larmor frequency for a nucleus, ν, its magnetogyric ratio, γ, and the primary applied magnetic field strength, B0

ν = (γB0)/(2π)

and we used this equation to show that the Larmor frequency for the ^1H nucleus in a magnetic field of B0 = 11.74 T is 500 MHz. If this is the only thing that determines the frequency where absorption takes place, then all compounds that contain hydrogens will yield a ^1H NMR spectrum with a single peak at the same frequency. If all spectra are identical, then NMR provides little in the way of useful information. The NMR spectrum for propane (CH3–CH2—CH3) in Figure 19.2.1 shows two clusters of peaks that give us confidence in the utility of NMR. In this case, it seems likely that the cluster of peaks between 250 Hz and 300 Hz, which have a greater total intensity, are for the six hydrogens in the two methyl groups (–CH3) and that the cluster of peaks around 400 Hz are due to the methylene group (–CH2–). In this section we will consider why the location of a nucleus within a molecule—what we call its environment—might affect the frequency at which it absorbs and why a particular absorption line might appear as a cluster of individual peaks instead of as a single peak.

Figure 19.2.1: ^1H NMR spectrum for propane. The original data used to construct this spectrum is here and was obtained on a 300 MHz instrument.
Proton NMR spectrum for propane.

## The NMR Spectrum's Scale

Before we consider how a nucleus's environment affects the frequencies at which it absorbs, let's take a moment to become familiar with the scale used to plot a NMR spectrum. The label on the x-axis of the NMR spectrum for propane in Figure 19.2.1 raises several questions that we will answer here.

### Why is the Scale Relative?

From Equation (env1) we see that the frequency at which a nucleus absorbs is a function of the magnet's field strength, B0. This means the frequency of a peak in an NMR spectrum depends on the value of B0. One complication is that instruments with identical nominal values for B0 likely will have slightly different actual values, which leads to small variations in the frequency at which a particular hydrogen absorbs on different instruments. We can overcome this problem by referencing a hydrogen's measured frequency to a reference compound that is set to a frequency of 0. The difference between the two frequencies should be the same on different instruments. For example, the most intense peak in the NMR spectrum for propane, Figure 19.2.1, has a frequency of 269.57 Hz when measured on an NMR with a nominal field strength of 300 MHz, which means that its frequency is 269.57 Hz greater than the reference, which is identified as TMS.

### What is TMS?

The reference compound is tetramethylsilane, TMS, which has the chemical formula of (CH3)4Si in which four methyl groups are in a tetrahedral arrangement about the central silicon. TMS has the advantage of having all of its hydrogens in the same environment, which yields a single peak. Its hydrogen atoms also absorbs at a low frequency that is well removed from the frequency at which most other hydrogen atoms absorb, which makes it easy to identify its peak in the NMR spectrum.

### How Can We Create a Universal Scale?

An additional complication with the spectrum in Figure 19.2.1 is that the frequency at which a particular hydrogen absorbs is different when using a 60 MHz NMR than it is when using a 300 MHz NMR, a consequence of Equation (env1). To create a single scale that is independent of B0 we divide the peak's frequency, relative to TMS, by B0, expressing both in Hz, and then report the result on a part-per-million scale by multiplying by 10^6. For example, the most intense peak in the NMR spectrum for propane, Figure 19.2.1, has a frequency of 269.57 Hz; the NMR on which the spectrum was recorded had a field strength of 300 MHz. On a parts-per-million scale, which we identify as delta, δ, the peak appears at

δ = (269.57 Hz)/(300 × 10^6 Hz) × 10^6 = 0.899 ppm

If we record the spectrum of propane on a 60 MHz instrument, then we expect that this peak to appear at 0.899 ppm, or a frequency of

ν = (0.899 ppm × (60 × 10^6 Hz))/(10^6) = 53.9 Hz

relative to TMS.

Most hydrogens have values of δ between 1 and 13. Figure 19.2.2 shows the ^1H NMR for propane using a ppm scale. The right side of the ppm scale is described as being upfield, with absorption occurring at a lower frequency, and with a smaller difference in energy, ΔE, between the ground state and the excited state. The left side of the ppm scale is described as being downfield, with absorption occurring at a higher frequency, and with a greater difference in energy, ΔE, between the ground state and the excited state.

Figure 19.2.2: ^1H NMR spectrum for propane expressed in ppm. The original data used to construct this spectrum is here and was obtained on a 300 MHz instrument. The peak for TMS is not shown.
Proton NMR spectrum for propane expressed in ppm.

## Types of Environmental Effects

The NMR spectrum for propane in Figure 19.2.2 shows two important features: the peaks for the two types of hydrogen in propane are shifted downfield relative to the reference and the methylene hydrogens are shifted further downfield than the methyl hydrogens. Both groups appear as clusters of peaks instead of as single peaks. In this section we consider the source of these two phenomena.

### Chemical Shifts

In the presence of a magnetic field, the electrons in a molecule circulate, generating a secondary magnetic field, Be, that usually, but not always, opposes the primary applied magnetic field, B_appl. The result is that the nucleus is partially shielded by the electrons such that the field it experiences, B0, usually is smaller than the applied field and

B0 = B_appl − Be

The greater the shielding, the smaller the value of B0 and the further to the right the peak appears in the NMR spectrum. For example, in the NMR spectrum for propane in Figure 19.2.2 the cluster of peaks for the –CH3 hydrogens centered at 0.899 ppm shows greater shielding than the cluster of peaks for the –CH2– hydrogens that is centered at 1.337 ppm.

[Note: corrected; the source prints "–CH2– hydogens" where this reads "–CH2– hydrogens". A typo.]

Chemical shifts are useful for determining structural information for molecules. A few examples are listed in the following table and more extensive tables here. Note that the range of chemical shifts for the methyl and the methylene groups encompass the values for propane in Figure 19.2.2.

Table 19.2.1. ^1 H Shifts in ppm

| type of hydrogen | example | range of chemical shifts (ppm) |
| --- | --- | --- |
| primary alkyl | R-CH3 | 0.7 – 1.3 |
| secondary alkyl | R-CH2–R | 1.2 – 1.6 |
| tertiary alkyl | R3CH | 1.4 – 1.8 |
| methyl ketone | R–C(=O)–CH3 | 2.0 – 2.4 |
| aromatic methyl | C6H5–CH3 | 2.4 – 2.7 |
| alkynyl | R–C≡C–H | 2.5 – 3.0 |
| alkyl halide (X = F, Cl, Br, I) | R2CH–X | 2.5 – 4.0 |
| alcohol | R3–C–OH | 2.5 – 5.0 |
| vinylic | R2–C=C(–R)–H | 4.5 – 6.5 |
| aryl | C6H5–H | 6.5 – 8.0 |
| aldehyde | R–C(=O)–H | 9.7 – 10.0 |
| carboxylic acid | R–C(=O)–OH | 11.0 – 12.0 |

[Note: corrected; the source prints "R2X–CH" where this reads "R2CH–X". The hydrogen in question is on the carbon bearing the halogen; a halogen atom cannot carry two R groups.]

### Spin-Spin Coupling

Chemical shifts are the result of shielding from the magnetic field associated with a molecule's circulating electrons. The splitting of a peak into a multiplet of peaks is the result of the shielding of one nucleus by the nuclei on adjacent atoms, and is called spin-spin coupling. Consider the NMR for propane in Figure 19.2.2, which consists of two clusters of peaks. The six hydrogens in the two methyl groups are sufficiently close to the two hydrogens in the methylene group that the spins of the methylene hydrogens can affect the frequency at which the methyl hydrogens absorb. Figure 19.2.3a shows how this works. Each of the two methylene hydrogens has a spin and those spins can both be aligned with the magnetic field, B0, both be aligned against B0, or two configurations in which one is aligned with B0 and one is aligned against B0, as seen by the arrows. When the two spins are aligned with B0, the frequency at which the methyl hydrogens absorb is shifted downfield, and when the two spins are aligned against B0, the frequency at which the methyl hydrogens absorb is shifted upfield; in the remaining two cases, there is no change in the frequency at which the methyl hydrogens absorb. The result, as seen in Figure 19.2.3a is a triplet of peaks in a 1:2:1 intensity ratio.

[Note: corrected; the source prints "no change in the ferquency at with" where this reads "no change in the frequency at which". Typos.]

The analysis for the effect of the six methyl hydrogens on the two methylene hydrogens is a bit more complex, but works in the same way. Figure 19.2.3b, for example, shows that there are 15 ways to arrange the spins of the six methyl hydrogens such that two are spin down and four are spin up. Figure 19.2.3c show the resulting NMR spectrum, which is a set of seven peaks in a 1:6:15:20:15:6:1 intensity ratio.

Figure 19.2.3: Illustration that shows the origin of spin-spin splitting: (a) The methyl hydrogens in propane split into three peaks by the spins of the two hydrogens on the adjacent methylene carbon; (b) The 15 different ways in which the six methyl hydrogens in propane have two nuclei that are spin down and four that are spin up; (c) The methylene hydrogens in propane are split into seven peaks by the six methyl hydrogens.
Illustration that shows the origin of spin-spin splitting.

[Note: corrected; the source prints "hydrogens in propone" where this reads "hydrogens in propane". A typo.]

Figure 19.2.4 provides the splitting pattern observed for nuclei with I = +1/2, such as ^1H. The pattern is defined by the coefficients of a binomial distribution—asking how many different ways you can get X outcomes in Y attempts is at the heart of a binomial distribution—this is easy to represent using Pascal's triangle—which shows us that for six equivalent nuclei we expect to find seven peaks with relative peak areas (or other measure of the signal) of 1:6:15:20:15:6:1. Note that the first and the last entry in any row is 1 and that all other entries in a row, as illustrated for the third entry in the seventh row, are the sum of the two entries in the row immediately above. The pattern also is known as the N + 1 rule as the N equivalent hydrogens will split the peak for an adjacent hydrogen into N + 1 peaks.

[Note: corrected; the source prints "also is know as" where this reads "also is known as". A typo.]

Figure 19.2.4: Pascal's triangle defines the splitting patterns in ^1H NMR. The annotation shows how the values in any row of Pascal's triangle are derived from the previous row.
Pascal's triangle defines the splitting patterns in proton NMR.

[Note: corrected; the source prints "Pascal's triangle give are derived" where this reads "Pascal's triangle are derived". A stray word.]

Figure 19.2.5 compares the experimental NMR for propane with its simulated spectrum based on spin-spin splitting and the 2:6 ratio of methylene hydrogens relative to methyl hydrogens. The overall agreement between the two spectra is pretty good. The splitting of the individual peaks is designated by the coupling constant, J, which is shown in Figure 19.2.5 for both the experimental and the calculated spectra. Note that the coupling constant is the same whether we are considering the effect of the methyl hydrogens on the methylene hydrogens, or the effect of the methylene hydrogens on the methyl hydrogens. Values of the coupling constant become smaller the greater the distance between the nuclei.

[Note: corrected; the source prints "simulatd" where this reads "simulated". A typo.]

Figure 19.2.5: Experimental and calculated ^1H NMR spectra for propane. The original data used to construct this spectrum is here and was obtained on a 300 MHz instrument. The peak for TMS is not shown.
Experimental and calculated proton NMR spectra for propane.

The treatment of spin-spin coupling above works well if the difference in the chemical shifts for the two nuclei is significantly greater than the magnitude of their coupling constant. When this is not true, the splitting patterns can become much more complex and often are difficult to interpret. There are a variety of ways to simplify spectra, one of which, decoupling, is outlined in Figure 19.2.6. The original spectrum (top) shows two doublets, suggesting that we have two individual nuclei that are coupled to each other. If we irradiate the nucleus on the right at its frequency, we can saturate its ground and excited states such that it ceases to absorb. As a result, the nucleus on the left no longer shows evidence of spin-spin coupling to the nucleus on the right (middle) and appears as a singlet. When we turn off the decoupler (bottom) the spin-spin coupling between the two nuclei returns more quickly than relaxation returns the signal for the nucleus on the right.

[Note: corrected; the source prints "a variety of to simplify" where this reads "a variety of ways to simplify". A missing word.]

Figure 19.2.6: Illustration showing the effect of decoupling on an NMR spectrum. See the text for additional details.
Illustration showing the effect of decoupling on an NMR spectrum.
