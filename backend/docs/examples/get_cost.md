# Get Cost
Used to calculate the total cost of items in user's cart (including GST).

**URL** : `/get_cost/`

**Method** : `GET`

**Auth** : `NO`

**Data Constraints**

```json
{
    "checkout": [
        {
            "item": "valid-item-name",
            "quantity": "integer quantity"
        },
        ...
        {...}
    ]
}
```

**Data Example**

```json
{
    "checkout": [
        {
            "item": "banana",
            "quantity": 10
        },
        {
            "item": "apple",
            "quantity": 2
        }
    ]
}
```
## Success Response
**Code** : `200 OK`

**Content Example**

```json
{
    "cost": "19.21"
}
```

## Error Response
**Condition** : Requested item does not exist in list. Quantity is not a valid number.

**Code** : `400 BAD REQUEST`

**Content**
```json
{
    "error_message": "The requested item {item name} does not exist."
}
```