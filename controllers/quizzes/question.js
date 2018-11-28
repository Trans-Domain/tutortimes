import Organization from "../../models/Organizations";

export default {
  add: (req, res) => {
    Organization.update(
      {
        _id: req.body.orgId,
        "quizzes._id": req.body.quizId
      },
      {
        $push: {
          "quizzes.$.questions": {
            question: req.body.question.title,
            option1: req.body.question.opt1,
            option2: req.body.question.opt2,
            option3: req.body.question.opt3,
            option4: req.body.question.opt4,
            image: req.body.question.image,
            score: req.body.question.score
          }
        }
      }
    )
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },
  edit: (req, res) => {},
  delete: (req, res) => {
    Organization.update(
      { _id: req.body.orgId, "quizzes._id": req.body.quizId },
      { $pull: { "quizzes.$.questions": { _id: req.body.questionId } } }
    )
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  view: (req, res) => {}
};
