import mongoose from "mongoose";
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  id: String,
  title: String,
  score: Number,
  difficulty: Number,
  cover: { data: Buffer, contentType: String },
  createdBy: { type: Schema.ObjectId, ref: "Tutors" },
  editedBy: { type: Schema.ObjectId, ref: "Tutors" },
  belongsTo: { type: Schema.ObjectId, ref: "Organizations" },
  questions: [{ type: Schema.ObjectId, ref: "Questions" }]
});

const Quizzes = mongoose.model("Quizzes", QuizSchema);
export default Quizzes;
