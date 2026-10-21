---
title: "13.3: Unequal Spacings in Vibration-Rotation Spectra"
book: "Physical Chemistry (LibreTexts)"
chapter: "13: Molecular Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13%3A_Molecular_Spectroscopy/13.03%3A_Unequal_Spacings_in_Vibration-Rotation_Spectra"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

We find that real rovibrational spectra do not exhibit the equal spacing expectations from the treatment in the previous section and look more like the measured spectrum in Figure 13.3.1 . As energy increases, the R-branch lines become increasingly similar in energy (i.e., the lines move closer together) and as energy decreases, the P-branch lines become increasingly dissimilar in energy (i.e. the lines move farther apart). This is attributable to two phenomena: rotational-vibrational coupling and centrifugal distortion.

[Note: corrected; the source prints "look more like the idealized spectrum in Figure 13.3.1" where this reads "look more like the measured spectrum in Figure 13.3.1". Figure 13.3.1 is a measured HCl spectrum, as its caption says.]

Figure 13.3.1: Absorption spectrum of hydrogen chloride (HCl) from the n = 0 to n = 1 vibrational levels. The discrete peaks indicate a quantization of the angular momentum of the molecule. The bands to the left indicate a decrease in angular momentum, whereas those to the right indicate an increase in angular momentum. (CC-SA; OpenStax).

Experimental data shows that the P branch has further spaces between the lines as the frequencies decrease while R branch has closer spaces between the lines as the frequencies increase. On the spectrum, P region is on the left and R region is on the right separated by a large gap in between. There are other graphs show differently, but the regions can be labeled using their spacing characteristic discussed below.

[Note: corrected; the source prints "the P branch has closer spaces between the lines as the frequencies decrease while R branch has further spaces between the lines as the frequencies increase" where this reads "the P branch has further spaces between the lines as the frequencies decrease while R branch has closer spaces between the lines as the frequencies increase"; the source prints "R region is on the left and P region is on the right" where this reads "P region is on the left and R region is on the right". As the first paragraph says, the P-branch lines spread apart and the R-branch lines crowd together; and in Figure 13.3.1 the P branch (decrease in angular momentum) is on the left.]

## Vibration-Rotation Interaction

Consider the rotational constant for a rigid rotator B̃ = h/8π^2 cμRe^2 where B̃ is the rotational constant, and Re is the bond length. It is clear from the equation that B̃ depends on Re^2 in a inverse manner, so B̃ will decrease as Re^2 increase, and vice versa.

[Note: corrected; the source prints "and Re^2 is the bond length" where this reads "and Re is the bond length". Re is the bond length; Re^2 is its square.]

Figure 13.3.2: Anharmonic Oscillator and Bond Length. Figure used with permission from Wikipedia.

Vibrational state and the bond length also possess a relationship, and that is the average bond length will increase as the vibrational state, v increases. High vibrational states have large vibrational amplitudes (the amplitude can be visualized as the distance from one side to the other on the harmonic-oscillator parabola, and higher states has greater distance). On a potential graph, imagine a diatomic molecule with one of the atom fixed at the origin, the bond is along the x-axis, and the molecule vibrate toward and away from the origin along x-axis. The range at how much the bond can stretch or squeeze depend on the vibrational amplitude. So, at high vibrational state (thus high amplitude), the bond can squeeze in and stretch out more (just a little more) on the regular harmonic-oscillator potential, but it can stretch out greatly on an anharmonic oscillator. That's why bond length increase with vibrational state.

[Note: corrected; the source prints "and that is bond length, Re^2, will increase" where this reads "and that is the average bond length will increase". Re is fixed at the potential minimum; it is the vibrationally averaged bond length that grows with v.]

### Note

The two relationship established above

- B̃ ∝ 1/Re^2

[Note: corrected; the source prints "B̃ ∝ Re^2 (inversely proportional)" where this reads "B̃ ∝ 1/Re^2". Written as an inverse proportionality.]

and

- the average bond length increases with v

[Note: corrected; the source prints "Re^2 ∝ v (directly proportional)" where this reads "the average bond length increases with v". Not a proportionality.]

Therefore,

- B̃ decreases with v: B̃v = B̃e − α̃e(v + 1/2)

[Note: corrected; the source prints "B̃ ∝ v (inversely proportional)" where this reads "B̃ decreases with v: B̃v = B̃e − α̃e(v + 1/2)". B̃ falls linearly with v, not as 1/v.]

The rotational constant dependent on the vibrational state is denoted as B̃v, and the dependence of B̃ on v is the vibrational-rotational interaction.

Let's calculate the frequencies of R and P Branches with vibrational dependent rotational constants. The energies of the rigid rotator-harmonic oscillator is

Ẽ_(v, J) = G(v) + F(J) = ν̃(v + 1/2) + B̃J(J + 1)

or in term of B̃v

Ẽ_(v, J) = ν̃(v + 1/2) + B̃v J(J + 1)

According to the vibration-rotation interaction, B̃1 < B̃0 because the average bond length is larger in v = 1 than in v = 0. Hence, the frequencies of rovibrational transitions from v = 0 → 1 can be calculated as the following:

[Note: corrected; the source prints "because Re^2(v = 1) > Re^2(v = 0)" where this reads "because the average bond length is larger in v = 1 than in v = 0". As above.]

For R branch, allowed J = 0,1,2, ...

ν̃R(ΔJ = +1) = Ẽ_(1, J+1) − Ẽ_(0, J)

= (3/2)ν̃ + B̃1(J + 1)(J + 2) − (1/2)ν̃ − B̃0J(J + 1)

= ν̃ + 2B̃1 + (3B̃1 − B̃0)J + (B̃1 − B̃0)J^2

For P branch, allowed J = 1,2,3, ...

ν̃P(ΔJ = −1) = Ẽ_(1, J−1) − Ẽ_(0, J)

= ν̃ − (B̃1 + B̃0)J + (B̃1 − B̃0)J^2

### Decrease in Spacing of Lines in the R Branch with Increasing J

A closer look at

ν̃R = ν̃ + 2B̃1 + (3B̃1 − B̃0)J + (B̃1 − B̃0)J^2

shows that the last term in the parentheses (B̃1 − B̃0) will be always negative because B̃1 < B̃0, and it also multiplies with J^2, so the square term (B̃1 − B̃0)J^2 will give a larger negative value for increasing J. As a result, ν̃R = ν̃ +(smaller and smaller value) as J increase. Because the rotational frequencies keep getting smaller, the spacing between lines in R branch decreases as J increases.

### Increasing in Spacing of Lines in the P Branch with Increasing J

[Note: corrected; the source prints "with Decreasing J" where this reads "with Increasing J". The P-branch spacing, 2B̃0 + 2(B̃0 − B̃1)J, grows with J (for HCl: 21.5, 22.1, 22.7, 23.3 cm^−1).]

Using the same analysis as above,

ν̃P = ν̃ − (B̃1 + B̃0)J + (B̃1 − B̃0)J^2

shows that the last term in the parentheses (B̃1 − B̃0) will be always negative because B̃1 < B̃0, and it also multiplies with J^2, so the square term (B̃1 − B̃0)J^2 will give a larger negative value for increasing J. As a result, ν̃R = ν̃−(smaller and smaller value) as J decreases. Because the rotational frequencies keep getting larger, the spacing between lines in P branch increases as J increases.

[Note: corrected; the source prints "will give a larger negative value even for decreasing J" where this reads "will give a larger negative value for increasing J"; the source prints "the spacing between lines in P branch increase as J decreases" where this reads "the spacing between lines in P branch increases as J increases". As above; ν̃R in this paragraph means ν̃P.]

## References

1. McQuarrie, Donald A. Quantum Chemistry. New York: University Science Books, 2007.
2. Hollas, J. M. Modern spectroscopy. (3rd ed.). Chichester: John Wiley & Sons, 1996.
3. Hollas, J. M. Basic atomic and molecular spectroscopy. Cambridge: The Royal Society of Chemistry, 2002.
4. Herzberg, G. Molecular spectra and molecular structure. (2nd ed.). New York: Prentice-Hall, 1950.
5. Fetterolf, Monty L. Enhanced Intensity Distribution Analysis of the Rotational–Vibrational Spectrum of HCl. J. Chem. Ed. 2007, 84, 1062. DOI: 10.1021/ed084p1062

[Note: corrected; the source prints "2. Hollas, M. J." where this reads "2. Hollas, J. M."; the source prints "3. Hollas, M. J." where this reads "3. Hollas, J. M.". The author is J. Michael Hollas.]

[Note: corrected; the source prints "2007, 84, 1064." where this reads "2007, 84, 1062.". The article starts on page 1062, as its DOI shows.]
