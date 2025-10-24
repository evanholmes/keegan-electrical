# J — Transistors & MOSFETs

## MOSFET Basics
- **N-channel (low-side switch):** Source → negative / ground,  
  Drain → load, Gate → driven positive relative to Source.  
- **P-channel (high-side switch):** opposite polarity drive.

![](./assets/mosfet.svg)

---

## Safe MOSFET Test (meter only)
1. Meter to **diode mode**.  
2. Black → Drain, Red → Source → should read OL.  
3. Touch Red to Gate briefly, then return to Source: reading shows conduction.  
4. Short Gate → Source to discharge; re-test → OL again.  
5. Short both ways = bad; never switches on = bad gate.

:::note Body diode
Reverse conduction one way is normal. Confirm orientation.
:::

---

## BJT Quick Test
Use diode mode:  
- Forward Base-Emitter ≈ 0.6 V  
- Forward Base-Collector ≈ 0.6 V  
- Shorts both ways = bad; no forward drop = open junction.
