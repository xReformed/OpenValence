---
title: "11.2: Mass Spectrometers"
book: "Instrumental Analysis (LibreTexts)"
chapter: "11: Atomic Mass Spectrometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/11%3A_Atomic_Mass_Spectrometry/11.02%3A_Mass_Spectrometers"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

A mass spectrometer has three essential needs: a means for producing ions, in this case (mostly) singly charged atoms; a means for separating these ions in space or in time by their mass-to-charge ratios; and a means for counting the number of ions for each mass-to-charge ratio. Figure 11.2.1 provides a general view of a mass spectrometer in the same way that we first introduced optical instruments in Chapter 7. The ionization of the sample is analogous to the source of photons in optical spectroscopy as it generates the particles (ions, instead of photons) that ultimately make up the measured signal. The separation of the resulting ions by their mass-to-charge ratios, which is accomplished using a mass analyzer, is analogous to the role of a monochromator in optical spectroscopy. The means for counting ions serves the same role as, for example, a photomultiplier tube in optical spectroscopy. Note that the mass spectrometer is held under vacuum as this allows the ions to travel great distances without undergoing collisions that might alter their charge or energy.

[Note: corrected; the source prints "is analagous to the source" where this reads "is analogous to the source"; the source prints "is analagous to the role" where this reads "is analogous to the role". "Analagous" is a misspelling.]

Figure 11.2.1: The basic components of a mass spectrometer. The blue arrows show the direction of sample-to-signal in which the sample is ionized, the ions separated by their mass-to-charge ratio, and ions with the same mass-to-charge ratio counted. The text in red at the top of the figure relates these components to their equivalent in optical spectroscopy.
The basic components of a mass spectrometer.

## Sources of Ionization

The most common means for generating ions are plasmas of various sorts, lasers, electrical sparks, and other ions. We will give greater attention to these in the next several sections as we consider specific examples of atomic mass spectrometry.

## Transducers for Counting Ions

The transducer for mass spectrometry must be able to report the number of ions that emerge from the mass analyzer. Here we consider two common types of transducers.

### Electron Multipliers

In Chapter 7 we introduced the photomultiplier tube as a way to convert photons into electrons, amplifying the signal so that a single photon produces 10^6 to 10^7 electrons, which generates a measurable current. An electron multiplier serves the same role in mass spectrometry. Figure 11.2.2 shows two versions of this transducer. The electron multiplier in Figure 11.2.2a uses a set of individual dynodes. When an ion strikes the first dynode, it generates several electrons, each of which is passed along to the next dynode before arriving at a collecting plate where the current is measured. The result is an amplification, or gain, in the signal of approximately 10^7 ×. The electron multiplier in Figure 11.2.2b uses a horn-shaped cylinder—typically made from glass coated with a thin layer of a semiconducting material—whose surface acts as a single, continuous dynode. When an ion strikes the continuous dynode it generates several electrons that are reflected toward the collector plate where the current is measured. The result is an amplification of 10^5 to 10^8 ×.

Figure 11.2.2: Electron multipliers using (a) individual, or discrete dynodes, and (b) a single, continuous dynode. The ion beam is represented by the blue arrows and the electrons are represented by the green lines. The increasing thickness of the green lines shows the amplification of the signal.
Electron multipliers using individual, or discrete dynodes, and a single, continuous dynode.

### Faraday Cup

A Faraday cup, as its name suggests, is a simple device shaped like a cup. Ions enter the cup where they strike a collector electrode. A current is directed to the collector plate that is sufficient to neutralize the charge of the ions. The magnitude of this current is proportional to the number of ions. A Faraday cup has the advantage of simplicity, but is less sensitive than an electron multiplier because it lacks the amplification provided by the dynodes.

## Separating Ions

Before we can detect the ions, we need to separate them so that we can generate a spectrum that shows the intensity of ions as a function of their mass-to-charge ratio. In this section we consider the three most common mass analyzers for atomic mass spectrometry.

### Quadrupole Mass Analyzers

The quadrupole mass analyzer is the most important of the mass analyzers included in this chapter: it is compact in size, low in cost, easy to use, and easy to maintain. As shown in Figure 11.2.3, a quadrupole mass analyzer consists of four cylindrical rods, two of which are connected to the positive terminal of a variable direct current (dc) power supply and two of which are connected to the power supply's negative terminal; the two positive rods are positioned opposite of each other and the two negative rods are positioned opposite of each other. Each pair of rods is also connected to a variable alternating current (ac) source operated such that the alternating currents are 180° out-of-phase with each other. An ion beam from the source is drawn into the channel between the quadrupoles and, depending on the applied dc and ac voltages, ions with only one mass-to-charge ratio successfully travel the length of the mass analyzer and reach the transducer; all other ions collide with one of the four rods and are destroyed.

[Note: corrected; the source prints "a quadrapole mass analyzer consists" where this reads "a quadrupole mass analyzer consists". "Quadrapole" is a misspelling; the section spells it "quadrupole" everywhere else.]

Figure 11.2.3: Basic arrangement of the quadrupole mass analyzer. The plus and the minus signs on each rod indicate which are connected to the positive terminal of the dc power supply. Not shown here is the circuitry for applying the alternating current. The ion beam enters the channel between the quadrupoles. Depending on the applied dc and ac voltages, some of the ions emerge from this channel and reach the transducer.
Basic arrangement of the quadrupole mass analyzer.

To understand how a quadrupole mass analyzer achieves this separation of ions, it helps to consider the movement of an ion relative to just two of the four rods, as shown in Figure 11.2.4 for the poles that carry a positive dc voltage. When the ion beam enters the channel between the rods, the ac voltage causes the ion to begin to oscillate. If, as in the top diagram, the ion is able to maintain a stable oscillation, it will pass through the mass analyzer and reach the transducer. If, as in the middle diagram, the ion is unable to maintain a stable oscillation, then the ion eventually collides with one of the rods and is destroyed. When the rods have a positive dc voltage, as they do here, ions with larger mass-to-charge ratios will be slow to respond to the alternating ac voltage and will pass through the transducer. The result is shown in the figure at the bottom (and repeated in Figure 11.2.5a) where we see that ions with a sufficiently large mass-to-charge ratios successfully pass through the transducer; ions with smaller mass-to-charge ratios do not. In this case, the quadrupole mass analyzer acts as a high-pass filter.

Figure 11.2.4: Illustration of how a quadrupole mass analyzer achieves separation of ions by their mass-to-charge ratio. See the text for additional details.
Illustration of how a quadrupole mass analyzer achieves separation of ions by their mass-to-charge ratio.

We can extend this to the behavior of the ions when they interact with rods that carry a negative dc voltage. In this case, the ions are attracted to the rods, but those ions that have a sufficiently small mass-to-charge ratio are able to respond to the alternating current's voltage and remain in the channel between the rods. The ions with larger mass-to-charge ratios move more sluggishly and eventually collide with one of the rods. As shown in Figure 11.2.5b, in this case, the quadrupole mass analyzer acts as a low-pass filter. Together, as we see in Figure 11.2.5c, a quadrupole mass analyzer operates as both a high-pass and a low-pass filter, allowing a narrow band of mass-to-charge ratios to pass through the transducer. By varying the applied dc voltage and the applied ac voltage, we can obtain a full mass spectrum.

Figure 11.2.5: Illustration that shows how a quadrupole mass analyzer acts as both (a) a high-pass filter and (b) a low pass filter, with the result that it passes only ions with a narrow range of mass-to-charge ratios.
Illustration that shows how a quadrupole mass analyzer acts as both a high-pass filter and a low pass filter.

Quadrupole mass analyzers provide a modest mass-to-charge resolution of about 1 amu and extend to m/z ratios of approximately 2000. Quadrupole mass analyzers are particularly useful for sources based on plasmas.

### Time-of-Flight (TOF) Mass Analyzers

In a time-of-flight mass analyzer, ions are created in small clusters by applying a periodic pulse of energy to the sample using a laser beam or a beam of energetic particles to ionize the sample. The small cluster of ions are then drawn into a tube by applying an electric field and then allowed to drift through the tube in the absence of any additional applied field; the tube, for obvious reasons, is called a drift tube. All of the ions in the cluster enter the drift tube with the same kinetic energy, KE, which means, given

[Note: corrected; the source prints "In a time-of-flight mass analyzers," where this reads "In a time-of-flight mass analyzer,". The singular article needs a singular noun.]

KE = (1/2)mv^2

that the square of an ion's velocity is inversely proportional to the ion's mass. As a result, lighter ions move more quickly than heavier ions. Flight times are typically less than 30 µs. A time-of-flight mass analyzer provides better resolution than a quadrupole mass analyzer, but is limited to sources that can be pulsed.

[Note: corrected; the source prints "A time-of-flight mass analyzer provide better" where this reads "A time-of-flight mass analyzer provides better". The verb must agree with the singular subject.]

### Double-Focusing Mass Analyzers

In a double-focusing mass analyzer, two mechanisms are used to focus a beam of ions onto the transducer. One of the mechanisms is an electrostatic analyzer that serves to confine the kinetic energy of the ions to a narrow range of energies. The second mechanism is a magnetic sector analyzer that uses an applied magnetic field to separate the ions by their mass-to-charge ratio. The combination of two analyzers allows for a significant resolution. More details on this type of mass analyzer is included in Chapter 20.

[Note: corrected; the source prints "an electrotatic analyzer" where this reads "an electrostatic analyzer". "Electrotatic" is a misspelling.]
