const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrganizationSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  dateJoined: { type: Date, required: true },
  billingDate: { type: Date },
  logo: { type: Buffer },
  password: { type: String, required: true },
  tutors: [
    {
      id: String,
      fullname: String,
      password: String,
      email: String,
      photo: Buffer,
      online: Boolean,
      bio: String,
      phone: String
    }
  ],
  students: [
    {
      id: String,
      fullname: String,
      password: String,
      email: String,
      photo: Buffer,
      online: Boolean,
      bio: String,
      goal: String,
      phone: String,
      grade: { type: Number, required: true },
      score: Number,
      reviews: [
        {
          date: Date,
          body: String
        }
      ],
      parent: {
        id: String,
        name: String,
        email: String
      }
    }
  ],
  quizzes: [
    {
      id: String,
      title: String,
      score: Number,
      difficulty: Number,
      cover: { data: Buffer, contentType: String },
      questions: [
        {
          question: String,
          option1: {
            type: String,
            isCorrect: Boolean
          },
          option2: {
            type: String,
            isCorrect: Boolean
          },
          option3: {
            type: String,
            isCorrect: Boolean
          },
          option4: {
            type: String,
            isCorrect: Boolean
          },
          image: { data: Buffer, contentType: String },
          score: { type: Number }
        }
      ]
    }
  ]
});

const Organizations = mongoose.model("Organizations", OrganizationSchema);

module.exports = Organizations;
