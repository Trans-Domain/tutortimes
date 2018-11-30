import Students from "../../models/Students";

export default {
  create: (req, res) => {
    let studentData = req.body.studentData;
    Students.findOne({ fullname: studentData.fullname })
      .then(result => {
        console.log(result);
        result === null
          ? Students.insertMany(studentData)
              .then(result => {
                res.json(result);
              })
              .catch(function(err) {
                throw err;
              })
          : res.json({ error: "Student already exists" });
      })
      .catch(err => {
        throw err;
      });
  },
  findAll: (req, res) => {
    Students.find({ belongsTo: req.body.orgId })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  findOne: (req, res) => {
    Students.find({ _id: req.params.id })
      .then(result => res.json(result))
      .catch(err => res.json(err.name));
  },
  update: (req, res) => {
    let id = req.body.id;
    let updates = getInfoUpdates(req.body.updates, req.body.type);

    Organization.update({ "students._id": id }, { $set: updates })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  delete: (req, res) => {
    let organizationName = req.body.name;
    let id = req.body.id;

    Organization.update(
      { name: organizationName },
      { $pull: { students: { _id: id } } }
    )
      .then(result => res.json(result))
      .catch(err => res.json(err));
  }
};
