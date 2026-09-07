---
title: 'Right-Sizing AI Models: Spend on Uncertainty, Save on Repetition'
description: 'Start with a capable model while the problem is unclear, then step down as decisions and patterns make the work repeatable.'
pubDate: '2026-09-07'
heroImage: './right-sizing-ai-models-hero.svg'
draft: true
tags: ['ai-coding', 'codex', 'tokenomics', 'software-engineering']
---

Consider three requests from the same .NET ordering project:

| Request | What the model needs to resolve |
|---|---|
| “Should this rule belong to the cart, order, or session?” | An unsettled domain decision |
| “Implement the agreed order structure.” | A known contract with implementation work |
| “Add another item type using this existing example.” | A bounded extension of an established pattern |

These requests belong to one project, but they need different amounts of judgement. That was the useful conclusion from my recent discussion about choosing models and reasoning effort in Codex.

**My working approach is to spend more on a capable model early, then gradually step down as the project becomes clearer.**

## Spend more while the problem is unclear

At the beginning, I may still be deciding what to build, which assumptions to challenge, and what the smallest useful vertical slice should contain. A wrong decision here can spread into many subsequent changes.

That is where I would allocate a more capable, expensive model: help me clarify the problem and make the next critical decision. Once we agree on the direction, I can delegate implementation with much more precise constraints.

```text
Unclear problem          → stronger model for exploration
Agreed decisions        → model suited to design details
Working example + tests → cheaper model for implementation
Repeatable maintenance  → cheaper model for bounded changes

New uncertainty appears → reassess and step back up
```

I would revisit the choice after each meaningful increment. Has the domain become clearer? Do we have an agreed contract? Can I point to representative code and explain what a correct result looks like?

Those are reasons to try a cheaper model. Simply reaching the third week of a project is not.

This resembles OpenAI's model-selection guidance: establish the required accuracy, then evaluate cheaper models while preserving it. Applying that principle across a project's lifecycle is my own workflow interpretation. [OpenAI model selection](https://developers.openai.com/api/docs/guides/model-selection).

## My model and effort defaults

The shorthand from our discussion was:

> Astra discovers → Sol designs → Terra builds → Luna maintains.

Here is how I would use it in practice:

| Work | Starting choice | Condition |
|---|---|---|
| Discovery and unfamiliar problems | Astra / High | Important questions are still open |
| Design within an agreed direction | Sol / Medium | Boundaries and trade-offs need judgement |
| Feature development | Terra / Medium | Contracts and acceptance criteria are clear |
| First deployment | Terra / Medium | Investigate environment and rollout issues; escalate when needed |
| Routine maintenance and established deployment work | Luna / Medium | Scope is bounded and results are straightforward to check |

This is a personal starting policy, not a measured ranking or a guarantee that each combination is optimal. Model availability and costs change; I would evaluate these choices against actual work.

Model choice and reasoning effort are separate controls. Effort influences how much reasoning a model performs; it does not establish equivalence with another model. The supported settings also vary by model. [OpenAI reasoning models](https://developers.openai.com/api/docs/guides/reasoning).

Before increasing effort, I would check whether the task is missing information. More reasoning cannot supply an acceptance criterion I have never decided.

## Tokenomics means accounting for the whole task

By tokenomics, I mean the economics of the tokens consumed to get useful work completed.

The final answer is only part of that consumption. Prompts, files, conversation history, and tool results also use tokens. In the API, internal reasoning tokens are billed as output tokens. [Token and credit pricing](https://learn.chatgpt.com/docs/pricing), [reasoning-token billing](https://developers.openai.com/api/docs/guides/reasoning#controlling-costs).

Consider this hypothetical comparison:

| Cheaper model | More expensive model |
|---|---|
| First attempt misses an invariant | First attempt addresses it |
| Another prompt and investigation | Checks pass |
| Repair and another review | Ready for human review |

The higher token rate could still lead to a lower total cost if it avoids enough unsuccessful work. Equally, a straightforward change may succeed immediately with the cheaper model. I need evidence from comparable tasks to know which applies.

I would track usage alongside completion quality, elapsed time, retries, and review effort. Human review is an engineering cost, even though it is not a token charge.

API spending and subscription allowance also need separate accounting. API prices cannot be treated as a direct conversion of included subscription usage; plans and credit rules differ. [OpenAI pricing](https://learn.chatgpt.com/docs/pricing).

## Parallel work has its own bill

My parallel-first instructions raised another question: what happens when several agents investigate at once?

Imagine three branches each consume 10,000 tokens, followed by another 5,000 for coordination and synthesis. That is 35,000 tokens of work across the agents, even if they run concurrently. These are illustrative counts, not a billing estimate: token types, models, and caching affect the price.

Parallelism can shorten waiting time when the work is independent. It can also duplicate context and investigation, then require reconciliation.

For discovery, I would consider separate branches for domain rules, an unfamiliar integration, and existing repository behaviour. For a small DTO change, I would usually keep execution sequential.

A capable model can own difficult judgement while cheaper models handle bounded investigations, where the tooling supports that arrangement. Each branch should have a clear question and a useful output.

## Clarity earns the step down

Before reducing capability, I would check:

- The relevant decisions and constraints are written down.
- The next change has an example or an established pattern.
- Acceptance checks and human review can reveal meaningful mistakes.
- A trial with the cheaper model preserves quality without excessive correction.

A mature project can still contain an unfamiliar concurrency bug, a risky migration, or a new security boundary. Those tasks deserve a fresh model decision.

My aim is to turn early reasoning into reusable clarity: agreed contracts, readable code, focused tests, and explicit constraints. As those accumulate, I can spend less on repeatedly figuring out what the work means and delegate more of the routine execution to a cheaper model.
