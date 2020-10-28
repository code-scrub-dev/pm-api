/**
 * File Name: policyController.js
 * 
 * Purpose: The policyController manages the API functionalities 
 * related to POLICY transactions.
 */

const { policy } = require("../config/mongoConfig");
const db = require("../config/mongoConfig"); 
const PolicyInstance = db.policy; 

/**
 * Add a new policy information
 * @param {*} req 
 * @param {*} res 
 */
exports.add = (req, res) => {
    console.log(">>> POST new POLICY information...");
    const policyInstance = new PolicyInstance(req.body);
    policyInstance
        .save(policyInstance)
        .then(data => { res.status(200).send(data); })
        .catch(error => { res.status(400).send({ErrorMessage: error.message});  
    });
};

/**
 * GET all policies information
 * @param {*} req 
 * @param {*} res 
 */
exports.getAll = (req, res) => {
    console.log(">>> GET all POLICY information...");
    PolicyInstance
        .find()
        .then(data => {
            if(data == '') { 
                res.status(404).send({Message: "No Policy Data Found."});
            }
            else { 
                res.status(200).send(data); 
            }
        })
        .catch(error => { res.status(400).send({ErrorMessage: error.message}); 
    });
};

/**
 * GET policy information By identifier
 * @param {*} req 
 * @param {*} res 
 */
exports.getById = (req, res) => {
    const id = req.params.id;
    console.log(`>>> GET the policy information for ${id}...`);
    if (id != null && id != '') {
        PolicyInstance
        .findById(id)
        .then(data => {            
            if(!data) { 
                res.status(404).send({Message: `No Policy Data Found with id: ${id}.`}); 
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
 * Update the Policy Data By Id.
 * @param {*} req 
 * @param {*} res 
 */
exports.updateById = (req, res) => {
    const id = req.params.id;
    console.log(`>>> UPDATE the policy information for ${id}...`);
    if (id != null && id != '') {
        PolicyInstance
            .findByIdAndUpdate(id, req.body, {useFindAndModify: true})
            .then(data => {
                if(!data) {
                    res.status(404).send({Message: `Unable to update policy data with id: ${id}.`});
                } else {
                    res.status(200).send(data);
                }
            })
            .catch(error => { res.status(400).send({ErrorMessage: error.message}); 
        });
    }
};

/**
 * DELETE All Policy Information
 * @param {*} req 
 * @param {*} res 
 */
exports.deleteAll = (req, res) => {
    console.log(`>>> DELETE all policy information...`);
    PolicyInstance
        .deleteMany({})
        .then(data => { res.status(200).send({Message: "Deleted All Policy Data."}); })
        .catch(error => { res.status(400).send({ErrorMessage: error.message}); 
    });
};

/**
 * Delete the Policy Data By Id.
 * @param {*} req 
 * @param {*} res 
 */
exports.deleteById = (req, res) => {
    const id = req.params.id;
    console.log(`>>> DELETE the policy information for ${id}...`);
    if (id != null && id != '') {
        PolicyInstance
            .findByIdAndRemove(id)
            .then(data => {
                if(!data) {
                    res.status(404).send({Message: `Unable to DELETE policy with id: ${id}.`});
                } else {
                    res.status(200).send(data);
                }
            })
            .catch(error => { res.status(400).send({ErrorMessage: error.message}); 
        });
    }
};