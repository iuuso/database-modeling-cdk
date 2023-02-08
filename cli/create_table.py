import boto3

class Table:
    """Encapsulates an Amazon DynamoDB table of movie data."""
    def __init__(self, dyn_resource):
        """
        :param dyn_resource: A Boto3 DynamoDB resource.
        """
        self.dyn_resource = dyn_resource
        self.table = None

    def create_customer_table(self, table_name):
        """
        Creates an Amazon DynamoDB table that can be used to store movie data.
        The table uses the release year of the movie as the partition key and the
        title as the sort key.

        :param table_name: The name of the table to create.
        :return: The newly created table.
        """
        try:
            self.table = self.dyn_resource.create_table(
                TableName=table_name,
                KeySchema=[
                    {'AttributeName': 'CustomerID', 'KeyType': 'HASH'},  # Partition key
                    {'AttributeName': 'EmailAddress', 'KeyType': 'RANGE'},
#                    {'AttributeName': 'LastName', 'KeyType': 'HASH'}
                ],
                AttributeDefinitions=[
#                    {'AttributeName': 'LastName', 'AttributeType': 'S'}, # N=number, S=string
                    {'AttributeName': 'CustomerID', 'AttributeType': 'N'}, 
                    {'AttributeName': 'EmailAddress', 'AttributeType': 'S'},
#                    {'AttributeName': 'FirstName', 'AttributeType': 'S'},
#                    {'AttributeName': 'OR.OrderID', 'AttributeType': 'N'}
                ],
                ProvisionedThroughput={'ReadCapacityUnits': 1, 'WriteCapacityUnits': 1})
#            self.table.wait_until_exists()
        except ClientError as err:
            logger.error(
                "Couldn't create table %s. Here's why: %s: %s", table_name,
                err.response['Error']['Code'], err.response['Error']['Message'])
            raise
        else:
            return self.table

client = boto3.client('dynamodb')
customer_table = Table(client)
customer_table.create_customer_table('Customer')
