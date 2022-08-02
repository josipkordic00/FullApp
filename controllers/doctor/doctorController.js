const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"], ["cities"], ["products"], ["appointments"]);

//showing doctor index page
const doctorController = (req,res)=>{
    
    let user = req.session.user;
    db.appointments.find({doctor: user.first_name + " " + user.last_name},(err,appointments)=>{
        res.render("doctor/index",{
            name: user.first_name,
            role: user.role,
            appointments: appointments,
            
        })
    })
   
}
module.exports = doctorController;