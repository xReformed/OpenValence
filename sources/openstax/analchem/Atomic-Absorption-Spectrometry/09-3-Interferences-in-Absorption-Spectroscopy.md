---
title: "9.3: Interferences in Absorption Spectroscopy"
book: "Instrumental Analysis (LibreTexts)"
chapter: "9: Atomic Absorption Spectrometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/09%3A_Atomic_Absorption_and_Atomic_Fluorescence_Spectrometry/9.03%3A_Interferences_in_Absorption_Spectroscopy"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

In describing the optical benches for atomic absorption spectroscopy, we noted the need to modulate the radiation from the source in order to discriminate against emission of radiation from the flame. In this section we consider additional sources of interference and discuss ways to compensate for them.

## Spectral Interferences

A spectral interference occurs when an analyte’s absorption line overlaps with an interferent’s absorption line or band. Because atomic absorption lines are so narrow, the overlap of two such lines seldom is a problem. On the other hand, a molecule’s broad absorption band or the scattering of source radiation is a potentially serious spectral interference.

An important consideration when using a flame as an atomization source is its effect on the measured absorbance. Among the products of combustion are molecular species that exhibit broad absorption bands and particulates that scatter radiation from the source. If we fail to compensate for these spectral interferences, then the intensity of transmitted radiation is smaller than expected. The result is an apparent increase in the sample’s absorbance. Fortunately, absorption and scattering of radiation by the flame are corrected by analyzing a blank that does not contain the sample.

Spectral interferences also occur when components of the sample’s matrix other than the analyte react to form molecular species, such as oxides and hydroxides. The resulting absorption and scattering constitutes the sample’s background and may present a significant problem, particularly at wavelengths below 300 nm where the scattering of radiation becomes more important. If we know the composition of the sample’s matrix, then we can prepare our samples using an identical matrix. In this case the background absorption is the same for both the samples and the standards. Alternatively, if the background is due to a known matrix component, then we can add that component in excess to all samples and standards so that the contribution of the naturally occurring interferent is insignificant. Finally, many interferences due to the sample’s matrix are eliminated by increasing the atomization temperature. For example, switching to a higher temperature flame helps prevent the formation of interfering oxides and hydroxides.

[Note: corrected; the source prints "helps prevents the formation" where this reads "helps prevent the formation". A typo: "helps" takes the bare infinitive.]

If the identity of the matrix interference is unknown, or if it is not possible to adjust the flame or furnace conditions to eliminate the interference, then we must find another method to compensate for the background interference. Several methods have been developed to compensate for matrix interferences, and most atomic absorption spectrophotometers include one or more of these methods.

One of the most common methods for background correction is to use a continuum source, such as a D2 lamp. Because a D2 lamp is a continuum source, absorbance of its radiation by the analyte’s narrow absorption line is negligible. Only the background, therefore, absorbs radiation from the D2 lamp. Both the analyte and the background, on the other hand, absorb the hollow cathode’s radiation. Subtracting the absorbance for the D2 lamp from that for the hollow cathode lamp gives a corrected absorbance that compensates for the background interference. Although this method of background correction is effective, it does assume that the background absorbance is constant over the range of wavelengths passed by the monochromator. If this is not true, then subtracting the two absorbances underestimates or overestimates the background. A typical optical arrangement is shown in Figure 9.3.1.

Figure 9.3.1: Illustration showing a modification to the optical bench to allow for background correction using a continuous source, such as a D2-lamp. The chopper alternates between allowing light from the hollow cathode lamp and light from the D2-lamp to pass through the flame and reach the detector.
Illustration showing a modification to the optical bench to allow for background correction using a continuous source.

Another approach to removing the background is to take advantage of the Zeeman effect. The basis of the technique is outlined in Figure 9.3.2 and described below in more detail. In the absence of an applied magnetic field—B = 0, where B is the strength of the magnetic field—a p → d absorbance by the analyte takes place between two well-defined energy levels and yields a single well-defined absorption line, as seen on the left side of panel (a). When a magnetic field is applied, B > 0, the three equal energy p-orbitals split into three closely spaced energy levels and the five equal energy d-orbitals split into five closely spaced energy levels. The allowed transitions between these energy levels of ΔMl = 0, ±1 yields three well-defined absorption lines, as seen on the right-side of panel (a), the central one of which (ΔMl = 0) is at the same wavelength as the absorption line in the absence of the applied magnetic field. This central band is the only wavelength at which the analyte absorbs.

As we see in Figure 9.3.2b, c, we apply a magnetic field to the instrument's electrothermal atomizer and place a rotating polarizer between it and the hollow cathode lamp. When the rotating polarizer is in one position, radiation from the hollow cathode light is absorbed only by the central absorption line, giving a measure of absorption by both the background and the analyte. When the rotating polarizer is in the other position, radiation from the hollow cathode lamp is absorbed only by the two outside lines, providing a measure of absorption by the background only. The difference in these two absorption values is a function of the analyte's concentration.

[Note: corrected; the source prints "analyte. when the rotating" where this reads "analyte. When the rotating". A typo: the sentence starts with a lower-case letter.]

Figure 9.3.2: Illustration of using the Zeeman effect to compensate for background absorption when using an electrothermal atomizer: panel (a) explains the origin of the Zeeman effect; panel (b) shows the modification to the instrument; and panel (c) shows the resulting absorption lines. See the text for more details.
Illustration of using the Zeeman effect to compensate for background absorption when using an electrothermal atomizer.

[Note: corrected; the source prints "origin of the Zeemen effect" where this reads "origin of the Zeeman effect". The effect is named after Pieter Zeeman, as the rest of the section spells it.]

A third method for compensating for background absorption is to take advantage of what happens to the emission intensity of a hollow cathode lamp when it is operated at a high current. As seen in Figure 9.3.3, when using a high current the emission band becomes significantly broader than when using a normal (low) current and, at the analytical wavelength, the emission intensity from the lamp decreases due to self-absorption, a process in which the ground state atoms in the hollow cathode lamp absorb photons emitted by the excited state atoms in the hollow cathode lamp. When using a low current we measure absorption from both the analyte and the background; when using a high current, absorption is due almost exclusively to the background. This approach is called Smith-Hieftje background correction.

[Note: corrected; the source prints "the emission band become significantly" where this reads "the emission band becomes significantly"; the source prints "Smith-Hieftje background corrections." where this reads "Smith-Hieftje background correction.". Typos: the verb agrees with "band", and the method's name is singular, as in the figure caption.]

Figure 9.3.3: Illustration showing the basis of Smith-Hieftje background correction.
Illustration showing the basis of Smith-Hieftje background correction.

[Note: corrected; the source prints "Figure 9.3.1: Illustration showing the basis" where this reads "Figure 9.3.3: Illustration showing the basis". This is the section's third figure, which the text cites as Figure 9.3.3; Figure 9.3.1 is the D2-lamp optical bench.]

## Chemical Interferences

The quantitative analysis of some elements is complicated by chemical interferences that occur during atomization. The most common chemical interferences are the formation of nonvolatile compounds that contain the analyte and ionization of the analyte.

One example of the formation of a nonvolatile compound is the effect of PO4^3− or Al^3+ on the flame atomic absorption analysis of Ca^2+. In one study, for example, adding 100 ppm Al^3+ to a solution of 5 ppm Ca^2+ decreased calcium ion’s absorbance from 0.50 to 0.14, while adding 500 ppm PO4^3− to a similar solution of Ca^2+ decreased the absorbance from 0.50 to 0.38. These interferences are attributed to the formation of nonvolatile particles of Ca3(PO4)2 and an Al–Ca–O oxide [Hosking, J. W.; Snell, N. B.; Sturman, B. T. J. Chem. Educ. 1977, 54, 128–130].

When using flame atomization, we can minimize the formation of non-volatile compounds by increasing the flame’s temperature by changing the fuel-to-oxidant ratio or by switching to a different combination of fuel and oxidant. Another approach is to add a releasing agent or a protecting agent to the sample. A releasing agent is a species that reacts preferentially with the interferent, releasing the analyte during atomization. For example, Sr^2+ and La^3+ serve as releasing agents for the analysis of Ca^2+ in the presence of PO4^3− or Al^3+. Adding 2000 ppm SrCl2 to the Ca^2+/ PO4^3− and to the Ca^2+/Al^3+ mixtures described in the previous paragraph increased the absorbance to 0.48. A protecting agent reacts with the analyte to form a stable volatile complex. Adding 1% w/w EDTA to the Ca^2+/ PO4^3− solution described in the previous paragraph increased the absorbance to 0.52.

An ionization interference occurs when thermal energy from the flame or the electrothermal atomizer is sufficient to ionize the analyte

M(g) ⇌ M^+(g) + e^−

[Note: corrected; the source prints "M(s) ⇌ M^+(aq) + e^−" where this reads "M(g) ⇌ M^+(g) + e^−". Ionization interference happens to free gas-phase atoms in the flame or electrothermal atomizer, not to a solid giving an aqueous ion.]

where M is the analyte. Because the absorption spectra for M and M^+ are different, the position of the equilibrium in reaction (10.1) affects the absorbance at wavelengths where M absorbs. To limit ionization we add a high concentration of an ionization suppressor, which is a species that ionizes more easily than the analyte. If the ionization suppressor's concentration is sufficient, then the increased concentration of electrons in the flame pushes reaction (10.1) to the left, preventing the analyte’s ionization. Potassium and cesium frequently are used as an ionization suppressor because of their low ionization energy.
