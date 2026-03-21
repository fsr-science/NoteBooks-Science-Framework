# CHAPTER 1 — RAPID REVISION + MIND MAPS

### Units and Measurement

---

# ⚡ ONE-PAGE RAPID REVISION SHEET

## 📏 The 7 SI Base Units — Absolute Must-Memorise

| Quantity            | Unit     | Symbol        | Memory Hook                                           |
| ------------------- | -------- | ------------- | ----------------------------------------------------- |
| Length              | metre    | **m**   | "Measure a**m**arathon"                         |
| Mass                | kilogram | **kg**  | "**K**ilo**g**rams of groceries"          |
| Time                | second   | **s**   | "Every**s**econd counts"                        |
| Electric current    | ampere   | **A**   | "**A**mpere =**A**ndre Marie Ampère"     |
| Temperature         | kelvin   | **K**   | "**K**elvin = **K** -scale, no negatives" |
| Amount of substance | mole     | **mol** | "**Mol**ecular counting"                        |
| Luminous intensity  | candela  | **cd**  | "Can**d**ela = can**d**le"                |

**+ 2 supplementary** (dimensionless): **radian** (rad) for plane angle, **steradian** (sr) for solid angle

---

## 🔢 Significant Figures — Quick Rules

```
TYPE OF DIGIT               SIGNIFICANT?       EXAMPLE        SF COUNT
────────────────────────────────────────────────────────────────────────
All non-zero digits          YES               285.7          4 SF
Zeros between non-zero      YES               1005           4 SF
Leading zeros               NO                0.0023         2 SF
Trailing zeros, no decimal  NO                2500           2 SF
Trailing zeros, with decimal YES              2.500          4 SF
────────────────────────────────────────────────────────────────────────
```

 **Calc rules** :

* **Add/Subtract** → match DECIMAL PLACES of least precise value
* **Multiply/Divide** → match SF COUNT of least precise value
* **Rounding when digit = 5** → round to EVEN preceding digit

**Scientific notation** → all digits in coefficient ARE significant (4.700 × 10³ → 4 SF)

---

## 📐 Key Dimensional Formulae — Must Know Cold

```
QUANTITY                  DIMENSIONAL FORMULA
────────────────────────────────────────────
Velocity                  [M⁰LT⁻¹]
Acceleration              [M⁰LT⁻²]
Force (F = ma)            [MLT⁻²]
Work / Energy             [ML²T⁻²]
Power                     [ML²T⁻³]
Momentum / Impulse        [MLT⁻¹]
Pressure / Stress         [ML⁻¹T⁻²]
Density                   [ML⁻³T⁰]
Frequency                 [M⁰L⁰T⁻¹]
Gravitational constant G  [M⁻¹L³T⁻²]
Planck's constant h       [ML²T⁻¹]
Surface tension           [MT⁻²]
Viscosity coefficient     [ML⁻¹T⁻¹]
────────────────────────────────────────────
```

---

## ⚠️ Dimension Twins (Same Formula, Different Quantities)

| Dimensional Formula | Physical Quantities                                     |
| ------------------- | ------------------------------------------------------- |
| [ML²T⁻²]         | Work, Energy, Torque, Heat                              |
| [MLT⁻¹]           | Linear momentum, Impulse                                |
| [T⁻¹]             | Frequency, Angular velocity, Radioactive decay constant |
| [ML⁻¹T⁻²]       | Pressure, Stress, Modulus of Elasticity, Energy density |

> ⚠️ Dimensional analysis CANNOT distinguish between quantities with identical dimensions.

---

## 🔁 Dimensional Analysis — 3 Applications Summary

```
1. CHECK EQUATION → All terms must have same dimensions (Principle of Homogeneity)
   ✓ If same → possibly correct    ✗ If different → definitely wrong

2. DERIVE FORMULA → Q = k·xᵃ·yᵇ·zᶜ → solve for a, b, c by equating powers
   Limitation: k (dimensionless constant) CANNOT be found this way

3. UNIT CONVERSION → n₂ = n₁ × [M₁/M₂]ᵃ × [L₁/L₂]ᵇ × [T₁/T₂]ᶜ
   Example: 1 km h⁻¹ = 5/18 m s⁻¹
```

---

## 🔑 Critical Conversion Facts

| Conversion      | Value                                  |
| --------------- | -------------------------------------- |
| 1 km h⁻¹      | = 5/18 m s⁻¹ ≈ 0.278 m s⁻¹        |
| 1 m s⁻¹       | = 18/5 km h⁻¹ = 3.6 km h⁻¹         |
| 1 light year    | = 9.46 × 10¹⁵ m                     |
| 1 Angstrom (Å) | = 10⁻¹⁰ m                           |
| 1 fermi         | = 10⁻¹⁵ m                           |
| 1 atm           | = 1.013 × 10⁵ Pa                     |
| 1 year          | ≈ π × 10⁷ s (useful approximation) |
| 1 calorie       | = 4.2 J                                |

---

## ⚡ Limitations of Dimensional Analysis — 5 Points

1. Cannot find dimensionless constants (π, ½, 2, etc.)
2. Cannot work with more than 3 independent variables (in mechanics)
3. Cannot distinguish between same-dimension quantities (work vs torque)
4. Cannot handle exponential/log/trig functions (their arguments must be dimensionless)
5. Does not tell if an equation is actually correct — only dimensionally valid

---

---

# 🗺️ MIND MAP 1 — Chapter Overview

```
                    ┌─────────────────────────────────────┐
                    │      UNITS AND MEASUREMENT           │
                    └─────────────────┬───────────────────┘
                                      │
          ┌───────────────────────────┼────────────────────────────┐
          │                           │                            │
          ▼                           ▼                            ▼
  ┌───────────────┐         ┌─────────────────┐         ┌──────────────────┐
  │  MEASUREMENT  │         │    SIGNIFICANT  │         │   DIMENSIONAL    │
  │  & SI UNITS   │         │    FIGURES      │         │   ANALYSIS       │
  └───────┬───────┘         └────────┬────────┘         └────────┬─────────┘
          │                          │                            │
    ┌─────┴──────┐            ┌──────┴──────┐             ┌──────┴──────────┐
    │            │            │             │             │                 │
    ▼            ▼            ▼             ▼             ▼                 ▼
 7 Base      Derived       Rules for    Arithmetic    Dimensional      Applications
 Units       Units         Counting     Operations    Formula          1. Check eq.
    │            │            │             │             │            2. Derive rel.
 m, kg, s,  from base     Non-zero     Add/Sub:        [M^a           3. Convert
 A, K,      units         digits       dec.places      L^b T^c]         units
 mol, cd    +2 supp.      Leading 0s   Mul/Div:
             rad, sr      Trailing 0s  SF count      Limitations
                                       Rounding      Cannot find k
                          Scientific                 Cannot handle
                          Notation                   trig/log/exp
                          Order of
                          Magnitude
```

---

# 🗺️ MIND MAP 2 — SI Base Units (Definitions Web)

```
                              ┌──────────────────────────────┐
                              │      SI BASE UNITS (7)       │
                              └──────────────┬───────────────┘
                                             │
        ┌────────────────────────────────────┼──────────────────────────────────┐
        │                │                   │                   │              │
        ▼                ▼                   ▼                   ▼              ▼
  ┌──────────┐    ┌──────────┐        ┌──────────┐        ┌──────────┐  ┌─────────┐
  │ metre    │    │kilogram  │        │ second   │        │ ampere   │  │ kelvin  │
  │ (m)      │    │ (kg)     │        │  (s)     │        │  (A)     │  │  (K)   │
  │          │    │          │        │          │        │          │  │        │
  │Defined by│    │Defined by│        │Defined by│        │Defined by│  │Defined │
  │ speed of │    │ Planck   │        │caesium-  │        │elementary│  │by Boltz-│
  │ light c  │    │constant h│        │133 freq. │        │charge e  │  │mann k  │
  └──────────┘    └──────────┘        └──────────┘        └──────────┘  └────────┘
        │                                                                    │
  c = 299792458                                                    k = 1.38×10⁻²³ J/K
  m s⁻¹ (exact)                                                   K = °C + 273.15

        ┌──────────────────────────────────────┐
        │     mole (mol)    │   candela (cd)   │
        │                   │                  │
        │  One mole =       │ Luminous intens. │
        │  Avogadro number  │ in given dirn    │
        │  of entities      │                  │
        │  6.022×10²³       │ 540×10¹² Hz rad. │
        └──────────────────────────────────────┘
```

---

# 🗺️ MIND MAP 3 — Significant Figures (Full Decision Tree)

```
                         ┌──────────────────────────┐
                         │   COUNTING SIG. FIGURES  │
                         └──────────────┬───────────┘
                                        │
              ┌─────────────────────────┼──────────────────────────┐
              │                         │                          │
              ▼                         ▼                          ▼
  ┌───────────────────┐    ┌────────────────────┐    ┌────────────────────────┐
  │   NON-ZERO DIGITS │    │      ZEROS         │    │   SCIENTIFIC NOTATION  │
  │  ALWAYS SIGNIFICANT│   │                    │    │                        │
  │  Examples:        │    │  Type 1: BETWEEN   │    │  All digits in base    │
  │  285 → 3 SF       │    │  non-zero digits   │    │  ARE significant       │
  │  5.74 → 3 SF      │    │  → ALWAYS SIG.     │    │  4.700 × 10³ → 4 SF   │
  └───────────────────┘    │  2005 → 4 SF       │    │  1.20 × 10⁻² → 3 SF  │
                           │                    │    └────────────────────────┘
                           │  Type 2: LEADING   │
                           │  (before first     │
                           │  non-zero digit)   │
                           │  → NOT SIG.        │
                           │  0.00230 → 3 SF    │
                           │                    │
                           │  Type 3: TRAILING  │
                           │  with decimal →    │
                           │  SIG.              │
                           │  1.200 → 4 SF      │
                           │                    │
                           │  Type 4: TRAILING  │
                           │  no decimal →      │
                           │  NOT SIG.          │
                           │  2500 → 2 SF       │
                           └────────────────────┘

ARITHMETIC OPERATIONS WITH SF:
┌─────────────────────────────────────────────────────────────────┐
│ ADDITION / SUBTRACTION          MULTIPLICATION / DIVISION       │
│ → Match DECIMAL PLACES          → Match SF COUNT               │
│ of least precise number         of least precise number         │
│                                                                 │
│ 436.32 + 227.2 + 0.301          4.237 g / 2.51 cm³             │
│ = 663.8 g                       = 1.69 g/cm³                   │
│ (limited by 227.2: 1 dp)        (limited by 2.51: 3 SF)        │
└─────────────────────────────────────────────────────────────────┘
```

---

# 🗺️ MIND MAP 4 — Dimensional Analysis (Applications Tree)

```
                    ┌──────────────────────────────────┐
                    │       DIMENSIONAL ANALYSIS       │
                    └─────────────────┬────────────────┘
                                      │
          ┌───────────────────────────┼───────────────────────────┐
          │                           │                           │
          ▼                           ▼                           ▼
  ┌───────────────┐         ┌─────────────────┐         ┌────────────────┐
  │  APPLICATION 1│         │  APPLICATION 2  │         │ APPLICATION 3  │
  │  Check eqn.   │         │  Derive formula │         │ Convert units  │
  │  consistency  │         │                 │         │                │
  └───────┬───────┘         └────────┬────────┘         └───────┬────────┘
          │                          │                           │
          ▼                          ▼                           ▼
  Principle of               Q = k·xᵃ·yᵇ·zᶜ           n₂ = n₁ × (u₁/u₂)
  Homogeneity:               Write dim. formula          in each dimension
  All terms must             Equate powers of         
  have same dims.            [M], [L], [T]            Example:
                             Solve for a, b, c         1 J = ? erg
  If different dims.         k is found only by        J = kg·m²·s⁻²
  → DEFINITELY WRONG         experiment/theory         erg = g·cm²·s⁻²
                                                       1 J = 10⁷ erg
  If same dims.              Example:
  → POSSIBLY CORRECT         T = k·lˣ·gʸ·mᶻ
  (not guaranteed)           → z = 0 (mass-indep!)
                             → T = k√(l/g)

  ┌─────────────────────────────────────────────────────────────┐
  │                   LIMITATIONS                               │
  │  1. Cannot determine k (dimensionless constant)             │
  │  2. Fails for >3 independent variables (in mechanics)       │
  │  3. Cannot distinguish same-dimension quantities            │
  │  4. Arguments of sin, log, exp must be checked separately   │
  │  5. Confirms validity, not correctness                      │
  └─────────────────────────────────────────────────────────────┘
```

---

# 🗺️ MIND MAP 5 — Common Physical Quantities & Their Dimensions

```
MECHANICS BASE: [M] · [L] · [T]

KINEMATICS:
  velocity     [LT⁻¹]  ←→  acceleration [LT⁻²]
       ↕                          ↕
  displacement [L]       force [MLT⁻²]  (×mass)
                                ↓
         ┌──────────────────────┼──────────────────────┐
         ▼                      ▼                      ▼
    Work/Energy          Momentum/Impulse          Torque
    [ML²T⁻²]             [MLT⁻¹]               [ML²T⁻²]
         ↓                      ↑                    NOTE:
    Power [ML²T⁻³]        (= force × time)    Same dims as
    (÷ time)             (= mass × velocity)    Work — can't
                                                distinguish
         ↕
    Pressure [ML⁻¹T⁻²]
    (= force / area)
    = Stress = Energy density
    = Modulus of elasticity

SPECIAL:
  Frequency [T⁻¹] = Angular velocity [T⁻¹]  ← same dims!
  G (grav. const.) [M⁻¹L³T⁻²]
  h (Planck) [ML²T⁻¹]
  Surface tension [MT⁻²]
  Viscosity [ML⁻¹T⁻¹]
```

---

# 🗺️ MIND MAP 6 — SI Prefixes (Powers of 10)

```
LARGE (positive powers)          SMALL (negative powers)
──────────────────────────────────────────────────────────
tera  (T)  = 10¹²                deci  (d)  = 10⁻¹
giga  (G)  = 10⁹                 centi (c)  = 10⁻²
mega  (M)  = 10⁶                 milli (m)  = 10⁻³
kilo  (k)  = 10³                 micro (μ)  = 10⁻⁶
hecto (h)  = 10²                 nano  (n)  = 10⁻⁹
deca  (da) = 10¹                 pico  (p)  = 10⁻¹²
                                 femto (f)  = 10⁻¹⁵
                                 atto  (a)  = 10⁻¹⁸

MEMORY TRICKS:
  "The Giant Mega Kilo" → T G M k (powers 12, 9, 6, 3)
  "deci centi milli micro nano pico" (10⁻¹ to 10⁻¹²)

IMPORTANT SQUARED/CUBED PREFIX CAUTION:
  1 km = 10³ m  →  1 km² = 10⁶ m²  →  1 km³ = 10⁹ m³
  1 cm = 10⁻² m →  1 cm² = 10⁻⁴ m² →  1 cm³ = 10⁻⁶ m³
```

---

*End of Rapid Revision + Mind Maps — Ch. 1: Units and Measurement*
