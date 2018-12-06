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
  edit: (req, res) => {
    Question.find({ _id: req.body.id })
      .then(result => {
        result.length === 0
          ? res.json("Question doesn't exist")
          : Question.update({ _id: req.body.id }, { $set: req.body.updates })
              .then(result => res.json(result))
              .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  },
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
    Question.find({ _id: req.body.id })
      .then(result => {
        result.length === 0
          ? res.json("Question doesn't exist")
          : res.json(result);
      })
      .catch(err => res.json(err));
  },
  findAllByQuiz: (req, res) => {
    Question.find({ quizId: req.body.quizId })
      .then(result => {
        // create a helper to filter through the questions and organize them the right way
        res.json(result);
      })
      .catch(err => res.json(err));
  }
};
