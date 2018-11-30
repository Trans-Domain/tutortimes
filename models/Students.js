import mongoose from "mongoose";
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  fullname: String,
  password: String,
  email: String,
  photo: Buffer,
  online: Boolean,
  bio: String,
  goal: String,
  phone: String,
  grade: String,
  score: Number,
  reviews: [
    {
      date: Date,
      body: String,
      tutor: String
    }
  ],
  parent: [{ type: Schema.ObjectId, ref: "Parents" }],
  tutors: [{ type: Schema.ObjectId, ref: "Tutors" }],
  organization: { type: Schema.ObjectId, ref: "Organizations" }
});

const Students = mongoose.model("Students", StudentSchema);
export default Students;
