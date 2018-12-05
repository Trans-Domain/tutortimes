import Quizzes from "../../models/Quizzes";

export default {
  create: (req, res) => {
    let quizData = req.body.quizData;
    Quizzes.findOne({ title: req.body.title })
      .then(result => {
        result === null
          ? Quizzes.insertMany(quizData)
              .then(result => {
                res.json(result);
              })
              .catch(function(err) {
                throw err;
              })
          : res.json({ error: "Quiz already exists" });
      })
      .catch(err => {
        throw err;
      });
  },
  update: (req, res) => {
    Quizzes.find({ _id: req.body.id })
      .then(() => {
        Quizzes.update({ _id: req.body.id }, { $set: req.body.updates })
          .then(result => res.json(result))
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  },
  delete: (req, res) => {
    Quizzes.findOne({ _id: req.body.id })
      .then(result => {
        result != null
          ? Quizzes.deleteOne({ _id: req.body.id })
              .then(result => res.json(result))
              .catch(err => res.json(err))
          : res.json({ error: "Quiz doesnt exist" });
      })
      .catch(err => res.json(err));
  },
  findAll: (req, res) => {
    // by organization
    Quizzes.find({ belongsTo: req.body.orgId })
      .then(result => {
        result.length > 0 ? res.json(result) : res.json("No quizzes exist");
      })
      .catch(err => res.json(err));
  },
  viewTutors: (req, res) => {
    // by tutor
    Quizzes.find({ createdBy: req.body.tutorId })
      .then(result => {
        result.length > 0 ? res.json(result) : res.json("No quizzes exist");
      })
      .catch(err => res.json(err));
  },
  findOne: (req, res) => {
    Quizzes.find({ _id: req.body.id })
      .then(result => {
        res.json(result);
      })
      .catch(err => res.json(err));
  }
};
