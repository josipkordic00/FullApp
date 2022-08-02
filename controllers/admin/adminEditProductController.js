const mongojs = require("mongojs");
const db = mongojs("FullApp", ["products"]);

//button edit product
const adminEditProductController = (req,res) => {
    let id = req.params.id;
    db.products.find({_id:mongojs.ObjectID(id)},(err,product)=>{
        res.render("admin/adminEditProduct",{
            name : product[0].name,
            price: product[0].price,
            id: product[0]._id
        })
    })
}
module.exports = adminEditProductController;