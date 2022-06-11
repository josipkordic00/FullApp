const express = require('express');
const router = express.Router();

router.use(checkOperater)


router.get("/",require("../controllers/operater/operaterController"))

//insert podataka o terminu u bazu
router.post("/noviTermin", require("../controllers/operater/noviTerminController"))

module.exports = router;

//provjera je li user logiran kao operater
function checkOperater(req,res,next){
    let user = req.session.user;
    if(user){
        if(user.role == "operater"){
            next();
        }else{
            res.redirect("/")
        }
    }else{
        res.redirect("/")
    }
}