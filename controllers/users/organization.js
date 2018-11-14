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
  }
};
