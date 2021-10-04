var all_items = {
    "pasta de la pasta": { price: 12.00, url: "./assets/pasta.jpg" },
    "pizza mama mia": { price: 13.00, url: "./assets/pizza.jpg" },
    "wine picotto fine": { price: 25.00, url: "./assets/wine.jpg" },
    "bread du broad": { price: 5.00, url: "./assets/bread.jpg" }
}

var discounts = {
    "MAMAMIA": 0.25
}

// Return all items as a list of strings and corresponding image urls.
function get_all_items() {
    var items = []
    Object.entries(all_items).forEach(([key, value]) => {
        items.push([key, "$" + value['price'].toFixed(2), value["url"]]);
    });
    return items;
}

// Get the cost of a single item (without GST calculation)
// Throw an error if the item cannot be found.
function get_cost(item_name) {
    item_name = item_name.toLowerCase();
    if (item_name in all_items) {
        return all_items[item_name]["price"];
    }
    throw new Error("Item " + item_name + " could not be found.");
}

// Calculate the total cost of a cart of items, include GST.
function calculate_subtotal(items) {
    var total_cost = 0;

    for (var i = 0; i < items.length; i++) {
        try {
            total_cost += get_cost(items[i]);
        } catch (error) {
            throw new Error("Item " + items[i] + " could not be found.");
        }
    }

    return total_cost;
}

// Return tax based on given rate.
function get_tax(current_cost, tax) {
    return current_cost * tax;
}

// Return a discount, if discount is not found, return 0.
function get_discount(current_cost, code) {
    if (code in discounts) {
        return current_cost * discounts[code];
    }
    return 0;
}

module.exports = {
    calculate_subtotal,
    get_cost,
    get_tax,
    get_discount,
    get_all_items
}