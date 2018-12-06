import Tutors from "../../models/Tutors";
import hashPassword from "../../helpers/passwordHashing/passwordHashing";

export default {
  create: (req, res) => {
    let tutorData = req.body.tutorData;
    Tutors.findOne({ email: tutorData.email })
      .then(result => {
        result === null
          ? hashPassword(tutorData)
              .then(hashedTutor => {
                Tutors.insertMany(hashedTutor)
                  .then(() => {
                    res.json({ message: "Successfully wrote tutor to db!" });
                  })
                  .catch(function(err) {
                    res.json({ err });
                  });
              })
              .catch(err => res.json(err))
          : res.json({ error: "Tutor already exists" });
      })
      .catch(err => {
        throw err;
      });
  },
  findAll: (req, res) => {
    Tutors.find({ belongsTo: req.body.orgId })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  findOne: (req, res) => {
    // use email instead of id?
    Tutors.find({ _id: req.params.id })
      .then(result => res.json(result))
      .catch(err => res.json(err.name));
  },
  update: (req, res) => {
    Tutors.find({ _id: req.body.id })
      .then(() => {
        Tutors.update({ _id: req.body.id }, { $set: req.body.updates })
          .then(result => res.json(result))
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  },
  delete: (req, res) => {
    Tutors.findOne({ _id: req.body.id })
      .then(result => {
        result != null
          ? Tutors.deleteOne({ _id: req.body.id })
              .then(result => res.json(result))
              .catch(err => res.json(err))
          : res.json({ error: "Tutor doesnt exist" });
      })
      .catch(err => res.json(err));
  }
};
