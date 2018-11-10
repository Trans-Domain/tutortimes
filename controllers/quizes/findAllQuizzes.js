const db = require("../../models");
const filterQuizStats = require("../../helpers/filterQuizStats/filterQuizStats");

module.exports = function(req, res) {
  db.Quiz.findAll({})
    .then(result => {
      res.json(filterQuizStats(result));
    })
    .catch(function(err) {
      res.json(err);
    });
};
