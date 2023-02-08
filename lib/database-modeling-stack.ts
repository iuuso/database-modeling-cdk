import {
  aws_dynamodb as dynamodb,
  aws_lambda_nodejs as lambda_nodejs,
  Stack, StackProps, CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class DatabaseModelingStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const customerTable = new dynamodb.Table(this, 'customerTable', {
      partitionKey: { 
        name: 'CustomerId', 
        type: dynamodb.AttributeType.NUMBER, 
      },
      sortKey: {
        name: 'EmailAddress',
        type: dynamodb.AttributeType.STRING,
      },
      tableName: 'Customer2',
      readCapacity: 1,
      writeCapacity: 1,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const customerPopulator = new lambda_nodejs.NodejsFunction(this, 'customerPopulatorLambda', {});
    customerTable.grantWriteData(customerPopulator);

    new CfnOutput(this, 'customerTableArn', { value: customerTable.tableArn });
    new CfnOutput(this, 'customerPopulatorLambdaName', { value: customerPopulator.functionName });
  }
}
