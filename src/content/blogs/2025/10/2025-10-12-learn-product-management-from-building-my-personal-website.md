---
title: 'Learn Product Management from building my personal website'
description: ''
pubDate: 2025-10-12
tags: []
---

# GitHub Projects
- GitHub Projects is a powerful tool for managing tasks and workflows directly within GitHub. It allows you to create boards, track issues, and collaborate with your team seamlessly.

## Branching Strategy
- pure Trunk-based development -> not using often.
- I use short-lived branches PR based github flow.
  - No nested branches (needed when multiple people working on the same feature)
    - Either committing to the same branch
    - or create sub-branches and merge to the main feature branch.
    - both of them makes the branch long-lived.
    - Break things down to smallest tasks possible to avoid multiple people working on the same task (also use feature flag to disable half-baked features).
  - Merge to main only via PR
  - Merge Options:
    - Linear, no merge commits. (When more than one person worked on the same branch)
    - Squash and merge (When PR is from a single person, save the history)
    - No rebase merge
    - Rebase from main frequently.
  - Enable auto merge:
    - All CI/CD checks passed (build, unit tests)
    - Approved by required reviewers
    - All conversations resolved
    - Auto reviewed by CodeQL and Copilot
  - On main push:
    - Deploy to dev and run integration tests. (better just containers that can be torn down easily)
    - If all good, deploy to staging.
    - After manual QA, swap staging-next -> production -> staging-prev. (ring deployment)
      -  
  - On production incident:
    - staging-prev -> production -> staging-next.
    - diagnostic on staging-next.
    - hotfix branch push to main.
      - Same dev -> staging-next -> production -> staging-prev flow.
  - Delete branches after merge.
