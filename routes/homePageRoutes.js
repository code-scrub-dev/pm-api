module.exports = app => {
    var router = require("express").Router();

    // GET - HomePage  
    router.get("/", (req, res) => {
        res.json({ Message: "Welcome to Policy Management NodeJS API!"});
    })

    app.use('/', router);
};
