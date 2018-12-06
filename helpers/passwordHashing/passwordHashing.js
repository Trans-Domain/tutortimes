import bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = newUser => {
  bcrypt
    .hash(newUser.password, saltRounds)
    .then(async hash => {
      newUser.password = await hash;
      return newUser;
    })
    .catch(err => console.log(err));
};

// hashPassword({ password: "thisisapassword" });

export default hashPassword;
