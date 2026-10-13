---
title: "26.2: Amino Acids, the Henderson-Hasselbalch Equation, and Isoelectric Points"
book: "Organic Chemistry (OpenStax)"
chapter: "26: Biomolecules- Amino Acids, Peptides, and Proteins"
source_url: "https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_(OpenStax)/26%3A_Biomolecules-_Amino_Acids_Peptides_and_Proteins/26.02%3A_Amino_Acids_the_Henderson-Hasselbalch_Equation_and_Isoelectric_Points"
author: "OpenStax"
license: "CC BY-NC-SA 4.0"
---

According to the Henderson–Hasselbalch equation (Section 20.3 and Section 24.5), if we know both the pH of a solution and the pK_a of an acid HA, we can calculate the ratio of [A^–] to [HA] in the solution. Furthermore, when pH = pK_a, the two forms A^– and HA are present in equal amounts because log 1 = 0.

pH = pK_a + log(([A^−])/([HA]))

or

log(([A^−])/([HA])) = pH−pK_a

To apply the Henderson–Hasselbalch equation to an amino acid, let’s find out what species are present in a 1.00 M solution of alanine at pH = 9.00. According to Table 26.1.1, protonated alanine [^+H3NCH(CH3)CO2H] has pKa1 = 2.34 and neutral zwitterionic alanine [^+H3NCH(CH3)CO2^–] has pKa2 = 9.69:

[Note: corrected; the source prints "According to Table 26.1, protonated" where this reads "According to Table 26.1.1, protonated". The source keeps the book's table number; the 20 common amino acids are in Table 26.1.1 in Section 26.1.]

[Image: A protonated alanine reacts with water reversibly to form a zwitterion and hydronium ion. The zwitterion further reacts with water reversibly to form an anion and hydronium ion.]

Because the pH of the solution is much closer to pKa2 than to pKa1, we need to use pKa2 for the calculation. From the Henderson–Hasselbalch expression (Equation (1)), we have:

log(([A^−])/([HA])) = pH−pK_a = 9.00 − 9.69 = −0.69

So

([A^−])/([HA]) = antilog(−0.69) = 0.20

and

[A^−] = 0.20[HA]

In addition, we know that

[A^−] + [HA] = 1.00M

Solving the two simultaneous equations gives [HA] = 0.83 and [A^–] = 0.17. In other words, at pH = 9.00, 83% of alanine molecules in a 1.00 M solution are neutral (zwitterionic) and 17% are deprotonated. Similar calculations can be done at other pH values and the results plotted to give the titration curve shown in Figure 26.2.1.

Each leg of the titration curve is calculated separately. The first leg, from pH 1 to 6, corresponds to the dissociation of protonated alanine, H2A^+. The second leg, from pH 6 to 11, corresponds to the dissociation of zwitterionic alanine, HA. It’s as if we started with H2A^+ at low pH and then titrated with NaOH. When 0.5 equivalent of NaOH is added, the deprotonation of H2A^+ is 50% complete; when 1.0 equivalent of NaOH is added, the deprotonation of H2A^+ is finished and HA predominates; when 1.5 equivalents of NaOH is added, the deprotonation of HA is 50% complete; and when 2.0 equivalents of NaOH is added, the deprotonation of HA is finished.

Figure 26.2.1: A titration curve for alanine, plotted using the Henderson–Hasselbalch equation. Each of the two legs is plotted separately. At pH < 1, alanine is entirely protonated; at pH = 2.34, alanine is a 50 : 50 mix of protonated and neutral forms; at pH = 6.01, alanine is entirely neutral; at pH = 9.69, alanine is a 50 : 50 mix of neutral and deprotonated forms; at pH > 11.5, alanine is entirely deprotonated.
The figure shows the titration curve for alanine. The x-axis represents equivalents of hydroxide ion and the y-axis represents the pH. It shows isoelectric point and two dissociation constant values.

Look carefully at the titration curve in Figure 26.2.1. In acid solution, the amino acid is protonated and exists primarily as a cation. In basic solution, the amino acid is deprotonated and exists primarily as an anion. In between the two is an intermediate pH at which the amino acid is exactly balanced between anionic and cationic forms, existing primarily as the neutral, dipolar zwitterion. This pH is called the amino acid’s isoelectric point (pI) and has a value of 6.01 for alanine.

[Image: A low pH protonated amino acid reacts reversibly with hydronium ion to form a zwitterion that further reacts with hydroxide ion to form a high pH deprotonated amino acid.]

The isoelectric point of an amino acid depends on its structure, with values for the 20 common amino acids given previously in Table 26.1.1. The 15 neutral amino acids have isoelectric points near neutrality, in the pH range 5.0 to 6.5. The two acidic amino acids have isoelectric points at lower pH so that deprotonation of the side-chain −CO2H does not occur at their pI, and the three basic amino acids have isoelectric points at higher pH so that protonation of the side-chain amino group does not occur at their pI.

[Note: corrected; the source prints "given previously in Table 26.1." where this reads "given previously in Table 26.1.1.". The source keeps the book's table number; the 20 common amino acids are in Table 26.1.1 in Section 26.1.]

More specifically, the pI of any amino acid is the average of the two acid-dissociation constants that involve the neutral zwitterion. For the 13 amino acids with a neutral side chain, pI is the average of pKa1 and pKa2. For the four amino acids with either a strongly or weakly acidic side chain, pI is the average of the two lowest pK_a values. For the three amino acids with a basic side chain, pI is the average of the two highest pK_a values.

[Image: The p K a and p I values of acidic amino acid, aspartic acid, neutral amino acid, alanine, and basic amino acid lysine.]

Just as individual amino acids have isoelectric points, proteins have an overall pI due to the cumulative effect of all the acidic or basic amino acids they may contain. The enzyme lysozyme, for instance, has a preponderance of basic amino acids and thus has a high isoelectric point (pI = 11.0). Pepsin, however, has a preponderance of acidic amino acids and a low isoelectric point (pI ~ 1.0). Not surprisingly, the solubilities and properties of proteins with different pI’s are strongly affected by the pH of the medium. Solubility in water is usually lowest at the isoelectric point, where the protein has no net charge, and is higher both above and below the pI, where the protein is charged.

We can take advantage of the differences in isoelectric points to separate a mixture of proteins into its pure components. Using a technique known as electrophoresis, a mixture of proteins is placed near the center of a strip of paper or gel. The paper or gel is moistened with an aqueous buffer of a given pH, and electrodes are connected to the ends of the strip. When an electric potential is applied, the proteins with negative charges (those that are deprotonated because the pH of the buffer is above their isoelectric point) migrate slowly toward the positive electrode. At the same time, those amino acids with positive charges (those that are protonated because the pH of the buffer is below their isoelectric point) migrate toward the negative electrode.

Different proteins migrate at different rates, depending on their isoelectric points and on the pH of the aqueous buffer, thereby effecting a separation of the mixture into its components. Figure 26.2.2 illustrates this process for a mixture containing basic, neutral, and acidic components.

Figure 26.2.2: Separation of a protein mixture by electrophoresis. At pH = 6.00, a neutral protein does not migrate, a basic protein is protonated and migrates toward the negative electrode, and an acidic protein is deprotonated and migrates toward the positive electrode.
A rectangular strip in which left part is basic pointing towards minus, right part is acidic pointing towards plus and center part is neutral having their respective p I values.

### Exercise 26.2.1

Hemoglobin has pI = 6.8. Does hemoglobin have a net negative charge or net positive charge at pH = 5.3? At pH = 7.3?

**Answer**

Net positive at pH = 5.3; net negative at pH = 7.3
