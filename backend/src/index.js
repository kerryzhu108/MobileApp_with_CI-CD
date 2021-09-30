const express = require("express");

var get_cost = require("./routes/get_cost");

const app = express();
const port = 3000;

function application_start() {
    console.log(`App listening on port ${port}`);
}

// Application middleware
app.use(express.json());

// Route endpoints
app.use("/get_cost", get_cost);

// Application start
app.listen(port, application_start);