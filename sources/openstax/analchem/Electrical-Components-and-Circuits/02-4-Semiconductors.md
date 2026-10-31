---
title: "2.4: Semiconductors"
book: "Instrumental Analysis (LibreTexts)"
chapter: "2: Electrical Components and Circuits"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/02%3A_Electrical_Components_and_Circuits/2.04%3A_Semiconductors"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

A semiconductor is a material whose resistivity to the movement of charge falls somewhere between that of a conductor, through which we can move a charge easily, and an insulator, which resists the movement of charge. Some semiconductors are elemental, such as silicon and germanium (both of which we examine more closely in this section) and some are multielemental, such as silicon carbide.

## Properties of Silicon and Germanium Semiconductors

A conductor, such as aluminum or copper, has a resistivity on the order of 10^−8 − 10^−6 Ω·m, which means that its resistance to the movement of electrons is sufficiently small that it carries a current without much effort. An insulator, such as the mineral quartz, SiO2, has a resistivity on the order of 10^15 − 10^19 Ω·m. Silicon, on the other hand, has a resistivity of approximately 640 Ω·m and germanium has a resistivity of about 0.46 Ω·m.

[Note: corrected; the source prints "germainum" where this reads "germanium". A spelling error.]

### Note

The inverse of resistivity is conductivity.

Silicon and germanium are in the same group as carbon. If we use a simplified view of atoms, we can treat silicon and germanium as having four valence electrons and an effective nuclear charge, Z_eff, of

(Z_eff)_Si = Z − number of core electrons

= 14 − 10

= +4

(Z_eff)_Ge = Z − number of core electrons

= 32 − 28

= +4

We can increase the conductivity of silicon and germanium by adding to them—this is called doping—a small amount of an impurity. Adding a small amount of In or Ga, which have three valence electrons instead of four valence electrons, leaves a small number of vacancies, or holes, in which an electron is missing. Adding a small amount of As or Sb, which have five valence electrons instead of four valence electrons, leaves a small number of extra electrons. Figure 2.4.1 shows all three possibilities.

Figure 2.4.1: Illustration showing a two-dimensional cross-section through (left) a single crystal of silicon or germanium; (middle) a single crystal of silicon or germanium doped with indium or gallium; and (right) a single crystal of silicon or germanium doped with arsenic or antimony. Doping with indium or gallium leaves a hole where an electron is missing, and doping with arsenic or antimony leaves an extra electron. Patterned after figures in Diefenderfer, A. J. Principles of Electronic Instrumentation, W. B. Saunders (1972).
Semiconductors.

If we apply a potential across the semiconductor doped with As or Sb, the extra electron moves toward the positive pole, creating a small current, and leaving behind a vacancy, or hole. If we apply a potential across the semiconductor doped with In or Ga, electrons enter the semiconductor from the negative pole, occupying the vacancies, or holes, and creating a small current. In both cases, electrons move toward the positive pole and holes move toward the negative pole. We call an As or Sb doped semiconductor an n-type semiconductor because the primary carrier of charge is an electron; we call an In or Ga doped semiconductor a p-type semiconductor because the primary carrier of charge is the hole.

[Note: corrected; the source prints "an p-type semiconductor" where this reads "a p-type semiconductor". A grammar error.]

## Semiconductor Diodes

A diode is an electrical device that is more conductive in one direction than in the opposite direction. A diode takes advantage of the properties of the junction between a p-type and an n-type semiconductor.

### Properties of pn Junctions

Let's use Figure 2.4.2 to make sense of how a semiconductor diode works. The figure is divided into two parts: the left side of the figure, parts (a), (b), and (c), show the behavior of the semiconductor diode when a forward bias is applied, and the right side of the figure, parts (d), (e), and (f), show its behavior when a reverse bias is applied. For both, the semiconductor diode consists of a junction between an n-type semiconductor, which has an excess of electrons and carries a negative charge, and a p-type semiconductor, which has an excess of holes and, thus, a positive charge; this is shown in (a) and (d). How the semiconductor is manufactured is not important to us.

[Note: corrected; the source prints "a foward bias" where this reads "a forward bias"; the source prints "a n-type semiconductor" where this reads "an n-type semiconductor"; the source prints "not of important to us" where this reads "not important to us". Spelling and grammar errors.]

Figure 2.4.2: The behavior of a semiconductor diode under forward bias and reverse bias, and symbol for a semiconductor diode. See the text for additional details.
Semiconductor diode under forward bias and reverse bias.

To effect a forward bias, we apply a positive potential to the p-type region and apply a negative potential to the n-type region. As we see in (b), the holes in the p-region move toward the junction and the electrons in the n-region move toward the junction as well. When holes and electrons meet they combine and are eliminated, which is why we see fewer holes and electrons in (c). Additional electrons flow into the n-region and electrons are pulled away from the p-region, as seen in (c), resulting in a current. To effect a reverse bias, we switch the applied potentials so that the p-region has the negative potential and the n-region has the positive potential. The result, as seen in (e) is a brief current as the holes and electrons move away from each other, leaving behind, in (f), a depletion zone that has essentially no electrons or holes.

[Note: corrected; the source prints "from each other. leaving behind" where this reads "from each other, leaving behind". The sentence continues after "each other"; the full stop is a typing error.]

### Current-Voltage Curves for Semiconductor Diodes

Figure 2.4.3 shows a plot of current as a function of voltage for a semiconductor diode. In forward bias mode the current increases exponentially with an increase in applied voltage, but remains at essentially zero when operated under a reverse bias. The use of a sufficiently large negative potential, however, does result in a sudden and dramatic increase in current; the potential at which this happens is called the breakdown voltage.

[Note: corrected; the source prints "in an sudden" where this reads "in a sudden". A grammar error.]

Figure 2.4.3: Current-voltage curve for a semiconductor diode under forward bias and under reverse bias.
Current voltage curve for a semiconductor diode under forward and reverse bias.
