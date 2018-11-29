import mongoose from "mongoose";
const Schema = mongoose.Schema();

const TutorSchema = new Schema({
  id: String,
  fullname: String,
  password: String,
  email: String,
  photo: Buffer,
  online: Boolean,
  bio: String,
  phone: String
});

const Tutors = mongoose.model("Tutors", TutorSchema);
export default Tutors;
