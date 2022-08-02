const mongojs = require("mongojs");
const db = mongojs("FullApp",["appointments"]);

//db update on appointment status -button complete appointment
const reportController = (req,res) =>{
    let id = req.params.id;
    db.appointments.update({_id:mongojs.ObjectID(id)},{
        $set : {
            active : false
        }
    },(err,docs)=>{
        res.redirect("/doctor")
    })
}




module.exports = reportController