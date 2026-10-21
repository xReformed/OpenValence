---
title: "11.3: Extended Basis Sets"
book: "Physical Chemistry (LibreTexts)"
chapter: "11: Computational Quantum Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/11%3A_Computational_Quantum_Chemistry/11.03%3A_Extended_Basis_Sets"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Today, there are hundreds of basis sets composed of Gaussian Type Orbitals (GTOs). The smallest of these are called minimal basis sets, and they are typically composed of the minimum number of basis functions required to represent all of the electrons on each atom. The largest of these can contain literally dozens to hundreds of basis functions on each atom.

## Minimum Basis sets

A minimum basis set is one in which a single basis function is used for each orbital in a Hartree-Fock calculation on the atom. However, for atoms such as lithium, basis functions of p type are added to the basis functions corresponding to the 1s and 2s orbitals of each atom. For example, each atom in the first row of the periodic system (Li - Ne) would have a basis set of five functions (two s functions and three p functions).

> In a minimum basis set, a single basis function is used for each atomic orbital on each constituent atom in the system.

The most common minimal basis set is STO-nG, where n is an integer. This n value represents the number GTOs used to approximate the Slater Type orbital (STO) for both core and valence orbitals. Minimal basis sets typically give rough results that are insufficient for research-quality publication, but are much cheaper (less calculations requires) than the larger basis sets discussed below. Commonly used minimal basis sets of this type are: STO-3G, STO-4G, and STO-6G.

## Two is Often Better than One

Minimal basis sets are not flexible enough for accurate representation of, which requires the use multiple functions to represent each atomic orbital. The distribution of the electron density of valence electrons is better represented by the sum of two orbitals with different "effective charges". This is a double-ζ basis sets and includes split-valence set (inner and valence) and linear combination of two orbitals of same type, but with different effective charges (i.e., ζ). This flexibility can be used to generate atomic orbital of adjustable sizes.

For example, the double-zeta basis set allows us to treat each orbital separately when we conduct the Hartree-Fock calculation.

φi = a1φ_2s^(STO)(r, ζ1) + a2φ_2s^(STO)(r, ζ2)

The 2s atomic orbital approximated as a sum of two STOs. The two equations are the same except for the value of ζ which accounts for how large the orbital is. The constants a1 and a2 determines how much each STO contributes to the final atomic orbital, which will vary depending on the type of atom that the atomic orbit (i.e., hydrogen and lithium orbitals will have different a1, a2, ζ1, and ζ2 values).

## Extended Basis Sets

The triple and quadruple-zeta basis sets work the same way, except use three and four STOs instead of two like in the equation for φi above. The typical trade-off applies here as well, better accuracy, however with more expensive calculations. There are several different types of extended basis sets including: n split-valence, n polarized sets, n diffuse sets, and n correlation consistent sets. The notation of this sort of basis set (with a Gaussian basis) is

[Note: corrected; the source prints "instead of two like in (11.2.1)" where this reads "instead of two like in the equation for φi above". The source's cross-reference points to the double-zeta equation above; 11.2.1 is an equation in Section 11.2.]

N-MPG

[Note: corrected; the source prints "N − MPG" where this reads "N-MPG". A name with hyphens, not a difference (as in 11.2: 6-31G).]

for describing split-valence basis set. N is the number of Gaussian functions describing inner-shell orbitals, while the hyphen denotes a split-valence set. M and P designate the number of Gaussian functions used to fit the two orbitals of the valence shell:

- M corresponds to number of Gaussian functions used to describe the smaller orbital
- P corresponds to number of Gaussian functions used to describe the larger orbital (e.g., 6-31G and 3-21G).

A minimal basis set is when one basis function for each atomic orbital in the atom, while a double-ζ, has two two basis functions for each atomic orbital. Correspondingly, a triple and quadruple-ζ set had three and four basis functions for each atomic orbital, respectively. Higher order basis set have been constructed too, e.g., 5Z, 6Z,)..

There are hundreds of basis sets composed of Gaussian-type orbitals (Figure Figure 11.3.1 ). The smallest of these are called minimal basis sets, and they are typically composed of the minimum number of basis functions required to represent all of the electrons on each atom. The largest of these can contain dozens to hundreds of basis functions on each atom.

Figure 11.3.1 : Commonly used split-valence basis sets

| 3-21G | 3-21G | 3-21G | 3-21G* - Polarized | 3-21+G - Diffuse functions | 3-21+G* - With polarization and diffuse functions |
| --- | --- | --- | --- | --- | --- |
| 4-21G | 4-31G | 4-31G | 4-31G | 4-31G |  |
| 6-21G | 6-31G | 6-31G* | 6-31+G* | 6-31G(3df, 3pd) | 6-311G |
| 6-311G | 6-311G* | 6-311+G* |  |  |  |

[Note: this table is garbled in the source: 3-21G appears three times in its first row, 4-31G four times in the second, and 6-311G in two rows. The text is left as printed.]
