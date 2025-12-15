---
title: 'Using OpenAI Codex to refactor a legacy codebase'
description: 'This is a record of my journey of refactoring a large legacy backend codebase with OpenAI Codex.'
pubDate: '2025-12-15'
tags: ['AI', 'OpenAI', 'Codex', 'GitHub Copilot', '.NET']
heroImage: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*6rIdhywe2d-1NaeQ6kTYgA.png'
---

I was an early GitHub Copilot Pro subscriber from its debut. A few months ago, the company I work for started rolling out GitHub Copilot Enterprise.

Because we’re allowed to use our personal GitHub account for work, I was asked to enrol with it. However, when I enrolled under the company’s Copilot subscription, GitHub automatically refunded my personal subscription — because a GitHub account can only have one active Copilot license. Reference: [GitHub Community discussion](https://github.com/orgs/community/discussions/56234)

To avoid any potential IP ownership disputes, I decided to stop using GitHub Copilot entirely on my personal machine.

At the same time, I’m a ChatGPT Plus subscriber. I use it for learning and daily creative tasks. Even though I treat it like a technical search engine quite often (and I’ve tried the web agent), I didn’t realize Codex could run locally inside VS Code until very recently (tried Codex CLI long ago but the experience wasn't great). 

So I decided to try it on a genuinely challenging project: refactoring a legacy backend codebase.

## The legacy situation

The codebase consisted of:
- A data object project mixing multiple concerns
- Thirteen containerized nano-services deployed to GCP Cloud Run
- Everything targeting .NET Core 3.1 (around five to six years old at the time of writing)

## Refactoring objectives
- Consolidate the shattered nano-service projects into a single API project
- Migrate from .NET Core 3.1 to .NET 10
- Move from a poorly organized project structure into a DDD-style structure
- Enable strict mode across all projects (**TreatWarningsAsErrors**)

### My Codex setup
- Plan: ChatGPT Plus
- Model: GPT-5.1-Codex-Max
- Agent: Full Access
- VS Code extension: [Codex – OpenAI’s coding agent](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt)
- Reasoning effort: Medium

![Image of Codex VSCode extension](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*NmAIlNWjJG78nNGfoIdIKA.png)

|     | C# files | Total LOC | Classes |
| --- | --- | --- | --- |
| Before | 527 | 45,927 | 390 |
| After | 394 | 44,393 | 408 |


It also helped fix thousands of errors when I enabled strict mode.

Even with AI, it still took me around 10 nights (about 2 hours per night) to complete. 

There was one time Codex told me I’d run out of usage quota and needed to wait 24 hours.

![Context usage](https://miro.medium.com/v2/resize:fit:876/format:webp/1*G3WcKokm2ozY4nWwDCPTdw.png)

This would have been extremely difficult to do manually without a significant time investment.

![Image showing diff on GitHub Pull Request](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Y2s_OzSXm_9NgypaAHTGKQ.png)

## How I feel about Codex afterwards

### Pros

- The model was able to pause and ask for meaningful confirmation, like:

> This is a very large refactor (hundreds of lambdas/short params across all services and tests). Doing it in one shot risks regressions and will take a lot of time.

- It also felt faster and more accurate (for this kind of refactor) than my typical experience with Copilot.

- And with a single Plus subscription, it offered strong value — not just for Codex, but also for day-to-day learning and creative productivity.

### Cons

- It’s a bit of a pity it doesn’t have Next Edit Suggestions (NES) like GitHub Copilot, which I personally find more useful for tight, single-file editing.

## Conclusion

In the past Codex CLI requires OpenAI API account and charge by token consumption, this discovery saved me a few bucks from monthly subscription cost. :)

This post was originally published on [[Medium](https://medium.com/@ferrywlto/using-openai-codex-to-refactor-a-legacy-codebase-9896b552e397)].
