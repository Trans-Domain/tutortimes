/* 
Controllers include:
    - search users - READ (This could evolve depending on what info we want to display)
    - create new user if they don't exist in the database - CREATE
    - update profile - UPDATE
    - delete account - DELETE
*/

// const allUsers = require("./allUsers");
// const findUser = require("./findUser");
const createUser = require("./createUser");

module.exports = {
  createUser
};
