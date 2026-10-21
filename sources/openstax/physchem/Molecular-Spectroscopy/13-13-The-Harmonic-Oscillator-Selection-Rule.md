---
title: "13.13: The Harmonic Oscillator Selection Rule"
book: "Physical Chemistry (LibreTexts)"
chapter: "13: Molecular Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13%3A_Molecular_Spectroscopy/13.13%3A_The_Harmonic_Oscillator_Selection_Rule"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Selection rules are a very important concept in spectroscopy and physical chemistry, as they directly complement the concept that systems on the atomic level are quantized. Quantization tells us how electrons, neutrons, and protons are set up, and selection rules tell us how, energetically speaking, they may move about. For example, the principal quantum number, n, determines the energy state of particles in the Particle in a Box model. With respect to real systems, the quantum number n describes electronic transitions, such as the excitation of an electron. There are other transitions, such as the rotational transition, which applies to the rigid rotator model and occurs where there are spherical harmonics. Vibrational transitions occur where there is a system that can be visualized as two masses connected by a spring, such as a diatomic molecule.

Selection rules can be very useful in spectroscopy for obtaining information about an unknown substance; any given substance has properties and behaviors that operate within the selection rules and determine the wavelengths of electromagnetic radiation (light) that cause transitions. By tracking these properties, chemists can use techniques like IR spectroscopy to determine the chemical structure of a molecule. For example, a selection rule might govern how a quantum number changes during a transition. That quantum number appears in equations that determine the energy transition based on the mass and other structural properties of a molecule. Thus, if one knows the selection rules and the energy transition, he or she can determine other properties about the molecule, such as its mass or its bond strength.

### Example: Evaluating vibrational transitions using a transition moment integral.

Vibrational systems are described by the harmonic oscillator wavefunctions, which look like

Ψv(x) = Nv Hv(α^(1/2)x)e^(−αx^2/2)

A transition dipole moment can be written to describe a transition along the z-axis.

μz = ∫_−∞^∞ Nv N_(v+1) H_(v+1)(α^(1/2)x)e^(−αx^2/2)H_v μz(α^(1/2)x)e^(−αx^2/2)dx

[Note: corrected; the source prints "e^(−αx^2/2)H_(v+1) μz" where this reads "e^(−αx^2/2)H_v μz". The initial state is v: its Hermite polynomial is H_v.]

The dipole moment is expanded as μ(x) = μ0 + (dμ/dx)0 x + …; the μ0 term gives zero by orthogonality, leaving (dμ/dx)0 times the integral of x.

[Note: corrected; the source prints "μ is the dipole moment, so we pull it out of the integral." where this reads "The dipole moment is expanded as μ(x) = μ0 + (dμ/dx)0 x + …; the μ0 term gives zero by orthogonality, leaving (dμ/dx)0 times the integral of x.". A constant μ pulled out would leave an overlap integral, which is zero.]

μz = μz∫_−∞^∞ Nv N_(v+1) H_(v+1)(α^(1/2)x)e^(−αx^2/2)H_(v+1)(α^(1/2)x)e^(−αx^2/2)dx

Using the idea that the transition moment μz changes on x, we express it as a derivative.

μz = ((dμ)/dx)∫_−∞^∞ Nv N_(v+1) H_(v+1)(α^(1/2)x)e^(−αx^2/2) x H_v(α^(1/2)x)e^(−αx^2/2)dx

[Note: corrected; the source prints "e^(−αx^2/2)H_(v+1)(α^(1/2)x)e^(−αx^2/2)dx" where this reads "e^(−αx^2/2) x H_v(α^(1/2)x)e^(−αx^2/2)dx". The integrand has the factor x and the initial state's H_v, as the recursion below uses.]

To evaluate the integral, we take advantage of a special Hermite relationship: √(α)xHv(√(α)x) = vH_(v−1)(√(α)x) + (1/2)H_(v+1)(√(α)x)

μz = ((Nv N_(v+1))/(√(α)))((dμ)/dx)∫_−∞^∞ H_(v+1)(√(α)x)e^(−αx^2)[vH_(v−1)(√(α)x) + (1/2)H_(v+1)(√(α)x)]dx

[Note: corrected; the source prints "e^(−αx^2/2)[vH_(v−1)" where this reads "e^(−αx^2)[vH_(v−1)". The two Gaussians multiply to e^(−αx^2).]

By inspection, it is clear that the integral only allows transitions of Δv = ±1, because for any other value, the integral will be zero.
