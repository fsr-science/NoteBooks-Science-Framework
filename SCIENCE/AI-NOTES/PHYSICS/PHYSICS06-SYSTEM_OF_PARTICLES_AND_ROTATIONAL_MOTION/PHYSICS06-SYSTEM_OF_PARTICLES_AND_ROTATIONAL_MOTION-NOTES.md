# CHAPTER 6: SYSTEMS OF PARTICLES AND ROTATIONAL MOTION

### Complete Study Notes | Board · NEET · JEE Layered

---

## 🗺️ CONCEPT ROADMAP

```
[Chapter 5 — Work, Energy, Power: F on a PARTICLE]
        ↓
[Real bodies are EXTENDED — systems of particles]
        ↓
[CENTRE OF MASS — key concept for extended bodies]
    X = Σmᵢxᵢ / M  (mass-weighted average position)
        ↓
[Motion of COM: MA = F_ext — behaves like a single particle]
        ↓
[LINEAR MOMENTUM of system: P = MV (conserved if F_ext = 0)]
        ↓
[VECTOR (CROSS) PRODUCT of two vectors — new mathematical tool]
    c = a × b; |c| = ab sinθ; direction: right-hand rule
        ↓
[ANGULAR VELOCITY ω and its relation to linear velocity]
    v = ω × r   (rotational analogue of v in translation)
        ↓
[TORQUE τ = r × F — rotational analogue of force]
[ANGULAR MOMENTUM L = r × p — rotational analogue of momentum]
        ↓
[dL/dt = τ_ext   and   Conservation of Angular Momentum]
        ↓
[EQUILIBRIUM — both ΣF = 0 AND Στ = 0]
    Centre of Gravity; Lever (Principle of Moments)
        ↓
[MOMENT OF INERTIA I = Σmᵢrᵢ² — rotational analogue of mass]
    K_rot = ½Iω²
        ↓
[KINEMATICS of rotation (analogues of v = u + at, etc.)]
        ↓
[DYNAMICS: τ = Iα — rotational analogue of F = ma]
[Angular Momentum L = Iω;  Conservation: Iω = constant]
```

---

## SECTION 1 — INTRODUCTION: RIGID BODIES AND TYPES OF MOTION ⭐

### 1.1 What is a Rigid Body?

> **Rigid body:** A body with a perfectly definite and unchanging shape. The distances between all pairs of particles remain constant, regardless of the forces acting.

No real body is truly rigid; deformations exist but are often negligible (e.g., a steel beam, a flywheel, a wheel of a vehicle).

### 1.2 Types of Motion of a Rigid Body

| Type | Description | Example |
|---|---|---|
| **Pure Translation** | All particles have the same velocity at every instant | Block sliding down inclined plane |
| **Pure Rotation** | Body rotates about a fixed axis; particles move in circles | Ceiling fan, Potter's wheel |
| **Rolling Motion** | Translation + Rotation combined | Cylinder rolling down an incline |

> 🔑 **Key principle:** In **pure translation**, every particle has the same velocity. In **pure rotation** about a fixed axis, every particle has the **same angular velocity** ω.

### 1.3 Rotation About a Fixed Axis

- Every particle moves in a **circle** lying in a plane **perpendicular** to the fixed axis, with its centre on the axis.
- A particle at perpendicular distance r from the axis traces a circle of radius r.
- Particles **on the axis** have r = 0, so v = ωr = 0 → they remain **stationary**.
- The axis of a spinning top is **not fixed** (it precesses) — this is a more general rotation; our chapter mainly deals with fixed-axis rotation.

---

## SECTION 2 — CENTRE OF MASS (COM) ⭐⭐⭐

### 2.1 Definition (Two-Particle System)

For two particles of masses m₁ and m₂ at positions x₁ and x₂ along the x-axis:

$$\boxed{X = \frac{m_1x_1 + m_2x_2}{m_1 + m_2}} \quad \text{...(6.1)}$$

- If m₁ = m₂: X = (x₁ + x₂)/2 — COM lies exactly **midway** between equal masses.
- X is the **mass-weighted mean** of x₁ and x₂.

### 2.2 General Case — n Particles

$$\boxed{X = \frac{\sum m_i x_i}{M}, \quad Y = \frac{\sum m_i y_i}{M}, \quad Z = \frac{\sum m_i z_i}{M}} \quad \text{...(6.4a-c)}$$

where M = Σmᵢ is the **total mass**.

**In vector form:**

$$\boxed{\mathbf{R} = \frac{\sum m_i \mathbf{r}_i}{M} = \frac{\sum m_i \mathbf{r}_i}{M}} \quad \text{...(6.4d)}$$

> 🔑 If the origin is chosen **at the COM**, then Σmᵢ**r**ᵢ = **0**.

### 2.3 Continuous Mass Distribution

For a rigid body treated as a continuous distribution of mass:

$$X = \frac{1}{M}\int x\,dm, \quad Y = \frac{1}{M}\int y\,dm, \quad Z = \frac{1}{M}\int z\,dm \quad \text{...(6.5a)}$$

**For uniform, symmetric bodies:** The COM coincides with the **geometric centre** (by symmetry — for every element dm at r, there is an element dm at −r, so the integrals vanish).

### 2.4 COM of Regular Shapes (Important Table)

| Body | COM Location |
|---|---|
| Uniform thin rod | Midpoint (geometric centre) |
| Uniform ring of radius R | Centre of the ring |
| Uniform disc of radius R | Centre of the disc |
| Uniform sphere of radius R | Centre of the sphere |
| Uniform triangular lamina | Centroid (intersection of medians) |
| L-shaped lamina (uniform) | On line of symmetry, by mass-weighted average of sub-shapes |

### 2.5 Solved Examples from NCERT

**Example 6.1 — Three unequal masses at vertices of equilateral triangle (side 0.5 m)**

Masses: m₁ = 100 g at O(0,0), m₂ = 150 g at A(0.5, 0), m₃ = 200 g at B(0.25, 0.25√3)

$$X = \frac{100(0) + 150(0.5) + 200(0.25)}{450} = \frac{75+50}{450} = \frac{125}{450} = \frac{5}{18} \text{ m}$$

$$Y = \frac{100(0) + 150(0) + 200(0.25\sqrt{3})}{450} = \frac{50\sqrt{3}}{450} = \frac{\sqrt{3}}{9} = \frac{1}{3\sqrt{3}} \text{ m}$$

> Note: COM is NOT the geometric centre of the triangle (unequal masses).

**Example 6.3 — L-shaped uniform lamina (3 kg, made of 3 unit squares)**

COM of each unit square is at its geometric centre:
- C₁ = (1/2, 1/2), C₂ = (3/2, 1/2), C₃ = (1/2, 3/2); each of mass 1 kg.

$$X = \frac{1(1/2) + 1(3/2) + 1(1/2)}{3} = \frac{5/2}{3} = \frac{5}{6} \text{ m}$$

$$Y = \frac{1(1/2) + 1(1/2) + 1(3/2)}{3} = \frac{5}{6} \text{ m}$$

COM lies on the line of symmetry of the L at (5/6, 5/6).

---

## SECTION 3 — MOTION OF THE CENTRE OF MASS ⭐⭐⭐

### 3.1 Derivation

Differentiating **R** = (Σmᵢ**r**ᵢ)/M twice with respect to time:

First derivative: M**V** = Σmᵢ**v**ᵢ = **P** (total linear momentum) ...(6.8)

Second derivative: M**A** = Σmᵢ**a**ᵢ = Σ**F**ᵢ

Since internal forces cancel in pairs (Newton's 3rd law):

$$\boxed{M\mathbf{A} = \mathbf{F}_{ext}} \quad \text{...(6.11)}$$

> **Critical Statement:** *The centre of mass of a system of particles moves as if all the mass of the system were concentrated at the COM and all external forces were applied at that point.*

### 3.2 Implications

- To find the translational motion of a system (including rotating/internal-moving bodies), we need only the **external forces** — no knowledge of internal forces required.
- **Example (Projectile explosion):** A projectile follows a parabolic path. If it explodes mid-air, the internal explosion forces are all internal. The COM continues on the **same parabola** — gravity (external) is unchanged.

### 3.3 Total Linear Momentum

$$\mathbf{P} = M\mathbf{V} \quad \text{...(6.15)}$$

$$\frac{d\mathbf{P}}{dt} = \mathbf{F}_{ext} \quad \text{...(6.17)}$$

**Conservation of Linear Momentum:** If **F**_ext = **0**, then **P** = constant. ...(6.18a)

This means: when total external force = 0, the **velocity of the COM remains constant** (uniform straight-line motion).

> 🔑 **Binary stars, radioactive decay, explosions** — the COM continues uniformly; individual fragments deviate, but their COM tracks the original trajectory.

---

## SECTION 4 — VECTOR (CROSS) PRODUCT OF TWO VECTORS ⭐⭐

### 4.1 Definition

The **vector product** (cross product) of **a** and **b** is a vector **c** = **a** × **b** such that:

1. **Magnitude:** |**c**| = ab sinθ (where θ is the angle between **a** and **b**)
2. **Direction:** Perpendicular to the plane of **a** and **b** (right-hand screw rule or right-hand rule)

> **Right-hand rule:** Curl the fingers of the right hand from **a** toward **b** (through the smaller angle); the stretched thumb points in the direction of **a** × **b**.

### 4.2 Key Properties

| Property | Expression |
|---|---|
| **Not commutative** | **a** × **b** = −(**b** × **a**) |
| **Distributive** | **a** × (**b** + **c**) = **a** × **b** + **a** × **c** |
| **Anti-parallel (same direction)** | **a** × **a** = **0** |
| **Perpendicular vectors** | |**a** × **b**| = ab (maximum; sinθ = 1 at θ = 90°) |

**For unit vectors î, ĵ, k̂ (cyclic order is positive):**

$$\hat{i}\times\hat{i} = \hat{j}\times\hat{j} = \hat{k}\times\hat{k} = \mathbf{0}$$

$$\hat{i}\times\hat{j} = \hat{k}, \quad \hat{j}\times\hat{k} = \hat{i}, \quad \hat{k}\times\hat{i} = \hat{j}$$

$$\hat{j}\times\hat{i} = -\hat{k}, \quad \hat{k}\times\hat{j} = -\hat{i}, \quad \hat{i}\times\hat{k} = -\hat{j}$$

> 🔑 **Memory device:** î → ĵ → k̂ → î (cyclic) gives **positive** cross products. Reverse order gives **negative**.

### 4.3 Component Form (Determinant)

$$\mathbf{a}\times\mathbf{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ a_x & a_y & a_z \\ b_x & b_y & b_z \end{vmatrix} = (a_yb_z - a_zb_y)\hat{i} - (a_xb_z - a_zb_x)\hat{j} + (a_xb_y - a_yb_x)\hat{k}$$

### 4.4 Contrast: Dot Product vs Cross Product

| Feature | Scalar (Dot) Product | Vector (Cross) Product |
|---|---|---|
| Result | Scalar | Vector |
| Formula | A·B = AB cosθ | |A×B| = AB sinθ |
| Commutative? | Yes: A·B = B·A | **No**: A×B = −(B×A) |
| Zero when | A ⊥ B (θ = 90°) | **A ∥ B** (θ = 0° or 180°) |
| Max when | A ∥ B (θ = 0°) | **A ⊥ B** (θ = 90°) |
| Physical use | Work, Power | Torque, Angular Momentum |

### 4.5 Solved Example (NCERT 6.4)

**a** = (3î − 4ĵ + 5k̂), **b** = (−2î + ĵ − 3k̂)

**a·b** = (3)(−2) + (−4)(1) + (5)(−3) = −6 − 4 − 15 = **−25**

$$\mathbf{a}\times\mathbf{b} = \begin{vmatrix}\hat{i}&\hat{j}&\hat{k}\\3&-4&5\\-2&1&-3\end{vmatrix} = \hat{i}[(-4)(-3)-(5)(1)] - \hat{j}[(3)(-3)-(5)(-2)] + \hat{k}[(3)(1)-(-4)(-2)]$$

= î(12−5) − ĵ(−9+10) + k̂(3−8) = **7î − ĵ − 5k̂**

Note: **b** × **a** = −**7î + ĵ + 5k̂** (opposite sign) ✓

---

## SECTION 5 — ANGULAR VELOCITY AND ITS RELATION TO LINEAR VELOCITY ⭐⭐⭐

### 5.1 Angular Velocity ω

For a particle executing circular motion, the **instantaneous angular velocity** is:

$$\omega = \frac{d\theta}{dt}$$

- It is a **vector** directed along the fixed axis of rotation (right-hand screw rule).
- SI unit: **rad s⁻¹**; Dimensional formula: **[T⁻¹]**
- All particles of a rigid body rotating about a fixed axis share the **same ω** at any instant.

### 5.2 Linear Velocity from Angular Velocity

$$\boxed{\mathbf{v} = \boldsymbol{\omega}\times\mathbf{r}} \quad \text{...(6.20)}$$

where **r** is the position vector of the particle from an origin on the axis.

For a particle at perpendicular distance r⊥ from the axis:

$$v = \omega r_\perp \quad \text{...(6.19)}$$

> 🔑 The velocity **v** is **tangential** to the circular path — always perpendicular to both **ω** and **r**.

### 5.3 Angular Acceleration α

$$\boldsymbol{\alpha} = \frac{d\boldsymbol{\omega}}{dt} \quad \text{...(6.21)}$$

For fixed-axis rotation: α = dω/dt (scalar) ...(6.22)

**Analogy summary (Translation ↔ Rotation):**

| Linear | Rotational |
|---|---|
| Displacement x | Angular displacement θ |
| Velocity v = dx/dt | Angular velocity ω = dθ/dt |
| Acceleration a = dv/dt | Angular acceleration α = dω/dt |

---

## SECTION 6 — TORQUE AND ANGULAR MOMENTUM ⭐⭐⭐

### 6.1 Torque (Moment of Force) τ = r × F

> **Torque** is the **rotational analogue of force** — it produces angular acceleration in a body.

For a force **F** acting at position **r** from origin O:

$$\boxed{\boldsymbol{\tau} = \mathbf{r}\times\mathbf{F}} \quad \text{...(6.23)}$$

**Magnitude:**

$$\tau = rF\sin\theta = r_\perp F = rF_\perp \quad \text{...(6.24)}$$

where r⊥ = r sinθ is the **perpendicular distance** of the line of action of **F** from the origin (called the **moment arm** or **lever arm**), and F⊥ = F sinθ is the component of **F** perpendicular to **r**.

- **SI unit:** N m (newton metre)
- **Dimensional formula:** [ML²T⁻²] — same dimensions as work, but torque is a **vector**, work is a **scalar**!
- τ = 0 when r = 0, F = 0, or θ = 0° or 180° (force passes through origin or is along r)

> ⚠️ **Exam Trap:** Torque and work have the **same dimensions** [ML²T⁻²] but are completely different physical quantities. Torque is a vector; work is a scalar.

### 6.2 Angular Momentum L = r × p

> **Angular momentum** is the **rotational analogue of linear momentum**.

For a particle of mass m with momentum **p** at position **r** from origin O:

$$\boxed{\mathbf{l} = \mathbf{r}\times\mathbf{p}} \quad \text{...(6.25a)}$$

**Magnitude:**

$$l = rp\sin\theta = r_\perp p = rp_\perp \quad \text{...(6.26)}$$

- **SI unit:** kg m² s⁻¹ = J s
- **Dimensional formula:** [ML²T⁻¹]
- l = 0 when p = 0 (at rest), r = 0 (at origin), or θ = 0°/180° (p passes through origin)

### 6.3 Relation Between Torque and Angular Momentum

Differentiating **l** = **r** × **p** with respect to time:

$$\frac{d\mathbf{l}}{dt} = \frac{d\mathbf{r}}{dt}\times\mathbf{p} + \mathbf{r}\times\frac{d\mathbf{p}}{dt} = \mathbf{v}\times m\mathbf{v} + \mathbf{r}\times\mathbf{F} = 0 + \boldsymbol{\tau}$$

$$\boxed{\frac{d\mathbf{l}}{dt} = \boldsymbol{\tau}} \quad \text{...(6.27)}$$

> **This is the rotational analogue of Newton's 2nd Law:** Just as F = dp/dt, we have **τ = dl/dt**.

### 6.4 For a System of Particles

$$\mathbf{L} = \sum_i \mathbf{l}_i = \sum_i \mathbf{r}_i \times \mathbf{p}_i \quad \text{...(6.25b)}$$

$$\frac{d\mathbf{L}}{dt} = \boldsymbol{\tau}_{ext} \quad \text{...(6.28b)}$$

> The time rate of total angular momentum of a system = sum of external torques (internal torques cancel by Newton's 3rd law along the line joining particles).

### 6.5 Conservation of Angular Momentum ⭐⭐⭐

If τ_ext = **0**, then:

$$\boxed{\mathbf{L} = \text{constant}} \quad \text{...(6.29a)}$$

> **If the total external torque on a system is zero, the total angular momentum is conserved.**

**Examples:**
- A skater pulling in their arms: I decreases → ω increases (Iω = const)
- A diver tucking in mid-air: I decreases → ω increases
- A girl on swivel chair stretching arms: I increases → ω decreases
- Earth's orbit around Sun: no external torque → angular momentum of Earth conserved

### 6.6 Solved Examples

**Example 6.5 — Torque** **r** = î − ĵ + k̂, **F** = 7î + 3ĵ − 5k̂

$$\boldsymbol{\tau} = \begin{vmatrix}\hat{i}&\hat{j}&\hat{k}\\1&-1&1\\7&3&-5\end{vmatrix} = \hat{i}[(-1)(-5)-(1)(3)] - \hat{j}[(1)(-5)-(1)(7)] + \hat{k}[(1)(3)-(-1)(7)]$$

= î(5−3) − ĵ(−5−7) + k̂(3+7) = **2î + 12ĵ + 10k̂** N m

**Example 6.6 — Constant angular momentum:** A particle moving with constant velocity **v** has angular momentum **l** = **r** × m**v** with magnitude mvr sinθ = mv(OM) where OM = r sinθ = constant (perpendicular distance from O to the line of motion). Since direction is also fixed (perpendicular into the page), **l is constant**. External torque on the particle is zero — consistent with τ = dl/dt = 0. ✓

---

## SECTION 7 — EQUILIBRIUM OF A RIGID BODY ⭐⭐

### 7.1 Conditions for Mechanical Equilibrium

A rigid body is in **mechanical equilibrium** when it has:
- **No linear acceleration:** Total force = 0
- **No angular acceleration:** Total torque = 0

$$\boxed{\sum \mathbf{F}_i = \mathbf{0}} \quad \text{(Translational equilibrium)} \quad \text{...(6.30a)}$$

$$\boxed{\sum \boldsymbol{\tau}_i = \mathbf{0}} \quad \text{(Rotational equilibrium)} \quad \text{...(6.30b)}$$

> 🔑 The rotational equilibrium condition is **independent of the choice of origin** (provided translational equilibrium also holds).

### 7.2 Partial Equilibrium

- A body can be in **translational equilibrium but NOT rotational** — e.g., a rod with equal and opposite forces at its two ends (a couple produces net rotation without translation).
- A body can be in **rotational equilibrium but NOT translational** — e.g., two equal parallel forces in the same direction at ends of a rod (no net torque about midpoint, but net force ≠ 0).

### 7.3 Couple

> **Couple:** A pair of forces of **equal magnitude** but acting in **opposite directions** with **different lines of action**. A couple produces rotation without translation.

Torque of a couple = **AB × F** (independent of origin — this is the reason rotational equilibrium condition is origin-independent when translational equilibrium holds).

Examples: Turning a bottle cap, compass needle in Earth's magnetic field.

### 7.4 Principle of Moments (Lever) ⭐⭐

For a lever (light rod) pivoted at the **fulcrum**:

| Term | Definition |
|---|---|
| **Load** F₁ | The force to be lifted; at load arm d₁ from fulcrum |
| **Effort** F₂ | The force applied; at effort arm d₂ from fulcrum |
| **Fulcrum** | Pivot point of the lever |

For rotational equilibrium:

$$\boxed{d_1 F_1 = d_2 F_2} \quad \text{...(6.32a)}$$

$$\text{Mechanical Advantage (M.A.)} = \frac{F_1}{F_2} = \frac{d_2}{d_1} \quad \text{...(6.32b)}$$

- If d₂ > d₁: M.A. > 1 → small effort lifts a large load.
- **Load arm × Load = Effort arm × Effort** (Principle of Moments)

**Examples of levers:** seesaw, beam balance, scissors, human forearm, pliers.

### 7.5 Centre of Gravity (CG)

> **Centre of Gravity (CG):** The point where the total gravitational torque on the body is **zero**.

$$\sum \boldsymbol{\tau}_g = \sum \mathbf{r}_i \times m_i\mathbf{g} = \mathbf{0} \quad \text{...(6.33)}$$

Since **g** is uniform (same for all particles), the CG **coincides with the COM** for bodies small enough that g is uniform. For very large bodies in a non-uniform gravitational field, CG ≠ COM.

**Finding CG of an irregular body:** Suspend the body from different points successively; the vertical lines through each point of suspension intersect at the CG.

### 7.6 Solved Examples from NCERT

**Example 6.8 — Metal bar 70 cm, 4 kg, on two knife edges:**

Setup: Bar AB (70 cm), knife edges at K₁ (10 cm from A) and K₂ (10 cm from B). Load W₁ = 6 kg at 30 cm from A. W = 4g N acts at G (35 cm from A = midpoint).

Translational: R₁ + R₂ = (4 + 6)g = 10g = 98 N ...(i)

Rotational (moments about G, K₁G = K₂G = 25 cm):

−R₁(K₁G) + W₁(PG) + R₂(K₂G) = 0

−R₁(0.25) + 6g(0.05) + R₂(0.25) = 0 → R₁ − R₂ = 1.2g = 11.76 N ...(ii)

From (i) and (ii): **R₁ ≈ 54.88 N; R₂ ≈ 43.12 N**

**Example 6.9 — Ladder against frictionless wall (3 m, 20 kg, foot 1 m from wall):**

From translational equilibrium (vertical): N = W = 20g = 196 N

From translational equilibrium (horizontal): F (friction) = F₁ (wall reaction)

From rotational equilibrium (moments about A):
2√2 · F₁ − (1/2) · W = 0 → **F₁ = W/(4√2) = 34.6 N**

**F = F₁ = 34.6 N; F₂ = √(F² + N²) = 199.0 N** at angle α ≈ 80° with horizontal.

---

## SECTION 8 — MOMENT OF INERTIA ⭐⭐⭐

### 8.1 Definition

The **moment of inertia** (MI) of a rigid body about an axis:

$$\boxed{I = \sum_i m_i r_i^2} \quad \text{...(6.34)}$$

where rᵢ is the **perpendicular distance** of the iᵗʰ particle from the axis of rotation.

- **SI unit:** kg m²
- **Dimensional formula:** [ML²]
- Depends on: (i) mass, (ii) distribution of mass about the axis, (iii) position and orientation of axis.
- Unlike mass, I is **NOT a fixed property** of a body — it changes with the axis chosen.

### 8.2 Kinetic Energy of Rotation

$$\boxed{K_{rot} = \frac{1}{2}I\omega^2} \quad \text{...(6.35)}$$

Compare with translational KE: K = ½mv² → **I is the rotational analogue of mass m**.

### 8.3 Standard Results — Moments of Inertia (Table 6.1) ⭐⭐

| Body | Axis | I |
|---|---|---|
| Thin circular ring, radius R | Perpendicular to plane, at centre | MR² |
| Thin circular ring, radius R | Diameter | MR²/2 |
| Thin rod, length L | Perpendicular to rod, at midpoint | ML²/12 |
| Circular disc, radius R | Perpendicular to disc, at centre | MR²/2 |
| Circular disc, radius R | Diameter | MR²/4 |
| Hollow cylinder, radius R | Axis of cylinder | MR² |
| Solid cylinder, radius R | Axis of cylinder | MR²/2 |
| Solid sphere, radius R | Diameter | 2MR²/5 |

> ⚠️ **Exam Trap:** Hollow cylinder = Ring (MR²). Solid cylinder = Disc (MR²/2). Solid sphere = 2MR²/5.

### 8.4 Radius of Gyration k

$$I = Mk^2 \quad \Rightarrow \quad k = \sqrt{I/M}$$

- k is the **radius of gyration**: the distance from the axis at which the whole mass M, if concentrated, would give the same I.
- It is a **geometric property** of the body-axis system.

| Body | Axis | k |
|---|---|---|
| Thin rod (length L) | Midpoint, perpendicular | k = L/√12 |
| Circular disc (radius R) | Diameter | k = R/2 |

### 8.5 Two Special Cases (NCERT derivations)

**(a) Thin ring (radius R, mass M):** All mass at distance R from axis.

K = ½Mv² = ½M(Rω)² = ½(MR²)ω² → **I_ring = MR²**

**(b) Rod of negligible mass, length l, with masses M/2 at each end**, rotating about perpendicular axis through centre:

I = (M/2)(l/2)² + (M/2)(l/2)² = **Ml²/4**

### 8.6 Flywheel — Practical Application

- A **flywheel** is a disc with large I used in steam engines, automobiles, etc.
- Because of large I, it **resists sudden changes** in angular speed → smooth, jerk-free motion.

---

## SECTION 9 — KINEMATICS OF ROTATIONAL MOTION ABOUT A FIXED AXIS ⭐⭐

### 9.1 Equations of Motion (Uniform Angular Acceleration)

These are exact analogues of the linear kinematic equations (with uniform acceleration):

| Linear | Rotational |
|---|---|
| v = v₀ + at | **ω = ω₀ + αt** ...(6.36) |
| x = x₀ + v₀t + ½at² | **θ = θ₀ + ω₀t + ½αt²** ...(6.37) |
| v² = v₀² + 2a(x−x₀) | **ω² = ω₀² + 2α(θ−θ₀)** ...(6.38) |

These apply only when angular acceleration α is **constant** (uniform).

### 9.2 Derivation of Eq. (6.36)

Since α = dω/dt = constant, integrating: ω = αt + c. At t = 0, ω = ω₀ → c = ω₀.
Therefore **ω = ω₀ + αt** ✓

Integrating again (with θ = θ₀ at t = 0): **θ = θ₀ + ω₀t + ½αt²** ✓

### 9.3 Solved Example (NCERT 6.11) — Motor Wheel ⭐

Angular speed increases from 1200 rpm to 3120 rpm in 16 s.

ω₀ = 2π × 1200/60 = **40π rad s⁻¹**; ω = 2π × 3120/60 = **104π rad s⁻¹**

(i) α = (ω − ω₀)/t = (104π − 40π)/16 = 64π/16 = **4π rad s⁻²**

(ii) θ = ω₀t + ½αt² = 40π(16) + ½(4π)(256) = 640π + 512π = 1152π rad

Number of revolutions = 1152π / (2π) = **576 revolutions**

---

## SECTION 10 — DYNAMICS OF ROTATIONAL MOTION ABOUT A FIXED AXIS ⭐⭐⭐

### 10.1 Torque and Angular Acceleration

From the work-energy route (or directly from Newton's 2nd Law applied to rotation):

$$\boxed{\tau = I\alpha} \quad \text{...(6.41)}$$

This is the **rotational analogue of Newton's 2nd Law** (F = ma):
- As force produces linear acceleration, **torque produces angular acceleration**.
- Angular acceleration is **directly proportional** to torque and **inversely proportional** to I.

### 10.2 Work Done by a Torque

$$dW = \tau\,d\theta \quad \text{...(6.39)}$$

Comparing with dW = F ds (translational): displacement dx → angular displacement dθ, force F → torque τ.

**Power in rotational motion:**

$$\boxed{P = \tau\omega} \quad \text{...(6.40)}$$

Compare with P = Fv for translation.

### 10.3 Complete Analogy Table (Table 6.2)

| Linear Motion | Rotational Motion |
|---|---|
| Displacement x | Angular displacement θ |
| Velocity v = dx/dt | Angular velocity ω = dθ/dt |
| Acceleration a = dv/dt | Angular acceleration α = dω/dt |
| Mass M | **Moment of inertia I** |
| Force F = Ma | **Torque τ = Iα** |
| Work dW = F ds | **Work W = τ dθ** |
| KE = Mv²/2 | **KE = Iω²/2** |
| Power P = Fv | **Power P = τω** |
| Linear momentum p = Mv | **Angular momentum L = Iω** |

### 10.4 Solved Example (NCERT 6.12) — Flywheel ⭐⭐

Flywheel: M = 20 kg, R = 20 cm = 0.20 m; steady pull F = 25 N. Starts from rest.

I = MR²/2 = 20×0.04/2 = 0.4 kg m²

τ = FR = 25 × 0.20 = 5.0 N m

**(a)** α = τ/I = 5.0/0.4 = **12.5 rad s⁻²**

**(b)** 2 m of cord unwound → θ = 2/0.2 = 10 rad; W = Fds = 25 × 2 = **50 J**

**(c)** ω² = 2αθ = 2 × 12.5 × 10 = 250 → K = ½Iω² = ½ × 0.4 × 250 = **50 J** ✓

**(d)** Work done = KE gained → **no energy dissipated** (no friction, rigid body).

---

## SECTION 11 — ANGULAR MOMENTUM IN ROTATION ABOUT A FIXED AXIS ⭐⭐⭐

### 11.1 Angular Momentum Component Along Axis

For a rigid body rotating about the z-axis:

$$\mathbf{L}_z = I\omega\hat{k} \quad \text{...(6.42b)}$$

For **symmetric bodies** (axis is a symmetry axis): L⊥ = 0, so **L = Lz = Iω k̂** ...(6.42d)

### 11.2 Newton's 2nd Law for Rotation

$$\frac{d}{dt}(I\omega) = \tau_{ext} \quad \text{...(6.43c)}$$

For constant I: **τ = Iα** (as derived before).

### 11.3 Conservation of Angular Momentum ⭐⭐⭐

If τ_ext = 0 (about the axis):

$$\boxed{L_z = I\omega = \text{constant}} \quad \text{...(6.44)}$$

> **Key consequence:** If I changes (by changing mass distribution), ω changes inversely to keep Iω constant.

**Practical examples:**

| Situation | I changes | ω response |
|---|---|---|
| Skater pulls arms in | Decreases | Increases (spins faster) |
| Skater extends arms | Increases | Decreases (spins slower) |
| Diver tucks into ball | Decreases | Increases (faster rotation) |
| Diver opens out | Increases | Decreases (slower rotation) |
| Acrobat on tightrope | Adjusts distribution | Adjusts ω for balance |

> 🔑 **Exam analogy:** Just as p = mv and F = dp/dt in translation, **L = Iω** and τ = dL/dt in rotation. Conservation of L is the rotational analogue of conservation of linear momentum.

---

## 📋 QUICK REFERENCE — All Laws, Formulas, and Dimensional Formulae

```
CENTRE OF MASS:
┌──────────────────────────────────────────────────────────────┐
│  R = Σmᵢrᵢ / M   (discrete)                                 │
│  R = (1/M)∫r dm  (continuous)                               │
│  COM of symmetric homogeneous body = geometric centre        │
│  If F_ext = 0: COM moves with constant velocity              │
└──────────────────────────────────────────────────────────────┘

CROSS PRODUCT:
┌──────────────────────────────────────────────────────────────┐
│  |a × b| = ab sinθ                                           │
│  a × b = −(b × a)  (NOT commutative)                        │
│  î×ĵ = k̂; ĵ×k̂ = î; k̂×î = ĵ  (cyclic → positive)         │
│  a × a = 0                                                   │
└──────────────────────────────────────────────────────────────┘

TORQUE AND ANGULAR MOMENTUM:
┌──────────────────────────────────────────────────────────────┐
│  τ = r × F;  |τ| = rF sinθ = r⊥F = rF⊥  [ML²T⁻²]  N m    │
│  l = r × p;  |l| = rp sinθ = r⊥p = rp⊥  [ML²T⁻¹]         │
│  dl/dt = τ  (single particle)                                │
│  dL/dt = τ_ext  (system)                                     │
│  If τ_ext = 0: L = constant                                  │
└──────────────────────────────────────────────────────────────┘

EQUILIBRIUM:
┌──────────────────────────────────────────────────────────────┐
│  ΣF = 0  (translational)                                     │
│  Στ = 0  (rotational) — origin-independent if ΣF = 0       │
│  Lever: d₁F₁ = d₂F₂;  M.A. = F₁/F₂ = d₂/d₁               │
└──────────────────────────────────────────────────────────────┘

MOMENT OF INERTIA:
┌──────────────────────────────────────────────────────────────┐
│  I = Σmᵢrᵢ²  [ML²]  kg m²                                   │
│  K_rot = ½Iω²                                               │
│  I = Mk²  (k = radius of gyration)                          │
│  Ring: I = MR²;  Disc: I = MR²/2;  Sphere: I = 2MR²/5      │
│  Solid cylinder: I = MR²/2;  Hollow cylinder: I = MR²       │
│  Thin rod (midpoint): I = ML²/12                            │
└──────────────────────────────────────────────────────────────┘

ROTATIONAL KINEMATICS (uniform α):
┌──────────────────────────────────────────────────────────────┐
│  ω = ω₀ + αt                                                 │
│  θ = θ₀ + ω₀t + ½αt²                                        │
│  ω² = ω₀² + 2α(θ − θ₀)                                      │
└──────────────────────────────────────────────────────────────┘

ROTATIONAL DYNAMICS:
┌──────────────────────────────────────────────────────────────┐
│  τ = Iα  (rotational Newton's 2nd law)                       │
│  P = τω  (power in rotation)                                 │
│  W = τ·dθ  (work done by torque)                            │
│  L = Iω  (for rotation about symmetry axis)                  │
│  If τ_ext = 0: Iω = constant  (conservation of L)           │
└──────────────────────────────────────────────────────────────┘
```

---

## ⚡ POINTS TO PONDER (High-Yield for Exams)

1. **COM ≠ geometric centre for non-uniform bodies.** The COM is the mass-weighted average position; it coincides with geometric centre only for uniform (homogeneous), symmetric bodies.

2. **COM can lie outside the body.** For a ring, the COM is at the centre of the ring — which lies in empty space (no mass there). Similarly for a hollow sphere, L-shaped body, etc.

3. **Internal forces don't affect COM motion.** The explosion of a shell in mid-air doesn't change the path of the COM — only external forces (gravity) determine COM motion.

4. **Torque and work: same dimensions, different quantities.** Both [ML²T⁻²] = N m = J, but torque is a vector defined with a cross product, and work is a scalar defined with a dot product.

5. **A couple has zero net force but non-zero torque.** That's why you can balance translational equilibrium without achieving rotational equilibrium.

6. **Moment of inertia depends on axis.** The same cylinder has I = MR²/2 for its own axis but a different I for a diameter. **Always specify the axis.**

7. **Skater analogy:** L = Iω = constant. Pulling arms in reduces I → ω increases. The kinetic energy **increases** (K = L²/2I) — the extra energy comes from the skater's muscles doing work while pulling in the arms.

8. **For rolling (not in syllabus detail, but good to know):** Total KE = ½Mv² + ½Iω². For rolling without slipping: v = Rω.

9. **Perpendicular distance in torque:** τ = r⊥ × F = r × F⊥. Both interpretations give the same numerical result — use whichever is convenient.

10. **Angular momentum of a linearly moving particle:** A particle moving in a straight line with constant velocity does have angular momentum about any point NOT on its line of motion. This angular momentum is constant (no external torque).

---

## 🔑 Key Historical Persons (Chapter 6)

| Person | Contribution |
|---|---|
| **Isaac Newton** (1643–1727) | Laws of motion — foundation for rotational mechanics |
| **Leonhard Euler** (1707–1783) | Developed rotational dynamics; Euler's equations of motion |
| **Christiaan Huygens** (1629–1695) | First to correctly derive moment of inertia of a pendulum |
| **James Watt** (1736–1819) | Flywheel concept for steam engines (practical application) |

---

*End of Notes — Physics Chapter 6 | Total Sections: 11*