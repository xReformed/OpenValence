---
title: "4.2: Point Groups"
book: "Inorganic Chemistry (LibreTexts)"
chapter: "4: Symmetry and Group Theory"
source_url: "https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Inorganic_Chemistry_(LibreTexts)/04%3A_Symmetry_and_Group_Theory/4.02%3A_Point_Groups"
author: "Khaas"
license: "Unverified"
---

Click here to see a lecture on this topic.

## Introduction

A Point Group describes all the symmetry operations that can be performed on a molecule that result in a conformation indistinguishable from the original. Point groups are used in Group Theory, the mathematical analysis of groups, to determine properties such as a molecule's molecular orbitals.

## Assigning Point Groups

While a point group contains all of the symmetry operations that can be performed on a given molecule, it is not necessary to identify all of these operations to determine the molecule's overall point group. Instead, a molecule's point group can be determined by following a set of steps which analyze the presence (or absence) of particular symmetry elements.

### Steps for assigning a molecule's point group:

1. Determine if the molecule is of high or low symmetry.
2. If not, find the highest order rotation axis, C_n.
3. Determine whether the molecule has any C2 axes perpendicular to the principal C_n axis. If so, then there are n such C2 axes, and the molecule is in the D set of point groups. If not, it is in either the C or S set of point groups.
4. Determine whether the molecule has a horizontal mirror plane (σh) perpendicular to the principal C_n axis. If so, the molecule is either in the C_nh or D_nh set of point groups.
5. Determine whether the molecule has a vertical mirror plane (σv) containing the principal C_n axis. If so, the molecule is either in the C_nv or D_nd set of point groups. If not, and if the molecule has n perpendicular C2 axes, then it is part of the D_n set of point groups.
6. Determine whether there is an improper rotation axis, S2n, collinear with the principal C_n axis. If so, the molecule is in the S2n point group. If not, the molecule is in the C_n point group.

Figure 4.2.1: Decision tree for determining a molecule's point group (CC-BY-NC-SA; Kathryn Haas)

### Example 4.2.1

Find the point group of benzene (C6H6).

**Answer**

**Solution**

1. Benzene is neither high nor low symmetry
2. Highest order rotation axis: C6
3. There are 6 C2 axes perpendicular to the principal axis
4. There is a horizontal mirror plane (σh)

Benzene is in the D6h point group.

## See Also

Symmetry Gallery

## 4.2.1: Groups of Low and High Symmetry

Click here to see a lecture on this topic.

### Low Symmetry Point Groups

Low symmetry point groups include the C1, C_s, and C_i groups

| Group | Description | Example |
| --- | --- | --- |
| C1 | only the identity operation (E) | CHFClBr |
| C_s | only the identity operation (E) and one mirror plane | C2H2ClBr |
| C_i | only the identity operation (E) and a center of inversion (i) | C2H2Cl2Br2 |

[Note: corrected; the source prints "| C2H2Cl2Br |" where this reads "| C2H2Cl2Br2 |". The usual C_i example is the anti conformation of meso-CHClBr–CHClBr, C2H2Cl2Br2; C2H2Cl2Br is not a stable molecule.]

### High Symmetry Point Groups

High symmetry point groups include the T_d, O_h, I_h, C∞v, and D∞h groups. The table below describes their characteristic symmetry operations. The full set of symmetry operations included in the point group is described in the corresponding character table.

| Group | Description | Example |
| --- | --- | --- |
| C∞v | linear molecule with an infinite number of rotation axes and vertical mirror planes (σv) | HBr |
| D∞h | linear molecule with an infinite number of rotation axes, vertical mirror planes (σv), perpendicular C2 axes, a horizontal mirror plane (σh), and an inversion center (i) | CO2 |
| T_d | typically have tetrahedral geometry, with 4 C3 axes, 3 C2 axes, 3 S4 axes, and 6 dihedral mirror planes (σd) | CH4 |
| O_h | typically have octahedral geometry, with 3 C4 axes, 4 C3 axes, and an inversion center (i) as characteristic symmetry operations | SF6 |
| I_h | typically have an icosahedral structure, with 6 C5 axes as characteristic symmetry operations | B12H12^2- |

[Note: corrected; the source prints "with 4 C4 axes, 3 C2 axes" where this reads "with 4 C3 axes, 3 C2 axes". A tetrahedron has four C3 axes (one through each vertex) and no C4 axes: T_d = {E, 8C3, 3C2, 6S4, 6σd}. The same table describes C∞v and D∞h as having "an infinite number of rotation axes"; a linear molecule has one C∞ axis, about which any rotation is a symmetry operation.]

### See Also

Symmetry Gallery

## 4.2.2: Other Groups

Click here to see a lecture on this topic.

### D Groups

The D set of point groups is classified as D_nh, D_nd, or D_n, where n refers to the principal axis of rotation. Overall, the D groups are characterized by the presence of n C2 axes perpendicular to the principal C_n axis. Further classification of a molecule in the D groups depends on the presence of horizontal or vertical/dihedral mirror planes.

| Group | Description | Example |
| --- | --- | --- |
| D_nh | n perpendicular C2 axes, and a horizontal mirror plane (σh) | benzene, C6H6 is D6h |
| D_nd | n perpendicular C2 axes, and n dihedral mirror planes (σd) | propadiene, C3H4 is D2d |
| D_n | n perpendicular C2 axes, no mirror planes | [Co(en)3]^3+ is D3 |

[Note: corrected; the source prints "| D_nd | n perpendicular C2 axes, and a vertical mirror plane (σv) |" where this reads "| D_nd | n perpendicular C2 axes, and n dihedral mirror planes (σd) |". D_nd groups have n dihedral planes, which bisect the perpendicular C2 axes; allene (D2d) has two.]

### C Groups

The C set of point groups is classified as C_nh, C_nv, or C_n, where n refers to the principal axis of rotation. The C set of groups is characterized by the absence of n C2 axes perpendicular to the principal C_n axis. Further classification of a molecule in the C groups depends on the presence of horizontal or vertical/dihedral mirror planes.

| Group | Description | Example |
| --- | --- | --- |
| C_nh | horizontal mirror plane (σh) perpendicular to the principal C_n axis | boric acid, H3BO3, is C3h |
| C_nv | vertical mirror plane (σv) containing the principal C_n axis | ammonia, NH3, is C3v |
| C_n | no mirror planes | P(C6H5)3 is C3 |

### S Groups

The S set of point groups is classified as S2n, where n refers to the principal axis of rotation. The S set of groups is characterized by the absence of n C2 axes perpendicular to the principal C_n axis, as well as the absence of horizontal and vertical/dihedral mirror planes. However, there is an improper rotation (or a rotation-reflection) axis collinear with the principal C_n axis.

| Group | Description | Example |
| --- | --- | --- |
| S2n | improper rotation (or a rotation-reflection) axis collinear with the principal C_n axis | 12-crown-4 is S4 |

### See Also

Symmetry Gallery
