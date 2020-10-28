/**
 * File Name: claimsController.js
 * 
 * Purpose: The claimsController manages the API functionalities 
 * related to CLAIMS transactions.
 */
const { claims } = require("../config/mongoConfig");
const db = require("../config/mongoConfig");
const ClaimsInstance = db.claims; 

/**
 * Add a new claims information
 * @param {*} req 
 * @param {*} res 
 */
exports.add = (req, res) => {
    console.log(">>> POST new CLAIMS information...");
    const claimsInstance = new ClaimsInstance(req.body);
    claimsInstance
        .save(claimsInstance)
        .then(data => { res.status(200).send(data); })
        .catch(error => { res.status(400).send({ErrorMessage: error.message}); 
    });
};

/**
 * GET all cliams information
 * @param {*} req 
 * @param {*} res 
 */
exports.getAll = (req, res) => {
    console.log(">>> GET all CLAIMS information...");
    ClaimsInstance
        .find()
        .then(data => {
            if(data == '') { 
                res.status(404).send({ message: "No Claims Data Found." });
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
        ClaimsInstance
        .findById(id)
        .then(data => {            
            if(data == '') { 
                res.status(404).send({ message: `No Claims Data Found for ${id}` }); 
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
        ClaimsInstance
            .findByIdAndUpdate(id, req.body, {useFindAndModify: false})
            .then(data => {
                if(data == '') {
                    res.status(404).send({Message: `Unable to update with ${id}`});
                } else {
                    res.status(200).send(data);
                }
            })
            .catch(error => { res.status(400).send({ErrorMessage: error.message}); 
        });
    }
};

/**
 * DELETE All Claims Information
 * @param {*} req 
 * @param {*} res 
 */
exports.deleteAll = (req, res) => {
    console.log(`>>> DELETE all CLAIMS information...`);
    ClaimsInstance
        .deleteMany({})
        .then(data => { res.status(200).send({Message: "Deleted All Policy Data."}); })
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
        ClaimsInstance
            .findByIdAndRemove(id)
            .then(data => {
                if(data == '') {
                    res.status(404).send({Message: `Unable to DELETE with ${id}`});
                } else {
                    res.status(200).send(data);
                }
            })
            .catch(error => { res.status(400).send({ErrorMessage: error.message}); 
        });
    }
};