const express = require('express');
const router = express.Router();

//login form
router.get("/", (req,res)=>{
    res.render("index");
});

module.exports = router;