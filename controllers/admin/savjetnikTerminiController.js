const mongojs = require("mongojs");
const db = mongojs("FullApp", ["termini"]);

const savjetnikTerminiController = (req,res)=>{
    let name = req.params.name;
    let user = req.session.user;


    db.termini.find({savjetnik : name},(err,termini)=>{
        console.log(termini);
        res.render("admin/savjetnikTermini",{
            name: name,
            termini:termini
        })
    })
}

module.exports = savjetnikTerminiController;