---
title: "4.3: Properties and Representations of Groups"
book: "Inorganic Chemistry (LibreTexts)"
chapter: "4: Symmetry and Group Theory"
source_url: "https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Inorganic_Chemistry_(LibreTexts)/04%3A_Symmetry_and_Group_Theory/4.03%3A_Properties_and_Representations_of_Groups"
author: "Khaas"
license: "CC BY-NC-SA 4.0"
---

## Group Multiplication

Now we will investigate what happens when we apply two symmetry operations in sequence. As an example, consider the NH3 molecule, which belongs to the C_3v point group. Consider what happens if we apply a C3rotation (120˚ counter-clockwise) followed by a σv reflection (reflection over the σv axis). We write this combined operation σvC3 (when written, symmetry operations operate on the thing directly to their right, just as operators do in quantum mechanics – we therefore have to work backwards from right to left from the notation to get the correct order in which the operators are applied). As we shall soon see, the order in which the operations are applied is important.

[Image not described in source]

The combined operation σvC3 is equivalent to σv'' (note the double prime on σv''!), which is also a symmetry operation of the C_3v point group. Now let’s see what happens if we apply the operators in the reverse order, i.e., C3σv is (σv followed by C3).

[Image not described in source]

Again, the combined operation C3σv is equivalent to another operation of the point group, this time σv' (note the single prime on σv'!).

There are two important points that are illustrated by this example:

1. The order in which two operations are applied is important. For two symmetry operations A and B, AB is not necessarily the same as BA, i.e. symmetry operations do not in general commute. In some groups the symmetry elements do commute; such groups are said to be Abelian.
2. If two operations from the same point group are applied in sequence, the result will be equivalent to another operation from the point group. Symmetry operations that are related to each other by other symmetry operations of the group are said to belong to the same class. In NH3, the three mirror planes σv, σv' and σv'' belong to the same class (related to each other through a C3 rotation), as do the rotations C3^+ and C3^− (anticlockwise and clockwise rotations about the principal axis, related to each other by a vertical mirror plane).

## Four Properties of Mathematical Groups

Now that we have explored some of the properties of symmetry operations and elements and their behavior within point groups, we are ready to introduce the formal mathematical definition of a group. The definitions below will be put into the context of molecular symmetry.

A mathematical group is defined as a set of elements (A1, A2, A3...) together with a rule for forming combinations Ai,Aj... For our purposes, A1, A2, A3, etc. are symmetry elements and Ai, Aj, etc. are symmetry operations described in a previous section. The elements of the group and the rule for combining them must satisfy the following four criteria.

1. The group must include the identity E, which commutes with other members of the group. In other terms, EAi = Ai for all the elements of the group. Application of the identity operation before or after another operation, Ai, results in the same outcome as Ai alone.
2. The elements must satisfy the group property that the combination of any pair of elements is also an element of the group. For example, in the C_3v point group, a C3 rotation followed by a σv gives another operation that is already part of the group: a σv".
3. Each symmetry operation Ai must have an inverse Ai^−1, which is also an element of the group, such that Ai Ai^−1 = Ai^−1 Ai = E The inverse gi^−1 effectively 'undoes’ the effect of the symmetry operation gi. For example, in the C_3v point group, the inverse of C3^+ is C3^−.
4. The rule of combination must be associative (Ai Aj)(Ak) = Ai(Aj Ak) Or A(BC) = (AB)C. In other words, the grouping of operations should not matter.

[Note: corrected; the source prints "In other words, the order of operations should not matter." where this reads "In other words, the grouping of operations should not matter.". Associativity is about how operations are grouped, (AB)C = A(BC); the order in which they are applied does matter, as the start of this section shows.]

Group theory is an important area in mathematics, and luckily for chemists the mathematicians have already done most of the work for us. Along with the formal definition of a group comes a comprehensive mathematical framework that allows us to carry out a rigorous treatment of symmetry in molecular systems and learn about its consequences.

Many problems involving operators or operations (such as those found in quantum mechanics or group theory) may be reformulated in terms of matrices. Any of you who have come across transformation matrices before will know that symmetry operations such as rotations and reflections may be represented by matrices. It turns out that the set of matrices representing the symmetry operations in a group obey all the conditions laid out above in the mathematical definition of a group, and using matrix representations of symmetry operations simplifies carrying out calculations in group theory. Before we learn how to use matrices in group theory, it will probably be helpful to review some basic definitions and properties of matrices.

*This page was adapted from here (click).

## Contributors and Attributions

- Claire Vallance (University of Oxford)
- Curated or created by Kathryn Haas

## 4.3.1: Matrices

The symmetry of molecules is essential for understanding the structures and properties of organic and inorganic compounds. The properties of chemical compounds are often easily explained by consideration of symmetry. For example, the symmetry of a molecule determines whether the molecule has a permanent dipole moment or not. The theories that describe optical activity, infrared and ultraviolet spectroscopy, and crystal structure involve the application of symmetry considerations. Matrix algebra is the most important mathematical tool in the description of symmetry.

The properties of symmetry groups are organized in character tables (discussed later in this chapter). Character tables are constructed based on matrices. This page is a brief description of matrices and matrix multiplication.

### What is a matrix?

An m × n matrix A is a rectangular array of numbers with m rows and n columns. The numbers m and n are the dimensions of A. The numbers in the matrix are called its entries. The entry in row i and column j is called a_ij.

Figure 4.3.1.1: Matrices of different dimensions

Some types of matrices have special names:

- A square matrix:(3, −2, 4; 5, 3i, 3; −i, 1/2, 9) with m = n
- A rectangular matrix:(3, −2, 4; 5, 3i, 3) with m ≠ n
- A column vector:(3; 5; −i) with n = 1
- A row vector:(3, −2, 4) with m = 1
- The identity matrix:(1, 0, 0; 0, 1, 0; 0, 0, 1) with a_ij = δ_(i, j), where δ_(i, j) is a function defined as δ_(i, j) = 1 if i = j and δ_(i, j) = 0 if i ≠ j.
- A diagonal matrix:(a, 0, 0; 0, b, 0; 0, 0, c) with a_ij = ci δ_(i, j).
- An upper triangular matrix:(a, b, c; 0, d, e; 0, 0, f) All the entries below the main diagonal are zero.
- A lower triangular matrix:(a, 0, 0; b, c, 0; d, e, f) All the entries above the main diagonal are zero.
- A triangular matrix is one that is either lower triangular or upper triangular.

#### The Trace of a Matrix

The trace of an n × n square matrix A is the sum of the diagonal elements, and formally defined as Tr(A) = Σ_(i=1)^n a_ii.

For example,

A = (3, −2, 4; 5, 3i, 3; −i, 1/2, 9) ;Tr(A) = 12 + 3i

#### Singular and Nonsingular Matrices

A square matrix with nonzero determinant is called nonsingular. A matrix whose determinant is zero is called singular. (Note that you cannot calculate the determinant of a non-square matrix).

For a 2x2 matrix,

B = (a, b; c, d) ;det(B) = ad − cb

For a 3x3 matrix,

C = (a, b, c; d, e, f; g, h, i)

det(C) = a(e, f; h, i)−b(d, f; g, i) + c(d, e; g, h)

det(C) = aei − ahf − bdi + bgf + cdh − cge

#### The Matrix Transpose

The matrix transpose, most commonly written A^T, is the matrix obtained by exchanging A’s rows and columns. It is obtained by replacing all elements a_ij with a_ji. For example:

A = (3, −2, 4; 5, 3i, 3) → A^T = (3, 5; −2, 3i; 4, 3)

### Matrix Multiplication

To multiply two matrices, the number of vertical columns in the first matrix must be the same as the number of rows in the second matrix. If A has dimensions m × n and B has dimensions n × p, then the product AB is defined, and has dimensions m × p.

c_ij = Σ_k a_ik × b_kj

[Note: corrected; the source prints "c_ij = Σa_ij × b_ij" where this reads "c_ij = Σ_k a_ik × b_kj". Each entry of the product sums row i of A times column j of B over the shared index k, as the sentence below describes.]

The entry c_ij is obtained by multiplying row i of A by column j of B, which is done by multiplying corresponding entries together and then adding the results:

[Note: corrected; the source prints "The entry a_ij × b_ij is obtained" where this reads "The entry c_ij is obtained". The entry described is c_ij, the entry of the product matrix.]

Figure 4.3.1.1: Matrix multiplication

#### Example 4.3.1.1

Calculate the product

(1, −2, 4; 5, 0, 3; 0, 1/2, 9)(1, 0; 5, 3; −1, 0)

**Solution**

We need to multiply a 3 × 3 matrix by a 3 × 2 matrix, so we expect a 3 × 2 matrix as a result.

(1, −2, 4; 5, 0, 3; 0, 1/2, 9)(1, 0; 5, 3; −1, 0) = (a, b; c, d; e, f)

To calculate a, which is entry (1,1), we use row 1 of the matrix on the left and column 1 of the matrix on the right:

(1, −2, 4; 5, 0, 3; 0, 1/2, 9)(1, 0; 5, 3; −1, 0) = (a, b; c, d; e, f) → a = 1 × 1 + (−2) × 5 + 4 × (−1) = −13

To calculate b, which is entry (1,2), we use row 1 of the matrix on the left and column 2 of the matrix on the right:

(1, −2, 4; 5, 0, 3; 0, 1/2, 9)(1, 0; 5, 3; −1, 0) = (a, b; c, d; e, f) → b = 1 × 0 + (−2) × 3 + 4 × 0 = −6

To calculate c, which is entry (2,1), we use row 2 of the matrix on the left and column 1 of the matrix on the right:

(1, −2, 4; 5, 0, 3; 0, 1/2, 9)(1, 0; 5, 3; −1, 0) = (a, b; c, d; e, f) → c = 5 × 1 + 0 × 5 + 3 × (−1) = 2

To calculate d, which is entry (2,2), we use row 2 of the matrix on the left and column 2 of the matrix on the right:

(1, −2, 4; 5, 0, 3; 0, 1/2, 9)(1, 0; 5, 3; −1, 0) = (a, b; c, d; e, f) → d = 5 × 0 + 0 × 3 + 3 × 0 = 0

To calculate e, which is entry (3,1), we use row 3 of the matrix on the left and column 1 of the matrix on the right:

(1, −2, 4; 5, 0, 3; 0, 1/2, 9)(1, 0; 5, 3; −1, 0) = (a, b; c, d; e, f) → e = 0 × 1 + 1/2 × 5 + 9 × (−1) = −13/2

To calculate f, which is entry (3,2), we use row 3 of the matrix on the left and column 2 of the matrix on the right:

(1, −2, 4; 5, 0, 3; 0, 1/2, 9)(1, 0; 5, 3; −1, 0) = (a, b; c, d; e, f) → f = 0 × 0 + 1/2 × 3 + 9 × 0 = 3/2

The result is:

(1, −2, 4; 5, 0, 3; 0, 1/2, 9)(1, 0; 5, 3; −1, 0) = (−13, −6; 2, 0; −13/2, 3/2)

#### Example 4.3.1.2

Calculate

(1, −2, 4; 5, 0, 3)(1; 5; −1)

**Solution**

We are asked to multiply a 2 × 3 matrix by a 3 × 1 matrix (a column vector). The result will be a 2 × 1 matrix (a vector).

(1, −2, 4; 5, 0, 3)(1; 5; −1) = (a; b)

a = 1 × 1 + (−2) × 5 + 4 × (−1) = −13

b = 5 × 1 + 0 × 5 + 3 × (−1) = 2

The solution is:

(1, −2, 4; 5, 0, 3)(1; 5; −1) = (−13; 2)

<!-- end of example -->

Need help? The link below contains solved examples: Multiplying matrices of different shapes (three examples): http://tinyurl.com/kn8ysqq

External links:

- Multiplying matrices, example 1: http://patrickjmt.com/matrices-multiplying-a-matrix-by-another-matrix/
- Multiplying matrices, example 2: http://patrickjmt.com/multiplying-matrices-example-2/
- Multiplying matrices, example 3: http://patrickjmt.com/multiplying-matrices-example-3/

### The Commutator

Matrix multiplication is not, in general, commutative. For example, we can perform

(1, −2, 4; 5, 0, 3)(1; 5; −1) = (−13; 2)

but cannot perform

(1; 5; −1)(1, −2, 4; 5, 0, 3)

Even with square matrices, that can be multiplied both ways, multiplication is not commutative. In this case, it is useful to define the commutator, defined as:

[A, B] = AB − BA

#### Example 4.3.1.3

Given A = (3, 1; 2, 0) and B = (1, 0; −1, 2)

Calculate the commutator [A, B]

**Solution**

[A, B] = AB − BA

AB = (3, 1; 2, 0)(1, 0; −1, 2) = (3 × 1 + 1 × (−1), 3 × 0 + 1 × 2; 2 × 1 + 0 × (−1), 2 × 0 + 0 × 2) = (2, 2; 2, 0)

BA = (1, 0; −1, 2)(3, 1; 2, 0) = (1 × 3 + 0 × 2, 1 × 1 + 0 × 0; −1 × 3 + 2 × 2, −1 × 1 + 2 × 0) = (3, 1; 1, −1)

[A, B] = AB − BA = (2, 2; 2, 0)−(3, 1; 1, −1) = (−1, 1; 1, 1)

[A, B] = (−1, 1; 1, 1)

### Multiplication of a vector by a scalar

The multiplication of a vector v⃗1 by a scalar n produces another vector of the same dimensions that lies in the same direction as v⃗1;

n(x; y) = (nx; ny)

The scalar can stretch or compress the length of the vector, but cannot rotate it (figure [fig:vector_by_scalar]).

Figure 4.3.1.2: Multiplication of a vector by a scalar

### Multiplication of a square matrix by a vector

The multiplication of a vector v⃗1 by a square matrix produces another vector of the same dimensions of v⃗1. For example, we can multiply a 2 × 2 matrix and a 2-dimensional vector:

(a, b; c, d)(x; y) = (ax + by; cx + dy)

For example, consider the matrix

A = (−2, 0; 0, 1)

The product

(−2, 0; 0, 1)(x; y)

is

(−2x; y)

We see that 2 × 2 matrices act as operators that transform one 2-dimensional vector into another 2-dimensional vector. This particular matrix keeps the value of y constant and multiplies the value of x by -2 (Figure 4.3.1.3).

Figure 4.3.1.3: Multiplication of a vector by a square matrix

Notice that matrices are useful ways of representing operators that change the orientation and size of a vector. An important class of operators that are of particular interest to chemists are the so-called symmetry operators.

### Attribution

This page was adapted from Matrices (click here), contributed by Marcia Levitus, Associate Professor (Biodesign Institute) at Arizona State University.

Curated or created by Kathryn Haas

## 4.3.2: Representations of Point Groups

### Symmetry Operations: Matrix Representations

A symmetry operation, such as a rotation around a symmetry axis or a reflection through a plane, is an operation that, when performed on an object, results in a new orientation of the object that is indistinguishable from the original. For example, if we rotate a square in the plane by π/2 or π, the new orientation of the square is superimposable on the original one (Figure 4.3.2.1).

If rotation by an angle θ of a molecule (or object) about some axis results in an orientation of the molecule (or object) that is superimposable on the original, the axis is called a rotation axis. The molecule (or object) is said to have an n-fold rotational axis, where n is 2π/θ. The axis is denoted as Cn. The square of Figure 4.3.2.1 has a C4 axis perpendicular to the plane because a 90° rotation leaves the figure indistinguishable from the initial orientation. This axis is also a C2 axis because a 180° degree rotation leaves the square indistinguishable from the original square. In addition, the figure has several other C2 axis that lie on the same plane as the square:

Figure 4.3.2.1: Symmetry operations performed on a square

A symmetry operation moves all the points of the object from one initial position to a final position, and that means that symmetry operators are 3 × 3 square matrices (or 2 × 2 in two dimensions). Each symmetry operation can be expressed as a transformation matrix where the vector (x', y', z') represents the new coordinates of the point (x, y, z) after the symmetry operation.

[New Coordinates(x', y', z')] = [Transformation Matrix] × [Old Coordinates(x, y, z)]

We will use the example of water, which is in the C_2v point group, to illustrate how transformation matrices can be used to represent the symmetry of a group.

Figure 4.3.2.2 shows the three symmetry elements of the molecule of water (H2O). This molecule has only one rotation axis, which is 2-fold, and therefore we call it a “C2 axis.” It also has two mirror planes, one that contains the two hydrogen atoms (σ_yz), and another one perpendicular to it (σ_xz). Both planes contain the C2 axis.

Figure 4.3.2.2: The symmetry elements of the molecule of water

#### Transformation Matrix of C2 rotation

A 2-fold rotation around the z−axis changes the location of a point (x, y, z) to (−x, −y, z) (see Figure 4.3.2.3). By convention, rotations are always taken in the counterclockwise direction.

Figure 4.3.2.3: A 2-fold rotation around the z-axis

What is the matrix that represents the C2 rotation? The matrix transforms the vector (x, y, z) into (−x, −y, z), so

C2(x, y, z) = (−x, −y, z)

(a11, a12, a13; a21, a22, a23; a31, a32, a33)(x; y; z) = (−x; −y; z)

We know the matrix is a 3 × 3 square matrix because it needs to multiply a 3-dimensional vector. In addition, we write the vector as a vertical column to satisfy the requirements of matrix multiplication.

(a11, a12, a13; a21, a22, a23; a31, a32, a33)(x; y; z)

a11x + a12y + a13 z = −x

a21x + a22y + a23 z = −y

a31x + a32y + a33 z = z

and we conclude that a11 = −1, a12 = a13 = 0, a22 = −1, a21 = a23 = 0 and a33 = 1, a31 = a32 = 0. The transformation matrix of the C2 operation of the C_2v point group is:

C2 = (−1, 0, 0; 0, −1, 0; 0, 0, 1)

#### Transformation Matrix of σ_xz reflection

Rotations are not the only symmetry operations we can perform on a molecule. Figure 4.3.2.4 illustrates the reflection of a point through the xz plane. This operation transforms the vector (x, y, z) into the vector (x, −y, z). Symmetry operators involving reflections through a plane are usually denoted with the letter σ, so the operator that reflects a point through the xz plane is σ̂_xz:

σ_xz(x, y, z) = (x, −y, z)

Figure 4.3.2.3: A reflection through the xz plane

Following the same logic we used for the rotation matrix, we can write the σ_xz transformation matrix as:

σ_(x, z) = (1, 0, 0; 0, −1, 0; 0, 0, 1)

This is true because

(1, 0, 0; 0, −1, 0; 0, 0, 1)(x; y; z) = (x; −y; z)

#### Exercise 4.3.2.1

Find the transformation matrix of the identity (E) and the σ_(y, z) operations under the C_2v point group.

**Answer**

The transformation matrix for E is (1, 0, 0; 0, 1, 0; 0, 0, 1).

The transformation matrix for σ_v(yz)" is (−1, 0, 0; 0, 1, 0; 0, 0, 1).

### Characters

For a square matrix, the character is the trace of the matrix. For the C2 operation, with the transformation matrix

(−1, 0, 0; 0, −1, 0; 0, 0, 1),

the trace is (−1) + (−1) + 1 = −1.

The set of characters for a point group is called a reducible representation (Γ). The reducible representation for the C_2v point group is:



| C_2v | E | C2 | σv | σv' |
| --- | --- | --- | --- | --- |
| Γ | 3 | −1 | 1 | 1 |



#### Exercise 4.3.2.1

Prove that the characters in the reducible representation for C_2v are correct:



| C_2v | E | C2 | σv | σv' |
| --- | --- | --- | --- | --- |
| Γ | 3 | −1 | 1 | 1 |



**Answer**

For the E operation, with the transformation matrix (1, 0, 0; 0, 1, 0; 0, 0, 1), the trace is 1 + 1 + 1 = 3.

For the C2^z operation, with the transformation matrix (−1, 0, 0; 0, −1, 0; 0, 0, 1), the trace is (−1) + (−1) + 1 = −1.

For the σ_v(xz)' operation, with the transformation matrix (1, 0, 0; 0, −1, 0; 0, 0, 1), the trace is 1 + (−1) + 1 = 1.

For the σ_v(yz)" operation, with the transformation matrix (−1, 0, 0; 0, 1, 0; 0, 0, 1), the trace is −1 + 1 + 1 = 1.

This gives the reducible representation

| C_2v | E | C2 | σv | σv' |
| --- | --- | --- | --- | --- |
| Γ | 3 | −1 | 1 | 1 |



### Reducible and Irreducible Representations

Let us now go back and look in more detail at the transformation matrices of the C_2v point group that we derived above. If we look at the matrices carefully we see that they all take the same block diagonal form (a square matrix is said to be block diagonal if all the elements are zero except for a set of submatrices lying along the diagonal).

E = ([1], 0, 0; 0, [1], 0; 0, 0, [1]), C2 = ([−1], 0, 0; 0, [−1], 0; 0, 0, [1]), σ_v(xz)' = ([1], 0, 0; 0, [−1], 0; 0, 0, [1]), σ_v(yz)" = ([−1], 0, 0; 0, [1], 0; 0, 0, [1])

All the non-zero elements become 1x1 matrices that each represent individual x, y, z coordinates. In other words, the element a11 represents x, a22 represents y, and a33 represents z. The matrix elements for x from each transformation matrix combine to form an irreducible representation of the C_2v point group. Likewise, the matrix elements for y combine to form a second irreducible representation, and the same is true for z elements. These irreducible representations are shown below:



| C_2v | E | C2 | σv | σv' | Coordinate Used |
| --- | --- | --- | --- | --- | --- |
| | 1 | −1 | 1 | −1 | x |
| | 1 | −1 | −1 | 1 | y |
| | 1 | 1 | 1 | 1 | z |
| Γ | 3 | −1 | 1 | 1 | |



The irreducible representations add to form the reducible representation, Γ. This Γ, which is the set of 3x3 matrices, can be reduced to the set of 1x1 matrices of the irreducible representations. The irreducible representations cannot be reduced further, hence their name.

### Sources & Attribution

- Parts of this page was adapted from Matrices (click here) (Symmetry Operators), contributed by Marcia Levitus, Associate Professor (Biodesign Institute) at Arizona State University.
- Parts of this page were adapted from Reductions of Representations, contributed by

   Claire Vallance (University of Oxford)

- Curated or created by Kathryn Haas

## 4.3.3: Character Tables

### Introduction to Character Tables, using C_2v as example

A character table is the complete set of irreducible representations of a symmetry group. In the previous section, we derived three of the four irreducible representations for the C_2v point group. These three irreducible representations are labeled A1, B1, and B2. The fourth irreducible representation, A2, can be derived using the properties (or "rules") for irreducible representations listed below.

#### Properties of Characters of Irreducible Representations in Point Groups

1. There is always a totally symmetric representation in which all the characters are 1. e.g. In C_2v, A1 is totally symmetric.
2. The order of the group (h) is the total number of symmetry operations in the group. e.g. In C_2v, h = 4
3. Similar operations are listed as classes (R) and appear as columns in the table. e.g. In C_2v, there are four classes of operations, E, C2, σ_v(xz), and σ_v(yz)'
4. The number of irreducible representations (rows) must equal the number of classes (columns). This results in all character tables being square. e.g. In C_2v, there are four classes and four irreducible representations.
5. The sum of squares of all characters under E is equal to the order of the group: h = Σ[χi]^2 e.g. In C_2v, h = 1^2 + 1^2 + 1^2 + 1^2 = 4
6. For any irreducible representation (i), the sum of squares of its characters multiplied by the number of operations in the class is the order of the group: h = Σ[χi(R)]^2 e.g. For A2 in C_2v, h = (1 × 1)^2 + (1 × 1)^2 + (−1 × 1)^2 + (−1 × 1)^2 = 4
7. Irreducible representations are orthogonal. For any two representations (i and j): Σ[χi*(R)χj(R)] = 0 e.g. For B1 and B2 of C_2v, [1 × 1] + [−1 × −1] + [1 × −1] + [−1 × 1] = 0

[Note: in item 6 the class size multiplies the square, h = Σ g(R)[χi(R)]^2, where g(R) is the number of operations in class R; the example's form (χ × n)^2 only works in C_2v, where every class has one operation. For E of C_3v: 1 × 2^2 + 2 × (−1)^2 + 3 × 0^2 = 6. The list is left as printed.]

The complete character table for C_2v is given below.



| C_2v | E | C2 | σv | σv' | h = 4 | |
| --- | --- | --- | --- | --- | --- | --- |
| A1 | 1 | 1 | 1 | 1 | z | x^2, y^2, z^2 |
| A2 | 1 | 1 | −1 | −1 | Rz | xy |
| B1 | 1 | −1 | 1 | −1 | x, Ry | xz |
| B2 | 1 | −1 | −1 | 1 | y, Rx | yz |



The various sections of the table are as follows:

- The first element in the table gives the name of the point group, usually in Schoenflies (C_2v) notation.
- Along the first row are the symmetry operations of the group, E, C2, σv and σv", followed by the order of the group, h.
- In the first column are the irreducible representations of the group, represented by Mulliken Labels. In C_2v the irreducible representations are A1, A2, B1 and B2. The Mulliken labels indicate the symmetry of each representation (explained further below).
- The characters (χ) of the irreducible representations under each symmetry operation are given in the bulk of the table.
- The final column(s) of the table lists a number of functions that transform as the various irreducible representations of the group. These are the Cartesian axes (x, y, z), the Cartesian products (z^2, x^2 + y^2, xy, xz, yz), and the rotations (Rx, Ry, Rz) (explained further below).

### Another example: C_3v

Th C_3v point group has three classes of operations: E, C3, and σ_v(xz). The derivation of transformation matrices for E and σ_v(xz) is similar to the case for C_2v. However, the C3 operation does not give simple 1 or -1 characters. If we carry out a rotation about z by an angle θ, our x and y axes are transformed onto new axes x' and y'. The new axes can each be written as a linear combination of our original x and y axes. The derivation of the rotation matrices will not be covered in this text, but is described elsewhere:

[Note: corrected; the source prints "the C_3v operation does not give" where this reads "the C3 operation does not give". The operation meant is the C3 rotation; C_3v is the point group.]

x' = x cos θ + y sin θ

y' = −x sin θ + y cos θ

For a C3 rotation counterclockwise through 120° (or (2π)/3):

x' = x cos(2π/3) + y sin(2π/3) = −(1/2)x − ((√3)/2)y

[Note: since sin(2π/3) = +√3/2, the middle expressions here and in the line below don't equal the results given (they would give −1/2x + (√3)/2y and −(√3)/2x − 1/2y). The results and the C3 matrix below are right for a rotation by +120°, which follows from x' = x cosθ − y sinθ and y' = x sinθ + y cosθ; the general formulas above have their signs reversed. The character of C3, −1, is not affected. The equations are left as printed.]

y' = −x sin(2π/3) + y cos(2π/3) = ((√3)/2)x − (1/2)y

The transformation matrices for symmetry operations of C_3v are as follows:

E = (1, 0, 0; 0, 1, 0; 0, 0, 1) C3 = ([−1/2, −(√3)/2], 0; [(√3)/2, −1/2], 0; 0, 0, 1) σ_v(xz)' = (1, 0, 0; 0, −1, 0; 0, 0, 1)

The C3 transformation matrix contains off-diagonal entries, and therefore it cannot be block diagonalized as 1x1 matrices. However, the first two lines can be diagonalized as a 2x2 and the last line as a 1x1 matrix (Figure 4.3.3.1):

Figure 4.3.3.1: The C3 transformation matrix contains off-diagonal entries, and therefore it cannot be block diagonalized as 1x1 matrices. However, the first two lines can be diagonalized as a 2x2 and the last line as a 1x1 matrix. (CC-BY-NC-SA; Kathryn Haas)

The character from a 2x2 matrix is the sum of the trace of that matrix. So, for the C3 operation, the 2x2 matrix gives the character -1 (from −1/2 + −1/2).

The character table for C_3v is shown below.



| C_3v | E | 2C3 | 3σv | h = 6 |
| --- | --- | --- | --- | --- |
| A1 | 1 | 1 | 1 | z, z^2, x^2 + y^2 |
| A2 | 1 | 1 | −1 | Rz |
| E | 2 | −1 | 0 | (x, y), (x^2 − y^2, xy), (xz, yz), (Rx, Ry) |

[Note: corrected; the source prints "(xy, x^2 + y^2)" where this reads "(x^2 − y^2, xy)". In C_3v the E representation's quadratic functions are (x^2 − y^2, xy) and (xz, yz); x^2 + y^2 belongs to A1, where the table also lists it.]



### Additional features of character tables

#### Additional Features of Character Tables

1. Symmetry operations of the same class are grouped into the same column (class) in the character table and not listed separately. e.g. In the C_3v point group, there are six operations: E, C3, C3^2, σv, σv', and σv''. The C3 and C3^2 operations are listed together in the character table as 2C3.
2. IF there are multiple C2 axes (in a D group), the C2 axes that are perpendicular to the principle axis are labeled with primes (e.g. C2' and C2''); when there are multiple types of perpendicular C2 axes, one prime (C2') means that it passes through more atoms, while a double prime (C2'') means it goes between atoms.
3. Mirror planes that are perpendicular to the principle axis are "horizontal" mirror planes and are designated with an h subscript (σh). Mirror planes that are in-plane with the principle axis are "vertical" mirror planes, σv. When there are two types of vertical mirror planes, those that run through more atoms are σv while those that run between atoms are "dihedral", σd.
4. Matching the symmetry operations listed in the character table to the symmetry operations of a molecule can confirm its point group.
5. Irreducible representations are each assigned a Mulliken label, listed in the left-hand column, that indicates the symmetry of that representation as follows:

[Note: corrected; the source prints "there are four operations: E, C3, C3^2, and σv." where this reads "there are six operations: E, C3, C3^2, σv, σv', and σv''.". C_3v has six operations (h = 6, as the table above gives): E, two C3 rotations and three σv planes.]

| Mulliken Labels | meaning |
| --- | --- |
| A | singly degenerate (1x1), symmetric to principle axis |
| B | singly degenerate (1x1), antisymmetric to principle axis |
| E | doubly degenerate (2x2) |
| T | triply degenerate (3x3) |
| Subscripts and superscripts | meaning |
| 1 | symmetric to σv or perpendicular to C2 |
| 2 | anti-symmetric to σv or perpendicular to C2 |
| g | symmetric to inversion center |
| u | anti-symmetric to inversion center |
| ' | symmetric to σh |
| " | anti-symmetric to σh |



6. The right-hand columns of the character table list a number of functions that transform as the various irreducible representations of the group. These are the Cartesian axes (x, y, z), the Cartesian products (z^2, x^2 + y^2, xy, xz, yz), and the rotations (Rx, Ry, Rz). These expressions indicate the properties of orbitals within the symmetry group. The s-orbital, which is totally symmetric, corresponds to the irreducible representation that possesses symmetry of x^2, y^2 and z^2 combined. The p-orbitals each possess the symmetry of the corresponding axis (e.g. px corresponds to the x axis). Each of the d-orbitals possess the symmetry of the corresponding binary product (e.g. d_xy corresponds to the binary product, xy, in the character table).

The functions listed in the final column of the table are important in many chemical applications of group theory, particularly in spectroscopy. For example, by looking at the transformation properties of x, y and z (sometimes given in character tables as Tx, Ty, Tz) we can discover the symmetry of translations along the x, y, and z axes. Similarly, Rx, Ry and Rz represent rotations about the three Cartesian axes. The transformation properties of x, y, and z can be used to determine whether or not a molecule is IR-active or whether or not it can absorb a photon of x-, y-, or z-polarized light and undergo a spectroscopic transition. The Cartesian products play a similar role in determining selection rules for Raman transitions, which involve two photons.

A visual summary of the sections and their significance is given in Figure 4.3.3.2. Character tables for common point groups are given in the References section of LibreTexts Bookshelves.

Figure 4.3.3.2: Visual summary of the sections of a character table and their meaning. (CC-BY-NC-SA; Kathryn Haas)

### Contributors and Attributions

- Curated or created by Kathryn Haas
- Claire Vallance (University of Oxford)

   adapted from Character Tables (click here)
