const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"], ["cities"], ["products"]);

//showing data from db on secretary form
const secretaryController = (req,res)=>{
    let user = req.session.user;
    db.cities.find({},(err,cities)=>{
        db.users.find({role:"doctor"},(err,doctors)=>{
            db.appointments.find({secretary: user.first_name + " " + user.last_name},(err,appointments)=>{
                res.render("secretary/index",{
                    name:user.first_name,
                    doctors : doctors,
                    cities : cities,
                    appointmentCount : appointments.length,
                    role: user.role
                });

            })
        })
    })
    
}

module.exports = secretaryController;