# F — LEDs & Resistors (practical math)

## Basic Formula
R = (V<sub>source</sub> − V<sub>f</sub>) / I

Example:  
12 V supply, V<sub>f</sub> = 3.2 V, I = 20 mA →  
R = (12 − 3.2)/0.02 = 440 Ω → use 470 Ω standard value.

Power: P = I² × R = 0.188 W → use ≥ 0.5 W resistor.

![](./assets/led-resistor.svg)

---

## Series Chains
For identical LEDs:  
- Add the forward voltages.  
- Subtract from supply to find resistor drop.

## Parallel Branches
Each branch requires its **own resistor**.

:::danger Never connect LEDs directly to a battery
Always include a resistor or constant-current driver.
:::
