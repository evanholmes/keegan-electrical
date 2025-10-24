# I — Diodes, Relays & Rectifiers

## Diodes
- Stripe = **cathode (–)** current flows **anode → cathode**.  
- **Schottky**: low forward drop (≈ 0.2–0.4 V).  
  Best for blocking diodes and solar bypass paths.

:::tip Flyback protection
Always place a diode across any coil.  
Cathode → positive, anode → switch side.  
This absorbs the inductive kick when switching off.
:::

---

## Relay Tests
1. **Coil check** – measure resistance: 12 V coils are typically 70–200 Ω.  
2. **Contact check** – continuity appears only when coil is energized.  
3. Add a **flyback diode** across the coil (or snubber if AC).

![](./assets/relay-test.svg)
