---
title: "25.5: Polarography"
book: "Instrumental Analysis (LibreTexts)"
chapter: "25: Voltammetry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/25%3A_Voltammetry/25.05%3A_Polarography"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

The first important voltammetric technique to be developed—polarography—uses the dropping mercury (DME) electrode as the working electrode (see Figure 25.2.2 for a schematic diagram of the DME as well as two other types of Hg electrodes). In polarography, as in linear sweep voltammetry, we vary the potential and measure the current. The change in potential can be in the form of a linear ramp, as was the case for linear sweep voltammetry, or it can involve a series of pulses.

## Normal Polarography

As shown in Figure 25.5.1, the current is measured while applying a linear potential ramp.

Figure 25.5.1: Details of normal polarography: (a) the linear potential-excitation signal, and (b) the resulting voltammogram.
Details of normal polarography: (a) the linear potential-excitation signal, and (b) the resulting voltammogram.

Although polarography takes place in an unstirred solution, we obtain a limiting current instead of a peak current. When a Hg drop separates from the glass capillary and falls to the bottom of the electrochemical cell, it mixes the solution. Each new Hg drop, therefore, grows into a solution whose composition is identical to the bulk solution. The oscillations in the current are a result of the Hg drop’s growth, which leads to a time-dependent change in the area of the working electrode. The limiting current—which also is called the diffusion current—is measured using either the maximum current, i_max, or from the average current, i_avg. The relationship between the analyte’s concentration, C_A, and the limiting current is given by the Ilkovic equations

i_max = 706 nD^(1/2)m^(2/3)t^(1/6)CA = K_max CA

i_avg = 607 nD^(1/2)m^(2/3)t^(1/6)CA = K_avg CA

where n is the number of electrons in the redox reaction, D is the analyte’s diffusion coefficient, m is the flow rate of Hg, t is the drop’s lifetime and K_max and K_avg are constants. The half-wave potential, E1/2, provides qualitative information about the redox reaction.

## Pulse Polarography

Normal polarography has been replaced by various forms of pulse polarography, several examples of which are shown in Figure 25.5.2 [see Osteryoung, J. J. Chem. Educ. 1983, 60, 296–298 for a comprehensive review]. Normal pulse polarography (Figure 25.5.2a), for example, uses a series of potential pulses characterized by a cycle of time τ, a pulse-time of t_p, a pulse potential of ΔE_p, and a scan rate of ΔE/Δt. Typical experimental conditions for normal pulse polarography are τ ≈ 1 s, t_p ≈ 50 ms, and ΔE/Δt ≈ 2 mV/s. The initial value of ΔE_p ≈ 2 mV, and it increases by ≈ 2 mV with each pulse. The current is sampled at the end of each potential pulse for approximately 17 ms before returning the potential to its initial value. The shape of the resulting voltammogram is similar to Figure 25.5.1, but without the current oscillations. Because we apply the potential for only a small portion of the drop’s lifetime, there is less time for the analyte to undergo oxidation or reduction and a smaller diffusion layer. As a result, the faradaic current in normal pulse polarography is greater than in the polarography, resulting in better sensitivity and smaller detection limits.

Figure 25.5.2: Potential-excitation signals and voltammograms for (a) normal pulse polarography, (b) differential pulse polarography, (c) staircase polarography, and (d) square-wave polarography. The current is sampled at the time intervals shown by the black rectangles. When measuring a change in current, Δi, the current at point 1 is subtracted from the current at point 2. The symbols in the diagrams are as follows: τ is the cycle time; ΔE_p is a fixed or variable pulse potential relative to the beginning of the cycle; and t_p is the pulse time. The scan rate (change in potential per unit time) is shown by the dashed arrow.
Potential-excitation signals and voltammograms for (a) normal pulse polarography, (b) differential pulse polarography, (c) staircase polarography, and (d) square-wave polarography.

In differential pulse polarography (Figure 25.5.2b) the current is measured twice per cycle: for approximately 17 ms before applying the pulse and for approximately 17 ms at the end of the cycle. The difference in the two currents gives rise to the peak-shaped voltammogram. Typical experimental conditions for differential pulse polarography are τ ≈ 1 s, t_p ≈ 50 ms, ΔE_p ≈ 50 mV, and ΔE/Δt ≈ 2 mV/s.

The voltammogram for differential pulse polarography is approximately the first derivative of the voltammogram for normal pulse polarography. To see why this is the case, note that the change in current over a fixed change in potential, Δi/ΔE, approximates the slope of the voltammogram for normal pulse polarography. You may recall that the first derivative of a function returns the slope of the function at each point. The first derivative of a sigmoidal function is a peak-shaped function.

Other forms of pulse polarography include staircase polarography (Figure 25.5.2c) and square-wave polarography (Figure 25.5.2d). One advantage of square-wave polarography is that we can make τ very small—perhaps as small as 5 ms, compared to 1 s for other forms of pulse polarography—which significantly decreases analysis time. For example, suppose we need to scan a potential range of 400 mV. If we use normal pulse polarography with a ΔE/Δt of 2 mV/cycle and a τ of 1 s/cycle, then we need 200 s to complete the scan. If we use square-wave polarography with a ΔE/Δt of 2 mV/cycle and a τ of 5 ms/cycle, we can complete the scan in 1 s. At this rate, we can acquire a complete voltammogram using a single drop of Hg!

## Applications

Polarography is used extensively for the analysis of metal ions and inorganic anions, such as IO3^− and NO3^−. We also can use polarography to study organic compounds with easily reducible or oxidizable functional groups, such as carbonyls, carboxylic acids, and carbon-carbon double bonds.
