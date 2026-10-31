---
title: "26.4: Optimization and Column Performance"
book: "Instrumental Analysis (LibreTexts)"
chapter: "26: Introduction to Chromatographic Separations"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/26%3A_Introduction_to_Chromatographic_Separations/26.04%3A_Optimization_and_Column_Performance"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

The goal of a chromatographic separation is to take a sample with more than one solute and to separate the solutes such that each elutes by itself. Our ability to separate two solutes from each other—to resolve them—is affected by a number of variables; how we can optimize the separation of two solutes is the subject of this section.

## Column Resolution

The goal of chromatography is to separate a mixture into a series of chromatographic peaks, each of which constitutes a single component of the mixture. The resolution between two chromatographic peaks, R_AB, is a quantitative measure of their separation, and is defined as

R_AB = (t_(r, B) − t_(r, A))/(0.5(wB + wA)) = (2Δtr)/(wB + wA)

[Note: corrected; the source prints "t_(t, B) − t_(t, A)" where this reads "t_(r, B) − t_(r, A)". Resolution is defined by the difference in the two solutes' retention times, t_r, as in the rest of this section; t_t is not defined anywhere.]

where B is the later eluting of the two solutes. As shown in Figure 26.4.1, the separation of two chromatographic peaks improves with an increase in R_AB. If the areas under the two peaks are identical—as is the case in Figure 26.4.1—then a resolution of 1.50 corresponds to an overlap of only 0.13% for the two elution profiles. Because resolution is a quantitative measure of a separation’s success, it is a useful way to determine if a change in experimental conditions leads to a better separation.

Figure 26.4.1: Three examples that show the relationship between resolution and the separation of a two component mixture. The green peak and the red peak are the elution profiles for the two components. The chromatographic peak—which is the sum of the two elution profiles—is shown by the solid black line.
Three examples that show the relationship between resolution and the separation of a two component mixture. The green peak and the red peak are the elution profiles for the two components. The chromatographic peak—which is the sum of the two elution profiles—is shown by the solid black line.

### Example 26.4.1

In a chromatographic analysis of lemon oil a peak for limonene has a retention time of 8.36 min with a baseline width of 0.96 min. γ-Terpinene elutes at 9.54 min with a baseline width of 0.64 min. What is the resolution between the two peaks?

**Solution**

Using Equation (res1) we find that the resolution is

R_AB = (2Δtr)/(wB + wA) = (2(9.54 min−8.36 min))/(0.64 min + 0.96 min) = 1.48

## The Effect of Retention and Selectivity Factors on Resolution

Now that we have defined the solute retention factor, selectivity, and column efficiency we are able to consider how they affect the resolution of two closely eluting peaks. Because the two peaks have similar retention times, it is reasonable to assume that their peak widths are nearly identical. If the number of theoretical plates is the same for all solutes—not strictly true, but not a bad assumption—then the ratio t_r/w is a constant. If two solutes have similar retention times, then their peak widths must be similar. Equation (res1), therefore, becomes

R_AB = (t_(r, B) − t_(r, A))/(0.5(wB + wA)) ≈ (t_(r, B) − t_(r, A))/(0.5(2 wB)) = (t_(r, B) − t_(r, A))/(wB)

where B is the later eluting of the two solutes. Solving equation 26.3.8 for w_B and substituting into Equation (res2) leaves us with the following result.

R_AB = (√(NB))/4 × (t_(r, B) − t_(r, A))/(t_(r, B))

Rearranging equation 26.2.11 provides us with the following equations for the retention times of solutes A and B.

t_(r, A) = kA t_m + t_m

t_(r, B) = kB t_m + t_m

After substituting these equations into Equation (res3) and simplifying, we have

R_AB = (√(NB))/4 × (kB − kA)/(1 + kB)

Finally, we can eliminate solute A’s retention factor by substituting in equation 26.2.12. After rearranging, we end up with the following equation for the resolution between the chromatographic peaks for solutes A and B.

R_AB = (√(NB))/4 × (α − 1)/α × (kB)/(1 + kB)

Although Equation (res7) is useful for considering how a change in N, α, or k qualitatively affects resolution—which suits our purpose here—it is less useful for making accurate quantitative predictions of resolution, particularly for smaller values of N and for larger values of R. For more accurate predictions use the equation

R_AB = (√N)/4 × (α − 1)/α × (kB)/(1 + k_avg)

[Note: corrected; the source prints "(α − 1) × (kB)/(1 + k_avg)" where this reads "(α − 1)/α × (kB)/(1 + k_avg)". With w = 4t_r/√N for both solutes, R_AB = (√N/4)(kB − kA)/(1 + k_avg), and kB − kA = kB(α − 1)/α (equivalently (α − 1)kA); as printed the equation overestimates the resolution by a factor of α.]

where k_avg is (k_A + k_B)/2. For a derivation of this equation and for a deeper discussion of resolution in column chromatography, see Foley, J. P. “Resolution Equations for Column Chromatography,” Analyst, 1991, 116, 1275-1279.

Equation (res7) contains terms that correspond to column efficiency, selectivity, and the solute retention factor. We can vary these terms, more or less independently, to improve resolution and analysis time. The first term, which is a function of the number of theoretical plates (for Equation (res7)), accounts for the effect of column efficiency. The second term is a function of α and accounts for the influence of column selectivity. Finally, the third term in both equations is a function of k_B and accounts for the effect of solute B’s retention factor. A discussion of how we can use these parameters to improve resolution is the subject of the remainder of this section.

## The Effect of Resolution on Retention Time

In addition to resolution, another important factor in chromatography is the amount of time needed to elute a pair of solutes, which we can approximate using the retention time for solute B.

t_(r, B) = (16R_AB^2 H)/u × (α/(α − 1))^2 × ((1 + kB)^3)/(kB^2)

where u is the mobile phase’s velocity.

## Variables That Affect Column Performance

### Using the Retention Factor to Optimize Resolution

One of the simplest ways to improve resolution is to adjust the retention factor for solute B. If all other terms in Equation (res7) remain constant, an increase in k_B will improve resolution. As shown by the green curve in Figure 26.4.2 , however, the improvement is greatest if the initial value of k_B is small. Once k_B exceeds a value of approximately 10, a further increase produces only a marginal improvement in resolution. For example, if the original value of k_B is 1, increasing its value to 10 gives an 82% improvement in resolution; a further increase to 15 provides a net improvement in resolution of only 87.5%.

Figure 26.4.2: Effect of k_B on the resolution for a pair of solutes, R_AB, and the retention time for the later eluting solute, t_(r,B). The y-axes display the resolution and retention time relative to their respective values when k_B is 1.00.
Effect of kB on the resolution for a pair of solutes, RAB, and the retention time for the later eluting solute, tr,B. The y-axes display the resolution and retention time relative to their respective values when kB is 1.00.

Any improvement in resolution from increasing the value of k_B generally comes at the cost of a longer analysis time. The red curve in Figure 26.4.2 shows the relative change in the retention time for solute B as a function of its retention factor. Note that the minimum retention time is for k_B = 2. Increasing k_B from 2 to 10, for example, approximately doubles solute B’s retention time.

The relationship between retention factor and analysis time in Figure 26.4.2 works to our advantage if a separation produces an acceptable resolution with a large k_B. In this case we may be able to decrease k_B with little loss in resolution and with a significantly shorter analysis time.

To increase k_B without changing selectivity, α, any change to the chromatographic conditions must result in a general, nonselective increase in the retention factor for both solutes. In gas chromatography, we can accomplish this by decreasing the column’s temperature. Because a solute’s vapor pressure is smaller at lower temperatures, it spends more time in the stationary phase and takes longer to elute. In liquid chromatography, the easiest way to increase a solute’s retention factor is to use a mobile phase that is a weaker solvent. When the mobile phase has a lower solvent strength, solutes spend proportionally more time in the stationary phase and take longer to elute.

### Using Selectivity to Optimize Resolution

A second approach to improving resolution is to adjust the selectivity, α. In fact, for α ≈ 1 it usually is not possible to improve resolution by adjusting the solute retention factor, k_B, or the column efficiency, N. A change in α often has a more dramatic effect on resolution than a change in k_B. For example, changing α from 1.1 to 1.5, while holding constant all other terms, improves resolution by 267%. In gas chromatography, we adjust α by changing the stationary phase; in liquid chromatography, we change the composition of the mobile phase to adjust α.

To change α we need to selectively adjust individual solute retention factors. Figure 26.4.3 shows one possible approach for the liquid chromatographic separation of a mixture of substituted benzoic acids. Because the retention time of a compound’s weak acid form and its weak base form are different, its retention time will vary with the pH of the mobile phase, as shown in Figure 26.4.3 a. The intersections of the curves in Figure 26.4.3 a show pH values where two solutes co-elute. For example, at a pH of 3.8 terephthalic acid and p-hydroxybenzoic acid elute as a single chromatographic peak.

Figure 26.4.3: Example that shows how the mobile phase pH in liquid chromatography affects selectivity: (a) retention times for four substituted benzoic acids as a function of the mobile phase’s pH; (b) alpha values for three pairs of solutes that are difficult to separate. See text for details. The mobile phase is an acetic acid/sodium acetate buffer and the stationary phase is a nonpolar hydrocarbon. Data from Harvey, D. T.; Byerly, S.; Bowman, A.; Tomlin, J. “Optimization of HPLC and GC Separations Using Response Surfaces,” J. Chem. Educ. 1991, 68, 162–168.
Example that shows how the mobile phase pH in liquid chromatography affects selectivity: (a) retention times for four substituted benzoic acids as a function of the mobile phase’s pH; (b) alpha values for three pairs of solutes that are difficult to separate. See text for details. The mobile phase is an acetic acid/sodium acetate buffer and the stationary phase is a nonpolar hydrocarbon.

Figure 26.4.3 a shows that there are many pH values where some separation is possible. To find the optimum separation, we plot α for each pair of solutes. The red, green, and orange curves in Figure 26.4.3 b show the variation in α with pH for the three pairs of solutes that are hardest to separate (for all other pairs of solutes, α > 2 at all pH levels). The blue shading shows windows of pH values in which at least a partial separation is possible—this figure is sometimes called a window diagram—and the highest point in each window gives the optimum pH within that range. The best overall separation is the highest point in any window, which, for this example, is a pH of 3.5. Because the analysis time at this pH is more than 40 min (Figure 26.4.3 a), choosing a pH between 4.1–4.4 might produce an acceptable separation with a much shorter analysis time.

Let’s use benzoic acid, C6H5COOH, to explain why pH can affect a solute’s retention time. The separation uses an aqueous mobile phase and a nonpolar stationary phase. At lower pHs, benzoic acid is predominately in its weak acid form, C6H5COOH, and partitions easily into the nonpolar stationary phase. At more basic pHs, however, benzoic acid is in its weak base form, C6H5COO^–. Because it now carries a charge, its solubility in the mobile phase increases and its solubility in the nonpolar stationary phase decreases. As a result, it spends more time in the mobile phase and has a shorter retention time.

Although the usual way to adjust pH is to change the concentration of buffering agents, it also is possible to adjust pH by changing the column’s temperature because a solute’s pK_a value is temperature-dependent; for a review, see Gagliardi, L. G.; Tascon, M.; Castells, C. B. “Effect of Temperature on Acid–Base Equilibria in Separation Techniques: A Review,” Anal. Chim. Acta, 2015, 889, 35–57.

[Note: corrected; the source prints "pK_a value is pH-dependent" where this reads "pK_a value is temperature-dependent". Changing the column's temperature shifts pH because acid dissociation constants vary with temperature; a pK_a does not depend on pH.]

### Using Column Efficiency to Optimize Resolution

A third approach to improve resolution is to adjust the column’s efficiency by increasing the number of theoretical plates, N. If we have values for k_B and α, then we can use Equation (res7) to calculate the number of theoretical plates for any resolution. Table 26.4.1 provides some representative values. For example, if α = 1.05 and k_B = 2.0, a resolution of 1.25 requires approximately 24 800 theoretical plates. If our column provides only 12 400 plates, half of what is needed, then a separation is not possible. How can we double the number of theoretical plates? The easiest way is to double the length of the column, although this also doubles the analysis time. A better approach is to cut the height of a theoretical plate, H, in half, providing the desired resolution without changing the analysis time. Even better, if we can decrease H by more than 50%, it may be possible to achieve the desired resolution with an even shorter analysis time by also decreasing k_B or α.

Table 26.4.1 . Minimum Number of Theoretical Plates to Achieve Desired Resolution for Selected Values of k_B and α

|  | R_AB = 1.00 |  | R_AB = 1.25 |  | R_AB = 1.50 |  |
| --- | --- | --- | --- | --- | --- | --- |
| k_B | α = 1.05 | α = 1.10 | α = 1.05 | α = 1.10 | α = 1.05 | α = 1.10 |
| 0.5 | 63500 | 17400 | 99200 | 27200 | 143000 | 39200 |
| 1.0 | 28200 | 7740 | 44100 | 12100 | 63500 | 17400 |
| 1.5 | 19600 | 5380 | 30600 | 8400 | 44100 | 12100 |
| 2.0 | 15900 | 4360 | 24800 | 6810 | 35700 | 9800 |
| 3.0 | 12500 | 3440 | 19600 | 5380 | 28200 | 7740 |
| 5.0 | 10200 | 2790 | 15900 | 4360 | 22900 | 6270 |
| 10.0 | 8540 | 2340 | 13300 | 3660 | 19200 | 5270 |

## The General Elution Problem

Adjusting the retention factor to improve the resolution between one pair of solutes may lead to unacceptably long retention times for other solutes. For example, suppose we need to analyze a four-component mixture with baseline resolution and with a run-time of less than 20 min. Our initial choice of conditions gives the chromatogram in Figure 26.4.4 a. Although we successfully separate components 3 and 4 within 15 min, we fail to separate components 1 and 2. Adjusting conditions to improve the resolution for the first two components by increasing k2 provides a good separation of all four components, but the run-time is too long (Figure 26.4.4 b). This problem of finding a single set of acceptable operating conditions is known as the general elution problem.

Figure 26.4.4: Example that shows the general elution problem in chromatography. See text for details.
Example that shows the general elution problem in chromatography.

One solution to the general elution problem is to make incremental adjustments to the retention factor as the separation takes place. At the beginning of the separation we set the initial chromatographic conditions to optimize the resolution for early eluting solutes. As the separation progresses, we adjust the chromatographic conditions to decrease the retention factor—and, therefore, to decrease the retention time—for each of the later eluting solutes (Figure 26.4.4 c). In gas chromatography this is accomplished by temperature programming. The column’s initial temperature is selected such that the first solutes to elute are resolved fully. The temperature is then increased, either continuously or in steps, to bring off later eluting components with both an acceptable resolution and a reasonable analysis time. In liquid chromatography the same effect is obtained by increasing the solvent’s eluting strength. This is known as a gradient elution. We will have more to say about each of these in later chapters.

[Note: corrected; the source prints "in later sections of this chapter" where this reads "in later chapters". Chapter 26 ends with Section 26.6; temperature programming is covered in Chapter 27 (Section 27.2) and gradient elution with liquid chromatography in Chapter 28.]
