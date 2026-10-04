---
title: "6.6: The Ideal Gas Law and Some Applications"
book: "Beginning Chemistry (Ball)"
chapter: "6: Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Beginning_Chemistry_(Ball)/06%3A_Gases/6.06%3A_The_Ideal_Gas_Law_and_Some_Applications"
author: "Anonymous"
license: "CC BY-NC-SA 3.0"
---

## 6.6: The Ideal Gas Law and Some Applications

### Learning Objectives

- Learn the ideal gas law.
- Apply the ideal gas law to any set of conditions of a gas.
- Apply the ideal gas law to molar volumes, density, and stoichiometry problems.

So far, the gas laws we have considered have all required that the gas change its conditions; then we predict a resulting change in one of its properties. Are there any gas laws that relate the physical properties of a gas at any given time? Consider a further extension of the combined gas law to include _n_. By analogy to Avogadro's law, _n_ is positioned in the denominator of the fraction, opposite the volume. So,

PV/nT = constant

Because pressure, volume, temperature, and amount are the only four independent physical properties of a gas, the constant in the above equation is truly a constant. Indeed, because we do not need to specify the identity of a gas to apply the gas laws, this constant is the same for all gases. We define this constant with the symbol _R_, so the previous equation is written as

PV/nT = R

which is usually rearranged as

PV = nRT

This equation is called the ideal gas law. It relates the four independent properties of a gas at any time. The constant _R_ is called the ideal gas law constant. Its value depends on the units used to express pressure and volume.

Table 6.6.1: Values of the Ideal Gas Law Constant lists the numerical values of R.
| Numerical Value | Units |
| --- | --- |
| 0.08205 | (L.atm / mol.K) |
| 62.36 | (L.torr / mol.K) = (L.mmHg / mol.K) |
| 8.314 | (J / mol.K) |

The ideal gas law is used like any other gas law, with attention paid to the unit and expression of the temperature in kelvin. However, _the ideal gas law does not require a change in the conditions of a gas sample_. The ideal gas law implies that if you know any three of the physical properties of a gas, you can calculate the fourth property.

### Example 6.6.1

A 4.22 mol sample of Ar has a pressure of 1.21 atm and a temperature of 34°C. What is its volume?

**Solution**

The first step is to convert temperature to kelvins:

34 + 273 = 307 K

Now we can substitute the conditions into the ideal gas law:

(1.21atm)(V) = (4.22 mol)(0.08205 (L.atm / mol.K))(307 K)

The _atm_ unit is in the numerator of both sides, so it cancels. On the right side of the equation, the _mol_ and _K_ units appear in the numerator and the denominator, so they cancel as well. The only unit remaining is _L_, which is the unit of volume that we are looking for. We isolate the volume variable by dividing both sides of the equation by 1.21:

V = ((4.22)(0.08205)(307) / 1.21)L

Then solving for volume, we get _V_ = 87.9 L

### Exercise 6.6.1

A 0.0997 mol sample of O2 has a pressure of 0.692 atm and a temperature of 333 K. What is its volume?

**Answer**

3.94 L

### Example 6.6.2

At a given temperature, 0.00332 g of Hg in the gas phase has a pressure of 0.00120 mmHg and a volume of 435 L. What is its temperature?

**Solution**

We are not given the number of moles of Hg directly, but we are given a mass. We can use the molar mass of Hg to convert to the number of moles.

0.00332g Hg × (1 mol Hg / 200.59g Hg) = 0.0000165 mol = 1.65 × 10^−5 mol

Pressure is given in units of millimeters of mercury. We can either convert this to atmospheres or use the value of the ideal gas constant that includes the mmHg unit. We will take the second option. Substituting into the ideal gas law,

(0.00332 mm Hg)(435 L) = (1.65 × 10^−5 mol)(62.36 (L.mmHg / mol.K))T

The mmHg, L, and mol units cancel, leaving the K unit, the unit of temperature. Isolating _T_ on one side, we get

T = ((0.00332)(435) / (1.65 × 10^−5)(62.36))K

Then solving for K, we get _T_ = 1,404 K.

### Exercise 6.6.2

For a 0.00554 mol sample of H2, _P_ = 23.44 torr and _T_ = 557 K. What is its volume?

**Answer**

8.21 L

The ideal gas law can also be used in stoichiometry problems.

### Example 6.6.3

What volume of H2 is produced at 299 K and 1.07 atm when 55.8 g of Zn metal react with excess HCl?

Zn(s) + 2HCl(aq) ⟶ ZnCl2(aq) + H2(g)

**Solution**

Here we have a stoichiometry problem where we need to find the number of moles of H2 produced. Then we can use the ideal gas law, with the given temperature and pressure, to determine the volume of gas produced. First, the number of moles of H2 is calculated:

55.8g Zn × (1mol Zn / 65.41g Zn) × (1 mol H2 / 1mol Zn) = 0.853 H2

Now that we know the number of moles of gas, we can use the ideal gas law to determine the volume, given the other conditions:

(1.07atm)V = (0.853 mol)(0.08205 (L.atm / mol.K))(299 K)

All the units cancel except for L, for volume, which means _V_ = 19.6 L

### Exercise 6.6.3

What pressure of HCl is generated if 3.44 g of Cl2 are reacted in 4.55 L at 455 K?

H2(g) + Cl2(g) → 2HCl(g)

**Answer**

0.796 atm

It should be obvious by now that some physical properties of gases depend strongly on the conditions. What we need is a set of standard conditions so that properties of gases can be properly compared to each other. Standard Temperature and Pressure (STP) is defined as exactly 100 kPa of pressure (0.986 atm) and 273 K (0°C). For simplicity, we will use 1 atm as standard pressure. Defining STP allows us to more directly compare the properties of gases that differ from one another.

One property shared among gases is a molar volume. The molar volume is the volume of 1 mol of a gas. At STP, the molar volume of a gas can be easily determined by using the ideal gas law:

(1 atm)V = (1 mol)(0.08205 (L.atm / mol.K))(273 K)

All the units cancel except for L, the unit of volume. So _V_ = 22.4 L

Note that we have not specified the identity of the gas; we have specified only that the pressure is 1 atm and the temperature is 273 K. This makes for a very useful approximation: _any gas at STP has a volume of 22.4 L per mole of gas_; that is, the molar volume at STP is 22.4 L/mol (Figure 6.6.1). This molar volume makes a useful conversion factor in stoichiometry problems if the conditions are at STP. If the conditions are not at STP, a molar volume of 22.4 L/mol is not applicable. However, if the conditions are at STP, the combined gas law can be used to calculate what the volume of the gas would be if at STP; then the 22.4 L/mol molar volume can be used.

Figure 6.6.1: Molar Volume. A mole of gas at STP occupies 22.4 L, the volume of a cube that is 28.2 cm on a side.
22.4 liters of gas at STP are shown in a cube with a side length of 28.2 cm.

### Example 6.6.4

How many moles of Ar are present in 38.7 L at STP?

**Solution**

We can use the molar volume, 22.4 L/mol, as a conversion factor, but we need to reverse the fraction so that the L units cancel and mol units are introduced. It is a one-step conversion:

38.7 L × (1 mol / 22.4L) = 1.73 mol

### Exercise 6.6.4

What volume does 4.87 mol of Kr have at STP?

**Answer**

109 L

### Example 6.6.5

What volume of H2 is produced at STP when 55.8 g of Zn metal react with excess HCl?

Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g)

**Solution**

This is a stoichiometry problem with a twist: we need to use the molar volume of a gas at STP to determine the final answer. The first part of the calculation is the same as in a previous example:

55.8g Zn × (1mol Zn / 65.41g Zn) × (1 mol H2 / 1mol Zn) = 0.853 H2

Now we can use the molar volume, 22.4 L/mol, because the gas is at STP:

0.853mol H2 × (22.4 L / 1mol H2) = 19.1 L H2

Alternatively, we could have applied the molar volume as a third conversion factor in the original stoichiometry calculation.

### Exercise 6.6.5

What volume of HCl is generated if 3.44 g of Cl2 are reacted at STP?

H2(g) + Cl2(g) → 2HCl(g)

**Answer**

2.17 L

The ideal gas law can also be used to determine the density of gases. Density, recall, is defined as the mass of a substance divided by its volume:

d = m/V

Assume that you have exactly 1 mol of a gas. If you know the identity of the gas, you can determine the molar mass of the substance. Using the ideal gas law, you can also determine the volume of that mole of gas, using whatever the temperature and pressure conditions are. Then you can calculate the density of the gas by using

density = (molar mass / molar volume)

### Example 6.6.6

What is the density of N2 at 25°C and 0.955 atm?

**Solution**

First, we must convert the temperature into kelvin:

25 + 273 = 298 K

If we assume exactly 1 mol of N2, then we know its mass: 28.0 g. Using the ideal gas law, we can calculate the volume:

(0.955 atm)V = (1 mol)(0.08205 (L.atm / mol.K))(298 K)

All the units cancel except for L, the unit of volume. So V = 25.6 L

Knowing the molar mass and the molar volume, we can determine the density of N2 under these conditions using Equation \ref{density}:

d = (28.0 g / 25.6 L) = 1.09 g/L

### Exercise 6.6.6

What is the density of CO2 at a pressure of 0.0079 atm and 227 K? (These are the approximate atmospheric conditions on Mars.)

**Answer**

0.019 g/L

### Chemistry is Everywhere: Breathing

Breathing (more properly called _respiration_) is the process by which we draw air into our lungs so that our bodies can take up oxygen from the air. Let us apply the gas laws to breathing.

Start by considering pressure. We draw air into our lungs because the diaphragm, a muscle underneath the lungs, moves down to reduce pressure in the lungs, causing external air to rush in to fill the lower-pressure volume. We expel air by the diaphragm pushing against the lungs, increasing pressure inside the lungs and forcing the high-pressure air out. What are the pressure changes involved? A quarter of an atmosphere? A tenth of an atmosphere? Actually, under normal conditions, it's only 1 or 2 torr of pressure difference that makes us breathe in and out.

Figure 6.6.2: Breathing Mechanics. Breathing involves pressure differences between the inside of the lungs and the air outside. The pressure differences are only a few torr.
Diagram of a human during inhalation (left) and exhalation (right).

A normal breath is about 0.50 L. If room temperature is about 22°C, then the air has a temperature of about 295 K. With normal pressure being 1.0 atm, how many moles of air do we take in for every breath? The ideal gas law gives us an answer:

(1.0 atm)(0.50 L) = n(0.08205 (L.atm / mol.K))(295 K)

Solving for the number of moles, we get

n = 0.021 mol air

This ends up being about 0.6 g of air per breath—not much, but enough to keep us alive.

## Summary

- The ideal gas law relates the four independent physical properties of a gas at any time.
- The ideal gas law can be used in stoichiometry problems with chemical reactions that involve gases.
- Standard temperature and pressure (STP) are a useful set of benchmark conditions to compare other properties of gases.
- At STP, gases have a volume of 22.4 L per mole.
- The ideal gas law can be used to determine the density of gases.
