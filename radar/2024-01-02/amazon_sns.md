---
title: "Amazon SNS"
ring: hold
quadrant: platforms-and-operations
tags: [infrastructure, aws]
---
[Amazon SNS](https://aws.amazon.com/sns/) is a fully managed Pub/Sub service for application to application messaging.
It was used in the beginning to allow a simple way to send commercetools notifications to our services, but was 
replaced by Amazon EventBridge. It is still used in some places, but should be replaced by Amazon EventBridge where possible. 
New Projects should not use Amazon SNS anymore.

