---
title: "31.5: The Structure Factor and the Electron Density Are Related by a Fourier Transform"
book: "Physical Chemistry (LibreTexts)"
chapter: "31: Solids and Surface Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/31%3A_Solids_and_Surface_Chemistry/31.05%3A_The_Structure_Factor_and_the_Electron_Density_Are_Related_by_a_Fourier_Transform"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## Fourier Transform

In mathematics, a Fourier transform is an operation that converts one real function into another. In the case of FTIR, a Fourier transform is applied to a function in the time domain to convert it into the frequency domain. One way of thinking about this is to draw the example of music by writing it down on a sheet of paper. Each note is in a so-called "sheet" domain. These same notes can also be expressed by playing them. The process of playing the notes can be thought of as converting the notes from the "sheet" domain into the "sound" domain. Each note played represents exactly what is on the paper just in a different way. This is precisely what the Fourier transform process is doing to the collected data of x-ray diffraction. This is done in order to determine the electron density around the crystalline atoms in real space. In the previous section, we treated the lattice points as individual, localized electron densities. In reality, the electron density of a unit cell is distributed over a much larger space. The following equations can be used to determine the electrons' positions:

p(x, y, z) = Σ_(h=−∞)^∞Σ_(k=−∞)^∞Σ_(l=−∞)^∞F(hkl)e^{−2πi(hx/a + ky/b + lz/c)}

Employing a Fourier transform

F(hkl) ∝ ∫_−∞^∞ ∫_−∞^∞ ∫_−∞^∞ p(x, y, z)e^{2πi(hx/a + ky/b + lz/c)}dx dy dz

F(q) = |F(q)|e^{iφ(q)}

where p(xyz) is the electron density function, and F(hkl) is the structure factor, in reciprocal space. Equation (1) represents the Fourier expansion of the electron density function. To solve for F(hkl), equation (1) needs to be evaluated over all values of h, k, and l, resulting in equation (2). The resulting function F(hkl) is generally expressed as a complex number (as seen in equation (3) above) with |F(q)| representing the magnitude of the function and φ representing the phase.

[Note: corrected; the source prints "and F(hkl) is the electron density function in real space" where this reads "and F(hkl) is the structure factor, in reciprocal space"; the source prints "Equation (2) represents the Fourier expansion" where this reads "Equation (1) represents the Fourier expansion". p(x, y, z) is the real-space electron density, and its Fourier expansion is equation (1); F(hkl), its Fourier coefficient, comes from equation (2).]

The structure factor may also be expressed as

F_hkl = F_hkl e^(iα_hkl) = Σj fj e^{2πi(hxj + kyj + lzj)} = Σj fj cos[2π(hxj + kyj + lzj)] + iΣj fj sin[2π(hxj + kyj + lzj)]

[Note: The first F_hkl is bold in the source, the complex structure factor; the second is its modulus, |F_hkl|.]

= A_hkl + iB_hkl

where the sum is over all atoms in the unit cell, x_j,y_j,z_j are the positional coordinates of the j th atom, f_j is the scattering factor of the j th atom, and α_hkl is the phase of the diffracted beam.The intensity of a diffracted beam is directly related to the amplitude of the structure factor, but the phase must normally be deduced by indirect means. In structure determination, phases are estimated and an initial description of the positions and anisotropic displacements of the scattering atoms is deduced. From this initial model, structure factors are calculated and compared with those experimentally observed. Iterative refinement procedures attempt to minimize the difference between calculation and experiment until a satisfactory fit has been obtained.

Figure 31.5.1 shows an electron density map of a quinoline derivative (and one water molecule) that was determined from X-ray diffraction data.

Figure 31.5.1: Electron density map of a quinoline derivative, along with the line structure of the compound. The red sphere at the bottom of the density map is the oxygen of a water molecule that is closely associated with the N atom of the quinoline. (electron density map courtesy of J Med Chem. 2013 Oct 24; 56(20): 8073–8088. © 2013 American Chemical Society, CC-BY )
Chemical structure of a compound featuring nitrogen and carbon atoms, including a benzene ring and an amide group.

## Contributor

Tom Neils - Grand Rapids Community College
