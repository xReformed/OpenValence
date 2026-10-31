---
title: "23.5: Instruments for Measuring Cell Potentials"
book: "Instrumental Analysis (LibreTexts)"
chapter: "23: Potentiometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/23%3A_Potentiometry/23.05%3A_Instruments_for_Measuring_Cell_Potentials"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

To measure the potential of an electrochemical cell in a way that draws essentially no current we use a potentiometer. To help us understand how a potentiometer accomplishes this, we will describe the instrument as if the analyst is operating it manually. To do so the analyst observes a change in the current or the potential and manually adjusts the instrument’s settings to maintain the desired experimental conditions. It is important to understand that modern electrochemical instruments provide an automated, electronic means for controlling and measuring current and potential, and that they do so by using very different electronic circuitry than that described here.

Figure 23.5.1: Schematic diagram of a manual potentiometer: C is the reference electrode; W is the working electrode; SW is a slide-wire resistor; T is a tap key and i is an ammeter for measuring current.
Schematic diagram of a manual potentiometer: C is the reference electrode; W is the working electrode; SW is a slide-wire resistor; T is a tap key and i is an ammeter for measuring current.

Figure 23.5.1 shows a schematic diagram for a manual potentiometer that consists of a power supply, an electrochemical cell with a working electrode and a counter electrode, an ammeter to measure the current that passes through the electrochemical cell, an adjustable, slide-wire resistor, and a tap key for closing the circuit through the electrochemical cell. Using Ohm’s law, the current in the upper half of the circuit is

i_upper = (E_PS)/(R_ab)

where E_PS is the power supply’s potential, and R_ab is the resistance between points a and b of the slide-wire resistor. In a similar manner, the current in the lower half of the circuit is

i_lower = (E_cell)/(R_cb)

where E_cell is the potential difference between the working electrode and the counter electrode, and R_cb is the resistance between the points c and b of the slide-wire resistor. When i_upper = i_lower, no current flows through the ammeter and the potential of the electrochemical cell is

[Note: corrected; the source prints "When i_upper = i_lower = 0, no current" where this reads "When i_upper = i_lower, no current". Equation (pot3) follows from setting E_PS/R_ab equal to E_cell/R_cb; if both currents were zero, E_PS would be zero.]

E_cell = (R_cb)/(R_ab) × E_PS

[Note: corrected; the source prints "E_coll" where this reads "E_cell". A typo for the cell potential, E_cell.]

To determine E_cell we briefly press the tap key and observe the current at the ammeter. If the current is not zero, then we adjust the slide wire resistor and remeasure the current, continuing this process until the current is zero. When the current is zero, we use Equation (pot3) to calculate E_cell.

Using the tap key to briefly close the circuit through the electrochemical cell minimizes the current that passes through the cell and limits the change in the electrochemical cell’s composition. For example, passing a current of 10^–9 A through the electrochemical cell for 1 s changes the concentrations of species in the cell by approximately 10^–14 moles.

10^−9 A = 10^−9 C/s

10^−9 C/s × 1 s × (1 mol)/(96485C) = 1.0 × 10^−14 mol

Of course, trying to measure a potential in this way is tedious. Modern potentiometers use operational amplifiers to create a high-impedance voltmeter that measures the potential while drawing a current of less than 10^–9 A. The relative error, Er, in the measured potential

Er = −(R_cell)/(R_meter + R_cell)

[Note: corrected; the source prints "Er = (R_cell)" where this reads "Er = −(R_cell)". The meter reads E_cell × R_meter/(R_meter + R_cell), so the relative error is negative, as the calculation below uses (−0.001 = −10 MΩ/(R_meter + 10 MΩ)).]

where R_cell is the resistance of the solution in the electrochemical cell and R_meter is the resistance of the meter. For a solution with a resistance of 10MΩ to achieve a relative error of −0.1% (or −0.001) requires an R_meter of

[Note: corrected; the source prints "−0.1%) or −0.001" where this reads "−0.1% (or −0.001)". The parenthesis is misplaced.]

−0.001 = (−10 MΩ)/(R_meter + 10 MΩ)

−0.001 × R_meter − 0.01 = −10 MΩ

−0.001 × R_meter = −9.990 MΩ

R_meter = 9990 MΩ
