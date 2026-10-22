---
title: "31.3: The Spacing Between Lattice Planes Can Be Determined from X-Ray Diffraction Measurements"
book: "Physical Chemistry (LibreTexts)"
chapter: "31: Solids and Surface Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/31%3A_Solids_and_Surface_Chemistry/31.03%3A_The_Spacing_Between_Lattice_Planes_Can_Be_Determined_from_X-Ray_Diffraction_Measurements"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

X-ray crystallography is an instrumental technique used to determine the arrangement of atoms of a crystalline solid in three-dimensional space. This technique takes advantage of the interatomic spacing of most crystalline solids by employing them as a diffraction grating for x-ray light, which has wavelengths on the order of 1 angstrom (10^-8 cm).

## Introduction

In 1895, Wilhelm Rontgen discovered x- rays. The nature of x- rays, whether they were particles or electromagnetic radiation, was a topic of debate until 1912. If the wave idea was correct, researchers knew that the wavelength of this light would need to be on the order of 1 Angstrom (Å) (10^-8 cm). Diffraction and measurement of such small wavelengths would require a grating with spacing on the same order of magnitude as the light.

In 1912, Max von Laue, at the University of Munich in Germany, postulated that atoms in a crystal lattice had a regular, periodic structure with interatomic distances on the order of 1 Å. Without having any evidence to support his claim on the periodic arrangements of atoms in a lattice, he further postulated that the crystalline structure could be used to diffract x-rays, much like a grating in an infrared spectrometer can diffract infrared light. His postulate was based on the following assumptions: the atomic lattice of a crystal is periodic, x- rays are electromagnetic radiation, and the interatomic distance of a crystal is on the same order of magnitude as x-ray light. Laue's predictions were confirmed when two researchers: Friedrich and Knipping, successfully photographed the diffraction pattern associated with the x-ray radiation of crystalline CuSO4·5H2O. The science of x-ray crystallography was born.

The arrangement of the atoms needs to be in an ordered, periodic structure for them to diffract the x-ray beams. A set of mathematical calculations is then used to produce a diffraction pattern that is characteristic of the particular arrangement of atoms in that crystal. X-ray crystallography remains to this day the primary tool used by researchers in characterizing the structure and bonding of many compounds.

## Diffraction

Diffraction is a phenomenon that occurs when light encounters an obstacle. The waves of light can either bend around the obstacle or, in the case of a slit, can travel through the slits. The resulting diffraction pattern will show areas of constructive interference, where two waves interact in phase, and destructive interference, where two waves interact out of phase. Calculation of the phase difference can be explained by examining Figure 31.3.1 below.

Figure 31.3.1: This figure shows the angular relationship of x-rays scattered by particles lying along the a axis in a crystalline solid. The incoming rays enter the crystal at an angle of α0, the angle of incidence, and scatter from the lattice points at an angle of α. (CC BY-NC; Ümit Kaya via LibreTexts)
Diagram depicting light rays and angles in a geometric context, with labeled points A, B, C, D and angle notations α and α₀.

In the figure above, two parallel waves are striking a grating at an angle αo. The incident wave on the right travels farther than the one on the left by a distance of BD before reaching the grating. The scattered wave depicted below the gradient on the left, travels farther than the scattered wave on the right by a distance of AC. So the total path difference between the left wave and the right wave is AC - BD. To observe a wave of high intensity (one created through constructive interference), the difference AC - BD must equal an integer number of wavelengths to be observed at the angle α, AC - BD = nλ, where λ is the wavelength of the light. Applying some basic trigonometric properties, the following two equations can be shown about the lines:

BD = x cos(αo)

and

AC = x cos(α)

where x is the distance between the points where the diffraction repeats. Combining the two equations,

x(cos α − cos αo) = nλ

## Rotating Crystal Method

To describe the periodic, three dimensional nature of crystals, the Laue equations are employed:

a(cos α − cos αo) = nhλ

b(cos β − cos βo) = nkλ

c(cos γ − cos γo) = nlλ

where a, b, and c are the three axes of the unit cell, αo, βo, γo are the angles of incident radiation, and α, β, and γ are the angles of the diffracted radiation. The n term refers to the order of the reflections. If n = 1, then the reflections are first-order reflections. If n = 2, then the reflections are second-order reflections.

A diffraction signal (constructive interference) will arise when h, k, and l are integer values. The rotating crystal method employs these equations. X-ray radiation is shown onto a crystal, surrounded by a cylindrical film, as it rotates around one of its unit cell axis. The beam strikes the crystal at a 90-degree angle. Using equation 1 above, we see that if αo is 90 degrees, then cos αo = 0. For the equation to hold true, we can set h=0, given that α= 90. The above three equations will be satisfied at various points as the crystal rotates. This gives rise to a diffraction pattern (shown in figure 31.3.2 as multiple h values). The cylindrical film is then unwrapped and developed.

The following equation can be used to determine the length of the axis around which the crystal was rotated:

a = nhλ/(cos(tan^−1(r/y)))

[Note: corrected; the source prints "cos(tan^−1(y/r))" where this reads "cos(tan^−1(r/y))". α is measured from the rotation axis, so tan α = r/y, as the Example below uses it (tan α = 5.50/2.50); with y/r it would give 169.6 pm instead of 373 pm.]

where a is the length of the axis, y is the distance from h = 0 to the h of interest, r is the radius of the film (or the distance from the center of the crystal to the detector), and λ is the wavelength of the x-ray radiation used.

Figure 31.3.2: The x-ray diffraction pattern from the h00 planes of a crystal mounted such that the incoming x-rays are perpendicular to the a axis of the crystal.

Modern diffractometers use electronic scintillation detectors or area detectors that act as a sort of electronic "film." With these detectors, the diffraction data can be sent directly to a computer and analyzed much more rapidly than photographic film. Figure 31.3.3 shows a mounted crystal and its x-ray diffraction pattern.

[Note: corrected; the source prints "diffraction pattern.Example 31.3.1" where this reads "diffraction pattern.". A stray "Example 31.3.1" label in the source; the Example follows below.]

Figure 31.3.3: Top) This is a picture of a protein crystal mounted on a loop (UC Davis Structural Biology Lab);

Bottom) This is a diffraction pattern created from the APS Kinase D63N Mutant of the above crystal (UC Davis Structural Biology Lab)
Close-up of a small, shiny, teardrop-shaped object with a square top, reflecting light against a plain background.
A circular image with a central bright point surrounded by concentric patterns and lines radiating outward.

For a detector with a flat surface, the reflections from a primitive cubic crystal would hit the surface in a pattern similar to that shown in figure 31.3.4

Figure 31.3.1: A portion of the reflection pattern from some hkl planes of a primitive cubic crystal. The crystal is aligned so that the incoming X-ray beam is perpendicular to the a axis. This same arrangement is used for the crystal in Example 31.3.1 below. (CC BY-NC; Ümil Kaya via LibreTexts)
Diagram showing X-ray diffraction with a crystal lattice, incident X-rays, and marked lattice planes like (110), (100), and (010).

[Note: This caption repeats the number 31.3.1; the text calls this figure 31.3.4, the number the next figure carries. The Figure 31.3.5 cited below for Bragg's construction (the points B, C, F, G) is not on the page. The text is left as printed.]

### Example 31.3.1

Suppose that you wish to measure the length of a unit cell a of a crystal that has primitive cubic unit cell. A close up of the experimental set up is shown in Figure 31.3.4. The crystal is aligned so that the incoming x-rays are perpendicular to the a-axis.The distance between the center of the crystal and the detector surface is 5.50 cm. The distance between the detected spots scattered by the 000 planes and the 100 planes is 2.50 cm, and it is scattered at an angle of α. The wavelength of light from the copper x-ray source is 154.4 pm. Determine the length of the unit cell along the a-axis.

Figure 31.3.4: An expanded view of x-rays undergoing scattering from the 100 planes at an angle of α. (CC BY-NC; Ümit Kaya via LibreTexts)
Diagram illustrating an X-ray setup with angles labeled, showing distances of 5.50 cm and 2.50 cm.

**Solution**

The angle α can be determined by the fact that tan α = 5.50/2.50. Thus tan^−1(2.2), gives α = 65.56. We can then find the length of a from the equation for a above

[Note: corrected; the source prints "from equation 30.3.10" where this reads "from the equation for a above". There is no Equation 30.3.10; the equation is a = nhλ/cos α above.]

a =((1)(154.4 pm))/(cos(65.56)) = 373.2 pm

## Bragg's Law Applied to Crystals

A second way to analyze the x-ray diffraction is to use Bragg's law. Diffraction of an x-ray beam by crystalline solids occurs when the light interacts with the electron cloud surrounding the atoms of the solid. Because of the periodic crystalline structure of a solid, it is possible to describe it as a series of planes with an equal interplanar distance. As an x-ray beam hits the surface of the crystal at an angle θ, some of the light will be diffracted at that same angle away from the solid (Figure 31.3.5). The remainder of the light will travel into the crystal and some of that light will interact with the second plane of atoms. Some of the light will be diffracted at an angle θ, and the remainder will travel deeper into the solid. This process will repeat for the many planes in the crystal. The x-ray beams travel different path lengths before hitting the various planes of the crystal, so after diffraction, the beams will interact constructively only if the path length difference is equal to an integer number of wavelengths (just like in the normal diffraction case above). In the figure below, the difference in path lengths of the beam striking the first plane and the beam striking the second plane is equal to BG + GF. So, the two diffracted beams will constructively interfere (be in phase) only if BG + GF = nλ. Basic trigonometry will tell us that the two segments are equal to one another with the interplanar distance times the sine of the angle θ. So we get:

BG = GF = d sin θ

[Note: corrected; the source prints "BG = BC = d sin θ" where this reads "BG = GF = d sin θ". The two equal segments are BG and GF, whose sum gives 2d sin θ = nλ.]

Thus,

2d sin θ = nλ

This equation is known as Bragg's Law, named after W. H. Bragg and his son, W. L. Bragg; who discovered this geometric relationship in 1912. Bragg's Law relates the distance between two planes in a crystal and the angle of reflection to the x-ray wavelength. The x-rays that are diffracted off the crystal have to be in-phase in order to be observed. Only certain angles that satisfy the following condition will register:

sin θ = nλ/(2d)

For historical reasons, the resulting diffraction spectrum is represented as intensity vs. 2θ.

### Example 31.3.2

[Note: corrected; the source prints "### Example 31.3.1" where this reads "### Example 31.3.2". The second Example of the section.]

Cesium metal has a body-centered cubic crystal structure with a unit cell length of 605.0 pm. Use the Bragg equation to determine the first two observed diffraction angles from the 110 planes when the wavelength of the x-rays is 154.4 pm.

**Solution**

From section 31.2.3, we found that the interplanar distance for cubic cells can be calculated using the equation

1/d^2 = (h^2 + k^2 + l^2)/a^2

If we square sin θ = nλ/(2d) we get

[Note: corrected; the source prints "If we square equation 31.3.10" where this reads "If we square sin θ = nλ/(2d)". There is no Equation 31.3.10; it is Bragg's law above.]

sin^2θ = (n^2λ^2)/(4d^2)

Combining these two equations, we get

sin^2θ = ((n^2λ^2)/(4a^2))(h^2 + k^2 + l^2)

The smallest diffraction angle occurs when n = 1

sin^2θ = (((1^2)(154.4 pm)^2)/(4(605.0)^2))(1^2 + 1^2 + 0^2) = 0.03257

[Note: corrected; the source prints "(154.4 , pm)^2" where this reads "(154.4 pm)^2". A stray comma in the source's TeX (\ , for \,), here and below.]

Thus, θ = 10.40°

The next largest diffraction angle occurs when n = 2

sin^2θ = (((2^2)(154.4 pm)^2)/(4(605.0)^2))(1^2 + 1^2 + 0^2) = 0.1303

[Note: corrected; the source prints "(154.4 , pm)^2" where this reads "(154.4 pm)^2". As above.]

Thus, θ = 21.16°

<!-- end of example -->

In the next section, we will discuss the factors that determine the phase and the amplitude of the multiple scattered x-rays produced during diffraction.

## References

1. Skoog, D . A.; Holler, F. J.; Stanley R. C.; Principles of Instrumental Analysis; Thomson Brooks/Cole: Belmont CA, 2007.
2. Sands, D. E.; Introduction to Crystallography; Dover Publications, Inc.; New York, 1975
3. Drenth, Jan. Principles of Protein x-ray Crystallography, 3rd edition. 2007, Springer Science + Business Media, LLC. pg. 14.
4. Rhodes, Gale. Crystallography Made Crystal Clear, 3rd edition. 2006, Elsevier Inc. pg. 33, 55 - 57.
5. Actual experimentation done of APS Kinase D63N Penicillium Chrysogenum.

## Contributors

- Roman Kazantsev (UC Davis) and Michelle Towles (UC Davis)
- Tom Neils - Grand Rapids Community College
