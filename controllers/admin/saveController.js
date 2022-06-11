const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"]);

//insert korisnika u bazu - kreiraj nav link
const saveController = (req,res) => {
    //preuzeti podatke
    let firstName = req.body.first_name;
    let lastName = req.body.last_name;
    let pw = req.body.password;
    let role = req.body.role;

    db.users.insert({first_name:firstName,last_name:lastName,password:pw,role:role},(err,docs)=>{
        if(err){
            //error page
        }else{
            res.redirect("/admin")
        }
    })
}
module.exports = saveController;