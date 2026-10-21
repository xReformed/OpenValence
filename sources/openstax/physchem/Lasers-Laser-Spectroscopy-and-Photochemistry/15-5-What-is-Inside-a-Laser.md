---
title: "15.5: What is Inside a Laser?"
book: "Physical Chemistry (LibreTexts)"
chapter: "15: Lasers, Laser Spectroscopy, and Photochemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/15%3A_Lasers_Laser_Spectroscopy_and_Photochemistry/15.05%3A_What_is_Inside_a_Laser"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Most lasers consist of three basic components:

1. the gain medium from which light of a specific frequency is emitted
2. the pump source which provides energy to the gain medium to create the light
3. the laser optical cavity in which the light is amplified by repeatedly passing through the gain medium

## The Gain Medium

The gain medium, or active medium, is a collection of atoms or molecules that can undergo stimulated emission. The active medium can be in a gaseous, liquid, or solid form. It can be a pure substance or a solution. Because the emitted light of a laser is created by the transition between two quantized states of the gain medium, laser light is always monochromatic. Laser light is also always coherent, meaning that the light waves emitted by the laser are all in phase.

### Solids

The first laser, Maiman's ruby laser, described in section 15.4, used a solid rod of synthetic ruby as the gain medium (Figure 15.5.1).

Figure 15.5.1: Internal view of a Maiman laser (Public Domain; United States Department of Energy via Wikipedia)

Ruby is a gem variety of the mineral corundum, Al2O3, in which Cr^3+ ions replace roughly 0.05% (by mass) of the Al^3+ ions. The electronic structure of the Cr^3+ impurities enables to ruby to act as a gain medium. However, synthetic ruby must be used because natural rubies have too many crystal defects. Other solid-state gain media are shown in Table 15.5.1.

Table 15.5.1: Solid-phase gain media

| Solid-state Host | Active Ion | Wavelength (nm) | Output | Pulse duration |
| --- | --- | --- | --- | --- |
| Al2O3 | Ti^3+ | 780 | continuous and pulsed | 10 fs - 5 ps |
| Al2O3 | Cr^3+ | 694.3 | pulsed | 10 ps |
| Glass (SiO2) | Nd^3+ | 1059 | pulsed | 1 ps |
| YAG Y3Al5O12 | Nd^3+ | 1064.1 | continuous and pulsed | 10-150 ps |
| YLF LiYF4 | Nd^3+ | 1054.3 | continuous and pulsed | 10-100 ps |

[Note: corrected; the source prints "| Output | Lifetime |" where this reads "| Output | Pulse duration |"; the source prints "| YAG Y3Al5O15 |" where this reads "| YAG Y3Al5O12 |"; the source prints "| YLF Y3LixFy |" where this reads "| YLF LiYF4 |". The last column gives pulse durations (the upper-state lifetimes are microseconds to milliseconds); YAG is Y3Al5O12 and YLF is LiYF4.]

### Gases

A basic He-Ne laser is shown in figure 15.5.2. The gain medium is the gas mixture through which the laser beam passes.

Figure 15.5.2: Internal view of a He-Ne laser. (CC BY-NC; Ümit Kaya via LibreTexts)

Other common gas-phase media include noble gases and molecules, but also metal cations, and metal atoms as shown in Table 15.5.2.

Table 15.5.2: Gas-phase gain media

| Gaseous Gain Medium | Wavelength (nm) | Output | Pulse Duration |
| --- | --- | --- | --- |
| N2 | 337 | pulsed | 1 ns |
| Cu | 510 | pulsed | 30 ns |
| CO2, He, N2 | tunable near 10,000 | pulsed | > 100 ns |
| He, Ne | 3391, 1152, 632, 544 | continuous | continuous |
| He, Cd | 441, 325 | continuous | continuous |
| Ar^+ | 488, 515 | continuous | continuous |
| Kr^+ | 647 | continuous | continuous. |

[Note: corrected; the source prints "| K^+ | 647 |" where this reads "| Kr^+ | 647 |". 647 nm is the krypton-ion laser line.]

### Exciplex Lasers

Exciplex lasers involve the formation of an exciplex, a gaseous species that forms and exists only in an excited state. Because only the upper, excited state can exist, there is no population in the lower, dissociated state, thus a population inversion is obtained. The lasing transition occurs as the excited state exciplex emits its excitation energy and simultaneously falls apart. Two common exciplex lasers are XeCl* (308 nm) and KrF* (248 nm). These lasers are often referred to as excimer laser, but the term "excimer" refers to an excited dimer, AA*, and so should not be used to describe an exciplex, AB*.

[Note: corrected; the source prints "KrF* ((249 nm)" where this reads "KrF* (248 nm)". The KrF line is at 248 nm.]

### Liquid Solutions

Many dye lasers use an organic dye, usually dissolved in a solution, as the gain medium. One advantage of using a dye solution as the gain medium is that it can create a tunable laser, which allows for continuous tuning over a wide range of wavelengths. For example, rhodamine 6G is a dye that can be tuned from 635 nm to 560 nm. The dye solution enters the laser cavity by passing through a cell or by streaming through the air using a dye jet. (Figure 15.5.3).

Figure 15.5.3: A dye laser in use. The dye is entering the dye cell through the yellow tube in the left foreground. (CC BY-SA 4.0, By Zaereth - Own work, https://commons.wikimedia.org/w/inde...curid=55762750)

Some common laser dyes other than rhodamine 6G and the rhodamines, include various coumarins, stilbenes, and fluorescein. There are solid state dye lasers (SSDL), in which the dye is dispersed uniformly within a solid polymer matrix.

## The Pump Source

For lasing to take place, the gain medium must be pumped into an excited state capable of undergoing stimulated emission. The energy required for excitation is often supplied by an electric current or an intense light source, such as a flashlamp or an excitation laser. Diode lasers, excimer lasers, and YAG lasers have all been used as pump sources.

Lasers are categorized as having either a continuous beam or a pulsed beam. In theory, any laser could be run as a pulsed beam laser if the pump source is set to deliver the excitation energy in regularly repeated bursts. Not all lasers can operate as continuous-wave (CW) lasers, though, because there are gain media in which it is not possible to maintain a continuous population inversion. The ruby laser is an example of a laser that is very hard to run continuously and is almost always pulsed.

[Note: corrected; the source prints "The ruby laser is an example of a laser that cannot produce a continuous wave." where this reads "The ruby laser is an example of a laser that is very hard to run continuously and is almost always pulsed.". A CW ruby laser was demonstrated in 1962.]

## The Laser Optical Cavity

Figure 15.5.4 shows the main components of a generic laser optical (or resonator) cavity. The optical cavity is formed by a pair of mirrors that surround the gain medium and enable feedback of light into the medium. This feedback is critical to the operation of a laser because it is where the amplification of the signal occurs. The gain medium is excited by an external pump source, such as a flash lamp, electric current, or another laser. The output coupler is a partially reflective mirror that allows a portion of the laser radiation to leave the cavity but reflects a majority of the light back through the gain medium. The light trapped between the mirrors forms standing wave structures called modes. Although beyond the scope of this discussion, the reader interested in cavity modes can consult the “Laser Radiation Properties” module.

Figure 15.5.4: A schematic of a generic laser cavity. (CC BY-NC; Ümit Kaya via LibreTexts)

Figure 15.5.5 shows the laser cavity of a tunable dye laser. The laser is tunable because the dye's broad emission band provides gain over a wide range of wavelengths. The user chooses the desired lasing energy by means of a tuning element, which is often a movable diffraction grating.

[Note: corrected; the source prints "The laser is tunable because the pump source provides several excitation energies, which result in the creation of several possible energies for the lasing beam." where this reads "The laser is tunable because the dye's broad emission band provides gain over a wide range of wavelengths.". A single-wavelength pump is enough; the tunability comes from the dye's broad vibronic emission.]

Figure 15.5.5: A schematic of a dye laser cavity with a dye jet. (CC BY-NC; Ümit Kaya via LibreTexts)

## Diode Lasers

Diode lasers do not lase in the same manner as the lasers described above. Instead of separate mirrors, the polished end faces of the crystal form the optical cavity, and lasing is by stimulated emission. Diodes made of materials such as GaAs emit light when the recombination of an electron and a hole in a semiconductor releases energy in the form of photons. A population inversion is maintained by a forward-bias current that keeps injecting electrons and holes into the junction. A pseudo-optical cavity is formed because the semiconductor materials generally have a very high refractive index, causing the photons to be trapped in the crystal of the semiconductor due to the large and abrupt difference in the refractive indices at the surfaces of the crystal. GaAs emits infrared light, but it can be doped to create a material that emits at another wavelength. For example, GaAs0.6P0.4 emits red light.

[Note: corrected; the source prints "There is no laser optical cavity, and thus there is no stimulated emission." where this reads "Instead of separate mirrors, the polished end faces of the crystal form the optical cavity, and lasing is by stimulated emission."; the source prints "A population inversion is maintained by rapidly removing the electrons that are falling into the holes of the p-type semiconductor." where this reads "A population inversion is maintained by a forward-bias current that keeps injecting electrons and holes into the junction.". Without stimulated emission a diode would be an LED; the paragraph goes on to describe the crystal faces as the cavity.]
