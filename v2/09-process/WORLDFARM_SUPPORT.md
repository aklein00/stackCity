# How WorldFarm can support Stack City V2

Prepared 2026-11-05. This is a recommendation based on repo documentation and source inspection, not a new runtime acceptance test.

## Best role now

Use WorldFarm as a small composition, camera, and lighting workbench that supplies consistent underlays for drawing, local image exploration, and Figma backgrounds.

It should help produce the pitch without becoming a prerequisite project. Keep the game/UI case study as the main deliverable.

## Existing capability — evidence checked

| Capability | Current evidence | Implication |
| --- | --- | --- |
| Market look comparison | Foundation lab has three procedural market variants and matched cameras | Useful for scale, composition, and silhouette comparisons |
| Camera and look controls | Source contains orbit/zoom, orthographic camera, reset, clay/context toggles, light presets, sun direction and exposure | Reuse before building another viewer |
| PNG capture | Source contains a toDataURL/download action; milestone says completed download was not verified | Manually check one actual output before relying on it |
| Editable market kit | Six market styles with Three.js GLBs, Blender GLBs, editable .blend sources, texture atlases, and bounds | A useful starting library; not an approved V2 style |
| Full scene studio | Figma simulates placement, save/load, snapshots, and export | Do not describe these as implemented browser capabilities |

Sources:
- [Current WorldFarm README](https://github.com/aklein00/world_farm/blob/f019933b82ab21e99f42eaea6748ea1f3f6d0ca6/README.md)
- [Foundation milestone](https://github.com/aklein00/world_farm/blob/f019933b82ab21e99f42eaea6748ea1f3f6d0ca6/docs/MILESTONE_2026-11-03.md)
- [Viewer controls/export source](https://github.com/aklein00/world_farm/blob/f019933b82ab21e99f42eaea6748ea1f3f6d0ca6/foundation-lab/dist/app.js)
- [Camera/light/geometry source](https://github.com/aklein00/world_farm/blob/f019933b82ab21e99f42eaea6748ea1f3f6d0ca6/foundation-lab/dist/kit.js)
- [Market kit and asset contract](https://github.com/aklein00/world_farm/blob/f019933b82ab21e99f42eaea6748ea1f3f6d0ca6/market-kit-v1/README.md)

## Five useful applications

1. **Composition underlays.** Establish a simple footprint, eye line, focal object, circulation, and UI quiet zone. Draw over a clay view rather than solve perspective repeatedly.
2. **Fair comparisons.** Use a locked camera/aspect and comparable activity scale for the three worlds. Different architectures still need different geometry.
3. **Lighting studies.** Compare a few controlled setups and record their settings. Keep image generation from becoming the only source of spatial/lighting decisions.
4. **Object families and upgrades.** Put a tool/prop beside its related modules to test scale and silhouette. Save matched stills for proposed progression.
5. **UI staging.** Supply a clean background and selected-object view to Figma, then build controls and financial information natively on top.

## Proposed V2 sample subjects

| Direction | Blockout target | Useful object family |
| --- | --- | --- |
| Botanicals | Potting bench and greenhouse bay | Pots, packets, watering can, labels |
| City-States | Terraced courtyard and covered market | Stalls, shade screens, jars, lantern |
| Retro-Future | Service bay and commercial pod | Cargo, terminal, connector, delivery pod |

A palette change alone cannot establish these three styles. Reuse technical infrastructure where appropriate, then design distinct silhouettes and functional layouts.

## Recommended small workflow

Reference → Art's thumbnail → simple functional blockout → clay/lighting capture → original drawing or explicitly labeled local generated study → correction → editable Figma UI → documented comparison.

Use actual scene geometry for repeating views when continuity matters. Reference-driven illustration and 3D rendering serve different purposes; neither guarantees the other.

## Bound the tool work

- First, run the existing viewer and verify one capture.
- Reuse or edit the current Blender sources if that gets to a better image faster.
- Propose at most **4–6 active hours** of narrowly useful adaptation during this pitch, taken from the environment/contingency allocation.
- If a full placement/save/load app becomes necessary, scope it separately. Do not hide that work inside the pitch estimate.
- Use Blender or another familiar tool directly when adapting WorldFarm would delay the visual/UX evidence.

No WorldFarm source has been changed by this setup, and no net time saving has been measured.

## Output handoff

Use [camera notes](../04-environments/camera-studies/README.md), [environment state records](../04-environments/progression/README.md), [asset manifest](../05-objects/ASSET_MANIFEST.csv), and [time log](TIME_LOG.csv). Record actual editable scene path, module versions, camera, light preset, and downstream sketch/Figma use.
