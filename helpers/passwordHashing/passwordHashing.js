import bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = user => {
  return new Promise((resolve, reject) => {
    bcrypt
      .hash(user.password, saltRounds)
      .then(hash => {
        user.password = hash;
        resolve(user);
      })
      .catch(err => reject(err));
  });
};

export default hashPassword;
