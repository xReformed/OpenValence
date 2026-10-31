---
title: "21.2: Spectroscopic Surface Methods"
book: "Instrumental Analysis (LibreTexts)"
chapter: "21: Surface Characterization by Spectroscopy and Microscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/21%3A_Surface_Characterization_by_Spectroscopy_and_Microscopy/21.02%3A_Spectroscopic_Surface_Methods"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

In this section we consider three representative surface analytical methods: X-ray photoelectron spectroscopy, in which the input is a beam of X-ray photons and the output is electrons; Auger electron spectroscopy, in which the input is either a beam of electrons or of X-ray photons and the output is electrons; and secondary-ion mass spectrometry, in which the input is a beam of ions and the output is ions.

## X-Ray Photoelectron Spectroscopy (XPS)

In X-ray photoelectron spectroscopy, which is also known as electron spectroscopy for chemical analysis (ESCA), we measure the kinetic energy of electrons ejected from a sample following the absorption of X-ray photons. The resulting spectrum is a count of these emitted electrons as a function of their energy.

### Principles of XPS

We can explain the origin of X-ray photoelectron spectroscopy using the photoelectric effect. Figure 21.2.1a shows the energy level diagram for an element's 1s, 2s, and 2p core-level electrons along with their KLM designations (see Chapter 12.1 for a previous discussion of this way of designating electrons). A nearly monoenergetic X-ray beam of known energy is focused on the sample, which results in the ejection of a core-level photoelectron, as shown in Figure 21.2.1b. The kinetic energy of this emitted electron, E_KE, is related to its binding energy to the nucleus, E_BE, by the equation

E_KE = hν − E_BE − Φw

[Note: corrected; the source prints "E_EB" where this reads "E_BE". The binding energy is written E_BE in the sentence before the equation.]

where hν is the energy of the X-ray photon and Φw is the spectrometer's work function (the energy needed to remove the electron from the surface and into the vacuum). The most common sources of X-rays are the Mg Kα line with an energy of 1253.6 eV or the Al Kα line with an energy of 1486.6 eV.

The core-level vacancy created by the photoelectron leaves the atom with an unstable electron configuration. Relaxation to the ground state occurs when this vacancy is filled by an electron from a higher energy shell, with the excess energy released as either the emission of a second electron or the fluorescent emission of a characteristic X-ray, as seen in Figure 21.2.1c. The secondary electron in Figure 21.2.1c is called an Auger electron.

Figure 21.2.1: Energy level diagrams for X-ray photoelectron spectroscopy. In (a) we see the 1s, 2s, and 2p electrons along with their KLM designations. When a photon of sufficient energy is absorbed by the sample (b), a core-level electron is ejected as a photoelectron leaving an unstable electron configuration in which there is a vacancy in the 1s orbital. In (c) an electron from a higher energy orbital moves into the vacancy created by the initial photon with the remaining energy released as a secondary electron or as an X-ray photon.
Energy level diagrams for X-ray photoelectron spectroscopy.

Figure 21.2.2 provides an example of an XPS survey spectrum for aluminum oxide, Al2O3, using the Kα line for aluminum as the source of X-rays. The peak table gives the binding energies of the peaks for aluminum and for oxygen using the Kα for Al and, for comparison, the Kα line for Mg. Note the difference in how the major peaks are labeled. The photoelectrons ejected in the process shown in Figure 21.2.1b are designated by the element and the ns notation that specifies the orbital from which the electron was ejected. Auger electrons are designated using the KLM notation, specifying the initial vacancy created by the absorbed photon, the source of the electron that fills that vacancy, and the source of the ejected Auger electron. The O_KLL peak in this spectrum is consistent with the scheme shown in Figure 21.2.1c. When the source of the second and third electrons is from the valence shell, then notation is sometimes written as KVV; the O_KLL peak here could be designated as O_KVV.

[Note: corrected; the source prints "valance shell" where this reads "valence shell". A misspelling.]

Figure 21.2.2: The XPS spectrum for Al2O3 using the Al Kα line, with the major peaks labeled. A spectrum such as this, which spans a wide range of energies, is called a survey spectrum. The source of each peak is shown above or next to the spectrum's peaks. The peak table provides the binding energies for aluminum and for oxygen using both the Kα for Al and the Kα for Mg. The original data used to create this figure is from the xpslibrary.
The XPS spectrum for aluminum oxide using the Al K-alpha line, with the major peaks labeled. A spectrum such as this, which spans a wide range of energies, is called a survey spectrum.

There are a few additional interesting features to note in the survey spectrum for Al2O3. One is the presence of a peak for carbon even though the sample, Al2O3, does not contain carbon. The prevalence of carbon in the atmosphere means that trace levels of carbon appear in almost all XPS spectra.

A second feature is the increase in the signal on the high binding energy (low kinetic energy) side of peaks, which is particularly visible here for the O1s peak, the C1s peak, and the Al2s peak. The source of this background is electrons that fail to escape the sample without undergoing inelastic collisions that result in a loss of kinetic energy and, given Equation (xps1), are recorded as if they have a larger than expected binding energy. Because X-rays penetrate more deeply into the sample than the depth from which electrons can travel without undergoing an inelastic collision, this background is unavoidable. Note that the background is more significant at higher binding energies (smaller kinetic energies).

[Note: corrected; the source prints "O1s peak the C1s peak" where this reads "O1s peak, the C1s peak". The comma separating the first two items of the list is missing.]

A third feature is that the binding energy of an XPS peak is independent of the X-ray source, but the binding energy for an Auger peak varies with the X-ray source's energy (see table in Figure 21.2.2). The kinetic energy of the O1s, Al2s, and Al2p photoelectrons is the difference between the energy of the X-ray photon, hν, and each electron's binding energy, BE; if we change the X-ray source, then hν and KE increase in value, but the BE remains fixed. For the O_KLL Auger electron, the kinetic energy depends on the difference in the binding energies of the three electrons involved

KE ≈ BEK − BEL − BEL

and is, therefore, independent of the energy of the X-ray source. Given Equation (xps1), if the KE remains constant, then an increase in the energy of the X-ray photon, hν, means that the apparent BE must increase. This shift in binding energy when using a different source is one way to identify a peak as resulting from Auger electrons.

### Instrumentation

The basic instrumentation for XPS is shown in Figure 21.2.3. The most common X-ray sources, as noted above, are Mg (1253.6 eV) and Al (1486.6 eV), which have the advantage of relatively narrow line-widths (0.7 and 0.9 eV, respectively) and, therefore, a relatively narrow range of energies. Higher energy sources are available, such as Ag (2984.4 eV), but at the cost of a wider line-width (2.6 eV). A system of electron lenses collects and focuses the ejected electrons onto the entrance slit of a hemispherical analyzer. The path of an electron through the analyzer depends upon its kinetic energy. By varying the potentials applied to the hemispherical analyzer's inner and outer plates, electrons of different kinetic energies reach the detector. A sputtering gun is an optional feature that can be used to clean the surface of the sample or to remove successive layers of the sample, allowing for the gathering of spectra at various depths within the sample. Calibration of the spectrometer's binding energy scale, which accounts for the spectrometer's work function, is made using specific lines for one or more conductive metals; examples include Au 4f7/2 at 83.95 eV and Cu 2p3/2 at 932.63 eV. The peak for carbon that appears in almost all XPS spectra provides an additional way to check the calibration of the binding energy scale.

[Note: corrected; the source prints "1486.6 ev)" where this reads "1486.6 eV)"; the source prints "2984.4 ev)" where this reads "2984.4 eV)"; the source prints "932.63 ev." where this reads "932.63 eV.". The unit symbol for the electronvolt is eV, as elsewhere in the paragraph.]

Figure 21.2.3: Schematic diagram of the basic instrumentation for X-ray photoelectron spectroscopy: an X-ray source for generating photoelectrons; a sputtering gun for cleaning the sample's surface or for removing layers of the sample; a set of electron lenses for collecting and focusing the photoelectrons; a hemispherical analyzer for isolating electrons by their kinetic energies; and a transducer to count electrons. The entire instrument is held under a vacuum.
Schematic diagram of the basic instrumentation for X-ray photoelectron spectroscopy: an X-ray source for generating photoelectrons; a sputtering gun for cleaning the sample's surface or for removing layers of the sample; a set of electron lenses for collecting and focusing the photoelectrons; a hemispherical analyzer for isolating electrons by their kinetic energies; and a transducer to count electrons. The entire instrument is held under a vacuum.

### Applications

X-ray photoelectron spectroscopy is a particularly useful tool for determining the composition and structure of a sample. XPS also can provide information about how the composition of a sample varies with depth and quantitative information about a sample's components.

Qualitative Analysis. One of the strengths of X-ray photoelectron spectroscopy is the ability to determine the elements that make up a sample's surface. Figure 21.2.4 shows a survey scan from 0 eV to 1100 eV of a ceramic material. In addition to the O1s peak, we see strong peaks for Si and Al—probably an aluminosilicate ceramic—and small peaks for a variety of elements: La, Ba, Mn, Sn, Ca, Cl, P, and Mg. NIST maintains an extensive, and searchable, database of XPS peaks that help in identifying the elements in a sample.

Figure 21.2.4: X-ray photoelectron survey spectrum for an unidentified ceramic material showing the peak assignments, which include major elements that we might reasonably expect from a ceramic (oxygen, magnesium, aluminum, calcium, and silicon) and a variety of trace elements (lanthanum, barium, manganese, tin, chlorine, and phosphorus). The original data used to create this figure is from the xpslibrary.
X-ray photoelectron survey spectrum for an unidentified ceramic material showing the peak assignments, which include major elements that we might reasonably expect from a ceramic (oxygen, magnesium, aluminum, calcium, and silicon) and a variety of trace elements (lanthanum, barium, manganese, tin, chlorine, and phosphorus).

[Note: corrected; the source prints "lanthinum" where this reads "lanthanum"; the source prints "phosphorous" where this reads "phosphorus"; the source prints "lanthinum" where this reads "lanthanum"; the source prints "phosphorous" where this reads "phosphorus". Misspellings of the element names, in both the caption and its alt text.]

Chemical Shifts. An element's binding energy is sensitive to its chemical environment, particularly with respect to oxidation states and structure. For example, Table 21.2.1 provides the binding energy for chlorine's 2p line in three potassium salts drawn from the NIST database with all values from the same literature source. Using KCl, in which chlorine has an oxidation state of –1, as a baseline, the Cl 2p peak for KClO3 is shifted by +8.4 eV and the Cl 2p peak for KClO4 is shifted by +10.3 eV. The direction of the shift makes sense, as we expect that it will require more energy to remove an electron from an element that has a more positive oxidation state.

Table 21.2.1. Binding energies for the Cl 2p XPS peak as a function of chlorine's oxidation state.

| compound | oxidation state for chlorine | binding energy (eV) for Cl 2p line | ΔBE relative to KCl |
| --- | --- | --- | --- |
| KCl | –1 | 198.1 | — |
| KClO3 | +5 | 206.5 | +8.4 |
| KClO4 | +7 | 208.4 | +10.3 |

Chemical shifts also reflect changes in chemical structure. Figure 21.2.5, for example, shows a high resolution scan for the oxygen 1s peak for the same sample of aluminum oxide, Al2O3, in Figure 21.2.2. The surface of a metal oxide often has three distinct sources of oxygen: oxides, which make up the bulk of the sample, hydroxides that form at the surface following the chemisorption of water, and water that is physically adsorbed to the surface. Curve-fitting of the raw data shows the contribution of each type of oxygen to the raw data and, through the peak areas, their relative abundance.

[Note: corrected; the source prints "oxygen 2p peak for same sample" where this reads "oxygen 1s peak for the same sample"; the source prints "Al2O3, in Figure 21.2.1" where this reads "Al2O3, in Figure 21.2.2"; the source prints "physically absorbed to" where this reads "physically adsorbed to". The oxide, hydroxide and water components are resolved in the O 1s core-level peak (O 2p is a valence level); the survey spectrum of this Al2O3 sample is Figure 21.2.2, Figure 21.2.1 being the energy level diagram; and water held on a surface is adsorbed.]

Figure 21.2.5: The results of curve-fitting to determine the relative contribution of different sources of oxygen—oxides, hydroxides, and water—to the O1s peak for aluminum oxide. The original data used to create this figure is from the xpslibrary.
The results of curve-fitting to determine the relative contribution of different sources of oxygen—oxides, hydroxides, and water—to the O-1s peak for aluminum oxide.

[Note: corrected; the source prints "O2p peak" where this reads "O1s peak"; the source prints "O-2p peak" where this reads "O-1s peak". The curve-fit separating oxide, hydroxide and water oxygen is of the O 1s core-level peak; see the note on the paragraph above.]

Wagner Plots. Both the binding energy of an X-ray photoelectron and the kinetic energy of an Auger electron convey information about the element from which the electrons were emitted. A Wagner plot shows both the binding energy for a photoelectron that leaves a particular core-level vacancy and the kinetic energy of the Auger electron whose origin arises from the filling of this core-level vacancy. Figure 21.2.6 shows an example of a Wagner plot for copper based on its 2p3/2 X-ray photoelectron and its LMM Auger electron. The diagonal lines are called the modified Auger parameter, which is defined as the sum of the XPS binding energy and the AES kinetic energy. Values for 20 compounds are included in this plot. Of interest here is the clustering of the individual compounds. For example, all of the samples for which copper has an oxidation state of +1 (shown as magenta squares) have similar binding energies between 932 eV and 933 eV, but with more variable kinetic energies, which range from 914 eV to 917 eV. Most of the compounds in which copper has an oxidation state of +2 (shown as blue diamonds) have modified Auger parameters between approximately 1850 eV and 1851 eV, although there is significant variation in their individual binding energies and kinetic energies. The two metals (shown as green circles) and the compounds CuS and CuSe occupy a similar space within the Wagner plot. Interestingly, both CuS and CuSe are transition metal chalcogenides and have semiconducting properties.

[Note: corrected; the source prints "signifiant" where this reads "significant"; the source prints "the commpounds CuS" where this reads "the compounds CuS". Misspellings.]

Figure 21.2.6: Wagner plot for 20 copper compounds. The raw data is from https://srdata.nist.gov/xps/Default.aspx and includes 140 measurements of binding energies and 99 measurements of kinetic energies. Compounds are identified by the oxidation state of copper.
Wagner plot for 20 copper compounds.

Information at Depth. X-rays penetrate into a sample to a depth that is greater than the distance the photoelectron can travel without losing energy to inelastic collisions. We can take advantage of this to vary the depth from which we gather information. Figure 21.2.7 shows how this is accomplished by changing the angle from which we collect and analyze photoelectrons. The length of the solid black line is the distance an electron can travel without losing energy in an inelastic collision. When the detector is placed at 90° to the sample's surface, the sampling depth is at its greatest. Adjusting the detector so that it is at 30° to the surface, results in its detecting electrons from a depth that is just half of that when the detector is at 90°.

Figure 21.2.7: Illustration showing the measurement of the photoelectron's angle of emission. See text for explanation for how this affects sampling depth.
Illustration showing the measurement of the photoelectron's angle of emission.

Quantitative Analysis. The intensity of an XPS peak—either its peak height or its peak area—is proportional to the number of atoms of the element responsible for the peak. This allows for determining the relative concentration, Cx, of an element in a sample; thus

[Note: corrected; the source prints "either is peak height" where this reads "either its peak height". A typo.]

Cx = (Ix/Sx)/(Σ(Ii/Si))

where Ix is the peak intensity for the element, Sx is the sensitivity factor for the element, and Ii and Si are the peak intensities and sensitivity factors for all the elements in the sample. Sensitivity factors account for differences in the ease with which photoelectrons are produced and escape from the sample. Published tables of sensitivity factors are available, although they may vary some from instrument-to-instrument. Sensitivity factors are referenced to a standard line, typically C1s, which is assigned a sensitivity factor of 1.00.

[Note: corrected; the source prints "for all other elements in the sample" where this reads "for all the elements in the sample". The sum in the denominator runs over every element detected, including x itself, so that the relative concentrations add to 1.]

In many cases we are interested only in the relative concentration of just two elements. In this case, we write Equation (xps3) as

(Cx)/(Cy) = (Ix/Sx)/(Iy/Sy)

where x and y are the two elements. For example, using the data in Figure 21.2.4, the Si2p peak has a height of 30 mm and the Al2p peak has a peak height of 20 mm. Their sensitivity factors are, respectively 0.817 and 0.737. Using these values, we find that

(C_Si)/(C_Al) = (30/0.817)/(20/0.737) = 1.4

there are approximately 1.4 × as many atoms of silicon as there are atoms of aluminum.

[Note: the sensitivity factor of 0.817 for Si 2p matches Scofield's photoionization cross-section relative to C 1s, but on that scale Al 2p is about 0.537, not 0.737; with 0.537 the ratio C_Si/C_Al comes out about 1.0 rather than 1.4. The book's arithmetic follows its printed 0.737, so the example is left as printed.]

## Auger Electron Spectroscopy (AES)

In Figure 21.2.1 we learned that following the ejection of a photoelectron from an atom's core, the now unstable atom releases energy by either emitting a secondary electron from a higher energy orbital or by releasing a photon. In XPS we measure the intensity of the ejected photoejected electrons as a function of their binding energy; in Auger spectroscopy we measure the intensity of these secondary electrons as a function of their kinetic energies.

[Note: corrected; the source prints "In Figure 21.2.2 we learned" where this reads "In Figure 21.2.1 we learned". The release of a secondary (Auger) electron or a photon is shown in Figure 21.2.1c; Figure 21.2.2 is the survey spectrum of Al2O3.]

The instrumentation for AES can be coupled with an XPS spectrometer or be a stand-alone instrument. In either case, the basic instrumentation is similar to that shown in Figure 21.2.3, although AES spectra are usually initiated using an electron gun as a source instead of an X-ray source. One advantage to using an electron gun is that it can be focused into a smaller beam and can then easily be rastered across a surface, allowing for imaging of the sample's surface. Depth profiling, using an ion beam to remove layers of the sample, is another common use of AES.

[Note: corrected; the source prints "can then easily rastered" where this reads "can then easily be rastered". The verb is missing.]

Figure 21.2.8 provides an example of a typical AES spectrum, in this case for the mineral calcite, CaCO3. The raw data, on the left, shows the intensity of the signal as a count of electrons with a particular kinetic energy. The large background signal is from electrons that lose kinetic energy as the result of inelastic collisions. The two broad features between approximately 100 eV and 600 eV are the Auger peaks for calcium and for oxygen. The peaks in this case are easy to see because the two analytes are present in bulk. For a trace-level analyte, the Auger peaks in a normal plot may be difficult to see. For this reason, Auger spectra are usually presented by plotting the derivative of the raw data giving the spectrum on the right.

Figure 21.2.8: AES spectrum for the mineral calcite, CaCO3. The figure on the left shows the spectrum as initially recorded and the figure on the right shows the data after taking the derivative of counts as a function of energy. The original data used to create this figure is from the xpslibrary.
AES spectrum for the mineral calcite. The figure on the left shows the spectrum as initially recorded and the figure on the right shows the data after taking the derivative of counts as a function of energy.

[Note: corrected; the source prints "create thid figure" where this reads "create this figure". A typo.]

Figure 21.2.9 provides an example of how AES is used to study changes in the composition of a single crystal of CaCO3 that was allowed to equilibrate with a solution containing Mg^2+ ions. The sample was mounted on a sample probe and the AES spectrum recorded. An Ar^+ ion beam was used to remove layers of the sample while the spectrometer was used to record spectra of the sample. As expected, the surface is enriched in Mg^2+ ions that diffused into the crystal with the relative concentration of Mg^2+ decreasing. The relative abundance of Ca^2+ increases with depth; the relative concentration of oxygen remains more or less constant with depth.

Figure 21.2.9: Depth profiles for calcium, oxygen, and magnesium in a sample of CaCO3 that was suspended in a solution of Mg^2+ ion. The shading for each element shows the relative abundance of the element with depth. See Mucci, A.; Morse, J. W.; Kaminsky, M. S. "Auger Spectroscopy Analysis of Magnesian Calcite Overgrowths Precipitated From Seawater and Solutions of Similar Composition," Am. J. Sci. 1985, 289-305 for the paper suggesting this figure.
Depth profiles for calcium, oxygen, and magnesium in a sample of calcium carbonate that was suspended in a solution of magnesium ions. The shading for each element shows the relative abundance of the element with depth.

[Note: corrected; the source prints "solution of Mg2+ ion" where this reads "solution of Mg^2+ ion". The charge is printed on the line rather than as a superscript, unlike Mg^2+ in the text above.]

## Secondary-Ion Mass Spectrometry (SIMS)

In SIMS we bombard the surface of a sample with an energetic primary beam—typically 5-20 keV—of an ion, such as Ar^+, O2^+, or Cs^+. The primary ion penetrates the sample's surface, ejecting a variety of particles, including neutral atoms, electrons, and, more importantly, secondary ions (singly-charged or multiply charged cations and anions, and clusters of ions). These secondary ions are characterized by their mass-to-charge ratios and by their kinetic energies. The use of a primary ion beam of Cs^+ favors the formation of secondary ions that are anions, and a primary beam of O2^+ favors the formation of secondary ions that are cations.

The instrumentation for SIMS includes an ion gun for generating the primary beam and a mass spectrometer for analyzing the secondary ions. In static mode, the primary ion beam is run using a low current density that minimizes the extent to which the sample's outermost layers are removed. In dynamic mode, the primary beam is run at a higher current density that removes more of the sample's surface. Dynamic SIMS is well suited to depth profiling. High mass resolution is obtained using a time-of-flight mass analyzer or a double-focusing mass analyzer; see Chapter 20 for a discussion of different types of mass analyzers.

SIMS is well suited for imaging as the positively charged primary ion can be rastered across the sample's surface. Figure 21.2.10 provides an example of imaging a surface using SIMS by measuring the yield of ^14N^12C ions while rastering the primary ion beam across a 10 µm × 10 µm section of the sample.

Figure 21.2.10: Image created using the R package lans2r ["lans2r: Work with Look at NanoSims Data in R", Sebastian Kopf, R package version 1.1.0, 2020]. The image shows the analysis of a 10 µm by 10 µm portion of a surface for the ^14N^12C ion, the two major isotopes of carbon and nitrogen. The bright areas have larger total ion counts.
Image created using the R package lans2r. The image shows the analysis of a 10 µm by 10 µm portion of a surface for the 14N12C ion, the two major isotopes of carbon and nitrogen. The bright areas have larger total ion counts.
