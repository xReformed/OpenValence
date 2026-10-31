---
title: "3.4: Mathematical Operations Using Operational Amplifiers"
book: "Instrumental Analysis (LibreTexts)"
chapter: "3: Operational Amplifiers"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/03%3A_Operational_Amplifiers_in_Chemical_Instrumentation_(TBD)/3.04%3A_Application_of_Operational_Amplifiers_to_Mathematical_Operations"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

The circuit for comparing two voltages is an example of using an operational amplifier to complete a mathematical operation. In this section we will examine several additional examples of mathematical operations completed using operational amplifiers.

## Multiplication and Division by a Constant

The inverting amplifier that we considered earlier, and that is reproduced here in Figure 3.4.1, returns an output voltage, v_out that multiplies the input voltage by an amount that depends on the ratio of the resistors R_in and Rf.

v_out = −v_in × (Rf)/(R_in)

Multiplication takes place when Rf > R_in and division takes place when R_in > Rf. Note that there is a reversal in the sign of the voltage.

Figure 3.4.1: Operational amplifier circuit that multiplies or divides an input voltage by a constant.
Multiplying and dividing using operational amplifier.

[Note: corrected; the source prints "that multiples or divides" where this reads "that multiplies or divides". A typo for "multiplies".]

## Addition or Subtraction

Figure 3.4.2 shows an operational amplifier circuit that adds together four separate input voltages. From our earlier analysis of circuits, you should see that

If = I1 + I2 + I3 + I4

We can replace If in this equation using Ohm's law; thus

v_out = −Rf × ((v1)/(R1) + (v2)/(R2) + (v3)/(R3) + (v4)/(R4))

If all five of the resistors are identical, then v_out is a simple summation of the four input voltages.

v_out = −(v1 + v2 + v3 + v4)

If we choose Rf such that it is 0.25 × R1 and set R1 = R2 = R3 = R4, then the output voltage is the average of the input voltages

v_out = −(v1 + v2 + v3 + v4)/4

Figure 3.4.2: Operational amplifier circuit that adds together four voltages.
Performing addition using operational amplifiers.

The voltage comparator covered in the last section subtracts one voltage from another. When more than two voltages are involved, then we can adapt the voltage adder circuit in Figure 3.4.2 to include subtraction by first running the voltage we wish to subtract through the inverting amplifier introduced in Chapter 3.2. Figure 3.4.3 shows this where v_out = −(v4 + v3 + v2 − v1).

Figure 3.4.3: Operational amplifier circuit that adds together three voltages and subtracts a fourth voltage from the sum.
Addition and subtraction using operational amplifier.

[Note: corrected; the source prints "using operational amplifer." where this reads "using operational amplifier.". A misspelling of "amplifier".]

## Integration

Figure 3.4.4 shows an operational amplifier circuit that we can use to integrate a time-dependent signal. The circuit has a feedback loop, but it is built around a capacitor instead of a resistor because it stores charge over time. The circuit also has two switches that allow us to use the circuit over a specific period of time. When the hold switch is open, the input voltage cannot enter the circuit. Closing the hold switch sets t = t0. As long as the reset switch is open, current moves through the feedback loop. Opening the hold switch sets t = tf, where tf is the total elapsed time. When this cycle is over, closing the reset switch drains the capacitor so that it is ready for its next use.

Figure 3.4.4: Operational amplifier circuit that integrates the input signal.
Integration using an operational amplifier.

[Note: corrected; the source prints "using an operational amplifer." where this reads "using an operational amplifier.". A misspelling of "amplifier".]

As we have seen several times, the current into the summing point, I_in is equal to the current in the feedback loop.

I_in = If

From Chapter 2, we know that the current in the feedback loop is If = −Cf (dv_out)/dt and, we know from Ohm's law that I_in = (V_in)/(R_in). Substituting both relationships into Equation (int1) gives

[Note: corrected; the source prints "Ohm's law that i_in = (V_in)/(R_in)" where this reads "Ohm's law that I_in = (V_in)/(R_in)". This is the current I_in of Equation (int1), which the sentence substitutes it into.]

(V_in)/(R_in) = −Cf (dv_out)/dt

Rearranging this equation

dv_out = −((v_in)/(R_in Cf))dt

[Note: corrected; the source prints "(Ri Cf)" where this reads "(R_in Cf)". The input resistor is R_in, as in the equations before and after.]

and integrating over time gives

∫_(v_(out, 1))^(v_(out, 2))dv_out = −(1/(R_in Cf))∫_t1^t2 v_in dt

If we begin the integration having previously discharged the capacitor and define t1 as the moment we close the hold switch and define t2 as the moment we reopen the hold switch, then Equation (int4) becomes

[Note: corrected; the source prints "t1 as the the moment" where this reads "t1 as the moment". A doubled word.]

v_out = −(1/(R_in Cf))∫0^t v_in dt

and the output voltage is the integral of the input voltage multiplied by (−R_in Cf)^−1.

## Differentiation

Reversing the capacitor and the resistor in the circuit in Figure 3.4.4 converts the circuit from one that returns the integral of the input signal, into one that returns the derivative of the input signal; Figure 3.4.5 shows the resulting circuit.

[Note: corrected; the source prints "coverts the circuit" where this reads "converts the circuit". A typo for "converts".]

Figure 3.4.5: Operational amplifier circuit that returns the derivative of the input signal.
Differentiation using an operational amplifier.

[Note: corrected; the source prints "using an operational amplifer." where this reads "using an operational amplifier.". A misspelling of "amplifier".]

For this circuit we have I_in = C × (dv_in)/dt and If = −(V_out)/R. Given that I_in = If, we are left with

−(V_out)/R = C × (dv_in)/dt

v_out = −RC × (dv_in)/dt
