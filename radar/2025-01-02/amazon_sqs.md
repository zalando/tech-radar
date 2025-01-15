---
title: "Amazon SQS"
ring: adopt
quadrant: platforms-and-operations
tags: [infrastructure, aws]
departments: [engineering]
---
[Amazon SQS](https://aws.amazon.com/sqs/) is a managed message queuing for microservices, distributed systems, and serverless applications.
It is used in various places to decouple services and allow them to communicate asynchronously. 
It is used a lot in combination with Amazon Lambda, also step functions and EventBridge Pipes are using it.
When ever you need to decouple services and want the ability to retry errors in processing later, Amazon SQS is a good choice.

