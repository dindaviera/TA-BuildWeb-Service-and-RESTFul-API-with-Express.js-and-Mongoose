const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    instructor: Array,
    scheduleDateTime : Date
})

module.exports = mongoose.model("courses", courseSchema);