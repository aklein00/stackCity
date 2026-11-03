# Stack City — first playable milestone

Delivered 2026-11-03 for director review. The current browser slice and native Figma file are linked from the README.

## Decisions made while Art was away

- Buildless Three.js browser delivery, with local MIT-licensed r181 modules. No game-engine migration work.
- One neighborhood and one simulated week keep the demo small enough to review this week.
- Warm cuboid buildings, orthographic camera, deliberate rooflines, restrained rounded UI and strong light/shadow establish an older, playful direction. Concept geometry remains provisional.
- Keep financial choices separate from learning progression and cosmetic currencies. No real transactions, account integration, ads or payment SDKs.
- Keep scenario copy/values, money rules, scene rendering and interface navigation in separate modules so changes to the premise or teaching approach are localized.
- Use explicit curated Figma states and state-preserving branch returns. Figma is a click-through model; the browser uses an actual in-memory reducer.
- Use aklein personal for both Figma files. The connected account reported that team on Pro; existing files already belonged there, so no unnecessary duplicate was created.

## Implemented review route

Choose a goal → review $500 weekly plan → visit market → preview $60 or $80 basket → confirm → pay $120 utility bill → respond to $90 repair → view outcome → collect cosmetic reward → buy and equip decal.

The $60 basket path ends with $230 cash, $180 outstanding commitments, $50 reserved goal and $0 available. The $80 path needs a $20 goal adjustment and ends at $210 / $180 / $30 / $0. Reserved amounts are allocations inside cash, not extra wallets.

Reward: 100 Style Coins and 5 Gems, once. Decal costs 60 Style Coins; paint costs 10 Gems and is unaffordable. Learning decor and car cosmetics are distinct world changes.

The hiring example uses a separate $110 cash/$80 grocery/$30 available illustration. A $10 one-time fee saves one of two time slots; canceling before service refunds it. It does not silently alter the main week.

## Validation completed

- Six Node tests passed: both budget branches, rejection of an unaffordable repair, goal adjustment, duplicate transaction/reward/cosmetic prevention, helper isolation and refund, invalid actions, and reset are covered across these tests.
- JavaScript syntax checks passed.
- Browser walkthrough completed for both grocery branches, reward, cosmetic purchase/equip, hiring and cancellation. Desktop 1280 × 720 checked.
- Figma: 110 scenario frames, 344 navigation links, four named starts; no missing targets and every scenario reachable from a named start. 18 primary review frames plus a compact 844 × 390 review check. Compact decision content scrolls while action targets retain size.
- Figma UI uses native text, auto layout, reusable components and variables. Neighborhood imagery is editable vector placeholder art. Review screenshot: `docs/review/figma-grocery.png`.
- Private Sites deployment succeeded. The deployed URL presents the expected owner sign-in gate in a signed-out browser; the gameplay walkthrough was on the same local source version.

## Limitations and next review

Progress exists only in memory; refreshing resets it. The game is silent. Settings include reduced motion and larger text. No formal accessibility audit, teen usability study, curriculum validation or broad browser/device performance audit has been completed.

The narrative, teaching approach, reward values and loop are proposals for the game director. The three market directions can be compared in WorldFarm before detailed modeling. Final art and animation remain future work; no image generation credits were used.

Private preview links require the owning ChatGPT account. Figma follows its existing team permissions. No public sharing permissions were changed.

## Files to change next

- `prototype/dist/scenario.js`: goals, basket data and scenario values.
- `prototype/dist/economy.js`: state transitions and transaction validation.
- `prototype/dist/city.js`: environment and progression visuals.
- `prototype/dist/app.js`: screen route, presentation and interactions.
- `docs/PROTOTYPE_SCREENS.json`: curated Figma content reference; not the runtime engine.
- `docs/ASSET_CHECKLIST.md`: image slots, cameras and production sizes.

The vendored Three.js files retain their MIT license. Documentation and native Figma links are delivered with source on the repository's main branch.
