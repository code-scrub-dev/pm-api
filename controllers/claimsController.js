/**
 * File Name: claimsController.js
 * 
 * Purpose: The claimsController manages the API functionalities 
 * related to CLAIMS transactions.
 */
const { claims } = require("../config/mongoConfig");
const db = require("../config/mongoConfig");
const ClaimsDbHandler = db.claims; 

/**
 * Add a new claims information
 * @param {*} req 
 * @param {*} res 
 */
exports.add = (req, res) => {
    console.log(">>> POST new CLAIMS information...");
    if(req.body.name && req.body.name != '') {
        const claimsInstance = new ClaimsDbHandler(req.body);
        claimsInstance
            .save(claimsInstance)
            .then(data => { res.status(200).send(data); })
            .catch(error => { res.status(400).send({ErrorMessage: error.message}); 
        });
    } else {
        res.status(400).send({Message: "Missing required field."});
    }
    

};

/**
 * GET all cliams information
 * @param {*} req 
 * @param {*} res 
 */
exports.getAll = (req, res) => {
    console.log(">>> GET all CLAIMS information...");
    ClaimsDbHandler
        .find()
        .then(data => {
            if(data == '') { 
                res.status(404).send({Message: "No Claims Data Found."});
            }
            else { 
                res.status(200).send(data); 
            }
        })
        .catch(error => { res.status(400).send({ErrorMessage: error.message}); 
    });
};

/**
 * GET claims information By identifier
 * @param {*} req 
 * @param {*} res 
 */
exports.getById = (req, res) => {
    const id = req.params.id;
    console.log(`>>> GET the CLAIMS information for ${id}...`);
    if (id != null && id != '') {
        ClaimsDbHandler
        .findById(id)
        .then(data => {            
            if(!data) { 
                res.status(404).send({Message: `No Claims Data Found with id: ${id}.`}); 
            }
            else { 
                res.status(200).send(data); 
            } 
        })
        .catch(error => { res.status(400).send({ErrorMessage: error.message});  
        });
    }
};

/**
 * Update the Claims Data By Id.
 * @param {*} req 
 * @param {*} res 
 */
exports.updateById = (req, res) => {
    const id = req.params.id;
    console.log(`>>> UPDATE the CLAIMS information for ${id}...`);
    if (id != null && id != '') {
        if (!req.body) {
            res.status(404).send({Message: "Missing required input data."});
        } else {
            ClaimsDbHandler
            .findOneAndUpdate(id, req.body, {new: true})
            .then(data => {
                if(!data) {
                    res.status(404).send({Message: `Unable to update claims data with id: ${id}.`});
                } else {
                    res.status(200).send(data);
                }
            })
            .catch(error => { res.status(400).send({ErrorMessage: error.message}); 
            });
        }
    }
};

/**
 * DELETE All Claims Information
 * @param {*} req 
 * @param {*} res 
 */
exports.deleteAll = (req, res) => {
    console.log(`>>> DELETE all CLAIMS information...`);
    ClaimsDbHandler
        .deleteMany({})
        .then(data => { res.status(200).send({Message: `Deleted ${data.deletedCount} Claims Data.`}); })
        .catch(error => { res.status(400).send({ErrorMessage: error.message}); 
    });
};

/**
 * Delete the Claims Data By Id.
 * @param {*} req 
 * @param {*} res 
 */
exports.deleteById = (req, res) => {
    const id = req.params.id;
    console.log(`>>> DELETE the CLAIMS information for ${id}...`);
    if (id != null && id != '') {
        ClaimsDbHandler
            .findOneAndDelete({_id: id})
            .then(data => {
                if(!data) {
                    res.status(404).send({Message: `Unable to DELETE claims data with id: ${id}.`});
                } else {
                    res.status(200).send(data);
                }
            })
            .catch(error => { res.status(400).send({ErrorMessage: error.message}); 
        });
    }
};