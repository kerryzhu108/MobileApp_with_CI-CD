const express = require("express");
const { body, validationResult } = require("express-validator");
var functions = require("./../functions/get_cost");

var router = express.Router();

// Get total cost of items in checkout cart.
router.post("/",
    body('item').isString(),
    function (req, res) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        var cost;
        try {
            cost = functions.get_cost(req.body.item);
        } catch (error) {
            return res.status(400).json({ errors: { message: error } });
        }

        return res.json({ cost: cost.toFixed(2) });
    });

module.exports = router