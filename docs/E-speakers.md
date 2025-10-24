# E — Speakers and Impedance

**Key rule:** the DC resistance you read on a speaker coil will be *lower* than its rated impedance.

| Nominal Impedance | Typical DC reading |
|-------------------:|-------------------:|
| 8 Ω | 6.4 Ω – 7 Ω |
| 4 Ω | 3.2 Ω – 3.5 Ω |

---

## Series vs Parallel
- **Series:** impedances add.  R<sub>T</sub> = R₁ + R₂ → higher load, less power.
- **Parallel:** total drops.  1/R<sub>T</sub> = 1/R₁ + 1/R₂ → heavier amp load.

![](./assets/speaker.svg)

:::warning Amplifier safety
Keep total load ≥ the amp’s minimum rating.  
Over-loading causes over-current and thermal shutdown.
:::

---

## Testing
1. Disconnect the speaker from the crossover or amp.  
2. Measure resistance with a multimeter.  
3. **Normal:** ≈ 0.8 × rated Ω • ∞ = open coil • ≈ 0 = shorted coil.
