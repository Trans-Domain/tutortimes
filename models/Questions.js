import mongoose from "mongoose";
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: String,
  option1: {
    content: String,
    isCorrect: Boolean
  },
  option2: {
    content: String,
    isCorrect: Boolean
  },
  option3: {
    content: String,
    isCorrect: Boolean
  },
  option4: {
    content: String,
    isCorrect: Boolean
  },
  image: { data: Buffer, contentType: String },
  score: { type: Number },
  QuizId: { type: Schema.ObjectId, ref: "Quizzes" },
  belongsTo: { type: Schema.ObjectId, ref: "Organizations" }
});

const Questions = mongoose.model("Questions", QuestionSchema);
export default Questions;
