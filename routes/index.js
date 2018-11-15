const router = require("express").Router();
const user = require("../controllers/users");

module.exports = router
  // Organization
  .post("/create-organization", user.organization.create)
  .get("/find-organization/:name", user.organization.find)
  .get("/find-all-organizations", user.organization.findAll)
  .put("/update-organization", user.organization.update)
  .delete("/delete-organization", user.organization.delete)
  // Tutor
  .post("/create-tutor", user.tutor.create)
  .get("/find-all-tutors/:organization", user.tutor.findAll)
  // Student
  .post("/create-student", user.student.create);
