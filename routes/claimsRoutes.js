module.exports = app => {
    const cmRoute = require("../controllers/claimsController.js");

    var router = require("express").Router();

    // GET All Claims
    //router.get("/", cmRoute.getAll);

    // GET Claim by Id
    //router.get("/:id", cmRoute.getById);

    // POST Add a new Claim
    //router.post("/", cmRoute.add);

    // PUT update Claim by id
    //router.put("/:id", cmRoute.updateById);

    // DELETE Claim by id
    //router.delete("/:id", cmRoute.deleteById);

    // DELETE all Claims
    //router.delete("/", cmRoute.deleteAll);

    app.use('/claims', router);
};