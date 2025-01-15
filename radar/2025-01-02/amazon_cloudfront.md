---
title: "Amazon CloudFront"
ring: adopt
quadrant: platforms-and-operations
tags: [infrastructure, aws]
departments: [engineering]
---
[Amazon CloudFront](https://aws.amazon.com/cloudfront/) securely delivers content with low latency and high transfer speeds.
We use it for our [own cdn](https://cdn.flaconi.net) to deliver static files and assets to our users. It is also in front
of our api gateway to provide caching for some api endpoints and to reduce the load on our backend services.

