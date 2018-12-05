import user from "../controllers/users";

export default router => {
  router.post("/create-organization", user.organization.create);
  router.get("/find-organization/:name", user.organization.find);
  router.get("/find-all-organizations", user.organization.findAll);
  router.put("/update-organization", user.organization.update);
  router.delete("/delete-organization", user.organization.delete);
};
