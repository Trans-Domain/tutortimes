const router = require("express").Router();

const user = require("../controllers/user");
// // const quiz = require("../controllers/quizes");

module.exports = router
  // user routes
  // Create
  .post("/create-organization", user.create.organization);
//   .get("/all-users", profile.all)
//   .get("/user-check", profile.findUser)

//   // quiz routes
//   .post("/create-question", quiz.createQuestion)
//   .get("/all-quizzes", quiz.findAllQuizzes)
//   .post("/edit-question/:title/:qNum", quiz.editQuestion)
//   .get("/find-question/:title/:qNum", quiz.findOneQuestion)
//   // route for editing quizzes
//   .get("/find-one-quiz/:title", quiz.findOneQuiz)
//   // route for deleting questions
//   .post("/delete-question/:title/:qNum", quiz.deleteQuestion)
//   .post("/delete-quiz/:title", quiz.deleteQuiz);
