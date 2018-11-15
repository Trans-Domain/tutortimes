const Organization = require("../../models/Organizations");

module.exports = {
  create: function(req, res) {
    let name = req.body.name;
    let studentData = req.body.studentData;
    Organization.findOneAndUpdate(
      { name: name },
      { $push: { students: studentData } }
    )
      .then(result => {
        res.json(result);
      })
      .catch(function(err) {
        throw err;
      });
  },
  findAll: function(req, res) {
    let name = req.params.organization;
    Organization.findOne({ name: name })
      .then(result => res.json(result.students))
      .catch(err => res.json(err));
  }
};
