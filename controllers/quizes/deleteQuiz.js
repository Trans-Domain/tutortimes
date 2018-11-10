const db = require("../../models");
const titleCase = require("../../helpers/titleCase/titleCase");

module.exports = function(req, res) {
  let title = titleCase(req.params.title);
  db.Quiz.destroy({
    where: {
      title
    }
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
};
