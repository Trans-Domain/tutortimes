import user from "../controllers/users";

export default router => {
  router.post("/create-student", user.student.create);
  router.get("/find-all-students", user.student.findAll);
  router.get("/find-one-student/:id", user.student.findOne);
  router.put("/update-student-info", user.student.update);
  router.delete("/delete-student", user.student.delete);
};
