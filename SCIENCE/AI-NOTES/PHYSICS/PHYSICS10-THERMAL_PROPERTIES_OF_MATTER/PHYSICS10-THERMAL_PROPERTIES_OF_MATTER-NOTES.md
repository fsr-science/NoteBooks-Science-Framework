# CHAPTER 10: THERMAL PROPERTIES OF MATTER

### Complete Study Notes | Board · NEET · JEE Layered

---

## 🗺️ CONCEPT ROADMAP

```
[Temperature — measure of hotness/coldness of a body]
    → How do we measure it? Thermometers + Temperature Scales
        ↓
[TEMPERATURE SCALES — Celsius, Fahrenheit, Kelvin]
    Conversion formulas | Absolute zero | Triple point of water
        ↓
[IDEAL GAS EQUATION — PV = μRT]
    Boyle's Law | Charles' Law | Absolute Temperature | R = 8.31 J mol⁻¹ K⁻¹
        ↓
[THERMAL EXPANSION — solids, liquids, gases expand on heating]
    Linear (αₗ) | Area (2αₗ) | Volume (αᵥ = 3αₗ) | Anomalous behaviour of water
        ↓
[SPECIFIC HEAT CAPACITY — heat required per unit mass per unit degree]
    Heat capacity S | Specific heat s | Molar specific heat C | Cₚ vs Cᵥ for gases
        ↓
[CALORIMETRY — heat lost = heat gained in isolated system]
    Calorimeter setup | Principle of mixtures
        ↓
[CHANGE OF STATE — solid ↔ liquid ↔ gas at constant temperature]
    Melting/Boiling point | Latent Heat Lf and Lv | Sublimation | Triple point
        ↓
[HEAT TRANSFER — three distinct modes]
    Conduction (K, Fourier's Law) | Convection (natural/forced)
    Radiation (Stefan-Boltzmann | Wien's Law | Newton's Law of Cooling)
```

---

## SECTION 1 — TEMPERATURE AND HEAT ⭐⭐

### 1.1 Basic Definitions

**Temperature** is a relative measure, or indication of the hotness or coldness of a body. It is a scalar quantity that determines the direction of heat flow when two bodies are in contact.

**Heat** is the form of energy transferred between two (or more) systems or a system and its surroundings **by virtue of a temperature difference** between them.

> 🔑 Key distinction: Heat is energy **in transit** due to temperature difference. Once transferred, it becomes internal energy. Heat is **NOT** a property stored in a body — it only exists during the process of transfer.

- **SI unit of heat:** Joule (J)
- **SI unit of temperature:** Kelvin (K); degree Celsius (°C) is also widely used
- **Dimensional formula of heat:** [ML²T⁻²]

**Thermal equilibrium:** When two bodies in contact reach the same temperature and net heat transfer stops, they are in thermal equilibrium. This is the foundation of the **Zeroth Law of Thermodynamics**.

### 1.2 Why Temperature Sense is Unreliable

Our sense of temperature is qualitative and limited in range. Two metals at the same temperature feel different (metal feels colder due to higher thermal conductivity drawing heat away faster). Hence, scientific instruments (thermometers) are necessary.

---

## SECTION 2 — MEASUREMENT OF TEMPERATURE ⭐⭐

### 2.1 Thermometers

A thermometer makes use of a **thermometric property** — any physical property that changes measurably and reproducibly with temperature.

| Thermometric Property | Thermometer Type |
|---|---|
| Volume of a liquid | Liquid-in-glass (mercury, alcohol) |
| Pressure of a gas at constant volume | Constant-volume gas thermometer |
| Electrical resistance | Resistance thermometer |
| EMF (Seebeck effect) | Thermocouple |
| Colour/intensity of radiation | Optical pyrometer |

### 2.2 Temperature Scales

Two fixed reference points are needed to define any temperature scale. These two points fix the origin and the size of the unit.

**Celsius Scale:**
- Ice point (freezing point of water at standard pressure) = **0 °C**
- Steam point (boiling point of water at standard pressure) = **100 °C**
- 100 equal divisions between them

**Fahrenheit Scale:**
- Ice point = **32 °F**
- Steam point = **212 °F**
- 180 equal divisions between them

**Conversion formula (Celsius ↔ Fahrenheit):**

$$\boxed{\frac{t_F - 32}{180} = \frac{t_C}{100}} \quad \text{...(10.1)}$$

Or equivalently: $t_F = \frac{9}{5}t_C + 32$

> 💡 Useful check: −40 °C = −40 °F (the unique temperature where both scales give the same reading)

---

## SECTION 3 — IDEAL-GAS EQUATION AND ABSOLUTE TEMPERATURE ⭐⭐⭐

### 3.1 Gas Laws

**Boyle's Law (Robert Boyle, 1627–1691):** At constant temperature, pressure and volume of a given quantity of gas are inversely related:

$$PV = \text{constant} \quad (T = \text{constant})$$

**Charles' Law (Jacques Charles, 1747–1823):** At constant pressure, the volume of a gas is directly proportional to its absolute temperature:

$$\frac{V}{T} = \text{constant} \quad (P = \text{constant})$$

### 3.2 Ideal Gas Equation

Combining Boyle's and Charles' laws:

$$\boxed{PV = \mu RT} \quad \text{...(10.2)}$$

where:
- P = pressure (Pa); V = volume (m³)
- μ = number of moles
- **R = Universal Gas Constant = 8.31 J mol⁻¹ K⁻¹**
- T = absolute temperature (K)

> 🔑 This applies to **any quantity** of **any low-density gas**.

### 3.3 Absolute Zero and the Kelvin Scale

A constant-volume gas thermometer gives P ∝ T. Plotting P vs T (in Celsius) for any low-density gas gives a straight line. Extrapolating these lines to P = 0, they all converge at the same point: **T = −273.15 °C**. This is **absolute zero** — the theoretical lower limit of temperature.

$$\boxed{T = t_C + 273.15} \quad \text{...(10.3)}$$

**Kelvin Scale (Lord Kelvin):**
- Absolute zero = **0 K = −273.15 °C**
- Triple point of water = **273.16 K** (modern fixed reference point)
- Unit size: **1 K = 1 °C** (identical magnitude, different origin)

**Why is triple point preferred over melting/boiling points?**

The triple point of water occurs at a **unique** combination of temperature and pressure (273.16 K, 6.11 × 10⁻³ Pa). Melting and boiling points of water vary with external pressure, making them less reliable as universal fixed points.

### 3.4 Coefficient of Volume Expansion for Ideal Gas

From ideal gas equation at constant pressure:

$$PV = \mu RT \Rightarrow P\Delta V = \mu R \Delta T$$

$$\frac{\Delta V}{V} = \frac{\Delta T}{T} \Rightarrow \alpha_V = \frac{1}{T} \quad \text{...(10.6)}$$

At 0 °C: αᵥ = 1/273 ≈ 3.7 × 10⁻³ K⁻¹ — orders of magnitude **larger** than solids and liquids.

---

## SECTION 4 — THERMAL EXPANSION ⭐⭐⭐

### 4.1 What is Thermal Expansion?

Most substances **expand on heating** and **contract on cooling**. The increase in dimensions of a body due to an increase in its temperature is called **thermal expansion**.

Three types of thermal expansion:
1. **Linear expansion** — increase in one dimension (length)
2. **Area (superficial) expansion** — increase in two dimensions (surface area)
3. **Volume (cubical) expansion** — increase in all three dimensions (volume)

### 4.2 Coefficient of Linear Expansion (αₗ)

For a rod of length l undergoing a small temperature change ΔT, the fractional change in length is:

$$\boxed{\frac{\Delta l}{l} = \alpha_l \Delta T} \quad \text{...(10.4)}$$

- **αₗ** = coefficient of linear expansion (linear expansivity)
- **SI unit:** K⁻¹ (equivalently °C⁻¹, same numerical value)
- **Dimensional formula:** [K⁻¹]
- Characteristic of the material; approximately constant for small temperature changes

**Table 10.1 — Values of αₗ:**

| Material | αₗ (×10⁻⁵ K⁻¹) |
|---|---|
| Aluminium | 2.5 |
| Brass | 1.8 |
| Iron | 1.2 |
| Copper | 1.7 |
| Silver | 1.9 |
| Gold | 1.4 |
| Glass (pyrex) | 0.32 |
| Lead | 0.29 |

> 💡 Metals expand more than glass. Copper (αₗ = 1.7) expands about **5× more** than pyrex glass (αₗ = 0.32) for the same rise in temperature. Invar (special Fe-Ni alloy) has an extremely small αₗ — used in clocks, scientific instruments.

### 4.3 Coefficient of Area Expansion (αₐ)

For a 2D surface, the fractional change in area is:

$$\frac{\Delta A}{A} = \alpha_A \Delta T = 2\alpha_l \Delta T \quad \therefore \boxed{\alpha_A = 2\alpha_l}$$

**Proof:** For a rectangle (a × b), after heating by ΔT:
- ΔA = aΔb + bΔa + (Δa)(Δb) ≈ a(αₗbΔT) + b(αₗaΔT) = 2αₗ AB ΔT
- The (Δa)(Δb) term ≈ αₗ² × ab × (ΔT)² is negligible since αₗ ≈ 10⁻⁵ K⁻¹

### 4.4 Coefficient of Volume Expansion (αᵥ)

$$\boxed{\frac{\Delta V}{V} = \alpha_V \Delta T} \quad \text{...(10.5)}$$

**Relation between αᵥ and αₗ:**

For a cube of side l expanding isotropically:
- ΔV = (l + Δl)³ − l³ ≈ 3l²Δl = 3l² × αₗ l ΔT = 3αₗ l³ ΔT = 3αₗ V ΔT

$$\boxed{\alpha_V = 3\alpha_l} \quad \text{...(10.9)}$$

**Table 10.2 — Values of αᵥ:**

| Material | αᵥ (K⁻¹) |
|---|---|
| Aluminium | 7 × 10⁻⁵ |
| Iron | 3.55 × 10⁻⁵ |
| Mercury | 18.2 × 10⁻⁵ |
| Water | 20.7 × 10⁻⁵ |
| Alcohol (ethanol) | 110 × 10⁻⁵ |
| Glass (ordinary) | 2.5 × 10⁻⁵ |
| Glass (pyrex) | 1 × 10⁻⁵ |
| Invar | 2 × 10⁻⁶ |

> 💡 Ethanol expands more than mercury for the same rise in temperature. Invar has an exceptionally low αᵥ. Gases at room temperature: αᵥ ≈ 3300 × 10⁻⁶ K⁻¹ — thousands of times larger than solids/liquids.

### 4.5 Anomalous Expansion of Water ⭐⭐

Water behaves unusually between **0 °C and 4 °C**: it **contracts on heating** (density increases). Above 4 °C, it expands normally.

- **Density maximum at 4 °C** (≈ 1000 kg m⁻³)
- Below 4 °C: volume increases as temperature decreases (ice is less dense than liquid water — this is why ice floats)

**Environmental significance:**
- Bodies of water (lakes, ponds) **freeze at the top first** — not from the bottom up
- As surface water cools below 4 °C, it becomes less dense, stays at surface, and freezes
- Water at the bottom of a deep lake stays near 4 °C year-round, protecting aquatic life
- If water froze from the bottom, lakes would freeze solid and kill all aquatic organisms

### 4.6 Thermal Stress ⭐

When a rod is **prevented from expanding** (both ends rigidly fixed), it develops a **compressive strain** and a corresponding internal stress called **thermal stress**.

- Compressive strain = αₗ ΔT
- Thermal stress = Y × αₗ × ΔT (where Y = Young's modulus of the material)

$$\text{Thermal stress} = \frac{\Delta F}{A} = Y \cdot \alpha_l \cdot \Delta T$$

> 🔑 **Application:** Railway tracks are given deliberate gaps between sections to allow for thermal expansion in summer. Steel bridges have expansion joints. Without these provisions, thermal stress can buckle the track or crack the bridge.

---

## SECTION 5 — SPECIFIC HEAT CAPACITY ⭐⭐⭐

### 5.1 Heat Capacity of a Body

The **heat capacity (S)** of a substance/body is the quantity of heat required to raise its temperature by 1 K:

$$\boxed{S = \frac{\Delta Q}{\Delta T}} \quad \text{...(10.10)}$$

- **SI unit:** J K⁻¹
- Depends on nature AND mass of the substance

### 5.2 Specific Heat Capacity

The **specific heat capacity (s)** of a substance is the heat required to raise the temperature of **1 kg** of it by **1 K**:

$$\boxed{s = \frac{S}{m} = \frac{1}{m} \cdot \frac{\Delta Q}{\Delta T}} \quad \text{...(10.11)}$$

- **SI unit:** J kg⁻¹ K⁻¹
- **Dimensional formula:** [L²T⁻²K⁻¹]
- Characteristic of the substance; depends on temperature (approximately constant near room temperature)

**Table 10.3 — Important specific heat values:**

| Substance | s (J kg⁻¹ K⁻¹) |
|---|---|
| **Water** | **4186** (highest of all common substances) |
| Ice | 2060 |
| Kerosene | 2118 |
| Edible oil | 1965 |
| Aluminium | 900 |
| Glass | 840 |
| Iron | 450 |
| Copper | 386.4 |
| Mercury | 140 |
| Lead | 127.7 |
| Silver | 236.1 |

> 💡 **Water has the highest specific heat capacity.** Physical consequences:
> - Coastal areas have moderate climate (sea moderates temperature swings)
> - Wind from the sea has a cooling effect in summer (water heats more slowly than land)
> - Deserts: sand heats up and cools down rapidly (low s)
> - Water used as coolant in car radiators and as heater in hot-water bags

### 5.3 Molar Specific Heat Capacity

When amount of substance is specified in moles (μ):

$$\boxed{C = \frac{S}{\mu} = \frac{1}{\mu} \cdot \frac{\Delta Q}{\Delta T}} \quad \text{...(10.12)}$$

- **SI unit:** J mol⁻¹ K⁻¹

**For gases — Cₚ vs Cᵥ:**
- **Cₚ** = Molar specific heat at **constant pressure**: heat supplied at constant P (some goes into expansion work too)
- **Cᵥ** = Molar specific heat at **constant volume**: all heat goes into raising temperature
- Always: **Cₚ > Cᵥ** (by the amount of work done in expansion, which is R per mole per degree: Cₚ − Cᵥ = R for ideal gas)

**Table 10.4 — Molar specific heats of gases:**

| Gas | Cₚ (J mol⁻¹ K⁻¹) | Cᵥ (J mol⁻¹ K⁻¹) |
|---|---|---|
| He | 20.8 | 12.5 |
| H₂ | 28.8 | 20.4 |
| N₂ | 29.1 | 20.8 |
| O₂ | 29.4 | 21.1 |
| CO₂ | 37.0 | 28.5 |

> 💡 Diatomic gases (H₂, N₂, O₂) have higher Cᵥ than monatomic He because they have additional **rotational degrees of freedom** that can store energy. CO₂ (triatomic, non-linear) has even higher Cᵥ due to vibrational modes.

---

## SECTION 6 — CALORIMETRY ⭐⭐

### 6.1 Principle of Calorimetry

A system is **isolated** if no heat exchange occurs with surroundings. In such a system, if different parts are at different temperatures, heat flows until equilibrium is reached:

$$\boxed{\text{Heat lost by hot body} = \text{Heat gained by cold body}}$$

$$m_1 s_1 \Delta T_1 = m_2 s_2 \Delta T_2$$

This is the **principle of calorimetry** (or method of mixtures).

### 6.2 The Calorimeter

A device for measuring heat. Standard construction:
- **Inner vessel:** metallic (copper/aluminium) with a stirrer of same material — good conductor for uniform temperature
- **Outer jacket:** wooden with **insulating material** (glass wool) filling the gap — minimises heat loss to surroundings
- Mercury thermometer inserted through a hole in the lid
- The outer jacket acts as a **heat shield** and reduces heat loss

### 6.3 Worked Example (NCERT 10.3)

**Finding sAl:**
- Aluminium sphere (m₁ = 0.047 kg, Tᵢ = 100 °C, Tf = 23 °C)
- Copper calorimeter (m₃ = 0.14 kg) containing water (m₂ = 0.25 kg) initially at 20 °C; final temperature 23 °C

Heat lost = Heat gained:

$$0.047 \times s_{Al} \times 77 = (0.25 \times 4180 + 0.14 \times 386) \times 3$$

$$s_{Al} = \frac{(1045 + 54.04) \times 3}{0.047 \times 77} \approx \mathbf{0.911 \text{ kJ kg}^{-1} \text{ K}^{-1}}$$

---

## SECTION 7 — CHANGE OF STATE ⭐⭐⭐

### 7.1 Phase Changes and the Constant-Temperature Rule

Matter exists in three states: **solid, liquid, gas.** A transition from one state to another is a **change of state** (phase change).

> 🔑 **Key rule:** During any phase change, temperature remains **constant** even though heat continues to flow. The heat goes into overcoming intermolecular attractions (breaking bonds when melting/boiling) or is released when bonds form (freezing/condensation).

**Summary of phase changes:**

| Transition | Name |
|---|---|
| Solid → Liquid | Melting (Fusion) |
| Liquid → Solid | Freezing (Solidification) |
| Liquid → Gas | Vaporisation |
| Gas → Liquid | Condensation |
| Solid → Gas (directly) | Sublimation |
| Gas → Solid (directly) | Deposition |

### 7.2 Melting Point

The temperature at which **solid and liquid coexist in thermal equilibrium** is the **melting point**.

**Effect of pressure on melting point:**
- For **ice (water):** Increasing pressure **lowers** the melting point (anomalous — because ice is less dense than water)
- For **most substances:** Increasing pressure **raises** the melting point (because solid is denser than liquid)

**Regelation:** When a metallic wire with heavy weights at its ends is placed on an ice slab, the pressure under the wire melts the ice (lowers melting point). The water above the wire refreezes (pressure removed). The wire passes through the ice without breaking it. Skating is possible because pressure from the blade melts the ice slightly, creating a thin lubricating water film.

**Normal melting point** = melting point at standard atmospheric pressure (1 atm).

### 7.3 Boiling Point

The temperature at which **liquid and vapour coexist in thermal equilibrium** is the **boiling point**.

**Effect of pressure:**
- **Boiling point increases with pressure** (pressure cooker: increased pressure → higher boiling point → food cooks faster at higher temperature)
- **Boiling point decreases with pressure** (high altitudes: lower atmospheric pressure → lower boiling point → water boils at < 100 °C → cooking takes longer)

**Normal boiling point** = boiling point at standard atmospheric pressure = 100 °C for water.

### 7.4 Sublimation

Some substances pass directly from solid to vapour **without passing through the liquid state**. Examples: **dry ice (solid CO₂)**, **iodine**, **camphor**, **naphthalene**.

During sublimation, both solid and vapour states coexist in thermal equilibrium.

### 7.5 Triple Point ⭐

The specific temperature and pressure at which **all three phases (solid, liquid, vapour) coexist** in equilibrium is the **triple point**.

For water: **T = 273.16 K, P = 6.11 × 10⁻³ Pa**

This is unique — it occurs at only one specific combination of T and P. This is why it is used as the fixed reference point for the Kelvin scale.

### 7.6 Latent Heat ⭐⭐⭐

The quantity of heat required to change the state of **unit mass** of a substance at constant temperature and pressure:

$$\boxed{Q = mL} \quad \text{or} \quad \boxed{L = \frac{Q}{m}} \quad \text{...(10.13)}$$

- **L** = latent heat
- **SI unit:** J kg⁻¹
- Depends on nature of substance and pressure
- **Latent heat of fusion (Lf):** for solid ↔ liquid
- **Latent heat of vaporisation (Lᵥ):** for liquid ↔ gas

**Table 10.5 — Important latent heat values:**

| Substance | Melting Pt (°C) | Lf (×10⁵ J kg⁻¹) | Boiling Pt (°C) | Lᵥ (×10⁵ J kg⁻¹) |
|---|---|---|---|---|
| **Water** | **0** | **3.33** | **100** | **22.6** |
| Ethanol | −114 | 1.0 | 78 | 8.5 |
| Gold | 1063 | 0.645 | 2660 | 15.8 |
| Lead | 328 | 0.25 | 1744 | 8.67 |
| Nitrogen | −210 | 0.26 | −196 | 2.0 |
| Mercury | −39 | 0.12 | 357 | 2.7 |

> 💡 Water's Lᵥ = 22.6 × 10⁵ J kg⁻¹ is very large. Steam at 100 °C carries 22.6 × 10⁵ J kg⁻¹ more thermal energy than water at 100 °C. This explains why **steam burns are more severe than boiling water burns** at the same temperature — the condensing steam releases its latent heat directly into the skin.

**Heating curve for water (temperature vs time graph):**

```
Temperature
    |                             100°C ────────────────────────
    |                             (Boiling, ΔT=0 while Lv used)
    |                          /
    |           0°C ──────── /  (Melting, ΔT=0 while Lf used)
    |          /
    |         /  (ice heating up)
    |────────┴──────────────────────────────────────── Time
```

**Note from the graph:** The slope of each heating segment reflects the specific heat of that phase. Steeper slope = lower specific heat (heats faster).

---

## SECTION 8 — HEAT TRANSFER ⭐⭐⭐

Three distinct modes of heat transfer: **Conduction, Convection, Radiation.**

---

### 8.1 Conduction ⭐⭐⭐

**Conduction** is the transfer of heat between adjacent parts of a body through **molecular collisions and vibrations**, without any bulk movement of matter.

- Best in metals (free electrons act as additional heat carriers)
- Poor in gases (molecules far apart, infrequent collisions)
- Liquids: intermediate

**Fourier's Law of Heat Conduction:**

For a bar of length L, cross-section A, ends at Tᶜ and T_D (Tᶜ > T_D), in steady state:

$$\boxed{H = \frac{\Delta Q}{\Delta t} = KA \frac{T_C - T_D}{L}} \quad \text{...(10.14)}$$

where **K = thermal conductivity** of the material.

- **SI unit of K:** J s⁻¹ m⁻¹ K⁻¹ = **W m⁻¹ K⁻¹**
- **Dimensional formula of K:** [MLT⁻³K⁻¹]
- Larger K → better conductor

**Table 10.6 — Thermal conductivity values:**

| Material | K (W m⁻¹ K⁻¹) |
|---|---|
| Silver | 406 |
| Copper | 385 |
| Aluminium | 205 |
| Brass | 109 |
| Steel | 50.2 |
| Iron | 79 |
| Glass | 0.8 |
| Water | 0.8 |
| Concrete | 0.8 |
| Body fat | 0.20 |
| Wood | 0.12 |
| Glass wool | 0.04 |
| Air | 0.024 |

> 💡 Silver is the best thermal conductor. Air and glass wool have very low K — hence excellent insulators. Plastic foams contain pockets of trapped air (poor conductor) → good insulators.

**Thermal resistance analogy (like electrical resistance):**

$$R_{thermal} = \frac{L}{KA} \quad \text{(unit: K W⁻¹)}$$

- Rods in **series:** $R_{total} = R_1 + R_2$ (heat current H same through both; temperatures additive)
- Rods in **parallel:** Temperature difference same; $H_{total} = H_1 + H_2$

**Steady-state junction temperature formula (for rods in series):**

$$T_0 = \frac{K_1 T_1 + K_2 T_2}{K_1 + K_2} \quad \text{(when } A_1 = A_2, L_1 = L_2\text{)}$$

### 8.2 Convection ⭐⭐

**Convection** is heat transfer by actual **bulk movement of matter** in a fluid (liquid or gas). Only possible in **fluids**.

**Natural convection:** Driven by buoyancy due to density differences.
- Fluid heated from below → expands → becomes less dense → rises
- Cooler, denser fluid descends to replace it → convection current established

**Forced convection:** Fluid is made to flow by an external agent (pump, fan).
- Examples: Forced-air heating, automobile radiator cooling, human circulatory system (heart = pump)

**Real-world examples of natural convection:**

| Phenomenon | Explanation |
|---|---|
| Sea breeze (day) | Land heats faster than sea (lower s) → air over land rises → sea air fills in |
| Land breeze (night) | Land cools faster → sea air is warmer, rises → cool land air flows to sea |
| Trade winds | Equatorial air heated more → rises → flows to poles → returns along surface |
| Boiling water | Hot water at bottom expands, rises; cooler water descends — convection cells |

### 8.3 Radiation ⭐⭐⭐

**Radiation** is heat transfer by **electromagnetic waves**. Requires **no material medium** — works perfectly in vacuum.

- All bodies at T > 0 K emit thermal radiation continuously
- Electromagnetic waves travel at 3 × 10⁸ m s⁻¹
- This is how Earth receives heat from the Sun across the vacuum of space

**Blackbody Radiation:**

A **blackbody** absorbs all incident radiation (absorptivity = 1) and is the most efficient emitter. The radiation spectrum of a blackbody depends only on its temperature (not on its composition, shape, or size — it is universal).

**Wien's Displacement Law:**

The wavelength λₘ at which radiation intensity is maximum is related to temperature T by:

$$\boxed{\lambda_m T = b = 2.9 \times 10^{-3} \text{ m K}} \quad \text{...(10.15)}$$

- As T increases, λₘ **decreases** (peak shifts to shorter wavelengths — hotter objects look bluer/whiter)
- Iron rod: 1000 K → dull red (λₘ in infrared, tail enters red visible); 3000 K → white hot (peak in visible)
- Moon surface: λₘ ≈ 14 μm → T ≈ 200 K
- Sun surface: λₘ ≈ 4753 Å = 475 nm → T ≈ 6060 K

**Stefan-Boltzmann Law:**

Total energy radiated per unit time by a **perfect blackbody** (e = 1):

$$\boxed{H = A\sigma T^4} \quad \text{...(10.16)}$$

For a real body with **emissivity e** (0 < e ≤ 1):

$$\boxed{H = Ae\sigma T^4} \quad \text{...(10.17)}$$

**Stefan-Boltzmann constant: σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴**

**Net rate of heat loss** of a body at temperature T with surroundings at Tₛ:

$$\boxed{H_{net} = Ae\sigma(T^4 - T_s^4)} \quad \text{...(10.18)}$$

**Emissivity (e):**

| Body | Emissivity |
|---|---|
| Perfect blackbody | 1.0 |
| Human skin | 0.97 |
| Tungsten lamp | ~0.4 |
| Polished silver | ~0.02 |
| Good reflector | ≈ 0 |

**Practical Applications:**
- **Dewar flask (thermos bottle):** Double-walled glass vessel; walls coated with **silver** (low emissivity → reflects radiation back); **vacuum** between walls (no conduction/convection); insulating cork support → minimises all three modes of heat transfer
- **White/light clothes in summer:** Low absorptivity for solar radiation → less heat absorbed
- **Dark clothes in winter:** High absorptivity → more heat absorbed from surroundings
- **Blackened cooking vessel bottoms:** Maximise absorption of heat from fire

---

## SECTION 9 — NEWTON'S LAW OF COOLING ⭐⭐⭐

### 9.1 Statement

Newton's Law of Cooling: The rate of loss of heat of a body is **directly proportional to the temperature difference** between the body and its surroundings, provided the difference is small:

$$\boxed{-\frac{dQ}{dt} = k(T_2 - T_1)} \quad \text{...(10.19)}$$

where:
- T₂ = temperature of the body
- T₁ = temperature of the surroundings (constant)
- k = positive constant (depends on area, emissivity, surroundings geometry)

**Validity:** Small temperature differences only (≲ 30–40 K above surroundings). For large differences, use Stefan-Boltzmann law directly.

### 9.2 Mathematical Derivation and Solution

For a body of mass m and specific heat capacity s:

$$ms\frac{dT_2}{dt} = -k(T_2 - T_1) \quad \text{...(10.21)}$$

$$\frac{dT_2}{T_2 - T_1} = -K \, dt \quad \text{where } K = \frac{k}{ms}$$

Integrating both sides:

$$\boxed{\ln(T_2 - T_1) = -Kt + c} \quad \text{...(10.22)}$$

$$\boxed{T_2 = T_1 + C'e^{-Kt}} \quad \text{...(10.23)}$$

**Graphical interpretation:**
- **ln(T₂ − T₁) vs t:** Straight line with **negative slope −K** — used for experimental verification
- **T₂ vs t:** Exponential decay curve — asymptotically approaches T₁ (surroundings temperature)

### 9.3 Practical Use (Average Temperature Method)

For small time intervals, Newton's law can be approximated as:

$$\frac{\text{Fall in temperature}}{\text{Time taken}} = K \times \text{(Average excess temperature over surroundings)}$$

This allows solving problems without integration. See NCERT Example 10.8.

---

## SECTION 10 — NCERT SOLVED EXAMPLES WALKTHROUGH ⭐⭐

### Example 10.1 — Area Expansion Coefficient

**Prove:** (ΔA/A)/ΔT = 2αₗ for a rectangular sheet.

Consider a rectangle (a × b). After ΔT:
- New sides: a(1 + αₗΔT) and b(1 + αₗΔT)
- ΔA = aΔb + bΔa (ignoring second-order term (Δa)(Δb))
- ΔA = a(αₗbΔT) + b(αₗaΔT) = 2αₗ(ab)ΔT = 2αₗ A ΔT
- ∴ **(ΔA/A)/ΔT = 2αₗ** ✓

### Example 10.2 — Fitting Iron Ring

Rim D = 5.243 m; ring D = 5.231 m at 27 °C; αₗ(iron) = 1.20 × 10⁻⁵ K⁻¹.

$$5.243 = 5.231[1 + 1.20 \times 10^{-5}(T_2 - 27)]$$

$$T_2 - 27 = \frac{(5.243 - 5.231)/5.231}{1.20 \times 10^{-5}} = \frac{0.002294}{1.20 \times 10^{-5}} \approx 191 \text{ °C}$$

$$T_2 \approx \mathbf{218 \text{ °C}}$$

### Example 10.4 — Heat of Fusion

Ice (0.15 kg at 0 °C) mixed with water (0.30 kg at 50 °C) → final T = 6.7 °C:

- Heat lost by water = 0.30 × 4186 × (50 − 6.7) = **54,376 J**
- Heat gained by melted ice-water = 0.15 × 4186 × 6.7 = **4207 J**
- Heat for melting = 54376 − 4207 = 50,169 J
- **Lf = 50169/0.15 = 3.34 × 10⁵ J kg⁻¹** ✓

### Example 10.5 — Complete Phase Change (Ice → Steam)

Converting 3 kg of ice at −12 °C to steam at 100 °C:

| Step | Process | Heat Required |
|---|---|---|
| Q₁ | Ice (−12°C → 0°C): m × sice × 12 | 75,600 J |
| Q₂ | Melting ice at 0°C: m × Lf | 10,05,000 J |
| Q₃ | Water (0°C → 100°C): m × sw × 100 | 12,55,800 J |
| Q₄ | Vaporising water at 100°C: m × Lv | 67,68,000 J |
| **Total Q** | | **≈ 9.1 × 10⁶ J** |

### Example 10.6 — Steady-State Junction Temperature

Steel rod (L₁ = 15 cm, K₁ = 50.2 W m⁻¹K⁻¹, A₁ = 2A) and copper rod (L₂ = 10 cm, K₂ = 385 W m⁻¹K⁻¹, A₂ = A) in series. Furnace end = 300 °C; cold end = 0 °C.

In steady state, H₁ = H₂:

$$\frac{50.2 \times 2A(300-T)}{0.15} = \frac{385 \times A(T-0)}{0.10}$$

$$\frac{100.4(300-T)}{0.15} = \frac{385T}{0.10}$$

$$66933 - 669.3T = 3850T \Rightarrow T = \frac{66933}{4519.3} \approx \mathbf{44.4 \text{ °C}}$$

---

## 📋 QUICK REFERENCE — All Laws, Formulas, and Dimensional Formulae

```
TEMPERATURE SCALES:
┌──────────────────────────────────────────────────────────────┐
│  (tF − 32)/180 = tC/100;  tF = (9/5)tC + 32                │
│  T = tC + 273.15;  1 K = 1 °C  (same unit size)            │
│  Triple point of water = 273.16 K; Absolute zero = 0 K      │
│  −40 °C = −40 °F (only point where Celsius = Fahrenheit)    │
└──────────────────────────────────────────────────────────────┘

IDEAL GAS EQUATION:
┌──────────────────────────────────────────────────────────────┐
│  PV = μRT;  R = 8.31 J mol⁻¹ K⁻¹                           │
│  Boyle's: PV = const (T = const)                            │
│  Charles': V/T = const (P = const)                          │
│  αᵥ (ideal gas at const P) = 1/T                           │
└──────────────────────────────────────────────────────────────┘

THERMAL EXPANSION:
┌──────────────────────────────────────────────────────────────┐
│  Δl/l = αₗ ΔT;  ΔA/A = 2αₗ ΔT;  ΔV/V = αᵥ ΔT             │
│  αᵥ = 3αₗ  (isotropic materials)                           │
│  Thermal stress = Y × αₗ × ΔT                              │
│  Water: max density at 4 °C (anomalous expansion 0–4 °C)   │
└──────────────────────────────────────────────────────────────┘

SPECIFIC HEAT AND CALORIMETRY:
┌──────────────────────────────────────────────────────────────┐
│  s = ΔQ/(m ΔT);  Unit: J kg⁻¹ K⁻¹;  Dim: [L²T⁻²K⁻¹]      │
│  C = ΔQ/(μ ΔT);  Unit: J mol⁻¹ K⁻¹                        │
│  Water: s = 4186 J kg⁻¹ K⁻¹ (HIGHEST of common substances) │
│  Cₚ > Cᵥ for gases;  Cₚ − Cᵥ = R (ideal gas)             │
│  Heat lost = Heat gained (isolated system principle)        │
└──────────────────────────────────────────────────────────────┘

LATENT HEAT:
┌──────────────────────────────────────────────────────────────┐
│  Q = mL;  L = Q/m;  Unit: J kg⁻¹;  Dim: [L²T⁻²]           │
│  Water: Lf = 3.33×10⁵ J kg⁻¹;  Lv = 22.6×10⁵ J kg⁻¹      │
│  Temperature is CONSTANT during phase change                │
│  Lv >> Lf (much more energy needed for vaporisation)       │
└──────────────────────────────────────────────────────────────┘

HEAT TRANSFER — CONDUCTION:
┌──────────────────────────────────────────────────────────────┐
│  H = KA(TC − TD)/L  (Fourier's Law)                        │
│  K = thermal conductivity;  Unit: W m⁻¹ K⁻¹               │
│  Dim of K: [MLT⁻³K⁻¹]                                      │
│  Thermal resistance R = L/(KA);  Series: Rtotal = ΣRᵢ      │
│  Ag > Cu > Al > Brass > Steel  (conductivity order)        │
└──────────────────────────────────────────────────────────────┘

RADIATION:
┌──────────────────────────────────────────────────────────────┐
│  Wien's Law: λmT = 2.9×10⁻³ m K;  T↑ → λm ↓              │
│  Stefan-Boltzmann: H = AeσT⁴                               │
│  σ = 5.67×10⁻⁸ W m⁻² K⁻⁴                                  │
│  Net loss: Hnet = Aeσ(T⁴ − Ts⁴)                           │
│  Perfect blackbody: e = 1;  Good reflector: e ≈ 0         │
└──────────────────────────────────────────────────────────────┘

NEWTON'S LAW OF COOLING:
┌──────────────────────────────────────────────────────────────┐
│  −dQ/dt = k(T₂ − T₁);  Valid for small ΔT only            │
│  T₂ = T₁ + C′e⁻ᴷᵗ  (exponential decay to T₁)            │
│  ln(T₂ − T₁) vs t → straight line with slope = −K        │
└──────────────────────────────────────────────────────────────┘
```

---

## ⚡ POINTS TO PONDER (High-Yield for Exams)

1. **Heat ≠ Temperature.** Heat is energy in transit due to temperature difference. Temperature is a state property. Two bodies at the same temperature have zero heat flow between them.

2. **Absolute zero (0 K) cannot be reached.** It is the theoretical lower limit. At 0 K, classical molecular motion ceases. The third law of thermodynamics forbids reaching absolute zero.

3. **Triple point vs melting/boiling points:** Triple point (273.16 K) is unique — occurs at only one T-P combination. Melting/boiling points vary with pressure. Triple point is the preferred thermometric standard.

4. **αᵥ = 3αₗ holds only for isotropic materials.** For anisotropic materials (like crystals that expand differently in different directions), αᵥ = αx + αy + αz.

5. **Anomalous expansion of water protects aquatic life.** Ice floats (less dense than water), insulates the water below, and allows life to survive freezing winters.

6. **During phase change, temperature is CONSTANT.** No violation of energy conservation — the absorbed heat increases potential energy (breaks bonds), not kinetic energy (temperature).

7. **Lᵥ >> Lf for water** (22.6 × 10⁵ vs 3.33 × 10⁵ J kg⁻¹). Vaporisation requires far more energy than melting because all intermolecular bonds must be completely broken.

8. **Steam burns are worse than boiling water burns** at the same temperature because condensing steam releases additional latent heat of vaporisation (22.6 × 10⁵ J kg⁻¹) into the skin.

9. **Convection cannot occur in solids.** It requires bulk movement of matter. Natural convection needs gravity; forced convection uses an external agent.

10. **Stefan-Boltzmann law H ∝ T⁴ makes radiation very sensitive to temperature.** Doubling T increases radiated power by 2⁴ = 16 times! This is why the sun (at ~6000 K) radiates enormously more than a room-temperature body.

11. **Wien's law: hotter objects emit at shorter wavelengths** — from red to orange to yellow to white as temperature increases. This allows astronomers to estimate stellar surface temperatures from their colour.

12. **Newton's law of cooling is valid only for small temperature differences.** It is actually a linearisation of Stefan's T⁴ law: for small ΔT, T⁴ − Tₛ⁴ ≈ 4Tₛ³(T − Tₛ) ∝ (T − Tₛ). For large ΔT, use Stefan's law.

13. **Rate of cooling is NOT constant** — it slows down as the body approaches the surroundings' temperature. Early on (large excess T), cooling is rapid; later (small excess T), cooling is slow.

14. **Cₚ > Cᵥ always for gases.** At constant pressure, when heat is added, gas must also do work in expansion; thus more heat is needed for the same temperature rise compared to constant volume.

---

## 📊 Dimensional Formulae Summary

| Quantity | Symbol | Dimensional Formula | SI Unit |
|---|---|---|---|
| Heat / Internal energy | Q | [ML²T⁻²] | J |
| Temperature | T | [K] | K |
| Specific heat capacity | s | [L²T⁻²K⁻¹] | J kg⁻¹ K⁻¹ |
| Molar heat capacity | C | [ML²T⁻²mol⁻¹K⁻¹] | J mol⁻¹ K⁻¹ |
| Latent heat | L | [L²T⁻²] | J kg⁻¹ |
| Coefficient of linear expansion | αₗ | [K⁻¹] | K⁻¹ |
| Coefficient of volume expansion | αᵥ | [K⁻¹] | K⁻¹ |
| Thermal conductivity | K | [MLT⁻³K⁻¹] | W m⁻¹ K⁻¹ |
| Stefan-Boltzmann constant | σ | [MT⁻³K⁻⁴] | W m⁻² K⁻⁴ |
| Wien's constant | b | [LK] | m K |
| Heat current / Radiated power | H | [ML²T⁻³] | W |
| Thermal resistance | R_th | [M⁻¹L⁻²T³K] | K W⁻¹ |

---

*End of Notes — Physics Chapter 10 | Total Sections: 10*