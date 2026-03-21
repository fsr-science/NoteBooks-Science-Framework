# CHAPTER 9: MECHANICAL PROPERTIES OF FLUIDS

### Complete Study Notes | Board · NEET · JEE Layered

---

## 🗺️ CONCEPT ROADMAP

```
[Chapter 8 — Solids: definite shape, resist deformation]
        ↓
[Fluids = Liquids + Gases — NO definite shape; can FLOW]
    → Key property: cannot sustain shearing stress (flows instead)
        ↓
[PRESSURE — force per unit area (normal force, scalar)]
    Variation with depth | Pascal's Law | Gauge vs Absolute
        ↓
[PASCAL'S LAW — pressure transmitted undiminished in all directions]
    → Hydraulic Lift | Hydraulic Brakes
        ↓
[FLUID DYNAMICS — study of fluids in motion]
    Streamline flow | Equation of Continuity (mass conservation)
        ↓
[BERNOULLI'S PRINCIPLE — energy conservation in fluid flow]
    P + ½ρv² + ρgh = constant
    → Torricelli's Law | Dynamic Lift | Magnus Effect | Aerofoil
        ↓
[VISCOSITY — internal friction in flowing fluids]
    Coefficient η | Stokes' Law | Terminal Velocity
        ↓
[SURFACE TENSION — extra energy at liquid surfaces]
    Surface Energy | Angle of Contact | Drops & Bubbles | Capillary Rise
```

---

## SECTION 1 — INTRODUCTION: WHAT ARE FLUIDS? ⭐

### 1.1 Fluids vs Solids

| Property | Solids | Liquids | Gases |
|---|---|---|---|
| Definite Shape | ✓ | ✗ | ✗ |
| Definite Volume | ✓ | ✓ | ✗ |
| Can Flow | ✗ | ✓ | ✓ |
| Compressibility | Very low | Low | High |
| Resistance to shear | High | ~Zero | ~Zero |

- **Fluids** = any substance that can flow = liquids + gases.
- The key distinction: **fluids cannot sustain shearing stress**. When a shear force is applied, they flow rather than deform elastically.
- The shearing stress of fluids is about **10⁶ times smaller** than that of solids — this is why fluids flow under even very slight tangential forces.

### 1.2 Fluids at Rest vs Fluids in Motion

- **Hydrostatics** = study of fluids at rest (Sections 9.1–9.2)
- **Fluid Dynamics / Hydrodynamics** = study of fluids in motion (Sections 9.3–9.4)

---

## SECTION 2 — PRESSURE ⭐⭐⭐

### 2.1 Definition of Pressure

When a fluid exerts force on a surface, the force is always **perpendicular (normal)** to the surface (for fluids at rest). If there were a component parallel to the surface, the fluid would flow — since fluids at rest cannot do that, the force must be purely normal.

> **Pressure** = Normal force per unit area

$$\boxed{P_{av} = \frac{F}{A}} \quad \text{...(9.1)}$$

In the limiting sense (for a point):

$$P = \lim_{\Delta A \to 0} \frac{\Delta F}{\Delta A} \quad \text{...(9.2)}$$

- **SI unit:** N m⁻² = **Pascal (Pa)** (named after Blaise Pascal, 1623–1662)
- **Dimensional formula:** [ML⁻¹T⁻²]
- **Pressure is a scalar quantity.** The force in the numerator is the normal component only; no single direction can be assigned to pressure.
- Other common units:
  - 1 atm = 1.013 × 10⁵ Pa (pressure exerted by atmosphere at sea level)
  - 1 bar = 10⁵ Pa
  - 1 torr = 133 Pa = 1 mm of Hg (named after Torricelli)

### 2.2 Density

$$\boxed{\rho = \frac{m}{V}} \quad \text{...(9.3)}$$

- **SI unit:** kg m⁻³
- **Dimensional formula:** [ML⁻³]
- Positive scalar quantity.
- Liquids: nearly constant (incompressible) → density essentially constant with pressure.
- Gases: large variation in density with pressure and temperature.
- Density of water at 4°C (277 K) = 1.0 × 10³ kg m⁻³

**Relative density** (specific gravity) = density of substance / density of water at 4°C → dimensionless positive scalar.

**Important density values (at STP):**

| Fluid | ρ (kg m⁻³) |
|---|---|
| Water | 1.00 × 10³ |
| Sea water | 1.03 × 10³ |
| Mercury | 13.6 × 10³ |
| Whole blood | 1.06 × 10³ |
| Ethyl alcohol | 0.806 × 10³ |
| Air | 1.29 |
| Oxygen | 1.43 |
| Hydrogen | 9.0 × 10⁻² |

---

## SECTION 3 — PASCAL'S LAW ⭐⭐⭐

### 3.1 Pressure is Same at All Points at Same Height

Consider a prismatic fluid element ABC-DEF inside a fluid at rest. By equilibrium analysis (resolving forces along all three faces), one can prove:

$$P_a = P_b = P_c \quad \text{...(9.4)}$$

> **Pascal's Law (Form 1):** Pressure exerted by a fluid at rest is the **same in all directions** at any given point.

This also confirms pressure is NOT a vector — it has no preferred direction.

For a horizontal bar of fluid: the pressure must be equal at both ends (else net force → flow, contradicting rest).

> **Pascal's Law (Form 2):** The pressure in a fluid at rest is the **same at all points at the same horizontal level.**

### 3.2 Variation of Pressure with Depth

Consider a cylindrical fluid element of base area A and height h:

- Force down (from pressure above): P₁A
- Force up (from pressure below): P₂A
- Weight of element: mg = ρhAg

Equilibrium: (P₂ − P₁)A = mg = ρhAg

$$\boxed{P_2 - P_1 = \rho g h} \quad \text{...(9.6)}$$

If point 1 is the open surface (pressure = atmospheric Pₐ) and point 2 is at depth h:

$$\boxed{P = P_a + \rho g h} \quad \text{...(9.7)}$$

**Key observations:**
- Pressure at depth h **increases** with depth.
- Excess pressure P − Pₐ = ρgh is called **gauge pressure**.
- Pressure depends on **vertical height** only — NOT on the shape or cross-sectional area of the container.
- → **Hydrostatic paradox:** Three vessels of different shapes connected at the bottom have the same liquid level when filled, even though they hold different volumes.

### 3.3 Atmospheric Pressure and Its Measurement

**Mercury Barometer (Torricelli, 1608–1647):**
- A long glass tube filled with mercury is inverted into a trough of mercury.
- The space above mercury in the tube is vacuum (mercury vapour pressure ≈ 0).
- At sea level: Pₐ = ρgh, where h ≈ **76 cm of mercury** = 760 mm Hg.

$$P_a = \rho g h \quad \text{...(9.8)}$$

**Open tube Manometer:**
- U-tube with one end open to atmosphere, other end connected to the system.
- Used to measure **gauge pressure**: P − Pₐ = ρgh (h = height difference in the U-tube).

### 3.4 Pascal's Law — Hydraulic Machines ⭐⭐

> **Pascal's Law (Form 3):** When pressure is applied to an enclosed fluid, it is **transmitted undiminished and equally in all directions** to every part of the fluid and the walls of the container.

**Hydraulic Lift:**
- Small piston of area A₁ exerts force F₁ → pressure P = F₁/A₁
- Pressure transmitted to large piston of area A₂ → force F₂ = PA₂

$$\boxed{F_2 = \frac{F_1 A_2}{A_1}} \quad \text{...(9.9 derived)}$$

- **Mechanical advantage** = A₂/A₁ (force is multiplied by this factor)
- Volume displaced is conserved: A₁L₁ = A₂L₂ (incompressibility)

**Hydraulic Brakes:**
- Foot pedal → master piston (small) → pressure transmitted through brake oil → larger pistons at all four wheels → braking force applied equally to all wheels.

> 🔑 **Key insight of Pascal's law applications:** Force is amplified, but the work done is the same (larger force over smaller displacement = smaller force over larger displacement — energy conservation).

---

## SECTION 4 — STREAMLINE FLOW ⭐⭐

### 4.1 Steady Flow

**Steady flow** = at any given point in the fluid, the velocity of every fluid particle passing through that point remains constant in time.

- Different points can have different velocities.
- At any one point, every particle has the same velocity.

**Streamline** = a curve whose tangent at any point is in the direction of the fluid velocity at that point.

Properties of streamlines:
- No two streamlines can cross (if they crossed, a particle would have two velocities at one point → contradicts steady flow).
- In steady flow, the map of streamlines is stationary (doesn't change with time).

### 4.2 Laminar vs Turbulent Flow

| Type | Description | Condition |
|---|---|---|
| **Laminar (Streamline)** | Smooth, layers glide over each other; parallel streamlines | Low speed, v < critical speed |
| **Turbulent** | Irregular, chaotic, whirlpools | v > critical speed |

- **Critical speed:** The speed beyond which steady laminar flow becomes turbulent.
- Example: Slow tap → smooth laminar flow; fast tap → turbulent, splashing flow.
- White water rapids in rivers = turbulent flow.

### 4.3 Equation of Continuity (Mass Conservation) ⭐⭐⭐

For an incompressible fluid flowing through a pipe of varying cross-section:

The mass flowing in = mass flowing out (conservation of mass):

$$\rho_P A_P v_P = \rho_R A_R v_R = \rho_Q A_Q v_Q \quad \text{...(9.9)}$$

For incompressible fluid (ρ = constant):

$$\boxed{A_1 v_1 = A_2 v_2 \quad \Rightarrow \quad Av = \text{constant}} \quad \text{...(9.10), (9.11)}$$

- **Av** = **volume flux** (volume per second = flow rate) — remains constant.
- Where the pipe is **narrower**, velocity is **higher** (streamlines are closely spaced).
- Where the pipe is **wider**, velocity is **lower**.

> 🔑 **A₁v₁ = A₂v₂** is a statement of conservation of mass for incompressible fluids — not Bernoulli's equation. Don't confuse the two.

---

## SECTION 5 — BERNOULLI'S PRINCIPLE ⭐⭐⭐

### 5.1 Derivation (Energy Method)

Consider an ideal fluid (non-viscous, incompressible) flowing through a pipe with varying cross-section and height.

In time Δt, fluid element moves from BC (height h₁, pressure P₁, speed v₁, area A₁) to DE (height h₂, pressure P₂, speed v₂, area A₂):

- Work done by pressure at left end: W₁ = P₁A₁v₁Δt = P₁ΔV
- Work done against pressure at right end: −W₂ = −P₂ΔV
- Total work done on fluid: W₁ − W₂ = (P₁ − P₂)ΔV

By Work-Energy Theorem:
$$\Delta KE + \Delta PE = W$$
$$\frac{1}{2}\rho\Delta V(v_2^2 - v_1^2) + \rho g\Delta V(h_2 - h_1) = (P_1 - P_2)\Delta V$$

Rearranging:

$$\boxed{P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2} \quad \text{...(9.12)}$$

In general, along any streamline:

$$\boxed{P + \frac{1}{2}\rho v^2 + \rho g h = \text{constant}} \quad \text{...(9.13)}$$

This is **Bernoulli's equation** (Daniel Bernoulli, 1738).

**Physical meaning:**
- P = pressure energy per unit volume
- ½ρv² = kinetic energy per unit volume
- ρgh = potential energy per unit volume
- Their sum remains constant → **conservation of energy** for ideal fluid flow.

### 5.2 Conditions for Bernoulli's Equation to Hold

1. **Non-viscous fluid** (zero viscosity) — energy is not lost to friction between layers.
2. **Incompressible fluid** — density is constant.
3. **Steady (streamline) flow** — no turbulence.
4. Along a single streamline.

> ⚠️ Bernoulli's equation does NOT hold for turbulent flow, viscous fluids, or compressible gases at high speeds.

**Special case (fluid at rest, v = 0):**
$$P_1 + \rho g h_1 = P_2 + \rho g h_2 \Rightarrow P_1 - P_2 = \rho g(h_2 - h_1)$$
This reduces to the hydrostatic equation (9.6). ✓

### 5.3 Torricelli's Law (Speed of Efflux) ⭐⭐

**Efflux** = fluid outflow. Consider a tank open to atmosphere with a small hole at height y₁ from the bottom; liquid surface at height y₂:

Apply Bernoulli's between the hole (point 1) and the surface (point 2):
- P₁ = Pₐ (atmospheric, at hole)
- P₂ = P (pressure above liquid surface)
- v₂ ≈ 0 (large tank approximation, A₂ >> A₁)

$$v_1 = \sqrt{2gh + \frac{2(P - P_a)}{\rho}} \quad \text{...(9.14)}$$

If tank is **open to atmosphere** (P = Pₐ), with h = y₂ − y₁:

$$\boxed{v_1 = \sqrt{2gh}} \quad \text{...(9.15)}$$

This is **Torricelli's Law.** The speed of efflux from an open tank equals the speed a body would acquire in freely falling from height h.

> 🔑 Torricelli's law: v = √(2gh) — identical in form to free-fall equation v² = 2gh.

**Special case for rockets:** When P >> Pₐ, the √(2gh) term is negligible and the efflux speed is determined by the **container pressure** (not gravity). This is the principle behind rocket propulsion.

### 5.4 Dynamic Lift ⭐⭐⭐

**Dynamic lift** = the upward force on a body moving through a fluid, arising from pressure differences due to velocity differences.

**(i) Non-spinning ball:** Symmetric streamlines → same velocity above and below → zero pressure difference → **no lift**.

**(ii) Spinning ball (Magnus Effect):**
- Spinning ball drags air with it (especially if rough surface).
- On one side, spin direction adds to the air flow velocity → higher v → lower P (Bernoulli).
- On the opposite side, spin opposes air flow → lower v → higher P.
- Net pressure difference → **net force perpendicular to motion** = Magnus effect.
- This explains why spinning cricket/tennis/golf balls deviate from parabolic paths.

**(iii) Aerofoil (aircraft wing):**
- Wing is shaped so streamlines crowd together **above** (higher v, lower P).
- Below the wing, streamlines are more spread out (lower v, higher P).
- Net upward pressure force = **aerodynamic lift** (supports the plane against gravity).

> 🔑 **Bernoulli logic:** Faster flow → lower pressure (P + ½ρv² = const → v↑ means P↓). Lower pressure on one side → force towards that side.

---

## SECTION 6 — VISCOSITY ⭐⭐⭐

### 6.1 Concept

Most real fluids are not ideal — they offer **resistance to flow**, especially between adjacent layers. This internal resistance is called **viscosity** — it is the fluid analogue of friction in solid mechanics.

**Viscosity exists because:** Different layers of fluid move at different velocities. Each layer exerts a force on adjacent layers — the faster layer pulls the slower one forward, and the slower layer retards the faster one.

**Laminar flow in a pipe:** The velocity is maximum along the axis and decreases to zero at the walls (velocity profile is parabolic).

### 6.2 Coefficient of Viscosity (η)

For a fluid layer of thickness l and area A, with the top surface moving at velocity v relative to the bottom:

- Shear strain rate = v/l (not the strain itself, since fluids continuously deform)
- Shearing stress = F/A

$$\boxed{\eta = \frac{F/A}{v/l} = \frac{F \cdot l}{v \cdot A}} \quad \text{...(9.16)}$$

- η is pronounced "eta"
- **SI unit:** Pa·s = N s m⁻² = poiseuille (Pl)
- **Dimensional formula:** [ML⁻¹T⁻¹]
- Thin liquids (water, alcohol): low η; thick liquids (honey, glycerine, blood): high η.

**Key difference between solids and fluids:**
- In solids: shearing stress ∝ **shear strain** (Hooke's law)
- In fluids: shearing stress ∝ **rate of shear strain** (v/l) — the fluid keeps deforming continuously.

**Effect of temperature:**
- **Liquids:** η **decreases** with temperature (molecules become more mobile).
- **Gases:** η **increases** with temperature (random molecular motion increases → more momentum transfer between layers).

**Viscosities of some fluids:**

| Fluid | T (°C) | η (mPl) |
|---|---|---|
| Water | 20 | 1.0 |
| Water | 100 | 0.3 |
| Blood | 37 | 2.7 |
| Machine Oil | 16 | 113 |
| Glycerine | 20 | 830 |
| Honey | — | ~200 |
| Air | 0 | 0.017 |

> 🔑 Blood is ~2.7 times more viscous than water. The relative viscosity of blood remains constant between 0°C and 37°C.

### 6.3 Stokes' Law and Terminal Velocity ⭐⭐⭐

When a sphere falls through a viscous fluid:
- **Viscous drag force** (Stokes' Law):

$$\boxed{F = 6\pi\eta a v} \quad \text{...(9.17)}$$

where a = radius of sphere, v = speed, η = viscosity. (Enunciated by Sir George Stokes, 1819–1903.)

**Terminal velocity** (v_t): As the sphere accelerates due to gravity, the viscous drag increases until:

Gravitational force = Viscous drag + Buoyant force

$$\frac{4}{3}\pi a^3 (\rho - \sigma)g = 6\pi\eta a v_t$$

$$\boxed{v_t = \frac{2a^2(\rho - \sigma)g}{9\eta}} \quad \text{...(9.18)}$$

where ρ = density of sphere, σ = density of fluid.

**Key facts about terminal velocity:**
- v_t ∝ **a²** (terminal velocity increases rapidly with size of sphere)
- v_t ∝ **1/η** (inversely proportional to viscosity)
- v_t ∝ **(ρ − σ)** (depends on density difference)
- Raindrops reach terminal velocity (otherwise would hit ground at dangerously high speed!)

---

## SECTION 7 — SURFACE TENSION ⭐⭐⭐

### 7.1 Concept and Origin

Surface tension is responsible for many everyday phenomena:
- Water wets glass but mercury does not.
- Oil and water don't mix.
- Water rises in capillary tubes.
- Soap bubbles are spherical.
- Insects can walk on water.

**Molecular origin:**
- A molecule **inside** a liquid is attracted symmetrically by all surrounding molecules → zero net force on it.
- A molecule **on the surface** is attracted only from below (not from above, since there's little liquid there) → net inward force → surface has higher potential energy than interior.

> A liquid surface always tends to **minimise its area** (minimum surface area = minimum energy configuration). This tendency is quantified as surface tension.

The energy of a surface molecule ≈ half the energy needed to remove it entirely from the liquid (half the heat of evaporation). For water: heat of evaporation ≈ 40 kJ/mol.

### 7.2 Surface Energy and Surface Tension

Consider a liquid film on a U-shaped frame with a movable bar of length l. When the bar is moved by distance d:

- Extra area created = 2dl (film has **two surfaces**)
- Energy stored = S × (2dl)
- Work done by external force = F × d

By energy conservation: F·d = S × 2dl

$$\boxed{S = \frac{F}{2l}} \quad \text{...(9.20)}$$

**Surface tension (S)** is:
1. The **force per unit length** exerted by the liquid surface on a line in the plane of the surface.
2. The **surface energy per unit area** of the liquid interface.

- **SI unit:** N m⁻¹
- **Dimensional formula:** [MT⁻²]
- S is a scalar quantity.
- S depends on temperature (generally decreases with temperature — like viscosity for liquids).

**Surface tension of some liquids (at 20°C):**

| Liquid | S (N/m) |
|---|---|
| Mercury | 0.4355 |
| Water | 0.0727 |
| Ethanol | 0.0227 |
| Oxygen (at −183°C) | 0.0132 |
| Helium (at −270°C) | 0.000239 |

### 7.3 Angle of Contact ⭐⭐

The **angle of contact (θ)** is the angle between the tangent to the liquid surface at the point of contact and the solid surface, measured **inside the liquid**.

At the three-phase junction (solid-liquid-air), force balance gives:

$$\boxed{S_{la}\cos\theta + S_{sl} = S_{sa}} \quad \text{...(9.22)}$$

where Sla = liquid-air surface tension, Ssl = solid-liquid surface tension, Ssa = solid-air surface tension.

$$\cos\theta = \frac{S_{sa} - S_{sl}}{S_{la}}$$

| Condition | Angle of Contact | Behaviour |
|---|---|---|
| Ssl < Sla (e.g., water on glass) | θ < 90° (acute) | Liquid **wets** the solid; spreads out |
| Ssl > Sla (e.g., mercury on glass) | θ > 90° (obtuse) | Liquid **does not wet** the solid; forms droplets |

**Why mercury doesn't wet glass:**
- Mercury molecules attract each other strongly (high Ssl → obtuse θ) → mercury beads up.

**Why water wets glass:**
- Glass attracts water molecules strongly (low Ssl → acute θ) → water spreads.

**Practical applications:**
- **Detergents and soaps** lower the angle of contact (reduce Ssl) → better wetting, deeper penetration.
- **Waterproofing agents** increase the angle of contact → water beads off surfaces.

### 7.4 Drops and Bubbles — Excess Pressure ⭐⭐⭐

**Why drops and bubbles are spherical:** For a given volume, a sphere has the minimum surface area → minimum surface energy → equilibrium shape.

**Excess pressure inside a spherical drop:**

If radius of drop = r, using energy balance when radius increases by Δr:

$$\boxed{P_i - P_o = \frac{2S_{la}}{r}} \quad \text{...for a liquid drop (one surface)} \quad \text{...(9.25)}$$

**Excess pressure inside a soap bubble:**

A soap bubble has **two surfaces** (inner + outer liquid films):

$$\boxed{P_i - P_o = \frac{4S_{la}}{r}} \quad \text{...for a soap bubble (two surfaces)} \quad \text{...(9.26)}$$

**Summary table:**

| Object | Number of surfaces | Excess pressure formula |
|---|---|---|
| Liquid drop in air | 1 | 2S/r |
| Air bubble in liquid | 1 | 2S/r |
| Soap bubble in air | 2 | 4S/r |

> 🔑 **Soap bubble = 2S/r for each surface → total 4S/r.** This is why you have to blow hard to form a soap bubble — you need to raise the internal pressure above atmospheric by 4S/r.

> 🔑 **Convex surface has higher pressure.** Always remember: the pressure is higher on the **concave side** when viewed from inside (i.e., the inside of a curved surface has higher pressure than the outside).

### 7.5 Capillary Rise ⭐⭐⭐

When a narrow tube is dipped into a liquid:
- If the liquid **wets** the solid (acute θ): liquid rises in the tube (capillary **rise**).
- If the liquid **doesn't wet** the solid (obtuse θ): liquid is depressed in the tube (capillary **depression**).

**Derivation of capillary rise formula:**

Pressure just below the meniscus (inside liquid) = Pₐ − 2Scosθ/a (lower than atmospheric, where a = tube radius, from curved surface pressure).

For equilibrium at points A and B (same horizontal level):

$$P_o + h\rho g = P_i$$

$$h\rho g = \frac{2S\cos\theta}{a}$$

$$\boxed{h = \frac{2S\cos\theta}{\rho g a}} \quad \text{...(9.29)}$$

**Key observations:**
- h ∝ **1/a** — thinner the tube, greater the capillary rise (capilla = hair in Latin).
- h ∝ **cosθ** — if θ > 90° (cos θ < 0), then h < 0 → capillary **depression** (as in mercury-glass).
- h ∝ **1/ρg** — lower density → greater rise.
- h ∝ **S** — higher surface tension → greater rise.

**Practical example:**
For water in a glass tube (a = 0.05 cm, S = 0.073 N m⁻¹, ρ = 10³ kg m⁻³):

$$h = \frac{2 \times 0.073}{10^3 \times 9.8 \times 5 \times 10^{-4}} = 2.98 \times 10^{-2}\text{ m} \approx 3 \text{ cm}$$

**Real-world significance of capillary action:**
- Sap rises from roots to leaves in trees.
- Water wicks up cotton cloth/towels.
- Oil rises up a cotton wick in a lamp/candle.
- Water rises through soil (important for agriculture).

---

## SECTION 8 — SOLVED EXAMPLES (NCERT) ⭐⭐⭐

### Example 9.1 — Pressure in Bones

**Problem:** Two femur bones, each of cross-section 10 cm². Body mass 40 kg. Find average pressure.

**Solution:**
- A = 2 × 10 cm² = 20 × 10⁻⁴ m²; F = 40 × 10 = 400 N
- P = F/A = 400 / (20 × 10⁻⁴) = **2 × 10⁵ N m⁻²** = 2 atm

### Example 9.2 — Pressure at Depth

**Problem:** Pressure on a swimmer at 10 m depth in a lake.

**Solution:**
- P = Pₐ + ρgh = 1.01×10⁵ + 1000 × 10 × 10 = **2.01 × 10⁵ Pa ≈ 2 atm**
- At 1 km depth: increase ≈ 100 atm! (Submarines must withstand this.)

### Example 9.4 — Submarine Window

**Problem:** Depth 1000 m, window 20 cm × 20 cm = 0.04 m², sea water ρ = 1.03 × 10³ kg m⁻³.

**(a)** Absolute pressure = Pₐ + ρgh = 1.01×10⁵ + 1.03×10³ × 10 × 1000 = **104.01 × 10⁵ Pa ≈ 104 atm**

**(b)** Gauge pressure = ρgh = 1.03 × 10³ × 10 × 1000 = **103 × 10⁵ Pa ≈ 103 atm**

**(c)** Force on window = Pg × A = 103×10⁵ × 0.04 = **4.12 × 10⁵ N** ≈ 41.2 tonnes!

### Example 9.5 — Hydraulic Syringe

**Problem:** Syringes with piston diameters 1.0 cm and 3.0 cm. Force 10 N applied to small piston.

**(a)** F₂ = (A₂/A₁) × F₁ = (π(1.5)²)/(π(0.5)²) × 10 = 9 × 10 = **90 N**

**(b)** Incompressibility: L₁A₁ = L₂A₂  
L₂ = (A₁/A₂) × L₁ = (1/9) × 6.0 = **0.67 cm**

### Example 9.7 — Boeing Aircraft Lift

**Problem:** Mass 3.3×10⁵ kg, wing area 500 m², speed 960 km/h.

**(a)** ΔP = Mg/A = (3.3×10⁵ × 9.8)/500 = **6.5 × 10³ N m⁻²**

**(b)** Fractional speed increase above wing:
(v₂ − v₁)/v_av = ΔP/(ρv_av²) ≈ **0.08** → speed above wing is only ~8% higher than below!

### Example 9.9 — Terminal Velocity (Viscosity)

**Problem:** Copper ball (radius 2 mm, ρ = 8.9×10³ kg m⁻³) falls through oil (σ = 1.5×10³ kg m⁻³) at terminal velocity vt = 6.5 cm s⁻¹.

$$\eta = \frac{2a^2(\rho-\sigma)g}{9v_t} = \frac{2 \times (2\times10^{-3})^2 \times 7.4\times10^3 \times 9.8}{9 \times 6.5\times10^{-2}} = \mathbf{9.9 \times 10^{-1} \text{ Pa s}}$$

### Example 9.10 — Bubble in Capillary Tube

**Problem:** Capillary tube (diameter 2 mm) dipped 8 cm below water. Blow hemispherical bubble. S = 7.3×10⁻² N m⁻¹.

- P_outside = Pₐ + ρgh = 1.01×10⁵ + 1000×9.8×0.08 = 1.01784×10⁵ Pa
- Excess pressure = 2S/r = 2×7.3×10⁻²/10⁻³ = 146 Pa
- P_inside = 1.01784×10⁵ + 146 = **1.02 × 10⁵ Pa**
- Excess pressure in the bubble = **146 Pa**

---

## SECTION 9 — APPLICATIONS AND CONCEPTUAL POINTS ⭐⭐

### 9.1 Why Blood Pressure is Greater at Feet than Brain

P = Pₐ + ρgh: Since feet are at greater depth (higher h) below the heart, blood pressure is higher at feet. The brain is above the heart → lower pressure. (This is why standing for long periods can cause blood to pool in the legs.)

### 9.2 Why Atmospheric Pressure Falls with Altitude

Atmospheric pressure at any point = weight of air column of unit cross-section above that point. As altitude increases, the air column above is lighter → lower pressure. At ~6 km, pressure is approximately half the sea-level value.

### 9.3 Hydrostatic Pressure as Scalar

Although force is a vector (F/A might seem directional), hydrostatic pressure acts **equally in all directions** at any point — it has no specific direction, hence it is a scalar.

### 9.4 Why Two Streamlines Cannot Cross

If they did, a fluid particle arriving at the intersection would have two possible velocities → contradicts the definition of steady flow → two streamlines cannot cross.

### 9.5 Bernoulli in Practice

**Fast jets from tap:** When you partially block a tap with your finger, the remaining opening is smaller (smaller A) → by continuity, v is larger → by Bernoulli, P is lower where v is high, but the water is forced through the narrow gap by the pressure behind it → the jet velocity is very high.

**Atomiser/Spray pump:** High-speed air over a narrow tube creates low pressure → liquid rises and is atomised.

---

## 📋 QUICK REFERENCE — All Laws, Formulas, and Dimensional Formulae

```
PRESSURE:
┌──────────────────────────────────────────────────────────────┐
│  P = F/A  (normal force per unit area)                       │
│  P = Pₐ + ρgh  (absolute pressure at depth h)               │
│  Gauge pressure = P − Pₐ = ρgh                              │
│  Unit: Pa = N m⁻²;  Dim: [ML⁻¹T⁻²]                         │
│  1 atm = 1.013×10⁵ Pa; 1 bar = 10⁵ Pa; 1 torr = 133 Pa     │
└──────────────────────────────────────────────────────────────┘

PASCAL'S LAW:
┌──────────────────────────────────────────────────────────────┐
│  Pressure same in all directions at a point in fluid at rest │
│  Pressure same at same horizontal level                       │
│  Applied pressure transmitted undiminished throughout fluid  │
│  Hydraulic lift: F₂ = F₁(A₂/A₁);  Mechanical advantage = A₂/A₁│
└──────────────────────────────────────────────────────────────┘

EQUATION OF CONTINUITY (Incompressible fluid):
┌──────────────────────────────────────────────────────────────┐
│  A₁v₁ = A₂v₂  →  Av = constant (volume flux)               │
│  Narrower pipe → higher velocity                             │
│  Statement of conservation of mass                           │
└──────────────────────────────────────────────────────────────┘

BERNOULLI'S EQUATION (ideal, incompressible, non-viscous):
┌──────────────────────────────────────────────────────────────┐
│  P + ½ρv² + ρgh = constant (along a streamline)             │
│  v↑ → P↓ (higher speed → lower pressure)                    │
│  Torricelli's Law (open tank): v = √(2gh)                   │
│  Applies to: Non-viscous, incompressible, steady flow        │
└──────────────────────────────────────────────────────────────┘

VISCOSITY:
┌──────────────────────────────────────────────────────────────┐
│  η = (F/A)/(v/l) = Fl/(vA)  [coefficient of viscosity]      │
│  Unit: Pa·s = poiseuille (Pl);  Dim: [ML⁻¹T⁻¹]             │
│  Liquids: η falls with T;  Gases: η rises with T            │
│  Stokes' Law: F = 6πηav                                      │
│  Terminal velocity: vt = 2a²(ρ−σ)g / 9η                    │
│  vt ∝ a²;  vt ∝ 1/η                                         │
└──────────────────────────────────────────────────────────────┘

SURFACE TENSION:
┌──────────────────────────────────────────────────────────────┐
│  S = F/(2l) = Surface energy per unit area                   │
│  Unit: N m⁻¹;  Dim: [MT⁻²]                                  │
│  Excess pressure: Drop/Air bubble = 2S/r; Soap bubble = 4S/r│
│  Capillary rise: h = 2Scosθ/(ρga)                           │
│  Acute θ → wetting (capillary rise); Obtuse θ → non-wetting │
│  Sla·cosθ + Ssl = Ssa  (angle of contact equilibrium)       │
└──────────────────────────────────────────────────────────────┘
```

---

## ⚡ POINTS TO PONDER (High-Yield for Exams)

1. **Pressure is a scalar quantity.** The definition P = F/A uses the normal component of force — which acts in all directions equally — so pressure cannot be assigned one direction like a force.

2. **Pressure in a fluid does not depend on the cross-section or shape of the container** — only on the vertical height h. This is the hydrostatic paradox.

3. **Gauge pressure vs Absolute pressure:** Blood pressure measured by a sphygmomanometer is gauge pressure (P − Pₐ). Absolute pressure = atmospheric + gauge.

4. **Equation of continuity is not Bernoulli.** A₁v₁ = A₂v₂ is mass conservation; Bernoulli is energy conservation. They are separate, independently useful equations.

5. **Bernoulli applies to an ideal fluid.** No real fluid is perfectly non-viscous. In practice, Bernoulli gives good approximations for fluids with low viscosity (water, air at low speeds).

6. **"Velocity increases → pressure decreases" is Bernoulli** — but only when height remains the same (no change in potential energy). In a general pipe, both height and velocity change together.

7. **Viscosity of liquids ≠ viscosity of gases.** For liquids, η **falls** with temperature (molecules more mobile). For gases, η **rises** with temperature (more molecular collisions). This is a common exam trap.

8. **Stokes' law applies to small spherical objects at low speeds** (laminar flow around the sphere). It breaks down at high speeds when turbulent flow develops around the sphere.

9. **Terminal velocity ∝ a²** — this is why fine dust particles settle much more slowly than larger particles, and why small droplets fall as rain only after they grow large enough.

10. **Soap bubble has two surfaces; a liquid drop has only one.** Therefore, excess pressure inside a soap bubble (4S/r) is twice that of a liquid drop (2S/r) of the same radius.

11. **Capillary rise h ∝ 1/a** — the thinner the tube, the higher the rise. In hair-thin tubes, capillary rise can be many centimetres.

12. **Surface tension decreases with temperature** (like viscosity of liquids) — this is why hot water cleans better; the lower S allows better wetting and penetration.

13. **The pressure inside a curved surface is always greater than outside** (on the concave side). Air inside a soap bubble is at higher pressure → bubbles are always "taut" and spherical.

---

## 📊 Dimensional Formulae Summary

| Quantity | Symbol | Dimensional Formula | SI Unit |
|---|---|---|---|
| Pressure | P | [ML⁻¹T⁻²] | Pa = N m⁻² |
| Density | ρ | [ML⁻³] | kg m⁻³ |
| Dynamic viscosity | η | [ML⁻¹T⁻¹] | Pa·s = Pl |
| Surface Tension | S | [MT⁻²] | N m⁻¹ |
| Capillary rise | h | [L] | m |
| Volume flux | Av | [L³T⁻¹] | m³ s⁻¹ |
| Terminal velocity | vt | [LT⁻¹] | m s⁻¹ |

---

*End of Notes — Physics Chapter 9 | Total Sections: 9*