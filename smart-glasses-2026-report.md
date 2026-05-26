# Smart Glasses Deep Research — May 2026

A developer-leaning buyer's guide. Covers specs, price, reviews, hackability, and dev-friendliness across every major shipping (and several upcoming) smart-glasses platform.

**Scope:** Mid-2026 snapshot. Prices in USD. The three main categories:

1. **Audio + camera "AI glasses"** — no display (or only a minimal monocular HUD). Ray-Ban Meta dominates.
2. **Tethered display / "wearable monitor" glasses** — birdbath or flat-prism micro-OLED. XREAL, VITURE, RayNeo Air, Rokid Max, Lenovo Legion.
3. **Native HUD / waveguide AR glasses** — microLED + waveguide in a "normal glasses" form factor. Meta Ray-Ban Display, Even Realities G2, Brilliant Halo, Rokid Glasses, RayNeo X3 Pro.

Plus a dedicated section for **hackable / dev-first** platforms (Brilliant Labs, MentraOS, Project Aria, Snap Spectacles, Pupil Labs).

---

## TL;DR — Quick Picks

| Need | Pick | Price | Why |
|---|---|---|---|
| **Best mainstream AI glasses** | Ray-Ban Meta Gen 2 | $379 | Polished, 8 h battery, 3K video, huge ecosystem |
| **Best AI glasses w/ HUD** | Meta Ray-Ban Display + Neural Band | $799 | Color waveguide HUD + EMG wristband; flawed but unique |
| **Best for sport / outdoor** | Oakley Meta Vanguard | $499 | IP67, Garmin/Strava integration, wide camera POV |
| **Best wearable monitor (overall)** | XREAL One Pro | $599 | 57° FOV, X1 chip, plug-and-play, X-Prism optics |
| **Best wearable monitor (value)** | RayNeo Air 3s | $269 | 1080p120 OLED at half the price |
| **Best display + picture quality** | VITURE Beast | $549 | 58° FOV, 1200p, brightest mainstream micro-OLED |
| **Best for AR/XR Unity dev** | XREAL Air 2 Ultra | $699 | 6DoF + SLAM + dual cameras + SDK 3.0 |
| **Most hackable (cheap)** | Brilliant Labs Frame | $349 | Lua-on-device, BLE-only, full open source |
| **Most hackable (newest)** | Brilliant Labs Halo | $299 | Alif NPU, Zephyr+Lua, on-device AI, open HW |
| **Best privacy-respecting HUD** | Even Realities G2 | $599 | No camera, no speaker, 2-day battery, microLED |
| **Best AR dev SDK** | Snap Spectacles 5 (dev kit) | $99/mo | Lens Studio is the polished one |
| **Best DIY** | OpenGlass (ESP32-S3) | ~$20 | Solder your own; full OSS Python/RN stack |
| **Future bet — buy later** | XREAL Project Aura | TBD late-2026 | First mainstream Android XR glasses |
| **Wait if you want…** | Apple Glass (early 2027), Snap consumer Specs ($2,500 fall 2026), Samsung Galaxy Glasses (fall 2026) | | |

---

## Category 1 — Mainstream AI / Camera Glasses (no display)

### Ray-Ban Meta (Gen 2)

- **Price:** $379 base / $459 standard Wayfarer; frequent ~$390 sales.
- **Specs:** ~50 g; Snapdragon AR1 Gen 1; 12 MP ultra-wide (100°), 3K@60fps video (max 3 min clip); ~8 h battery (~42 % larger than Gen 1); ~5 h continuous music; case adds ~48 h; Wi-Fi 6 + BT 5.x; IPX4.
- **AI:** Meta AI on Llama 4, "Hey Meta", live translation across 14 languages, visual lookups, hands-free WhatsApp/Messenger/Instagram. Cloud-heavy.
- **Reviews:** Wired (Nov 2025) "atop list of best smart glasses"; *The Verge* praises hardware, flags AI-privacy concerns; *Tom's Guide* 4/5; ~82 % market share in the category six months in.
- **Dev story:** **Meta Wearables Device Access Toolkit** in public dev preview since Dec 2025 (iOS + Android, Mock Device Kit for sim). GitHub: `facebook/meta-wearables-dat-android`. **You can build and self-test, but cannot publish a production app to general users yet.** Glasses-side is closed firmware; everything goes through the phone.
- **Notable hack:** $60 mod that disables the white recording LED — raises ethical/legal questions; covered by EFF and BBC.
- **Cons:** Privacy (constant camera on your face), Meta account required, cloud-dependent, 3-min 3K cap, ecosystem lock-in.

### Meta Ray-Ban Display + Meta Neural Band

- **Price:** $799 (includes EMG wristband). US launch Sep 30 2025, expanded UK/CA/FR/IT in early 2026 — delayed slightly to prioritize US supply.
- **Display:** Monocular right-lens waveguide, 600×600, **20° FOV, 42 PPD, 30–5,000 nits, 90 Hz**. Transitions lenses standard.
- **Specs:** 69–70 g (heavy); 6 h mixed use; case +24 h; Neural Band 18 h, IPX7; 3K @ 60fps camera (3× zoom).
- **Neural Band (sEMG wristband):** Pinch = click, thumb-on-middle = toggle, double-tap = Meta AI, thumb-swipe along index = scroll, pinch+twist = volume/zoom. **CES 2026 added EMG handwriting input and teleprompter mode.** Most reviews call the band the standout — *UploadVR*: "A flawless wristband for flawed glasses."
- **Reviews:** *Engadget* "chunky frames with impressive abilities"; *UploadVR* "first-generation heads-up mobile computing"; *Tom's Guide* notes HUD genuinely reduces phone-checking but 20° FOV is small. Recurring cons: heavy, slips on nose, gestures occasionally miss, sparse app ecosystem.
- **Dev story:** **Initially gated.** A separate "Build for display glasses" track was teased at Connect 2025 but remains early-partner only as of May 2026. Neural Band has no public API. No third-party hacks of note.
- **Cons:** Weight/comfort, $800 plus second device to charge, ecosystem lock-in, very early app catalog, US-first.

### Oakley Meta HSTN

- **Price:** $399 base / $499 LE.
- **Specs:** ~49 g; Snapdragon AR1; 12 MP, 3K@30fps + slow-mo; 230 mAh battery, ~8 h; case adds ~48 h; IPX4; Prizm polarized / Transitions / clear; **no prescription support at launch**.
- **AI:** Identical Meta AI stack to Ray-Ban Meta.
- **Reviews:** Android Central "new gold standard" for sport-leaning camera glasses; *Tom's Guide* praises 3K capture, battery, polarized Prizm; dings lack of Rx and pricier than Ray-Ban Wayfarer.
- **Dev:** Same Meta Device Access Toolkit, treated identically.

### Oakley Meta Vanguard

- **Price:** $499. Launched Oct 21 2025.
- **Specs:** 66–67 g wraparound; centered nose-bridge 12 MP ultra-wide camera (more POV-like footage); 6 h continuous audio / 9 h typical; case +36 h; **IP67** (best in class for sport).
- **AI:** Meta AI + **"Athletic Intelligence"** — native Garmin & Strava integration; auto-detects activity, overlays HR/pace/elevation, auto-captures workout milestones.
- **Reviews:** *DC Rainmaker* "We've finally arrived"; *Stuff* "new must-wear for sport"; *Athletech News* praises auto-capture; trail/bike reviewers question value at $499.
- **Dev:** Meta SDK support announced as "coming soon" rather than at launch.

### Amazon Echo Frames (3rd Gen)

- **Price:** $269.99–$299.99 MSRP; frequently $120–$160 on sale. Alexa+ free during Early Access through ≥ Jan 2026, then Prime-bundled / $19.99/mo non-Prime.
- **Specs:** ~38 g; **no camera**; ~14 h moderate mixed / 6 h continuous; 4 mics, open-ear directional speakers; BT multipoint (2 devices); physical temple buttons (replacing touchpad); IPX4; Italian acetate + German hinges; prescription-ready.
- **AI:** Alexa+ (LLM-style follow-ups, agentic skills). No vision.
- **Reviews:** Generally 3.5/5. "Best Frames yet" but "feels behind the camera-equipped pack."
- **Dev:** No device-specific SDK; extend Alexa via ASK + AMA. No vision API, no community rooting.

### Solos AirGo Vision / V2 / 3

- **Price:** AirGo Vision $299; **AirGo V2** (CES 2026) $299 with 16 MP; SDK Developer Bundle $1,999.
- **Specs:** 42 g; modular swappable camera/audio-only temples; Whisper Audio mics (45 dB ambient reduction); IP67 on AirGo 3.
- **AI (SolosChat 3.0):** Cloud bridge to ChatGPT (4o), Claude, Gemini, DeepSeek; translation; visual lookups; video streaming (V2). Vision AI works in background, not just foreground.
- **Dev story:** **Most explicit developer-targeted SDK in the camera-glasses category**, but locked behind a $1,999 bundle. iOS + Android SDK exposes camera, mics, touch, sensors. License forbids reverse-engineering. No notable GitHub community.
- **Reviews:** Mixed — clever hardware, AI feels gimmicky, photo quality lags Meta.

### Lucyd (Bose Frames category replacement)

- **Price:** $149–$199 typical; Armor (photochromic) higher. *Bose discontinued the Frames line entirely; no successor.*
- **Specs:** Audio-only; open-ear Quadrasonic speakers; noise-cancel mics; ~8 h music; BT multipoint; Rx-ready.
- **AI:** ChatGPT bridge via Lucyd app; works alongside any phone voice assistant.
- **Dev:** None beyond standard BT audio.

### Xiaomi AI Glasses (2025)

- **Price:** ¥1,999 (~$280) base, up to ¥2,999 with multi-color electrochromic lenses. **China-only.**
- **Specs:** ~40 g; Snapdragon AR1 + BES2700 co-processor; 4 GB / 32 GB; 12 MP ultra-wide w/ EIS, **up to 45 min continuous video** (vs Meta's ~3 min); 8.6 h battery; 5 mics + 2 open-ear speakers; optional electrochromic lenses.
- **AI:** XiaoAI assistant + Alipay QR payments (unique China utility).
- **Reviews:** *Skarred Ghost* "promising first-gen"; *Android Central* "giving Ray-Ban Metas a serious beatdown" on raw specs.
- **Dev:** No public English SDK.

### Baidu Xiaodu Pro

- **Price:** ¥2,299 (~$322). **China-only.**
- **Specs:** 39 g; Sony 12 MP; 4K photos, 1440p/30 fps video w/ EIS; 5 mics; titanium hinges; sun / photochromic / Rx options.
- **AI:** Baidu Ernie LLM via Xiaodu assistant.
- **Dev:** No public SDK.

### Samsung Galaxy Glasses (announced for Fall 2026)

- **Price:** Rumored $379–$499.
- **Specs (per leaks):** ~50 g, Qualcomm AR1, 12 MP, 155 mAh, **no display in Gen 1** (display version planned 2027 — "Haean" $600–$900). Heavy offload to paired Galaxy phone.
- **Frame partners:** Gentle Monster, Warby Parker; Gucci later via Kering deal.
- **Dev:** First mainstream **Android XR** glasses → inherits Android XR SDK from Google/Samsung. Potentially the most dev-friendly mainstream platform once it ships.

---

## Category 2 — Tethered Display Glasses (wearable monitor)

### XREAL One

- **Price:** $499.
- **Optics:** Dual Sony 0.55" micro-OLED, 1920×1080 per eye, 120 Hz, ~600 nits, **50° FOV**, birdbath.
- **Weight/fit:** ~84 g; electrochromic dimming; software IPD; per-eye 0 to ‑5.0 D diopter dials.
- **Compute:** No internal SoC, but on-glasses **X1 spatial chip** handles 3DoF + image processing without an app.
- **Connectivity:** USB-C DP Alt Mode → iPhone 15+, Android (DP-out), Steam Deck, ROG Ally, Mac, PC.
- **Dev:** XREAL SDK 3.0 (Unity XRI + AR Foundation) supersedes NRSDK/Nebula; community **OpenVR driver** for SteamVR and **Monado OpenXR driver**.
- **Cons:** 3DoF only, no camera, narrower 50° FOV than the One Pro.

### XREAL One Pro

- **Price:** **$599** (permanent cut from $649 in April 2026).
- **Optics:** Same Sony 0.55" panels; **57° FOV** via "X-Prism" flat freeform optics (~40 % smaller than birdbath); 700 nits; 120 Hz.
- **Weight/fit:** 87 g; two hardware IPD sizes (M: 57–66 / L: 66–75 mm) + software fine-tune; built-in diopter.
- **Compute:** X1 chip, 120 Hz 3DoF, ~3 ms motion-to-photon. Optional 12 MP detachable micro-camera (1.5 g).
- **Reviews:** *Tom's Guide* / *Tom's Hardware* / *Windows Central* call them the best AR glasses you can buy today; *AppleInsider* "iPhone enthusiast pick." Karl Guttag's KGOnTech has a deep analysis of the X-Prism optics.
- **Dev:** XREAL SDK 3.0, OpenXR via Monado.
- **Cons:** Still only 3DoF natively (no positional tracking), price.

### XREAL 1S (CES 2026)

- **Price:** $449. Companion **XREAL Neo** USB-C DP hub + 10,000 mAh power bank: $99.
- **Optics:** 1200p (up from 1080p), 700 nits, 52° FOV, 16:10, 120 Hz, micro-OLED birdbath, electrochromic dimming. 82 g; Bose audio; X1 chip with on-device 3DoF + Real 3D (2D→3D conversion).

### XREAL Air 2 Ultra

- **Price:** $699.
- **Optics:** Dual micro-OLED, 1080p × 2 @ 120 Hz, 52° FOV, ~42 PPD; titanium frame; 80 g; 3-step electrochromic dimming.
- **Tracking:** **Two front cameras → 6DoF SLAM + hand tracking.** The dev-focused unit in XREAL's range.
- **Dev:** XREAL SDK 3.0, Unity XRI, AR Foundation, hand tracking, spatial anchors, depth mesh; OpenXR via Monado.
- **Spacetop bundle:** $899 bundles Air 2 Ultra + 1 yr Spacetop for Windows + $200/yr subscription thereafter. (Sightful's standalone Spacetop G1 laptop was cancelled and refunded.)
- **Cons:** Now superseded for media use by One Pro; needs Samsung-only path for native Nebula on Android phone.

### XREAL Air 2 Pro

- **Price:** $449 (often discounted).
- **Optics:** 1080p × 2 @ 120 Hz, 500 nits, 46° FOV; 72 g (lightest in class); electrochromic dimming (0/35/100 %).
- **Compute:** No on-glasses chip — relies on Beam or host.
- **Cons:** Mid-tier brightness, no 6DoF.

### XREAL Beam Pro (compute companion)

- **Price:** $199 (6/128) / $249 (8/256).
- **What it is:** Android handheld with 6.5" 2K LCD, 90 Hz, Snapdragon 6 Gen 1, dual USB-C (one is DP-out for glasses), dual 50 MP "3D" spatial cameras, **NebulaOS** (Android 14 fork w/ Google Play).
- **Dev:** Stock-ish Android = ADB, sideload, Play Store.
- **Cons:** Mediocre LCD; 3DoF only.

### VITURE Pro

- **Price:** $459.
- **Optics:** Dual Sony micro-OLED, 1920×1080 per eye, **120 Hz, 46° FOV, peak 4,000 nits, 100,000:1 contrast, 108 % sRGB**; birdbath.
- **Weight/fit:** 77 g; **two physical sliders for both IPD and per-eye myopia (0 to ‑5.0 D)**.
- **Lenses:** Electrochromic film expands "TV" to 135".
- **Audio:** Harman speakers.
- **Connectivity:** Proprietary magnetic glasses-side connector → USB-C.
- **Dev:** Viture XR SDK for Unity; neckband 6DoF + hand tracking pipeline; SpaceWalker desktop/mobile app; Discord-based dev support.
- **Reviews:** *Tom's Guide* "putting XREAL on blast"; *Windows Central* serious XREAL competition.

### VITURE Beast (April 2026)

- **Price:** $549.
- **Optics:** Dual Sony micro-OLED, **1920×1200 per eye, 58° FOV, 1,250 nits, 120 Hz**; flat-prism-style optics; 174" perceived screen.
- **Weight:** 88 g. Electrochromic AR/VR toggle button.
- **Compatibility:** USB-C DP plug-and-play; **natively supports Switch 2**, PS5, Xbox, Steam Deck, ROG Ally, iPhone 15+.
- **Reviews:** *Tom's Guide* Editor's Choice "best AR glasses money can buy right now"; *VR.org* calls it "quietly winning."
- **Caveats:** Launch firmware locked at lower res; advertised 6DoF and spatial audio shipping post-launch.

### VITURE Luma / Luma Pro / Luma Ultra

- **Prices:** Luma $399, Luma Ultra ~$499, Luma Pro ~$499–$549.
- **Luma Pro:** Sony micro-OLED 1200p × 2, 120 Hz, **1,000 nits, 52° FOV**, 152" perceived; per-eye ‑4.0 D dial; HARMAN audio; first XR glasses with customizable RGB lighting on the frame.

### Rokid Max 2

- **Price:** $529 list / often $429 on sale.
- **Optics:** Dual Sony 0.68" micro-OLED, 1920×1080, **90/120 Hz, 600 nits, 50° FOV**.
- **Weight:** 75 g; per-eye 0 to ‑6.0 D diopter dials (no inserts needed).
- **Connectivity:** USB-C DP, no internal battery.
- **Reviews:** *TechRadar* "good but not great"; *AndroidGuys* "stunning visual experience."
- **Cons:** Lower brightness than competitors; software polish issues.

### Rokid AR Lite (Max 2 + Station 2 bundle)

- **Price:** Bundle $648, often $499.
- **Adds:** Rokid Station 2 — Snapdragon 6 Gen 1, 8 GB / 128 GB, Wi-Fi 6, BT 5.2, 5,000 mAh, 18 W fast charge.
- **OS:** **YodaOS-Master** with multi-window AR UI, 3DoF screen anchoring, spatial launcher.
- **Reviews:** *Tom's Guide* "top-tier premium … stellar spatial computing experience."
- **Cons:** Netflix/Disney+ DRM not certified on Station 2; sparse YodaOS app store.

### Rokid AR Studio (dev SDK)

- **What it is:** SDK suite, not a SKU. **UXR SDK** (Unity) split into "UXR Dock" (Station + glasses) and "UXR Phone" (phone-tethered). Built on YodaOS-Sprite, OpenXR-compatible, MRTK supported, Unity-first; Android/iOS CXR-L SDK too.
- **Repo:** `RokidGlass/UXR-docs` on GitHub. Comprehensive developer portal at `developerdoc.rokid.com`.

### RayNeo Air 3s

- **Price:** $269 (often $219–$249 with coupons).
- **Optics:** Dual HueView micro-OLED 1920×1080, ~46° FOV, **650 nits**, 201" perceived, 98 % DCI-P3, ΔE < 2, 200,000:1 contrast, 3840 Hz DC+PWM dimming.
- **Weight:** 72–76 g, foldable.
- **Connectivity:** USB-C DP, no wireless.
- **Reviews:** *Tom's Hardware* "cheaper and better in every way"; *Android Central* "unbeatable value."
- **Cons:** No diopter dials (Air 3s Pro adds them); no wireless.

### TCL NXTWEAR series

- **NXTWEAR S+ Advanced:** 215" virtual screen, 120 Hz, micro-OLED, magnetic USB-C.
- **NXTWEAR S:** Dual 1080p, 140" perceived.
- **Note:** TCL's AR-focused line spun off as RayNeo; NXTWEAR is the entertainment/video tier.

### ASUS AirVision M1

- **Price:** $699.
- **Specs:** 1920×1080 × 2, **1,100 nits, 72 Hz only, 38° FOV**, 87 g, USB-C DP, 3DoF.
- **Reviews:** *Tom's Hardware* "shaky first effort"; *Windows Central* "wildly overpriced — no reason to pick over XREAL/Viture." **Skip.**

### Lenovo Legion Glasses Gen 2

- **Price:** $399.
- **Specs:** Micro-OLED 1920×1080 per eye, 60/90/120 Hz, **800 nits (up from 270 on Gen 1), 43.5° FOV**; 65 g (down from 96 g); USB-C DP. Insert frame for Rx (no built-in dial).
- **2025 update:** Free firmware added 3D Mode with 20+ Legion-supported games.
- **Dev:** Pure DP plug-and-play, no SDK, no on-glasses tracking — strictly a virtual monitor.

### XREAL Project Aura (Android XR — late 2026)

- **Status:** Demoed at Google I/O 2026; consumer launch before end of 2026; dev kits summer 2026 via Google's Android XR Developer Catalyst program.
- **Specs:** OLED optical see-through, **70° FOV** (widest XREAL has shipped), ~90 g.
- **Compute:** **Split** — XREAL X1S in glasses + Qualcomm Snapdragon XR puck tethered wired.
- **OS:** **Android XR** with deep Gemini integration; voice + hand input.
- **Dev:** Android XR SDK + Unity OpenXR pipeline. First mainstream consumer Android XR glasses.
- **Gaming variant:** **ASUS ROG XREAL R1** with 240 Hz, also late 2026.

### Sightful Spacetop (software now)

- **Status:** Spacetop G1 laptop hardware ($1,900) cancelled; preorders refunded. Now sold as a **$899 Windows software bundle with XREAL Air 2 Ultra** + $200/yr subscription thereafter. Rationale: Windows AI PCs with NPUs handle 6DoF without needing a custom headless laptop.

---

## Category 3 — Native HUD / Waveguide Glasses (normal form factor)

### Rokid Glasses (microLED + AI)

- **Price:** $499 Kickstarter / $599 MSRP. $686K raised (vs $20K goal).
- **Display:** Dual monochrome-green micro-LED + diffractive waveguide, **480×398 per eye, 1,500 nits, 23° FOV**.
- **Camera:** 12 MP Sony IMX681 (f/2.25, 109°).
- **Audio:** Dual AAC + 4-mic AI noise-cancel array.
- **Compute:** **Snapdragon AR1** + NXP RT600 low-power voice co-processor; "Hi, Rokid" wake word; **ChatGPT 5.0 + Gemini multimodal** (first to combine both); real-time translation across 89 languages on-display.
- **Weight:** 48–49 g; mag-aluminum + TR90; IPX4; prescription-compatible.
- **Reviews:** *Tom's Guide* "a real Meta Ray-Ban Display rival" — lighter, cheaper, more translation languages, dual-eye.
- **Dev story (the strongest mid-tier dev pitch):**
  - GitHub org `RokidGlass` with official UXR Dock + UXR Phone SDKs.
  - CXR-M (mobile), CXR-S (on-glass apps), CXR-L (replace default launchers).
  - Community-maintained `buildwithfenna/rokid-docs` with reverse-engineered firmware notes.
  - `cursive-team/rokid-apps`, `Anezium/awesome-rokid` curated lists.
- **Cons:** Monochrome only, 23° FOV, low resolution, smaller English ecosystem.

### RayNeo X3 Pro

- **Price:** $1,099 early-bird / $1,299 list (€1,400 EU). CES 2026 reveal added eSIM.
- **Display:** Dual **JBD micro-LED + Applied Materials waveguide**, 640×480 per eye, **3,500 nits typical / 6,000 peak**, 60 Hz, 30° FOV, full color; 43" perceived 3D screen.
- **Compute:** Standalone, Snapdragon AR1 Gen 1, 4 GB / 32 GB; Gemini integrated; Sony IMX681 12 MP + B/W OV camera for SLAM.
- **Weight:** 76 g titanium.
- **Battery (the deal-breaker):** 5 h record / 3 h music / **36 min video**, 38 min charge.
- **Reviews:** *Tom's Hardware* praises optics; *Android Central* "futuristic, but there's a big problem" (battery); *Gizmodo* "may haunt my dreams"; *Skarred Ghost* + Karl Guttag patterns flag visible grainy artifacts despite excellent color/text.
- **Dev:** RayNeo Open Platform — Unity ARDK + Android ARDK; 6DoF + SLAM; built on Snapdragon Spaces. Qualcomm hosts "Get Started with RayNeo X3 Pro AR Development" portal.

### RayNeo X2 (legacy)

- $850. Full-color micro-LED + waveguide, 640×480, 1,000 nits, 25° FOV, Snapdragon XR2. Superseded by X3 Pro.

### Halliday Glasses (Gyges Labs)

- **Price:** $369 preorder / $489 retail. $3.3M from 8,023 backers (Kickstarter record for AI glasses).
- **Display tech:** **DigiWindow** micro-projector — 3.5–3.6 mm module beams onto upper-right lens, appearing as a ~3.5" floating screen. No waveguide. No camera. ~28.5–35 g, **12 h battery**.
- **Input:** Trackpad ring, touch arm, voice.
- **AI:** **Proactive AI** listens to conversations and surfaces translations, fact checks, navigation without prompting. 40-language translation. **AI is credit-metered: $10 = 1,000 credits ≈ 5 h.**
- **Reviews:** *Engadget* "ambitious smart glasses with frustrating flaws"; *TechRadar* "can't decide if I love or hate"; *Android Police* "buzzword-laden curiosity I stopped wanting to wear"; *Android Authority* "Pip-Boy for your eyes."
- **Cons:** Tiny 3.6 mm screen, **proactive listening = significant privacy concern**, credit-metered AI, no public SDK.

### Even Realities G2

- **Price:** $599 + $249 R1 ring (launch discount when bundled).
- **Display:** Dual-eye **microLED green-monochrome** + gradient waveguide (HAO 2.0), 27.5° FOV, **1,200 nits**, 75 % larger image than G1.
- **Weight:** 36–40 g, titanium + magnesium.
- **No camera, no external speakers** by design (privacy stance). IMU + mic + display + R1 ring only.
- **Battery:** ~2 days.
- **Reviews:** *Tom's Guide* "the future of smart glasses I want"; *Gizmodo* "anti-Meta smart glasses with real potential."
- **Dev story:**
  - **Even Hub** SDK launched **April 3, 2026** — official store, ~50 launch apps, ~2,000 enrolled devs, TypeScript templates. APIs for display, ambient prompts, live translation, R1 gesture input.
  - Official `EvenDemoApp` (C, BSD-2) + template scaffolds (MIT, TypeScript) on `github.com/even-realities`. Firmware closed.
  - **Unofficial:** `i-soxi/even-g2-protocol` (BLE reverse engineering), `hqrrr/EvenComfort` (Python sensor push), `galfaroth/awesome-even-realities-g1` (curated index).
  - **MentraOS supports G1** — effectively the largest third-party SDK for Even hardware.
  - The dual-arm split BLE protocol (left + right lens as separate GATT peripherals, left-first ack-then-right) is a real engineering tax for native dev.
- **Cons:** No camera = no CV apps; monochrome green = no rich UI; closed firmware.

---

## Hackable / Developer-Friendly Deep Dive

This is the section to focus on if you want to *build* on smart glasses, not just wear them.

### Brilliant Labs Frame ($349)

- **Best plug-and-play hackable hardware on the market.** Every unit is a dev kit.
- **Specs:** 39–40 g; color micro-OLED, 640×400 per eye, ~20° FOV, ~3,000 nits; 720p camera; IMU; mic; nRF52 + FPGA.
- **SDK:** On-device **Lua** OS. Host SDKs in Python (`frameutils`) and Flutter. VS Code "AR Studio" extension for live Lua over BLE — no cables, no proprietary tooling.
- **APIs exposed:** Camera frames, mic PCM, IMU, display primitives, raw BLE. **Most permissive hardware-access stack in the category.**
- **Open source:** Hardware, firmware, schematics, and the Noa companion app all open (`github.com/brilliantlabsAR`).
- **AI:** BYOM — Noa routes to OpenAI/Perplexity/Whisper by default; swap any HTTP-reachable model. 2,000 free credits/month.
- **Pain:** BLE instability with Noa app; Android app widely reported broken; display prism intrudes on line-of-sight (headaches after ~30 min); pitched as "developer hardware sold as a consumer product."

### Brilliant Labs Halo ($300 preorder / $349 retail, Q1 2026)

- **The most exciting near-term hackable upgrade.**
- **Specs:** ~40 g, 14 h battery, **0.2" full-color micro-OLED projector** (retro-arcade HUD), +2 / −6 D adjust, bone-conduction speakers, mic array. **Alif Ensemble B1** SoC — Cortex-M55 + dedicated **NPU for on-device ML** (first in the form factor at this price).
- **SDK:** **Zephyr RTOS** + Lua scripting.
- **Open source:** "Totally open source — design files and code on GitHub." Most aggressive OSS posture in the category.
- **AI:** Noa agent runs **partly on-device** thanks to NPU. "Vibe Mode" (natural-language app authoring) and "Narrative AI" first-party; BYOM supported.

### Snap Spectacles 5 (developer kit)

- **Price:** **$99/month, 12-month commitment.** US-only. Not a purchase. Consumer "Specs" coming fall 2026 at ~$2,500.
- **Specs:** 226 g (heavy); dual binocular waveguides via LCoS micro-projectors; **46° FOV, 37 PPD**; dual **Snapdragon AR2 Gen 1**; titanium vapor chamber; **45 min battery** without external power; 6DoF, 120 Hz late-stage reprojection, 13 ms motion-to-photon.
- **SDK:** **Lens Studio 5.x** — JS/TS via SIK Scripting framework + visual nodes. **Most polished SDK in the category.** Snap OS 2.0 ships UI Kit, Mobile Kit, SyncKit (multiplayer), EyeConnect, in-app payments. 
- **APIs exposed:** 6DoF, hand tracking, eye tracking, depth, plane detection, camera images via `CameraModule.requestImage`.
- **AI:** **Remote Service Gateway** routes through Snap to OpenAI multimodal. BYOM via HTTP allowed *only if* you're not also using sensor data.
- **Critical limitation — permission segregation:** A Lens **cannot simultaneously access raw sensor data (camera, mic, GPS) AND the open internet**. Bypass via Experimental APIs disables Lens-store publishing — your Lens is side-load-only forever. This kills "stream-my-vision-to-an-LLM" apps unless you accept that trade-off.
- **Open source:** Closed platform; `Snapchat/Spectacles-Sample` has dozens of MIT reference projects.
- **Notable demos:** Super Travel, Drum Kit, Pool Assist, Cookmate, AI Teleport; many from MIT Reality Hack 2026.

### MentraOS (open glasses OS, formerly AugmentOS)

- **What it is:** MIT-licensed **cross-glasses OS + SDK + app store + mobile host app**. Closest thing to "Android for smart glasses" the community has.
- **Supported hardware:** Even Realities G1, Vuzix Z100, Mentra Live, Mentra Mach1.
- **Architecture:** Mini-apps run on the **phone** (to save glasses battery) and stream UI / receive sensor events over BLE. Latest **v2.10 (April 16, 2026)** — 11.9k commits, 2k+ stars.
- **SDK languages:** TypeScript (54 %), with Java, Swift, Kotlin, C for platform pieces.
- **APIs exposed:** Camera (photo), mic transcription, display streaming, speaker, AI-call passthrough.
- **AI:** BYOM via HTTP.
- **Mentra's own hardware:**
  - **Mentra Live** — $299, 43 g, MediaTek MTK8766, 12 MP / 119° cam, 3 mics, stereo speakers, 12 h + 50 h case. Open-source first.
  - **Mentra Mach1** — $349 (display-equipped variant).
- **Pain:** Mini-app model means everything goes through the phone — you can't write firmware-level code on the glasses, and BLE latency is a hard ceiling.

### Vuzix Z100 + Ultralite OEM + Blade 2

- **Z100:** $499 consumer / **$799 Developer's Edition** (adds SDK, samples, sample apps). 35–38 g; monochrome green microLED waveguide single-eye; 48 h battery; **no camera**; tethered to phone via Vuzix Connect. Native Android + iOS SDKs. **MentraOS supports it — easiest dev path.**
- **Ultralite Pro / Audio:** OEM-only reference platforms (Vuzix licenses to brands). Ultralite Pro < 80 g, dual full-color Avegant LCoS + binocular waveguides, Snapdragon AR1.
- **Blade 2:** ~$1,500. 480×480 waveguide single-eye, 20° FOV, 2,000 nits, **8 MP camera, 40 GB, Android 11, fully standalone**. Plain Android Studio. Enterprise-priced, bulky.

### INMO Air 3 + GO3

- **Air 3 ($900):** Standalone **Android 14**, 8 GB / 128 GB; full-color waveguide ~1080p, 600 nits, 120 Hz; 16 MP / 120° cam; **1.5–2 h battery** (disqualifying for most builds). Open Google Play; ADB sideload works. Community wiki at `sam1am/inmo_air_3_wiki`. *Gizmodo*: "would avoid at all costs."
- **GO3 ($420 base, CES 2026 / Kickstarter Q1):** 53 g; dual monochrome microLED waveguides, 640×480, 1,500 nits, 30° FOV; on-device NPU for translation; hot-swappable batteries → 5 h + 40 h case; 98-language translation; camera with physical privacy cover. Leaner OS than Air 3.

### Omi / Based Hardware / OpenGlass / Friend.com

One family of projects rebranded over time (Friend → Omi).

- **Omi Pendant:** $89, not glasses.
- **Omi Glass Dev Kit:** **$299.** Always-on camera + audio; bring your own frames; ships as a module you 3D-print into a mount, flash via Arduino IDE.
- **OpenGlass:** Community-original repo by Nik Shevchenko. Clip a **Seeed XIAO ESP32-S3 Sense** to any glasses for **~$20 in parts**. Mic, Wi-Fi, BLE, ESP32-S3 with onboard camera.
- **SDK:** React Native, Swift, Python clients against a FastAPI/Firebase backend (Deepgram/Speechmatics/Soniox STT, OpenAI-compatible LLMs, LangChain, Silero VAD, Pinecone memory).
- **Open source:** MIT, full stack — firmware, backend, mobile apps. **Probably the most permissive OSS in the category.**
- **Pain:** No display; ESP32-S3 is tight on RAM for any onboard inference beyond keyword spotting.

### Meta Project Aria Gen 2 (research-only)

- **Price:** Free hardware loan via Research Kit application. Gen 2 broad rollout Q2 2026.
- **Specs:** 75 g, foldable arms, **6–8 h battery**, RGB cam, 6DoF SLAM cams, eye-tracking cams, spatial mics, IMUs, barometer, magnetometer, GNSS, ambient light, **PPG (heart rate) in nose pad**, **contact mic in nose pad** to separate wearer voice from bystanders.
- **SDK:** `projectaria_tools` (Python + C++, Apache 2.0) — calibration, multimodal data parsing, MPS (machine-perception services). Aria Client SDK on Android for recording.
- **AI:** Researcher-defined; Meta provides pre-computed MPS (trajectory, eye gaze, point clouds).
- **Pain:** **Approval-gated.** Research labs or qualified corporate partners only. Hobbyists excluded. Recording mode only — no consumer apps shippable on Aria.

### Pupil Labs Neon

- **Price:** ~$5,000–$7,000 USD bundled (research-grade).
- **Specs:** Dual IR eye cams, wide-angle RGB scene cam, stereo mics, IMU; calibration-free gaze + pupil diameter; silicone water-resistant housing; modular module drops into any 3D-printed frame.
- **SDK:** Excellent **Real-Time Network API** with first-class **Python** client (`pupil-labs-realtime-api`), plus C++, MATLAB, Unity (C#).
- **Open source:** Core `pupil-labs/pupil` GPL; many supporting libs permissive.
- **AI:** None bundled. Common pipeline: stream gaze + scene to Python service that fuses with a multimodal LLM.
- **Pain:** Price, research aesthetics, no display.

### TCL RayNeo X3 Pro (also a dev option)

- See Category 3 above. **RayNeo Open Platform** with Unity ARDK + Android ARDK; 6DoF + SLAM; built on Snapdragon Spaces. Qualcomm hosts a dedicated "Get Started" portal.

---

## Cross-Cutting Specs Table

| Product | Price | Display | FOV | Brightness | Camera | Weight | Battery | OS / Dev |
|---|---|---|---|---|---|---|---|---|
| Ray-Ban Meta Gen 2 | $379 | none | — | — | 12 MP / 3K | 50 g | 8 h | Meta DAT (preview) |
| Meta Ray-Ban Display | $799 | waveguide mono, 600² | 20° | 30–5,000 nits | 12 MP / 3K | 70 g | 6 h | gated |
| Oakley Meta HSTN | $399 | none | — | — | 12 MP / 3K | 49 g | 8 h | Meta DAT |
| Oakley Meta Vanguard | $499 | none | — | — | 12 MP / 3K | 67 g | 9 h | Meta DAT (soon) |
| Echo Frames Gen 3 | $270 | none | — | — | none | 38 g | 14 h | ASK + AMA |
| Solos AirGo V2 | $299 | none | — | — | 16 MP | 42 g | — | Solos SDK ($1,999) |
| Xiaomi AI Glasses | $280 | none | — | — | 12 MP / 45min video | 40 g | 8.6 h | — |
| **XREAL One Pro** | $599 | μOLED 1080p×2 | 57° | 700 nits | optional | 87 g | tethered | SDK 3.0 + Monado |
| XREAL One | $499 | μOLED 1080p×2 | 50° | 600 nits | no | 84 g | tethered | SDK 3.0 + Monado |
| XREAL 1S | $449 | μOLED 1200p×2 | 52° | 700 nits | no | 82 g | tethered | SDK 3.0 |
| XREAL Air 2 Ultra | $699 | μOLED 1080p×2 | 52° | — | dual front (SLAM) | 80 g | tethered | SDK 3.0, 6DoF |
| **VITURE Beast** | $549 | μOLED 1200p×2 | 58° | 1,250 nits | no | 88 g | tethered | Viture XR SDK |
| VITURE Pro | $459 | μOLED 1080p×2 | 46° | 4,000 nits peak | no | 77 g | tethered | Viture XR SDK |
| VITURE Luma Pro | $499 | μOLED 1200p×2 | 52° | 1,000 nits | no | — | tethered | Viture XR SDK |
| Rokid Max 2 | $429–529 | μOLED 1080p×2 | 50° | 600 nits | no | 75 g | tethered | UXR SDK |
| Rokid AR Lite | $499–648 | (Max 2 + Station 2) | 50° | 600 nits | no | 75 g | 5,000 mAh hub | YodaOS-Master |
| RayNeo Air 3s | $269 | μOLED 1080p×2 | 46° | 650 nits | no | 74 g | tethered | DP only |
| Lenovo Legion 2 | $399 | μOLED 1080p×2 | 43.5° | 800 nits | no | 65 g | tethered | DP only |
| **Rokid Glasses** | $499–599 | μLED green waveguide 480² | 23° | 1,500 nits | 12 MP | 49 g | — | UXR + community |
| **Even Realities G2** | $599 | μLED green waveguide | 27.5° | 1,200 nits | none | 40 g | 2 days | Even Hub (TS) |
| Halliday | $369–489 | DigiWindow 3.5" beam | — | — | none | 30 g | 12 h | — |
| **RayNeo X3 Pro** | $1,099 | μLED color waveguide 640×480 | 30° | 3,500 nits | 12 MP + SLAM | 76 g | 36min video | RayNeo Open + Unity |
| Brilliant Frame | $349 | μOLED color 640×400 | ~20° | 3,000 nits | 720p | 40 g | — | Lua + Python + Flutter |
| **Brilliant Halo** | $299 | μOLED color 0.2" | — | — | yes | 40 g | 14 h | Zephyr + Lua + NPU |
| Snap Spectacles 5 | $99/mo | LCoS waveguide | 46° | — | yes | 226 g | 45 min | Lens Studio (JS/TS) |
| Mentra Live | $299 | none | — | — | 12 MP / 119° | 43 g | 12 h | MentraOS |
| Mentra Mach1 | $349 | yes | — | — | yes | — | — | MentraOS |
| Vuzix Z100 (Dev) | $799 | μLED mono waveguide | — | — | none | 38 g | 48 h | Vuzix SDK / MentraOS |
| Vuzix Blade 2 | $1,500 | waveguide 480² | 20° | 2,000 nits | 8 MP | — | — | Android 11 |
| INMO Air 3 | $900 | color waveguide ~1080p | — | 600 nits | 16 MP | — | 1.5–2 h | Android 14 |
| Omi Glass Dev Kit | $299 | none | — | — | yes | — | — | full OSS Python/RN |
| OpenGlass (DIY) | ~$20 | none | — | — | ESP32-S3 cam | — | — | full OSS |
| Project Aria Gen 2 | free (gated) | none | — | — | RGB + 6DoF SLAM + ET | 75 g | 6–8 h | `projectaria_tools` |
| Pupil Labs Neon | $5–7K | none | — | — | scene + dual IR ET | — | — | RT Python API |

---

## Upcoming / Rumored

- **Apple Glass** — Bloomberg (Gurman) and Kuo: production-ready end of 2026, **public launch early 2027** (mass production Q2 2027, 3–5M+ shipments in 2027). Apple testing **four design variants**. First gen will be **Ray-Ban Meta-style** (no display, no AR), iPhone-tethered. AI delays could push to 2028 worst-case.
- **Samsung Galaxy Glasses** — Fall 2026, two design lines via **Warby Parker** and **Gentle Monster** (Gucci later via Kering). Snapdragon AR1, ~50 g, 12 MP, **no display in Gen 1**. Rumored $379–$499. Display variant "**Haean**" expected 2027 at $600–$900.
- **Google Android XR** — Launched Oct 2025 (Samsung Galaxy XR headset shipped first). At I/O 2026 Google formally introduced "**Intelligent Eyewear**" as the brand. Audio glasses ship Fall 2026, display glasses later. Cross-platform (Android + iOS).
- **XREAL Project Aura** — covered above; late 2026.
- **ASUS ROG XREAL R1** — 240 Hz gaming variant of Aura, late 2026.
- **Meta Orion** — true AR prototype (silicon carbide waveguides, MicroLED, ~70° FOV, EMG wristband). Wider developer access in 2026. Consumer version targeted late 2027.
- **Snap consumer Specs** — Snap spun the AR team into a standalone company Jan 2026. Consumer Specs confirmed **Fall 2026 at ~$2,500**. Snap CEO says $3B+ spent on the platform.
- **OpenAI / Jony Ive device** — Per Axios (Jan 2026), first device targeted late 2026, 40–50M Foxconn units planned. Per MacRumors (Feb 2026), first device is a **screenless smart speaker with camera**, slipped to 2027, ~$200–$300. **AI glasses on the roadmap but not until 2028+.** Treat any near-term OpenAI-glasses rumor as speculative.

---

## Category Trends (mid-2026)

- **Volume:** EssilorLuxottica tripled Ray-Ban Meta sales to **over 7M pairs in 2025**. Mainstream outlets now treat the category as real eyewear rather than tech curio.
- **Three platforms forming:** Meta (Ray-Ban/Oakley + Llama AI + Neural Band), Google Android XR (Samsung + Warby Parker + Gentle Monster + Gucci + XREAL), Apple (rumored 2027). Plus the Snap, Brilliant, Even, MentraOS dev-OS-as-product play.
- **EMG / neural wristband input:** Meta's Neural Band (shipped Sep 2025) is the first commercial **surface EMG** input device, based on ~200,000 research subjects. CES 2026 added EMG handwriting. Meta is extending the band beyond glasses.
- **MicroLED + waveguide progress:** RayNeo demoed the "world's smallest mass-producible full-color MicroLED waveguide AR glasses" (X3 Pro) at CES 2026. MicroLED can hit 10,000+ nits vs micro-OLED's 1,000–3,000 — important for outdoor. **Consensus: mass-market microLED waveguide at competitive prices is 2–3 years out.**
- **On-device LLMs:** Gemini Nano underpins Android XR glasses. Ray-Ban Meta Gen 2 added "sharper on-device AI" alongside cloud. Brilliant Halo runs Noa partly on its Alif NPU — first in form factor at this price.
- **Privacy backlash (real and growing):** BBC (Jan 2026) — male influencers using Ray-Ban Meta to covertly film women. Reports of **human subcontractors reviewing captured Ray-Ban Meta clips**. March 2026 class action lawsuit vs Meta + Luxottica alleging misleading privacy marketing. State legislatures discussing restrictions. **Even Realities is marketing the G2 partly on this backlash** (no camera, no speaker by design).
- **Real bottleneck:** Adoption / social acceptance, not technology. Industry leading with eyewear-brand co-marketing (Ray-Ban, Oakley, Warby Parker, Gentle Monster, Gucci) → bet is "do these look like normal glasses?" Battery, weight, optics still constrained: audio-only ~48 h leader; display glasses still 4–6 h.

---

## Practical Buying Notes

**Avoid unless on sale:** ASUS AirVision M1 (overpriced 72 Hz birdbath), RayNeo X2 (superseded by X3 Pro), Sightful Spacetop hardware (discontinued), INMO Air 3 (1.5 h battery).

**Cross-cutting limitations to plan around:**
- **Camera + internet** is the most contentious permission gate (Snap blocks it; most others allow it).
- **Battery under 2 h** is common (Spectacles 5, INMO Air 3, RayNeo X3 Pro video) — fine for demos, hostile to all-day testing.
- **Closed firmware** is the norm. Only Brilliant Labs and Based Hardware/Mentra ship open firmware.
- **Phone-tethered "mini-app"** is now the dominant architecture (MentraOS, Even Hub, Frame's Noa pattern). Plan latency budget accordingly.
- **Dual-arm BLE** (separate GATT peripherals per lens, left-first ack ordering) on Even Realities is a real engineering tax for native dev.

**Privacy-conscious picks:** Even Realities G2 (no camera, no speaker); Amazon Echo Frames (no camera); audio-only Lucyd.

**Cheapest path to a working prototype:** OpenGlass (~$20 in parts) → Brilliant Frame ($349) → Mentra Live ($299) → Even G2 + Even Hub ($599 + free SDK).

**Highest-ceiling dev platform if you have budget:** Snap Spectacles 5 ($99/mo) for polished SDK + 6DoF; XREAL Air 2 Ultra ($699) for plug-and-play Unity 6DoF; **Project Aria Gen 2 (free if you qualify)** for research-grade sensor fidelity.

---

## Sources

Selected primary sources (the full list is extensive; key picks below):

**Roundups / shootouts**
- [Tom's Guide — Best Smart Glasses 2026](https://www.tomsguide.com/computing/vr-ar/best-smart-glasses)
- [Tom's Guide — CES 2026 best smart glasses](https://www.tomsguide.com/computing/smart-glasses/the-best-smart-glasses-of-ces-2026-so-far)
- [The Gadgeteer — 7 Smart Glasses Stories of 2026](https://the-gadgeteer.com/2026/05/08/smart-glasses-2026-stories-so-far/)
- [Treeview — Best Smart Glasses Companies / SDKs](https://treeview.studio/blog/best-smart-glasses-companies)

**Meta / Ray-Ban / Oakley**
- [Meta — Ray-Ban Display + Neural Band announcement](https://about.fb.com/news/2025/09/meta-ray-ban-display-ai-glasses-emg-wristband/)
- [Meta — CES 2026 updates](https://www.meta.com/blog/ces-2026-meta-ray-ban-display-teleprompter-emg-handwriting-garmin-unified-cabin-university-of-utah-tetraski/)
- [Meta Wearables Device Access Toolkit blog](https://developers.meta.com/blog/introducing-meta-wearables-device-access-toolkit/) | [GitHub](https://github.com/facebook/meta-wearables-dat-android)
- [Engadget — Ray-Ban Display review](https://www.engadget.com/wearables/meta-ray-ban-display-review-chunky-frames-with-impressive-abilities-193127070.html)
- [UploadVR — Ray-Ban Display + Neural Band review](https://www.uploadvr.com/meta-ray-ban-display-review/)
- [DC Rainmaker — Oakley Meta Vanguard review](https://www.dcrainmaker.com/2025/10/oakley-meta-vanguard-review-finally-arrived.html)
- [EFF — Think twice about Meta's Ray-Bans](https://www.eff.org/deeplinks/2026/03/think-twice-buying-or-using-metas-ray-bans)

**XREAL / VITURE / Rokid / RayNeo**
- [XREAL Developer SDK 3.0](https://developer.xreal.com/) | [Monado driver](https://monado.pages.freedesktop.org/monado/group__drv__xreal__air.html) | [OpenVR community driver](https://github.com/wheaney/OpenVR-xrealAirGlassesHMD)
- [9to5Google — XREAL One Pro price cut to $599](https://9to5google.com/2026/04/23/xreal-one-pro-gets-a-permanent-price-cut-to-599/)
- [KGOnTech — X-Prism optics analysis](https://kguttag.com/2025/02/24/xreal-one-pro-optics-and-its-connections-to-ant-reality-and-google/)
- [VITURE developer hub](https://www.viture.com/developer) | [Unity SDK docs](https://developer.viture.com/unity/viture_unity_xr_sdk_doc)
- [Tom's Guide — VITURE Beast review](https://www.tomsguide.com/computing/smart-glasses/viture-beast-review)
- [Rokid AR Studio](https://arstudio.rokid.com/) | [RokidGlass GitHub](https://github.com/RokidGlass/) | [Community Rokid docs](https://github.com/buildwithfenna/rokid-docs)
- [Tom's Guide — Rokid Glasses review](https://www.tomsguide.com/computing/smart-glasses/rokid-glasses-review)
- [Tom's Hardware — RayNeo X3 Pro review](https://www.tomshardware.com/peripherals/wearable-tech/rayneo-x3-pro-ar-glasses-review)
- [Skarred Ghost — RayNeo X3 Pro review w/ Karl Guttag patterns](https://skarredghost.com/2025/12/17/rayneo-x3-pro-review/)

**Hackable / dev-first**
- [Brilliant Labs](https://brilliant.xyz/) | [docs](https://docs.brilliant.xyz/) | [GitHub org](https://github.com/brilliantlabsAR)
- [Road to VR — Brilliant Halo price/release](https://www.roadtovr.com/brilliant-labs-halo-smart-glasses-price-release-date/)
- [Snap Spectacles developer hub](https://developers.snap.com/spectacles/home) | [Sample repo](https://github.com/Snapchat/Spectacles-Sample) | [Experimental APIs](https://developers.snap.com/spectacles/permission-privacy/experimental-apis)
- [MentraOS](https://mentraglass.com/) | [GitHub](https://github.com/Mentra-Community/MentraOS)
- [Even Hub launch — 9to5Google](https://9to5google.com/2026/03/26/even-realities-even-hub-apps-and-better-conversate-mode/) | [Even Realities GitHub](https://github.com/even-realities) | [Community BLE protocol](https://github.com/i-soxi/even-g2-protocol) | [awesome-even-realities-g1](https://github.com/galfaroth/awesome-even-realities-g1)
- [BasedHardware Omi](https://github.com/BasedHardware/omi) | [OpenGlass](https://github.com/BasedHardware/OpenGlass) | [docs.omi.me](https://docs.omi.me/doc/hardware/omiGlass)
- [Project Aria Research Kit](https://www.projectaria.com/research-kit/) | [projectaria_tools](https://facebookresearch.github.io/projectaria_tools/gen2/)
- [Pupil Labs Neon Real-Time API](https://docs.pupil-labs.com/neon/real-time-api/)

**Upcoming / rumors**
- [AppleInsider — Apple Glass late 2026 / early 2027](https://appleinsider.com/articles/25/09/14/apple-glass-without-ar-still-expected-in-late-2026-early-2027)
- [MacRumors — Apple 4 design variants](https://www.macrumors.com/2026/04/13/apple-smart-glasses-four-styles/)
- [9to5Google — Samsung Android XR glasses Fall 2026](https://9to5google.com/2026/05/19/google-samsung-android-xr-glasses-styles-release-date/)
- [Google blog — Android XR I/O 2026](https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/)
- [Engadget — XREAL Project Aura hands-on](https://www.engadget.com/2177998/android-xr-xreal-project-aura-hands-on/)
- [UploadVR — Meta Orion offered to devs in 2026](https://www.uploadvr.com/meta-to-reportedly-offer-orion-ar-glasses-to-developers-2026/)
- [TechCrunch — Snap spins Specs into standalone](https://techcrunch.com/2026/01/28/snap-gets-serious-about-specs-spins-ar-glasses-into-standalone-company/)
- [PPC.land — Snap Specs $2,500 Fall 2026](https://ppc.land/snap-specs-ar-glasses-set-for-fall-2026-launch-at-2-500/)
- [Axios — OpenAI device late 2026 plan](https://www.axios.com/2026/01/19/openai-device-2026-lehane-jony-ive)

**Trends / privacy**
- [Gizmodo — Smart glasses privacy advocates scrambling](https://gizmodo.com/smart-glasses-have-privacy-advocates-scrambling-2000734146)
- [National Law Review — Smart glasses privacy / Meta+Luxottica suit](https://natlawreview.com/article/smart-glasses-and-privacy-wearable-surveillance-and-disclosure-issues)
- [Compound Semiconductor — MicroLED market 2026](https://compoundsemiconductor.net/article/115217/Micro_LEDs_for_Smart_Glasses_a_383M_market_by_2026)
