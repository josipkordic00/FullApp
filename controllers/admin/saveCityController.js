const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"], ["cities"]);

//inserting city in db - create nav link
const saveCityController = (req,res) => {
    //city data
    let name = req.body.name;
    let zip = req.body.zip;

    db.cities.insert({name:name,zip:zip},(err,docs)=>{
        if(err){
            //error page
        }else{
            res.redirect("/admin")
        }
    })
}
module.exports = saveCityController;