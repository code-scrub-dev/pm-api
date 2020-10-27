const { mongoose } = require("../config/mongoConfig");

module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            opened_date: Date,
            incident_date: Date,
            adjustor_notes: String,
            compensation_amount: String,
            decision: String,
            decision_date: Date,
            is_closed: Boolean
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const claimsCollection = mongoose.model("claims_collection", schema);
    return claimsCollection;
};