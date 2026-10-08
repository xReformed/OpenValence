import gasesIcon from "../../assets/concept/gases.webp";
import type { Concept } from "../types";

const gases: Concept = {
  slug: "gases",
  title: "Gases",
  icon: gasesIcon,
  status: "planned",
  summary:
    "A levelled path through gases, from pressure and the gas laws through the ideal gas law and gas mixtures to kinetic molecular theory and real gases.",
  span: "pressure to real gases",
  stages: [
    {
      title: "Basics",
      levels: [
        {
          skill: "Properties of gases",
          tag: "gas-properties",
          example: "Gases are compressible and fill their container",
        },
        {
          skill: "What pressure is; barometers",
          tag: "pressure-basics",
          example: "Atmospheric pressure supports a 760 mm column of mercury",
        },
        {
          skill: "Pressure unit conversions",
          tag: "pressure-units",
          example: "1 atm = 760 mmHg = 760 torr = 101.325 kPa; 1.50 atm = 1140 mmHg",
        },
        {
          skill: "Manometers (open and closed)",
          tag: "manometers",
          example: "Gas pressure = atmospheric pressure ± height difference",
        },
        {
          skill: "Kelvin temperature",
          tag: "kelvin",
          example: "25 °C = 298 K",
        },
      ],
    },
    {
      title: "Gas laws",
      levels: [
        {
          skill: "Boyle's law (P and V)",
          tag: "boyles-law",
          example: "2.00 L at 1.00 atm → 4.00 L at 0.500 atm",
        },
        {
          skill: "Charles's law (V and T)",
          tag: "charles-law",
          example: "1.00 L at 300 K → 2.00 L at 600 K",
        },
        {
          skill: "Gay-Lussac's law (P and T)",
          tag: "gay-lussac-law",
          example: "1.00 atm at 300 K → 1.20 atm at 360 K",
        },
        {
          skill: "Avogadro's law (V and n)",
          tag: "avogadro-law",
          example: "Doubling the moles doubles the volume at the same T and P",
        },
        {
          skill: "Combined gas law",
          tag: "combined-gas-law",
          example: "Changing P, V, and T together",
        },
        {
          skill: "STP and molar volume",
          tag: "molar-volume",
          example: "22.4 L/mol (0 °C, 1 atm) vs 22.7 L/mol (0 °C, 1 bar)",
        },
        {
          skill: "Ideal gas law (PV = nRT)",
          tag: "ideal-gas-law",
          example: "1.00 mol at 300 K and 1.00 atm occupies 24.6 L",
        },
        {
          skill: "Choosing the right R value and units",
          tag: "gas-constant",
          example: "0.08206 L·atm/(mol·K) vs 8.314 J/(mol·K)",
        },
      ],
    },
    {
      title: "Applications",
      levels: [
        {
          skill: "Gas density",
          tag: "gas-density",
          example: "CO2 at 0 °C and 1 atm: 1.96 g/L",
        },
        {
          skill: "Molar mass from gas data",
          tag: "gas-molar-mass",
          example: "Identifying an unknown gas from its mass, volume, T, and P",
        },
        {
          skill: "Volume ratios in reactions",
          tag: "gas-volume-ratio",
          example: "1.0 L N2 reacts with 3.0 L H2",
        },
        {
          skill: "Gas stoichiometry",
          tag: "gas-stoichiometry",
          example: "Liters of CO2 produced from a given mass of fuel",
        },
      ],
    },
    {
      title: "Gas mixtures",
      levels: [
        {
          skill: "Dalton's law of partial pressures",
          tag: "daltons-law",
          example: "0.30 atm + 0.50 atm = 0.80 atm total",
        },
        {
          skill: "Mole fraction and partial pressure",
          tag: "partial-pressure-mole-fraction",
          example: "O2 is 21% of air at 1.00 atm → 0.21 atm",
        },
        {
          skill: "Gas collected over water",
          tag: "gas-over-water",
          example: "755 torr total at 25 °C − 23.8 torr water vapor = 731 torr dry gas",
        },
      ],
    },
    {
      title: "Kinetic molecular theory",
      levels: [
        {
          skill: "Postulates of kinetic molecular theory",
          tag: "kmt-postulates",
          example: "Gas particles are in constant random motion with negligible volume",
        },
        {
          skill: "Temperature and average kinetic energy",
          tag: "kinetic-energy-temperature",
          example: "All gases at the same temperature have the same average kinetic energy",
        },
        {
          skill: "Molecular speeds (qualitative)",
          tag: "molecular-speed",
          example: "H2 molecules move faster than O2 at the same temperature",
        },
        {
          skill: "Root-mean-square speed calculations",
          tag: "rms-speed",
          example: "N2 at 298 K: about 515 m/s",
          advanced: true,
        },
        {
          skill: "Graham's law of effusion and diffusion",
          tag: "grahams-law",
          example: "H2 effuses about 4 times faster than O2",
        },
      ],
    },
    {
      title: "Real gases",
      levels: [
        {
          skill: "When gases deviate from ideal behavior",
          tag: "real-gas-behavior",
          example: "High pressure and low temperature",
        },
        {
          skill: "Van der Waals equation",
          tag: "van-der-waals",
          example: "Correcting for particle volume and attractions",
          advanced: true,
        },
        {
          skill: "Compressibility factor (Z)",
          tag: "compressibility-factor",
          example: "Z > 1 or Z < 1 and what each means",
          advanced: true,
        },
      ],
    },
    {
      title: "Applied",
      levels: [
        {
          skill: "Real-world gas problems",
          tag: "applied-gases",
          example: "Airbag reaction: 2NaN3 → 2Na + 3N2; scuba diving; weather balloons",
        },
      ],
    },
    {
      title: "Review",
      levels: [
        {
          skill: "Mixed review: choosing the right law and solving",
          tag: "gases-mixed",
          example: "Problems where the student must identify which law applies",
        },
      ],
    },
  ],
};

export default gases;
