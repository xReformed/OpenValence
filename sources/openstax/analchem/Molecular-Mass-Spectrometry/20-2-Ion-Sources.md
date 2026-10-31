---
title: "20.2: Ion Sources"
book: "Instrumental Analysis (LibreTexts)"
chapter: "20: Molecular Mass Spectrometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/20%3A_Molecular_Mass_Spectrometry/20.02%3A_Ion_Sources"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

Since a mass spectrum shows the relative abundance of ions with different mass-to-charge ratios, a mass spectrometer must include a way to generate ions. More specifically, it needs a method that generates the initial ion as it, once formed, will undergo fragmentation without additional help from the analyst (which does not mean the analyst cannot assist in that fragmentation; see discussion of tandem mass spectrometry in Section 20.4). In this section we consider several common ion sources. We can describe these sources using two characteristic properties: (a) the physical state of the species that is initially ionized (gas, liquid, or solid phase), and (b) whether ionization favors the formation of fragment ions or the formation of molecular ions (hard sources or soft sources).

## Electron Ionization Sources (gas phase/hard source)

The electron ionization (EI) source, also known as an electron impact source, uses a beam of energetic electrons to ionize the analyte. As shown in Figure 20.2.1, the sample is volatilized prior to entering the ion source as gas phase molecules, M(g). A heated tungsten filament is used to generate electrons, which are pulled toward a positively charged anode. This electron beam intersects with the gas phase molecules at 90° where ionization occurs

[Note: corrected; the source prints "As shown in 20.2.1" where this reads "As shown in Figure 20.2.1". The word "Figure" is missing from the cross-reference to the electron ionization source.]

M(g) + e^− → M^+•(g) + 2e^−

The molecular ions, M^+•(g), are then swept into the mass analyzer using a set of accelerating plates (not shown here).

Figure 20.2.1: Illustration of an electron ionization source. The sample is volatilized and brought into the ion source where it intersects with an electron beam, forming the molecular ion, M^+•, which is carried on into the mass analyzer.
Illustration of an electron ionization source.

The electron beam in Figure 20.2.1 has a lot of energy due to the significant potential difference between the cathode and the anode, which may be as much as 70 V. The kinetic energy of these electrons is equivalent to the product of the electron's charge in Coulombs, the applied potential in volts, and Avogadro's number

e × V × NA = 1.6 × 10^−19 × 70 × 6.022 × 10^23 = 6.7 × 10^6 J/mol

[Note: corrected; the source prints "10^−19 × 6.022 × 10^−23" where this reads "10^−19 × 70 × 6.022 × 10^23". The product needs the 70 V potential, and Avogadro's number is 6.022 × 10^23 per mole: 1.6 × 10^−19 C × 70 V × 6.022 × 10^23 mol^−1 = 6.7 × 10^6 J/mol.]

or 6,700 kJ/mol. This energy is much greater than typical bond energies, which range from approximately 150–600 kJ/mol for single bonds, from approximately 500–750 kJ/mol for double bonds, and from approximately 800–1100 kJ/mol for triple bonds. The significant difference between the energy of the electrons and bond energies explains why electron ionization spectra are rich in fragment ions, as we saw earlier in Section 20.1 for o-nitrophenol, m-nitrophenol, and p-nitrophenol. This extensive fragmentation is useful in determining an analyte's structure—which is an advantage of a hard ionization method—but at the possible cost of the loss of the molecular ion peak for some analytes. For example, Figure 20.2.2 shows the electron ionization mass spectrum from 1-decanol, C10H22O, which has a nominal mass of 158 daltons. The small peak at m/z = 157 is for the fragment ion C10H21O^+; the molecular ion is not observed in this spectrum.

Figure 20.2.2: Mass spectrum for 1-decanol, C10H22O, using electron ionization. The peak furthest to the right (m/z = 157 amu) is one atomic mass unit less than the expected peak for the molecular ion, which does not appear in the spectrum. The original data is available here.
Mass spectrum for 1-decanol using electron ionization. The peak furthest to the right (m/z = 157 amu) is one atomic mass unit less than the expected peak for the molecular ion, which does not appear in the spectrum.

## Chemical Ionization Sources (gas phase/soft source)

Electron ionization is a hard source because the electron beam's energy results in easy fragmentation. In chemical ionization, we introduced a reagent molecule, such as methane, into the electron ionization (CI) source so that it is present at level that is 1000 × to 10,000 × greater than the analyte. At this higher concentration, it is the reagent molecule that is ionized; for example, when using CH4 as the reagent gas, ions such as CH4^+ and CH3^+ form. These ions then react with additional methane molecules

CH4^+(g) + CH4(g) → CH5^+(g) + CH3(g)

CH3^+(g) + CH4(g) → C2H5^+(g) + H2(g)

to form CH5^+ and C2H5^+, species that are sufficiently reactive that they easily transfer a hydrogen to a molecule of the analyte, MH

CH5^+(g) + MH(g) → MH2^+(g) + CH4(g)

to give a molecular ion that we identify as [M + H]^+ and that has a mass that is one amu unit greater than that for M. Alternatively, they can easily remove a hydrogen from a molecule of the analyte, MH

C2H5^+(g) + MH(g) → M^+(g) + C2H6(g)

to give a molecular ion that we identify as [M – H]^+ and that has a mass that is one amu less than that for M. Because formation of the molecular ion occurs indirectly and less energetically, fragmentation is suppressed, leading to a mass spectrum with a molecular ion peak and with only a small number of other ions. Figure 20.2.3 shows the mass spectrum for 1-decanol when using chemical ionization with CH4 as the reagent gas.

[Note: corrected; the source prints "[M – H]^–" where this reads "[M – H]^+"; the source prints "Figure 20.2.2 shows the mass spectrum for 1-decanol when using chemical" where this reads "Figure 20.2.3 shows the mass spectrum for 1-decanol when using chemical". Hydride abstraction by C2H5^+ gives the cation M^+ shown in the reaction above (20.4 also calls it the [M – H]^+ peak), and the chemical ionization spectrum of 1-decanol is Figure 20.2.3; Figure 20.2.2 is its electron ionization spectrum.]

Figure 20.2.3: Mass spectrum for 1-decanol, C10H22O, using chemical ionization. The peak highlighted in red is the molecular ion, which has a m/z ratio of 158 − 1 = 157 amu. The original data is available here.
Mass spectrum for 1-decanol using chemical ionization. The peak highlighted in red is the molecular ion.

## Electrospray Ionization Sources (liquid phase/soft source)

Electron impact and chemical ionization are gas phase sources because the sample is volatilized before it enters the mass spectrometer's inlet. In electrospray ionization (ESI), the sample is a liquid and ions desorb from that matrix in the mass spectrometer's inlet system. The liquid sample is pulled into the spectrometer's inlet through a capillary needle, forming a mist of droplets. The application of a large potential across this inlet assures that the droplets carry positive charges. These charged droplets then enter a chamber where they undergo desolvation, which decreases the size of the droplet and increases their charge density (see Figure 20.2.4). As this charge density increases, the droplets eventually become unstable, for reasons that are not fully understood, and ionized gas-phase ions desorb from the droplets and enter into the mass analyzer.

Figure 20.2.4: Illustration showing the change in the size of droplets and the charge density of droplets during electrospray ionization.
Illustration showing the change in the size of droplets and the charge density of droplets during electrospray ionization.

A typical electrospray ionization mass spectrum for a small molecule is shown in Figure 20.2.5 for the compound (4-aminophenyl)arsonic acid. As we saw in Figure 20.2.3 for chemical ionization, a soft ionization source results in a limited amount of fragmentation and a strong peak for the molecular ion, which here includes a proton transfer to give the [M + H]^+ peak at a m/z of 218 amu.

Figure 20.2.5: Mass spectrum for (4-aminophenyl)arsonic acid obtained using electrospray ionization. The spectrum contains only two major peaks: the molecular ion at m/z = 218 amu and a fragment at m/z = 109 amu. The original data is available here.
Mass spectrum for (4-aminophenyl)arsonic acid obtained using electrospray ionization. The spectrum contains only two major peaks: the molecular ion at 218 amu and a fragment at 109amu

[Note: corrected; the source prints "contains only two majors peak: the molecular ion at m/z" where this reads "contains only two major peaks: the molecular ion at m/z"; the source prints "contains only two majors peak: the molecular ion at 218" where this reads "contains only two major peaks: the molecular ion at 218". A typo, in both the caption and the image description.]

Electrospray ionization is particularly useful for biological molecules, such as peptides and proteins, because the soft ionization ensures that molecular weight information is retained. Because these molecules are large, they readily pick up multiple protons, forming multiply charged ions of the general form [M + zH]^z+ where z is the number of protons added. Figure 20.2.6 shows a hypothetical spectrum for the molecule M and Table 20.2.1 provides the corresponding m/z values for the mass spectrum's peaks.

Figure 20.2.6: Simulated electrospray ionization mass spectrum for a molecule, M, that shows eight peaks with mass-to-charge ratios between 600 amu and 1200 amu. The subscripts in the symbols Mi serve to identify the peaks; they are not an indication of charge.
Simulated electrospray ionization mass spectrum for a molecule, M, that shows eight peaks with mass-to-charge ratios between 600 amu and 1200 amu.

Table 20.2.1. Mass-to-charge ratios for the peaks in Figure 20.2.6.

| peak | m/z |
| --- | --- |
| M1 | 1112 |
| M2 | 1001 |
| M3 | 910 |
| M4 | 834 |
| M5 | 770 |
| M6 | 715 |
| M7 | 668 |
| M8 | 626 |

[Note: corrected; the source prints "| M7 | 667 |" where this reads "| M7 | 668 |". The spectrum was simulated for m = 10,000 with Z = 15 for this peak, (10,000 + 15)/15 = 667.7, which rounds to 668; 668 is also the value behind the m of 10,005 in Table 20.2.3 (668 × 15 − 15), whereas 667 would give 9,990.]

If we take the mass-to-charge ratios for any two adjacent peaks, Mi and Mj, where the peak Mi has the greater value for m/z, and if we assume that Mj has one additional hydrogen atom, giving it a charge that is one unit higher, then

Zi = (Mj − 1)/(Mi − Mj)

where Zi is the charge on the ion Mi. Table 20.2.2 shows the calculated charges for the ions M1 to M7.

### Note

Here is a derivation for Equation (findz). Suppose the molecule of interest has a molecular weight of m. If the charge on the ion responsible for peak Mi is Z, then it must be the case that the peak's mass is equal to m + Z as it has Z extra hydrogens and it must be the case that its mass-to-charge ratio is

Mi = (m + Z)/Z

and its molecular weight, m, is

m = (Mi × Z) − Z

In the same way, the peak Mj has a charge of Z + 1 and

Mj = (m + Z + 1)/(Z + 1)

m = (Mj × Z) + Mj − Z − 1

Setting the two equations for m equal to each other and solving for Z gives

(Mi × Z) − Z = (Mj × Z) + Mj − Z − 1

(Mi × Z) = (Mj × Z) + Mj − 1

(Mi × Z) − (Mj × Z) = Mj − 1

Z = (Mj − 1)/(Mi − Mj)

Table 20.2.2. Calculated charges on the ions for peaks M1 to M7

| peak | m/z | Z |
| --- | --- | --- |
| M1 | 1112 | 9 |
| M2 | 1001 | 10 |
| M3 | 910 | 11 |
| M4 | 834 | 12 |
| M5 | 770 | 13 |
| M6 | 715 | 14 |
| M7 | 668 | 15 |
| M8 | 626 | — |

[Note: corrected; the source prints "| M7 | 667 | 15 |" where this reads "| M7 | 668 | 15 |". The spectrum was simulated for m = 10,000 with Z = 15 for this peak, (10,000 + 15)/15 = 667.7, which rounds to 668; 668 is also the value behind the m of 10,005 in Table 20.2.3 (668 × 15 − 15), whereas 667 would give 9,990.]

The molecular weight, m, is given by the equation

m = (Mi × Z) − Z

Table 20.2.3 shows the molecular weights for the ions M1 to M7 and their average value. The simulated mass spectrum was created by setting the molecular weight to 10,000 amu and with charges ranging from +9 to +16.

Table 20.2.3. Calculated molecular weights for the ions M1 to M7.

| peak | m/z | Z | m |
| --- | --- | --- | --- |
| M1 | 1112 | 9 | 9,999 |
| M2 | 1001 | 10 | 10,000 |
| M3 | 910 | 11 | 9,999 |
| M4 | 834 | 12 | 9,996 |
| M5 | 770 | 13 | 9,997 |
| M6 | 715 | 14 | 9,996 |
| M7 | 668 | 15 | 10,005 |
| M8 | 626 | — | — |
| average molecular weight |  |  | 9,999 |

[Note: corrected; the source prints "| M7 | 667 | 15 | 10,005 |" where this reads "| M7 | 668 | 15 | 10,005 |". The m of 10,005 and the average of 9,999 follow from m/z = 668 (668 × 15 − 15 = 10,005), the rounded value of (10,000 + 15)/15 = 667.7 for the simulated spectrum; with 667 the row would give 9,990 and the average 9,997.]

## Matrix-Assisted Laser Desorption/Ionization Sources (solid phase/soft source)

Matrix-assisted laser desorption ionization (MALDI) is a soft ionization source for obtaining the mass spectrum for biologically important molecules, such as proteins and peptides. Figure 20.2.7 illustrates the basic steps in obtaining a MALDI spectrum. The sample is first mixed with a small molecule—which is called the matrix—to form a solution; the matrix usually is present in a 10:1 ratio. A drop of this mixture is placed on a sample probe and allowed to dry, leaving the sample in a solid form. A pulsed laser beam (λ = 337 nm is typical) is focused on the solid sample–matrix mixture. The matrix absorbs the laser pulse and the absorption of the laser's energy volatilizes both the matrix and the sample. Ionization of the sample forms molecular ions, usually [M + H]^+ ions, which are then swept into the mass analyzer.

[Note: corrected; the source prints "(λ = 237 nm is typical)" where this reads "(λ = 337 nm is typical)". MALDI's typical laser is the pulsed nitrogen laser at 337 nm; no common laser line is at 237 nm.]

Figure 20.2.7: Illustration of matrix-assisted laser desorption ionization. The sample is dispersed in a liquid matrix and then allowed to dry. A pulsed laser beam is used to vaporize and ionize the sample.
Illustration of matrix-assisted laser desorption ionization. The sample is dispersed in a liquid matrix and then allowed to dry. A pulsed laser beam is used to vaporize and ionize the sample.

When the sample is a digestion of a protein, then it is a mixture of peptides, each of which appears as a [M + H]^+ peak in the resulting mass spectrum. For example, a peptide with the sequence AWSVAR (alanine–tryptophan–serine–valine–alanine–arginine) will appear as a peak with a mass of 689.8 daltons. To find this value we add together the molecular weights of the amino acids, account for the loss of a molecule of water for each peptide bond that forms, and then account for the hydrogen that gives the [M + H]^+ ion. In this case we have

[Note: corrected; the source prints "each of which appeara as" where this reads "each of which appears as". A typo.]

[M + H]^+ = 89.1 + 204.2 + 105.1 + 117.1 + 89.1 + 174.2 − (5 × 18.0) + 1 = 689.8 amu

where the term 5 × 18.0 accounts for the loss of five molecules of H2O when forming the five peptide bonds.

## Fast Atom Bombardment Sources (liquid phase/soft source)

Fast atom bombardment (FAB) bears some similarity to MALDI: the sample is mixed with a liquid matrix (often glycerol) and bombarded with a beam of xenon or argon atoms (instead of a laser). Desorption of the sample from its matrix forms gas phase ions that are swept into the mass analyzer. Spectra usually contain both a molecular ion and fragmentation patterns.
