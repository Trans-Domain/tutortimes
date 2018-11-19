import Organization from "../../models/Organizations";

export default {
  create: (req, res) => {
    console.log("entered route");
    let name = req.body.name;
    let quizData = req.body.quiz;

    Organization.findOneAndUpdate({ name }, { $push: { quizzes: quizData } })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  edit: (req, res) => {},
  delete: (req, res) => {},
  viewAll: (req, res) => {},
  viewTutors: (req, res) => {},
  viewOne: (req, res) => {}
};
