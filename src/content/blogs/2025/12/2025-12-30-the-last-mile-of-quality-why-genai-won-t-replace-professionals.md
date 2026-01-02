---
title: 'The Last Mile of Quality: Why GenAI Won’t Replace Professionals'
description: 'Why GenAI won’t replace professionals — and why the “X is dead” narrative is harmful.'
pubDate: '2025-12-30'
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

<hr/>

# Cantonese - 品質嘅最後一里路：點解 GenAI 最終唔會取代專業人士
> 點解 GenAI 唔會取代專業人士——同埋點解「X 已死」呢種敘事咁有害

# 被恐懼傳播影響嘅受害者

我由 ChatGPT 一推出就係付費用戶，好長嘅一段時間佢真係好有幫到手。

但去到 2024 年初，我嘅社交媒體動態開始變。每日都係同一種敘事嘅變奏：「軟件工程師玩完」；「AI 會取代程式員」。呢件事唔再只係一場辯論——佢入咗我個腦。我唔止係覺得煩，我係覺得被威脅。

有幾個月，我不停質疑自己廿幾年累積落嚟嘅手藝，懷疑自己係咪即時變得多餘——就算我一直主動學緊新嘅 AI 工具，仍然困喺一個又一個自我懷疑嘅迴圈入面。我仍然覺得自己隨時可以被取代。

呢種感覺亦唔止停留喺工作枱上——佢影響到我同伴侶嘅關係，嚴重到我哋需要一齊去睇治療師。

更令我難受嘅係，呢種恐懼唔止打中軟件工程師。佢同樣打中設計師、作家、音樂人——任何一個工作被簡化成「淨係揮下魔術棒」嘅人。

我用咗幾個月時間先整理到思緒，而呢篇文章就係我嘅反擊：一方面攻擊恐懼傳播同低問責嘅 vibe coding；一方面為專業精神辯護；同時亦分享一套幫我走出嚟嘅實用框架——希望都幫到你。

我所講嘅「品質的最後一里路（the last mile of quality）」，係指最後嗰幾個百分比——決定一樣嘢可唔可以喺真實產品環境(production)生存落去；同時亦意味住：出事嘅時候，總要有人為後果負責。


# 有害嘅論述

我所講嘅vibe coding 係指：將自己都唔理解嘅 AI 生成代碼直接出街上線，但欠缺件嘢喺生產環境變得安全嘅工程紀律(engineering discipline)。

vibe coders 會話自己唔需要任何技術知識都可以砌 app，然後將呢個承諾賣俾圈外人——從而製造出一種幻覺：呢個世界已經唔再需要軟件工程師。

有人甚至再推遠一步，話作家、平面設計師、音樂人而家都「玩L完」，因為 AI 可以「唔使學任何嘢」就生成文字、代碼、圖像同音樂。

呢種論述之所以有害，係因為佢將每一門手藝嘅價值都貶為零。嘲笑專業人士要用幾多年去學習、練習同精進一啲佢哋講兩句叫AI就做到嘅嘢——刻意忽略現實世界最重要嘅一樣嘢：問責（accountability）。

當僱主用潮流而唔係現實去做決策，好多人生計就會受影響；而團隊最後推出低質量嘅產品，就會留低大量蘇州屎——保安事故、API key 泄漏、服務停頓等等。

最重要係，佢忘記咗一個明顯嘅事實：專業人士——無論作曲人、插畫師、設計師、軟件工程師，其實都會用 AI，而且往往用得更好，正正因為佢哋真正理解嗰門手藝。


# 破惘框架

一路走來，最後摸索到一套令我由焦慮走向清晰（anxiety-to-clarity）嘅框架，幫我處理呢啲末日論 (doom claims)所帶嚟嘅迷惘。希望都對你有用。

## 一：分開「噪音」同「現實」

社交媒體獎勵嘅係「實牙實齒」，而唔係「準確」。末日論之所以傳得快，係因為佢哋好易觸動到人嘅情緒——唔係因為佢哋夠嚴謹。

所以先預設當佢哋係 marketing 噪音，除非佢哋過到下一步嘅驗證。

同時要夠狠咁整理資訊來源：mute / unfollow 任何賣「肯L定」、絕對、靠挑起情緒去搵流量嘅帳號；淨喺留返啲會講取捨、限制同營運語境嘅人。

## 二：信任何嘢之前，先過三關

當你見到一個末日論喺你動態出現，問自己：
	•	Incentives（誘因）：作者想你信佢，可以賺到咩？注意力、followers、課程、顧問費、賣嘢？如果訊息「肯肯定、冇乜證據」，又同作者賣緊嘅嘢完全一致，除非證明得到相反，一率當係 marketing。
	•	Production（真實落地）：佢講緊係真係「交到貨 兼 營運到」嘅現實系統，定只係一個「喺我部機行到」嘅 demo？（demo/benchmark ≠ production）
	•	Last mile（最後一里路）：最後嗰幾個百分比——edge cases、安全性、可靠性、可維護性、合規——邊個負責？出咗事邊個埋單？

## 三：按分析回應

如果一個論述刻意避開證據同取捨、忽略營運現實、又將最後一里路輕輕帶過，你就應該忽略佢。

下一節我會解釋，點解呢啲論述一開始會咁爆：Dunning–Kruger 加 示範幻覺 (demo illusion)。


# 示範幻覺（Demo illusion）帶嚟嘅狂熱炒作

好多人好容易buy vibe-coding 套願景，因為軟件最顯眼嘅部分係 UI，而唔係背後多年嘅工程紀律。假如軟件開發睇落只係打字，咁 AI 當然睇落會取代軟件工程師。

所以當啲人見到 AI 生成啲 React 代碼、喺自己個 browser 行到、出到畫面，就會以為故事已完—以為自己距離一個「革命性 app」（同一夜致富）只係一步之遙。呢種自信好符合典型嘅 Dunning–Kruger 效應：當你唔知道真正困難嘅部分係乜，你就睇唔到差啲乜嘢。

![Dunning-Kruger effect](https://upload.wikimedia.org/wikipedia/commons/4/46/Dunning%E2%80%93Kruger_Effect_01.svg)

佢哋見到嘅其實只係 prototype。缺失嘅部分係 production：安全、可靠性、可擴展性、合規—同埋出事嘅代價。

Coding 唔等於打字。事實上，打字只係工作入面一個可忽略嘅部分。由數碼世界誕生開始，輸入文字嘅價值就一直下降架啦。軟件工程師本質上係思考同溝通—將模糊需求變成可以喺現實入面存活嘅可靠系統。

用同一個視角去睇，「末日論」就會開始唔再係講到實牙實齒嘅預測，而係對「品質喺邊度決定」嘅誤解：即係我所講嘅「最後一里路」。

AI 可以降低咗做 prototype 嘅成本；佢唔會取代到嗰啲真係已經交付過真實環境營運嘅系統、並且承擔問責嘅專業人士。  ￼


# 專業精神＝問責

任何商業產品都一定會面對例如以下嘅問題：
	•	安全同私隱
	•	可擴展性同性能
	•	可用性同可靠性
	•	合規同監管

人俾錢律師唔係為咗打咗一疊紙字。人哋係為咗判斷力付費：法律意見、專業標準、同埋有人為後果負責，壓自己個名上去。

軟件工程都一樣。我哋嘅價值好多時歸結到一個字：production。

當 production incident 發生，你唔可以指住個工具話：「唔關我事，係 AI 寫嘅。」總要有人承擔影響、診斷問題、清晰溝通、同安全咁修復。

呢個就係末日論同 vibe-coding 炒作最鍾意忽略嘅部分：專業唔係「打字打得幾快」。專業係交付人哋可以信任嘅系統——當現實同你假設唔一致時，仍然肯負責。

任何手藝入面最頂尖嘅專業人士 — 工程師、設計師、作家、音樂人都有相同特質：
	•	持續學習
	•	自律
	•	尊重自身手藝（同其他手藝）
	•	會用新工具，但唔會將責任外判出去

軟件工程呢行特別殘酷，因為技術變得太快。工作需要長時間專注、清晰思考、同不斷磨練判斷力。工具變好唔會消除呢個需求，只會提高「做得好」嘅門檻。

講「某個行業已死」好易令人哋覺得你好醒；真正困難嘅係：出左事會負責任。


# 品量一定會長存

工業織布機出現咗幾百年，裁縫仍然存在。醫療機械人自動化咗部分手術，醫生仍然存在。喺任何「結果會影響人」嘅領域 - 每逢會有人受傷、會有人損失金錢、會有人失去信任 — 社會仍然需要願意將自己個名放落去、出事時肯負責嘅專業人士。

所以品質仍然係分水嶺。

當 AI 同機器自動化咗重複嗰 90–95% 唔重要嘅任務 — 草稿、boilerplate、打字 — 專業人士就有更多時間，專注喺真正決定成敗嘅最後幾個百分比：判斷力、品味、同 production-grade 嘅質量。

例如一個時裝設計師，唔係靠同大量生產嘅大眾品牌競爭鬥快聯衫；佢係靠最後啲細節 — 剪裁、合身度、收口 — 去令件衫值得人着。

AI 可以幫你產出更多（quantity）。但只有專業人士先可以穩定咁交付可信嘅結果（quality）。

重要嘅唔係「點做」而係「做咩同點解」。

以 refactoring 為例：你係逐行改變量名、用 IDE command、定叫 AI 幫你，其實唔重要。價值唔喺打字。價值喺你改咗乜、點解改、同系統係咪因此更安全、更清晰、更易維護。

對插畫師、軟件工程師、作家、音樂人嚟講，AI 多數只係加速去處理噪音同非核心部分 — 等你有更多時間放返喺仍然需要人嘅部分：意圖、判斷、創意、同品質嘅最後一里路。

老實講：只想要最平、大量生產製成品嘅人，本來就唔係高工藝作品嘅目標受眾 — 無論有冇 AI。

最後嗰幾個百分比，就係我所謂嘅「品質嘅最後一里路」。

我永遠唔會因為自己可以生成幾張 meme 圖發俾朋友，就話「平面設計師玩L完」。

我反而會用 AI 生成嘅草稿去粗略表達我需要乜，令溝通更有效，俾錢請專業設計師做 branding。


# 軟件工程師（或其他專業）會唔會「玩完」？

![AI adoption matrix](https://miro.medium.com/v2/resize:fit:1054/format:webp/1*uU7v0G8ADy8vQctHEHJohQ.png)

喺 AI 年代，有四種組合（AI adoption vs domain mastery）：
	•	Quadrant 1： 唔用 AI 嘅圈外人（好難 ship 到任何嘢）
	•	Quadrant 2： 用 AI 嘅圈外人（demo 到）
	•	Quadrant 3： 唔用 AI 嘅專業（ship 到）
	•	Quadrant 4： 用 AI 嘅專業（ship 得更快）

用 AI 嘅專業人士一定會贏唔用 AI 嘅圈外人，呢個冇懸念。

真正嘅問題 — 亦係末日論嘅論述核心：用 AI 嘅圈外人會唔會取代到唔用 AI 嘅專業人士？

## 速度唔等於品質

透過 AI 自動化，確實可以大幅加快完成任務。但喺真實營運語境，速度唔係瓶頸 — 品質同問責先係。AI 最多只係自然語言自動化工具(Natural Language Automation)，唔係魔法棒。

Dunning–Kruger 效應下嘅示範幻覺會令用 AI 嘅圈外人睇落效率提升咗 100 倍。但效率只有喺輸出係正確、安全、可維護同可交付系統嘅時候先有意義。

冇 AI 嘅話，圈外人可能連任務都做唔到；有 AI 佢哋可以整到「表面上行得」嘅嘢。喺低風險、低品質要求下確實可以大幅縮窄同唔用 AI 嘅專業人士嘅差距 — 呢樣係真嘅。

但真實營運環境級嘅工作品質，係要由最後一里路決定。

## 點解唔用 AI 嘅專業人士喺真實營運環境仍然重要

專業人士喺 GenAI 出現之前就已經可以交付帶有真實營運環境級工作品質嘅成果。有 AI 之後，佢哋只係會交貨得更快 — 因為佢哋可以：
	•	設定約束，同時識得分辨錯誤輸出
	•	做安全同可靠性審查
	•	將改動整合入真實系統
	•	出事時承擔後果

換句話 AI 會加乘「理解手藝」嘅人。呢個係「冇 AI 會做慢啲」同「冇 AI 根本做唔到」嘅分別。

## benchmark 唔會終結一個行業

就算模型喺 coding benchmark 拎到好高分，佢哋仍然係基於機率型，而且可以非常有自信咁錯。但喺真實營運環境，一個細小嘅錯誤率唔係「只係一個百分比」— 佢可以係安全系統同發生事故之間嘅差距；亦可以係正確行為同昂貴故障之間嘅差距。

所以剩低嗰幾個百分比 — 判斷、品味、問責 — 仍然係分水嶺。vibe coders 同一般 AI 用戶之所以喺最後一里路掙扎，就係因為佢哋冇受過訓練去辨識同管理風險。

### 舉個例：「PM 會取代軟件工程師」

有人會話 project managers 會取代軟件工程師，因為 AI 可以寫 code。但現實係：產品細到某個程度，軟件工程師仍然可以唔靠專職 PM 都交付到真實營運環境級工作品質嘅成果。反過來唔成立：協調唔可以取代工程判斷，尤其當品質同問責係底線。


# 用 AI 杠桿：更快嘅回饋循環

![improved feedback loop](https://miro.medium.com/v2/resize:fit:1360/format:webp/1*UHmkJC13gv5oNxVtDt9Sww.png)

學習一門知識由「唔識」去到「精通」嘅轉換中：
	•	當我對一個主題唔熟，AI 可以幫我更快、更加有組織咁理解。
	•	當我已經理解一個主題，AI 可以幫我用打更少字做更多嘅嘢 — 用自動化代替重複。

慳落嚟嘅時間會回流返去學習同提升判斷力，形成一個複利循環：更快嘅回饋、更好嘅決策、更高質嘅輸出。

AI 最有用嘅時候係當你已經知道自己要乜，亦可以講得出約束條件 — 將佢變做一部自動打字機，而你負責思考。

喺我嘅舊 codebase 重構案例入面，價值唔係叫 AI 寫 code。價值在於我可以叫 AI 按特定 refactoring 同 migration pattern 去做，再由我去驗證結果，而唔使打開幾百個檔案逐行睇。 ￼

有啲人用 AI 生成大量自己其實都唔明、又唔可維護嘅代碼。我會用佢去減少 tech debt：少啲打字，做多啲對品質嘅思考 — 透過提供清晰嘅意圖、約束條件、同有紀律嘅驗證。

AI 亦令我可以喺背景自動化大量重複工作，同一時間去學新技術、寫 blog、或者手寫其他專案 — 喺編程嘅語景嚟講就有少少似非同步指派工作模式。

AI 負責起草；我負責改、測試、審批，同做真實營運環境嘅檢測，咁就能夠符合「品質嘅最後一里路」。


# 結論及案例

## 案例：用真實世界嘅末日論去驗證框架

假設有條推引用兩個「權威」來源，然後結論係：「軟件工程師玩完。」：
- [有訪問提到「90% 嘅 code 會由 AI 寫](https://fortune.com/2025/03/13/ai-transforming-software-development-jobs-meta-ibm-anthropic/)
- [OpenAI 官方文章顯示 GPT-5.2 喺 SWE-bench Verified 達到 80% ](https://openai.com/index/introducing-gpt-5-2/)

而家用框架去處理：
	•	分開噪音同現實
    •	先標籤佢係噪音，唔好第一時間信。
	•	誘因
    •	觸及率（末日內容好爆）
    •	身份訊號（「我領先，你落後」）
    •	站台／吹捧某個模型／工具
	•	係咪真實營運環境語景
    •	「90% 嘅 code 將由 AI 寫」其實好含糊：
      •	喺邊度寫？點樣量度？
    •	係咪真係經過審批／測試／保安審計？然後原封不動直接上營運環境？
    •	即使跑分有 80%，都意味住 20% 會失敗。喺營運環境，剩低嗰個百分比往往就係出事嘅地方。
	•	最後一里路
    •	就算 AI 寫咗 90% 嘅字，專業人士仍然要承擔 100% 嘅後果。
    •	出現營運事故，邊個負責？
    •	冇軟件工程師，事故可唔可以修復或避免？
	•	按分析回應
    •	呢條推有誘因、避開營運現實、忽略最後一里路。
    •	所以忽略佢；如果啲文有個模式，mute/unfollow。

品質嘅最後一里路 — 喺真實約束之下嘅問責 — 就係 AI 基準分數取代唔到嘅部分。

用 AI 工具去提升效率、生成代碼，本身冇問題。真正有害嘅係「X 行業已死」呢種末日論 — 無論佢係由 Dunning–Kruger 嘅幻覺推動、由觸及率誘因推動，定兩樣都有。

總結一下喺 AI 時代生存嘅框架：
	•	避開有毒嘅論述。如果一個講法會令你唔舒服，先用篩選條件去測試；過唔到，就標籤佢係 marketing。
	•	專注品質嘅最後一里路 — 判斷、手藝、責任 — 係唔會消失嘅分水嶺。保持對自己嘅作品問責。
	•	繼續練好你嘅手藝，同時用 AI 去杠桿以提升效率。

最後向每一個認真看待軟件工程同任何手藝嘅人致敬。

<hr/>

# Traditional Chinese - 品質的最後一里路 - 為何人工智能未能取代專業人士

# 有害的論述

我所說的 vibe coding，是指：把自己其實也不理解的 AI 生成程式碼直接拿去上線，卻缺乏讓它在生產環境中變得安全的工程紀律（engineering discipline）。

vibe coders 會說自己不需要任何技術知識也能做出 app，然後把這個承諾賣給圈外人——從而製造一種幻覺：這個世界已經不再需要軟體工程師。

有人甚至更進一步，說作家、平面設計師、音樂人現在都「完了」，因為 AI 可以「不用學任何東西」就生成文字、程式碼、圖像和音樂。

這種論述之所以有害，是因為它把每一門手藝的價值都貶為零。它嘲笑專業人士花了好幾年去學習、練習與精進的能力，彷彿那些只要講兩句、叫 AI 做就能做到——並刻意忽略現實世界最重要的一件事：問責（accountability）。

當雇主用潮流而不是現實去做決策，許多人的生計就會受影響；而團隊最後推出低品質的產品，也會留下大量後患——資安事故、API key 外洩、服務中斷等等。

最重要的是，它忘記了一個明顯的事實：專業人士——無論是作曲人、插畫師、設計師或軟體工程師——其實也都會用 AI，而且往往用得更好，正因為他們真正理解那門手藝。


# 破惘框架

一路走來，我最後摸索到一套讓我由焦慮走向清晰的框架，幫我處理這些末日論（doom claims）帶來的迷惘。希望也對你有用。

## 一：分開「噪音」與「現實」

社群媒體獎勵的是「很篤定」，而不是「準確」。末日論之所以傳得快，是因為它們很容易觸動人的情緒——不是因為它們夠嚴謹。

所以我會先預設它們是營銷噪音，除非它們能通過下一步的驗證。

同時也要狠一點整理資訊來源：靜音／取消追蹤 任何賣「一定」、講絕對、靠挑起情緒來換流量的帳號；只留下那些會談取捨、限制與營運語境的人。

## 二：相信任何東西之前，先過三關

當你在動態看到一個末日論，先問自己：

- **Incentives（誘因）：** 作者希望你相信他，能得到什麼？關注、粉絲、課程、顧問費、還是賣東西？如果訊息「很肯定、證據很少」，又和作者正在賣的東西完全一致，那在證明相反之前，一律先當作營銷。
- **Production（真實落地）：** 他講的是能不能「交付並營運」的真實系統，還是只是「在我機器上跑得動」的演示？（演示/跑分 不等於 真實營運）
- **Last mile（最後一里路）：** 最後那幾個百分比——極端情況、安全性、可靠性、可維護性、合規——誰負責？出事了誰埋單？

## 三：按分析回應

如果一個論述刻意避開證據與取捨、忽略營運現實，又把最後一里路輕輕帶過，你就應該忽略它。

下一節我會解釋，為什麼這些論述一開始會看起來這麼真：Dunning–Kruger 加上示範幻覺（demo illusion）。


# 示範幻覺（Demo illusion）帶來的狂熱炒作

很多人很容易買單 vibe-coding 這套願景，因為軟體最顯眼的部分是 UI，而不是背後多年累積的工程紀律。假如軟體開發看起來只是打字，那 AI 當然看起來就能取代軟體工程師。

所以當人們看到 AI 生成一些 React 程式碼、在自己的瀏覽器跑得動、畫面也能出來，就會以為故事已經結束——以為自己距離一個「革命性 app」（甚至一夜致富）只差一步。這種自信很符合典型的 Dunning–Kruger 效應：當你不知道真正困難的部分是什麼，你就看不到少了什麼。

![Dunning-Kruger effect](https://upload.wikimedia.org/wikipedia/commons/4/46/Dunning%E2%80%93Kruger_Effect_01.svg)

他們看到的其實只是 prototype。缺少的部分是 production：安全、可靠性、可擴展性、合規——以及出事時的代價。

Coding 不等於打字。事實上，打字只是工作裡一個可忽略的部分。從數位世界誕生開始，輸入文字的價值就一直在下降。軟體工程師的本質是思考與溝通——把模糊需求變成能在現實裡存活的可靠系統。

用同一個視角去看，「末日論」就不再像是說得斬釘截鐵的預測，而更像是對「品質在哪裡被決定」的誤解：也就是我所說的「最後一里路」。

AI 可以降低做 prototype 的成本；它無法取代那些真的交付過能在真實環境中營運的系統、並且願意承擔問責的專業人士。


# 專業精神＝問責

任何商業產品都一定會面對例如以下的問題：
- 安全與隱私
- 可擴展性與效能
- 可用性與可靠性
- 合規與監管

人們付費請律師，並不是為了「打出一疊文件」。他們付費買的是判斷力：法律意見、專業標準，以及有人願意為後果負責，把自己的名字押上去。

軟體工程也一樣。我們的價值很多時候歸結成一個字：營運環境。

當營運事故發生，你不可能指著工具說：「不關我事，是 AI 寫的。」總要有人承擔影響、診斷問題、清楚溝通，並且安全地修復。

這正是末日論與 vibe-coding 炒作最愛忽略的部分：專業不是「打字打得多快」。專業是交付別人可以信任的系統——當現實與你的假設不一致時，依然願意負責。

任何手藝裡最頂尖的專業人士——工程師、設計師、作家、音樂人——都有相同特質：
- 持續學習
- 自律
- 尊重自己的手藝（也尊重其他手藝）
- 會用新工具，但不會把責任外包出去

軟體工程這一行特別殘酷，因為技術變得太快。工作需要長時間專注、清晰思考，以及不斷磨練判斷力。工具變好不會消除這個需求，只會提高「做得好」的門檻。

講「某個行業已死」很容易讓人覺得你很厲害；真正困難的是：出事了，你願不願意負責。


# 品質一定會長存

工業織布機出現了幾百年，裁縫仍然存在。醫療機器人自動化了部分手術，醫生仍然存在。在任何「結果會影響人」的領域——有人可能受傷、有人可能損失金錢、有人可能失去信任——社會仍然需要願意把自己的名字放上去、出事時願意負責的專業人士。

所以品質仍然是分水嶺。

當 AI 與機器把重複的 90–95%（那些不重要的任務）自動化——草稿、boilerplate、打字——專業人士就有更多時間，專注在真正決定成敗的最後幾個百分比：判斷力、品味，以及 production-grade 的品質。

例如一位時裝設計師，並不是靠和大量生產的大眾品牌比誰縫得快；他靠的是最後的細節——剪裁、合身度、收邊——讓一件衣服值得被穿。

AI 可以幫你產出更多（quantity），但只有專業人士才能穩定交付可信的成果（quality）。

重要的不是「怎麼做」，而是「做什麼、為什麼做」。

以 refactoring 為例：你是逐行改變變數名稱、用 IDE 指令，還是叫 AI 幫你，其實不重要。價值不在打字；價值在你改了什麼、為什麼改，以及系統是否因此更安全、更清晰、更容易維護。

對插畫師、軟體工程師、作家、音樂人來說，AI 多半只是加速處理噪音與非核心部分——讓你有更多時間投入仍然需要人的部分：意圖、判斷、創意，以及品質的最後一里路。

老實說：只想要最便宜、量產成品的人，本來就不是高工藝作品的目標受眾——有沒有 AI 都一樣。

最後那幾個百分比，就是我所說的「品質的最後一里路」。

我永遠不會因為自己可以生成幾張 meme 圖傳給朋友，就說「平面設計師完了」。

我反而會用 AI 生成的草稿來粗略表達我需要什麼、讓溝通更有效，再付費請專業設計師做 branding。


# 軟體工程師（或其他專業）會否「完了」

![AI adoption matrix](https://miro.medium.com/v2/resize:fit:1054/format:webp/1*uU7v0G8ADy8vQctHEHJohQ.png)

在 AI 時代，有四種組合（AI adoption vs domain mastery）：
- Quadrant 1：不使用 AI 的圈外人（很難 ship 出任何東西）
- Quadrant 2：使用 AI 的圈外人（能 demo）
- Quadrant 3：不使用 AI 的專業人士（能 ship）
- Quadrant 4：使用 AI 的專業人士（ship 得更快）

使用 AI 的專業人士一定會贏過不使用 AI 的圈外人，這點毫無懸念。

真正的問題——也是末日論的核心：使用 AI 的圈外人，會不會取代不使用 AI 的專業人士？

## 速度不等於品質

透過 AI 自動化，確實可以大幅加快完成任務。但在真實營運語境下，速度不是瓶頸——品質與問責才是。AI 最多只是自然語言自動化工具（Natural Language Automation），不是魔法棒。

在 Dunning–Kruger 效應下的示範幻覺，會讓使用 AI 的圈外人看起來效率提升了 100 倍。但效率只有在輸出是正確、安全、可維護、且能交付的系統時才有意義。

沒有 AI 的話，圈外人可能連任務都做不到；有了 AI，他們往往能做出「表面上跑得動」的東西。在低風險、低品質要求下，確實可以大幅縮短和（不使用 AI 的）專業人士之間的差距——這點是真的。

但真實營運環境等級的工作品質，是由最後一里路決定的。

## 為什麼不使用 AI 的專業人士在真實營運環境仍然重要

專業人士在 GenAI 出現之前，就已經能交付具備真實營運環境等級品質的成果。有了 AI 之後，他們只是交付得更快——因為他們可以：
- 設定約束，同時辨識錯誤輸出
- 做安全與可靠性審查
- 把改動整合進真實系統
- 出事時承擔後果

換句話說，AI 會加乘「真正理解手藝」的人。這就是「沒有 AI 會慢一點」和「沒有 AI 根本做不到」之間的差別。

## benchmark 不會終結一個行業

就算模型在 coding benchmark 拿到很高分，它們仍然是機率型的，而且可以非常有自信地犯錯。但在真實營運環境裡，一個小小的錯誤率不是「只是 1%」——它可能是安全系統和事故之間的差距；也可能是正確行為和昂貴故障之間的差距。

所以剩下那幾個百分比——判斷、品味、問責——仍然是分水嶺。vibe coders 和一般 AI 使用者之所以在最後一里路掙扎，就是因為他們沒有受過訓練去辨識與管理風險。

### 舉個例：「PM 會取代軟體工程師」

有人會說 project managers 會取代軟體工程師，因為 AI 可以寫 code。但現實是：產品小到某個程度，軟體工程師仍然可以不靠專職 PM，也交付出真實營運環境等級品質的成果。反過來不成立：協調無法取代工程判斷，尤其當品質與問責是底線。


# 善用 AI 槓桿：更快的回饋循環

![improved feedback loop](https://miro.medium.com/v2/resize:fit:1360/format:webp/1*UHmkJC13gv5oNxVtDt9Sww.png)

學習一門知識從「不懂」到「精通」的轉換中：

- 當我對一個主題不熟，AI 可以幫我更快、也更有組織地理解。
- 當我已經理解一個主題，AI 可以幫我用更少打字做更多事——用自動化取代重複。

省下來的時間會回流到學習與提升判斷力，形成一個複利循環：更快的回饋、更好的決策、更高品質的輸出。

AI 最有用的時候，是當你已經知道自己要什麼，也能說得出約束條件——把它變成一部自動打字機，而你負責思考。

在我的舊 codebase 重構案例裡，價值不是叫 AI「寫 code」。價值在於我可以叫 AI 按特定的 refactoring 與 migration pattern 去做，再由我去驗證結果，而不必打開幾百個檔案逐行看。

有些人用 AI 生成大量自己其實也不懂、又不可維護的程式碼。我會用它來減少 tech debt：少一點打字，多一點對品質的思考——透過提供清晰的意圖、約束條件，以及有紀律的驗證。

AI 也讓我可以在背景自動化大量重複工作，同一時間去學新技術、寫 blog，或手寫其他專案——用程式設計的語境來說，這有點像非同步派發工作模式。

AI 負責起草；我負責修改、測試、審查，並做真實營運環境的檢查，這樣就能符合「品質的最後一里路」。


# 結論與案例

## 案例：用真實世界的末日論去驗證框架

假設有一則推文引用兩個「權威」來源，然後下結論：「軟體工程師完了」：

- [有訪問提到「90% 的 code 會由 AI 寫」](https://fortune.com/2025/03/13/ai-transforming-software-development-jobs-meta-ibm-anthropic/)
- [OpenAI 官方文章顯示 GPT-5.2 在 SWE-bench Verified 達到 80%](https://openai.com/index/introducing-gpt-5-2/)

現在用框架來處理：

- **分開噪音與現實**
  - 先把它標記為噪音，不要第一時間相信。

- **誘因**
  - 觸及率（末日內容很容易爆）
  - 身分訊號（「我領先，你落後」）
  - 站台／吹捧某個模型／工具

- **是不是真實營運環境語境**
  - 「90% 的 code 將由 AI 寫」其實很含糊：
    - 在哪裡寫？怎麼量度？
  - 是否真的經過審查／測試／資安稽核，然後原封不動直接上營運環境？
  - 就算跑分有 80%，也意味著 20% 會失敗。在營運環境，剩下那個百分比往往就是出事的地方。

- **最後一里路**
  - 就算 AI 寫了 90% 的文字，專業人士仍然要承擔 100% 的後果。
  - 出現營運事故，誰負責？
  - 沒有軟體工程師，事故能不能修復或避免？

- **按分析回應**
  - 這則推文有誘因、避開營運現實、忽略最後一里路。
  - 所以忽略它；如果內容呈現固定模式，就 mute／unfollow。

品質的最後一里路——在真實約束之下的問責——就是 AI 基準分數取代不了的部分。

用 AI 工具提升效率、生成程式碼，本身沒有問題。真正有害的是「X 行業已死」這種末日論——無論它是由 Dunning–Kruger 的幻覺推動、由觸及率誘因推動，或兩者皆是。

總結一下在 AI 時代生存的框架：

- 避開有毒論述。如果一個說法讓你不舒服，先用篩選條件去測試；過不了，就標記它是 marketing。
- 專注品質的最後一里路——判斷、手藝、責任——是不會消失的分水嶺。對自己的作品保持問責。
- 繼續練好你的手藝，同時用 AI 來槓桿以提升效率。

最後向每一個認真看待軟體工程、以及任何手藝的人致敬。
