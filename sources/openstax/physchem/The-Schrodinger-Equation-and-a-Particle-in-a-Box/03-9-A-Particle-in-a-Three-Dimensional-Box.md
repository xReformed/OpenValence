---
title: "3.9: A Particle in a Three-Dimensional Box"
book: "Physical Chemistry (LibreTexts)"
chapter: "3: The Schrödinger Equation and a Particle in a Box"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/03%3A_The_Schrodinger_Equation_and_a_Particle_in_a_Box/3.09%3A_A_Particle_in_a_Three-Dimensional_Box"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- To demonstrate how the particle in 1-D box problem can extend to a particle in a 3D box
- Introduction to nodal surfaces (e.g., nodal planes)

The quantum particle in the 1D box problem can be expanded to consider a particle within a higher dimensions as demonstrated elsewhere for a quantum particle in a 2D box. Here we continue the expansion into a particle trapped in a 3D box with three lengths Lx, Ly, and Lz. As with the other systems, there is NO FORCE (i.e., no potential) acting on the particles inside the box (Figure 3.9.1 ).

Figure 3.9.1: A particle in 3D box with three lengths Lx, Ly, and Lz. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)
A transparent yellow cube with a circular hole on one face, sitting in a 3D coordinate system.

The potential for the particle inside the box

V(r⃗) = 0

- 0 ≤ x ≤ Lx
- 0 ≤ y ≤ Ly
- 0 ≤ z ≤ Lz
- Lx < x < 0
- Ly < y < 0
- Lz < z < 0

[Note: the potential is zero only inside the box (the first three conditions). The last three describe no region as written; they stand for the outside of the box, x < 0 or x > Lx (and likewise for y and z), where the potential is infinite. The text is left as printed.]

r⃗ is the vector with all three components along the three axes of the 3-D box: r⃗ = x x̂ + y ŷ + z ẑ. When the potential energy is infinite, then the wavefunction equals zero. When the potential energy is zero, then the wavefunction obeys the Time-Independent Schrödinger Equation

[Note: corrected; the source prints "r⃗ = Lx x̂ + Ly ŷ + Lz ẑ" where this reads "r⃗ = x x̂ + y ŷ + z ẑ". A position in the box is r⃗ = x x̂ + y ŷ + z ẑ; Lx, Ly and Lz are the box's fixed lengths.]

−(ħ^2/(2 m))∇^2ψ(r) + V(r)ψ(r) = Eψ(r)

Since we are dealing with a 3-dimensional figure, we need to add the 3 different axes into the Schrondinger equation:

−(ħ^2/(2 m))((d^2ψ(r))/dx^2 + (d^2ψ(r))/dy^2 + (d^2ψ(r))/dz^2) = Eψ(r)

The easiest way in solving this partial differential equation is by having the wavefunction equal to a product of individual function for each independent variable (e.g., the Separation of Variables technique):

ψ(x, y, z) = X(x)Y(y)Z(z)

Now each function has its own variable:

- X(x) is a function of variable x only
- Y(y) is a function of variable y only
- Z(z) is a function of variable z only

Now substitute Equation (3.9.3) into Equation (3.9.2) and divide it by the XYZ product:

[Note: corrected; the source prints "divide it by the xyz product" where this reads "divide it by the XYZ product". The product is X(x)Y(y)Z(z), as the lines below show.]

(d^2ψ)/dx^2 = YZ(d^2 X)/dx^2 ⇒ 1/X · (d^2 X)/dx^2

(d^2ψ)/dy^2 = XZ(d^2 Y)/dy^2 ⇒ 1/Y · (d^2 Y)/dy^2

(d^2ψ)/dz^2 = XY(d^2 Z)/dz^2 ⇒ 1/Z · (d^2 Z)/dz^2

(−ħ^2/(2 mX) · (d^2 X)/dx^2) + (−ħ^2/(2 mY) · (d^2 Y)/dy^2) + (−ħ^2/(2 mZ) · (d^2 Z)/dz^2) = E

E is an energy constant, and is the sum of εx, εy, and εz. For this to work, each term must equal its own constant. For example,

[Note: corrected; the source prints "is the sum of x, y, and z" where this reads "is the sum of εx, εy, and εz". The energy is the sum of the three separation constants εx, εy and εz.]

(d^2 X)/dx^2 + ((2 m)/ħ^2)εx X = 0

Now separate each term in Equation (3.9.4) to equal zero:

(d^2 X)/dx^2 + ((2 m)/ħ^2)εx X = 0

(d^2 Y)/dy^2 + ((2 m)/ħ^2)εy Y = 0

(d^2 Z)/dz^2 + ((2 m)/ħ^2)εz Z = 0

Now we can add all the energies together to get the total energy:

εx + εy + εz = E

Do these equations look familiar? They should because we have now reduced the 3D box into three particle in a 1D box problems!

(d^2 X)/dx^2 + ((2 m)/ħ^2)Ex X = 0≈(d^2ψ)/dx^2 = −((4π^2)/λ^2)ψ

Now the equations are very similar to a 1-D box and the boundary conditions are identical, i.e.,

n = 1,2, ..∞

Use the normalization wavefunction equation for each variable:

ψ(x) = {√(2/(Lx)) sin((nπx)/(Lx)), if 0 ≤ x ≤ L; 0, if L < x < 0}

[Note: the wavefunction is zero outside the box, x < 0 or x > Lx; "L < x < 0" describes no region, and L stands for Lx. The text is left as printed.]

Normalization wavefunction equation for each variable (that substitute into Equation (3.9.3)):

X(x) = √(2/(Lx)) sin((nx πx)/(Lx))

Y(y) = √(2/(Ly)) sin((ny πy)/(Ly))

Z(z) = √(2/(Lz)) sin((nz πz)/(Lz))

The limits of the three quantum numbers

- nx = 1,2,3, ...∞
- ny = 1,2,3, ...∞
- nz = 1,2,3, ...∞

For each constant use the de Broglie Energy equation:

εx = (nx^2 h^2)/(8 mLx^2)

with nx = 1...∞

Do the same for variables ny and nz. Combine Equation (3.9.3) with Equations (3.9.8a)-(3.9.8c) to find the wavefunctions inside a 3D box.

ψ(r) = √(8/V) sin((nx πx)/(Lx)) sin((ny πy)/(Ly)) sin((nz πz)/(Lz))

with

V = Lx × Ly × Lz (volume of box)

To find the Total Energy, add Equation (3.9.9) and Equation (3.9.6).

E_(nx, ny, nz) = (h^2/(8 m))((nx^2)/(Lx^2) + (ny^2)/(Ly^2) + (nz^2)/(Lz^2))

Notice the similarity between the energies a particle in a 3D box (Equation (3.9.10)) and a 1D box.

## Degeneracy in a 3D Cube

The energy of the particle in a 3-D cube (i.e., Lx = Ly = Lz = L) in the ground state is given by Equation (3.9.10) with nx = 1, ny = 1, and nz = 1. This energy (E_(1, 1, 1)) is hence

[Note: corrected; the source prints "(i.e., Lx = Ly = L)" where this reads "(i.e., Lx = Ly = Lz = L)". In a cube all three lengths are equal.]

E_(1, 1, 1) = (3 h^2)/(8 mL^2)

The ground state has only one wavefunction and no other state has this specific energy; the ground state and the energy level are said to be non-degenerate. However, in the 3-D cubical box potential the energy of a state depends upon the sum of the squares of the quantum numbers (Equation (3D wave)). The particle having a particular value of energy in the excited state MAY has several different stationary states or wavefunctions. If so, these states and energy eigenvalues are said to be degenerate.

For the first excited state, three combinations of the quantum numbers (nx, ny, nz) are (2, 1, 1), (1,2,1), (1,1,2). The sum of squares of the quantum numbers in each combination is same (equal to 6). Each wavefunction has same energy:

E_(2, 1, 1) = E_(1, 2, 1) = E_(1, 1, 2) = (6 h^2)/(8 mL^2)

Corresponding to these combinations three different wavefunctions and three different states are possible. Hence, the first excited state is said to be three-fold or triply degenerate. The number of independent wavefunctions for the stationary states of an energy level is called as the degree of degeneracy of the energy level. The value of energy levels with the corresponding combinations and sum of squares of the quantum numbers

n^2 = nx^2 + ny^2 + nz^2

as well as the degree of degeneracy are depicted in Table 3.9.1 .

Table 3.9.1 : Degeneracy properties of the particle in a 3-D cube with Lx = Ly = Lz = L.

[Note: corrected; the source prints "with Lx = Ly = L." where this reads "with Lx = Ly = Lz = L.". In a cube all three lengths are equal.]

| nx^2 + ny^2 + nz^2 | Combinations of Degeneracy; (nx, ny, nz) |  |  |  |  |  | Total Energy; (E_(nx, ny, nz)) | Degree of Degeneracy |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3 | (1,1,1) |  |  |  |  |  | (3 h^2)/(8 mL^2) | 1 |
| 6 | (2,1,1) | (1,2,1) | (1,1,2) |  |  |  | (6 h^2)/(8 mL^2) | 3 |
| 9 | (2,2,1) | (1,2,2) | (2,1,2) |  |  |  | (9 h^2)/(8 mL^2) | 3 |
| 11 | (3,1,1) | (1,3,1) | (1,1,3) |  |  |  | (11 h^2)/(8 mL^2) | 3 |
| 12 | (2,2,2) |  |  |  |  |  | (12 h^2)/(8 mL^2) | 1 |
| 14 | (3,2,1) | (3,1,2) | (2,3,1) | (2,1,3) | (1,3,2) | (1,2,3) | (14 h^2)/(8 mL^2) | 6 |
| 17 | (2,2,3) | (3,2,2) | (2,3,2) |  |  |  | (17 h^2)/(8 mL^2) | 3 |
| 18 | (1,1,4) | (1,4,1) | (4,1,1) |  |  |  | (18 h^2)/(8 mL^2) | 3 |
| 19 | (1,3,3) | (3,1,3) | (3,3,1) |  |  |  | (19 h^2)/(8 mL^2) | 3 |
| 21 | (1,2,4) | (1,4,2) | (2,1,4) | (2,4,1) | (4,1,2) | (4,2,1) | (21 h^2)/(8 mL^2) | 6 |

### Example 3.9.1 : Accidental Degeneracies

When is there degeneracy in a 3-D box when none of the sides are of equal length (i.e., Lx ≠ Ly ≠ Lz)?

**Solution**

From simple inspection of Equation (3.9.10) or Table 3.9.1 , it is clear that degeneracy originates from different combinations of nx^2/Lx^2, ny^2/Ly^2 and nz^2/Lz^2 that give the same value. These will occur at common multiples of at least two of these quantities (the Least Common Multiple is one example). For example

if

(nx^2)/(Lx^2) = (ny^2)/(Ly^2)

there will be a degeneracy. Also degeneracies will exist if

(ny^2)/(Ly^2) = (nz^2)/(Lz^2)

or if

(nx^2)/(Lx^2) = (nz^2)/(Lz^2)

and especially if

(nx^2)/(Lx^2) = (ny^2)/(Ly^2) = (nz^2)/(Lz^2).

There are two general kinds of degeneracies in quantum mechanics: degeneracies due to a symmetry (i.e., Lx = Ly) and accidental degeneracies like those above.

### Exercise 3.9.1

The 6^th energy level of a particle in a 3D Cube box is 6-fold degenerate.

a. What is the energy of the 7th energy level?
b. What is the degeneracy of the 7th energy level?

**Answer a**

(17 h^2)/(8 mL^2)

**Answer b**

three-fold (i.e., there are three wavefunctions that share the same energy.

## References

1. Atkins, Peter. Physical Chemistry 5th Ed. USA. 1994.
2. Fitts, Donald. Principles of Quantum Mechanics. United Kingdom, Cambridge. University Press. 1999
3. McQuarrie. Donald. Physical Chemistry A Molecular Approach. Sausalito, CA. University Science Books. 1997.
4. Riggs. N. V. Quantum Chemistry. Toronto, Ontario. The Macmillan Company. 1969
5. C. A. Hollingsworth, Accidental Degeneracies of the Particle in a Box, J. Chem. Educ., 1990, 67 (12), p 999
