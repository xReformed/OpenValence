---
title: "9.3: The Overlap Integral"
book: "Physical Chemistry (LibreTexts)"
chapter: "9: Chemical Bonding in Diatomic Molecules"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09%3A_Chemical_Bonding_in_Diatomic_Molecules/9.03%3A_The_Overlap_Integral"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

For H2^+, the simplest molecule, we must determine the values for the coefficients, CA and CB for the LCAO approximation for the molecular orbital as a linear combination of the two atomic orbitals

|ψ(r)⟩ = CA 1sA(r) + CB 1sB(r)

We could use the linear variational method to find a value for these coefficients, but for the case of H2^+ evaluating these coefficients is easy. Since the two protons are identical, the probability that the electron is near A must equal the probability that the electron is near B. These probabilities are given by |CA|^2 and |CB|^2, respectively. Consider two possibilities that satisfy the condition

|CA|^2 = |CB|^2

so CA = CB = C_(+) and CA = −CB = C_(−). These two cases produce two molecular orbitals:

(|ψ_(+)⟩ = C_(+)(1sA + 1sB)) (bonding molecular orbital)

and

(|ψ_(−)⟩ = C_(−)(1sA − 1sB)) (antibonding molecular orbital)

The probability density for finding the electron at any point in space is given by |ψ^2| and the electronic charge density is just |eψ^2|. The important difference between ψ_(+) and ψ_(−) is that the charge density for |ψ_(+)⟩ is enhanced between the two protons, whereas it is diminished for |ψ_(−)⟩ as shown in Figure 9.2.2 . ψ_(−) has a node in the middle while |ψ_(+)⟩ corresponds to our intuitive sense of what a chemical bond must be like. The electronic charge density is enhanced in the region between the two protons. So |ψ_(+)⟩ is called a bonding molecular orbital. If the electron were described by |ψ_(−)⟩, the low charge density between the two protons would not balance the Coulomb repulsion of the protons, so |ψ_(−)⟩ is called an antibonding molecular orbital.

[Note: corrected; the source prints "as shown in Figures 9.3.1 ." where this reads "as shown in Figure 9.2.2 .". ψ+ and ψ− are drawn in Figure 9.2.2; Figure 9.3.1 shows only the overlap of two 1s orbitals.]

Now we want to evaluate C_(+) and C_(−) and then calculate the energy. The bonding and antibonding character of ψ_(+) and ψ_(−) also should be reflected in the energy. If |ψ_(+)⟩ indeed describes a bonding orbital, then the energy of this state should be less than that of a proton and hydrogen atom that are separated. The calculation of the energy will tell us whether this simple theory predicts H2^+ to be stable or not and also how much energy is required to dissociate this molecule.

The constants C_(+) and C_(−) are evaluated from the standard normalization condition:

∫ψ_±^*ψ_± dτ = ⟨ψ_±|ψ_±⟩ = 1

⟨C_±(1 sA±1sB)|C_±(1 sA±1sB)⟩ = 1

|C_±|^2[⟨1sA|1sA⟩ (1) + ⟨1sB|1sB⟩ (1)±⟨1sB|1sA⟩ (S)±⟨1sA|1sB⟩ (S^*)] = 1

Since the atomic orbitals are normalized, the first two integrals are just 1. The last two integrals are called overlap integrals and are symbolized by S and S^*, respectively, since one is the complex conjugate of the other.

The overlap integrals are telling us to take the value of 1s_B at a point multiply by the value of 1s_A at that point and sum (integrate) such a product over all of space (Figure 9.3.1 ). If the functions do not overlap, i.e. if one is zero when the other one is not and vice versa, these integrals then will be zero. It also is possible in general for such integrals to be zero even if the functions overlap because of the cancelation of positive and negative contributions.

Figure 9.3.1: The wavefunctions of atomic orbitals decrease exponentially with distance. Orbital overlap is non-zero when two atoms are close together, as illustrated for 1s orbitals in the upper figure. The lower figure shows orbitals that are too far away to interact. In this case both S is close to zero.
Graph illustrating wave functions with distinct regions; top shows non-zero and bottom shows zero everywhere points.

If the overlap integral is zero, for whatever reason, the functions are said to be orthogonal. Notice that the overlap integral ranges from 0 to 1 as the separation between the protons varies from R = ∞ to R = 0. Clearly when the protons are infinite distance apart, there is no overlap, and when R = 0 both functions are centered on one nucleus and ⟨1sA|1sB⟩ becomes identical to ⟨1sA|1sA⟩, which is normalized to 1, because 1sA = 1sB.

[Note: corrected; the source prints "becomes identical to ⟨1sB|1sA⟩" where this reads "becomes identical to ⟨1sA|1sA⟩". ⟨1sA|1sB⟩ and ⟨1sB|1sA⟩ are always equal for real functions; at R = 0 the overlap becomes the normalization integral ⟨1sA|1sA⟩ = 1.]

With these considerations and using the fact that 1s wavefunctions are real so

⟨1sA|1sB⟩ = ⟨1sB|1sA⟩ = S

Equation (9.3.3) becomes

|C_±|^2(2±2S) = 1

The solution to Equation (9.3.5) is given by

C_± = 1/(√(2(1±S)))

Hence, the normalized molecular orbitals in Equations (9.3.1a) and (9.3.1a) are

|ψ_(+)⟩ = (1/(√(2(1 + S))))(1sA + 1sB)

and

|ψ_(−)⟩ = (1/(√(2(1 − S))))(1sA − 1sB)

The energies associated with these wavefunctions requires a bit more effort to calculate though as demonstrated in the following section.

For the overlap integral of two 1s orbitals from the hydrogen dimer discussed above is difficult to evaluate analytically and is explained here. The final answer is:

S(R) = ⟨1sA|1sB⟩

= e^(−R/ao)(1 + R/(ao) + R^2/(3 ao^2))

The overlap integral for two 1s atomic orbitals of hydrogen is graphically displayed below

Figure 9.3.2: The overlap integral at different proton separations.
Graph displaying a decay curve with labeled peaks and corresponding distributions below, showing the overlap integral S(R) falling from 1 at R = 0 toward 0, with the product of the two 1s orbitals at several separations below.

[Note: corrected; the source prints "illustrating statistical properties" where this reads "showing the overlap integral S(R) falling from 1 at R = 0 toward 0, with the product of the two 1s orbitals at several separations below". The image's alt text, machine-written, misreads the image; this describes it.]

### Example 9.3.1

Calculate the difference in the electronic charge density (C/pm^3) at a point halfway between the two nuclei for H2^+ for an electron in the bonding molecular orbital compared to one in the antibonding molecular orbital.

**Solution**

The electronic charge density is calculated with the formula |eψ^2| where e = 1.602 × 10^−19 C

a: Bonding Molecular Orbital

First, squaring the bonding molecular orbital (Equation (9.3.7a)) gives us:

ψ_(+)^2 = (1/(2(1 + S)))(1sA + 1sB)^2

= 1/(2(1 + S)) · (1/(πa0^3))(e^(−rA/a0) + e^(−rB/a0))^2

where the prefactor C_(+)^2/(πa0^3) = 1/(2(1 + S)) · 1/(πa0^3)

[Note: corrected; the source prints "= 1/(2(1 + S)) · 1/(πa0^3)" where this reads "where the prefactor C_(+)^2/(πa0^3) = 1/(2(1 + S)) · 1/(πa0^3)". The line above already has ψ_(+)^2; this one is its prefactor, without the factor (e^(−rA/a0) + e^(−rB/a0))^2, as the value 6.7672 × 10^−7 pm^−3 below is. C_(+) = 0.561 is for R = 2a0 (106 pm), where S = 0.586.]

= (0.561)^2 × (1/(π × (52.9 pm)^3)) = 6.7672 × 10^−7 pm^−3

(Note: The value of C^2 is obtained from equation 9.3.12 and the value of S is from Equation (overlap))

To find the density at halfway between A and B for the bonding orbital evalulate at 1/2 R,

rA = (1/2)R and rB = (1/2)R

ψ_(+)^2 = 3.7 × 10^−7 pm^−3

Now multiply this answer by e to generate the electronic charge density,

P = (3.7 × 10^−7 pm^−3) × (1.602 × 10^−19) C = 5.93 × 10^−26 C/pm^3

b: Antibonding Molecular Orbital

To find the halfway between A and B for the anti-bonding orbital at rA = (1/2)R and rB = (1/2)R. However, simple inspection of Equation (9.3.7b) or Figure 9.2.2 shows this will be zero.

[Note: corrected; the source prints "or Figure 9.3.1 shows" where this reads "or Figure 9.2.2 shows". The node of ψ− is shown in Figure 9.2.2.]

eψ_(−)^2 = 0

Obviously, when multiplied by e, the answer is still zero. This makes logical sense as there would be no charge density between the two atoms as there lies a node with no probability of finding an electron.

### Exercise 9.3.1

Show that for two arbitrary functions ⟨φB|φA⟩ is the complex conjugate of ⟨φA|φB⟩ and that these two integrals are equal if the functions are real.

## Contributors and Attributions

- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("Quantum States of Atoms and Molecules")
