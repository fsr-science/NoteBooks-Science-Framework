# CHAPTER 9 — RAPID REVISION + MIND MAPS

### Mechanical Properties of Fluids

---

# ⚡ ONE-PAGE RAPID REVISION SHEET

## 🔢 Key Definitions — Absolute Must-Memorise

| Quantity | Definition | Formula | SI Unit |
|---|---|---|---|
| **Pressure** | Normal force per unit area | P = F/A | Pa = N m⁻² |
| **Gauge Pressure** | Excess over atmospheric pressure | Pg = P − Pₐ = ρgh | Pa |
| **Absolute Pressure** | Total pressure (gauge + atmospheric) | P = Pₐ + ρgh | Pa |
| **Volume flux** | Volume of fluid flowing per second | Q = Av | m³ s⁻¹ |
| **Coefficient of Viscosity** | Shearing stress / Strain rate | η = (F/A)/(v/l) | Pa·s |
| **Surface Tension** | Force per unit length / Surface energy per unit area | S = F/2l | N m⁻¹ |
| **Capillary Rise** | Height of liquid rise in narrow tube | h = 2Scosθ/ρga | m |
| **Terminal Velocity** | Constant velocity when drag = net gravity | vt = 2a²(ρ−σ)g/9η | m s⁻¹ |

---

## 📐 Essential Formulae — Must Know Cold

```
PRESSURE AND DEPTH:
    ┌────────────────────────────────────────────────────────┐
    │  P = Pₐ + ρgh  (absolute pressure at depth h)         │
    │  Gauge pressure Pg = ρgh                              │
    │  Pressure SAME at all points at same horizontal level  │
    │  Does NOT depend on shape of container                │
    │  1 atm = 1.013×10⁵ Pa; 1 bar = 10⁵ Pa; 1 torr = 133 Pa│
    └────────────────────────────────────────────────────────┘

PASCAL'S LAW (Hydraulic Machines):
    ┌────────────────────────────────────────────────────────┐
    │  F₂ = F₁(A₂/A₁);  Mechanical advantage = A₂/A₁       │
    │  A₁d₁ = A₂d₂ (volume conservation; incompressible)   │
    │  Applications: Hydraulic lift, Hydraulic brakes       │
    └────────────────────────────────────────────────────────┘

CONTINUITY EQUATION (Mass Conservation):
    ┌────────────────────────────────────────────────────────┐
    │  A₁v₁ = A₂v₂  →  Av = constant                       │
    │  Narrow section → higher velocity                     │
    │  NOT the same as Bernoulli's equation                 │
    └────────────────────────────────────────────────────────┘

BERNOULLI'S EQUATION (Energy Conservation):
    ┌────────────────────────────────────────────────────────┐
    │  P + ½ρv² + ρgh = constant                            │
    │  Valid for: Non-viscous, incompressible, steady flow  │
    │  v↑ → P↓ (at same height); v↓ → P↑                   │
    │  Torricelli: v = √(2gh) for open tank with hole       │
    └────────────────────────────────────────────────────────┘

VISCOSITY:
    ┌────────────────────────────────────────────────────────┐
    │  η = Fl/(vA)  (coefficient of viscosity)              │
    │  Stokes' Law: F = 6πηav                               │
    │  Terminal velocity: vt = 2a²(ρ−σ)g/9η               │
    │  vt ∝ a²;  vt ∝ 1/η                                  │
    │  Liquids: η falls with T; Gases: η rises with T      │
    └────────────────────────────────────────────────────────┘

SURFACE TENSION:
    ┌────────────────────────────────────────────────────────┐
    │  S = F/(2l)  (force per unit length; film has 2 sides)│
    │  Excess P in drop (1 surface): ΔP = 2S/r             │
    │  Excess P in soap bubble (2 surfaces): ΔP = 4S/r     │
    │  Capillary rise: h = 2Scosθ/(ρga)  →  h ∝ 1/a       │
    │  Angle of contact: Sla·cosθ + Ssl = Ssa               │
    │  Acute θ → wetting; Obtuse θ → non-wetting           │
    └────────────────────────────────────────────────────────┘
```

---

## 📊 Comparative Values — Important for MCQs

```
─────────────────────────────────────────────────────────────────
DENSITIES (kg m⁻³) at STP:
  Mercury: 13600 > Sea water: 1030 > Water: 1000 > Oil: ~800
  Air: 1.29;  Hydrogen: 0.09;  Interstellar space: ~10⁻²⁰
─────────────────────────────────────────────────────────────────
VISCOSITIES (mPl = 10⁻³ Pa·s):
  Glycerine: 830 > Machine Oil: 113 > Blood: 2.7 > Water: 1.0 > Air: 0.017
─────────────────────────────────────────────────────────────────
SURFACE TENSIONS (N m⁻¹ at ~20°C):
  Mercury: 0.435 > Water: 0.073 > Ethanol: 0.023 > Helium (liquid): 0.000239
─────────────────────────────────────────────────────────────────
KEY PRESSURE CONVERSIONS:
  1 atm = 1.013 × 10⁵ Pa = 760 mm Hg = 760 torr ≈ 1 bar
─────────────────────────────────────────────────────────────────
EXCESS PRESSURE COMPARISON (same r and S):
  Soap bubble (4S/r) = 2 × Liquid drop or Air bubble in liquid (2S/r)
─────────────────────────────────────────────────────────────────
```

---

## ⚠️ Critical Distinctions — High-Yield Exam Traps

```
PRESSURE TRAPS:
  ✓ Pressure is SCALAR — acts equally in all directions; cannot assign one direction
  ✓ Gauge pressure = P − Pₐ (what instruments like BP cuff measure)
  ✓ Absolute pressure = Pₐ + ρgh (total actual pressure)
  ✓ Pressure depends ONLY on depth h, NOT on shape/area of container → hydrostatic paradox
  ✓ Force on submerged object from fluid is ALWAYS perpendicular to surface (at rest)

PASCAL'S LAW TRAPS:
  ✓ Force amplified: F₂ > F₁; displacement reduced: d₂ < d₁; WORK is same!
  ✓ Hydraulic brakes apply equal force because P is transmitted equally to ALL cylinders

BERNOULLI TRAPS:
  ✓ Bernoulli (energy) ≠ Continuity (mass) — they are different equations used together
  ✓ Bernoulli requires: non-viscous + incompressible + steady flow
  ✓ Turbulent flow (rapids, high speed) → Bernoulli DOES NOT apply
  ✓ When pipe is horizontal: ρgh term drops; P + ½ρv² = constant
  ✓ Torricelli is a special case of Bernoulli for an open tank
  ✓ Gauge vs absolute: using gauge pressure in Bernoulli is fine (Pₐ cancels on both sides)

VISCOSITY TRAPS:
  ✓ Liquids: η DECREASES with T; Gases: η INCREASES with T — OPPOSITE behaviour
  ✓ Stress in fluids is proportional to RATE of strain (v/l), NOT strain itself
  ✓ Terminal velocity ∝ a² (NOT a) — tiny change in size causes large change in vt
  ✓ At terminal velocity: net force = 0, acceleration = 0, velocity = constant (non-zero)

SURFACE TENSION TRAPS:
  ✓ Liquid DROP and AIR BUBBLE IN LIQUID → both 1 surface → ΔP = 2S/r
  ✓ SOAP BUBBLE in air → 2 surfaces → ΔP = 4S/r (double!)
  ✓ Surface tension is NOT area-dependent — it's force per unit LENGTH
  ✓ S decreases with temperature (unlike gas viscosity)
  ✓ Capillary depression occurs when θ > 90° (obtuse angle, e.g., mercury-glass)
  ✓ h ∝ 1/a: THINNER tube → GREATER rise; this is why capilla (hair) was used for naming
  ✓ Angle of contact: measured INSIDE the liquid; acute → wetting; obtuse → non-wetting
```

---

# 🗺️ MIND MAP 1 — Chapter Overview

```
                    ┌──────────────────────────────────────────────────────────────┐
                    │              MECHANICAL PROPERTIES OF FLUIDS                  │
                    │        (Fluids = Liquids + Gases; They Can FLOW)              │
                    └──────────────────────────────┬───────────────────────────────┘
                                                   │
       ┌──────────────────┬────────────────┬───────┴──────────┬────────────────────┐
       ▼                  ▼                ▼                  ▼                    ▼
┌───────────────┐  ┌─────────────┐  ┌─────────────┐  ┌────────────┐  ┌────────────────┐
│   PRESSURE    │  │  STREAMLINE │  │  BERNOULLI  │  │ VISCOSITY  │  │ SURFACE        │
│  & PASCAL'S   │  │    FLOW     │  │   + APPS    │  │            │  │ TENSION        │
│     LAW       │  │             │  │             │  │            │  │                │
└──────┬────────┘  └──────┬──────┘  └──────┬──────┘  └─────┬──────┘  └──────┬─────────┘
       │                  │                │               │                 │
  P = Pₐ+ρgh         Av = const     P+½ρv²+ρgh     F = 6πηav           S = F/2l
  Scalar quantity    Continuity     = constant      Stokes Law          Force/length
  Hydrostatic        equation       Energy          vt = 2a²(ρ−σ)g/9η  2 surfaces:
  paradox            Mass consv.    conservation    η(liq)↓ with T      Soap: 4S/r
  Pascal's law       Laminar flow   Torricelli:     η(gas)↑ with T      Drop: 2S/r
  Hydraulic lift     vs Turbulent   v = √(2gh)      Terminal            Capillary:
  Hydraulic brake    No 2 stream-   Dynamic lift    velocity            h = 2Scosθ/ρga
                     lines cross    Magnus effect   at equilibrium      Angle of contact
                                    Aerofoil
```

---

# 🗺️ MIND MAP 2 — Bernoulli's Principle and Applications

```
                ┌────────────────────────────────────────────────────────┐
                │                  BERNOULLI'S PRINCIPLE                  │
                │         P + ½ρv² + ρgh = constant (along streamline)  │
                └─────────────────────────┬──────────────────────────────┘
                                          │
        ┌──────────────────┬──────────────┼─────────────────┬────────────────────┐
        ▼                  ▼              ▼                 ▼                    ▼
┌───────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────┐  ┌──────────────────┐
│  TORRICELLI'S │  │    VENTURE   │  │  DYNAMIC     │  │  MAGNUS  │  │   FLUID AT REST   │
│     LAW       │  │   TUBE /     │  │   LIFT &     │  │  EFFECT  │  │ Bernoulli reduces │
│               │  │   SPRAY PUMP │  │  AEROFOIL    │  │          │  │ to hydrostatics   │
└──────┬────────┘  └──────┬───────┘  └──────┬───────┘  └────┬─────┘  └──────┬────────────┘
       │                  │                 │               │               │
  Open tank +         Constriction      Wing shape:       Spinning      v = 0 everywhere
  hole at depth h     → v↑ → P↓        streamlines       ball drags    → P₁+ρgh₁ = P₂+ρgh₂
  v = √(2gh)          → pressure        denser above      nearby air    → P = Pₐ + ρgh
                       differential     than below        → asymmetric  Hydrostatics ✓
  Like free fall       used to          v_above > v_below  streamlines
  from height h        measure          P_above < P_below  → P differ
                       flow rate        → Net upward       → lateral
                                        force = LIFT        force on
                                                            ball
```

---

# 🗺️ MIND MAP 3 — Viscosity and Terminal Velocity

```
                ┌──────────────────────────────────────────────────────┐
                │                       VISCOSITY                       │
                │   Internal friction in fluids due to layer-to-layer  │
                │         relative motion; opposes flow                 │
                └─────────────────────────┬────────────────────────────┘
                                          │
           ┌──────────────────────────────┼───────────────────────────────┐
           ▼                              ▼                               ▼
┌──────────────────────┐   ┌──────────────────────────┐   ┌──────────────────────────┐
│  COEFFICIENT OF      │   │       STOKES' LAW         │   │    TERMINAL VELOCITY      │
│   VISCOSITY (η)      │   │                           │   │                           │
└──────────┬───────────┘   └──────────┬───────────────┘   └──────────┬───────────────┘
           │                          │                               │
  η = Fl/(vA)               F = 6πηav                    vt = 2a²(ρ−σ)g / 9η
  SI unit: Pa·s (Pl)        Viscous drag                        │
  Dim: [ML⁻¹T⁻¹]            on a sphere                 ┌───────┼────────┐
           │                Moving at v                  │       │        │
  Liquids: η ↓ with T      through fluid of              ↑ a²   ↑(ρ−σ)  ↓η
  Gases: η ↑ with T         viscosity η                  │       │        │
           │                and radius a                 Bigger Denser   More
  Thick fluids: high η                                   sphere object   viscous
  (glycerine, honey)                                     → much → rises  → falls
  Thin fluids: low η                                     faster   faster   slower
  (water, air)

  TERMINAL VELOCITY REACHED WHEN:
  Gravity = Buoyancy + Viscous drag
  (4/3)πa³ρg = (4/3)πa³σg + 6πηavt
  ∴ vt = 2a²(ρ−σ)g/9η
```

---

# 🗺️ MIND MAP 4 — Surface Tension

```
                ┌──────────────────────────────────────────────────────┐
                │                   SURFACE TENSION (S)                 │
                │   Extra energy at liquid surface due to unbalanced    │
                │        intermolecular forces on surface molecules      │
                │   S = Force per unit length = Surface energy per area │
                └─────────────────────────┬────────────────────────────┘
                                          │
      ┌──────────────────┬────────────────┼──────────────────┬────────────────────┐
      ▼                  ▼                ▼                  ▼                    ▼
┌───────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────┐  ┌──────────────────┐
│    ORIGIN     │  │  SURFACE     │  │    DROPS &   │  │  ANGLE   │  │  CAPILLARY RISE   │
│               │  │  ENERGY      │  │   BUBBLES    │  │    OF    │  │                   │
│               │  │              │  │              │  │ CONTACT  │  │                   │
└──────┬────────┘  └──────┬───────┘  └──────┬───────┘  └────┬─────┘  └──────┬────────────┘
       │                  │                 │               │               │
  Interior molecule:  S = F/(2l)      LIQUID DROP:       θ at 3-phase  h = 2Scosθ/(ρga)
  symmetric forces   = Surface E/area  ΔP = 2S/r         junction:         │
  → zero net force   S decreases       (1 surface)       Sla cosθ+Ssl=Ssa  h ∝ 1/a (thinner
                      with temp        AIR BUBBLE         Acute θ:          = higher rise)
  Surface molecule:                    in liquid:         Wets (water-glass) h ∝ cosθ
  only inward         Unit: N m⁻¹      ΔP = 2S/r         Obtuse θ:         (depression if
  forces → net        Dim: [MT⁻²]      (1 surface)        Doesn't wet        cos θ < 0)
  inward force                         SOAP BUBBLE:       (Hg on glass)     h ∝ S
  → higher PE at                       ΔP = 4S/r                            h ∝ 1/ρg
    surface                            (2 surfaces!)
  → liquid minimises                   Spherical shape:
    surface area                       min area for given
                                       volume → min energy
```

---

# 🗺️ MIND MAP 5 — Connecting All Concepts

```
                    ┌──────────────────────────────────────────────────────────────┐
                    │               PRESSURE AS THE CONNECTING THREAD              │
                    └──────────────────────────────┬───────────────────────────────┘
                                                   │
                  ┌─────────────────────────────────┼──────────────────────────────┐
                  ▼                                 ▼                              ▼
         FLUID AT REST                    FLUID IN MOTION                  SURFACES
         (Hydrostatics)                   (Hydrodynamics)                  (Surface Tension)
                │                                  │                              │
  P = Pₐ + ρgh                          Continuity: Av = const          S creates excess
  Pascal: P same                         Bernoulli: P+½ρv²+ρgh = const  pressure ΔP = 2S/r
  in all directions                      v ↑ → P ↓ (and vice versa)     (or 4S/r for bubble)
                │                                  │                              │
  Applications:                          Applications:                   Applications:
  • Barometer                            • Aerofoil lift                 • Capillary rise
  • Manometer                            • Spray pumps                   • Wetting/non-wetting
  • Hydraulic lift                       • Magnus effect                 • Soap bubbles
  • Dams & submarines                    • Torricelli/efflux speed       • Water striders
                                         • Venturimeter                   • Detergents/soaps

               Viscosity creates drag in flowing fluids
               → Real fluids lose energy (P₂ < Bernoulli prediction)
               → Terminal velocity in Stokes' law
               → Laminar flow profile in pipes (parabolic velocity)
```

---

## 🏆 Last-Minute Exam Checklist

```
Before answering any Mechanical Properties of Fluids question:

□ Is it a FLUID AT REST or IN MOTION?
  → Rest: use P = Pₐ + ρgh, Pascal's law
  → Motion: use Continuity + Bernoulli (if ideal fluid)

□ Pressure formula — gauge or absolute?
  → Absolute: P = Pₐ + ρgh
  → Gauge: Pg = ρgh (what we feel; what instruments measure)
  → Bernoulli works with either (consistent use)

□ Pascal's Law for hydraulic device?
  → F₂ = F₁(A₂/A₁); work in = work out (energy conserved)
  → Volume displaced is same on both pistons: A₁d₁ = A₂d₂

□ Continuity vs Bernoulli?
  → Continuity: A₁v₁ = A₂v₂ (mass conservation; always use first)
  → Bernoulli: P + ½ρv² + ρgh = const (energy conservation)
  → Both often needed together

□ Viscosity — which way does η change with T?
  → LIQUIDS: η decreases ↓ with T
  → GASES: η increases ↑ with T
  → (opposite behaviour — a classic trap)

□ Terminal velocity formula?
  → vt = 2a²(ρ−σ)g / (9η)
  → vt ∝ a² (if radius doubles → vt quadruples)
  → vt ∝ 1/η (more viscous → slower vt)
  → Net force = ZERO at terminal velocity

□ Excess pressure — 1 or 2 surfaces?
  → Liquid drop / Air bubble in liquid: 1 surface → ΔP = 2S/r
  → Soap bubble: 2 surfaces → ΔP = 4S/r
  → "Soap bubble = double" — never forget!

□ Capillary rise direction?
  → Acute θ (water-glass): meniscus concave → liquid RISES
  → Obtuse θ (mercury-glass): meniscus convex → liquid DEPRESSED
  → h = 2Scosθ/(ρga); if cosθ < 0, then h < 0 (depression)

□ Dynamic lift (Magnus + Aerofoil)?
  → Faster flow → lower pressure (Bernoulli)
  → Spinning: one side faster flow, one side slower → pressure difference → lateral force
  → Wing (aerofoil): faster on top, slower below → net upward lift

□ Dimensional formula check for all quantities?
  → P, all moduli of fluids: [ML⁻¹T⁻²]
  → Viscosity η: [ML⁻¹T⁻¹]
  → Surface tension S: [MT⁻²]
  → Density: [ML⁻³]
```

---

## 📌 Common Formula Errors to Avoid

| Wrong Formula | Correct Formula | Situation |
|---|---|---|
| Excess P in soap bubble = 2S/r | Soap bubble = **4S/r** (two surfaces!) | Soap bubble ≠ liquid drop |
| h = 2S/(ρga) | h = **2Scosθ**/(ρga) | Capillary rise — don't forget cos θ! |
| vt = 2a(ρ−σ)g/9η | vt = **2a²**(ρ−σ)g/9η | Terminal velocity ∝ a², not a |
| P + ρv² + ρgh = constant | P + **½**ρv² + ρgh = constant | Bernoulli — the ½ is mandatory |
| η(liquids) increases with T | η(liquids) **decreases** with T | Opposite of gases |
| Streamlines can cross | Streamlines **cannot cross** in steady flow | Definition of steady flow |
| Continuity = Bernoulli | These are **separate** equations | Continuity = mass; Bernoulli = energy |
| Force on hydraulic output < Force in | F₂ = F₁**(A₂/A₁) ≥ F₁** | Pascal's law amplifies force |

---

*End of Revision Notes + Mind Maps — Physics Ch. 9*