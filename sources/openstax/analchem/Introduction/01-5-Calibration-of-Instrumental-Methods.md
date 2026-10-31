---
title: "1.5: Calibration of Instrumental Methods"
book: "Instrumental Analysis (LibreTexts)"
chapter: "1: Introduction"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/01%3A_Introduction/1.05%3A_Calibration_of_Instrumental_Methods"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

To standardize an analytical method we also must determine the analyte’s sensitivity, k_A, in the following equation

S_total = kA CA + S_blank

where S_total is the measured signal, CA is the analyte's concentration, and S_blank is the signal in the absence of the analyte. In principle, it is possible to derive the value of k_A for any analytical method if we understand fully all the chemical reactions and physical processes responsible for the signal. Unfortunately, such calculations are not feasible if we lack a sufficiently developed theoretical model of the physical processes or if the chemical reactions evince non-ideal behavior. In such situations we must determine the value of k_A by analyzing one or more standard solutions, each of which contains a known amount of analyte. In this section we consider several approaches for determining the value of k_A. For simplicity we assume that S_blank is accounted for by a proper reagent blank, allowing us to replace S_total in Equation (s_total) with the analyte’s signal, S_A.

[Note: corrected; the source prints "and S_reag is the signal" where this reads "and S_blank is the signal"; the source prints "chemical reaction’s evince" where this reads "chemical reactions evince"; the source prints "replace S_total in with" where this reads "replace S_total in Equation (s_total) with". The equation just above names the blank signal S_blank, as the rest of the paragraph does; "reactions" is a plural subject, not a possessive; and the reference to the S_total equation (TeX label s_total) is missing.]

SA = kA CA

## Single-Point Versus Multiple-Point Standardization

The simplest way to determine the value of k_A in Equation (sa) is to use a single-point standardization in which we measure the signal for a standard, S_std, that contains a known concentration of analyte, C_std. Substituting these values into Equation (sa) and rearranging

[Note: corrected; the source prints "and rearrange" where this reads "and rearranging". The sentence continues "to give us the value for k_A", which needs the participle.]

kA = (S_std)/(C_std)

to give us the value for k_A. Having determined k_A, we can calculate the concentration of analyte in a sample by measuring its signal, S_samp, and calculate C_A as

CA = (S_samp)/(kA)

A single-point standardization is the least desirable method for standardizing a method. There are two reasons for this. First, any error in our determination of k_A carries over into our calculation of C_A. Second, our experimental value for k_A is based on a single concentration of analyte. To extend this value of k_A to other concentrations of analyte requires that we assume a linear relationship between the signal and the analyte’s concentration, an assumption that often is not true [Cardone, M. J.; Palmero, P. J.; Sybrandt, L. B. Anal. Chem. 1980, 52, 1187–1191]. Figure 1.5.1 shows how assuming a constant value of k_A leads to a determinate error in C_A if k_A becomes smaller at higher concentrations of analyte. Despite these limitations, single-point standardizations find routine use when the expected range for the analyte’s concentrations is small. Under these conditions it often is safe to assume that k_A is constant (although you should verify this assumption experimentally). This is the case, for example, in clinical labs where many automated analyzers use only a single standard.

Figure 1.5.1: Example showing how a single-point standardization leads to a determinate error in an analyte’s reported concentration if we incorrectly assume that k_A is constant. The assumed relationship between S_samp and C_A is based on a single standard and is a straight-line; the actual relationship between S_samp and C_A becomes curved for larger concentrations of analyte.
Determinate error when using a single standard.

The better way to standardize a method is to prepare a series of standards, each of which contains a different concentration of analyte. Standards are chosen such that they bracket the expected range for the analyte’s concentration. A multiple-point standardization should include at least three standards, although more are preferable. A plot of S_std versus C_std is called a calibration curve. The exact standardization, or calibration relationship, is determined by an appropriate curve-fitting algorithm.

Linear regression, which also is known as the method of least squares, is one such algorithm. Its use is covered in Appendix 1.

There are two advantages to a multiple-point standardization. First, although a determinate error in one standard introduces a determinate error, its effect is minimized by the remaining standards. Second, because we measure the signal for several concentrations of analyte, we no longer must assume k_A is independent of the analyte’s concentration. Instead, we can construct a calibration curve similar to the “actual relationship” in Figure 1.5.1.

## External Standards

The most common method of standardization uses one or more external standards, each of which contains a known concentration of analyte. We call these standards “external” because they are prepared and analyzed separate from the samples.

Appending the adjective “external” to the noun “standard” might strike you as odd at this point, as it seems reasonable to assume that standards and samples are analyzed separately. As we will soon learn, however, we can add standards to our samples and analyze both simultaneously.

### Single External Standard

With a single external standard we determine k_A using Equation (ka) and then calculate the concentration of analyte, C_A, using Equation (ca).

[Note: corrected; the source prints "EEquation" where this reads "Equation". A doubled letter.]

### Example 1.5.1

A spectrophotometric method for the quantitative analysis of Pb^2+ in blood yields an S_std of 0.474 for a single standard for which the concentration of lead is 1.75 ppb. What is the concentration of Pb^2+ in a sample of blood for which S_samp is 0.361?

**Solution**

Equation (ka) allows us to calculate the value of k_A using the data for the single external standard.

kA = (S_std)/(C_std) = 0.474/(1.75 ppb) = 0.2709 ppb^−1

Having determined the value of k_A, we calculate the concentration of Pb^2+ in the sample of blood using Equation (ca).

[Note: corrected; the source prints "sample of blood is calculated using" where this reads "sample of blood using". The sentence already has its verb, "we calculate".]

CA = (S_samp)/(kA) = 0.361/(0.2709 ppb^−1) = 1.33 ppb

### Multiple External Standards

Figure 1.5.2 shows a typical multiple-point external standardization. The volumetric flask on the left contains a reagent blank and the remaining volumetric flasks contain increasing concentrations of Cu^2+. Shown below the volumetric flasks is the resulting calibration curve. Because this is the most common method of standardization, the resulting relationship is called a normal calibration curve.

Figure 1.5.2: The photo at the top of the figure shows a reagent blank (far left) and a set of five external standards for Cu^2+ with concentrations that increase from left-to-right. Shown below the external standards is the resulting normal calibration curve. The absorbance of each standard, S_std, is shown by the filled circles.
External standardization.

When a calibration curve is a straight-line, as it is in Figure 1.5.2, the slope of the line gives the value of k_A. This is the most desirable situation because the method’s sensitivity remains constant throughout the analyte’s concentration range. When the calibration curve is not a straight-line, the method’s sensitivity is a function of the analyte’s concentration. In Figure 1.5.1, for example, the value of k_A is greatest when the analyte’s concentration is small and it decreases continuously for higher concentrations of analyte. The value of k_A at any point along the calibration curve in Figure 1.5.1 is the slope at that point. In either case, a calibration curve allows us to relate S_samp to the analyte’s concentration.

[Note: corrected; the source prints "allows to relate" where this reads "allows us to relate". A dropped word.]

### Example 1.5.2

A second spectrophotometric method for the quantitative analysis of Pb^2+ in blood has a normal calibration curve for which

S_std = (0.296 ppb^−1 × C_std) + 0.003

What is the concentration of Pb^2+ in a sample of blood if S_samp is 0.397?

**Solution**

To determine the concentration of Pb^2+ in the sample of blood, we replace S_std in the calibration equation with S_samp and solve for C_A.

CA = (S_samp − 0.003)/(0.296 ppb^−1) = (0.397 − 0.003)/(0.296 ppb^−1) = 1.33 ppb

It is worth noting that the calibration equation in this problem includes an extra term that does not appear in Equation (ca). Ideally we expect our calibration curve to have a signal of zero when C_A is zero. This is the purpose of using a reagent blank to correct the measured signal. The extra term of +0.003 in our calibration equation results from the uncertainty in measuring the signal for the reagent blank and the standards.

<!-- end of example -->

An external standardization allows us to analyze a series of samples using a single calibration curve. This is an important advantage when we have many samples to analyze. Not surprisingly, many of the most common quantitative analytical methods use an external standardization.

There is a serious limitation, however, to an external standardization. When we determine the value of k_A using Equation (ka), the analyte is present in the external standard’s matrix, which usually is a much simpler matrix than that of our samples. When we use an external standardization we assume the matrix does not affect the value of k_A. If this is not true, then we introduce a proportional determinate error into our analysis. This is not the case in Figure 1.5.3, for instance, where we show calibration curves for an analyte in the sample’s matrix and in the standard’s matrix. In this case, using the calibration curve for the external standards leads to a negative determinate error in analyte’s reported concentration. If we expect that matrix effects are important, then we try to match the standard’s matrix to that of the sample, a process known as matrix matching. If we are unsure of the sample’s matrix, then we must show that matrix effects are negligible or use an alternative method of standardization. Both approaches are discussed in the following section.

The matrix for the external standards in Figure 1.5.2, for example, is dilute ammonia. Because the Cu(NH3)4^2+ complex absorbs more strongly than Cu^2+, adding ammonia increases the signal’s magnitude. If we fail to add the same amount of ammonia to our samples, then we will introduce a proportional determinate error into our analysis.

Figure 1.5.3: Calibration curves for an analyte in the standard’s matrix and in the sample’s matrix. If the matrix affects the value of k_A, as is the case here, then we introduce a proportional determinate error into our analysis if we use a normal calibration curve.
Matrix effects.

## Standard Additions

We can avoid the complication of matching the matrix of the standards to the matrix of the sample if we carry out the standardization in the sample. This is known as the method of standard additions.

### Single Standard Addition

The simplest version of a standard addition is shown in Figure 1.5.4. First we add a portion of the sample, V_o, to a volumetric flask, dilute it to volume, V_f, and measure its signal, S_samp. Next, we add a second identical portion of sample to an equivalent volumetric flask along with a spike, V_std, of an external standard whose concentration is C_std. After we dilute the spiked sample to the same final volume, we measure its signal, S_spike.

Figure 1.5.4: Illustration showing the method of standard additions. The volumetric flask on the left contains a portion of the sample, V_o, and the volumetric flask on the right contains an identical portion of the sample and a spike, V_std, of a standard solution of the analyte. Both flasks are diluted to the same final volume, V_f. The concentration of analyte in each flask is shown at the bottom of the figure where C_A is the analyte’s concentration in the original sample and C_std is the concentration of analyte in the external standard.
Method of standard additions.

The following two equations relate S_samp and S_spike to the concentration of analyte, C_A, in the original sample.

S_samp = kA CA (Vo)/(Vf)

S_spike = kA(CA (Vo)/(Vf) + C_std(V_std)/(Vf))

As long as V_std is small relative to V_o, the effect of the standard’s matrix on the sample’s matrix is insignificant. Under these conditions the value of k_A is the same in Equation (sa_samp1) and Equation (sa_spike1). Solving both equations for k_A and equating gives

(S_samp)/(CA (Vo)/(Vf)) = (S_spike)/(CA (Vo)/(Vf) + C_std(V_std)/(Vf))

which we can solve for the concentration of analyte, C_A, in the original sample.

### Example 1.5.3

A third spectrophotometric method for the quantitative analysis of Pb^2+ in blood yields an S_samp of 0.193 when a 1.00 mL sample of blood is diluted to 5.00 mL. A second 1.00 mL sample of blood is spiked with 1.00 μL of a 1560-ppb Pb^2+ external standard and diluted to 5.00 mL, yielding an S_spike of 0.419. What is the concentration of Pb^2+ in the original sample of blood?

[Note: corrected; the source prints "spiked with 1.00 mL of" where this reads "spiked with 1.00 μL of". The solution converts the spike to 1.00 × 10^−3 mL, and only a 1.00 μL spike gives the stated 1.33 ppb.]

**Solution**

We begin by making appropriate substitutions into Equation (method_one) and solving for C_A. Note that all volumes must be in the same units; thus, we first convert V_std from 1.00 μL to 1.00 × 10^−3 mL.

[Note: corrected; the source prints "covert" where this reads "convert"; the source prints "from 1.00 mL to" where this reads "from 1.00 μL to". 1.00 × 10^−3 mL is 1.00 μL, not 1.00 mL.]

0.193/(CA (1.00 mL)/(5.00 mL)) = 0.419/(CA (1.00 mL)/(5.00 mL) + 1560 ppb(1.00 × 10^−3 mL)/(5.00 mL))

0.193/(0.200CA) = 0.419/(0.200CA + 0.3120 ppb)

0.0386CA + 0.0602 ppb = 0.0838CA

0.0452CA = 0.0602 ppb

CA = 1.33 ppb

The concentration of Pb^2+ in the original sample of blood is 1.33 ppb.

<!-- end of example -->

It also is possible to add the standard addition directly to the sample, measuring the signal both before and after the spike (Figure 1.5.5). In this case the final volume after the standard addition is V_o + V_std and Equation (sa_samp1), Equation (sa_spike1), and Equation (method_one) become

S_samp = kA CA

S_spike = kA(CA (Vo)/(Vo + V_std) + C_std(V_std)/(Vo + V_std))

(S_samp)/(CA) = (S_spike)/(CA (Vo)/(Vo + V_std) + C_std(V_std)/(Vo + V_std))

Figure 1.5.5: Illustration showing an alternative form of the method of standard additions. In this case we add the spike of external standard directly to the sample without any further adjustment in the volume.
Alternative method of standard additions.

[Note: corrected; the source prints "further adjust in the volume" where this reads "further adjustment in the volume". The noun is needed.]

### Example 1.5.4

A fourth spectrophotometric method for the quantitative analysis of Pb^2+ in blood yields an S_samp of 0.712 for a 5.00 mL sample of blood. After spiking the blood sample with 5.00 μL of a 1560-ppb Pb^2+ external standard, an S_spike of 1.546 is measured. What is the concentration of Pb^2+ in the original sample of blood?

[Note: corrected; the source prints "with 5.00 mL of a 1560-ppb" where this reads "with 5.00 μL of a 1560-ppb". The solution uses a spike of 5.00 × 10^−3 mL and a final volume of 5.005 mL, i.e. 5.00 μL.]

**Solution**

0.712/(CA) = 1.546/(CA (5.00 mL)/(5.005 mL) + 1560 ppb(5.00 × 10^−3 mL)/(5.005 mL))

0.712/(CA) = 1.546/(0.9990CA + 1.558 ppb)

0.7113CA + 1.109 ppb = 1.546CA

CA = 1.33 ppb

The concentration of Pb^2+ in the original sample of blood is 1.33 ppb.

### Multiple Standard Additions

We can adapt a single-point standard addition into a multiple-point standard addition by preparing a series of samples that contain increasing amounts of the external standard. Figure 1.5.6 shows two ways to plot a standard addition calibration curve based on Equation (sa_spike1). In Figure 1.5.6a we plot S_spike against the volume of the spikes, V_std. If k_A is constant, then the calibration curve is a straight-line. It is easy to show that the x-intercept is equivalent to –C_AV_o/C_std.

Figure 1.5.6: Shown at the top of the figure is a set of six standard additions for the determination of Mn^2+. The flask on the left is a 25.00 mL sample diluted to 50.00 mL with water. The remaining flasks contain 25.00 mL of sample and, from left-to-right, 1.00, 2.00, 3.00, 4.00, and 5.00 mL spikes of an external standard that is 100.6 mg/L Mn^2+. Shown below are two ways to plot the standard additions calibration curve. The absorbance for each standard addition, S_spike, is shown by the filled circles.
Method of standard additions calibration curves.

### Example 1.5.5

Beginning with Equation (sa_spike1) show that the equations in Figure 1.5.6a for the slope, the y-intercept, and the x-intercept are correct.

**Solution**

We begin by rewriting Equation (sa_spike1) as

S_spike = (kA CA Vo)/(Vf) + (kA C_std)/(Vf) × V_std

which is in the form of the equation for a straight-line

y = y-intercept + slope × x

[Note: corrected; the source prints "slope × x-intercept" where this reads "slope × x". In the equation of a line the slope multiplies x, as the next sentence ("x is V_std") says.]

where y is S_spike and x is V_std. The slope of the line, therefore, is k_AC_std/V_f and the y-intercept is k_AC_AV_o/V_f. The x-intercept is the value of x when y is zero, or

0 = (kA CA Vo)/(Vf) + (kA C_std)/(Vf) × x-intercept

x-intercept = −(kA CA Vo/Vf)/(kA C_std/Vf) = −(CA Vo)/(C_std)

[Note: corrected; the source prints "(KA C_std/Vf)" where this reads "(kA C_std/Vf)". The sensitivity is k_A; it cancels with the k_A in the numerator.]

<!-- end of example -->

Because we know the volume of the original sample, V_o, and the concentration of the external standard, C_std, we can calculate the analyte’s concentrations from the x-intercept of a multiple-point standard additions.

### Example 1.5.6

A fifth spectrophotometric method for the quantitative analysis of Pb^2+ in blood uses a multiple-point standard addition based on Equation (sa_spike1). The original blood sample has a volume of 1.00 mL and the standard used for spiking the sample has a concentration of 1560 ppb Pb^2+. All samples were diluted to 5.00 mL before measuring the signal. A calibration curve of S_spike versus V_std has the following equation

S_spike = 0.266 + 312 mL^−1 × V_std

What is the concentration of Pb^2+ in the original sample of blood?

**Solution**

To find the x-intercept we set S_spike equal to zero.

0 = 0.266 + 312 mL^−1 × V_std

[Note: corrected; the source prints "S_spike = 0.266" where this reads "0 = 0.266". The equation should show S_spike set to zero, as the sentence before it says; the source repeats the calibration equation unchanged.]

Solving for V_std, we obtain a value of −8.526 × 10^−4 mL for the x-intercept. Substituting the x-intercept’s value into the equation from Figure 1.5.6a

−8.526 × 10^−4 mL = −(CA Vo)/(C_std) = −(CA × 1.00 mL)/(1560 ppb)

and solving for C_A gives the concentration of Pb^2+ in the blood sample as 1.33 ppb.

<!-- end of example -->

Since we construct a standard additions calibration curve in the sample, we can not use the calibration equation for other samples. Each sample, therefore, requires its own standard additions calibration curve. This is a serious drawback if you have many samples. For example, suppose you need to analyze 10 samples using a five-point calibration curve. For a normal calibration curve you need to analyze only 15 solutions (five standards and ten samples). If you use the method of standard additions, however, you must analyze 50 solutions (each of the ten samples is analyzed five times, once before spiking and after each of four spikes).

### Using a Standard Addition to Identify Matrix Effects

We can use the method of standard additions to validate an external standardization when matrix matching is not feasible. First, we prepare a normal calibration curve of S_std versus C_std and determine the value of k_A from its slope. Next, we prepare a standard additions calibration curve using Equation (sa_spike1), plotting the data as shown in Figure 1.5.6b. The slope of this standard additions calibration curve provides an independent determination of k_A. If there is no significant difference between the two values of k_A, then we can ignore the difference between the sample’s matrix and that of the external standards. When the values of k_A are significantly different, then using a normal calibration curve introduces a proportional determinate error.

## Internal Standards

To use an external standardization or the method of standard additions, we must be able to treat identically all samples and standards. When this is not possible, the accuracy and precision of our standardization may suffer. For example, if our analyte is in a volatile solvent, then its concentration will increase if we lose solvent to evaporation. Suppose we have a sample and a standard with identical concentrations of analyte and identical signals. If both experience the same proportional loss of solvent, then their respective concentrations of analyte and signals remain identical. In effect, we can ignore evaporation if the samples and the standards experience an equivalent loss of solvent. If an identical standard and sample lose different amounts of solvent, however, then their respective concentrations and signals are no longer equal. In this case a simple external standardization or standard addition is not possible.

We can still complete a standardization if we reference the analyte’s signal to a signal from another species that we add to all samples and standards. The species, which we call an internal standard, must be different than the analyte.

Because the analyte and the internal standard receive the same treatment, the ratio of their signals is unaffected by any lack of reproducibility in the procedure. If a solution contains an analyte of concentration C_A and an internal standard of concentration C_IS, then the signals due to the analyte, S_A, and the internal standard, S_IS, are

SA = kA CA

S_IS = k_IS C_IS

[Note: corrected; the source prints "k_SI" where this reads "k_IS". The internal standard's sensitivity is k_IS, as the next sentence and the ratio equation call it.]

where kA and k_IS are the sensitivities for the analyte and the internal standard, respectively. Taking the ratio of the two signals gives the fundamental equation for an internal standardization.

(SA)/(S_IS) = (kA CA)/(k_IS C_IS) = K × (CA)/(C_IS)

Because K is a ratio of the analyte’s sensitivity and the internal standard’s sensitivity, it is not necessary to determine independently values for either k_A or k_IS.

### Single Internal Standard

In a single-point internal standardization, we prepare a single standard that contains the analyte and the internal standard, and use it to determine the value of K in Equation (sa_sis).

K = ((C_IS)/(CA))_std × ((SA)/(S_IS))_std

Having standardized the method, the analyte’s concentration is given by

CA = (C_IS)/K × ((SA)/(S_IS))_samp

### Example 1.5.7

A sixth spectrophotometric method for the quantitative analysis of Pb^2+ in blood uses Cu^2+ as an internal standard. A standard that is 1.75 ppb Pb^2+ and 2.25 ppb Cu^2+ yields a ratio of (S_A/S_IS)_std of 2.37. A sample of blood spiked with the same concentration of Cu^2+ gives a signal ratio, (S_A/S_IS)_samp, of 1.80. What is the concentration of Pb^2+ in the sample of blood?

**Solution**

Equation (K) allows us to calculate the value of K using the data for the standard

K = ((C_IS)/(CA))_std × ((SA)/(S_IS))_std = (2.25 ppb Cu^2+)/(1.75 ppb Pb^2+) × 2.37 = 3.05 (ppb Cu^2+)/(ppb Pb^2+)

The concentration of Pb^2+, therefore, is

CA = (C_IS)/K × ((SA)/(S_IS))_samp = (2.25 ppb Cu^2+)/(3.05 (ppb Cu^2+)/(ppb Pb^2+)) × 1.80 = 1.33 ppb Pb^2+

### Multiple Internal Standards

A single-point internal standardization has the same limitations as a single-point normal calibration. To construct an internal standard calibration curve we prepare a series of standards, each of which contains the same concentration of internal standard and a different concentration of analyte. Under these conditions a calibration curve of (S_A/S_IS)_std versus C_A is linear with a slope of K/C_IS.

[Note: corrected; the source prints "a different concentrations of analyte" where this reads "a different concentration of analyte". "a" takes the singular.]

Although the usual practice is to prepare the standards so that each contains an identical amount of the internal standard, this is not a requirement.

### Example 1.5.8

A seventh spectrophotometric method for the quantitative analysis of Pb^2+ in blood gives a linear internal standards calibration curve for which

((SA)/(S_IS))_std = (2.11 ppb^−1 × CA) − 0.006

What is the ppb Pb^2+ in a sample of blood if (S_A/S_IS)_samp is 2.80?

**Solution**

To determine the concentration of Pb^2+ in the sample of blood we replace (S_A/S_IS)_std in the calibration equation with (S_A/S_IS)_samp and solve for C_A.

CA = (((SA)/(S_IS))_samp + 0.006)/(2.11 ppb^−1) = (2.80 + 0.006)/(2.11 ppb^−1) = 1.33 ppb Pb^2+

The concentration of Pb^2+ in the sample of blood is 1.33 ppb.

<!-- end of example -->

In some circumstances it is not possible to prepare the standards so that each contains the same concentration of internal standard. This is the case, for example, when we prepare samples by mass instead of volume. We can still prepare a calibration curve, however, by plotting (SA/S_IS)_std versus C_A/C_IS, giving a linear calibration curve with a slope of K.

You might wonder if it is possible to include an internal standard in the method of standard additions to correct for both matrix effects and uncontrolled variations between samples; well, the answer is yes as described in the paper “Standard Dilution Analysis,” the full reference for which is Jones, W. B.; Donati, G. L.; Calloway, C. P.; Jones, B. T. Anal. Chem. 2015, 87, 2321-2327.
