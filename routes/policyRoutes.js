/**
 * File Name: policyRoutes.js
 * 
 * Purpose: This policyRoutes defines the routes for a policy API request.
 */

module.exports = app => {
    const policyController = require("../controllers/policyController.js");

    const router = require("express").Router();

    // GET All Policies
    router.get("/", policyController.getAll);

    // GET Policy by Id
    router.get("/:id", policyController.getById);

    // POST Add a new Policy
    router.post("/", policyController.add);

    // PUT update policy by id
    router.put("/:id", policyController.updateById);

    // DELETE Policy by id
    router.delete("/:id", policyController.deleteById);

    // DELETE all Policies
    router.delete("/", policyController.deleteAll);

    app.use('/policies', router);
};