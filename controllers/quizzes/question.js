import Organization from "../../models/Organizations";

export default {
  add: (req, res) => {
    let newQuestion = {
      question: req.body.question.title,
      option1: req.body.question.opt1,
      option2: req.body.question.opt2,
      option3: req.body.question.opt3,
      option4: req.body.question.opt4,
      image: req.body.question.image,
      score: req.body.question.score
    };
    Organization.update(
      { _id: req.body.orgId, "quizzes._id": req.body.quizId },
      {
        $push: {
          "quizzes.$.questions": newQuestion
        }
      }
    )
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },
  edit: (req, res) => {
    let newQuestion = {
      question: req.body.question.title,
      option1: req.body.question.opt1,
      option2: req.body.question.opt2,
      option3: req.body.question.opt3,
      option4: req.body.question.opt4,
      image: req.body.question.image,
      score: req.body.question.score
    };
    Organization.findOne({ _id: req.body.questionId })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  delete: (req, res) => {
    Organization.update(
      { _id: req.body.orgId, "quizzes._id": req.body.quizId },
      { $pull: { "quizzes.$.questions": { _id: req.body.questionId } } }
    )
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  view: (req, res) => {
    Organization.findOne(
      {
        _id: req.body.orgId
      },
      {
        quizzes: {
          $elemMatch: { _id: req.body.quizId }
        }
      }
    )
      .then(result => {
        let questions = result.quizzes[0].questions;
        for (let i = 0; i < questions.length; i++) {
          if (questions[i]._id == req.body.questionId) {
            res.json(questions[i]);
            break;
          }
        }
        res.json({ err: "question not found" });
      })
      .catch(err => res.json(err));
  }
};
