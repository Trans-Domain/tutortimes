import bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = newUser => {
  var promise = new Promise((resolve, reject) => {
    bcrypt
      .hash(newUser.password, saltRounds)
      .then(async hash => {
        newUser.password = hash;
        resolve(newUser);
      })
      .catch(err => reject(err));
  });

  return promise;
};

export default hashPassword;
