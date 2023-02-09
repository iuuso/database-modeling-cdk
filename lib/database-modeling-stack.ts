import {
  aws_dynamodb as dynamodb,
  aws_lambda_nodejs as lambda_nodejs,
  aws_apigateway as apigateway,
  Stack, StackProps, CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class DatabaseModelingStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const customerTable = new dynamodb.Table(this, 'customerTable', {
      partitionKey: { 
        name: 'CustomerId', 
        type: dynamodb.AttributeType.NUMBER, 
      },
      sortKey: {
        name: 'EmailAddress',
        type: dynamodb.AttributeType.STRING,
      },
      tableName: 'Customer',
      readCapacity: 1,
      writeCapacity: 1,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const orderTable = new dynamodb.Table(this, 'orderTable', {
      partitionKey: {
        name: 'OrderId',
        type: dynamodb.AttributeType.STRING,
      },
      tableName: 'Order',
      readCapacity: 1,
      writeCapacity: 1,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const customerPopulator = new lambda_nodejs.NodejsFunction(this, 'customerPopulatorLambda', {});
    customerTable.grantWriteData(customerPopulator);

    const orderPopulator = new lambda_nodejs.NodejsFunction(this, 'orderPopulatorLambda', {});
    orderTable.grantWriteData(orderPopulator);

    const api = new apigateway.LambdaRestApi(this, 'KipuApiGateway', {
      handler: customerPopulator,
    });
    // api.root.addMethod('PUT');

    new CfnOutput(this, 'customerTableArn', { value: customerTable.tableArn });
    new CfnOutput(this, 'customerPopulatorLambdaName', { value: customerPopulator.functionName });
    new CfnOutput(this, 'orderPopulatorLambdaName', { value: orderPopulator.functionName });
    new CfnOutput(this, 'gateWayUrl', { value: api.url });
  }
}
