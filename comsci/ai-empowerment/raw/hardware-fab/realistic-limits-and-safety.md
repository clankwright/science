# Realistic limits and safety (what AI cannot validate)

## What this is

The hardware-fab AI stack lets a solo person ship physical things fast. It does not exempt them from physics, regulatory law, or product-liability reality. This page enumerates the gaps where AI hands you a confident-sounding answer that will hurt someone or get a project shut down.

## Where AI confidently fails

### Mains voltage and high-current DC

- LLMs will happily write firmware that PWMs a 120V SSR to control a heater, but will not catch missing creepage/clearance on the PCB, missing fuse, missing GFCI, or wrong-rated relay.
- A single ground-loop or undersized neutral on a hobbyist 3D-printed enclosure is a fire. AI does not size fuses or specify UL-listed components by default.
- Battery (Li-ion, LiPo) packs: AI will write a BMS prompt with no knowledge of cell-balance fault modes. Lithium fires kill people. IEC 62133 is not a vibe.

### RF emissions and FCC

- Any device with an antenna in the US must meet 47 CFR Part 15 limits for unintentional emissions, and Part 15.247 / Part 18 for intentional radiators.
- LLMs do not run EMC scans. Hobbyist ESP32 projects often fail Part 15 on harmonics. Selling them on Etsy without an FCC ID is illegal.
- For RF designs (custom radio, modified Wi-Fi front-end), AI cannot replace a network analyzer or a TIS/TRP test chamber.

### FAA Remote ID and Part 107

- Remote ID is fully active nationwide as of 2026. Any hobbyist drone over 250g requires Remote ID broadcast.
- FCC Covered List (NDAA 2026) blocks new equipment authorizations for foreign-made drones and critical components. Two temporary exemptions through Dec 31 2026 cover Blue UAS list devices.
- Custom drones: legal but require Remote ID compliance, registration, possibly Part 107 certificate for non-recreational use.
- AI mission planners do not check airspace classes, NOTAMs, or TFRs reliably.

### Mechanical structural margins

- Generative design in Fusion 360 optimizes against load cases the user specifies. If the load case is wrong, the part is wrong. AI does not magically know real-world loads.
- 3D printed (FDM) parts are anisotropic. Layer adhesion strength is 30-50% of bulk. Anything load-bearing for humans (climbing hardware, helmets, vehicle parts) is a liability.
- Resin-printed parts UV-degrade outdoors; AI does not flag this in design review.

### Software-side gaps

- Security: LLM-generated firmware often hardcodes Wi-Fi SSIDs, default passwords, no OTA verification, no TLS pinning. Fine for a workshop, dangerous on a connected product.
- Failure modes: LLMs write happy-path code. They miss watchdog timers, brownout reset handling, fault recovery on stuck I2C bus.
- Real-time guarantees: LLM C++ on an RTOS may meet timing in tests and miss in the field. AI does not do WCET analysis.

### Regulatory walls AI does not unlock

- UL listing for sale of mains-powered consumer products in the US: testing fees ~$10,000-$50,000 per product family.
- FCC ID for intentional radiators: $3,000-$15,000 for testing.
- CE marking in EU.
- IEC 60601 for medical devices. AI does not certify medical devices.
- FDA 510(k) for medical hardware: ~$10,000-$500,000 plus a year+ of regulatory work.
- FAA Type Certification for aircraft. Hobbyist eVTOL is not happening because AI can write the flight controller.

## What "production" actually means in this wiki

When we say "production" for these tools, we mean "production for personal/hobbyist/internal-prototype use." Not production for sale to consumers. The cliff between hobbyist prototype and commercially shippable product is the same regulatory gauntlet it was in 2015. AI compresses design time, not certification time.

## What is reasonable

- Personal-use 3D prints, lasered objects, MCU gadgets, home-automation: completely reasonable.
- Selling decorative/non-functional items on Etsy: reasonable.
- Selling functional electronics directly to consumers: do not skip FCC/UL.
- Anything that flies, charges, or touches mains: assume regulatory cost is the largest line item.

## Sources

- https://www.faa.gov/uas
- https://www.thedroneu.com/blog/usa-drone-laws-regulations-by-state/
- https://www.thevizionair.com/fcc-drone-regulations-2026
- https://amablog.modelaircraft.org/amagov/2025/12/22/fcc-foreign-uas-component-decision/
- https://www.tcbdrones.com/post/faa-rule-updates-every-drone-pilot-should-know-in-2026
- https://ucanr.edu/blog/salinas-valley-agriculture/article/updated-fcc-covered-list-means-ag-drone-users
- https://www.airsight.com/blog/faa-rules-and-regulations-for-unmanned-aircraft-systems-uas
