---
title: "5.8: The Energy Levels of a Rigid Rotor"
book: "Physical Chemistry (LibreTexts)"
chapter: "5: The Harmonic Oscillator and the Rigid Rotor"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05%3A_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.08%3A_The_Energy_Levels_of_a_Rigid_Rotor"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Compare the classical and quantum rigid rotor in three dimensions
- Demonstrate how to use the Separation of Variable technique to solve the 3D rigid rotor Schrödinger Equation
- Identify and interpret the two quantum numbers for a 3D quantum rigid rotor including the range of allowed values
- Describe the wavefunctions of the 3D quantum rigid rotor in terms of nodes, average displacements and most probable displacements
- Describe the energies of the 3D quantum rigid rotor in terms of values and degeneracies

Rigid rotor means when the distance between particles do not change as they rotate. A rigid rotor only approximates a rotating diatomic molecular if vibration is ignored.

## The Classical Rigid Rotor in 3D

The rigid rotor is a mechanical model that is used to explain rotating systems. The linear rigid rotor model consists of two point masses located at fixed distances from their center of mass. The fixed distance between the two masses and the values of the masses are the only characteristics of the rigid model. However, for many actual diatomics this model is too restrictive since distances are usually not completely fixed and corrections on the rigid model can be made to compensate for small variations in the distance. Even in such a case the rigid rotor model is a useful model system to master.

For a rigid rotor, the total energy is the sum of kinetic (T) and potential (V) energies

E_tot = T + V

The potential energy, V, is set to 0 because the distance between particles does not change within the rigid rotor approximation. However, In reality, V ≠ 0 because even though the average distance between particles does not change, the particles still vibrate. The rigid rotor approximation greatly simplifys our discussion.

Since V = 0 then E_tot = T and we can also say that:

T = (1/2)Σmi vi^2

However, we have to determine vi in terms of rotation since we are dealing with rotation motion. Since,

ω = v/r

where ω is the angular velocity, we can say that:

vi = ω × ri

Thus we can rewrite Equation (5.8.3) as:

T = (1/2)Σmi vi(ω × ri)

Since ω is a scalar constant, we can rewrite Equation (5.8.6) as:

T = (ω/2)Σmi(vi × ri) = (ω/2)Σli = ω L/2

where li is the angular momentum of the i^th particle, and L is the angular momentum of the entire system. Also, we know from physics that,

L = Iω

where I is the moment of inertia of the rigid body relative to the axis of rotation. We can rewrite Equation (5.8.3) as

T = ω (Iω)/2 = (1/2)Iω^2

Equation (5.8.10) shows that the energy of the rigid rotor scales with increasing angular frequency (i.e., the faster is rotates) and with increasing moment of inertia (i.e, the inertial resistance to rotation). Also, as expected, the classical rotational energy is not quantized (i.e., all possible rotational frequencies are possible).

## The Quantum Rigid Rotor in 3D

It is convenient to discuss rotation with in the spherical coordinate system rather than the Cartesian system (Figure 5.8.1 ).

Figure 5.8.1: The spherical coordinate system in terms of the Cartesian system. (Public Domain; Andeggs via Wikipedia).
3D grid representation with lines forming a transparent cube effect, set against a black background.

To solve the Schrödinger equation for the rigid rotor, we will separate the variables and form single-variable equations that can be solved independently. Only two variables θ and φ are required in the rigid rotor model because the bond length, r, is taken to be the constant r0. We first write the rigid rotor wavefunctions as the product of a theta-function depending only on θ and a phi-function depending only on φ

|ψ(θ, φ)⟩ = |Θ(θ)Φ(φ)⟩

We then substitute the product wavefunction and the Hamiltonian written in spherical coordinates into the Schrödinger Equation (5.8.12)

Ĥ|Θ(θ)Φ(φ)⟩ = E|Θ(θ)Φ(φ)⟩

to obtain

−(ħ^2/(2μr0^2))[((∂)/(∂r0))r0^2 (∂)/(∂r0) + 1/(sin θ) · ((∂)/(∂θ)) sin θ (∂)/(∂θ) + 1/(sin^2θ) · (∂^2)/(∂φ^2)]|Θ(θ)Φ(φ)⟩ = E|Θ(θ)Φ(φ)⟩

Since r = r0 is constant for the rigid rotor and does not appear as a variable in the functions, the partial derivatives with respect to r are zero; i.e. the functions do not change with respect to r. We also can substitute the symbol I for the moment of inertia, μr0^2 in the denominator of the left hand side of Equation (5.8.13), to give

−(ħ^2/(2I))[1/(sin θ) · ((∂)/(∂θ)) sin θ (∂)/(∂θ) + 1/(sin^2θ) · (∂^2)/(∂φ^2)]|Θ(θ)Φ(φ)⟩ = E|Θ(θ)Φ(φ)⟩

To begin the process of the Separating of Variables technique, multiply each side of Equation (5.8.14) by (2I)/ħ^2 and (−sin^2θ)/(Θ(θ)Φ(φ)) to give

(1/(Θ(θ)Φ(φ)))[sin θ ((∂)/(∂θ)) sin θ (∂)/(∂θ) + (∂^2)/(∂φ^2)]Θ(θ)Φ(φ) = (−2IE sin^2θ)/ħ^2

[Note: corrected; the source prints "1/(Θ(θ)ψ(φ))" where this reads "1/(Θ(θ)Φ(φ))". The function of φ is Φ(φ).]

Simplify the appearance of the right-hand side of Equation (5.8.15) by defining a parameter λ:

λ = (2IE)/ħ^2.

Note that this λ has no connection to a wavelength; it is merely being used as an algebraic symbol for the combination of constants shown in Equation (5.8.16).

Inserting λ, evaluating partial derivatives, and rearranging Equation (5.8.15) produces

(1/(Θ(θ)))[sin θ ((∂)/(∂θ))(sin θ (∂)/(∂θ))Θ(θ) + (λ sin^2θ)Θ(θ)] = −1/(Φ(φ)) · ((∂^2)/(∂φ^2))Φ(φ)

### Exercise 5.8.1

Carry out the steps leading from Equation (5.8.15) to Equation (5.8.17). Keep in mind that, if y is not a function of x,

dy/dx = y d/dx

[Note: if y does not depend on x, dy/dx = 0; what is meant is that y can be taken out of the derivative of a product: d(yf)/dx = y df/dx. The text is left as printed.]

Equation (5.8.17) says that the function on the left, depending only on the variable θ, always equals the function on the right, depending only on the variable φ, for all values of θ and φ. The only way two different functions of independent variables can be equal for all values of the variables is if both functions are equal to a constant (review separation of variables). We call this constant mJ^2 because soon we will need the square root of it. The two differential equations to solve are the θ-equation

sin θ (d/(dθ))(sin θ d/(dθ))Θ(θ) + (λ sin^2θ − mJ^2)Θ(θ) = 0

and the φ-equation

(d^2/(dφ^2))Φ(φ) + mJ^2Φ(φ) = 0

The partial derivatives have been replaced by total derivatives because only a single variable is involved in each equation.

Often mJ is referred to as just m for convenience.

### Exercise 5.8.2

Show how Equations (5.8.18) and (5.8.21) are obtained from Equation (5.8.17).

### Solving the φ Equation

The φ-equation is similar to the Schrödinger Equation for the free particle. Since we already solved this previously, we immediately write the solutions:

Φm(φ) = Ne^(±imJ φ)

where we introduce the number m to track how many wavelengths of the wavefunction occur around one rotation (similar to the wavelength description of the Bohr atom).

### Exercise 5.8.3

Substitute Equation (5.8.22) into Equation (5.8.21) to show that it is a solution to that differential equation.

**Answer**

Substitute

Φm(φ) = Ne^(±imJ φ)

into

(d^2/(dφ^2))Φ(φ) + mJ^2Φ(φ) = 0

(d^2/(dφ^2))Φ_m(φ) + mJ^2Φ_m(φ) = (d/(dφ))(N(±imJ)e^(±imJ φ)) + mJ^2Φ_m(φ)

= N(±imJ)^2 e^(±imJ φ)) + mJ^2(Ne^(±imJ φ))

= −NmJ^2 e^(±imJ φ) + NmJ^2 e^(±imJ φ) = 0

Thus

Φm(φ) = Ne^(±imJ φ)

is a solution to the differential equations.

The normalization condition, Equation (5.8.23) is used to find a value for N that satisfies Equation (5.8.22).

∫0^(2π) Φ^*(φ)Φ(φ)dφ = 1

The range of the integral is only from 0 to 2π because the angle φ specifies the position of the internuclear axis relative to the x-axis of the coordinate system and angles greater than 2π do not specify additional new positions.

### Exercise 5.8.4

Use the normalization condition in Equation (5.8.23) to demonstrate that N = 1/√(2π).

**Answer**

We need to evaluate Equation (5.8.23) with ψ(φ) = Ne^(±imJφ)

ψ^*(φ)ψ(φ) = Ne^(+imJφ)Ne^(−imJφ)

= N^2

1 = ∫0^(2π) N^*Ndφ = 1

N^2(2π) = 1

N = √(1/2π)

Values for m are found by using a cyclic boundary condition. The cyclic boundary condition means that since φ and φ + 2π refer to the same point in three-dimensional space, Φ(φ) must equal Φ(φ + 2π), i.e.

[Note: corrected; the source prints "φ + 2φ" where this reads "φ + 2π". A full turn adds 2π to φ.]

e^(imJ φ) = e^{imJ(φ + 2π)}

= e^(imJ φ)e^(imJ2π)

For the equality in Equation (5.8.25) to hold, e^(imJ2π) must equal 1, which is true only when

mJ = …, −3, −2, −1,0,1,2,3, …

In other words mJ can equal any positive or negative integer or zero.

### Exercise 5.8.5 : Cyclic Boundary Conditions

Use Euler’s Formula to show that e^(imJ2π) equals 1 for mJ equal to zero or any positive or negative integer.

Thus, the Φ function is

Φ_mJ(φ) = √(1/(2π))e^(±imJ φ)

with

mJ = 0, ±1, ±2, …

### Solving the Θ(θ) Equation

Finding the Θ(θ) functions that are solutions to the θ-equation (Equation (5.8.18)) is a more complicated process. Solutions are found to be a set of power series called Associated Legendre Functions (Table M2), which are power series of trigonometric functions, i.e., products and powers of sine and cosine functions. The Θ(θ) functions, along with their normalization constants, are shown in the third column of Table 5.8.1 .

Table 5.8.1 : Spherical Harmonic Wavefunctions

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

[Note: corrected; the source prints "| -2 | 2 | √(15/16) sin^2θ | (1/(√(2π)))e^(2iφ) |" where this reads "| -2 | 2 | √(15/16) sin^2θ | (1/(√(2π)))e^(−2iφ) |". For mJ = −2, Φ is e^(−2iφ)/√(2π), as the last column of the row has it.]

The solution to the θ-equation requires that λ in Equation (5.8.17) be given by

λ = J(J + 1)

where

J ≥ |mJ|

J can be 0 or any positive integer greater than or equal to |mJ|. Each pair of values for the quantum numbers, J and mJ, identifies a rotational state with a wavefunction (Equation (5.8.11)) and energy (below). Equation (5.8.29) means that J controls the allowed values of mJ.

[Note: corrected; the source prints "greater than or equal to mJ." where this reads "greater than or equal to |mJ|.". J ≥ |mJ|.]

Each pair of values for the quantum numbers, J and mJ, identifies a rotational state and hence a specific wavefunction with associated energy.

The combination of Equations (5.8.16) and (5.8.28) reveals that the energy of this system is quantized.

E = (ħ^2λ)/(2I) = J(J + 1)ħ^2/(2I)

Using Equation (5.8.30), you can construct a rotational energy level diagram (Figure 5.8.2 ). For simplicity, use energy units of ħ^2/(2I).

- J = 0: The lowest energy state has J = 0 and mJ = 0. This state has an energy E0 = 0. There is only one state with this energy, i.e. one set of quantum numbers, one wavefunction, and one set of properties for the molecule.
- J = 1: The next energy level is J = 1 with energy (2ħ^2)/(2I). There are three states with this energy because mJ can equal +1, 0, or ‑1. These different states correspond to different orientations of the rotating molecule in space. States with the same energy are said to be degenerate. The degeneracy of an energy level is the number of states with that energy. The degeneracy of the J = 1 energy level is 3 because there are three states with the energy (2ħ^2)/(2I).
- J = 2: The next energy level is for J = 2. The energy is (6ħ^2)/(2I), and there are five states with this energy corresponding to mJ = +2, + 1, 0, −1, −2. The energy level degeneracy is five. Note that the spacing between energy levels increases as J increases. Also note that the degeneracy increases. The degeneracy is always 2J + 1 because mJ ranges from + J to −J in integer steps, including 0.

Figure 5.8.2: Energy spacing for a rigid rotor (in 3D). Notice the energy depends only on J and not depend on mJ. That is, the energy of the rotor is not affected by its orientation.
Vertical lines labeled with numerical values 4, 3, 2, 1, and an arrow indicating J=0 at the bottom.

Each allowed energy of rigid rotor is (2J + 1)-fold degenerate. Hence, there exist (2J + 1) different wavefunctions with that energy.

### Exercise 5.8.6

Compute the energy levels for a rotating molecule for J = 0 to J = 5 using units of ħ^2/(2I).

**Answer**

This rotating molecule can be assumed to be a rigid rotor molecule. From solving the Schrödinger equation for a rigid rotor we have the relationship for energies of each rotational eigenstate (Equation (5.8.30)):

E = J(J + 1)(ħ^2/2I)

Using this equation, we can plug in the different values of the J quantum number so that

For J=0, E = (0)(1)(ħ^2/2I) = 0 For J=1, E = (1)(2)(ħ^2/2I) = 2(ħ^2/2I)

This shows that as J increases, the energy levels get farther apart (Figure 5.8.2 ).

- For J=2, E = (2)(3)(ħ^2/2I) = 6(ħ^2/2I)
- For J=3, E = (3)(4)(ħ^2/2I) = 12(ħ^2/2I)
- For J=4, E = (4)(5)(ħ^2/2I) = 20(ħ^2/2I)
- For J=5, E = (5)(6)(ħ^2/2I) = 30(ħ^2/2I)

### Exercise 5.8.7

For J = 0 to J = 5, identify the degeneracy of each energy level and the values of the mJ quantum number that go with each value of the J quantum number. Construct a rotational energy level diagram including J = 0 through J = 5. Label each level with the appropriate values for the quantum numbers J and mJ. Describe how the spacing between levels varies with increasing J.

**Answer**

This rotating molecule can be assumed to be a rigid rotor molecule. From solving the Schrödinger equation for a rigid rotor, we have: λ = 2IE/ħ^2

Where λ is an arbitrary parameter not related to wavelength. Additionally, λ is assigned a quantum relation so that λ = J(J + 1)

Thus, combining the two equations and solving for E yields E = J(J + 1)(ħ^2/2I)

Using this equation, we can plug in the different values of J so that

- For J=0, E = (0)(1)(ħ^2/2I) = 0
- For J=1, E = (1)(2)(ħ^2/2I) = 2(ħ^2/2I)
- For J=2, E = (2)(3)(ħ^2/2I) = 6(ħ^2/2I)
- For J=3, E = (3)(4)(ħ^2/2I) = 12(ħ^2/2I)
- For J=4, E = (4)(5)(ħ^2/2I) = 20(ħ^2/2I)
- For J=5, E = (5)(6)(ħ^2/2I) = 30(ħ^2/2I)

This shows that as J increases, the energy levels get farther and farther apart.

[Note: corrected; the source prints "get closer and closer together" where this reads "get farther and farther apart". The spacing between levels J and J + 1 is 2(J + 1)ħ^2/(2I), which grows with J.]

### Interpretation of Quantum Numbers for a Rigid Rotor

The mJ quantum number reflects the component of the angular momentum along the z  direction (and hence is sometimes called the azimuthal quantum number). For a fixed value of J, the different values of mJ reflect the different directions the angular momentum vector could be pointing – for large, positive mJ the angular momentum is mostly along +z; if mJ is zero the angular momentum is orthogonal to z. Physically, the energy of the rotation does not depend on the direction, which is reflected in the fact that the energy depends only on J (Equation (5.8.30)), which measures the length of the vector, not its direction given by mJ.

### Example 5.8.7 : Molecular Oxygen

Calculate J = 0 to J = 1 rotational transition of the O2 molecule with a bond length of 121 pm.

**Solution**

E = ħ^2/I = ħ^2/(μr^2)

μ_O2 = (mO mO)/(mO + mO) = ((15.9994)(15.9994))/(15.9994 + 15.9994) = 7.9997

convert from atomic units to kilogram using the conversion: 1 au = 1.66 x 10^-27 kg. Plug and chug.

E = 5.72 × 10^−23 Joules

[Note: corrected; the source prints "E = 5.71 × 10^−27 Joules" where this reads "E = 5.72 × 10^−23 Joules". ħ^2/(μr^2) = (1.0546 × 10^−34)^2/((7.9997 × 1.66 × 10^−27)(121 × 10^−12)^2) = 5.72 × 10^−23 J.]

## Spherical Harmonics

A wavefunction that is a solution to the rigid rotor Schrödinger Equation (Equation (5.8.11)) can be written as a single function Y(θ, φ), which is called a spherical harmonic function.

YJ^(mJ)(θ, φ) = ΘJ^(|mJ|)(θ)Φ_mJ(φ)

The spherical harmonic wavefunction is labeled with mJ and J because its functional form depends on both of these quantum numbers. These functions are tabulated above for J = 0 through J = 2 and for J = 3 in the Spherical Harmonics Table (M4) Polar plots of some of the θ-functions are shown in Figure 5.8.3 .

Figure 5.8.3: Polar plots in which the distance from the center gives the value of the function Y for the indicated angle θ.
Diagram showing polar coordinates with circles and graphs, illustrating various mathematical functions in a detailed layout.

The two-dimensional space for a rigid rotor is defined as the surface of a sphere of radius r0, as shown in Figure 5.8.4 .

[Note: corrected; the source prints "as shown in Figure 5.8.2 ." where this reads "as shown in Figure 5.8.4 .". Figure 5.8.4 is the sphere; Figure 5.8.2 is the energy-level diagram.]

Figure 5.8.4: Space for a rigid rotor is restricted to the surface of a sphere of radius r0. The only degrees of freedom are motions along θ or φ on the surface of the sphere.
A 3D sphere with labeled axes (x, y, z) and curved arrows indicating rotation directions.

The probability of finding the internuclear axis at specific coordinates θ0 and φ0 within an infinitesimal area ds on this curved surface is given by

Pr[θ0, φ0] = YJ^(m_J*)(θ0, φ0)YJ^(mJ)(θ0, φ0)ds

where the area element ds is centered at θ0 and φ0.

Within the Copenhagen interpretation of wavefunctions, the absolute square (or modulus squared) of the rigid rotor wavefunction YJ^(m_J*)(θ, φ)YJ^(mJ)(θ, φ) gives the probability density for finding the internuclear axis oriented at θ to the z-axis and φ to the x-axis. In spherical coordinates the area element used for integrating θ and φ is

ds = sin θ dθ dφ

### Exercise 5.8.8

Use calculus to evaluate the probability of finding the internuclear axis of a molecule described by the J = 1, mJ = 0 wavefunction somewhere in the region defined by a range in θ of 0° to 45°, and a range in φ of 0° to 90°. Note that a double integral will be needed. Sketch this region as a shaded area on Figure 5.8.3 .

[Note: corrected; the source prints "a range in of 0°" where this reads "a range in φ of 0°". The second range is in φ.]

Consider the significance of the probability density function by examining the J = 1, mJ = 0 wavefunction. The Spherical Harmonic for this case is

Y1^0 = √(3/(4π)) cos θ

The polar plot of (Y1^0)^2 is shown in Figure 5.8.3 . For J = 1 and mJ = 0, the probability of finding the internuclear axis is independent of the angle φ from the x-axis, and greatest for finding the internuclear axis along the z‑axis, but there also is a probability for finding it at other values of θ as well. So, although the internuclear axis is not always aligned with the z-axis, the probability is highest for this alignment. Also, since the probability is independent of the angle φ, the internuclear axis can be found in any plane containing the z-axis with equal probability.

The J = 1, mJ = 0 function is 0 when θ = 90°. Therefore, the entire xy-plane is a node. This fact means the probability of finding the internuclear axis in this particular horizontal plane is 0 in contradiction to our classical picture of a rotating molecule. In the classical picture, a molecule rotating in a plane perpendicular to the xy‑plane must have the internuclear axis lie in the xy‑plane twice every revolution, but the quantum mechanical description says that the probability of being in the xy-plane is zero. This conclusion means that molecules are not rotating in the classical sense, but they still have some, but not all, of the properties associated with classical rotation. The properties they retain are associated with angular momentum.

### Exercise 5.8.9

For each state with J = 0 and J = 1, use the function form of the Y spherical harmonics and Figure 5.8.3 to determine the most probable orientation of the internuclear axis in a diatomic molecule, i.e., the most probable values for θ and φ.

[Note: corrected; the source prints "for θ and θ." where this reads "for θ and φ.". The two angles.]

[Note: corrected; the source prints "harmonics and Figure 5.8.1 to determine" where this reads "harmonics and Figure 5.8.3 to determine". The polar plots are in Figure 5.8.3; Figure 5.8.1 shows the coordinate system.]

### Exercise 5.8.10

Write a paragraph describing the information about a rotating molecule that is provided in the polar plot of Pr[θ, φ] for the J = 1, mJ = ±1 state in Figure 5.8.3 . Compare this information to the classical picture of a rotating object.

[Note: corrected; the source prints "Pr[θ, θ] for the J = 1, mJ = ±1 state in Figure 5.8.1" where this reads "Pr[θ, φ] for the J = 1, mJ = ±1 state in Figure 5.8.3". The probability depends on θ and φ; the polar plots are in Figure 5.8.3.]

## Summary

There are two quantum numbers that describe the quantum behavior of a rigid rotor in three-deminesions: J is the total angular momentum quantum number and mJ is the z-component of the angular momentum. The spherical harmonics called YJ^(mJ) are functions whose probability |YJ^(mJ)|^2 has the well known shapes of the s, p and d orbitals etc learned in general chemistry.

## References

1. Anderson, J.M. Introduction to Quantum Chemistry, 1969, W.A. Benjamin, Inc, pg.91-100.
2. Atkins, Peter and de Paula, Julio. Physical Chemistry for the Life Sciences. New York: W.H. Freeman and Company. p. 515.

## Contributors and Attributions

- Ian Huh
- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("Quantum States of Atoms and Molecules")
- Mark Tuckerman (New York University)
- MIT OpenCourseWare (Robert Guy Griffin and Troy Van Voorhis)
