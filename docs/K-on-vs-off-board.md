# K — On-Board vs Off-Board Testing

## Core Rule
**Off-board = reliable | On-board = suspect**

Whenever possible, lift one leg or remove the component before testing.

---

## Why On-Board Lies
Parallel paths, feedback nets, and pull resistors skew readings.  
You may see false continuity or resistance.

| Component | On-board effect | Proper check |
|------------|----------------|---------------|
| Resistor | parallel parts change reading | lift one end |
| Diode | alternate path conducts | test out of circuit |
| MOSFET | other semis create shorts | lift Gate or leg |
| Capacitor | stray paths charge/discharge | test ESR off-board |

:::warning
Never trust an in-circuit “short” reading until verified off-board.
:::
