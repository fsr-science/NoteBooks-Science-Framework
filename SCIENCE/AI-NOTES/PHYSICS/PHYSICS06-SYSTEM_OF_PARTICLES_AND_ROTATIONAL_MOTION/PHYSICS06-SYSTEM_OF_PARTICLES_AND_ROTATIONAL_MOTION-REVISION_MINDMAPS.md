# CHAPTER 6 — RAPID REVISION + MIND MAPS

### Systems of Particles and Rotational Motion

---

# ⚡ ONE-PAGE RAPID REVISION SHEET

## 🔢 Key Definitions — Absolute Must-Memorise

| Quantity | Definition | Formula | SI Unit |
|---|---|---|---|
| **Centre of Mass** | Mass-weighted mean position of a system | **R** = Σmᵢ**r**ᵢ/M | m |
| **Torque** | Rotational analogue of force; τ = r × F | τ = rF sinθ | N m |
| **Angular Momentum** | Rotational analogue of linear momentum; l = r × p | l = rp sinθ | kg m² s⁻¹ |
| **Moment of Inertia** | Rotational analogue of mass; resists angular acceleration | I = Σmᵢrᵢ² | kg m² |
| **Angular Velocity** | Rate of change of angular displacement | ω = dθ/dt | rad s⁻¹ |
| **Angular Acceleration** | Rate of change of angular velocity | α = dω/dt | rad s⁻² |
| **Radius of Gyration** | Distance at which whole mass would give same I | k = √(I/M) | m |
| **Couple** | Two equal, opposite, non-collinear forces | τ = F × d (perpendicular separation) | N m |

---

## 📐 Essential Formulae — Must Know Cold

```
CENTRE OF MASS:
    ┌────────────────────────────────────────────────────────┐
    │  X = Σmᵢxᵢ/M;   R = Σmᵢrᵢ/M  (discrete)            │
    │  R = (1/M)∫r dm  (continuous)                        │
    │  COM of symmetric uniform body = geometric centre     │
    │  MA = F_ext  (COM moves as single particle)           │
    │  P = MV;  if F_ext=0: P = constant                   │
    └────────────────────────────────────────────────────────┘

CROSS PRODUCT:
    ┌────────────────────────────────────────────────────────┐
    │  |a×b| = ab sinθ  (vector, ⊥ to both a and b)        │
    │  a×b = −b×a  (NOT commutative)                       │
    │  î×ĵ=k̂; ĵ×k̂=î; k̂×î=ĵ  (cyclic order → +ve)        │
    │  a×a = 0  (parallel/anti-parallel → zero)            │
    └────────────────────────────────────────────────────────┘

TORQUE AND ANGULAR MOMENTUM:
    ┌────────────────────────────────────────────────────────┐
    │  τ = r×F;  |τ| = rF sinθ = r⊥F = rF⊥   [ML²T⁻²]   │
    │  l = r×p;  |l| = rp sinθ = r⊥p = rp⊥   [ML²T⁻¹]   │
    │  dl/dt = τ  (single particle)                         │
    │  dL/dt = τ_ext  (system);  τ_ext=0 → L = constant   │
    └────────────────────────────────────────────────────────┘

MOMENT OF INERTIA (standard results):
    ┌────────────────────────────────────────────────────────┐
    │  Ring (centre, ⊥ plane): I = MR²                     │
    │  Ring (diameter):        I = MR²/2                   │
    │  Disc (centre, ⊥ plane): I = MR²/2                  │
    │  Disc (diameter):        I = MR²/4                   │
    │  Solid sphere (diameter): I = 2MR²/5                 │
    │  Hollow cylinder (axis): I = MR²                     │
    │  Solid cylinder (axis):  I = MR²/2                   │
    │  Thin rod (midpoint ⊥): I = ML²/12                   │
    └────────────────────────────────────────────────────────┘

ROTATIONAL KINEMATICS (uniform α):
    ┌────────────────────────────────────────────────────────┐
    │  ω = ω₀ + αt           [linear: v = u + at]          │
    │  θ = ω₀t + ½αt²        [linear: s = ut + ½at²]      │
    │  ω² = ω₀² + 2αθ        [linear: v² = u² + 2as]      │
    └────────────────────────────────────────────────────────┘

ROTATIONAL DYNAMICS:
    ┌────────────────────────────────────────────────────────┐
    │  v = ωr  (linear speed of particle at distance r)     │
    │  v = ω×r  (vector form)                               │
    │  τ = Iα  (Newton's 2nd law for rotation)              │
    │  K_rot = ½Iω²                                         │
    │  L = Iω  (for symmetric body about symmetry axis)     │
    │  P = τω  (power in rotational motion)                 │
    │  W = τ·dθ  (work by torque)                           │
    │  τ_ext = 0 → Iω = constant  (conservation of L)      │
    └────────────────────────────────────────────────────────┘

EQUILIBRIUM:
    ┌────────────────────────────────────────────────────────┐
    │  ΣF = 0  AND  Στ = 0  (mechanical equilibrium)        │
    │  Lever: F₁d₁ = F₂d₂;  M.A. = F₁/F₂ = d₂/d₁         │
    │  CG = COM for small bodies (uniform g)                │
    └────────────────────────────────────────────────────────┘
```

---

## 📊 The Grand Analogy Table — Rotation ↔ Translation

```
─────────────────────────────────────────────────────────────────
LINEAR MOTION              ROTATIONAL MOTION (fixed axis)
─────────────────────────────────────────────────────────────────
Displacement:  x           Angular displacement:  θ
Velocity:      v = dx/dt   Angular velocity:      ω = dθ/dt
Acceleration:  a = dv/dt   Angular acceleration:  α = dω/dt
Mass:          M           Moment of Inertia:     I = Σmᵢrᵢ²
Force:         F = Ma      Torque:                τ = Iα
KE:            ½Mv²        Rotational KE:         ½Iω²
Momentum:      p = Mv      Angular momentum:      L = Iω
Work:          F·ds        Work:                  τ·dθ
Power:         F·v         Power:                 τ·ω
Newton's 2nd:  F = dp/dt   Rotational N2:         τ = dL/dt
Conservation:  F=0 → p=const  Conservation: τ=0 → L=const
─────────────────────────────────────────────────────────────────
```

---

## ⚠️ Critical Distinctions — High-Yield Exam Traps

```
CENTRE OF MASS TRAPS:
  ✓ COM can lie OUTSIDE the body (ring, hollow sphere, L-shape)
  ✓ For non-uniform bodies, COM ≠ geometric centre
  ✓ Internal forces (collision, explosion) do NOT affect COM motion
  ✓ If F_ext = 0: COM moves with CONSTANT velocity (even if parts
    are colliding, rotating, exploding internally)
  ✓ For a binary star system: COM moves in straight line; stars
    orbit the COM in circles

TORQUE TRAPS:
  ✓ Torque and Work: SAME dimensions [ML²T⁻²] = N m
    BUT torque is a VECTOR, work is a SCALAR → different quantities
  ✓ τ = 0 when force passes through the pivot point (r⊥ = 0)
  ✓ A couple has ZERO net force but NON-ZERO torque

MOMENT OF INERTIA TRAPS:
  ✓ I depends on the AXIS — same body can have different I values
  ✓ Hollow cylinder (ring) I = MR² > Solid cylinder I = MR²/2
    > Solid sphere I = 2MR²/5 (less mass near periphery)
  ✓ Ring diameter I = MR²/2 (NOT MR²) — perpendicular axis theorem

ANGULAR MOMENTUM TRAPS:
  ✓ A particle moving in a STRAIGHT LINE can have angular momentum
    about a point not on its path (L = mvr⊥ ≠ 0 if r⊥ ≠ 0)
  ✓ L and ω are NOT always parallel (only for symmetric bodies
    about their symmetry axis)
  ✓ When I decreases (arms pulled in): ω increases BUT KE ALSO
    increases (energy from muscles); L = Iω = constant

EQUILIBRIUM TRAPS:
  ✓ Translational equilibrium (ΣF=0) does NOT guarantee rotational
    equilibrium (Στ=0) — a couple proves this!
  ✓ Rotational equilibrium condition is origin-INDEPENDENT only
    when translational equilibrium also holds
  ✓ Centre of gravity ≠ Centre of mass for large bodies in
    non-uniform gravitational fields
```

---

## 🔑 Special Results — High-Yield

| Result | Formula/Value |
|---|---|
| For equal masses, COM is at midpoint | X = (x₁+x₂)/2 |
| COM velocity = total momentum / total mass | **V** = **P**/M |
| Linear speed of particle at distance r from axis | v = ωr |
| For symmetric body rotating about symmetry axis | L = Iω (vector along axis) |
| Conservation of L | I₁ω₁ = I₂ω₂ (when τ_ext = 0) |
| Kinetic energy and angular momentum relation | K = L²/(2I) |
| Mechanical advantage of lever | M.A. = d₂/d₁ = F₁/F₂ |
| Power in rotation | P = τω |
| Work done by torque | W = τ × angular displacement |

---

## ⚡ Dimensional Formulae

```
Torque / Work / Energy         [ML²T⁻²]   →  Note: same dimensions!
Angular Momentum               [ML²T⁻¹]
Moment of Inertia              [ML²]
Angular Velocity               [T⁻¹]
Angular Acceleration           [T⁻²]
Power                          [ML²T⁻³]
```

---

## 🔁 Decision Chart — Which Equation to Use?

```
PROBLEM TYPE?
─────────────────────────────────────────────────────────
Finding COM position?
    → R = Σmᵢrᵢ/M  (discrete)
    → Use symmetry for uniform bodies (COM = geometric centre)
    → For composite body: treat sub-parts as point masses at
      their individual COMs

Finding torque?
    → τ = r × F;  |τ| = rF sinθ = r⊥ F = r F⊥
    → For equilibrium: Στ = 0 (choose origin wisely to
      eliminate unknown reaction forces)

Rotational dynamics?
    → τ = Iα (use if τ and α are involved)
    → L = Iω and dL/dt = τ (if momentum given)
    → K = ½Iω² (if energy involved)

Is angular momentum conserved?
    → Check: is τ_ext = 0 about the axis?
    → If yes: I₁ω₁ = I₂ω₂
    → Energy may NOT be conserved (muscles can do work)

Rotational kinematics?
    → Use ω=ω₀+αt, θ=ω₀t+½αt², ω²=ω₀²+2αθ
    → Only for CONSTANT α

Equilibrium of rigid body?
    → Apply ΣFₓ = 0, ΣFᵧ = 0, Στ = 0
    → Choose pivot at a point to eliminate unknown forces
```

---

## ⭐ Key Statements from Chapter (NCERT Direct Quotes – Paraphrased)

1. **COM motion:** The centre of mass of a system moves as if all mass is concentrated at it and all external forces act at that point. Internal forces do not affect COM motion.

2. **Angular momentum conservation:** If the total external torque on a system is zero, the total angular momentum remains constant.

3. **Mechanical equilibrium:** A rigid body is in mechanical equilibrium when both its linear momentum and angular momentum are not changing — i.e., ΣF = 0 AND Στ = 0.

4. **Moment of inertia:** Unlike mass, the moment of inertia of a body is not fixed — it depends on which axis rotation occurs about.

5. **CG = COM:** In a uniform gravitational field (g uniform), the centre of gravity coincides with the centre of mass.

---

# 🗺️ MIND MAP 1 — Chapter Overview

```
                    ┌────────────────────────────────────────────────────┐
                    │    SYSTEMS OF PARTICLES & ROTATIONAL MOTION         │
                    └─────────────────────────┬──────────────────────────┘
                                              │
              ┌───────────────────────────────┼──────────────────────────┐
              │                               │                          │
              ▼                               ▼                          ▼
    ┌──────────────────┐          ┌───────────────────┐      ┌──────────────────────┐
    │   CENTRE OF MASS  │          │   ROTATIONAL MATH  │      │  ROTATIONAL DYNAMICS  │
    └─────────┬────────┘          └────────┬──────────┘      └──────────┬───────────┘
              │                            │                             │
    R = Σmᵢrᵢ/M              Cross Product a×b                  τ = Iα
    MA = F_ext               |a×b| = ab sinθ                   L = Iω
    P = MV                   î×ĵ = k̂ (cyclic)                K = ½Iω²
    F_ext=0 → L = const      τ = r×F                          P = τω
                             l = r×p                           Iω = const (no τ_ext)
                                              │
                    ┌──────────────────────── │ ─────────────────────────────┐
                    │                         │                              │
                    ▼                         ▼                              ▼
         ┌────────────────────┐   ┌────────────────────┐       ┌────────────────────────┐
         │     EQUILIBRIUM     │   │   MOMENT OF INERTIA │       │  ROTATIONAL KINEMATICS  │
         └──────────┬─────────┘   └──────────┬─────────┘       └────────────┬───────────┘
                    │                        │                               │
              ΣF = 0                   I = Σmᵢrᵢ²                  ω = ω₀ + αt
              Στ = 0                   Ring:  MR²                   θ = ω₀t + ½αt²
              Lever: F₁d₁=F₂d₂        Disc:  MR²/2                 ω² = ω₀²+2αθ
              CG = COM (uniform g)     Sphere: 2MR²/5
```

---

# 🗺️ MIND MAP 2 — Centre of Mass

```
                        ┌─────────────────────────────────────────┐
                        │           CENTRE OF MASS (COM)            │
                        └───────────────────┬─────────────────────┘
                                            │
              ┌────────────────────────────┬┴─────────────────────────────┐
              │                            │                              │
              ▼                            ▼                              ▼
   ┌───────────────────────┐  ┌──────────────────────┐  ┌────────────────────────────┐
   │  LOCATION/CALCULATION  │  │  PHYSICAL MEANING     │  │  COM MOTION                │
   └──────────┬────────────┘  └──────────┬───────────┘  └─────────────┬──────────────┘
              │                          │                             │
   R=Σmᵢrᵢ/M              "Mass-weighted             MA = F_ext
   Symmetric body:         average position"          Only external forces
   COM = geometric         Can lie outside            matter
   centre                  the body                   Internal forces cancel
              │                                                │
   Regular shapes:                                   F_ext = 0:
   Ring → centre (outside ring)                      COM moves uniformly
   Disc → centre                                     (straight line, const speed)
   Rod → midpoint
   Triangle → centroid                    Example:
   L-shape → use sub-parts                Projectile explosion →
                                          COM continues same parabola
                                          Radioactive decay →
                                          COM continues uniformly
```

---

# 🗺️ MIND MAP 3 — Torque and Angular Momentum

```
                  ┌─────────────────────────────────────────────────────────┐
                  │         TORQUE (τ) and ANGULAR MOMENTUM (L)              │
                  └────────────────────────────┬────────────────────────────┘
                                               │
                      ┌────────────────────────┼─────────────────────────┐
                      │                                                   │
                      ▼                                                   ▼
            ┌─────────────────────────┐                    ┌────────────────────────────┐
            │   TORQUE  τ = r × F      │                    │  ANGULAR MOMENTUM  l = r×p  │
            └──────────┬──────────────┘                    └────────────┬───────────────┘
                       │                                                │
            |τ| = rF sinθ = r⊥F                           |l| = rp sinθ = r⊥p
            Unit: N m = [ML²T⁻²]                          Unit: kg m²s⁻¹ = [ML²T⁻¹]
            ⊥ to plane of r and F                         ⊥ to plane of r and p
            Right-hand rule                                Right-hand rule
                       │                                                │
            WHEN τ = 0?                                    WHEN l = 0?
            r = 0 (at pivot)                               p = 0 (at rest)
            F = 0                                          r = 0 (at origin)
            θ = 0° or 180°                                 θ = 0° or 180°
            (F along r)                                    (p along r)
                       │                                                │
            τ = Iα  (rotation dynamics)                    dl/dt = τ  (for particle)
                                                           dL/dt = τ_ext  (for system)
                                                           τ_ext = 0  →  L = constant ✓
                                                                │
                                                    CONSERVATION EXAMPLES:
                                                    Skater pulling arms: Iω = const
                                                    Diver tucking: ω increases
                                                    Earth's orbital motion
                                                    Swivel chair experiment
```

---

# 🗺️ MIND MAP 4 — Moment of Inertia

```
                      ┌──────────────────────────────────────────────┐
                      │          MOMENT OF INERTIA (I = Σmᵢrᵢ²)       │
                      └──────────────────────┬───────────────────────┘
                                             │
              ┌──────────────────────────────┼──────────────────────────────┐
              │                              │                              │
              ▼                              ▼                              ▼
   ┌──────────────────────┐    ┌──────────────────────┐    ┌──────────────────────────┐
   │  WHAT IT DEPENDS ON   │    │  STANDARD VALUES      │    │  ROLE IN PHYSICS          │
   └──────────┬───────────┘    └──────────┬───────────┘    └────────────┬─────────────┘
              │                           │                             │
   Mass M                        Ring (⊥axis):  MR²            K_rot = ½Iω²
   Shape/geometry                Disc (⊥axis):  MR²/2          τ = Iα
   Mass distribution             Solid cyl (axis): MR²/2        L = Iω  (fixed axis)
   POSITION of axis              Hollow cyl (axis): MR²         I_final×ω_f = I_init×ω_i
   ORIENTATION of axis           Solid sphere (dia): 2MR²/5             (if τ=0)
              │                  Thin rod (midpt ⊥): ML²/12
   NOT a fixed property!
   SAME body → different                       Ordering (same M, R):
   I for different axes!               Ring > Hollow cyl = Ring = MR²
                                       > Solid cyl = Disc = MR²/2
                                       > Solid sphere = 2MR²/5
                                       (more concentrated → smaller I)
```

---

# 🗺️ MIND MAP 5 — Equilibrium of a Rigid Body

```
                ┌───────────────────────────────────────────────────┐
                │         EQUILIBRIUM OF A RIGID BODY                │
                └────────────────────────┬──────────────────────────┘
                                         │
                   ┌─────────────────────┼─────────────────────┐
                   │                                            │
                   ▼                                            ▼
        ┌─────────────────────────┐               ┌───────────────────────────┐
        │  TRANSLATIONAL EQUIL.    │               │  ROTATIONAL EQUILIBRIUM    │
        │       ΣF = 0             │               │        Στ = 0              │
        └────────────┬────────────┘               └────────────┬──────────────┘
                     │                                          │
             Net force zero                           Net torque zero
             (no linear accel)                        (no angular accel)
                                                               │
                                                    Origin-independent ONLY
                                                    when ΣF = 0 also holds
                                                               │
                              ┌────────────────┬───────────────┴───────────────┐
                              │                │                               │
                              ▼                ▼                               ▼
                      ┌───────────┐    ┌─────────────┐               ┌────────────────┐
                      │   LEVER    │    │    COUPLE    │               │  CENTRE OF      │
                      │(Principle  │    │ (τ ≠ 0,     │               │  GRAVITY (CG)   │
                      │of Moments) │    │  F_net = 0) │               │  = COM (uniform │
                      └───────────┘    └─────────────┘               │  gravity)       │
                                                                      └────────────────┘
                F₁d₁ = F₂d₂
                M.A. = d₂/d₁                  Opens lid of bottle
                                               Compass needle in B-field
```

---

## 🏆 Last-Minute Exam Checklist

```
Before answering any Rotational Motion problem:

□ Is it asking about COM? → Use R = Σmᵢrᵢ/M; check symmetry
□ Cross product needed? → Use determinant; check sign (cyclic order)
□ Which body? → Match to I formula from the table
□ Is angular momentum conserved? → Check τ_ext = 0 first
□ Is it a dynamics problem? → Use τ = Iα (not F = ma!)
□ Is it a kinematics problem (uniform α)? → Use rotational equations
□ Equilibrium problem? → Apply BOTH ΣF = 0 AND Στ = 0
□ Where to take torques? → At the unknown reaction force to eliminate it
□ Lever/seesaw? → d₁F₁ = d₂F₂; M.A. = d₂/d₁
□ Compare I values? → Ring > Disc = Cyl > Sphere (same M, R)
□ Does KE change when L is conserved? → YES! K = L²/(2I)
   Reducing I → K increases (from muscular work)
□ Is the body symmetric about the rotation axis? → L = Iω k̂
□ Dimensions check: torque [ML²T⁻²]; angular momentum [ML²T⁻¹]
```

---

*End of Revision Notes + Mind Maps — Physics Ch. 6*