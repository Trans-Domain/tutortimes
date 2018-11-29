import mongoose from "mongoose";
const Schema = mongoose.Schema();

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
  parent: [
    {
      fullname: String,
      email: String,
      password: String
    }
  ]
});

const Students = mongoose.model("Students", StudentSchema);
export default Students;
