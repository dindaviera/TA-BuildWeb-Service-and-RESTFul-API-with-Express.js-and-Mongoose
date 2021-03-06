const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.url_db || 3000, {
useNewUrlParser: true,
useUnifiedTopology: true,
}).then((db) => {
console.log("tersambung ke db");
})
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/instructor", require("./InstructorsRoute/instructorAction"))
app.use("/participants", require("./ParticipantsRoute/partcipantsAction"))
app.use("/courses", require("./CoursesRoute/courseAction"))
app.get("/", (req, res) => {
    res.send("hello world")
})


app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
})
