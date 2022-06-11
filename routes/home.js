const express = require('express');
const router = express.Router();

//login forma
router.get("/", (req,res)=>{
    res.render("index");
});

module.exports = router;