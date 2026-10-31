---
title: "26.5: Summary of Important Relationships for Chromatography"
book: "Instrumental Analysis (LibreTexts)"
chapter: "26: Introduction to Chromatographic Separations"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/26%3A_Introduction_to_Chromatographic_Separations/26.05%3A_Summary_of_Important_Relationships_for_Chromatography"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

In this chapter we have introduced many chromatographic variables, some directly measured from the chromatogram, provided by the manufacturer, or from the operating conditions, and some derived from these variables. The following two tables summarize these variables.

Table 26.5.1. Chromatographic Variables Directly Measured From Chromatogram, Provided by Manufacturer, or From Operating Conditions

| variable | name | source |
| --- | --- | --- |
| tr | retention time for solute | chromatogram |
| tm | retention time for non-retained solute | chromatogram |
| w | peak width | chromatogram |
| u | mobile phase flow rate | operating conditions |
| L | length of column's stationary phase | manufacturer |
| dc | diameter of column | manufacturer |
| dp | diameter of packing material | manufacturer |
| df | thickness of stationary phase | manufacturer |
| Vs | volume of stationary phase | operating conditions |

Table 26.5.2. Derived Chromatographic Variables

| variable | name | equation to derive value |
| --- | --- | --- |
| Vm | volume of mobile phase | Vm = tm u |
| k | retention factor | k = (tr − tm)/(tm) |
| tr^′ | adjusted retention time | tr^′ = tr − tm |
| D | distribution ratio | D = k × (Vm)/(Vs) |
| α | selectivity factor | α = (kB)/(kA) |
| R_AB | resolution | R_AB = (√(NB))/4 × (α − 1)/α × (kB)/(1 + kB) |
| N | number of theoretical plates | N = 16((tr)/w)^2 |
| H | height of theoretical plates | H = Lw^2/(16 tr^2) = L/N |
| Hp | height due to multiple paths | Hp = 2λdp |
| Hd | height due to longitudinal diffusion | Hd = (2γDm)/u |
| Hs | height due to mass transfer in stationary phase | Hs = ((qkdf^2)/((1 + k)^2 Ds))u |
| Hm | height due to mass transfer in mobile phase | Hm = ((fn(dp^2, dc^2))/(Dm))u |

[Note: corrected; the source prints "D = k × (Vs)/(Vm)" where this reads "D = k × (Vm)/(Vs)". Section 26.2 defines the retention factor as k = D × V_s/V_m, so solving for D gives D = k × V_m/V_s.]

[Note: the table uses u in two senses. V_m = t_m u holds only if u is the volumetric flow rate (Table 26.5.1 calls it the "mobile phase flow rate"), but in H_d, H_s and H_m, as in Sections 26.3 and 26.4, u is the mobile phase's linear velocity.]
