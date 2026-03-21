# CHAPTER 4: LAWS OF MOTION

### Complete Study Notes | Board · NEET · JEE Layered

---

## 🗺️ CONCEPT ROADMAP

```
[Chapter 3 — Kinematics: Describing Motion]
        ↓
[WHY does motion change? → FORCE]
        ↓
[Aristotle's Fallacy] → Wrong intuition corrected by Galileo
        ↓
[Law of Inertia] → Newton's First Law
        ↓
[Momentum (p = mv)]
        ↓
[Newton's Second Law: F = dp/dt = ma]
    ├── Impulse = F·Δt = Δp
    └── Units: Newton (N = kg m s⁻²)
        ↓
[Newton's Third Law: FAB = −FBA]
        ↓
[Conservation of Momentum] ← derived from 2nd + 3rd law
        ↓
[Equilibrium of a Particle] → ΣF = 0
        ↓
[Common Forces in Mechanics]
    ├── Gravity (mg)
    ├── Normal Force (N)
    ├── Tension (T)
    ├── Spring Force (F = −kx)
    └── Friction (static fs, kinetic fk)
        ↓
[Circular Motion] → Centripetal Force = mv²/R
    ├── Level Road: f provides centripetal force
    └── Banked Road: N + f together provide centripetal force
```

---

## SECTION 1 — ARISTOTLE'S FALLACY AND THE LAW OF INERTIA

### 1.1 Aristotle's (Wrong) View

> **Aristotelian Law of Motion:** An external force is required to keep a body in motion.

**Why it seems right:** A toy car comes to rest once you stop pushing it. A ball rolling on the floor slows down.

**Why it is wrong:** The car and ball slow down because of **friction and air resistance** — opposing forces. If these were absent, no force would be needed to sustain motion.

> 🔑 **Aristotle's error:** He confused the applied force needed to overcome friction with the force needed to sustain motion. He did not account for friction as a separate opposing force.

### 1.2 Galileo's Correction — The Law of Inertia

Galileo studied motion on inclined planes and a double-inclined plane:

* A ball rolling **down** an incline: **accelerates**
* A ball rolling **up** an incline: **decelerates**
* Motion on a **horizontal** frictionless plane: **constant velocity** (neither accelerates nor decelerates)

**Double inclined plane experiment:** A ball released from one incline rises to the same height on the other, regardless of the slope angle. As slope → 0 (horizontal), the ball travels an infinite distance — it never stops.

**Galileo's Conclusion:**
> The natural state of a body (rest OR uniform motion) does NOT require a net force to sustain it. A body resists any change in its state — this property is called **INERTIA**.

> 🔑 **Inertia** = the inherent tendency of a body to **resist any change** in its state of rest or of uniform motion. Inertia means **"resistance to change"**.

---

## SECTION 2 — NEWTON'S FIRST LAW OF MOTION ⭐

### 2.1 Statement

> **Every body continues to be in its state of rest or of uniform motion in a straight line unless compelled by some external force to act otherwise.**

**Equivalent simple form:**
> **If the net external force on a body is zero, its acceleration is zero.**

$$\sum \mathbf{F} = 0 \implies \mathbf{a} = 0$$

### 2.2 Implications

* State of rest (v = 0) and state of uniform motion (v = constant ≠ 0) are **physically equivalent** — both have zero acceleration, both require zero net force.
* A body at rest is NOT in a "more natural" state than a body in uniform motion.
* **First Law defines Force:** Force is that external cause which changes (or tends to change) the state of rest or uniform motion of a body.
* **First Law defines Inertial Frame:** A reference frame in which the First Law holds is called an **inertial frame of reference**.

### 2.3 Examples of First Law in Daily Life

| Situation | Explanation |
|---|---|
| Passenger thrown backward when bus starts | Passenger's body tends to remain at rest (inertia of rest) while floor moves forward |
| Passenger thrown forward when bus brakes | Body tends to continue moving forward (inertia of motion) |
| Tablecloth pulled away from dishes | Dishes tend to remain at rest (inertia) if pulled fast enough |
| Coin falls into glass when card is flicked | Coin's inertia of rest keeps it stationary; card moves away |
| Astronaut in deep space, rockets off | Continues with constant velocity (no net force) |

> ⚠️ **Exam Note:** The First Law is NOT merely a special case of the Second Law. It independently defines the concept of force and the concept of an inertial frame of reference.

---

## SECTION 3 — MOMENTUM AND NEWTON'S SECOND LAW ⭐⭐

### 3.1 Momentum

> **Momentum (p)** of a body is the product of its **mass** and **velocity**.

$$\mathbf{p} = m\mathbf{v} \quad \text{...(4.1)}$$

* **Vector quantity** — same direction as velocity
* SI unit: **kg m s⁻¹** = **N s**
* Dimensional formula: **[MLT⁻¹]**

**Why momentum matters — Common Experiences:**

| Observation | What it shows |
|---|---|
| Truck harder to stop than bicycle at same speed | Mass matters |
| Bullet easily pierces tissue at high speed; barely at low speed | Speed matters |
| Cricketer pulls hands back to catch | Slower deceleration → less force |
| Same force applied to heavy and light bodies for same time → same Δp | Momentum is the key quantity |

### 3.2 Newton's Second Law — Statement

> **The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction in which the force acts.**

$$\mathbf{F} \propto \frac{\Delta \mathbf{p}}{\Delta t} \implies \mathbf{F} = k\frac{d\mathbf{p}}{dt}$$

Taking k = 1 (defines the SI unit of force):

$$\boxed{\mathbf{F} = \frac{d\mathbf{p}}{dt} = m\mathbf{a}} \quad \text{...(4.5)}$$

(for a body of fixed mass m)

**SI Unit of Force:** 1 Newton (N) = force that produces an acceleration of 1 m s⁻² in a body of mass 1 kg.

$$1 \text{ N} = 1 \text{ kg m s}^{-2} \quad \text{Dimensional formula: [MLT}^{-2}\text{]}$$

### 3.3 Key Points About the Second Law

**1. Consistency with First Law:**
F = 0 → dp/dt = 0 → p = constant → a = 0. Fully consistent. ✓

**2. It is a Vector Law:**
Equivalent to three scalar equations:
$$F_x = ma_x \qquad F_y = ma_y \qquad F_z = ma_z \quad \text{...(4.6)}$$

A force along x changes only the x-component of velocity; y and z components remain unchanged. This is why horizontal velocity of a projectile stays constant under vertical gravity.

**3. It is a Local Relation:**
Force F at a point **at a certain instant** determines acceleration a at that **same point at the same instant**. No "memory" of past motion.

> 🔑 **Classic Example:** The moment a stone is released from an accelerated train, it has no horizontal force (if air resistance neglected). Its past horizontal acceleration is irrelevant.

**4. F is the Net External Force:**
F = vector sum of ALL external forces on the body. Internal forces do not count.

**5. Applicable to systems:**
Law applies to a particle AND to a rigid body or system of particles, where F = total external force and a = acceleration of centre of mass.

### 3.4 Impulse ⭐

When a **large force** acts for a **very short time** (bat hitting ball, hammer striking nail):

$$\text{Impulse} = \mathbf{F} \times \Delta t = \Delta \mathbf{p} \quad \text{...(4.7)}$$

* SI unit: **N s** = **kg m s⁻¹**
* Dimensional formula: **[MLT⁻¹]** (same as momentum)
* **Impulse = Change in momentum** — measurable even when F and Δt are individually unknown

**Why a cricketer draws hands back while catching:**
By increasing Δt of contact, the same Δp (change in momentum = impulse) is achieved with a **smaller force** F. This prevents injury.

> ⚠️ **Impulsive force is NOT a new type of force.** It is simply a large force acting for a short time. Newtonian mechanics treats it exactly like any other force.

### 3.5 Solved Examples

**NCERT Example 4.2:** Bullet (m = 0.04 kg, u = 90 m s⁻¹) stopped in d = 0.6 m.

$$a = \frac{-u^2}{2s} = \frac{-90 \times 90}{2 \times 0.6} = -6750 \text{ m s}^{-2}$$
$$F = ma = 0.04 \times 6750 = 270 \text{ N (average resistive force)}$$

**NCERT Example 4.4:** Batsman hits ball (m = 0.15 kg) back at same speed 12 m s⁻¹.
$$\text{Impulse} = \Delta p = 0.15 \times 12 - (0.15 \times (-12)) = 3.6 \text{ N s}$$

---

## SECTION 4 — NEWTON'S THIRD LAW OF MOTION ⭐⭐

### 4.1 Statement

> **To every action, there is always an equal and opposite reaction.**

More precisely:
> **Forces always occur in pairs. The force on body A by body B is equal and opposite to the force on body B by A.**

$$\mathbf{F}_{AB} = -\mathbf{F}_{BA} \quad \text{...(4.8)}$$

### 4.2 Critical Features of the Third Law

**1. "Action" and "Reaction" are forces:**
The words are misleading — neither precedes the other. Both forces act **simultaneously**. No cause-effect relation is implied. Either force can be labelled action.

**2. Action and Reaction act on DIFFERENT bodies:**
They act on different bodies, so they **never cancel each other**. When considering the motion of body A, only F_BA (force ON A by B) is relevant. Adding F_AB to it is a conceptual error.

**3. Holds for all types of forces:**
Contact forces (normal, friction, tension) AND non-contact forces (gravity, magnetic) all obey the Third Law.

**4. Internal forces cancel in pairs:**
Within a system of particles, all action-reaction pairs between particles within the system sum to zero. The Second Law for the system uses only external forces.

### 4.3 Examples of Third Law

| Action | Reaction |
|---|---|
| Earth pulls stone downward (gravity) | Stone pulls Earth upward (same magnitude, Earth barely moves) |
| Horse pulls cart forward | Cart pulls horse backward |
| Foot pushes ground backward | Ground pushes foot forward (friction → walking is possible) |
| Rocket expels gas backward | Gas pushes rocket forward |
| Compressed spring pushes hand | Hand pushes spring |
| Gun exerts forward force on bullet | Bullet exerts backward force on gun (recoil) |

> ⚠️ **Classic Misconception:** "Action and reaction cancel → nothing can move." WRONG — they act on DIFFERENT bodies. For motion of any one body, only the force ON THAT BODY matters.

### 4.4 Solved: Billiard Balls (NCERT Example 4.5)

Two identical balls strike a rigid wall at different angles but same speed u, rebound without speed change.

**Case (a):** Normal incidence
* x-impulse on ball = −2mu; y-impulse = 0
* Force on wall: normal to wall, in +x direction

**Case (b):** Incidence at 30° to normal
* x-impulse on ball = −2mu cos30°; y-impulse = 0 (py unchanged)
* Force on wall: still **normal to wall** in +x direction (NOT at 30°!)

**Ratio of impulses (a):(b):** = 2mu / (2mu cos30°) = 1/cos30° = 2/√3 ≈ 1.15

---

## SECTION 5 — CONSERVATION OF MOMENTUM ⭐⭐⭐

### 5.1 Derivation from 2nd and 3rd Laws

Two bodies A and B interact for time Δt:
* By 3rd Law: **F**_AB = −**F**_BA
* By 2nd Law: **F**_AB·Δt = Δ**p**_A and **F**_BA·Δt = Δ**p**_B

Adding: Δ**p**_A + Δ**p**_B = 0

$$\therefore \quad \mathbf{p}_A' + \mathbf{p}_B' = \mathbf{p}_A + \mathbf{p}_B \quad \text{...(4.9)}$$

### 5.2 Statement

> **The total momentum of an isolated system of interacting particles is conserved.**

$$\sum \mathbf{p}_i = \text{constant} \quad \text{when } \sum \mathbf{F}_{ext} = 0$$

**Isolated system:** Net external force on the system is zero.

> 🔑 This holds whether the collision is **elastic or inelastic**. In elastic collisions, kinetic energy is additionally conserved.

### 5.3 Applications

**Gun recoil:**
$$\text{Initial: } \mathbf{p}_{total} = 0$$
$$\therefore m_{gun} \cdot v_{gun} + m_{bullet} \cdot v_{bullet} = 0$$
$$v_{gun} = -\frac{m_{bullet}}{m_{gun}} \cdot v_{bullet}$$

**Explosion:** Total momentum before = total momentum after. If at rest initially, all fragment momenta sum to zero.

**Collision:**
$$m_A \mathbf{v}_A + m_B \mathbf{v}_B = m_A \mathbf{v}_A' + m_B \mathbf{v}_B'$$

---

## SECTION 6 — EQUILIBRIUM OF A PARTICLE ⭐

### 6.1 Definition

> A particle is in **mechanical equilibrium** when the **net external force** on it is **zero**.

$$\sum \mathbf{F} = 0 \iff \mathbf{a} = 0$$

The particle is either **at rest** (static equilibrium) or in **uniform linear motion** (dynamic equilibrium).

### 6.2 Conditions

For **two forces**: F₁ = −F₂ (equal and opposite)

For **three concurrent forces**: F₁ + F₂ + F₃ = 0, which gives:
$$F_{1x} + F_{2x} + F_{3x} = 0 \quad \text{and} \quad F_{1y} + F_{2y} + F_{3y} = 0 \quad \text{...(4.12)}$$

**Graphical:** Forces (as vectors) form a **closed triangle** (or closed polygon for n forces), all arrows in the same sense.

### 6.3 Free-Body Diagram (FBD) — The Essential Tool

A **free-body diagram** shows:
* The isolated body (system) of interest
* ALL external forces acting ON it from outside the system
* Forces the body exerts on others are NOT shown

**Steps:**
1. Isolate the body of interest (draw it separately)
2. Show all external forces: gravity (mg ↓), normal (N ⊥ surface), tension (T along rope, away from body), friction (f along surface, opposing impending/actual motion), applied forces
3. Label knowns; leave unknowns as variables
4. Apply ΣFₓ = maₓ and ΣFᵧ = maᵧ

### 6.4 Solved: Rope with Horizontal Force (NCERT Example 4.6)

6 kg mass suspended from ceiling by 2 m rope; 50 N horizontal force at midpoint P.

**FBD of weight:** T₂ = 6 × 10 = 60 N

**FBD at P** (three forces: T₁ upward-left, T₂ downward, 50 N rightward):
$$T_1\cos\theta = 60 \text{ N} \qquad T_1\sin\theta = 50 \text{ N}$$
$$\tan\theta = \frac{50}{60} = \frac{5}{6} \implies \theta = \tan^{-1}\!\left(\frac{5}{6}\right) \approx 40°$$

---

## SECTION 7 — COMMON FORCES IN MECHANICS ⭐⭐

### 7.1 Gravitational Force (Weight)

$$\mathbf{W} = m\mathbf{g}$$

* Acts **vertically downward** on every body near Earth's surface
* **Non-contact force** — acts through empty space
* g ≈ 9.8 m s⁻² (take g = 10 m s⁻² in numerical problems unless stated)
* Dimensional formula of weight: [MLT⁻²]

### 7.2 Normal Force (N or R) ⭐

* **Component of contact force perpendicular** to the surfaces in contact
* Acts **away from the surface** onto the body (always a push, never a pull)
* **Self-adjusting force** — adjusts to maintain equilibrium (up to breaking point of surface)
* NOT always equal to mg

| Situation | Normal Force |
|---|---|
| Body at rest on horizontal floor | N = mg |
| Body on incline at angle θ | N = mg cosθ |
| Body in lift accelerating up (+a) | N = m(g + a) |
| Body in lift accelerating down (+a) | N = m(g − a) |
| Free fall | N = 0 |

> ⚠️ mg and N are NOT an action-reaction pair. They act on the SAME body. Action-reaction would be N on body by floor and N on floor by body.

### 7.3 Tension (T) ⭐

* Force transmitted through a string, rope, chain, or cable under stretch
* Acts along the string, **directed away from the body** toward the string (pull)
* For a **massless, inextensible string** over a **smooth (frictionless) pulley**: T is the same throughout the string
* For a string with mass: tension varies with position

### 7.4 Spring Force (Hooke's Law)

$$F = -kx$$

* **k** = spring constant, unit: N m⁻¹, Dimensional formula: **[MT⁻²]**
* **x** = extension (+) or compression (−) from natural length
* Negative sign: force is a **restoring force** (opposes displacement)
* Valid only for small displacements (elastic limit not exceeded)

### 7.5 Microscopic Origin of Contact Forces

All contact forces ultimately arise from **electrical forces** between charged constituents (nuclei and electrons) of matter at the molecular level. At the macroscopic scale, we treat them empirically as normal force, friction, etc.

---

## SECTION 8 — FRICTION ⭐⭐⭐

### 8.1 What is Friction?

**Friction** is the **component of the contact force parallel to the surfaces in contact** that opposes relative motion (actual or impending) between them.

> 🔑 Friction opposes **relative motion** between surfaces — not absolute motion. A box accelerating with a train has no relative motion with the train floor, so static friction accelerates it along with the train.

**Microscopic origin:** Surface irregularities interlock. Electrical forces between molecules at contact patches resist sliding. Rolling friction arises from deformation at the contact point.

### 8.2 Static Friction (fs) ⭐⭐

**Static friction** opposes **impending** relative motion.

* Exists only when there is an applied force
* Is **self-adjusting**: magnitude equals applied force, direction opposes impending motion
* Has a **maximum value** beyond which body starts sliding

$$f_s \leq \mu_s N \quad \text{...(4.14)}$$

$$(f_s)_\text{max} = \mu_s N \quad \text{...(4.13)}$$

**μs** = coefficient of static friction (dimensionless, depends only on surface pair)

### 8.3 Kinetic (Sliding) Friction (fk) ⭐⭐

**Kinetic friction** opposes **actual** relative sliding motion.

$$f_k = \mu_k N \quad \text{...(4.15)}$$

**μk** = coefficient of kinetic friction

**Properties (empirical laws):**
* μk < μs (kinetic friction < maximum static friction)
* Independent of area of contact
* Nearly independent of velocity of sliding
* These are **empirical relations** (approximate, but practically useful)

### 8.4 Comparison: Static vs Kinetic Friction

| Feature | Static Friction (fs) | Kinetic Friction (fk) |
|---|---|---|
| Acts when | No relative sliding | Surfaces sliding |
| Opposes | Impending motion | Actual motion |
| Magnitude | 0 to (fs)max = μsN | Fixed = μkN |
| Nature | Self-adjusting | Constant for given N |
| Value vs other | (fs)max > fk | fk < (fs)max |
| Coefficient | μs | μk < μs |

### 8.5 Angle of Friction and Angle of Repose

**Angle of friction (λ):** Angle between the resultant contact force and the normal to the surface.
$$\tan\lambda = \frac{f_s}{N} = \mu_s$$

**Angle of repose (θr):** The steepest angle of an incline on which a body rests without sliding.
$$\mu_s = \tan\theta_r$$

> 🔑 θr and λ are equal: angle of repose = angle of friction.
> If incline angle θ > θr, the body slides. θr is independent of the mass of the body.

### 8.6 Rolling Friction

* Theoretically, a sphere/ring rolling without slipping has one point of contact — no relative sliding → no friction
* In practice: small contact area due to deformation → small rolling friction exists
* Rolling friction << kinetic friction (2–3 orders of magnitude smaller)
* **This is why wheels were invented.** Ball bearings and air cushions further reduce friction.

### 8.7 Advantages and Disadvantages of Friction

**Friction is harmful (in machines):** Dissipates energy as heat; wears out parts.
**Reduction methods:** Lubricants; ball bearings (rolling replaces sliding); air cushions.

**Friction is essential:**
* Walking: foot pushes backward → friction pushes forward
* Car acceleration and braking: tyres on road
* Holding/gripping objects
* Brakes in vehicles and machines

### 8.8 Solved: Box in Accelerating Train (NCERT 4.7)

Max acceleration of train so box doesn't slide (μs = 0.15):
$$ma = f_s \leq \mu_s N = \mu_s mg \implies a \leq \mu_s g$$
$$a_{max} = 0.15 \times 10 = 1.5 \text{ m s}^{-2}$$

### 8.9 Solved: Block on Incline (NCERT 4.8)

Incline gradually tilted; block just slides at θ = 15°.
$$\mu_s = \tan 15° = 0.27$$

---

## SECTION 9 — CIRCULAR MOTION ⭐⭐⭐

### 9.1 Centripetal Force

In UCM, centripetal acceleration = v²/R (toward centre). Applying Second Law:

$$\boxed{f_c = \frac{mv^2}{R}} \quad \text{...(4.16)}$$

> ⚠️ **CRITICAL:** Centripetal force is NOT a new, separate type of force. It is simply a name for the **net radially inward force** in circular motion, which is ALWAYS provided by some real physical force.

| Circular motion situation | Real force acting as centripetal force |
|---|---|
| Stone on string, horizontal circle | Tension in string |
| Planet orbiting Sun | Gravitational pull of Sun |
| Car turning on level road | Static friction |
| Car on banked road | Component of N + component of friction |
| Electron around nucleus (Bohr model) | Electrostatic attraction |
| Roller coaster at top of loop | Normal force + weight |

### 9.2 Motion of Car on a Level Road ⭐⭐

Three forces: mg (down), N (up), friction f (inward, horizontal centripetal).

Vertical: N = mg ...(4.17)

Centripetal: f = mv²/R ≤ μsN = μsmg

$$\boxed{v_{max} = \sqrt{\mu_s Rg}} \quad \text{...(4.18)}$$

> 🔑 vmax is **independent of the mass** of the vehicle.

### 9.3 Motion of Car on a Banked Road ⭐⭐⭐

Road banked at angle θ. Forces: mg (down), N (perpendicular to banked surface), friction f (along banked surface).

**At optimum speed v₀** (friction not needed, f = 0):

Vertical: N cosθ = mg
Horizontal: N sinθ = mv₀²/R

$$\boxed{v_0 = \sqrt{Rg\tan\theta}} \quad \text{...(4.22)}$$

At v₀: no friction needed → no tyre wear, optimal for fuel economy.

**At maximum speed** (friction acts DOWN the slope, f = μsN):
$$\boxed{v_{max} = \sqrt{Rg \cdot \frac{\tan\theta + \mu_s}{1 - \mu_s\tan\theta}}} \quad \text{...(4.21)}$$

**At minimum speed** (friction acts UP the slope, f = μsN):
$$v_{min} = \sqrt{Rg \cdot \frac{\tan\theta - \mu_s}{1 + \mu_s\tan\theta}}$$

> 🔑 vmax (banked) > vmax (level road) for same R and μs. Banking is always beneficial.
> For μs = 0: car must travel at exactly v₀. Below or above, it slides.

**Solved: NCERT Example 4.10**
Cyclist at 18 km/h (= 5 m s⁻¹) on circular turn, R = 3 m, μs = 0.1
Check: μsRg = 0.1 × 3 × 10 = 3 m² s⁻² but v² = 25 m² s⁻²
Since v² > μsRg, **the cyclist will slip**.

**Solved: NCERT Example 4.11**
Racetrack: R = 300 m, θ = 15°, μs = 0.2
Optimum speed: v₀ = √(300 × 9.8 × tan15°) = **28.1 m s⁻¹**
Maximum speed: vmax = **38.1 m s⁻¹**

---

## SECTION 10 — SOLVING PROBLEMS IN MECHANICS ⭐⭐

### 10.1 Systematic Approach

1. **Draw schematic** of the entire assembly (bodies, strings, pulleys, inclines, etc.)
2. **Choose your system** — the body or set of bodies whose motion you analyse
3. **Draw Free-Body Diagram (FBD)** — isolate the system and show ALL external forces
4. **Identify knowns and unknowns** — mark given magnitudes and directions
5. **Apply Newton's Laws** — write ΣF = ma along each axis
6. **Use Third Law** — if force on A by B is known, force on B by A = equal magnitude, opposite direction
7. **Solve simultaneous equations**

### 10.2 Lift Problems (Standard Board/NEET Application)

Person of mass m in a lift (weighing scale reads Normal force N):

| Lift condition | Equation | Apparent weight N | Sensation |
|---|---|---|---|
| Rest or constant velocity | N = mg | mg | Normal |
| Accelerating upward (a) | N − mg = ma | m(g+a) | Heavier |
| Accelerating downward (a) | mg − N = ma | m(g−a) | Lighter |
| Free fall (a = g down) | mg − N = mg | 0 | Weightless |

### 10.3 Connected Bodies — Atwood Machine

Two masses m₁ > m₂ over frictionless pulley, inextensible string:

**For m₁ (going down):** m₁g − T = m₁a
**For m₂ (going up):** T − m₂g = m₂a

Adding: $$(m_1 - m_2)g = (m_1 + m_2)a$$

$$\boxed{a = \frac{(m_1 - m_2)g}{m_1 + m_2}} \qquad \boxed{T = \frac{2m_1 m_2 g}{m_1 + m_2}}$$

### 10.4 Solved: Block on Floor + Iron Cylinder (NCERT Example 4.12)

Block (2 kg) on floor; iron cylinder (25 kg) placed on block; both accelerate down at 0.1 m s⁻².

(a) Before (equilibrium): R = 20 N; action of block on floor = 20 N downward.
(b) After: System (27 kg) accelerating at 0.1 m s⁻² downward.
   ΣF: 270 − R′ = 27 × 0.1 = 2.7 N
   R′ = 267.3 N (action of system on floor = 267.3 N downward)

---

## 📋 QUICK REFERENCE — All Laws and Formulas

```
NEWTON'S LAWS:
┌──────────────────────────────────────────────────────────────┐
│ First Law:   ΣF = 0 ↔ a = 0  (inertia; defines force)      │
│ Second Law:  F = dp/dt = ma  (1 N = 1 kg·m·s⁻²)            │
│ Third Law:   F_AB = −F_BA  (forces in pairs; diff. bodies)  │
└──────────────────────────────────────────────────────────────┘

MOMENTUM AND IMPULSE:
┌──────────────────────────────────────────────────────────────┐
│  p = mv              [MLT⁻¹]    SI: kg m s⁻¹               │
│  Impulse = FΔt = Δp  [MLT⁻¹]   SI: N s                    │
│  Conservation: p_total = const  when ΣF_ext = 0             │
└──────────────────────────────────────────────────────────────┘

FRICTION:
┌──────────────────────────────────────────────────────────────┐
│  Static:  fs ≤ μsN;  (fs)max = μsN                         │
│  Kinetic: fk = μkN;  always μk < μs                        │
│  Angle of repose: tan θr = μs                               │
└──────────────────────────────────────────────────────────────┘

CIRCULAR MOTION:
┌──────────────────────────────────────────────────────────────┐
│  Centripetal force: fc = mv²/R                              │
│  Level road: v_max = √(μsRg)                               │
│  Banked road: v₀ = √(Rg tanθ)     [no friction]           │
│  Banked vmax = √[Rg(tanθ+μs)/(1−μs tanθ)]                 │
└──────────────────────────────────────────────────────────────┘
```

---

## ⚡ POINTS TO PONDER (High-Yield for Exams)

1. **Force ≠ direction of motion.** Force (and acceleration) are parallel to each other, but need not be parallel to velocity.

2. **v = 0 does NOT imply F = 0.** Ball at maximum height of throw: v = 0 but F = mg, a = g.

3. **ma is NOT a force.** In F = ma, "ma" is the effect of force F, not another force.

4. **Centripetal force is not a new kind of force.** Always identify the real force (tension, gravity, friction) acting as centripetal force.

5. **fs = μsN is WRONG in general.** Static friction equals the applied force up to a maximum of μsN. Write fs = μsN only at the limiting condition.

6. **mg = N only in equilibrium on a horizontal surface.** In a lift, on an incline, or during acceleration, they differ.

7. **Third law forces act on different bodies.** They never cancel each other for motion of any single body.

8. **Aristotle was wrong** — friction (not inertia) makes bodies come to rest. In the absence of friction, a body in motion remains in motion forever.