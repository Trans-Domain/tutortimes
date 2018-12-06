import bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = newUser => {
  return new Promise((resolve, reject) => {
    bcrypt
      .hash(newUser.password, saltRounds)
      .then(hash => {
        newUser.password = hash;
        resolve(newUser);
      })
      .catch(err => reject(err));
  });
};

export default hashPassword;
