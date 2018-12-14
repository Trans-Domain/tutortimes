import user from "../controllers/users";

export default router => {
  router.post("/create-tutor", user.tutor.create);
  router.get("/find-all-tutors", user.tutor.findAll);
  router.get("/find-one-tutor/:id", user.tutor.findOne);
  router.put("/update-tutor-info", user.tutor.update);
  router.delete("/delete-tutor", user.tutor.delete);
  router.get("/tutor-login", user.tutor.login);
};
