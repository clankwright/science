# Bellingcat-Class OSINT Workflows

## What it is

Open-source intelligence (OSINT) for verifying conflict footage, geolocating photos, tracking ships and aircraft, monitoring satellite imagery for change, and corroborating social-media claims. Bellingcat is the canonical practitioner; their toolkit (https://bellingcat.gitbook.io/toolkit) is the de-facto curriculum. The 2024-2026 shift is that several steps that previously took an analyst hours can now be done by a vision model in seconds.

## Specific unlocks

- Geolocate a photo of an unknown rooftop in 30 seconds. Picarta or Oceanir's Orca model produces a bounded coordinate suggestion from architectural detail, vegetation, and skyline; a hobbyist then confirms with Mapillary or Google Street View.
- Detect destroyed buildings in a Gaza neighborhood across two dates by running Sentinel-1 SAR imagery through Bellingcat's Remote Sensing for OSINT recipes. SAR penetrates cloud cover, so coverage is weather-independent. Free Sentinel-1 data + Python + a laptop replaces a Maxar subscription.
- Verify a TikTok of a "Ukrainian missile strike" by running the video through reverse-frame search across Yandex (best for Eastern European faces and locations), TinEye, and Google Lens, then cross-referencing the timestamp against publicly available flight-tracking and weather data.
- Track a Russian oligarch's superyacht through MarineTraffic API plus weeks of TikTok geotag scraping when the AIS transponder is off. LLM agents can now follow the script that used to require a full-time analyst.
- Run a one-person OSINT investigation by night using free workshops (Bellingcat's 16-hour online courses, Discord community, monthly Open Source Challenge at challenge.bellingcat.com) instead of a Master's degree.

## Tools that matter

- **GeoSpy.** Was the public-access geolocation leader; restricted to law enforcement and enterprise customers in January 2025 after a 404 Media investigation.
- **Picarta.** Hobbyist-accessible geolocation; predicts photo location via a model trained on geotagged imagery.
- **Oceanir / Orca.** Self-serve geolocation with 20.1% accuracy at 1 km on Im2GPS3k as of April 2026. Currently the most accessible serious tool after GeoSpy went dark for civilians.
- **Yandex Images.** Best free face-recognition reverse search for non-Western subjects. Russian; FindClone (formerly SearchFace) is the underlying algorithm. Standard OSINT methodology: Yandex first, confirm with Bing, then TinEye.
- **Sentinel Hub / EO Browser.** Free Sentinel-1 and Sentinel-2 satellite imagery for change detection.
- **Bellingcat OpenStreetMap search tool.** Find bridges, gas stations, mosques within a polygon. Combine with terrain and skyline analysis to bound a candidate location.

## Pre-AI baseline

Geolocation was a manual analyst skill measured in hours per image. Reverse face search outside Russia barely worked. Satellite-imagery change detection required a $3K-50K Maxar subscription or institutional access via Planet Labs. Verifying a viral video in real time was a newsroom team sport. Investigative journalism at this layer existed only inside Bellingcat, NYT Visual Investigations, ProPublica, and a handful of state intelligence services.

## Cost / access

- Picarta: free tier, paid plans for higher quotas.
- Oceanir: self-serve subscriptions.
- Yandex / TinEye / Google Lens: free.
- Sentinel-1/2 data: free via Copernicus.
- Bellingcat workshops: in-person five-day workshops in NY/London ~$1,500-2,500; online 16-hour courses cheaper. Discord and the Open Source Challenge are free.

## Maturity

- Geolocation models: production for landmark-rich images, beta for generic rural scenes, research for thoroughly featureless backgrounds.
- Reverse face search: production but inconsistent on East/Southeast Asian faces.
- SAR-based change detection: production for damage assessment but requires Python literacy.
- Workflow as a whole: institutional-quality output from a one-person operation if the operator does Bellingcat's training and is patient. Still bottlenecked on judgment, not tooling.

Where it breaks: AI-generated imagery contaminates reverse-image searches; deepfaked videos fool naive verification; geolocation models hallucinate confidently on ambiguous images.

## Sources

- https://www.bellingcat.com/
- https://bellingcat.gitbook.io/toolkit/more/all-tools/osint-tools-map
- https://bellingcat.github.io/RS4OSINT/
- https://www.bellingcat.com/resources/2023/11/15/a-new-tool-allows-researchers-to-track-damage-in-gaza/
- https://www.bellingcat.com/resources/2025/03/03/the-bellingcat-open-source-challenge-is-back/
- https://reverseimagelocation.com/blog/geo-game-ai-vs-picarta-vs-geospy
- https://oceanir.ai/
- https://github.com/The-Osint-Toolbox/Geolocation-OSINT
