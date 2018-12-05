import Question from "../../models/Questions";

export default {
  add: (req, res) => {
    let questionData = req.body.questionData;
    Question.findOne({
      question: questionData.question,
      quizId: questionData.quizId,
      belongsTo: questionData.questionData
    })
      .then(result => {
        result === null
          ? Question.create(questionData)
              .then(result => {
                res.json(result);
              })
              .catch(function(err) {
                throw err;
              })
          : res.json({ error: "Question already exists" });
      })
      .catch(err => {
        throw err;
      });
  },
  edit: (req, res) => {},
  delete: (req, res) => {
    Question.findOne({ _id: req.body.id })
      .then(result => {
        result != null
          ? Question.deleteOne({ _id: req.body.id })
              .then(result => res.json(result))
              .catch(err => res.json(err))
          : res.json({ error: "Question doesnt exist" });
      })
      .catch(err => res.json(err));
  },
  view: (req, res) => {
    Question.findOne(
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
