const Organization = require("../../models/Organizations");

module.exports = {
  create: function(req, res) {
    let name = req.body.name;
    let tutorData = req.body.tutorData;
    Organization.findOneAndUpdate(
      { name: name },
      { $push: { tutors: tutorData } }
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
      .then(result => res.json(result.tutors))
      .catch(err => res.json(err));
  }
};
