---
title: "13.14: Group Theory Determines Infrared Activity"
book: "Physical Chemistry (LibreTexts)"
chapter: "13: Molecular Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13%3A_Molecular_Spectroscopy/13.14%3A_Group_Theory_Determines_Infrared_Activity"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## Determining if a Normal Modes is IR or Raman Active

A transition from v → v' is IR active if the transition moment integral contains the totally symmetric irreducible representation of the point group the molecule belongs to. The transition moment integral is derived from the one-dimensional harmonic oscillator. Using the definition of electric dipole moment μ, the integral is:

M(v → v') = ⟨final wavefunction|μ⃗|initial wavefunction ⟩

or in terms of vibrational wavefunctions for a specific normal mode |φ(v)⟩

M(v → v') = ⟨φ(v' ≠ 0)|μ⃗|φ(v = 0)⟩

assuming the transition from the v = 0 wavefunction to the v' ≠ 0 wavefunction.

Now, consider the case that μ⃗, is a constant and therefore independent of the vibration (i.e., the electric dipole moment does not change during the vibration). This it could be taken outside the integral in Equation (M1) becomes

M(v → v') = μ⃗⟨φ(v' ≠ 0)|φ(v = 0)⟩

Since |φ(v = 0)⟩ and |φ(v' ≠ 0)⟩ are mutually orthogonal to each other, the integral in Equation (M1) will equal zero and the transition will not be allowed (i.e., it is forbidden). For the M to be nonzero, μ⃗ must change during a vibration. This selection rule explains why homonuclear diatomic molecules do not produce an IR spectrum. There is no change in dipole moment resulting in a transition moment integral of zero and a transition that is forbidden.

[Note: corrected; the source prints "|φ(v = ≠ 0)⟩" where this reads "|φ(v' ≠ 0)⟩". A typing error.]

For a transition to be Raman active, the same rules apply. The transition moment integral must contain the totally symmetric irreducible representation of the point group. The integral contains the polarizability tensor α (usually represented by a square matrix):

M(v → v') = ⟨φ(v' ≠ 0)|α|φ(v = 0)⟩

Following a similar argument as above, α must change during the vibration (∂α/∂Q ≠ 0) for the transition to be allowed and exhibits Raman scattering.

[Note: corrected; the source prints "α must be nonzero for the transition to be allowed" where this reads "α must change during the vibration (∂α/∂Q ≠ 0) for the transition to be allowed". Every molecule has a nonzero polarizability; Raman activity needs it to change.]

### Character Table

For a molecule to be IR active the dipole moment has to change during the vibration. For a molecule to be Raman active the polarizability of the molecule has to change during the vibration. The reducible representation Γ_vib can also be found by determining the reducible representation of the 3N degrees of freedom of H2O, Γ_tot. By applying Group Theory it is straightforward to find Γx,y,z as well as UMA (number of unmoved atoms). Again, using water as an example with C2v symmetry where 3N = 9, Γ_tot can be determined:

| C2v | E | C2 | σ (xz) | σ (yz) |  |
| --- | --- | --- | --- | --- | --- |
| Τx,y,z | 3 | -1 | 1 | 1 |  |
| UMA | 3 | 1 | 1 | 3 |  |
| Γ_tot | 9 | -1 | 1 | 3 | =3a1 + a2 + 2b1 + 3b2 |
| Note that Γ_tot contains nine degrees of freedom consistent with 3N = 9. |  |  |  |  |  |

Γ_tot contains Γ_translational, Γ_rotational as well as Γ_vibrational. Γ_trans can be obtained by finding the irreducible representations corresponding to x,y and z in the right side of the character table, Γ_rot by finding the ones corresponding to R_x, R_y and R_z. Γ_vib can be obtained by Γ_tot - Γ_trans - Γ_rot.

Γ_vib(H2O) = (3a1 + a2 + 2b1 + 3b2) − (a1 + b1 + b2) − (a2 + b1 + b2) = 2a1 + b2

In order to determine which modes are IR active, a simple check of the irreducible representation that corresponds to x,y and z and a cross check with the reducible representation Γ_vib is necessary. If they contain the same irreducible representation, the mode is IR active.

For H2O, z transforms as a1, x as b1 and y as b2. The modes a1 and b2 are IR active since Γvib contains 2a1 + b2.

In order to determine which modes are Raman active, the irreducible representation that corresponds to z^2, x^2-y^2, xy, xz and yz is used and again cross checked with Γvib. For H2O, z^2 and x^2-y^2 transform as a1, xy as a2, xz as b1 and yz as b2.The modes a1 and b2 are also Raman active since Γ_vib contains both these modes.

The IR spectrum of H2O does indeed have three bands as predicted by Group Theory. The symmetric stretch v1 and the asymmetric stretch v3 occur at 3657 and 3756 cm-1, whereas the bending v2 motion occurs at 1595 cm-1.

[Note: corrected; the source prints "The two symmetric stretches v1 and v2 occur at 3756 and 3657 cm-1 whereas the bending v3 motion occurs at 1595 cm-1." where this reads "The symmetric stretch v1 and the asymmetric stretch v3 occur at 3657 and 3756 cm-1, whereas the bending v2 motion occurs at 1595 cm-1.". For H2O, ν1 (symmetric stretch) is 3657, ν3 (asymmetric stretch) 3756 and ν2 (bend) 1595 cm^−1.]

In order to determine which normal modes are stretching vibrations and which one are bending vibrations, a stretching analysis can be performed. Then the stretching vibrations can be deducted from the total vibrations in order to obtain the bending vibrations. A double-headed arrow is drawn between the atom as depicted below:

[Image: Diagram of a water molecule (H2O) showing one oxygen atom connected to two hydrogen atoms with arrows indicating bonds.]

Then a determination of how the arrows transform under each symmetry operation in C2v symmetry will yield the following results:

| C2v | E | C2 | σ (xz) | σ (yz) |  |
| --- | --- | --- | --- | --- | --- |
| Γ_stretch | 2 | 0 | 0 | 2 | = a1 + b2 |

Γ_bend = Γ_vib − Γ_stretch = 2a1 + b2 − a1 − b2 = a1

H2O has two stretching vibrations as well as one bending vibration. This concept can be expanded to complex molecules such as [PtCl4]^2-. Four double headed arrows can be drawn between the atoms of the molecule and determine how these transform in D4h symmetry. Once the irreducible representation for Γ_stretch has been worked out, Γ_bend can be determined by Γ_bend = Γ_vib - Γ_stretch.

[Note: corrected; the source prints "such as PtCl4^-" where this reads "such as [PtCl4]^2-". Square-planar tetrachloroplatinate(II) is [PtCl4]^2−, as in Section 13.10.]

Most molecules are in their zero point energy at room temperature. Therefore, most transitions do originate from the v=0 state. Some molecules do have a significant population of the v=1 state at room temperature and transitions from this thermally excited state are called hot bands.

## References

1. Merlin, J.C., Cornard, J.P., J. Chem. Educ., 2006, 83 (9), p 1393. DOI: 10.1021/ed083p1393
2. McGuinn, C.J., J. Chem. Educ., 1982, 59 (10), p 813. DOI: 10.1021/ed059p813
3. Harris, D.C., Bertolucci, M.D., Symmetry and Spectroscopy: An introduction to Vibrational and Electronic Spectroscopy. Dover Publocations, Inc., New York, 1989.
4. McQuarrie, D. A., Simon, J.D., Physical Chemistry: A Molecular Approach, University Science Books, Sausalito, California, 1997; 518-521.
5. Housecroft, C.E., Sharpe, A.G., Inorganic Chemistry. Pearson Education Limited, England, 2008, 107.
6. Atkins, P., dePaula, J., Physical Chemistry, W.H. Freeman and Company, New York, 2002, 520-523.
7. Bishop, D.M., Group Theory and Chemistry, Dover Publications, Inc, New York, 1973, 166.

[Note: corrected; the source prints "83 (9), p 1383" where this reads "83 (9), p 1393". Page 1393, as the DOI shows.]
