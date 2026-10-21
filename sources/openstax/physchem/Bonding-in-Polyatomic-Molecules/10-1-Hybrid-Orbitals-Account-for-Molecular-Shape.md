---
title: "10.1: Hybrid Orbitals Account for Molecular Shape"
book: "Physical Chemistry (LibreTexts)"
chapter: "10: Bonding in Polyatomic Molecules"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/10%3A_Bonding_in_Polyatomic_Molecules/10.01%3A_Hybrid_Orbitals_Account_for_Molecular_Shape"
author: "Mtuckerman"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Introduce hybrid orbital to explain non-linear molecular structure

Valence bond (VB) theory is one of two basic theories, along with molecular orbital (MO) theory, that were developed to use the methods of quantum mechanics to explain chemical bonding. It focuses on how the atomic orbitals of the dissociated atoms combine to give individual chemical bonds when a molecule is formed. In contrast, molecular orbital theory, which will be discussed elsewhere, predict wavefunctions that cover the entire molecule.

## Review of Diatomics

Let us consider H2. Recall that the Lewis structure for a single H atom is H· and for H2, it is H:H. Thus, each hydrogen brings one unpaired electron to the bond. Let the two protons be denoted A and B and the two electrons 1 and 2. Now, consider the potential energy

V = V_ee + V_en + V_nn

= (e^2/(4πε0))[1/(r12) − 1/(r_1A) − 1/(r_1B) − 1/(r_2A) − 1/(r_2B) + 1/(R_AB)]

But as R_AB → ∞, the 1/r12, 1/r_1B, 1/r_2A, and 1/R_AB terms vanish and the potential energy becomes simply that of two noninteracting hydrogen atoms

V → −(e^2/(4πε0))[1/(r_1A) + 1/(r_2B)]

Since the potential energy becomes a simple sum of separate energies for electrons 1 and 2, the wavefunction should simply be a product ψ_1s(r1 − rA)ψ_1s(r2 − rB). But as we let R_AB → Re, where Re is the equilibrium bond length, the electrons mix, and we can no longer tell if electron 1 belongs to atom A or atom B and the same for electron 2. Thus, we need to construct a combination of products that is consistent with the Pauli exclusion principle. If we just consider the coordinates r1 and r2 of the electrons, then the only wavefunction we can construct from a product of 1s orbitals is

ψu(r1, r2) = Cu[ψ_1s^A(r1)ψ_1s^B(r2) − ψ_1s^A(r2)ψ_1s^B(r1)]

where the u designator indicates that this is an odd function. The constant Cu is the overall noramlization constant. Unfortunately, like in the LCAO method, such a wavefunction is antibonding and is not a good representation of the ground state. If, however, we construct the wavefunction

ψg(r1, r2) = Cg[ψ_1s^A(r1)ψ_1s^B(r2) + ψ_1s^A(r2)ψ_1s^B(r1)]

where g designates that this is an even function (even in German is gerade), we violate the Pauli exclusion principle, even though such a wavefunction leads to a stable chemical bond.

What is missing here is the fact that we have not considered the spins of the electrons. Since the electrons are identical, if we exchange coordinates and spins, then the wavefunction should change sign. Thus, we can make both wavefunctions above consistent with the Pauli exclusion principle by multiplying by an appropriate spin wavefunction. We obtain

ψu(r1, r2, s1, s2) = ψu(x1, x2) = Cu[ψ_1s^A(r1)ψ_1s^B(r2) − ψ_1s^A(r2)ψ_1s^B(r1)][ψ↑(s1)ψ↓(s2) + ψ↑(s2)ψ↓(s1)]

ψg(r1, r2, s1, s2) = ψg(x1, x2) = Cg[ψ_1s^A(r1)ψ_1s^B(r2) + ψ_1s^A(r2)ψ_1s^B(r1)][ψ↑(s1)ψ↓(s2) − ψ↑(s2)ψ↓(s1)]

[Note: corrected; the source prints "ψ_1s^A(r1)ψ_1sB(r2)" where this reads "ψ_1s^A(r1)ψ_1s^B(r2)". The atom label B is a superscript, as in the other terms.]

where s1 and s2 are the z-components of spin for electrons 1 and 2, respectively. We can now use ψg as an approximate 2-electron wavefunction that leads to a stable chemical bond in H2.

The fact that ψu is antibonding can be easily determined by looking for a nodal plane between the two atoms, in this case, in the plane that exactly bisects the line joining the two atoms, midway between them. That this is, indeed, a nodal plane can be seen by considering two points r1 and r2 for the two electrons that are taken to lie in this plane. By symmetry, the functions ψ_1s^A(r1) and ψ_1s^B(r1) have the same value for r1 in this plane, and the same for ψ_1s^B(r2) and ψ_1s^A(r2). Let us assign the following values:

ψ_1s^A(r1) = ψ_1s^B(r1) = A

ψ_1s^B(r2) = ψ_1s^A(r2) = A'

Substituting these into ψu(x1, x2), we obtain

ψu(x1, x2) = Cu[AA' − A'A][ψ↑(s1)ψ↓(s2) + ψ↑(s2)ψ↓(s1)] = 0

Since the wavefunction has a node midway between the two atoms, it is clearly antibonding and should have a higher energy than the corresponding bonding wavefunction ψg.

A similar argument can be used for the molecule F2. Each F has an electronic configuration

1s^2 2s^2 2px^2 2py^2 2pz^1

and the Lewis structure of F2 is

Figure 10.1.1: Lewis structure of F2.
Two capital letter "F" in a stylized font, separated by dots, with additional dots lining the top and bottom.

Most of the electrons are in lone pairs, but the 2pz electrons, which are unpaired in each F atom come together to form the bond. Thus, the bonding wavefunction should be a 2-electron wavefunction constructed from 2pz orbitals. The bonding wavefunction takes the "gerade" form as in H2:

ψg(r1, r2, s1, s2) = Cg[ψ_2pz^A(r1)ψ_2pz^B(r2) + ψ_2pz^A(r2)ψ_2pz^B(r1)][ψ↑(s1)ψ↓(s2) − ψ↑(s2)ψ↓(s1)]

For HF, the 2pz orbital on F and 1s orbital on H come together to form the bonding wavefunction. To be consistent with the Pauli principle, we need a wavefunction of the form

ψ(r1, r2, s1, s2) = [ψ_1s^H(1)ψ_2pz^F(2) + ψ_1s^H(2)ψ_2pz^F(1)][ψ↑(s1)ψ↓(s2) − ψ↑(s2)ψ↓(s1)]

[Note: corrected; the source prints "ψ↓(s1)])" where this reads "ψ↓(s1)]". A stray bracket in the source.]

Looking at the HF example, it becomes clear how much valence bond theory attempts to appear as a "quantum version'' of the Lewis dot structure model. Valence bond theory attempts to construct very approximate wavefunctions for the bonding electrons in a Lewis structure, leaving the orbitals unused in the construction of the valence bond wavefunctions for the lone pair electrons. In the case of HF, we use the 2pz orbitals of F, which leaves the 2s, 2px and 2py orbitals unused. Since there are three lone pairs, these three orbitals are sufficient to hold each of the lone pairs as spin-up/spin-down couples.

## Hybridization

For polyatomic molecules, the valence bond theory becomes a very poor approximation because the directionalities of the 2s and 2p orbitals is too restrictive to describe molecules with steric numbers ranging between 2 and 4. The example of H2O (Section 10.2) illustrates this rather dramatically! Let us consider an even simpler molecule, BeH2, which has a steric number of 2 and is linear. Let the atoms lie entirely along the z-axis in the arrangement H-Be-H.

[Note: corrected; the source prints "The example considered above of H2O illustrates" where this reads "The example of H2O (Section 10.2) illustrates". H2O is discussed in Section 10.2, not above.]

Although the Be atom has a ground-state electronic configuration of 1s^2 2s^2, but if we "promote" one of the 2s electrons to a state with higher energy and allow its electronic structure to be 1s^2 2s 2pz, then the unpaired electrons in the 2s and 2pz orbitals can combine with the unpaired electrons in each of the hydrogen atoms to form bonds. The energy needed to excite the electron in Be would be "repaid'' by the energy gained in the formation of stable bonds. The two valence-bond wavefunctions we would construct would be

ψ1(1,2) = C1[ψ_1s^H1(1)ψ_2s^(Be)(2) + ψ_1s^H1(2)ψ_2s^(Be)(1)][ψ↑(s1)ψ↓(s2) − ψ↑(s2)ψ↓(s1)]

ψ2(1,2) = C2[ψ_1s^H2(1)ψ_2pz^(Be)(2) + ψ_1s^H2(2)ψ_2pz^(Be)(1)][ψ↑(s1)ψ↓(s2) − ψ↑(s2)ψ↓(s1)]

Unfortunately, even this simple scheme does not work entirely because the two Be-H bonds would be different due to their construction from different combinations of orbitals. By symmetry, however, we can see that the two Be-H bonds should be equivalent. A solution to this problem was proposed by Linus Pauling in the 1930s in the form of orbital hybridization, a scheme that we still use today.

Pauling used the fact that in the first and second periods, the 2s and 2p orbitals have similar energies. Indeed, for the H atom, the energies are exactly the same. Given that these energies are not that different, we can combine s and p orbitals and still have a valid solution of the Schrödinger equation. That is, a general orbital

χ(r) = C1ψ_2s(r) + C2ψ_2px(r) + C3ψ_2py(r) + C4ψ_2pz(r)

is also a solution of the Schrödinger equation with the same energy as a 2s or 2p orbitals individually (this is exactly true for H). In the case of BeH2, the external potential on the electrons in Be by the two hydrogens changes the energy levels and creates a near degeneracy between the 2s and 2pz orbitals, hence, we are now free to combine the into linear combinations that are more suitable to the construction both of valence bond wavefunctions and MOs via the LCAO procedure.

## sp Hybrid Orbitals

For Be, we now allow the s and p orbitals to mix and create two hybrid orbitals known as sp orbitals. The two new hybrid wavefunctions as linear combination of the functions for 2s and 2p_z (using Dirac Notation):

|χi⟩ = a1|2s⟩ + b1|2pz⟩

|χj⟩ = a2|2s⟩ + b2|2pz⟩

These two wavefunctions must be orthogonal.

⟨χi|χj⟩ = δ_ij

Which can be separated into the following relationships:

⟨χi|χi⟩ = 1

and

⟨χj|χj⟩ = 1

and

⟨χi|χj⟩ = ⟨χj|χi⟩ = 0

Equations (norm1) and (norm2) are the normality requirement and Equation (ortho) is the orthogonality requirement for the new hybrid wavefunctions. Substituting (sp1) into (norm1) results in

⟨χi|χi⟩ = a1^2 ~~⟨2s|2s⟩~~ (→ 1) + a1b1 ~~⟨2s|2pz⟩~~ (→ 0) + a1b1 ~~⟨2pz|2s⟩~~ (→ 0) + b1^2 ~~⟨2pz|2pz⟩~~ (→ 1) = 1

[Note: corrected; the source prints "a1b1 ~~⟨2pz|2s~~ (→ 0)⟩" where this reads "a1b1 ~~⟨2pz|2s⟩~~ (→ 0)". The bracket closes inside the struck-out integral.]

and similarly for ⟨χj|χj⟩

⟨χj|χj⟩ = a2^2 ~~⟨2s|2s⟩~~ (→ 1) + a2b2 ~~⟨2s|2pz⟩~~ (→ 0) + a2b2 ~~⟨2pz|2s⟩~~ (→ 0) + b2^2 ~~⟨2pz|2pz⟩~~ (→ 1) = 1

[Note: corrected; the source prints "a2b2 ~~⟨2pz|2s~~ (→ 0)⟩" where this reads "a2b2 ~~⟨2pz|2s⟩~~ (→ 0)". The bracket closes inside the struck-out integral.]

results in the following relationships

⟨χi|χi⟩ = a1^2 + b1^2 = 1

⟨χj|χj⟩ = a2^2 + b2^2 = 1

and

⟨χi|χj⟩ = a1a2 + b1b2 = 0

These are four unknowns and three equations. The fourth "constraint" is that we assume contribution of |s⟩ is the same for both hybrid orbitals.

a1 = a2

Equations (Con1) to (Con3) revert to

a1^2 + b1^2 = 1

a1^2 + b2^2 = 1

a1^2 + b1b2 = 0

[Note: corrected; the source prints "b1^2 = b2^2" where this reads "a1^2 + b1b2 = 0". With a1 = a2, the orthogonality condition becomes a1^2 + b1b2 = 0; then b1 = −b2 (b1 = b2 would make a1^2 + b1^2 = 0), so a1^2 = b1^2 and a1 = b1 = 1/√2.]

Therefore

b1 = −b2

and

a1 = b1

Insert Equation (eq231) into (Con3a) to get

a1 = 1/(√2)

and the two hybrid orbitals are

χ1(r) = (1/(√2))[ψ_2s(r) + ψ_2pz(r)]

χ2(r) = (1/(√2))[ψ_2s(r) − ψ_2pz(r)]

Note that these orbitals are both normalized and orthogonal:

∫|χ1(r)|^2 dV = 1 ; ∫|χ2(r)|^2 dV = 1 ; ∫χ1^*(r)χ2(r)dV = 0

These orbitals appear as shown in Figure 10.1.3

Figure 10.1.3: The Formation of sp Hybrid Orbitals. Taking the sum and difference of an ns and an np atomic orbital where n = 2 gives two equivalent sp hybrid orbitals oriented at 180° to each other.
Diagram illustrating hybridization with spheres representing atomic orbitals, a 2s and a 2pz orbital combining into two sp hybrids pointing in opposite directions along z.

[Note: corrected; the source prints "including sp, sp², and sp³ hybridizations" where this reads "a 2s and a 2pz orbital combining into two sp hybrids pointing in opposite directions along z". The image's alt text, machine-written, misreads the image; this describes it.]

Given that the two sp hybrid orbitals are mirror images of each other, they can overlap with the 1s orbital of H and create two equal bonds, as needed for BeH2. Using the valence bond formulation, now, one of the BeH bonds will be described by a wavefunction of the form:

[Note: corrected; the source prints "the 1s orbital of H (shown in the figure)" where this reads "the 1s orbital of H". The figure shows no H atoms.]

ψ1(1,2) = C1[ψ_1s^H1(1)χ1^(Be)(2) + ψ_1s^H1(2)χ1^(Be)(1)][ψ↑(s1)ψ↓(s2) − ψ↑(s2)ψ↓(s1)]

ψ2(1,2) = C2[ψ_1s^H2(1)χ2^(Be)(2) + ψ_1s^H2(2)χ2^(Be)(1)][ψ↑(s1)ψ↓(s2) − ψ↑(s2)ψ↓(s1)]

In the above wavefunctions, it is clear that H1 is on the right and H2 is on the left, based on the directionalities of χ1 and χ2.

## sp^2 Hybrid Orbitals

For trigonal planar molecules such as BH3, we start with the electronic configuration of B, which is 1s^2 2s^2 2px, and we promote one of the 2s electrons to a 2py orbital, so that we have 1s^2 2s 2px 2py. Suppose the geometry of BH3 is such that one of the hydrogen atoms lies along the positive x axis. The remaining hydrogen atoms would be in the 2nd and 3rd quadrants, respectively (Figure 10.1.4).

[Note: corrected; the source prints "in the 3rd and 4th quadrants" where this reads "in the 2nd and 3rd quadrants". The other two H atoms are at 120° and 240° (Figure 10.1.4).]

Figure 10.1.4: Geometry of BH3.
BH3 with B at the origin, one H on the +x axis and two H atoms at 120° and 240°.

[Note: corrected; the source prints "Graph displaying a linear equation with labeled axes for x and y, including a plotted line." where this reads "BH3 with B at the origin, one H on the +x axis and two H atoms at 120° and 240°.". The image's alt text, machine-written, misreads the image; this describes it.]

If we simply combine the 2s with the 2px and 2py orbitals of boron, the resulting hybrid orbitals will not point in the correct direction. For this reason, we will create rotated versions of the px and py orbitals, which, as we will see are tantamount to taking new combinations of 2px and 2py orbitals to combine with the 2s. Since the rotation occurs in the xy plane, the coordinate that controls this is the azimuthal angle φ. For the px and py orbitals, the φ dependence is

ψ_2px ∼ cos φ ; ψ_2py ∼ sin φ

If we rotate 2py by −30 degrees (Figure 10.1.5 ; blue is positive and red is negative), the φ dependence becomes

ψ_2py^{(rot)} ∼ sin(φ + 30)

Figure 10.1.5: Rotation of a 2py orbital by −30 degrees.
A 2py orbital (positive lobe blue, negative red) before and after rotation by −30°.

[Note: corrected; the source prints "Illustration of two pairs of atoms or molecules, with blue and red spheres representing different elements." where this reads "A 2py orbital (positive lobe blue, negative red) before and after rotation by −30°.". The image's alt text, machine-written, misreads the image; this describes it.]

Using the fact that

sin(α±β) = sin α cos β ± cos α sin β

[Note: corrected; the source prints "sin(α±β) = sin α cos β±cosαsinβ" where this reads "sin(α±β) = sin α cos β ± cos α sin β". The source's TeX lacks backslashes here.]

this rotation gives

ψ_2py^{(rot,1)} ∼ sin φ cos 30 + cos φ sin 30

∼ [((√3)/2) sin φ + (1/2) cos φ]

∼ [((√3)/2)ψ_2py + (1/2)ψ_2px]

Similarly, consider rotating −ψ_2py by +30 degrees (Figure 10.1.6 ). This gives

−ψ_2py^{(rot,2)} ∼ −sin(φ − 30)

∼ −[((√3)/2) sin φ − (1/2) cos φ]

∼ −((√3)/2)ψ_2py + (1/2)ψ_2px

Figure 10.1.6: Rotation of a −2py orbital by 30 degrees.
A −2py orbital (positive lobe blue, negative red) before and after rotation by +30°.

[Note: corrected; the source prints "Diagram illustrating molecular structures with red and blue spheres representing atoms, showing bonding interactions." where this reads "A −2py orbital (positive lobe blue, negative red) before and after rotation by +30°.". The image's alt text, machine-written, misreads the image; this describes it.]

So, we now take the hybrid orbitals to be of the form

χ1(r) = aψ_2s(r) − bψ_2px

χ2(r) = cψ_2s(r) + dψ_2py^{(rot,1)}(r)

χ3(r) = cψ_2s(r) − dψ_2py^{(rot,2)}(r)

The coefficients a, b, c, and d are determined by requiring that the orbitals are normalized and mutually orthogonal:

[Note: corrected; the source prints "The coefficients a, b, and c are determined" where this reads "The coefficients a, b, c, and d are determined". The trial functions also contain d.]

∫|χ1(r)|^2 dV = 1 ; ∫χ1^*(r)χ2(r)dV = 0

∫|χ2(r)|^2 dV = 1 ; ∫χ1^*(r)χ3(r)dV = 0

∫|χ3(r)|^2 dV = 1 ; ∫χ2^*(r)χ3(r)dV = 0

Carrying out the algebra, we obtain the following sp^2 hybrid orbitals:

χ1(r) = (1/(√3))[ψ_2s(r)−√(2)ψ_2px(r)]

χ2(r) = (1/(√6))[√(2)ψ_2s(r) + ψ_2px(r) + √(3)ψ_2py(r)]

χ3(r) = (1/(√6))[√(2)ψ_2s(r) + ψ_2px(r)−√(3)ψ_2py(r)]

The sp^2 hybrids allow bonding at 120° degrees, and these orbitals appear as shown in Figure 10.1.7:

Figure 10.1.7: Formation of sp^2 Hybrid Orbitals. Combining one ns and two np atomic orbitals gives three equivalent sp^2 hybrid orbitals in a trigonal planar arrangement; that is, oriented at 120° to one another.
Illustration depicting the hybridization of atomic orbitals, showing spherical shapes and overlapping regions in various stages.

The figure shows these hybrid orbitals.

[Note: corrected; the source prints "The figure also shows the overlaps of these orbitals with the 1s orbitals of H." where this reads "The figure shows these hybrid orbitals.". Figure 10.1.7 shows no H atoms.]

## sp^3 Hybrid Orbitals

Finally, we consider the case of methane CH4. The electronic configuration of C is 1s^2 2s^2 2px 2py. We now promote one of the 2s electrons to the 2pz orbital and write C as 1s^2 2s 2px 2py 2pz. We can now hybridize the 2s orbital with each of the 2p orbitals to create four hybrids:

[Note: corrected; the source prints "promote one of the 2s orbitals to the 2pz orbital" where this reads "promote one of the 2s electrons to the 2pz orbital". An electron is promoted, not an orbital.]

χ1(r) = (1/2)[ψ_2s(r) + ψ_2px(r) + ψ_2py(r) + ψ_2pz(r)]

χ2(r) = (1/2)[ψ_2s(r) − ψ_2px(r) − ψ_2py(r) + ψ_2pz(r)]

χ3(r) = (1/2)[ψ_2s(r) + ψ_2px(r) − ψ_2py(r) − ψ_2pz(r)]

χ4(r) = (1/2)[ψ_2s(r) − ψ_2px(r) + ψ_2py(r) − ψ_2pz(r)]

The large lobes of the hybridized orbitals are oriented toward the vertices of a tetrahedron, with 109.5° angles between them (Figure 10.1.8 ). Like all the hybridized orbitals discussed earlier, the sp^3 hybrid atomic orbitals are predicted to be equal in energy.

Figure 10.1.8: Formation of sp^3 Hybrid Orbitals. Combining one ns and three np atomic orbitals results in four sp^3 hybrid orbitals oriented at 109.5° to one another in a tetrahedral arrangement.
A 2s and three 2p orbitals combining into four sp^3 hybrids pointing to the corners of a tetrahedron.

[Note: corrected; the source prints "Diagram illustrating molecular structures and configurations, showing spheres representing atoms with colors indicating different elements." where this reads "A 2s and three 2p orbitals combining into four sp^3 hybrids pointing to the corners of a tetrahedron.". The image's alt text, machine-written, misreads the image; this describes it.]

In addition to explaining why some elements form more bonds than would be expected based on their valence electron configurations, and why the bonds formed are equal in energy, valence bond theory explains why these compounds are so stable: the amount of energy released increases with the number of bonds formed. In the case of carbon, for example, much more energy is released in the formation of four bonds than two, so compounds of carbon with four bonds tend to be more stable than those with only two. Carbon does form compounds with only two covalent bonds (such as CH2 or CF2), but these species are highly reactive, unstable intermediates that form in only certain chemical reactions.

### Are hybrid orbitals Real?

Hybridization is an often misconceived concept. It only is a mathematical interpretation, which explains a certain bonding situation (in an intuitive fashion). In a molecule the equilibrium geometry will result from various factors, such as steric and electronic interactions, and further more interactions with the surroundings like a solvent or external field. The geometric arrangement will not be formed because a molecule is hybridized in a certain way, it is the other way around, i.e. a result of the geometry or more precise and interpretation of the wavefunction for the given molecular arrangement.

The justification we gave for invoking hybridization in molecules such as BeH2, BF3 and CH4 was that the bonds in each are geometrically and chemically equivalent, whereas the atomic s- and p-orbitals on the central atoms are not. By combining these into new orbitals of sp, sp^2 and sp^3 types we obtain the required number of completely equivalent orbitals. This seemed easy enough to do on paper; we just drew little boxes and wrote “sp^2” or whatever below them. But what is really going on here?

The full answer is beyond the scope of this course, so we can only offer the following very general explanation. First, recall what we mean by “orbital”: a mathematical function ψ having the character of a standing wave whose square ψ^2 is proportional to the probability of finding the electron at any particular location in space. The latter, the electron density distribution, can be observed (by X-ray scattering, for example), and in this sense is the only thing that is “real”.

A given standing wave (ψ-function) can be synthesized by combining all kinds of fundamental wave patterns (that is, atomic orbitals) in much the same way that a color we observe can be reproduced by combining different sets of primary colors in various proportions. In neither case does it follow that these original orbitals (or colors) are actually present in the final product. So one could well argue that hybrid orbitals are not “real”; they simply turn out to be convenient for understanding the bonding of simple molecules at the elementary level, and this is why we use them.

## Summary

The shape and bonding valecies of polyatomic molecules can be accounted for by hybrid orbitals. Molecular orbitals are formed from linear combinations of atomic orbitals which are similar in energy. These atomic orbitals could come from different atoms, or from the same atom. For example, the 2s and 2p atomic orbitals are very close energetically. When a linear combo of more than one atomic orbital from the same atom is formed, we have a hybrid orbital.

[Note: corrected; the source prints "the 2 sand 2patomic orbitals" where this reads "the 2s and 2p atomic orbitals". Spaces misplaced in the source.]
