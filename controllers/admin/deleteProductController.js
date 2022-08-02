const mongojs = require("mongojs");
const db = mongojs("FullApp", ["products"]);

//button delete product
const deleteProductController = (req,res) => {
    //product id
    let productId = req.params.productId;
    db.products.remove({ _id: mongojs.ObjectID(productId)},(err,docs)=>{
        res.send("ok");
    })

}

module.exports = deleteProductController;