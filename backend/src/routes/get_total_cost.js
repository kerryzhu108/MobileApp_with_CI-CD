const express = require("express");
const { body, validationResult } = require("express-validator");
var functions = require("./../functions/get_cost");

var router = express.Router();

const GST = 0.13;

// Get total cost of items in checkout cart.
router.post("/",
    body('checkout').isArray(),
    body('checkout.*.item').isString(),
    body('checkout.*.quantity').isInt(),
    function (req, res) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        var total_cost;
        try {
            total_cost = functions.calculate_total_cost(req.body.checkout, GST);
        } catch (error) {
            return res.status(400).json({ errors: { message: error } })
        }

        return res.json({ cost: total_cost.toFixed(2) });
    });

module.exports = router