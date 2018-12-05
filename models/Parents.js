import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ParentSchema = new Schema({
  fullname: String,
  email: String,
  password: String,
  students: [{ type: Schema.ObjectId, ref: "Students" }]
});

const Parents = mongoose.model("Parents", ParentSchema);
export default Parents;
