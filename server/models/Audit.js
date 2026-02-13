const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({
    department: String,
    subject: String,
    remarks: String
});

module.exports = mongoose.model("Audit", auditSchema);
