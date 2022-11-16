const mongojs = require("mongojs");
const db = mongojs("FullApp",["users"]);
const bcrypt = require("bcrypt");

//db update after edit form
const updateController = (req,res) =>{
    let id = req.params.id;
    let pw = req.body.password
    bcrypt.hash(pw, 10, function(err, hash) {
    db.users.update({_id:mongojs.ObjectID(id)},{
        $set : {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            password : hash,
        }
    },(err,docs)=>{
        res.redirect("/admin")
    })
});
}




module.exports = updateController