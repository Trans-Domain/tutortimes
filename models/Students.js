const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  id: String,
  fullname: String,
  password: String,
  email: String,
  photo: Buffer,
  online: Boolean,
  bio: String,
  goal: String,
  phone: String,
  grade: Number,
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
});

module.exports = StudentSchema;
