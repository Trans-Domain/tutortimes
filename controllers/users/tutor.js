import Organization from "../../models/Organizations";
import getInfoUpdates from "../../helpers/getInfoUpdates/getInfoUpdates";

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
    let updates = getInfoUpdates(req.body.updates, req.body.type);

    Organization.update(
      { "tutors._id": id },
      {
        $set: updates
      }
    )
      .then(result => res.json(result))
      .catch(err => res.json(err));
  }
};
