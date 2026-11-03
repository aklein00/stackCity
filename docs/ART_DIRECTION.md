# Stack City — art direction and asset plan

## Direction

A premium miniature city: elevated three-quarter composition, readable silhouettes, carefully controlled materials and lighting, distinct districts, and small moments of activity.

World and UI take priority over character detail. The car provides a recognizable player marker. Every progression state should feel intentionally designed.

## References and their role

- [Art Klein — NFL Clash, Game Environments & UI](https://www.artkleinart.com/art-direction.html): owner's stadium environment work is the key portfolio reference for aerial readability and environment presentation. Prior research located the sheets, but image rendering was inconsistent; inspect the originals before claiming specific material or lighting matches.
- SimCity: city scale, spatial organization, district identity.
- Apex Legends: proposed reference for confident hierarchy, presentation, and feedback.
- Scopely's Yahtzee with Buddies: proposed reference for approachable session structure and rewards.

These are reference roles, not instructions to copy an existing product's assets or exact style. Create a comparison board with Art's original stadium files before final visual choices.

## World grammar

- Residential: warm storefronts, human-scale streets, trees, home personalization.
- Industrial/services: useful infrastructure, robust forms, machinery, distinct utility landmarks.
- Downtown: taller silhouettes, plazas, glass/material contrast, financial and employment destinations.
- Roads: readable routes and intersection logic; key destinations remain recognizable when zoomed out.
- Activity: traffic, signage, rooftop details, optional small pedestrians.

Treat “next generation” as quality of composition, lighting, materials, and response rather than density everywhere.

## Camera contract

Start with one elevated orthographic or long-lens three-quarter gameplay camera. Exact projection, angle, and scale remain to be tested. Lock the chosen camera for all three progression renders. Use a separate optional closer presentation camera.

Keep focal destinations and route legible beneath HUD. Capture neutral and UI-overlay versions. UI text must never be baked into background renders.

## Three world states

| State | Visual changes | Meaning |
| --- | --- | --- |
| Foundation | Complete polished starter block | Initial exploration |
| Connected | More activity, open destination, chapter decoration | Learning milestone |
| Personalized | Equipped cosmetic, personal home/car details | Player expression |

Avoid equating low wealth with ugliness or darkness. Distinguish chapter celebration from physical infrastructure supposedly funded by one household bill.

## Modular kit proposal

Road straight, road corner/intersection, sidewalk/plaza, home, market, utility service building, garage, downtown landmark, tree/planter, lamp/sign, car, and decorative prop set.

Define footprints, pivots, scale, material families, and interchangeable variants when producing actual geometry. Image concepts are not automatically reusable meshes.

## UI direction

City first, limited persistent HUD, clear task hierarchy, calm budget surfaces, expressive destination cards, and deliberate reward reveals.

Prototype palette and typography remain provisional. Define semantic roles before final colors: action, cash, soft currency, hard currency, learning, warning, success, surface, and text. Warnings require text/icon support.

Voice: confident, inviting, brief. Avoid forced slang, patronizing school language, and wealth-as-status messaging.

## Image production responsibility

Art will generate images on his computer. Initial design work must not trigger image generation or spend generation credits. Use clearly labeled placeholders and prepare shot briefs.

| Asset ID | Purpose | Suggested delivery |
| --- | --- | --- |
| SC-WORLD-01/02/03 | Matched progression views | 16:9 PNG, same camera, high-resolution master |
| SC-DIST-RES/IND/DT | District mood studies | Matching crops with annotated focal destination |
| SC-DEST-MARKET/UTILITY/GARAGE | Destination cards | 4:3 PNG, clear focal silhouette |
| SC-CAR-BASE/DECAL/PAINT | Cosmetic comparison | Identical angle and neutral backdrop |
| SC-UI-ICONS | Wallet/destination icon studies | Reference sheet; editable production vectors later |
| SC-PITCH-HERO | Opening pitch | Wide city composition with intentional title space |

Store supplied images later under assets/reference or assets/art with documented source, intended usage, and revision. Naming example: sc_world_connected_camA_v001.png.

## Local generation brief template

Asset ID:
Purpose and screen:
Reference files:
Camera / projection / crop:
District and modules:
Materials and palette:
Lighting and atmosphere:
Progression state:
UI safe zones:
Elements that must stay fixed across variants:
Deliverable dimensions:
Revision and notes:

A prompt alone cannot guarantee matching geometry across images. Prefer a shared scene/blockout or guided edits for continuity.
