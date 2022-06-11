const mongojs = require("mongojs");
const db = mongojs("FullApp", ["termini"]);


//prikazivanje svih termina u tablici - button termini
const savjetnikTerminiController = (req,res)=>{
    let name = req.params.name;
    let user = req.session.user;


    db.termini.find({savjetnik : name},(err,termini)=>{
        
        res.render("admin/savjetnikTermini",{
            name: name,
            username: user.first_name,
            termini:termini,
            role: user.role
        })
    })
}

module.exports = savjetnikTerminiController;