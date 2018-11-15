const router = require("express").Router();
const user = require("../controllers/users");

module.exports = router
  // For Admin
  .post("/create-organization", user.organization.create)
  .get("/find-organization/:name", user.organization.find)
  .get("/find-all-organizations", user.organization.findAll)
  .put("/update-organization", user.organization.update)
  .delete("/delete-organization", user.organization.delete)
  // For Organization
  .post("/create-tutor", user.tutor.create)
  .get("/find-all-tutors/:organization", user.tutor.findAll)
  .get("/find-one-tutor/:name", user.tutor.findOne)

  // For Tutors
  .get("/find-all-students/:organization", user.student.findAll)
  .post("/create-student", user.student.create);
