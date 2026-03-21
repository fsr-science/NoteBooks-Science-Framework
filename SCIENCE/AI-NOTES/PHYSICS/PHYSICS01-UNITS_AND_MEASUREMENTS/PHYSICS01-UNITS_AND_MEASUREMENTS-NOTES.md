# CHAPTER 1: UNITS AND MEASUREMENT

### Complete Study Notes | Board · NEET · JEE Layered

---

## 🗺️ CONCEPT ROADMAP

```
[Need for Measurement] → Physical Quantity = Number × Unit
        ↓
[Systems of Units] → CGS · FPS · MKS → SI System (1971, revised 2018)
        ↓
[SI Base Units] → 7 Base Units (metre, kilogram, second, ampere, kelvin, mole, candela)
        ↓                 + 2 Supplementary Units (radian, steradian)
[Significant Figures] → Rules for counting · Arithmetic operations · Rounding off
        ↓
[Dimensions of Physical Quantities] → Nature described by powers of base quantities
        ↓
[Dimensional Formula & Equation] → [M^a L^b T^c ...] representation
        ↓
[Dimensional Analysis & Applications]
    ├── Checking dimensional consistency / homogeneity of equations
    └── Deducing relations among physical quantities
```

---

## SECTION 1 — INTRODUCTION TO MEASUREMENT & SI UNITS

### 1.1 Why Measurement?

> **Physical Quantity** = A quantity that can be measured. Its measurement involves comparison with a chosen reference standard called a  **unit** .
>
> **Result of Measurement** = (Numerical value) × (Unit)

* Example: Length of a rod = 5.2 m → numerical value = 5.2, unit = metre
* The **number of physical quantities** appears large, but only a **limited number of units** are needed because quantities are inter-related.
* **Fundamental (Base) Quantities** → have independent units: **Fundamental/Base Units**
* **Derived Quantities** → expressed as combinations of base quantities: **Derived Units**
* A complete set (base + derived) is a  **System of Units** .

### 1.2 Historical Systems of Units

| System                  | Length     | Mass     | Time   |
| ----------------------- | ---------- | -------- | ------ |
| **CGS**           | centimetre | gram     | second |
| **FPS (British)** | foot       | pound    | second |
| **MKS**           | metre      | kilogram | second |

> The internationally accepted modern system is **SI** (Système Internationale d'Unités — French for International System of Units). Developed by **BIPM** (Bureau International des Poids et Mesures), established in **1971** by the  **14th CGPM** , revised in **November 2018** by the General Conference on Weights and Measures.

### 1.3 The Seven SI Base Units ⭐ (Most Tested)

| Base Physical Quantity              | SI Unit  | Symbol        | Defined Using                                                 |
| ----------------------------------- | -------- | ------------- | ------------------------------------------------------------- |
| **Length**                    | metre    | **m**   | Speed of light in vacuum (c = 299,792,458 m s⁻¹)            |
| **Mass**                      | kilogram | **kg**  | Planck constant (h = 6.62607015 × 10⁻³⁴ J·s)             |
| **Time**                      | second   | **s**   | Caesium-133 hyperfine transition frequency (9,192,631,770 Hz) |
| **Electric current**          | ampere   | **A**   | Elementary charge (e = 1.602176634 × 10⁻¹⁹ C)             |
| **Thermodynamic temperature** | kelvin   | **K**   | Boltzmann constant (k = 1.380649 × 10⁻²³ J K⁻¹)         |
| **Amount of substance**       | mole     | **mol** | Avogadro constant (Nₐ = 6.02214076 × 10²³ mol⁻¹)        |
| **Luminous intensity**        | candela  | **cd**  | Luminous efficacy of 540 × 10¹² Hz radiation               |

> ⚠️  **Board Trap** : Memorise symbol capitalisation — the unit name is in lowercase (metre, kelvin), but symbols for named units are capitalised ONLY when named after a person (A for Ampere, K for Kelvin). Metre → m (lowercase), kilogram → kg.

### 1.4 Two Supplementary Units (Dimensionless)

| Quantity              | Unit      | Symbol | Definition                      |
| --------------------- | --------- | ------ | ------------------------------- |
| **Plane angle** | radian    | rad    | dθ = arc length ds / radius r  |
| **Solid angle** | steradian | sr     | dΩ = intercepted area dA / r² |

Both are **dimensionless** quantities.

### 1.5 Some Units Retained for General Use (Outside SI)

| Name                   | Symbol | SI Equivalent                        |
| ---------------------- | ------ | ------------------------------------ |
| Minute                 | min    | 60 s                                 |
| Hour                   | h      | 3600 s                               |
| Day                    | d      | 86400 s                              |
| Year                   | y      | 3.156 × 10⁷ s                      |
| Degree                 | °     | (π/180) rad                         |
| Litre                  | L      | 10⁻³ m³                           |
| Tonne                  | t      | 10³ kg                              |
| Bar                    | bar    | 0.1 MPa = 10⁵ Pa                    |
| Barn                   | b      | 10⁻²⁸ m² (nuclear cross-section) |
| Hectare                | ha     | 1 hm² = 10⁴ m²                    |
| Standard atm. pressure | atm    | 101325 Pa = 1.013 × 10⁵ Pa         |
| Angstrom               | Å     | 10⁻¹⁰ m                           |

### 1.6 SI Prefixes ⭐ (Must Memorise for NEET/JEE)

| Prefix | Symbol | Multiplier | Prefix | Symbol | Multiplier |
| ------ | ------ | ---------- | ------ | ------ | ---------- |
| tera   | T      | 10¹²     | deci   | d      | 10⁻¹     |
| giga   | G      | 10⁹       | centi  | c      | 10⁻²     |
| mega   | M      | 10⁶       | milli  | m      | 10⁻³     |
| kilo   | k      | 10³       | micro  | μ     | 10⁻⁶     |
| hecto  | h      | 10²       | nano   | n      | 10⁻⁹     |
| deka   | da     | 10¹       | pico   | p      | 10⁻¹²   |
|        |        |            | femto  | f      | 10⁻¹⁵   |
|        |        |            | atto   | a      | 10⁻¹⁸   |

> 🔑  **JEE/NEET Tip** : Use prefixes to interconvert units. 1 nm = 10⁻⁹ m. 1 μg = 10⁻⁶ g. Be careful with squared/cubed prefixes: 1 km² = 10⁶ m² (not 10³ m²).

---

## SECTION 2 — SIGNIFICANT FIGURES

### 2.1 What are Significant Figures?

> **Significant Figures (SF)** = All digits in a measurement that are  **known with certainty PLUS the first uncertain (estimated) digit** .
>
> They indicate the **precision** of a measurement, which depends on the **least count** of the measuring instrument.

 **Key principle** : A change in units does **NOT** change the number of significant figures.

* Example: 2.308 cm = 0.02308 m = 23.08 mm → ALL have  **4 significant figures** .

### 2.2 Rules for Counting Significant Figures ⭐

| Rule        | Guideline                                                                              | Examples                       |
| ----------- | -------------------------------------------------------------------------------------- | ------------------------------ |
| **1** | All**non-zero digits**are significant                                            | 285.3 → 4 SF                  |
| **2** | Zeros**between**two non-zero digits are significant                              | 2005 → 4 SF; 80.04 → 4 SF    |
| **3** | Leading zeros (left of first non-zero digit) are**NOT**significant               | 0.00230 → 3 SF; 0.007 → 1 SF |
| **4** | Trailing zeros in a number**without**a decimal point are**NOT**significant | 12300 → 3 SF; 400 → 1 SF     |
| **5** | Trailing zeros in a number**with**a decimal point**ARE**significant        | 3.500 → 4 SF; 0.0600 → 3 SF  |
| **6** | Exact numbers (counting, formulae constants) have**infinite**SF                  | 2 in 2πr; n in T = t/n        |

> ⚠️  **Board/NEET Trap** : To remove ambiguity with trailing zeros, express in  **scientific notation** :
>
> * 4700 m (2 SF?) vs 4.700 × 10³ m (4 SF, unambiguous)
> * All zeros in the base number of scientific notation ARE significant.

### 2.3 Scientific Notation and Order of Magnitude

 **Scientific Notation** : Every number expressed as **N × 10ⁿ** where **1 ≤ N < 10** and n is any integer.

 **Order of Magnitude** : The power of 10 when N is rounded to 1 (if N ≤ 5) or to 10 (if 5 < N ≤ 10).

* Diameter of Earth = 1.28 × 10⁷ m → Order of magnitude = **7**
* Diameter of H atom = 1.06 × 10⁻¹⁰ m → Order of magnitude = **−10**
* Earth's diameter is **17 orders of magnitude** larger than a hydrogen atom.

### 2.4 Rules for Arithmetic Operations with Significant Figures ⭐

#### Addition and Subtraction:

> **Final result should retain as many decimal places as the number with the LEAST decimal places.**

**Example:**

```
  436.32 g   (2 decimal places)
+  227.2  g   (1 decimal place) ← least decimal places
+    0.301 g  (3 decimal places)
= 663.821 g → rounded to → 663.8 g ✓
```

#### Multiplication and Division:

> **Final result should retain as many significant figures as the original number with the LEAST number of significant figures.**

**Example:**

```
Density = 4.237 g / 2.51 cm³
         = 1.68804780876 g/cm³
→ 4.237 has 4 SF; 2.51 has 3 SF → answer has 3 SF
→ Density = 1.69 g cm⁻³ ✓
```

> ⚠️  **Critical Note** : Do NOT mix rules. In addition/subtraction → use decimal places. In multiplication/division → use SF count. Never apply the multiplication rule to an addition problem.

### 2.5 Rules for Rounding Off ⭐

| Digit to be dropped  | Action on preceding digit | Example       |
| -------------------- | ------------------------- | ------------- |
| > 5                  | Raise by 1                | 2.746 → 2.75 |
| < 5                  | Leave unchanged           | 1.743 → 1.74 |
| = 5 (preceding even) | Drop it (leave unchanged) | 2.745 → 2.74 |
| = 5 (preceding odd)  | Raise by 1                | 2.735 → 2.74 |

> 🔑  **JEE Tip** : For multi-step calculations, retain **one extra digit** in intermediate steps to avoid cumulative rounding errors. Round only the final answer.

### 2.6 Uncertainty in Arithmetic Calculations

**Propagation of errors** (preview concept):

For measured quantities:

* Length l = 16.2 ± 0.1 cm = 16.2 cm ± 0.6%
* Breadth b = 10.1 ± 0.1 cm = 10.1 cm ± 1%
* Area = lb = 163.62 cm² ± (0.6 + 1)% = 163.62 ± 1.6% ≈ 164 ± 3 cm²

 **Relative Error** : The accuracy in a measurement depends on both the absolute uncertainty AND the magnitude of the measurement.

* For 1.02 g (±0.01 g): relative error = 0.01/1.02 × 100% ≈ **±1%**
* For 9.89 g (±0.01 g): relative error = 0.01/9.89 × 100% ≈ **±0.1%**

---

## SECTION 3 — DIMENSIONS OF PHYSICAL QUANTITIES

### 3.1 What are Dimensions?

> **Dimensions** of a physical quantity are the **powers (exponents)** to which the base quantities are raised to represent that quantity.
>
> Written using **square brackets [ ]** around the quantity symbol.

The seven base quantity dimensions:

| Base Quantity             | Dimension Symbol |
| ------------------------- | ---------------- |
| Length                    | **[L]**    |
| Mass                      | **[M]**    |
| Time                      | **[T]**    |
| Electric current          | **[A]**    |
| Thermodynamic temperature | **[K]**    |
| Luminous intensity        | **[cd]**   |
| Amount of substance       | **[mol]**  |

> In  **mechanics** , all quantities can be expressed using only  **[M], [L], [T]** .

### 3.2 Dimensional Formulae of Common Physical Quantities ⭐

```
MECHANICS QUANTITIES:
─────────────────────────────────────────────────────────
Quantity              Formula / Derivation        Dimensional Formula
─────────────────────────────────────────────────────────
Length                base                        [M⁰ L¹ T⁰] = [L]
Area                  L × L                       [M⁰ L² T⁰] = [L²]
Volume                L × L × L                   [M⁰ L³ T⁰] = [L³]
Velocity/Speed        Length/Time                 [M⁰ L¹ T⁻¹] = [LT⁻¹]
Acceleration          Velocity/Time               [M⁰ L¹ T⁻²] = [LT⁻²]
Force (F = ma)        Mass × Acceleration         [M¹ L¹ T⁻²] = [MLT⁻²]
Work/Energy (W = Fd)  Force × Length              [M¹ L² T⁻²] = [ML²T⁻²]
Power (P = W/t)       Work/Time                   [M¹ L² T⁻³] = [ML²T⁻³]
Momentum (p = mv)     Mass × Velocity             [M¹ L¹ T⁻¹] = [MLT⁻¹]
Density (ρ = m/V)     Mass/Volume                 [M¹ L⁻³ T⁰] = [ML⁻³]
Pressure (P = F/A)    Force/Area                  [M¹ L⁻¹ T⁻²] = [ML⁻¹T⁻²]
Impulse               Force × Time                [M¹ L¹ T⁻¹] = [MLT⁻¹]
Torque                Force × Length (arm)        [M¹ L² T⁻²] = [ML²T⁻²]
Frequency (f = 1/T)   1/Time                      [M⁰ L⁰ T⁻¹] = [T⁻¹]
Angular velocity (ω)  Angle/Time = rad/s          [M⁰ L⁰ T⁻¹] = [T⁻¹]
Gravitational const.  F·r²/(m₁·m₂)               [M⁻¹ L³ T⁻²]
Planck's constant     E/f = (ML²T⁻²)/(T⁻¹)       [M¹ L² T⁻¹] = [ML²T⁻¹]
Boltzmann constant    E/T = (ML²T⁻²)/K            [M¹ L² T⁻² K⁻¹]
Surface tension       Force/Length                [M¹ L⁰ T⁻²] = [MT⁻²]
Coefficient of viscosity Force/(Area × velocity gradient) [M¹ L⁻¹ T⁻¹]
─────────────────────────────────────────────────────────
```

> 🔑  **JEE/NEET Shortcut** : Note that Work, Energy, Torque, and Heat all have the same dimensional formula [ML²T⁻²], but they are different physical quantities. Dimensions alone do NOT distinguish between them.

### 3.3 Quantities with Identical Dimensions ⭐ (Frequently Tested)

| Dimensional Formula | Quantities                                                  |
| ------------------- | ----------------------------------------------------------- |
| [MLT⁻¹]           | Momentum, Impulse                                           |
| [ML²T⁻²]         | Work, Energy, Torque, Heat, Moment of Energy                |
| [T⁻¹]             | Frequency, Angular velocity, Decay constant (radioactivity) |
| [ML⁻¹T⁻²]       | Pressure, Stress, Modulus of Elasticity, Energy density     |
| [ML²T⁻³]         | Power, Intensity of sound                                   |
| [M⁰L⁰T⁰]         | Angle, strain, refractive index (all dimensionless)         |

### 3.4 Dimensionless Quantities

Quantities with **[M⁰ L⁰ T⁰]** (dimensionless):

* Plane angle (arc length/radius = L/L)
* Refractive index (speed/speed = LT⁻¹/LT⁻¹)
* Relative density (density/density ratio)
* Strain (ΔL/L)
* All pure numbers, ratios, trigonometric values
* Arguments of special functions (log, sin, cos, exp) **must always be dimensionless**

---

## SECTION 4 — DIMENSIONAL FORMULA AND DIMENSIONAL EQUATION

### 4.1 Dimensional Formula

> The **Dimensional Formula** of a physical quantity is the expression showing which base quantities represent the dimensions and with what powers.

Format: **[Mᵃ Lᵇ Tᶜ Aᵈ Kᵉ ...]**

Examples:

* Volume: **[M⁰ L³ T⁰]**
* Speed: **[M⁰ L T⁻¹]**
* Force: **[M L T⁻²]**
* Mass density: **[M L⁻³ T⁰]**

### 4.2 Dimensional Equation

> A **Dimensional Equation** is obtained by equating a physical quantity with its dimensional formula.

Examples:

```
[V] = [M⁰ L³ T⁰]
[v] = [M⁰ L T⁻¹]
[F] = [M L T⁻²]
[ρ] = [M L⁻³ T⁰]
```

---

## SECTION 5 — DIMENSIONAL ANALYSIS AND ITS APPLICATIONS

### 5.1 Principle of Homogeneity of Dimensions

> **Principle** : Only physical quantities of the **same dimensions** can be added, subtracted, or equated. An equation is **dimensionally valid** only if every term on both sides has the  **same dimensions** .

```
Valid:   velocity = velocity + acceleration × time
         [LT⁻¹] = [LT⁻¹] + [LT⁻²][T] = [LT⁻¹] + [LT⁻¹] ✓

Invalid: force + mass = ?
         [MLT⁻²] + [M] → WRONG (different dimensions)
```

### 5.2 Application 1: Checking Dimensional Consistency of Equations ⭐

**Steps:**

1. Write the dimensional formula for every term in the equation.
2. Check if ALL terms have identical dimensions.
3. If any term has different dimensions → equation is  **definitely wrong** .

> ⚠️  **Important limitation** : Dimensional consistency does NOT guarantee correctness — a dimensionally correct equation may be wrong if dimensionless constants are involved. (e.g. s = 5ut + at² is dimensionally correct but physically wrong — correct is s = ut + ½at²)

**NCERT Example — Checking ½mv² = mgh:**

```
LHS: ½mv²
    [M][LT⁻¹]² = [M][L²T⁻²] = [ML²T⁻²] ✓

RHS: mgh
    [M][LT⁻²][L] = [M][L²T⁻²] = [ML²T⁻²] ✓

LHS = RHS → Dimensionally correct ✓
```

**NCERT Example — Ruling out formulae for kinetic energy:**

| Formula         | Dimensions of RHS               | Valid?                                            |
| --------------- | ------------------------------- | ------------------------------------------------- |
| K = m²v³      | [M²][LT⁻¹]³ = [M²L³T⁻³] | ✗ (KE = [ML²T⁻²])                             |
| K = ½mv²      | [M][L²T⁻²] = [ML²T⁻²]     | ✓                                                |
| K = ma          | [M][LT⁻²] = [MLT⁻²]         | ✗                                                |
| K = (3/16)mv²  | [M][L²T⁻²] = [ML²T⁻²]     | ✓ (dimensionally, can't distinguish from ½mv²) |
| K = ½mv² + ma | Two different dimensions added  | ✗                                                |

> 🔑  **JEE Note** : Options (b) and (d) above both pass the dimensional test. To identify the correct formula, you need the actual physical definition. Dimensional analysis cannot distinguish between dimensionally identical expressions.

### 5.3 Application 2: Deducing Relations Among Physical Quantities ⭐

 **Method** : If a physical quantity Q depends on quantities x, y, z as a product:

```
Q = k · xᵃ · yᵇ · zᶜ
```

Where k is a **dimensionless constant** (cannot be found by dimensions alone).

**Steps:**

1. Write dimensional formula for Q and for x, y, z.
2. Equate powers of [M], [L], [T] on both sides.
3. Solve the resulting simultaneous equations for a, b, c.

**NCERT Example — Period of a Simple Pendulum:**

Assume T depends on length (l), mass of bob (m), acceleration due to gravity (g):

```
T = k · lˣ · gʸ · mᶻ

LHS: [T] = [M⁰ L⁰ T¹]

RHS: [L]ˣ · [LT⁻²]ʸ · [M]ᶻ
   = [M^z · L^(x+y) · T^(-2y)]

Equating powers:
  M: z = 0         → z = 0 (period is independent of mass!) ✓
  L: x + y = 0     → x + y = 0
  T: -2y = 1       → y = -½ → x = ½

∴ T = k · l^(½) · g^(-½) = k√(l/g)

Actual formula: T = 2π√(l/g)   (k = 2π, from detailed analysis)
```

> ⚠️  **Limitations of Dimensional Analysis** :
>
> 1. Cannot determine **dimensionless constants** (like 2π, ½, etc.)
> 2. Cannot work if quantity depends on more than **3 independent variables** in mechanics
> 3. Cannot distinguish between quantities with **same dimensions** (e.g., work and torque)
> 4. Does not work for **exponential** or **trigonometric** functions (whose arguments must be dimensionless)
> 5. Cannot determine the **exact form** of the relationship

### 5.4 Application 3: Unit Conversion (Dimensional Analysis) ⭐

**Method — Factor Label / Unit Factor Method:**

Multiply by conversion ratios (= 1) to change units.

 **Example** : Convert 1 km h⁻¹ to m s⁻¹

```
1 km h⁻¹ = 1 × (km/h)
          = 1 × (1000 m / 3600 s)
          = (1000/3600) m s⁻¹
          = 5/18 m s⁻¹ ≈ 0.278 m s⁻¹
```

**General Formula for Unit Conversion:**

If unit changes from system 1 → system 2:

```
n₁u₁ = n₂u₂

n₂ = n₁ × (u₁/u₂) = n₁ × [M₁/M₂]ᵃ × [L₁/L₂]ᵇ × [T₁/T₂]ᶜ
```

where a, b, c are the dimensional powers of the quantity.

---

## SECTION 6 — IMPORTANT PHYSICAL CONSTANTS (Reference)

| Constant                         | Symbol | Value                          |
| -------------------------------- | ------ | ------------------------------ |
| Speed of light in vacuum         | c      | 3.00 × 10⁸ m s⁻¹           |
| Avogadro's number                | Nₐ    | 6.022 × 10²³ mol⁻¹        |
| Planck's constant                | h      | 6.626 × 10⁻³⁴ J s          |
| Boltzmann constant               | k      | 1.381 × 10⁻²³ J K⁻¹      |
| Charge of electron               | e      | 1.602 × 10⁻¹⁹ C            |
| Mass of electron                 | mₑ    | 9.109 × 10⁻³¹ kg           |
| Mass of proton                   | mₚ    | 1.673 × 10⁻²⁷ kg           |
| Universal gravitational constant | G      | 6.674 × 10⁻¹¹ N m² kg⁻² |
| 1 Angstrom (Å)                  | —     | 10⁻¹⁰ m                     |
| 1 fermi (fm)                     | —     | 10⁻¹⁵ m                     |
| 1 light year (ly)                | —     | 9.46 × 10¹⁵ m               |

---

## SECTION 7 — WORKED EXAMPLES (NCERT)

### Example 7.1 — Surface Area and Volume to Correct SF (NCERT 1.1)

Side of cube = 7.203 m (4 significant figures)

```
Surface area = 6 × (7.203)²
             = 6 × 51.883... m²
             = 311.299... m²
             → Round to 4 SF → 311.3 m²  ✓

Volume = (7.203)³
       = 373.714... m³
       → Round to 4 SF → 373.7 m³  ✓
```

### Example 7.2 — Density to Correct SF (NCERT 1.2)

Mass = 5.74 g (3 SF) | Volume = 1.2 cm³ (2 SF)

```
Density = 5.74 / 1.2 = 4.783... g cm⁻³
→ Least SF = 2 → Density = 4.8 g cm⁻³  ✓
```

### Example 7.3 — Unit Conversion Using Dimensions (NCERT 1.3)

A calorie = 4.2 J = 4.2 kg m² s⁻². Find magnitude in new system:
unit of mass = α kg, unit of length = β m, unit of time = γ s.

```
[Energy] = [M¹ L² T⁻²]

n₂ = n₁ × (M₁/M₂)¹ × (L₁/L₂)² × (T₁/T₂)⁻²
   = 4.2 × (kg/α kg)¹ × (m/β m)² × (s/γ s)⁻²
   = 4.2 × α⁻¹ × β⁻² × γ²
   = 4.2 α⁻¹ β⁻² γ²  ✓
```

---

## QUICK FORMULA REFERENCE

| Topic                                   | Formula / Rule                               |
| --------------------------------------- | -------------------------------------------- |
| Significant figures — addition         | Match decimal places of least precise number |
| Significant figures — multiplication   | Match SF count of least precise number       |
| Rounding (digit = 5)                    | Round to even (banker's rounding)            |
| Scientific notation                     | N × 10ⁿ where 1 ≤ N < 10                  |
| Order of magnitude                      | Power of 10 (round N: ≤5 → 1, >5 → 10)    |
| Dimensional formula of Force            | [MLT⁻²]                                    |
| Dimensional formula of Energy/Work      | [ML²T⁻²]                                  |
| Dimensional formula of Power            | [ML²T⁻³]                                  |
| Dimensional formula of Pressure         | [ML⁻¹T⁻²]                                |
| Dimensional formula of G (grav. const.) | [M⁻¹L³T⁻²]                              |
| Dimensional formula of Planck's const.  | [ML²T⁻¹]                                  |
| Unit conversion (dimensional analysis)  | n₂ = n₁ × (u₁/u₂) in each dimension     |
| Pendulum period (from dimensions)       | T ∝ √(l/g)                                 |
| Relative error                          | (absolute error / measured value) × 100%    |
| Unit factor                             | Ratio = 1; e.g., (1 km / 1000 m) = 1         |
| 1 km h⁻¹ in m s⁻¹                   | = 5/18 m s⁻¹ ≈ 0.278 m s⁻¹              |
| 1 m s⁻¹ in km h⁻¹                   | = 18/5 = 3.6 km h⁻¹                        |

---

*End of Core Notes — Ch. 1: Units and Measurement*
*Exam Tags: Board · NEET · JEE Mains · JEE Advanced*
