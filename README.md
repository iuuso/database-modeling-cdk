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

### Development

Clone the repository
`$ git clone https://github.com/iuuso/database-modeling-cdk.git`

Install aws-cdk
`$ npm install --target=global aws-cdk`

Install the dependencies
`$ npm install`

Test that the CDK synthesizes correctly
`$ cdk ls`

### Dummy Development

Clone the repository
`$ git clone https://github.com/iuuso/database-modeling-cdk.git`

Create a new branch
`$ git checkout <branch-name>`

Checkout to the newly created branch
`$ git branch <branch-name>`

Make your changes, and then stage your changes. First, review what has changed:
`$ git status`

Add changed files to stage
`$ git add <filename>`

or:

`$ git add --all`

Make a commit with a message:
`$ git commit -m "<commit message>"`

Push your branch to Github:
`$ git push -u origin <branch>`
