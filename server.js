const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//Top Level GET 
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Policy Management API"});
})

const db = require("./models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to dB");
    })
    .catch(err => {
        console.log("Unable to connect to dB", err);
    });

// set routes
require("./routes/policyRoutes")(app);
require("./routes/claimsRoutes")(app);

// Application is Listening at 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log(`Server is listening on port # ${PORT}...`);
});