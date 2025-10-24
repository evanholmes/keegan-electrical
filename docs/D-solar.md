# D — Solar Panels & Controllers

## Wiring
- Install a **PV disconnect** (switch or DC breaker) at the array.  
- Keep total string Voc below controller maximum.  
- Fuse each positive lead from every parallel string.

![](./assets/solar.svg)

---

## Testing Panels
- **Voc (open-circuit voltage):** measure in sunlight with no load; should match spec.  
- **Isc (short-circuit current):** meter in amp mode or clamp; expect near spec.  
- **Under load (MPPT):** measure charge current and battery voltage.  
  If MPPT current drops sharply, check for shading or mismatched panels.

:::note Shade & mismatch
One shaded panel can collapse a whole series string.  
For mixed orientations, use parallel strings with fuses.
:::
