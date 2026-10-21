---
title: "22.8: Fugacity Measures Nonideality of a Gas"
book: "Physical Chemistry (LibreTexts)"
chapter: "22: Helmholtz and Gibbs Energies"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/22%3A_Helmholtz_and_Gibbs_Energies/22.08%3A_Fugacity_Measures_Nonideality_of_a_Gas"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

We have seen that, for a closed system, the Gibbs energy is related to pressure and temperature as follows:

dG = VdP − SdT

For a constant temperature process:

dG = VdP

Equation (16.16) can be evaluated for an ideal gas:

dḠ = (RT/P)dP

At constant temperature, T:

dḠ = RT d ln P

This expression by itself is strictly applicable to ideal gases. However, Lewis, in 1901, suggested extending the applicability of this expression to all substances by defining a new thermodynamic property called fugacity, f, such that:

[Note: corrected; the source prints "Lewis, in 1905," where this reads "Lewis, in 1901,". G. N. Lewis introduced fugacity in 1901.]

dḠ = RT d ln f

This definition implies that for ideal gases, f must be equal to P. For non ideal gases, f is not equal to P. The ratio between fugacity and pressure is:

φ = f/P

where φ is the fugacity coefficient. The fugacity coefficient takes a value of unity when the substance behaves like an ideal gas. Therefore, the fugacity coefficient is also regarded as a measure of non-ideality; the closer the value of the fugacity coefficient is to unity, the closer we are to the ideal state. In the zero-pressure limit, fugacity approaches ideal gas behavior:

lim_(P → 0)dḠ = RT d ln P

For mixtures, this expression is written as:

dḠi = RT d ln fi

where Ḡi and fi are the partial molar Gibbs energy and fugacity of the i-th component, respectively. Fugacity can be readily related to chemical potential because of the one-to-one relationship of Gibbs energy to chemical potential, which we have discussed previously. Therefore, the definition of fugacity in terms of chemical potential becomes:

dμ̄i = RT d ln fi

Even though the concept of thermodynamic equilibrium is given in terms of chemical potentials, the above definitions allow us to restate the same principle in terms of fugacity. To do this, previous expressions can be integrated to obtain:

μ̄ = μ̄° + RT ln(f/(P°))

At equilibrium:

0 = Δμ̄° + RT ln Π(fi/P°)^(νi)

[Note: corrected; the source prints "0 = μ̄° + RT ln(f/(P°))" where this reads "0 = Δμ̄° + RT ln Π(fi/P°)^(νi)". A chemical potential does not vanish at equilibrium; for a reaction the condition is Δμ̄ = 0, which gives Δμ̄° = −RT ln Kf.]

Δμ̄° = −RT ln Π(fi/P°)^(νi)

[Note: corrected; the source prints "μ̄° = −RT ln(f/(P°))" where this reads "Δμ̄° = −RT ln Π(fi/P°)^(νi)". As above.]
