---
title: "13.10: Irreducible Representation of Point Groups"
book: "Physical Chemistry (LibreTexts)"
chapter: "13: Molecular Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13%3A_Molecular_Spectroscopy/13.10%3A_Irreducible_Representation_of_Point_Groups"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

There exists an important fact about normal coordinates. Each of these coordinates belongs to an irreducible representation of the point the molecule under investigation. Vibrational wavefunctions associated with vibrational energy levels share this property as well. The normal coordinates and the vibration wavefunction can be categorized further according to the point group they belong to. From the character table predictions can be made for which symmetries can exist. The irreducible representation offers insight into the IR and/or Raman activity of the molecule in question.

## Symmetry of normal modes

It is important to realize that every normal mode has a certain type of symmetry associated with it. Identifying the point group of the molecule is therefore an important step. With this in mind it is not surprising that every normal mode forms a basis set for an irreducible representation of the point group the molecule belongs to. For a molecule such as water, having a structure of XY2, three normal coordinates can be determined. The two stretching modes differ in symmetry (a1 and b2) and in energy. The figure below shows the three normal modes for the water molecule:

[Note: corrected; the source prints "The two stretching modes are equivalent in symmetry and energy." where this reads "The two stretching modes differ in symmetry (a1 and b2) and in energy.". The symmetric stretch (a1, 3657 cm^−1) and the asymmetric stretch (b2, 3756 cm^−1) differ, as the table below shows.]

Figure 13.10.1: Three normal modes of water

By convention, with nonlinear molecules, the symmetric stretch is denoted v1, the bend v2 and the asymmetric stretch v3. With linear molecules, the bending motion is ν2 whereas asymmetric stretch is v3.

[Note: corrected; the source prints "the symmetric stretch is denoted v1 whereas the asymmetric stretch is denoted v2. Bending motions are v3." where this reads "the symmetric stretch is denoted v1, the bend v2 and the asymmetric stretch v3.". For H2O, ν1 is the symmetric stretch, ν2 the bend and ν3 the asymmetric stretch, as in the table below.]

The water molecule has C2v symmetry and its symmetry elements are E, C2, σ(xz) and σ(yz). To determine the symmetries of the three vibrations and how they each transform, symmetry operations will be performed. As an example, performing C2 operations using the two normal mode v2 and v3 gives the following transformation:

Figure 13.10.2: Symmetry operations on the symmetric and asymmetric stretches of water

Once all the symmetry operations have been performed in a systematic manner for each modes the symmetry can be assigned to the normal mode using the character table for C2v:

Table 13.10.2 : Character table for the C2v point group

| C2v | E | C2 | σ (xz) | σ (yz) |  |
| --- | --- | --- | --- | --- | --- |
| ν1 | 1 | 1 | 1 | 1 | = a1 |
| ν2 | 1 | 1 | 1 | 1 | = a1 |
| ν3 | 1 | -1 | -1 | 1 | = b2 |

Water has three normal modes that can be grouped together as the reducible representation

Γ_vib = 2a1 + b2.

Determination of normal modes becomes quite complex as the number of atoms in the molecule increases. Nowadays, computer programs that simulate molecular vibrations can be used to perform these calculations. The example of [PtCl4]^2- shows the increasing complexity (Figure 13.10.3 ). The molecule has five atoms and therefore 15 degrees of freedom, 9 of these are vibrational degrees of freedom. The nine normal modes are exemplified below along with the irreducible representation the normal mode belongs to (D4h point group).

[Note: corrected; the source prints "(Figure 13.10.2 )" where this reads "(Figure 13.10.3 )". The PtCl4 modes are Figure 13.10.3.]

Figure 13.10.3: A1g, b1g and e_u are stretching vibrations whereas b2g, a2u, b2u and e_u are bending vibrations.
