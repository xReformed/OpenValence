---
title: "4.4: The Time-Dependent Schrödinger Equation"
book: "Physical Chemistry (LibreTexts)"
chapter: "4: Postulates and Principles of Quantum Mechanics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/04%3A_Postulates_and_Principles_of_Quantum_Mechanics/4.04%3A_The_Time-Dependent_Schrodinger_Equation"
author: "Mtuckerman"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Recognize the differences between the time-dependent and the time-independent Schrödinger equations
- To distinguish between stationary and non-stationary wavefunctions

There are two "flavors" of Schrödinger equations: the time-dependent and the time-independent versions. While the time-dependent Schrödinger equation predicts that wavefunctions can form standing waves (called stationary states), that if classified and understood, then it becomes easier to solve the time-dependent Schrödinger equation for any state. Stationary states can also be described by the time-independent Schrödinger equation (used only when the Hamiltonian is not explicitly time dependent). However, it should be noted that the solutions to the time-independent Schrödinger equation still have time dependencies.

## Time-Dependent Wavefunctions

Recall that the time-independent Schrödinger equation

Ĥψ(x) = Eψ(x)

yields the allowed energies and corresponding wavefunctions. However, it does not tell us how the system evolves in time. It would seem that something is missing, since, after all, classical mechanics tells us how the positions and velocities of a classical system evolve in time. The time dependence is given by solving Newton's second law

m (d^2 x)/dt^2 = F(x)

But where is t in quantum mechanics? First of all, what is it that must evolve in time? The answer is that the wavefunction (and associated probability density) must evolve. Suppose, therefore, that we prepare a system at t = 0 according to a particular probability density p(x,0) related to an amplitude Ψ(x,0) by

p(x,0) = |Ψ(x,0)|^2

How will this initial amplitude Ψ(x,0) look at time t later? Note, by the way, that Ψ(x,0) does not necessarily need to be one of the eigenstates ψn(x). To address this, we refer to the time-dependent Schrödinger equation that tells us how Ψ(x, t) will evolve starting from the initial condition Ψ(x,0):

ĤΨ(x, t) = iħ((∂)/(∂t))Ψ(x, t)

It is important to know how it works physically and when it is sufficient to work with the time-independent version of the Schrödinger equation (Equation (4.4.1)).

### Postulate V

The time dependence of wavefunctions is governed by the Time-Dependent Schrödinger Equation (Equation (4.4.4)).

## Stationary States

Suppose that we are lucky enough to choose

Ψ(x,0) = ψn(x)

with corresponding probability density

p(x,0) = |ψn(x)|^2

We will show that

Ψ(x, t) = ψn(x)e^(−iEn t/ħ)

From the time-dependent Schrödinger equation

(dΨ)/dt = ψn(x)((−iEn)/ħ)e^(−iEn t/ħ)

iħ(dΨ)/dt = En ψn(x)e^(−iEn t/ħ)

Similarly

ĤΨ(x, t) = e^(−iEn t/ħ)Ĥψn(x)

= e^(−iEn t/ħ)En ψn(x)

Hence ψn(x)exp(−iEn t/ħ) satisfies the Time-Dependent Schrödinger Equation (Equation (4.4.4)).

Consider the probability density for this wavefunction: p(x, t) = |Ψ(x, t)|^2

p(x, t) = [ψn(x)e^(iEn t/ħ)][ψn(x)e^(−iEn t/ħ)]

= ψn^2(x)e^(iEn t/ħ)e^(−iEn t/ħ)

= |ψn(x)|^2 = p(x,0)

the probability does not change in time and for this reason, ψn(x) is called a stationary state. In such a state, the energy remains fixed at the well-defined value En.

## Nonstationary States

Suppose, however, that we had chosen Ψ(x,0) to be some arbitrary linear combination of the two lowest energy states:

Ψ(x,0) = aψ1(x) + bψ2(x)

for example

Ψ(x,0) = (1/(√2))[ψ1(x) + ψ2(x)]

as in the previous example. Then, the probability density at time t

p(x, t) = |Ψ(x, t)|^2 ≠ p(x,0)

For such a mixture to be possible, there must be sufficient energy in the system that there is some probability of measuring the particle to be in its excited state.

Finally, suppose we start with a state

Ψ(x,0) = (1/(√2))[ψ1(x) + ψ2(x)]

and we let this state evolve in time. At any point in time, the state Ψ(x, t) will be some mixture of ψ1(x) and ψ2(x), and this mixture changes with time. Now, at some specific instance in time t, we measure the energy and obtain a value E1. What is the state of the system just after the measurement is made? Once we make the measurement, then we know with 100% certainty that the energy is E1. From the above discussion, there is only one possibility for the state of the system, and that has to be the wavefunction ψ1(x), since in this state we know with 100% certainty that the energy is E1. Hence, just after the measurement, the state must be ψ1(x), which means that because of the measurement, any further dependence on ψ2(x) drops out, and for all time thereafter, there is no dependence on ψ2(x). Consequently, any subsequent measurement of the energy would yield the value E1 with 100% certainty. This discontinuous change in the quantum state of the system as a result of the measurement is known as the collapse of the wavefunction. The idea that the evolution of a system can change as a result of a measurement is one of the topics that is currently debated among quantum theorists.

### The Quantum Observer Effect

The fact that measuring a quantum system changes its time evolution means that the experimenter is now coupled to the quantum system. This observer effect means that the act of observing will influence the phenomenon being observed. In classical mechanics, this coupling does not exist. A classical system will evolve according to Newton's laws of motion independent of whether or not we observe it. This is not true for quantum systems. The very act of observing the system changes how it evolves in time.

Put another way, by simply observing a system, we change it!
