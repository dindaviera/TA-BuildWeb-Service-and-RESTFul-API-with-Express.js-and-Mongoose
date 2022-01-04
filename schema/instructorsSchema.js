const mongoose = require("mongoose");

const instructorsSchema = new mongoose.Schema({
    name: String,
    dateOfBirth: Date,
    location: String
})

module.exports = mongoose.model("instructors", instructorsSchema);