const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
    name: String,
    dateOfBirth: String,
    email: String,
    phone: Number,
    course: Array
})

module.exports = mongoose.model("participants", participantSchema);