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
  viewAll: (req, res) => {},
  viewTutors: (req, res) => {},
  viewOne: (req, res) => {}
};
