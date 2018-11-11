const Student = require("../../models/Students");

module.exports = {
  student: function(req, res) {
    Student.insertMany(req.body)
      .then(result => {
        res.json(result);
      })
      .catch(function(err) {
        throw err;
      });
  }
};
