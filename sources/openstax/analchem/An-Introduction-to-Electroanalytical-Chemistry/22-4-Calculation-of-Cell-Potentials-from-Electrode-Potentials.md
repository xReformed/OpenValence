---
title: "22.4: Calculation of Cell Potentials from Electrode Potentials"
book: "Instrumental Analysis (LibreTexts)"
chapter: "22: An Introduction to Electroanalytical Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/22%3A_An_Introduction_to_Electroanalytical_Chemistry/22.04%3A_Calculation_of_Cell_Potentials_from_Electrode_Potentials"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

The potential of an electrochemical cell is the difference between the electrode potentials of the cathode and the anode

E_cell = E_cathode − E_anode

where E_cathode and E_anode are both reduction potentials. Given a set of conditions, we can use the Nernst equation to calculate the cell potential, as shown by the following example.

### Example 22.4.1

Calculate (a) the standard state potential and (b) the potential when [Ag^+] = 0.0020 M and [Cd^2+] = 0.0050 M, for the following reaction at 25^oC.

Cd(s) + 2Ag^+(aq) ⇌ 2Ag(s) + Cd^2+(aq)

For part (b), calculate the potential twice, once using concentrations and once using activities assuming that the solution's ionic strength is 0.100.

**Solution**

(a) In this reaction Cd is oxidized at the anode and Ag^+ is reduced at the cathode. Using standard state electrode potentials from Appendix 8, we find that the standard state potential is

[Note: corrected; the source prints "Appendix 3" where this reads "Appendix 8". The standard reduction potentials are in Appendix 8 (Chapter 35.8); Appendix 3 is the table of critical values for the t-test.]

E° = E°_(Ag^+/Ag) − E°_(Cd^2+/Cd) = 0.7996 − (−0.4030) = 1.2026 V

(b) To calculate the potential when [Ag^+] is 0.0020 M and [Cd^2+] is 0.0050 M, we use the appropriate relationship for the reaction quotient, Q_r, when writing the Nernst equation

E = E° − ((0.05916 V)/n) log(([Cd^2+])/([Ag^+]^2))

E = 1.2026 V−((0.05916 V)/2) log(0.0050/((0.0020)^2)) = 1.11 V

[Note: corrected; the source prints "log(0.050/((0.020)^2)) = 1.14 V" where this reads "log(0.0050/((0.0020)^2)) = 1.11 V". The Example gives [Cd^2+] = 0.0050 M and [Ag^+] = 0.0020 M, and 1.2026 V − (0.05916 V/2) log(0.0050/0.0020^2) = 1.11 V; the printed line uses ten times those concentrations.]

To calculate the potential using activities, we first calculate the activity coefficients for Cd^2+ and Ag^+. Following the approach outlined in the appendix in Chapter 35.7 gives

log γ_(Cd^2+) = (−0.51 × (+2)^2 × √(0.100))/(1 + 3.3 × 0.50 × √(0.100)) = −0.4239

[Note: corrected; the source prints "= −0.2078" where this reads "= −0.4239". −0.51 × 4 × √0.100 / (1 + 3.3 × 0.50 × √0.100) = −0.6451/1.5218 = −0.4239.]

log γ_(Ag^+) = (−0.51 × (+1)^2 × √(0.100))/(1 + 3.3 × 0.25 × √(0.100)) = −0.1279

[Note: corrected; the source prints "]logγ_(Ag^+)" where this reads "log γ_(Ag^+)". The source has a stray bracket before log and no space after it.]

a_(Cd^2+) = γ_(Cd^2+) × [Cd^2+] = 0.3768 × 0.0050 = 0.001884

[Note: corrected; the source prints "0.6197 × 0.0050 = 0.003098" where this reads "0.3768 × 0.0050 = 0.001884". With log γ_(Cd^2+) = −0.4239, γ_(Cd^2+) = 10^−0.4239 = 0.3768 (the printed 0.6197 is 10^−0.2078).]

a_(Ag^+) = γ_(Ag^+) × [Ag^+] = 0.7449 × 0.0020 = 0.00149

[Note: corrected; the source prints "7449 × 0.0020" where this reads "0.7449 × 0.0020". γ_(Ag^+) = 10^−0.1279 = 0.7449; an activity coefficient cannot exceed 1 here, and 0.7449 × 0.0020 gives the 0.00149 shown.]

Finally, we substitute activities for concentrations in the Nernst equation to arrive at a potential of

E = 1.2026 V−((0.05916 V)/2) log(0.001884/((0.00149)^2)) = 1.12 V

[Note: corrected; the source prints "log(0.003098/((0.00149)^2)) = 1.11 V" where this reads "log(0.001884/((0.00149)^2)) = 1.12 V". With a_(Cd^2+) = 0.001884, 1.2026 V − (0.05916 V/2) log(0.001884/0.00149^2) = 1.12 V.]
