const express = require("express");
var bodyParser = require('body-parser');

var get_cost = require("./routes/get_cost");

const app = express();
const port = 3000;

function application_start() {
    console.log(`Server running on port ${port}`);
}

// Application middleware
app.use(express.json());
app.use(bodyParser.json());

// Route endpoints
app.use("/get_cost", get_cost);

// Application start
app.listen(process.env.PORT || port, application_start);