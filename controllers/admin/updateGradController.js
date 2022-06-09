const mongojs = require("mongojs");
const db = mongojs("FullApp",["gradovi"]);

const updateController = (req,res) =>{
    let id = req.params.id;
    db.gradovi.update({_id:mongojs.ObjectID(id)},{
        $set : {
            name : req.body.name,
            zip : req.body.zip,
        }
    },(err,docs)=>{
        res.redirect("/admin")
    })
}




module.exports = updateController