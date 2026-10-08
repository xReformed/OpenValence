import atomicStructureIcon from "../../assets/concept/atomic-structure.webp";
import type { Concept } from "../types";

const atomicStructure: Concept = {
  slug: "atomic-structure",
  title: "Atomic structure and periodic trends",
  icon: atomicStructureIcon,
  status: "planned",
  summary:
    "A levelled path through the atom, from early atomic models through electron configurations to periodic trends.",
  span: "atomic models to periodic trends",
  stages: [
    {
      title: "Atoms and particles",
      levels: [
        {
          skill: "Development of atomic models (Dalton, Thomson, Rutherford, Bohr, quantum)",
          tag: "atomic-models",
          example: "Rutherford's gold foil experiment showed a small, dense nucleus",
        },
        {
          skill: "Subatomic particles: charge, mass, location",
          tag: "subatomic-particles",
          example: "Proton: +1, ~1 u, in the nucleus",
        },
        {
          skill: "Atomic number, mass number, and nuclear symbols",
          tag: "nuclear-symbol",
          example: "³⁵₁₇Cl: 17 protons, 18 neutrons, 17 electrons",
        },
        {
          skill: "Counting particles in ions",
          tag: "ion-particles",
          example: "Fe3+: 26 protons, 23 electrons",
        },
        {
          skill: "Isotopes",
          tag: "isotopes",
          example: "C-12, C-13, and C-14 differ only in neutrons",
        },
        {
          skill: "Average atomic mass",
          tag: "average-atomic-mass",
          example: "75.78% Cl-35 (34.969 u) and 24.22% Cl-37 (36.966 u) → 35.45 u",
        },
        {
          skill: "Reading mass spectra",
          tag: "mass-spectrometry",
          example: "Finding isotope abundances from peak heights",
          advanced: true,
        },
      ],
    },
    {
      title: "Periodic table",
      levels: [
        {
          skill: "Groups, periods, blocks; metals, nonmetals, metalloids; group names",
          tag: "periodic-table-layout",
          example: "Alkali metals, halogens, noble gases",
        },
        {
          skill: "Valence electrons of main-group elements",
          tag: "valence-electrons",
          example: "Oxygen has 6 valence electrons",
        },
      ],
    },
    {
      title: "Light and quantum theory",
      levels: [
        {
          skill: "Wavelength and frequency (c = λν)",
          tag: "wave-properties",
          example: "500 nm light → 6.00 × 10^14 Hz",
        },
        {
          skill: "Photon energy (E = hν) and the photoelectric effect",
          tag: "photon-energy",
          example: "A 500 nm photon carries 3.98 × 10^−19 J",
        },
        {
          skill: "Bohr model and hydrogen line spectra",
          tag: "bohr-model",
          example: "n = 3 → 2 emits red light at 656 nm",
        },
        {
          skill: "Wave-particle duality (de Broglie wavelength)",
          tag: "de-broglie",
          example: "Wavelength of a moving electron",
          advanced: true,
        },
        {
          skill: "Heisenberg uncertainty principle",
          tag: "uncertainty-principle",
          example: "Why exact electron paths can't be known",
          advanced: true,
        },
      ],
    },
    {
      title: "Quantum numbers and orbitals",
      levels: [
        {
          skill: "Quantum numbers (n, l, m_l, m_s) and valid sets",
          tag: "quantum-numbers",
          example: "n = 2, l = 2 is not allowed",
        },
        {
          skill: "Sublevels and orbital shapes (s, p, d, f)",
          tag: "orbital-shapes",
          example: "A p sublevel has 3 orbitals holding up to 6 electrons",
        },
        {
          skill: "Orbital nodes",
          tag: "orbital-nodes",
          example: "A 3p orbital has 1 radial node (n − l − 1)",
          advanced: true,
        },
      ],
    },
    {
      title: "Electron configurations",
      levels: [
        {
          skill: "Aufbau principle, Pauli exclusion, Hund's rule",
          tag: "configuration-rules",
          example: "Fill lowest energy first; pair electrons only when needed",
        },
        {
          skill: "Full electron configurations",
          tag: "electron-configuration",
          example: "Fe: 1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6",
        },
        {
          skill: "Orbital diagrams",
          tag: "orbital-diagrams",
          example: "Nitrogen's 2p has three unpaired electrons",
        },
        {
          skill: "Noble-gas shorthand",
          tag: "noble-gas-shorthand",
          example: "Fe: [Ar] 4s^2 3d^6",
        },
        {
          skill: "Configuration exceptions",
          tag: "config-exceptions",
          example: "Cr: [Ar] 4s^1 3d^5; Cu: [Ar] 4s^1 3d^10",
        },
        {
          skill: "Configurations of ions",
          tag: "ion-configurations",
          example: "Fe2+: [Ar] 3d^6 (4s electrons are removed first)",
        },
        {
          skill: "Paramagnetism and diamagnetism",
          tag: "magnetism",
          example: "Zn is diamagnetic; all electrons are paired",
        },
        {
          skill: "f-block configurations (lanthanides and actinides)",
          tag: "f-block",
          example: "Configurations for Ce or U",
          advanced: true,
        },
      ],
    },
    {
      title: "Periodic trends",
      levels: [
        {
          skill: "Effective nuclear charge and shielding",
          tag: "effective-nuclear-charge",
          example: "Why outer electrons feel less than the full nuclear charge",
        },
        {
          skill: "Slater's rules for calculating Z_eff",
          tag: "slaters-rules",
          example: "Calculating Z_eff for a 3p electron in Cl",
          advanced: true,
        },
        {
          skill: "Atomic radius",
          tag: "atomic-radius",
          example: "K > Na > Mg > Cl",
        },
        {
          skill: "Ionization energy and successive ionization energies",
          tag: "ionization-energy",
          example: "Mg shows a big jump after the 2nd ionization",
        },
        {
          skill: "Ionization energy exceptions",
          tag: "ionization-exceptions",
          example: "B is lower than Be; O is lower than N",
        },
        {
          skill: "Electron affinity",
          tag: "electron-affinity",
          example: "Cl releases more energy gaining an electron than F does",
        },
        {
          skill: "Electronegativity",
          tag: "electronegativity",
          example: "F is the most electronegative element",
        },
        {
          skill: "Ionic radii and isoelectronic series",
          tag: "ionic-radii",
          example: "O2− > F− > Na+ > Mg2+",
        },
        {
          skill: "Metallic character and reactivity trends",
          tag: "metallic-character",
          example: "Reactivity increases down the alkali metals",
        },
      ],
    },
    {
      title: "Review",
      levels: [
        {
          skill: "Mixed review: configurations, ranking trends, explaining exceptions",
          tag: "atomic-mixed",
          example: "Rank and explain: Na, Mg, Al ionization energies",
        },
      ],
    },
  ],
};

export default atomicStructure;
