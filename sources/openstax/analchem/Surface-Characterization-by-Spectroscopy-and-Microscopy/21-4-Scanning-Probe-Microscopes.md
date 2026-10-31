---
title: "21.4: Scanning Probe Microscopes"
book: "Instrumental Analysis (LibreTexts)"
chapter: "21: Surface Characterization by Spectroscopy and Microscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/21%3A_Surface_Characterization_by_Spectroscopy_and_Microscopy/21.04%3A_Scanning_Probe_Microscopes"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

In the last section we considered how we can image a surface using an electron beam. In this section we consider a very different approach to developing an image of a surface, one in which we bring a probe close to the surface and examine how the probe interacts with the surface. One advantage of this approach is that the interaction between the probe and the surface can include attraction and repulsion, which opens up a third dimension to the image.

[Note: corrected; the source prints "in the last section" where this reads "In the last section". The sentence begins with a lower-case letter.]

## Scanning Tunneling Microscope (STM)

In the scanning tunneling microscope we take advantage of the ability of a current to pass through the gap between the tip of a conducting probe and a conducting sample when the probe and the sample are held at different potentials. Figure 21.4.1 shows the basic arrangement in which the probe has, ideally, a single atom at its tip. The tunneling current, It is given by

It = Ve^(−Cd)

where V is the applied voltage, d is the distance between the probe's tip and the sample, and C is a constant whose value depends upon the composition of the probe and the sample. The exponential decrease in the tunneling current with distance means that a small change in the position of probe's tip relative to the sample results in a significant change in the signal, providing vertical resolution on the order of 0.1 nm. Probes are fashioned using tungsten wires or platinum-iridium wires.

Figure 21.4.1: Illustration showing the relationship between the sample and the tip of the probe in scanning tunneling microscopy.
Illustration showing the relationship between the sample and the tip of the probe in scanning tunneling microscopy.

Scanning tunneling microscopy images are created by moving the probe back-and-forth across the sample while measuring the current. The signal is acquired in one of two modes: constant current or constant height. In constant current mode, the probe's tip is brought near the surface and the current measured, which establishes a setpoint. As the probe moves across the sample, it is raised or lowered to maintain the setpoint current. The result is a measure of the distance, d, between the probe's tip and the sample along the z-axis as a function of the xy position of the probe's tip. In constant height mode, the distance, d, between the probe's tip and the sample is held constant, and the current, It, is measured as a function of the xy position of the probe's tip. Constant height mode allows for faster data acquisition, but is limited to samples that have flat surfaces.

[Note: corrected; the source prints "The result is measure" where this reads "The result is a measure". The article is missing.]

Positioning of the sample and the probe's tip relative to each other is accomplished by either moving the probe or moving the sample. In either case, the control of movement is accomplished using a piezoelectric scanner. A piezoelectric material, as shown in Figure 21.4.2 experiences a change in its length when a dc potential is applied across its sides, either extending its length or contracting its length.

[Note: corrected; the source prints "movement in accomplished" where this reads "movement is accomplished". A typo.]

Figure 21.4.2: Illustration showing the behavior of a piezoelectric material when a dc potential is applied to it. The extension and contraction shown here are, of course, exaggerated.
Illustration showing the behavior of a piezoelectric material when a dc potential is applied to it. The extension and contraction shown here are, of course, exaggerated.

Figure 21.4.3 shows a configuration of cylindrical piezoelectric scanner in which the cylinder's upper half controls movement along the z-axis, and the cylinder's lower half is used to control movement along the x-axis, the y-axis, or both.

Figure 21.4.3: Illustration that shows the design of a piezoelectric scanner. The top half of the scanner controls movement along the z-axis and the lower half of the scanner controls movement along the x-axis and the y-axis. The piezoelectric material is shown in black, the positive electrodes in blue, and the ground in red.
Illustration that shows the design of a piezoelectric scanner. The top half of the scanner controls movement along the z-axis and the lower half of the scanner controls movement along the x-axis and the y-axis. The piezoelectric material is shown in black, the positive electrodes in blue, and the ground in red.

One limitation of STM is that the sample must be conductive. It is possible to image a non-conducting sample if it is first coated with a conductive material, such as gold, although such coatings can mask surface features.

[Note: corrected; the source prints "if it first coated" where this reads "if it is first coated". The verb is missing.]

## Atomic Force Microscope (AFM)

Unlike the scanning tunneling microscope, the atomic force microscope does not require a conducting sample and imaging is achieved without a current flowing between the sample and the tip of the probe. Instead, as shown in Figure 21.4.4, the probe is attached to the end of a flexible cantilever. The tip of the probe (see photograph in Figure 21.4.4) is pyramidal in shape and extends about 10 µm from its base on the cantilever. The tip of the probe has a diameter on the order of 10 nm and is made of silicon, Si, or silicon nitride, Si3N4. The cantilever typically is 100-500 µm in length. The probe is scanned across the sample's surface and the position of the probe relative to the surface is determined by reflecting the beam from a diode laser off the probe-end of the cantilever to a detector.

[Note: corrected; the source prints "photograph in Figure 21.4.3" where this reads "photograph in Figure 21.4.4". The SEM photograph of the cantilever and tip is the right-hand panel of Figure 21.4.4; Figure 21.4.3 is the piezoelectric scanner.]

[Image: The figure on the left illustrates how the position of the cantilever and the probe's tip is monitored in atomic force microscopy. The photo on the right shows an SEM image of a typical cantilever and probe tip.]

[Image: The figure on the left illustrates how the position of the cantilever and the probe's tip is monitored in atomic force microscopy. The photo on the right shows an SEM image of a typical cantilever and probe tip.]

Figure 21.4.4: The figure on the left illustrates how the position of the cantilever and the probe's tip is monitored in atomic force microscopy. The photo on the right shows an SEM image of a typical cantilever and probe tip. The photograph is released under a CC-BY license and is available here.

The force in atomic force is the interaction between the probe's tip and the sample, which may be a force of attraction or a force of repulsion. When the probe's tip is in contact with the sample—known as contact mode—there is a force of repulsion between them. Because the cantilever has a smaller force constant than the atoms in the probe's tip, the cantilever bends. Moving the sample stage to maintain a constant deflection of the laser off of the cantilever provides an image of the sample's surface. Contact mode allows for rapid scanning and works well for samples with rough surfaces, although it may damage samples with softer surfaces.

[Note: corrected; the source prints "and work well" where this reads "and works well". The verb agrees with "Contact mode".]

In non-contact mode, the probe's tip is brought close to the sample's surface, but not allowed to come into contact with it. The cantilever is placed into an oscillatory motion. The amplitude of this oscillation is proportional to the force of attraction between the probe's tip and the sample, which varies with the distance between the probe's tip and the sample. Moving the sample stage to maintain a constant oscillation provides an image of the sample's surface. Non-contact mode AFM generally provides lower resolution images, but is less damaging to the sample.

[Note: corrected; the source prints "is place into" where this reads "is placed into". A typo.]

A third mode for collecting data is called intermittent or tapping mode. In this mode the cantilever is set to oscillate at its resonant frequency with the probe's tip coming into contact with the sample's surface when it reaches the bottom of the cantilever's oscillation. The frequency of the oscillation is sensitive to the distance between the probe's tip and the sample. Moving the sample stage to maintain the resonant frequency provides an image of the sample's surface.

You can view a gallery of scanning tunneling microscopy images here, and a gallery of atomic force microscopy images here.
