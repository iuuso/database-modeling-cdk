#!/bin/sh

## Create Kiva Putiikki (KiPu) online food shop
## database table.

aws dynamodb create-table --table-name 'Customer' \
	--attribute-definitions \
		AttributeName=CustomerId,AttributeType
