---
title: "1.6: Mathematical Treatment of Measurement Results"
book: "Chemistry 1e (OpenStax)"
chapter: "1. Essential Ideas of Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/01%3A_Essential_Ideas_of_Chemistry/1.06%3A_Mathematical_Treatment_of_Measurement_Results"
author: "OpenStax"
license: "CC BY 4.0"
---

It is often the case that a quantity of interest may not be easy (or even possible) to measure directly but instead must be calculated from other directly measured properties and appropriate mathematical relationships. For example, consider measuring the average speed of an athlete running sprints. This is typically accomplished by measuring the _time_ required for the athlete to run from the starting line to the finish line, and the _distance_ between these two lines, and then computing _speed_ from the equation that relates these three properties:

speed = distance / time

An Olympic-quality sprinter can run 100 m in approximately 10 s, corresponding to an average speed of

100 m / 10 s = 10 m/s

Note that this simple arithmetic involves dividing the numbers of each measured quantity to yield the number of the computed quantity (100/10 = 10) _and likewise_ dividing the units of each measured quantity to yield the unit of the computed quantity (m/s = m/s). Now, consider using this same relation to predict the time required for a person running at this speed to travel a distance of 25 m. The same relation between the three properties is used, but in this case, the two quantities provided are a speed (10 m/s) and a distance (25 m). To yield the sought property, time, the equation must be rearranged appropriately:

time = distance / speed

The time can then be computed as:

25 m / (10 m/s) = 2.5 s

Again, arithmetic on the numbers (25/10 = 2.5) was accompanied by the same arithmetic on the units (m/m/s = s) to yield the number and unit of the result, 2.5 s. Note that, just as for numbers, when a unit is divided by an identical unit (in this case, m/m), the result is “1”—or, as commonly phrased, the units “cancel.”

These calculations are examples of a versatile mathematical approach known as dimensional analysis (or the factor-label method). Dimensional analysis is based on this premise: _the units of quantities must be subjected to the same mathematical operations as their associated numbers_. This method can be applied to computations ranging from simple unit conversions to more complex, multi-step calculations involving several different quantities.

## 1.6.1: Conversion Factors and Dimensional Analysis

A ratio of two equivalent quantities expressed with different measurement units can be used as a unit conversion factor. For example, the lengths of 2.54 cm and 1 in. are equivalent (by definition), and so a unit conversion factor may be derived from the ratio,

2.54 cm / 1 in. (2.54 cm = 1 in.) or 2.54 cm/in.

Several other commonly used conversion factors are given in Table 1.6.1.

Table 1.6.1: Common Conversion Factors
| Length | Volume | Mass |
| --- | --- | --- |
| 1 m = 1.0936 yd | 1 L = 1.0567 qt | 1 kg = 2.2046 lb |
| 1 in. = 2.54 cm (exact) | 1 qt = 0.94635 L | 1 lb = 453.59 g |
| 1 km = 0.62137 mi | 1 ft^3 = 28.317 L | 1 (avoirdupois) oz = 28.349 g |
| 1 mi = 1609.3 m | 1 tbsp = 14.787 mL | 1 (troy) oz = 31.103 g |

When we multiply a quantity (such as distance given in inches) by an appropriate unit conversion factor, we convert the quantity to an equivalent value with different units (such as distance in centimeters). For example, a basketball player’s vertical jump of 34 inches can be converted to centimeters by:

34 in. × 2.54 cm / 1 in. = 86 cm

Since this simple arithmetic involves _quantities_, the premise of dimensional analysis requires that we multiply both _numbers and units_. The numbers of these two quantities are multiplied to yield the number of the product quantity, 86, whereas the units are multiplied to yield

in. × cm / in.

Just as for numbers, a ratio of identical units is also numerically equal to one,

in. / in. = 1

and the unit product thus simplifies to _cm_. (When identical units divide to yield a factor of 1, they are said to “cancel.”) Using dimensional analysis, we can determine that a unit conversion factor has been set up correctly by checking to confirm that the original unit will cancel, and the result will contain the sought (converted) unit.

### Example 1.6.1: Using a Unit Conversion Factor

The mass of a competition Frisbee is 125 g. Convert its mass to ounces using the unit conversion factor derived from the relationship 1 oz = 28.349 g (Table 1.6.1).

**Solution**

If we have the conversion factor, we can determine the mass in kilograms using an equation similar the one used for converting length from inches to centimeters.

x oz = 125 g × unit conversion factor

We write the unit conversion factor in its two forms:

1 oz / 28.349 g and 28.349 g / 1 oz

The correct unit conversion factor is the ratio that cancels the units of grams and leaves ounces.

```
x oz = 125 g × 1 oz / 28.349 g
     = (125 / 28.349) oz
     = 4.41 oz (three significant figures)
```

### Exercise 1.6.1

Convert a volume of 9.345 qt to liters.

**Answer**

8.844 L

Beyond simple unit conversions, the factor-label method can be used to solve more complex problems involving computations. Regardless of the details, the basic approach is the same—all the factors involved in the calculation must be appropriately oriented to insure that their labels (units) will appropriately cancel and/or combine to yield the desired unit in the result. This is why it is referred to as the factor-label method. As your study of chemistry continues, you will encounter many opportunities to apply this approach.

### Example 1.6.2: Computing Quantities from Measurement Results

What is the density of common antifreeze in units of g/mL? A 4.00-qt sample of the antifreeze weighs 9.26 lb.

**Solution**

Since density = mass / volume, we need to divide the mass in grams by the volume in milliliters. In general: the number of units of B = the number of units of A × unit conversion factor. The necessary conversion factors are given in Table 1.7.1: 1 lb = 453.59 g; 1 L = 1.0567 qt; 1 L = 1,000 mL. We can convert mass from pounds to grams in one step:

9.26 lb × 453.59 g / 1 lb = 4.20 × 10^3 g

We need to use two steps to convert volume from quarts to milliliters.

1. _Convert quarts to liters._

   4.00 qt × 1 L / 1.0567 qt = 3.78 L

2. _Convert liters to milliliters._

   3.78 L × 1000 mL / 1 L = 3.78 × 10^3 mL

Then,

density = (4.20 × 10^3 g) / (3.78 × 10^3 mL) = 1.11 g/mL

Alternatively, the calculation could be set up in a way that uses three unit conversion factors sequentially as follows:

(9.26 lb / 4.00 qt) × (453.59 g / 1 lb) × (1.0567 qt / 1 L) × (1 L / 1000 mL) = 1.11 g/mL

### Exercise 1.6.2

What is the volume in liters of 1.000 oz, given that 1 L = 1.0567 qt and 1 qt = 32 oz (exactly)?

**Answer**

2.956 × 10^-2 L

### Example 1.6.3: Computing Quantities from Measurement Results

While being driven from Philadelphia to Atlanta, a distance of about 1250 km, a 2014 Lamborghini Aventador Roadster uses 213 L gasoline.

- a. What (average) fuel economy, in miles per gallon, did the Roadster get during this trip?
- b. If gasoline costs $3.80 per gallon, what was the fuel cost for this trip?

**Solution**

(a) We first convert distance from kilometers to miles:

1250 km × 0.62137 mi / 1 km = 777 mi

and then convert volume from liters to gallons:

213 L × (1.0567 qt / 1 L) × (1 gal / 4 qt) = 56.3 gal

Then,

(average) mileage = 777 mi / 56.3 gal = 13.8 miles/gallon = 13.8 mpg

Alternatively, the calculation could be set up in a way that uses all the conversion factors sequentially, as follows:

(1250 km / 213 L) × (0.62137 mi / 1 km) × (1 L / 1.0567 qt) × (4 qt / 1 gal) = 13.8 mpg

(b) Using the previously calculated volume in gallons, we find:

56.3 gal × $3.80 / 1 gal = $214

### Exercise 1.6.3

A Toyota Prius Hybrid uses 59.7 L gasoline to drive from San Francisco to Seattle, a distance of 1300 km (two significant digits).

- a. What (average) fuel economy, in miles per gallon, did the Prius get during this trip?
- b. If gasoline costs $3.90 per gallon, what was the fuel cost for this trip?

**Answer a**

51 mpg

**Answer b**

$62

## 1.6.2: Conversion of Temperature Units

We use the word temperature to refer to the hotness or coldness of a substance. One way we measure a change in temperature is to use the fact that most substances expand when their temperature increases and contract when their temperature decreases. The mercury or alcohol in a common glass thermometer changes its volume as the temperature changes. Because the volume of the liquid changes more than the volume of the glass, we can see the liquid expand when it gets warmer and contract when it gets cooler.

To mark a scale on a thermometer, we need a set of reference values: Two of the most commonly used are the freezing and boiling temperatures of water at a specified atmospheric pressure. On the Celsius scale, 0 °C is defined as the freezing temperature of water and 100 °C as the boiling temperature of water. The space between the two temperatures is divided into 100 equal intervals, which we call degrees. On the Fahrenheit scale, the freezing point of water is defined as 32 °F and the boiling temperature as 212 °F. The space between these two points on a Fahrenheit thermometer is divided into 180 equal parts (degrees).

Defining the Celsius and Fahrenheit temperature scales as described in the previous paragraph results in a slightly more complex relationship between temperature values on these two scales than for different units of measure for other properties. Most measurement units for a given property are directly proportional to one another (y = mx). Using familiar length units as one example:

length in feet = (1 ft / 12 in.) × length in inches

where

- y = length in feet,
- x = length in inches, and
- the proportionality constant, m, is the conversion factor.

The Celsius and Fahrenheit temperature scales, however, do not share a common zero point, and so the relationship between these two scales is a linear one rather than a proportional one (y = mx + b). Consequently, converting a temperature from one of these scales into the other requires more than simple multiplication by a conversion factor, m, it also must take into account differences in the scales’ zero points (b).

The linear equation relating Celsius and Fahrenheit temperatures is easily derived from the two temperatures used to define each scale. Representing the Celsius temperature as x and the Fahrenheit temperature as y, the slope, m, is computed to be:

```
m = Δy / Δx
  = (212 °F − 32 °F) / (100 °C − 0 °C)
  = 180 °F / 100 °C
  = 9 °F / 5 °C
```

The y-intercept of the equation, b, is then calculated using either of the equivalent temperature pairs, (100 °C, 212 °F) or (0 °C, 32 °F), as:

```
b = y − mx
  = 32 °F − (9 °F / 5 °C) × 0 °C
  = 32 °F
```

The equation relating the temperature scales is then:

T_F = ((9 °F / 5 °C) × T_C) + 32 °F

An abbreviated form of this equation that omits the measurement units is:

T_F = 9/5 × T_C + 32

Rearrangement of this equation yields the form useful for converting from Fahrenheit to Celsius:

T_C = 5/9 (T_F − 32)

As mentioned earlier in this chapter, the SI unit of temperature is the kelvin (K). Unlike the Celsius and Fahrenheit scales, the kelvin scale is an absolute temperature scale in which 0 (zero) K corresponds to the lowest temperature that can theoretically be achieved. The early 19th-century discovery of the relationship between a gas's volume and temperature suggested that the volume of a gas would be zero at −273.15 °C. In 1848, British physicist William Thompson, who later adopted the title of Lord Kelvin, proposed an absolute temperature scale based on this concept (further treatment of this topic is provided in this text’s chapter on gases).

The freezing temperature of water on this scale is 273.15 K and its boiling temperature 373.15 K. Notice the numerical difference in these two reference temperatures is 100, the same as for the Celsius scale, and so the linear relation between these two temperature scales will exhibit a slope of 1 K/°C. Following the same approach, the equations for converting between the kelvin and Celsius temperature scales are derived to be:

T_K = T_C + 273.15

T_C = T_K − 273.15

The 273.15 in these equations has been determined experimentally, so it is not exact. Figure 1.6.1 shows the relationship among the three temperature scales. Recall that we do not use the degree sign with temperatures on the kelvin scale.

Figure 1.6.1: The Fahrenheit, Celsius, and kelvin temperature scales are compared.
Although the kelvin (absolute) temperature scale is the official SI temperature scale, Celsius is commonly used in many scientific contexts and is the scale of choice for nonscience contexts in almost all areas of the world. Very few countries (the U.S. and its territories, the Bahamas, Belize, Cayman Islands, and Palau) still use Fahrenheit for weather, medicine, and cooking.

### Example 1.6.4: Conversion from Celsius

Normal body temperature has been commonly accepted as 37.0 °C (although it varies depending on time of day and method of measurement, as well as among individuals). What is this temperature on the kelvin scale and on the Fahrenheit scale?

**Solution**

K = °C + 273.15 = 37.0 + 273.2 = 310.2 K

°F = 9/5 °C + 32.0 = (9/5 × 37.0) + 32.0 = 66.6 + 32.0 = 98.6 °F

### Exercise 1.6.4

Convert 80.92 °C to K and °F.

**Answer**

354.07 K, 177.7 °F

### Example 1.6.5: Conversion from Fahrenheit

Baking a ready-made pizza calls for an oven temperature of 450 °F. If you are in Europe, and your oven thermometer uses the Celsius scale, what is the setting? What is the kelvin temperature?

**Solution**

°C = 5/9 (°F − 32) = 5/9 (450 − 32) = 5/9 × 418 = 232 °C → set oven to 230 °C (two significant figures)

K = °C + 273.15 = 230 + 273 = 503 K → 5.0 × 10^2 K (two significant figures)

### Exercise 1.6.5

Convert 50 °F to °C and K.

**Answer**

10 °C, 280 K

## Summary

Measurements are made using a variety of units. It is often useful or necessary to convert a measured quantity from one unit into another. These conversions are accomplished using unit conversion factors, which are derived by simple applications of a mathematical approach called the factor-label method or dimensional analysis. This strategy is also employed to calculate sought quantities using measured quantities and appropriate mathematical relations.

## 1.6.3: Key Equations

- T_C = 5/9 × (T_F − 32)
- T_F = 9/5 × T_C + 32
- T_K = °C + 273.15
- T_C = K − 273.15
