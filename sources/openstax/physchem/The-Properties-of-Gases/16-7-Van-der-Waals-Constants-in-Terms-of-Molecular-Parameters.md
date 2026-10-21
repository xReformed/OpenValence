---
title: "16.7: Van der Waals Constants in Terms of Molecular Parameters"
book: "Physical Chemistry (LibreTexts)"
chapter: "16: The Properties of Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/16%3A_The_Properties_of_Gases/16.07%3A_Van_der_Waals_Constants_in_Terms_of_Molecular_Parameters"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The van der Waals equation can be written as:

P = RT/(V̄ − b) − a/(V̄^2)

Using the binomial expansion:

1/(1 − x) = 1 + x + x^2 + …

We can write the van der Waals equation of state as:

P = (RT/(V̄))[1 + b/(V̄) + b^2/(V̄^2) + …]−a/(V̄^2)

= RT/(V̄) + (RTb − a)1/(V̄^2) + RTb^2/(V̄^3) + …

[Note: corrected; the source prints "+ RTb^2/(V̄^3) + ·" where this reads "+ RTb^2/(V̄^3) + …". The source types \cdot for \cdots.]

Rearranging in terms of compressibility, Z:

Z = (PV̄)/RT = 1 + (b − a/RT)1/(V̄) + b^2/(V̄^2) + …

Comparing to the Viral equation of state, we can see that the second Viral coefficient is related to the van der Waals coefficients:

B_2V(T) = b − a/RT

Using a combination of the hard sphere model and the Lennard-Jones potential, we obtain:

u(r) = {∞, r ≤ σ; −(C6)/r^6, r > σ}

We can write the second Virial coefficient as

B2(T) = (2/3)πN0σ^3[1 − (C6)/(kB Tσ^6)]

[Note: corrected; the source prints "[1 − (C6)/(3 kB Tσ^6)]" where this reads "[1 − (C6)/(kB Tσ^6)]". −2πN0 ∫σ^∞ (C6/(kB T r^6)) r^2 dr = −2πN0 C6/(3 kB T σ^3) = −(2/3)πN0σ^3 · C6/(kB T σ^6): no factor 3 is left.]

Let us introduce to simplifying variables

b = (2/3)πN0σ^3

a = (2πN0^2 C6)/(3σ^3)

[Note: corrected; the source prints "a = (2πN0^2 C6)/(9σ^3)" where this reads "a = (2πN0^2 C6)/(3σ^3)". From a/RT = 2πN0 C6/(3 kB T σ^3) and RT = N0 kB T.]

In which the second Virial coefficient becomes:

B2(T) = b − a/RT

From these equations, we can see that a is directly proportional to c6, the intermolecular attraction between particles with a potential energy proportional to r^−6. Likewise, b is equivalent to four times the volume of the particle. In other words, the van der Waals equations assumes the hard sphere model at small distances and weak interactions (attractive forces) at larger distances.

[Note: corrected; the source prints "with a force proportional to r^−6" where this reads "with a potential energy proportional to r^−6". The potential goes as r^−6; the force, −du/dr, as r^−7.]
