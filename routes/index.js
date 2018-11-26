const router = require("express").Router();
import user from "../controllers/users";
import test from "../controllers/quizzes";

export default router
  // For Admin
  .post("/create-organization", user.organization.create)
  .get("/find-organization/:name", user.organization.find)
  .get("/find-all-organizations", user.organization.findAll)
  .put("/update-organization", user.organization.update)
  .delete("/delete-organization", user.organization.delete)
  // For Organization
  .post("/create-tutor", user.tutor.create)
  .get("/find-all-tutors/:organization", user.tutor.findAll)
  .get("/find-one-tutor/:email", user.tutor.findOne)
  .put("/update-tutor-info", user.tutor.update)
  .delete("/delete-tutor", user.tutor.delete)
  .delete("/delete-student", user.student.delete)
  .post("/create-student", user.student.create)
  .get("/find-all-students/:organization", user.student.findAll)
  .get("/find-one-student/:email", user.student.findOne)
  .put("/update-student-info", user.student.update)
  // For Quizzes
  .post("/create-quiz", test.quiz.create)
  .put("/update-quiz", test.quiz.update)
  .get("/find-all-quizzes/:organization", test.quiz.findAll)
  .get("/find-tutors-quizzes/:organization/:email", test.quiz.viewTutors)
  .get("/find-one-quiz/:organization/:quizId", test.quiz.findOne)
  .delete("/delete-quiz/:organization/:quizId", test.quiz.delete);
