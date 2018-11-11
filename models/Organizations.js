const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const OrganizationSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  dateJoined: { type: Date, required: true },
  billingDate: { type: Date },
  logo: { type: Buffer },
  tutors: [
    {
      tutorId: { type: ObjectId, ref: "Tutor" }
    }
  ],
  students: [
    {
      studentId: { type: ObjectId, ref: "Tutor" }
    }
  ]
});

const Organizations = mongoose.model("Organizations", OrganizationSchema);

module.exports = Organizations;
