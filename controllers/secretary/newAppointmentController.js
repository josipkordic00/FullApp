const mongojs = require("mongojs");
const db = mongojs("FullApp", ["appointments"]);

//db insert data from appointments form
const newAppointmentController = (req,res)=>{
    let user = req.session.user
    db.appointments.insert({
        name_patient : req.body.name_patient,
        lastname_patient : req.body.lastname_patient,
        years_patient : req.body.years_patient,
        name_spouse : req.body.name_spouse,
        lastname_spouse : req.body.lastname_spouse,
        years_spouse : req.body.years_spouse,
        mobile_phone : req.body.mobile_phone,
        adress : req.body.adress,
        appointment_date : req.body.appointment_date,
        appointment_time : req.body.appointment_time,
        doctor : req.body.doctor,
        city : req.body.city,
        children : req.body.children,
        operations : req.body.operation,
        therapy : req.body.therapy,
        remark : req.body.remark,
        urgent : req.body.urgent,
        active : true,
        billing : 0,
        ulaz : false,
        product : "",
        secretary : user.first_name + " " + user.last_name,
        role: user.role
    },(err,docs)=>{
        res.redirect("/secretary")
    })
}
module.exports = newAppointmentController;