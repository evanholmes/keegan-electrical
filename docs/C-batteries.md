# C — Batteries (wiring, fuses & tests)

## Wiring & Fusing
- Positive lead: battery → fuse/breaker (≤ 6 in) → distribution block  
- Negative: battery → bus bar → solid chassis ground  
- Main battery fuse sized to the largest wire leaving the battery  
- Use insulated lugs, star washers, and anti-corrosion paste  

| Cable | Typical load | Fuse (approx) |
|:------|:--------------|:--------------|
| 2/0 AWG | Inverter feed | 300 A |
| 4 AWG | Heavy battery feed | 150 A |

---

## Testing Batteries
1. **Open-circuit voltage** (no load)  
   - 12.6–12.8 V = full • 12.2 ≈ 50 % • < 12.0 = low  
2. **Load test** – apply known load (~10 A) and watch voltage sag  
   - Small sag + recovery = healthy • Large sag = high internal resistance  
3. **Conductance / CCA test** – meter measures internal resistance / health  
4. **Parasitic drain** – everything off → > 100 mA = excessive  
   Trace the culprit (alarms/fridges may draw small steady current).

:::tip
Fuse protects **wire**, not the device. Size all fuses to the conductor’s ampacity.
:::
