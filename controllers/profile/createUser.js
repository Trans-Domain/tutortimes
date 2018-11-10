const db = require("../../models");

module.exports = function(req,res){
   // placeholder before using req.body.new_user
  let new_user = req.body;
  
  db.User.create({
    google_id: new_user.google_id,
    firstName: new_user.firstName, 
    lastName: new_user.lastName, 
    middleName: new_user.middleName, 
    email: new_user.email,
    photoURL: new_user.photoURL, 
    isTutor: new_user.isTutor, 
    bio: new_user.bio,
    goal: new_user.goal, 
    motto: new_user.motto, 
    phoneNumber: new_user.phoneNumber,
    score: 100,
    grade: new_user.grade
  }).then(result => {
    res.json({redirect: "/signin", user_data : result.dataValues});
  }).catch(function(err){
    throw err;
  }); 
};