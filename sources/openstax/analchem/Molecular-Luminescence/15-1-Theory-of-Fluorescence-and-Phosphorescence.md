---
title: "15.1: Theory of Fluorescence and Phosphorescence"
book: "Instrumental Analysis (LibreTexts)"
chapter: "15: Molecular Luminescence"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/15%3A_Molecular_Luminescence/15.01%3A_Theory_of_Fluorescence_and_Phosphorescence"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

The use of molecular fluorescence for qualitative analysis and for semi-quantitative analysis dates to the early to mid 1800s, with more accurate quantitative methods appearing in the 1920s. Instrumentation for fluorescence spectroscopy using a filter or a monochromator for wavelength selection appeared in, respectively, the 1930s and 1950s. Although the discovery of phosphorescence preceded that of fluorescence by almost 200 years, qualitative and quantitative applications of molecular phosphorescence did not receive much attention until after the development of fluorescence instrumentation.

## Source of Fluorescence and Phosphorescence

Photoluminescence is divided into two categories: fluorescence and phosphorescence. A pair of electrons that occupy the same electronic ground state have opposite spins and are in a singlet spin state (Figure 15.1.1a).

Figure 15.1.1: Electron configurations for (a) a singlet ground state; (b) a singlet excited state; and (c) a triplet excited state.
Electron configurations for a singlet ground state; a singlet excited state; and a triplet excited state.

[Note: corrected; the source prints "Figure 15.1.1a:" where this reads "Figure 15.1.1:". The caption covers the whole figure, whose parts (a), (b) and (c) the text cites as Figure 15.1.1a, 15.1.1b and 15.1.1c.]

When an analyte absorbs an ultraviolet or a visible photon, one of its valence electrons moves from the ground state to an excited state with a conservation of the electron’s spin (Figure 15.1.1b). Emission of a photon from a singlet excited state to the singlet ground state—or between any two energy levels with the same spin—is called fluorescence. The probability of fluorescence is very high and the average lifetime of an electron in the excited state is only 10^–5–10^–8 s. Fluorescence, therefore, rapidly decays once the source of excitation is removed.

In some cases an electron in a singlet excited state is transformed to a triplet excited state (Figure 15.1.1c) in which its spin is no longer paired with the ground state. Emission between a triplet excited state and a singlet ground state—or between any two energy levels that differ in their respective spin states–is called phosphorescence. Because the average lifetime for phosphorescence can be quite long—it ranges from 10^–4–10^4 seconds—phosphorescence may continue for some time after we remove the excitation source.

[Note: corrected; the source prints "its spin no is longer paired" where this reads "its spin is no longer paired". Two words are transposed.]

To appreciate the origin of fluorescence and phosphorescence we must consider what happens to a molecule following the absorption of a photon. Let’s assume the molecule initially occupies the lowest vibrational energy level of its electronic ground state, which is the singlet state labeled S0 in Figure 15.1.2. Absorption of a photon excites the molecule to one of several vibrational energy levels in the first excited electronic state, S1, or the second electronic excited state, S2, both of which are singlet states. Relaxation to the ground state occurs by a number of mechanisms, some of which result in the emission of a photon and others that occur without the emission of a photon. These relaxation mechanisms are shown in Figure 15.1.2. The most likely relaxation pathway from any excited state is the one with the shortest lifetime.

Figure 15.1.2: Energy level diagram for a molecule that shows pathways for the deactivation of an excited state: vr is vibrational relaxation; ic is internal conversion; ec is external conversion; and isc is an intersystem crossing. The lowest vibrational energy for each electronic state is indicated by the thicker line. The electronic ground state is shown in black and the three electronic excited states are shown in green. The absorption, fluorescence, and phosphorescence of photons also are shown.
Energy level diagram for a molecule that shows pathways for the deactivation of an excited state.

## Deactivation Processes

A molecule in an excited state can return to its ground state in a variety of ways that we collectively call deactivation processes.

### Radiationless Deactivation

When a molecule relaxes without emitting a photon we call the process radiationless deactivation. One example of radiationless deactivation is vibrational relaxation, in which a molecule in an excited vibrational energy level loses energy by moving to a lower vibrational energy level in the same electronic state. Vibrational relaxation is very rapid, with an average lifetime of <10^–12 s. Because vibrational relaxation is so efficient, a molecule in one of its excited state’s higher vibrational energy levels quickly returns to the excited state’s lowest vibrational energy level.

Another form of radiationless deactivation is an internal conversion in which a molecule in the ground vibrational level of an excited state passes directly into a higher vibrational energy level of a lower energy electronic state of the same spin state. By a combination of internal conversions and vibrational relaxations, a molecule in an excited electronic state may return to the ground electronic state without emitting a photon. A related form of radiationless deactivation is an external conversion in which excess energy is transferred to the solvent or to another component of the sample’s matrix.

Let’s use Figure 15.1.2 to illustrate how a molecule can relax back to its ground state without emitting a photon. Suppose our molecule is in the highest vibrational energy level of the second electronic excited state. After a series of vibrational relaxations brings the molecule to the lowest vibrational energy level of S2, it undergoes an internal conversion into a higher vibrational energy level of the first excited electronic state. Vibrational relaxations bring the molecule to the lowest vibrational energy level of S1. Following an internal conversion into a higher vibrational energy level of the ground state, the molecule continues to undergo vibrational relaxation until it reaches the lowest vibrational energy level of S0.

A final form of radiationless deactivation is an intersystem crossing in which a molecule in the ground vibrational energy level of an excited electronic state passes into one of the higher vibrational energy levels of a lower energy electronic state with a different spin state. For example, an intersystem crossing is shown in Figure 15.1.2 between the singlet excited state S1 and the triplet excited state T1.

## Variables that Affect Fluorescence

Fluorescence occurs when a molecule in an excited state’s lowest vibrational energy level returns to a lower energy electronic state by emitting a photon. Because molecules return to their ground state by the fastest mechanism, fluorescence is observed only if it is a more efficient means of relaxation than a combination of internal conversions and vibrational relaxations.

A quantitative expression of fluorescence efficiency is the fluorescent quantum yield, Φf, which is the fraction of excited state molecules that return to the ground state by fluorescence. The fluorescent quantum yields range from 1 when every molecule in an excited state undergoes fluorescence, to 0 when fluorescence does not occur.

The intensity of fluorescence, I_f, is proportional to the amount of radiation absorbed by the sample, P0 – P_T, and the fluorescence quantum yield

If = kΦf(P0 − P_T)

where k is a constant that accounts for the efficiency of collecting and detecting the fluorescent emission. From Beer’s law we know that

(P_T)/(P0) = 10^(−εbC)

where C is the concentration of the fluorescing species. Solving Equation (10.2) for P_T and substituting into Equation (10.1) gives, after simplifying

If = kΦf P0(1 − 10^(−εbC))

When εbC < 0.01, which often is the case when the analyte's concentration is small, Equation (10.3) simplifies to

If = 2.303 kΦf εbCP0 = k^′P0

where k′ is a collection of constants. The intensity of fluorescence, therefore, increases with an increase in the quantum efficiency, the source’s incident power, and the molar absorptivity and the concentration of the fluorescing species.

Fluorescence generally is observed when the molecule’s lowest energy absorption is a π → π^* transition, although some n → π^* transitions show weak fluorescence. Many unsubstituted, nonheterocyclic aromatic compounds have a favorable fluorescence quantum yield, although substitutions on the aromatic ring can affect Φf significantly. For example, the presence of an electron-withdrawing group, such as –NO2, decreases Φf, while adding an electron-donating group, such as –OH, increases Φf. Fluorescence also increases for aromatic ring systems and for aromatic molecules with rigid planar structures. Figure 15.1.3 shows the fluorescence of quinine under a UV lamp.

[Note: corrected; the source prints "can effect Φf" where this reads "can affect Φf"; the source prints "Fluorrescence also" where this reads "Fluorescence also". The verb meaning "to influence" is "affect", and "Fluorrescence" is a typo.]

Figure 15.1.3: Tonic water, which contains quinine, is fluorescent when placed under a UV lamp. Source: Splarka (commons.Wikipedia.org).
Tonic water, which contains quinine, is fluorescent when placed under a UV lamp.

A molecule’s fluorescent quantum yield also is influenced by external variables, such as temperature and solvent. Increasing the temperature generally decreases Φf because more frequent collisions between the molecule and the solvent increase external conversion. A decrease in the solvent’s viscosity decreases Φf for similar reasons. For an analyte with acidic or basic functional groups, a change in pH may change the analyte’s structure and its fluorescent properties.

[Note: corrected; the source prints "the solvent increases external conversion" where this reads "the solvent increase external conversion". The verb's subject is the plural "collisions".]

As shown in Figure 15.1.2, fluorescence may return the molecule to any of several vibrational energy levels in the ground electronic state. Fluorescence, therefore, occurs over a range of wavelengths. Because the change in energy for fluorescent emission generally is less than that for absorption, a molecule’s fluorescence spectrum is shifted to higher wavelengths than its absorption spectrum.

[Note: corrected; the source prints "As shown in Figure 15.1.3" where this reads "As shown in Figure 15.1.2". Figure 15.1.3 is the photograph of tonic water; the fluorescence transitions to the ground state's vibrational levels are drawn in the energy level diagram, Figure 15.1.2.]

## Variables that Affect Phosphorescence

A molecule in a triplet electronic excited state’s lowest vibrational energy level normally relaxes to the ground state by an intersystem crossing to a singlet state or by an external conversion. Phosphorescence occurs when the molecule relaxes by emitting a photon. As shown in Figure 15.1.2, phosphorescence occurs over a range of wavelengths, all of which are at lower energies than the molecule’s absorption band. The intensity of phosphorescence, Ip, is given by an equation similar to Equation (10.4) for fluorescence

IP = 2.303 kΦP εbCP0

= k^′P0

where Φp is the phosphorescence quantum yield.

Phosphorescence is most favorable for molecules with n → π^* transitions, which have a higher probability for an intersystem crossing than π → π^* transitions. For example, phosphorescence is observed with aromatic molecules that contain carbonyl groups or heteroatoms. Aromatic compounds that contain halide atoms also have a higher efficiency for phosphorescence. In general, an increase in phosphorescence corresponds to a decrease in fluorescence.

Because the average lifetime for phosphorescence can be quite long, ranging from 10^–4–10^4 s, the phosphorescent quantum yield usually is quite small. An improvement in Φp is realized by decreasing the efficiency of external conversion. This is accomplished in several ways, including lowering the temperature, using a more viscous solvent, depositing the sample on a solid substrate, or trapping the molecule in solution. Figure 15.1.4 shows an example of phosphorescence.

Figure 15.1.4: A europium doped strontium silicate-aluminum oxide powder under (a) natural light, (b) a long-wave UV lamp, and (c) in total darkness. The photo taken in total darkness shows the phosphorescent emission. Source: modified from Splarka (commons.Wikipedia.org).
A europium doped strontium silicate-aluminum oxide powder under natural light, a long-wave UV lamp, and in total darkness.

[Note: corrected; the source prints "Figure 15.1.4: An europium" where this reads "Figure 15.1.4: A europium"; the source prints "An europium" where this reads "A europium". "Europium" begins with a consonant sound, so it takes "a", in both the caption and the image description.]

## Emission and Excitation Spectra

Photoluminescence spectra are recorded by measuring the intensity of emitted radiation as a function of either the excitation wavelength or the emission wavelength. An excitation spectrum is obtained by monitoring emission at a fixed wavelength while varying the excitation wavelength. When corrected for variations in the source’s intensity and the detector’s response, a sample’s excitation spectrum is nearly identical to its absorbance spectrum. The excitation spectrum provides a convenient means for selecting the best excitation wavelength for a quantitative or qualitative analysis.

In an emission spectrum a fixed wavelength is used to excite the sample and the intensity of emitted radiation is monitored as function of wavelength. Although a molecule has a single excitation spectrum, it has two emission spectra, one for fluorescence and one for phosphorescence. Figure 15.1.5 shows the UV absorption spectrum and the UV fluorescence emission spectrum for quinine.

Figure 15.1.5: Absorbance spectrum and fluorescence emission spectrum for quinine in 0.05 M H2SO4. The emission spectrum uses an excitation wavelength of 350 nm with a bandwidth of 20 nm. Both spectra are normalized so that the maximum absorbance is 1.00 and the maximum emission is 1.00. The actual maximum absorbance is 0.444 and the actual maximum emission is 126747. Source: data from Daniel Scott, Department of Chemistry & Biochemistry, DePauw University.
Absorbance spectrum and fluorescence emission spectrum for quinine in 0.05 M H2SO4.
