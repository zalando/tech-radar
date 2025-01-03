---
title:      "Continuous Integration"
ring:       adopt
quadrant:   methods-and-patterns
tags:       []
---

Continuous Integration (CI) is a software development practice where developers regularly merge their code changes into a central repository, 
after which automated builds and tests are run.

The webshop has a fully automated end-to-end testing suite which is executed in CI and must pass before any code change can be released to production.
For our backend services, we use GitHub Actions to run our CI/CD pipelines. Only in cases of success a pull request can be merged to the main branch.
