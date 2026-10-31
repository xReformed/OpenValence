---
title: "18.1: Theory of Raman Spectroscopy"
book: "Instrumental Analysis (LibreTexts)"
chapter: "18: Raman Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/18%3A_Raman_Spectroscopy/18.01%3A_Theory_of_Raman_Spectroscopy"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

The blue color of the sky during the day and the red color of the sun at sunset are the result of the scattering of light by small particles of dust, by molecules of water vapor, and by other gases in the atmosphere. The efficiency of a photon's scattering depends on its wavelength. We see the sky as blue during the day because violet and blue light scatter to a greater extent than other, longer wavelengths of light. For the same reason, the sun appears red at sunset because red light scatters less efficiently and is more likely to pass through the atmosphere than other wavelengths of light. If we send a focused, monochromatic beam of radiation with a wavelength of λ through a medium of particles—whether solid particulates or individual molecules—that have dimensions < 1.5λ, then the radiation scatters in all directions. For example, infrared light in the near-IR with a wavelength of 700 nm will scatter from any particle whose longest dimension is less than 1,050 nm. Even in an otherwise transparent sample, scattering from molecules occurs.

[Note: corrected; the source prints "less than 1,300 nm" where this reads "less than 1,050 nm". Particles scatter when their dimensions are < 1.5λ, and 1.5 × 700 nm = 1,050 nm.]

## Raman Spectra

There are two general classes of scattering: elastic scattering and inelastic scattering. In elastic scattering, a photon is first absorbed by a particle and then emitted without a change in its energy (ΔE = 0); this is called Rayleigh scattering. With inelastic scattering, a photon is first absorbed by a particle and then emitted with a change in its energy (ΔE ≠ 0); this is called Raman scattering. A plot that shows the intensity of scattered radiation as a function of the scattered photon's energy, expressed as a change in the wavenumber, Δν̄, is called a Raman spectrum and values of Δν̄ are called Raman shifts.

Figure 18.1.1 shows a portion of the Raman spectrum for carbon tetrachloride and illustrates several important features. First, Rayleigh scattering produces an intense peak at Δν̄ = 0. Although the peak is intense, it carries no useful information as the absolute energy is just that for the source. Second, Raman scattering has two components—Stokes lines and the anti-Stokes lines—that have identical absolute shifts relative to the line for Rayleigh scattering, but that have different signs. The Stokes lines have positive values for Δν̄ and the anti-Stokes lines have negative values for Δν̄. Third, each of the Stokes lines is more intense than the corresponding anti-Stokes line. Fourth, because we measure the shift in a peak's wavenumber relative to the source radiation, the spectrum is independent of the source radiation.

Figure 18.1.1: The Raman spectrum for carbon tetrachloride, CCl4, showing the intense peak for Rayleigh scattering at Δν̄ = 0 and five lines each for Stokes and anti-Stokes scattering with Δν̄ = ±217.0 cm^−1, Δν̄ = ±313.5 cm^−1, Δν̄ = ±458.7 cm^−1, Δν̄ = ±761.7 cm^−1, and Δν̄ = ±790.4 cm^−1. The values for these lines are from NIST; the spectrum itself is simulated.
The Raman spectrum for carbon tetrachloride.

### Note

The energy—and, thus, the wavenumber—of a photon that experiences Stokes scattering is less than the energy—and, thus, the wavenumber—of the source radiation, which begs the question of why a Stokes shift is reported as a positive value instead of a negative value. Although you will find most Raman spectra with positive values for the Stokes shift, you also will find examples where Stokes shifts are reported with negative values. Because the Stokes lines are more intense than the anti-Stokes lines, and, therefore, more useful, and because their respective shifts result from the same changes in vibrational energy states that we find in IR spectroscopy, it is convenient to report the Stokes lines as positive values so that we can align a species's Raman and IR spectra. See the next two sections for additional details.

## Mechanism of Raman and Rayleigh Scattering

In Chapter 6 we examined the mechanism by which absorption and emission occur. In subsequent chapters we explored atomic absorption and atomic emission spectrometry, ultraviolet and visible molecular absorption spectrometry, molecular luminescence spectrometry, and infrared molecular absorption spectrometry. In each case we began by considering an energy level diagram that explains the origin of absorption and emission. Figure 18.1.2 provides an energy diagram that we can use to explain the origin of the lines that make up a Raman spectrum, such as the spectrum for carbon tetrachloride in Figure 18.1.1.

Figure 18.1.2: Energy level diagram that shows the origin of Rayleigh, Stokes, and anti-Stokes scattering. The thickness of the individual arrows provides a sense of the relative number of photons absorbed or emitted—the thicker the arrow, the greater the number of photons—although the individual thicknesses are not to scale.
Energy level diagram that shows the origin of Rayleigh, Stokes, and anti-Stokes scattering.

The first thing to note about the energy level diagram in Figure 18.1.2 is that, in addition to showing the ground electronic state and the first excited electronic state—each with three vibrational energy levels—it also shows a virtual electronic state, something we did not encounter with other methods (see, for example, the energy diagram for UV and IR molecular absorption spectrometry in Figure 6.3.5). The ground and the first excited electronic states are quantized, which means that absorption cannot happen if the source's energy does not match exactly the change in energy between the two electronic states. The energy of an emitted photon also is fixed by the difference in the energy of the two electronic states. A virtual electronic state, however, is not quantized and is determined by the energy of the source radiation. The source of radiation, therefore, does not need to match a particular change in energy.

[Note: corrected; the source prints "in Figure 6.4.2" where this reads "in Figure 6.3.5". Figure 6.4.2 is the emission spectrum of coumarin 343; the energy level diagram for UV/Vis and IR absorption is Figure 6.3.5.]

Absorption of a photon of source radiation moves the analyte from the ground electronic state to a virtual electronic state without a change in vibrational energy state, as seen by the two arrows at the far left of the diagram. Because the ground vibrational energy state, ν0, is more populated than the vibrational energy state, ν1, more of the analyte ends up in a virtual electronic state's lowest vibrational energy than in a higher vibrational energy state, which is shown here by the relative thickness of the two arrows.

Once in a virtual electronic state, the analyte can return to the ground electronic state in one of three ways. It can do so without a change in the vibrational energy level. In this case, the energy of absorption and the energy of emission are the same and ΔE = 0 and Δν̄ = 0. This is Rayleigh scattering and, as suggested by the combined thickness of the two arrows in Figure 18.1.2, it is the most important mechanism of relaxation.

[Note: corrected; the source prints "the ground excited state" where this reads "the ground electronic state". The analyte returns from the virtual state to the ground electronic state, as Figure 18.1.2 shows.]

When relaxation includes a change in the vibrational energy level, the result is an absolute change in energy equivalent to the difference in energy, ΔE, between adjacent vibrational energy levels. For Stokes scattering, relaxation is to a higher vibrational energy level, such as ν0 → ν1 and, for anti-Stokes scattering, relaxation to a lower vibrational energy level, such as ν1 → ν0. As suggested by the thickness of the lines for Stokes and anti-Stokes scattering in Figure 18.1.2, the Stokes lines are more intense than the anti-Stokes lines because they begin in a more heavily populated vibrational energy state.

[Note: corrected; the source prints "a more heavily populated excited state" where this reads "a more heavily populated vibrational energy state". Stokes scattering begins in the ground vibrational state, ν0, which the text above says is more populated than ν1; neither begins in an excited state.]

## Relationship Between IR and Raman Spectra

One important feature of Figure 18.1.2 is that the transition that gives rise to a particular Stokes line or anti-Stokes line is the same transition that will give rise to a corresponding IR band. If the selection rules for these transitions are the same for a particular species, then we expect that its IR spectrum and its Raman spectrum will have peaks at the same (or similar) values of ν̄ and Δν̄ for its fundamental vibrations; however, as we see in Table 18.1.1 for carbon tetrachloride, CCl4, there are five fundamental vibrations in its Raman spectrum, but just three in its IR spectrum.

Table 18.1.1: Fundamental Vibrational Energies for CCl4 (values from NIST).

| Infrared (ν̄, cm^–1) | Raman (Δν̄, cm^–1) |
| --- | --- |
| — | 217.0 (l) |
| 309.9 (l) weak | 313.5 (l) |
| — | 458.7 (l) |
| 768 (g); very strong | 761.7 (l) |
| 789 (g); very strong | 790.4 (l) |
| The designations (g) and (l) indicate the sample's phase where (g) is gas phase and (l) is liquid phase. The designations of weak and very strong for the IR peaks indicates the relative extent of absorption: very strong means a relatively small %T (and a strong absorbance) and weak means a relatively large %T (and a weak absorbance). See Figure 18.1.1 for the relative amount of scattering in the Raman spectrum for CCl4. |  |

In Chapter 16 we learned that in IR spectroscopy a compound's fundamental vibrational energy is active—that is, we see a peak in its IR spectrum—only if the corresponding stretch or bend results in a change in the compound's dipole moment. For Raman spectroscopy, a compound's fundamental vibrational energy is active only if the corresponding stretch or bend results in a change in the polarizability of its electrons. Polarizability essentially is a measure of how easy it is to distort a compound's electron cloud by applying an external electric field, such as when a photon from the source is absorbed; in general, polarizability increases when a stretching or bending motion increases the compound's volume as the electrons are then spread over a greater amount of space.

Figure 18.1.3 shows the four stretching and bending modes for CCl4. The stretching motion in (a), in which all four C–Cl bond lengths increase and decrease together, means the molecule's volume increases and decreases; thus, this vibrational mode is Raman active. The symmetry of the stretching motion, however, means there is no change in the molecule's dipole moment and the vibrational mode is IR inactive. The asymmetric stretch in (b), on the other hand, is both IR and Raman active. The bending motion in (c) results in the molecule becoming more or less compact in size, and is Raman active; the symmetry of the scissoring motions, however, means that the vibrational mode is IR inactive. The bending motions in (d) are both IR and Raman active.

Figure 18.1.3: The four fundamental types of vibrational motions for CCl4. The molecule has a tetrahedral shape. The black arrows show the direction of movement of the individual atoms. A molecule of CCl4 has 3 × 5 − 6 = 15 − 6 = 9 vibrational modes. The bending motion in (d) and the stretching motion in (b) are triply degenerate, the bending motion in (c) is doubly degenerate, and the stretching motion in (a) is singly degenerate; this accounts for the nine possible vibrational modes. The asymmetric stretching motion in (b) gives rise to a split peak for reasons we will not consider here.
The four fundamental types of vibrational motions for carbon tetrachloride.

In general, symmetric stretching and bending modes result in relatively strong Raman scattering peaks, but no absorption in the IR, while asymmetric stretching and bending modes result in both IR and Raman peaks. As a result, IR and Raman are complementary techniques.

[Note: corrected; the source prints "while symmetric stretching" where this reads "while asymmetric stretching". The sentence contrasts the two kinds of mode; as with CCl4's modes (b) and (d), it is the asymmetric ones that are both IR and Raman active.]

## Raman Depolarization Ratios

If the source of electromagnetic radiation is plane-polarized, then it is possible to collect a Raman spectrum using light scattered in a plane that is parallel to the source and, separately, in a plane that is perpendicular to the source. The ratio of a line's intensity of scattering in the perpendicular spectrum, I_⊥, to the intensity of scattering in the parallel spectrum, I_||, is called the depolarization ratio, p.

p = (I_⊥)/(I_||)

A Raman line that originates from a vibrational mode that does not change the molecule's shape will result in a depolarization ratio close to zero and an absence of the line in the perpendicular spectrum. Figure 18.1.4 shows the Raman spectrum when collecting data parallel (top) and perpendicular (bottom) to the light source. The absence of the peak at 458.7 cm^–1 in the perpendicular spectrum confirms that this is the symmetric stretch illustrated in Figure 18.1.3a.

[Note: corrected; the source prints "the molecules shape" where this reads "the molecule's shape". A missing apostrophe.]

Figure 18.1.4: Raman spectrum for CCl4 measured (top) parallel to the plane-polarized light source and (bottom) perpendicular to the plane-polarized source. The dashed red line shows the position of the symmetric stretch at 458.7 cm^–1; the absence of this peak in the perpendicular spectrum—the depolarization ratio, p is 0.005—confirms that this is the symmetric stretch. The remaining peaks have depolarization ratios of 0.75. The slope of increasing intensity below 200 cm^–1 is from the Rayleigh scattering peak. The values for these lines are from NIST; the spectrum itself is simulated.
Raman spectrum for carbon tetrachloride measured (top) parallel to the plane-polarized light source and (bottom) perpendicular to the plane-polarized source.
