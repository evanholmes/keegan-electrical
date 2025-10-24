# G — Capacitors

## Safe Replacement Rules
- Never use a lower **voltage** rating.  
- Match or exceed µF.  
- Observe **polarity** on electrolytics (+ to +, − to −).  
- Reverse charge = explosion risk.

---

## Series vs Parallel
| Connection | Result | Voltage Rating |
|-------------|---------|----------------|
| Parallel | Capacitance adds | same |
| Series | Capacitance decreases | ratings sum |

:::tip Balancing resistors
Series capacitors should include equalizing resistors to share voltage evenly.
:::

---

## Testing
1. **ESR meter:** low ESR = good.  
2. **Multimeter Ohms mode:** needle climbs as the cap charges.  
   - Stuck low = short.  
   - Stuck ∞ = open.  
3. Always **discharge** with a resistor before handling.

![](./assets/cap-test.svg)
