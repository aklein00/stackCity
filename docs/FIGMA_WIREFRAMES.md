# Stack City — Figma wireframe and prototype specification

## Priority and output

This is the first production deliverable across both projects. Create native editable Figma UI, a flow map, and a connected prototype. WorldFarm is a separate file and follows this first pass.

This document specifies future work; no Figma file or prototype URL exists yet.

## Working canvas

Landscape mobile/tablet is a provisional starting point. Use 1280 × 720 logical pixels for the first composition with safe-area guides. Validate intended device before polish. Include one compact-screen check for text size, touch targets, and budget readability.

## File pages

- 00 Start Here: purpose, status, walkthrough, assumptions, prototype links.
- 01 Flows: main journey, alternate choices, store/hiring branches.
- 02 Foundations: typography, spacing, color roles, icon roles, motion notes.
- 03 Components: variants, properties, examples, and state documentation.
- 04 Game Wireframes: named screens below.
- 05 Prototype: connected demonstration and reset entry.
- 06 Art Handoff: asset slots, dimensions, cameras, three world states.
- 07 Review Log: decisions and unresolved questions.

## Screen inventory

| ID | Screen | Essential content and interaction |
| --- | --- | --- |
| SC-01 | Welcome / choose a goal | Brief premise, two or three meaningful goals, enter simulation |
| SC-02 | Home / weekly plan | Cash, unpaid commitments, grocery allocation, savings goal, spendable balance |
| SC-03 | City hub | Destinations, car, current goal, next activity, budget entry, store entry |
| SC-04 | Destination preview | Purpose, expected cost/time, learning topic, travel/cancel |
| SC-05 | Car journey | Short route, destination identity, skip; reduced-motion alternative |
| SC-06 | Grocery decision | Compare baskets, quantities, unit prices, needs coverage, live budget preview |
| SC-07 | Purchase review | Itemized total, resulting spendable amount, confirm/edit |
| SC-08 | Utility bill | Amount, due date, usage explanation, reserved funds, payment action |
| SC-09 | Surprise expense | Car repair, cost, current shortfall or affordability, explain options |
| SC-10 | Adjust plan | Revise goal allocation or return to a reversible decision; preview consequences |
| SC-11 | Weekly outcome | Transactions, commitments remaining, goal progress, chosen tradeoffs |
| SC-12 | Learning / world unlock | What skill was applied, what activity/decor unlocks, return to city |
| SC-13 | Progressed city | Matched camera showing state change, accessible replay of reveal |
| SC-14 | Cosmetic store | Soft/hard currency categories, price clarity, owned and locked items |
| SC-15 | Item detail / purchase | Preview, balance after purchase, confirm/cancel, equip |
| SC-16 | Hire help | Fee, duration, time benefit, recurring cost if applicable, hire/cancel |
| SC-17 | Active help | Next charge, remaining term, cancel action, resulting budget |
| SC-18 | Settings / support | Sound, motion, readable text, help, prototype reset |

## Main prototype route

SC-01 → SC-02 → SC-03 → SC-04 → SC-05 → SC-06 → SC-07 → SC-03 → utility preview/travel → SC-08 → SC-09 → SC-10 when needed → SC-11 → SC-12 → SC-13.

Store branch: city → SC-14 → SC-15 → purchase/equip → city.
Help branch: city/home → SC-16 → hire → SC-17 → cancel/return.

Every modal has an exit; every branch returns to a stable screen. Use Back to preserve selections and Reset to restore seed values.

## Required state coverage

- Budget: initial, previewing, committed, insufficient spendable funds, goal revised.
- Grocery basket: empty, viable lower-cost, higher-cost, incomplete needs, purchase complete.
- Destinations: available, selected, completed, learning-locked, preview only.
- Store items: affordable, unaffordable, owned, equipped, learning-locked.
- Help: available, unaffordable, active, cancellation preview, canceled.
- World: foundation, connected, personalized.
- Asset slots: awaiting artwork; do not disguise placeholders as final art.

Show both a successful plan and an adjustment path. Insufficient funds explains the amount and offers editing; it does not strand the player.

## Components

Button (hierarchy/state), destination pin/card, wallet balance, budget row, goal card, comparison card, transaction row, consequence preview, modal, toast, reward panel, store item, helper card, navigation, and labeled placeholder frame.

Use auto layout, meaningful layer names, text properties, component variants, and shared variables/styles. Currency identity must persist across screens. Do not make entire screens flattened images.

## Prototype variables

Suggested values: cashBalance, unpaidBills, groceryReserved, goalReserved, spendable, basketCost, repairResolved, styleCoins, gems, helperActive, worldStage, selectedGoal.

Figma can simulate curated branches. Use the exact balances in LEARNING_AND_ECONOMY.md. If expression support is limited, use explicit named scenario states and document them. Do not imply that a general economic engine has been implemented.

Purchases commit once. Back navigation must not repeat charges or rewards. Reset clears transactions, ownership changes, and world progression in the demo.

## Interaction and motion

Consequence previews appear before confirmation. Keep sums readable during transitions. Animate money movements only when the underlying state commits. Use a short camera/reward reveal with a static reduced-motion option. Avoid placing essential information solely in animation or color.

## Art integration

World images may be temporary scene backgrounds. UI, labels, controls, and flow diagrams remain editable. Keep the same camera and crop for progression comparisons. Record asset ID and intended replacement dimensions.

## Accessibility and tone

Readable contrast, text labels alongside icons, comfortably sized touch targets, no color-only financial status, plain language, no forced slang, no shame for revising a plan. Explain “available to spend” directly.

## Completion checklist

- A named prototype start point reaches the weekly outcome and progressed city.
- Adjustment, store, and hiring branches work and return.
- All displayed balances reconcile.
- Reset restores the same starting state.
- Components and variables demonstrate the workflow in the native file.
- Wireframes work with placeholders before art arrives.
- Share both a prototype link and an editor/file link with page/node references.
- Record what is simulated, unfinished, and ready for review.
