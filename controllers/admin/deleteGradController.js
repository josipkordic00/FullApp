const mongojs = require("mongojs");
const db = mongojs("FullApp", ["gradovi"]);

//button delete grad
const deleteGradController = (req,res) => {
    //preuzeti id
    let gradId = req.params.gradId;
    db.gradovi.remove({ _id: mongojs.ObjectID(gradId)},(err,docs)=>{
        res.send("ok");
    })

}

module.exports = deleteGradController;