# Stack City — learning, economy, and prototype scenario

## Status

All amounts below are fictional prototype values, not a balanced production economy or financial advice. Audience is 13–17; region, curriculum, and revenue model remain open.

## Learning through actions

| Skill | Player action | Evidence of understanding |
| --- | --- | --- |
| Separate commitments from spendable funds | Reserve money before shopping | Player can identify what remains available |
| Compare value | Compare baskets and unit prices | Basket covers stated needs within a chosen plan |
| Read recurring costs | Inspect a utility bill | Player identifies amount, due date, and usage |
| Adapt to surprises | Revise allocations after repair | Player explains the tradeoff and preserves essentials |
| Understand convenience costs | Compare self-service with help | Player sees both money and time consequences |
| Pursue a goal | Allocate and revise savings | Player understands how choices change progress |

A second scenario with different amounts should check transfer before claiming mastery. The pitch demo only illustrates the approach. Avoid scoring wealth, purchase volume, or speed as financial understanding.

## Three ledgers, two game currencies

1. **Simulated cash:** income, groceries, bills, savings allocations, repair, help.
2. **Style Coins (soft):** earned through activities and milestones; spent on cosmetics.
3. **Gems (hard):** premium cosmetic identity; milestone-issued in the prototype.

Learning progress is a separate nonspendable state. Never convert paid gems into lesson cash, correct answers, emergency rescue, or mastery. The real-money model is undecided. The teen audience makes purchase design a specific brief question, not an assumed feature.

Use labels such as “Cash / simulation,” “Style Coins,” and “Gems,” with distinct icons. Avoid relying on yellow versus green alone.

## Budget rules

Cash includes money earmarked in the same account. Reserves are allocations, not expenses.

spendable = cashBalance − unpaidBills − groceryReserved − goalReserved

- Paying an already reserved bill reduces cash and the unpaid bill reserve by the same amount.
- At grocery checkout, subtract the actual basket cost from cash and release the grocery reserve.
- Revising the goal changes allocation, not cash.
- Reject a transaction that would consume protected allocations unless the player explicitly revises the plan.
- Track actual transactions separately from planned amounts.

A later separate savings-account implementation would require a transfer model; do not double-count the same goal as both a transfer and a reserve.

## Seed scenario

Opening simulated cash: 500.

| Allocation | Amount |
| --- | ---: |
| Unpaid bills, including a utility bill of 120 | 300 |
| Grocery reserve | 80 |
| Goal reserve | 50 |
| Spendable | 70 |

For the comparison, both grocery baskets satisfy the fictional household's stated needs; differences must be explained through items, quantities, and unit prices. Final basket contents await curriculum review.

### Branch A: lower-cost basket

| Event | Cash | Unpaid bills | Grocery reserve | Goal reserve | Spendable |
| --- | ---: | ---: | ---: | ---: | ---: |
| Start | 500 | 300 | 80 | 50 | 70 |
| Buy groceries for 60; release grocery reserve | 440 | 300 | 0 | 50 | 90 |
| Pay utility bill of 120 | 320 | 180 | 0 | 50 | 90 |
| Repair event costs 90; pay | 230 | 180 | 0 | 50 | 0 |

The player preserves the original goal and covers the surprise.

### Branch B: higher-cost basket, recoverable adjustment

| Event | Cash | Unpaid bills | Grocery reserve | Goal reserve | Spendable |
| --- | ---: | ---: | ---: | ---: | ---: |
| Start | 500 | 300 | 80 | 50 | 70 |
| Buy groceries for 80; release grocery reserve | 420 | 300 | 0 | 50 | 70 |
| Pay utility bill of 120 | 300 | 180 | 0 | 50 | 70 |
| Repair quoted at 90; no charge yet | 300 | 180 | 0 | 50 | 70 |
| Revise goal allocation from 50 to 30 | 300 | 180 | 0 | 30 | 90 |
| Confirm repair payment | 210 | 180 | 0 | 30 | 0 |

Explain the 20 shortfall before adjustment. Do not label this branch a moral failure. Show that a preferred purchase can affect the timing of another goal.

The demo ends with 180 of bills still reserved. The outcome must say so; it must not claim all weekly bills are paid.

## Rewards and world progression

Proposed demo reward: 100 Style Coins and 5 Gems, awarded once on finishing the learning sequence. These are placeholders.

- Foundation: polished starter block.
- Connected: a learning milestone unlocks activity/decor in the same block.
- Personalized: player equips an earned cosmetic.

Later mastery should require successful application in a different situation. Do not claim an environmental unlock proves understanding.

Cosmetic example: car decal costs 60 Style Coins; 100 becomes 40 on purchase. A premium paint preview costs 10 Gems and is unaffordable at the demo's 5 Gems. Show the state without a real purchase checkout.

## Hiring help

Use a separate resettable example branch with 30 spendable cash and two time slots. Grocery delivery costs 10 simulated cash and saves one slot; self-shopping costs no helper fee and consumes that slot. Both still pay for groceries.

Display fee, time benefit, duration, and cancel conditions. Initial demo help is a one-session hire with no automatic renewal. Later recurring help must preview next charge and cancellation effects.

Hiring never provides correct answers or bypasses the learning objective.

## Content review before production

Validate age appropriateness, regional terminology, numeracy, accessibility, realistic examples, and whether learning transfers beyond memorizing the demo. Keep personal finance distinct from municipal budgets and advanced business topics.
