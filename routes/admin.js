const express = require('express');
const router = express.Router();

router.use(checkAdmin);

router.get('/',require("../controllers/admin/adminController"))
router.get("/create",(req,res)=>{
    res.render("admin/adminCreateForm");
})
router.get("/edit/:id", require("../controllers/admin/adminEditFormController"));
router.get("/edit/grad/:id", require("../controllers/admin/adminEditGradController"));
router.get("/edit/proizvod/:id", require("../controllers/admin/adminEditProizvodController"));

router.get("/create_grad",(req,res)=>{
    res.render("admin/createGrad");
})
router.get("/create_proizvod",(req,res)=>{
    res.render("admin/createProizvod");
})

router.get("/delete/user/:userId", require("../controllers/admin/deleteUserController"));
router.get("/delete/grad/:gradId", require("../controllers/admin/deleteGradController"));
router.get("/delete/proizvod/:proizvodId", require("../controllers/admin/deleteProizvodController.js"));



router.post("/create/save",require("../controllers/admin/saveController"));
router.post("/create/grad/save",require("../controllers/admin/saveGradController"));
router.post("/create/proizvod/save",require("../controllers/admin/saveProizvodController"));
router.post("/update/:id",require("../controllers/admin/updateController"));
router.post("/update/grad/:id",require("../controllers/admin/updateGradController"));
router.post("/update/proizvod/:id",require("../controllers/admin/updateProizvodController"));



//savjetnik
router.get("/savjetnik/termini/:name",require("../controllers/admin/savjetnikTerminiController"))

function checkAdmin(req,res,next){
    let user = req.session.user;
    if(user){
        if(user.role == "admin"){
            next();
        }else{
            res.redirect("/")
        }
    }else{
        res.redirect("/")
    }
}
module.exports = router;