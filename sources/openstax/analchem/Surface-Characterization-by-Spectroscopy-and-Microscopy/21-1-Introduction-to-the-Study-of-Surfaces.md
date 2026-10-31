---
title: "21.1: Introduction to the Study of Surfaces"
book: "Instrumental Analysis (LibreTexts)"
chapter: "21: Surface Characterization by Spectroscopy and Microscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/21%3A_Surface_Characterization_by_Spectroscopy_and_Microscopy/21.01%3A_Introduction_to_the_Study_of_Surfaces"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

Thus far we have considered methods for analyzing the bulk properties of samples, such as determining the identity or concentration of an ion in a solution, of a molecule in a gas, or of several elements in a solid. In doing so, we did not concern ourselves with the sample's homogeneity or heterogeneity. In this chapter we give consideration to how we can gather information about the composition of a sample's surface and how it differs from the sample's bulk composition. But first, let's consider several important questions.

## What Is A Surface?

A surface is a boundary, or interface, between two phases, such as a solid and a gas (the type of interface of particular interest to us in this chapter). This is a helpful, but not a sufficient description. Also of interest is the question of depth. Is a surface just the outermost layer of atoms, ions, or molecules, or does it extend several layers into the sample? In what ways might the composition of a sample at the surface differ from its composition in the sample's bulk interior? And, what about variations in composition across a surface? Is the surface itself homogeneous or heterogeneous in its composition? Different analytical methods will sample the surface to different depths and with different surface areas, which means the volume of sample analyzed will vary from method-to-method. For this reason, we usually define a sample's surface as what is analyzed by the analytical method we are using.

## Why Are Surfaces of interest?

Figure 21.1.1 shows the crystal structure of AgCl(s), which consists of a repeating pattern of Ag^+ ions and Cl^– ions. If you look at the ions in interior of the structure, you will see that each Ag^+ ion is surrounded by six Cl^– ions, and each Cl^– ion is surrounded by six Ag^+ ions. On the surface, however, we see that Cl^– ions and Ag^+ ions no longer are surrounded by six ions of opposite charge. As a result, the Ag^+ ions and Cl^– ions on the surface are more chemically reactive than those in the interior and can serve as sites for interesting chemistry. The chemical and physical properties of a sample's surface are likely to be very different than the sample's bulk properties.

Figure 21.1.1: Ball-and-stick model showing the lattice structure of AgCl. Each silver ion in the lattice’s interior binds with six chloride ions and each chloride ion in the interior binds with six silver ions. Those ions on the lattice’s surface or edges bind to fewer than six ions and carry a partial charge. A silver ion on the surface, for example, carries a partial positive charge. These charges, for example, make the surface of a precipitate of AgCl an active site for chemical and physical interactions.
Ball-and-stick model showing the lattice structure of AgCl. Each silver ion in the lattice’s interior binds with six chloride ions and each chloride ion in the interior binds with six silver ions. Those ions on the lattice’s surface or edges bind to fewer than six ions and carry a partial charge. A silver ion on the surface, for example, carries a partial positive charge. These charges, for example, make the surface of a precipitate of AgCl an active site for chemical and physical interactions.

## What Challenges Does a Surface Present?

Suppose we are interested in studying the surface of a piece of zinc metal using a probe that samples just the outermost layer of atoms and that samples a circular surface area that is 1 µm^2. How many atoms of Zn might we expect our probe to encounter? Here is some useful information about zinc: it has a molar mass of 65.38 g/mol, it has a density of 7.14 g/cm^3, and it has an atomic radius of approximately 0.13 nm. From this we calculate the atoms per unit volume as

(7.14 g)/(cm^3) × (100 cm)/(m) × (1m)/(10^9 nm) × (1 mol)/(65.38 g) × (6.022 × 10^23 atoms)/(mol) = (6.6 × 10^15 atoms)/(cm^2 nm)

The units in the denominator may look odd to you, but writing them this way emphasizes that we are interested both in the depth from which information is received (given here in nanometers, nm) and in the surface area from which information is received (given here in square centimeters, cm^2). Multiplying this value by the thickness of an atomic layer of zinc, which is twice its atomic radius, suggests we are analyzing approximately

(6.6 × 10^15 atoms)/(cm^2 nm) × 0.26 nm = 1.7 × 10^15(atoms)/(cm^2)

If we multiply this value by the surface area that we are sampling from, then we are interacting with approximately

1.7 × 10^15(atoms)/(cm^2) × ((100 cm)/(m))^2 × ((1m)/(10^6 µm))^2 = 1.7 × 10^7 atoms of Zn

[Note: corrected; the source prints "((100 cm^2)/(m))^2" where this reads "((100 cm)/(m))^2". The conversion factor is 100 cm per m, squared to convert cm^2 to m^2; squaring "100 cm^2/m" would leave cm^2 in the result.]

Although 17 million may seem like a large number, it is not a particularly large number of atoms on which to carry out an analysis. Now, suppose the surface has a 10 ppm impurity of copper atoms; that is, there are 10 copper atoms for every 10^6 zinc atoms. In this case, our probe of the sample involves just

1.7 × 10^7 atoms of Zn × (10 atoms of Cu)/(10^6 atoms of Zn) = 170 atoms of Cu

As a comparison, if we analyze a sample in which the analyte is present at a concentration that is 1 × 10^−6 mol/L using an analytical method that gathers information from a volume that is just 1 mm^3, then we are sampling

(1 × 10^−6 mol)/(L) × (1L)/(1000 cm^3) × ((1cm)/(10 mm))^3 × 1 mm^3 × 6.022 × 10^23 mol^−1 = 6.0 × 10^11 particles of analyte

An additional challenge when we attempt to analyze a surface is that a freshly exposed surface becomes contaminated with an adsorbed layer of gas molecules almost instantly when sitting on a laboratory bench, and in a few seconds to a few minutes at pressures in the range of 10^–6 torr to 10^–8 torr. Analysis of a surface requires careful attention to how the surface is prepared.

[Note: corrected; the source prints "an absorbed layer" where this reads "an adsorbed layer". Gas molecules that collect on a surface are adsorbed, not absorbed into the bulk.]

## What Opportunities Does a Surface Present?

Compared to many of the methods in Chapters 6–20 and in Chapters 22–34, the use of a probe that samples from a small area allows for moving the probe across the surface—this is called rastering—developing a two-dimensional image of the surface. When using an energetic beam that can etch a hole in the sample, we can obtain information at depth—a process called depth profiling—that provides information in a third dimension. These are particularly important strengths of surface analytical methods.

[Note: corrected; the source prints "depth profilling" where this reads "depth profiling". A misspelling.]

## How Can We Probe the Surface?

To study a surface, we put energy into it in the form of a beam of photons, electrons, or ions and then we measure the energy that exits the surface in the form of a beam of photons, electrons, or ions. Table 21.1.1 shows some of the possibilities. Also included in this table are methods in which an applied field generates a response from the surface. Entries in bold receive attention in this chapter. Surface enhanced Raman spectroscopy received a brief mention in Chapter 18. Note that Auger electron spectroscopy appears twice as the emission of electrons can follow the input of X-ray photons or electrons.

Table 21.1.1. Classifying surface analysis methods based on the input energy and the output energy.

| energy out →; energy in ↓ | photon | electron | ion | field |
| --- | --- | --- | --- | --- |
| photon | surface enhanced Raman spectroscopy (SERS); extended X-ray absorption fine structure (EXAFS) | X-ray photoelectron spectroscopy (XPS); Auger electron spectroscopy (AES); UV-photoelectron spectroscopy (UPS) | laser-microprobe mass spectrometry (LAMMA) | — |
| electron | energy dispersive X-ray spectroscopy (EDS); electron microprobe (EM) | Auger electron spectroscopy (AES); scanning electron microscopy (SEM); low energy electron diffraction (LEED) | — | — |
| ion | — | — | Rutherford back scattering (RBS); secondary ion mass spectrometry (SIMS) |  |
| field | — | scanning tunneling microscopy (STM) | — | atomic force microscopy (AFM) |

### Note

There are other ways to probe a surface by putting energy into it, including the application of thermal energy and the use of neutral species. See the text Methods of Surface Analysis, Czanderna, A. Editor, Elsevier: Amsterdam (1975) and the article "Analytical Chemistry of Surfaces" by D. M. Hercules and S. H. Hercules, J. Chem. Educ. 1984, 61, 402–409 for detailed reviews. Although neither is a recent publication, both provide an excellent introduction to surface analysis.
