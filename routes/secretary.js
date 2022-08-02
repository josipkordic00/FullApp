const express = require('express');
const router = express.Router();

router.use(checkSecretary)


router.get("/",require("../controllers/secretary/secretaryController"))

//db insert appointments data
router.post("/newAppointment", require("../controllers/secretary/newAppointmentController"))

module.exports = router;

//checking user role(secretary)
function checkSecretary(req,res,next){
    let user = req.session.user;
    if(user){
        if(user.role == "secretary"){
            next();
        }else{
            res.redirect("/")
        }
    }else{
        res.redirect("/")
    }
}