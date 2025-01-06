---
title: "Amazon Api Gateway"
ring: adopt
quadrant: platforms-and-operations
tags: [infrastructure, aws]
---
[Amazon Api Gateway](https://aws.amazon.com/api-gateway/) is a fully managed service that makes it easy for developers 
to create, publish, maintain, monitor, and secure APIs at any scale. It replaces our old Amazon ELB based gateway to improve
developer experience and improve the security of our APIs. It is used in various places to expose our services to the public internet.
For new projects only the Amazon Api Gateway should be used to expose services to the public internet. All existing projects should be migrated to the Amazon Api Gateway.

