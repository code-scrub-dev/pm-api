const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Policy Management API"});
})

//
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log(`Server is listening on port # ${PORT}...`);
});