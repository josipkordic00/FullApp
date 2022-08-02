const express = require('express');
const router = express.Router();

router.use(checkDoctor)

router.get("/:id", require("../controllers/doctor/showAppointmentController"))
router.get("/",require("../controllers/doctor/doctorController"))

//db update appointments
router.post("/report/:id", require("../controllers/doctor/reportController"))

//checking user role(doctor)
function checkDoctor(req,res,next){
    let user = req.session.user;
    if(user){
        if(user.role == "doctor"){
            next();
        }else{
            res.redirect("/")
        }
    }else{
        res.redirect("/")
    }
}

module.exports = router;