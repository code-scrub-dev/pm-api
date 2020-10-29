/**
 * File Name: claimsRoutes.js
 * 
 * Purpose: This claimsRoutes defines the routes for a claims API request.
 */

module.exports = app => {
    const claimsController = require("../controllers/claimsController.js");

    const router = require("express").Router();

    // GET All Claims
    router.get("/", claimsController.getAll);

    // GET Claim by Id
    router.get("/:id", claimsController.getById);

    // POST Add a new Claim
    router.post("/", claimsController.add);

    // PUT update Claim by id
    router.put("/:id", claimsController.updateById);

    // DELETE Claim by id
    router.delete("/:id", claimsController.deleteById);

    // DELETE all Claims
    router.delete("/", claimsController.deleteAll);

    app.use('/claims', router);
};