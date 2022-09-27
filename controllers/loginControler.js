const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"]);


const loginControler = (req,res)=>{
    //data req.body
    let name = req.body.name;
    let pw = req.body.password;
    db.users.find({
        first_name : name,
        password : pw
    }, (err,docs) => {
        if(err){
            console.log('greska');
            res.redirect("/");
        }else{
            if(docs.length === 1){
                //user found
                let user = docs[0];
                req.session.user = user;
                if(user.role == "admin"){
                    res.redirect("/admin")
                }else if(user.role == "secretary"){
                    res.redirect("/secretary")
                }else if(user.role == "doctor"){
                    res.redirect("/doctor")
                }
                else{
                    res.redirect("/");
                }
            }else{
                //incorrect data
                res.redirect("/")
            }
        }
    })
}

module.exports = loginControler;