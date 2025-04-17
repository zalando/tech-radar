---
quadrant: 3
ring: 3
label: "poetry"
active: true
moved: 2
---
# poetry

Poetry (https://python-poetry.org/) is a Python dependency management and packaging tool designed to make dependency management more straightforward and deterministic. It handles dependency resolution, virtual environment management, and packaging in a single tool.

## Pros
* All-in-one solution for dependency management, virtual environments, and packaging
* Declarative dependency specification in pyproject.toml
* Lock file system ensures reproducible environments
* Intuitive CLI with commands for common workflows
* Good documentation and active community

## Cons
* Sometimes slower than alternatives, particularly for large dependency trees
* Can be opinionated in its approach, which might not fit all workflows
* Occasional compatibility issues with some packages
* Not as lightweight as more focused tools

**Note:** This technology is recommended to be put on hold in favor of UV (https://github.com/astral-sh/uv), which offers similar functionality with significantly better performance. Projects already using Poetry successfully can continue, but new projects should consider UV as the preferred alternative.
