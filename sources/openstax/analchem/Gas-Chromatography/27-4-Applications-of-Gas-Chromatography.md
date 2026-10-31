---
title: "27.4: Applications of Gas Chromatography"
book: "Instrumental Analysis (LibreTexts)"
chapter: "27: Gas Chromatography"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/27%3A_Gas_Chromatography/27.04%3A_Applications_of_Gas-Liquid_Chromatography"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

## Quantitative Applications

Gas chromatography is widely used for the analysis of a diverse array of samples in environmental, clinical, pharmaceutical, biochemical, forensic, food science and petrochemical laboratories. Table 27.4.1 provides some representative examples of applications.

Table 27.4.1 . Representative Applications of Gas Chromatography

| area | applications |
| --- | --- |
| environmental analysis | green house gases (CO2, CH4, NO_x) in air; pesticides in water, wastewater, and soil; vehicle emissions; trihalomethanes in drinking water |
| clinical analysis | drugs; blood alcohols |
| forensic analysis | analysis of arson accelerants; detection of explosives |
| consumer products | volatile organics in spices and fragrances; trace organics in whiskey; monomers in latex paint |
| petrochemical and chemical industry | purity of solvents; refinery gas; composition of gasoline |

### Quantitative Calculations

In a GC analysis the area under the peak is proportional to the amount of analyte injected onto the column. A peak’s area is determined by integration, which usually is handled by the instrument’s computer or by an electronic integrating recorder. If two peaks are resolved fully, the determination of their respective areas is straightforward.

[Note: corrected; the source prints "If two peak are resolved" where this reads "If two peaks are resolved". A typo.]

Before electronic integrating recorders and computers, two methods were used to find the area under a curve. One method used a manual planimeter; as you use the planimeter to trace an object’s perimeter, it records the area. A second approach for finding a peak’s area is the cut-and-weigh method. The chromatogram is recorded on a piece of paper and each peak of interest is cut out and weighed. Assuming the paper is uniform in thickness and density of fibers, the ratio of weights for two peaks is the same as the ratio of areas. Of course, this approach destroys your chromatogram.

Overlapping peaks, however, require a choice between one of several options for dividing up the area shared by the two peaks (Figure 27.4.1 ). Which method we use depends on the relative size of the two peaks and their resolution. In some cases, the use of peak heights provides more accurate results [(a) Bicking, M. K. L. Chromatography Online, April 2006; (b) Bicking, M. K. L. Chromatography Online, June 2006].

Figure 27.4.1: Four methods for determining the areas under two overlapping chromatographic peaks: (a) the drop method; (b) the valley method; (c) the exponential skim method; and (d) the Gaussian skim method. Other methods for determining areas also are available.
Four methods for determining the areas under two overlapping chromatographic peaks: (a) the drop method; (b) the valley method; (c) the exponential skim method; and (d) the Gaussian skim method. Other methods for determining areas also are available.

For quantitative work we need to establish a calibration curve that relates the detector’s response to the analyte’s concentration. If the injection volume is identical for every standard and sample, then an external standardization provides both accurate and precise results. Unfortunately, even under the best conditions the relative precision for replicate injections may differ by 5%; often it is substantially worse. For quantitative work that requires high accuracy and precision, the use of internal standards is recommended.

[Note: corrected; the source prints "Unfortunately,even under" where this reads "Unfortunately, even under". A missing space.]

### Example 27.4.1

Marriott and Carpenter report the following data for five replicate injections of a mixture that contains 1% v/v methyl isobutyl ketone and 1% v/v p-xylene in dichloromethane [Marriott, P. J.; Carpenter, P. D. J. Chem. Educ. 1996, 73, 96–99].

| injection | peak | peak area (arb. units) |
| --- | --- | --- |
| I | 1 | 49075 |
|  | 2 | 78112 |
| II | 1 | 85829 |
|  | 2 | 135404 |
| III | 1 | 84136 |
|  | 2 | 132332 |
| IV | 1 | 71681 |
|  | 2 | 112889 |
| V | 1 | 58054 |
|  | 2 | 91287 |

[Note: corrected; the source prints "| 48075 |" where this reads "| 49075 |". The Solution's first internal-standard ratio, 1.5917, is 78112/49075 (78112/48075 = 1.6248), and the mean of 1.5779 and standard deviation of 0.0080 follow only from 1.5917.]

Assume that p-xylene (peak 2) is the analyte, and that methyl isobutyl ketone (peak 1) is the internal standard. Determine the 95% confidence interval for a single-point standardization with and without using the internal standard.

**Solution**

For a single-point external standardization we ignore the internal standard and determine the relationship between the peak area for p-xylene, A2, and the concentration, C2, of p-xylene.

A2 = kC2

Substituting the known concentration for p-xylene (1% v/v) and the appropriate peak areas, gives the following values for the constant k.

78112 135404 132332 112889 91287

The average value for k is 110 000 with a standard deviation of 25 100 (a relative standard deviation of 22.8%). The 95% confidence interval is

μ = X̄±ts/(√n) = 110000±((2.78)(25100))/(√5) = 110000±31200

[Note: corrected; the source prints "= 111000±((2.78)" where this reads "= 110000±((2.78)"; the source prints "= 111000±31200" where this reads "= 110000±31200". The mean of the five values of k is 110 005, which the text above gives as 110 000.]

For an internal standardization, the relationship between the analyte’s peak area, A2, the internal standard’s peak area, A1, and their respective concentrations, C2 and C1, is

(A2)/(A1) = k (C2)/(C1)

Substituting in the known concentrations and the appropriate peak areas gives the following values for the constant k.

1.5917 1.5776 1.5728 1.5749 1.5724

The average value for k is 1.5779 with a standard deviation of 0.0080 (a relative standard deviation of 0.507%). The 95% confidence interval is

μ = X̄±ts/(√n) = 1.5779±((2.78)(0.0080))/(√5) = 1.5779±0.0099

Although there is a substantial variation in the individual peak areas for this set of replicate injections, the internal standard compensates for these variations, providing a more accurate and precise calibration.

### Exercise 27.4.1

Figure 27.4.2 shows chromatograms for five standards and for one sample. Each standard and sample contains the same concentration of an internal standard, which is 2.50 mg/mL. For the five standards, the concentrations of analyte are 0.20 mg/mL, 0.40 mg/mL, 0.60 mg/mL, 0.80 mg/mL, and 1.00 mg/mL, respectively. Determine the concentration of analyte in the sample by (a) ignoring the internal standards and creating an external standards calibration curve, and by (b) creating an internal standard calibration curve. For each approach, report the analyte’s concentration and the 95% confidence interval. Use peak heights instead of peak areas.

**Answer**

The following table summarizes my measurements of the peak heights for each standard and the sample, and their ratio (although your absolute values for peak heights will differ from mine, depending on the size of your monitor or printout, your relative peak height ratios should be similar to mine).

| [standard] (mg/mL) | peak height of standard (mm) | peak height of analyte (mm) | peak height ratio |
| --- | --- | --- | --- |
| 0.20 | 35 | 7 | 0.20 |
| 0.40 | 41 | 16 | 0.39 |
| 0.60 | 44 | 27 | 0.61 |
| 0.80 | 48 | 39 | 0.81 |
| 1.00 | 41 | 41 | 1.00 |
| sample | 39 | 21 | 0.54 |

Figure (a) shows the calibration curve and the calibration equation when we ignore the internal standard. Substituting the sample’s peak height into the calibration equation gives the analyte’s concentration in the sample as 0.49 mg/mL. The 95% confidence interval is ±0.24 mg/mL. The calibration curve shows quite a bit of scatter in the data because of uncertainty in the injection volumes.

Figure (b) shows the calibration curve and the calibration equation when we include the internal standard. Substituting the sample’s peak height ratio into the calibration equation gives the analyte’s concentration in the sample as 0.54 mg/mL. The 95% confidence interval is ±0.04 mg/mL.

[Image: Graph "a" shows concentration of analyte (mg/mL) versus peak height (mm). Peak height (mm) = -1.3+45.5C(A). Graph "b" shows concentration of analyte (mg/mL) versus the peak height ratio. Peak height ratio = -0.004+1.01C(A).]

The data for this exercise were created so that the analyte’s actual concentration is 0.55 mg/mL. Given the resolution of my ruler’s scale, my answer is pretty reasonable. Your measurements may be slightly different, but your answers should be close to the actual values.

Figure 27.4.2: Chromatograms for Exercise 27.4.1.
Chromatograms for Exercise 27.4.1.

## Qualitative Applications

In addition to a quantitative analysis, we also can use chromatography to identify the components of a mixture. As noted earlier, when we use an FT–IR or a mass spectrometer as the detector we have access to the eluent’s full spectrum for any retention time. By interpreting the spectrum or by searching against a library of spectra, we can identify the analyte responsible for each chromatographic peak.

In addition to identifying the component responsible for a particular chromatographic peak, we also can use the saved spectra to evaluate peak purity. If only one component is responsible for a chromatographic peak, then the spectra should be identical throughout the peak’s elution. If a spectrum at the beginning of the peak’s elution is different from a spectrum taken near the end of the peak’s elution, then at least two components are co-eluting.

When using a nonspectroscopic detector, such as a flame ionization detector, we must find another approach if we wish to identify the components of a mixture. One approach is to spike a sample with the suspected compound and look for an increase in peak height. We also can compare a peak’s retention time to the retention time for a known compound if we use identical operating conditions.

Because a compound’s retention times on two identical columns are not likely to be the same—differences in packing efficiency, for example, will affect a solute’s retention time on a packed column—creating a table of standard retention times is not possible. Kovats retention index provides one solution to the problem of matching retention times. Under isothermal conditions, the adjusted retention times for normal alkanes increase exponentially. Kovats defined the retention index, I, for a normal alkane as 100 times the number of carbon atoms. For example, the retention index is 400 for butane, C4H10, and 500 for pentane, C5H12. To determine a compound’s retention index, I_cpd, we use the following formula

[Note: corrected; the source prints "Kovat’s retention index provides" where this reads "Kovats retention index provides"; the source prints "normal alkanes increase logarithmically" where this reads "normal alkanes increase exponentially"; the source prints "Kovat defined" where this reads "Kovats defined"; the source prints "To determine the a compound’s" where this reads "To determine a compound’s". The index is named for Ervin Kováts; the logarithm of a normal alkane's adjusted retention time increases linearly with the number of carbon atoms, so the retention time itself increases exponentially, which is why the formula interpolates between log t′ values; "the a" is a typo.]

I_cpd = 100 × (log t_(r, cpd)^′−log t_(r, x)^′)/(log t_(r, x+1)^′−log t_(r, x)^′) + Ix

where t_(r, cpd)^′ is the compound’s adjusted retention time, t_(r, x)^′ and t_(r, x+1)^′ are the adjusted retention times for the normal alkanes that elute immediately before the compound and immediately after the compound, respectively, and I_x is the retention index for the normal alkane that elutes immediately before the compound. A compound’s retention index for a particular set of chromatographic conditions—such as the choice of stationary phase, mobile phase, column type, column length, and temperature—is reasonably consistent from day-to-day and between different columns and instruments.

Tables of Kovats retention indices are available; see, for example, the NIST Chemistry Webbook. A search for toluene returns 341 values of I for over 20 different stationary phases, and for both packed columns and capillary columns.

[Note: corrected; the source prints "Tables of Kovat’s retention" where this reads "Tables of Kovats retention". The index is named for Ervin Kováts.]

### Example 27.4.2

In a separation of a mixture of hydrocarbons the following adjusted retention times are measured: 2.23 min for propane, 5.71 min for isobutane, and 6.67 min for butane. What is the Kovats retention index for each of these hydrocarbons?

[Note: corrected; the source prints "What is the Kovat’s retention" where this reads "What is the Kovats retention". The index is named for Ervin Kováts.]

**Solution**

Kovats retention index for a normal alkane is 100 times the number of carbons; thus, for propane, I = 300 and for butane, I = 400. To find the Kovats retention index for isobutane we use Equation (12.1).

[Note: corrected; the source prints "Kovat’s retention index for a normal" where this reads "Kovats retention index for a normal"; the source prints "To find Kovat’s retention" where this reads "To find the Kovats retention". The index is named for Ervin Kováts.]

I_isobutane = 100 × (log(5.71) − log(2.23))/(log(6.67) − log(2.23)) + 300 = 386

### Exercise 27.4.2

When using a column with the same stationary phase as in Example 27.4.2 , you find that the retention times for propane and butane are 4.78 min and 6.86 min, respectively. What is the expected retention time for isobutane?

**Answer**

Because we are using the same column we can assume that isobutane’s retention index of 386 remains unchanged. Using Equation (12.1), we have

386 = 100 × (log x − log(4.78))/(log(6.86) − log(4.78)) + 300

where x is the retention time for isobutane. Solving for x, we find that

0.86 = (log x − log(4.78))/(log(6.86) − log(4.78))

0.135 = log x − 0.679

0.814 = log x

x = 6.52

the retention time for isobutane is 6.5 min.
