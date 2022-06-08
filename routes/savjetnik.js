const express = require('express');
const router = express.Router();

router.use(checkSavjetnik)

router.get("/:id", require("../controllers/savjetnik/showTerminController"))
router.get("/",require("../controllers/savjetnik/savjetnikController"))
router.get("/:name",require("../controllers/savjetnik/zavrseniTerminiController"))


router.post("/izvjestaj/:id", require("../controllers/savjetnik/izvjestajController"))

function checkSavjetnik(req,res,next){
    let user = req.session.user;
    if(user){
        if(user.role == "savjetnik"){
            next();
        }else{
            res.redirect("/")
        }
    }else{
        res.redirect("/")
    }
}

module.exports = router;