import mongoose from "mongoose";
const Schema = mongoose.Schema;

const OrganizationSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  address: { type: String, required: true },
  dateJoined: { type: Date, required: true },
  billingDate: { type: Date },
  logo: { type: Buffer },
  password: { type: String, required: true },
  tutors: [{ type: Schema.ObjectId, ref: "Tutors" }],
  students: [{ type: Schema.ObjectId, ref: "Students" }],
  quizzes: [{ type: Schema.ObjectId, ref: "Quizzes" }]
});

const Organizations = mongoose.model("Organizations", OrganizationSchema);

export default Organizations;
