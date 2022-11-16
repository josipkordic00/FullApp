const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"]);
const bcrypt = require('bcrypt');

//inserting user in db - create nav link
const saveController = (req,res) => {
    //user data
    let firstName = req.body.first_name;
    let lastName = req.body.last_name;
    let pw = req.body.password;
    let role = req.body.role;
    bcrypt.hash(pw, 10, function(err, hash) {
        db.users.insert({first_name:firstName,last_name:lastName,password:hash,role:role},(err,docs)=>{
            if(err){
                //error page
            }else{
                res.redirect("/admin")
            }
        })
    });
    
}
module.exports = saveController;