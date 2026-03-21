# CHAPTER 2: MOTION IN A STRAIGHT LINE

### Complete Study Notes | Board · NEET · JEE Layered

---

## 🗺️ CONCEPT ROADMAP

```
[Motion = Change in Position with Time]
        ↓
[Reference Point / Origin] → Position, Displacement, Path Length
        ↓
[Rate of Change of Position] → Velocity (instantaneous & average) · Speed
        ↓
[Rate of Change of Velocity] → Acceleration (instantaneous & average)
        ↓
[Graphical Representations]
    ├── x–t graph (slope = velocity)
    ├── v–t graph (slope = acceleration; area = displacement)
    └── a–t graph (area = change in velocity)
        ↓
[Uniformly Accelerated Motion] → Kinematic Equations (v, u, a, s, t)
        ↓
[Special Cases] → Free Fall · Stopping Distance · Reaction Time
        ↓
[Relative Velocity] → Motion of one body relative to another
```

---

## SECTION 1 — INTRODUCTION: DESCRIBING MOTION

### 1.1 What is Motion?

> **Motion** is defined as the **change in position** of an object with respect to  **time** .

* Kinematics = the study of **how** objects move, *without* reference to the causes of motion (forces, mass etc.). Causes are studied in Chapter 4 (Newton's Laws).
* In this chapter, we restrict ourselves to **rectilinear motion** — motion along a  **straight line** .
* Objects are treated as **point objects** (valid when the size of the object is much smaller than the distance it moves).

### 1.2 Frame of Reference & Origin

* A **reference frame** is a coordinate system with respect to which motion is described.
* For straight-line motion, a single **x-axis** is sufficient.
* Position to the **right** of origin → **positive (+)**
* Position to the **left** of origin → **negative (−)**
* **Choice of origin** and **positive direction** is arbitrary — results are physically equivalent regardless of choice.

> ⚠️  **Board Note** : Always state your choice of origin and positive direction before solving problems involving signs.

---

## SECTION 2 — POSITION, DISPLACEMENT, AND PATH LENGTH

### 2.1 Position

The **position** of an object at any instant is its coordinate measured from the origin along the axis.

### 2.2 Displacement ⭐

> **Displacement** = Change in position = x₂ − x₁

* It is a **vector** quantity (has both magnitude and direction).
* **SI unit** : metre (m)
* **Dimensional formula** : [M⁰ L T⁰] = [L]
* Can be  **positive, negative, or zero** .
* Displacement is the **shortest path** between two points.

### 2.3 Path Length (Distance)

> **Path length** = Total length of the actual path traversed by the object.

* It is a **scalar** quantity (always positive).
* **SI unit** : metre (m)
* **Dimensional formula** : [L]

### 2.4 Key Distinction ⭐

| Feature      | Displacement       | Path Length              |
| ------------ | ------------------ | ------------------------ |
| Type         | Vector             | Scalar                   |
| Value        | Can be +, −, or 0 | Always ≥ 0              |
| Formula      | x₂ − x₁         | Sum of all path segments |
| Relationship | ≤ Path Length     | ≥                       |

> **Critical Rule** : Path Length ≥ |Displacement|. Equality holds **only** when motion is in one direction without reversal.

**Example:** A person walks 4 m east, then 3 m west.

* Path length = 4 + 3 = **7 m**
* Displacement = 4 − 3 = **+1 m** (east)

---

## SECTION 3 — VELOCITY AND SPEED

### 3.1 Average Velocity ⭐

> **Average velocity** = Total displacement / Total time taken

$$
\bar{v} = \frac{\Delta x}{\Delta t} = \frac{x_2 - x_1}{t_2 - t_1}
$$

* **Vector** quantity
* **SI unit** : m s⁻¹
* **Dimensional formula** : [M⁰ L T⁻¹]
* Can be positive, negative, or zero.

### 3.2 Average Speed

> **Average speed** = Total path length / Total time taken

* **Scalar** quantity
* Always **≥ |average velocity|**
* Equality holds only when motion is unidirectional.

> ⚠️  **NEET Trap** : Average speed ≠ |Average velocity| when the object reverses direction. A person who walks 2.5 km to the market (30 min) and returns home (20 min) has zero average velocity over the entire trip, but a non-zero average speed!

### 3.3 Instantaneous Velocity ⭐⭐ (Most Important for JEE)

> **Instantaneous velocity** is the velocity at a specific **instant** of time; defined as the limit of average velocity as Δt → 0:

$$
v = \lim_{\Delta t \to 0} \frac{\Delta x}{\Delta t} = \frac{dx}{dt}
$$

* It is the  **derivative of position with respect to time** .
* On an x–t graph: instantaneous velocity = **slope of the tangent** at that point.
* For **uniform motion** (constant velocity): instantaneous velocity = average velocity at all instants.

**Numerical Example (NCERT):** For x = 0.08t³, the instantaneous velocity at t = 4 s:

```
v = dx/dt = d(0.08t³)/dt = 0.24t²
At t = 4 s: v = 0.24 × 16 = 3.84 m s⁻¹
```

This is confirmed by Table 2.1 — as Δt → 0, Δx/Δt → 3.84 m s⁻¹.

### 3.4 Instantaneous Speed

> **Instantaneous speed** = magnitude of instantaneous velocity.

* It is **always equal** to |instantaneous velocity| (unlike average speed vs. average velocity).
* **Why?** At a single instant, the path length and displacement are infinitesimally equal (no reversal possible at a point).

---

## SECTION 4 — ACCELERATION

### 4.1 Average Acceleration

> **Average acceleration** = Change in velocity / Time interval

$$
\bar{a} = \frac{\Delta v}{\Delta t} = \frac{v_2 - v_1}{t_2 - t_1}
$$

* **Vector** quantity
* **SI unit** : m s⁻²
* **Dimensional formula** : [M⁰ L T⁻²]
* On a v–t graph: average acceleration = **slope of chord** connecting two points.

### 4.2 Instantaneous Acceleration ⭐

$$
a = \lim_{\Delta t \to 0} \frac{\Delta v}{\Delta t} = \frac{dv}{dt}
$$

* On a v–t graph: instantaneous acceleration = **slope of the tangent** at that point.
* Can be positive, negative, or zero.

### 4.3 Positive vs. Negative Acceleration — CRITICAL DISTINCTION ⭐⭐

> ⚠️ **The sign of acceleration does NOT tell you whether speed is increasing or decreasing.** It depends on both sign of acceleration AND sign of velocity.

| Velocity      | Acceleration  | Effect on Speed                        |
| ------------- | ------------- | -------------------------------------- |
| Positive (+)  | Positive (+)  | Speed**increases**               |
| Positive (+)  | Negative (−) | Speed**decreases**(deceleration) |
| Negative (−) | Negative (−) | Speed**increases**               |
| Negative (−) | Positive (+)  | Speed**decreases**               |

 **Rule** : If v and a have the **same sign** → speed increases. If they have **opposite signs** → speed decreases.

 **Classic Example** : A ball thrown upward.

* Taking upward as positive: v is initially positive, a = −g throughout.
* Going up: v > 0, a < 0 → speed decreases.
* Coming down: v < 0, a < 0 → speed increases.
* At topmost point: v = 0, but **a = −g ≠ 0** (very commonly asked!)

> 🔑  **Key Fact** : Zero velocity at an instant does **not** imply zero acceleration at that instant.

### 4.4 x–t, v–t, and a–t Graph Shapes (for Constant Acceleration)

| Type of Motion                | x–t graph shape        | v–t graph shape                     |
| ----------------------------- | ----------------------- | ------------------------------------ |
| Uniform (a = 0)               | Straight line, inclined | Straight line, parallel to time axis |
| Uniformly accelerated (a > 0) | Upward parabola         | Straight line, positive slope        |
| Uniformly decelerated (a < 0) | Downward parabola       | Straight line, negative slope        |

> 🔑  **JEE Note** : In realistic graphs, x–t, v–t, a–t curves are **smooth** (no sharp kinks). Sharp kinks mean the function is non-differentiable — physically this would mean an instantaneous change in velocity/acceleration, which is impossible in practice.

---

## SECTION 5 — AREA UNDER v–t GRAPH ⭐⭐

> **The area under the velocity–time (v–t) curve between t₁ and t₂ equals the displacement of the object in that time interval.**

**Proof (for uniform velocity u):**

* v–t curve is a horizontal straight line at height u.
* Area under curve from 0 to T = u × T = displacement ✓

**Check dimensions:** v (m s⁻¹) × t (s) = m = displacement ✓

**For changing velocity:** Use calculus:

$$
x = \int_{t_1}^{t_2} v , dt
$$

> ⚠️  **Board Note** : Students often confuse "area under v–t curve" (= displacement) with "area under a–t curve" (= change in velocity). Know both!

---

## SECTION 6 — KINEMATIC EQUATIONS FOR UNIFORM ACCELERATION ⭐⭐⭐

### 6.1 The Three Equations of Motion

For an object moving with  **constant acceleration a** , with initial velocity v₀ at t = 0:

| Equation                    | Relation           | Quantities involved |
| --------------------------- | ------------------ | ------------------- |
| **v = v₀ + at**      | velocity–time     | v, v₀, a, t        |
| **x = v₀t + ½at²** | position–time     | x, v₀, a, t        |
| **v² = v₀² + 2ax** | velocity–position | v, v₀, a, x        |

> If initial position is x₀ (not zero), replace x with (x − x₀) in all equations.

### 6.2 Derivation Summary (Using Calculus — NCERT Example 2.2)

**Equation 1 (v = v₀ + at):**

```
a = dv/dt  →  dv = a dt
Integrate: ∫dv = ∫a dt  →  v − v₀ = at  →  v = v₀ + at
```

**Equation 2 (x = v₀t + ½at²):**

```
v = dx/dt  →  dx = v dt = (v₀ + at) dt
Integrate: x − x₀ = v₀t + ½at²  →  x = v₀t + ½at²  (if x₀ = 0)
```

**Equation 3 (v² = v₀² + 2ax):**

```
a = v(dv/dx)  →  v dv = a dx
Integrate: (v² − v₀²)/2 = ax  →  v² = v₀² + 2ax
```

> 🔑  **JEE Note** : These kinematic equations are valid  **ONLY for constant acceleration** . For variable acceleration, use calculus directly (integrate a to get v, integrate v to get x).

### 6.3 Useful Derived Result — Average Velocity Under Constant Acceleration

$$
\bar{v} = \frac{v + v_0}{2}
$$

This is the **arithmetic mean** of initial and final velocities — valid  **only for constant acceleration** .

### 6.4 Worked NCERT Examples

**Example 2.1 — Position as Function of Time:**
x = a + bt² where a = 8.5 m, b = 2.5 m s⁻²

```
v = dx/dt = 2bt = 5.0t m s⁻¹
At t = 0: v = 0 m s⁻¹
At t = 2.0 s: v = 10 m s⁻¹
Average velocity between t = 2 and t = 4 s:
  v̄ = [x(4) − x(2)] / (4 − 2)
     = [(8.5 + 2.5×16) − (8.5 + 2.5×4)] / 2
     = [48.5 − 18.5] / 2 = 30/2 = 15 m s⁻¹
```

**Example 2.3 — Ball Thrown Upward (NCERT):**
Ball thrown up at 20 m s⁻¹ from a height of 25 m.

```
(a) Maximum height above launch point:
    v² = v₀² + 2a(y − y₀)
    0 = 400 + 2(−10)(y − y₀)
    y − y₀ = 20 m

(b) Time to hit the ground (Method 2 — using full displacement):
    y₀ = 25 m, y = 0, v₀ = 20 m/s, a = −10 m/s²
    0 = 25 + 20t − 5t²
    5t² − 20t − 25 = 0  →  t² − 4t − 5 = 0
    (t − 5)(t + 1) = 0  →  t = 5 s
```

**Example 2.4 — Free Fall:**

```
a = −g = −9.8 m s⁻²,  v₀ = 0
v = −gt = −9.8t m s⁻¹
y = −½gt² = −4.9t² m
v² = −2gy = −19.6y m² s⁻²
```

**Example 2.5 — Galileo's Law of Odd Numbers:**
Distances fallen from rest in successive equal time intervals τ are in ratio **1 : 3 : 5 : 7 : 9 : 11 ...**

**Example 2.6 — Stopping Distance:**

```
v = 0, v₀ = initial speed, deceleration = −a
Using v² = v₀² + 2ax:
dₛ = v₀²/(2a)
→ Stopping distance ∝ v₀² (doubling initial speed → 4× stopping distance!)
```

**Example 2.7 — Reaction Time:**
A ruler dropped under free fall.

```
d = ½gt²  →  tᵣ = √(2d/g)
For d = 21 cm = 0.21 m:
tᵣ = √(2×0.21/9.8) = √(0.042/9.8... wait, 2×0.21=0.42, 0.42/9.8 ≈ 0.0429)
tᵣ ≈ 0.207 s ≈ 0.2 s
```

---

## SECTION 7 — FREE FALL ⭐⭐

> **Free fall** = motion of an object under the influence of gravity alone (no air resistance).

* Acceleration = g = **9.8 m s⁻²** (downward), assumed constant near Earth's surface.
* It is a **special case of uniformly accelerated motion** with a = g.
* **Galileo's discovery** : All objects fall with the same acceleration irrespective of their mass (in absence of air resistance).
* **Galileo's Law of Odd Numbers** : Distances covered in 1st, 2nd, 3rd, ... equal time intervals are in ratio **1 : 3 : 5 : 7 ...**

### 7.1 Free Fall Equations (taking downward as negative, upward as positive)

```
a = −g = −9.8 m s⁻²
v = v₀ − gt
y = y₀ + v₀t − ½gt²
v² = v₀² − 2g(y − y₀)
```

---

## SECTION 8 — RELATIVE VELOCITY ⭐⭐

### 8.1 Concept

> **Relative velocity** of object A with respect to object B = velocity of A as observed from B's frame of reference.

$$
v_{AB} = v_A - v_B
$$

where v_A and v_B are velocities measured with respect to a common ground frame.

### 8.2 Cases

**Case 1: Same direction (v_A and v_B both positive)**

$$
v_{AB} = v_A - v_B
$$

* If v_A > v_B: A moves away from B (positive relative velocity).
* If v_A < v_B: A appears to move backward (negative relative velocity).
* If v_A = v_B: **relative velocity = 0** → objects appear stationary with respect to each other.

**Case 2: Opposite directions**

If A moves at +v_A and B moves at −v_B:

$$
v_{AB} = v_A - (-v_B) = v_A + v_B
$$

> 🔑  **Classic Example (NCERT 2.14)** : Police van at +30 km h⁻¹ fires bullet at +150 m s⁻¹. Thief's car moves at +192 km h⁻¹ = +160/3 m s⁻¹.
>
> * Bullet speed (ground frame) = 150 + 30×(5/18) = 150 + 8.33 = 158.33 m s⁻¹
> * Relative speed of bullet w.r.t. thief's car = 158.33 − 53.33 = **105 m s⁻¹**

### 8.3 Rain–Man Problem (Common NEET Application)

For two objects moving in the same direction:

* Their positions at time t: x_A(t) = x_A0 + v_A · t; x_B(t) = x_B0 + v_B · t
* Separation: x_A − x_B = (x_A0 − x_B0) + (v_A − v_B) · t
* If v_A = v_B: separation remains constant →  **they never meet or separate further** .

---

## SECTION 9 — GRAPHICAL INTERPRETATION SUMMARY ⭐⭐⭐

### x–t Graph

| Feature                 | Physical Meaning             |
| ----------------------- | ---------------------------- |
| Slope (dx/dt)           | Instantaneous velocity       |
| Positive slope          | Moving in positive direction |
| Negative slope          | Moving in negative direction |
| Zero slope (horizontal) | Object at rest               |
| Curve bending upward    | Positive acceleration        |
| Curve bending downward  | Negative acceleration        |
| Straight line           | Uniform velocity (a = 0)     |

### v–t Graph

| Feature                           | Physical Meaning                                |
| --------------------------------- | ----------------------------------------------- |
| Slope (dv/dt)                     | Instantaneous acceleration                      |
| Area under curve                  | Displacement                                    |
| Horizontal line                   | Uniform velocity (a = 0)                        |
| Straight line with positive slope | Uniform positive acceleration                   |
| Straight line with negative slope | Uniform deceleration                            |
| Crossing the time axis (v = 0)    | Object momentarily at rest / reverses direction |

> ⚠️  **Board Trap** : A v–t graph crossing the x-axis means the object  **reverses direction** , NOT that it stops forever. The area below the x-axis represents displacement in the negative direction.

### a–t Graph

| Feature                    | Physical Meaning             |
| -------------------------- | ---------------------------- |
| Area under curve           | Change in velocity (Δv)     |
| Constant (horizontal line) | Uniformly accelerated motion |

---

## SECTION 10 — POINTS TO PONDER (NCERT) ⭐

1. Origin and positive direction are a **choice** — specify them first.
2. If speed is **increasing** → a is in the **same direction** as v. If speed is **decreasing** → a is **opposite** to v.
3. Sign of acceleration depends on choice of positive direction — **not** inherently linked to speeding up/down.
4. Zero velocity at an instant ≠ zero acceleration at that instant (e.g., ball at topmost point).
5. Kinematic quantities are **algebraic** — always substitute with correct signs.
6. Kinematic equations hold **only for constant acceleration** (magnitude AND direction constant).

---

## SECTION 11 — DIMENSIONAL FORMULAE (Chapter 2 Quantities)

| Physical Quantity          | Symbol | Dimensional Formula | SI Unit |
| -------------------------- | ------ | ------------------- | ------- |
| Displacement               | Δx    | [L]                 | m       |
| Velocity (avg & inst.)     | v      | [LT⁻¹]            | m s⁻¹ |
| Speed                      | —     | [LT⁻¹]            | m s⁻¹ |
| Acceleration (avg & inst.) | a      | [LT⁻²]            | m s⁻² |
| Time                       | t      | [T]                 | s       |

---

## SECTION 12 — QUICK FORMULA REFERENCE ⭐⭐⭐

| Formula               | Name                       | Condition                |
| --------------------- | -------------------------- | ------------------------ |
| v = v₀ + at          | 1st equation of motion     | Constant a; x₀ = 0      |
| x = v₀t + ½at²     | 2nd equation of motion     | Constant a; x₀ = 0      |
| v² = v₀² + 2ax     | 3rd equation of motion     | Constant a; x₀ = 0      |
| x = ½(v + v₀)t      | Average velocity form      | Constant a               |
| v̄ = Δx/Δt         | Average velocity (general) | Any motion               |
| v̄_speed = path/time | Average speed (general)    | Any motion               |
| v = dx/dt             | Instantaneous velocity     | Any motion               |
| a = dv/dt = v(dv/dx)  | Instantaneous acceleration | Any motion               |
| v_AB = v_A − v_B     | Relative velocity          | Any 1D motion            |
| dₛ = v₀²/(2a)      | Stopping distance          | Uniform deceleration     |
| tᵣ = √(2d/g)        | Reaction time              | Ruler drop experiment    |
| y = −½gt²          | Free fall from rest        | v₀ = 0, downward +ve    |
| Distances ratio       | 1 : 3 : 5 : 7 : ...        | Galileo's odd number law |

---

## SECTION 13 — COMMON EXAM TRAPS ⭐⭐⭐

1. **Sign of acceleration ≠ direction of motion** : Negative a doesn't mean object moves backward; it depends on initial velocity.
2. **v = 0 does NOT mean a = 0** : At the highest point of projectile, v = 0 but a = g downward.
3. **Average speed ≠ |Average velocity|** when the object reverses direction.
4. **Instantaneous speed = |Instantaneous velocity|** always (unlike the averages).
5. **Kinematic equations need constant acceleration** : Don't use v = v₀ + at for variable acceleration scenarios.
6. **Area under v–t graph = displacement** (not distance). To find total distance when direction changes, split and add magnitudes separately.
7. **Relative velocity in same direction** : v_rel = v_A − v_B. In opposite directions: v_rel = v_A + v_B.
8. **Stopping distance ∝ v₀²** : Doubling speed → 4× stopping distance (a very common road-safety based question).
9. **Galileo's Odd Numbers** : Only valid for free fall from REST (v₀ = 0).
10. **Sharp kinks in graphs** → non-physical (functions not differentiable at those points).

---

*End of Core Notes — Ch. 2: Motion in a Straight Line*
*Exam Tags: Board · NEET · JEE Mains · JEE Advanced*
