---
title: "14.2: Absorbing Species"
book: "Instrumental Analysis (LibreTexts)"
chapter: "14: Applications of Ultraviolet/Visible Molecular Absorption Spectrometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/14%3A_Applications_of_Ultraviolet_Visible_Molecular_Absorption_Spectrometry/14.02%3A_Absorbing_Species"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

There are two general requirements for an analyte’s absorption of electromagnetic radiation. First, there must be a mechanism by which the radiation’s electric field or magnetic field can interact with the analyte. For ultraviolet and visible radiation, absorption of a photon changes the energy of the analyte’s valence electrons. The second requirement is that the photon’s energy, hν, must exactly equal the difference in energy, ΔE, between two of the analyte’s quantized energy states. We can use the energy level diagram in Figure 14.2.1 to explain an absorbance spectrum. The lines labeled E0 and E1 represent the analyte’s ground (lowest) electronic state and its first electronic excited state. Superimposed on each electronic energy level is a series of lines representing vibrational energy levels.

Figure 14.2.1: Diagram showing two electronic energy levels (E0 and E1), each with five vibrational energy levels ν_(0−4). Absorption of ultraviolet and visible radiation (shown by the blue arrows) leads to a change in the analyte’s electronic energy levels and, possibly, a change in vibrational energy as well. A change in vibrational energy without a change in electronic energy levels occurs with the absorption of infrared radiation (shown by the red arrows).
Diagram showing two electronic energy levels, each with five vibrational energy levels.

## UV/Vis Spectra for Molecules and Ions

The valence electrons in organic molecules and polyatomic ions, such as CO3^2−, occupy quantized sigma bonding (σ), pi bonding (π), and non-bonding (n) molecular orbitals (MOs). Unoccupied sigma antibonding (σ^*) and pi antibonding (π^*) molecular orbitals are slightly higher in energy. Because the difference in energy between the highest-energy occupied molecular orbitals (HOMO) and the lowest-energy unoccupied molecular orbitals (LUMO) corresponds to ultraviolet and visible radiation, absorption of a photon is possible.

Four types of transitions between quantized energy levels account for most molecular UV/Vis spectra. Table 14.2.1 lists the approximate wavelength ranges for these transitions, as well as a partial list of bonds, functional groups, or molecules responsible for these transitions. Of these transitions, the most important are n → π^* and π → π^* because they involve important functional groups that are characteristic of many analytes and because the wavelengths are easily accessible. The bonds and functional groups that give rise to the absorption of ultraviolet and visible radiation are called chromophores.

Table 14.2.1. Electronic Transitions Involving n, σ, and π Molecular Orbitals

| transition | wavelength range | examples |
| --- | --- | --- |
| σ → σ^* | <200 nm | C—C, C—H |
| n → σ^* | 160–260 nm | H2O, CH3OH, CH3Cl |
| π → π^* | 200–500 nm | C=C, C=O, C=N, C≡C |
| n → π^* | 250–600 nm | C=O, C=N, N=N, N=O |

Many transition metal ions, such as Cu^2+ and Co^2+, form colorful solutions because the metal ion absorbs visible light. The transitions that give rise to this absorption are valence electrons in the metal ion’s d-orbitals, which are shown in Figure 14.2.2. For a free metal ion, the five d-orbitals are of equal energy.

Figure 14.2.2: Models showing the 3d orbitals: (A) dz^2; (B) d_xz; (C) d_yz; (D) d_xy; and (E) dx^2–y^2. The first and last of these orbitals have electron density aligned along the x-, y-, and z-axes.
Models showing the 3d orbitals.

In the presence of a complexing ligand or solvent molecule, however, the d-orbitals split into two or more groups that differ in energy. For example, in an octahedral complex of Cu(H2O)6^2+ the six water molecules, which are aligned with the metal rods in Figure 14.2.2, perturb the d-orbitals into the two groups shown in Figure 14.2.3. The magnitude of the splitting of the d-orbitals is called the octahedral field strength, Δ_oct.

Figure 14.2.3: Splitting of the d-orbitals in an octahedral field. The energy gap, hν, is called Δ_oct.
Splitting of the d-orbitals in an octahedral field.

Although the magnitude of the resulting d → d transitions for transition metal ions are relatively weak, solutions of the metal-ligand complexes show distinct colors that depend on the metal ion and the ligand, which affect the magnitude of Δ_oct. Figure 14.2.4 shows the variation in color for a series of seven octahedral complexes of Co^3+. The spectra for three of these complexes are shown in Figure 14.2.5, which we can use to estimate the relative size of Δ_oct. Each of the spectra shows two absorption bands, one near 400 nm and one at a somewhat longer wavelength: a shoulder at about 470 nm for phenanthroline, a peak at about 550 nm for glycine, and a peak at about 620 nm for oxalate. Because Δ_oct is inversely proportional to wavelength, the relative magnitude of Δ_oct decreases from Co(phen)3^3+ to Co(glycine)3^3+ to Co(oxalate)3^3–. In Figure 14.2.4, the octahedral field strengths of the ligands decrease from Co(NO2)6^3– to Co(CO3)3^3–.

[Note: corrected; the source prints "one near 400 nm and one a somewhat" where this reads "one near 400 nm and one at a somewhat"; the source prints "Δ_oct increases from Co(phen)3^3+" where this reads "Δ_oct decreases from Co(phen)3^3+". The source drops the word "at"; and since Δ_oct is inversely proportional to wavelength, the bands moving from 470 nm to 550 nm to 620 nm mean Δ_oct decreases, as the ordering of the ligands in Figure 14.2.4 also shows.]

Figure 14.2.4: Metal-ligand complexes of Co^3+ with nitrite, phenanthroline, ethylenediamine, glycine, water, oxalate, and carbonate. The ligands are arranged from largest octahedral field strength on the left to the smallest on the right.
Metal-ligand complexes of Co3+ with nitrite, phenanthroline, ethylenediamine, glycine, water, oxalate, and carbonate.

Figure 14.2.5: Visible spectra for the metal-ligand complexes of Co^3+ with phenanthroline, glycine, and oxalate. See Figure 14.2.4 to see the solution colors.
Visible spectra for the metal-ligand complexes of Co3+ with phenanthroline, glycine, and oxalate.

A more important source of UV/Vis absorption for inorganic metal–ligand complexes is charge transfer, in which absorption of a photon produces an excited state in which there is transfer of an electron from the metal, M, to the ligand, L.

M − L + hν → (M^+−L^−)^*

Charge-transfer absorption is important because it produces very large absorbances. One important example of a charge-transfer complex is that of o-phenanthroline with Fe^2+, the UV/Vis spectrum for which is shown in Figure 14.2.6. Charge-transfer absorption in which an electron moves from the ligand to the metal also is possible.

[Note: corrected; the source prints "is shown in Figure 14.2.7." where this reads "is shown in Figure 14.2.6.". The spectrum of Fe(phen)3^2+ is Figure 14.2.6, the last figure in the section; there is no Figure 14.2.7.]

Figure 14.2.6: UV/Vis spectrum for the metal–ligand complex Fe(phen)3^2+, where phen is the ligand o-phenanthroline.
