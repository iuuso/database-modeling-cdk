# A simple DynamoDb Database CDK

This repository contains a sample DynamoDb database with a lambda function which is used to populate said database with sample data.

## Relevant links

* [AWS User Guide - Using Amazon DynamoDB with the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-services-dynamodb.html)
* [AWS CDK Docs - aws-dynamodb](https://docs.aws.amazon.com/cdk/api/v1/docs/aws-dynamodb-readme.html)
* [AWS Developer Guide - Getting started with DynamoDB and the AWS SDKs](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.html)
* [AWS Developer Guide - PartiQL select statements for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.select.html)
* [Dynobase - How To Create DynamoDB Table in AWS [Easiest Way]](https://dynobase.dev/dynamodb-create-table/)
* [AWS Developer Guide - Tutorial: Build a CRUD API with Lambda and DynamoDB](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-dynamo-db.html#http-api-dynamo-db-create-function)

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
