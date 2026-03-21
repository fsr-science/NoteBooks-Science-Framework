# CHAPTER 3: MOTION IN A PLANE

### Complete Study Notes | Board · NEET · JEE Layered

---

## 🗺️ CONCEPT ROADMAP

```
[Motion in 1D — Chapter 2]
        ↓
[Need Vectors to Describe 2D/3D Motion]
        ↓
[Scalars vs Vectors] → Properties, Notation, Types
        ↓
[Vector Operations]
    ├── Addition/Subtraction (Graphical: Triangle + Parallelogram)
    ├── Multiplication by scalar
    ├── Resolution into Components (Unit vectors î, ĵ, k̂)
    └── Analytical Addition (Component method)
        ↓
[Motion in a Plane] → Position, Velocity, Acceleration as Vectors
        ↓
[Constant Acceleration in 2D] → Equations of motion in component form
        ↓
[Projectile Motion] → Special case of 2D motion under gravity
    ├── Trajectory (Parabola)
    ├── Time of flight
    ├── Maximum height
    └── Horizontal Range
        ↓
[Uniform Circular Motion] → Centripetal acceleration, Angular speed
```

---

## SECTION 1 — SCALARS AND VECTORS

### 1.1 Scalar Quantities

> A **scalar** is a quantity that has **only magnitude**, specified by a single number and its unit. Scalars obey rules of **ordinary algebra**.

**Examples from Chapter 3:** Distance, Speed, Mass, Temperature, Time, Energy

### 1.2 Vector Quantities ⭐

> A **vector** is a quantity that has **both magnitude and direction** and obeys the **triangle law** (or equivalently, **parallelogram law**) of addition.

**Examples from Chapter 3:** Displacement, Velocity, Acceleration, Force

### 1.3 Vector Notation

* In print: **bold face** — **A**, **v**, **r**
* In handwriting: arrow over letter — $\vec{A}$, $\vec{v}$, $\vec{r}$
* Magnitude of vector **A**: written as |**A**| = A (lightface)

### 1.4 Position and Displacement Vectors

* **Position vector r**: The vector from the origin O to a point P. Written as **OP = r**.
* **Displacement vector**: Vector from initial position P to final position P′ = **PP′** = **r′ − r**

> 🔑 **Key Fact:** The displacement vector depends only on the **initial and final positions**, NOT on the actual path taken. This is why for any path from P to Q, the displacement vector is always **PQ** (straight line joining P to Q).

**Corollary:** Magnitude of displacement ≤ path length. Equality holds only for straight-line motion without reversal.

### 1.5 Equality of Vectors

Two vectors **A** and **B** are **equal** if and only if:
* They have the **same magnitude**, AND
* They have the **same direction**

> ⚠️ Two vectors can have the same magnitude but different directions — they are **NOT** equal (e.g., vectors **A′** and **B′** in NCERT Fig. 3.2b).

---

## SECTION 2 — MULTIPLICATION OF VECTORS BY REAL NUMBERS

### 2.1 Multiplication by a Positive Scalar (λ > 0)

$$|\lambda\mathbf{A}| = \lambda|\mathbf{A}|, \quad \text{direction same as } \mathbf{A}$$

* Multiplying by 2 → same direction, twice the magnitude.

### 2.2 Multiplication by a Negative Scalar (−λ)

* Direction is **opposite** to **A**.
* Magnitude is λ times |**A**|.
* **−A** has the same magnitude as **A** but **opposite direction** → used in vector subtraction.

### 2.3 Dimension of λA

If λ has its own physical dimension, then:
$$[\lambda\mathbf{A}] = [\lambda][\mathbf{A}]$$

**Example:** Velocity (m s⁻¹) × time (s) = displacement (m).

---

## SECTION 3 — ADDITION AND SUBTRACTION OF VECTORS ⭐⭐

### 3.1 Triangle Law of Vector Addition (Head-to-Tail Method)

> To add **A** + **B**: Place the **tail of B** at the **head of A**. The resultant **R** is the vector from the **tail of A** to the **head of B**.

$$\mathbf{R} = \mathbf{A} + \mathbf{B}$$

The two vectors and their resultant form **three sides of a triangle**.

### 3.2 Properties of Vector Addition

**Commutative Law:**
$$\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A}$$

**Associative Law:**
$$(\mathbf{A} + \mathbf{B}) + \mathbf{C} = \mathbf{A} + (\mathbf{B} + \mathbf{C})$$

### 3.3 Null Vector (Zero Vector)

$$\mathbf{A} + (-\mathbf{A}) = \mathbf{0}$$

* Magnitude = 0; direction is **undefined**.
* Properties: **A** + **0** = **A**;  λ**0** = **0**;  0**A** = **0**

**Physical meaning of zero vector:** An object that moves from P → P′ and returns to P has displacement = **null vector**.

### 3.4 Vector Subtraction

$$\mathbf{A} - \mathbf{B} = \mathbf{A} + (-\mathbf{B})$$

Add **A** and **−B** (i.e., reverse **B** and then use triangle law).

> ⚠️ **NEET Trap:** **A − B** and **A + B** are different vectors even though both are formed from **A** and **B**.

### 3.5 Parallelogram Law of Vector Addition

Bring tails of **A** and **B** to a common origin O. Complete the parallelogram. The **diagonal from O** gives the resultant **R** = **A** + **B**.

> 🔑 The triangle law and parallelogram law are **equivalent** — they give the same resultant.

### 3.6 Law of Cosines and Law of Sines ⭐ (JEE/NEET)

For two vectors **A** and **B** with angle θ between them:

**Magnitude of resultant:**
$$R = \sqrt{A^2 + B^2 + 2AB\cos\theta} \quad \text{...(3.24a)}$$

**Direction (angle α that R makes with A):**
$$\tan\alpha = \frac{B\sin\theta}{A + B\cos\theta} \quad \text{...(3.24f)}$$

**Law of Sines:**
$$\frac{R}{\sin\theta} = \frac{A}{\sin\beta} = \frac{B}{\sin\alpha} \quad \text{...(3.24d)}$$

**Special Cases:**

| θ | R |
|---|---|
| 0° (same direction) | A + B (maximum) |
| 90° (perpendicular) | √(A² + B²) |
| 180° (opposite) | |A − B| (minimum) |

---

## SECTION 4 — RESOLUTION OF VECTORS ⭐⭐

### 4.1 Resolving Along Two Arbitrary Directions

Any vector **A** in a plane can be expressed as:
$$\mathbf{A} = \lambda\mathbf{a} + \mu\mathbf{b}$$

where **a** and **b** are two non-collinear vectors in the plane, and λ, μ are real numbers.

### 4.2 Unit Vectors ⭐

> A **unit vector** has magnitude **1** and specifies a **direction only**. It has no dimensions or units.

$$\hat{\mathbf{n}} = \frac{\mathbf{A}}{|\mathbf{A}|}$$

**Standard unit vectors:**
* **î** → along x-axis
* **ĵ** → along y-axis
* **k̂** → along z-axis

$$|\hat{i}| = |\hat{j}| = |\hat{k}| = 1$$

These are **mutually perpendicular**.

### 4.3 Resolving a Vector Along x and y Axes ⭐⭐⭐

For a vector **A** making angle θ with the x-axis:

$$\mathbf{A} = A_x\hat{i} + A_y\hat{j}$$

where:
$$A_x = A\cos\theta \qquad A_y = A\sin\theta$$

**Recovering magnitude and direction from components:**
$$A = |\mathbf{A}| = \sqrt{A_x^2 + A_y^2} \qquad \tan\theta = \frac{A_y}{A_x}$$

> ⚠️ **Board Note:** A component (e.g., Aₓ) is a **scalar** (can be +, −, 0). But Aₓ**î** is a **vector**.

### 4.4 Three-Dimensional Resolution

$$\mathbf{A} = A_x\hat{i} + A_y\hat{j} + A_z\hat{k}$$
$$A = \sqrt{A_x^2 + A_y^2 + A_z^2}$$

Direction cosines:
$$A_x = A\cos\alpha, \quad A_y = A\cos\beta, \quad A_z = A\cos\gamma$$

### 4.5 Position Vector in Component Form

$$\mathbf{r} = x\hat{i} + y\hat{j} + z\hat{k}$$

---

## SECTION 5 — VECTOR ADDITION: ANALYTICAL METHOD ⭐⭐

### 5.1 Component Method (Most Practical)

If **A** = Aₓ**î** + Aᵧ**ĵ** and **B** = Bₓ**î** + Bᵧ**ĵ**, then:

$$\mathbf{R} = \mathbf{A} + \mathbf{B} = (A_x + B_x)\hat{i} + (A_y + B_y)\hat{j}$$

$$R_x = A_x + B_x \qquad R_y = A_y + B_y$$

In 3D:
$$R_x = A_x + B_x, \quad R_y = A_y + B_y, \quad R_z = A_z + B_z$$

> 🔑 **Key Principle:** Each component of the resultant = **sum of corresponding components** of the individual vectors.

**Example (NCERT 3.3 — Motorboat):**
Boat: v_b = 25 km/h North = 25**ĵ**
Current: v_c = 10 km/h at 60° East of South → v_cx = 10sin60° = 5√3, v_cy = −10cos60° = −5

R = √(25² + 10² + 2×25×10×cos120°) ≅ 22 km/h

---

## SECTION 6 — MOTION IN A PLANE ⭐⭐⭐

### 6.1 Position Vector and Displacement

Position of particle P at time t:
$$\mathbf{r} = x\hat{i} + y\hat{j}$$

Displacement from time t to t′:
$$\Delta\mathbf{r} = \mathbf{r'} - \mathbf{r} = \Delta x\hat{i} + \Delta y\hat{j}$$

where Δx = x′ − x, Δy = y′ − y.

### 6.2 Average Velocity in 2D

$$\bar{\mathbf{v}} = \frac{\Delta\mathbf{r}}{\Delta t} = \frac{\Delta x}{\Delta t}\hat{i} + \frac{\Delta y}{\Delta t}\hat{j} = \bar{v}_x\hat{i} + \bar{v}_y\hat{j}$$

Direction of **v̄** is the **same as direction of Δr**.

### 6.3 Instantaneous Velocity in 2D ⭐

$$\mathbf{v} = \lim_{\Delta t \to 0}\frac{\Delta\mathbf{r}}{\Delta t} = \frac{d\mathbf{r}}{dt} = \frac{dx}{dt}\hat{i} + \frac{dy}{dt}\hat{j} = v_x\hat{i} + v_y\hat{j}$$

where:
$$v_x = \frac{dx}{dt}, \qquad v_y = \frac{dy}{dt}$$

**Magnitude:** $v = \sqrt{v_x^2 + v_y^2}$

**Direction:** $\theta = \tan^{-1}\left(\frac{v_y}{v_x}\right)$ with x-axis

> 🔑 **Key Fact:** The **direction of velocity** at any point is always **tangential to the path** at that point (in the direction of motion).

### 6.4 Average Acceleration in 2D

$$\bar{\mathbf{a}} = \frac{\Delta\mathbf{v}}{\Delta t} = \frac{\Delta v_x}{\Delta t}\hat{i} + \frac{\Delta v_y}{\Delta t}\hat{j} = \bar{a}_x\hat{i} + \bar{a}_y\hat{j}$$

### 6.5 Instantaneous Acceleration in 2D ⭐

$$\mathbf{a} = \frac{d\mathbf{v}}{dt} = \frac{dv_x}{dt}\hat{i} + \frac{dv_y}{dt}\hat{j} = a_x\hat{i} + a_y\hat{j}$$

> ⚠️ **NEET/JEE Critical:** In 2D/3D, velocity and acceleration vectors may have **any angle between 0° and 180°** between them. Unlike 1D, they are NOT confined to the same line.

**Example (NCERT 3.4):**
r(t) = 3.0t**î** + 2.0t²**ĵ** + 5.0**k̂** m

v(t) = dr/dt = 3.0**î** + 4.0t**ĵ**

a(t) = dv/dt = 4.0**ĵ** m s⁻² (constant, along y-direction)

At t = 1.0 s: v = 3.0**î** + 4.0**ĵ**; |v| = 5.0 m s⁻¹; θ = tan⁻¹(4/3) ≅ 53° with x-axis.

---

## SECTION 7 — MOTION IN A PLANE WITH CONSTANT ACCELERATION ⭐⭐

### 7.1 Equations of Motion (2D Vector Form)

With initial velocity **v₀** at t = 0 and constant acceleration **a**:

$$\mathbf{v} = \mathbf{v_0} + \mathbf{a}t \quad \text{...(3.33a)}$$

$$\mathbf{r} = \mathbf{r_0} + \mathbf{v_0}t + \frac{1}{2}\mathbf{a}t^2 \quad \text{...(3.34a)}$$

### 7.2 Component Form ⭐⭐⭐

$$v_x = v_{ox} + a_x t \qquad v_y = v_{oy} + a_y t$$

$$x = x_0 + v_{ox}t + \frac{1}{2}a_x t^2 \qquad y = y_0 + v_{oy}t + \frac{1}{2}a_y t^2$$

> 🔑 **Critical Result:** **Motion in x and y directions can be treated independently!** This is the basis of projectile motion analysis.

**This means:** 2D motion with constant acceleration = two **simultaneous independent 1D motions** along two perpendicular directions.

---

## SECTION 8 — PROJECTILE MOTION ⭐⭐⭐

### 8.1 What is a Projectile?

> An object **in flight** after being **thrown or projected** is called a **projectile**.

Examples: cricket ball, football, bullet, stone thrown at an angle.

### 8.2 Assumptions

1. Air resistance is **negligible**.
2. Acceleration = **g** = 9.8 m s⁻² (downward) throughout.
3. Object is treated as a **point mass**.

> 🔑 **Galileo's Contribution (1632):** First stated the independence of horizontal and vertical components of projectile motion in his *"Dialogue on the great world systems"*.

### 8.3 Setting Up the Problem ⭐⭐⭐

Take origin at launch point. Let **v₀** = initial speed, **θ₀** = angle with horizontal.

**Initial velocity components:**
$$v_{ox} = v_0\cos\theta_0 \qquad v_{oy} = v_0\sin\theta_0$$

**Acceleration components:**
$$a_x = 0 \qquad a_y = -g$$

### 8.4 Equations of Motion for Projectile ⭐⭐⭐

**Position:**
$$x = (v_0\cos\theta_0)t \qquad \text{...(horizontal)}$$
$$y = (v_0\sin\theta_0)t - \frac{1}{2}gt^2 \qquad \text{...(vertical)}$$

**Velocity:**
$$v_x = v_0\cos\theta_0 = \text{constant} \quad \text{(horizontal velocity never changes!)}$$
$$v_y = v_0\sin\theta_0 - gt \quad \text{(vertical velocity decreases then increases)}$$

> ⚠️ **Board/NEET Key Fact:** The **horizontal velocity remains constant** throughout the flight (since aₓ = 0). At the **top (maximum height)**, vᵧ = 0 but vₓ ≠ 0 (unless thrown straight up).

### 8.5 Equation of Trajectory (Path Equation) ⭐⭐

Eliminating t from the equations for x and y:

$$y = (\tan\theta_0)x - \frac{g}{2(v_0\cos\theta_0)^2}x^2 \qquad \text{...(3.39)}$$

This is of the form **y = ax − bx²** → **parabola**.

> 🔑 **The path of a projectile is a parabola.**

### 8.6 Time to Reach Maximum Height ⭐

At maximum height, vᵧ = 0:
$$t_m = \frac{v_0\sin\theta_0}{g} \qquad \text{...(3.40a)}$$

### 8.7 Time of Flight ⭐⭐

Total time in air (when projectile returns to y = 0):
$$T_f = \frac{2v_0\sin\theta_0}{g} = 2t_m \qquad \text{...(3.40b)}$$

> 🔑 **Time of flight = 2 × time to max height** (due to symmetry of the parabolic path).

### 8.8 Maximum Height ⭐⭐

$$h_m = \frac{(v_0\sin\theta_0)^2}{2g} \qquad \text{...(3.41)}$$

### 8.9 Horizontal Range ⭐⭐⭐

The horizontal distance from launch to landing (on the same level):
$$R = \frac{v_0^2\sin 2\theta_0}{g} \qquad \text{...(3.42a)}$$

**Maximum Range:**
$$R_{max} = \frac{v_0^2}{g} \qquad \text{at } \theta_0 = 45° \qquad \text{...(3.42b)}$$

### 8.10 Key Results on Range ⭐⭐ (NEET/JEE Favourite)

* Range is **maximum at θ₀ = 45°**.
* **Angles (45° + α) and (45° − α) give equal ranges** (Galileo's theorem).
  * Proof: sin(90° + 2α) = sin(90° − 2α) = cos 2α ✓
* For a given range R < R_max, **two launch angles** are possible: θ and (90° − θ).

### 8.11 Summary Table — Projectile Formulae ⭐⭐⭐

| Quantity | Formula |
|---|---|
| Initial horizontal velocity | vₓ = v₀ cos θ₀ |
| Initial vertical velocity | vᵧ₀ = v₀ sin θ₀ |
| Horizontal position | x = (v₀ cos θ₀) t |
| Vertical position | y = (v₀ sin θ₀)t − ½gt² |
| Horizontal velocity (any t) | vₓ = v₀ cos θ₀ = constant |
| Vertical velocity (any t) | vᵧ = v₀ sin θ₀ − gt |
| Time to max height | tₘ = v₀ sin θ₀/g |
| Time of flight | Tƒ = 2v₀ sin θ₀/g |
| Maximum height | hₘ = (v₀ sin θ₀)²/(2g) |
| Horizontal range | R = v₀² sin 2θ₀/g |
| Maximum range | R_max = v₀²/g (at 45°) |
| Trajectory | y = (tan θ₀)x − gx²/[2(v₀ cos θ₀)²] |

### 8.12 Worked NCERT Examples

**Example 3.7 — Horizontal Projectile from cliff:**
```
Height = 490 m; v₀ = 15 m s⁻¹ (horizontal); g = 9.8 m s⁻²
vₒₓ = 15 m/s; vₒᵧ = 0 (launched horizontally)
Time to fall: −490 = −½(9.8)t² → t = 10 s
Final vₓ = 15 m/s; vᵧ = 0 − 9.8×10 = −98 m/s
Speed = √(15² + 98²) = √(225 + 9604) = √9829 ≈ 99 m s⁻¹
```

**Example 3.8 — Cricket ball at 28 m s⁻¹, 30°:**
```
(a) hₘ = (28 sin30°)²/(2×9.8) = (14)²/19.6 = 196/19.6 = 10 m
(b) Tƒ = 2×28×sin30°/9.8 = 28/9.8 ≈ 2.9 s
(c) R = 28²×sin60°/9.8 = 784×(√3/2)/9.8 = 69 m
```

---

## SECTION 9 — UNIFORM CIRCULAR MOTION ⭐⭐⭐

### 9.1 Definition

> When an object follows a **circular path at constant speed**, the motion is called **uniform circular motion**.

**"Uniform"** = constant **speed** (not constant velocity! Direction changes continuously.)

### 9.2 Centripetal Acceleration ⭐⭐⭐

Since velocity direction changes continuously, there is an acceleration.

$$a_c = \frac{v^2}{R} \qquad \text{...(3.43)}$$

* **Direction:** Always directed **towards the centre** of the circle.
* **Magnitude:** Constant (since v and R are constant).
* The acceleration is therefore **NOT a constant vector** (direction keeps changing).

> 🔑 **Why centripetal?** "Centripetal" = "centre-seeking" (from Greek). Term proposed by **Newton**. First thorough analysis published in **1673 by Christiaan Huygens (1629−1695)**.

**Derivation Outline:**
Using similar triangles (velocity triangle ~ position triangle):
$$\frac{|\Delta\mathbf{v}|}{v} = \frac{|\Delta\mathbf{r}|}{R} \implies |\Delta\mathbf{v}| = v\frac{|\Delta\mathbf{r}|}{R}$$

As Δt → 0, |Δ**r**|/Δt → v, so:
$$a_c = \frac{v^2}{R}$$

### 9.3 Angular Speed ⭐⭐

> **Angular speed ω** = rate of change of angular displacement Δθ with time.

$$\omega = \frac{\Delta\theta}{\Delta t} \qquad \text{...(3.44)}$$

**SI unit:** rad s⁻¹. **Dimensional formula:** [T⁻¹]

**Relation between linear speed and angular speed:**
$$v = R\omega \qquad \text{...(3.45)}$$

**Centripetal acceleration in terms of ω:**
$$a_c = \omega^2 R \qquad \text{...(3.46)}$$

### 9.4 Time Period and Frequency ⭐

* **Time period T** = time for one complete revolution.
* **Frequency ν** = revolutions per second = 1/T

$$\omega = 2\pi\nu = \frac{2\pi}{T}$$

$$v = 2\pi R\nu = \frac{2\pi R}{T}$$

$$a_c = 4\pi^2\nu^2 R = \frac{4\pi^2 R}{T^2} \qquad \text{...(3.48)}$$

### 9.5 Summary of Circular Motion Quantities

| Quantity | Formula | Unit |
|---|---|---|
| Angular speed | ω = 2π/T = 2πν | rad s⁻¹ |
| Linear speed | v = Rω = 2πRν | m s⁻¹ |
| Centripetal acceleration | aₒ = v²/R = ω²R = 4π²ν²R | m s⁻² |
| Direction of aₒ | Always toward centre | — |
| Is aₒ constant vector? | No (direction changes) | — |

**Example 3.9 (NCERT):**
```
Insect in groove: R = 12 cm = 0.12 m; 7 rev in 100 s
ω = 2π × 7/100 = 0.44 rad/s
v = ωR = 0.44 × 0.12 = 0.053 m/s = 5.3 cm/s
aₒ = ω²R = (0.44)² × 0.12 = 0.0232 m/s² = 2.3 cm/s²
Magnitude is constant; direction changes → NOT a constant vector
```

---

## SECTION 10 — POINTS TO PONDER (NCERT) ⭐

1. **Path length vs displacement:** Path length ≥ |displacement|. Equal only when no direction change.
2. **Average speed vs |average velocity|:** Average speed ≥ |average velocity|.
3. **Vector equations** (3.33a) and (3.34a) don't involve any choice of axes — you can always resolve them.
4. **Kinematic equations for uniform acceleration do NOT apply to uniform circular motion** — acceleration magnitude is constant but direction is changing.
5. **Resultant velocity:** If object has velocities **v₁** and **v₂**, resultant = **v₁ + v₂**. But relative velocity of 1 w.r.t. 2 = **v₁ − v₂**.
6. **Centripetal acceleration is towards centre only if speed is constant.** If speed also changes, there's a tangential component too.
7. **Shape of trajectory** depends on both acceleration AND **initial conditions** (position and velocity). Same g → straight line (thrown vertically) or parabola (thrown at angle).

---

## SECTION 11 — DIMENSIONAL FORMULAE (Chapter 3)

| Physical Quantity | Symbol | Dimensional Formula | SI Unit |
|---|---|---|---|
| Displacement | Δ**r** | [L] | m |
| Velocity | **v** | [LT⁻¹] | m s⁻¹ |
| Acceleration | **a** | [LT⁻²] | m s⁻² |
| Angular speed | ω | [T⁻¹] | rad s⁻¹ |
| Centripetal acceleration | aₒ | [LT⁻²] | m s⁻² |
| Time period | T | [T] | s |
| Frequency | ν | [T⁻¹] | Hz |

---

## SECTION 12 — QUICK FORMULA REFERENCE ⭐⭐⭐

| Formula | Context | Condition |
|---|---|---|
| R = √(A² + B² + 2AB cosθ) | Resultant of 2 vectors | General |
| tan α = B sinθ/(A + B cosθ) | Direction of resultant | General |
| A = Aₓ**î** + Aᵧ**ĵ** | Component form | 2D |
| Aₓ = A cosθ, Aᵧ = A sinθ | Resolving | 2D |
| Rₓ = Aₓ + Bₓ; Rᵧ = Aᵧ + Bᵧ | Adding vectors | 2D, analytical |
| v = dr/dt; a = dv/dt | Calculus form | Any motion |
| **v** = **v₀** + **a**t | Vector equation | Const. acceleration |
| vₓ = v₀ₓ + aₓt; vᵧ = v₀ᵧ + aᵧt | Components | Const. acceleration |
| x = v₀ cosθ₀·t | Projectile (horizontal) | aₓ = 0 |
| y = v₀ sinθ₀·t − ½gt² | Projectile (vertical) | aᵧ = −g |
| hₘ = (v₀ sinθ₀)²/(2g) | Max height | Projectile |
| Tƒ = 2v₀ sinθ₀/g | Time of flight | Projectile |
| R = v₀² sin2θ₀/g | Range | Projectile |
| R_max = v₀²/g | Max range (at 45°) | Projectile |
| v = Rω | UCM | Speed ↔ angular speed |
| aₒ = v²/R = ω²R | Centripetal acceleration | UCM |
| ω = 2πν = 2π/T | Angular speed | UCM |
| aₒ = 4π²ν²R | Centripetal via freq. | UCM |

---

## SECTION 13 — COMMON EXAM TRAPS ⭐⭐⭐

1. **At max height in projectile: vᵧ = 0 but vₓ ≠ 0 (and a = g ≠ 0)** — Speed at max height = v₀ cosθ₀ ≠ 0 (unless θ₀ = 90°).
2. **Horizontal velocity in projectile is constant** — it never changes (air resistance neglected).
3. **Centripetal acceleration is NOT a constant vector** — magnitude is constant but direction changes continuously.
4. **In UCM, velocity ⊥ acceleration** — they are always perpendicular (90° angle between them).
5. **Angles (45°+α) and (45°−α) give equal ranges** — extremely common NEET MCQ.
6. **For two complementary angles (θ and 90°−θ):** Range is the same; max height ratios are tan²θ : 1.
7. **Time of flight depends on sinθ, Range depends on sin2θ** — don't mix them up.
8. **Resultant of two equal vectors at angle θ** = 2A cos(θ/2), not 2A cosθ.
9. **Vector subtraction is NOT commutative:** A − B ≠ B − A.
10. **Equal magnitudes ≠ equal vectors** — direction must also be the same.
11. **Kinematic equations (v = v₀ + at, etc.) do NOT apply to UCM** (direction of acceleration changes).
12. **Path of projectile is parabola only when projected at an angle** — if θ₀ = 0° (horizontal throw), it's still a parabola but with vertex at launch point.

---

*End of Core Notes — Ch. 3: Motion in a Plane*
*Exam Tags: Board · NEET · JEE Mains · JEE Advanced*