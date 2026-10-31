---
title: "3.1: Operational Amplifiers"
book: "Instrumental Analysis (LibreTexts)"
chapter: "3: Operational Amplifiers"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/03%3A_Operational_Amplifiers_in_Chemical_Instrumentation_(TBD)/3.01%3A_Properties_of_Operational_Amplifiers"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

An operational amplifier (or op amp, for short) is an electrical circuit that has a variety of uses, a few of which we consider in this section: how to amplify and measure the signal from a transducer (detector), and how to perform mathematical operations on signals. In this section we will provide a basic overview of operational amplifiers without worrying about the specific internal details of its electrical circuit.

### Note

An excellent resource for this section and other sections in this chapter is Principles of Electronic Instrumentation by A. James Diefenderfer and published by W. B. Saunders Company, 1972.

## Symbolic Representation of an Operational Amplifier

Figure 3.1.1 provides a symbolic representation of an operational amplifier. The large triangular shape is the operational amplifier, which is an extensive circuit whose exact design is not of interest to us; thus, the simple shape. The operational amplifier has two voltage inputs that are identified as v_(−) and as v_(+) and labeled as − and + on the op amp. The difference between v_(−) and v_(+) is defined as vs. The operational amplifier also has a single voltage output that is identified as v_out. All voltages are measured relative to a circuit common of 0 V, represented by the small triangle at the bottom of the figure, that provides a shared reference; the circuit common is understood to be present even when it is not shown. Not included in this figure are the connections to a power supply, which are necessary for its operation.

Figure 3.1.1: Representation of an operational amplifier. See the text for details.
Representation of basic operational amplifier.

[Note: corrected; the source prints "basic operational amplifer." where this reads "basic operational amplifier.". A misspelling of "amplifier".]

## Inverting and Noninverting Inputs

The minus sign and the plus sign that appear as labels on the op amp in Figure 3.1.1 do not mean that one input has a positive value and that the other input has a negative value. Instead, an input to the lead with a negative sign is inverted: if v_(−) is a negative DC voltage, then the output voltage, v_out, is a positive DC voltage, and if v_(−) is a positive DC voltage, then the output voltage, v_out, is a negative DC voltage. For an AC input to v_(−), the output is 180° out-of-phase, which implies a reversal in sign. The other input to the op amp is noninverting, which means that applying a positive voltage to v_(+) results in a positive signal at v_out.

## Key Properties of Operational Amplifiers

The ideal operational amplifier has several important properties that derive from its internal circuitry. The first of these properties is that the op amp's gain, A, which is defined as the ratio of the output voltage to the input voltage

A_op = −(v_out)/(vs) = −(v_out)/(v_(−) − v_(+))

is very large, typically on the order of 10^4 – 10^6. We need to be careful when we use the term gain as there can be a significant difference between the gain of the operational amplifier and the gain of the circuit that contains the operational amplifier. The gain of the operational amplifier, which is what we mean by Equation (prop1), is called the open-loop gain. The gain of a circuit that contains an operational amplifier is called a closed-loop gain. Where there is ambiguity, we will be careful to refer to the op amp's gain, A_op, or to the circuit's gain, Ac, as these are more descriptive.

A second property of an operational amplifier is that regardless of the specific values of v_(−) and v_(+), the op amp's internal circuitry is designed such that the current between the two inputs is effectively zero; in essence, the impedance, Z, between the two inputs is so large that from Ohm's law, V = I × Z, the current between these two inputs is I ≈ 0. A large input impedance means we can connect our op amp to a high voltage source and know that it will draw a small current instead of overloading the circuit that includes the op amp.

[Note: corrected; the source prints "the impedence, Z," where this reads "the impedance, Z,"; the source prints "A large input impedence" where this reads "A large input impedance". A misspelling of "impedance".]

A third property of an operational amplifier is that its output impedance is very small, which means we can draw a current from the circuit that meets our needs—this current is drawn from the op amp's power supply—even if the current into the op amp is zero. For example, if the circuit's gain is small, we can use the operational amplifier to provide a large gain in current.

[Note: corrected; the source prints "output impedence" where this reads "output impedance". A misspelling of "impedance".]
