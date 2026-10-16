---
title: "4.4: Examples and Applications of Symmetry"
book: "Inorganic Chemistry (LibreTexts)"
chapter: "4: Symmetry and Group Theory"
source_url: "https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Inorganic_Chemistry_(LibreTexts)/04%3A_Symmetry_and_Group_Theory/4.04%3A_Examples_and_Applications_of_Symmetry"
author: "Khaas"
license: "CC BY-NC 4.0"
---

The purpose of learning group theory is that molecular symmetry can be applied to understand the properties of molecules. This chapter introduces two applications of symmetry: chirality and molecular vibrations (in the context of analyzing IR and Raman spectra). An additional application of symmetry, to understand molecular bonding, deserves its own chapter and will be explored in Chapter 5.

4.4.1: Chirality

4.4.2: Molecular Vibrations

- Symmetry and group theory can be applied to understand molecular vibrations. This is particularly useful in the contexts of predicting the number of peaks expected in the infrared (IR) and Raman spectra of a given compound. We will use water as a case study to illustrate how group theory is used to predict the number of peaks in IR and Raman spectra.

## 4.4.1: Chirality

### Introduction

Around the year 1847, the French scientist Louis Pasteur provided an explanation for the optical activity of tartaric acid salts. When he carried out a particular reaction, Pasteur observed that two types of crystals precipitated. Patiently and carefully using tweezers, Pasteur was able to separate the two types of crystals. Pasteur noticed that the types rotated plane-polarized light by the same amount but in different directions. These two compounds are called enantiomers.

Figure 4.4.1.1: Two enantiomers of an amino acid (with side chain R).

### What is chirality?

A molecule is chiral (or dissymetric) if it is non-superimposable on its mirror image. The two mirror images of a chiral molecule are called enantiomers. Enantiomers have the same physical properties (e.g., melting point, etc.). They differ in their ability to rotate plane polarized light and in their reactivity with other chiral molecules. Due to their ability to rotate plane polarized light, they are referred to as being optically active.

### Using Symmetry to Determine Chirality

There are some general rules of thumb that help determine whether a molecule is chiral or achiral. The point group of the molecule, and the symmetry operations within that point group, can give clues as to whether the molecule is chiral.

#### Symmetry operations of chiral molecules

A chiral molecule cannot possess a plane of symmetry (σ), a center of inversion (i), or an improper rotation (Sn). Due to the fact that all groups that lack both σ and i also lack Sn, a molecule that belongs to any group that lacks Sn is chiral.

[Note: this does not hold for every group: S4 (and S8) has no σ and no i but does have an improper axis. A molecule is chiral if and only if its point group has no S_n of any order (S1 = σ, S2 = i). The paragraph is left as printed.]

An example of an inorganic coordination complex is tris(ethylenediamine)cobalt(III) (Figure 4.4.1.1). Figure 4.4.1.1 shows the two enantiomers of tris(ethylenediamine)cobalt(III): the Δ and Λ isomers.

Figure 4.4.1.2: Two chiral enantiomers of tris(ethylenediamine)coalt(III).

You can visualize the Λ and Δ isomers by imagining that the ligands around the metal centers are blades of a fan. To push the air toward you, you would need to rotate the Δ isomer clockwise, and the Λ isomer counter-clockwise.

Figure 4.4.1.3: Another way of thinking about the chirality of the two chiral enantiomers of tris(ethylenediamine)coalt(III) shown in Figure 4.4.1.2. This figure was taken from Structure and Reactivity in Organic, Biological, and Inorganic Chemistry.

#### Exercise 4.4.1.1

Which point groups are possible for chiral molecules?

**Answer**

As a result of the previous discussion, there are a few classes of point groups that lack an improper axis. Those classes are C1, Cn, Dn, T, O, and I.

[Note: corrected; the source prints "Those classes are C1, Cn, and Dn." where this reads "Those classes are C1, Cn, Dn, T, O, and I.". The rotation-only groups T, O and I also lack an improper axis.]

## 4.4.2: Molecular Vibrations

Symmetry and group theory can be applied to understand molecular vibrations. This is particularly useful in the context of predicting the number of peaks expected in the infrared (IR) and Raman spectra of a given compound.

We will use water as a case study to illustrate how group theory is used to predict the number of peaks in IR and Raman spectra.

### How many IR and Raman peaks would we expect for H2O?

To answer this question with group theory, a pre-requisite is that you assign the molecule's point group and assign an axis system to the entire molecule. By convention, the z axis is collinear with the principle axis, the x axis is in-plane with the molecule or the most number of atoms. It is a good idea to stick with this convention (see Figure 4.4.2.1).

What is the point group for H2O? (click to see answer)

H2O has the following operations: E, C2, σv, σv'. The point group is C_2v.

Figure 4.4.2.1: The first step to finding normal modes is to assign a consistent axis system to the entire molecule and to each atom. (CC-BY-SA; Kathryn Haas)

Now that we know the molecule's point group, we can use group theory to determine the symmetry of all motions in the molecule, or the symmetry of each of its degrees of freedom. Then we will subtract rotational and translational degrees of freedom to find the vibrational degrees of freedom. The number of degrees of freedom depends on the number of atoms (N) in a molecule. Each atom in the molecule can move in three dimensions (x, y, z), and so the number of degrees of freedom is three dimensions times N number of atoms, or 3N. The total degrees of freedom include a number of vibrations, three translations (in x, y, and z), and either two or three rotations. Linear molecules have two rotational degrees of freedom, while non-linear molecules have three. The vibrational modes are represented by the following expressions:

Linear Molecule Degrees of Freedom = 3N − 5

Non-Linear Molecule Degrees of Freedom = 3N − 6

Our goal is to find the symmetry of all degrees of freedom, and then determine which are vibrations that are IR- and Raman-active.

#### STEP 1: Find the reducible representation for all normal modes Γ_modes.

The first major step is to find a reducible representation (Γ) for the movement of all atoms in the molecule (including rotational, translational, and vibrational degrees of freedom). We'll refer to this as Γ_modes. To find normal modes using group theory, assign an axis system to each individual atom to represent the three dimensions in which each atom can move. Each axis on each atom should be consistent with the conventional axis system you previously assigned to the entire molecule (see Figure 4.4.2.1).

Γ_modes is the sum of the characters (trace) of the transformation matrix for the entire molecule (in the case of water, there are 9 degrees of freedom and this is now a 9x9 matrix). Let's walk through this step-by-step. The transformation matrix of E and C2 are shown below:

E = (1, 0, 0, 0, 0, 0, 0, 0, 0; 0, 1, 0, 0, 0, 0, 0, 0, 0; 0, 0, 1, 0, 0, 0, 0, 0, 0; 0, 0, 0, 1, 0, 0, 0, 0, 0; 0, 0, 0, 0, 1, 0, 0, 0, 0; 0, 0, 0, 0, 0, 1, 0, 0, 0; 0, 0, 0, 0, 0, 0, 1, 0, 0; 0, 0, 0, 0, 0, 0, 0, 1, 0; 0, 0, 0, 0, 0, 0, 0, 0, 1)(x_oxygen; y_oxygen; z_oxygen; x_hydrogen-a; y_hydrogen-a; z_hydrogen-a; x_hydrogen-b; y_hydrogen-b; z_hydrogen-b) = (x'_oxygen; y'_oxygen; z'_oxygen; x'_hydrogen-a; y'_hydrogen-a; z'_hydrogen-a; x'_hydrogen-b; y'_hydrogen-b; z'_hydrogen-b), χ = 9

C2 = (−1, 0, 0, 0, 0, 0, 0, 0, 0; 0, −1, 0, 0, 0, 0, 0, 0, 0; 0, 0, 1, 0, 0, 0, 0, 0, 0; 0, 0, 0, 0, 0, 0, −1, 0, 0; 0, 0, 0, 0, 0, 0, 0, −1, 0; 0, 0, 0, 0, 0, 0, 0, 0, 1; 0, 0, 0, −1, 0, 0, 0, 0, 0; 0, 0, 0, 0, −1, 0, 0, 0, 0; 0, 0, 0, 0, 0, 1, 0, 0, 0)(x_oxygen; y_oxygen; z_oxygen; x_hydrogen-a; y_hydrogen-a; z_hydrogen-a; x_hydrogen-b; y_hydrogen-b; z_hydrogen-b) = (x'_oxygen; y'_oxygen; z'_oxygen; x'_hydrogen-a; y'_hydrogen-a; z'_hydrogen-a; x'_hydrogen-b; y'_hydrogen-b; z'_hydrogen-b), χ = −1

[Note: corrected; the source prints "z'_hydrogen-b), χ = 1" where this reads "z'_hydrogen-b), χ = −1". The trace of this C2 matrix is −1 − 1 + 1 = −1, the value used in Γ_modes below.]

It is unnecessary to find the transformation matrix for each operation since it is only the TRACE that gives us the character, and any off-diagonal entries do not contribute to Γ_modes. The values that contribute to the trace can be found simply by performing each operation in the point group and assigning a value to each individual atom to represent how it is changed by that operation. If the atom moves away from itself, that atom gets a character of zero (this is because any non-zero characters of the transformation matrix are off of the diagonal). If the atom remains in place, each of its three dimensions is assigned a value of cosθ. For the example of H2O under the C_2v point group, the axes that remain unchanged (θ = 0°) are assigned a value of cos(0°) = 1, while those that are moved into the negative of themselves (rotated or reflected to θ = 180°) are assigned cos(180°) = −1. The character for Γ is the sum of the values for each transformation.

Let's walk through the steps to assign characters of Γ_modes for H2O to illustrate how this works:

For the operation E, performed on H2O, all three atoms remain in place. The three axes x, y, z on each atom remain unchanged. Thus, each of the three axes on each of three atom (nine axes) is assigned the value cos(0°) = 1, resulting in a sum of χ = 9 for the Γ_modes.

For the operation C2, the two hydrogen atoms are moved away from their original position, and so the hydrogens are assigned a value of zero. The oxygen remains in place; the z-axis on oxygen is unchanged (cos(0°) = 1), while the x and y axes are inverted (cos(180°)). The sum of these characters gives χ = −1 in the Γ_modes.

Now you try! Find the characters of σ_v(xz) and σ_v(yz) under the C_2v point group. Compare what you find to the Γ_modes for all normal modes given below.



| C_2v | E | C2 | σv | σv' |
| --- | --- | --- | --- | --- |
| Γ_modes | 9 | −1 | 3 | 1 |



#### STEP 2: Break Γ_modes into its component irreducible representations

Now that we've found the Γ_modes ((gammamodes)), we need to break it down into the individual irreducible representations (i, j, k...) for the point group. We can do this systematically using the following formula:

\# of i = (1/h)Σ(\# of operations in class) × (χΓ) × (χi)

In other words, the number of irreducible representations of type i is equal to the sum of the number of operations in the class × the character of the Γ_modes × the character of i, and that sum is divided by the order of the group (h).

Using equation (irs), we find that for all normal modes of H2O:

Γ_modes = 3A1 + 1A2 + 3B1 + 2B2.

Notice there are 9 irreducible representations in Equation (water). These irreducible representations represent the symmetries of all 9 motions of the molecule: vibrations, rotations, and translations.

#### Exercise 4.4.2.1: Derive the irreducible representation in equation (water).

Derive the nine irreducible representations of Γ_modes for H2O, expression (water).

Hint

To find the number of each kind of irreducible representation that combine to form the Γ_modes, we need the characters of Γ_modes that we found above ((gammamodes)), the C_2v character table (below), and equation (irs).



| C_2v | 1E | 1C2 | 1σv | 1σv' | h = 4 | |
| --- | --- | --- | --- | --- | --- | --- |
| A1 | 1 | 1 | 1 | 1 | z | x^2, y^2, z^2 |
| A2 | 1 | 1 | −1 | −1 | Rz | xy |
| B1 | 1 | −1 | 1 | −1 | x, Ry | xz |
| B2 | 1 | −1 | −1 | 1 | y, Rx | yz |



In the C_2v point group, each class has only one operation, so the number of operations in each class (from equation (irs)) is 1 for each class. This has been explicitly added to the character table above for emphasis.

**Answer**

The number of A1 = 1/4[(1 × 9 × 1) + (1 × (−1) × 1) + (1 × 3 × 1) + (1 × 1 × 1)] = 3A1

The number of A2 = 1/4[(1 × 9 × 1) + (1 × (−1) × 1) + ((−1) × 3 × 1) + ((−1) × 1 × 1)] = 1A2

The number of B1 = 1/4[(1 × 9 × 1) + ((−1) × (−1) × 1) + (1 × 3 × 1) + ((−1) × 1 × 1)] = 3B1

The number of B2 = 1/4[(1 × 9 × 1) + ((−1) × (−1) × 1) + ((−1) × 3 × 1) + (1 × 1 × 1)] = 2B2

#### STEP 3: Subtract rotations and translations to find vibrational modes.

Because we are interested in molecular vibrations, we need to subtract the rotations and translations from the total degrees of freedom.

Vibrations = Γ_modes− Rotations − Translations

In the example of H2O, the total degrees of freedom are given above in equation (water), and therefore the vibrational degrees of freedom can be found by:

H2O vibrations = (3A1 + 1A2 + 3B1 + 2B2)− Rotations − Translations

But which of the irreducible representations are ones that represent rotations and translations? The symmetry of rotational and translational degree modes can be found by inspecting the right-hand columns of any character table. Rotational modes correspond to irreducible representations that include Rx, Ry, and Rz in the table, while each of the three translational modes has the same symmetry as the x, y and z axes. For a non-linear molecule, subtract three rotational irreducible representations and three translational irreducible representations from the total Γ_modes.

In the specific case of water, we refer to the C_2v character table:



| C_2v | E | C2 | σv | σv' | h = 4 | |
| --- | --- | --- | --- | --- | --- | --- |
| A1 | 1 | 1 | 1 | 1 | z | x^2, y^2, z^2 |
| A2 | 1 | 1 | −1 | −1 | Rz | xy |
| B1 | 1 | −1 | 1 | −1 | x, Ry | xz |
| B2 | 1 | −1 | −1 | 1 | y, Rx | yz |



In C_2v, translations correspond to B1, B2, and A1 (respectively for x, y, z), and rotations correspond to B2, B1, and A2 (respectively for Rx, Ry, Rz). Subtracting these six irreducible representations from Γ_modes will leave us with the irreducible representations for vibrations.

[Note: corrected; the source prints "(respectively for x, yz)" where this reads "(respectively for x, y, z)"; the source prints "rotations correspond to B2, B1, and A1 (respectively" where this reads "rotations correspond to B2, B1, and A2 (respectively". In C_2v, Rz transforms as A2, as the character table gives.]

H2O vibrations = Γ_modes− Rotations − Translations

= (3A1 + 1A2 + 3B1 + 2B2) − (A1 + B1 + B2) − (A2 + B1 + B2)

= 2A1 + 1B1

The three vibrational modes for H2O are 2A1 + 1B1. Note that we have the correct number of vibrational modes based on the expectation of 3N − 6 vibrations for a non-linear molecule.

#### STEP 4: Determine which of the vibrational modes are IR-active and Raman-active.

The next step is to determine which of the vibrational modes is IR-active and Raman-active. To do this, we apply the IR and Raman Selection Rules below:

#### IR and Raman Selection Rules

##### Infrared selection rules:

If a vibration results in the change in the molecular dipole moment, it is IR-active. In the character table, we can recognize the vibrational modes that are IR-active by those with symmetry of the x, y, and z axes.

In C_2v, any vibrations with A1, B1 or B2 symmetry would be IR-active.

##### Raman selection rules:

If a vibration results in a change in the molecular polarizability, it will be Raman-active. In the character table, we can recognize the vibrational modes that are Raman-active by those with symmetry of any of the binary products (xy, xz, yz, x^2, y^2, and z^2) or a linear combination of binary products (e.g. x^2 − y^2).

In C_2v, any vibrations with A1, A2, B1 or B2 symmetry would be Raman-active.

In our H2O example, we found that of the three vibrational modes, two have A1 and one has B1 symmetry. Both A1 and B1 are IR-active, and both are also Raman-active. There are three possible IR peaks and three possible Raman peaks expected for water.*

*It is important to note that this prediction tells only what is possible, but not what we might actually see in the IR and Raman spectra. For example, if two IR peaks overlap, we might actually notice only one peak in the spectrum. Or, if one or more peaks is off-scale, we wouldn't see it in actual data. Group theory tells us what is possible and allows us to make predictions or interpretations of spectra.

#### Summary of Analysis for Water

Each molecular motion for water, or any molecule, can be assigned a symmetry under the molecule's point group. For water, we found that there are a total of 9 molecular motions; 3A1 + A2 + 3B1 + 2B2. Six of these motions are the translations and rotations. The remaining motions are vibrations; two with A1 symmetry and one with B1 symmetry.

[Note: corrected; the source prints "Six of these motions are not the translations" where this reads "Six of these motions are the translations". Three of the nine motions are translations and three rotations; the other three are the vibrations.]

We can tell what these vibrations would look like based on their symmetries. The two A1 vibrations must be completely symmetric, while the B1 vibration is antisymmetric with respect to the principal C2 axis.

Figure 4.4.2.2: Illustration of the vibrational motions of water. The antisymmetric stretch has B1 symmetry, while the symmetric stretch and symmetric bend both have A1 symmetry. (Click here to see animation) (CC-BY-NC-SA; Kathryn Haas)

Table 4.4.2.1: Summary of the Symmetry of Molecular Motions for Water

| All Motions (step 2 above) | Translations (x,y,z) | Rotations (Rx, Ry, Rz) | Remaining Vibrations | Description of Vibration |
| --- | --- | --- | --- | --- |
| 3A1 | 1A1 |  | 2A1 | One is a symmetric stretch. The other is a symmetric bend. Both are IR-active and Raman-active |
| A2 |  | 1A2 |  |  |
| 3B1 | 1B1 | 1B1 | 1B1 | Antisymmetric stretch that is IR-active and Raman-active. |
| 2B2 | 1B2 | 1B2 |  |  |

#### Exercise 4.4.2.2

Find the symmetries of all motions of the square planar complex, tetrachloroplatinate (II). Determine which are rotations, translations, and vibrations. Determine which vibrations are IR and Raman active.

**Answer**

The point group of [PtCl4]^2- is D_4h (refer to its character table). There are five atoms and 15 vectors (x, y, z for each atom × 5 atoms).

STEP 1: The first major step is to find a reducible representation (Γ) for the movement of all atoms in the molecule.



| D_4h | E | 2C4 | C2 | 2C2' | 2C2" | i | 2S4 | σh | 2σv | 2σd |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Γ_modes | 15 | 1 | −1 | −3 | −1 | −3 | −1 | 5 | 3 | 1 |

[Note: corrected; the source prints "| C_2v | E | 2C4 |" where this reads "| D_4h | E | 2C4 |". This table is for [PtCl4]^2− in the D_4h point group, as its columns show.]

STEP 2: Break Γ_modes into its component irreducible representations.

Following the process described earlier, we come to A_1g + A_2g + B_1g + B_2g + Eg + 2A_2u + B_2u + 3Eu. This accounts for all modes of movement, including rotations and translations.

STEP 3: Subtract rotations and translations to find vibrational modes.

The translations are A_2u + Eu and the rotations are A_2g + Eg. The remaining normal modes are: A_1g + B_1g + B_2g + A_2u + B_2u + 2Eu

STEP 4: Determine which of the vibrational modes are IR-active and Raman-active:

A_2u + Eu are IR-active. Since A_2u is singly degenerate and Eu is doubly degenerate, we expect three possible IR bands. A_1g + B_1g + B_2g are Raman-Active. Each of these is singly degenerate, so we expect three possible Raman bands.

[Note: the IR-active vibrations are A_2u + 2Eu, and a degenerate pair gives a single band, so there are three IR bands because there are three IR-active representations (A_2u and two Eu), not because Eu is doubly degenerate. The paragraph is left as printed.]

### Selected Vibrational Modes

The interpretation of CO stretching vibrations in an IR spectrum is particularly useful. Symmetry and group theory can be applied to predict the number of CO stretching bands that appear in a vibrational spectrum for a given metal coordination complex. A classic example of this application is in distinguishing isomers of metal-carbonyl complexes. For example, the cis- and trans- isomers of square planar metal dicarbonyl complexes (ML2(CO)2) have a different number of IR stretches that can be predicted and interpreted using symmetry and group theory. Another example is the case of mer- and fac- isomers of octahedral metal tricarbonyl complexes (ML3(CO)3). Structures of the two types of metal carbonyl configurations and their isomers are shown in Figure 4.4.2.1. The isomers in each case can be distinguished using vibrational spectroscopy.

Figure 4.4.2.3: Cis- and trans- isomers of square planar metal dicarbonyl complexes (ML2(CO)2) are shown in the left box. Mer- and fac- isomers of octahedral metal tricarbonyl complexes (ML3(CO)3) are shown in the right box. The point group for each of the general structures is also shown. (CC-BY-NC-SA; Kathryn Haas)

### EXAMPLE 1: Distinguishing cis- and trans- isomers of square planar metal dicarbonyl complexes

General structures of the cis- and trans- isomers of square planar metal dicarbonyl complexes (ML2(CO)2) are shown in the left box in Figure 4.4.2.1. We can use symmetry and group theory to predict how many carbonyl stretches we should expect for each isomer following the steps below.

#### Step 1: Assign the point group and Cartesian coordinates for each isomer.

The cis-isomer has C_2v symmetry and the trans-isomer has D_2h symmetry. We assign the Cartesian coordinates so that z is colinear with the principle axis in each case. For the D2 h isomer, there are several orientations of the z axis possible. The axes shown in Figure 4.4.2.2 will be used here.

Figure 4.4.2.4: Cis- and trans- isomers of square planar metal dicarbonyl complexes (ML2(CO)2) are shown and oriented with respect to the Cartesian coordinates shown at the left so that the highest-order rotation axis is colinear with z and the molecule is co-planar with the xz plane. The vector along each C—O bond is shown using a red arrow (→). These vectors represent the direction of C—O stretching motions. (CC-BY-NC-SA; Kathryn Haas)

#### Step 2: Produce a reducible representation (Γ) for CO stretches in each isomer

First, assign a vector along each C—O bond in the molecule to represent the direction of C—O stretching motions, as shown in Figure 4.4.2.2 (red arrows →). These vectors are used to produce a reducible representation (Γ) for the C—O stretching motions in each molecule. Using the symmetry operations under the appropriate character table, assign a value of 1 to each vector that remains in place during the operation, and a value of 0 if the vector moves out of place. There will be no occasion where a vector remains in place but is inverted, so a value of -1 will not occur.

##### cis- ML2(CO)2:

For cis- ML2(CO)2, the point group is C_2v and so we use the operations under the C_2v character table to create the Γ_cis-CO.

| C_2v | E | C2 | σv(xz) | σv'(yz) |
| --- | --- | --- | --- | --- |
| Γ_cis-CO | 2 | 0 | 2 | 0 |



##### trans- ML2(CO)2:

For trans- ML2(CO)2, the point group is D_2h and so we use the operations under the D_2h character table to create the Γ_trans-CO.

| D_2h | E | C2(z) | C2(y) | C2(x) | i | σ(xy) | σ(xz) | σ(yz) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Γ_trans-CO | 2 | 0 | 0 | 2 | 0 | 2 | 2 | 0 |



#### Step 3: Break each Γ into its component irreducible representations

Each Γ can be reduced using inspection or by the systematic method described previously.

In the case of the cis- ML2(CO)2, the CO stretching vibrations are represented by A1 and B1 irreducible representations:

| C_2v | E | C2 | σv(xz) | σv'(yz) | | |
| --- | --- | --- | --- | --- | --- | --- |
| Γ_cis-CO | 2 | 0 | 2 | 0 | | |
| A1 | 1 | 1 | 1 | 1 | z | x^2, y^2, z^2 |
| B1 | 1 | −1 | 1 | −1 | x, Ry | xz |



In the case of trans- ML2(CO)2, the CO stretching vibrations are represented by Ag and B_3u irreducible representations:

[Note: corrected; the source prints "represented by A1 and B_3u" where this reads "represented by Ag and B_3u". In D_2h the totally symmetric representation is Ag, as the reduction below gives.]



| D_2h | E | C2(z) | C2(y) | C2(x) | i | σ(xy) | σ(xz) | σ(yz) | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Γ_trans-CO | 2 | 0 | 0 | 2 | 0 | 2 | 2 | 0 | | |
| Ag | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | | x^2, y^2, z^2 |
| B_3u | 1 | −1 | −1 | 1 | −1 | 1 | 1 | −1 | x | |



These irreducible representations correspond to the symmetries of only the selected C—O vibrations. Since these motions are isolated to the C—O group, they do not include any rotations or translations of the entire molecule, and so we do not need to find and subtract rotationals or translations (unlike the previous cases where all motions were considered).

#### Step 4: Determine which vibrational modes are IR-active and/or Raman-active

Apply the infrared selection rules described previously to determine which of the CO vibrational motions are IR-active and Raman-active. The two isomers of ML2(CO)2 are described below.

In the case of the cis- ML2(CO)2, the CO stretching vibrations are represented by A1 and B1 irreducible representations. The characters of both representations and their functions are shown above, in (c2v) (and can be found in the C_2v character table). Under C_2v, both the A1 and B1 CO vibrational modes are IR-active and Raman-active. Therefore, two bands in the IR spectrum and two bands in the Raman spectrum are possible.

In the case of the trans- ML2(CO)2, the CO stretching vibrations are represented by Ag and B_3u irreducible representations. The characters of both representations and their functions are shown above, in (c2v) (and can be found in the D_2h character table). Under D_2h, the Ag vibrational mode is is Raman-active only, while the B_3u vibrational mode is IR-active only. Therefore, only one IR band and one Raman band are possible for this isomer.

### Summary

It is possible to distinguish between the two isomers of square planar ML2(CO)2 using either IR or Raman vibrational spectroscopy. The cis- ML2(CO)2 can produce two CO stretches in an IR or Raman spectrum, while the trans- ML2(CO)2 isomer can produce only one band in either type of vibrational spectrum. If a sample of ML2(CO)2 produced two CO stretching bands, we could rule out the possibility of a pure sample of trans-ML2(CO)2.

#### Exercise 4.4.2.3

Repeat the steps outlined above to determine how many CO vibrations are possible for mer-ML3(CO)3 and fac-ML3(CO)3 isomers (see Figure 4.4.2.1) in both IR and Raman spectra. Could either of these vibrational spectroscopies be used to distinguish the two isomers?

**Answer**

Step 1: Assign the point group and Cartesian coordinates for each isomer. The fac-isomer is C_3v. The mer-isomer is C_2v.

Step 2: Produce a reducible representation for CO stretches in each isomer.

Step 3: Break each into its component irreducible representations.

Step 4: Determine which vibrational modes are IR-active and/or Raman-active.

For fac-ML3(CO)3, the point group is C_3v and so we use the operations under the C_3v character table to create the Γ_fac-CO. Then break it into its irreducible representations and determine which are IR and Raman active:

| C_3v | E | 2C3 | 3σv |
| --- | --- | --- | --- |
| Γ_fac-CO | 3 | 0 | 1 |

[Note: corrected; the source prints "| C_3v | E | 2C2 | 3σv |" where this reads "| C_3v | E | 2C3 | 3σv |". The classes of C_3v are E, 2C3 and 3σv.]



This reduces to A1 + E. Both of these are IR active, and since one is singly degenerate while the other is doubly degenerate, we expect three possible IR bands from this isomer. Both vibrational modes are also Raman active, and again we would expect three possible bands in the Raman spectrum.

[Note: A1 + E gives two IR bands and two Raman bands, not three: the two members of a degenerate E pair give a single band. The paragraph is left as printed.]

For mer-ML3(CO)3, the point group is C_2v and so we use the operations under the C_2v character table to create the Γ_mer-CO. Then break it into its irreducible representations and determine which are IR and Raman active:

| C_2v | E | C2 | σv(xz) | σv'(yz) |
| --- | --- | --- | --- | --- |
| Γ_mer-CO | 3 | 1 | 3 | 1 |



This reduces to 2A1 + B1; both A1 and B1 are IR and Raman active. So this isomer would have three possible IR bands and three possible Raman Bands.

These two isomers have the same number of possible bands in both IR and Raman spectroscopy. It would not be straightforward to distinguish them from each other based on the number of possible bands in the vibrational spectrum.

[Note: the fac isomer (A1 + E) gives two IR and two Raman bands and the mer isomer (2A1 + B1) gives three of each, so the number of CO stretching bands does tell the two isomers apart. The paragraph is left as printed.]
