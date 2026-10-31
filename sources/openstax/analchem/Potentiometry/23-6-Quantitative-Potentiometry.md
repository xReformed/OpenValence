---
title: "23.6: Quantitative Potentiometry"
book: "Instrumental Analysis (LibreTexts)"
chapter: "23: Potentiometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/23%3A_Potentiometry/23.06%3A_Direct_Potentiometric_Measurements"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

The most important application of potentiometry is determining the concentration of an analyte in solution. Most potentiometric electrodes are selective toward the free, uncomplexed form of the analyte, and do not respond to any of the analyte’s complexed forms. This selectivity provides potentiometric electrodes with a significant advantage over other quantitative methods of analysis if we need to determine the concentration of free ions. For example, calcium is present in urine both as free Ca^2+ ions and as protein-bound Ca^2+ ions. If we analyze a urine sample using atomic absorption spectroscopy, the signal is proportional to the total concentration of Ca^2+ because both free and bound calcium are atomized. Analyzing urine with a Ca^2+ ISE, however, gives a signal that is a function of only free Ca^2+ ions because the protein-bound Ca^2+ can not interact with the electrode’s membrane. In this section, we consider several important aspects of quantitative potentiometry.

[Note: corrected; the source prints "propor- tional" where this reads "proportional"; the source prints "of quantiative potentiometry" where this reads "of quantitative potentiometry". A leftover line-break hyphen and a misspelling.]

## The Relationship Between Concentration and Potential

In Chapter 23.3, we showed that the potential of an ion-selective electrode for an ion with a charge of z is

E_cell = K + (0.05916/z) log(aA)_samp

where K is a constant that includes the potentials of the ion-selective electrode's internal and external reference electrodes, any asymmetry potential associated with the ion-selective electrode's membrane, and the analyte's activity in the ion-selective electrode's internal solution. Equation (quant1) is a general equation and applies to all types of ion-selective electrodes. Note that when the analyte is a cation, an increase in the analyte's activity results in an increase in the potential; when the analyte is an anion, which makes z a negative number, an increase in the analyte's activity results in a decrease in the potential.

[Note: corrected; the source prints "results in results in an increase" where this reads "results in an increase". Doubled words.]

As the concentrations of ions in solution often are reported as pX values, where

pX = −log a_X

it is convenient to substitute Equation (quant2) into Equation (quant1)

E_cell = K − 0.05916/z pA

Note that for a cation, an increase in pA results in a decrease in the potential; when the analyte is an anion, an increase in pA results in an increase in the potential.

## Calibrating Potentiometric Electrodes

To use Equation (quant3) we need to determine the value of K, which we can do using one or more external standards or by the method of standard addition, both of which were covered in Chapter 1.5. One complication, of course, is that potential is a function of the analyte's activity instead of its concentration.

### Activity and Concentration

Equation (quant1) is written in terms of the analyte's activity. When we use a potentiometric electrode, however, our goal is to determine the analyte’s concentration. As we learned in Chapter 22, an ion’s activity is the product of its concentration, [M^n+], and a matrix-dependent activity coefficient, γ_(M^n+).

[Note: corrected; the source prints "γ_(Mn^n+)" where this reads "γ_(M^n+)". The activity coefficient is that of the ion M^n+, as in Equation (quant4), not of manganese.]

a_(M^n+) = [M^n+]γ_(M^n+)

Substituting Equation (quant4) into Equation (quant1) and rearranging, gives

E_cell = K + (0.05916/n) log γ_(M^n+) + (0.05916/n) log[M^n+]

We can solve Equation (quant5) for the metal ion’s concentration if we know the value for its activity coefficient. Unfortunately, if we do not know the exact ionic composition of the sample’s matrix—which is the usual situation—then we cannot calculate the value of γ_(M^n+). There is a solution to this dilemma. If we design our system so that the standards and the samples have an identical matrix, then the value of γ_(M^n+) remains constant and Equation (quant5) simplifies to

[Note: corrected; the source prints "calculate the value of γ_(Mn^n+)" where this reads "calculate the value of γ_(M^n+)"; the source prints "then the value of γ_(Mn^n+) remains" where this reads "then the value of γ_(M^n+) remains". The activity coefficient is that of the ion M^n+, as in Equation (quant5), not of manganese.]

E_cell = K^′ + (0.05916/n) log[M^n+]

where K^′ includes the activity coefficient.

### Calibration Using External Standards

In the absence of interferents, a calibration curve of E_cell versus loga_A, where A is the analyte, is a straight-line. A plot of E_cell versus log[A], however, may show curvature at higher concentrations of analyte as a result of a matrix-dependent change in the analyte’s activity coefficient. To maintain a consistent matrix we add a high concentration of an inert electrolyte to all samples and standards. If the concentration of added electrolyte is sufficient, then the difference between the sample’s matrix and the matrix of the standards will not affect the ionic strength and the activity coefficient essentially remains constant. The inert electrolyte added to the sample and the standards is called a total ionic strength adjustment buffer (TISAB).

### Example 23.6.1

The concentration of Ca^2+ in a water sample is determined using the method of external standards. The ionic strength of the samples and the standards is maintained at a nearly constant level by making each solution 0.5 M in KNO3. The measured cell potentials for the external standards are shown in the following table.

| [Ca^2+] (M) | E_cell (V) |
| --- | --- |
| 1.00 × 10^−5 | –0.125 |
| 5.00 × 10^−5 | –0.103 |
| 1.00 × 10^−4 | –0.093 |
| 5.00 × 10^−4 | –0.072 |
| 1.00 × 10^−3 | –0.063 |
| 5.00 × 10^−3 | –0.043 |
| 1.00 × 10^−2 | –0.033 |

What is the concentration of Ca^2+ in a water sample if its cell potential is found to be –0.084 V?

**Solution**

Linear regression gives the calibration curve in Figure 23.6.1, with an equation of

E_cell = 0.027 + 0.0303 log[Ca^2+]

Substituting the sample’s cell potential gives the concentration of Ca^2+ as 2.17 × 10^−4 M. Note that the slope of the calibration curve, which is 0.0303, is slightly larger than its ideal value of 0.05916/2 = 0.02958; this is not unusual and is one reason for using multiple standards. One reason that it is not unusual to find that the experimental slope deviates from its ideal value of 0.05916/n is that this ideal value assumes that the temperature is 25°C.

[Note: a least-squares fit of E_cell against log[Ca^2+] for the seven tabulated standards gives E_cell = 0.0279 + 0.0304 log[Ca^2+], not the printed 0.027 + 0.0303 log[Ca^2+], and a Ca^2+ concentration for the sample of 2.10 × 10^−4 M rather than 2.17 × 10^−4 M (the 2.17 × 10^−4 M does follow from the printed equation). The printed table may differ from the data the book fitted; the slope is still slightly larger than the ideal 0.02958.]

<!-- end of example -->

Figure 23.6.1: Calibration curve for the data in Example 23.6.1.
Calibration curve for the data in Example 23.7.1.

[Note: the image's description refers to "Example 23.7.1"; the data are those of Example 23.6.1, as the caption says. There is no Example 23.7.1.]

### Calibration Using Standard Additions

Another approach to calibrating a potentiometric electrode is the method of standard additions, which was introduced in Chapter 1.5. First, we transfer a sample with a volume of V_samp and an analyte concentration of C_samp into a beaker and measure the potential, (E_cell)_samp. Next, we make a standard addition by adding to the sample a small volume, V_std, of a standard that contains a known concentration of analyte, C_std, and measure the potential, (E_cell)_std. If V_std is significantly smaller than V_samp, then we can safely ignore the change in the sample’s matrix and assume that the analyte’s activity coefficient is constant. Example 23.6.2 demonstrates how we can use a one-point standard addition to determine the concentration of analyte in a sample.

[Note: corrected; the source prints "Example 23.6.9" where this reads "Example 23.6.2". The one-point standard addition is the next Example, 23.6.2; the section has only two Examples.]

### Example 23.6.2

The concentration of Ca^2+ in a sample of sea water is determined using a Ca ion-selective electrode and a one-point standard addition. A 10.00-mL sample is transferred to a 100-mL volumetric flask and diluted to volume. A 50.00-mL aliquot of the sample is placed in a beaker with the Ca ISE and a reference electrode, and the potential is measured as –0.05290 V. After adding a 1.00-mL aliquot of a 5.00 × 10^−2 M standard solution of Ca^2+ the potential is –0.04417 V. What is the concentration of Ca^2+ in the sample of sea water?

**Solution**

To begin, we write the Nernst equation before and after adding the standard addition. The cell potential for the sample is

(E_cell)_samp = K + (0.05916/2) log C_samp

and that following the standard addition is

(E_cell)_std = K + (0.05916/2) log{((V_samp)/(V_tot))C_samp + ((V_std)/(V_tot))C_std}

where V_tot is the total volume (V_samp + V_std) after the standard addition. Subtracting the first equation from the second equation gives

ΔE = (E_cell)_std − (E_cell)_samp = (0.05916/2) log{((V_samp)/(V_tot))C_samp + ((V_std)/(V_tot))C_std}−(0.05916/2) log C_samp

Rearranging this equation leaves us with

(2ΔE_cell)/0.05916 = log{(V_samp)/(V_tot) + (V_std C_std)/(V_tot C_samp)}

Substituting known values for ΔE, V_samp, V_std, V_tot and C_std,

(2 × {−0.04417 − (−0.05290)})/0.05916 = log{(50.00 mL)/(51.00 mL) + ((1.00 mL)(5.00 × 10^−2 M))/((51.00 mL)C_samp)}

0.2951 = log{0.9804 + (9.804 × 10^−4)/(C_samp)}

and taking the inverse log of both sides gives

1.973 = 0.9804 + (9.804 × 10^−4)/(C_samp)

Finally, solving for C_samp gives the concentration of Ca^2+ as 9.88 × 10^−4 M. Because we diluted the original sample of seawater by a factor of 10, the concentration of Ca^2+ in the seawater sample is 9.88 × 10^−3 M.

## The Operational Definition of pH

With the availability of inexpensive glass pH electrodes and pH meters, the determination of pH is one of the most common quantitative analytical measurements. The potentiometric determination of pH, however, is not without complications, several of which we discuss in this section.

One complication is confusion over the meaning of pH [Kristensen, H. B.; Saloman, A.; Kokholm, G. Anal. Chem. 1991, 63, 885A–891A]. The conventional definition of pH in most general chemistry textbooks is given in terms of the concentration of H^+

pH = −log[H^+]

As we now know, when we measure pH it actually is a measure of the activity of H^+.

pH = −log a_(H^+)

Try this experiment—find several general chemistry textbooks and look up pH in each textbook’s index. Turn to the appropriate pages and see how it is defined. Next, look up activity or activity coefficient in each textbook’s index and see if these terms are indexed.

Equation (quant7) only approximates the true pH. If we calculate the pH of 0.1 M HCl using Equation (quant7), we obtain a value of 1.00; the solution’s actual pH, as defined by Equation (quant8), is 1.1 [Hawkes, S. J. J. Chem. Educ. 1994, 71, 747–749]. The activity and the concentration of H^+ are not the same in 0.1 M HCl because the activity coefficient for H^+ is not 1.00 in this matrix. Figure 23.6.2 shows a more colorful demonstration of the difference between activity and concentration.

Figure 23.6.2: A demonstration of the difference between activity and concentration using the indicator methyl green. The indicator is pale yellow in its acid form (beaker a: 1.0 M HCl) and is blue in its base form (beaker d: H2O). In 10 mM HCl the indicator is in its base form (beaker b: 20 mL of 10 mM HCl with 3 drops of methyl green). Adding 20 mL of 5 M LiCl to this solution shifts the indicator's color to green (beaker c); although the concentration of HCl is cut in half to 5 mM, the activity of H^+ has increased as evidenced by the green color that is intermediate between the indicator’s pale yellow, acid form and its blue, base form. The demonstration shown here is adapted from McCarty, C. G.; Vitz, E. “pH Paradoxes: Demonstrating That It Is Not True That pH ≡ –log[H^+],” J. Chem. Educ. 2006, 83, 752–757. This paper provides several additional demonstrations that illustrate the difference between concentration and activity.
A demonstration of the difference between activity and concentration using the indicator methyl green.

A second complication in measuring pH is the uncertainty in the relationship between potential and activity. For a glass membrane electrode, the cell potential, (E_cell)_samp, for a sample of unknown pH is

(E_cell)_samp = K − (RT/F) ln(1/(a_(H^+))) = K − ((2.303RT)/F)pH_samp

where K includes the potential of the reference electrode, the asymmetry potential of the glass membrane, and any junction potentials in the electrochemical cell. All the contributions to K are subject to uncertainty, and may change from day-to-day, as well as from electrode-to-electrode. For this reason, before using a pH electrode we calibrate it using a standard buffer of known pH. The cell potential for the standard, (E_cell)_std, is

(E_cell)_std = K − ((2.303RT)/F)pH_std

[Note: corrected; the source prints "(E_ccll)_std" where this reads "(E_cell)_std". A typo for the cell potential.]

where pH_std is the standard’s pH. Subtracting Equation (quant10) from Equation (quant9) and solving for pH_samp gives

[Note: corrected; the source prints "Equation (quan10)" where this reads "Equation (quant10)". The reference misspells the label of the standard's equation, quant10, so it points to no equation.]

pH_samp = pH_std − ({(E_cell)_samp − (E_cell)_std}F)/(2.303RT)

which is the operational definition of pH adopted by the International Union of Pure and Applied Chemistry [Covington, A. K.; Bates, R. G.; Durst, R. A. Pure & Appl. Chem. 1985, 57, 531–542].

[Note: corrected; the source prints "Bates, R. B." where this reads "Bates, R. G.". The co-author is Roger G. Bates, cited as "Bates, R. G." under Table 23.6.1.]

Calibrating a pH electrode presents a third complication because we need a standard with an accurately known activity for H^+. Table 23.6.1 provides pH values for several primary standard buffer solutions accepted by the National Institute of Standards and Technology.

Table 23.6.1. pH Values for Selected NIST Primary Standard Buffers

| temp (^oC) | saturated; (at 25^oC) KHC4H4O6 (tartrate) | 0.05 m KH2C6H5O7; (citrate) | 0.05 m KHC8H4O4 (phthalate) | 0.025 m KH2PO4, 0.025 m Na2HPO4 | 0.008695 m KH2PO4, 0.03043 m Na2HPO4 | 0.01 m Na2B4O7 | 0.025 m NaHCO3, 0.025 m Na2CO3 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | — | 3.863 | 4.003 | 6.984 | 7.534 | 9.464 | 10.317 |
| 5 | — | 3.840 | 3.999 | 6.951 | 7.500 | 9.395 | 10.245 |
| 10 | — | 3.820 | 3.998 | 6.923 | 7.472 | 9.332 | 10.179 |
| 15 | — | 3.802 | 3.999 | 6.900 | 7.448 | 9.276 | 10.118 |
| 20 | — | 3.788 | 4.002 | 6.881 | 7.429 | 9.225 | 10.062 |
| 25 | 3.557 | 3.776 | 4.008 | 6.865 | 7.413 | 9.180 | 10.012 |
| 30 | 3.552 | 3.766 | 4.015 | 6.854 | 7.400 | 9.139 | 9.966 |
| 35 | 3.549 | 3.759 | 4.024 | 6.844 | 7.389 | 9.102 | 9.925 |
| 40 | 3.547 | 3.753 | 4.035 | 6.838 | 7.380 | 9.068 | 9.889 |
| 45 | 3.547 | 3.750 | 4.047 | 6.834 | 7.373 | 9.038 | 9.856 |
| 50 | 3.549 | 3.749 | 4.060 | 6.833 | 7.367 | 9.011 | 9.828 |
| Source: Values taken from Bates, R. G. Determination of pH: Theory and Practice, 2nd ed. Wiley: New York, 1973. See also Buck, R. P., et al.“Measurement of pH. Definition, Standards, and Procedures,” Pure. Appl. Chem. 2002, 74, 2169–2200. All concentrations are molal (m). |  |  |  |  |  |  |  |

[Note: corrected; the source prints "KHC4H4O7 (tartrate)" where this reads "KHC4H4O6 (tartrate)"; the source prints "(phthlate)" where this reads "(phthalate)"; the source prints "0.025 m NaHPO4" where this reads "0.025 m Na2HPO4"; the source prints "0.01 m Na4B4O7" where this reads "0.01 m Na2B4O7"; the source prints "| 9.012 |" where this reads "| 9.102 |"; the source prints "Buck, R. P., et. al." where this reads "Buck, R. P., et al.". Potassium hydrogen tartrate is KHC4H4O6, the equimolal phosphate buffer is KH2PO4 with Na2HPO4 (as in the next column), and the borax buffer is Na2B4O7; the borate buffer's pH at 35 °C is 9.102 (Bates), which falls between its 9.139 at 30 °C and 9.068 at 40 °C, where 9.012 would break the column's steady decline; "phthlate" and "et. al." are misspellings.]

To standardize a pH electrode using two buffers, choose one near a pH of 7 and one that is more acidic or basic depending on your sample’s expected pH. Rinse your pH electrode in deionized water, blot it dry with a laboratory wipe, and place it in the buffer with the pH closest to 7. Swirl the pH electrode and allow it to equilibrate until you obtain a stable reading. Adjust the “Standardize” or “Calibrate” knob until the meter displays the correct pH. Rinse and dry the electrode, and place it in the second buffer. After the electrode equilibrates, adjust the “Slope” or “Temperature” knob until the meter displays the correct pH.

Some pH meters can compensate for a change in temperature. To use this feature, place a temperature probe in the sample and connect it to the pH meter. Adjust the “Temperature” knob to the solution’s temperature and calibrate the pH meter using the “Calibrate” and “Slope” controls. As you are using the pH electrode, the pH meter compensates for any change in the sample’s temperature by adjusting the slope of the calibration curve using a Nernstian response of 2.303RT/F.
