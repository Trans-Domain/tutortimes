import Tutors from "../../models/Tutors";

export default {
  create: (req, res) => {
    let tutorData = req.body.tutorData;
    Tutors.findOne({ fullname: tutorData.fullname })
      .then(result => {
        console.log(result);
        result === null
          ? Tutors.insertMany(tutorData)
              .then(result => {
                res.json(result);
              })
              .catch(function(err) {
                throw err;
              })
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
