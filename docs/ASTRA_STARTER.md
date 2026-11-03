# Stack City — Astra starter prompt

Copy the following into a new Astra session.

```text
Work with me as a game UX designer, environment art director, and Figma prototyper on Stack City.

Repositories:
- https://github.com/aklein00/stackCity
- https://github.com/aklein00/world_farm

Read Stack City's README.md and all docs/*.md first. Read WorldFarm's README and product brief to understand the relationship. Follow applicable repository instructions. Preserve existing work. Treat confirmed decisions as requirements and proposals as provisional defaults.

CONTEXT
Stack City is a financial literacy game for ages 13–17. The pitch emphasizes world, environment progression, and UI over characters. Think of a premium miniature city viewed from an elevated top-down/three-quarter camera, with car travel between destinations. The director references Apex Legends and Scopely's Yahtzee with Buddies: use these to discuss hierarchy, polish, approachability, session structure, and rewards, not to copy their assets.

My NFL Clash stadium work is on https://www.artkleinart.com/art-direction.html. Inspect the original environment images if accessible. Distinguish what you observed from proposed direction; do not invent a visual audit if images fail.

PRIORITY
Create Stack City's actual game wireframes and connected native Figma prototype first. WorldFarm is a separate modular world-building tool and separate pitch. I want its wireframes too, after the first Stack City pass. The game must not wait for a WorldFarm app.

FIRST DELIVERABLE
Use the repo's screen specification to create a shareable Figma game file with editable frames, text, auto-layout, components, variables/styles, a flow map, annotations, and a connected prototype. A written plan alone or a page of flattened screenshots is insufficient.

Use the provisional 1280 × 720 landscape canvas and include a compact-screen readability check. Preserve platform/orientation as an open assumption until the brief resolves it.

Start with:
1. Goal selection and weekly budget.
2. City hub and destination preview.
3. Short/skippable car journey.
4. Grocery comparison and purchase review.
5. Utility bill.
6. Surprise repair and budget adjustment.
7. Outcome, learning reward, and progressed city.
8. Supporting store/item/equip and hire/cancel-help branches.
9. Settings/help/reset and necessary error/empty states.

Use docs/FIGMA_WIREFRAMES.md for the full inventory and docs/LEARNING_AND_ECONOMY.md for exact arithmetic.

PROTOTYPE SCENARIO
Start with 500 cash: 300 reserved for bills, 80 for groceries, 50 for a goal, 70 spendable.
- Grocery basket 60 releases the 80 grocery reserve; utility payment 120 reduces cash and the bill reserve; repair costs 90. End with cash 230, unpaid bill reserve 180, goal reserve 50, spendable 0.
- Alternate basket 80 produces a 20 shortfall at repair. Revise goal reserve from 50 to 30, then pay repair. End with cash 210, unpaid bill reserve 180, goal reserve 30, spendable 0.
Make the consequences legible before confirmation. The remaining 180 of bills are still reserved, not paid. Neither branch should shame the player. Both must be reachable and resettable. Avoid duplicate charges/rewards when navigating Back.

ECONOMY AND LEARNING
Distinguish simulated household cash, Style Coins (soft cosmetic currency), Gems (hard cosmetic currency), and nonspendable learning progress. No real-money checkout is needed. Premium cosmetics cannot solve lesson budgets or buy mastery.
Use the documented demo reward and prices. Show affordable, unaffordable, owned, and equipped states.
Help is initially a transparent one-session money/time tradeoff; use its separate resettable example. It cannot answer the lesson for the player.
A curated prototype illustrates learning; it does not establish validated mastery.

ART
I will generate images on my computer. Do not generate images or spend generation credits. Use named placeholders, simple editable blockouts, and an asset checklist with dimensions/camera/crop. Do not require finished artwork to complete the prototype.
Plan three matched views of the same block: Foundation, Connected, Personalized. Keep all stages polished. Learning unlocks and cosmetic purchases must read as different systems.
Keep UI editable even when scene backgrounds are raster placeholders.

FIGMA WORKFLOW
Load the applicable Figma skills before their tools. Create or use a native Design file, not a Figma Code/Make substitute. Use components, semantic variables, variants, and descriptive layer names. Label simulated world actions and curated branches honestly.
Create named prototype starts, reliable exits, preserved back-navigation state, and reset. Provide the editable file URL, prototype URL, page/node links, and a short walkthrough.
If Figma access is unavailable, complete the frame/component/interaction specifications in Markdown and state the exact blocker. Do not claim a Figma deliverable exists.

WORKING STYLE AND COMPLETION
Begin with a concise reading summary and execution plan, then do the authorized wireframe/prototype work. Use documented defaults and flag unresolved brief questions without blocking unrelated progress.
Validate scenario balances, branch reachability, currency separation, store/help exits, and reset. Record Figma links, actual completed work, simulations, and unresolved items in the repo docs. Do not mark planned work complete.
After the first Stack City prototype pass, create WorldFarm's separate native Figma wireframes and connected composition-to-export demo using its docs. Keep its app implementation for a later task.

```
