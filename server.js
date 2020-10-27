/**
 * Project: Create a Policy Management NodeJS Application.
 */
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
const db = require("./config/mongoConfig")
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Unable to connect to MongoDB", err);
    });

// Set API Routes
require("./routes/homePageRoutes")(app);
require("./routes/policyRoutes")(app);
require("./routes/claimsRoutes")(app);


// Application Listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port # ${PORT}...`);
});