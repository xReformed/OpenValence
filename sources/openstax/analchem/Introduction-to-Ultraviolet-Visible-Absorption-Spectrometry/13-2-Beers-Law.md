---
title: "13.2: Beer's Law"
book: "Instrumental Analysis (LibreTexts)"
chapter: "13: Introduction to Ultraviolet/Visible Absorption Spectrometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/13%3A_Introduction_to_Ultraviolet_Visible_Absorption_Spectrometry/13.02%3A_Beer's_Law"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

## Absorbance and Concentration

When monochromatic electromagnetic radiation passes through an infinitesimally thin layer of sample of thickness dx, it experiences a decrease in its power of dP (Figure 13.2.1).

Figure 13.2.1: Factors used to derive the Beer’s law.
Factors used to derive the Beer’s law.

This fractional decrease in power is proportional to the sample’s thickness and to the analyte’s concentration, C; thus

−dP/P = αCdx

where P is the power incident on the thin layer of sample and α is a proportionality constant. Integrating the left side of Equation (BL1) over the sample’s full thickness

−∫_(P=P0)^(P = PT) dP/P = αC∫_(x=0)^(x = b) dx

[Note: corrected; the source prints "P = Pt" where this reads "P = PT". The upper limit is the transmitted power, P_T, as in the result ln(P0/PT) = αbC on the next line.]

ln((P0)/(PT)) = αbC

converting from ln to log, and substituting into the equation relating transmittance to absorbance

A = −log T = −log((P_T)/(P0))

gives

A = abC

where a is the analyte’s absorptivity with units of cm^–1 conc^–1. If we express the concentration using molarity, then we replace a with the molar absorptivity, ε, which has units of cm^–1 M^–1.

A = εbC

The absorptivity and the molar absorptivity are proportional to the probability that the analyte absorbs a photon of a given energy. As a result, values for both a and ε depend on the wavelength of the absorbed photon.

### Example 13.2.1

A 5.00 × 10^−4 M solution of analyte is placed in a sample cell that has a pathlength of 1.00 cm. At a wavelength of 490 nm, the solution’s absorbance is 0.338. What is the analyte’s molar absorptivity at this wavelength?

**Solution**

Solving Equation (BL3) for ε and making appropriate substitutions gives

ε = A/bC = 0.338/((1.00 cm)(5.00 × 10^−4 M)) = 676 cm^−1 M^−1

### Exercise 13.2.1

A solution of the analyte from Example 13.2.1 has an absorbance of 0.228 in a 1.00-cm sample cell. What is the analyte’s concentration?

**Answer**

Making appropriate substitutions into Beer’s law

A = 0.228 = εbC = (676 M^−1 cm^−1)(1 cm)C

and solving for C gives a concentration of 3.37 × 10^−4 M.

Equation (BL2) and Equation (BL3), which establish the linear relationship between absorbance and concentration, are known as Beer’s law. Calibration curves based on Beer’s law are common in quantitative analyses.

As is often the case, the formulation of a law is more complicated than its name suggests. This is the case, for example, with Beer’s law, which also is known as the Beer-Lambert law or the Beer-Lambert-Bouguer law. Pierre Bouguer, in 1729, and Johann Lambert, in 1760, noted that the transmittance of light decreases exponentially with an increase in the sample’s thickness.

T ∝ e^−b

Later, in 1852, August Beer noted that the transmittance of light decreases exponentially as the concentration of the absorbing species increases.

T ∝ e^−C

Together, and when written in terms of absorbance instead of transmittance, these two relationships make up what we know as Beer’s law.

## Beer's Law and Multicomponent Samples

We can extend Beer’s law to a sample that contains several absorbing components. If there are no interactions between the components, then the individual absorbances, A_i, are additive. For a two-component mixture of analytes X and Y, the total absorbance, A_tot, is

[Note: corrected; the source prints "analyte’s X and Y" where this reads "analytes X and Y". The word is the plural, not a possessive.]

A_tot = AX + AY = εX bCX + εY bCY

Generalizing, the absorbance for a mixture of n components, A_mix, is

A_mix = Σ_(i=1)^n Ai = Σ_(i=1)^n εi bCi

## Limitations to Beer's Law

Beer’s law suggests that a plot of absorbance vs. concentration—we will call this a Beer’s law plot—is a straight line with a y-intercept of zero and a slope of ab or εb. In some cases a Beer’s law plot deviates from this ideal behavior (see Figure 13.2.2), and such deviations from linearity are divided into three categories: fundamental, chemical, and instrumental.

Figure 13.2.2: Plots of absorbance vs. concentration showing positive and negative deviations from the ideal Beer’s law relationship, which is a straight line.
Plots of absorbance vs. concentration showing positive and negative deviations from the ideal Beer’s law relationship.

### Fundamental Limitations to Beer's Law

Beer’s law is a limiting law that is valid only for low concentrations of analyte. There are two contributions to this fundamental limitation to Beer’s law. At higher concentrations the individual particles of analyte no longer are independent of each other. The resulting interaction between particles of analyte may change the analyte’s absorptivity. A second contribution is that an analyte’s absorptivity depends on the solution’s refractive index. Because a solution’s refractive index varies with the analyte’s concentration, values of a and ε may change. For sufficiently low concentrations of analyte, the refractive index essentially is constant and a Beer’s law plot is linear.

### Chemical Limitations to Beer's Law

A chemical deviation from Beer’s law may occur if the analyte is involved in an equilibrium reaction. Consider, for example, the weak acid, HA. To construct a Beer’s law plot we prepare a series of standard solutions—each of which contains a known total concentration of HA—and then measure each solution’s absorbance at the same wavelength. Because HA is a weak acid, it is in equilibrium with its conjugate weak base, A^–.

In the equations that follow, the conjugate weak base A^– is sometimes written as A as it is easy to mistake the symbol for anionic charge as a minus sign; thus, we will write CA instead of C_(A^−).

HA(aq) + H2O(l) ⇌ H3O^+(aq) + A^−(aq)

If both HA and A^– absorb at the selected wavelength, then Beer’s law is

A = ε_HA bC_HA + ε_A bC_A

Because the weak acid’s total concentration, C_total, is

C_total = C_HA + C_A

we can write the concentrations of HA and A^– as

C_HA = α_HA C_total

C_A = (1 − α_HA)C_total

where α_HA is the fraction of weak acid present as HA. Substituting Equation (BL6) and Equation (BL7) into Equation (BL5) and rearranging, gives

A = (ε_HA α_HA + ε_A − ε_A α_HA)bC_total

To obtain a linear Beer’s law plot, we must satisfy one of two conditions. If ε_HA and ε_A have the same value at the selected wavelength, then Equation (BL8) simplifies to

A = ε_A bC_total = ε_HA bC_total

Alternatively, if α_HA has the same value for all standard solutions, then each term within the parentheses of Equation (BL8) is constant—which we replace with k—and a linear calibration curve is obtained at any wavelength.

A = kbC_total

Because HA is a weak acid, the value of α_HA varies with pH. To hold α_HA constant we buffer each standard solution to the same pH. Depending on the relative values of ε_HA and ε_A, the calibration curve has a positive or a negative deviation from Beer’s law if we do not buffer the standards to the same pH.

[Note: corrected; the source prints "relative values of α_HA and α_A" where this reads "relative values of ε_HA and ε_A". In Equation (BL8), whether a changing α_HA raises or lowers the absorbance depends on whether HA or A^– absorbs more strongly, ε_HA or ε_A; there is no α_A in the derivation.]

### Instrumental Limitations to Beer's Law

There are two principal instrumental limitations to Beer’s law: stray radiation and polychromatic radiation.

[Note: corrected; the source prints "non-polychromatic radiation" where this reads "polychromatic radiation". The limitation discussed below is radiation that is not monochromatic, i.e. polychromatic.]

Stray radiation is the first contribution to instrumental deviations from Beer’s law. Stray radiation arises from imperfections in the wavelength selector that allow light to enter the instrument and to reach the detector without passing through the sample. Stray radiation adds an additional contribution, P_stray, to the radiant power that reaches the detector; thus

A = −log((P_T + P_stray)/(P0 + P_stray))

For a small concentration of analyte, P_stray is significantly smaller than P0 and P_T, and the absorbance is unaffected by the stray radiation. For higher concentrations of analyte, less light passes through the sample and P_T and P_stray become similar in magnitude. This results in an absorbance that is smaller than expected, and a negative deviation from Beer’s law.

[Note: corrected; the source prints "This results is" where this reads "This results in". A typo.]

The second limitation is that Beer’s law assumes that radiation reaching the sample is of a single wavelength—that is, it assumes a purely monochromatic source of radiation. Even the best wavelength selector, however, passes radiation with a small, but finite effective bandwidth. Let's assume we have a line source that emits light at two wavelengths, λ^′ and λ^′′. When treated separately, the absorbances at these wavelengths, A′ and A′′, are

A^′ = −log((P_T^′)/(P0^′)) = ε^′bC    A^′′ = −log((P_T^′′)/(P0^′′)) = ε^′′bC

[Note: corrected; the source prints "P_r^′" where this reads "P_T^′". The numerator is the transmitted power, P_T, as at the second wavelength and in the equations that follow.]

If both wavelengths are measured simultaneously the absorbance is

A = −log(((P_T^′ + P_T^′′))/((P0^′ + P0^′′)))

Expanding the logarithmic function of the equation's right side gives

A = log(P0^′ + P0^′′) − log(P_T^′ + P_T^′′)

Next, we need to find a relationship between P_T and P0 for any wavelength. To do this, we start with Beer's law

A = −log((P_T)/(P0)) = εbC

and then solve for P_T in terms of P0

log((P_T)/(P0)) = −εbC

(P_T)/(P0) = 10^(−εbC)

P_T = P0 × 10^(−εbC)

Substituting this general relationship back into our wavelength-specific equation for absorbance, (IL1), we obtain

A = log(P0^′ + P0^′′) − log(P0^′ × 10^(−ε^′bC) + P0^′′ × 10^(−ε^′′bC))

[Note: corrected; the source prints "P0^′ × 10^(−εbC) + P0^′′ × 10^(−εbC)" where this reads "P0^′ × 10^(−ε^′bC) + P0^′′ × 10^(−ε^′′bC)". Each wavelength has its own molar absorptivity, ε^′ and ε^′′, which the next step sets equal for monochromatic radiation; with one ε throughout, the equation would reduce to Beer's law for any radiation.]

For monochromatic radiation, we have ε^′ = ε^′′ = ε and Equation (IL2) simplifies to Beer's law

A = −log(10^(−εbC)) = εbC

For non-monochromatic radiation, Equation (IL2) predicts that the absorbance is smaller than expected if ε^′ > ε^′′. Polychromatic radiation always gives a deviation from Beer’s law, but the effect is smaller if the value of ε essentially is constant over the wavelength range passed by the wavelength selector. For this reason, as shown in Figure 13.2.3, it is better to make absorbance measurements at the top of a broad absorption peak. In addition, the deviation from Beer’s law is less serious if the source’s effective bandwidth is less than one-tenth of the absorbing species’ natural bandwidth [(a) Strong, F. C., III Anal. Chem. 1984, 56, 16A–34A; Gilbert, D. D. J. Chem. Educ. 1991, 68, A278–A281]. When measurements must be made on a slope, linearity is improved by using a narrower effective bandwidth.

Figure 13.2.3: Effect of wavelength selection on the linearity of a Beer’s law plot. Another reason for measuring absorbance at the top of an absorbance peak is that it provides for a more sensitive analysis. Note that the green Beer’s law plot has a steeper slope—and, therefore, a greater sensitivity—than the red Beer’s law plot. A Beer’s law plot, of course, is equivalent to a calibration curve.
Effect of wavelength selection on the linearity of a Beer’s law plot.
