const mongojs = require("mongojs");
const db = mongojs("FullApp", ["termini"]);
//radi do ovde
const zavrseniTerminiController = (req,res)=>{
    let user = req.session.user;
    db.termini.find({active:false},(err,termin)=>{
        res.render("savjetnik/zavrseniTermini", {
            name : user.first_name,
            termin:termin[0]
        })
    })
}
module.exports = zavrseniTerminiController;