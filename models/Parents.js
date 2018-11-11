const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const ParentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  student: [
    {
      studentId: { type: ObjectId, ref: "Student" },
      tutors: [
        {
          subject: String,
          tutorId: { type: ObjectId, ref: "Tutor" }
        }
      ]
    }
  ]
});

const Parents = mongoose.model("Parent", ParentSchema);

module.exports = Parents;
