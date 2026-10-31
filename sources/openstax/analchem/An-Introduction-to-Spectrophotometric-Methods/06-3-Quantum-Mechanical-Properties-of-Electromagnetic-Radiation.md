---
title: "6.3: Quantum Mechanical Properties of Electromagnetic Radiation"
book: "Instrumental Analysis (LibreTexts)"
chapter: "6: An Introduction to Spectrophotometric Methods"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/06%3A_An_Introduction_to_Spectrophotometric_Methods/6.03%3A_Quantum_Mechanical_Properties_of_Electromagnetic_Radiation"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

In the last section, we considered properties of electromagnetic radiation that are consistent with identifying light as a wave. Other properties of light, however, cannot be explained by a model that treats it as a wave; instead, we need to consider a model that treats light as a system of discrete particles, which we call photons.

## The Photoelectric Effect

As shown in Figure 6.3.1, in a photoelectric cell, a metal, such as sodium, is held under vacuum and exposed to electromagnetic radiation, which enters the cell through an optical window. If the frequency of the radiation is sufficient, electrons escape from the metal with a kinetic energy that we can measure; we call these photoelectrons. If the photocell's anode is held at a potential that is positive relative to the potential applied to the cathode, the photoelectrons move from the cathode to the anode, generating a current that is measured by an ammeter. If the voltage applied to the anode is made sufficiently negative, the electrons eventually fail to reach the anode and the current decreases to zero. The voltage needed to stop the flow of electrons is called the stopping voltage.

Figure 6.3.1: Illustration of a photoelectric cell. The photocathode is fashioned from or coated with a metal and placed in an evacuated cell along with an anode. Electromagnetic radiation is focused on the photocathode and, if it has sufficient energy, the metal emits electrons with a kinetic energy that depends on the metal and the frequency of the electromagnetic radiation. The potential applied to the photocathode and the anode determine whether the electrons reach the anode; if they do, then a current flows, which is measured by the ammeter.
Illustration of a photoelectric cell.

In a photoelectron spectrum we vary the frequency and intensity of the electromagnetic radiation and observe their effect on either the number of photoelectrons released (measured as a current) or the energy of the photoelectrons released (measured by their kinetic energy). A typical set of experiments are shown in Figure 6.3.2a using Na and in Figure 6.3.2b using Na, Zn, and Cu. The data show several interesting features. First, we see in Figure 6.3.2a that the intensity of the light source has no effect on the minimum frequency of light needed to eject a photoelectron from Na—we call this the threshold frequency—but that a high intensity source of electromagnetic radiation results in the release of a greater number of photoelectrons and, therefore, a greater current than for a lower intensity source. Second, we see in Figure 6.3.2b that different metals have different threshold frequencies, but that once we exceed each metal's threshold frequency, the change in the kinetic energy of the photoelectrons with increasing frequency yields lines of equal slopes.

Figure 6.3.2: The two types of photoelectric effect experiments. In (a) we measure the current that flows as we change the intensity and the frequency of the electromagnetic radiation. In (b) we measure the kinetic energy of the photoelectrons as a function of the frequency of the electromagnetic radiation.
Two versions of the photoelectric effect experiment.

We can explain these experimental observations if we assume that the source of electromagnetic energy has an energy, E_ER, that does two things: it overcomes the energy that binds the photoelectron to the metal, E_BE, and it imparts the remaining energy into the photoelectron's kinetic energy, E_KE, where ER means electromagnetic radiation, BE means binding energy and KE means kinetic energy.

E_KE = E_ER − E_BE

A wave model for electromagnetic radiation is insufficient to explain the photoelectric effect because when it strikes the metal the radiation's energy would be distributed across all atoms on the surface, none of which would then receive an energy that exceeds the photoelectron's binding energy. Instead, the results in Figure 6.3.2 make sense only if we assume that light consists of discrete particles with energies that are a function of frequency or wavelength

E_ER = hν = hc/λ

where h is Planck's constant. This leaves us with the following equation relating kinetic energy, the energy of the photon, and the binding energy of the electron.

[Note: corrected; the source prints "Plank's constant" where this reads "Planck's constant"; the source prints "This leave us" where this reads "This leaves us". The constant is named after Max Planck, and "leave" is a typing error.]

E_KE = hν − E_BE

Note that the slope of the lines in Figure 6.3.2b is Planck's constant.

[Note: corrected; the source prints "Plank's constant" where this reads "Planck's constant". The constant is named after Max Planck.]

## Energy States

Equation (qm) is central to the particle, or quantum mechanical model of the atom in which we understand that chemical species—atoms, ions, molecules—exist only in discrete states, each with a single, well-defined energy. A wave, on the other hand, can take on any energy. A simple image is the possible energies of a ball as it rolls down a ramp (wave) or a staircase (particle), as in Figure 6.3.3.

Figure 6.3.3: The energy of a ball is measured by its height relative to its final position, shown in blue. When a ball rolls down a ramp, as in (a), it can take on any energy between its initial and final energies. When a ball rolls down a staircase, as in (b), it can take only certain discrete energies. The ball in (b) is said to be quantized.
Model for quantized states.

When an atom, ion, or molecule moves between two of these discrete states, the difference in energy, ΔE, is given by

ΔE = hν = hc/λ

In absorption spectroscopy a photon is absorbed by an atom, ion, or molecule, which undergoes a transition from a lower-energy state to a higher-energy, or excited state (Figure 6.3.4a). The reverse process, in which an atom, ion, or molecule emits a photon as it moves from a higher-energy state to a lower energy state (Figure 6.3.4b), is called emission.

[Note: corrected; the source prints "lower energy state (6.3.4b)" where this reads "lower energy state (Figure 6.3.4b)". The reference is to the figure's part b, as part a is referenced in the sentence before.]

Figure 6.3.4: A simplified energy diagram that shows the absorption and emission of a photon by an atom or a molecule. When a photon of energy hν strikes the atom, ion, or molecule, absorption may occur if the difference in energy, ΔE, between the ground state and the excited state is equal to the photon’s energy. An atom, ion, or molecule in an excited state may emit a photon and return to the ground state. The photon’s energy, hν, equals the difference in energy, ΔE, between the two states.
Energy diagram showing absorption and emission.

The types of energy states involved in emission and absorption depend on the energy of the electromagnetic radiation. In general, γ-rays involve transitions between nuclear states, X-rays probe the energies of core-level electrons, ultraviolet-visible radiation probes the energies of valence electrons, infrared radiation provides information on vibrational energy states, microwave radiation probes rotational energy levels and electron spins, and radio waves provide information on nuclear spins. While infrared spectroscopy may provide information on a molecule's vibrational energy states, the energies available in ultraviolet-visible spectroscopy provide information on both the molecule's electronic states and its vibrational states, as shown in Figure 6.3.5.

Figure 6.3.5: Diagram showing two electronic energy levels (E0 and E1), each with five vibrational energy levels ν_(0−4). Absorption of ultraviolet and visible radiation (shown by the blue arrows) leads to a change in the analyte’s electronic energy levels and, possibly, a change in vibrational energy as well. A change in vibrational energy without a change in electronic energy levels occurs with the absorption of infrared radiation (shown by the red arrows).
Energy level diagram showing electronic and vibrational energies.
