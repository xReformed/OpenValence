---
title: "11.4: Orbital Polarization Terms in Basis Sets"
book: "Physical Chemistry (LibreTexts)"
chapter: "11: Computational Quantum Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/11%3A_Computational_Quantum_Chemistry/11.04%3A_Orbital_Polarization_Terms_in_Basis_Sets"
author: "Wikipedia"
license: "CC BY-NC-SA 4.0"
---

Polarization functions denoted in Pople’s sets by an asterisk. Two asterisks, indicate that polarization functions are also added to light atoms (hydrogen and helium). n Polarization functions have one additional node. For example, the only basis function located on a hydrogen atom in a minimal basis set would be a function approximating the 1 s atomic orbital. When polarization is added to this basis set, a p -function is also added to the basis set. The 6-31G** is synonymous to 6-31 G(d,p).

The use of a minimal basis set with fixed zeta parameters severely limits how much the electronic charge can be changed from the atomic charge distribution to describe molecules and chemical bonds. This limitation is removed if STOs with larger n values and different spherical harmonic functions, the Yl^m(θ, φ) in the definition of STO’s are included. Adding such functions is another way to expand the basis set and obtain more accurate results. Such functions are called polarization functions because they allow for charge polarization away form the atomic distribution to occur.

Figure 11.4.1: A d-polarization function added to a p orbital. (CC-BY-SA-3.0; Rifleman 82)
Diagram showing three pairs of shapes: red and green, illustrating different configurations or combinations of colored elements.

The most common addition to minimal basis sets is probably the addition of polarization functions, denoted (in the names of basis sets developed by Pople) by an asterisk, *. Two asterisks, **, indicate that polarization functions are also added to light atoms (hydrogen and helium). These are auxiliary functions with one additional node. For example, the only basis function located on a hydrogen atom in a minimal basis set would be a function approximating the 1s atomic orbital. When polarization is added to this basis set, a p-function is also added to the basis set. This adds some additional needed flexibility within the basis set, effectively allowing molecular orbitals involving the hydrogen atoms to be more asymmetric about the hydrogen nucleus.

This is an important result when considering accurate representations of bonding between atoms, because the very presence of the bonded atom makes the energetic environment of the electrons spherically asymmetric. Similarly, d-type functions can be added to a basis set with valence p orbitals, and f-functions to a basis set with d-type orbitals, and so on. Another, more precise notation indicates exactly which and how many functions are added to the basis set, such as (d, p).

## Diffuse Functions

Another common addition to basis sets is the addition of diffuse functions, denoted in Pople-type sets by a plus sign, +, and in Dunning-type sets by "aug" (from "augmented"). Two plus signs indicate that diffuse functions are also added to light atoms (hydrogen and helium). These are very shallow Gaussian basis functions, which more accurately represent the "tail" portion of the atomic orbitals, which are distant from the atomic nuclei. These additional basis functions can be important when considering anions and other large, "soft" molecular systems.
