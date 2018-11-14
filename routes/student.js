const router = require("express").Router();

const user = require("../controllers/user");

module.exports = router.post("/create-student", user.student.create);
