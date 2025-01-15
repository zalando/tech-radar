---
title: "Monitoring Service"
quadrant: tools
ring: adopt
tags: [monitoring]
departments: [engineering]
---
[Monitoring Service](https://github.com/Flaconi/monitoring-service) creating NewRelic alerts and dashboards for the given definitions per repo. 
It is invoked through a GitHub workflow and handles at the moment custom alerts static and baseline, it also provides 
a json schema to be used by the GitHub action to check if the monitoring definitions are valid.
