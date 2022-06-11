const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"], ["gradovi"], ["proizvodi"], ["termini"]);

//prikazivanje index stranice od savjetnika
const savjetnikController = (req,res)=>{
    
    let user = req.session.user;
    db.termini.find({savjetnik: user.first_name + " " + user.last_name},(err,termini)=>{
        res.render("savjetnik/index",{
            name: user.first_name,
            role: user.role,
            termini: termini,
            
        })
    })
   
}
module.exports = savjetnikController;