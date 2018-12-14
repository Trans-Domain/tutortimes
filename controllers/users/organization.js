import Organization from "../../models/Organizations";
import hashPassword from "../../helpers/passwordHashing/passwordHashing";
import bcrypt from "bcrypt";

export default {
  create: (req, res) => {
    let orgDetails = req.body;
    Organization.findOne({ name: orgDetails.name })
      .then(result => {
        orgDetails;
        result === null
          ? hashPassword(orgDetails)
              .then(hashedOrg => {
                Organization.insertMany(hashedOrg)
                  .then(() => {
                    res.json({
                      message: "successfully written organization to db!"
                    });
                  })
                  .catch(function(err) {
                    throw err;
                  });
              })
              .catch(err => res.json(err))
          : res.json({ error: "organization already exists" });
      })
      .catch(err => {
        throw err;
      });
  },
  find: (req, res) => {
    Organization.findOne({ name: req.params.name })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        throw err;
      });
  },
  update: (req, res) => {
    let name = req.body.name;
    let changes = req.body.changes;
    Organization.updateOne({ name }, changes)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  findAll: (req, res) => {
    Organization.find({})
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  delete: (req, res) => {
    let name = req.body.name;
    Organization.deleteOne({ name })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
  login: (req, res) => {
    /** @description : req.body has properties: email, password */
    let user = req.body;
    Organization.findOne({ email: user.email })
      .then(result => {
        bcrypt
          .compare(user.password, result.password)
          .then(valid => {
            valid
              ? res.json({ status: "correct password" })
              : res.json({ status: "wrong password" });
          })
          .catch(err => {
            res.json(err);
          });
      })
      .catch(err => {
        throw err;
      });
  }
};
