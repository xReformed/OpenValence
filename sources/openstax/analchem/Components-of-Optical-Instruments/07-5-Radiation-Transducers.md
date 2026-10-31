---
title: "7.5: Radiation Transducers"
book: "Instrumental Analysis (LibreTexts)"
chapter: "7: Components of Optical Instruments"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/07%3A_Components_of_Optical_Instruments/7.05%3A_Radiation_Transducers"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

## Introduction

In Nessler’s original method for determining ammonia (see Section 7.3) the analyst’s eye serves as the detector, matching the sample’s color to that of a standard. The human eye, of course, has a poor range—it responds only to visible light—and it is not particularly sensitive or accurate. Modern detectors use a sensitive transducer to convert a signal consisting of photons into an easily measured electrical signal. Ideally the detector’s signal, S, is a linear function of the electromagnetic radiation’s power, P,

[Note: corrected; the source prints "(see Section 7.4)" where this reads "(see Section 7.3)". Nessler’s tubes are described in Section 7.3 (Figure 7.3.1); Section 7.4 is on sample containers.]

S = kP + D

where k is the detector’s sensitivity, and D is the detector’s dark current, or the background current when we prevent the source’s radiation from reaching the detector. There are two broad classes of spectroscopic transducers: photon transducers and thermal transducers, although we will subdivide the photon transducers given their rich variety. Table 7.5.1 provides several representative examples of each class of transducers.

Transducer is a general term that refers to any device that converts a chemical or a physical property into an easily measured electrical signal. The retina in your eye, for example, is a transducer that converts photons into an electrical nerve impulse; your eardrum is a transducer that converts sound waves into a different electrical nerve impulse.

Table 7.5.1. Examples of Transducers for Spectroscopy

| transducer | class | wavelength range | output signal |
| --- | --- | --- | --- |
| photovoltaic cell | photon | 350–750 nm | current |
| phototube | photon | 200–1000 nm | current |
| photomultiplier | photon | 110–1000 nm | current |
| Si photodiode | photon | 250–1100 nm | current |
| photoconductor | photon | 750–6000 nm | change in resistance |
| photovoltaic cell | photon | 400–5000 nm | current or voltage |
| thermocouple | thermal | 0.8–40 µm | voltage |
| thermistor | thermal | 0.8–40 µm | change in resistance |
| pneumatic | thermal | 0.8–1000 µm | membrane displacement |
| pyroelectric | thermal | 0.3–1000 µm | current |

## Photon Transducers

A photon transducer takes a photon and converts it into an electrical signal, such as a current, a change in resistance, or a voltage. Many such detectors use a semiconductor as the photosensitive surface. When the semiconductor absorbs photons, valence electrons move to the semiconductor’s conduction band, producing a measurable current.

### Photovoltaic Cells

A photovoltaic cell (Figure 7.5.1) consists of a thin film of a semiconducting material, such as selenium sandwiched between two electrodes: a base electrode of iron or copper and a thin semi-transparent layer of silver or gold that serves as the collector electrode. When a photon of visible light falls on the photovoltaic cell it generates an electron and a hole with a positive charge within the semiconductor. Movement of the electrons from the collector electrode to the base electrode generates a current that is proportional to the power of the incoming radiation and that serves as the signal.

Figure 7.5.1: Schematic diagram of a photovoltaic cell that consists of a semiconducting thin film of selenium placed between two electrodes. When a photon strikes the semiconductor, it generates an electron and a hole that carries a positive charge. The movement of the electron from the collector electrode to the base electrode generates a measurable current.
Schematic diagram of a photovoltaic cell.

[Note: corrected; the source prints "a measureable current" where this reads "a measurable current". A spelling error.]

### Phototubes and Photomultipliers

Phototubes and photomultipliers use a photosensitive surface that absorbs radiation in the ultraviolet, visible, or near IR to produce an electrical current that is proportional to the number of photons that reach the transducer (see Figure 7.5.2). The current results from applying a negative potential to the photoemissive surface and a positive potential to a wire that serves as the anode. In a photomultiplier tube, a series of positively charged dynodes serves to amplify the current, producing 10^6–10^7 electrons per photon.

[Image: Schematic diagram of a phototube.]

[Image: Schematic diagram of a photomultiplier tube.]

Figure 7.5.2: Schematic of a phototube (left) and a photomultiplier tube (right). In both, a photon strikes the photoemissive cathode producing electrons. In the phototube, the electrons are drawn toward a positively charged anode, generating a current. In the photomultiplier tube, the electrons accelerate toward a positively charged dynode. Collision of these electrons with the dynode generates additional electrons, which accelerate toward the next dynode. A total of 10^6–10^7 electrons per photon eventually reach the anode, generating an electrical current.

[Note: corrected; the source prints "Figure 7.5.2: .Schematic" where this reads "Figure 7.5.2: Schematic"; the source prints "the electrons that are drawn toward" where this reads "the electrons are drawn toward". A stray period after the figure label, and a relative clause that leaves the sentence without a verb.]

### Silicon Photodiodes

Applying a reverse biased voltage to the pn junction of a silicon semiconductor creates a depletion zone in which conductance is close to zero (see Chapter 2 for an earlier discussion of semiconductors). When a photon of light of sufficient energy impinges on the depletion zone, an electron-hole pair is formed. Movement of the electron through the n–region and of the hole through the p–region generates a current that is proportional to the number of photons reaching the detector. A silicon photodiode has a wide spectral range from approximately 190 nm to 1100 nm, which makes it versatile; however, a photodiode is less sensitive than a photomultiplier.

Figure 7.5.3: Illustration of silicon photodiode. See the text for a description of how the detector works.
Illustration of a silicon photodiode.

[Note: corrected; the source prints "how the deterctor works" where this reads "how the detector works". A spelling error.]

## Multichannel Photon Transducers

The photon transducers discussed above detect light at a single wavelength passed by the monochromator to the detector. If we wish to record a complete spectrum then we must continually adjust the monochromator either manually or by using a servo motor. In a multichannel instrument we create a one-dimensional or two-dimensional array of detectors that allow us to monitor simultaneously radiation spanning a broad range of wavelengths.

### Photodiode Arrays

An individual silicon photodiode is quite small, typically with a width of approximately 0.025 mm. As a result, a linear (one-dimensional) array that consists of 1024 individual photodiodes has a width of just 25.6 mm. Figure 7.5.4, for example, shows the UV detector from an HPLC. Light from the deuterium lamp passes through a flow cell, is dispersed by a diffraction grating, and then focused onto a linear array of photodiodes. The close-up on the right shows the active portion of the photodiode array covered by an optical window. The active width of this photodiode array is approximately 6 mm and includes more than 200 individual photodiodes, sufficient to provide 1 nm resolution from 180 nm to 400 nm.

[Note: corrected; the source prints "the active protion of" where this reads "the active portion of". A spelling error.]

Figure 7.5.4: The photo on the left shows the UV detector from an HPLC and the photo on the right shows a close-up view of its linear photodiode array detector. The bright line, from reflected light, is the photodiode array. The active portion of this detector is covered by an optically transparent window.
Photograph showing photodiode array detector.

[Note: corrected; the source prints "view of the its linear photodiode array deterctor" where this reads "view of its linear photodiode array detector". A doubled determiner and a spelling error.]

### Charge-Transfer Devices

One way to increase the sensitivity of a detector is to collect and store charges before counting them. This is the approach taken with two types of charge-transfer devices: charge-coupled detectors and charge-injection detectors. Individual detectors, or pixels, consist of a layer of silicon dioxide coated on top of semiconductor. When a photon impinges on the detector it creates an electron-hole pair. An electrode on top of the silicon dioxide layer collects and stores either the negatively charged electrons or the positively charged holes. After a sufficient time, during which 10,000-100,000 charges are collected, the total accumulated charge is measured. Because individual pixels are small, typically 10 µm, they can be arranged in either a linear, one-dimensional array or a two-dimensional array. A charge-transfer device with 1024 x 1024 pixels will be approximately 10 mm x 10 mm in size.

[Note: corrected; the source prints "charged-coupled detectors" where this reads "charge-coupled detectors". The device is a charge-coupled device (CCD), as the next paragraphs call it.]

### Note

There are two important charge-transfer devices used as detectors: a charge-coupled device (CCD), which is discussed below, and a charge-injection device (CID), which is discussed in Chapter 10. Both types of devices use two-dimensional arrays of individual detectors that store charge. The two devices differ primarily in how the accumulated charges are read.

[Note: corrected; the source prints "use a two-dimensional arrays" where this reads "use two-dimensional arrays". A grammar error.]

Figure 7.5.5 shows a cross-section of a single detector (pixel) in a charge-coupled device (CCD) where individual pixels are arranged in a two-dimensional array. Electron-hole pairs are created in a layer of p-doped silicon. The holes migrate to the n-doped silicon layer and the electrons are drawn to the area below a positively charged electrode. When it is time to record the accumulated charges, the charge is read in the upper-right corner of the array with charges in the same row measured by shifting them from left-to-right. When the first row is read, the charges in the remaining rows are shifted up and recorded. In a charge-injection device, the roles of the electrons and holes are reversed and the accumulated positive charges are recorded.

[Note: corrected; the source prints "accumulated positive charged are recorded" where this reads "accumulated positive charges are recorded". A typo.]

Figure 7.5.5: Schematic diagram of a charge-coupled device (CCD). The figure on the left shows a single detector, or pixel. When a photon impinges on the detector it generates an electron-hole pair in the p-doped layer. The electrons migrate and accumulate beneath a positively charged electrode. Individual pixels are arranged in an array, as shown on the right. This array may be a single row (a linear, or one-dimensional array) or in a series of rows. The charge in each pixel is recorded by shifting the pixels from left-to-right and by moving rows of pixels up.
Schematic diagram of a charge-coupled device (CCD)

[Note: corrected; the source prints "The charge in each pixels is" where this reads "The charge in each pixel is". A grammar error.]

Figure 7.5.6 shows an example of a spectrophotometer equipped with a linear CCD detector that includes 2048 individual elements with a wavelength range from 200 nm to 1100 nm. The spectrometer is housed in a compact space of 90 mm x 60 mm.

[Note: corrected; the source prints "shows an example of spectrophotometer" where this reads "shows an example of a spectrophotometer"; the source prints "of 90 mm x 60 mm" where this reads "of 90 mm x 60 mm.". A missing article, and the sentence has no closing period.]

Figure 7.5.6: Example of a spectrophotometer equipped with a linear CCD detector.
Example of a spectrophotometer equipped with a linear CCD detector.

## Thermal Transducers

Infrared photons do not have enough energy to produce a measurable current with a photon transducer. A thermal transducer, therefore, is used for infrared spectroscopy. The absorption of infrared photons increases a thermal transducer’s temperature, changing one or more of its characteristic properties. A pneumatic transducer, for example, is a small tube of xenon gas with an IR transparent window at one end and a flexible membrane at the other end. Photons enter the tube and are absorbed by a blackened surface, increasing the temperature of the gas. As the temperature inside the tube fluctuates, the gas expands and contracts and the flexible membrane moves in and out. Monitoring the membrane’s displacement produces an electrical signal.
