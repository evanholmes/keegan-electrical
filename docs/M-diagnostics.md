# M — Component-Specific Diagnostics

Each symptom below links a quick test to its likely cause and corrective action.

---

## Battery sag / no start
**Symptom:** voltage collapses under load  
**Test:** compare open-circuit vs under-load voltage  
**Likely cause:** weak cell, sulfation, high internal resistance  
**Fix:** perform load test, clean terminals, verify charging system

---

## Solar not charging
**Symptom:** normal Voc but low current from MPPT  
**Test:** check Voc + Isc at panel and controller input/output  
**Likely cause:** shading, reverse polarity, faulty controller  
**Fix:** clean panels, re-wire, replace controller if input good but no output

---

## MOSFET switching failure
**Symptom:** load never turns on / always on  
**Test:** gate threshold with diode-mode meter; bench-test out of circuit  
**Likely cause:** blown gate, ESD, over-V<sub>GS</sub>  
**Fix:** replace MOSFET; add gate resistor + TVS next time

---

## Speaker distortion / hum
**Symptom:** weak or distorted output  
**Test:** measure coil resistance, swap amp channels  
**Likely cause:** shorted voice coil or bad amp channel  
**Fix:** repair amp, replace speaker

---

## LED flicker / failure
**Symptom:** flicker, dim, or burn-out  
**Test:** verify supply voltage under load and resistor value  
**Likely cause:** unstable driver or voltage spikes  
**Fix:** replace driver, add surge suppression

---

## Capacitor bulge / leak
**Symptom:** visible bulge, smell, or instability  
**Test:** ESR + capacitance  
**Fix:** replace with same µF, equal / higher V rating, and identify root cause (heat / ripple)
