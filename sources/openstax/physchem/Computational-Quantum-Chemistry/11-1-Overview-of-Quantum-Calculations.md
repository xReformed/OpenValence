---
title: "11.1: Overview of Quantum Calculations"
book: "Physical Chemistry (LibreTexts)"
chapter: "11: Computational Quantum Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/11%3A_Computational_Quantum_Chemistry/11.01%3A_Overview_of_Quantum_Calculations"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

## Multielectron Electronic Wavefunctions

We could symbolically write an approximate two-particle wavefunction as ψ(r1, r2). This could be, for example, a two-electron wavefunction for helium. To exchange the two particles, we simply substitute the coordinates of particle 1 (r1) for the coordinates of particle 2 (r2) and vice versa, to get the new wavefunction ψ(r2, r1). This new wavefunction must have the property that

[Note: corrected; the source prints "particle 1 (rl)" where this reads "particle 1 (r1)"; the source prints "to get the new wavefunction ψ(r1, r2)" where this reads "to get the new wavefunction ψ(r2, r1)". The coordinates are r1 and r2, and exchanging them gives ψ(r2, r1).]

|ψ(r1, r2)|^2 = ψ(r2, r1)^*ψ(r2, r1) = ψ(r1, r2)^*ψ(r1, r2)

Equation (9-38) will be true only if the wavefunctions before and after permutation are related by a factor of e^(iφ),

ψ(r2, r1) = e^(iφ)ψ(r1, r2)

[Note: corrected; the source prints "ψ(r1, r2) = e^(iφ)ψ(r1, r2)" where this reads "ψ(r2, r1) = e^(iφ)ψ(r1, r2)". The exchanged wavefunction is ψ(r2, r1), as in the equations below.]

so that

(e^(−iφ)ψ(r1, r2)^*)(e^(iφ)ψ(r1, r2)) = ψ(r1, r2)^*ψ(r1, r2)

[Note: corrected; the source prints "(e^(−iφ)ψ(r1, r2)^*)(e^(iφ)ψ(r1, r2)^*)" where this reads "(e^(−iφ)ψ(r1, r2)^*)(e^(iφ)ψ(r1, r2))". The probability density is ψ^*ψ: only the first factor is the complex conjugate.]

If we exchange or permute two identical particles twice, we are (by definition) back to the original situation. If each permutation changes the wavefunction by e^(iφ), the double permutation must change the wavefunction by e^(iφ)e^(iφ). Since we then are back to the original state, the effect of the double permutation must equal 1; i.e.,

e^(iφ)e^(iφ) = e^(i2φ) = 1

which is true only if φ = 0 or an integer multiple of π. The requirement that a double permutation reproduce the original situation limits the acceptable values for e^(iφ) to either +1 (when φ = 0) or -1 (when φ = π). Both possibilities are found in nature, but the behavior of elections is that the wavefunction be antisymmetric with respect to permutation (e^(iφ) = −1). A wavefunction that is antisymmetric with respect to electron interchange is one whose output changes sign when the electron coordinates are interchanged, as shown below.

ψ(r2, r1) = e^(iφ)ψ(r1, r2) = −ψ(r1, r2)

Blindly following the first statement of the Pauli Exclusion Principle, that each electron in a multi-electron atom must be described by a different spin-orbital, we try constructing a simple product wavefunction for helium using two different spin-orbitals. Both have the 1s spatial component, but one has spin function α and the other has spin function β so the product wavefunction matches the form of the ground state electron configuration for He, 1s^2.

ψ(r1, r2) = φ_1sα(r1)φ_1sβ(r2)

After permutation of the electrons, this becomes

ψ(r2, r1) = φ_1sα(r2)φ_1sβ(r1)

which is different from the starting function since φ_1sα and φ_1sβ are different spin-orbital functions. However, an antisymmetric function must produce the same function multiplied by (–1) after permutation, and that is not the case here. We must try something else.

To avoid getting a totally different function when we permute the electrons, we can make a linear combination of functions. A very simple way of taking a linear combination involves making a new function by simply adding or subtracting functions. The function that is created by subtracting the right-hand side of Equation (8.6.2) from the right-hand side of Equation (8.6.1) has the desired antisymmetric behavior. The constant on the right-hand side accounts for the fact that the total wavefunction must be normalized.

ψ(r1, r2) = (1/(√2))[φ_1sα(r1)φ_1sβ(r2) − φ_1sα(r2)φ_1sβ(r1)] A linear combination that describes an appropriately antisymmetrized multi-electron wavefunction for any desired orbital configuration is easy to construct for a two-electron system. However, interesting chemical systems usually contain more than two electrons. For these multi-electron systems a relatively simple scheme for constructing an antisymmetric wavefunction from a product of one-electron functions is to write the wavefunction in the form of a determinant. John Slater introduced this idea so the determinant is called a Slater determinant.

The Slater determinant for the two-electron wavefunction for the ground state H2 system (with the two electrons occupying the σ_1s molecular orbital)

ψ(r1, r2) = 1/(√2)|σ_1s(1)α(1), σ_1s(1)β(1); σ_1s(2)α(2), σ_1s(2)β(2)|

We can introduce a shorthand notation for the arbitrary spin-orbital

χ_iα(r) = φi α

or

χ_iβ(r) = φi β

as determined by the ms quantum number. A shorthand notation for the determinant above is then

[Note: corrected; the source prints "for the determinant in Equation 8.6.4 is then" where this reads "for the determinant above is then". The determinant meant is the H2 Slater determinant above; Equation 8.6.4 is not on this page.]

ψ(r1, r2) = 2^(−1/2)Det|χ_1sα(r1)αχ_1sβ(r2)β|

The determinant is written so the electron coordinate changes in going from one row to the next, and the spin orbital changes in going from one column to the next. The advantage of having this recipe is clear if you try to construct an antisymmetric wavefunction that describes the orbital configuration for uranium! Note that the normalization constant is

(N!)^(−1/2)

for a system of N electrons.

The generalized Slater determinant for a multe-electrom atom with N electrons is then

ψ(r1, r2, …, rN) = 1/(√(N!))|(χ1(r1)α, χ1(r1)β, …, χ_(N/2)(r1)β; χ1(r2)α, χ1(r2)β, …, χ_(N/2)(r2)β; ⋮, ⋮, ⋱, ⋮; χ1(rN)α, χ1(rN)β, …, χ_(N/2)(rN)β)|

[Note: corrected; the source prints "χ1(r1)β, …, χ_(N/2)(r1)β; χ1(r2)α, χ2(r2)β" where this reads "χ1(r1)β, …, χ_(N/2)(r1)β; χ1(r2)α, χ1(r2)β"; the source prints "χ1(rN)α, χ2(rN)β" where this reads "χ1(rN)α, χ1(rN)β". Each column holds one spin orbital: the second column is χ1β, as in the first row.]

In a modern ab initio electronic structure calculation on a closed shell molecule, the electronic Hamiltonian is used with a single determinant wavefunction. This wavefunction, Ψ, is constructed from molecular orbitals, ψ that are written as linear combinations of contracted Gaussian basis functions, φ

ψj = Σk c_jk φk

[Note: corrected; the source prints "φj = Σk c_jk ψk" where this reads "ψj = Σk c_jk φk". The molecular orbitals ψ are combinations of the basis functions φ, as the text above says (and 11.2: ψi = Σj c_ij φj).]

The contracted Gaussian functions are composed from primitive Gaussian functions to match Slater-type orbitals. The exponential parameters in the STOs are optimized by calculations on small molecules using the nonlinear variational method and then those values are used with other molecules. The problem is to calculate the electronic energy from

E = (∫Ψ^*ĤΨdτ)/(∫Ψ^*Ψdτ)

or in bra-ket notation

E = (⟨Ψ|Ĥ|Ψ⟩)/(⟨Ψ|Ψ⟩)

[Note: corrected; the source prints "/(⟨ψ|ψ⟩)" where this reads "/(⟨Ψ|Ψ⟩)". The normalization is of the many-electron Ψ, as in the numerator.]

The the optimum coefficients c_jk for each molecular orbital in Equation (10.69) by using the Self Consistent Field Method and the Linear Variational Method to minimize the energy as was described previously for atoms.

The variational principle says an approximate energy is an upper bound to the exact energy, so the lowest energy that we calculate is the most accurate. At some point, the improvements in the energy will be very slight. This limiting energy is the lowest that can be obtained with a single determinant wavefunction (e.g., Equation (slater)). This limit is called the Hartree-Fock limit, the energy is the Hartree-Fock energy, the molecular orbitals producing this limit are called Hartree-Fock orbitals, and the determinant is the Hartree-Fock wavefunction.

### Hartree-Fock Calculations

You may encounter the terms restricted and unrestricted Hartree-Fock. The above discussion pertains to a restricted HF calculation. In a restricted HF calculation, electrons with α spin are restricted or constrained to occupy the same spatial orbitals as electrons with β spin. This constraint is removed in an unrestricted calculation. For example, the spin orbital for electron 1 could be ψA(r1)α(1), and the spin orbital for electron 2 in a molecule could be ψB(r2)β(2), where both the spatial molecular orbital and the spin function differ for the two electrons. Such spin orbitals are called unrestricted. If both electrons are constrained to have the same spatial orbital, e.g. ψA(r1)α(1) and ψA(r2)β(2), then the spin orbital is said to be restricted. While unrestricted spin orbitals can provide a better description of the electrons, twice as many spatial orbitals are needed, so the demands of the calculation are much higher. Using unrestricted orbitals is particular beneficial when a molecule contains an odd number of electrons because there are more electrons in one spin state than in the other.

### Example 11.1.1 : Carbon Monoxide

It is well known that carbon monoxide is a poison that acts by binding to the iron in hemoglobin and preventing oxygen from binding. As a result, oxygen is not transported by the blood to cells. Which end of carbon monoxide, carbon or oxygen, do you think binds to iron by donating electrons? We all know that oxygen is more electron-rich than carbon (8 vs 6 electrons) and more electronegative. A reasonable answer to this question therefore is oxygen, but experimentally it is carbon that binds to iron.

A quantum mechanical calculation done by Winifred M. Huo, published in J. Chem. Phys. 43, 624 (1965), provides an explanation for this counter-intuitive result. The basis set used in the calculation consisted of 10 functions: the 1s, 2s, 2p_x, 2p_y, and 2p_z atomic orbitals of C and O. Ten molecular orbitals (mo’s) were defined as linear combinations of the ten atomic orbitals (Equation (10.69). The ground state wavefunction Ψ is written as the Slater Determinant of the seven lowest energy molecular orbitals ψk. Equation (10.70) gives the energy of the ground state, where the denominator accounts for the normalization requirement. The coefficients C_kj in the linear combination are determined by the variational method to minimize the energy. The solution of this problem gives the following equations for the molecular orbitals. Only the largest terms have been retained here. These functions are listed and discussed in order of increasing energy.

[Note: corrected; the source prints "the ls, 2s, 2p_x" where this reads "the 1s, 2s, 2p_x"; the source prints "the Slater Determinant of the five lowest energy molecular orbitals" where this reads "the Slater Determinant of the seven lowest energy molecular orbitals". CO has 14 electrons in seven doubly occupied orbitals, 1σ, 2σ, 3σ, 4σ, the two 1π and 5σ, the seven listed below.]

- 1σ ≈ 0.94 (1s_O). The 1 says this is the first σ orbital. The σ says it is symmetric with respect to reflection in the plane of the molecule. The large coefficient, 0.94, means this is essentially the 1s atomic orbital of oxygen. The oxygen 1s orbital should have a lower energy than that of carbon because the positive charge on the oxygen nucleus is greater.
- 2σ ≈ 0.92 (1s_C). This orbital is essentially the 1s atomic orbital of carbon. Both the 1σ and 2σ are “nonbonding” orbitals since they are localized on a particular atom and do not directly determine the charge density between atoms.
- 3σ ≈ [0.72 (2s_O) + 0.18 (2p_zO)] + [0.28 (2s_C) + 0.16 (2p_zC)]. This orbital is a “bonding” molecular orbital because the electrons are delocalized over C and O in a way that enhances the charge density between the atoms. The 3 means this is the third σ orbital. This orbital also illustrates the concept of hybridization. One can say the 2s and 2p orbitals on each atom are hybridized and the molecular orbital is formed from these hybrids although the calculation just obtains the linear combination of the four orbitals directly without the à priori introduction of hybridization. In other words, hybridization just falls out of the calculation. The hybridization in this bonding LCAO increases the amplitude of the function in the region of space between the two atoms and decreases it in the region of space outside of the bonding region of the atoms.
- 4σ ≈ [0.37 (2s_C) + 0.1 (2p_zC)] + [0.54 (2p_zO) − 0.43 (2s_O)]. This molecular orbital also can be thought of as being a hybrid formed from atomic orbitals. The hybridization of oxygen atomic orbitals, because of the negative coefficient with 2s_O, decreases the electron density between the nuclei and enhances electron density on the side of oxygen facing away from the carbon atom. If we follow how this function varies along the internuclear axis, we see that near carbon the function is positive whereas near oxygen it is negative or possibly small and positive. This change means there must be a node between the two nuclei or at the oxygen nucleus. Because of the node, the electron density between the two nuclei is low so the electrons in this orbital do not serve to shield the two positive nuclei from each other. This orbital therefore is called an “antibonding” molecular orbital and the electrons assigned to it are called antibonding electrons. This orbital is the antibonding partner to the 3σ orbital.
- 1π_x ≈ 0.32 (2p_xC) + 0.44 (2p_xO) and 1π_y ≈ 0.32 (2p_yC) + 0.44 (2p_yO). These two orbitals are degenerate and correspond to bonding orbitals made up from the p_x and p_y atomic orbitals from each atom. These orbitals are degenerate because the x and y directions are equivalent in this molecule. π tells us that these orbitals are antisymmetric with respect to reflection in a plane containing the nuclei.
- 5σ ≈ 0.38 (2s_C) − 0.38 (2p_zC) − 0.29 (2p_zO). This orbital is the sp hybrid of the carbon atomic orbitals. The negative coefficient for 2p_C puts the largest amplitude on the side of carbon away from oxygen. There is no node between the atoms. We conclude this is a nonbonding orbital with the nonbonding electrons on carbon. This is not a “bonding” orbital because the electron density between the nuclei is lowered by hybridization. It also is not an antibonding orbital because there is no node between the nuclei. When carbon monoxide binds to Fe in hemoglobin, the bond is made between the C and the Fe. This bond involves the donation of the 5σ nonbonding electrons on C to empty d orbitals on Fe. Thus molecular orbital theory allows us to understand why the C end of the molecule is involved in this electron donation when we might naively expect O to be more electron-rich and capable of donating electrons to iron.

[Note: corrected; the source prints "- 1s ≈ 0.941 so." where this reads "- 1σ ≈ 0.94 (1s_O)."; the source prints "- 2s ≈ 0.921sc." where this reads "- 2σ ≈ 0.92 (1s_C)."; the source prints "- 3s ≈ (0.722 so + 0.182p_zo) + (0.282sc + 0.162p_zc)." where this reads "- 3σ ≈ [0.72 (2s_O) + 0.18 (2p_zO)] + [0.28 (2s_C) + 0.16 (2p_zC)]."; the source prints "- 4s ≈ (0.372sc + 0.12p_zc) + (0.542p_zo − 0.432 s0)." where this reads "- 4σ ≈ [0.37 (2s_C) + 0.1 (2p_zC)] + [0.54 (2p_zO) − 0.43 (2s_O)]."; the source prints "- 1π ≈ 0.322p_xc + 0.442p_xoand2π ≈ 0.322p_yc + 0.442p_yo." where this reads "- 1π_x ≈ 0.32 (2p_xC) + 0.44 (2p_xO) and 1π_y ≈ 0.32 (2p_yC) + 0.44 (2p_yO)."; the source prints "- 5σ ≈ 0.382_sC − 0.382_pC − 0.292p_zO." where this reads "- 5σ ≈ 0.38 (2s_C) − 0.38 (2p_zC) − 0.29 (2p_zO).". The source's TeX runs each coefficient into its orbital ("0.94 1s_o" shows as 0.941so), labels the σ orbitals "1s" to "4s" (the text calls them the first to fourth σ orbitals), types 2s_{0} for 2s_O and 2_{sC}, 2_{pC} for 2s_C, 2p_zC, and calls the degenerate partner of 1π "2π" (2π is CO's empty π^* orbital).]
