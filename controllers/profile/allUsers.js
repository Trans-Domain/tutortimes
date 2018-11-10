const db = require("../../models");

module.exports = function(req,res){
    db.User.findAll({}).then(function(data){
        res.json(data);
    })    
};