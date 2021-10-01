const express = require("express");
const { body, validationResult } = require("express-validator");
var router = express.Router();

var prices = {
    banana: 1.50,
    apple: 1.00
}

const GST = 0.13;

// Get total cost of items in checkout cart.
router.post("/",
    body('checkout').isArray(),
    body('checkout.*.item').isString(),
    body('checkout.*.quantity').isInt(),
    function (req, res) {
        // Check for errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        var checkout = req.body.checkout;
        let total_cost = 0;

        for (let i = 0; i < checkout.length; i++) {
            total_cost += prices[checkout[i].item] * checkout[i].quantity;
        }

        total_cost *= GST + 1;

        return res.json({ cost: total_cost.toFixed(2) });
    });

module.exports = router