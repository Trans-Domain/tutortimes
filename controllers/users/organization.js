const Organization = require("../../models/Organizations");

module.exports = {
  create: function(req, res) {
    Organization.insertMany(req.body)
      .then(result => {
        res.json(result);
      })
      .catch(function(err) {
        throw err;
      });
  },
  find: function(req, res) {
    console.log("entered route");
    Organization.findOne({ name: req.params.name })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        throw err;
      });
  }
};
