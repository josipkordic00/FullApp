const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"]);

//button delete user
const deleteUserController = (req,res) => {
    //preuzeti id
    let userId = req.params.userId;
    db.users.remove({ _id: mongojs.ObjectID(userId)},(err,docs)=>{
        res.send("ok");
    })

}

module.exports = deleteUserController;