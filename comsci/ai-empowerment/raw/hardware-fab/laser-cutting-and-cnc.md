# Laser cutting and CNC AI (LightBurn, xTool, Fusion CAM)

## What it is

Desktop laser cutters (xTool, Glowforge, OMTech, Sculpfun) and small CNC routers (Shapeoko, Onefinity, Bantam) traditionally needed two non-trivial skills: vector design (Inkscape, Illustrator) and machine-specific toolpath/setting tuning. AI is now wedged into both layers.

## Specific unlocks

### xTool Creative Space (XCS) + AImake

- xTool's AImake claims to be the first AI generator for DIY crafters: 70+ styles for laser cutting, engraving, printing.
- Prompt: "Generate a Victorian filigree corner ornament 80mm tall for engraving on cherry wood." Output is a print-ready vector with the correct line weight for engraving vs cutting layers.
- EasySet Library: 500+ pre-tested material settings. Pick "3mm baltic birch" and the power/speed/passes are filled in.
- Templates: thousands of pre-existing laser cut SVG templates indexed and prompt-searchable.

### LightBurn + AI

- LightBurn itself doesn't ship AI but is the de-facto editor for diode/CO2 lasers. Material libraries from the community (xTool, Sculpfun, Atomstack, Ortur) are AI-curated and shared.
- Vector cleanup, traced raster-to-vector, and image preparation now done by upstream AI tools (Photoshop AI, Vectorizer AI) before LightBurn.

### Fusion 360 CAM + Autodesk Assistant (March 2026)

- Assistant extends to Manufacturing workspace: create setups, generate toolpaths, batch-rename operations, select tools by natural language.
- "Set up a CAM job for this part on a Shapeoko 4 with a 1/8 endmill in 6061 aluminum, finishing pass with 0.1mm step-down." Generates the operation tree.

### Concrete weird unlocks

- Hobbyist with no Illustrator skills generates a custom wedding-favor cutout in 30 seconds via xTool AImake, cuts 100 of them on a $400 diode laser.
- Match a broken inlay pattern from a photograph: AI vectorizes the pattern, generates the corresponding cut layer, ready to laser onto a replacement piece.
- LLM reads the back of a Shapeoko speeds-and-feeds chart and generates a Fusion 360 CAM setup that doesn't snap the bit on first try.

## Pre-AI baseline

Laser/CNC users either bought SVG bundles on Etsy or learned Inkscape/Illustrator. Material settings were trial-and-error scorch-test cards. CAM toolpath setup in Fusion 360 took a multi-week curve to get repeatable results in metal.

## Hardware / cost

- xTool F1 Lite (compact diode/IR): $499.
- xTool S1 enclosed diode 20W: $1,899.
- Glowforge Aura: $1,199.
- Shapeoko 4: $1,800-$2,500.
- LightBurn license: $80 one-time + $30/yr updates.
- xTool XCS / AImake: free.
- Fusion 360 CAM: bundled.

## Maturity

xTool AImake: production, results uneven. LightBurn community libraries: production, very useful. Fusion CAM AI: shipping, March 2026 release. CNC AI for production work still requires human sanity check on toolpath collisions and feeds; AI-only CAM in metal is risky.

## Sources

- https://www.xtool.com/blogs/buyer-guide/free-laser-cut-files
- https://www.xtool.com/
- https://lightburnsoftware.com/
- https://www.atomm.com/
- https://www.autodesk.com/products/fusion-360/blog/march-2026-product-update-whats-new/
- https://www.etsy.com/listing/1202041729/xtool-laser-lightburn-materials
