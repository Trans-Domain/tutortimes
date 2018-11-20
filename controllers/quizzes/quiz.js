import Organization from "../../models/Organizations";
import getInfoUpdates from "../../helpers/getInfoUpdates/getInfoUpdates";

export default {
  create: (req, res) => {
    let name = req.body.name;
    let quizData = req.body.quiz;

    Organization.findOneAndUpdate({ name }, { $push: { quizzes: quizData } })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  update: (req, res) => {
    let id = req.body.id;
    let updates = getInfoUpdates(req.body.updates, req.body.type);

    Organization.update({ "quizzes._id": id }, { $set: updates })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  delete: (req, res) => {},
  findAll: (req, res) => {
    let name = req.params.organization;
    Organization.findOne({ name: name })
      .then(result => res.json(result.quizzes))
      .catch(err => res.json(err));
  },
  viewTutors: (req, res) => {
    Organization.findOne({ name: req.params.organization })
      .then(result => {
        let quizList = [];
        for (let i = 0; i < result.quizzes.length; i++) {
          if (result.quizzes[i].editedBy === req.params.email) {
            quizList.push(result.quizzes[i]);
          }
        }
        res.json(quizList);
      })
      .catch(err => {
        throw err;
      });
  },
  findOne: (req, res) => {
    Organization.findOne({
      name: req.params.organization
    })
      .then(result => {
        // res.json(result);
        for (let i = 0; i < result.quizzes.length; i++) {
          if (result.quizzes[i]._id == req.params.quizId) {
            res.json(result.quizzes[i]);
            break;
          }
        }
      })
      .catch(err => res.json(err));
  }
};
