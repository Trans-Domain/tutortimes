const Organization = require("../../models/Organizations");

module.exports = {
  create: function(req, res) {
    Organization.findOne({ name: req.body.name })
      .then(result => {
        result === null
          ? Organization.insertMany(req.body)
              .then(result => {
                res.json(result);
              })
              .catch(function(err) {
                throw err;
              })
          : res.json({ error: "organization already exists" });
      })
      .catch(err => {
        throw err;
      });
  },
  find: function(req, res) {
    Organization.findOne({ name: req.params.name })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        throw err;
      });
  },
  update: function(req, res) {
    let name = req.body.name;
    let changes = req.body.changes;
    Organization.updateOne({ name }, changes)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  findAll: function(req, res) {
    Organization.find({})
      .then(result => res.json(result))
      .catch(err => res.json(err));
  }
};
