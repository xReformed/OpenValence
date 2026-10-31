---
title: "9.1: Sample Atomization Techniques"
book: "Instrumental Analysis (LibreTexts)"
chapter: "9: Atomic Absorption Spectrometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/09%3A_Atomic_Absorption_and_Atomic_Fluorescence_Spectrometry/9.01%3A_Sample_Atomization_Techniques"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

The process of converting an analyte to a free gaseous atom is called atomization. Converting an aqueous analyte into a free atom requires that we strip away the solvent, volatilize the analyte, and, if necessary, dissociate the analyte into free atoms. Desolvating an aqueous solution of CuCl2, for example, leaves us with solid particulates of CuCl2. Converting the particulate CuCl2 to gas phase atoms of Cu and Cl requires thermal energy.

[Note: corrected; the source prints "to gas phases atoms" where this reads "to gas phase atoms". A typing error.]

CuCl2(aq) → CuCl2(s) → Cu(g) + 2Cl(g)

There are two common atomization methods: flame atomization and electrothermal atomization, although a few elements are atomized using other methods.

## Flame Atomization

Figure 9.1.1 shows a typical flame atomization assembly with close-up views of several key components. In the unit shown here, the aqueous sample is drawn into the assembly by passing a high-pressure stream of compressed air past the end of a capillary tube immersed in the sample. When the sample exits the nebulizer it strikes a glass impact bead, which converts it into a fine aerosol mist within the spray chamber. The aerosol mist is swept through the spray chamber by the combustion gases—compressed air and acetylene in this case—to the burner head where the flame’s thermal energy desolvates the aerosol mist to a dry aerosol of small, solid particulates. The flame’s thermal energy then volatilizes the particles, producing a vapor that consists of molecular species, ionic species, and free atoms.

Figure 9.1.1: Flame atomization assembly with expanded views of (a) the burner head showing the burner slot where the flame is located; (b) the nebulizer’s impact bead; and (c) the interior of the spray chamber. Although the unit shown here is from an instrument dating to the 1970s, the basic components of a modern flame AA spectrometer are the same.
Photograph of flame atomization assembly with expanded views of its components.

[Note: corrected; the source prints "expanded views of it components" where this reads "expanded views of its components". A typing error in the alt text.]

Burner. The slot burner in Figure 9.1.1a provides a long optical pathlength and a stable flame. Because absorbance is directly proportional to pathlength, a long pathlength provides greater sensitivity. A stable flame minimizes uncertainty due to fluctuations in the flame.

The burner is mounted on an adjustable stage that allows the entire assembly to move horizontally and vertically. Horizontal adjustments ensure the flame is aligned with the instrument’s optical path. Vertical adjustments change the height within the flame from which absorbance is monitored. This is important because two competing processes affect the concentration of free atoms in the flame. The more time an analyte spends in the flame the greater the atomization efficiency; thus, the production of free atoms increases with height. On the other hand, a longer residence time allows more opportunity for the free atoms to combine with oxygen to form a molecular oxide. As seen in Figure 9.1.2, for a metal that is easy to oxidize, such as Cr, the concentration of free atoms is greatest just above the burner head. For a metal, such as Ag, which is difficult to oxidize, the concentration of free atoms increases steadily with height.

[Note: corrected; the source prints "for a metal this is easy to oxidize" where this reads "for a metal that is easy to oxidize". A typing error; "that" introduces the relative clause, as "which is difficult to oxidize" does for Ag.]

Figure 9.1.2: Absorbance versus height profiles for Ag and Cr in flame atomic absorption spectroscopy.
Absorbance versus height profiles for Ag and Cr in flame atomic absorption spectroscopy.

Flame. The flame’s temperature, which affects the efficiency of atomization, depends on the fuel–oxidant mixture, several examples of which are listed in Table 9.1.1. Of these, the air–acetylene and the nitrous oxide–acetylene flames are the most popular. Normally the fuel and oxidant are mixed in an approximately stoichiometric ratio; however, a fuel-rich mixture may be necessary for easily oxidized analytes.

Table 9.1.1. Fuels and Oxidants Used for Flame Combustion

| fuel | oxidant | temperature range (^oC) |
| --- | --- | --- |
| natural gas | air | 1700–1900 |
| hydrogen | air | 2000–2100 |
| acetylene | air | 2100–2400 |
| acetylene | nitrous oxide | 2600–2800 |
| acetylene | oxygen | 3050–3150 |

Figure 9.1.3 shows a cross-section through the flame, looking down the source radiation’s optical path. The primary combustion zone usually is rich in gas combustion products that emit radiation, limiting its usefulness for atomic absorption. The interzonal region generally is rich in free atoms and provides the best location for measuring atomic absorption. The hottest part of the flame typically is 2–3 cm above the primary combustion zone. As atoms approach the flame’s secondary combustion zone, the decrease in temperature allows for formation of stable molecular species.

[Note: corrected; the source prints "limiting is useful- ness" where this reads "limiting its usefulness". A typing error and a line-break hyphen left in the text.]

Figure 9.1.3: Profile of typical flame using a slot burner. The relative size of each zone depends on many factors, including the choice of fuel and oxidant, and their relative proportions.
Profile of typical flame using a slot burner.

Sample Introduction. The most common means for introducing a sample into a flame atomizer is a continuous aspiration in which the sample flows through the burner while we monitor absorbance. Continuous aspiration is sample intensive, typically requiring from 2–5 mL of sample.

Flame microsampling allows us to introduce a discrete sample of fixed volume, and is useful if we have a limited amount of sample or when the sample’s matrix is incompatible with the flame atomizer. For example, continuously aspirating a sample that has a high concentration of dissolved solids—sea water, for example, comes to mind—may build-up a solid deposit on the burner head that obstructs the flame and that lowers the absorbance. Flame microsampling is accomplished using a micropipet to place 50–250 μL of sample in a Teflon funnel connected to the nebulizer, or by dipping the nebulizer tubing into the sample for a short time. Dip sampling usually is accomplished with an automatic sampler. The signal for flame microsampling is a transitory peak whose height or area is proportional to the amount of analyte that is injected.

[Note: corrected; the source prints "a solid de- posit" where this reads "a solid deposit". A line-break hyphen left in the text.]

Advantages and Disadvantages of Flame Atomization. The principal advantage of flame atomization is the reproducibility with which the sample is introduced into the spectrophotometer; a significant disadvantage is that the efficiency of atomization is quite poor. There are two reasons for poor atomization efficiency. First, the majority of the aerosol droplets produced during nebulization are too large to be carried to the flame by the combustion gases. Consequently, as much as 95% of the sample never reaches the flame, which is the reason for the waste line shown at the bottom of the spray chamber in Figure 9.1.1. A second reason for poor atomization efficiency is that the large volume of combustion gases significantly dilutes the sample. Together, these contributions to the efficiency of atomization reduce sensitivity because the analyte’s concentration in the flame may be a factor of 2.5 × 10^−6 less than that in solution [Ingle, J. D.; Crouch, S. R. Spectrochemical Analysis, Prentice-Hall: Englewood Cliffs, NJ, 1988; p. 275].

## Electrothermal Atomization

A significant improvement in sensitivity is achieved by using the resistive heating of a graphite tube in place of a flame. A typical electrothermal atomizer, also known as a graphite furnace, consists of a cylindrical graphite tube approximately 1–3 cm in length and 3–8 mm in diameter. As shown in Figure 9.1.4, the graphite tube is housed in a sealed assembly that has an optically transparent window at each end. A continuous stream of inert gas is passed through the furnace, which protects the graphite tube from oxidation and removes the gaseous products produced during atomization. A power supply is used to pass a current through the graphite tube, resulting in resistive heating.

[Note: corrected; the source prints "housed in an sealed" where this reads "housed in a sealed". A typing error.]

Figure 9.1.4: Diagram showing a cross-section of an electrothermal atomizer, which also is known as a graphite furnace.
Diagram showing a cross-section of an electrothermal atomizer.

Samples of between 5–50 μL are injected into the graphite tube through a small hole at the top of the tube. Atomization is achieved in three stages. In the first stage the sample is dried to a solid residue using a current that raises the temperature of the graphite tube to about 110^oC. In the second stage, which is called ashing, the temperature is increased to between 350–1200^oC. At these temperatures organic material in the sample is converted to CO2 and H2O, and volatile inorganic materials are vaporized. These gases are removed by the inert gas flow. In the final stage the sample is atomized by rapidly increasing the temperature to between 2000–3000^oC. The result is a transient absorbance peak whose height or area is proportional to the absolute amount of analyte injected into the graphite tube. Together, the three stages take approximately 45–90 s, with most of this time used for drying and ashing the sample.

Electrothermal atomization provides a significant improvement in sensitivity by trapping the gaseous analyte in the small volume within the graphite tube. The analyte’s concentration in the resulting vapor phase is as much as 1000 × greater than in a flame atomization [Parsons, M. L.; Major, S.; Forster, A. R. Appl. Spectrosc. 1983, 37, 411–418]. This improvement in sensitivity—and the resulting improvement in detection limits—is offset by a significant decrease in precision. Atomization efficiency is influenced strongly by the sample’s contact with the graphite tube, which is difficult to control reproducibly.

## Specialized Atomization Techniques

A few elements are atomized by using a chemical reaction to produce a volatile product. Elements such as As, Se, Sb, Bi, Ge, Sn, Te, and Pb, for example, form volatile hydrides when they react with NaBH4 in the presence of acid. An inert gas carries the volatile hydride to either a flame or to a heated quartz observation tube situated in the optical path. Mercury is determined by the cold-vapor method in which it is reduced to elemental mercury with SnCl2. The volatile Hg is carried by an inert gas to an unheated observation tube situated in the instrument’s optical path.

## Flame or Electrothermal Atomization?

The most important factor in choosing a method of atomization is the analyte’s concentration. Because of its greater sensitivity, it takes less analyte to achieve a given absorbance when using electrothermal atomization. Table 9.1.2 which compares the amount of analyte needed to achieve an absorbance of 0.20 when using flame atomization and electrothermal atomization, is useful when selecting an atomization method. For example, flame atomization is the method of choice if our samples contain 1–10 mg Zn^2+/L, but electrothermal atomization is the best choice for samples that contain 1–10 μg Zn^2+/L.

Table 9.1.2. Concentration of Analyte (in mg/L) That Yields an Absorbance of 0.20

| element | flame atomization | electrothermal atomization |
| --- | --- | --- |
| Ag | 1.5 | 0.0035 |
| Al | 40 | 0.015 |
| As | 40 | 0.050 |
| Ca | 0.8 | 0.003 |
| Cd | 0.6 | 0.001 |
| Co | 2.5 | 0.021 |
| Cr | 2.5 | 0.0075 |
| Cu | 1.5 | 0.012 |
| Fe | 2.5 | 0.006 |
| Hg | 70 | 0.52 |
| Mg | 0.15 | 0.00075 |
| Mn | 1 | 0.003 |
| Na | 0.3 | 0.00023 |
| Ni | 2 | 0.024 |
| Pb | 5 | 0.080 |
| Pt | 70 | 0.29 |
| Sn | 50 | 0.023 |
| Zn | 0.3 | 0.00071 |
| Source: Varian Cookbook, SpectraAA Software Version 4.00 Pro. As: 10 mg/L by hydride vaporization; Hg: 11.5 mg/L by cold-vapor; and Sn:18 mg/L by hydride vaporization |  |  |

[Note: the footnote's values for As, Hg and Sn by hydride and cold-vapor methods are given as printed, in mg/L, but they are almost certainly μg/L: hydride generation and cold-vapor atomization are far more sensitive than flame atomization, yet in mg/L the cold-vapor value for Hg (11.5 mg/L) would be some twenty times less sensitive than electrothermal atomization (0.52 mg/L) and the hydride value for As (10 mg/L) only four times better than the flame (40 mg/L).]
