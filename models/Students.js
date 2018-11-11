const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  tutors: [
    {
      name: String
    }
  ],
  parents: [
    {
      name: String
    }
  ],
  quizes: [
    {
      title: String,
      score: Number,
      date: Date,
      quizId: String
    }
  ],
  organization: {
    type: String,
    required: true
  },
  online: {
    type: Boolean
  },
  bio: {
    type: String
  },
  goal: {
    type: String
  },
  phone: String,
  grade: {
    type: String,
    required: true
  },
  score: Number
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
