# Reference-driven art generation and production scaling

Recorded: 2026-11-05.

## Decision

Use established visual references, explicit style rules, iterative generation, and art direction for the exploration. Do not make training a LoRA part of the current deliverable.

Art's view is that current major-model image tools may maintain an established style sufficiently for this work. Treat sufficiency as something to demonstrate across the actual asset set.

The assistant initially emphasized a possible training workflow too heavily and corrected that recommendation. The hiring brief asks how a direction would hold up in a LoRA-based pipeline or otherwise scale; it does not request a trained model.

## Distinction discussed

| Requirement | Meaning | How to demonstrate it |
| --- | --- | --- |
| Style consistency | Shared proportions, palette, materials, lighting, line treatment, and detail level | Extend approved references to different rooms, buildings, props, and UI treatments |
| Asset consistency | The same building retains its footprint, roof, windows, entrances, and identity across views and upgrades | Use blockouts, reference views, controlled edits, or actual geometry; inspect changes |
| Production scalability | Others can extend the system with manageable correction effort | Document rules, references, prompts, revisions, acceptance criteria, and effort |

Neither reference-based generation nor a trained adapter should be described as guaranteeing exact geometry or game-ready assets.

## Working exploration workflow

1. Establish a direction through Art's own sketches, layouts, shape studies, graphic motifs, or simple 3D blockouts.
2. Define the camera and functional layout.
3. Approve a small set of visual anchors.
4. Record explicit shape, material, palette, lighting, and detail rules.
5. Generate related images using those references and task-specific instructions.
6. Compare results against the rules; reject or correct drift.
7. Integrate selected environment art into editable native Figma UI.
8. Extend to an unfamiliar asset and a progression variant to check generalization.

Keep essential UI text, controls, layout, components, and interaction state editable. Generated UI treatments may inform visual exploration but do not replace the interaction design.

## Generation brief template

- Scene and its gameplay purpose.
- Camera, projection, crop, and scale.
- Essential objects and spatial relationships.
- Architectural and proportion rules.
- Material and surface rules.
- Lighting and palette.
- Quiet areas needed for UI.
- Approved reference IDs.
- Identity details that must survive an edit.
- Output dimensions and revision.
- Elements to omit or simplify.

## Evidence set

Proposed consistency examples: room, garage, storefront, prop family, and building upgrade. Include corresponding editable UI and one new asset not already present in the original visual anchors.

Record:

- Tool and model version, where available.
- Reference files and prompt/revision history.
- Actual time spent; distinguish active work and generation wait when useful.
- Accepted and rejected outputs.
- Human corrections and why they were necessary.
- Known failures and constraints.

No time, model performance, training result, or consistency rate has been measured by this discussion record.

## LoRA position

LoRAs remain a useful model-adaptation option. The discussion does not establish that they are obsolete or that they are necessary.

Consider a supported-model adapter only if a production requirement or comparison justifies it: for example, a particular studio pipeline, model control, or repeated style-adherence problem. Compare results and total correction effort before making an architectural commitment. Do not claim it is automatically cheaper, deterministic, or more consistent.

If later requested, approved examples and a clear visual grammar could become inputs to a training evaluation. They are not evidence that training has occurred.

## Suggested presentation language — draft, not a quote from completed work

> For this exploration, I’m using reference-driven generation with a documented style guide. That lets me develop and revise the directions quickly. I’ll demonstrate consistency across environments, props, and progression states. If production calls for a trained adapter, those approved examples and explicit style rules provide a starting point for evaluation.

Use future tense until the work has been done. Update this copy to reflect the actual demonstrated process before presenting it as a completed case study.

## Technical sources consulted during the discussion

- [OpenAI image generation](https://developers.openai.com/api/docs/guides/image-generation): reference/image editing workflows, iterative editing, and documented consistency/composition limitations.
- [Hugging Face Diffusers LoRA](https://huggingface.co/docs/diffusers/training/lora): lightweight adaptation through trained adapter weights.
- [Hugging Face Diffusers ControlNet](https://huggingface.co/docs/diffusers/using-diffusers/controlnet): structural guidance using inputs such as edges and depth.

These sources support capability descriptions. They do not benchmark this project's style, prove a particular tool is best, or verify that a local workflow has been implemented.

See [selected conversation excerpts](../exploration/DISCUSSION_2026-11-05.md) for the owner question and assistant response in context.
