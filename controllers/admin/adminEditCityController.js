const mongojs = require("mongojs");
const db = mongojs("FullApp", ["cities"]);

//button edit city
const adminEditCityController = (req,res) => {
    let id = req.params.id;
    db.cities.find({_id:mongojs.ObjectID(id)},(err,city)=>{
        res.render("admin/adminEditCity",{
            name : city[0].name,
            zip: city[0].zip,
            id: city[0]._id
        })
    })
}
module.exports = adminEditCityController;