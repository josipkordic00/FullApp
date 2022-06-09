const mongojs = require("mongojs");
const db = mongojs("FullApp",["proizvodi"]);

const updateProizvodController = (req,res) =>{
    let id = req.params.id;
    db.proizvodi.update({_id:mongojs.ObjectID(id)},{
        $set : {
            name : req.body.name,
            price : req.body.price,
        }
    },(err,docs)=>{
        res.redirect("/admin")
    })
}




module.exports = updateProizvodController