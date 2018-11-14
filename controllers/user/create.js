const Organization = require("../../models/Organizations");

module.exports = {
  organization: function(req, res) {
    Organization.insertMany(req.body)
      .then(result => {
        res.json(result);
      })
      .catch(function(err) {
        throw err;
      });
  },
  tutor: function(req, res) {
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
  student: function(req, res) {
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
  }
};
