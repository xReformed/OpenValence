---
title: "18.4: Most Molecules are in the Ground Vibrational State"
book: "Physical Chemistry (LibreTexts)"
chapter: "18: Partition Functions and Ideal Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18%3A_Partition_Functions_and_Ideal_Gases/18.04%3A_Most_Molecules_are_in_the_Ground_Vibrational_State"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The vibrational energy levels of a diatomic are given by:

Ev = (v + 1/2)hν

where is ν the vibrational frequency and v is the vibrational quantum number. In this case, it is easy to sum the geometric series shown below:

q_vib = Σ_(v=0)^∞e^{−(v + 1/2)hν/kT}

= e^(−hν/2kT)(1 + e^(−hν/kT) + e^(−2hν/kT) + ...)

or rewritten as:

q_vib = e^(−hν/2kT)(1 + x + x^2 + x^3 + ...)

where x = e^(−hν/kT). Given the following power series expansion:

1/(1 − x) = 1 + x + x^2 + x^3 + x^4 + ....

Equation (eq0) can be rewritten as:

q_vib = e^(−hν/2kT)(1/(1 − x))

or:

q_vib = (e^(−hν/2kT))/(1 − e^(−hν/kT))

If the zero of energy scale is at hν/2, then Equation (eq1) can be rewritten as:

[Note: corrected; the source prints "at hν/2kT" where this reads "at hν/2". hν/2kT has no unit; the zero is the zero-point level hν/2.]

q_vib ≈ 1/(1 − e^(−hν/kT))

A vibrational temperature Θ_vib may be defined as:

Θ_vib = (hcν̃)/k

where ν̃ is the vibrational frequency in cm^-1. Θ_vib is a good way to express the stiffness of the vibrating bond in units of the Boltzmann constant. Because the stiffness obviously depends on what bond your are talking about, this is a good way to do the same thing we did for the critical temperature of the non-ideal gases.

Table 18.4.1 : Representative molecular data for a few diatomics

| Molecule | g | Bond Length (Å) | ω (cm^-1) | Θ_vib (K) | B̃ (cm^-1) | Θ_rot (K) | Force constant k (mdyn/Å) | D0 (kcal/ mol) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H2 | 1 | 0.7414 | 4400 | 6332 | 60.9 | 87.6 | 5.749 | 103.2 |
| D2 | 1 | 0.7415 | 3118 | 4487 | 30.45 | 43.8 | 5.77 | 104.6 |
| N2 | 1 | 1.097 | 2358 | 3393 | 2.001 | 2.88 | 22.94 | 225.1 |
| O2 | 3 | 1.207 | 1580 | 2274 | 1.446 | 2.08 | 11.76 | 118.0 |
| Cl2 | 1 | 1.987 | 560 | 805 | 0.244 | 0.351 | 3.2 | 57.0 |
| CO | 1 | 1.128 | 2170 | 3122 | 1.931 | 2.78 | 19.03 | 255.8 |
| NO | 2 | 1.15 | 1890 | 2719 | 1.695 | 2.45 | 15.7 | 150.0 |
| HCl | 1 | 1.275 | 2938 | 4227 | 10.44 | 15.02 | 4.9 | 102.2 |
| HI | 1 | 1.609 | 2270 | 3266 | 6.46 | 9.29 | 3.0 | 70.5 |
| Na2 | 1 | 3.096 | 159 | 229 | 0.154 | 0.221 | 0.17 | 17.3 |
| K2 | 1 | 3.979 | 92.3 | 133 | 0.0561 | 0.081 | 0.10 | 11.8 |

[Note: corrected; the source prints "| Bond Length (pm) |" where this reads "| Bond Length (Å) |"; the source prints "| Force constant k (dynes/cm) |" where this reads "| Force constant k (mdyn/Å) |"; the source prints "| H2 | 1 | 0.7474 |" where this reads "| H2 | 1 | 0.7414 |"; the source prints "| N2 | 1 | 1.097 | 2358 | 3393 | 2.001 | 2.99 |" where this reads "| N2 | 1 | 1.097 | 2358 | 3393 | 2.001 | 2.88 |"; the source prints "| NO | 2 | 1.15 | 190 | 2719 |" where this reads "| NO | 2 | 1.15 | 1890 | 2719 |"; the source prints "| HI | 1 | 1.609 | 2270 | 3266 | 6.46 | 9.06 |" where this reads "| HI | 1 | 1.609 | 2270 | 3266 | 6.46 | 9.29 |". The bond lengths are in Å (H2 0.741 Å = 74.1 pm) and the force constants in mdyn/Å (H2 575 N/m = 5.75); Θrot = 1.4388 B̃ gives 2.88 K for N2 and 9.29 K for HI; NO's Θvib of 2719 K and k imply ω ≈ 1890 cm^−1.]

### Example 18.4.1

The vibrational frequency of of I2 is 214.57 cm^−1. Calculate the vibrational partition function of I2 at 300 K.

**Solution**

hν/kT = 214.57/208.5 = 1.029

[Note: corrected; the source prints "hν/kT = 214.57/209.7 = 1.0232" where this reads "hν/kT = 214.57/208.5 = 1.029". kT/hc at 300 K is 208.5 cm^−1 (0.69504 × 300).]

so

e^(−hν/kT) = 0.3573

[Note: corrected; the source prints "e^(−hν/kT) = 0.3595" where this reads "e^(−hν/kT) = 0.3573". e^−1.029 = 0.3573.]

and

q_vib = 1/(1 − 0.3573) = 1.556

[Note: corrected; the source prints "q_vib = 1/(1 − 0.3595) = 1.561" where this reads "q_vib = 1/(1 − 0.3573) = 1.556". 1/(1 − 0.3573) = 1.556.]

This implies, as before, that very few vibrational states are accessible and much less than rotation states and many orders less than translation states.

## Vibrational Heat Capacity

The vibrational energy is given by the above expression and the molar heat capacity at constant volume, C̄V is given by:

C̄V = ((∂E)/(∂T))_V

We have:

(∂)/(∂T) = (∂β)/(∂T) · (∂)/(∂β)

= (−1)/kT^2 · (∂)/(∂β)

= (−kβ^2)((∂)/(∂β))

Therefore:

C̄V = (−kβ^2)((∂ε_vib)/(∂β))

and when the vibrational partition function (Equation (VIBQ)) is introduced:

C̄V = −kβ^2 (([(1 − e^(−hcν̃/kT))(−hcν̃) − e^(−hcν̃/kT)(+hcν̃)]e^(−hcν̃/kT))/((1 − e^(−hcν̃/kT))^2))hcν̃

[Note: corrected; the source prints "q_vib = −kβ^2" where this reads "C̄V = −kβ^2"; the source prints "(1 − e^(−hcν/kT))(−hcν̃) − e^(−hcν/kT)(+hcν̃)]e^(−hcν/kT))/((1 − e^(−hcν/kT))^2))hvν̃" where this reads "(1 − e^(−hcν̃/kT))(−hcν̃) − e^(−hcν̃/kT)(+hcν̃)]e^(−hcν̃/kT))/((1 − e^(−hcν̃/kT))^2))hcν̃". This is the heat capacity, and the exponents and the factor are in hcν̃; the final result below is right.]

= k((Θ_vib)/T)^2 (e^(−Θ_vib/T))/((1 − e^(−Θ_vib/T))^2)

For large T, the C̄V becomes:

NA k = R

and for small T, C̄V goes to zero as demonstrated in Figure 18.4.1 .

Figure 18.4.1: Vibrational heat capacity of a diatomic
Graph showing a curve representing a relationship between two variables, ζ and T.

The vibrational heat capacity is shown as function of the reduced temperature T/Θ to get a general picture valid for all diatomic gases. Compare the parameters on Table 18.4.1 to see on what different absolute scales we have to think for different gases. Clearly the vibrational contribution to the heat capacity depends on temperature. For many molecules (especially light ones), the vibrational contribution only kicks in at quite high temperatures.

The value of Θ_vib is determined mostly by

1. the strength of a bond (the stronger the higher Θ_vib )
2. the (effective) mass of the molecule (the lighter the higher Θ_vib )

Molecules with low Θ_vib often dissociate at lower temperatures, although the harmonic oscillator model is not sufficient to describe that phenomenon.

## Vibrational Populations

We can calculate the fraction of molecules in each vibrational state. The fraction of molecules in the vth vibrational state is given by:

fv = (e^{−hν(v + 1/2)/kT})/(q_vib)

Substituting in Equation (eq1), we get:

fv = (1 − e^(−hν/kT))e^(−hνv/kT)

= (1 − e^(−Θ_vib/T))e^(−Θ_vib v/T)

We can plot the fraction molecules in each vibrational state.

The vibrational population of Cl2 at 300 K. Most of the molecules are in the ground vibrational state, v = 0.
Bar chart of the fraction of Cl2 molecules in each vibrational level at 300 K; almost all are in v = 0.

[Note: corrected; the source prints "A minimalist black icon of a laptop with a cursor and a vertical line, resembling a text cursor in a coding environment." where this reads "Bar chart of the fraction of Cl2 molecules in each vibrational level at 300 K; almost all are in v = 0.". The image's alt text, machine-written, misreads the image; this describes it.]

From the figure, we can see that most of the Cl2 molecules are in the ground vibrational state at room temperature (300 K). This is true for most molecules. Only molecules with very weak bonds and low vibrational temperatures will populate a significant fraction of molecules in excited vibrational states.

## Contributors and Attributions

- www.chem.iitb.ac.in/~bltembe/pdfs/ch_3.pdf
