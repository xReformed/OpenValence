---
title: "3.3: Amplification and Measurement of Signals"
book: "Instrumental Analysis (LibreTexts)"
chapter: "3: Operational Amplifiers"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/03%3A_Operational_Amplifiers_in_Chemical_Instrumentation_(TBD)/3.03%3A_Amplification_and_Measurement_of_Signals"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

In Chapter 1.3 we identified the basic components of an instrument as a probe that interacts with the sample, an input transducer that converts the sample's chemical and/or physical properties into an electrical signal, a signal processor that converts the electrical signal into a form that an output transducer can convert into a numerical or a visual output that we can understand. We can represent this as a sequence of actions that take place within the instrument

probe → sample → input transducer → raw data → signal processor → output transducer

creating the following general flow of information

chemical and/or physical information → electrical information → numerical or visual response

As suggested above, information is encoded in two broad ways: as electrical information (such as currents and potentials) and as information in other, non-electrical forms (such as chemical and physical properties). In this section we will consider how we can measure electrical signals.

## Current Measurements

In Chapter 7 we will introduce the phototube, seen here in Figure 3.3.1, as a transducer for converting photons of light into an electrical current that we can measure. A photon of light strikes a photoemissive cathode and ejects an electron that is then drawn to an anode that is held at a positive potential. The resulting current is our analytical signal. As each photon generates a single electron, the resulting current is small and needs amplifying if it is to be useful to us. Operational amplifiers provide a way to accomplish this amplification.

[Note: corrected; the source prints "anode that is held a positive potential" where this reads "anode that is held at a positive potential". A word is missing: the anode is held at a positive potential.]

Figure 3.3.1: Schematic illustration of a phototube. See Chapter 7 for additional details.
Schematic illustration of a phototube.

Figure 3.3.2 shows a simple electrical circuit that we can use to amplify and measure a small current. If you compare this to the inverting amplifier circuit in Chapter 3.2, you will see that we are replacing the input voltage and input resistor with the input current, Ix, that we wish to measure.

Figure 3.3.2: Operational amplifier circuit for converting a current into a voltage.
Operational amplifier that converts a current into a voltage.

From Kirchhoff's current law, we know that at the summing point, S, the current from the transducer is equal to the sum of the current through the feedback loop, If, and the current to the op amp's inverting input, Is.

[Note: corrected; the source prints "From Kirchoff's current law" where this reads "From Kirchhoff's current law". The law is named for Gustav Kirchhoff.]

Ix = Is + If

As we learned in the last section, Is ≈ 0, which means Ix ≈ If. From Ohm's law, we have

V_out = −If × Rf = −Ix × Rf

Rearranging to solve for Ix

Ix = −(V_out)/(Rf) = kV_out

shows us that there is a linear relationship between the voltage we measure from the circuit's output and the current that enters the circuit. By choosing to make Rf large, a small current is converted into a voltage that is easy to measure. In addition, we know from Chapter 2 that the error in measuring the current from the transducer, Ex, is

Ex = −(Rm)/(Rm + Rl) × 100

where Rm is the resistance of the measuring circuit and Rl is the resistance of the source, which generally is large. The resistance of the measuring circuit is

Rm = (Rf)/(A_op)

[Note: corrected; the source prints "Rm = (Rr)/(A_op)" where this reads "Rm = (Rf)/(A_op)". There is no resistor Rr in the circuit; the current follower's input resistance is the feedback resistance divided by the op amp's gain, Rf/A_op, as the next sentence (choosing Rf) assumes.]

If we choose Rf such that it is similar in magnitude to the op amp's gain, A_op, then Rm is small and the relative error is small as well.

## Potential Measurements

From Chapter 2 we know that the error in measuring voltage, Ex, is a function of the resistance of the measuring circuit, Rm, and the resistance of the source, Rx.

Ex = (Vm − Vx)/(Vx) × 100 = −(Rx)/(Rm + Rx) × 100

[Note: corrected; the source prints "= −(Rm)/(Rm + Rx) × 100" where this reads "= −(Rx)/(Rm + Rx) × 100". With Vm = Vx × Rm/(Rm + Rx), (Vm − Vx)/Vx = −Rx/(Rm + Rx), which is why the next sentence requires Rx ≪ Rm.]

To maintain a small measurement error requires that Rx ≪ Rm. This creates a complication when the voltage source has a high internal resistance, as is the case, for example, when we measure pH using a glass electrode where the internal resistance is on the order of 10^7 − 10^8Ω (see Chapter 23 for details about glass electrodes). The inverting amplifier circuit discussed in Chapter 3.2 has a resistance of perhaps 10^5Ω. To increase Rm, the voltage we wish to measure, Vx, is first run through a voltage follower circuit, where the internal resistance is on the order of 10^12Ω, and the output is then run through the inverting amplifier, as seen in Figure 3.3.3. The result is an amplified output voltage measured under conditions where the relative error is small.

Figure 3.3.3: Circuit for measuring voltage that combines a voltage follower and an inverting amplifier.
Circuit for measuring voltage using a voltage follower and an inverting amplifier.

[Note: corrected; the source prints "measuring voltageusing" where this reads "measuring voltage using". A missing space.]

## Comparison of Transducer Outputs

In Chapter 13 we will cover molecular absorption spectroscopy in which we measure the absorbance of sample relative to the absorbance of a reference. A difference amplifier, such as that shown in Figure 3.3.4, allows us to amplify and measure the difference between two voltages. In this circuit, the two voltages, v1 and v2, are fed into the op amp's two inputs, v_(−) and v_(+), passing through identical resistors. A feedback loop with a resistor connects v1 to v_out and a resistor identical to that in the feedback loop connects v2 to the circuit common.

Figure 3.3.4: Circuit used to amplify and measure the difference between two voltages.
Circuit that amplifies and measures the difference between two voltages.

We can use Ohm's law to define the currents I1 and If as

I1 = (v1 − v_(−))/(Ri)

If = (v_(−) − v_out)/(Rf)

By now you should see that the currents I1 and If are approximately the same because the op amp's high internal impedance prevents current from flowing into the op amp. Combining Equation (comp1) and Equation (comp2) gives

[Note: corrected; the source prints "high internal impedence" where this reads "high internal impedance". A misspelling of "impedance".]

(v1 − v_(−))/(Ri) = (v_(−) − v_out)/(Rf)

which we can solve for the voltage at the op amp's inverting input

Rf v1 − Rf v_(−) = Ri v_(−) − Ri V_out

Ri v_(−) + Rf v_(−) = Rf v1 + Ri v_out

v_(−) = (Rf v1 + Ri v_out)/(Ri + Rf)

The input to the op amp's noninverting lead is the output of a voltage divider (see Chapter 2) acting on v2

[Note: corrected; the source prints "op amp's noniverting lead" where this reads "op amp's noninverting lead". A misspelling of "noninverting".]

v_(+) = v2 × ((Rf)/(Ri + Rf))

The feedback loop works to ensure that the inputs to v_(−) and to v_(+) are identical; thus

(Rf v1 + Ri v_out)/(Ri + Rf) = v2 × ((Rf)/(Ri + Rf))

which we can simplify to

[Note: corrected; the source prints "which we can simply to" where this reads "which we can simplify to". A typo for "simplify".]

V1Rf + V_out Ri = V2Rf

V_out = (Rf)/(Ri) × (V2 − V1)

The output voltage from the circuit is equal to the difference between the two input voltages, but amplified by the ratio of the resistance of Rf to Ri.
