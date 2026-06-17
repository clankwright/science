# Microsoft Seeing AI

## What it is

Free Microsoft app (Garage project, launched 2017, longest-running of the major blind-user vision apps) that narrates the visual world through the phone camera. Multi-channel design: each "channel" handles one task type (short text, document, product, person, scene, currency, color, light, handwriting). Pre-dates the LLM wave; absorbed multimodal LLM features 2023-2025 alongside its older specialist models.

## Specific unlocks

- **Short-text channel:** instantly speaks any text the camera sees, no shutter press, no upload. Read a menu, a sign, a sticker, a screen, in real time as you sweep the camera.
- **Document channel:** audio cues guide you to align an A4 page in frame, then OCR + structure-aware narration preserves headings, paragraphs, columns. Reads a tax form or a doctor's letter without a flatbed scanner.
- **Product channel:** scan barcode (audio beeps guide you to find the barcode); pulls product name and package text from a database of millions of items.
- **Person channel:** train it on faces of friends/family (with consent); estimates age, gender, expression of nearby people; calls out names when it recognizes someone trained.
- **Currency channel:** identifies bills (USD, EUR, GBP, CAD, INR, JPY, AED, others). Useful because bills look identical to touch in many currencies.
- **Color and light channel:** speaks the color of an object; emits an audio tone whose pitch tracks ambient light intensity (find a window in an unfamiliar room, check whether a light is on).
- **Scene channel:** GPT-class scene description with follow-up Q&A added 2023-2024.
- **Handwriting channel:** OCR for cursive and print handwritten text (a birthday card, a recipe, a doctor's note).
- Works on iOS and Android; some channels run fully on-device, no internet required.

## Pre-AI baseline

Pre-2017: standalone hardware OCR (KNFB Reader, $99-300), color identifiers ($60-200), money identifiers ($100+), each in a separate device. KNFB Reader for iOS launched in 2014 at $99 (still not free). Person recognition required either dedicated hardware (FaceFirst-class enterprise) or was simply unavailable to consumers.

## Cost / access

**Free, no account required, no ads.** iOS 12+ or Android 6.0+. Microsoft has consistently kept it free since 2017. Some channels require internet (Scene, full Document OCR with structure); others work offline (Short Text, Color, Light, Currency, Barcode).

## Maturity

**Production.** Has the most mature multi-channel UX of any blind-user vision app: channels are fast to switch (swipe), each is optimized for its task, no waiting for a generalist model to figure out what you want. The flip side: less conversational than Be My AI; more "tool" than "assistant."

Gaps vs Be My AI: shallower follow-up Q&A; less detail in scene descriptions; no smart-glasses integration as of May 2026.

## Sources

- https://www.microsoft.com/en-us/ai/seeing-ai
- https://www.microsoft.com/en-us/garage/wall-of-fame/seeing-ai/
- https://blogs.microsoft.com/accessibility/seeing-ai/
- https://www.perkins.org/resource/microsoft-seeing-ai-and-low-vision-review/
- https://veroniiiica.com/microsoft-seeing-ai-low-vision/ (low-vision user review)
- https://apps.apple.com/us/app/seeing-ai/id999062298
