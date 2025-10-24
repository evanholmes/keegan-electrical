# B — Series vs Parallel (practical rules)

## Batteries
**Series:** voltages add, capacity (Ah) unchanged  
`2 × 12 V 100 Ah → 24 V 100 Ah`  

**Parallel:** capacities add, voltage unchanged  
`2 × 12 V 100 Ah → 12 V 200 Ah`

:::tip Matching rule
Only parallel batteries of the same type, age, state-of-charge, and internal resistance.  
If uncertain — don’t.
:::

---

## Solar panels
**Series:** voltage adds → good for MPPT controllers and long runs.  
Shade on one panel disables the whole string.  

**Parallel:** current adds → requires a fuse or breaker per string; better for partial-shade setups.

---

## Speakers
**Series:** impedances add → total load rises.  
**Parallel:** overall impedance drops → amp sees heavier load.

:::warning Amplifier safety
Ensure the amplifier’s minimum impedance rating is not exceeded.  
Never wire parallel speakers below the amp spec.
:::

---

## LEDs
Use series + resistor for identical LEDs on the same current.  
For battery systems, use parallel branches, each with its own resistor.

:::danger Never
Never connect LEDs directly to a battery.
:::

---

## Capacitors
**Parallel:** capacitances add; voltage rating unchanged.  
**Series:** total capacitance decreases; voltage rating sums.

:::info Balancing resistors
For series capacitors, use voltage-rated and balancing resistors.  
When replacing, match µF and use equal or higher voltage rating.
:::
