---
title: 'Update README Action in C#'
description: 'A Docker-based GitHub Action that refreshes marked README sections with recent Medium stories and Stack Overflow activity.'
tags: ['C#', '.NET', 'GitHub Actions', 'Docker']
pubDate: '2023-09-07'
projectUrl: 'https://github.com/ferrywlto/update-readme-action-csharp#usage'
repoUrl: 'https://github.com/ferrywlto/update-readme-action-csharp'
heroImage: './readme-activity-flow.svg'
---

## Keep a profile README current with code you understand

This project is a custom Docker container GitHub Action written in C#. It reads recent activity from Medium and Stack Overflow, then replaces only the marked sections in a repository file such as `README.md`.

The goal was practical and educational: automate a repetitive profile-maintenance task while learning how a container action works from its inputs through to a committed file change.

## A small, explicit workflow

Add markers to the file you want to maintain:

```html
<!-- MEDIUM:START -->
<!-- MEDIUM:END -->

<!-- STACKOVERFLOW:START -->
<!-- STACKOVERFLOW:END -->
```

Then call the action from a workflow:

```yaml
- name: Refresh recent activity
  uses: ferrywlto/update-readme-action-csharp@v1
  with:
    medium-user-id: ${{ secrets.MEDIUM_USER_ID }}
    stackoverflow-user-id: ${{ secrets.STACKOVERFLOW_USER_ID }}
```

The action accepts a custom target file through `file-to-update`, which defaults to `README.md`.

## How it is built

- **C# and .NET:** load external activity and apply the replacement steps.
- **Docker action:** publish the .NET application inside the image that GitHub Actions runs.
- **Content loaders:** separate Medium and Stack Overflow retrieval from replacement logic.
- **Marker-based updates:** preserve everything outside the named start and end markers.

Adding another source follows the same path: create an `IContentLoader`, register it in the factory, and add a matching marker section to the target file.

## Useful for

- Profile READMEs that show current writing and community activity.
- Repository documentation that includes a curated, generated activity section.
- Learning how a container-based GitHub Action receives inputs and edits a checked-out file.

The project is public and provides its implementation and usage instructions in the [source repository](https://github.com/ferrywlto/update-readme-action-csharp).
