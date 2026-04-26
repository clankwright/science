---
id: indoor-air-quality
title: "Indoor Air Quality and Cognitive/Physical Recovery"
kind: topic
topic: indoor-air-quality
---

# Indoor Air Quality and Cognitive/Physical Recovery

> **Summary:** Ventilation, CO2 levels, and VOC concentrations measurably affect cognitive performance and physiological stress. The Harvard COGfx study quantified a 101% improvement in cognitive scores under enhanced ventilation. For rehabilitation, indoor air quality is a baseline requirement before therapeutic claims can be made.

## Tier 1 Evidence

**Harvard COGfx Study.** [Allen et al. 2016](../papers/allen-cogfx-2016.md) (EHP, N=24): participants in enhanced ventilation (40 cfm/person) + low-VOC conditions scored 101% higher on cognitive function tests vs conventional buildings. Crisis Response subscale +131%, Strategy +288%. CO2 and VOCs were independently associated — the effect requires both low VOC AND adequate ventilation, not ventilation alone.

## Key Parameters

| Measurement | Safe Threshold | Poor | Critical |
|---|---|---|---|
| CO2 | <800 ppm | 800-1200 ppm | >1200 ppm |
| PM2.5 | <12 µg/m³ (annual) | 12-35 µg/m³ | >35 µg/m³ |
| VOC | <0.3 mg/m³ | 0.3-1 mg/m³ | >1 mg/m³ |
| Humidity | 40-60% RH | <30% or >70% | |
| Radon | <100 Bq/m³ (EU) | 100-300 Bq/m³ | >300 Bq/m³ |

## Measurement Devices

| Device | Measures | API |
|---|---|---|
| Awair Element | CO2, VOC, PM2.5, temp, humidity | Cloud + local |
| Aranet4 | CO2 (high precision, NDIR) | BLE |
| Airthings Wave Plus | Radon + CO2 + VOC + humidity | REST API |

## ASHRAE/WHO Standards

- ASHRAE 62.1: minimum 15 cfm/person outdoor air in residential, 20 cfm/person in office. Enhanced: 40 cfm/person.
- WHO: nighttime noise <35 dB(A), daytime <45 dB(A) (see [acoustic-environment](acoustic-environment.md))
- Humidity: ASHRAE 55 sets 40-60% RH as comfort range; WHO recommends >30% to prevent respiratory issues

## See Also

- [biophilic-design](biophilic-design.md)
- [stress-healing](stress-healing.md)
