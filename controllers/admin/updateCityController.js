const mongojs = require("mongojs");
const db = mongojs("FullApp",["cities"]);

//db update after edit form
const updateController = (req,res) =>{
    let id = req.params.id;
    db.cities.update({_id:mongojs.ObjectID(id)},{
        $set : {
            name : req.body.name,
            zip : req.body.zip,
        }
    },(err,docs)=>{
        res.redirect("/admin")
    })
}




module.exports = updateController