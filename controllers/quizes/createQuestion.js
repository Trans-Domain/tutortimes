const db = require("../../models");
const difficultySwap = require("../../helpers/difficultySwap/difficultySwap");

module.exports = function(req, res) {
  let new_question = req.body;

  db.Quiz.create({
    google_id: new_question.google_id,
    question_number: new_question.question_number,
    image: new_question.image,
    title: new_question.title,
    grade: new_question.grade,
    difficulty: difficultySwap(new_question.difficulty),
    score: new_question.score,
    question: new_question.question,
    answer: new_question.answer,
    opt1: new_question.opt1,
    opt2: new_question.opt2,
    opt3: new_question.opt3,
    opt4: new_question.opt4
  })
    .then(result => {
      console.log(result.data);
      res.json(result);
    })
    .catch(function(err) {
      throw err;
    });
};
