import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { Context } from 'aws-lambda';

const firstNames = [ 'Teppo', 'Kalevi', 'Paula', 'Juha', 'Nirnaya' ]
const lastNames = [ 'Ensimmäinen', 'Toinen', 'Kolmas', 'Iisakka' ,'Tripathi' ]

export const handler = (event: any, context: Context) => {
    console.log(context);
    console.log(event);

    // Here we could easily utilize API Gateways and such to parametrize
    // the putItem-event into the DynamoDB. We're just pushing some
    // examples into the table in this example.

    const tablename = 'Customer';
    const client = new DynamoDBClient({});
    const dynamo = DynamoDBDocumentClient.from(client);

    for (var i=0; i < firstNames.length; i++ ) {
        populateTablewithDummyData(firstNames[i], lastNames[i], i);
    }

    function populateTablewithDummyData(firstName: string, lastName: string, customerNumber: number) {
        const emailAddress = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@dummymail.com';
        const res = dynamo.send(
            new PutCommand({
                TableName: tablename,
                Item: {
                    CustomerId: customerNumber,
                    FirstName: firstName,
                    LastName: lastName,
                    EmailAddress: emailAddress,
                    OrderId: '',
                }
            }),
        );

        return res;
    }

}