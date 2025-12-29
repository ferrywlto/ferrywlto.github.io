---
title: 'The Last Mile of Quality: Why GenAI Won’t Replace Professionals'
description: 'Why GenAI won’t replace professionals — and why the “X is dead” narrative is harmful.'
pubDate: 2025-12-30
tags: ['AI', 'Software Engineering', 'Professionalism', 'Accountability', 'Career']
heroImage: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*uUWY46yVKf0K1MCmQCoULA.png'
---
# Victim of fear propagation

I’ve been a paid ChatGPT user since the beginning, and for a long time it was genuinely helpful.

Then, in early 2024, my social feed changed. Every day it was some variation of the same narrative: “software engineering is finished”; “AI replaces programmers”. It wasn’t a debate any more — it got into my head. I didn’t just feel annoyed. I felt threatened.

For months, I questioned my own decades of craft and wondered if I was becoming redundant in real time — stuck in loops of self-doubt even while actively learning modern AI tools. I still felt replaceable. It didn’t stay at my desk — it affected my relationship with my partner to the point that we sought therapy.

What bothered me most is that this fear isn’t limited to software engineers. It hits designers, writers, and musicians — anyone whose work gets reduced to “just waving a magic wand”.

It took me months to consolidate and organise my thoughts here, and this essay is my pushback: an attack on fear propagation and low-accountability vibe coding, a defence of professionalism, and a practical framework that helped me recover — and might help you too.

By “the last mile of quality”, I mean the final few percent that decide whether something survives in production — where someone is accountable for the consequences.


# The harmful narrative

By “vibe coding”, I mean shipping AI-generated code you don’t truly understand, without the engineering discipline that makes it safe in production.

Vibe coders claim they can build apps with no technical knowledge, then sell that promise to outsiders — creating the illusion that the world no longer needs software engineers.

Others go further and claim writers, graphic designers, and musicians are now redundant because AI can generate text, code, images, and music “without learning anything”.

This narrative is harmful because it reduces every craft to zero. It mocks the years it takes to learn, practise, and master a profession — and it conveniently ignores the one thing that matters most in the real world: production accountability.

Livelihoods are affected when employers make decisions based on hype rather than reality, and teams end up shipping low-quality work that creates chaos later — security incidents, API key leaks, and outages.

Most importantly, it forgets one obvious fact: professionals — songwriters, illustrators, designers, and software engineers — use AI too, and they tend to use it better precisely because they understand the craft.


# The framework that pulled me out

Over time, I figured out a simple anxiety-to-clarity framework that helps me handle doom claims and rebuild clarity. I hope it helps you too.

## Step 1: Separate noise from reality

Social feeds reward certainty, not accuracy. Doom claims spread because they’re emotionally sticky — not because they’re careful.

Treat them as marketing noise by default until they can be verified by the filters described in the next step.

Curate aggressively. Mute or unfollow accounts that sell certainty, post absolutes, or farm outrage. Keep people who show trade-offs, limitations, and production context.

## Step 2: Run three filters before you believe anything

When a claim shows up in your feed, ask:

- **Incentives:** What does the author gain if you believe this — attention, followers, courses, consulting, tool sales? If a message is high-certainty, low-evidence, and perfectly aligned with what the author is selling, treat it as marketing until proven otherwise.

- **Production:** Is this about shipping and operating real systems, or just a demo that “runs on my machine”? (demo/benchmark ≠ production)

- **Last mile:** Who handles the final few percent — edge cases, security, reliability, maintainability, compliance — and who is accountable when it breaks?

## Step 3: Respond based on the analysis

If a narrative avoids evidence and trade-offs, ignores production realities, and hand-waves the last mile, you should ignore it.

In the next section, I’ll explain why these narratives look convincing in the first place: Dunning–Kruger, plus the demo illusion.

# The hype from the demo illusion

It’s easy to buy into the vibe-coding vision because the visible part of software is the user interface, not the years of production discipline behind it. If software development looks like “just typing”, then AI looks like replacement.

So when people see AI generate some React code, run it on localhost, and produce a working screen, they assume the story is finished — and that they’re one step away from a “groundbreaking app” (and becoming a millionaire overnight). That confidence fits a classic Dunning–Kruger pattern: when you don’t know what the hard parts are, you can’t see what’s missing.

![Dunning-Kruger effect](https://upload.wikimedia.org/wikipedia/commons/4/46/Dunning%E2%80%93Kruger_Effect_01.svg)

What they’re seeing is a prototype. The missing part is production: security, reliability, scalability, compliance — and the cost of being wrong.

Coding isn’t just typing. In fact, typing is a negligible part of the job. The value of inputting text has been diminishing for decades since the dawn of the digital world. Software engineering is, at its core, thinking and communication — turning ambiguous needs into reliable systems that survive reality.

If you apply the same lens, the doom narrative starts to look less like a forecast and more like a misunderstanding of where quality is decided: the last mile.

AI reduces the cost of prototyping; it doesn’t replace battle-tested professionals who ship production systems and take accountability.

### Case Study: proving the framework works in real-world doom claims

**The claim:** imagine a tweet quoting two “authoritative” sources and then concludes: **“Software engineering is done.”**:

- [Anthropic CEO said 90% of code will be written by AI](https://fortune.com/2025/03/13/ai-transforming-software-development-jobs-meta-ibm-anthropic/)
- [GPT-5.2 reached 80% on a verified software engineering benchmark](https://openai.com/index/introducing-gpt-5-2/)

Now apply the framework:

- **Separate noise from reality**  
    - Label it as noise and do not believe it.

- **Run the three filters**  
  - **Incentives:** engagement (doom spreads), identity signalling (“I’m ahead; you’re behind”), or vendor cheerleading (praising a model/tool)?

  - **Production:** “90% of code written by AI” is ambiguous. *Where is it written, and how is it measured?* Is it final code shipped without human refinement after review, testing, and security audit?
  
  - **Last mile:** even if a model reaches 80% on an SWE benchmark, that still means 20% fail in a benchmark environment. In production, that remaining percentage is exactly where the harm lives. Even if AI writes 90% of the text, professionals still own 100% of the consequences. Who is responsible for the incident? Can the consequence be fixed or avoid without software engineers?

- **Respond based on the analysis**  
  - Response based on the analysis
  - The tweet has incentives, avoid production realities, ignoring the last mile. 
  - We ignore it and mute/unfollow the account.

That last mile — accountability under real constraints — is what doesn’t get replaced by a benchmark score.

# Professionalism is accountability

Any commercial product will face problems such as:
- Security and privacy
- Scalability and performance
- Availability and reliability
- Compliance and regulation

People don’t pay a lawyer for the act of typing documents. They pay for judgement: the legal advice, the professional standard behind it, and the fact that someone is accountable for the consequences.

Software engineering works the same way. Our value often comes down to one word: **production**.

When a production incident happens, you can’t point at the tool and say, “It wasn’t me — AI wrote the code.” Someone still has to own the impact, diagnose the failure, communicate clearly, and fix it safely.

This is the part that doom narratives and vibe-coding hype tend to ignore: professionalism is not “typing quickly”. It’s the discipline of delivering systems people can trust — and taking responsibility when reality disagrees with your assumptions.

The best professionals in any craft — engineers, designers, writers, and musicians — share the same traits:
- They keep learning
- They stay disciplined
- They respect the craft (and other crafts)
- They use new tools without outsourcing responsibility

Software engineering is particularly unforgiving because technology changes fast. The work demands sustained focus, clear thinking, and continual sharpening of judgement. Better tools don’t remove that need — they raise the bar for what “good” looks like.

It’s easy to look smart by declaring professions dead. It’s harder to be accountable for shipping.


# Quality always persists

Tailors still exist centuries after the loom. Doctors still exist even as robotics automates parts of surgery. In any field where outcomes matter — where someone can be harmed, money can be lost, or trust can be broken — society still needs professionals who will put their name behind the work and be accountable when things go wrong.

This is why quality remains the differentiator.

When AI and machines automate the repetitive 90–95% — drafts, boilerplate, the “typing” — professionals gain time to focus on the final few percent that actually makes the difference: judgement, taste, and production-grade quality.

A fashion designer, for example, doesn’t compete with mass production by stitching faster. They compete by shaping the final details — the cut, the fit, the finish — that make something worth wearing.

AI can help you produce more output (quantity). Only professionals can reliably produce trustworthy outcomes (quality).

## What matters is what and why, not how

Take refactoring as an example: it doesn’t matter whether you rename a variable line by line, use an IDE command, or ask AI to do it. The value isn’t in the typing. The value is in what you changed, why you changed it, and whether the system became safer, clearer, and easier to maintain.

For illustrators, software engineers, writers, and musicians, AI mostly accelerates the noise and the non-essential parts of the work — freeing more time for the parts that still require humans: intent, judgement, creativity, and the last mile of quality.

And to be blunt: people who only want the cheapest mass-produced output were never the audience for high-craft work in the first place — with or without AI.

That final few percent is what I call the last mile of quality.

I will never say “graphic designers are done” just because I can generate a few meme images to send to friends.

I would rather pay a professional graphic designer for branding, using an AI-generated draft to roughly express what I need and improve communication.

# Will software engineers (or other professions) be “done”?

![AI adoption matrix](https://miro.medium.com/v2/resize:fit:1054/format:webp/1*uU7v0G8ADy8vQctHEHJohQ.png)

In the age of AI, there are four common combinations:
- Quadrant 1: Outsider without AI (hard to ship anything)
- Quadrant 2: Outsider with AI (can demo)
- Quadrant 3: Master without AI (can ship)
- Quadrant 4: Master with AI (ship faster)

There’s no doubt Quadrant 4 beats Quadrant 1.

The real question — and the core doom narrative — is this: will Quadrant 2 replace Quadrant 3?

## Speed is not the same as quality

AI can massively speed up task completion through automation. But in a production context, speed is not the bottleneck — quality and accountability are. At best, AI is natural-language automation, not a miracle wand.

The Dunning–Kruger demo illusion makes Quadrant 2 look unstoppable: “an outsider becomes 100× more productive”. But productivity only matters if the output is correct, safe, maintainable, and shippable.

Without AI, an outsider may struggle to complete the task at all. With AI, they can often produce something that appears to work. The gap closes dramatically for low-stakes, low-quality work — and that’s real.

But production-grade work is decided by the last mile.

## Why Quadrant 3 still matters in production

Masters were already shipping production-quality deliverables before GenAI. With AI, they ship faster — because they can:
- set constraints and recognise wrong outputs,
- review for security and reliability,
- integrate changes into real systems,
- and own the consequences when something breaks.

In other words: AI boosts people who understand the craft. It’s “slower without AI” versus “never without AI”.

## Benchmarks don’t end the profession

Even when models score highly on coding benchmarks, they are still probabilistic and can be confidently wrong. In production, a small error rate is not “just 1%” — it can be the difference between a secure system and an incident, or between correct behaviour and a costly failure.

That is exactly why the remaining few percent — judgement, taste, and accountability — continues to be the differentiator. Vibe coders and casual AI users struggle with that last mile because they don’t have the training to recognise and manage risk.

### A quick example: “Project managers will replace software engineers”

Sometimes people claim project managers will overtake software engineers because AI can do the coding. In practice, on a product small enough, a software engineer can still deliver a production-grade outcome without a dedicated PM. The reverse isn’t true: coordination cannot substitute for engineering judgement, especially when quality and accountability are on the line.

# Pivoting with AI: a faster feedback loop

There’s a transition in learning from unknown to mastery:
![improved feedback loop](https://miro.medium.com/v2/resize:fit:1360/format:webp/1*UHmkJC13gv5oNxVtDt9Sww.png)

- When I’m unfamiliar with a topic, AI helps me understand it faster and in a more organised way.
- When I already understand a topic, AI helps me do more with less typing — automation instead of repetition.

The time saved goes back into learning and improving judgement. That creates a compounding loop: faster feedback, better decisions, higher-quality output.

AI works best when you already know what you want and can specify constraints — it becomes an automatic typing machine while you do the thinking.

In my legacy codebase refactoring case, the value wasn’t in having AI “write code”. The value was that I could ask AI to apply specific refactoring and migration patterns, then verify the result, instead of opening hundreds of files and reading line by line. (If you’re curious, here’s the write-up: [Migrate from GitHub Copilot to OpenAI Codex: Refactor a legacy codebase](https://ferrywl.to/blogs/2025/12/2025-12-15-using-openai-codex-to-refactor-a-legacy-codebase/).)

Some people use AI to generate huge amounts of unmaintainable code that they don’t truly understand.
I use it to reduce tech debt: less typing, more thinking about quality — by combining clear intent, constraints, and disciplined verification.

AI enables me to automate highly repetitive tasks in the background while I learn new tech, write, or hand-code other projects at the same time — like the asynchronous dispatch pattern in programming terms.

To align with the last mile of quality: AI drafts; I refine, test, review, and run production checks.

# Conclusion

There’s nothing wrong with increasing productivity or generating code with AI tools. The harm comes from the “X profession is dead” doom narrative — whether it’s driven by the Dunning–Kruger demo illusion, engagement incentives, or both.

To recap the framework for living in the AI era:

- Avoid toxic narratives. If a claim makes you feel uncomfortable, test it with the filters and label it as marketing if it doesn’t pass.
- Focus on quality. The last mile — judgement, craft, and responsibility — is the differentiator that doesn’t disappear. Stay accountable.
- Keep doing what you’re doing. Stay focused on your craft while pivoting with AI to boost productivity.

Kudos to everyone who takes software engineering — and every craft — seriously.

This post is also available on [Medium](https://ferrywlto.medium.com/the-last-mile-of-quality-why-genai-wont-replace-professionals-7b118a5efddd?postPublishedType=initial)
