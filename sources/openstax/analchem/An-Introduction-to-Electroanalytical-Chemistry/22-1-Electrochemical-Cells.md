---
title: "22.1: Electrochemical Cells"
book: "Instrumental Analysis (LibreTexts)"
chapter: "22: An Introduction to Electroanalytical Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/22%3A_An_Introduction_to_Electroanalytical_Chemistry/22.01%3A_Electrochemical_Cells"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

A schematic diagram of a typical electrochemical cell is shown in Figure 22.1.1. The electrochemical cell consists of two half-cells, each of which contains an electrode immersed in a solution of ions whose activities determine the electrode’s potential. A salt bridge that contains an inert electrolyte, such as KCl, connects the two half-cells. The ends of the salt bridge are fixed with porous frits, which allow the electrolyte’s ions to move freely between the half-cells and the salt bridge. This movement of ions in the salt bridge completes the electrical circuit, allowing us to measure the potential using a potentiometer.

Figure 22.1.1: Example of a potentiometric electrochemical cell. The activities of Zn^2+ and Ag^+ are shown below the two half-cells.
Example of a potentiometric electrochemical cell.

The reason for separating the electrodes is to prevent the oxidation reaction and the reduction reaction from occurring at the same electrode. For example, if we place a strip of Zn metal in a solution of AgNO3, the reduction of Ag^+ to Ag occurs on the surface of the Zn at the same time as a portion of the Zn metal oxidizes to Zn^2+. Because the transfer of electrons from Zn to Ag^+ occurs at the electrode’s surface, we can not pass them through the potentiometer.

## Conduction in a Cell

Current moves through the cell in Figure 22.1.1 as a result of the movement of two types of charged particles: electrons and ions. First, when zinc, Zn(s) undergoes an oxidation reaction

[Note: corrected; the source prints "underoges" where this reads "undergoes". A typo.]

Zn(s) ⇌ Zn^2+(aq) + 2e^−

it releases two electrons. These electrons move through the circuit that connects the metallic Zn electrode in the left half-cell to the metallic Ag electrode in the right half-cell, where it effects the reduction of Ag^+(aq).

Ag^+(aq) + e^− ⇌ Ag(s)

If this is all that happens, then the half-cell on the left will develop an excess of positive charge as Zn^2+(aq) ions accumulate and the half-cell on the right will develop an excess of negative charge due to the loss of Ag^+(aq). The salt bridge provides a way to continue the movement of charge, and thus the current, with the K^+ ions moving toward the right half-cell and Cl^– ions moving toward the left half-cell.

## Galvanic and Electrolytic Cells

The net reaction for the electrochemical cell in Figure 22.1.1 is

Zn(s) + 2Ag^+(aq) ⇌ 2Ag(s) + Zn^2+(aq)

which simply is the result of adding together the reactions in the two half-cells after adjusting for the difference in electrons. As shown by the arrows in the figure, when we connect the electrodes to the potentiometer, current spontaneously flows from the left half-cell to the right half-cell. We call this a galvanic cell. If we apply a potential sufficient to reverse the direction of the current flow, resulting in a net reaction of

2Ag(s) + Zn^2+(aq) ⇌ Zn(s) + 2Ag^+(aq)

then we call the system an electrolytic cell. A galvanic cell produces electrical energy and an electrolytic cell consumes electrical energy.

## Anodes and Cathodes

The half-cell where oxidation takes place is called the anode and, by convention, it is shown on the left for a galvanic cell. The half-cell where reduction takes place is called the cathode and, by convention, it is shown on the right for a galvanic cell.

## Faradaic and Non-Faradaic Currents

When we oxidize or reduce an analyte at the electrode in one half-cell, the electrons pass through the potentiometer to the electrode in the other half-cell where a corresponding reduction or oxidation reaction takes place. In either case, the current from the redox reactions at the two electrodes is called a faradaic current. A faradaic current due to the reduction of an analyte is called a cathodic current and carries a positive sign. An anodic current results from the analyte’s oxidation and carries a negative sign.

In addition to the faradaic current from a redox reaction, the current in an electrochemical cell includes non-faradaic sources. Suppose the charge on an electrode is zero and we suddenly change its potential so that the electrode’s surface acquires a positive charge. Cations near the electrode’s surface will respond to this positive charge by migrating away from the electrode; anions, on the other hand, will migrate toward the electrode. This migration of ions occurs until the electrode’s positive surface charge and the excess negative charge of the solution near the electrode's surface are equal. Because the movement of ions and the movement of electrons are indistinguishable, the result is a small, short-lived non-faradaic current that we call the charging current. Every time we change the electrode’s potential, a short-lived charging current flows.

Even in the absence of analyte, a small, measurable current flows through an electrochemical cell. This residual current has two components: a faradaic current due to the oxidation or reduction of trace impurities and a non-faradaic charging current. Methods for discriminating between the analyte’s faradaic current and the residual current are discussed later in this chapter.

## The Electrical Double Layer

As noted in the previous section, when we apply a potential to an electrode it develops a positive or negative surface charge, the magnitude of which is a function of the metal and the applied potential. Because the surface carries a charge, the composition of the layer of solution immediately adjacent to the electrode changes with, for example, the concentration of cations increasing and the concentration of anions decreasing if the electrode's surface carries a negative charge. As we move away from the electrode's surface, the net potential first decreases in a linear manner, due to the imbalance of the cations and anions, and then in an exponential manner until it reaches zero. This structured surface is called the electrical double layer and consists of an inner layer and a diffuse layer. Anytime we change the potential applied to the electrode, the structure of the electrical double layer changes and a small charging current flows.

Figure 22.1.2: The electrical double layer. When the electrode carries a negative surface charge, the layer of solution immediately in contact with the electrode, the inner layer, becomes enriched with cations and deficient in anions. At greater distances from the electrode's surface, the concentration of cations and anions become more balanced—this is called the diffuse layer—eventually reaching the bulk solution where the net charge are in balance. The potential decreases linearly through the inner layer and exponentially through the diffuse layer.
The electrical double layer. When the electrode carries a negative surface charge, the layer of solution immediately in contact with the electrode, the inner layer, becomes enriched with cations and deficient in anions. At greater distances from the electrode's surface, the concentration of cations and anions become more balanced—this is called the diffuse layer—eventually reaching the bulk solution where the net charge are in balance. The potential decreases linearly through the inner layer and exponentially through the diffuse layer.

## Mass Transfer in Cells with the Passage of Current

The magnitude of a faradaic current is determined by the rate at which the analyte is oxidized at the anode or reduced at the cathode. Two factors contribute to the rate of an electrochemical reaction: the rate at which the reactants and products are transported to and from the electrode—what we call mass transport—and the rate at which electrons pass between the electrode and the reactants and products in solution.

There are three modes of mass transport that affect the rate at which reactants and products move toward or away from the electrode surface: diffusion, migration, and convection. Diffusion occurs whenever the concentration of an ion or a molecule at the surface of the electrode is different from that in bulk solution. For example, if we apply a potential sufficient to completely reduce Ag^+ at the electrode surface, the result is a concentration gradient similar to that shown in Figure 22.1.3. The region of solution over which diffusion occurs is the diffusion layer. In the absence of other modes of mass transport, the width of the diffusion layer, δ, increases with time as the Ag^+ must diffuse from an increasingly greater distance.

Figure 22.1.3: Concentration gradients (in red) for Ag^+ following the application of a potential that completely reduces it to Ag(s). Before we apply the potential (t = 0) the concentration of Ag^+ is the same at all distances from the electrode’s surface. After we apply the potential, its concentration at the electrode’s surface decreases to zero and Ag^+ diffuses to the electrode from bulk solution. The longer we apply the potential, the greater the distance over which diffusion occurs. The dashed red line shows the extent of the diffusion layer at time t3. These profiles assume that convection and migration do not contribute significantly to the mass transport of Ag^+.
Concentration gradients in an electrochemical cell increase over time.

Convection occurs when we mix the solution, which carries reactants toward the electrode and removes products from the electrode. The most common form of convection is stirring the solution with a stir bar; other methods include rotating the electrode and incorporating the electrode into a flow-cell.

The final mode of mass transport is migration, which occurs when a charged particle in solution is attracted to or repelled from an electrode that carries a surface charge. If the electrode carries a positive charge, for example, an anion will move toward the electrode and a cation will move toward the bulk solution. Unlike diffusion and convection, migration affects only the mass transport of charged particles.

## Schematic Representations of Cells

Although Figure 22.1.1 provides a useful picture of an electrochemical cell, it is not a convenient way to represent it. Imagine having to draw a picture of each electrochemical cell you are using! A more useful way to describe an electrochemical cell is a shorthand notation that uses symbols to identify different phases and that lists the composition of each phase. We use a vertical slash (|) to identify a boundary between two phases where a potential develops, and a comma (,) to separate species in the same phase or to identify a boundary between two phases where no potential develops. Shorthand cell notations begin with the anode and continue to the cathode. For example, we describe the electrochemical cell in Figure 22.1.1 using the following shorthand notation.

Zn(s)|ZnCl2(aq, a_(Zn^2+) = 0.0167)||AgNO3(aq, a_(Ag^+) = 0.100)|Ag(s)

The double vertical slash (||) represents the salt bridge, the contents of which we usually do not list. Note that a double vertical slash implies that there is a potential difference between the salt bridge and each half-cell.

### Example 22.1.1

What are the anodic, the cathodic, and the overall reactions responsible for the potential of the electrochemical cell in Figure 22.1.4? Write the shorthand notation for the electrochemical cell.

**Solution**

The oxidation of Ag to Ag^+ occurs at the anode, which is the left half-cell. Because the solution contains a source of Cl^–, the anodic reaction is

Ag(s) + Cl^−(aq) ⇌ AgCl(s) + e^−

The cathodic reaction, which is the right half-cell, is the reduction of Fe^3+ to Fe^2+.

Fe^3+(aq) + e^− ⇌ Fe^2+(aq)

The overall cell reaction, therefore, is

Ag(s) + Fe^3+(aq) + Cl^−(aq) ⇌ AgCl(s) + Fe^2+(aq)

The electrochemical cell’s shorthand notation is

Ag(s)|HCl(aq, a_(Cl^−) = 0.100), AgCl(sat’d)||FeCl2(aq, a_(Fe^2+) = 0.0100), Fe^3+(aq, a_(Fe^3+) = 0.0500)|Pt(s)

Note that the Pt cathode is an inert electrode that carries electrons to the reduction half-reaction. The electrode itself does not undergo reduction.

<!-- end of example -->

Figure 22.1.4: Potentiometric electrochemical cell for Example 22.1.1.
