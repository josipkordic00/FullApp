const mongojs = require("mongojs");
const db = mongojs("FullApp", ["appointments"]);

//showing appointment on click - /doctor
const showAppointmentController = (req,res)=>{
    let user = req.session.user;
    let id = req.params.id;

    db.appointments.find({_id:mongojs.ObjectID(id)},(err,appointment)=>{
        res.render("doctor/showAppointment", {
            name : user.first_name,
            appointment: appointment[0],
            role: user.role
        })
    })

}
module.exports = showAppointmentController;