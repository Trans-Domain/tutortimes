import Students from "../../models/Students";
import bcrypt from "bcrypt";
const saltRounds = 10;

export default {
  create: (req, res) => {
    let studentData = req.body.studentData;
    Students.findOne({ fullname: studentData.fullname })
      .then(result => {
        result === null
          ? bcrypt.hash(studentData.password, saltRounds).then(hash => {
              studentData.password = hash;
              Students.insertMany(studentData)
                .then(result => {
                  res.json({ message: "Successfully wrote student to db!" });
                })
                .catch(function(err) {
                  throw err;
                });
            })
          : res.json({ error: "Student already exists" });
      })
      .catch(err => {
        throw err;
      });
  },
  findAll: (req, res) => {
    Students.find({ belongsTo: req.body.orgId })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  findOne: (req, res) => {
    Students.find({ _id: req.params.id })
      .then(result => res.json(result))
      .catch(err => res.json(err.name));
  },
  update: (req, res) => {
    Students.find({ _id: req.body.id })
      .then(() => {
        Students.update({ _id: req.body.id }, { $set: req.body.updates })
          .then(result => res.json(result))
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  },
  delete: (req, res) => {
    Students.findOne({ _id: req.body.id })
      .then(result => {
        result != null
          ? Students.deleteOne({ _id: req.body.id })
              .then(result => res.json(result))
              .catch(err => res.json(err))
          : res.json({ error: "Student doesnt exist" });
      })
      .catch(err => res.json(err));
  }
};
