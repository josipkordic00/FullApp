const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"], ["gradovi"]);

//insert grada u bazu - kreiraj nav link
const saveGradController = (req,res) => {
    //preuzeti podatke
    let name = req.body.name;
    let zip = req.body.zip;

    db.gradovi.insert({name:name,zip:zip},(err,docs)=>{
        if(err){
            //error page
        }else{
            res.redirect("/admin")
        }
    })
}
module.exports = saveGradController;