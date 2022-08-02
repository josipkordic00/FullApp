const mongojs = require("mongojs");
const db = mongojs("FullApp",["products"]);

//db update after edit form
const updateProductController = (req,res) =>{
    let id = req.params.id;
    db.products.update({_id:mongojs.ObjectID(id)},{
        $set : {
            name : req.body.name,
            price : req.body.price,
        }
    },(err,docs)=>{
        res.redirect("/admin")
    })
}




module.exports = updateProductController