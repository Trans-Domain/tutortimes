const db = require("../../models");
const titleCase = require("../../helpers/titleCase/titleCase");
const filterQuizQuestions = require("../../helpers/filterQuizQuestions/filterQuizQuestions");

module.exports = function(req, res) {
  // convert simple-math to Simple Math
  let title = titleCase(req.params.title);

  db.Quiz.findAll({
    where: {
      title
    }
  })
    .then(result => {
      res.json(filterQuizQuestions(result));
    })
    .catch(function(err) {
      throw err;
    });
};
