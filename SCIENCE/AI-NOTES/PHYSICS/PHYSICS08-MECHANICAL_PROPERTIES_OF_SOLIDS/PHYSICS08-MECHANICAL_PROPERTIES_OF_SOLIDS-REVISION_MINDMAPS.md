# CHAPTER 8 — RAPID REVISION + MIND MAPS

### Mechanical Properties of Solids

---

# ⚡ ONE-PAGE RAPID REVISION SHEET

## 🔢 Key Definitions — Absolute Must-Memorise

| Quantity | Definition | Formula | SI Unit |
|---|---|---|---|
| **Stress** | Restoring force per unit area | σ = F/A | Pa = N m⁻² |
| **Longitudinal Strain** | Fractional change in length | ε = ΔL/L | Dimensionless |
| **Shearing Strain** | Angular deformation | θ = Δx/L ≈ tan θ | Dimensionless |
| **Volume Strain** | Fractional change in volume | ΔV/V | Dimensionless |
| **Young's Modulus** | Long. stress / Long. strain (solids) | Y = FL/AΔL | Pa |
| **Shear Modulus** | Shearing stress / Shearing strain (solids) | G = F/Aθ | Pa |
| **Bulk Modulus** | Hydraulic stress / Volume strain | B = −p/(ΔV/V) | Pa |
| **Poisson's Ratio** | Lateral strain / Longitudinal strain | ν = (Δd/d)/(ΔL/L) | Dimensionless |
| **Elastic PE density** | Energy stored per unit volume | u = ½σε | J m⁻³ |

---

## 📐 Essential Formulae — Must Know Cold

```
STRESS (General):
    ┌────────────────────────────────────────────────────────┐
    │  σ = F/A  [ML⁻¹T⁻²] = Pa = N m⁻²                     │
    │  Three types: Tensile | Shearing | Hydraulic           │
    │  Stress is NOT a vector                                │
    └────────────────────────────────────────────────────────┘

HOOKE'S LAW:
    ┌────────────────────────────────────────────────────────┐
    │  Stress = k × Strain  (k = modulus of elasticity)     │
    │  Valid ONLY in the linear region (O → A on curve)     │
    │  Elastomers (rubber, aorta tissue) do NOT obey this   │
    └────────────────────────────────────────────────────────┘

YOUNG'S MODULUS:
    ┌────────────────────────────────────────────────────────┐
    │  Y = (F·L)/(A·ΔL) = σ/ε                               │
    │  → F/A = Y × ΔL/L  (Hooke's form for tension)        │
    │  Steel: 200 GPa > Copper: 110 GPa > Al: 70 GPa        │
    │  SOLIDS ONLY;  Large Y = more elastic (stiffer)        │
    └────────────────────────────────────────────────────────┘

SHEAR MODULUS:
    ┌────────────────────────────────────────────────────────┐
    │  G = (F·L)/(A·Δx) = F/(A·θ)                           │
    │  → F/A = G × θ  (Hooke's form for shear)              │
    │  G ≈ Y/3 for most materials                           │
    │  Steel: 84 GPa; Al: 25 GPa;  SOLIDS ONLY              │
    └────────────────────────────────────────────────────────┘

BULK MODULUS:
    ┌────────────────────────────────────────────────────────┐
    │  B = −p/(ΔV/V)  →  p = B(ΔV/V)                        │
    │  Compressibility k = 1/B                              │
    │  Gases ≈ 10⁶ × more compressible than solids          │
    │  SOLIDS + LIQUIDS + GASES                             │
    └────────────────────────────────────────────────────────┘

POISSON'S RATIO:
    ┌────────────────────────────────────────────────────────┐
    │  ν = (Δd/d) / (ΔL/L)                                  │
    │  Pure number; range −1 to 0.5 (usually 0 to 0.5)     │
    │  Steel: 0.28–0.30;  Al alloys: 0.33                   │
    └────────────────────────────────────────────────────────┘

ELASTIC POTENTIAL ENERGY:
    ┌────────────────────────────────────────────────────────┐
    │  u = ½ × stress × strain = ½ × Y × ε²                │
    │  Total PE in wire = ½ × F × ΔL                        │
    └────────────────────────────────────────────────────────┘

BEAM SAG FORMULA:
    ┌────────────────────────────────────────────────────────┐
    │  δ = Wl³/(4bd³Y)                                      │
    │  d ↑ is most effective (δ ∝ d⁻³ vs δ ∝ b⁻¹)          │
    │  → I-shaped beam: large d, prevents buckling           │
    └────────────────────────────────────────────────────────┘
```

---

## 📊 Comparative Values — Important for MCQs

```
─────────────────────────────────────────────────────────────────
YOUNG'S MODULUS (Y) ranking:
  Steel > Iron > Copper > Aluminium > Glass > Concrete > Wood > Bone
  200   > 190  > 110    > 70       > 65    > 30       > 13   > 9.4  (GPa)
─────────────────────────────────────────────────────────────────
SHEAR MODULUS (G) ranking:
  Tungsten > Steel > Nickel > Iron > Copper > Brass > Al > Glass > Wood > Lead
  150      > 84    > 77     > 70   > 42     > 36    > 25 > 23    > 10   > 5.6 (GPa)
─────────────────────────────────────────────────────────────────
BULK MODULUS (B) for selected substances:
  Nickel (260) > Steel (160) > Copper (140) > Iron (100) > Al (72)
  [Water: 2.2 GPa; Air at STP: 10⁻⁴ GPa]
─────────────────────────────────────────────────────────────────
GENERAL RELATION: G ≈ Y/3 for most materials
─────────────────────────────────────────────────────────────────
```

---

## ⚠️ Critical Distinctions — High-Yield Exam Traps

```
STRESS-STRAIN CURVE TRAPS:
  ✓ O → A: Hooke's law (linear); elastic; fully recoverable
  ✓ A → B: Non-linear but still elastic (recoverable); Hooke fails
  ✓ Beyond B (yield point): PLASTIC deformation; permanent set
  ✓ D = Ultimate tensile strength (maximum stress; NOT fracture point!)
  ✓ E = Fracture point (where wire actually breaks)
  ✓ Brittle: D and E are CLOSE; Ductile: D and E are FAR APART
  ✓ Elastomers (rubber): very large elastic region; non-linear; no clear plastic region

MODULI TRAPS:
  ✓ Y and G → SOLIDS ONLY (fluids have no shape to maintain)
  ✓ B → Solids + Liquids + Gases (all change volume under pressure)
  ✓ For a given material, G < Y (specifically G ≈ Y/3)
  ✓ LARGE Y = MORE ELASTIC (stiffer) — not less elastic!
  ✓ Steel IS more elastic than rubber (higher Y), even though rubber stretches more

STRESS TRAPS:
  ✓ Stress = F/A is the RESTORING force per unit area (not the applied force)
    — they are equal in magnitude, but conceptually different
  ✓ Stress is NOT a vector (cannot be assigned one direction)
  ✓ For hanging wire with load W: tension at ANY cross-section = W (not 2W)
    The ceiling reaction is equal and opposite to the whole wire's weight+load,
    but at any interior cross-section, tension = weight below that section

STRAIN TRAPS:
  ✓ Shearing strain = tan θ ≈ θ (only for SMALL θ!)
  ✓ All strains are DIMENSIONLESS
  ✓ Longitudinal strain: only change in LENGTH; no change in cross-section shape
  ✓ Volume strain: only change in VOLUME; no change in shape

BEAM/APPLICATION TRAPS:
  ✓ Increasing depth d reduces sag MUCH MORE than increasing breadth b
    δ ∝ d⁻³ vs δ ∝ b⁻¹ — cube vs linear relationship
  ✓ I-shaped beam: optimises depth (stiffness) while the flanges prevent buckling
  ✓ Mountain max height ~10 km: from elastic limit of rock, NOT atmosphere limit

ELASTIC PE TRAPS:
  ✓ u = ½σε (per unit volume); Total PE = ½Fδ (like a spring, ½ × force × extension)
  ✓ NOT u = σε (missing the ½ factor)
```

---

# 🗺️ MIND MAP 1 — Chapter Overview

```
                    ┌───────────────────────────────────────────────────────┐
                    │        MECHANICAL PROPERTIES OF SOLIDS                 │
                    └───────────────────────────────────┬───────────────────┘
                                                        │
       ┌──────────────┬────────────────┬────────────────┼────────────────┬────────────────┐
       ▼              ▼                ▼                ▼                ▼                ▼
┌───────────┐  ┌──────────┐  ┌──────────────┐  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐
│  ELASTIC  │  │  STRESS  │  │    STRAIN    │  │  HOOKE'S   │  │   ELASTIC    │  │ APPLICATIONS │
│ vs PLASTIC│  │  TYPES   │  │    TYPES     │  │    LAW      │  │    MODULI    │  │              │
└─────┬─────┘  └────┬─────┘  └──────┬───────┘  └──────┬──────┘  └──────┬───────┘  └──────┬───────┘
      │             │               │                  │                │                 │
  Elastic:      Tensile         Longitudinal       σ = k × ε       Y (Young's)       Cranes
  recovers      Compressive     ΔL/L               (linear region)  G (Shear)         Beams (I-shape)
               Shearing         θ = Δx/L           k = modulus     B (Bulk)          Mountains
  Plastic:     Hydraulic        ΔV/V               of elasticity   Poisson's ν        max ~10 km
  permanent                                                         Elastic PE: u     Steel ropes
```

---

# 🗺️ MIND MAP 2 — Three Elastic Moduli

```
                ┌────────────────────────────────────────────────────────┐
                │                  ELASTIC MODULI                         │
                └────────────────────────┬───────────────────────────────┘
                                         │
          ┌──────────────────────────────┼───────────────────────────────┐
          ▼                              ▼                               ▼
┌──────────────────────┐   ┌──────────────────────────┐   ┌──────────────────────────┐
│   YOUNG'S MODULUS    │   │     SHEAR MODULUS (G)     │   │    BULK MODULUS (B)      │
│        (Y)           │   │   Modulus of Rigidity     │   │                          │
└──────────┬───────────┘   └──────────┬───────────────┘   └──────────┬───────────────┘
           │                          │                               │
  Y = FL/(AΔL)              G = F·L/(A·Δx)                 B = −p/(ΔV/V)
  Y = σ/ε                   G = F/(A·θ)                    k = 1/B (compressibility)
           │                          │                               │
  Stress: ⊥ to surface       Stress: ‖ to surface          Stress: ⊥ everywhere
  Strain: ΔL/L               Strain: θ = Δx/L              (uniform pressure)
           │                          │                    Strain: ΔV/V
  Shape changes: YES         Shape changes: YES                       │
  Volume changes: NO         Volume changes: NO             Shape changes: NO
           │                          │                    Volume changes: YES
  Applies to: SOLIDS          Applies to: SOLIDS                      │
           │                          │                    Applies to: ALL MATTER
  G ≈ Y/3 for most            Shear → solids only;                   │
  metals                      fluids FLOW under                Gases ≈ 10⁶ × more
           │                  shear → no G                    compressible than solids
  Steel: 200 GPa              Steel: 84 GPa                  Steel: 160 GPa
  Copper: 110 GPa             Cu: 42 GPa                     Water: 2.2 GPa
  Al: 70 GPa                  Al: 25 GPa                     Air: 10⁻⁴ GPa
```

---

# 🗺️ MIND MAP 3 — Stress-Strain Curve

```
                ┌───────────────────────────────────────────────────────┐
                │              STRESS-STRAIN CURVE (METAL)               │
                └───────────────────────────────────────────────────────┘

Stress
σu ─────────────────────────────────────────── D ────── E (FRACTURE)
                                               ↑        ↑
                                    Ultimate TS     Fracture pt.
σy ─────────────────── B ──────── C              BRITTLE: D,E close
                       ↑                         DUCTILE: D,E far
                  Yield point                  PLASTIC REGION (B→E)
               (Elastic limit)                 Permanent set if unloaded at C
                      /
                     / A ← Proportional limit (Hooke's law ends here)
                    /  (Linear region O→A: Hooke's law obeyed)
                   /   (Elastic region O→B: material recovers)
                  /
                 /   Slope = Y = σ/ε = Young's modulus
                /
               O ────────────────────────────────────────────► Strain
               (<1% for metals)                         (~30% at fracture)


KEY REGIONS:
  O → A: Linear + Elastic (Hooke's law valid; Y = slope)
  A → B: Non-linear + Elastic (no Hooke's law; but body recovers)
  B → D: Non-linear + PLASTIC (permanent deformation; Hooke invalid)
  D → E: Necking region (strain ↑ even as stress ↓; fracture imminent)

SPECIAL CURVES:
  Elastomers (rubber): Very large elastic region; no plastic region; non-linear
  Brittle (glass): Short curve; D and E nearly coincide; sudden fracture
  Ductile (copper): Long plastic region; significant necking before fracture
```

---

# 🗺️ MIND MAP 4 — Applications of Elastic Behaviour

```
                ┌───────────────────────────────────────────────────────┐
                │           APPLICATIONS OF ELASTIC BEHAVIOUR            │
                └──────────────────────────┬────────────────────────────┘
                                           │
       ┌──────────────────┬────────────────┼────────────────┬───────────────────┐
       ▼                  ▼                ▼                ▼                   ▼
┌─────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐
│ CRANE ROPES │  │  BEAMS IN    │  │  PILLARS /   │  │  MOUNTAIN    │  │ ARTIFICIAL LIMBS │
│             │  │ BUILDINGS &  │  │  COLUMNS     │  │ MAX HEIGHT   │  │  & AEROPLANES    │
│             │  │  BRIDGES     │  │              │  │              │  │                  │
└──────┬──────┘  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └────────┬─────────┘
       │                │                 │                  │                   │
  Need A ≥ W/σy    Sag δ = Wl³/4bd³Y  Rounded ends:     hρg ≤ elastic     Need high Y
  (yield strength)       │         less load-bearing     limit of rock     and low ρ
                         │         Distributed ends:     h = 30×10⁷/       (strength-to-
  A = Mg/σy             │         more stable           (3×10³×10)        weight ratio)
  = 3.3×10⁻⁴ m²         │                              = 10 km
  (radius ~1 cm)    To reduce δ:                       (>Mt. Everest)
                    • Use large Y                    
  With safety       • Increase d (best: δ∝d⁻³)      
  factor ×10        • Use I-shape: depth + flanges   
  radius ~3 cm        (stops buckling)               
                    • Keep span l small              
```

---

# 🗺️ MIND MAP 5 — Relationship Between Quantities

```
                ┌──────────────────────────────────────────────┐
                │     CONNECTING STRESS, STRAIN, MODULI        │
                └──────────────────────────────────────────────┘

FORCE F applied to body →
         │
         ├── PERPENDICULAR to cross-section:
         │       → LONGITUDINAL STRESS = F/A
         │       → LONGITUDINAL STRAIN = ΔL/L
         │       → YOUNG'S MODULUS Y = (F/A)/(ΔL/L)
         │       → Hooke's form: F = YA(ΔL)/L  [like spring: F = kx]
         │              Spring constant k = YA/L
         │
         ├── PARALLEL to surface:
         │       → SHEARING STRESS = F/A
         │       → SHEARING STRAIN = θ = Δx/L
         │       → SHEAR MODULUS G = (F/A)/θ
         │
         └── UNIFORM from ALL SIDES (pressure p):
                 → HYDRAULIC STRESS = p
                 → VOLUME STRAIN = ΔV/V
                 → BULK MODULUS B = −p/(ΔV/V)
                 → Compressibility k = 1/B

LATERAL EFFECT:
  When wire is stretched (ΔL, longitudinal), diameter decreases (Δd, lateral)
  → POISSON'S RATIO ν = (Δd/d)/(ΔL/L)

ENERGY:
  Stretching a wire stores elastic PE:
  u = ½ × stress × strain = ½ × Y × ε² [per unit volume]
  Total PE = u × volume = ½ × F × ΔL
```

---

## 🏆 Last-Minute Exam Checklist

```
Before answering any Mechanical Properties question:

□ Which modulus? → Tensile/Compressive = Y; Shearing = G; Hydraulic = B
□ Formula for Young's modulus? → Y = FL/(AΔL); cross-check units (Pa)
□ Beam sag formula? → δ = Wl³/(4bd³Y); identify which variable to change
□ Which modulus applies to fluids? → ONLY bulk modulus (B); NOT Y or G
□ Hooke's law valid? → Only in LINEAR region of stress-strain curve (O→A)
□ More elastic = ? → LARGER Y; steel MORE elastic than rubber (not less!)
□ Stress a vector? → NO; stress is not a vector quantity
□ Tension in hanging wire at cross-section? → F (load below), NOT 2F
□ G vs Y? → G ≈ Y/3 for most materials; G < Y always
□ Gases vs solids for bulk modulus? → Gases ≈ 10⁶ × more compressible
□ Yield point vs proportional limit? → Both at different positions; yield point ≥ proportional limit
□ Fracture point vs ultimate tensile strength? → UTS (D) is max stress point; E is fracture
□ Brittle vs ductile? → Brittle: D and E close; Ductile: D and E far apart
□ Elastomers? → Large elastic region; DO NOT obey Hooke's law; no defined plastic region
□ Elastic PE? → u = ½σε per unit volume; total = ½F·ΔL
□ Mountain max height? → hρg ≤ elastic limit of rock → h ≈ 10 km
□ I-beam shape reason? → Depth d resists bending (δ∝d⁻³); flanges prevent buckling
□ Poisson's ratio? → lateral strain/longitudinal strain; dimensionless; 0 to 0.5
□ Dim. formula for all moduli? → [ML⁻¹T⁻²] (same as stress/pressure)
```

---

## 📌 Common Formula Errors to Avoid

| Wrong Formula | Correct Formula | Situation |
|---|---|---|
| Y = ΔL/L ÷ F/A | Y = **(F/A) ÷ (ΔL/L)** | Stress over strain (NOT strain over stress) |
| u = σε | u = **½** σε | Elastic PE per unit vol — don't forget the ½ |
| B = p/(ΔV/V) | B = **−**p/(ΔV/V) | Negative sign needed; pressure ↑ → volume ↓ |
| G = Y | G **≈ Y/3** | Shear modulus is roughly one-third of Y |
| Total PE = F × ΔL | Total PE = **½** F × ΔL | Same as spring; work done against linearly increasing force |
| δ ∝ 1/d | δ ∝ **1/d³** | Sag depends on cube of depth, not linearly |
| Shear stress: fluids | Shear stress: **SOLIDS ONLY** | Fluids cannot sustain shear |

---

*End of Revision Notes + Mind Maps — Physics Ch. 8*