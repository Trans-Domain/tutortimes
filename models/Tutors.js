const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const TutorSchema = new Schema({
  fullname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  photo: { type: Buffer },
  type: { type: String, required: true },
  students: [
    {
      name: String,
      studentId: { type: ObjectId, ref: "Student" },
      email: String,
      parent: {
        name: String,
        email: String,
        parentId: { type: ObejctId, ref: "Parent" }
      },
      reviews: [
        {
          date: Date,
          body: String
        }
      ]
    }
  ],
  organization: { type: String, orgId: ObjectId, ref: "Organization" },
  online: Boolean,
  bio: String,
  phone: String,
  quizzes: [
    {
      quizId: { type: ObjectId, ref: "Quiz" }
    }
  ]
});

const Tutors = mongoose.model("Tutor", TutorSchema);

module.exports = Tutors;
