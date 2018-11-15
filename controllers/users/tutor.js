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
  },
  findOne: function(req, res) {
    Organization.find({ "tutors.email": req.params.email })
      .then(result => {
        let tutor;
        for (let i = 0; i < result[0].tutors.length; i++) {
          if (result[0].tutors[i].email === req.params.email) {
            tutor = result[0].tutors[i];
            res.json(tutor);
            break;
          }
        }
      })
      .catch(err => res.json(err));
  }
};
