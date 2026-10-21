---
title: "14.1: Reactions Involving Gain or Loss of Ligands"
book: "Inorganic Chemistry (LibreTexts)"
chapter: "14: Organometallic Reactions and Catalysis"
source_url: "https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Inorganic_Chemistry_(LibreTexts)/14%3A_Organometallic_Reactions_and_Catalysis/14.01%3A_Reactions_Involving_Gain_or_Loss_of_Ligands"
author: "Khaas"
license: "CC BY-NC-SA 4.0"
---

Many reactions of organometallic complexes involve change in coordination number. In a dissociation reaction, one or more ligands are eliminated from the complex and the coordination number decreases. In an association, one or more ligands are added to the complex and the coordination number increases. If the coordination number changes while the metal oxidation state remains constant, the reactions are considered association/addition reactions or dissociation reactions. Reactions can also occur where the coordination number changes while the metal oxidation state also changes. These reactions are considered reductive eliminations or oxidative additions (or a combination of these).

### Types of reactions involving gain or loss of ligands

- Association or Addition Reaction: a reaction in which the coordination number increases; metal oxidation state is unchanged.
- Dissociation Reaction: a reaction in which the coordination number decreases; metal oxidation state is unchanged.
- Oxidative Addition: a reaction in which coordination number increases while metal oxidation state increases.
- Reductive Elimination: a reaction in which coordination number decreases while metal oxidation state decreases.

14.1.1: Ligand Dissociation and Substitution

- ligand substitution involves the exchange of one ligand for another, with no change in oxidation state at the metal center. The incoming and outgoing ligands may be L- or X-type, but the charge of the complex changes if the ligand type changes. Keep charge conservation in mind when writing out ligand substitutions.

14.1.2: Oxidative Addition

14.1.3: Reductive Elimination

14.1.4: Sigma Bond Metathasis

14.1.5: Application of Pincer Ligands

## 14.1.1: Ligand Dissociation and Substitution

As discussed in Chapter 12, ligand substitution is characterized by a continuum of mechanisms bound by associative (A) and dissociative (D) extremes. At the associative extreme, the first step is an Associative reaction; the incoming ligand forms a bond to the metal and creates an intermediate of higher coordination number. Then the departing ligand takes its lone pair and leaves. At the dissociative extreme, the first step is a Dissociative reaction and the order of events is opposite; a ligand departs and a new complex with lower coordination number forms. Then, a new ligand associates with the complex in the second step. Sometimes, instead of reacting, the "intermediate" is simply a stable complex with a different coordination number than the reactant.

[Note: corrected; the source prints "Chapter 13" where this reads "Chapter 12"; the source prints "dissociative extreme, the fist" where this reads "dissociative extreme, the first". Ligand substitution mechanisms are covered in Chapter 12 (Coordination Chemistry IV); Chapter 13 is Organometallic Chemistry. A typing error.]

The most common reactions that are used to create new complexes are Dissociations and Substitutions (involving both Dissociation and Association steps). Associative substitution is common for 16-electron complexes (like d^8 complexes of Ni, Pd, and Pt), while both Dissociation and Dissociative Substitution are the norm for 18-electron complexes. Then again, reality is often more complicated than these extremes. In some cases, evidence is available for interchange (Ia or Id).

In this subsection, we’ll explore ligand substitution reactions and mechanisms in the context of organometallic chemistry. We’d like to be able to (a) predict whether a mechanism is likely to be associative or dissociative; (b) propose a reasonable mechanism from given experimental data; and (c) describe the results we’d expect given a particular mechanism. Keep these goals in mind as you learn the theoretical and experimental nuts and bolts of substitution reactions.

### Dissociation

Carbonyl compounds are known to undergo dissociation reactions upon heating or irradiation with light. For example, upon heating, the cyclopentadienylmolybdenum tricarbonyl dimer (Cp2Mo2(CO)6), where Cp is the cyclopentadienyl ligand) loses a CO ligand from each Mo ion, and a triple bond between the Mo ions is formed (Top, Figure 14.1.1.1). An example of a photoactivated dissociation of CO is the case of neutral iron pentacarbonyl, Fe(CO)5. Irradiation of Fe(CO)5 with UV produces Fe(CO)4 (Bottom, Figure 14.1.1.1).

[Note: corrected; the source prints "the the" where this reads "the". A typing error.]

Figure 14.1.1.1: Dissociation reactions: Top, the thermally-activated dissociation of CO from cyclopentadienylmolybdenum tricarbonyl dimer. Bottom, the photochemically-activated dissociation of CO from ironpentacarbonyl. (CC-BY-SA; Kathryn Haas)

However, in each of the cases shown above, the product complex is reactive toward ligand association, usually resulting in an overall substitution. The cyclopentadienylmolybdenum dicarbonyl dimer shown on the top of Figure 14.1.1.1 binds a variety of substrates across the metal-metal triple bond. And the iron tetracarbonyl complex shown on the bottom in Figure 14.1.1.1 readily captures a variety of ligands to result in an overall substitution (example given below); when a ligand does not associate with it, Fe2(CO)9 is produced.

[Note: corrected; the source prints "doe not" where this reads "does not". A typing error.]

Sources: Iron Pentacarbonyl and Cyclopentadienylmolybdenum tricarbonyl dimer articles from Wikipedia.

### Dissociative Substitution

Associative substitution is unlikely for saturated, 18-electron complexes—coordination of another ligand would produce a 20-electron intermediate. For 18-electron complexes, dissociative substitution mechanisms involving 16-electron intermediates are more likely. In a slow step with positive entropy of activation, the departing ligand leaves, generating a coordinatively unsaturated intermediate. The incoming ligand then enters the coordination sphere of the metal to generate the product. For the remainder of this post, we’ll focus on the kinetics of the reaction and the nature of the unsaturated intermediate (which influences the stereochemistry of the reaction). The reverse of the first step, re-coordination of the departing ligand (rate constant k–1), is often competitive with dissociation.

Figure 14.1.1.7: A general scheme for dissociative ligand substitution. There’s more to the intermediate than meets the eye! (Michael Evans)
A general scheme for dissociative ligand substitution.

#### Reaction Kinetics

Let’s begin with the general situation in which k1 and k_–1 are similar in magnitude. Since k1 is rate limiting, k2 is assumed to be much larger than k1 and k_–1. Most importantly, we need to assume that variation in the concentration of the unsaturated intermediate is essentially zero. This is called the steady state approximation, and it allows us to set up an equation that relates reaction rate to observable concentrations Hold onto that for a second; first, we can use step 2 to establish a preliminary rate expression.

rate = k2[Ln M–◊][Li] (1)

Of course, the unsaturated complex is present in very small concentration and is unmeasurable, so this equation doesn’t help us much. We need to remove the concentration of the unmeasurable intermediate from (1), and the steady state approximation helps us do this. We can express variation in the concentration of the unsaturated intermediate as (processes that make it) minus (processes that destroy it), multiplying by an arbitrary time length to make the units work out. All of that equals zero, according to the SS approximation. The painful math is almost over! Since Δt must not be zero, the other factor, the collection of terms, must equal zero.

Δ[Ln M–◊] = 0 = (k1[Ln M–L^d]−k–1[Ln M–◊][L^d]−k2[Ln M–◊][Li])Δt (2)

0 = k1[Ln M–Ld]−k_−1[Ln M–◊][Ld]−k2[Ln M–◊][Li] (3)

Rearranging to solve for [Ln M–◊], we arrive at the following.

[Ln M–◊] = k1 ([Ln M–Ld])/((k_−1[Ld] + k2[Li]) (4)

Finally, substituting into equation (1) we reach a verifiable rate equation.

rate = k2 k1 ([Ln M–Ld][Li])/((k_−1[Ld] + k2[Li]) (5)

When k_–1 is negligibly small, (5) reduces to the familiar equation (6), typical of dissociative reactions like S_N1.

rate = k1[Ln M–Ld] (6)

Unlike the associative rate law, this rate does not depend on the concentration of incoming ligand. For reactions that are better described by (5), we can drown the reaction in incoming ligand to make k2[Li] far greater than k_−1[Ld], essentially forcing the reaction to fit equation (6).

#### The Unsaturated Intermediate & Stereochemistry

Dissociation of a ligand from an octahedral complex generates an unsaturated ML5 intermediate. When all five of the remaining ligands are L-type, as in Cr(CO)5, the metal has 6 d electrons for a total electron count of 16. The trigonal bipyramidal geometry presents electronic problems (unpaired electrons) for 6 d electrons, as the figure below shows. The orbital energy levels come from crystal field theory. Distortion to a square pyramid or a distorted TBP geometry removes the electronic issue, and so five-coordinate d6 complexes typically have square pyramidal or distorted TBP geometries. This is just the geometry prediction process in action!

[Note: corrected; the source prints "usaturated" where this reads "unsaturated". A typing error.]

Figure 14.1.1.8: TBP geometry is electronically disfavored for d6 metals. Distorted TBP and SP geometries are favored. (Michael Evans)
TBP geometry is electronically disfavored for d6 metals. Distorted TBP and SP geometries are favored.

When the intermediate adopts square pyramidal geometry (favored for good π-acceptors and σ-donors…why?), the incoming ligand can simply approach where the departing ligand left, resulting in retention of stereochemistry. Inversion is more likely when the intermediate is a distorted trigonal bipyramid (favored for good π-donors). As we’ve already seen for associative substitution, fluxionality in the five-coordinate intermediate can complicate the stereochemistry of the reaction.

#### Encouraging Dissociative Substitution

[Note: corrected; the source prints "Dissocative" where this reads "Dissociative". A typing error.]

In general, introducing structural features that either stabilize the unsaturated intermediate or destabilize the starting complex can encourage dissociative substitution. Both of these strategies lower the activation barrier for the reaction. Other, quirky ways to encourage dissociation include photochemical methods, oxidation/reduction, and ligand abstraction.

Let’s begin with features that stabilize the unsaturated intermediate. Electronically, the intermediate loves it when its d electron count is nicely matched to its crystal field orbitals. As you study organometallic chemistry, you’ll learn that there are certain “natural” d electron counts for particular geometries that fit well with the metal-centered orbitals predicted by crystal field theory. Octahedral geometry is great for six d electrons, for example, and square planar geometry loves eight d electrons. Complexes with “natural” d electron counts—but bearing one extra ligand—are ripe for dissociative substitution. The classic examples are d8 TBP complexes, which become d8 square planar complexes (think Pt(II) and Pd(II)) upon dissociation. Similar factors actually stabilize starting 18-electron complexes, making them less reactive in dissociative substitution reactions. d6 octahedral complexes are particularly happy, and react most slowly in dissociative substitutions. The three most common types of 18-electron complexes, from fastest to slowest at dissociative substitution, are:

d^8 TBP > d^10 tetrahedral > d^6 octahedral

Destabilization of the starting complex is commonly accomplished by adding steric bulk to its ligands. Naturally, dissociation relieves steric congestion in the starting complex. Chelation has the opposite effect, and tends to steel the starting complex against dissociation.

Figure 14.1.1.9: As steric bulk on the ligand increases, dissociation becomes more favorable. (Michael Evans)
As steric bulk on the ligand increases, dissociation becomes more favorable.

I plan to cover the “quirky” methods in a post of their own, but these include strategies like N-oxides for CO removal, photochemical cleavage of the metal–departing ligand bond, and the use of silver cation to abstract halide ligands. Oxidation and reduction can also be used to encourage substitution: 17- and 19-electron complexes are much more reactive toward substitution than their 18-electron analogues.

### Associative Substitutions

Despite the sanctity of the 18-electron rule in organometallic chemistry, a wide variety of stable complexes possess fewer than 18 total electrons at the metal center. Perhaps the most famous examples of these complexes are 14- and 16-electron complexes of group 10 metals (Ni, Pt, Pd). Ligand substitution in complexes of this class typically occurs via an associative mechanism, involving approach of the incoming ligand to the complex before departure of the leaving group. If we keep this principle in mind, it seems easy enough to predict when ligand substitution is likely to be associative. But how can we spot an associative mechanism in experimental data, and what are some of the consequences of this mechanism?

Figure 14.1.1.2: Associative substitution. (Michael Evans)
The prototypical mechanism of associative ligand substitution.

The prototypical mechanism of associative ligand substitution. The first step is rate-determining. A typical mechanism for associative ligand substitution is shown above. It should be noted that square pyramidal geometry is also possible for the intermediate, but is less common. Let’s begin with the kinetics of the reaction.

#### Reaction Kinetics for Associative Reactions

Reaction kinetics are commonly used to elucidate organometallic reaction mechanisms, and ligand substitution is no exception. Different mechanisms of substitution may follow different rate laws, so plotting the dependence of reaction rate on concentration often allows us to distinguish mechanisms. Associative substitution’s rate law is analogous to that of the S_N2 reaction—rate depends on the concentrations of both starting materials.

Ln M–L^d + Li → Ln M–Li + L^d

(d[Ln M–L^i])/dt = rate = k1[Ln M–L^d][L^i]

The easiest way to determine this rate law is to use pseudo-first-order conditions. Although the rate law is second order overall, if we could somehow render the concentration of the incoming ligand unchanging, the reaction would appear first order. The observed rate constant under these conditions reflects the constancy of the incoming ligand’s concentration (k_obs = k1[L^i], where both k1 and [Li] are constants). How can we make the concentration of the incoming ligand invariant, you ask? We can drown the reaction in ligand to achieve this. The teensy weensy bit actually used up in the reaction has a negligible effect on the concentration of the “sea” of starting ligand we began with. The observed rate is equal to k_obs[Ln M–L^d], as shown by the purple trace below. By determining k_obs at a variety of [L^i] values, we can finally isolate k1, the rate constant for the slow step. The red trace below at right shows the idea.

Figure 14.1.1.3: Associative substitution under pseudo-first-order conditions. The reaction is “swamped out” with incoming ligand. (Michael Evans)
Associative substitution under pseudo-first-order conditions. The reaction is

In many cases, the red trace ends up with a non-zero y-intercept…curious, if we limit ourselves to the simple mechanism shown in the first figure of this post. A non-zero intercept suggests a more complex mechanism. We need to add a new term (called ks for reasons to become clear shortly) to our first set of equations:

rate = (k1[Li] + ks)[Ln M–L^d]

k_obs = k1[Li] + ks

The full rate law suggests that some other step (with rate ks[LnM–Ld]) independent of incoming ligand is involved in the mechanism. To explain this observation, we can invoke the solvent as a reactant. Solvent can associate with the complex first in a slow step, then incoming ligand can displace the solvent in a fast step. Solvent concentration doesn’t enter the rate law because, well, it’s drowning the reactants and its concentration undergoes negligible change! An example of this mechanism in the context of Pt(II) chemistry is shown below.

Figure 14.1.1.4: Associative substitution with solvent participation—a head-scratching mechanism for many an organometallic grad student! (Michael Evans)
Associative substitution with solvent participation—a head-scratching mechanism for many an organometallic grad student!

As an aside, it’s worth mentioning that the entropy of activation of associative substitution is typically negative. Entropy decreases as the incoming ligand and complex come together in the rate-determining step. Dissociative substitution shows the opposite behavior: loss of the departing ligand in the RDS increases entropy, resulting in positive entropy of activation.

#### Stereochemistry of Associative Substitution

As we saw in discussions of the trans effect, the entering and departing ligands both occupy equatorial positions in the trigonal bipyramidal intermediate. Microscopic reversibility is to blame: the mechanism of the forward substitution (displacement of the leaving by the incoming ligand) must be the same as the mechanism of the reverse reaction (displacement of the incoming by the leaving ligand). This can be a confusing point, so let’s examine an alternative mechanism that violates microscopic reversibility.

Figure 14.1.1.5: A mechanism involving approach to an axial position and departure from an equatorial position violates microscopic reversibility. Forward and reverse reactions a and b differ! (Michael Evans)
A mechanism involving approach to an axial position and departure from an equatorial position violates microscopic reversibility.

The figure above shows why a mechanism involving axial approach and equatorial departure (or vice versa) is not possible. The forward and reverse reactions differ, in fact, in both steps. In forward mechanism a, the incoming ligand enters an axial site. But in the reverse reaction, the incoming ligand (viz., the departing ligand in mechanism a) sits on an equatorial site. The second steps of each mechanism differ too—a involves loss of an equatorial ligand, while b involves loss of an axial ligand. Long story short, this mechanism violates microscopic reversibility. And what about a mechanism involving axial approach and axial departure? Such a mechanism is unlikely on electronic grounds. The equatorial sites are more electron rich than the axial sites, and σ bonding to the axial d_(z^2) orbital is expected to be strong. Intuitively, then, loss of ligand from an axial site is less favorable than loss from an equatorial site.

I know what you’re thinking: what the heck does all of this have to do with stereochemistry? Notice that, in the equatorial-equatorial mechanism (first figure of this post), the axial ligands don’t move at all. The configuration of the starting complex is thus retained in the product. Although retention is “normal,” complications often arise because five-coordinate TBP complexes—like other odd-coordinate organometallic complexes—are often fluxional. Axial and equatorial ligands can rapidly exchange through a process called Berry pseudorotation, which resembles the axial ligands “cutting through” a pair of equatorial ligands like scissors (animation!). Fluxionality means that all stereochemical bets are off, since any ligand can feasibly occupy an equatorial site. In the example below, the departing ligand starts out cis to L, but the incoming ligand ends up trans to L.

Figure 14.1.1.6: Berry pseudorotation in the midst of associative ligand substitution. (Michael Evans)
Berry pseudorotation in the midst of associative ligand substitution.

#### Associative Substitution in 18-electron Complexes?

Associative substitution can occur in 18-electron complexes if it’s preceded by the dissociation of a ligand. For example, changes in the hapticity of cyclopentadienyl or indenyl ligands may open up a coordination site, which can be occupied by a new ligand to kick off associative substitution. An allyl ligand may convert from its π to σ form, leaving an open coordination site where the π bond left. A particularly interesting case is the nitrosyl ligand—conversion from its linear to bent form opens up a site for coordination of an external ligand.

#### Summary of Associative Substitution

Associative ligand substitution is common for complexes with 16 total electrons or fewer. The reaction is characterized by a second-order rate law, the possibility of solvent participation, and a trigonal bipyramidal intermediate that is often fluxional. An open coordination site is essential for associative substitution, but such sites are often hidden in the dynamism of 18-electron complexes with labile ligands.

Dr. Michael Evans (Georgia Tech)

### Quirky Substitutions

Over the years, a variety of “quirky” substitution methods have been developed. All of these have the common goal of facilitating substitution in complexes that would otherwise be inert. It’s an age-old challenge: how can we turn a stable complex into something unstable enough to react? Photochemical excitation, oxidation/reduction, and radical chains all do the job, and have all been well studied. We’ll look at a few examples in this post—remember these methods when simple associative or dissociative substitution won’t get the job done.

#### Photochemical Substitution

Substitution reactions of dative ligands—most famously, CO—may be facilitated by photochemical excitation. We just discussed the photochemically-activated dissociation of CO from ironpentacarbonyl above; that reaction is often used to accomplish substitution of a CO ligand. Other CO complexes also undergo photochemically-activated CO substitution reactions. Two examples are shown below. The first reaction yields only monosubstituted product without ultraviolet light, even in the presence of a strongly donating phosphine.

Figure 14.1.1.10: Dissociative photochemical substitutions of CO and dinitrogen. (Michael Evans)
Dissociative photochemical substitutions of CO and dinitrogen.

All signs point to dissociative mechanisms for these reactions (the starting complexes have 18 total electrons each). Excitation, then, must increase the M–L antibonding character of the complex’s electrons; exactly how this increase in antibonding character happens has been a matter of some debate. Originally, the prevailing explanation was that the LUMO bears M–L antibonding character, and excitation kicks an electron up from the HOMO to the LUMO, encouraging cleavage of the M–L bond. A more recent, more subtle explanation backed by calculations supports the involvement of a metal-to-ligand charge-transfer state along with the “classical” ligand-field excited state.

#### Oxidation/Reduction

Imagine a screaming baby without her pacifier—that’s a nice analogy for an odd-electron organometallic complex. Complexes bearing 17 and 19 total electrons are much more reactive toward substitution than their even-electron counterparts. Single-electron oxidation and reduction (“popping out the pacifier,” if you will) can thus be used to efficiently turn on substitution. As you might expect, oxidation and reduction work best on electron-rich and electron-poor complexes, respectively. The Mn complex in the oxidative example below, for instance, includes a strongly donating MeCp group (not shown).

Figure 14.1.1.11: Oxidation accelerates substitution in electron-rich complexes through a chain process. (Michael Evans)
Oxidation accelerates substitution in electron-rich complexes, through a chain process.

Reduction works well for electron-poor metal carbonyl complexes, which are happy to accept an additional electron.

There is a two-electron oxidation method that’s also worth knowing: the oxidation of CO with amine oxides. This nifty little method releases carbon dioxide, amine, and an unsaturated complex that may be quenched by a ligand hanging around. The trick is addition to the CO ligand followed by elimination of the unsaturated complex. As the oxidized CO2 and reduced amine float away, the metal complex finds another ligand.

Figure 14.1.1.12: Oxidation of CO with amine oxides. A fun method for dissociative substitution of metal carbonyls! (Michael Evans)
Oxidation of CO with amine oxides. A fun method for dissociative substitution of metal carbonyls!

#### Radical Chain Processes

Atom abstraction from 18-electron complexes produces neutral 17-electron intermediates, which are susceptible to ligand substitution via radical chain mechanisms. The fact that the intermediates are neutral distinguishes these methods from oxidation-based methods. First-row metal hydrides are great for these reactions, owing to their relatively weak M–H bonds. One example is shown below.

Figure 14.1.1.13: Radical-chain substitution involving atom abstraction. (Michael Evans)
Radical-chain substitution involving atom abstraction.

After abstraction of the hydrogen atom by initiator, substitution is rapid and may occur multiple times. Propagation begins anew when the substituted radical abstracts hydrogen from the starting material to regenerate the propagating radical and form the product. These quirky methods are nice to have in your back pocket when you’re backed into a synthetic corner—sometimes, conventional associative and dissociative substitution just won’t do the job. In the next post, we’ll press on to oxidative addition.

Template:Evans

## 14.1.2: Oxidative Addition

An oxidative addition is a reaction in which the coordination number and the oxidation state of the metal ion both increase by 2. In other words, the metal becomes oxidized by two electrons as the coordination number increases by 2 ligands. The microscopic reverse of oxidative addition is reductive elimination (discussed in the next section).

Oxidative addition can occur in a cis- or trans-fashion. A cis-addition means that two ligands are added so that they have cis-orientation to each other after the reaction is complete. A trans-addition implies that two new ligands are in opposite, trans-position after they have been added. We can further distinguish between mononuclear and dinuclear additions. Mononuclear addition involves a complex with a single metal. Dinuclear additions are additions to a metal-metal bond. The addition cleaves the metal-metal bond and adds one ligand to each fragment.

Figure 14.1.2.1: Mononuclear oxidative cis-addition (Attribution: A. Vedernikov, U Maryland (modified))

Let's explore a few examples. The first example is a mononuclear cis-addition (Fig. 14.1.2.1). In the reaction we add dihydrogen to a square planar iridium complex. After the reaction there are two additional hydrido ligands, and the coordination number has increased from 4 to 6. We can see that the two hydrido ligands are oriented in cis-fashion relative to each other. We can verify that the addition of the hydrido ligands oxidized the metal by determining the oxidation number of the metal before and after the reaction. There are three neutral ligands and one negatively charged chloro ligand. There is no overall charge at the complex. This means that the oxidation number of Ir is +1. After the reaction, there are the two hydrido ligands that have both a -1 charge. Remember, we get the charge at a ligand by cleaving the metal-ligand bond so that all electrons in the bond get assigned to the ligand. This means the oxidation number must be increased by +2, and is +3 after the reaction.

We can rationalize why the addition occurs in cis-fashion and not in trans-fashion. The two hydrido ligands are the smallest ligands, therefore, steric repulsion in the complex is minimized when the two hydrido ligands are in cis-position.

[Note: corrected; the source prints "steric repulsion is minimized in the complex is minimized" where this reads "steric repulsion in the complex is minimized". The source repeats "is minimized".]

Figure 14.1.2.2: Mononuclear oxidative trans-addition (Attribution: A. Vedernikov, U Maryland (modified))

The second example is a mononuclear trans-addition (Fig. 14.1.2.2). In this reaction CH3Br is added to the iridium complex. In this case the two new ligands, a CH3 and the Br group are in opposite position. Again, the coordination number increases from four to six. We can again verify that an oxidation has occurred by analyzing the oxidation number of Ir. As previously determined, the oxidation number of iridium in the reactant complex is +1. Let us analyze the product complex. The chloro ligand and the bromo ligand have a 1- charge. In addition to that also the CH3 ligand has a 1- charge assuming that we treat the Ir-C bond as a dative bond. Thus, the oxidation number of Ir must be +3 to give a neutral complex.

Figure 14.1.2.3: Dinuclear addition (Attribution: A. Vedernikov, U Maryland (modified))

The third example is a dinuclear addition (Fig. 14.1.2.3). This addition is neither cis nor trans because it cleaves a metal-metal bond, and the one new ligand is added to each fragment. In the example the Co-Co bond of the dicobalt octacarbonyl gets cleaved upon the reaction with dihydrogen, and two HCo(CO)4 complexes with Co-H bonds form. In this case the coordination number does not increase. Both the reactant and the products have the coordination number 5. We can see that an oxidation of Co has occurred by comparing the oxidation numbers. In the reactant the oxidation number of Co is zero because all CO ligands are neutral and the complex is overall neutral. In the carbonyl hydride product, Co has the oxidation number +1, because the hydrido ligand has a 1- charge.

### Oxidative Additions with Intact Ligands

In the previous examples, the ligands that reacted with the complexes lost their integrity. The H-H bond in the H2 molecule cleaved to form the hydrido ligands, and the C-Br bond in CH3Br was cleaved to form separate Br and methyl ligands. Not all ligands lose their integrity upon their addition, in particular when they contain multiple bonds. These ligands are called intact ligands. In these cases the bond order between two atoms in the ligand is decreased, but the bond order is still at least 1. For example, the alkyne ligand shown below decreases from a carbon-carbon bond order of three to a bond order of two after it binds to Pt.

[Note: corrected; the source prints "belo" where this reads "below". A typing error.]

Figure 14.1.2.4: Oxidative addition with intact ligands (Attribution: A. Vedernikov, U Maryland (modified))

Examples for intact ligands are alkenes, alkynes, O2, etc. In an oxidative addition with an alkyne for example, the alkyne binds side-on to the transition metal under the formation of two metal-C single bonds, and the reduction of the bond order within the alkyne from 3 to 2 (Fig. 14.1.2.4). In the shown reaction, a diphenyl ethine molecule adds to tris(triphenyl phosphine) platinum under the formation of two Pt-C single bonds. The C-C triple bond in the ligand becomes a double bond. This reaction occurs under loss of one of the three triphenyl phosphine ligands. The coordination number at the metal increases from 3 to 4. We can again show that the reaction is oxidative by comparing the oxidation numbers of the metal. In the reactant, Pt has the oxidation number 0 because the three triphenyl phosphine ligands have no charge and the complex has overall no charge. After the reaction, the oxidation number of Pt is +2. This is because when we assign the four electrons of the two Pt-C single bonds to the ligand, the ligand becomes a (Ph-C=C-Ph)^2- ligand with each C atom carrying a 1- charge. Because the product complex is overall neutral, the oxidation number of Pt is +2.

[Note: corrected; the source prints "are are" where this reads "are". A typing error.]

### Nucleophilic Displacement Reactions

Another important reaction is the nucleophilic displacement reaction. This type of reaction can be classified as an oxidative addition although it does not strictly meet the definition. In these reactions a metal complex (typically an anion) acts as a nucleophile. A ligand is added, but no electrons are added to the complex. The reactions can be extremely useful for the synthesis of organic compounds. The utility results mostly from the fact that an organic electrophile is turned into a nucleophile.

[Note: corrected; the source prints "definnition" where this reads "definition". A typing error.]

Figure 14.1.2.5: Mononuclear oxidative trans-addition (Attribution: A. Vedernikov, U Maryland (modified)): Examples of nucleophilic displacement reactions

[Note: The caption opens with Figure 14.1.2.2's caption ("Mononuclear oxidative trans-addition"), apparently copied by mistake; the figure shows nucleophilic displacement (Collman's reagent), as the rest of the caption says. The text is left as printed.]

For example, tetracarbonyl ferrate (2-), also known as Collman’s reagent reacts with alkyl halides to form alkyl tetracarbonyl ferrate (-) (Fig. 14.1.2.5). We can check that the addition of the alkyl group did not add any electrons by counting the electrons before and after the reaction. The Fe(CO)4^2- anion is an 18e complex. Applying the neutral atom method to the electron counting in [R-Fe(CO)4]^- means that Fe contributes 8e, the 1- charge adds 1e, the CO ligands 4x2=8 electrons and the alkyl ligand 1e. This gives 8+1+8+1=18 electrons. The oxidation number of Fe, however, does change upon the addition of the ligand: it is -2 before and 0 after the reaction.

[Note: corrected; the source prints "Also the oxidation number of Fe has not changed upon the addition of the ligand. It is -2 before and after the reaction." where this reads "The oxidation number of Fe, however, does change upon the addition of the ligand: it is -2 before and 0 after the reaction.". In [Fe(CO)4]^2- iron is −2; in [RFe(CO)4]^- (R counted as R^-) it is 0. That increase is why the reaction is an oxidative addition.]

In the alkyltetracarbonyl ferrate (1-) anion, the group R which was formerly an electrophile in R-X, can now act as a nucleophile due to the fact that the Fe-C bond is polarized toward the C-atom. As a nucleophile it can for instance react with protons to form an alkane. It can also react with oxygen to form a carboxylic acid. In the presence of another alkyl halide R’-X it can form a ketone R-C(O)-R’. It can also insert CO into the Fe-C bonding in a so-called migratory insertion reaction, and the reaction product can react with acid to form an aldehyde. With dihalogens X2 it can form acyl halide. Collman’s reagent cannot only add alkyl halides but also acyl halides to form acyl tetracarbonyl ferrates (-).

[Note: corrected; the source prints "by also" where this reads "but also"; the source prints "acyl chloride" where this reads "acyl halide". A typing error. A dihalogen X2 gives the acyl halide RC(O)X; it is an acyl chloride only for Cl2.]

## 14.1.3: Reductive Elimination

### Reductive Elimination Reactions

Reductive elimination is the microscopic reverse of oxidative addition. The reductive elimination can only occur when the two ligands to be eliminated are in cis-position.

Figure 14.1.3.1: Reductive elimination (Attribution: A. Vedernikov, U Maryland.)

For instance the previously discussed oxidative cis-addition of H2 to the iridium complex is reversible, and the reverse is called the reductive elimination (Fig. 14.1.3.1). The cis-orientation of the two hydrido ligands is necessary to form an H-H bond. The reaction can be thought of going along a reaction path in which the Ir-H bonds become gradually larger and the H-H distance gradually smaller until the H2 molecule is eliminated from the complex.

[Note: corrected; the source prints "larger and and" where this reads "larger and". A typing error.]

During reductive elimination, the electrons in the M–X bond head toward ligand Y, and the electrons in M–Y head to the metal. The eliminating ligands are always X-type! On the whole, the oxidation state of the metal decreases by two units, two new open coordination sites become available, and an X–Y bond forms. What does the change in oxidation state suggest about changes in electron density at the metal? As suggested by the name “reductive,” the metal gains electrons. The ligands lose electrons as the new X–Y bond cannot possibly be polarized to both X and Y, as the original M–X and M–Y bonds were. Using these ideas, you may already be thinking about reactivity trends in reductive elimination…hold that thought.

It’s been observed in a number of cases that a ligand dissociates from octahedral complexes before concerted reductive elimination occurs. Presumably, dissociation to form a distorted TBP geometry brings the eliminating groups closer to one another to facilitate elimination.

Figure 14.1.3.2: Reductive elimination is faster from five-coordinate than six-coordinate complexes. (Michael Evans)
Reductive elimination is faster from five-coordinate than six-coordinate complexes.

Square planar complexes may either take on an additional fifth ligand or lose a ligand to form an odd-coordinate complex before reductive elimination. Direct reductive elimination without dissociation or association is possible, too.

Reactivity trends in reductive elimination are opposite those of oxidative addition. More electron-rich ligands bearing electron-donating groups react more rapidly, since the ligands lose electron density as the reaction proceeds. More electron-poor metal centers—bearing π-acidic ligands and/or ligands with electron-withdrawing groups—react more rapidly, since the metal center gains electrons. Sterically bulky ancillary ligands promote reductive elimination since the release of X and Y can “ease” steric strain in the starting complex. Steric hindrance helps explain, for example, why coordination of a fifth ligand to a square planar complex promotes reductive elimination even though coordination increases electron density at the metal center. A second example: trends in rates of reductive eliminations of alkanes parallel the steric demands of the eliminating ligands: C–C > C–H > H–H.

[Note: Measured rates of reductive elimination generally run the other way, H–H and C–H much faster than C–C, because the spherical H 1s orbital forms the new bond more easily than directional carbon orbitals. The text is left as printed.]

Figure 14.1.3.3: Reactivity trends for reductive eliminations. (Michael Evans)
Reactivity trends for reductive eliminations.

Mechanistic trends for reductive elimination actually parallel trends in mechanisms of oxidative addition, since these two reactions are the microscopic reverse of one another. Non-polar and moderately polar ligands react by concerted or radical mechanisms; highly polarized ligands and/or very electrophilic metal complexes react by ionic (S_N2) mechanisms. The thermodynamics of reductive elimination must be favorable in order for it to occur! Most carbon–halogen reductive eliminations, for example, are thermodynamically unfavorable (this has turned out to be a good thing, especially for cross-coupling reactions).

Reductive elimination is an important step in many catalytic cycles—it usually comes near the “end” of catalytic mechanisms, just before product formation. For some catalytic cycles it’s the turnover-limiting step, making it very important to consider! Hydrocyanation is a classic example; in the mechanism of this reaction, reductive elimination of C–CN is the slow step. Electron-poor alkyl ligands, derived from electron-poor olefins like unsaturated ketones, are bad enough at reductive elimination to prevent turnover altogether! Of course, the electronegative CN ligand is not helping things either…how would you design the ancillary ligands L to speed up this step?

Figure 14.1.3.4: Reductive elimination is the turnover-limiting step of hydrocyanation. How would you design L to speed it up? (Michael Evans)
Reductive elimination is the turnover-limiting step of hydrocyanation. How would you design L to speed it up?

Dr. Michael Evans (Georgia Tech)

## 14.1.4: Sigma Bond Metathasis

Metal compounds with d^0 electron count are able to activate C-H bonds through σ bond metathesis reactions. σ-bond metathesis is a chemical reaction wherein a metal-ligand σ bond undergoes metathesis (exchange of parts) with the sigma bond in some other reagent. The reaction is illustrated by the exchange of lutetium(III) methyl complex with a hydrocarbon (R-H) (Figure 14.1.4.1). The oxidation state of the metal ion does not change during the reaction. This reactivity was first observed by Patricia L. Watson, a researcher at duPont.

Figure 14.1.4.1: Example of σ bond metathesis; exchange of lutetium(III) methyl complex with a hydrocarbon. The R-H bond is activated and a new C-H bond is created. (CC-BY-SA; Kathryn Haas)

The reaction is mainly observed for complexes of metals with d^0 electron configuration, e.g. complexes of Sc(III), Zr(IV), Nb(V), Ta(V), etc. Complexes of the f-block elements also participate, regardless of the number of f-electrons. For metals unsuited for redox, sigma bond metathesis provides a pathway for introducing substituents.

[Note: corrected; the source prints "Nb(IV)" where this reads "Nb(V)". The list is of d0 ions; Nb(IV) is d1, and the d0 ion is Nb(V), like Ta(V).]

The details of the reaction mechanism are somewhat a matter of debate, however a currently accepted model is that it proceeds through a cycloaddition and via a "kite-shaped" transition state (Figure 14.1.4.2). Indeed, the rate of the reaction is characterized by a highly negative entropy of activation, indicating an ordered transition state.

[Note: corrected; the source prints "precedes" where this reads "proceeds". A typing error.]

Figure 14.1.4.2: The currently accepted model for the mechanism of σ bond metathesis involving a kite-like transition state. (CC-BY-SA; Kathryn Haas)

[Note: corrected; the source prints "accepted mode for" where this reads "accepted model for". A typing error.]

The reaction attracted much attention because hydrocarbons are normally unreactive substrates, whereas some sigma-bond metatheses are facile. Unfortunately the reaction does not readily allow the introduction of functional groups. It has been suggested that dehydrocoupling reactions proceed via sigma-bond metathesis.

Sources:

- https://en.Wikipedia.org/wiki/Sigma-bond_metathesis
- Waterman, Rory (2013). "σ-Bond Metathesis: A 30-Year Retrospective". Organometallics. 32: 7249–7263. doi:10.1021/om400760k.

## 14.1.5: Application of Pincer Ligands

Pincer ligands are chelating agents that bind tightly to three adjacent coplanar sites of a metal complex. Stoichiometric and catalytic applications of pincer complexes have been studied at an accelerating pace since the mid-1970s.

Pincers often include one anionic, two-electron donor flanked by two neutral, two-electron donor groups. It consists of a rigid, planar backbone, usually consisting of aryl frameworks. The inflexibility of the pincer-metal interaction confers high thermal stability to the resulting complexes. This stability is in part ascribed to the constrained geometry of the pincer, which inhibits ligand exchange and cyclometallation of the pincer. In contrast, cyclometallation is often a significant deactivation process in the case of other types of chelates, in particular limiting their ability to effect C-H bond activation. The pincer ligand also creates a hydrophobic pocket around the reactive coordination site.

There are various types of pincer ligands that are used in transition metal catalysis. Often, they have the same two-electron donor flanking the metal centre, but this is not a requirement. Early examples of pincer ligands were anionic with a carbanion as the central donor site and flanking phosphine donors; these compounds are referred to as PCP pincers. Although the most common class of pincer ligands features PCP donor sets, variations have been developed where the phosphines are replaced by thioethers and tertiary amines. Many pincer ligands also feature nitrogenous donors at the central coordinating group position (see figure), such as pyridines. By altering the properties of the pincer ligands, it is possible to significantly alter the chemistry at the metal centre. Changing the hardness/softness of the donor, using electron-withdrawing groups (EWGs) in the backbone, and the altering the steric constraints of the ligands are all methods used to tune the reactivity at the metal centre.

Figure 14.1.5.1: Examples of transition metal pincer complexes. (Scott0, Examples pincer complexes, CC BY-SA 3.0)

### The Role of Pincer Complexes in Catalysis

#### Suzuki-Miyaura coupling

Pincer complexes have been shown to catalyse Suzuki-Miyaura coupling reactions, a versatile carbon-carbon bond forming reaction. Suzuki-Miyaura coupling (or Suzuki coupling) is a metal catalyzed reaction, typically with Pd, between an alkenyl (vinyl), aryl, or alkynyl organoborane (boronic acid or boronic ester, or special cases with aryl trifluoroborane) and halide or triflate under basic conditions. This reaction is used to create carbon-carbon bonds to produce conjugated systems of alkenes, styrenes, or biaryl compounds (Scheme 14.1.5.2).

[Note: corrected; the source prints "(Scheme 1)" where this reads "(Scheme 14.1.5.2)". The general Suzuki scheme is Scheme 14.1.5.2 here; "Scheme 1" is left over from the original page.]

Scheme 14.1.5.2: General reaction scheme of Suzuki cross coupling reaction. (Suzuki-Miyaura Coupling)

Modified conditions have demonstrated reactivity with less reactive substrates such as alkyl boranes (BR3) or aryl or alkenyl chlorides by amending the base and ligands employed.

Figure 14.1.5.3: Suzuki coupling proceeds via three basic steps: oxidative addition, transmetallation, and reductive elimination. (Suzuki-Miyaura Coupling)

#### Sonogashira Coupling

The Sonogashira reaction (also called the Sonogashira-Hagihara reaction) is the cross coupling of aryl or vinyl halides with terminal alkynes to generate conjugated enynes and arylalkynes (Scheme 14.1.5.4). The reaction typically proceeds in the presence of a palladium(0) catalyst, a copper(I) cocatalyst, and an amine base. Alternative procedures describe Sonogashira coupling reactions performed without the Cu(I) cocatalyst.

[Note: corrected; the source prints "(Scheme 1)" where this reads "(Scheme 14.1.5.4)"; the source prints "imine base" where this reads "amine base". The general Sonogashira scheme is Scheme 14.1.5.4 here; "Scheme 1" is left over from the original page. Sonogashira coupling uses an amine base, such as Et3N or Et2NH.]

Scheme 14.1.5.4: General reaction for Sonogashira Coupling. (Jcap17, Sonogashira Cross-Coupling Reaction, CC BY-SA 3.0)

#### Dehydrogenation of alkanes

Alkanes undergo dehydrogenation at high temperatures. Typically this conversion is promoted heterogeneously because typically homogeneous catalysts do not survive the required temperatures (~200 °C) The corresponding conversion can be catalyzed homogeneously by pincer catalysts, which are sufficiently thermally robust. Proof of concept was established in 1996 by Jensen and co-workers. They reported that an iridium and rhodium pincer complex catalyze the dehydrogenation of cyclooctane with a turnover frequency of 12 min^−1 at 200 °C. They found that the dehydrogenation was performed at a rate two orders of magnitude greater than those previously reported. The iridium pincer complex was also found to exhibit higher activity than the rhodium complex. This rate difference may be due to the availability of the Ir(V) oxidation state which allows stronger Ir-C and Ir-H bonds.

The homogeneously catalyzed process can be coupled to other reactions such as alkene metathesis. Such tandem reactions have not been demonstrated with heterogeneous catalysts.

Figure 14.1.5.5: Iridium pincer complex catalyzing the dehydrogenation of cyclooctane to cyclooctene. (Paul Gray, Iridium Pincer Catalysis, CC BY-SA 3.0)

Sources:

- https://en.Wikipedia.org/wiki/Transi...pincer_complex
- Sonogashira Coupling
- Suzuki-Miyaura Coupling
