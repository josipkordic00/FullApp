const express = require('express');
const router = express.Router();

//setting routes
router.use("/", require("./home"));
router.use("/login", require("../controllers/loginControler"))
router.use("/logout", require("./logout"))
router.use("/admin", require("./admin"))
router.use("/secretary", require("./secretary"))
router.use("/doctor", require("./doctor"))

module.exports = router;