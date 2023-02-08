import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { Context } from 'aws-lambda';

export const handler = (event: any, context: Context) => {
    console.log(context);
    console.log(event);

    // Here we could easily utilize API Gateways and such to parametrize
    // the putItem-event into the DynamoDB. We're just pushing some
    // examples into the table in this example.

    const tablename = 'Customer2';
    const client = new DynamoDBClient({});
    const dynamo = DynamoDBDocumentClient.from(client);

    const res = dynamo.send(
        new PutCommand({
            TableName: tablename,
            Item: {
                CustomerId: 1,
                FirstName: "Kalevi",
                LastName: 'Ensimmäinen',
                EmailAddress: 'kalevi.ensimmainen@gmail.com',
            }
        })
    );

    return res;
}