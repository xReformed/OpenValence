---
title: "7.2: Linear Variational Method and the Secular Determinant"
book: "Physical Chemistry (LibreTexts)"
chapter: "7: Approximation Methods"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/07%3A_Approximation_Methods/7.02%3A_Linear_Variational_Method_and_the_Secular_Determinant"
author: "Vallancec"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Understand how the variational method can be expanded to include trial wavefunctions that are a linear combination of functions with coefficients that are the parameters to be varied.
- To be able to construct secular equations to solve the minimization procedure intrinsic to the variational method approach.
- To map the secular equations into the secular determinant
- To understand how the Linear Combination of Atomic Orbital (LCAO) approximation is a specific application of the linear variational method.

A special type of variation widely used in the study of molecules is the so-called linear variation function, where the trial wavefunction is a linear combination of N linearly independent functions (often atomic orbitals) that not the eigenvalues of the Hamiltonian (since they are not known). For example

|ψ_trial⟩ = Σ_(j=1)^N aj|φj⟩

and

⟨ψ_trial| = Σ_(j=1)^N aj^*⟨φj|

In these cases, one says that a 'linear variational' calculation is being performed.

### Linear Variational Basis Functions

The set of functions {φj} are called the 'linear variational' basis functions and are nothing more than members of a set of functions that are convenient to deal with. However, they are typically not arbitrary and are usually selected to address specific properties of the system:

- to obey all of the boundary conditions that the exact state |ψ_trial⟩ obeys,
- to be functions of the the same coordinates as |ψ_trial⟩,
- to be of the same symmetry as |ψ_trial⟩, and
- to be convenient to evaluate Hamiltonian terms elements ⟨φi|H|φj⟩.

Beyond these conditions, nothing other than effort can limit the selection and number of such basis functions in the expansions in Equations (Ex1) and (Ex2).

As discussed in Section 7.1, the variational energy for a generalized trial wavefunction is

E_trial = (⟨ψ_trial|Ĥ|ψ_trial⟩)/(⟨ψ_trial|ψ_trial⟩)

Substituting Equations (Ex1) and (Ex2) into Equation (7.1.8) involves addressing the numerator and denominator individually. For the numerator, the integral can be expanded thusly:

⟨ψ_trial|H|ψ_trial⟩ = Σi^N Σj^N ai^*aj⟨φi|H|φj⟩.

= Σ_(i, j)^(N, N)ai^*aj⟨φi|H|φj⟩.

We can rewrite the following integral in Equation (MatrixElement) as a function of the basis elements (not the trial wavefunction) as

H_ij = ⟨φi|H|φj⟩

So the numerator of the right side of Equation (7.1.8) becomes

⟨ψ_trial|H|ψ_trial⟩ = Σ_(i, j)^(N, N)ai^*aj H_ij

Similarly, the denominator of the right side of Equation (7.1.8) can be expanded

⟨ψ_trial|ψ_trial⟩ = Σ_(i, j)^(N, N)ai^*aj⟨φi|φj⟩

We often simplify the integrals on the right side of Equation (overlap) as

S_ij = ⟨φi|φj⟩

where S_ij are overlap integrals between the different {φj} basis functions. Equation (overlap) is thus expressed as

⟨ψ_trial|ψ_trial⟩ = Σ_(i, j)^(N, N)ai^*aj S_ij

### Orthonormality of Basis Functions

There is no explicit rule that the {φj} functions have to be orthogonal or normalized functions, although they often are selected that way for convenience. Therefore, a priori, S_ij does not have to be δ_ij.

Substituting Equations (numerator) and (denominator) into the variational energy formula (Equation (7.1.8)) results in

E_trial = (Σ_(i, j)^(N, N)ai^*aj H_ij)/(Σ_(i, j)^(N, N)ai^*aj S_ij)

For such a trial wavefunction as Equation (Ex1), the variational energy depends quadratically on the 'linear variational' aj coefficients. These coefficients can be varied just like the parameters in the trial functions of Section 7.1 to find the optimized trial wavefunction (|ψ_trial⟩) that approximates the true wavefunction (|ψ⟩) that we cannot analytically solve for.

## Minimizing the Variational Energy

The expression for variational energy (Equation (Var)) can be rearranged

E_trial Σ_(i, j)^(N, N)ai^*aj S_ij = Σ_(i, j)^(N, N)ai^*aj H_ij

The optimum coefficients are found by searching for minima in the variational energy landscape spanned by varying the {ai} coefficients (Figure 7.2.1 ).

Figure 7.2.1: Linear Variational Principle in action. Two (or more) wavefunctions are mixed by linear combination. The coefficients a1, a2 determine the weight each of them is given. The optimum coefficients are found by searching for minima in the potential landscape spanned by a1 and a2. (CC BY-SA-NC; Rudolf Winter; Aberystwyth University).
Graph showing a downward trend with a red line, pointing to a minimum labeled "optimum coefficients" in blue.

We want to minimize the energy with respect to the linear coefficients {ai}, which requires that

(∂E_trial)/(∂ai) = 0

for all i.

Differentiating both sides of Equation (7.2.9) for the k^th coefficient gives,

((∂E_trial)/(∂ak))Σ_(i, j)^(N, N)ai^*aj S_ij + E_trial Σi Σj[((∂ai^*)/(∂ak))aj + ((∂aj)/(∂ak))ai^*]S_ij = Σ_(i, j)^(N, N)[((∂ai^*)/(∂ak))aj + ((∂aj)/(∂ak))ai^*]H_ij

Since the coefficients are independent

(∂ai^*)/(∂ak) = δ_ik

and

S_ij = S_ji

and also since the Hamiltonian is a Hermitian Operator (see below)

H_ij = H_ji

then Equation (7.2.10) simplifies to

((∂E_trial)/(∂ak))Σi Σj ai^*aj S_ij + 2E_trial Σi ai S_ik = 2Σi ai H_ik

At the minimum variational energy, when

(∂E_trial)/(∂ak) = 0

then Equation (7.2.11) gives

Σi^N ai(H_ik–E_trial S_ik) = 0

for all k. The equations in (7.2.12) are called the Secular Equations.

### Hermitian Operators

Hermitian operators are operators that satisfy the general formula

⟨φi|Â|φj⟩ = ⟨φj|Â|φi⟩^*

[Note: corrected; the source prints "⟨φi|Â|φj⟩ = ⟨φj|Â|φi⟩" where this reads "⟨φi|Â|φj⟩ = ⟨φj|Â|φi⟩^*". The complex conjugate is part of the Hermitian condition, as A_ij = A_ji^* below says.]

If that condition is met, then Â is a Hermitian operator. For any operator that generates a real eigenvalue (e.g., observables), then that operator is Hermitian. The Hamiltonian Ĥ meets the condition of a Hermitian operator. Equation (Herm1) can be rewriten as

[Note: it is the other way round: a Hermitian operator has real eigenvalues, and observables are represented by Hermitian operators; an operator with real eigenvalues need not be Hermitian. The text is left as printed.]

A_ij = A_ji^*

where

A_ij = ⟨φi|Â|φj⟩

and

A_ji = ⟨φj|Â|φi⟩

Therefore, when applied to the Hamiltonian operator

H_ij^* = H_ji.

If the functions {|φj⟩} are orthonormal, then the overlap matrix S reduces to the unit matrix (one on the diagonal and zero every where else) and the Secular Equations in Equation (7.2.12) reduces to the more familiar Eigenvalue form:

Σj^N H_ij aj = E_trial ai.

[Note: corrected; the source prints "Σi^N H_ij aj" where this reads "Σj^N H_ij aj". The sum runs over j, the index of the coefficients aj.]

Hence, the secular equation, in either form, have as many eigenvalues Ei and eigenvectors {C_ij} as the dimension of the H_ij matrix as the functions in |ψ_trail⟩ (Example (Ex1)). It can also be shown that between successive pairs of the eigenvalues obtained by solving the secular problem at least one exact eigenvalue must occur (i.e.,E_(i+1) > E_exact > Ei, for all i). This observation is referred to as 'the bracketing theorem'.

[Note: this interlacing does not hold in general. What holds is that each approximate eigenvalue lies at or above the corresponding exact one (the Hylleraas–Undheim–MacDonald theorem), and that the approximate eigenvalues interlace when one basis function is added. The text is left as printed.]

Figure 7.2.2: Simplified algorithmic flowchart of the linear Variational Method approximation. Compared to the similar algorithmic flowchart for the "normal" Variational Method approximation.
Flowchart outlining steps from "Good" to "Best" practices in data analysis and interpretation.

[Note: the line above is the image's alt text, which reads as machine-written and misreads the image, a flowchart of the linear variational method: define the Hamiltonian and a trial function, evaluate the energy, solve the secular equations, construct the wavefunction, and compare with known data.]

Variational methods, in particular the linear variational method, are the most widely used approximation techniques in quantum chemistry. To implement such a method one needs to know the Hamiltonian H whose energy levels are sought and one needs to construct a trial wavefunction in which some 'flexibility' exists (e.g., as in the linear variational method where the aj coefficients can be varied). This tool will be used to develop several of the most commonly used and powerful molecular orbital methods in chemistry.

## The Secular Determinant

From the secular equations with an orthonormal functions (Equation (seceq2)), we have k simultaneous secular equations in k unknowns. These equations can also be written in matrix notation, and for a non-trivial solution (i.e. not all ai = 0), the determinant of the secular matrix must be equal to zero.

[Note: corrected; the source prints "(i.e. ci ≠ 0 for all i)" where this reads "(i.e. not all ai = 0)". A non-trivial solution needs only some coefficients to be non-zero.]

|H_ik–ES_ik| = 0

### Properties of Determinants

- The determinant is a real number, it is not a matrix.
- The determinant can be a negative number.
- It is not associated with absolute value at all except that they both use vertical lines.
- The determinant only exists for square matrices (2 × 2, 3 × 3, ..., n × n). The determinant of a 1 × 1 matrix is that single value in the determinant.
- The inverse of a matrix will exist only if the determinant is not zero.

### Expanding Determinants

The determinant can be evaluated using an expansion method involving minors and cofactors. Before we can use them, we need to define them. It is the product of the elements on the main diagonal minus the product of the elements off the main diagonal. In the case of a 2 × 2 matrix, the specific formula for the determinant is

|A| = |a, b; c, d| = ad − bc.

Similarly, suppose we have a 3 × 3 matrix A, and we want the specific formula for its determinant |A|:

|A| = |a, b, c; d, e, f; g, h, i| = a |e, f; h, i|−b |d, f; g, i| + c |d, e; g, h|

= aei + bfg + cdh − ceg − bdi − afh.

To solve Equation (7.2.13), the determinate should be expanded and then set to zero. That generates a polynomial (called a characteristic equation) that can be directly solved with linear algebra methods or numerically.

### Example 7.2.1 : A Simple Two Component Basis Set

If |ψ_trial⟩ is a linear combination of two functions. In math terms,

|ψ_trial⟩ = Σ_(n=1)^(N = 2)an|fn⟩ = a1|φ1⟩ + a2|φ2⟩

then the secular determinant (Equation (7.2.13)), in matrix formulation would look like this

|H11 − E_trial S11, H12 − E_trial S12; H12 − E_trial S12, H22 − E_trial S22| = 0

**Solution**

Solving the secular equations is done by finding E_trial and putting the value into the expansion of the secular determinant

a1^2 H11 + 2a1a2H12 + a2^2 H22 = 0

[Note: this is the numerator of the variational energy set to zero, not the secular determinant: expanded, the determinant gives (H11 − ES11)(H22 − ES22) − (H12 − ES12)^2 = 0, which is solved for E. The text is left as printed.]

and

a1(H12 − E_trial S12) + a2(H22 − E_trial S22) = 0

<!-- end of example -->

Equation (7.2.13) can be solved to obtain the energies E. When arranged in order of increasing energy, these provide approximations to the energies of the first k states (each having an energy higher than the true energy of the state by virtue of the variation theorem). To find the energies of a larger number of states we simply use a greater number of basis functions {φi} in the trial wavefunction (Example (Ex1)). To obtain the approximate wavefunction for a particular state, we substitute the appropriate energy into the secular equations and solve for the coefficients ai.

Using this method it is possible to find all the coefficients a1…ak in terms of one coefficient; normalizing the wavefunction provides the absolute values for the coefficients.

### Example 7.2.2 : Linear Combination of Atomic Orbitals (LCAO) Approximation

Trial wavefunctions that consist of linear combinations of simple functions

|ψ(r)⟩ = Σi ai|φi(r)⟩

form the basis of the Linear Combination of Atomic Orbitals (LCAO) method introduced by Lennard-Jones and others to compute the energies and wavefunctions of atoms and molecules. The functions {|φi⟩} are selected so that matrix elements can be evaluated analytically. Two basis sets of atomic orbitals functions can be used: Slater type and Gaussian type:

[Note: corrected; the source prints "introduced by Lennard and Jones and others" where this reads "introduced by Lennard-Jones and others". Sir John Lennard-Jones, one person (1929).]

Slater orbitals using Hydrogen-like wavefunctions

|φi⟩ = Yl^m(θ, φ)e^(−αr)

and Gaussian orbitals of the form

|φi⟩ = Yl^m(θ, φ)e^(−αr^2)

are the most widely used forms, where Yl^m(θ, φ) are the spherical harmonics that represent the angular part of the atomic orbitals. Gaussian orbitals form the basis of many quantum chemistry computer codes.

<!-- end of example -->

Because Slater orbitals give exact results for Hydrogen, we will use Gaussian orbitals to test the LCAO method on Hydrogen, following S.F. Boys, Proc. Roy. Soc. A 200, 542 (1950) and R. Ditchfield, W.J. Hehre and J.A. Pople, J. Chem. Phys. 52, 5001 (1970) with the basis set. Because products of Gaussians are also Gaussian, the required matrix elements are easily computed. The linear variational method is used extensively in molecular orbitals of molecules and further examples will be postponed until that discussion in Chapters 9.

[Note: corrected; the source prints "W.R. Ditchfield, W.J. Hehre and J.A. Pople, J. Chem. Phys. Rev. 52" where this reads "R. Ditchfield, W.J. Hehre and J.A. Pople, J. Chem. Phys. 52". The authors are R. Ditchfield, W.J. Hehre and J.A. Pople, in J. Chem. Phys. 52, 5001 (1970).]
