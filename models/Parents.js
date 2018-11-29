import mongoose from "mongoose";
const Schema = mongoose.Schema();

const ParentSchema = new Schema({
  id: String,
  title: String,
  score: Number,
  difficulty: Number,
  cover: { data: Buffer, contentType: String },
  createdBy: String,
  editedBy: String,
  questions: [
    {
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
      score: { type: Number }
    }
  ]
});

const Parents = mongoose.model("Parents", ParentSchema);
export default Parents;
