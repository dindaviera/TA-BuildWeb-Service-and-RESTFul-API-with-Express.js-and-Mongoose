const mongoose = require("mongoose")
const express = require("express");
const participantSchema = require("../schema/participantsSchema");
const router = express.Router();


router.post("/addParticipant", (req, res) => {
  const payload = {
    title: req.body.title,
    description: req.body.description,
    instructor: req.body.instructor,
    scheduleDateTime : req.body.scheduleDateTime
    };

  return participantSchema.create(payload, (err, data) => {
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

router.get("/getParticipant", (req, res) => {
  return participantSchema.find({}, (err, result) => {
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
    return participantSchema.findOne({_id: req.body.id })
});

router.put("/updateParticipant", (req, res) => {
    const id = req.body.id;
    const payload = {
        title: req.body.title,
        description: req.body.description,
        instructor: req.body.instructor,
        scheduleDateTime : req.body.scheduleDateTime
    }
    return participantSchema.findOneAndUpdate(
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

router.delete("/deleteParticipant", (req,res) => {
    const id = req.body.id;
    return participantSchema.findOneAndDelete({_id : id}, (err, result) => {
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