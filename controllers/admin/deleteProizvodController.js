const mongojs = require("mongojs");
const db = mongojs("FullApp", ["proizvodi"]);

//button delete proizvod
const deleteProizvodController = (req,res) => {
    //preuzeti id
    let proizvodId = req.params.proizvodId;
    db.proizvodi.remove({ _id: mongojs.ObjectID(proizvodId)},(err,docs)=>{
        res.send("ok");
    })

}

module.exports = deleteProizvodController;