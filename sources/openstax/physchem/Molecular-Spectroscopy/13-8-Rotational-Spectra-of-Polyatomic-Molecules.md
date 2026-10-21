---
title: "13.8: Rotational Spectra of Polyatomic Molecules"
book: "Physical Chemistry (LibreTexts)"
chapter: "13: Molecular Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13%3A_Molecular_Spectroscopy/13.08%3A_Rotational_Spectra_of_Polyatomic_Molecules"
author: "Simonsj"
license: "CC BY-NC-SA 4.0"
---

### Quick Review of Diatomic Rotation

As discussed previously, the Schrödinger equation for the angular motion of a rigid (i.e., having fixed bond length R) diatomic molecule is

−(ħ^2/(2μ))[1/(R^2 sin θ) · ((∂)/(∂θ))(sin θ (∂)/(∂θ)) + 1/(R^2 sin^2θ) · (∂^2)/(∂φ^2)]|ψ⟩ = E|ψ⟩

[Note: corrected; the source prints "(ħ^2/(2μ))[1/(R^2 sin θ)" where this reads "−(ħ^2/(2μ))[1/(R^2 sin θ)". The kinetic energy operator has a minus sign: L^2 = −ħ^2[…].]

or

L^2/(2μR^2)|ψ⟩ = E|ψ⟩

The Hamiltonian in this problem contains only the kinetic energy of rotation; no potential energy is present because the molecule is undergoing unhindered "free rotation". The angles θ and φ describe the orientation of the diatomic molecule's axis relative to a laboratory-fixed coordinate system, and μ is the reduced mass of the diatomic molecule

μ = (m1 m2)/(m1 + m2)

The eigenvalues corresponding to each eigenfunction are straightforward to find because H_rot is proportional to the L^2 operator whose eigenvalues have already been determined. The resultant rotational energies are given as:

EJ = (ħ^2 J(J + 1))/(2μR^2) = BJ(J + 1)

and are independent of M. B is the rotational constant. Thus each energy level is labeled by J and is 2J + 1-fold degenerate (because M ranges from −J to J). The rotational energy in Equation (Ediatomic) can be expressed in terms of the moment of inertia I

I = Σi mi Ri^2

where mi is the mass of the i^th atom and R is its distance from the center of mass of the molecule. This moment of inertia replaces μR^2 in the denominator of Equation (Ediatomic):

EJ = (ħ^2 J(J + 1))/(2I) = BJ(J + 1)

## Rotation of Polyatomic Molecules

In contrast to diatomic molecules (Equation (Idiatomic)), the rotational motions of polyatomic molecules in three dimensions are characterized by multiple moments of inertia. typically reflected in an 3 × 3 inertia tensor. It is common in rigid body mechanics to express in these moments of inertia in lab-based Cartesian coordinates via a notation that explicitly identifies the x, y, and z axes such as I_xx and I_xy, for the components of the inertia tensor.

I = [I_xx, I_xy, I_xz; I_yx, I_yy, I_yz; I_zx, I_zy, I_zz]

The components of this tensor can be assembled into a matrix given by

I_xx = Σ_(k=1)^N mk(yk^2 + zk^2)

I_yy = Σ_(k=1)^N mk(xk^2 + zk^2)

I_zz = Σ_(k=1)^N mk(xk^2 + yk^2)

I_yx = I_xy = −Σ_(k=1)^N mk xk yk

I_zx = I_xz = −Σ_(k=1)^N mk xk zk

I_zy = I_yz = −Σ_(k=1)^N mk yk zk.

The rotational motions of polyatomic molecules are characterized by moments of inertia that are defined in a molecule based coordinates with axes that are labeled a, b, and c. Measured in the body frame the inertia matrix (Equation (inertiamatrix)) is a constant real symmetric matrix, which can be decomposed into a diagonal matrix, given by

I = (Ia, 0, 0; 0, Ib, 0; 0, 0, Ic)

These labels are assigned so that Ic is the largest principal moment of inertia with an order of the three moments set as

Ia < Ib < Ic

The rotational kinetic energy operator for a rigid non-linear polyatomic molecule is then expressed as

H_rot = (Ja^2)/(2Ia) + (Jb^2)/(2Ib) + (Jc^2)/(2Ic)

The components of the quantum mechanical angular momentum operators along the three principal axes are:

Ja = −iħ cos χ[cot θ (∂)/(∂χ) − (sin θ)^−1(∂)/(∂φ)] − iħ sin χ (∂)/(∂θ)

[Note: corrected; the source prints "]−−iħ sin χ (∂)/(∂θ)" where this reads "] − iħ sin χ (∂)/(∂θ)". A doubled minus in the source; with it J^2 below would not follow.]

Jb = iħ sin χ[cot θ (∂)/(∂χ) − (sin θ)^−1(∂)/(∂φ)] − iħ cos χ (∂)/(∂θ)

[Note: corrected; the source prints "]−−iħ cos χ (∂)/(∂θ)" where this reads "] − iħ cos χ (∂)/(∂θ)". As above.]

Jc = −(iħ∂)/(∂χ)

[Note: corrected; the source prints "Jc = −(ih∂)/(∂χ)" where this reads "Jc = −(iħ∂)/(∂χ)". ħ, not h.]

The angles θ, φ, and χ are the Euler angles needed to specify the orientation of the rigid molecule relative to a laboratory-fixed coordinate system. The corresponding square of the total angular momentum operator J^2 can be obtained as

J^2 = Ja^2 + Jb^2 + Jc^2

= −ħ^2[(∂^2)/(∂θ^2) + cot θ (∂)/(∂θ) + (1/(sin^2θ))((∂^2)/(∂φ^2) + (∂^2)/(∂χ^2) − 2 cos θ (∂^2)/(∂φ∂χ))]

[Note: corrected; the source prints "= −(∂^2)/(∂θ^2) − cot θ (∂)/(∂θ) − (1/(sin θ))((∂^2)/(∂φ^2) + (∂^2)/(∂χ^2) − 2 cos θ (∂^2)/(∂φ∂χ))" where this reads "= −ħ^2[(∂^2)/(∂θ^2) + cot θ (∂)/(∂θ) + (1/(sin^2θ))((∂^2)/(∂φ^2) + (∂^2)/(∂χ^2) − 2 cos θ (∂^2)/(∂φ∂χ))]". The factor is 1/sin^2θ, and the operator carries ħ^2 (its eigenvalue is ħ^2 J(J + 1) below).]

and the component along the lab-fixed Z axis is

JZ = −iħ(∂)/(∂φ).

[Note: corrected; the source prints "JZ = −ih(∂)/(∂φ)." where this reads "JZ = −iħ(∂)/(∂φ).". ħ, not h.]

## Spherical Tops

When the three principal moment of inertia values are identical, the molecule is termed a spherical top. In this case, the total rotational energy Equation (genKE) can be expressed in terms of the total angular momentum operator J^2

H_rot = J^2/(2I)

As a result, the eigenfunctions of H_rot are those of J^2 (and Ja as well as JZ both of which commute with J^2 and with one another; JZ is the component of J along the lab-fixed Z-axis and commutes with Ja because

[Note: corrected; the source prints "commute with J2 and" where this reads "commute with J^2 and". J^2.]

JZ = −iħ(∂)/(∂φ)

[Note: corrected; the source prints "JZ = −ih(∂)/(∂φ)" where this reads "JZ = −iħ(∂)/(∂φ)". ħ, not h.]

and

Ja = −iħ(∂)/(∂χ)

[Note: corrected; the source prints "Ja = −ih(∂)/(∂χ)" where this reads "Ja = −iħ(∂)/(∂χ)". ħ, not h.]

act on different angles. The energies associated with such eigenfunctions are

E(J, K, M) = (ħ^2 J(J + 1))/(2I)

[Note: corrected; the source prints "/(2I^2)" where this reads "/(2I)". The rotational energy is ħ^2 J(J + 1)/(2I).]

for all K (i.e., J a quantum numbers) ranging from -J to J in unit steps and for all M (i.e., J Z quantum numbers) ranging from -J to J. Each energy level is therefore (2J + 1)^2 degenarate because there are 2J + 1 possible K values and 2J + 1 possible M values for each J. The eigenfunctions of J^2, JZ and Ja, |J, M, K > are given in terms of the set of rotation matrices D_(J, M, K) :

|J, M, K⟩ = √((2J + 1)/(8π^2))D_(J, M, K)^*(θ, φ, χ)

which obey

J^2|J, M, K⟩ = ħ^2 J(J + 1)|J, M, K⟩

Ja|J, M, K⟩ = ħK|J, M, K⟩

JZ|J, M, K⟩ = ħM|J, M, K⟩

## Symmetric Tops

Symmetrical tops are molecules with two rotational axes that have the same inertia and one unique rotational axis with a different inertia. Symmetrical tops can be divided into two categories based on the relationship between the inertia of the unique axis and the inertia of the two axes with equivalent inertia. If the unique rotational axis has a greater inertia than the degenerate axes the molecule is called an oblate symmetrical top (Figure 13.8.1 ). If the unique rotational axis has a lower inertia than the degenerate axes the molecule is called a prolate symmetrical top. For simplification think of these two categories as either frisbees for oblate tops or footballs for prolate tops.

Figure 13.8.1: The assignment of semi-axes on a spheroid. It is oblate if c < a (left) and prolate if c > a (right). (CC BY-SA 4.0; Ag2gaeh)
Diagrams of two ellipsoids with labeled axes and points, showing measurements in blue and red on a black background.

Again, the rotational kinetic energy, which is the full rotational Hamiltonian, can be written in terms of the total rotational angular momentum operator J^2 and the component of angular momentum along the axis with the unique principal moment of inertia.

For prolate tops, Equation (genKE) becomes

H_rot = J^2/(2I) + Ja^2(1/(2Ia) − 1/(2I))

For oblate tops, Equation (genKE) becomes

H_rot = J^2/(2I) + Jc^2(1/(2Ic) − 1/(2I))

As a result, the eigenfunctions of H_rot are those of J^2 and Ja or Jc (and of JZ), and the corresponding energy levels.

The energies for prolate tops are

E(J, K, M) = (ħ^2 J(J + 1))/(2I) + ħ^2 K^2(1/(2Ia) − 1/(2I))

[Note: corrected; the source prints "(h^2 J(J + 1))/(2I^2) + h^2 K^2(1/(2Ia) − 1/(2I))" where this reads "(ħ^2 J(J + 1))/(2I) + ħ^2 K^2(1/(2Ia) − 1/(2I))". ħ, and 2I, with I = Ib = Ic.]

and the energies for oblate tops are

E(J, K, M) = (ħ^2 J(J + 1))/(2I) + ħ^2 K^2(1/(2Ic) − 1/(2I))

[Note: corrected; the source prints "(h^2 J(J + 1))/(2I2) + h^2 K^2(1/(2Ic) − 1/(2I))" where this reads "(ħ^2 J(J + 1))/(2I) + ħ^2 K^2(1/(2Ic) − 1/(2I))". ħ, and 2I, with I = Ia = Ib.]

again for K and M (i.e., Ja or Jc and JZ quantum numbers, respectively) ranging from −J to J in unit steps. Since the energy now depends on K^2, levels with K ≠ 0 are 2(2J + 1)-fold degenerate (±K and the 2J + 1 different M values) and K = 0 levels 2J + 1-fold, due to the 2J + 1 different M values that arise for each J value. The eigenfunctions |J, M, K > are the same rotation matrix functions as arise for the spherical-top case.

[Note: corrected; the source prints "Since the energy now depends on K, these levels are only 2J + 1 degenerate due to the 2J + 1 different M values" where this reads "Since the energy now depends on K^2, levels with K ≠ 0 are 2(2J + 1)-fold degenerate (±K and the 2J + 1 different M values) and K = 0 levels 2J + 1-fold, due to the 2J + 1 different M values". The energy depends on K^2, so +K and −K have the same energy.]

## Asymmetric Tops

The rotational eigenfunctions and energy levels of a molecule for which all three principal moments of inertia are distinct (a asymmetric top) can not easily be expressed in terms of the angular momentum eigenstates and the J, M, and K quantum numbers. However, given the three principal moments of inertia Ia, Ib, and Ic, a matrix representation of each of the three contributions to the general rotational Hamiltonian in Equation (genKE) can be formed within a basis set of the {|J, M, K⟩} rotation matrix functions. This matrix will not be diagonal because the |J, M, K⟩ functions are not eigenfunctions of the asymmetric top H_rot. However, the matrix can be formed in this basis and subsequently brought to diagonal form by finding its eigenvectors {C n, J,M,K } and its eigenvalues {En}. The vector coefficients express the asymmetric top eigenstates as

ψn(θ, φ, χ) = Σ_(J, M, K) C_(n, J, M, K)|J, M, K⟩

Because the total angular momentum J^2 still commutes with H_rot, each such eigenstate will contain only one J-value, and hence Ψn can also be labeled by a J quantum number:

ψ_(n, J)(θ, φ, χ) = Σ_(M, K) C_(n, J, M, K)|J, M, K⟩

To form the only non-zero matrix elements of H_rot within the |J, M, K⟩ basis, one can use the following properties of the rotation-matrix functions:

⟨J, M, K|Ja^2|J, M, K⟩ = ⟨J, M, K|Jb^2|J, M, K⟩ = 1/2⟨J, M, K|J^2 − Jc^2|J, M, K⟩ = (ħ^2/2)[J(J + 1) − K^2],

[Note: corrected; the source prints "⟨j, ⟩ = ⟨j, ⟩ = 1/2 < j, ⟩ = h2[J(J + 1) − K2]," where this reads "⟨J, M, K|Ja^2|J, M, K⟩ = ⟨J, M, K|Jb^2|J, M, K⟩ = 1/2⟨J, M, K|J^2 − Jc^2|J, M, K⟩ = (ħ^2/2)[J(J + 1) − K^2],". The bras and kets are lost in the source, and the factor 1/2 with them.]

⟨J, M, K|Jc^2|J, M, K⟩ = ħ^2 K^2

[Note: corrected; the source prints "⟨j, ⟩ = h^2 K^2" where this reads "⟨J, M, K|Jc^2|J, M, K⟩ = ħ^2 K^2". As above.]

⟨J, M, K|Ja^2|J, M, K ± 2⟩ = −⟨J, M, K|Jb^2|J, M, K ± 2⟩ = (ħ^2/4)[J(J + 1) − K(K±1)]^(1/2)[J(J + 1) − (K±1)(K±2)]^(1/2), ⟨J, M, K|Jc^2|J, M, K ± 2⟩ = 0

[Note: corrected; the source prints "⟨j⟩ = −⟨j⟩ = h^2[J(J + 1) − K(K±1)]1/2[J(J + 1) − (K±1)(K±2)]1/2⟨j⟩ = 0" where this reads "⟨J, M, K|Ja^2|J, M, K ± 2⟩ = −⟨J, M, K|Jb^2|J, M, K ± 2⟩ = (ħ^2/4)[J(J + 1) − K(K±1)]^(1/2)[J(J + 1) − (K±1)(K±2)]^(1/2), ⟨J, M, K|Jc^2|J, M, K ± 2⟩ = 0". As above; the off-diagonal elements carry ħ^2/4.]

Each of the elements of Jc^2, Ja^2, and Jb^2 must, of course, be multiplied, respectively, by 1/(2Ic), 1/(2Ia), and 1/(2Ib) and summed together to form the matrix representation of H_rot. The diagonalization of this matrix then provides the asymmetric top energies and wavefunctions.

[Note: corrected; the source prints "by 1/2Ic, 1/2Ia, and 1/2Ib" where this reads "by 1/(2Ic), 1/(2Ia), and 1/(2Ib)". The rotational constants are 1/(2I).]
