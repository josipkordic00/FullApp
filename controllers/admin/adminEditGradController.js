const mongojs = require("mongojs");
const db = mongojs("FullApp", ["gradovi"]);

const adminEditFormController = (req,res) => {
    let id = req.params.id;
    db.gradovi.find({_id:mongojs.ObjectID(id)},(err,grad)=>{
        res.render("admin/adminEditGrad",{
            name : grad[0].name,
            zip: grad[0].zip,
            id: grad[0]._id
        })
    })
}
module.exports = adminEditFormController;