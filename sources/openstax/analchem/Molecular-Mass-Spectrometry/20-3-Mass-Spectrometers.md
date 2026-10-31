---
title: "20.3: Mass Spectrometers"
book: "Instrumental Analysis (LibreTexts)"
chapter: "20: Molecular Mass Spectrometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/20%3A_Molecular_Mass_Spectrometry/20.03%3A_Mass_Spectrometers"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

A mass spectrometer has four essential elements: a means for introducing the sample to the instrument, a means for generating a mixture of ions, a means for separating the ions, and a means for counting the ions. In Chapter 20.2 we introduced some of the most important ways to generate ions. In this section we turn our attention to sample inlet systems and to separating and counting ions. You may wish to review Chapter 11 where we considered these topics in the context of atomic mass spectrometry. As we noted in Chapter 11, a mass spectrometer must operate under a vacuum to ensure that ions can travel long distances without undergoing undesired collisions that affect their ion energy.

## Sample Inlet Systems

When the sample is a gas or a volatile liquid, it is easy to transfer a portion of the sample into a reservoir as a gas maintained at a relatively small pressure. The sample is then allowed to enter into the mass spectrometer's ion source through a diaphragm that contains a pin-hole, drawn in by holding the ion source at lower pressure.

Solid and non-volatile liquids are sampled by inserting them directly into the ion source through a vacuum lock that allows the mass spectrometer to remain under vacuum except for the ion source where the sample is inserted. The sample is placed in a capillary tube or a small cup at the end of a sample probe, and then moved into the ion source. The sample probe includes a heating coil that is used, along with the instrument's vacuum, to help volatilize the sample.

Of particular importance are inlet systems that couple a chromatographic or an electrophoretic instrument to a mass spectrometer, providing a way to separate a complex mixture into its individual components and then using the mass spectrometer to determine the composition of those components. The interface between a gas chromatograph and a mass spectrometer (GC-MS) must account for the significant drop in pressure from atmospheric pressure to a pressure of 10^–8 torr; the interface for LC-MS and for EC-MS must provide a way to remove the liquid eluent, to volatilize the samples, and to account for the drop in pressure. See Chapters 27, 28, and 30 for more details.

## Mass Analyzers

The purpose of the mass analyzer is to separate the ions by their mass-to-charge ratios. Ideally we want the mass analyzer to allow us to distinguish between small differences in mass and to do so with a strong signal-to-noise ratio. As we learned in Chapter 7 when introducing optical spectroscopy, these two desires usually are in tension with each other, with improvements in resolution often coming with an increase in noise.

### Resolution

The resolution between two peaks, R, in mass spectrometry is defined as the ratio of their average mass to the difference in their masses

R = (m̄)/Δm

The following table shows how resolution varies as a function of the average mass and the difference in mass. A resolution of 1,000, for example is sufficient to resolve two ions with an average mass of 100 amu that differ by 0.1 amu, or two ions that have an average mass of 1,000 amu that differ by 1 amu.

Table 20.3.1. Resolution for stated values of m̄ and Δm.

| m̄ →; Δm ↓ | 100 amu | 1000 amu | 10,000 amu |
| --- | --- | --- | --- |
| 0.1 amu | 1,000 | 10,000 | 100,000 |
| 1 amu | 100 | 1,000 | 10,000 |
| 10 amu | 10 | 100 | 1,000 |

### Magnetic Sector Mass Analyzers

When a beam of ions passes through a magnetic field, its path is altered, as we see in Figure 20.3.1. The ions experience an acceleration as they exit the ion source and enter the mass analyzer with a kinetic energy that is given by the equations

KE = zeV

KE = (1/2)mv^2

where z is the ion's charge (usually +1), e is the electronic charge in Coulombs, V is the applied voltage responsible for the acceleration, m is the ion's mass, and v is the ion's velocity after acceleration. Equation (msa1) shows us that all ions with the same charge have the same kinetic energy. Equation (msa2), then, tells us that ions with a greater mass will move more slowly.

Figure 20.3.1: Illustration of a magnetic sector analyzer for mass spectrometry. Ions from the ion source enter into the mass analyzer. The magnets in the mass analyzer bend the path followed by the ions. For any combination of magnetic field strength and accelerating voltage, only ions with a compatible mass-to-charge ratio are able to leave the mass analyzer through the exit slit; ions that are too heavy or too light, fail to exit the mass analyzer.
Illustration of a magnetic sector analyzer for mass spectrometry. Ions from the ion source enter into the mass analyzer. The magnets in the mass analyzer bend the path followed by the ions. For any combination of magnetic field strength and accelerating voltage, only ions with a compatible mass-to-charge ratio are able to leave the mass analyzer through the exit slit; ions that are too heavy or too light, fail to exit the mass analyzer.

An ion's path through the magnetic field is determined by two forces. The first of these forces is the magnetic force, FM, that acts on the ion, which is

FM = Bzev

where B is the magnetic field strength. The second of these forces is the centripetal force, FC, that acts on the ion as it moves along its curved path, which is

FC = mv^2/r

where r is the magnet's radius of curvature. An ion can only navigate these opposing forces if FM and FC are equal to each other. This requires that

Bzev = mv^2/r

Solving for v gives

v = Bzer/m

Substituting back into Equation (msa2) and solving for the mass-to-charge ratio gives

m/z = (B^2 r^2 e)/(2V)

Equation (msa7) tells us that for any combination of magnetic field strength, B, and accelerating voltage, V, only one mass-to-charge ratio has the correct value of r to reach the detector. Ions that are too heavy or ions that are too light, will collide with the sides of the mass analyzer before they reach the detector. The mass spectrum is recorded by holding V and r constant and varying the magnetic field strength, B. The resolution of a magnetic sector instrument is usually less than 2000.

[Note: corrected; the source prints "for any combinaton of" where this reads "for any combination of"; the source prints "to reach the director" where this reads "to reach the detector". Typos; the ions that pass reach the detector, as the next sentence says.]

### Double-Focusing Mass Analyzers

The resolution of a magnetic sector instrument suffers from limitations that affect its ability to narrow the range of kinetic energies—and, thus, velocities—possessed by the ions when they exit the ion source and enter the mass analyzer. The double-focusing mass analyzer in Figure 20.3.2 compensates for this by placing an electrostatic analyzer before the magnetic analyzer, separating the two by a slit. The electrostatic analyzer consists of two curved metal plates, one of which is held at a positive potential and one at a negative potential. As ions pass between the plates, those ions that have too much energy and those that have too little energy fail to pass through the slit that separates the electrostatic analyzer from the magnetic analyzer. In this way, the distribution of energies—and, thus, velocities—is tightened, improving the resolution achieved by the magnetic sector analyzer. Depending on its design, a double-focusing analyzer can achieve a resolution as large as 100,000.

[Note: corrected; the source prints "pass betweeen the plates" where this reads "pass between the plates". A typo.]

Figure 20.3.2: Illustration of a double-focusing mass analyzer that consists of an electrostatic mass analyzer and a magnetic mass analyzer. Ions that make it through the slit that separates the two analyzers have a smaller range of kinetic energies than the ions in a magnetic sector mass analyzer, which improves resolution.
Illustration of a double-focusing mass analyzer that consists of an electrostatic mass analyzer and a magnetic mass analyzer. Ions that make it through the slit that separates the two analyzers have a smaller range of kinetic energies than the ions in a magnetic sector mass analyzer, which improves resolution.

### Quadrupole Mass Analyzers

The quadrupole mass analyzer was introduced in Chapter 11 and the treatment here is largely the same. A quadrupole mass analyzer is compact in size, low in cost, easy to use, and easy to maintain. As shown in Figure 20.3.3, it consists of four cylindrical rods, two of which are connected to the positive terminal of a variable direct current (dc) power supply and two of which are connected to the power supply's negative terminal; the two positive rods are positioned opposite of each other and the two negative rods are positioned opposite of each other. Each pair of rods is also connected to a variable alternating current (ac) source operated such that the alternating currents are 180° out-of-phase with each other. An ion beam from the source is drawn into the channel between the quadrupoles and, depending on the applied dc and ac voltages, ions with only one mass-to-charge ratio successfully travel the length of the mass analyzer and reach the transducer; all other ions collide with one of the four rods and are destroyed.

[Note: corrected; the source prints "A quadupole mass analyzer" where this reads "A quadrupole mass analyzer". A typo.]

Figure 20.3.3: Basic arrangement of the quadrupole mass analyzer. The plus and the minus signs on each rod indicate which are connected to the positive terminal of the dc power supply. Not shown here is the circuitry for applying the alternating current. The ion beam enters the channel between the quadrupoles. Depending on the applied dc and ac voltages, some of the ions emerge from this channel and reach the transducer.
Basic arrangement of the quadrupole mass analyzer. The plus and the minus signs on each rod indicate which are connected to the positive terminal of the dc power supply. Not shown here is the circuitry for applying the alternating current. The ion beam enters the channel between the quadrupoles. Depending on the applied dc and ac voltages, some of the ions emerge from this channel and reach the transducer.

To understand how a quadrupole mass analyzer achieves this separation of ions, it helps to consider the movement of an ion relative to just two of the four rods, as shown in Figure 20.3.4 for the poles that carry a positive dc voltage. When the ion beam enters the channel between the rods, the ac voltage causes the ion to begin to oscillate. If, as in the top diagram, the ion is able to maintain a stable oscillation, it will pass through the mass analyzer and reach the transducer. If, as in the middle diagram, the ion is unable to maintain a stable oscillation, then the ion eventually collides with one of the rods and is destroyed. When the rods have a positive dc voltage, as they do here, ions with larger mass-to-charge ratios will be slow to respond to the alternating ac voltage and will pass through the transducer. The result is shown in the figure at the bottom (and repeated in Figure 20.3.5a) where we see that ions with a sufficiently large mass-to-charge ratios successfully pass through the transducer; ions with smaller mass-to-charge ratios do not. In this case, the quadrupole mass analyzer acts as a high-pass filter.

Figure 20.3.4: Illustration of how a quadrupole mass analyzer achieves separation of ions by their mass-to-charge ratio. See the text for additional details.
Illustration of how a quadrupole mass analyzer achieves separation of ions by their mass-to-charge ratio. See the text for additional details.

We can extend this to the behavior of the ions when they interact with rods that carry a negative dc voltage. In this case, the ions are attracted to the rods, but those ions that have a sufficiently small mass-to-charge ratio are able to respond to the alternating current's voltage and remain in the channel between the rods. The ions with larger mass-to-charge ratios move more sluggishly and eventually collide with one of the rods. As shown in Figure 20.3.5b, in this case, the quadrupole mass analyzer acts as a low-pass filter. Together, as we see in Figure 20.3.5c, a quadrupole mass analyzer operates as both a high-pass and a low-pass filter, allowing a narrow band of mass-to-charge ratios to pass through the transducer. By varying the applied dc voltage and the applied ac voltage, we can obtain a full mass spectrum.

Figure 20.3.5: Illustration that shows how a quadrupole mass analyzer acts as both (a) a high-pass filter and (b) a low pass filter, with the result that it passes only ions with a narrow range of mass-to-charge ratios.
Illustration that shows how a quadrupole mass analyzer acts as both (a) a high-pass filter and (b) a low pass filter, with the result that it passes only ions with a narrow range of mass-to-charge ratios.

Quadrupole mass analyzers provide a modest mass-to-charge resolution of about 1 amu and extend to m/z ratios of approximately 2000.

### Time-Of-Flight Mass Analyzers

In a time-of-flight mass analyzers, Figure 20.3.6, ions are created in small clusters by applying a periodic pulse of energy to the sample using a laser beam or a beam of energetic particles to ionize the sample. The small cluster of ions are then drawn into a tube by applying an electric field and then allowed to drift through the tube in the absence of any additional applied field; the tube, for obvious reasons, is called a drift tube. All of the ions in the cluster enter the drift tube with the same kinetic energy, KE, which we define as

KE = (1/2)mv^2 = zeV

The time, T, that it takes the ion to travel the distance, L, to the detector is

T = L/v

Substituting Equation (tof2) into Equation (tof1)

T = L × √(m/z) × √(1/(2 eV))

[Note: corrected; the source prints "T = √(m/z)" where this reads "T = L × √(m/z)". The source's result drops the flight path: from (1/2)mv^2 = zeV, v = √(2zeV/m), so T = L/v = L × √(m/z) × √(1/(2eV)).]

shows us that the time it takes an ion to travel through the drift tube is proportional to the square root of its mass-to-charge ratio. As a result, lighter ions move more quickly than heavier ions. Flight times are typically less than 30 µs. A time-of-flight mass analyzer provide better resolution than a quadrupole mass analyzer, but is limited to sources that can be pulsed. A linear time-of-flight analyzer, such as that in Figure 20.3.6, provide a resolution of approximately 4,000; other configurations can achieve resolutions of 10,000 or better. The time-of-flight analyzer is well-suited for MALDI ionization as the time between pulses of the laser provides the time needed for detection to occur.

[Note: corrected; the source prints "the square rate of its" where this reads "the square root of its". A typo; T varies as √(m/z).]

Figure 20.3.6: Illustration of a linear time-of-flight mass analyzer showing three views of the relative positions of three ions with a small (green), medium (blue), and large (red) mass-to-charge ratios as they migrate through the drift tube.
Illustration of a linear time-of-flight mass analyzer showing three views of the relative positions of three ions with a small (green), medium (blue), and large (red) mass-to-charge ratios as they migrate through the drift tube.

### Ion Trap Mass Analyzers

Figure 20.3.7 provides an illustration of an ion trap mass analyzer, which consists of three electrodes—a central ring electrode and two conical end cap electrodes—that create a cavity into which ions are drawn. The ions in the cavity experience stabilizing and destabilizing forces that affect their movement within the cavity. Ions that adopt stable orbits remain in the cavity. By varying the potentials applied to the electrodes, ions with different mass-to-charge ratios enter into destabilizing orbits and exit through a small hole at the bottom of the trap. An ion trap typically provides a resolution of 1,000.

[Note: corrected; the source prints "An ion trap typcially provides" where this reads "An ion trap typically provides". A typo.]

Figure 20.3.7: Illustration of the ion trap mass analyzer showing the cavity defined by the top end cap, the ring electrode, and the bottom end cap. The photographs on the bottom show the conical-shaped top end cap with small holes (inside the yellow circle) that allows ions to enter into the cavity, the ring electrode, and the conical-shaped bottom end cap, which has a small hole (inside the yellow circle) that allows ions to exit the cavity and reach the detector.
Illustration of the ion trap mass analyzer showing the cavity defined by the top end cap, the ring electrode, and the bottom end cap.

## Ion Cyclotron Resonance Mass Analyzer

The ion cyclotron resonance (ICR) analyzer is a form of an ion trap but operates in a way that retains all ions within the trap. When a gas phase ion is placed within an applied magnetic field, the ions move in a circular orbit that is perpendicular to the applied field (Figure 20.3.8). In discussing the magnetic sector analyzer, we showed that the velocity, v, of an ion in an applied magnetic field with a strength of B is a function of the radius of the ion's motion, r, and its charge

[Note: corrected; the source prints "In discussing the magnetric sector" where this reads "In discussing the magnetic sector". A typo.]

v = Bzer/m

Solving for the ratio v/r gives the ion's cyclotron frequency, wc, as

wc = v/r = zeB/m

When an ion moving in a circular orbit, as shown by the smaller of the two circular orbits in Figure 20.3.8a, absorbs energy equal to its cyclotron frequency, wc, its velocity, v, and the radius of its orbit, r both increase to maintain a constant value for wc; the result is an ion that moves in a circular orbit of greater radius. As wc depends on the mass-to-charge ratio, all ions of equal m/z experience the same change in their orbit, while ions with other mass-to-charge ratios are unaffected. Ions in the larger orbits eventually return to their original circular orbit as a result of collisions in which they lose energy.

Figure 20.3.8: Illustration of how an ICR mass analyzer works. In (a) an ion originally in a circular orbit with a small radius, shown in blue moves into a circular orbit with a larger radius, shown in green when it absorbs energy equal to its cyclotron frequency, wc, following the path shown in pink. The ICR cell in (b) consists of two transmitter plates that apply the potential that alters each ion's orbit, and two receiver plates that measure the current generated by the ions; there are two additional plates, one in front and one in back, that provide an entrance for bringing ions into the ICR cell from the ion source and for removing the ions in preparation for the next sample. The signal in (c) decays with time as the ions lose energy through collisions.
Illustration of how an ICR mass analyzer works.

The trap itself, as seen in Figure 20.3.8b, is defined by two pairs of plates (four in all). The transmitter plates are used to apply the potential that alters the orbits of the ions. Movement of the ions generates a current in the receiver plates that serves as the signal, as seen in Figure 20.3.8c, that is positive when the ion is closer to one receiver plate and negative when it is closer to the other receiver plate. The initial magnitude of the current is proportional to the number of ions with the mass-to-charge ratio.

The ion cyclotron resonance analyzer is usually operated by applying a short pulse of energy that varies linearly in its frequency. This sets all ions into motion, with each mass-to-charge ratio yielding a current response similar to that in Figure 20.3.8c. Collectively, these individual current-time curves gives a time domain spectrum that we can convert into a frequency domain spectrum by taking the Fourier transform. The frequency domain spectrum yields the mass spectrum through Equation (icr2). FT-ICR instruments are capable of achieving resolutions of 1,000,000.

[Note: corrected; the source prints "that we can covert into" where this reads "that we can convert into". A typo.]
