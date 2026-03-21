# CHAPTER 7 — RAPID REVISION + MIND MAPS

### Gravitation

---

# ⚡ ONE-PAGE RAPID REVISION SHEET

## 🔢 Key Definitions — Absolute Must-Memorise

| Quantity | Definition | Formula | SI Unit |
|---|---|---|---|
| **Gravitational Constant** | Universal constant in Newton's law | F = Gm₁m₂/r² | N m² kg⁻² |
| **Acceleration due to gravity** | Gravitational accel. at surface | g = GME/RE² | m s⁻² |
| **Gravitational PE** | PE of mass m at distance r from Earth (V=0 at ∞) | V = −GMEm/r | J |
| **Gravitational Potential** | PE per unit mass at a point | U = −GME/r | J kg⁻¹ |
| **Escape Speed** | Min. speed to escape gravitational field | vₑ = √(2GME/RE) | m s⁻¹ |
| **Orbital Speed** | Speed of satellite in circular orbit | V = √(GME/(RE+h)) | m s⁻¹ |
| **Perihelion** | Closest point of orbit to Sun | rp (speed = max) | m |
| **Aphelion** | Farthest point of orbit from Sun | rA (speed = min) | m |
| **Semi-major axis** | Half the major axis of ellipse; a = (rp+rA)/2 | a | m |

---

## 📐 Essential Formulae — Must Know Cold

```
KEPLER'S LAWS:
    ┌────────────────────────────────────────────────────────┐
    │  1st: All planets orbit in ELLIPSES (Sun at 1 focus)   │
    │  2nd: ΔA/Δt = L/2m = const  (equal areas)             │
    │       → consequence of L conservation (central force)  │
    │  3rd: T² ∝ a³;  T² = (4π²/GMs) × a³                  │
    │       → same constant for ALL planets around same star  │
    └────────────────────────────────────────────────────────┘

NEWTON'S LAW OF GRAVITATION:
    ┌────────────────────────────────────────────────────────┐
    │  F = Gm₁m₂/r²  (magnitude)                            │
    │  G = 6.67×10⁻¹¹ N m² kg⁻²  [M⁻¹L³T⁻²]               │
    │  Attractive; obeys superposition principle             │
    └────────────────────────────────────────────────────────┘

ACCELERATION DUE TO GRAVITY:
    ┌────────────────────────────────────────────────────────┐
    │  Surface:    g₀ = GME/RE²  ≈ 9.8 m s⁻²               │
    │  Height h:   g(h) ≈ g₀(1 − 2h/RE)  [h ≪ RE]          │
    │  Depth d:    g(d) = g₀(1 − d/RE)                      │
    │  Centre:     g = 0                                     │
    │  Max g: AT the surface (not above, not below)          │
    └────────────────────────────────────────────────────────┘

GRAVITATIONAL POTENTIAL ENERGY:
    ┌────────────────────────────────────────────────────────┐
    │  V(r) = −GMEm/r  (reference: V=0 at infinity)         │
    │  Near surface: ΔV = mgh  (approximation, h ≪ RE)      │
    │  For system of particles: V = −Σ(Gmᵢmⱼ/rᵢⱼ) (pairs)  │
    └────────────────────────────────────────────────────────┘

ESCAPE SPEED:
    ┌────────────────────────────────────────────────────────┐
    │  vₑ = √(2GME/RE) = √(2g₀RE) ≈ 11.2 km s⁻¹            │
    │  Independent of mass of projectile and direction       │
    │  Moon's vₑ ≈ 2.3 km s⁻¹ (no atmosphere)              │
    └────────────────────────────────────────────────────────┘

SATELLITES (circular orbit at height h):
    ┌────────────────────────────────────────────────────────┐
    │  Orbital speed:  V = √(GME/(RE+h))                    │
    │  Surface (h≈0): V₀ = √(g₀RE) ≈ 7.9 km s⁻¹            │
    │  Time period:   T = 2π(RE+h)^(3/2) / √(GME)          │
    │  Close orbit:   T₀ = 2π√(RE/g₀) ≈ 85 min             │
    │  Geostationary: T = 24 h;  h ≈ 36,000 km; equatorial  │
    └────────────────────────────────────────────────────────┘

SATELLITE ENERGY:
    ┌────────────────────────────────────────────────────────┐
    │  KE = +GMEm / 2(RE+h)  →  POSITIVE                    │
    │  PE = −GMEm /  (RE+h)  →  NEGATIVE                    │
    │  E  = −GMEm / 2(RE+h)  →  NEGATIVE (bound)            │
    │  Relationships:  |PE| = 2×KE;  E = −KE;  E = PE/2     │
    └────────────────────────────────────────────────────────┘
```

---

## 📊 Speed Comparison — Important Values

```
─────────────────────────────────────────────────────────────────
ORBITAL SPEED (low Earth orbit):   V₀ = √(gRE)  ≈ 7.9 km s⁻¹
ESCAPE SPEED (from surface):       vₑ = √(2gRE) ≈ 11.2 km s⁻¹
RATIO:                             vₑ/V₀ = √2 ≈ 1.414
─────────────────────────────────────────────────────────────────
Moon's escape speed:               ≈ 2.3 km s⁻¹
Mars' escape speed:                ≈ 5.0 km s⁻¹
Jupiter's escape speed:            ≈ 59.5 km s⁻¹
─────────────────────────────────────────────────────────────────
```

---

## ⚠️ Critical Distinctions — High-Yield Exam Traps

```
KEPLER'S LAWS TRAPS:
  ✓ Law of areas holds for ANY central force, not just gravity
  ✓ T² ∝ a³: the constant (4π²/GMs) is the SAME for all planets
    around the SAME star (different for different stars)
  ✓ Orbits are ELLIPSES, not circles (circle is special case a=b)
  ✓ Sun is at ONE FOCUS — not the centre — of the ellipse
  ✓ Planet is FASTER at perihelion, SLOWER at aphelion

GRAVITATIONAL POTENTIAL ENERGY TRAPS:
  ✓ V = −GMm/r is NEGATIVE for all finite r (attractive force)
  ✓ V increases (becomes less negative) as r increases
  ✓ Near surface: mgh is only an APPROXIMATION (valid for h≪RE)
  ✓ For a system: V = sum over all PAIRS (not all particles)
  ✓ V = 0 is the REFERENCE at infinity — a convention, not a fact

SATELLITE ENERGY TRAPS:
  ✓ Total energy E is ALWAYS NEGATIVE for bound (orbiting) satellite
  ✓ Higher orbit → less negative E → satellite moves SLOWER (not faster!)
  ✓ To increase orbit height: you ADD energy (positive work done)
    but the satellite SLOWS DOWN (KE decreases)
  ✓ |PE| = 2KE (virial theorem for gravity)
  ✓ E = −KE = PE/2 (remember this chain)

g VARIATION TRAPS:
  ✓ g is MAXIMUM at Earth's surface — decreases both up and down
  ✓ Rate of decrease is DIFFERENT above vs below:
    Above: g ∝ 1/(RE+h)² (faster decrease, 2h/RE approx)
    Below: g ∝ (RE−d) (linear decrease, d/RE approx)
  ✓ At centre: g = 0 (all forces cancel)
  ✓ g does NOT depend on mass of the falling object

ESCAPE SPEED TRAPS:
  ✓ Escape speed does NOT depend on mass of the escaping body
  ✓ Escape speed does NOT depend on direction of launch
  ✓ Escape speed DOES depend on height of launch
    (launching from height h: vₑ = √(2GME/(RE+h)) — smaller!)
  ✓ "Escape" means reaching infinity with ZERO speed (minimum case)
    If launched with v > vₑ, it reaches infinity with leftover KE

WEIGHTLESSNESS TRAP:
  ✓ Astronaut feels weightless NOT because gravity is absent
  ✓ Gravity at orbital height (~400 km) is ≈ 8.9 m s⁻² (nearly g₀)
  ✓ Weightlessness = FREE FALL — both astronaut and ship fall toward
    Earth at same rate → no normal force between them
```

---

# 🗺️ MIND MAP 1 — Chapter Overview

```
                    ┌──────────────────────────────────┐
                    │         GRAVITATION               │
                    └────────────────┬─────────────────┘
                                     │
       ┌─────────────┬───────────────┼───────────────┬──────────────┐
       ▼             ▼               ▼               ▼              ▼
┌──────────┐  ┌───────────┐  ┌──────────────┐  ┌──────────┐  ┌───────────┐
│ KEPLER'S  │  │ NEWTON'S  │  │      g       │  │POTENTIAL │  │ SATELLITES│
│   LAWS   │  │  LAW OF   │  │  VARIATIONS  │  │ ENERGY   │  │  & ESCAPE │
└────┬─────┘  │ GRAVITATION│  └──────┬───────┘  └────┬─────┘  └─────┬─────┘
     │        └─────┬─────┘         │               │              │
  1. Orbits:       F = Gm₁m₂/r²  Surface: g₀    V = −GMm/r     Orbital V
  Ellipses        G = 6.67×10⁻¹¹  Height h:     Negative       T² ∝ (R+h)³
                  [M⁻¹L³T⁻²]     g(1−2h/RE)    V=0 at ∞       Escape vₑ
  2. Areas:                        Depth d:      mgh ≈ ΔV       E < 0 (bound)
  ΔA/Δt=const     Superposition   g(1−d/RE)     (near surf.)   KE = |E|
  → L conserved   principle       Centre: g=0                  |PE|=2KE
  3. Periods:
  T² ∝ a³
```

---

# 🗺️ MIND MAP 2 — Kepler's Laws (Detail)

```
                ┌───────────────────────────────────────────────────┐
                │                KEPLER'S LAWS                       │
                └────────────────────┬──────────────────────────────┘
                                     │
         ┌───────────────────────────┼──────────────────────────┐
         ▼                           ▼                           ▼
┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
│    1. LAW OF ORBITS   │  │   2. LAW OF AREAS    │  │  3. LAW OF PERIODS   │
└──────────┬───────────┘  └──────────┬───────────┘  └──────────┬───────────┘
           │                         │                          │
   All planets move in       Line joining planet         T² ∝ a³
   ELLIPTICAL orbits          to Sun sweeps EQUAL        T² = (4π²/GMs)a³
   Sun at ONE FOCUS           AREAS in EQUAL TIME
                                     │                  Constant for ALL
   Perihelion P: closest      Physical basis:           planets around Sun
   Aphelion A: farthest       ΔA/Δt = L/2m             (same star)
                              L = constant                       │
   a = semi-major axis        (central force              Satellite analogue:
   = (rP + rA)/2              → no torque)               T² = (4π²/GME)(R+h)³
                                     │
   b/a = 0.99986               rp·vp = rA·vA
   for Earth → nearly         vp > vA  (faster at
   circular orbit             perihelion)
```

---

# 🗺️ MIND MAP 3 — Variation of g

```
                ┌───────────────────────────────────────────────────┐
                │         VARIATION OF ACCELERATION DUE TO GRAVITY   │
                └────────────────────┬──────────────────────────────┘
                                     │
              ┌──────────────────────┼──────────────────────────┐
              ▼                      ▼                           ▼
    ┌──────────────────┐   ┌──────────────────────┐   ┌───────────────────────┐
    │  AT SURFACE      │   │  ABOVE SURFACE (h)    │   │  BELOW SURFACE (d)    │
    └────────┬─────────┘   └────────────┬─────────┘   └──────────┬────────────┘
             │                          │                         │
    g₀ = GME/RE²           g(h) = GME/(RE+h)²         g(d) = g₀(1−d/RE)
    ≈ 9.8 m s⁻²            ≈ g₀(1−2h/RE) [h≪RE]
             │                          │                         │
    MAXIMUM g            Decreases as 1/(RE+h)²      Decreases linearly with d
    at surface           Faster decrease than below  g=0 at Earth's centre (d=RE)
             │                          │                         │
             └──────────────┬───────────┘                        │
                            ▼                                     │
                   g DECREASES going UP                           │
                   g DECREASES going DOWN ←────────────────────────┘
                   g is MAXIMUM at the SURFACE

GRAPH SHAPE:
    g
    ↑
 g₀─┤---------○ ← MAXIMUM here (surface)
    │       /    \
    │      /      \______________  (1/r² outside)
    │     / (linear             \
    │    /   inside)             \
    │   /                         \
    └──────────────────────────────────→ r
    0     RE                    distance from centre
```

---

# 🗺️ MIND MAP 4 — Satellite Mechanics and Energy

```
                ┌─────────────────────────────────────────────────────────┐
                │              EARTH SATELLITES                            │
                └──────────────────────┬──────────────────────────────────┘
                                       │
         ┌─────────────────────────────┼──────────────────────────────────┐
         ▼                             ▼                                   ▼
┌──────────────────────┐   ┌────────────────────────┐   ┌───────────────────────────┐
│   ORBITAL SPEED      │   │    TIME PERIOD          │   │   ENERGY OF SATELLITE     │
└──────────┬───────────┘   └──────────┬─────────────┘   └────────────┬──────────────┘
           │                          │                               │
  V = √(GME/(RE+h))         T = 2π(RE+h)^(3/2)          KE = +GMEm/2(RE+h)
  V decreases as h↑         /√(GME)                      PE = −GMEm/(RE+h)
                             T increases as h↑             E = −GMEm/2(RE+h)
  h=0: V₀ = √(gRE)                  │                               │
  ≈ 7.9 km s⁻¹              T₀ ≈ 85 min                 E is NEGATIVE (bound)
                             (h≈0 orbit)                  |PE| = 2×KE
           │                          │                   E = −KE = PE/2
  vₑ = √2 × V₀              Geostationary:                        │
  escape speed               T = 24 h                   Higher orbit:
  ≈ 11.2 km s⁻¹             h ≈ 36,000 km               Less negative E
                             Equatorial                   Slower speed (↓V)
                             Appears stationary           Larger T
                             from Earth                           │
                                                         To raise orbit:
                                                         Supply energy ΔE > 0
                                                         KE decreases
                                                         PE increases by 2ΔE
```

---

# 🗺️ MIND MAP 5 — Newton's Law and Gravitational Potential

```
                ┌──────────────────────────────────────────────────────┐
                │       UNIVERSAL LAW OF GRAVITATION                    │
                └─────────────────────────────────────────────────────┐
                                     │                                │
              ┌──────────────────────┼──────────────────┐            │
              ▼                      ▼                   ▼            ▼
     ┌─────────────────┐  ┌─────────────────┐  ┌───────────────┐  ┌────────────┐
     │  THE LAW         │  │  GRAVITATIONAL   │  │  SHELL        │  │ CAVENDISH  │
     │                  │  │  POTENTIAL       │  │  THEOREMS     │  │ EXPERIMENT │
     └────────┬─────────┘  └────────┬────────┘  └───────┬───────┘  └─────┬──────┘
              │                     │                    │                │
   F = Gm₁m₂/r²         U = −GME/r  (J kg⁻¹)   Outside shell:   G = 6.67×10⁻¹¹
   Attractive            V = −GMEm/r (J)         F = as if mass   N m² kg⁻²
   Vector sum            V < 0 always            at centre        [M⁻¹L³T⁻²]
   (superposition)       V=0 at infinity                  │
              │          ΔV = mgh (approx,        Inside shell:    Torsion balance
   G measured            h≪RE)                   F = 0            apparatus
   by Cavendish          │                        (forces cancel)  θ ∝ F → G
              │          Potential at             │
   3600 = (RM/RE)²       2 points:                Solid sphere:
   confirmed             V₂−V₁ = work done        Inside: F ∝ r
   inverse-square        per unit mass             (linear restoring)
   law                   (path-independent)        → SHM in tunnel
```

---

## 🏆 Last-Minute Exam Checklist

```
Before answering any Gravitation problem:

□ Is it Kepler's 3rd law? → Use T²/a³ = constant; T in same units, a in same units
□ Is it an orbital speed/period question? → Use V=√(GM/(R+h)); T²∝(R+h)³
□ Finding g at height h? → g(h) = g₀/(1+h/RE)² ≈ g₀(1−2h/RE) for h≪RE
□ Finding g at depth d? → g(d) = g₀(1−d/RE); at centre g=0
□ Escape speed? → vₑ = √(2gRE) = √2 × V₀ (close orbit); check if launched from height
□ Gravitational PE? → V = −GMm/r; always negative; V=0 at ∞
□ Satellite energy? → E = −KE; |PE| = 2KE; E = PE/2; all these are equivalent
□ Binding energy? → = |E| = GMEm/2(RE+h); energy to remove satellite to ∞
□ Change in orbit? → ΔE = +3.13×10⁹ J (for 2RE→4RE example); always add energy
   to raise orbit, but satellite SLOWS DOWN
□ Shell theorem? → Outside: treat as point mass at centre; Inside uniform shell: F=0
□ Weightlessness? → Free fall, NOT zero gravity; g ≈ 8.9 m s⁻² at ISS orbit
□ Moon has no atmosphere? → Escape speed (2.3 km s⁻¹) ≈ thermal speed of gas → escapes
□ Dimensions: G → [M⁻¹L³T⁻²]; g → [LT⁻²]; GPE → [ML²T⁻²]; potential → [L²T⁻²]
□ Historical: Tycho Brahe (data) → Kepler (laws) → Newton (explanation)
              Cavendish (measured G) → "weighed the Earth"
```

---

## 📌 Common Formula Errors to Avoid

| Wrong Formula | Correct Formula | Situation |
|---|---|---|
| g(h) = g(1 − h/RE) | g(h) = g(1 − **2**h/RE) | Height above surface (binomial approx) |
| V = −Gm/r | V = −G**M_E**m/r | Satellite PE (needs both masses) |
| vₑ = √(GM/R) | vₑ = √(**2**GM/R) | Factor of 2 from energy conservation |
| E = KE + PE = 0 | E = **−**GMEm/2(RE+h) ≠ 0 | Total energy is NOT zero! |
| T₀ = 2π√(g/RE) | T₀ = 2π√(**RE**/g) | Close-orbit time period |
| g = GME/r² everywhere | g(d) = g(1−d/RE) for r < RE | Different formula inside Earth |

---

*End of Revision Notes + Mind Maps — Physics Ch. 7*