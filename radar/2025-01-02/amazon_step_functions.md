---
title: "Amazon Step Functions"
ring: adopt
quadrant: platforms-and-operations
tags: [infrastructure, aws]
---
[Amazon Step Functions](https://aws.amazon.com/step-functions/)provides serverless orchestration for modern applications. 
Orchestration centrally manages a workflow by breaking it into multiple steps, adding flow logic, and tracking the inputs and outputs between the steps. 
Step Functions is a good choice for simple processes like CRUD operations against a DynamoDB or parsing uploaded csv files from s3.
It is also a good choice for more complex workflows where only a few steps are run inside a lambda function. That 
overall reduces the maintenance overhead of lambda services as they become much smaller and less complex. Also,
Step Functions visualizes the workflow in a state machine, which makes it easier to understand and debug.

