const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const QuizSchema = new Schema({
  title: { type: String, required: true },
  score: { type: Number, required: true },
  difficulty: { type: Number, required: true },
  questions: [
    {
      question: { type: String, required: true },
      option1: { type: String, required: true, isCorrect: Boolean },
      option2: { type: String, required: true, isCorrect: Boolean },
      option3: { type: String, required: true, isCorrect: Boolean },
      option4: { type: String, required: true, isCorrect: Boolean },
      score: { type: Number, required: true }
    }
  ]
});

const Quizzes = mongoose.model("Quiz", QuizSchema);

module.exports = Quizzes;
