# Mobile city style studies

Four portrait sheets, each containing four options for a shared compact neighborhood. Requested 2026-11-03 for art-direction selection across Stack City and WorldFarm. Original style names appear on the artwork; no franchise names appear on the sheets.

| Sheet | Options | File |
| --- | --- | --- |
| 01 Metro Miniature | Clear Blocks; Warm District; Slate Courtyards; Copper Rooftops | [Sheet](01-metro-miniature.png) |
| 02 Faceted City | Paper Geometry; Coastal Facets; Neon Quarter; Amber Afterglow | [Sheet](02-faceted-city.png) |
| 03 Beveled Borough | Soft Blocks; Honey Corners; Mint Village; Painted Terraces | [Sheet](03-beveled-borough.png) |
| 04 Pastel Living | Blush Basics; Lilac Courtyards; Peach Modern; Rose Twilight | [Sheet](04-pastel-living.png) |

The requested camera is top-down orthographic. Four matched destination footprints, a T junction, a crossing, one car, and solid foliage masses keep comparisons focused on shape, light and material. People and individual leaves are excluded. Each family includes a low-detail baseline, two medium-detail directions and a richer modular option. These detail labels are relative art-direction targets, not measured polygon counts or device-performance guarantees.

## Build recommendation

Start with a medium-detail option to balance identity and production effort. 02.B Coastal Facets is a candidate for a compact reusable kit: flat materials, limited chamfers and a few broad roof features. 03.B Honey Corners explores a warmer direction that needs more intentional bevels and painted or baked highlights. 04.B Lilac Courtyards provides an inviting alternative with restrained terrace detail. Treat the D options as an upper visual-detail target until profiled on representative phones.

A shared implementation could use reusable building shells, roof caps, awnings, planter blocks and single-mesh canopy clusters; a small material palette; baked ambient shading; one primary directional light; and emissive accents for dusk presets. A style decision still needs a real Three.js block tested at phone size for destination recognition, frame time and memory use.

## Production record

Generated with the built-in image-generation tool from the user-attached six-direction board. Exact prompts are the four adjacent `*-prompt.txt` files. These are rendered concept studies, not screenshots from the existing game and not approved production models. The current game and foundation-lab code were not changed by this concept pass.
