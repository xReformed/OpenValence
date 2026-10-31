---
title: "4.3: Cleaning Up Signals and Counting Events"
book: "Instrumental Analysis (LibreTexts)"
chapter: "4: Analog and Digital Data"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/04%3A_Digital_Electronics_and_Microcomputers_(TBD)/4.03%3A_Basic_Digital_Circuit_Components"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

How an instrument handles signals depends on what is being measured, so we cannot develop here a single model that applies to all instruments. Broadly speaking, however, an instrument is likely to include one or more of the following: the ability to clean up the raw signal and convert it into a form that we can analyze; the ability to count events in binary form; the ability to convert binary information into a digital information; and the ability to convert between digital and analog signals. In this section we will cover the first two of these topics.

[Note: "convert binary information into a digital information" is as printed; binary information is already digital, and the step meant is probably converting the binary count into decimal form for display.]

## Cleaning Up a Signal

Suppose our instrument is designed to count discrete events, perhaps a Geiger counter that detects the emission of β particles, or a photodiode that detects photons. Even though a time-dependent count of particles is a digital signal, the raw signal (a voltage) likely consists of digital pulses superimposed on a background signal that contains noise, as seen in Figure 4.3.1. The total signal, therefore, is in analog form.

Figure 4.3.1: The raw signal (voltage) for an experiment in which we are interested in counting the number of events in a defined period of time. In this case, there are five discrete pulses, two of which partially overlap each other. The individual pulses are superimposed on a background signal that shows a modest amount of random noise.
Example of signal when counting number of events in a defined period of time.

To clean up this signal we want to accomplish two things: remove the noise and ensure that each pulse is counted. A simple way to accomplish this is to set a threshold signal and use a voltage follower operational amplifier (see Chapter 3) to set all voltages below the threshold to a logical value of 0 and all voltages above the threshold to a logical value of 1. As seen in Figure 4.3.2, the choice of the threshold voltage must be chosen carefully if we are to resolve closely spaced pulses and discriminate against noise. Note that the peak-shaped pulses become rectangular pulses.

[Note: as printed, the source names a voltage follower for this step, but a voltage follower has a gain of 1 and passes its input unchanged; the circuit that outputs one of two logic levels according to whether the input is above or below a threshold is a comparator (an op amp used without feedback), which Chapter 3 does not describe in that form.]

Figure 4.3.2: Two attempts at cleaning up the data from Figure 4.3.1. At the top, setting the threshold voltage to 5 results in a noise-free set of rectangular pulses that are well-separated from each other. Setting the threshold to 0.5 volts merges the two separate pulses at times between 1.0 and 1.5 into a single pulse and captures a number of noise spikes between times of 1.5 and 2.0, and between times of 2.5 and 3.0.
Effect of threshold voltage on digitization of data.

## Binary Pulse Counter

To count the pulses in Figure 4.3.2 we can send them through a binary pulse counter (BPC). Figure 4.3.3 shows how such a counter works. In this case, the BPC has three registers, each of which can be in a logical state of 0 or 1. With three registers, we are limited to counting no more than 2^3 − 1 = 7 pulses; a more useful BPC would have more registers. We can treat the pulses as entering the BPC from the right. When a pulse enters a register, it flips each register from 1 to 0 or from 0 to 1, stopping after it first flips a register from 0 to 1. For example, the second pulse flips the right-most register from 1 to 0 and the middle register from 0 to 1; because the middle register initially was at 0, the counting of this pulse comes to an end.

[Note: corrected; the source prints "them though a" where this reads "them through a"; the source prints "2^3 = 8 pulses" where this reads "2^3 − 1 = 7 pulses"; the source prints "after if first" where this reads "after it first". Three registers have 2^3 = 8 states, 000 to 111, so they count up to 7 pulses; an eighth pulse returns them to 000.]

Figure 4.3.3: Operation of a binary pulse counter showing how the contents of three registers respond to the measurement of five pulses.
Operation of a binary pulse counter.
