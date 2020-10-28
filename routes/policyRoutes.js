/**
 * File Name: policyRoutes.js
 * 
 * Purpose: This policyRoutes defines the routes for a policy API request.
 */

module.exports = app => {
    const pmRoute = require("../controllers/policyController.js");

    var router = require("express").Router();

    // GET All Policies
    router.get("/", pmRoute.getAll);

    // GET Policy by Id
    router.get("/:id", pmRoute.getById);

    // POST Add a new Policy
    router.post("/", pmRoute.add);

    // PUT update policy by id
    router.put("/:id", pmRoute.updateById);

    // DELETE Policy by id
    router.delete("/:id", pmRoute.deleteById);

    // DELETE all Policies
    router.delete("/", pmRoute.deleteAll);

    app.use('/policies', router);
};