const mongojs = require("mongojs");
const db = mongojs("FullApp", ["cities"]);

//button delete city
const deleteCityController = (req,res) => {
    //city id
    let cityId = req.params.cityId;
    db.cities.remove({ _id: mongojs.ObjectID(cityId)},(err,docs)=>{
        res.send("ok");
    })

}

module.exports = deleteCityController;