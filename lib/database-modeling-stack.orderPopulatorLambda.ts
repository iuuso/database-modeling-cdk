import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { Context } from 'aws-lambda';

// Total number of orders in table
const numberofOrders = 10;

// Order (INT)
const orderId: number = 0;
const deliveryFee: number = 7.90;

// Status
const status = [
    'Delivered',
    'Collected',
    'Waiting for Collector',
    'Payment Pending', // paymentStatus = false
]
var paymentStatus: boolean = false;

export const handler = (event: any, context: Context) => {
    console.log(context);
    console.log(event);

    // Here we could easily utilize API Gateways and such to parametrize
    // the putItem-event into the DynamoDB. We're just pushing some
    // examples into the table in this example.

    const tablename = 'Order2';
    const client = new DynamoDBClient({});
    const dynamo = DynamoDBDocumentClient.from(client);

    for (var i=0; i < numberofOrders; i++ ) {
        const orderId = i;
        const currentDate = new Date();
        const orderDate = currentDate.getDay() + "." + currentDate.getMonth() + "." + currentDate.getFullYear();
        // Generate a random number between 1 (+ deliveryfee) and 100
        const totalPrice = Math.floor((Math.random() * 100) + (1 + deliveryFee));
        const customerId = Math.floor((Math.random() * 5) + 1);
        const status = Math.floor((Math.random() * 3) + 0);

        // If status is 'Payment Pending' then paymentStatus = false
        if (status == 3) {
            paymentStatus = false;
        } else {
            paymentStatus = true;
        };

        const addressId = customerId;

        populateTablewithDummyData(orderId, orderDate, totalPrice, customerId, status, paymentStatus, addressId);
    }

    function populateTablewithDummyData(
        orderId: number, 
        orderDate: string, 
        totalPrice: number, 
        customerId: number, 
        status: number,
        paymentStatus: boolean,
        addressId: number,
        ) {
        const res = dynamo.send(
            new PutCommand({
                TableName: tablename,
                Item: {
                    OrderId: orderId,
                    OrderDate: orderDate,
                    TotalPrice: totalPrice,
                    DeliveryFee: deliveryFee,
                    CustomerId: customerId,
                    Status: status,
                    PaymentStatus: paymentStatus,
                    AddressId: addressId,

                }
            }),
        );

        return res;
    }

}