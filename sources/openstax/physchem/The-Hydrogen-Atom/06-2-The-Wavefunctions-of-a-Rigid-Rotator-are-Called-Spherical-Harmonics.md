---
title: "6.2: The Wavefunctions of a Rigid Rotator are Called Spherical Harmonics"
book: "Physical Chemistry (LibreTexts)"
chapter: "6: The Hydrogen Atom"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/06%3A_The_Hydrogen_Atom/6.02%3A_The_Wavefunctions_of_a_Rigid_Rotator_are_Called_Spherical_Harmonics"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The solutions to the hydrogen atom Schrödinger equation are functions that are products of a spherical harmonic function and a radial function:

ψ_(n, l, ml)(r, θ, φ) = R_(n, l)(r)Yl^(ml)(θ, φ)

The wavefunctions for the hydrogen atom depend upon the three variables r, θ, and φ and the three quantum numbers n, l, and ml. The variables give the position of the electron relative to the nucleus in spherical coordinates. The absolute square of the wavefunction, |ψ(r, θ, φ)|^2, evaluated at r, θ, and φ gives the probability density of finding the electron inside a differential volume dτ, centered at the position specified by r, θ, and φ.

### Exercise 6.2.1

What is the value of the integral (in braket notation)

⟨ψ(r, θ, φ)|ψ(r, θ, φ)⟩ ?

or expanded in integral notation (in Cartesian coordinates)

∫_−∞^+∞ ∫_−∞^+∞ ∫_−∞^+∞ |ψ(x, y, z)|^2 dx dy dz

or expanded in integral notation (in spherical coordinates)

∫0^+∞ ∫0^π ∫0^(+2π) |ψ(r, θ, φ)|^2 r^2 sin θ dφ dθ dr

[Note: corrected; the source prints "sin θ dθ dφ dr" where this reads "sin θ dφ dθ dr". θ runs from 0 to π and φ from 0 to 2π, so dφ goes with the inner integral.]

**Answer**

No need to know the functional form of the hydrogen atom eigenstates in any coordinate system. If the eigenstates (i.e., solutions to the hydrogen atom Schrödinger equation) are normalized - as we normally like them- then this integral will be 1.

The quantum numbers have names:

- n is called the principal quantum number,
- l is called the angular momentum quantum number, and
- ml is called the magnetic quantum number because (as we will see, the energy in a magnetic field depends upon ml).

Often l is called the azimuthal quantum number because it is a consequence of the θ-equation, which involves the azimuthal angle Θ, referring to the angle to the zenith. These quantum numbers have specific values that are dictated by the physical constraints or boundary conditions imposed upon the Schrödinger equation: n must be an integer greater than 0, l can have the values 0 to n − 1, and ml can have 2 l + 1 values ranging from −l to + l in unit or integer steps. The total number of orbitals with a particular value of n is n^2 - i.e., this is the degeneracy of the system.

[Note: θ, the angle from the zenith, is the polar angle; the azimuthal angle is φ. The text is left as printed.]

### Wavefunction Nomenclature

The values of the quantum number l usually are coded by a letter: s means 0, p means 1, d means 2, f means 3; the next codes continue alphabetically (e.g., g means l = 4). The quantum numbers specify the quantization of physical quantities. The discrete energies of different states of the hydrogen atom are given by n, the magnitude of the angular momentum is given by l, and one component of the angular momentum (usually chosen by chemists to be the z‑component) is given by ml.

The Φ function is found to have the quantum number m, where

Φm(φ) = Am e^(imφ)

and Am is the normalization constant and m = 0, ±1, ±2...±∞. The Θ function was solved and is known as Legendre polynomials, which have quantum numbers m and ℓ. When Θ and Φ are multiplied together, the product is known as spherical harmonics with labeling YJ^m(θ, φ).

Figure 6.2.1: Spherical Harmonics as commonly displayed, sorted by increasing energies and aligned for symmetry.
3D representations of atomic orbitals arranged in a pyramidal structure, showing varying electron density distributions.

Figure 6.2.1 shows the spherical harmonics YJ^M, which are solutions of the angular Schrödinger equation. These are explicitly written in Table 6.2.1 . Notice that these functions are complex in nature.

Table 6.2.1 : spherical harmonics YJ^M

| mJ | J | ΘJ^(mJ)(θ) | Φ(φ) | YJ^(mJ)(θ, φ) |
| --- | --- | --- | --- | --- |
| 0 | 0 | 1/(√2) | 1/(√(2π)) | 1/(√(4π)) |
| 0 | 1 | √(3/2) cos θ | 1/(√(2π)) | √(3/(4π)) cos θ |
| 1 | 1 | √(3/4) sin θ | (1/(√(2π)))e^(iφ) | √(3/(8π)) sin θe^(iφ) |
| -1 | 1 | √(3/4) sin θ | (1/(√(2π)))e^(−iφ) | √(3/(8π)) sin θe^(−iφ) |
| 0 | 2 | √(5/8)(3 cos^2θ − 1) | 1/(√(2π)) | √(5/(16π))(3 cos^2θ − 1) |
| 1 | 2 | √(15/4) sin θ cos θ | (1/(√(2π)))e^(iφ) | √(15/(8π)) sin θ cos θe^(iφ) |
| -1 | 2 | √(15/4) sin θ cos θ | (1/(√(2π)))e^(−iφ) | √(15/(8π)) sin θ cos θe^(−iφ) |
| 2 | 2 | √(15/16) sin^2θ | (1/(√(2π)))e^(2iφ) | √(15/(32π)) sin^2θe^(2iφ) |
| -2 | 2 | √(15/16) sin^2θ | (1/(√(2π)))e^(−2iφ) | √(15/(32π)) sin^2θe^(−2iφ) |

### Exercise 6.2.2

Consider several values for n, and show that the number of orbitals for each n is n^2.

### Exercise 6.2.3

Construct a table summarizing the allowed values for the quantum numbers n, l, and ml. for energy levels 1 through 7 of hydrogen.

### Exercise 6.2.4

The notation 3d specifies the quantum numbers for an electron in the hydrogen atom.

a. What are the values for n and l?
b. What are the values for the energy and angular momentum?
c. What are the possible values for the magnetic quantum number?
d. What are the possible orientations for the angular momentum vector?

**Answer**

a. n = 3 and l = 2
b. Energy: En = (E1)/n^2 = (−13.6eV)/9 = −1.51eV and angular momentum √(l(l + 1))ħ = √(2 × 3)ħ = 2.584 × 10^−34 J·S
c. Magnetic quantum number: ml = −2, −1,0,1,2
d. [Image: Graph showing ellipses along a vertical axis with points labeled at intervals, indicating directions with red arrows.]

## Atomic Orbitals

The hydrogen atom wavefunctions, ψ(r, θ, φ), are called atomic orbitals. An atomic orbital is a function that describes one electron in an atom. The wavefunction with n = 1, l = 0, and ml = 0 is called the 1s orbital, and an electron that is described by this function is said to be “in” the 1s orbital, i.e. have a 1s orbital state. The constraints on n, ℓ, and mℓ that are imposed during the solution of the hydrogen atom Schrödinger equation explain why there is a single 1s orbital, why there are three 2p orbitals, five 3d orbitals, etc. We will see when we consider multi-electron atoms, these constraints explain the features of the Periodic Table. In other words, the Periodic Table is a manifestation of the Schrödinger model and the physical constraints imposed to obtain the solutions to the Schrödinger equation for the hydrogen atom.

The first few solutions of the Schrödinger equation for the H atom are:

Table 6.2.1 : The solutions to the Schrödinger equation for one-electron atoms and ions. Z is the atomic number of the nucleus, and ρ = Zr/(a0), where a0 is the Bohr radius and r is the radial variable.

|  | n | l | ml | ψ_(n, l, ml) |
| --- | --- | --- | --- | --- |
| ψ100 | 1 | 0 | ml = 0 | (1/(√(π)))(Z/(a0))^(3/2)e^{−Zr/(a0)} |
| ψ200 | 2 | 0 | ml = 0 | (1/(√(32π)))(Z/(a0))^(3/2)(2 − Zr/(a0))e^{−Zr/(2a0)} |
| ψ210 | 2 | 1 | ml = 0 | (1/(√(32π)))(Z/(a0))^(5/2)re^{−Zr/(2a0)} cos θ |
| ψ_(21±1) | 2 | 1 | ml = ±1 | (1/(√(64π)))(Z/(a0))^(5/2)re^{−Zr/(2a0)} sin θe^(±iφ) |
| ψ300 | 3 | 0 | ml = 0 | (1/(81√(3π)))(Z/(a0))^(3/2)(27 − 18 Zr/(a0) + 2 (Z^2 r^2)/(a0^2))e^{−Zr/(3a0)} |
| ψ310 | 3 | 1 | ml = 0 | ((√2)/(81√(π)))(Z/(a0))^(5/2)r(6 − Zr/(a0))e^{−Zr/(3a0)} cos θ |
| ψ_(31±1) | 3 | 1 | ml = ±1 | (1/(81√(π)))(Z/(a0))^(5/2)r(6 − Zr/(a0))e^{−Zr/(3a0)} sin θe^(±iφ) |
| ψ320 | 3 | 2 | ml = 0 | (1/(81√(6π)))(Z/(a0))^(7/2)r^2 e^{−Zr/(3a0)}(3 cos^2θ − 1) |
| ψ_(32±1) | 3 | 2 | ml = ±1 | (1/(81√(π)))(Z/(a0))^(7/2)r^2 e^{−Zr/(3a0)} sin θ cos θe^(±iφ) |
| ψ_(32±2) | 3 | 2 | ml = ±2 | (1/(162√(π)))(Z/(a0))^(7/2)r^2 e^{−Zr/(3a0)} sin^2θe^(±2iφ) |

We can take superposition states of the solutions to obtain real wavefunctions that do not have any imaginary components:

Table 6.2.2 : The real solutions to the Schrödinger equation for one-electron atoms and ions. Z is the atomic number of the nucleus, and ρ = Zr/(a0), where a0 is the Bohr radius and r is the radial variable.

|  | n | l | ml | ψ_(n, l) |
| --- | --- | --- | --- | --- |
| ψ_1s | 1 | 0 | 0 | (1/(√(π)))(Z/(a0))^(3/2)e^{−Zr/(a0)} |
| ψ_2s | 2 | 0 | 0 | (1/(√(32π)))(Z/(a0))^(3/2)(2 − Zr/(a0))e^{−Zr/(2a0)} |
| ψ_2pz | 2 | 1 | 0 | (1/(√(32π)))(Z/(a0))^(5/2)re^{−Zr/(2a0)} cos θ |
| ψ_2px | 2 | 1 | ±1 | (1/(√(32π)))(Z/(a0))^(5/2)re^{−Zr/(2a0)} sin θ cos φ |
| ψ_2py | 2 | 1 | ±1 | (1/(√(32π)))(Z/(a0))^(5/2)re^{−Zr/(2a0)} sin θ sin φ |
| ψ_3s | 3 | 0 | 0 | (1/(81√(3π)))(Z/(a0))^(3/2)(27 − 18 Zr/(a0) + 2 (Z^2 r^2)/(a0^2))e^{−Zr/(3a0)} |
| ψ_3pz | 3 | 1 | 0 | ((√2)/(81√(π)))(Z/(a0))^(5/2)r(6 − Zr/(a0))e^{−Zr/(3a0)} cos θ |
| ψ_3px | 3 | 1 | ±1 | ((√2)/(81√(π)))(Z/(a0))^(5/2)r(6 − Zr/(a0))e^{−Zr/(3a0)} sin θ cos φ |
| ψ_3py | 3 | 1 | ±1 | ((√2)/(81√(π)))(Z/(a0))^(5/2)r(6 − Zr/(a0))e^{−Zr/(3a0)} sin θ sin φ |
| ψ_(3d_(z^2)) | 3 | 2 | 0 | (1/(81√(6π)))(Z/(a0))^(7/2)r^2 e^{−Zr/(3a0)}(3 cos^2θ − 1) |
| ψ_3d_xz | 3 | 2 | ±1 | ((√2)/(81√(π)))(Z/(a0))^(7/2)r^2 e^{−Zr/(3a0)} sin θ cos θ cos φ |
| ψ_3d_yz | 3 | 2 | ±1 | ((√2)/(81√(π)))(Z/(a0))^(7/2)r^2 e^{−Zr/(3a0)} sin θ cos θ sin φ |
| ψ_(3d_(x^2−y^2)) | 3 | 2 | ±2 | (1/(81√(2π)))(Z/(a0))^(7/2)r^2 e^{−Zr/(3a0)} sin^2θ cos 2φ |
| ψ_3d_xy | 3 | 2 | ±2 | (1/(81√(2π)))(Z/(a0))^(7/2)r^2 e^{−Zr/(3a0)} sin^2θ sin 2φ |

These are the wavefunctions that are most often depicted. Visualizing the variation of an electronic wavefunction with r, θ, and φ is important because the absolute square of the wavefunction depicts the charge distribution (electron probability density) in an atom or molecule. The charge distribution is central to chemistry because it is related to chemical reactivity. For example, an electron-deficient part of one molecule is attracted to an electron-rich region of another molecule, and such interactions play a major role in chemical interactions ranging from substitution and addition reactions to protein folding and the interaction of substrates with enzymes.

Visualizing wavefunctions and charge distributions is challenging because it requires examining the behavior of a function of three variables in three-dimensional space. This visualization is made easier by considering the radial and angular parts separately, but plotting the radial and angular parts separately do not reveal the shape of an orbital very well. The shape can be revealed better in a probability density plot. To make such a three-dimensional plot, divide space up into small volume elements, calculate ψ^*ψ at the center of each volume element, and then shade, stipple or color that volume element in proportion to the magnitude of ψ^*ψ. Do not confuse such plots with polar plots, which look similar. Probability densities also can be represented by contour maps, as shown in Figure 6.2.2 .

Figure 6.2.2: Contour plots in the x-y plane for the 2px and 3px orbitals of the hydrogen atom. The plots map lines of constant values of R(r)^2; red lines follow paths of high R(r)^2, blue for low R(r)^2. The angular function used to create the figure was a linear combination of two Spherical Harmonic functions.
Two contour plots displaying concentric patterns; left shows two elliptical peaks, right displays a more complex, wavy structure.

Methods for separately examining the radial portions of atomic orbitals provide useful information about the distribution of charge density within the orbitals. Graphs of the radial functions, R(r), for the 1s, 2s, and 2p orbitals plotted in Figure 6.2.3 .

Figure 6.2.3: Radial function, R(r), for the 1s, 2s, and 2p orbitals.
Three graphs displayed side by side, showing various curves, with axes marked and red dotted lines representing data trends.

The 1s function in Figure 6.2.3 starts with a high positive value at the nucleus and exponentially decays to essentially zero after 5 Bohr radii. The high value at the nucleus may be surprising, but as we shall see later, the probability of finding an electron at the nucleus is vanishingly small.

Next notice how the radial function for the 2s orbital, Figure 6.2.3 , goes to zero and becomes negative. This behavior reveals the presence of a radial node in the function. A radial node occurs when the radial function equals zero other than at r = 0 or r = ∞. Nodes and limiting behaviors of atomic orbital functions are both useful in identifying which orbital is being described by which wavefunction. For example, all of the s functions have non-zero wavefunction values at r = 0, but p, d, f and all other functions go to zero at the origin. It is useful to remember that there are n − 1 − l radial nodes in a wavefunction, which means that a 1s orbital has no radial nodes, a 2s has one radial node, and so on.

### Exercise 6.2.5

Examine the mathematical forms of the radial wavefunctions. What feature in the functions causes some of them to go to zero at the origin while the s functions do not go to zero at the origin?

### Exercise 6.2.6

What mathematical feature of each of the radial functions controls the number of radial nodes?

**Answer**

The Laguerre polynomial controls the radial nodes with the number of roots for the Laguerre polynomial is the number of radial nodes.

### Exercise 6.2.7 : Radial Node

At what value of r does the 2s radial node occur?

**Answer**

A node exists when the radial portion of the wavefunction equals 0. The radial portion of the 2s wavefunction is:

R(r) = (1/(2√2))(Z/(α0))^(3/2)(2 − ρ)e^{(−ρ)/2}

where ρ = Zr/(α0), Z = 1 for the hydrogen atom and α0 is the Bohr radius.

Therefore:

R(r) = (1/(2√2))(1/(α0))^(3/2)(2 − r/(α0))e^{−r/(2α0)}

[Note: corrected; the source prints "e^{(−2r)/(α0)}" where this reads "e^{−r/(2α0)}". With Z = 1, e^(−ρ/2) is e^(−r/(2a0)).]

For this wavefunction:

- (1/(α0))^(3/2) is a constant and will never equal 0.
- e^{−r/(2α0)} is an exponential, and will also never equal 0.

[Note: corrected; the source prints "e^{(−2r)/(α0)}" where this reads "e^{−r/(2α0)}". The exponential is e^(−r/(2a0)), as above.]

Therefore, our node is when (2 − r/(α0)) = 0 and r = 2α0

### Exercise 6.2.8

Make a table that provides the energy, number of radial nodes, and the number of angular nodes and total number of nodes for each function with n = 1, n = 2, and n = 3. Identify the relationship between the energy and the number of nodes. Identify the relationship between the number of radial nodes and the number of angular nodes.

**Answer**

| Wavefunction | Energy | Total Nodes | Radial Nodes | Angular Nodes |
| --- | --- | --- | --- | --- |
| 1s | −13.6 eV | 0 | 0 | 0 |
| 2s | −3.4 eV | 1 | 1 | 0 |
| 2p | −3.4 eV | 1 | 0 | 1 |
| 3s | −1.5 eV | 2 | 2 | 0 |
| 3p | −1.5 eV | 2 | 1 | 1 |
| 3d | −1.5 eV | 2 | 0 | 2 |

[Note: corrected; the source prints "| 1s | 13.6 eV |" where this reads "| 1s | −13.6 eV |"; the source prints "| 2s | 3.4 eV |" where this reads "| 2s | −3.4 eV |"; the source prints "| 2p | 3.4 eV |" where this reads "| 2p | −3.4 eV |"; the source prints "| 3s | 1.5 eV |" where this reads "| 3s | −1.5 eV |"; the source prints "| 3p | 1.5 eV |" where this reads "| 3p | −1.5 eV |"; the source prints "| 3d | 1.5 eV |" where this reads "| 3d | −1.5 eV |". The bound-state energies are negative, as in Exercise 6.2.4 (−1.51 eV for n = 3).]

The energy of the electron in each wavefunction is E = −(Z^2 Eh)/(2 n^2)

[Note: corrected; the source prints "E = (Z^2 Eh)/(2 n^2)" where this reads "E = −(Z^2 Eh)/(2 n^2)". The energy is negative.]

The number of total nodes is N − 1, the number of radial nodes is N − L − 1 and the number of angular nodes is L.

The quantity R(r)^*R(r) gives the radial probability density; i.e., the probability density for the electron to be at a point located the distance r from the proton. Radial probability densities for three atomic orbitals are plotted in Figure 6.2.4 .

Figure 6.2.4: Radial probability densities for the 1s, 2s, and 2p orbitals.
Three graphs showing exponential decay with red dashed lines, featuring varying scales and axes.

## Probabilities and Distribution Functions

When the radial probability density for every value of r is multiplied by the area of the spherical surface represented by that particular value of r, we get the radial distribution function. The radial distribution function gives the probability density for an electron to be found anywhere on the surface of a sphere located a distance r from the proton. Since the area of a spherical surface is 4πr^2, the radial distribution function is given by

4πr^2 R(r)^*R(r) (radial distribution function)

[Note: corrected; the source prints "(radial probability density)" where this reads "(radial distribution function)". This product is the radial distribution function, as the sentence above says; R(r)^*R(r) alone is the radial probability density.]

Radial distribution functions are shown in Figure 6.2.5 . At small values of r, the radial distribution function is low because the small surface area for small radii modulates the high value of the radial probability density function near the nucleus. As we increase r, the surface area associated with a given value of r increases, and the r^2 term causes the radial distribution function to increase even though the radial probability density is beginning to decrease. At large values of r, the exponential decay of the radial function outweighs the increase caused by the r^2 term and the radial distribution function decreases.

Figure 6.2.5: The radial distribution function for the 1s, 2s, and 2p orbitals.
Three graphs arranged horizontally, showing varying peak patterns in a red line plot against an x-axis.

### Exercise 6.2.9

Write a quality comparison of the radial function and radial distribution function for the 2s orbital. See Figure 6.2.6 .

**Answer**

R(r) is the radial function of the eigenstate and 4πr^2 R(r)^*R(r) gives the radial distribution function of the distance of electron at distance r from the nucleus (i.e., the probability integrated over all angles).

[Note: for radial functions normalized as in Table 6.4.3 (∫R^2 r^2 dr = 1), the radial distribution function is r^2 R(r)^2, which equals 4πr^2|ψ|^2 for an s orbital; 4πr^2 R(r)^2 integrates to 4π, not 1. The text is left as printed.]

The radial probability function is low at small values of r because of a small surface area near nucleus, for example at 2s at a small value of r the radial probability function is low. At higher values of r the surface area increases while radial probability density decreases, this causes the radial distribution function to increase. In contrast the radial probability density is high at small surface area and when r is near the nucleus, i.e low values of r.

Figure 6.2.6: Comparison of a) the radial distribution function and b) the radial probability density for the 2s orbital.
Abstract pattern with shades of blue, featuring scattered dark shapes and dots across a textured background.

[Note: the line above is the image's alt text, which reads as machine-written and does not describe the image, which shows the 2s radial distribution function and probability density; the caption above describes it.]
