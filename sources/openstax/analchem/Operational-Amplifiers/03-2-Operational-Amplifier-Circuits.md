---
title: "3.2: Operational Amplifier Circuits"
book: "Instrumental Analysis (LibreTexts)"
chapter: "3: Operational Amplifiers"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/03%3A_Operational_Amplifiers_in_Chemical_Instrumentation_(TBD)/3.02%3A_Operational_Amplifier_Circuits"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

In the last section we noted that an operational amplifier magnifies the difference between two voltage inputs

A_op = −(v_out)/(v_(−) − v_(+))

where the gain, A_op, is typically between 10^4 and 10^6. To better control the gain—that is, to make the gain something we can adjust to meet our needs—the operational amplifier is incorporated into a circuit that allows for feedback between the output and the inputs. In this section, we examine two feedback circuits.

## The Inverting Amplifier Circuit

Figure 3.2.1 is an example of an operational amplifier circuit with a negative feedback loop that consists of a resistor, Rf, that connects the op amp's output to its input at a summing point, S. Because the feedback loop is connected to the op amp's inverting input, the effect is called negative feedback.

Figure 3.2.1: Operational amplifier circuit with a negative feedback loop.
Operational amplifier circuit with a negative feedback loop.

We can analyze this circuit using the laws of electricity from Chapter 2. Let's begin by rearranging Equation (prop1) to solve for v_out

v_out = −A_op × (v_(−) − v_(+))

and then expand the right side of this equation

v_out = −A_op × (v_(−) − v_(+)) = −A_op × v_(−) + A_op × v_(+)

and solve for v_(−)

v_(−) = v_(+) − (v_out)/(A_op)

Because the op amp's gain A_op is so large—recall that it is typically in the range 10^4 and 10^6—we can simplify Equation (negfb2) to

v_(−) ≈ v_(+)

One consequence of Equation (negfb3) is that for this circuit v_(−) ≈ 0 V as it is at the circuit common.

From Kirchhoff's laws, we know that the total current that enters the summing point must equal the total current that leaves the summing point, or

[Note: corrected; the source prints "From Kirchoff's laws" where this reads "From Kirchhoff's laws". The laws are named for Gustav Kirchhoff.]

I_in = Is + If

where Is is the current between the op amp's two inputs. As we noted in Chapter 3.1, an operational amplifier's internal circuitry is designed such that Is ≈ 0; thus

[Note: corrected; the source prints "designed such at Is" where this reads "designed such that Is". A typo for "such that".]

I_in = If

Substituting in Ohm's law (V = I × R) gives

(v_in − v_(−))/(R_in) = (v_(−) − v_out)/(Rf)

From Equation (negfb3), we know that v_(−) ≈ 0, which allows us to simplify Equation (negfb6) to

(v_in)/(R_in) = −(v_out)/(Rf)

Rearranging, we find that the gain for the circuit, Ac, is

Ac = (v_out)/(v_in) = −(Rf)/(R_in)

Equation (negfb8) shows us that circuit in Figure 3.2.1 returns a voltage, v_out, that has the opposite sign of v_in with a gain for the circuit that depends on only the relative values of the two resistors, Rf and R_in.

## The Voltage-Follower Circuit

Figure 3.2.2 shows another operational amplifier with a feedback loop. In this case the input to the op amp, v_in, is made to the noninverting lead and the output is fed back into the op amp's inverting lead.

[Note: corrected; the source prints "the output is feed back" where this reads "the output is fed back". A typo for "fed back".]

Figure 3.2.2: Operational amplifier circuit for a voltage follower.
Operational amplifier circuit for a voltage follower.

From Kirchhoff's voltage law, we know that the op amp's output voltage is equal to the sum of the input voltage and the difference, vs between the voltage applied to the op amp's two leads; thus

[Note: corrected; the source prints "From Kirchoff's voltage law" where this reads "From Kirchhoff's voltage law". The law is named for Gustav Kirchhoff.]

V_out = v_in + vs

The op amp's gain, A_op, is defined in terms of vs and v_out

−A_op = (v_out)/(vs)

where the minus sign is due to the change in sign between the output voltage and the voltage applied to the inverting lead. Substituting Equation (follow2) into Equation (follow1) gives

V_in − (V_out)/(A_op) = V_out

Because the operational amplifier's gain—which is not the same thing as the circuit's gain—is large, Equation (follow3) becomes

v_in = v_out

Our analysis of this circuit shows that it returns the original voltage without any gain. It does, however, allow us to draw that voltage from the circuit with more current than the original voltage source might be able to handle.
