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
  },
  findOne: function(req, res) {
    Organization.find({ "students.email": req.params.email })
      .then(result => {
        // this can be a helper?
        let student;
        for (let i = 0; i < result[0].students.length; i++) {
          if (result[0].students[i].email === req.params.email) {
            student = result[0].students[i];
            res.json(student);
            break;
          }
        }
      })
      .catch(err => res.json(err));
  }
};
