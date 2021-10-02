var prices = {
    banana: 1.50,
    apple: 1.00
}

// Get the cost of a single item (without GST calculation)
// Throw an error if the item cannot be found.
function get_cost(item_name) {
    if (item_name in prices) {
        return prices[item_name];
    }
    throw new Error("Item " + item_name + " could not be found.");
}

// Calculate the total cost of a cart of items, include GST.
function calculate_total_cost(checkout, gst) {
    var total_cost = 0;

    for (var i = 0; i < checkout.length; i++) {
        if (checkout[i].quantity <= 0) throw new Error("Invalid item quantity " + checkout[i].quantity);
        try {
            total_cost += get_cost(checkout[i].item) * checkout[i].quantity;
        } catch (error) {
            throw new Error("Item " + checkout[i].item + " could not be found.");
        }
    }

    return total_cost * (gst + 1);
}

module.exports = {
    calculate_total_cost,
    get_cost
}