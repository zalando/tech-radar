---
quadrant: 3
ring: 3
label: "PDM"
active: true
moved: 0
---
# PDM

PDM (https://pdm-project.org/en/latest/) is a modern Python package and project manager. It supports PEP 582 out-of-the-box and is designed to be a streamlined and user-friendly alternative to tools like pipenv and poetry.

## Pros
*   PEP 582 support for package installation, eliminating the need for a `venv` in many cases.
*   Simple and intuitive CLI.
*   Dependency management using `pyproject.toml`.
*   Plugin system to extend functionality.

## Cons
*   Smaller community compared to pipenv or poetry.
*   Not as fast as UV
*   Fewer plugins available compared to more established tools.
*   Relatively less mature compared to pipenv or poetry.
*   Might require more configuration for advanced use cases.

**Note:** This technology is recommended to be put on hold in favor of UV (https://github.com/astral-sh/uv), which offers similar functionality with significantly better performance. Projects already using Poetry successfully can continue, but new projects should consider UV as the preferred alternative.
