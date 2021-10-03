# Get Items
Return a list of items currently available in the shop.

**URL** : `/get_items/`

**Method** : `GET`

**Auth** : `NO`

## Success Response
**Code** : `200 OK`

**Content Example**

```json
{
    "items": [
        "pasta de la pasta $12.00",
        "pizza mama mia $13.00",
        "wine picotto fine $25.00",
        "bread du broad $5.00"
    ]
}
```