---
title: "11.1: Absorption of Light"
book: "Inorganic Chemistry (LibreTexts)"
chapter: "11: Coordination Chemistry III - Electronic Spectra"
source_url: "https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Inorganic_Chemistry_(LibreTexts)/11%3A_Coordination_Chemistry_III_-_Electronic_Spectra/11.01%3A_Absorption_of_Light"
author: "Khaas"
license: "Unverified"
---

## Introduction

The d-orbital splitting in coordination complexes results in a gap (Δ) that happens to be just the right magnitude to absorb visible light. Because metal complexes can absorb visible light, they display an array of colors. Not only is the color attractive to the eye, it is an indication of the chemical and physical properties of the metal complex. The color (like the magnitude of Δ) depends on the identity of the metal ion, the coordination geometry, and the ligand identity. Chemists don't just "look" at color, though - we measure it using electronic absorption spectroscopy. This is usually done in a lab using a UV-visible spectrophotometer.

An example of such a measurement is shown below in Figure 11.1.1 for a Cu(II) complex. The sample appears a pink color to the eye, and when it is measured using a UV-visible spectrometer, it is shown to absorb visible light at approximately 530 nm. The absorption spectrum can indicate the oxidation state of Cu, the ligands bound to the Cu(II) ion, and the coordination geometry. The color of the solution in Figure 11.1.1 is a shade of pink.

Figure 11.1.1: A UV-visible spectrum of a Cu(II)-peptide complex. A photo of the sample shows its pink color. The splitting diagram for its approximation as an octahedral complex is shown, where an electronic transition from t_2g to eg is shown. (CC-BY-NC-SA; Kathryn Haas)

[Note: corrected; the source prints "octahdral" where this reads "octahedral". A typing error.]

### We observe the complementary color of light absorbed

The absorption spectrum shown above in Figure 11.1.1 is a simple case in which only one absorption band is observed in the visible region of the spectrum. In a simple case like this, the color of a complex can be predicted as the complementary color of the light absorbed by the solution. When a solution or object absorbs a certain wavelength, we see the complementary color; or the color opposite to the absorbed wavelength on the color wheel in Figure 11.1.2. In the case of the Cu(II) complex spectrum shown in Figure 11.1.1, the color of the light absorbed at 530 nm is green, and the predicted color observed is pink.

Figure 11.1.2: Color wheel with approximate wavelengths of colors. (CC-BY-NC-SA; Kathryn Haas)

The table below lists the approximate colors of absorption corresponding to wavelengths of light absorbed, and gives similar information to that deduced from Figure 11.1.2.

Table 11.1.1: Approximate wavelengths of absorption and their complementary colors observed. * This prediction is limited to simple cases where there is only one absorption band in the visible spectrum.

| λ absorbed | E (cm^−1) | E (eV) | Approximate color absorbed | Predicted color observed (by eye) |
| --- | --- | --- | --- | --- |
| > 700 nm | < 14,300 1/(cm) | < 1.77 eV | Infrared | not observable |
| ≈700 − 635 nm | ≈14,300 − 15,700 1/(cm) | ≈1.77 − 1.95 eV | Red | Green |
| ≈635 − 590 nm | ≈15,700 − 16,900 1/(cm) | ≈1.95 − 2.10 eV | Orange | Blue |
| ≈590 − 560 nm | ≈16,900 − 17,900 1/(cm) | ≈2.10 − 2.21 eV | Yellow | Violet |
| ≈560 − 520 nm | ≈17,900 − 19,200 1/(cm) | ≈2.21 − 2.38 eV | Green | Red |
| ≈520 − 490 nm | ≈19,200 − 20,400 1/(cm) | ≈2.38 − 2.53 eV | Cyan | Red-Orange |
| ≈490 − 450 nm | ≈20,400 − 22,200 1/(cm) | ≈2.53 − 2.76 eV | Blue | Orange |
| 400 − 450 nm | ≈22,200 − 25,000 1/(cm) | ≈2.76 − 3.10 eV | Violet | Yellow |
| <400 nm | > 25,000 1/(cm) | > 3.10 eV | Ultraviolet (UV) | not observable |

[Note: corrected; the source prints "| > 700 nm | < 14,000 1/(cm) |" where this reads "| > 700 nm | < 14,300 1/(cm) |"; the source prints "≈14,300 − 16,000 1/(cm)" where this reads "≈14,300 − 15,700 1/(cm)". 700 nm is 14,300 cm^−1 and 635 nm is 15,700 cm^−1, the bounds the neighbouring rows use.]

### Energy of electronic absorption

The absorption spectrum of a metal complex can be used to calculate the splitting energy, Δ, when the absorption corresponds to a d → d transition. Let's use the d^9 Cu(II) complex (discussed above) as an example. A d^9 metal ion has only one visible-light d → d transition. Let's assume that the coordination geometry is approximately octahedral (although it is actually a Jahn-Teller distorted octahedron, and more like a square plane). If we assume it's octahedral, then the d-orbital splitting diagram (see Figure 11.1.1) leads us to expect one electronic transition: an electron is excited from the t_2g to eg. The energy absorbed is equal to the energy of the Δ.

Many cases are not as simple as a d^9 octahedral case because there are multiple possible electronic transitions, and also multiple absorption bands in the UV-vis spectrum. In these more complex cases, the actual energy of the transition are affected by differences in electron-electron repulsion energies in the ground state and the excited states. We will learn how to account for multiple possible excited states and electron-electron repulsions using Tanabe-Sugano diagrams later in this chapter.

## 11.1.1: Beer-Lambert Absorption Law

When light passes through a solution that absorbs light, it enters the solution with an initial intensity (Io) at a given wavelength, and it emerges with an intensity, I.

Figure 11.1.1.1: Initial intensity (Io) of light passes through a solution and emerges as intensity, I. The path length is l. (CC-BY; Kathryn Haas)

The Beer-Lambert Law defines the relationship between absorbance at a given wavelength and the concentration of the solution.

log((Io)/I) = A = εlc

The absorbance (A) is a unitless number because (Io)/I is unitless. The absorbance depends on the concentration (c) and the path length (l). The concentration of the sample solution is measured in molarity (M) and the length of the light path in centimeters (cm). The Greek letter epsilon (ε) in these equations is called the molar absorptivity (also called the molar absorption coefficient). The units of ε are L/(mol × cm) or L × mol^−1 × cm^−1.

Chemists most often measure and report absorbed light in terms of wavelength (λ) in units of nanometers (nm). But the wavelength scale is inconvenient for measuring energy because it is inversely proportional to both frequency and energy. In other disciplines, like physics for example, absorption spectra are more often reported in terms of frequency (ν) using units of inverse centimeters (cm^−1). The relationships between energy (E), ν, and λ are given by the equation below:

E = hv = hc/λ = hc(1/λ) = hcv̄
