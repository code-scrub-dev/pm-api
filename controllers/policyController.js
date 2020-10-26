//const db = require("../models"); 
//const policyManagement = db.tutorials; 

exports.add = (req, res) => {
    res.status(400).json({ message: "Added a new policy!" , requestBody: req.body });
}

exports.getAll = (req, res) => {
    res.status(400).send({ message: "Retrieved all policy details!" });
}
