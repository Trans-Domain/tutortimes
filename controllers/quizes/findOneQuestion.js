const db = require("../../models");
const titleCase = require("../../helpers/titleCase/titleCase");

module.exports = function(req, res) {
  let title = titleCase(req.params.title);
  let question_number = req.params.qNum;

  db.Quiz.find({
    where: {
      title,
      question_number
    }
  })
    .then(result => {
      res.json(result);
    })
    .catch(function(err) {
      throw err;
    });
};
