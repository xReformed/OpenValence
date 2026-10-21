---
title: "18.2: Most Atoms are in the Ground Electronic State"
book: "Physical Chemistry (LibreTexts)"
chapter: "18: Partition Functions and Ideal Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18%3A_Partition_Functions_and_Ideal_Gases/18.02%3A_Most_Atoms_are_in_the_Ground_Electronic_State"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Writing the electronic energies as E1, E2, E3, ... with corresponding degeneracies g1, g2, g3, …. The electronic partition function is then given by the following summation:

q_el(T) = g1 e^(−E1/kT) + g2 e^(−E2/kT) + g3 e^(−E3/kT) + …

Usually, the differences in electronic energies are significantly greater than thermal energy kT:

kT ≪ E2 − E1 < E3 − E1

[Note: corrected; the source prints "kT ≪ E1 < E2 < E3" where this reads "kT ≪ E2 − E1 < E3 − E1". It is the energy differences that exceed kT; E1 is set to zero below.]

If we treat the lowest energy electronic state E1 as the reference value of zero of energy, the electronic partition function (Equation (Q1)) can be approximated as:

q_elec(T) = g1 + g2 e^(−E2/kT) + g3 e^(−E3/kT) + …

Typically electronic states are tens of thousands of wave numbers above the ground state. For example, the first excited electronic state of nitric oxide (NO) is ~40,000 cm^-1. Using this value:

(E2)/kT = (40000 cm^−1)/kT ≈ (5.8 × 10^4 K)/T

[Note: corrected; the source prints "= (10^4 K)/T" where this reads "≈ (5.8 × 10^4 K)/T". 40000 cm^−1 × 1.4388 cm K = 57,550 K.]

That means, that even at 1,000 K, the value of the second term in (3.24) is:

[Note: with E2/kT = 57.6 at 1,000 K, the term below is g2 e^−57.6 ≈ g2 × 1.0 × 10^−25, not g2 e^−10 (the source's 10^4 K above); the conclusion, that the excited state contributes nothing, only becomes stronger. The text is left as printed.]

g2 e^−10 = g2 4.5 × 10^−5

The result is that the higher electronic states are not accessible under ordinary temperatures. There are some cases, however, where the first excited state lies much closer to the ground state, but these are the exception rather than the rule.

### Example 18.2.1

Find the electronic partition of H2 at 300 K.

**Solution**

The lowest electronic energy level of H2 is near −32 eV and the next level is about 5 eV higher. Taking -32 eV as the zero (or reference value of energy), then

q_el = e^0 + e^(−5eV/kT) + ...

[Note: corrected; the source prints "q_el = e0 +" where this reads "q_el = e^0 +". The first term is e^0 = 1.]

At 300 K, kT = 0.026 eV and

[Note: corrected; the source prints "At 300 K, T = 0.02 eV and" where this reads "At 300 K, kT = 0.026 eV and". kT at 300 K is 0.0259 eV; 5/0.0259 ≈ 193, about the e^−200 below.]

q_el = 1 + e^−200 + ...

≈ 1.0

Where all terms other than the first are essentially 0. This implies that q_el = 1.

<!-- end of example -->

The physical meaning of the result from Example 18.2.1 is that only the ground electronic state is generally thermally accessible at room temperature.

## Contributors and Attributions

- www.chem.iitb.ac.in/~bltembe/pdfs/ch_3.pdf
