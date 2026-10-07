---
title: "2.5: Converting Units"
book: "Beginning Chemistry (Ball)"
chapter: "2: Measurements"
source_url: "https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Beginning_Chemistry_(Ball)/02%3A_Measurements/2.05%3A_Converting_Units"
author: "Anonymous"
license: "CC BY-NC-SA 3.0"
---

### Learning Objective

- Convert from one unit to another unit of the same type.

In Section 2.2, we showed some examples of how to replace initial units with other units of the same type to get a numerical value that is easier to comprehend. In this section, we will formalize the process.

Consider a simple example: how many feet are there in 4 yards? Most people will almost automatically answer that there are 12 feet in 4 yards. How did you make this determination? Well, if there are 3 feet in 1 yard and there are 4 yards, then there are 4 × 3 = 12 feet in 4 yards.

This is correct, of course, but it is informal. Let us formalize it in a way that can be applied more generally. We know that 1 yard (yd) equals 3 feet (ft):

1 yd = 3 ft

In math, this expression is called an _equality_. The rules of algebra say that you can change (i.e., multiply or divide or add or subtract) the equality (as long as you do not divide by zero) and the new expression will still be an equality. For example, if we divide both sides by 2, we get:

1/2 yd = 3/2 ft

We see that one-half of a yard equals 3/2, or one and a half, feet—something we also know to be true—so the above equation is still an equality. Going back to the original equality, suppose we divide both sides of the equation by 1 yard (number and unit):

(1 yd / 1 yd) = (3 ft / 1 yd)

The expression is still an equality, by the rules of algebra. The left fraction equals 1. It has the same quantity in the numerator and the denominator, so it must equal 1. The quantities in the numerator and denominator cancel, both the number _and_ the unit:

(1 yd / 1 yd) = (3 ft / 1 yd)

When everything cancels in a fraction, the fraction reduces to 1:

1 = (3 ft / 1 yd)

## Conversion Factors

We have an expression that equals 1.

(3 ft / 1 yd) = 1

This is a strange way to write 1, but it makes sense: 3 ft equal 1 yd, so the quantities in the numerator and denominator are the same quantity, just expressed with different units.

The expression

(3 ft / 1 yd)

is called a conversion factor and it is used to formally change the unit of a quantity into another unit. (The process of converting units in such a formal fashion is sometimes called _dimensional analysis_ or the _factor label method_.)

To see how this happens, let us start with the original quantity: 4 yd.

Now let us multiply this quantity by 1. When you multiply anything by 1, you do not change the value of the quantity. Rather than multiplying by just 1, let us write 1 as:

(3 ft / 1 yd)

4 yd × (3 ft / 1 yd)

The 4 yd term can be thought of as 4yd/1; that is, it can be thought of as a fraction with 1 in the denominator. We are essentially multiplying fractions. If the same thing appears in the numerator and denominator of a fraction, they cancel. In this case, what cancels is the unit _yard_:

4 yd × (3 ft / 1 yd)

That is all that we can cancel. Now, multiply and divide all the numbers to get the final answer:

(4 × 3 ft / 1) = (12 ft / 1) = 12 ft

Again, we get an answer of 12 ft, just as we did originally. But in this case, we used a more formal procedure that is applicable to a variety of problems.

How many millimeters are in 14.66 m? To answer this, we need to construct a conversion factor between millimeters and meters and apply it correctly to the original quantity. We start with the definition of a millimeter, which is:

1 mm = (1 / 1000 m)

The 1/1000 is what the prefix _milli-_ means. Most people are more comfortable working without fractions, so we will rewrite this equation by bringing the 1,000 into the numerator of the other side of the equation:

1000 mm = 1 m

Now we construct a conversion factor by dividing one quantity into both sides. But now a question arises: which quantity do we divide by? It turns out that we have two choices, and the two choices will give us different conversion factors, both of which equal 1:

(1000 mm / 1000 mm) = (1 m / 1000 mm)

or

(1000 mm / 1 m) = (1 m / 1 m)

1 = (1 m / 1000 mm)

or

(1000 mm / 1 m) = 1

Which conversion factor do we use? The answer is based on _what unit you want to get rid of in your initial quantity_. The original unit of our quantity is meters, which we want to convert to millimeters. Because the original unit is assumed to be in the numerator, to get rid of it, we want the meter unit in the _denominator_; then they will cancel. Therefore, we will use the second conversion factor. Canceling units and performing the mathematics, we get:

14.66m × (1000 mm / 1 m) = 14660 mm

Note how m cancels, leaving mm, which is the unit of interest.

The ability to construct and apply proper conversion factors is a very powerful mathematical technique in chemistry. You need to master this technique if you are going to be successful in this and future courses.

### Example 2.5.1

- a. Convert 35.9 kL to liters.
- b. Convert 555 nm to meters.

**Solution**

- a. We will use the fact that 1 kL = 1,000 L. Of the two conversion factors that can be defined, the one that will work is 1000L/ 1kL. Applying this conversion factor, we get:

35.9 kL × (1000 L / 1 kL) = 35,900 L

- a. We will use the fact that 1 nm = 1/1,000,000,000 m, which we will rewrite as 1,000,000,000 nm = 1 m, or 10^9 nm = 1 m. Of the two possible conversion factors, the appropriate one has the nm unit in the denominator:

(1 m / 10^9 nm)

Applying this conversion factor, we get:

555 nm × (1m / 10^9 nm) = 0.000000555 m = 5.55 × 10^−7 m

In the final step, we expressed the answer in scientific notation.

### Exercise 2.5.1

- a. Convert 67.08 μL to liters.
- b. Convert 56.8 m to kilometers.

**Answer a**

6.708 × 10^−5 L

**Answer b**

5.68 × 10^−2 km

What if we have a derived unit that is the product of more than one unit, such as m^2? Suppose we want to convert square meters to square centimeters? The key is to remember that m^2 means m × m, which means we have _two_ meter units in our derived unit. That means we have to include _two_ conversion factors, one for each unit. For example, to convert 17.6 m^2 to square centimeters, we perform the conversion as follows:

17.6m^2 = 17.6(m × m) × (100cm / 1m) × (100cm / 1m)
= 176000 cm × cm
= 1.76 × 10^5 cm^2

### Example 2.5.2

How many cubic centimeters are in 0.883 m^3?

**Solution**

With an exponent of 3, we have three length units, so by extension we need to use three conversion factors between meters and centimeters. Thus, we have:

0.883m^3 × (100 cm / 1 m) × (100 cm / 1 m) × (100 cm / 1 m) = 883000 cm^3 = 8.83 × 10^5 cm^3

You should demonstrate to yourself that the three meter units do indeed cancel.

### Exercise 2.5.2

How many cubic millimeters are present in 0.0923 m^3?

**Answer**

9.23 × 10^7 mm^3

Suppose the unit you want to convert is in the denominator of a derived unit—what then? Then, in the conversion factor, the unit you want to remove must be in the _numerator_. This will cancel with the original unit in the denominator and introduce a new unit in the denominator. The following example illustrates this situation.

### Example 2.5.3

Convert 88.4 m/min to meters/second.

**Solution**

We want to change the unit in the denominator from minutes to seconds. Because there are 60 seconds in 1 minute (60 s = 1 min), we construct a conversion factor so that the unit we want to remove, minutes, is in the numerator: 1min/60s. Apply and perform the math:

(88.4m / min) × (1 min / 60 s) = 1.47 m/s

Notice how the 88.4 automatically goes in the numerator. That's because any number can be thought of as being in the numerator of a fraction divided by 1.

### Exercise 2.5.3

Convert 0.203 m/min to meters/second.

**Answer**

0.00338 m/s

or

3.38 × 10^−3 m/s

Sometimes there will be a need to convert from one unit with one numerical prefix to another unit with a different numerical prefix. How do we handle those conversions? Well, you could memorize the conversion factors that interrelate all numerical prefixes. Or you can go the easier route: first convert the quantity to the base unit—the unit with no numerical prefix—using the definition of the original prefix. Then, convert the quantity in the base unit to the desired unit using the definition of the second prefix. You can do the conversion in two separate steps or as one long algebraic step. For example, to convert 2.77 kg to milligrams:

2.77 kg × (1000 g / 1 kg) = 2770 g (convert to the base units of grams)

2770 g × (1000 mg / 1 g) = 2770000 mg = 2.77 × 10^6 mg (convert to desired unit)

Alternatively, it can be done in a single multi-step process:

2.77 kg × (1000 g / 1 kg) × (1000 mg / 1 g) = 2770000 mg
= 2.77 × 10^6 mg

You get the same answer either way.

### Example 2.5.4

How many nanoseconds are in 368.09 μs?

**Solution**

You can either do this as a one-step conversion from microseconds to nanoseconds or convert to the base unit first and then to the final desired unit. We will use the second method here, showing the two steps in a single line. Using the definitions of the prefixes _micro-_ and _nano-_,

368.0 μs × (1 s / 1000000 μs) × (1000000000 / 1 s) = 3.6809 × 10^5 ns

### Exercise 2.5.4

How many milliliters are in 607.8 kL?

**Answer**

6.078 × 10^8 mL

When considering the significant figures of a final numerical answer in a conversion, there is one important case where a number does not impact the number of significant figures in a final answer: the so-called exact number. An exact number is a number from a defined relationship, not a measured one. For example, the prefix _kilo-_ means 1,000-_exactly_ 1,000, no more or no less. Thus, in constructing the conversion factor:

(1000 g / 1 kg)

neither the 1,000 nor the 1 enter into our consideration of significant figures. The numbers in the numerator and denominator are defined exactly by what the prefix _kilo-_ means. Another way of thinking about it is that these numbers can be thought of as having an infinite number of significant figures, such as:

(1000.0000000000… g / 1.0000000000… kg)

The other numbers in the calculation will determine the number of significant figures in the final answer.

### Example 2.5.5

A rectangular plot in a garden has the dimensions 36.7 cm by 128.8 cm. What is the area of the garden plot in square meters? Express your answer in the proper number of significant figures.

**Solution**

Area is defined as the product of the two dimensions, which we then have to convert to square meters, and express our final answer to the correct number of significant figures—which in this case will be three.

36.7 cm × 128.8 cm × (1 m / 100 cm) × (1 m / 100 cm) = 0.472696 m^2 = 0.473 m^2

The 1 and 100 in the conversion factors do not affect the determination of significant figures because they are exact numbers, defined by the centi- prefix.

### Exercise 2.5.5

What is the volume of a block in cubic meters with the dimensions 2.1 cm × 34.0 cm × 118 cm?

**Answer**

0.0084 m^3

### Chemistry is Everywhere: The Gimli Glider

On July 23, 1983, an Air Canada Boeing 767 jet had to glide to an emergency landing at Gimli Industrial Park Airport in Gimli, Manitoba, because it unexpectedly ran out of fuel during flight. There was no loss of life in the course of the emergency landing, only some minor injuries associated in part with the evacuation of the craft after landing. For the remainder of its operational life (the plane was retired in 2008), the aircraft was nicknamed "the Gimli Glider."

[Image: The "Gimli Glider" Boeing 767 jet in the air.]

**_The Gimli Glider is the Boeing 767 that ran out of fuel and glided to safety at Gimli Airport. The aircraft ran out of fuel because of confusion over the units used to express the amount of fuel. Source: Photo courtesy of Will F., (CC BY-SA 2.5; Aero Icarus)._**

The 767 took off from Montreal on its way to Ottawa, ultimately heading for Edmonton, Canada. About halfway through the flight, all the engines on the plane began to shut down because of a lack of fuel. When the final engine cut off, all electricity (which was generated by the engines) was lost; the plane became, essentially, a powerless glider. Captain Robert Pearson was an experienced glider pilot, although he had never flown a glider the size of a 767. First Officer Maurice Quintal quickly determined that the aircraft would not be able make it to Winnipeg, the next large airport. He suggested his old Royal Air Force base at Gimli Station, one of whose runways was still being used as a community airport. Between the efforts of the pilots and the flight crew, they managed to get the airplane safely on the ground (although with buckled landing gear) and all passengers off safely.

What happened? At the time, Canada was transitioning from the older English system to the metric system. The Boeing 767s were the first aircraft whose gauges were calibrated in the metric system of units (liters and kilograms) rather than the English system of units (gallons and pounds). Thus, when the fuel gauge read 22,300, the gauge meant kilograms, but the ground crew mistakenly fueled the plane with 22,300 _pounds_ of fuel. This ended up being just less than half of the fuel needed to make the trip, causing the engines to quit about halfway to Ottawa. Quick thinking and extraordinary skill saved the lives of 61 passengers and 8 crew members—an incident that would not have occurred if people were watching their units.

## Key Takeaways

- Units can be converted to other units using the proper conversion factors.
- Conversion factors are constructed from equalities that relate two different units.
- Conversions can be a single step or multi-step.
- Unit conversion is a powerful mathematical technique in chemistry that must be mastered.
- Exact numbers do not affect the determination of significant figures.
