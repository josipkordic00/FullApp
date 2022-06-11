const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"]);

//button edit user
const adminEditFormController = (req,res) => {
    let id = req.params.id;
    db.users.find({_id:mongojs.ObjectID(id)},(err,user)=>{
        res.render("admin/adminEditForm",{
            //funkcija vraca podatke u array-u
            name : user[0].first_name,
            lastname: user[0].last_name,
            password: user[0].password,
            role: user[0].role,
            id: user[0]._id
        })
    })
}
module.exports = adminEditFormController;