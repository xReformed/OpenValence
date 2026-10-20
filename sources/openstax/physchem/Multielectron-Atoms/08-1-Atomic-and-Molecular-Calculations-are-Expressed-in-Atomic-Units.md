---
title: "8.1: Atomic and Molecular Calculations are Expressed in Atomic Units"
book: "Physical Chemistry (LibreTexts)"
chapter: "8: Multielectron Atoms"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08%3A_Multielectron_Atoms/8.01%3A_Atomic_and_Molecular_Calculations_are_Expressed_in_Atomic_Units"
author: "Wikipedia"
license: "CC BY-SA 4.0"
---

### Learning Objectives

- Demonstrate how solving electron structure problems are less cluttered by switching to atomic units instead of SI units.

Atomic units (au or a.u.) form a system of natural units which is especially convenient for atomic physics calculations. Atomic units, like SI units, have a unit of mass, a unit of length, and so on. However, the use and notation is somewhat different from SI. Suppose a particle with a mass of m has 3.4 times the mass of electron. The value of mass m can be written in three ways:

- m = 3.4 me: This is the clearest notation (but least common), where the atomic unit is included explicitly as a symbol.
- m = 3.4 a.u.: This notation is ambiguous, but is common. Here, it means that the mass m is 3.4 times the atomic unit of mass. If considering a length L of 3.4 times the atomic unit of length, the equation would look the same, L = 3.4 a.u. The dimension needs to be inferred from context, which is sloppy.
- m = 3.4: This notation is similar to the previous one, and has the same dimensional ambiguity. It comes from formally setting the atomic units to 1 (Table 8.1.1 ).

This article deals with "Hartree type" of atomic units, where the numerical values of the following four fundamental physical constants are all unity by definition:

Table 8.1.1 : Fundamental atomic units

| Dimension | Name | Symbol/Definition | Value in SI units | Value in Atomic Units |
| --- | --- | --- | --- | --- |
| mass | electron rest mass | me | 9.109×10^−31 kg | 1 |
| charge | elementary charge | e | 1.602×10^−19 C | 1 |
| action | reduced Planck's constant | ħ = h/(2π) | 1.054×10^−34 J·s | 1 |
| electric constant^−1 | Coulomb force constant | ke = 1/(4πεo) | 8.987 x 10^9 kg·m^3·s^−2·C^−2 | 1 |

### Example 8.1.1 : Simplifying the Hamiltonian

Use the atomic units definitions in Table 8.1.1 to contrast the Hamiltonian for a Helium atom in Si units and in atomic units.

**Solution**

In SI units, the Hamiltonian for a Helium atom is

Ĥ = −(ħ^2/(2 me))(∇1^2 + ∇2^2) − (2e^2)/(4πε0 r1) − (2e^2)/(4πε0 r2) + e^2/(4πε0 r12)

In atomic units, the same Hamiltonian

Ĥ = −(1/2)(∇1^2 + ∇2^2) − 2/(r1) − 2/(r2) + 1/(r12)

All the units that make the SI version of the Hamiltonian disappear to emphasize the key aspects of the operator.

<!-- end of example -->

Atomic units are derived from certain fundamental properties of the physical world, and are free of anthropocentric considerations. It should be kept in mind that atomic units were designed for atomic-scale calculations in the present-day universe, with units normalize the reduced Planck constant and also mass and charge of the electron are set to 1, and, as a result, the speed of light in atomic units is a large value, 1/α≈137. For example, the orbital velocity of an electron around a small atom is of the order of 1 in atomic units. Table 8.1.2 give a few derived units. Some of them have proper names and symbols assigned, as indicated in the table.

Table 8.1.2 : Derived atomic units

| Dimension | Name | Symbol | Expression | Value in SI units | Value in more common units |
| --- | --- | --- | --- | --- | --- |
| length | bohr | ao | 4πε0 ħ^2/(m_e e^2) = ħ/(m_e cα) | 5.291×10^−11 m | 0.0529 nm = 0.529 Å |
| energy | hartree | Eh | m_e e^4/(4πε0 ħ)^2 = α^2 m_e c^2 | 4.359×10^−18 J | 27.2 eV = 627.5 kcal·mol^−1 |
| time |  |  | ħ/E_h | 2.418×10^−17 s |  |
| velocity |  |  | a0E_h/ħ = αc | 2.187×10^6 m·s^−1 |  |

[Note: corrected; the source prints "| 0.052 nm = 0.529 Å |" where this reads "| 0.0529 nm = 0.529 Å |". 5.291 × 10^−11 m is 0.0529 nm.]

## Bohr model in atomic units

Atomic units are chosen to reflect the properties of electrons in atoms. This is particularly clear from the classical Bohr model of the hydrogen atom in its ground state. The ground state electron orbiting the hydrogen nucleus has (in the classical Bohr model):

- Orbital velocity = 1
- Orbital radius = 1
- Angular momentum = 1
- Orbital period = 2π
- Ionization energy = 1/2
- Electric field (due to nucleus) = 1
- Electrical attractive force (due to nucleus) = 1
