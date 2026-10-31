---
title: "27.1: Principles of Gas Chromatography"
book: "Instrumental Analysis (LibreTexts)"
chapter: "27: Gas Chromatography"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/27%3A_Gas_Chromatography/27.01%3A_Principles_of_Gas-Liquid_Chromatography"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

In Chapter 26 we covered several important elements of chromatography, including the factors that affect the migration of solutes, the factors that contribute to band broadening, and the factors under our control that we can use to optimize the separation of a mixture. Here we consider two topics that apply to a gas chromatographic separation, both of which are a function of the properties of gases.

## Retention Times and Retention Volumes

Many of the chromatographic variables gathered in the tables included in Chapter 26.5—both those that are measured directly, provided by the manufacturer, or given by the operating conditions, and those derived from these variables—are given in terms of retention times for the solutes, tr, and for the mobile phase, tm. The product of time and flow rate is a volume

[Note: corrected; the source prints "variables in gathered in" where this reads "variables gathered in"; the source prints "in terms or retention" where this reads "in terms of retention". Typos.]

Vr = tr × u

Vm = tm × u

[Note: corrected; the source prints "Vm = tr × u" where this reads "Vm = tm × u". Vm, the volume needed to elute a non-retained solute, is the product of the flow rate and the non-retained solute's retention time, tm, as in the corrected volume Vm^o = jtm u below.]

where Vr and Vm are the volume of mobile phase needed to elute a solute and the volume of mobile phase needed to elute a non-retained solute, which allows us to describe the retention in terms of volumes instead of times.

Because the volume of gas is a function of pressure, and the pressure drops across the column from an inlet pressure of Pi to an outlet pressure of Po, the retention times are particularly sensitive to operating condition. We can, however, correct the retention volumes by accounting for the compressibility of the gas

Vr^o = jtr u

Vm^o = jtm u

where j is a correction factor that accounts for the drop in pressure

j = (3 × ((Pi/Po)^2 − 1))/(2 × ((Pi/Po)^3 − 1))

[Note: corrected; the source prints "j = (3 × (Pi/Po)^2 − 1)/(2 × (Pi/Po)^3 − 1)" where this reads "j = (3 × ((Pi/Po)^2 − 1))/(2 × ((Pi/Po)^3 − 1))". The James–Martin compressibility factor is j = 3[(Pi/Po)^2 − 1]/2[(Pi/Po)^3 − 1], which goes to 1 when there is no pressure drop (Pi = Po); the printed grouping gives 2 in that limit.]

and where Vr^o and Vm^o are the corrected retention volumes for the solute and the non-retained solutes, respectively. The solute's corrected retention volume can be further normalized by dividing the adjusted retention volume, Vr^o − Vm^o, by the mass of the stationary phase, w, and by adjusting for the column's temperature, Tc, relative to 273 K

Vg = (Vr^o − Vm^o)/w × 273/(Tc)

yielding the solute's specific retention volume, Vg. This value is reasonably insensitive to operating conditions, which makes it useful for qualitative purposes.

## Effect of Diffusion in the Gas Phase on Band Broadening

In Chapter 26 we considered three factors that affect band broadening—multiple paths, longitudinal diffusion, and mass transfer—expressing the relationship between the height of a theoretical plate, H, as a function of the mobile phase's velocity, u, using the van Deemter equation

H = A + B/u + Cu

where A is the contribution from multiple paths, B is the contribution from longitudinal diffusion, and C is the contribution from mass transfer. Because solutes have large diffusion coefficients in the gas phase, the term B/u is often the limiting factor in gas chromatography.
