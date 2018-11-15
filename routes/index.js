const router = require("express").Router();
const user = require("../controllers/users");

module.exports = router
  // Users
  .post("/create-organization", user.organization.create)
  .get("/find-organization/:name", user.organization.find)
  .put("/update-organization", user.organization.update)
  .post("/create-tutor", user.tutor.create)
  .post("/create-student", user.student.create);
