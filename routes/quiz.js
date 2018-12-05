import test from "../controllers/quizzes";

export default router => {
  router.post("/create-quiz", test.quiz.create);
  router.put("/update-quiz", test.quiz.update);
  router.get("/find-all-quizzes", test.quiz.findAll);
  router.get("/find-tutors-quizzes", test.quiz.viewTutors);
  router.get("/find-one-quiz", test.quiz.findOne);
  router.delete("/delete-quiz", test.quiz.delete);
};
