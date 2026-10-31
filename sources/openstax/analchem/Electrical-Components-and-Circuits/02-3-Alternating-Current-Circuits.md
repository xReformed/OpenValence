---
title: "2.3: Alternating Current Circuits"
book: "Instrumental Analysis (LibreTexts)"
chapter: "2: Electrical Components and Circuits"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/02%3A_Electrical_Components_and_Circuits/2.03%3A_Alternating_Current_Circuits"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

A direct current has a fixed value that is independent of time. An alternating current, on the other hand, has a value that changes with time. This change in current follows a pattern that we can characterize by its period—the time, tp, for one complete cycle—or by its frequency, f, which is the reciprocal of its period

[Note: corrected; the source prints "by it period" where this reads "by its period". A typing error.]

f = 1/(tp)

Frequency is reported in hertz (Hz), which is equivalent to one cycle per second.

## Sinusoidal Currents and Voltages

Although we can draw many periodic signals—and will do so in later chapters—the simplest periodic signal is a sine wave: as shown on the right side of Figure 2.3.1, the sine is a propagating wave whose amplitude, A, is a function of time, t, which we write as a(t).

Figure 2.3.1: Illustration showing how a sine wave can be explained by a rotating vector. See text for an explanation of the symbols.
Sine wave as a rotating vector.

The left side of Figure 2.3.1 provides a rotating vector representation of the sine wave (a representation we will encounter again in Chapter 19 on NMR spectroscopy). The vector is the arrow that extends from the center of the circle to the circle's edge. It is rotating to the left with an angular velocity given by ω and that is expressed in radians per the sine wave's period, tp; thus

ω = (2π)/(tp) = 2πf

where f is the frequency. The amplitude of the sine wave as a function of time, a(t), is equivalent to the projection of the rotating vector onto the y-axis; thus

[Note: corrected; the source prints "onto the x-axis" where this reads "onto the y-axis". In Figure 2.3.1 the angle ωt is measured from the horizontal axis and a(t) is drawn as the vertical projection of the vector, which is A sin ωt; the projection onto the x-axis would be A cos ωt.]

a(t) = A sin ωt = A sin 2πft

In the context of this chapter, the amplitude is either a current, i, or a voltage, v.

i(t) = I sin ωt = I sin 2πft

v(t) = V sin ωt = V sin 2πft

where I is the maximum, or peak current, and V is the maximum, or peak voltage.

Equations (sine4) and (sine5) require that a sine wave's time-dependent amplitude, a(t), has a value of zero when ωt = nπ, where n is an integer. There is no reason to insist on this and two sine waves can be separated from each other in time, as shown in Figure 2.3.2, by a phase angle, Φ. The equation for the sine wave when Φ ≠ 0 becomes

[Note: corrected; the source prints "when t = nπ" where this reads "when ωt = nπ". sin ωt is zero when its argument ωt, not the time t, is a multiple of π.]

a(t) = A sin(ωt + Φ) = A sin(2πft + Φ)

Figure 2.3.2: Two sine waves that are out-of-phase with each other. The angle, Φ, between the two rotating vectors is the phase angle.
Out-of-phase sine waves.

One complication of an alternating current is that the net current over the course of a single cycle is zero. This is a problem for us because the equation for power in a resistor is

P = I^2 × R ≠ 0

[Note: corrected; the source prints "P = I^2/R" where this reads "P = I^2 × R". The power dissipated in a resistor is I^2 × R, as in Section 2.1, not I^2/R.]

Figure 2.3.3 shows several ways to report current in AC circuits.

Figure 2.3.3: Different ways to report current: I_p is the maximum absolute current, or peak current; I_pp is the peak-to-peak current; I_rms is the root-mean-square current; and I_avg is the numerical average current.
Different ways to report current.

The root-mean-square current, I_rms, is defined as

I_rms = √((Ip^2)/2) = √(2) × (Ip)/2 = 0.707 × Ip

and yields the same power in an AC circuit as a direct current of equal value in a DC circuit. The average current, I_avg, is

I_avg = (1/π)∫0^π Ip sin ωt dt = (2Ip)/π = 0.6366 × Ip

[Note: corrected; the source prints "0.6371 × Ip" where this reads "0.6366 × Ip". 2/π = 0.6366.]

## Capacitors

A capacitor is a component of circuits that is capable of storing charge. Figure 2.3.4 shows the design of a typical capacitor and its symbol when constructing an electrical circuit. The capacitor consists of two conducting plates separated by a thin layer of an insulating, or dielectric material. The plates have areas of A and are separated by a distance, d. The dielectric material has a dielectric constant, ε. A simple capacitor might consist of two pieces of a metal foil separated by air, which serves as the dielectric material. A capacitor's ability to store charge, Q, is given by

[Note: corrected; the source prints "serves as as the" where this reads "serves as the". A doubled word.]

Q = C × V

where V is the voltage applied across the two plates and where C is the capacitor's capacitance, which, in turn, is defined as

C = (εA)/d

Capacitance is measured in units of farads, where one farad is equal to one coulomb per volt.

Figure 2.3.4: Schematic diagram of a capacitor. In an electrical circuit, a capacitor is represented by the symbol at the lower right.
Illustration of a capacitor.

### Resistor and Capacitor in Series

Figure 2.3.5 shows a resistor, with a resistance of R, and a capacitor, with a capacitance of C, in series with a voltage source, with a voltage of V.

Figure 2.3.5: A simple circuit that consists of a resistor and capacitor in series.
Resistor and capacitor in series.

When the switch is closed, current flows as the capacitor builds up a charge. From Kirchhoff's laws, we know that

[Note: corrected; the source prints "switch it closed" where this reads "switch is closed"; the source prints "Kirchoff's" where this reads "Kirchhoff's". A typing error, and Gustav Kirchhoff's name misspelled.]

V = vR + vC = iR + Q/C

where vR and vC are, respectively, the time-dependent voltages across the resistor and the capacitor. Because V has a fixed value, any increase in vC as the capacitor is charged is offset by a decrease in vR. Given that the values of vC and vR—and the associated currents—are time-dependent, we can differentiate Equation (cap3) with respect to time

[Note: corrected; the source prints "decrease in Vr." where this reads "decrease in vR.". The voltage across the resistor is vR, as defined in this sentence.]

dV/dt = 0 = (R × di/dt) + (1/C × dq/dt) = (R × di/dt) + i/C

Rearranging Equation (cap4) gives

di/i = −(1/RC)dt

Integrating both sides of this equation

∫_I0^i (1/i)di = −(1/RC)∫0^t dt

leads to the following relationship between the current at time t and the initial current, I0

it = I0 × e^(−t/RC)

which tells us that the current decreases exponentially as the capacitor becomes fully charged. Replacing the current in equation (cap7) with V/R and substituting back into Equation (cap3)

vC = V0(1 − e^(−t/RC))

shows us that during the time the capacitor is being charged, the current flowing through the capacitor is decreasing exponentially to its limit of zero, and the voltage across the capacitor is increasing exponentially to its limit of the applied voltage.

### Time Constant

The value RC in Equation (cap7) and in Equation (cap8) is the circuit's time constant. It takes approximately five time constants for the capacitor to fully charge or fully discharge. Figure 2.3.6 shows the voltage across the capacitor, vC, as it is allowed to charge and to discharge. Time is shown in terms of the number of elapsed time constants, and voltage is expressed as a fraction of the maximum voltage. The dashed line shows that the time constant, RC, is equivalent to 0.63 × the maximum voltage.

Figure 2.3.6: Voltage across a capacitor as it is charged and then discharged. The scale on the x-axis is time in increments of the time constant, RC, and the scale on the y-axis is the fraction of the applied voltage. The dashed line shows that the time constant is equivalent to 0.63 × the applied voltage.
Voltage across capacitor during charging and discharging.

## Response of a Series RC Circuit to a Sinusoidal Input

If we replace the DC voltage source in Figure 2.3.5 with an AC source, then the capacitor will undergo a continuous fluctuation in its voltage and current as a function of time. We know, from Equation (cap1) that charge, Q, is the product of capacitance, C, and voltage,V, which we can write as a derivative with respect to time.

[Note: corrected; the source prints "We know, form Equation" where this reads "We know, from Equation". A typing error.]

dq/dt = C × dv/dt

### Phase Shift in an AC Circuit

In an AC circuit, as we learned earlier in Equation (sine4), the current, which is equivalent to dq/dt is

i = Ip sin 2πft

where Ip is the peak current. Substituting into Equation (ac1) gives

i = Ip sin 2πft = C × dv/dt

Rearranging this equation and integrating over time gives the time-dependent voltage across the capacitor, vC, as

vC = ((Ip)/(2πfC))(−cos 2πft)

We can rewrite this equation in terms of a sine function instead of a cosine function by recognizing that the two are 90° out of phase with each other; thus

vC = ((Ip)/(2πfC))(sin 2πft − 90) = Vp(sin 2πft − 90)

Comparing Equation (ac2) and Equation (ac5), we see that the current and the voltage are 90° out-of-phase with each other; Figure 2.3.7 shows this visually.

Figure 2.3.7: Response of a capacitor's voltage to a sinusoidal input current showing that they are 90° (π/2) out-of-phase.
Response of a capacitor's voltage to a sinusoidal current.

### Capacitive Reactance, Resistance, and Impedance

[Note: corrected; the source prints "and Impedence" where this reads "and Impedance". A spelling error.]

From Equation (ac5) we see that

Vp = (Ip)/(2πfC)

[Note: corrected; the source prints "(2πft)" where this reads "(2πfC)". From Equation (ac5) the peak voltage is Ip/(2πfC); the denominator has the capacitance C, not the time t.]

Dividing both sides by Ip gives

(Vp)/(Ip) = XC = 1/(2πfC)

[Note: corrected; the source prints "1/(2πft)" where this reads "1/(2πfC)". The capacitive reactance is 1/(2πfC); it depends on frequency and capacitance, not on time.]

where XC is the capacitor's reactance, which, like a resistor's resistance, has units of ohms. Unlike a resistor, however, a capacitor's reactance is frequency dependent and, given the reciprocal relationship between XC and f, it becomes smaller at higher frequencies.

In an RC circuit, both the resistor and the capacitor contribute to the circuit's impedance of the alternating current. Because the contribution of the capacitor is 90° out-of-phase to the contribution from the resistor, the net impedance, Z, is

[Note: corrected; the source prints "In a RC circuit" where this reads "In an RC circuit"; the source prints "circuit's impedence of" where this reads "circuit's impedance of"; the source prints "net impedence, Z" where this reads "net impedance, Z". Spelling and grammar errors.]

Z = √(R^2 + XC^2)

as shown in Figure 2.3.8 where the vector that represents Z is the hypotenuse of a right triangle defined by the resistor's resistance and the capacitor's reactance.

[Note: corrected; the source prints "hypotonus" where this reads "hypotenuse". A spelling error.]

Figure 2.3.8: The relationship between a resistor's resistance, a capacitor's reactance, and the impedance of the RC circuit.
Definition of impedance.

[Note: corrected; the source prints "impedence of the RC" where this reads "impedance of the RC"; the source prints "Definition of impedence" where this reads "Definition of impedance". A spelling error.]

Substituting in Equation (ac7) shows the effect of frequency on impedance.

[Note: corrected; the source prints "on impedence" where this reads "on impedance". A spelling error.]

Z = √(R^2 + (1/(2πfC))^2)

[Note: corrected; the source prints "(2πft)" where this reads "(2πfC)". XC = 1/(2πfC); the time t does not belong in the impedance.]

Writing Ohm's law in terms of impedance, Vp = Ip × Z, and substituting it into Equation (ac9), defines Ip and Vp in terms of impedance.

[Note: corrected; the source prints "in terms of impedence, Vp" where this reads "in terms of impedance, Vp"; the source prints "Vp in terms of impedence" where this reads "Vp in terms of impedance". A spelling error.]

Vp = Ip × √(R^2 + (1/(2πfC))^2)

[Note: corrected; the source prints "(2πft)" where this reads "(2πfC)". XC = 1/(2πfC); the time t does not belong in the impedance.]

Ip = (Vp)/(√(R^2 + (1/(2πfC))^2))

[Note: corrected; the source prints "(2πft)" where this reads "(2πfC)". XC = 1/(2πfC); the time t does not belong in the impedance.]

## Filters Based on RC Circuits

The frequency dependence of an RC circuit provides us with the ability to attenuate some frequencies and to pass other frequencies. This allows for the selective filtering of an input signal. Here we consider the design of a low-pass filter that removes higher frequency signals, and the design of a high-pass filter that removes lower frequency signals. Figure 2.3.9 shows that (a) a low-pass filter places the resistor before the capacitor and measures the output voltage, V_out, across the capacitor, and that (b) a high-pass filter places the capacitor before the resistor and measures the output voltage, V_out, across the resistor.

Figure 2.3.9: Circuits for (a) a low-pass filter and (b) a high-pass filter.
High pass and low pass filters.

### Low-Pass Filter

For the low-pass filter in Figure 2.3.9a, the ratio of the voltage across the capacitor, (Vp)_out, to the peak input voltage, (Vp)_in, is equal to the fraction of the circuit's impedance, Z, attributed to the capacitor's reactance, XC, as expected for a voltage divider that consists of elements in series.

[Note: corrected; the source prints "circuit's impedence, Z" where this reads "circuit's impedance, Z"; the source prints "that consist of elements" where this reads "that consists of elements". Spelling and grammar errors.]

((Vp)_out)/((Vp)_in) = (XC)/Z = ((2πfC)^−1)/(√(R^2 + (1/(2πfC))^2))

Figure 2.3.10a shows the frequency response for a low-pass filter with a 1 × 10^6 Ω resistor and a 1 × 10^−6 F capacitor, removing all frequencies greater than approximately 10^1 Hz.

[Note: corrected; the source prints "1 × 10^6 Hz resistor" where this reads "1 × 10^6 Ω resistor". Resistance is in ohms; RC = (10^6 Ω)(10^−6 F) = 1 s gives a cutoff of 1/(2πRC) ≈ 0.16 Hz, consistent with the response described.]

Figure 2.3.10: The output of (a) a low-pass filter and (b) a high-pass filter.
Output of a low-pass and a high-pass filter.

### High-Pass Filter

For the high-pass filter in Figure 2.3.9b, the ratio of the voltage across the resistor, (Vp)_out, to the peak input voltage, (Vp)_in, is equal to the fraction of the circuit's impedance, Z, attributed to the resistor's resistance, R, as expected for a voltage divider that consists of elements in series.

[Note: corrected; the source prints "circuit's impedence, Z" where this reads "circuit's impedance, Z"; the source prints "that consist of elements" where this reads "that consists of elements". Spelling and grammar errors.]

((Vp)_out)/((Vp)_in) = R/Z = R/(√(R^2 + (1/(2πfC))^2))

Figure 2.3.10b shows the frequency response for a high-pass filter with a 1 × 10^5 Ω resistor and a 1 × 10^−7 F capacitor, removing all frequencies less than approximately 10^−1 Hz.

[Note: corrected; the source prints "for a low-pass filter with a 1 × 10^5 Hz resistor" where this reads "for a high-pass filter with a 1 × 10^5 Ω resistor"; the source prints "than approximately 10^−1" where this reads "than approximately 10^−1 Hz". Figure 2.3.10b is the high-pass filter, which removes the low frequencies; resistance is in ohms, and the frequency needs its unit.]
