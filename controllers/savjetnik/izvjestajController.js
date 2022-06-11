const mongojs = require("mongojs");
const db = mongojs("FullApp",["termini"]);

//update baze na status termina -button zavrsi termin
const izvjestajController = (req,res) =>{
    let id = req.params.id;
    db.termini.update({_id:mongojs.ObjectID(id)},{
        $set : {
            active : false
        }
    },(err,docs)=>{
        res.redirect("/savjetnik")
    })
}




module.exports = izvjestajController