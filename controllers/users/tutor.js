import Organization from "../../models/Organizations";

export default {
  create: (req, res) => {
    let name = req.body.name;
    let tutorData = req.body.tutorData;
    Organization.findOneAndUpdate(
      { name: name },
      { $push: { tutors: tutorData } }
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
      .then(result => res.json(result.tutors))
      .catch(err => res.json(err));
  },
  findOne: (req, res) => {
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
  },
  update: (req, res) => {
    let id = req.body.id;
    let updates = req.body.update; // get the body of changes, update only those in the tutor section and create an object that is returned in the format we want.
    Organization.update(
      { "tutors._id": id },
      {
        $set: {
          // need to figure out how to make this more flexible
          "tutors.$.bio": "Teaching is fun.... sometimes"
        }
      }
    )
      .then(result => res.json(result))
      .catch(err => res.json(err));
  }
};
