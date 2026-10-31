---
title: "2.2: Direct Current (DC) Circuits"
book: "Instrumental Analysis (LibreTexts)"
chapter: "2: Electrical Components and Circuits"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/02%3A_Electrical_Components_and_Circuits/2.02%3A_Direct_Current_Circuits_and_Measurements"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

A direct current, which is the focus of this section, is one that flows in one direction. An alternating current, which is the focus of the next section, is one that periodically switches direction.

## Basic Direct Current (DC) Circuits

There are two basic direct current circuits of importance to us: those with two or more resistors connected in a series, and those with two or more resistors arranged parallel to each other. Other direct current circuits can be understood in terms of these two basic circuits.

### Resistors in Series

Figure 2.2.1 shows an example of a simple DC circuit in which three resistors, with resistances of R1, R2, and R3, are connected in series to the two ends of a battery that has a potential of V. A switch is included in the circuit that is used to close the loop and allow a current to flow from the battery's positive terminal to its negative terminal.

[Note: corrected; the source prints "two ends of battery" where this reads "two ends of a battery". A missing article.]

Figure 2.2.1: Example of a DC circuit that consists of three resistors in series.
DC circuit with resistors in series.

Kirchhoff's first law requires that the sum of the currents at any point in the circuit is zero. Consider point b. If the current that arrives from point a is I, then the current that leaves b is −I, where the sign tells us about the direction of the current with respect to the point. This requires that Ia − Ic = 0, which means that the current has the same absolute value at all points in the circuit.

[Note: corrected; the source prints "Kirchoff's" where this reads "Kirchhoff's". Gustav Kirchhoff's name is misspelled.]

Application of Kirchhoff's second law requires that the sum of the voltages in this circuit equal 0, which is true if the sum of the voltage across each of the three resistors is equal to the voltage of the battery. The voltage across each resistor is given by Ohm's law

V = IR1 + IR2 + IR3

If we factor the current out of the right side of Equation (series1), then we have

[Note: corrected; the source prints "If we divide both sides of Equation (series1) by the current" where this reads "If we factor the current out of the right side of Equation (series1)". The equation that follows, V = I × (R1 + R2 + R3), takes the common factor I out of the sum; it does not divide by the current.]

V = I × (R1 + R2 + R3) = IRs

where Rs is the circuit's effective resistance, which is the sum of the resistances of the individual resistors.

One of the useful properties of this circuit is that the voltage drop across an individual resistor is proportional to that resistor's contribution to Rs. Consider the points in Figure 2.2.1 labeled a and b that are on opposite sides of the first resistor in this series. The drop in voltage across this resistor, V_ab, is

[Note: corrected; the source prints "this resister" where this reads "this resistor". A spelling error.]

V_ab = IR1

Dividing Equation (series3) by Equation (series2)

[Note: corrected; the source prints "by Equation (series1)" where this reads "by Equation (series2)". The division V_ab/V = IR1/(IRs) uses V = IRs, Equation (series2), not the unsummed Equation (series1).]

(V_ab)/V = (IR1)/(IRs) = (R1)/(Rs)

and

V_ab = V × (R1)/(Rs)

The circuit in Figure 2.2.1 is an example of a simple voltage divider in that it divides the battery's voltage into parts and allows us to use a single battery to select one of several possible voltages. For example, the voltage between points a and b is

[Note: corrected; the source prints "the voltage at between points" where this reads "the voltage between points". A stray word.]

V_ab = V × (R1)/(Rs)

the voltage between points a and c is

[Note: corrected; the source prints "the voltage at between points" where this reads "the voltage between points". A stray word.]

V_ac = V × (R1 + R2)/(Rs)

and the voltage between points a and d is

[Note: corrected; the source prints "the voltage at between points" where this reads "the voltage between points". A stray word.]

V_ad = V × (R1 + R2 + R3)/(Rs) = V × (Rs)/(Rs) = V

### Parallel Circuits

Figure 2.2.2 shows an example of a simple DC circuit in which three resistors, with resistances of R1, R2, and R3, are connected parallel to each other. A switch is included in the circuit that is used to close the loop and allow a current to flow from the battery's positive terminal to its negative terminal.

Figure 2.2.2: Example of a DC circuit that consists of three resistors in parallel.
DC circuit with resistors in parallel.

If we apply Kirchhoff's first law to the current at the point identified as a, then the sum of the currents must equal zero and

[Note: corrected; the source prints "Kirchoff's" where this reads "Kirchhoff's". Gustav Kirchhoff's name is misspelled.]

ΣI = 0 = I − I1 − I2 − I3

where I is the current entering point a and I1, I2, and I3 are the currents passing through the three resistors. Rearranging Equation (parallel1) and substituting into Ohm's law gives

V/(Rp) = V/(R1) + V/(R2) + V/(R3)

where Rp is the circuit's effective resistance, which is equivalent to

1/(Rp) = 1/(R1) + 1/(R2) + 1/(R3)

or to

Gp = G1 + G2 + G3

where G is a resistor's conductance, which is the inverse of its resistance.

One of the useful properties of this circuit is that it serves as a current divider. The current passing through the resistor R1 is

(I1)/I = (V/R1)/(V/Rp) = (1/R1)/(1/Rp) = (G1)/(Gp)

Multiplying through by the total current gives

I1 = I × (G1)/(Gp)

### More Complex Circuits

The treatment above considers circuits that contain only resistors in series or resistors in parallel. A circuit that contains both resistors in series and resistors in parallel can often be simplified to an equivalent circuit that has only resistors in series or in parallel, or that consists of a single resistor. Figure 2.2.3 provides an example. The circuit at the far left shows two parallel resistors, R2 and R3, that, together, are in series with a third resistor, R1.

[Note: corrected; the source prints "consists of single resistor" where this reads "consists of a single resistor". A missing article.]

Figure 2.2.3: Example (on left) of a DC circuit that has both resistors in series and in parallel, and two equivalent circuits.
DC circuit with resistors in series and in parallel.

Using Equation (parallel3) we can replace the two resistors in parallel with a single resistor, R4, where

1/(R4) = 1/(R2) + 1/(R3)

giving the equivalent circuit shown in the middle. Finally, we can use Equation (series2) to replace the two resistors in series with the single resistor, R5, as shown on the far right, where

R5 = R1 + R4

## Measuring Voltage and Current

Figure 2.2.4 shows a digital multimeter that is used to measure voltage or current (amongst other possible measurements that we will not consider here). The measurement of voltages and currents always contains some error, the magnitude of which we consider here.

[Image: Digital multimeter.]

[Image: Close-up of digital multimeter.]

Figure 2.2.4: Photos of (left) a digital multimeter and (right) a close-up of the digital multimeter's dial. Symbols: V is voltage, Ω is resistance, F is capacitance, Hz is frequency, A is current, H is inductance. Symbols with a wavy line on top (~) are for AC circuits and symbols with solid or dashed lines (— or ---) on top are for DC circuits.

[Note: corrected; the source prints "Figure 2.2.1: Photos" where this reads "Figure 2.2.4: Photos". The multimeter photos are the fourth figure, as the text above calls them; Figure 2.2.1 is the series circuit.]

### Errors in Measuring Voltage

To measure an unknown voltage of Vx with an internal resistance of Rx, we include the meter with its internal resistance of Rm as part of a voltage divider circuit. We read the voltage displayed on the meter, Vm, and use Equation (series5) to determine Vx

Vm = Vx × (Rm)/(Rm + Rx)

If we do not know the value of Rx, which is often the case, then we can still report an accurate value for Vx if Rm ≫ Rx, as we can then write

Vm = Vx × (Rm)/(Rm + Rx) ≈ Vx × (Rm)/(Rm) ≈ Vx

The percent error, Ex, in Vx

Ex = (Vm − Vx)/(Vx) × 100 = −(Rx)/(Rm + Rx) × 100

[Note: corrected; the source prints "−(Rm)/(Rm + Rx)" where this reads "−(Rx)/(Rm + Rx)". From Equation (meter1), (Vm − Vx)/Vx = Rm/(Rm + Rx) − 1 = −Rx/(Rm + Rx), which is the form the worked example below uses.]

For example, suppose that Rm = 10^3 × Rx, then the measurement error is

E = −(Rx)/((10^3 × Rx) + Rx) × 100 = −1/(10^3 + 1) × 100 = −0.0999%

or approximately –0.1%.

### Errors in Measuring Current

To measure an unknown current, Ix, we include the meter in a current divider circuit in which some of Ix is drawn through a load resistor, Rl, of known value, and the remaining current is drawn through a known standard resistance set by the meter, Rm. Using Equation (parallel5) for a current divider, the fraction of Ix that passes through the meter is

(Im)/(Ix) = (Rl)/(Rm + Rl)

[Note: corrected; the source prints "(Im)/(Ix) = (Rm + Rl)/(Rm)" where this reads "(Im)/(Ix) = (Rl)/(Rm + Rl)". The meter reads a fraction of Ix, so the ratio must be less than 1; Rl/(Rm + Rl) is the ratio that gives Ix = Im × (1 + Rm/Rl) and the percent error −Rm/(Rm + Rl) × 100 below.]

Solving for Ix gives

Ix = Im × ((Rm + Rl)/(Rl)) = Im × (1 + (Rm)/(Rl))

[Note: corrected; the source prints "Ix = Im × ((Rm)/(Rm + Rl))" where this reads "Ix = Im × ((Rm + Rl)/(Rl))". (Rm + Rl)/Rl equals the 1 + Rm/Rl that the equation goes on to give; Rm/(Rm + Rl) does not.]

If the resistors are selected such that (Rm)/(Rl) ≪ 1, then the current displayed on the meter, Im, is an accurate measure of Ix. The percent error in the reported current is

Ex = −(Rm)/(Rm + Rl) × 100

For example, suppose that Rm = 10^−3 × Rl, then the measurement error is

E = −(10^−3 × Rl)/((10^−3 × Rl) + Rl) × 100 = −(10^−3)/(10^−3 + 1) × 100 = −0.0999%

or approximately −0.1%.
