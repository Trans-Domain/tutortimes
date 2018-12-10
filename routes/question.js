import test from "../controllers/quizzes";

export default router => {
  router.post("/add-question", test.question.add);
  router.delete("/delete-question", test.question.delete);
  router.get("/find-question", test.question.view);
  router.put("/edit-question", test.question.edit);
  router.get("/find-all-questions", test.question.findAllByQuiz);
};
