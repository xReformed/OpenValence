---
title: "14.5: Chemical Shifts Depend upon the Chemical Environment of the Nucleus"
book: "Physical Chemistry (LibreTexts)"
chapter: "14: Nuclear Magnetic Resonance Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/14%3A_Nuclear_Magnetic_Resonance_Spectroscopy/14.05%3A_Chemical_Shifts_Depend_upon_the_Chemical_Environment_of_the_Nucleus"
author: "Anonymous"
license: "CC BY-SA 4.0"
---

The chemical shift in NMR is extremely important, as it gives vital information about the local structure surrounding the nucleus of interest. For a majority of scientists, the chemical shift is used exlusivley to determine structure, especially in organic systems. Additional information may be gained by examining the anisotropy of the chemical shift. This section will be devoted to looking at chemical shift from a mathematical standpoint including a full treatment of the chemical shift tensor and the relation to the NMR lineshape.

## The Chemical Shift

The local magnetic field is the field felt by a particular nucleus, where the applied field B induces currents in the electrons surrounding the nucleus give rise to a shielding. The shielding constant is σ. The local magnetic field is reduced by shielding by a factor 1 − σ.

B_loc = B + δB = (1 − σ)B

The chemical shift is the difference between the resonance frequency of a nucleus and that of a standard.

The Larmor frequency of a shielded nucleus is:

νL = (γB_loc)/(2π)

Chemical shifts are reported on the δ-scale.

δ = (ν − ν0)/(ν0) × 10^6

The resonance frequency of the standard is ν0.

The shielding constant is the sum of three contributions.

σ = σ(local) + σ(molecule) + σ(solvent)

The local contribution is due to electrons on the atom that contains the nucleus. The molecular contribution is from the rest of the molecule. The solvent contribution is from surrounding solvent molecules.

## The Local Contribution

The local contribution is a sum of both diamagnetic σd and paramagnetic σp parts. The diamagnetic part arises from circulation of the electrons in response to B. The Lamb formula gives the magnitude of σd,

σd = ((e^2µ0)/(3 me))∫_0^∞ ρ(r)r dr

[Note: corrected; the source prints "∫_o^∞" where this reads "∫_0^∞". The lower limit is 0.]

where ρ is the electron probability density |Ψ^2|. σd is inversely proportional to the Bohr radius. The magnetic moment of a current loop is proportional to a0^2 and the magnetic field generated at the nucleus is proportional 1/(a0^3).

[Note: corrected; the source prints "proportional to ao^2" where this reads "proportional to a0^2"; the source prints "proportional 1/(ao^3)" where this reads "proportional 1/(a0^3)". The Bohr radius is a0.]

## The Molecular Contribution

The applied magnetic field generates currents in neighboring groups proportional to the magnetic susceptibility χ of a group. The induced magnetic moment gives rise to a magnetic field that is inversely proportional to the cube of the distance from the nucleus.
