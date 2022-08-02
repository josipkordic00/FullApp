const mongojs = require("mongojs");
const db = mongojs("FullApp",["users"]);

//db update after edit form
const updateController = (req,res) =>{
    let id = req.params.id;
    db.users.update({_id:mongojs.ObjectID(id)},{
        $set : {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            password : req.body.password,
        }
    },(err,docs)=>{
        res.redirect("/admin")
    })
}




module.exports = updateController