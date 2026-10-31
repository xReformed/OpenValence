---
title: "22.5: Currents in Electrochemical Cells"
book: "Instrumental Analysis (LibreTexts)"
chapter: "22: An Introduction to Electroanalytical Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/22%3A_An_Introduction_to_Electroanalytical_Chemistry/22.05%3A_Currents_in_Electrochemical_Cells"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

Most electrochemical techniques rely on either controlling the current and measuring the resulting potential, or controlling the potential and measuring the resulting current; only potentiometry (see Chapter 23) measures a potential under conditions where there is essentially no current. Understanding the relationship between current, i, and potential, E, is important. Although we learned in Sections 22.3 and 22.4 how to calculate electrode potentials and cell potentials using the Nernst equation, the experimentally measured potentials may differ from their thermodynamic values for a variety of reasons that we outline here.

[Note: corrected; the source prints "how to calculated" where this reads "how to calculate". A typo.]

## iR drop

The movement of an electrical charge in an electrochemical cell generates a potential, E_ir defined by Ohm's law

E_ir = iR

where i is the current and R is the solution's resistance. To account for this, we can include an additional term to the equation for the electrochemical cell's potential

E_cell = E_cathode − E_anode − E_ir = E_Nernst − iR

where E_Nernst is the potential from the Nernst equation. The resulting decrease in the potential from its idealized value is called the iR drop.

[Note: corrected; the source prints "decease" where this reads "decrease". A typo.]

## Polarization

Equation (cellpot) indicates that we expect a linear relationship between an electrochemical cell's potential, E_cell, and the current, i. When this is not the case, the electrochemical cell is said to be polarized. There are several sources that contribute to polarization, which we consider in this section; first, however, we define ideal polarized and nonpolarized electrodes.

[Note: corrected; the source prints "potential, E_cell. When" where this reads "potential, E_cell, and the current, i. When". The sentence names only one of the two quantities; Equation (cellpot), E_cell = E_Nernst − iR, is linear in the current i.]

### Ideal Polarized and Nonpolarized Electrodes and Electrochemical Cells

An ideal polarized electrode is one in which a change in potential over a fairly wide range has no effect on the current that flows through the electrode, as we see in Figure 22.5.1a for the range of potentials defined by the solid green line. Such electrodes are useful because they do not themselves undergo oxidation or reduction—they are electrochemically inert—which makes them a good choice for studying the electrochemical behavior of other species.

An ideal nonpolarized electrode is one in which a change in current has no effect on the electrode's potential, as we see in Figure 22.5.1b between the limits defined by the solid red line with deviations shown by the dashed red line. Such electrodes are useful because they provide a stable potential against which we can reference the redox potential of other species.

[Note: corrected; the source prints "the provided a stable" where this reads "they provide a stable". A typo.]

Figure 22.5.1: Current-potential curves for (a) an ideal polarized electrode and for (b) an ideal nonpolarized electrode. For both, the solid line shows the range of (a) potentials or (b) currents where the electrode shows ideal behavior.
Current-potential curves for (a) an ideal polarized electrode and for (b) an ideal nonpolarized electrode. For both, the solid line shows the range of (a) potentials or (b) currents where the electrode shows ideal behavior.

### Overpotential

The magnitude of polarization when drawing a current is called the overpotential, η and expressed as the difference between the applied potential, E, and the potential from the Nernst equation.

η = E − E_Nernst

The overpotential can be subdivided into a variety of sources, a few of which are discussed below.

### Concentration Polarization

The reduction of Fe^3+ to Fe^2+ in an electrochemical cell consumes an electron, which is drawn from the electrode. The oxidation of another species, perhaps the solvent, at a second electrode is the source of this electron. Because the reduction of Fe^3+ to Fe^2+ consumes one electron, the flow of electrons between the electrodes—in other words, the current—is a measure of the rate at which Fe^3+ is reduced.

The rate of the reaction Fe^3+(aq) + e^− ⇌ Fe^2+(aq) is the change in the concentration of Fe^3+ as a function of time.

[Note: corrected; the source prints "Fe^3+(aq) ⇌ Fe^2+(aq) + e^−" where this reads "Fe^3+(aq) + e^− ⇌ Fe^2+(aq)". The reduction of Fe^3+ to Fe^2+ takes up an electron; the printed equation has the electron on the wrong side and does not balance in charge.]

In order for the reduction of Fe^3+ to Fe^2+ to take place, Fe^3+ must move from the bulk solution into the layer of solution immediately adjacent to the electrode and then diffuse to the electrode's surface; this is called the diffusion layer. Once the reduction takes place, the Fe^2+ produced must diffuse away from the electrode's surface and enter into the bulk solution. These two processes are called mass transfer and if we try to change the electrode's potential too quickly, mass transfer may result in concentrations of Fe^3+ and Fe^2+ at the electrode's surface that are different from that in bulk solution, resulting in concentration polarization.

[Note: corrected; the source prints "concentrations of Fe^3+ to Fe^2+" where this reads "concentrations of Fe^3+ and Fe^2+". The concentrations of both ions at the surface differ from the bulk, as the next paragraph explains.]

Let's use the reduction of Fe^3+ to Fe^2+ at the cathode of a galvanic cell to think through how concentration polarization affects the potential we measure. From the Nernst equation we know that

[Note: corrected; the source prints "think though" where this reads "think through". A typo.]

E = E_(Fe^3+/Fe^2+)° − (0.05916/1) log(([Fe^2+])/([Fe^3+])) = +0.771 − (0.05916/1) log(([Fe^2+])/([Fe^3+]))

If the mass transfer of Fe^3+ from bulk solution to the electrode's surface is slow and if mass transfer of Fe^2+ from the electrode's surface to bulk solution is slow, then the concentration of Fe^3+ at the electrode's surface is smaller than in bulk solution and the concentration of Fe^2+ at the electrode's surface is greater than in the bulk solution. As a result, the ratio ([Fe^2+])/([Fe^3+]) is greater than that predicted by the bulk concentrations of Fe^3+ and Fe^2+ and the potential of the cathode is smaller (less positive) than the value +0.771 V predicted by the bulk concentrations of Fe^3+ and Fe^2+. The resulting potential of the electrochemical cell

E_cell = E_cathode − E_anode

is less positive than that predicted by the bulk concentrations of Fe^3+ and Fe^2+ due to this concentration polarization.

Other kinetic processes can contribute to polarization, including the rate of chemical reactions that take place within the layer of solution near the electrode's surface, the kinetics of reactions in which the electroactive species adsorb or desorb from the electrode's surface, and the kinetics of the electron transfer process itself. More details on these are included in later chapters covering specific electrochemical techniques.

[Note: corrected; the source prints "absorb or desorb" where this reads "adsorb or desorb". Species bind to and leave an electrode surface by adsorption, the counterpart of desorption.]
