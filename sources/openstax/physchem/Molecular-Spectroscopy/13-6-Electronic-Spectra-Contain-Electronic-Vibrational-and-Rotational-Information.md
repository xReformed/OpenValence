---
title: "13.6: Electronic Spectra Contain Electronic, Vibrational, and Rotational Information"
book: "Physical Chemistry (LibreTexts)"
chapter: "13: Molecular Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13%3A_Molecular_Spectroscopy/13.06%3A_Electronic_Spectra_Contain_Electronic_Vibrational_and_Rotational_Information"
author: "Anonymous"
license: "CC BY 4.0"
---

In addition to the rotational and vibrational transitions seen in microwave and infrared absorption, molecules can also undergo electronic transitions. The energy level differences are usually high enough that it falls into the visible to UV range; in fact, most emissions in this range can be attributed to electronic transitions.

[Note: corrected; the source prints "Molecules can also undergo changes in electronic transitions during microwave and infrared absorptions." where this reads "In addition to the rotational and vibrational transitions seen in microwave and infrared absorption, molecules can also undergo electronic transitions.". Electronic transitions lie in the visible and ultraviolet, as the next sentence says.]

## Electron Transitions are not Purely Electronic

We have thus far studied rovibrational transitions--that is, transitions involving both the vibrational and rotational states. Similarly, electronic transitions tend to accompany both rotational and vibrational transitions. These are often portrayed as an electronic potential energy cure with the vibrational level drawn on each curve. Additionally, each vibrational level has a set of rotational levels associated with it.

Figure 13.6.1: Three types of energy levels in a diatomic molecule: electronic, vibrational, and rotational. If the vibrational quantum number (n) changes by one unit, then the rotational quantum number (l) changes by one unit. (CC BY 3.0; OpenStax).
Graph depicting energy versus internuclear separation, with labeled states: excited electronic, ground, vibrational, and rotational levels.

Recall that in the Born-Oppenheimer approximation, nuclear kinetic energies can be ignored (e.g., fixed) to solve for electronic wavefunctions and energies, which are much faster than rotation or vibration. As such, it is important to note that unlike rovibrational transitions, electronic transitions aren't dependent on rotational or transitional terms and are assumed to be separate. Therefore, when using an anharmonic oscillator-nonrigid rotator approximation (and excluding translation energy), the total energy of a diatomic is:

Ẽ_total = ν̃_el + G(v) + F(J)

where ν̃_el is the electronic transition energy change in wavenumbers, G(v) is the vibrational energy with energy level v (assuming anharmonic oscillator), and F(J) is the rotational energy, assuming a nonrigid rotor. Equation (Eqa1) can be expanded accordingly:

[Note: corrected; the source prints "G(n) is the vibrational energy" where this reads "G(v) is the vibrational energy". The vibrational term is G(v).]

Ẽ_total = ν̃_el (electronic) + (ν̃e(v + 1/2) − χ̃e ν̃e(v + 1/2)^2) (vibrational) + (B̃J(J + 1) − D̃J^2(J + 1)^2) (rotational)

Notice that both the vibration constant (ν̃e) and anharmonic constant ( χ̃e) are electronic state dependent (and hence the rotational constants would be too, but are ignored here). Since rotational energies tend to be so small compared to electronic, their effects are minimal and are typically ignored when we do calculations and are referred to as vibronic transitions.

Figure 13.6.2: As you can see, electronic transitions involve two energy potential wells! The vibrational levels are included, but rotational levels are excluded. (CC BY 4.0; LibreTexts)
Graph showing two potential energy curves against the distance (R), with energy levels indicated as horizontal lines.

The eigenstate-to-eigenstate transitions (e.g., 1 → 2) possible are numerous and have absorption lines at

ν̃_obs = Ẽ2 − Ẽ1

and for simplification, we refer to constants associated with these states as |''⟩ and |'⟩, respectively. So Equation (Eqa21) is

[Note: corrected; the source prints "as |'⟩ and |''⟩, respectively" where this reads "as |''⟩ and |'⟩, respectively". By the usual convention, and the rest of this page, ' marks the upper and '' the lower state.]

ν̃_obs = Ẽ'(v') − Ẽ''(v'')

[Note: corrected; the source prints "ν̃_obs = Ẽ''(v'') − Ẽ'(v')" where this reads "ν̃_obs = Ẽ'(v') − Ẽ''(v'')". As above.]

Also important to note that typically vibronic transitions are usually the result of the vibrational v'' = 0 vibratonal state. Within this assumption and excluding the rotational contributions (due to their low energies), Equation (Eqa2) can be used with Equation (Eqa21) to get

[Note: corrected; the source prints "the result of the vibrational v' = 0 vibratonal state" where this reads "the result of the vibrational v'' = 0 vibratonal state". Absorption starts from the ground state's v'' = 0.]

ν̃_obs = T̃_el + ((1/2)ν̃'e − (1/4)χ̃'e ν̃e') − ((1/2)ν̃''e − (1/4)χ̃''e ν̃e'') + ν̃'e v' − χ̃'e ν̃e'v'(v' + 1)

[Note: corrected; the source prints "+ ν̃'e v'' − χ̃'e ν̃e'v''(v'' + 1)" where this reads "+ ν̃'e v' − χ̃'e ν̃e'v'(v' + 1)". The last terms are the upper state's vibrational energy, G'(v'), which depends on v'.]

A common transition of importance is the ν̃00, which is the 0 → 0 transition and include no vibrational change. For this case, equation (Eqa3) is then

ν̃00 = T̃_el + ((1/2)ν̃'e − (1/4)χ̃'e ν̃e') − ((1/2)ν̃''e − (1/4)χ̃''e ν̃e'')

This is the lowest-energy transition from v'' = 0 although it may be of low intensity as discussed in the following section.

[Note: corrected; the source prints "This is the lowest energy possible to observe in an electronic transition" where this reads "This is the lowest-energy transition from v'' = 0". Hot bands from v'' ≥ 1 lie lower.]

### Iodine

The absorption spectrum of iodine yields information about the excited state well rather than the ground state well (notice that equation (Eqa3) depends primarily on excited state parameters). In this experiment you will characterize the excited state well by extracting values for the following excited state parameters.

[Note: no list of parameters follows in the source. The text is left as printed.]

Recall that as v' increases, the vibrational energy spacing decreases. At the upper edge of the well, the vibrational energy spacing decreases to 0, which means that the energies form a continuum rather than being quantized. It is at this limit that bond dissociation occurs. The energy required to dissociate the bond is actually Do' rather than De' because the molecule cannot have less than the zero point energy.

The vibrational-electronic spectrum of I2 in the region from 500-650 nm displays a large number of well-defined bands which, for the most part, correspond to v'<-- 0 transitions connecting the v" = 0 vibrational level of the ground electronic state (denoted as X^1Σ^+) to many different vibrational levels v' of the excited B^3Π electronic state. Under the conditions of this experiment (i.e., low resolution), the rotational lines within each band are not resolved. However, the peaks may be identified as R-branch band heads (1). For a molecule as heavy as I2, the position of each band head is within a few tenths of one cm^-1 of the band origin (2), and for the purposes of this experiment, the distinction between the two may be ignored. The general features of the absorption spectrum are shown below:

[Image: Graph showing extinction versus wavelength, with marked convergence and various data points labeled.]

Each small bump, or peak, such as the (26,0) band labelled on the spectrum, corresponds to a transition between two vibrational levels and is called a band. Each band is comprised of several hundred lines, each of which involves different upper and lower rotational quantum numbers; as mentioned, these lines are not resolved in the present experiment. The region of maximum absorption in each band is caused by many of these lines falling together; it is called the band head. The set of all of these bands is referred to as the visible band system of I2.

If the sample is hot, then excited vibrational levels of the ground state may be populated, and these also will absorb light. The hot bands arising from absorption from v"=1 and v"=2 are shown very approximately on the absorption spectrum above.

At a point called the convergence limit, the spacing between bands decreases to zero. Beyond this convergence limit, the spectrum is continuous because the excited state of the I2 molecule is not bound. One of the purposes of this experiment is to identify this convergence limit accurately.
