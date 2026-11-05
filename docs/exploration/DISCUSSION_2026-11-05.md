# Conversation record and reusable excerpts

Recorded: 2026-11-05.

This is a curated project record, not a verbatim transcript. Direct excerpts are labeled by speaker. Draft pitch language is labeled separately and should be reviewed before use. The record does not claim that proposed work has been completed.

## 1. Background from earlier planning

- Art chose Stack City as the game title.
- The early concept centered on an appealing top-down city, car travel, household financial decisions, learning-driven visual upgrades, cosmetics, a store, and budgeted help.
- Art clarified that game wireframes and the game prototype are more important than WorldFarm wireframes, while still wanting both.
- WorldFarm is a separate modular environment product.
- The repositories received documentation; later repo work records a browser prototype, editable Figma artifacts, and city concept studies.
- These form an existing baseline. A later brief can redirect the pitch without erasing the prior work.

See the [original brief](../DESIGN_BRIEF.md), [implementation milestone](../MILESTONE_2026-11-03.md), and [existing concept history](../../output/concepts/README.md).

## 2. Hiring brief arrives

Art supplied a brief for games teaching personal finance and entrepreneurship to teens. It asks for metaphor/world-building, high-level financial concepts, personal/business/societal lenses, a persistent platform, and 2–3 contrasting original art directions applied to environments and UI.

The example business launcher is an example from the hiring manager, not a final selected game design.

The assistant recommended a stronger emphasis on experimentation and business growth, with a proposed launch/test/revise loop. It also suggested initially focusing Figma effort on a gameplay decision and platform hub. Art has not explicitly selected that narrower scope.

Full source brief: [Brief and UX priorities](../design/BRIEF_AND_UX_PRIORITIES.md).

## 3. Owner clarifies time and evaluation goals

**Art — direct conversation excerpt:**

> I have as long as I need to make it right. This is not a timed art test. They want to make sure this is the right fit. I need to show art direction chops that aren’t centered around character and crucially some UI/UX chops

**Interpretation:** Evaluate the work by quality and fit rather than a fabricated deadline. UI/UX needs an explicit development story: flows, alternatives, components, interaction states, usability decisions, and a polished prototype.

This clarification does not require unlimited scope. Use reviewable milestones.

## 4. Notebook ideas and ranking

The assistant ranked the notebook concepts and treated tattoo/print as a visual ingredient rather than a setting. It proposed Sunshift, Print District, and Orbit Works as contrasting visual directions; Botanicals was the first alternate.

Art then introduced City-States. The assistant placed it third overall, behind modern city and tropical modernism, for its combined financial, architectural, and UX opportunities.

All rankings remain assistant judgments. No final direction has been selected.

Full ranking and rationale: [Concept exploration](CONCEPT_RANKING.md).

## 5. City-States addition

**Art — direct conversation excerpt:**

> City-States - base on Ancient Greek architecture but more accessible and less about human sculpture. The player builds their city-state and compares it somehow with other city-states. Maybe they build towards a yearly Olympics.

**Assistant response — summary:**

The concept offers an architectural kit, a persistent city platform, visible growth toward the Games, and a strong comparison interface. Civic finance is the most natural lens; personal and business experiences can inhabit the city. Compare strategies using readiness, reserves, capacity, and dependencies rather than only wealth. Prove the comparison with authored cities before considering multiplayer.

## 6. LoRA and reference-driven generation

**Art — direct conversation excerpt:**

> I also don’t need to be creating Loras unless he specifically asks about it. To me they are slightly dated because the out of the box generation from major LLMs are consistent with a style if I establish it.
>
> Am I wrong about this?

**Assistant — direct conversation excerpts:**

> You’re right that you don’t need to train a LoRA for this pitch. I overemphasized training in my earlier recommendation.

> I’d soften the claim that LoRAs are dated. They’re an optional production tool, and strong reference-based generation can be sufficient for your current work.

**Discussion outcome:**

- Reference-driven generation and an explicit style guide are the current preferred exploration approach.
- Demonstrate consistency across actual environment and prop examples rather than assume it.
- Distinguish visual-style consistency from exact recurring-asset consistency.
- Blockouts, reference views, controlled edits, and geometry can help preserve asset identity.
- A LoRA does not automatically solve exact asset consistency.
- The brief asks for an explanation of scalability/LoRA compatibility, not a trained artifact.
- Do not make LoRA training a current deliverable.
- Do not present “LoRAs are obsolete” as a project finding.
- Keep core UI editable and structurally designed in Figma.

Full workflow and sources: [AI art workflow](../design/AI_ART_WORKFLOW.md).

## 7. Candidate pitch/case-study excerpts

The following are draft presentation copy based on the discussion. They are not hiring-manager quotes, research findings, or descriptions of completed work.

### Art direction and UI/UX intent

> I’m exploring how a financial-learning world can have a distinctive architectural identity while making its decisions easy to understand. Each direction will be tested through environments, buildings, progression, and an interactive UI.

### Why the game centers on choices

> The learning comes from making a commitment, seeing what it changes, and deciding what to do next. Growth includes better judgment and flexibility as well as a larger business.

### Generation approach

> For this exploration, I’m using reference-driven generation with a documented style guide. That lets me develop and revise the directions quickly. I’ll demonstrate consistency across environments, props, and progression states. If production calls for a trained adapter, those approved examples and explicit style rules provide a starting point for evaluation.

### Human and AI process

> I’ll show the sketches, layouts, or blockouts that establish the idea, the generated variations I explored, and the corrections that brought them into the visual system. The process record will make the decisions and tool contributions visible.

### City-States concept

> A city-state grows through the choices made by its people and businesses. Preparing for the Games gives those choices a shared goal, while comparing different cities makes the tradeoffs visible.

### Platform cohesion

> The experiences can explore different worlds while sharing recognizable navigation, feedback, progression, and accessibility conventions.

Before using these excerpts, adjust tense to match actual completed work, retain only the claims demonstrated by the artifacts, and choose the statements that fit the selected concept.

## 8. What is confirmed and what remains exploration

**Confirmed by Art:** selected title; teen audience; world/environment-led emphasis; crucial UI/UX emphasis; no timed-test constraint; game Figma priority over WorldFarm; locally generated imagery preference; no current LoRA-training deliverable; save this discussion for possible reuse.

**From hiring brief:** personal/business/societal lenses; high-level concepts; ambitious persistent front door; 2–3 original contrasting directions; environment/building/UI application; personal ideation and AI process visibility; explanation of scaling.

**Still exploratory:** final premise and art directions; rankings; City-States mechanics and event; shared-versus-varied art-style implementation; specific business-loop choices; comparison metrics; prototype size; chosen image model and production pipeline.

## 9. Next actions suggested by the discussion

1. Choose what to compare in the next visual exploration pass.
2. Define one high-level learning question and a few meaningful choices.
3. Establish original architecture, shape, material, and UI rules.
4. Create comparable environment/UI studies.
5. Build a connected native Figma interaction with visible consequence and recovery.
6. Document iterations, actual tools/time, and extension to new assets.
7. Revisit the pitch excerpts once the work supports them.

These are proposed next steps, not new implementation authorization or a claim that the owner has selected a final direction.
