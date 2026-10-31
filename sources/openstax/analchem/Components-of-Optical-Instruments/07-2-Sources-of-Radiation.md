---
title: "7.2: Sources of Radiation"
book: "Instrumental Analysis (LibreTexts)"
chapter: "7: Components of Optical Instruments"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/07%3A_Components_of_Optical_Instruments/7.02%3A_Sources_of_Radiation"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

All forms of spectroscopy require a source of energy to place the analyte in an excited state. In absorption and scattering spectroscopy this energy is supplied by photons. Emission and photoluminescence spectroscopy use thermal energy, radiant (photon) energy, or chemical energy to promote the analyte to a suitable excited state. In this section we consider the sources of radiant energy.

## Sources of Electromagnetic Radiation

A source of electromagnetic radiation must provide an output that is both intense and stable in the region of interest. Sources of electromagnetic radiation are classified as either continuum or line sources. Table 7.2.1 provides a list of some common sources of electromagnetic radiation.

Table 7.2.1. Common sources of electromagnetic radiation.

| source | wavelength region | useful for... |
| --- | --- | --- |
| H2 and D2 lamp | continuum source from 160–380 nm | molecular absorption |
| tungsten lamp | continuum source from 320–2400 nm | molecular absorption |
| Xe arc lamp | continuum source from 200–1000 nm | molecular fluorescence |
| nernst glower | continuum source from 0.4–20 µm | molecular absorption |
| globar | continuum source from 1–40 µm | molecular absorption |
| nichrome wire | continuum source from 0.75–20 µm | molecular absorption |
| hollow cathode lamp | line source in UV/Vis | atomic absorption |
| Hg vapor lamp | line source in UV/Vis | molecular fluorescence |
| laser | line source in UV/Vis/IR | atomic and molecular absorption, fluorescence, and scattering |

Continuum sources emit radiation over a broad range of wavelengths, with a relatively smooth variation in intensity (Figure 7.2.1), and are used for molecular absorbance using UV/Vis and IR radiation. Further details on these sources are in Chapters 13 and 16, respectively.

[Note: corrected; the source prints "Continuum sources emits radiation" where this reads "Continuum sources emit radiation". The verb must agree with its plural subject.]

Figure 7.2.1: Spectrum showing the emission from a green LED, which provides continuous emission over a wavelength range of approximately 530–640 nm.
Spectrum showing the emission from a green LED.

A line source, on the other hand, emits radiation at discrete wavelengths, with broad regions showing no emission lines (Figure 7.2.2), and are used for atomic absorption, atomic and molecular fluorescence, and Raman spectroscopy. Further details on hollow cathode lamps are included in Chapter 9.

Figure 7.2.2: Emission spectrum from a Cu hollow cathode lamp. This spectrum consists of seven distinct emission lines (the first two differ by only 0.4 nm and are not resolved at the scale shown in this spectrum). Each emission line has a width of approximately 0.01 nm at 1⁄2 of its maximum intensity.

## Laser Sources

An important line source of radiation is a laser, which is an acronym for light amplification by stimulated emission of radiation. Laser emission is monochromatic with a narrow bandwidth of just a few micrometers. As suggested by the term amplification, a laser provides a source of high intensity emission. The source of this intensity is embedded in the term stimulated emission, to which we now turn our attention.

[Note: "a few micrometers" cannot be right: a band a few micrometers wide would span several thousand nanometers, many times the whole visible region (about 400–700 nm), and Table 7.2.2 gives laser lines to 0.1 nm. A laser's emission bandwidth is a small fraction of a nanometer, but the unit the source intended is not clear.]

### How a Laser Works

To understand how a laser works, we need to consider four key ideas: pumping, population inversion, stimulated emission, and light amplification.

#### Pumping

Emission cannot occur unless we first populate higher energy levels with electrons, which we can accomplish by, for example, the absorption of photons, as shown in Figure 7.2.3. Emission occurs when an electron in a higher energy state relaxes back to a lower energy state by emitting a photon with an energy equal to the difference in the energy between these two states. The process of populating the excited states with electrons is called pumping and is accomplished by using an electrical discharge, by passing an electrical current through the lasing medium, or by absorption of high energy photons. The goal of pumping is to create a large population of excited states.

Figure 7.2.3: A general scheme showing the difference between absorption (on the left) and emission (on the right).
The difference between absorption and emission.

#### Population Inversion

Normally the majority of the species we are studying are in their ground electronic state with only a small number of species in an excited electronic state. For a laser to achieve a high intensity of emission, it is necessary to create a situation in which there are more species in the excited state than in the ground state, as shown in Figure 7.2.4 where the non-inverted population has four species in the ground state and two species in the excited state, and where the inverted population has four species in the excited state and two species in the ground state.

Figure 7.2.4: Illustration of (a) a non-inverted population and (b) an inverted population. In the non-inverted population there are four electrons with energies of E1 and two electrons with energies of E2; for the inverted population there are four electrons with energies of E2 and two electrons with energies of E1.
Illustration of a non-inverted population and an inverted population.

#### Stimulated Emission and Light Amplification

Figure 7.2.3 shows emission of a photon following absorption of a photon of equal energy. No more than one photon is emitted for each photon that is absorbed, with some species in an excited state relaxing to the ground state through non-radiative pathways. This spontaneous emission is a random process, which means that the timing of emission and the direction in which emission occurs are random.

Emission in a laser, as depicted in Figure 7.2.5, is stimulated by a photon with an energy equal to that of the difference in energy between the excited state and the ground state. The interaction of the incoming photon with the excited state results in the excited state's immediate relaxation to the ground state by the emission of a photon. The original photon and the emitted photon are coherent, with identical energies, identical directions, and identical phases. Because two coherent photons are emitted, the amplitude of the emitted radiation is doubled, as we see in Figure 7.2.5; this is what we mean by light amplification.

Figure 7.2.5: In stimulated emission, a photon with an energy equivalent to E2 − E1 stimulates the emission of a photon of equal energy. The two photons are coherent with each other, producing an emission with an amplitude that is double that of the individual photons.
Stimulated emission.

[Note: corrected; the source prints "a photo with an energy" where this reads "a photon with an energy". A typing error.]

### Laser Systems

As the previous sections suggest, creating a population inversion is the limiting factor in generating radiation from a laser. The two-level system in Figure 7.2.5, which involves a single excited state and a single ground state, cannot create a population inversion because when the ground state and excited state are equal in population, the rate at which excited states are produced through pumping equals the rate at which excited states are lost through emission. To achieve stimulated emission, laser systems use three-level or four-level systems, as outlined in Figure 7.2.6.

Figure 7.2.6: Examples of (a) a three-level system and (b) a four-level system for generating emission from a laser.
Examples of a three-level and a four-level system for generating emission from a laser.

In a three-level system, pumping is used to populate the excited states in level two. From level two, an efficient pathway for non-radiative relaxation populates the excited state in level three, which is sufficiently stable to allow for a population inversion. In a four-level system, the population inversion is achieved between level three and level four.

### Types of Lasers

Lasers are categorized by the nature of the lasing medium: solid-state crystals, gases, dyes, and semiconductors. Solid-state lasers use a crystalline material, such as aluminum oxide, that contains trace amounts of an element, such as chromium or neodymium, which serves as the actual lasing medium. Gas lasers use gas phase atoms, ions, or molecules as a lasing medium. The lasing medium in a dye laser is a solution of an organic dye molecule. A dye laser typically is capable of emitting light over a broad range of wavelengths, but is tunable to a specific wavelength within that range. Finally, a semiconductor laser uses modified light-emitting diodes as a lasing medium.

Table 7.2.2. Examples of Lasers.

| category | lasing medium | wavelengths |
| --- | --- | --- |
| solid state | ruby (0.05% Cr(III) in Al2O3) | 694.3 nm |
|  | Nd:YAG (neodymium ion in yttrium aluminum garnet) | 1064 nm; 532 nm |
| gas | He/Ne | 632.8 nm |
|  | Ar^+ | 514.5 nm, 488 nm |
|  | N2 | 337.1 nm |
|  | CO2 | 10.6 µm |
| dye | rhodamine | 540–680 nm |
|  | fluorescein | 530–560 nm |
|  | coumarin | 490–620 nm |
| semiconductor | indium gallium nitride | 405 nm |
|  | aluminum gallium indium phosphide | 635 nm |

[Note: corrected; the source prints "(neodymium ion in yttrium aluminum garnet | 1054 nm; 532 nm |" where this reads "(neodymium ion in yttrium aluminum garnet) | 1064 nm; 532 nm |"; the source prints "| cumarin |" where this reads "| coumarin |". The Nd:YAG laser's fundamental line is at 1064 nm, and 532 nm, its frequency-doubled line, is half of 1064 nm (1054 nm is the line of neodymium in glass); the closing parenthesis is missing, and the dye is coumarin.]
