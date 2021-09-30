const express = require("express");
var router = express.Router();

var prices = {
    banana: 1.50,
    apple: 1.00
}

const GST = 0.13;

// Get total cost of items in checkout cart.
router.get("/", function (req, res) {
    checkout = req.body.checkout;
    let total_cost = 0;
    for (let i = 0; i < checkout.length; i++) {
        total_cost += prices[checkout[i].item] * checkout[i].quantity;
    }

    total_cost *= GST + 1;

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ cost: total_cost.toFixed(2) }));
});

module.exports = router