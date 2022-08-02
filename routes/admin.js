const express = require('express');
const router = express.Router();


router.use(checkAdmin);

router.get('/',require("../controllers/admin/adminController"))



//nav-link create
router.get("/create",(req,res)=>{
    res.render("admin/adminCreateForm");
})
router.get("/create_city",(req,res)=>{
    res.render("admin/createCity");
})
router.get("/create_product",(req,res)=>{
    res.render("admin/createProduct");
})

//delete
router.get("/delete/user/:userId", require("../controllers/admin/deleteUserController"));
router.get("/delete/city/:cityId", require("../controllers/admin/deleteCityController"));
router.get("/delete/product/:productId", require("../controllers/admin/deleteProductController.js"));


//insert db
router.post("/create/save",require("../controllers/admin/saveController"));
router.post("/create/city/save",require("../controllers/admin/saveCityController"));
router.post("/create/product/save",require("../controllers/admin/saveProductController"));

//edit
router.get("/edit/:id", require("../controllers/admin/adminEditFormController"));
router.get("/edit/city/:id", require("../controllers/admin/adminEditCityController"));
router.get("/edit/product/:id", require("../controllers/admin/adminEditProductController"));


//update db
router.post("/update/:id",require("../controllers/admin/updateController"));
router.post("/update/city/:id",require("../controllers/admin/updateCityController"));
router.post("/update/product/:id",require("../controllers/admin/updateProductController"));



//doctor
router.get("/doctor/appointments/:name",require("../controllers/admin/doctorAppointmentsController"))

//checking user role(admin)
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