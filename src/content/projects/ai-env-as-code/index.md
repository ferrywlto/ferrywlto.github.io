---
title: 'AI Environment as Code'
description: 'Version your AI environment, automatically. A .NET CLI that keeps Codex instructions and selected configuration in Git.'
tags: ['.NET', 'CLI', 'Git', 'AI']
pubDate: '2026-09-06'
projectUrl: 'https://github.com/ferrywlto/ai-env-as-code#readme'
repoUrl: 'https://github.com/ferrywlto/ai-env-as-code'
heroImage: './aec.svg'
---

## Version your AI environment, automatically.

Personal AI instructions evolve as you work. **AI Environment as Code (AEC)** gives those changes a history you can review and restore, using an explicit Git data repository as the source of truth.

AEC manages Codex's `AGENTS.md` and the selected `personality` setting. Each operation has a clear direction: capture your environment with `backup`, restore committed instructions and configuration with `apply`, or inspect differences with `status`.

## Small commands. Clear boundaries.

- **Initialize:** `aec init` creates or attaches an AEC data repository and installs the bundled Codex skill.
- **Inspect:** `aec status` compares the managed environment with the repository without changing files.
- **Record:** `aec backup` captures the managed runtime files and creates a Git commit when needed.
- **Restore:** `aec apply` writes committed canonical instructions and the managed setting back to Codex, preserving unrelated configuration.

Repository commands require an explicit absolute `--repo` path. Git history holds the backups; pushing and pulling remain separate Git operations.

```sh
# Inspect your initialized environment
aec status --repo /absolute/path/to/aec-data

# Record approved runtime changes in Git
aec backup --repo /absolute/path/to/aec-data

# Restore the committed environment
aec apply --repo /absolute/path/to/aec-data
```

## Built for a controlled workflow

- **Explicit ownership:** manage personal instructions and a selected setting while keeping unrelated runtime configuration intact.
- **Validation before changes:** check paths and managed content before writing, and reject unsupported or ambiguous state.
- **Reviewable history:** use familiar Git commits to understand how your environment has changed.

## Get started

Built with **C# and .NET 10**, AEC's first supported installation target is **macOS on Apple silicon**. Building requires Git, the .NET 10 SDK, and Xcode Command Line Tools. The installed Native AOT executable runs without a separate .NET runtime.

Follow the [build and installation guide](https://github.com/ferrywlto/ai-env-as-code#build-test-and-run), then initialize your data repository:

```sh
aec init --repo /absolute/path/to/aec-data
```

AEC is open source under the [MIT License](https://github.com/ferrywlto/ai-env-as-code/blob/main/LICENSE).

## Roadmap

Planned support includes Codex on Windows and Linux, GitHub Copilot, Claude after it adopts `AGENTS.md`, and further providers. ChatGPT currently has a manual, repository-only instruction workflow.
