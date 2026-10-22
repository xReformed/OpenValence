---
title: "31.4: The Total Scattering Intensity is Related to the Periodic Structure of the Electron Density in the Crystal"
book: "Physical Chemistry (LibreTexts)"
chapter: "31: Solids and Surface Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/31%3A_Solids_and_Surface_Chemistry/31.04%3A_The_Total_Scattering_Intensity_is_Related_to_the_Periodic_Structure_of_the_Electron_Density_in_the_Crystal"
author: "Anonymous"
license: "CC BY 4.0"
---

## Systematic Absences

Diffraction data from a face-centered cubic crystal will be missing reflections (spots) from all hkl planes in which h, k and l are of mixed parity, so that two of h + k, h + l and k + l are odd. The reason for these absent reflections is that the arrangement of the lattice points leads to total destructive interference of the diffracted X-rays. Although the lack of data may seem like a hindrance to determining a crystal structure, the systematic absence of reflections from specific families of planes actually reveals the presence of symmetry features in the crystal lattice that help identify the lattice type. Crystals with centering features (body-centered cels, face-centered cells, etc.), glide planes, and screw axes will produce diffraction patterns with systematic absences.

[Note: corrected; the source prints "in which h + k, h + l, and k + l are odd numbers" where this reads "in which h, k and l are of mixed parity, so that two of h + k, h + l and k + l are odd". The three sums cannot all be odd (they add to 2(h + k + l)); the reflections are absent when h, k, l are mixed odd and even, as the Example below shows.]

## The Structure Factor

Systematic reflection absences, as well as variations in reflection intensity, are described mathematically by the structure factor, a mathematical function that incorporates all of the variables that affect how X-rays are scattered by the electrons of the atoms in the crystal lattice. (We do not concern ourselves with the effect of the nucleus on scattering because the mass of the nucleus is so large relative to the mass of an electron.)

### The Atomic/Ionic Scattering Factor

The construction of a structure factor begins with the fundamental assumption that the total scattering intensity is related to the electron density of the atoms in the crystal. But the scattering also depends on the scattering angle and the wavelength of the radiation. To account for all of these parameters, an atomic scattering factor, f, has been developed:

f = 4π∫0^∞ ρ(r)((sin kr)/kr)r^2 dr

In this equation, r is the radius of an idealized spherical atom, ρ(r) is the electron density of this idealized atom. Because the X-ray wavelength used in diffraction experiments is of similar size as the size of the atoms it scatters from, there will be interference among the waves scattered by the electrons on a single atom. The more electrons in an atom and the more diffuse the electron cloud around the atom, the greater the destructive interference among the scattered waves. To account for this intra-atomic interference, the (sin kr)/kr term is included in the scattering factor. Here, k is equal to (4π sin θ)/λ, where θ is the Bragg angle (half the scattering angle) and λ is the wavelength of the X-ray. A plot of f versus (sin θ)/λ is shown in figure 31.4.1. Notice that at θ = 0, f is equal to the number of electrons in the particle. Also notice that, although the isoelectronic ions Ca^2+ and Cl^- have an identical f value at θ = 0, their f values differ at larger angles because the ions have different electron densities. Finally, notice that H atoms do not scatter a great deal, thus making them difficult to "locate" among the scattering from all of the larger atoms.

[Note: corrected; the source prints "where θ is the scattering angle" where this reads "where θ is the Bragg angle (half the scattering angle)". The scattering angle is 2θ.]

Figure 31.4.1: A graph showing the influence of the number of electrons per particle and the angle of diffraction on the scattering factor of various atoms and monatomic ions irradiated by a fixed wavelength X-ray beam. (CC BY-NC; Ümit Kaya via LibreTexts)
Graph showing the relationship between sin(θ)/λ and f for various ions, with labeled curves for H, C, O, Cl⁻, Ca²⁺, Fe²⁺ and Br⁻.

[Note: corrected; the source prints "for H, C, O, Cl, Ca²⁺, Re⁺, and Br⁻" where this reads "for H, C, O, Cl⁻, Ca²⁺, Fe²⁺ and Br⁻". The image's alt text, machine-written, misreads the image; this describes it.]

### Scattering by Neighboring Atoms and Neighboring Planes

Along with the scattering factor for individual atoms, we must also take into consideration the interferences caused by neighboring atoms in the lattice. As our example, we will analyze a crystal that contains atoms of two elements, here designated P and Q. We will assume that the respective atoms have scattering factors f_P and f_Q. We will also assume that the distance between successive P atoms is the same as the distance between successive Q atoms. This distance is a/h, where a is the length of the unit cell along the a axis. Finally, we will assume that the distance between P and Q atoms is x. In this arrangement, the P atoms lie in neighboring hkl planes, and the Q atoms lie in neighboring hkl planes that are interleaved between the hkl planes of the P atoms. Figure 31.4.2 shows the arrangement of the atoms lying along the a axis.

Figure 31.4.2: The scattering from a lattice comprised of atoms of two different elements. The P atoms lie in neighboring hkl planes, and the Q atoms lie in neighboring hkl planes that are interleaved between the hkl planes of the P atoms. (CC BY-NC; Ümit Kaya via LibreTexts)
Diagram illustrating a system of points with labeled axes and wave-like lines, representing interactions or signals in a spatial arrangement.

In this arrangement, the difference in path length of X-rays scattered by successive P atoms, Δ_PP, (and the difference in path length of X-rays scattered by successive Q atoms, (Δ_QQ) is described by the van Laue equation

Δ_PP = ΔQQ = (a/h)(cosα − cosα0) = nλ

The difference in path length for X-rays diffracted by neighboring P and Q atoms is thus

ΔPQ = x(cos α − cos α0) = nhλx/a

Because of this difference in path length, there is a resulting a phase difference between the scattered beams from neighboring P and Q atoms due to the difference in the time required to travel the different distances:

φ = 2π (Δ_PQ)/λ = 2π hλx/λa = (2πhx)/a

The light scattered from neighboring P and Q atoms will have an amplitude dependent on the scattering factors of each atom and the angular frequency of the X-ray radiation, ω

A = fP cosωt + fQ cos(ωt + φ)

Replacing the cosine functions with exponential functions will simplify the following mathematical calculation, thus

A = fP e^(iωt) + fQ e^{i(ωt + φ)}

Because intensity is proportional to amplitude squared,

I ∝ |A|^2 = (fP e^(iωt) + fQ e^{i(ωt + φ)})(fP e^(−iωt) + fQ e^{−i(ωt + φ)})

[Note: corrected; the source prints "fQ e^{−i(ωt + φ)}" where this reads "fQ e^{−i(ωt + φ)})". A closing bracket is missing.]

which can be simplified to

fP^2 + fP fQ e^(iφ) + fP fQ e^(−iφ) + fQ^2

Switching back to cosine functions, we get

fP^2 + fQ^2 + 2fP fQcosφ

The fP^2 term represents the constructive interference of the x-rays scattered from the parallel planes through the P atoms. The fQ^2 term represents the constructive interference of the x-rays scattered from the parallel planes through the Q atoms. The 2fP fQcosφ term represents the interference from the scattering from the two sets of interleaved P and Q planes. From this equation, we can see that the intensity of the scattered light is independent of the angular frequency of the X-ray radiation because there is no term involving ω. Thus, in equation (1) the frequency-dependent e^(iωt) must have a value of 1, and the equation can be rewritten and redefined as the structure factor along the a axis of the crystal, F(h)

F(h) = fP + fQ e^{iφ} = fP + fQ e^{(2πihx)/a}

[Note: corrected; the source prints "F(h) = fP + fQ e^{iφ)} = fP + fQ e^{(2πhx)/a}" where this reads "F(h) = fP + fQ e^{iφ} = fP + fQ e^{(2πihx)/a}". A stray bracket, and the exponent is imaginary, iφ = 2πihx/a, here and in the next two equations.]

For a unit cell with sides of length a, b, and c that contains atoms of type j positioned at points xj, yj and zj, equation (2) becomes

F(hkl) = Σj fj e^{2πi(hxj/a + kyj/b + lzj/c)}

[Note: corrected; the source prints "e^{2π(hxj/a" where this reads "e^{2πi(hxj/a". As above: 2πi.]

Here fj is the scattering factor for type j atoms, and hkl are the Miller indicies of the diffracting planes. By convention, xj, yj, and zj are expressed in units of a, b, and c, so that xj' = (xj)/a, yj' = (yj)/b, and zj' = (zj)/c, to give

F(hkl) = Σj fj e^{2πi(hxj' + kyj' + lzj')}

[Note: corrected; the source prints "e^{2π(hxj'" where this reads "e^{2πi(hxj'". As above: 2πi.]

### Combining the Influences

F(hkl) is the structure factor of a crystal, and the intensity of reflections from this crystal are proportional to |F(hkl)|^2. The strcuture factor can thus be used to explain the systematic absences described in the introduction to this section. Whenever F(hkl) = 0 for a set of Miller planes, the reflection will be absent.

### Example 31.4.1

Derive an expression for the structure factor of a face-centered cubic unit cell of identical atoms. Determine which hkl planes will not produce reflections.

**Solution**

The coordinates of the lattice points in a face-centered cubic unit cell are (0,0,0), (1,0,0), (0,1,0), (0,0,1), (1,0,1), (1,1,0), (1,1,1), (0,1,1), (0,1/2,1/2), (1/2,1/2,0), (1/2,0,1/2), (1,1/2,1/2), (1/2,1,1/2), (1/2,1/2,1). The length of the sides of the cell is a. Each corner lattice point is shared by 8 cells, so only 1/8 of each of these atoms is considered to be contributing to the scattering. Each face lattice point is shared by 2 cells, so only 1/2 of each of these atoms is considered to be contributing to the scattering. We will use equation (4) to solve the problem, remembering that a = b = c for a cubic cell:

F(hkl) = (1/8)f(e^{2πi(0 + 0 + 0)} + e^{2πi(h + 0 + 0)} + e^{2πi(0 + k + 0)} + e^{2πi(0 + 0 + l)} + e^{2πi(h + 0 + l)} + e^{2πi(h + k + 0)} + e^{2πi(h + k + l)} + e^{2πi(0 + k + l)}) + (1/2)f(e^{2πi(0 + k/2 + l/2)} + e^{2πi(h/2 + k/2 + 0)} + e^{2πi(h/2 + 0 + l/2)} + e^{2πi(h + k/2 + l/2)} + e^{2πi(h/2 + k + l/2)} + e^{2πi(h/2 + k/2 + l)})

Because e^(2πi) = 1 and e^(πi) = -1, equation (5) becomes

F(hkl) = (1/8)f(1^0 + 1^h + 1^k + 1^l + 1^(h + l) + 1^(h + k) + 1^(h + k + l) + 1^(k + l)) + (1/2)f((−1)^(k + l) + (−1)^(h + k) + (−1)^(h + l) + (−1)^(2h + k + l) + (−1)^(h + 2k + l) + (−1)^(h + k + 2l))

Because 1^n = 1 for all n,

F(hkl) = (1/8)f(8) + (1/2)f((−1)^(k + l) + (−1)^(h + k) + (−1)^(h + l) + (−1)^(2h + k + l) + (−1)^(h + 2k + l) + (−1)^(h + k + 2l))

Upon testing a few hkl planes, you will see that if h, k, l are a mixture of odd and even numbers, then F(hkl) = 0, but if h, k, l are all odd or all even, the value of F(hkl) = 4f. Three examples:

All odd F(111) = f(1 + (1/2)((−1)^2 + (−1)^2 + (−1)^2 + (−1)^4 + (−1)^4 + (−1)^4)) = f(1 + 3) = 4f

[Note: corrected; the source prints "(−1)^4 = f(1 + 3) = 4f" where this reads "(−1)^4)) = f(1 + 3) = 4f". Two closing brackets are missing, here and in the next two lines.]

All even F(222) = f(1 + (1/2)((−1)^4 + (−1)^4 + (−1)^4 + (−1)^8 + (−1)^8 + (−1)^8)) = f(1 + 3) = 4f

[Note: corrected; the source prints "(−1)^8 = f(1 + 3) = 4f" where this reads "(−1)^8)) = f(1 + 3) = 4f". As above.]

Mix F(110) = f(1 + (1/2)((−1)^1 + (−1)^2 + (−1)^1 + (−1)^3 + (−1)^3 + (−1)^2)) = f(1 + (1/2)((−1) + 1 + (−1) + (−1) + (−1) + 1)) = f(1 + (−1)) = 0

[Note: corrected; the source prints "(−1)^2 = f(1 + (1/2)((−1)" where this reads "(−1)^2)) = f(1 + (1/2)((−1)"; the source prints "= 1 + (−1) = 0" where this reads "= f(1 + (−1)) = 0". As above; and the factor f stays to the end.]

<!-- end of example -->

For crystals comprised of atoms of more than one element, there are often reflections that are weaker than other reflections. These lower intensities are sometimes created when the scattering factors of different elements are not identical, leading to incomplete destructive interference, a smaller F(hkl), and thus a reflection of lower intensity. The lower intensity reflections are also a direct result of the structure factor. For example, for an ionically-bonded compound with the formula MX, which crystallizes in a face-centered cubic lattice, the structure factor can be shown to be

F(hkl) = f_(+)[1 + (−1)^(h + k) + (−1)^(h + l) + (−1)^(k + l)] + f_(−)[(−1)^(h + k + l) + (−1)^h + (−1)^k + (−1)^l]

[Note: corrected; the source prints "f(hkl) = f_(+)" where this reads "F(hkl) = f_(+)". The structure factor F(hkl), not a scattering factor f.]

Inspection of this equation reveals that F(hkl) = 4(f_(+) + f_(−)) if h, k, l are all even, and F(hkl) = 4(f_(+) − f_(−))if h, k, l are all odd. Thus, reflections from the all-even hkl planes are more intense than reflections from the all-odd hkl planes.

## See also

The structure factor. P. Coppens. International Tables for Crystallography (2006). Vol. B, ch. 1.2, pp. 10-24

## Contributors

- - Online Dictionary of Crystallography
- Tom Neils - Grand Rapids Community College
