const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"], ["proizvodi"]);

const saveProizvodController = (req,res) => {
    //preuzeti podatke
    let name = req.body.name;
    let price = req.body.price;

    db.proizvodi.insert({name:name,price:price},(err,docs)=>{
        if(err){
            //error page
        }else{
            res.redirect("/admin")
        }
    })
}
module.exports = saveProizvodController;