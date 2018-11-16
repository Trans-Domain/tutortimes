import Organization from "../../models/Organizations";

export default {
  create: (req, res) => {
    let name = req.body.name;
    let studentData = req.body.studentData;
    Organization.findOneAndUpdate(
      { name: name },
      { $push: { students: studentData } }
    )
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        throw err;
      });
  },
  findAll: (req, res) => {
    let name = req.params.organization;
    Organization.findOne({ name: name })
      .then(result => res.json(result.students))
      .catch(err => res.json(err));
  },
  findOne: (req, res) => {
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
