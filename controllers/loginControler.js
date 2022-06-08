const mongojs = require("mongojs");
const db = mongojs("FullApp", ["users"]);

const loginControler = (req,res)=>{
    //preuzeti podatke req.body
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
                //pronadjen korisnik
                let user = docs[0];
                req.session.user = user;
                if(user.role == "admin"){
                    res.redirect("/admin")
                }else if(user.role == "operater"){
                    res.redirect("/operater")
                }else if(user.role == "savjetnik"){
                    res.redirect("/savjetnik")
                }
                else{
                    res.redirect("/");
                }
            }else{
                //podaci netocni
                res.redirect("/")
            }
        }
    })
}

module.exports = loginControler;