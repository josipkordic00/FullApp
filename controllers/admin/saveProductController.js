const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"], ["products"]);

//inserting product in db - crete nav link
const saveProductController = (req,res) => {
    //product data
    let name = req.body.name;
    let price = req.body.price;

    db.products.insert({name:name,price:price},(err,docs)=>{
        if(err){
            //error page
        }else{
            res.redirect("/admin")
        }
    })
}
module.exports = saveProductController;