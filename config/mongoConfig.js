/**
 * File Name: mongoConfig.js
 * 
 * Purpose: This mongoConfig is used for MongoDB configurations
 */
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/capstone";
db.policy = require("../models/policyModel.js")(mongoose);
db.claims = require("../models/claimsModel.js")(mongoose);

module.exports = db;
