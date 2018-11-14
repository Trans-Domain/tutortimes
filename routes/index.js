const router = require("express").Router();
const user = require("../controllers/users");

module.exports = router
  // Users
  .post("/create-organization", user.organization.create)
  .post("/create-tutor", user.tutor.create)
  .post("/create-student", user.student.create);
