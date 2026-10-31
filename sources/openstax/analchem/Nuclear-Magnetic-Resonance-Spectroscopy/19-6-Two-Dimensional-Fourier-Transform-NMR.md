---
title: "19.6: Two-Dimensional Fourier Transform NMR"
book: "Instrumental Analysis (LibreTexts)"
chapter: "19: Nuclear Magnetic Resonance Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/19%3A_Nuclear_Magnetic_Resonance_Spectroscopy/19.06%3A_Two-Dimensional_Fourier_Transform_NMR"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

The ^1H and ^13C spectra up to this point are shown in one dimension (1D), which is the frequency absorbed by the analyte's nuclei expressed in ppm. These spectra were acquired by applying a brief RF pulse to the sample, recording the resulting FID, and then using a Fourier transform to obtain the NMR spectrum. In addition to 1D experiments, there are a host of 2D experiments in which we apply a sequence of two or more pulses, recording the resulting FID after applying the last pulse. In this section we will consider one example of a 2D NMR experiment in some detail: ^1H – ^1H correlation spectroscopy, or ^1H – ^1H COSY.

Figure 19.6.1 shows the basic experimental details for the COSY experiment. The pulse train is shown in (a) and consists of a first pulse that is followed by a delay time, t1, in which the nuclear spins are allowed to precess and relax. This is followed by the application of a second pulse and the measurement of the resulting FID during the acquisition period, t2, that consists of n_t2 individual data points. The COSY experiment consists of a sequence of n_t1 individual pulse trains, each with a different t1. The result (b) is a matrix with n_t1 rows and n_t2 columns. To process the data, each row in this matrix is Fourier transformed, the resulting n_t1 × n_t2 matrix is transposed to a n_t2 × n_t1 matrix and then Fourier transformed again to give (c) a n_t2 × n_t2 matrix that shows the intensity of the signal for all possible combinations of applied frequencies.

Figure 19.6.1: Details of a COSY experiment: (a) the pulse sequence; (b) the data matrix; and (c) the COSY spectrum. See the text for additional details.
Details of a COSY experiment.

Figure 19.6.2 shows the ^1H – ^1H COSY spectrum for ethyl acetate. Instead of just annotating the two axes with numerical values of the frequencies, they are displayed by superimposing the 1D ^1H NMR spectrum for ethyl acetate in ppm. The points that fall on the diagonal line are just the three frequencies where ethyl acetate has ^1H peaks. Of more interest are the points that fall on either side of the diagonal line—these are called cross peaks—as these show pairs of hydrogens that are coupled (or correlated) to each other. The cross peaks in the COSY spectrum are symmetrical about the diagonal line and show the correlation between the hydrogens on the methyl carbon and the methylene carbon that are adjacent to each other (the ethyl part of ethyl acetate). The remaining methyl group is not coupled to the other hydrogens in the ethyl acetate, so there is no cross peak at the intersection of δ = 2.038 ppm and δ = 1.260 ppm. The information about coupling from cross peaks assists in interpreting complex ^1H NMR spectra.

[Note: corrected; the source prints "methyl carbon and and the methylene" where this reads "methyl carbon and the methylene"; the source prints "the other hydrogen's in the ethyl acetate" where this reads "the other hydrogens in the ethyl acetate". A doubled word, and a plural written with an apostrophe.]

Figure 19.6.2: The COSY spectrum for ethyl acetate. The original data used to create the two ^1H NMR spectra is available here and was obtained using a 300 MHz NMR. The COSY spectrum is simulated.
The COSY spectrum for ethyl acetate.

COSY is one example of a homonuclear 2D NMR experiment because it examines coupling between identical nuclei, such as ^1H in Figure 19.6.2. There are many other 2D NMR experiments, each of which uses a sequence of pulses—some that use two pulses, as in COSY, and others that use three or more pulses—and a data analysis algorithm. Table 19.6.1 provides details on some of these methods.

Table 19.6.1. Selected examples of 2D NMR experiments.

| method | information obtained from cross peaks |
| --- | --- |
| correlation spectroscopy (COSY) | coupling between two protons (^1H – ^1H) that are within three chemical bonds of each other |
| total correlation spectroscopy (TOCSY) | coupling between all protons (^1H) in the molecule |
| heteronuclear correlation spectroscopy (HETCOR) | coupling between a proton (^1H) and another nucleus, such as carbon (^1H – ^13C) or nitrogen (^1H – ^15N) |
| nuclear Overhauser and exchange spectroscopy (NOESY) | coupling between two protons (^1H – ^1H) that are within approximately 5 Å of each other |
| heteronuclear single quantum correlation (HSQC) | coupling between a proton (^1H) and another nucleus, such as carbon (^1H – ^13C) or nitrogen (^1H – ^15N) |
| heteronuclear multiple bond correlation spectroscopy (HMBC) | coupling between a proton and a carbon (^1H – ^13C) that are two or three bonds apart |
| incredible natural abundance double-quantum transfer (INADEQUATE) | coupling between adjacent carbon atoms (^13C – ^13C) |
| double quantum filtered correlation spectroscopy (DQF–COSY) | suppresses signals from water |

[Note: corrected; the source prints "nuclear overhauser and exchange" where this reads "nuclear Overhauser and exchange"; the source prints "heteronuclear multiple bond coherence spectroscopy (HMBC)" where this reads "heteronuclear multiple bond correlation spectroscopy (HMBC)". Overhauser is a proper name; the C in HMBC stands for "correlation", as in HSQC and COSY above it.]
