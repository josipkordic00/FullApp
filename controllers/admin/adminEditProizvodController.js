const mongojs = require("mongojs");
const db = mongojs("FullApp", ["proizvodi"]);

const adminEditProizvodController = (req,res) => {
    let id = req.params.id;
    db.proizvodi.find({_id:mongojs.ObjectID(id)},(err,proizvod)=>{
        res.render("admin/adminEditProizvod",{
            name : proizvod[0].name,
            price: proizvod[0].price,
            id: proizvod[0]._id
        })
    })
}
module.exports = adminEditProizvodController;