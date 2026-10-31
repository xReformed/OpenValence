---
title: "5.2: Sources of Instrumental Noise"
book: "Instrumental Analysis (LibreTexts)"
chapter: "5: Signals and Noise"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/05%3A_Signals_and_Noise_(TBD)/5.02%3A_Sources_of_Noise"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

When we make an analytical measurement, we are interested in both the accuracy and the precision of our results. Noise, as we learned in the previous section, is a random fluctuation in the signal that limits our ability to detect the presence of the underlying signal. There are a variety of ways in which noise can enter into our measurements. Some of these sources of noise are related to the process of collecting and processing samples for analysis; these sources of noise, which we might collectively call chemical sources of noise, are important and receive consideration in those sections of this textbook that consider the application of analytical methods. In this chapter, we will limit ourselves to considering sources of noise that arise from the instruments we use to make measurements. We call these sources of instrumental noise.

## Thermal Noise

Even when an external voltage is not applied to an electrical circuit, a small current is present due to the random motion of electrons that arises from the temperature of the surroundings; we call this thermal (or, sometimes, Johnson) noise. The magnitude of this noise in any electrical element increases with temperature, of course, but it also is affected by its resistance, and by how quickly it responds to a change in the signal. Mathematically, we express this as the root-mean-square voltage, ν_rms, which is given as

[Note: corrected; the source prints "we can this thermal" where this reads "we call this thermal". A misspelled verb: the sentence names the noise.]

ν_rms = √(4 kTRΔf)

where k is Boltzmann's constant, T is the temperature in Kelvin, R is the resistance in ohms, and Δf is the bandwidth. The latter term is a measure of how quickly the electrical element responds to a change in its input by changing its output from 10% to 90% of its final value, which is called the rise time, tr, where

Δf = 1/(3 tr)

For example, if a change in the input increases the output by 1, then the rise time is how long it takes the output to increase from 0.1 to 0.9.

A close look at Equation (thermal) shows that we can reduce thermal noise by decreasing the temperature, by decreasing the resistance of the electrical circuit, and by decreasing the bandwidth; the latter, of course, comes at the cost of an increase in the response time, which means the instrument responds more slowly to a change in the signal. Of these, it is often easiest to reduce the temperature by cooling, for example, the instrument's detector.

## Shot Noise

As its name implies, shot noise is a discrete event that happens in response to an event, such as the movement of an electron through the space between two surfaces of opposite charge. These events are random and quantized, and generate random fluctuations in the current that have a root-mean-square value, i_rms, which is given by

[Note: corrected; the source prints "random furcations in the current" where this reads "random fluctuations in the current". Shot noise is a random fluctuation in the current; "furcations" (forkings) is a slip.]

i_rms = √(2IeΔf)

where I is the average current, e is the charge on the electron in Coulombs, and Δf is the bandwidth. Of these terms, the only one under our control is the bandwidth; again, decreasing the bandwidth comes at the cost of an instrument that responds more slowly to a change in the signal.

## Flicker Noise

Unlike thermal noise or shot noise, flicker noise is related to the frequency of the signal being measured, f, instead of the signal's bandwidth. The sources of flicker noise are not well understood, but it is known that it is inversely proportional to the signal's frequency; thus, flicker noise is sometimes called 1/f noise. Because of the inverse relationship, flicker noise is more important at low frequencies, where it appears as a long-term drift in the signal. It is less important at higher frequencies where thermal noise and shot noise are more important.

## Environmental Noise

Our instruments normally do not operate in an environment free from external signals, each of which has a frequency that can be picked up by the instrument. Television signals, cell-phone signals, radio signals, power lines are obvious examples of high-to-moderate frequencies that can serve as noise. Less obvious are lower frequency sources of noise, such as the change in temperature during the day or through the year.
