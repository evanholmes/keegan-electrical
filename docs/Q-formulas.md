# Q — Quick Formulas & Cheat Sheet

## Core Equations
| Formula | Description |
|:---------|:-------------|
| V = I × R | **Ohm’s law** — volts = amps × ohms |
| P = V × I | Power in watts |
| P = I² × R | Power from current & resistance |
| P = V² / R | Power from voltage & resistance |
| V<sub>drop</sub> = I × R<sub>wire</sub> | Voltage loss in wiring (keep < 3 %) |

---

## Series / Parallel Reference
| Type | Formula | Notes |
|:------|:---------|:------|
| Series resistors | R<sub>t</sub> = R₁ + R₂ | Adds resistance |
| Parallel resistors | 1/R<sub>t</sub> = 1/R₁ + 1/R₂ | Lowers resistance |
| Series capacitors | 1/C<sub>t</sub> = 1/C₁ + 1/C₂ | Voltage ratings sum |
| Parallel capacitors | C<sub>t</sub> = C₁ + C₂ | Capacitances add |
| Series speakers | R<sub>t</sub> = R₁ + R₂ | Impedance rises |
| Parallel speakers | 1/R<sub>t</sub> = 1/R₁ + 1/R₂ | Impedance drops |

---

:::tip Wire sizing
Keep voltage drop < 3 % for efficiency.  
Example: 10 A through 14 AWG (≈ 0.008 Ω/m) over 5 m round-trip →  
V<sub>drop</sub> = 10 × 0.008 × 5 = 0.4 V → good.
:::
