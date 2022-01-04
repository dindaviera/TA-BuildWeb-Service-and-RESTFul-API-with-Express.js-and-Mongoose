const mongoose = require("mongoose")
const express = require("express");
const instructorsSchema = require("../schema/instructorsSchema");
const router = express.Router();

//create instructor
router.post("/addInstructor", (req, res) => {
  const payload = {
    name: req.body.name,
    dateOfBirth: req.body.dateOfBirth,
    location: req.body.location
  };

  return instructorsSchema.create(payload, (err, data) => {
    if (err) {
      res.json({
        msg: "data gagal ditambahkan",
      });
    } else {
      data.save((err, result) => {
        if (err) {
          res.json({
            msg: "data berhasil ditambahkan",
          });
        } else {
          res.json({
            msg: result,
          });
        }
      });
    }
  });
});

router.get("/getInstructor", (req, res) => {
  return instructorsSchema.find({}, (err, result) => {
    if (err) {
      res.json({
        msg: "data tidak ditemukan",
      });
    } else {
      res.json({
        msg: result,
      });
    }
  });
});

router.post("/getbyid", (req, res) => {
    return instructorsSchema.findOne({_id: req.body.id })
});

router.put("/updateInstructor", (req, res) => {
    const id = req.body.id;
    const payload = {
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        location: req.body.location
    }
    return instructorsSchema.findOneAndUpdate(
        { _id: req.body.id }, payload, (err, result) => {
        if (err) {
            res.json({
                msg: "gagal diupdate"
            })
        } else {
            res.json({
                msg: "data berhasil diupdate",
                result
            })
        }
    })
});

router.delete("/deleteInstructor", (req,res) => {
    const id = req.body.id;
    return instructorsSchema.findOneAndDelete({_id : id}, (err, result) => {
        if (err) {
            res.sendStatus(404)
        } else {
            res.json({
                msg: "data berhasil dihapus",
                result
            })
        }
    })
})


module.exports = router;