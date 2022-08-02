const mongojs = require("mongojs");
const db = mongojs("FullApp", ["appointments"]);


//showing all appointments in table - button Appointments
const doctorAppointmentsController = (req,res)=>{
    let name = req.params.name;
    let user = req.session.user;


    db.appointments.find({doctor : name},(err,appointments)=>{
        
        res.render("admin/doctorAppointments",{
            name: name,
            username: user.first_name,
            appointments:appointments,
            role: user.role
        })
    })
}

module.exports = doctorAppointmentsController;