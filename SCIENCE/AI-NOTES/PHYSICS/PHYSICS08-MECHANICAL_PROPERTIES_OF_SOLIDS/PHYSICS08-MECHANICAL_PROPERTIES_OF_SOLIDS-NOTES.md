# CHAPTER 8: MECHANICAL PROPERTIES OF SOLIDS

### Complete Study Notes | Board · NEET · JEE Layered

---

## 🗺️ CONCEPT ROADMAP

```
[Chapter 6/7 — Rigid bodies (idealised: no deformation)]
        ↓
[Reality: ALL solids deform under applied force]
    → Elastic deformation (temporary) | Plastic deformation (permanent)
        ↓
[STRESS — internal restoring force per unit area]
    Tensile / Compressive / Shearing / Hydraulic
        ↓
[STRAIN — fractional change in dimension]
    Longitudinal / Shearing / Volumetric
        ↓
[HOOKE'S LAW — stress ∝ strain (for small deformations)]
    stress = k × strain;  k = modulus of elasticity
        ↓
[STRESS–STRAIN CURVE — graphical map of material behaviour]
    Proportional limit → Yield point → Plastic region → Fracture
        ↓
[THREE ELASTIC MODULI — quantifying stiffness/resistance to deformation]
    Young's Modulus (Y) | Shear Modulus (G) | Bulk Modulus (B)
        ↓
[POISSON'S RATIO — lateral vs longitudinal strain]
    σ = (Δd/d) / (ΔL/L)
        ↓
[ELASTIC POTENTIAL ENERGY — energy stored per unit volume]
    u = ½ σε
        ↓
[APPLICATIONS — Bridges, beams, ropes, mountains, artificial limbs]
```

---

## SECTION 1 — INTRODUCTION: ELASTIC AND PLASTIC BEHAVIOUR ⭐

### 1.1 Deformable Bodies vs Rigid Bodies

A **rigid body** is an idealisation — in reality, every solid deforms when subjected to a force. Even a steel bar deforms under a sufficiently large load; the deformation is just too small to see without instruments.

- **Deformation** = any change in shape or size of a body under applied force.
- Two categories of response:

| Property | Description | Example |
|---|---|---|
| **Elasticity** | Tendency to regain original shape/size when force is removed | Helical spring, rubber band |
| **Plasticity** | No tendency to regain shape; permanently deformed | Putty, clay, mud |

> **Elastic deformation** = temporary change; shape is recovered on removing load.
> **Plastic deformation** = permanent change; shape is not recovered.

- **Ideal elastic solid:** Perfectly recovers original shape (no such material exists exactly).
- **Ideal plastic solid:** No recovery at all (putty/mud approximate this).
- **Real materials** exhibit both, depending on the magnitude of the applied force.

### 1.2 Why Elastic Properties Matter

Elastic behaviour of materials is critical in engineering:
- Design of **buildings** (steel, concrete, beams, columns)
- Design of **bridges** (load-bearing beams; choice of cross-section)
- **Ropeways and cranes** (steel ropes; minimum cross-section needed)
- **Artificial limbs** (need to be light yet strong)
- **Aeroplanes** (lightweight but structurally strong)
- **Railway tracks** — I-shaped cross-section has a specific engineering reason (see §8.6)

---

## SECTION 2 — STRESS ⭐⭐⭐

### 2.1 Definition

When a deforming force is applied to a body in static equilibrium, an internal **restoring force** develops in the body. This restoring force is equal in magnitude and opposite in direction to the applied force.

> **Stress** = Restoring force per unit area

$$\boxed{\text{Stress} = \frac{F}{A}} \quad \text{...(8.1)}$$

- **SI unit:** N m⁻² = Pascal (Pa)
- **Dimensional formula:** [ML⁻¹T⁻²]
- Stress is NOT a vector — it has magnitude and a direction associated with the surface, but it cannot be given a single direction like a force.

### 2.2 Types of Stress

#### (a) Tensile Stress (Longitudinal — Stretching)

- Two equal and opposite forces **perpendicular** to the cross-section, **pulling** the body apart.
- **Strain:** Change in length ΔL along the direction of force.
- Result: Body elongates.

#### (b) Compressive Stress (Longitudinal — Compression)

- Two equal and opposite forces **perpendicular** to the cross-section, **pushing** inward.
- Result: Body compresses (shortens).

> 🔑 Both tensile and compressive are called **longitudinal stress**. In both, there is a change in **length** but not in the cross-sectional shape (for uniform cylindrical bodies).

#### (c) Shearing Stress (Tangential Stress)

- Two equal and opposite forces applied **parallel** to the cross-sectional area.
- One face slides relative to the other.
- Result: Change in **shape** (not volume); angular deformation.
- **Only possible in solids** (liquids and gases cannot sustain shearing stress).

#### (d) Hydraulic Stress (Bulk/Volume Stress)

- Force applied **perpendicular to every point** of the surface (uniform pressure from all sides — e.g., a body submerged in fluid under high pressure).
- Result: Change in **volume** (no change in shape for isotropic materials).
- Applicable to **solids, liquids and gases**.

---

## SECTION 3 — STRAIN ⭐⭐⭐

Strain = ratio of change in dimension to original dimension → **dimensionless** (no units).

### 3.1 Longitudinal Strain

$$\boxed{\text{Longitudinal strain} = \frac{\Delta L}{L}} \quad \text{...(8.2)}$$

- Produced by tensile or compressive stress.
- ΔL = change in length; L = original length.

### 3.2 Shearing Strain

$$\boxed{\text{Shearing strain} = \frac{\Delta x}{L} = \tan\theta \approx \theta} \quad \text{...(8.3), (8.4)}$$

- Δx = relative lateral displacement of faces; L = perpendicular distance between faces.
- θ = angular displacement from original vertical position.
- For small θ: tan θ ≈ θ (in radians). Example: at θ = 10°, difference between θ and tan θ is only ~1%.

> 🔑 Shearing strain is also called **pure shear** (it represents angular deformation with no change in volume).

### 3.3 Volume Strain (Hydraulic Strain)

$$\boxed{\text{Volume strain} = \frac{\Delta V}{V}} \quad \text{...(8.5)}$$

- ΔV = change in volume; V = original volume.
- Produced by hydraulic (bulk) stress.
- No change in shape; only change in volume.

### Summary Table — Stress and Strain Types

| Type | Force Direction | Strain | Change in Shape? | Change in Volume? | Applicable to |
|---|---|---|---|---|---|
| Tensile/Compressive | ⊥ to cross-section | ΔL/L | Yes | No | Solids |
| Shearing | ‖ to surface | Δx/L = θ | Yes | No | Solids |
| Hydraulic | ⊥ everywhere (pressure) | ΔV/V | No | Yes | Solids, liquids, gases |

---

## SECTION 4 — HOOKE'S LAW ⭐⭐⭐

> **For small deformations, stress is directly proportional to strain.**

$$\text{stress} \propto \text{strain}$$

$$\boxed{\text{stress} = k \times \text{strain}} \quad \text{...(8.6)}$$

- **k** = **modulus of elasticity** (the proportionality constant)
- Hooke's law is an **empirical law** (based on experimental observation, not derived from theory).
- Valid for most materials within their **elastic limit**.
- **NOT valid for:** elastomers (rubber, biological tissue) — these stretch a lot but stress is not proportional to strain.

> 🔑 **Elastic limit** = the maximum stress up to which the material obeys Hooke's law and still recovers. Beyond this, permanent deformation begins.

---

## SECTION 5 — STRESS–STRAIN CURVE ⭐⭐⭐

The stress-strain curve is obtained experimentally by gradually increasing the tensile force on a test cylinder/wire and plotting stress (y-axis) vs strain (x-axis).

### 5.1 Key Points on the Curve (for a typical metal)

```
Stress
σu ─────────────────────────────D──────────E (fracture)
                                /           \
                               /             
σy ─────────────────B─────────C              
                   /|
                  / |
                 /  |
                /   |
               /    |
   Proportional/    |
         limit/     |
             A      |
            /       |
           / (O→A): |
          /  Linear |
         /   Hooke's|
        /    law    |
       O─────────────────────────────→ Strain
         (<1%)           (~30%)
```

| Region / Point | Description |
|---|---|
| **O → A** (Proportional limit) | Linear region; Hooke's law obeyed; elastic behaviour. Slope = Young's modulus. |
| **A → B** | Stress-strain NOT proportional, but still elastic (body recovers on unloading). |
| **Point B** — Yield point / Elastic limit | Maximum stress for elastic behaviour. Stress at B = **yield strength (σy)**. |
| **B → D** | Plastic region: permanent deformation. If unloaded at C, strain ≠ 0 (permanent set). |
| **Point D** — Ultimate tensile strength | Maximum stress the material can sustain = **σu**. |
| **D → E** | Strain increases even with reducing stress; necking occurs. |
| **Point E** — Fracture point | Material breaks. |

### 5.2 Brittle vs Ductile Materials

| Material Type | D and E positions | Example |
|---|---|---|
| **Ductile** | D and E are far apart (large plastic region) | Copper, mild steel, gold |
| **Brittle** | D and E are close (fractures suddenly near ultimate strength) | Glass, cast iron, ceramics |

### 5.3 Elastomers

- Materials that **do not obey Hooke's law** but have a very large elastic region.
- No well-defined plastic region; return to original shape even after very large strains.
- Examples: **rubber, aortic tissue** (elastic tissue of the heart's large artery).
- The stress-strain curve for aortic tissue shows a large elastic region with non-linear behaviour.

> 🔑 **Rubber can be stretched to several times its original length** and still recover — this makes it an elastomer, not an elastic material in the strict Hookean sense.

---

## SECTION 6 — ELASTIC MODULI ⭐⭐⭐

The **modulus of elasticity** (ratio of stress to strain) in the proportional region (O to A) is a **material property** — it does not depend on the shape or size of the sample.

### 6.1 Young's Modulus (Y)

> **Young's modulus** = ratio of longitudinal (tensile or compressive) stress to longitudinal strain.

$$\boxed{Y = \frac{\sigma}{\varepsilon} = \frac{F/A}{\Delta L/L} = \frac{F \cdot L}{A \cdot \Delta L}} \quad \text{...(8.7), (8.8)}$$

- **SI unit:** N m⁻² = Pa (same as stress; strain is dimensionless)
- Applies to **solids only** (only solids have a definite shape and length).
- Large Y → material requires large force for small deformation → **more elastic** (stiffer).

> ⚠️ Common misconception: "material that stretches more is more elastic." WRONG. A material with LARGER Young's modulus is MORE elastic (requires more force per unit strain). Steel is more elastic than rubber.

**Key values of Young's Modulus (from NCERT Table 8.1):**

| Material | Y (×10⁹ N m⁻²) | Yield Strength (×10⁶ N m⁻²) | Ultimate Strength (×10⁶ N m⁻²) |
|---|---|---|---|
| Steel | 200 | 250 | 400 |
| Iron (wrought) | 190 | 170 | 330 |
| Copper | 110 | 200 | 400 |
| Aluminium | 70 | 95 | 110 |
| Glass | 65 | — | 50 |
| Concrete | 30 | — | 40 |
| Wood | 13 | — | 50 |
| Bone | 9.4 | — | 170 |
| Polystyrene | 3 | — | 48 |

> 🔑 **Steel is more elastic than copper, brass and aluminium** — same load produces less deformation in steel. Hence steel is preferred in heavy-duty machines and structural designs.

**Force needed to produce 0.1% elongation in a wire of area 0.1 cm² = 1 mm²:**
- Steel: 2000 N
- Copper: 1100 N
- Brass: 900 N
- Aluminium: 690 N

---

### 6.2 Shear Modulus (G) — Modulus of Rigidity

> **Shear modulus** = ratio of shearing stress to shearing strain.

$$\boxed{G = \frac{\sigma_s}{\theta} = \frac{F/A}{\Delta x/L} = \frac{F \cdot L}{A \cdot \Delta x}} \quad \text{...(8.10), (8.11)}$$

Also written as: $\sigma_s = G \times \theta$ ...(8.12)

- **SI unit:** N m⁻² = Pa
- Applies to **solids only** (only solids resist shearing).
- Also called **modulus of rigidity**.
- For most materials: **G ≈ Y/3**

**Key values of Shear Modulus (NCERT Table 8.2):**

| Material | G (GPa) |
|---|---|
| Tungsten | 150 |
| Steel | 84 |
| Nickel | 77 |
| Iron | 70 |
| Copper | 42 |
| Brass | 36 |
| Aluminium | 25 |
| Glass | 23 |
| Wood | 10 |
| Lead | 5.6 |

---

### 6.3 Bulk Modulus (B)

> **Bulk modulus** = ratio of hydraulic stress (pressure) to volume strain (magnitude).

$$\boxed{B = -\frac{p}{\Delta V/V}} \quad \text{...(8.12)}$$

- Negative sign: increase in pressure (positive p) causes decrease in volume (negative ΔV). B is always **positive**.
- **SI unit:** N m⁻² = Pa
- Applies to **solids, liquids, and gases**.

**Compressibility (k):**
$$k = \frac{1}{B} = -\frac{1}{\Delta p} \times \frac{\Delta V}{V} \quad \text{...(8.13)}$$

- Compressibility = fractional change in volume per unit increase in pressure.
- **Gases have the highest compressibility** (lowest B); solids have the lowest.
- Gases are about **a million times more compressible than solids**.

**Key values of Bulk Modulus (NCERT Table 8.3):**

| Material | B (GPa) |
|---|---|
| **Solids** | |
| Nickel | 260 |
| Steel | 160 |
| Copper | 140 |
| Iron | 100 |
| Aluminium | 72 |
| Brass | 61 |
| Glass | 37 |
| **Liquids** | |
| Mercury | 25 |
| Glycerine | 4.76 |
| Water | 2.2 |
| Carbon disulphide | 1.56 |
| Ethanol | 0.9 |
| **Gases** | |
| Air (at STP) | 1.0 × 10⁻⁴ |

> 🔑 The **incompressibility of solids** is due to **tight coupling between neighbouring atoms**. In liquids, coupling is weaker; in gases, almost none.

### 6.4 Elastic Moduli — Master Summary Table (Table 8.4)

| Type of Stress | Stress Expression | Strain | Shape Change | Volume Change | Modulus | State of Matter |
|---|---|---|---|---|---|---|
| Tensile/Compressive | σ = F/A (⊥ to face) | ΔL/L | Yes | No | Y = FL/(AΔL) | Solid |
| Shearing | σs = F/A (‖ to face) | θ = Δx/L | Yes | No | G = F/(Aθ) | Solid |
| Hydraulic | p (uniform pressure) | ΔV/V | No | Yes | B = −p/(ΔV/V) | Solid, Liquid, Gas |

---

## SECTION 7 — POISSON'S RATIO ⭐⭐

### 7.1 Lateral Strain

When a wire is stretched longitudinally, its cross-sectional dimensions (diameter, radius) **decrease** slightly. This strain perpendicular to the applied force is called **lateral strain**.

### 7.2 Poisson's Ratio (σ or ν)

> **Poisson's ratio** = ratio of lateral strain to longitudinal strain (magnitude).

$$\boxed{\nu = \frac{\text{lateral strain}}{\text{longitudinal strain}} = \frac{\Delta d / d}{\Delta L / L} = \frac{\Delta d}{\Delta L} \times \frac{L}{d}}$$

- **Dimensionless** (ratio of two strains) — no units.
- Value depends only on the **nature of material**.
- For steels: ν ≈ 0.28 to 0.30
- For aluminium alloys: ν ≈ 0.33
- Theoretical limits: −1 ≤ ν ≤ 0.5 (most materials: 0 to 0.5)

> 🔑 When a wire is stretched (longitudinal strain increases), the lateral dimensions decrease (lateral strain is in the opposite sense). The negative sign is implicit — Poisson's ratio is defined as a positive number using magnitudes.

---

## SECTION 8 — ELASTIC POTENTIAL ENERGY IN A STRETCHED WIRE ⭐⭐⭐

### 8.1 Derivation of Elastic Potential Energy

When a wire of length L and cross-section A is stretched by a force F, the wire elongates by a small amount dl. Work done = F dl = YAl/L · dl (using F = YA × l/L).

Total work done in stretching from 0 to l:

$$W = \int_0^l \frac{YAl}{L} dl = \frac{YA}{L} \cdot \frac{l^2}{2} = \frac{1}{2} \times Y \times \left(\frac{l}{L}\right)^2 \times AL$$

$$W = \frac{1}{2} \times \text{Young's modulus} \times \text{strain}^2 \times \text{volume}$$

$$W = \frac{1}{2} \times \text{stress} \times \text{strain} \times \text{volume}$$

### 8.2 Elastic Potential Energy Per Unit Volume

$$\boxed{u = \frac{1}{2}\sigma\varepsilon} \quad \text{...(8.14)}$$

where σ = stress, ε = strain, u = elastic PE per unit volume (energy density).

- SI unit: J m⁻³ = N m⁻² (same as Pa)
- This energy is **stored in the wire** (like a spring) and is **released** when the force is removed.
- Analogous to ½kx² for a spring, but expressed per unit volume.

> 🔑 Elastic potential energy = ½ × stress × strain × volume = ½ × Y × strain² × volume

---

## SECTION 9 — APPLICATIONS OF ELASTIC BEHAVIOUR ⭐⭐

### 9.1 Steel Ropes for Cranes

A crane needs to lift 10 tonnes (10⁴ kg) without the rope deforming permanently. The cross-section A must satisfy:

$$A \geq \frac{W}{\sigma_y} = \frac{Mg}{\sigma_y} = \frac{10^4 \times 9.8}{300 \times 10^6} \approx 3.3 \times 10^{-4} \text{ m}^2$$

(radius ≈ 1 cm). With safety margin of ×10: rope of radius ~3 cm.

A single wire of 3 cm radius would be rigid. Hence **crane ropes are made of many thin wires braided together** — for flexibility and ease of manufacture while maintaining strength.

### 9.2 I-Shaped Beams in Construction

A beam of length l, breadth b, depth d, supported at ends and loaded at centre, sags by:

$$\boxed{\delta = \frac{Wl^3}{4bd^3Y}} \quad \text{...(8.16)}$$

To reduce sag (δ):
- Use material with **large Y** (high Young's modulus).
- **Increase depth d** (more effective: δ ∝ d⁻³) vs increasing breadth b (δ ∝ b⁻¹).
- Keep span l small (δ ∝ l³).

**Problem with increasing d alone:** A deep, thin bar **buckles** sideways under load.

**Solution:** The **I-shaped cross-section** — large depth (resists bending) and flanges at top/bottom (resists buckling). Provides large load-bearing surface with minimum material/weight → economical.

### 9.3 Pillars/Columns in Buildings

- **Rounded-end pillar:** Less load-bearing capacity.
- **Distributed-end pillar (wider at base):** More stable and load-bearing.

### 9.4 Maximum Height of Mountains

The elastic limit for rock ≈ 30 × 10⁷ N m⁻².

At base of a mountain of height h: shearing stress ≈ hρg.

Setting hρg = elastic limit of rock:

$$h = \frac{30 \times 10^7}{3 \times 10^3 \times 10} = 10 \text{ km}$$

This explains why the maximum height of mountains on Earth is ~10 km (height of Mt. Everest ≈ 8.85 km). Above this height, the rock at the base flows under its own weight!

---

## SECTION 10 — SOLVED EXAMPLES (NCERT) ⭐⭐⭐

### Example 8.1 — Young's Modulus: Stress, Strain, Elongation

**Problem:** Steel rod, radius = 10 mm, length = 1.0 m. Force = 100 kN along length. Y = 2.0 × 10¹¹ N m⁻².

**Solution:**
- Cross-sectional area: A = πr² = π × (10⁻²)² = 3.14 × 10⁻⁴ m²
- Stress = F/A = 10⁵ / (3.14 × 10⁻⁴) = **3.18 × 10⁸ N m⁻²**
- Elongation: ΔL = (F/A × L)/Y = (3.18 × 10⁸ × 1) / (2 × 10¹¹) = **1.59 × 10⁻³ m = 1.59 mm**
- Strain = ΔL/L = 1.59 × 10⁻³ / 1 = **1.59 × 10⁻³ = 0.16%**

### Example 8.2 — Two Wires in Series

**Problem:** Copper wire (L = 2.2 m) + steel wire (L = 1.6 m), both d = 3 mm, connected in series. Total elongation = 0.70 mm. Find load.

**Solution:**  
- Both have same tension W and same cross-section A = π(1.5×10⁻³)² m².
- ΔLc/ΔLs = (Ys/Yc) × (Lc/Ls) = (2.0/1.1) × (2.2/1.6) = 2.5
- ΔLc + ΔLs = 0.70 mm → ΔLc = 0.50 mm; ΔLs = 0.20 mm
- W = A × Yc × ΔLc / Lc = π(1.5×10⁻³)² × 1.1×10¹¹ × 5×10⁻⁴/2.2 = **1.8 × 10² N = 180 N**

### Example 8.3 — Compression of Thighbone

**Problem:** Human pyramid, total supported mass = 220 kg. Each thighbone: L = 0.5 m, r = 2 cm. Y (bone) = 9.4 × 10⁹ N m⁻². Find compression.

**Solution:**
- Force per thighbone = ½ × 220 × 9.8 = 1078 N
- A = π × (0.02)² = 1.26 × 10⁻³ m²
- ΔL = FL/(YA) = (1078 × 0.5)/(9.4×10⁹ × 1.26×10⁻³) = **4.55 × 10⁻⁵ m ≈ 0.0455 mm**
- Fractional compression ΔL/L = 0.0091% — extremely small!

### Example 8.4 — Shear Modulus: Lead Slab

**Problem:** Lead slab 50 cm × 10 cm face; shear force 9.0 × 10⁴ N on narrow face. G(lead) = 5.6 × 10⁹ N m⁻².

**Solution:**
- A = 0.5 × 0.1 = 0.05 m²; stress = 9×10⁴/0.05 = 1.8 × 10⁶ N m⁻²
- Shearing strain = stress/G = 1.8×10⁶/5.6×10⁹ = 3.2 × 10⁻⁴
- Displacement Δx = strain × L = 3.2×10⁻⁴ × 0.5 = **1.6 × 10⁻⁴ m = 0.16 mm**

### Example 8.5 — Bulk Modulus: Ocean Compression

**Problem:** Average depth of Indian Ocean = 3000 m. Bulk modulus of water B = 2.2 × 10⁹ N m⁻². Find ΔV/V.

**Solution:**
- Pressure at bottom: p = hρg = 3000 × 1000 × 10 = 3 × 10⁷ N m⁻²
- ΔV/V = p/B = 3×10⁷/2.2×10⁹ = **1.36 × 10⁻² = 1.36%**

---

## 📋 QUICK REFERENCE — All Laws, Formulas, and Dimensional Formulae

```
STRESS:
┌──────────────────────────────────────────────────────────────┐
│  Stress = F/A  (restoring force per unit area)               │
│  Unit: Pa = N m⁻²;  Dim: [ML⁻¹T⁻²]                         │
│  Types: Tensile | Compressive | Shearing | Hydraulic         │
└──────────────────────────────────────────────────────────────┘

STRAIN:
┌──────────────────────────────────────────────────────────────┐
│  Longitudinal strain = ΔL/L (tensile/compressive)            │
│  Shearing strain     = Δx/L = θ (tan θ ≈ θ for small θ)     │
│  Volume strain       = ΔV/V (hydraulic)                      │
│  All strains are DIMENSIONLESS (no units)                    │
└──────────────────────────────────────────────────────────────┘

HOOKE'S LAW:
┌──────────────────────────────────────────────────────────────┐
│  Stress = k × Strain  (k = modulus of elasticity)           │
│  Valid for small deformations within elastic limit           │
│  Elastomers do NOT obey Hooke's law                          │
└──────────────────────────────────────────────────────────────┘

YOUNG'S MODULUS:
┌──────────────────────────────────────────────────────────────┐
│  Y = (F·L)/(A·ΔL)  →  F/A = Y × ΔL/L                       │
│  Unit: Pa;  Steel: 200 GPa; Copper: 110 GPa; Al: 70 GPa    │
│  Applies to SOLIDS only                                      │
└──────────────────────────────────────────────────────────────┘

SHEAR MODULUS:
┌──────────────────────────────────────────────────────────────┐
│  G = (F·L)/(A·Δx) = F/(A·θ)  →  G ≈ Y/3 (for most metals) │
│  Unit: Pa;  Steel: 84 GPa; Copper: 42 GPa; Al: 25 GPa      │
│  Applies to SOLIDS only                                      │
└──────────────────────────────────────────────────────────────┘

BULK MODULUS:
┌──────────────────────────────────────────────────────────────┐
│  B = −p/(ΔV/V)  →  Compressibility k = 1/B                  │
│  Unit: Pa;  Steel: 160 GPa; Water: 2.2 GPa; Air: 10⁻⁴ GPa  │
│  Applies to SOLIDS, LIQUIDS and GASES                        │
└──────────────────────────────────────────────────────────────┘

POISSON'S RATIO:
┌──────────────────────────────────────────────────────────────┐
│  ν = (Δd/d)/(ΔL/L) = lateral strain / longitudinal strain   │
│  Dimensionless;  Steel: 0.28–0.30;  Al alloys: 0.33         │
└──────────────────────────────────────────────────────────────┘

ELASTIC POTENTIAL ENERGY:
┌──────────────────────────────────────────────────────────────┐
│  u = ½ × stress × strain  (energy per unit volume)          │
│  u = ½ × Y × strain²  (in terms of Y)                       │
│  Total PE = u × volume = ½ × F × ΔL                         │
│  Unit: J m⁻³ = Pa                                           │
└──────────────────────────────────────────────────────────────┘

SAG IN A BEAM:
┌──────────────────────────────────────────────────────────────┐
│  δ = Wl³/(4bd³Y)                                            │
│  δ ∝ l³ | δ ∝ 1/d³ | δ ∝ 1/b | δ ∝ 1/Y                   │
│  Increasing depth d is most effective to reduce sag          │
└──────────────────────────────────────────────────────────────┘
```

---

## ⚡ POINTS TO PONDER (High-Yield for Exams)

1. **Stress is NOT a vector.** Unlike force, stress cannot be assigned a single direction — it acts across a surface and involves both magnitude and the orientation of the surface.

2. **More elastic ≠ more stretchy.** Steel (Y = 200 GPa) is MORE elastic than rubber — it deforms LESS for the same stress, meaning it obeys Hooke's law far better. Rubber can undergo large deformations without being "elastic" in the physics sense.

3. **Hooke's law is valid ONLY in the linear portion** of the stress-strain curve (O to A). Beyond point A, even though the material may still be elastic (recovers on unloading), Hooke's law is no longer valid.

4. **Shear stress applies to solids only.** Fluids (liquids and gases) cannot sustain shear stress — they flow instead. Only bulk modulus applies to fluids.

5. **Young's modulus and Shear modulus apply to SOLIDS ONLY.** Bulk modulus applies to ALL states of matter.

6. **Tension at any cross-section of a hanging wire = F (the load), not 2F.** The ceiling exerts an equal and opposite force, but the tension at any cross-section is only due to the load below that section.

7. **For most metals, G ≈ Y/3.** This relationship is useful for quick estimation.

8. **Gases are ~10⁶ times more compressible than solids.** This is due to the very weak intermolecular forces in gases.

9. **Elastic limit vs Proportional limit:** The proportional limit (A) is where Hooke's law stops. The elastic limit (B) is where elastic recovery stops. Point B ≥ Point A (elastic limit ≥ proportional limit).

10. **Railway tracks are I-shaped** because this provides maximum depth (resistance to bending, δ ∝ d⁻³) without excess material, and the flanges prevent buckling.

---

## 📊 Dimensional Formulae Summary

| Quantity | Symbol | Dimensional Formula | SI Unit |
|---|---|---|---|
| Stress | σ | [ML⁻¹T⁻²] | Pa = N m⁻² |
| Strain | ε | Dimensionless | — |
| Young's Modulus | Y | [ML⁻¹T⁻²] | Pa |
| Shear Modulus | G | [ML⁻¹T⁻²] | Pa |
| Bulk Modulus | B | [ML⁻¹T⁻²] | Pa |
| Compressibility | k | [M⁻¹LT²] | Pa⁻¹ |
| Poisson's Ratio | ν | Dimensionless | — |
| Elastic PE per unit vol | u | [ML⁻¹T⁻²] | J m⁻³ = Pa |

---

*End of Notes — Physics Chapter 8 | Total Sections: 10*